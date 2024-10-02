import { createClient } from '@supabase/supabase-js';

//# Json-Server API_URL (MOCK DATA)
export const LOCALHOST_PORT = 'http://localhost:5005';

//# Supabase 사용
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL!;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
