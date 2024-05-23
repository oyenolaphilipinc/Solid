import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dpvkwdibmzncsvvxqxnf.supabase.co"; // Replace with your Supabase project URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdmt3ZGlibXpuY3N2dnhxeG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NjE1NjMsImV4cCI6MjAxNjQzNzU2M30._tSFrSdeXi_YHXUXTd8E_q9q4sUdz8cDwV70GGkCSus"; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
