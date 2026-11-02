-- ADR-0021: Paid Tool Runs Persistence & Entitlement Audit Ledger
-- Stores server-sealed AES-256-GCM envelopes and Stripe Checkout payment confirmations
-- Strictly server-role only (Row Level Security enabled with zero public/anon policies).

CREATE TABLE IF NOT EXISTS public.paid_tool_runs (
    run_id TEXT PRIMARY KEY,
    tool_id TEXT NOT NULL CHECK (tool_id IN ('vibe-security-scanner', 'department-ai-playbook')),
    target_summary TEXT NOT NULL,
    public_preview JSONB NOT NULL DEFAULT '{}'::jsonb,
    sealed_envelope TEXT NOT NULL,
    paid_sku TEXT,
    stripe_session_id TEXT,
    customer_email TEXT,
    amount_cents INTEGER,
    paid_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '30 days')
);

CREATE INDEX IF NOT EXISTS idx_paid_tool_runs_stripe_session
    ON public.paid_tool_runs (stripe_session_id)
    WHERE stripe_session_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_paid_tool_runs_created_at
    ON public.paid_tool_runs (created_at DESC);

ALTER TABLE public.paid_tool_runs ENABLE ROW LEVEL SECURITY;

-- Zero anon/authenticated policies: exclusively accessible by service_role on Cloudflare Workers.
REVOKE ALL ON public.paid_tool_runs FROM anon, authenticated;
