import type { Config } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

export const config: Config = {
  schedule: '@daily',
};

export default async function handler(_request: Request): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_KEY;

  if (!url || !key) {
    console.warn('[supabase-keepalive] SUPABASE_URL ou SUPABASE_KEY não configurados');
    return;
  }

  try {
    const supabase = createClient(url, key);
    await supabase.from('subscribers').select('email').limit(1).maybeSingle();
    console.log('[supabase-keepalive] Ping executado com sucesso');
  } catch (e) {
    console.error('[supabase-keepalive] Erro:', e);
  }
}
