-- Exogram / RichardEwing.io Supabase Schema for Longitudinal Tool Tracking
-- Execute this directly in the Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.user_tool_runs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL, -- Corresponds to Clerk user ID (e.g., user_2k...)
    tool_id TEXT NOT NULL, -- e.g., 'APER', 'AUEB', 'EV-SE'
    run_data JSONB NOT NULL, -- The original inputs provided by the user
    output_metrics JSONB DEFAULT '{}'::jsonb, -- The resulting calculations/margins
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS (Service Role Key bypasses this, public anon key is blocked)
ALTER TABLE public.user_tool_runs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.user_tool_runs FOR ALL USING (false);

-- Index for scalable dashboard retrieval
CREATE INDEX IF NOT EXISTS idx_user_tool_runs_user_id ON public.user_tool_runs(user_id);

-- Note: No Row Level Security (RLS) policies are active.
-- Verification happens completely server-side via Clerk's auth() method
-- executing through the Service Role Key.


CREATE TABLE IF NOT EXISTS public.user_content_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  content_type TEXT NOT NULL,
  content_id TEXT NOT NULL,
  progress_percentage INTEGER DEFAULT 0,
  is_completed BOOLEAN DEFAULT false,
  last_accessed TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, content_id)
);

-- Enable RLS (Service Role Key bypasses this, public anon key is blocked)
ALTER TABLE public.user_content_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.user_content_progress FOR ALL USING (false);

-- If public.tool_runs exists from an older iteration, secure it as well.
DO $$ 
BEGIN
  IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename  = 'tool_runs') THEN
    EXECUTE 'ALTER TABLE public.tool_runs ENABLE ROW LEVEL SECURITY;';
    EXECUTE 'CREATE POLICY "Service Role Only" ON public.tool_runs FOR ALL USING (false);';
  END IF;
END $$;

