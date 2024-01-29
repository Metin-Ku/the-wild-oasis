import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = 'https://hydeqiqkoqtxpwozette.supabase.co'
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5ZGVxaXFrb3F0eHB3b3pldHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1MTYxNTAsImV4cCI6MjAyMTA5MjE1MH0.N2yAhbq_jonyz75w77q8bOzcf5YuJa8Uv0CCw7MeJUs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
