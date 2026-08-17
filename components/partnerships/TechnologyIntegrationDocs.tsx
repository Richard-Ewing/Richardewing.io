'use client';

import React, { useState } from 'react';

type CodeTab = 'typescript' | 'postgres' | 'webhooks' | 'mcp';

export default function TechnologyIntegrationDocs() {
  const [activeTab, setActiveTab] = useState<CodeTab>('typescript');
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2500);
    }
  };

  const codeSnippets: Record<CodeTab, { title: string; filename: string; language: string; code: string; explanation: string }> = {
    typescript: {
      title: 'SDK & Client Initializer',
      filename: 'integration-client.ts',
      language: 'typescript',
      code: `import { createClient } from '@supabase/supabase-js';

// 1. Initialize deterministic connection to persistence layer
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const auditDb = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  db: {
    schema: 'public',
  },
});

// 2. Telemetry Ingestion Contract
export interface AuditTelemetryPayload {
  tenantId: string;
  repositoryId: string;
  commitHash: string;
  productDebtIndex: number;
  revenuePerEngineer: number;
  vectorEmbeddings?: number[];
  timestamp: string;
}

// 3. Dispatch R&D Capital Audit event to sovereign ledger
export async function recordAuditTelemetry(payload: AuditTelemetryPayload) {
  const { data, error } = await auditDb
    .from('rd_audit_events')
    .insert([
      {
        tenant_id: payload.tenantId,
        repo_id: payload.repositoryId,
        commit_sha: payload.commitHash,
        pdi_score: payload.productDebtIndex,
        aper_value: payload.revenuePerEngineer,
        metadata: {
          runtime: 'edge-runtime-v3',
          governance_tier: 'enterprise-sovereign',
        },
        recorded_at: payload.timestamp || new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    throw new Error(\`Telemetry ingestion failed: \${error.message}\`);
  }

  return data;
}`,
      explanation: 'Connects directly to the PostgreSQL database layer (e.g. Supabase) with authenticated client credentials, enforcing typed telemetry ingestion into the sovereign audit ledger.',
    },
    postgres: {
      title: 'PostgreSQL Schema with Row-Level Security (RLS)',
      filename: '001_rd_audit_schema.sql',
      language: 'sql',
      code: `-- Enable pgvector extension for semantic code smell indexing
CREATE EXTENSION IF NOT EXISTS vector;

-- 1. Sovereign R&D Capital Audit Events Table
CREATE TABLE IF NOT EXISTS public.rd_audit_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    repo_id TEXT NOT NULL,
    commit_sha VARCHAR(40) NOT NULL,
    pdi_score NUMERIC(5,2) NOT NULL CHECK (pdi_score >= 0 AND pdi_score <= 100),
    aper_value NUMERIC(12,2) NOT NULL,
    embedding vector(1536), -- Code context vector representation
    metadata JSONB DEFAULT '{}'::jsonb,
    recorded_at TIMESTAMPTZ DEFAULT clock_timestamp() NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. Performance Indexes for Longitudinal Benchmarking
CREATE INDEX IF NOT EXISTS idx_audit_tenant_time ON public.rd_audit_events (tenant_id, recorded_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_repo_commit ON public.rd_audit_events (repo_id, commit_sha);

-- 3. Row-Level Security (RLS) Isolation
ALTER TABLE public.rd_audit_events ENABLE ROW LEVEL SECURITY;

-- Tenant Isolation Policy: Only authenticated tenant members can read audit events
CREATE POLICY "Tenants can only view their own audit telemetry"
    ON public.rd_audit_events
    FOR SELECT
    USING (auth.uid() = tenant_id OR auth.jwt() ->> 'role' = 'service_role');

-- Service Role Policy: Authorized integration runners can insert audit records
CREATE POLICY "Authorized services can insert audit records"
    ON public.rd_audit_events
    FOR INSERT
    WITH CHECK (auth.uid() = tenant_id OR auth.jwt() ->> 'role' = 'service_role');`,
      explanation: 'Enterprise PostgreSQL schema utilizing pgvector for embedding lookups and Row-Level Security (RLS) policies to guarantee strict multi-tenant data boundaries.',
    },
    webhooks: {
      title: 'Event Bus & Webhook Ingestion',
      filename: 'api-webhook-handler.ts',
      language: 'typescript',
      code: `import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const WEBHOOK_SECRET = process.env.PARTNER_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-partner-signature');

    // 1. Cryptographic HMAC Verification
    const expectedSig = crypto
      .createHmac('sha256', WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex');

    if (!signature || signature !== expectedSig) {
      return NextResponse.json({ error: 'Invalid HMAC signature' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);

    // 2. Event Dispatching: Route event to appropriate diagnostic engine
    switch (event.type) {
      case 'deployment.completed':
      case 'database.migration_applied':
      case 'pr.merged':
        // Trigger automated Product Debt Index & Capital Audit recalculation
        await triggerAuditEvaluation({
          tenantId: event.tenantId,
          sourceEvent: event.type,
          payload: event.data,
        });
        break;

      default:
        console.log(\`Ignored unmonitored event type: \${event.type}\`);
    }

    return NextResponse.json({ status: 'success', received: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}`,
      explanation: 'Handles incoming webhook streams from developer tools, continuous integration runners, and platform events with HMAC-SHA256 signature verification.',
    },
    mcp: {
      title: 'Model Context Protocol (MCP) Server Schema',
      filename: 'mcp-audit-server.json',
      language: 'json',
      code: `{
  "name": "richardewing-audit-mcp",
  "version": "3.0.0",
  "description": "Model Context Protocol tools for R&D Capital Audits and AI Economics diagnostics",
  "tools": [
    {
      "name": "calculate_pdi",
      "description": "Computes Product Debt Index and estimated Technical Insolvency Date from codebase complexity metrics.",
      "parameters": {
        "type": "object",
        "properties": {
          "codebaseComplexity": { "type": "number", "description": "Cyclomatic complexity delta" },
          "monthlyRefactorHours": { "type": "number", "description": "Engineering hours spent on unplanned maintenance" },
          "annualHeadcountCost": { "type": "number", "description": "Total R&D personnel expenditure" }
        },
        "required": ["codebaseComplexity", "monthlyRefactorHours", "annualHeadcountCost"]
      }
    },
    {
      "name": "query_sovereign_ledger",
      "description": "Fetches longitudinal audit records from PostgreSQL database layer with RLS filtering.",
      "parameters": {
        "type": "object",
        "properties": {
          "tenantId": { "type": "string", "description": "Unique UUID of the tenant organization" },
          "lookbackDays": { "type": "integer", "description": "Audit inspection window in days" }
        },
        "required": ["tenantId"]
      }
    }
  ]
}`,
      explanation: 'Standardizes tool definitions allowing autonomous AI agents to query audit ledgers and compute economic metrics directly inside Claude Desktop, Cursor, and IDE extensions.',
    },
  };

  return (
    <section id="integration-docs" className="scroll-mt-24 mb-20">
      {/* Header Banner */}
      <div className="border-t border-zinc-300 pt-16 mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Developer &amp; Partner Integration Docs
          </div>
          <span className="text-xs font-mono font-bold text-zinc-600">Protocol Spec: v3.0 | REST / Postgres / MCP</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-4">
          Technology Integration Framework
        </h2>
        <p className="text-base sm:text-lg text-zinc-800 max-w-3xl leading-relaxed">
          While auditing engineering systems across high-growth portfolios, we realized that diagnostic frameworks must ingest raw operational telemetry without imposing proprietary vendor lock-in. Real collaboration requires predictable, deterministic integration boundaries across databases, vector stores, edge runtimes, and event pipelines.
        </p>
      </div>

      {/* 4 Architectural Layers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Layer 1: Data & Persistence */}
        <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm hover:border-zinc-400 transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-mono font-bold text-base mb-4">
            01
          </div>
          <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">
            Data Layer &amp; State Persistence
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">
            Connects to enterprise PostgreSQL platforms (e.g. Supabase) for sovereign data persistence. Uses Row-Level Security (RLS) to enforce strict multi-tenant data isolation for all audit ledgers and PDI time-series calculations.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">PostgreSQL</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">Row-Level Security</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">Realtime CDC</span>
          </div>
        </div>

        {/* Layer 2: Vector Memory */}
        <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm hover:border-zinc-400 transition-all">
          <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-800 font-mono font-bold text-base mb-4">
            02
          </div>
          <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">
            Semantic Vector &amp; AST Retrieval
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">
            Indexes repository commits, architectural changes, and developer pull request cycles using vector extensions (<code className="text-xs bg-zinc-100 px-1 py-0.5 rounded font-mono">pgvector</code>, Pinecone) for semantic technical debt pattern matching.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">pgvector</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">Pinecone</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">AST Embeddings</span>
          </div>
        </div>

        {/* Layer 3: Edge & MCP Agents */}
        <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm hover:border-zinc-400 transition-all">
          <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800 font-mono font-bold text-base mb-4">
            03
          </div>
          <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">
            Edge Compute &amp; MCP Subagents
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">
            Deploys automated diagnostic tools via serverless Edge Functions (Deno / Node.js) and standard Model Context Protocol (MCP) server endpoints, enabling AI agents in Cursor, Claude, or CI pipelines to run deterministic audits.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">Edge Functions</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">Model Context Protocol</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">Next.js Serverless</span>
          </div>
        </div>

        {/* Layer 4: Webhooks & Event Bus */}
        <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm hover:border-zinc-400 transition-all">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 font-mono font-bold text-base mb-4">
            04
          </div>
          <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">
            Event Streams &amp; CI/CD Webhooks
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed mb-4">
            Listens to pull request lifecycle webhooks, deployment notifications, and APM telemetry to calculate dynamic Product Debt Index (PDI) deltas and trigger boardroom alerts automatically.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">HMAC-SHA256</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">GitHub Actions</span>
            <span className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-mono font-bold">Async Webhooks</span>
          </div>
        </div>
      </div>

      {/* Interactive Code Blueprint Explorer */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl mb-12">
        {/* Code Explorer Top Bar */}
        <div className="px-6 py-4 bg-zinc-900 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 font-mono text-xs font-bold text-zinc-400">
              {codeSnippets[activeTab].filename}
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('typescript')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'typescript'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              TypeScript SDK
            </button>
            <button
              onClick={() => setActiveTab('postgres')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'postgres'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              PostgreSQL &amp; RLS
            </button>
            <button
              onClick={() => setActiveTab('webhooks')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'webhooks'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Webhooks
            </button>
            <button
              onClick={() => setActiveTab('mcp')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'mcp'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40 shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              MCP Protocol
            </button>
          </div>
        </div>

        {/* Code Content View */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400">
            <span>{codeSnippets[activeTab].title}</span>
            <button
              onClick={() => copyToClipboard(codeSnippets[activeTab].code, activeTab)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-xs font-mono font-bold transition-colors"
            >
              {copied === activeTab ? (
                <>
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Snippet</span>
                </>
              )}
            </button>
          </div>

          <pre className="overflow-x-auto text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <code>{codeSnippets[activeTab].code}</code>
          </pre>

          <p className="mt-4 text-xs font-mono text-zinc-400 leading-relaxed border-t border-zinc-800/80 pt-3">
            <strong className="text-zinc-300">Mechanism:</strong> {codeSnippets[activeTab].explanation}
          </p>
        </div>
      </div>

      {/* Enterprise Security & Compliance Checklist */}
      <div className="bg-zinc-50 border border-zinc-300 rounded-3xl p-8">
        <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-4">
          Enterprise Security &amp; Compliance Invariants
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-bold text-zinc-950 flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> Zero-Trust Isolation
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed font-semibold">
              All database queries execute under authenticated Row-Level Security policies. No single tenant can access another organization&apos;s audit telemetry.
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-zinc-950 flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> Deterministic Verification
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed font-semibold">
              Calculations for Product Debt Index (PDI) and Revenue Per Engineer (APER) use immutable mathematical models with cryptographically auditable run histories.
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-bold text-zinc-950 flex items-center gap-2">
              <span className="text-emerald-600 font-bold">✓</span> Encrypted Secrets Management
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed font-semibold">
              API tokens and database credentials are stored in KMS-encrypted environment variables and rotated on deterministic schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
