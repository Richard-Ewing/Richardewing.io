import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with the Service Role Key for server-side administrative access.
// This allows us to map Clerk User IDs without needing to configure complex Clerk JWT templates.
// 
// WARNING: This client bypasses RLS policies entirely. ALWAYS manually verify the 
// user's identity via Clerk auth() in the API route before using this client.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  // Only warn, don't crash — allows build to succeed on Vercel even if keys aren't yet configured
  if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
    console.warn('Supabase credentials missing. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.');
  }
}

// createClient handles empty strings gracefully at import time; 
// actual API calls will fail with clear errors if credentials are missing.
export const supabaseAdmin = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseServiceKey || 'placeholder');

