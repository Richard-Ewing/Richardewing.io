-- =============================================================================
-- AGENT INFRASTRUCTURE TABLES
-- Run this in the Supabase SQL Editor to enable the autonomous agent stack.
-- =============================================================================

-- 1. Agent Run Logs (Immutable Audit Trail)
-- Every agent execution creates a record here.
CREATE TABLE IF NOT EXISTS public.agent_runs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    agent TEXT NOT NULL,           -- e.g., 'intelligence-digest', 'seo-health'
    status TEXT NOT NULL,          -- 'started', 'completed', 'failed', 'skipped'
    duration_ms INTEGER NOT NULL,
    items_processed INTEGER DEFAULT 0,
    summary TEXT NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.agent_runs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.agent_runs FOR ALL USING (false);
CREATE INDEX IF NOT EXISTS idx_agent_runs_agent ON public.agent_runs(agent);
CREATE INDEX IF NOT EXISTS idx_agent_runs_created ON public.agent_runs(created_at DESC);

-- 2. Lead Scores (Pipeline Intelligence)
-- Populated by the lead-scorer agent every 6 hours.
CREATE TABLE IF NOT EXISTS public.lead_scores (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL UNIQUE,
    tier TEXT NOT NULL,             -- 'HOT', 'WARM', 'COLD', 'NURTURE'
    total_runs INTEGER DEFAULT 0,
    diagnostics_used TEXT[] DEFAULT '{}',
    avg_score NUMERIC DEFAULT 0,
    has_regression BOOLEAN DEFAULT false,
    reason TEXT DEFAULT '',
    last_active TIMESTAMP WITH TIME ZONE,
    scored_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

ALTER TABLE public.lead_scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.lead_scores FOR ALL USING (false);
CREATE INDEX IF NOT EXISTS idx_lead_scores_tier ON public.lead_scores(tier);
CREATE INDEX IF NOT EXISTS idx_lead_scores_scored ON public.lead_scores(scored_at DESC);

-- 3. Content Drafts (AI-Generated Content Awaiting Approval)
-- Populated by the content-expander agent weekly.
CREATE TABLE IF NOT EXISTS public.content_drafts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    content_type TEXT NOT NULL,     -- 'glossary', 'comparison', 'blog'
    slug TEXT NOT NULL,
    title TEXT NOT NULL,
    content JSONB NOT NULL,
    status TEXT DEFAULT 'draft',    -- 'draft', 'approved', 'rejected', 'published'
    generated_by TEXT DEFAULT 'agent',
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    reviewed_at TIMESTAMP WITH TIME ZONE,
    UNIQUE(content_type, slug)
);

ALTER TABLE public.content_drafts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service Role Only" ON public.content_drafts FOR ALL USING (false);
CREATE INDEX IF NOT EXISTS idx_content_drafts_status ON public.content_drafts(status);
