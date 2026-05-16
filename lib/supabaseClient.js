// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Pegando as variáveis de ambiente do Vercel / Next.js
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
