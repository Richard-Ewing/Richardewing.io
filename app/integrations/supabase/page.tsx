import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supabase Integration Guide | Richard Ewing Platform Docs',
  description: 'Step-by-step guide explaining how to integrate Supabase PostgreSQL, pgvector, Row-Level Security (RLS), and Edge Functions with Richard Ewing diagnostics.',
  keywords: [
    'Supabase integration guide',
    'Supabase pgvector technical debt',
    'Supabase Row-Level Security R&D audit',
    'Supabase Edge Functions audit telemetry',
    'Richard Ewing Supabase partner doc'
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/integrations/supabase',
  },
  openGraph: {
    title: 'Supabase Integration Guide | Richard Ewing Platform Docs',
    description: 'Step-by-step guide explaining how to integrate Supabase PostgreSQL, pgvector, Row-Level Security (RLS), and Edge Functions with Richard Ewing diagnostics.',
    url: 'https://www.richardewing.io/integrations/supabase',
    type: 'website',
  }
};

export default function SupabaseIntegrationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://www.richardewing.io/integrations/supabase#article',
    'headline': 'How to Integrate Richard Ewing R&D Capital Audits with Supabase',
    'description': 'Technical guide for integrating Supabase PostgreSQL, pgvector embeddings, Row-Level Security (RLS), and Edge Functions with the Product Debt Index diagnostic platform.',
    'url': 'https://www.richardewing.io/integrations/supabase',
    'author': {
      '@type': 'Person',
      'name': 'Richard Ewing',
      'url': 'https://www.richardewing.io/about'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Richard Ewing Advisory',
      'url': 'https://www.richardewing.io'
    },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.richardewing.io' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Partnerships', 'item': 'https://www.richardewing.io/partnerships' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Integration Docs', 'item': 'https://www.richardewing.io/partnerships/integration-docs' },
        { '@type': 'ListItem', 'position': 4, 'name': 'Supabase Integration', 'item': 'https://www.richardewing.io/integrations/supabase' }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-container max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest">
          <Link href="/" className="hover:text-zinc-950 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/partnerships" className="hover:text-zinc-950 transition-colors">Partnerships</Link>
          <span>/</span>
          <Link href="/partnerships/integration-docs" className="hover:text-zinc-950 transition-colors">Docs</Link>
          <span>/</span>
          <span className="text-emerald-900 font-extrabold">Supabase Integration</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-zinc-300 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Official Partner Integration Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-4 tracking-tight">
            Integrating Richard Ewing Diagnostics with Supabase
          </h1>
          <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-medium">
            This guide walks you through connecting Supabase PostgreSQL database, <code className="bg-zinc-200 px-1.5 py-0.5 rounded text-sm font-mono">pgvector</code> embeddings, Row-Level Security (RLS), and Supabase Edge Functions to the Richard Ewing R&amp;D Capital Audit platform.
          </p>
        </div>

        {/* Step 1: Provisioning & Credentials */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-900 text-white flex items-center justify-center font-mono font-bold text-sm">
              1
            </span>
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
              Configure Supabase Connection Credentials
            </h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed font-medium">
            Retrieve your Supabase Project URL and API Keys from your Supabase Dashboard (<span className="font-mono text-xs font-bold">Project Settings → API</span>). Configure these environment variables in your deployment environment:
          </p>
          <pre className="bg-zinc-950 text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-zinc-800">
            <code>{`NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."`}</code>
          </pre>
        </section>

        {/* Step 2: SQL Migration & Schema Setup */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-900 text-white flex items-center justify-center font-mono font-bold text-sm">
              2
            </span>
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
              Apply Database Migration &amp; Row-Level Security (RLS)
            </h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed font-medium">
            Execute the following SQL migration in your Supabase SQL Editor. This enables the <code className="bg-zinc-200 px-1 py-0.5 rounded font-mono text-xs">vector</code> extension for semantic code indexing and establishes strict Row-Level Security policies:
          </p>
          <pre className="bg-zinc-950 text-zinc-200 p-5 rounded-xl font-mono text-xs overflow-x-auto border border-zinc-800 leading-relaxed">
            <code>{`-- 1. Enable pgvector for code debt indexing
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Create Audit Events Ledger Table
CREATE TABLE IF NOT EXISTS public.rd_audit_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    repo_id TEXT NOT NULL,
    commit_sha VARCHAR(40) NOT NULL,
    pdi_score NUMERIC(5,2) NOT NULL CHECK (pdi_score >= 0 AND pdi_score <= 100),
    aper_value NUMERIC(12,2) NOT NULL,
    embedding vector(1536),
    metadata JSONB DEFAULT '{}'::jsonb,
    recorded_at TIMESTAMPTZ DEFAULT clock_timestamp() NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. Enforce Row-Level Security (RLS)
ALTER TABLE public.rd_audit_events ENABLE ROW LEVEL SECURITY;

-- Tenant Isolation: Only authenticated tenant members can view their audit records
CREATE POLICY "Tenant Audit Isolation Policy"
    ON public.rd_audit_events
    FOR SELECT
    USING (auth.uid() = tenant_id OR auth.jwt() ->> 'role' = 'service_role');

-- Service Ingestion: Authorized background tasks can write audit telemetry
CREATE POLICY "Service Ingestion Policy"
    ON public.rd_audit_events
    FOR INSERT
    WITH CHECK (auth.uid() = tenant_id OR auth.jwt() ->> 'role' = 'service_role');`}</code>
          </pre>
        </section>

        {/* Step 3: Client Ingestion in TypeScript */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-900 text-white flex items-center justify-center font-mono font-bold text-sm">
              3
            </span>
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
              Initialize Supabase Client &amp; Dispatch Ingestion Telemetry
            </h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed font-medium">
            Use the official <code className="bg-zinc-200 px-1 py-0.5 rounded font-mono text-xs">@supabase/supabase-js</code> client to ingest R&amp;D audit calculations into the sovereign ledger:
          </p>
          <pre className="bg-zinc-950 text-zinc-200 p-5 rounded-xl font-mono text-xs overflow-x-auto border border-zinc-800 leading-relaxed">
            <code>{`import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function submitAuditRecord({
  tenantId,
  repoId,
  commitSha,
  pdiScore,
  aperValue
}: {
  tenantId: string;
  repoId: string;
  commitSha: string;
  pdiScore: number;
  aperValue: number;
}) {
  const { data, error } = await supabase
    .from('rd_audit_events')
    .insert([{
      tenant_id: tenantId,
      repo_id: repoId,
      commit_sha: commitSha,
      pdi_score: pdiScore,
      aper_value: aperValue,
      metadata: { source: 'supabase-integration-v3' }
    }])
    .select();

  if (error) {
    throw new Error(\`Failed to record audit event: \${error.message}\`);
  }

  return data;
}`}</code>
          </pre>
        </section>

        {/* Step 4: Supabase Edge Functions */}
        <section className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-900 text-white flex items-center justify-center font-mono font-bold text-sm">
              4
            </span>
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
              Deploy Realtime Telemetry with Supabase Edge Functions
            </h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed font-medium">
            Deploy a Deno-based Supabase Edge Function to process webhook triggers and recalculate the Product Debt Index (PDI) with sub-second execution latency:
          </p>
          <pre className="bg-zinc-950 text-zinc-200 p-5 rounded-xl font-mono text-xs overflow-x-auto border border-zinc-800 leading-relaxed">
            <code>{`import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  const { event, repository, pdiCalculations } = await req.json();

  // Record calculation in sovereign PostgreSQL database
  const { error } = await supabase.from('rd_audit_events').insert({
    tenant_id: repository.owner_id,
    repo_id: repository.id,
    commit_sha: event.commit_sha,
    pdi_score: pdiCalculations.score,
    aper_value: pdiCalculations.aper
  });

  return new Response(JSON.stringify({ status: error ? 'error' : 'success' }), {
    headers: { "Content-Type": "application/json" },
  });
});`}</code>
          </pre>
        </section>

        {/* Quick Links Footer */}
        <div className="pt-8 border-t border-zinc-300 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/partnerships/integration-docs"
            className="text-sm font-grotesk font-bold text-zinc-900 hover:text-emerald-700 transition-colors"
          >
            ← Back to All Integration Docs
          </Link>
          <Link
            href="/brand"
            className="text-sm font-grotesk font-bold text-emerald-800 hover:underline"
          >
            Download Logo &amp; Media Kit →
          </Link>
        </div>

      </div>
    </main>
  );
}
