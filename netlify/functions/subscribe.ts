import type { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!,
);

const ML_API_URL = process.env.ML_API_URL!;
const ML_API_KEY = process.env.ML_API_KEY!;
const ML_GROUP_ID = process.env.ML_GROUP_ID;

type Body = {
  email?: string;
  source?: string;
  variant?: string;
  locale?: string;
  tags?: string[];
};

function simpleClientIp(
  headers: Record<string, string | string[] | undefined>,
) {
  const lower = (k: string) => headers[k.toLowerCase()];
  const asStr = (v: string | string[] | undefined) =>
    Array.isArray(v) ? v.join(',') : v || '';
  const raw =
    asStr(lower('x-forwarded-for')) ||
    asStr(lower('cf-connecting-ip')) ||
    asStr(lower('x-real-ip')) ||
    '';
  if (!raw) return null;

  let ip = raw.split(',')[0].trim();

  if (ip.startsWith('[')) {
    const end = ip.indexOf(']');
    if (end > 0) ip = ip.slice(1, end);
  } else if (ip.includes(':') && ip.includes('.')) {
    ip = ip.split(':')[0];
  }

  if (ip === '::1' || ip === '127.0.0.1') return null;

  const isIPv4 = /^\d{1,3}(\.\d{1,3}){3}$/.test(ip);
  const isIPv6 = /^[A-Fa-f0-9:]+$/.test(ip) && ip.includes(':');
  return isIPv4 || isIPv6 ? ip : null;
}

function ok(payload: Record<string, unknown> = {}) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify({ ok: true, ...payload }),
  };
}

function bad(statusCode = 400, message = 'bad_request') {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify({ ok: false, error: message }),
  };
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') return bad(405, 'method_not_allowed');

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
    console.error('Missing Supabase configuration');
    return bad(500, 'configuration_error');
  }

  if (!process.env.ML_API_URL || !process.env.ML_API_KEY) {
    console.error('Missing MailerLite configuration');
    return bad(500, 'configuration_error');
  }

  try {
    let body: Body;
    try {
      body = event.body ? JSON.parse(event.body) : {};
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return bad(400, 'invalid_json');
    }
    const norm = String(body.email || '')
      .trim()
      .toLowerCase();
    const source = (body.source || 'blog').trim().slice(0, 64);
    const variant = (body.variant || 'main').trim().slice(0, 64);
    const locale = (body.locale || 'pt').trim().slice(0, 16);
    const tags = Array.isArray(body.tags)
      ? body.tags.filter(Boolean).slice(0, 20)
      : [];

    if (!/^\S+@\S+\.\S+$/.test(norm)) return bad(400, 'invalid_email');

    const ip = simpleClientIp(event.headers);
    const ua = event.headers['user-agent'] || null;

    const { data: existing, error: selErr } = await supabase
      .from('subscribers')
      .select('email,status')
      .eq('email', norm)
      .maybeSingle();

    if (selErr) {
      console.error('select error', selErr);
      return bad(500, 'db_select_error');
    }

    if (existing?.status === 'confirmed') {
      await supabase
        .from('subscribers')
        .update({
          source,
          variant,
          locale,
          consent_ip: ip,
          consent_user_agent: ua,
        })
        .eq('email', norm);
      return ok({ already: true, status: 'confirmed' });
    }

    if (existing?.status === 'pending') {
      return ok({ already: true, status: 'pending' });
    }

    if (!existing) {
      const { error: insErr } = await supabase.from('subscribers').insert({
        email: norm,
        status: 'pending',
        source,
        variant,
        locale,
        tags,
        consent_ip: ip,
        consent_user_agent: ua,
      });
      if (insErr) {
        console.error('insert error', insErr);
        return bad(500, 'db_insert_error');
      }
    } else {
      const { error: updErr } = await supabase
        .from('subscribers')
        .update({
          status: 'pending',
          source,
          variant,
          locale,
          tags,
          consent_ip: ip,
          consent_user_agent: ua,
        })
        .eq('email', norm);
      if (updErr) {
        console.error('update error', updErr);
        return bad(500, 'db_update_error');
      }
    }

    const payload: any = {
      email: norm,
      fields: { source, locale },
      status: 'unconfirmed',
    };
    if (ML_GROUP_ID) payload.groups = [ML_GROUP_ID];

    let mlSuccess = false;
    try {
      const mlController = new AbortController();
      const mlTimeout = setTimeout(() => mlController.abort(), 10000);

      const mlRes = await fetch(`${ML_API_URL}/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ML_API_KEY}`,
        },
        body: JSON.stringify(payload),
        signal: mlController.signal,
      });

      clearTimeout(mlTimeout);

      if (mlRes.ok || mlRes.status === 409 || mlRes.status === 422) {
        mlSuccess = true;
      } else {
        const txt = await mlRes.text();
        console.error('MailerLite error', mlRes.status, txt);

        if (mlRes.status === 401) {
          console.error('MailerLite authentication failed');
        } else if (mlRes.status === 403) {
          console.error('MailerLite access forbidden');
        } else if (mlRes.status === 429) {
          console.error('MailerLite rate limit exceeded');
        }
      }
    } catch (mlError) {
      console.error('MailerLite request failed:', mlError);
      if (mlError instanceof Error && mlError.name === 'AbortError') {
        console.error('MailerLite request timeout');
      }
    }

    if (!mlSuccess) {
      console.warn(
        'MailerLite integration failed, but Supabase operation succeeded',
      );
    }

    return ok({ created: !existing, status: 'pending' });
  } catch (e: any) {
    console.error('subscribe error', e);
    return bad(500, 'server_error');
  }
};
