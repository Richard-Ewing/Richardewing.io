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

-- -----------------------------------------------------------------------------
-- V2 INSTITUTIONAL SCHEMAS
-- -----------------------------------------------------------------------------

-- 1. Organization Profiles
CREATE TABLE IF NOT EXISTS public.organization_profiles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    clerk_org_id TEXT UNIQUE, -- If using Clerk Organizations
    industry TEXT DEFAULT 'Default',
    company_size TEXT DEFAULT 'Startup',
    ai_maturity TEXT DEFAULT 'Exploratory',
    architecture_type TEXT DEFAULT 'Unknown',
    operational_burden TEXT DEFAULT 'Unmeasured',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.organization_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.organization_profiles FOR ALL USING (false);

-- 2. Diagnostic Results (Highly Normalized)
CREATE TABLE IF NOT EXISTS public.diagnostic_results (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    org_id UUID REFERENCES public.organization_profiles(id) ON DELETE SET NULL,
    diagnostic_id TEXT NOT NULL, -- e.g., 'pdi', 'aueb', 'aper'
    score NUMERIC NOT NULL,
    band TEXT NOT NULL, -- e.g., 'Top Quartile'
    raw_payload JSONB DEFAULT '{}'::jsonb, -- Store the exact inputs for longitudinal auditing
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.diagnostic_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.diagnostic_results FOR ALL USING (false);
CREATE INDEX IF NOT EXISTS idx_diag_user_id ON public.diagnostic_results(user_id);
CREATE INDEX IF NOT EXISTS idx_diag_org_id ON public.diagnostic_results(org_id);
CREATE INDEX IF NOT EXISTS idx_diag_type ON public.diagnostic_results(diagnostic_id);

-- 3. Benchmark Distributions (The Industry Moat)
CREATE TABLE IF NOT EXISTS public.benchmark_distributions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    diagnostic_id TEXT NOT NULL,
    industry TEXT NOT NULL,
    sample_size INTEGER DEFAULT 0,
    top_quartile NUMERIC NOT NULL,
    median NUMERIC NOT NULL,
    bottom_quartile NUMERIC NOT NULL,
    last_computed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    UNIQUE(diagnostic_id, industry)
);

ALTER TABLE public.benchmark_distributions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.benchmark_distributions FOR ALL USING (false);

-- 3.5 Benchmark Snapshots (Longitudinal Market Intelligence)
CREATE TABLE IF NOT EXISTS public.benchmark_snapshots (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    diagnostic_id TEXT NOT NULL,
    industry TEXT NOT NULL,
    sample_size INTEGER NOT NULL,
    top_quartile NUMERIC NOT NULL,
    median NUMERIC NOT NULL,
    bottom_quartile NUMERIC NOT NULL,
    snapshot_period TEXT NOT NULL, -- e.g. 'Q1-2026'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.benchmark_snapshots ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.benchmark_snapshots FOR ALL USING (false);

-- Enforce Append-Only for Historical Preservations
CREATE OR REPLACE FUNCTION prevent_benchmark_snapshot_updates()
RETURNS TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Updates are not allowed on benchmark_snapshots. This table is an immutable historical record.';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_append_only_benchmark_snapshots
BEFORE UPDATE ON public.benchmark_snapshots
FOR EACH ROW
EXECUTE FUNCTION prevent_benchmark_snapshot_updates();

-- 4. Governance Trends (Observability Delta Tracking)
CREATE TABLE IF NOT EXISTS public.governance_trends (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    org_id UUID REFERENCES public.organization_profiles(id) ON DELETE CASCADE,
    diagnostic_id TEXT NOT NULL,
    previous_score NUMERIC NOT NULL,
    current_score NUMERIC NOT NULL,
    delta NUMERIC NOT NULL,
    period_start TIMESTAMP WITH TIME ZONE NOT NULL,
    period_end TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.governance_trends ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.governance_trends FOR ALL USING (false);

-- 5. Telemetry Events
CREATE TABLE IF NOT EXISTS public.telemetry_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT,
    org_id UUID REFERENCES public.organization_profiles(id) ON DELETE SET NULL,
    event_type TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.telemetry_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.telemetry_events FOR ALL USING (false);

-- 5.5 External Telemetry Events (Observability Integrations)
CREATE TABLE IF NOT EXISTS public.external_telemetry_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    org_id TEXT NOT NULL REFERENCES public.organization_profiles(clerk_org_id),
    signal_type TEXT NOT NULL, -- e.g., 'retry_spike', 'token_inflation', 'failed_workflow'
    severity INTEGER NOT NULL, -- 1-10
    source TEXT NOT NULL,      -- e.g., 'datadog', 'langsmith', 'openai'
    raw_payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.external_telemetry_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.external_telemetry_events FOR ALL USING (false);
