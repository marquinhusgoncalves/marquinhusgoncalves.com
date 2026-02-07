import type { Config, Context } from '@netlify/functions';
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

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
} as const;

function ok(payload: Record<string, unknown> = {}) {
  return new Response(JSON.stringify({ ok: true, ...payload }), {
    status: 200,
    headers: JSON_HEADERS,
  });
}

function bad(statusCode = 400, message = 'bad_request') {
  return new Response(JSON.stringify({ ok: false, error: message }), {
    status: statusCode,
    headers: JSON_HEADERS,
  });
}

export const config: Config = {
  method: 'POST',
};

export default async function handler(
  request: Request,
  context: Context,
): Promise<Response> {
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
      const text = await request.text();
      body = text ? JSON.parse(text) : {};
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

    const ip = context.ip ?? null;
    const ua = request.headers.get('user-agent') ?? null;

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

    const payload: Record<string, unknown> = {
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
  } catch (e: unknown) {
    console.error('subscribe error', e);
    return bad(500, 'server_error');
  }
}
