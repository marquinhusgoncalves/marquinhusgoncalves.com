import type { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!,
);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: 'Method not allowed' };

  try {
    const body = JSON.parse(event.body || '{}');
    const type: string = body?.event || body?.type;
    const email: string | undefined =
      body?.data?.email || body?.subscriber?.email;

    if (!type || !email) return { statusCode: 200, body: 'ignored' };

    const lower = email.toLowerCase();
    if (type.includes('confirmed')) {
      await supabase
        .from('subscribers')
        .update({ status: 'confirmed', confirmed_at: new Date().toISOString() })
        .eq('email', lower);
    } else if (type.includes('unsubscribed')) {
      await supabase
        .from('subscribers')
        .update({
          status: 'unsubscribed',
          unsubscribed_at: new Date().toISOString(),
        })
        .eq('email', lower);
    } else if (type.includes('bounced')) {
      await supabase
        .from('subscribers')
        .update({ status: 'bounced' })
        .eq('email', lower);
    } else if (type.includes('deleted')) {
      await supabase
        .from('subscribers')
        .update({ status: 'deleted', deleted_at: new Date().toISOString() })
        .eq('email', lower);
    } else {
      console.log('Unhandled MailerLite event:', type, 'for email:', lower);
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e: any) {
    console.error(e);
    return { statusCode: 200, body: 'noop' };
  }
};
