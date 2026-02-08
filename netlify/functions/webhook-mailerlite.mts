import { createHmac, timingSafeEqual } from 'node:crypto';
import type { Config, Context } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!,
);

export const config: Config = {
  method: 'POST',
};

function verifySignature(
  rawBody: string,
  signature: string,
  secret: string,
): boolean {
  const expected = createHmac('sha256', secret).update(rawBody).digest('hex');
  if (signature.length !== expected.length) return false;
  try {
    return timingSafeEqual(
      Buffer.from(signature, 'hex'),
      Buffer.from(expected, 'hex'),
    );
  } catch {
    return false;
  }
}

export default async function handler(
  request: Request,
  _context: Context,
): Promise<Response> {
  try {
    const secret = process.env.ML_WEBHOOK_SECRET;
    if (!secret) {
      console.error('webhook_missing_secret');
      return new Response('Configuration error', { status: 500 });
    }

    const rawBody = await request.text();
    const signature =
      request.headers.get('Signature') ??
      request.headers.get('X-MailerLite-Signature') ??
      '';

    if (!verifySignature(rawBody, signature, secret)) {
      return new Response('Forbidden', { status: 403 });
    }

    const body = JSON.parse(rawBody || '{}') as {
      event?: string;
      email?: string;
    };

    const type: string = body?.event ?? '';
    const email: string | undefined = body?.email;

    if (!type || !email) {
      return new Response('ignored', { status: 200 });
    }

    const mail = email.toLowerCase();

    if (type === 'subscriber.active') {
      const { error } = await supabase
        .from('subscribers')
        .update({
          status: 'confirmed',
          confirmed_at: new Date().toISOString(),
        })
        .eq('email', mail);
      if (error) {
        console.error('update_confirmed_error', error);
      }
      return new Response('confirmed', { status: 200 });
    }

    if (type === 'subscriber.unsubscribed') {
      const { error } = await supabase
        .from('subscribers')
        .update({
          status: 'unsubscribed',
          unsubscribed_at: new Date().toISOString(),
        })
        .eq('email', mail);
      if (error) {
        console.error('update_unsubscribed_error', error);
      }
      return new Response('unsubscribed', { status: 200 });
    }

    if (type === 'subscriber.bounced') {
      const { error } = await supabase
        .from('subscribers')
        .update({ status: 'bounced' })
        .eq('email', mail);
      if (error) {
        console.error('update_bounced_error', error);
      }
      return new Response('bounced', { status: 200 });
    }

    return new Response('noop', { status: 200 });
  } catch (e: unknown) {
    console.error('webhook_error', e);
    return new Response('error', { status: 200 });
  }
}
