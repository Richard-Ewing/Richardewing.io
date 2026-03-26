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

-- Index for scalable dashboard retrieval
CREATE INDEX IF NOT EXISTS idx_user_tool_runs_user_id ON public.user_tool_runs(user_id);

-- Note: No Row Level Security (RLS) policies are active.
-- Verification happens completely server-side via Clerk's auth() method
-- executing through the Service Role Key.
