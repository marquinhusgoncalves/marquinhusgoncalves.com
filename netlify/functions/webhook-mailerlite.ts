import type { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!,
);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const type: string = body?.event || '';
    const email: string | undefined = body?.email;

    if (!type || !email) {
      return { statusCode: 200, body: 'ignored' };
    }

    const mail = email.toLowerCase();

    if (type === 'subscriber.active') {
      const { error } = await supabase
        .from('subscribers')
        .update({ status: 'confirmed', confirmed_at: new Date().toISOString() })
        .eq('email', mail);
      if (error) {
        console.error('update_confirmed_error', error);
      }
      return { statusCode: 200, body: 'confirmed' };
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
      return { statusCode: 200, body: 'unsubscribed' };
    }

    if (type === 'subscriber.bounced') {
      const { error } = await supabase
        .from('subscribers')
        .update({ status: 'bounced' })
        .eq('email', mail);
      if (error) {
        console.error('update_bounced_error', error);
      }
      return { statusCode: 200, body: 'bounced' };
    }

    return { statusCode: 200, body: 'noop' };
  } catch (e: any) {
    console.error('webhook_error', e);
    return { statusCode: 200, body: 'error' };
  }
};
