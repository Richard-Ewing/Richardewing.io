-- ============================================================================
-- Migration: 20261101_sovereign_distribution_queue.sql
-- ADR: ADR-0020 (Phase 5.2 - Air-Gapped Step 6 Sovereign Distribution Queue)
-- Purpose:
--   Clean-room Postgres/Supabase replacement for AGPL social schedulers.
--   Enforces mandatory human approval prior to dispatch, SHA-256 idempotency,
--   strict service_role RLS isolation, and atomic FOR UPDATE SKIP LOCKED job
--   claiming so concurrent Cloudflare Workers or pg_cron runs never race
--   single-use OAuth 2.0 refresh tokens or double-publish executive posts.
-- ============================================================================

BEGIN;

CREATE TABLE IF NOT EXISTS public.sovereign_distribution_queue (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    idempotency_key TEXT UNIQUE NOT NULL,
    route TEXT NOT NULL,
    campaign_slug TEXT NOT NULL,
    channel TEXT NOT NULL CHECK (channel IN ('linkedin', 'x_thread', 'scorecard_card')),
    payload JSONB NOT NULL DEFAULT '{}'::jsonb,
    status TEXT NOT NULL DEFAULT 'pending_human_approval'
        CHECK (status IN (
            'pending_human_approval',
            'approved',
            'claiming',
            'dispatched',
            'failed',
            'cancelled'
        )),
    approved_by_human_at TIMESTAMPTZ,
    approved_by_actor TEXT,
    scheduled_for TIMESTAMPTZ NOT NULL DEFAULT now(),
    claimed_at TIMESTAMPTZ,
    claimed_by_worker TEXT,
    dispatched_at TIMESTAMPTZ,
    external_post_id TEXT,
    attempt_count INTEGER NOT NULL DEFAULT 0 CHECK (attempt_count >= 0),
    max_attempts INTEGER NOT NULL DEFAULT 3 CHECK (max_attempts >= 1),
    last_error TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT human_approval_required_before_dispatch
        CHECK (status <> 'dispatched' OR approved_by_human_at IS NOT NULL),

    CONSTRAINT dispatched_timestamp_required
        CHECK (status <> 'dispatched' OR dispatched_at IS NOT NULL),

    CONSTRAINT human_approval_required_before_claim
        CHECK (status NOT IN ('approved', 'claiming') OR approved_by_human_at IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_sovereign_distribution_due
    ON public.sovereign_distribution_queue (scheduled_for ASC, created_at ASC)
    WHERE status IN ('approved', 'claiming') AND approved_by_human_at IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_sovereign_distribution_route
    ON public.sovereign_distribution_queue (route, channel);

-- Strict Row-Level Security: service_role only (zero anon or client mutations)
ALTER TABLE public.sovereign_distribution_queue ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sovereign_distribution_queue FORCE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.sovereign_distribution_queue FROM PUBLIC, anon, authenticated;
GRANT ALL ON TABLE public.sovereign_distribution_queue TO service_role;

DROP POLICY IF EXISTS sovereign_distribution_service_role_only
    ON public.sovereign_distribution_queue;

CREATE POLICY sovereign_distribution_service_role_only
    ON public.sovereign_distribution_queue
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Atomic job claimer preventing concurrent OAuth refresh races or double posts
-- Also reclaims stale 'claiming' leases older than 10 minutes after a Worker crash
CREATE OR REPLACE FUNCTION public.claim_due_distribution_jobs(
    batch_size INT DEFAULT 5,
    worker_id TEXT DEFAULT 'cloudflare-edge-dispatcher'
)
RETURNS SETOF public.sovereign_distribution_queue
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    safe_limit INT := GREATEST(1, LEAST(COALESCE(batch_size, 5), 50));
BEGIN
    RETURN QUERY
    WITH due_jobs AS (
        SELECT q.id
        FROM public.sovereign_distribution_queue AS q
        WHERE (
            q.status = 'approved'
            OR (
                q.status = 'claiming'
                AND q.claimed_at IS NOT NULL
                AND q.claimed_at <= now() - interval '10 minutes'
            )
        )
          AND q.approved_by_human_at IS NOT NULL
          AND q.scheduled_for <= now()
          AND q.attempt_count < q.max_attempts
        ORDER BY q.scheduled_for ASC, q.created_at ASC
        FOR UPDATE SKIP LOCKED
        LIMIT safe_limit
    )
    UPDATE public.sovereign_distribution_queue AS target
    SET status = 'claiming',
        claimed_at = now(),
        claimed_by_worker = COALESCE(NULLIF(trim(worker_id), ''), 'cloudflare-edge-dispatcher'),
        attempt_count = target.attempt_count + 1,
        updated_at = now()
    FROM due_jobs
    WHERE target.id = due_jobs.id
    RETURNING target.*;
END;
$$;

REVOKE ALL ON FUNCTION public.claim_due_distribution_jobs(INT, TEXT)
    FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.claim_due_distribution_jobs(INT, TEXT)
    TO service_role;

COMMIT;
