'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Calculator,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';

type PlatformKey = 'exogram' | 'careerwin' | 'economist';

export default function PortfolioInteractiveShowcase() {
  const [activePlatform, setActivePlatform] = useState<PlatformKey>('exogram');

  // Interactive P&L & R&D Capacity Simulator inside Tab 03
  const [arrInput, setArrInput] = useState<number>(16);
  const [engHeadcount, setEngHeadcount] = useState<number>(40);
  const [maintenanceShare, setMaintenanceShare] = useState<number>(65);

  const revenuePerEng = Math.round((arrInput * 1000000) / engHeadcount);
  const trappedCapital = Math.round(engHeadcount * 165000 * (maintenanceShare / 100));
  const recoverableArrCapacity = Math.round(trappedCapital * 0.4);

  return (
    <div className="bg-[#faf8f2] text-[var(--ink)] rounded-2xl border border-[var(--line)] shadow-sm overflow-hidden">
      {/* Platform Switcher Tabs */}
      <div
        role="tablist"
        aria-label="Production AI Platforms"
        className="grid grid-cols-1 md:grid-cols-3 border-b border-[var(--line)] bg-[#ebe7dc]/70"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activePlatform === 'exogram'}
          onClick={() => setActivePlatform('exogram')}
          className={`p-5 sm:p-6 text-left transition-colors border-b-2 cursor-pointer ${
            activePlatform === 'exogram'
              ? 'border-[var(--forest)] bg-[#faf8f2] text-[var(--ink)]'
              : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[#faf8f2]/60'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
              01 · AWS Startups Showcase
            </span>
            <ShieldCheck className="w-4 h-4 text-[var(--forest)]" />
          </div>
          <div className="text-xl font-serif font-semibold text-[var(--ink)]">
            Exogram AI &amp; EAAP
          </div>
          <div className="text-xs text-[var(--muted)] mt-0.5">
            Persistent Context Engine &amp; Runtime Agent Control Plane
          </div>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activePlatform === 'careerwin'}
          onClick={() => setActivePlatform('careerwin')}
          className={`p-5 sm:p-6 text-left transition-colors border-b-2 cursor-pointer ${
            activePlatform === 'careerwin'
              ? 'border-[var(--forest)] bg-[#faf8f2] text-[var(--ink)]'
              : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[#faf8f2]/60'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
              02 · Full-Stack AI SaaS (v0.2.422)
            </span>
            <Award className="w-4 h-4 text-[var(--forest)]" />
          </div>
          <div className="text-xl font-serif font-semibold text-[var(--ink)]">
            CareerWin.ai
          </div>
          <div className="text-xs text-[var(--muted)] mt-0.5">
            Evidence-Bound Career OS &amp; Universal ATS Extension
          </div>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activePlatform === 'economist'}
          onClick={() => setActivePlatform('economist')}
          className={`p-5 sm:p-6 text-left transition-colors border-b-2 cursor-pointer ${
            activePlatform === 'economist'
              ? 'border-[var(--forest)] bg-[#faf8f2] text-[var(--ink)]'
              : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[#faf8f2]/60'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
              03 · 45 Live Tools · 133-Node Ontology
            </span>
            <Calculator className="w-4 h-4 text-[var(--forest)]" />
          </div>
          <div className="text-xl font-serif font-semibold text-[var(--ink)]">
            The AI Economist Engine
          </div>
          <div className="text-xs text-[var(--muted)] mt-0.5">
            Quantitative Diagnostics &amp; Live P&amp;L Sandbox
          </div>
        </button>
      </div>

      {/* Active Platform View */}
      <div className="p-6 sm:p-10">
        {activePlatform === 'exogram' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer 01: Product & Business Problem */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--forest)]/10 border border-[var(--forest)]/20 text-[var(--forest)] text-[11px] font-mono font-bold uppercase">
                <span>Layer 01 · Product &amp; Commercial Architecture</span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-[var(--gold)] uppercase tracking-wider block mb-1">
                  Sole Founder, CEO &amp; Chief Architect (Aug 2024 - Present)
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--ink)]">
                  Exogram AI: Persistent Context Without Prompt Friction, Paired With Hard Agent Boundaries
                </h3>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Standard AI chat tools suffer from two expensive failures: users waste hours
                re-explaining goals across stateless threads, and autonomous agents take high-risk
                actions with zero deterministic oversight. I built Exogram AI to retain evolving
                cross-session context automatically (<em>Infer to personalize. Confirm to plan. Authorize to act.</em>)
                and authored the open <strong>Exogram Action Admissibility Protocol (EAAP RFC-0001)</strong> so
                every external action passes pre-execution judgment before mutating production state.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  'Recognized in the AWS Startups Showcase directory',
                  'Eliminates repetitive prompt engineering across multi-week workflows',
                  'Separates conversational personalization from external action authority',
                  'User-owned context with explicit correction and hard revocation',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs text-[var(--ink)] bg-white p-3.5 rounded-xl border border-[var(--line)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/exogram" className="button button-dark text-xs">
                  Inspect Exogram Case Study <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                </Link>
                <Link href="/exogram/architecture" className="button button-outline text-xs">
                  View System Architecture ↗
                </Link>
                <a
                  href="https://exogram.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-gold text-xs"
                >
                  Visit Exogram.ai <ExternalLink className="w-3.5 h-3.5 inline ml-1" />
                </a>
              </div>
            </div>

            {/* Layer 02: AI & Systems Architecture */}
            <div className="lg:col-span-6 bg-[var(--forest2)] text-white rounded-2xl p-6 sm:p-7 space-y-4 border border-[var(--forest)]">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#d8c7a8] font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Layer 02 · AI &amp; Systems Stack Engineered
                </span>
                <span className="font-mono text-[10px] text-emerald-300 uppercase">
                  Python · TypeScript · MCP
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[#d8c7a8] font-bold">
                    01 · 7-Layer Context &amp; Knowledge Graph Engine
                  </div>
                  <p className="text-zinc-300 mt-1 leading-relaxed m-0">
                    Event provenance log -&gt; semantic entity extraction -&gt; relationship graph -&gt;
                    temporal state lifecycle (<code className="text-emerald-300">current</code>,{' '}
                    <code className="text-emerald-300">proposed</code>,{' '}
                    <code className="text-emerald-300">verified</code>,{' '}
                    <code className="text-emerald-300">superseded</code>,{' '}
                    <code className="text-emerald-300">expired</code>) -&gt; task-scoped context assembly.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[#d8c7a8] font-bold">
                    02 · Vector RAG + Encrypted Tenant Memory
                  </div>
                  <p className="text-zinc-300 mt-1 leading-relaxed m-0">
                    Pinecone vector embeddings with strict per-user namespace isolation paired with
                    encrypted Supabase/PostgreSQL relational state and hard revocation cascades.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[#d8c7a8] font-bold">
                    03 · Multi-LLM Orchestration &amp; MCP Connectivity
                  </div>
                  <p className="text-zinc-300 mt-1 leading-relaxed m-0">
                    Dynamic routing across Anthropic Claude, Google Gemini, and OpenAI models with
                    governed Model Context Protocol (MCP) tool execution.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-400/30">
                  <div className="font-mono text-emerald-300 font-bold">
                    04 · EAAP RFC-0001 Control Plane (Apache 2.0)
                  </div>
                  <p className="text-zinc-200 mt-1 leading-relaxed m-0">
                    4-layer deterministic runtime (<code className="text-emerald-300">L1</code> PII Air-Gap
                    Ledger, <code className="text-emerald-300">L2</code> HMAC Meaning Engine,{' '}
                    <code className="text-emerald-300">L3</code> Zero-Inference Python Judgment Gates,{' '}
                    <code className="text-emerald-300">L4</code> SHA-256 TOCTOU State Hash -&gt;{' '}
                    <code className="text-emerald-300">ALLOW / BLOCK / ESCALATE</code> across 14 invariants).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePlatform === 'careerwin' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer 01: Product & Business Problem */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--forest)]/10 border border-[var(--forest)]/20 text-[var(--forest)] text-[11px] font-mono font-bold uppercase">
                <span>Layer 01 · Product &amp; Commercial Architecture</span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-[var(--gold)] uppercase tracking-wider block mb-1">
                  Founder &amp; Product Architect · Production SaaS v0.2.422
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--ink)]">
                  CareerWin.ai: An Evidence-Bound Career Operating System Built Against AI Resume Slop
                </h3>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Generic AI resume writers invent fake metrics that collapse during live hiring-manager
                interviews, and force candidates to re-upload static files for every single job post.
                I designed CareerWin around a persistent <strong>Master Work Record</strong> and{' '}
                <strong>Cut Vault</strong> so candidates store every verified career bullet once, tailor
                honest ATS-ready applications in seconds, and auto-fill enterprise job boards without
                hallucinated experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  'Published the 2026 Enterprise ATS & AI Resume Benchmark Study',
                  '5-step guided onboarding into a reusable Master Work Record',
                  'Plain-spoken UX accessible to every profession with zero jargon',
                  'Resume forensics, LinkedIn contradiction checks, and STAR interview prep',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-xs text-[var(--ink)] bg-white p-3.5 rounded-xl border border-[var(--line)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/careerwin" className="button button-dark text-xs">
                  Read CareerWin Case Study <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                </Link>
                <a
                  href="https://careerwin.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-gold text-xs"
                >
                  Visit CareerWin.ai <ExternalLink className="w-3.5 h-3.5 inline ml-1" />
                </a>
              </div>
            </div>

            {/* Layer 02: AI & Systems Architecture */}
            <div className="lg:col-span-6 bg-[var(--forest2)] text-white rounded-2xl p-6 sm:p-7 space-y-4 border border-[var(--forest)]">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#d8c7a8] font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Layer 02 · AI &amp; Systems Stack Engineered
                </span>
                <span className="font-mono text-[10px] text-emerald-300 uppercase">
                  Next.js · Workers · Supabase RLS
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[#d8c7a8] font-bold">
                    01 · 10-Layer Zero-Fabrication Career Compiler
                  </div>
                  <p className="text-zinc-300 mt-1 leading-relaxed m-0">
                    Structured multi-model pipeline (<code className="text-emerald-300">@google/genai</code>{' '}
                    Gemini + Anthropic Claude fallback) enforcing strict source-evidence traceability:
                    zero invented employers, titles, dates, or fabricated revenue claims.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[#d8c7a8] font-bold">
                    02 · Supabase PostgreSQL Vault + Verified Row-Level Security
                  </div>
                  <p className="text-zinc-300 mt-1 leading-relaxed m-0">
                    Persistent Master Work Record, Cut Vault (saving strong bullets cut for 1-page
                    length), and onboarding state machine backed by Supabase Auth + PostgreSQL with
                    automated RLS policy verification (<code className="text-emerald-300">verify:rls-initplan</code>).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono text-[#d8c7a8] font-bold">
                    03 · Semantic JD Gap Analysis &amp; Document Engine
                  </div>
                  <p className="text-zinc-300 mt-1 leading-relaxed m-0">
                    Parses PDF/DOCX uploads, cross-examines resume vs. LinkedIn claims, scores job
                    requirement coverage, and compiles clean single-column ATS DOCX and PDF exports.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-400/30">
                  <div className="font-mono text-emerald-300 font-bold">
                    04 · Cloudflare Edge Runtime + Universal ATS Chrome Extension
                  </div>
                  <p className="text-zinc-200 mt-1 leading-relaxed m-0">
                    Deployed globally on Cloudflare Workers (<code className="text-emerald-300">@opennextjs/cloudflare</code>)
                    paired with the companion <code className="text-emerald-300">careerwin-extension</code> for
                    live Workday, Greenhouse, and Lever portal autofill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePlatform === 'economist' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer 01 + Interactive P&L Sandbox */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--forest)]/10 border border-[var(--forest)]/20 text-[var(--forest)] text-[11px] font-mono font-bold uppercase">
                <span>Layer 01 · Interactive Executive Diagnostic Sandbox</span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-[var(--gold)] uppercase tracking-wider block mb-1">
                  Originator, Author &amp; Systems Builder · RichardEwing.io
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--ink)]">
                  The AI Economist Engine: Turning Executive Frameworks Into Live P&amp;L Software
                </h3>
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Rather than publishing static blog posts alone, I engineered an operational software
                suite of <strong>45 interactive financial, product debt, and AI security calculators</strong>.
                Move the sliders below to test how I model a software team&apos;s ARR Per Engineer
                (APER) and maintenance carry during an advisory sprint.
              </p>

              <div className="bg-white border border-[var(--line)] rounded-xl p-5 space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[var(--ink)] mb-1.5">
                    <span>Current Product Line ARR:</span>
                    <span className="font-mono font-bold text-[var(--forest)]">${arrInput}M ARR</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={100}
                    step={2}
                    value={arrInput}
                    aria-label="Current Product Line ARR in Millions"
                    onChange={(e) => setArrInput(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[var(--ink)] mb-1.5">
                    <span>Product &amp; Engineering Headcount:</span>
                    <span className="font-mono font-bold text-[var(--forest)]">
                      {engHeadcount} FTEs
                    </span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={250}
                    step={5}
                    value={engHeadcount}
                    aria-label="Total Product and Engineering Headcount"
                    onChange={(e) => setEngHeadcount(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[var(--ink)] mb-1.5">
                    <span>Sprint Capacity Consumed by Maintenance &amp; Debt:</span>
                    <span className="font-mono font-bold text-[var(--gold)]">
                      {maintenanceShare}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={85}
                    step={5}
                    value={maintenanceShare}
                    aria-label="Percentage of Sprints Spent on Maintenance and Debt"
                    onChange={(e) => setMaintenanceShare(Number(e.target.value))}
                    className="w-full accent-[var(--gold)] cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/diagnose" className="button button-dark text-xs">
                  Run Guided Diagnostic <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                </Link>
                <Link href="/tools" className="button button-outline text-xs">
                  Browse All 45 Tools ↗
                </Link>
                <Link href="/toolkit" className="button button-gold text-xs">
                  $29 Operating Kit ↗
                </Link>
              </div>
            </div>

            {/* Layer 02: Live Output + Architecture */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-[var(--line)]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                    ARR Per Engineer (APER)
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[var(--forest)] mt-1">
                    ${revenuePerEng.toLocaleString()}
                  </div>
                  <div className="text-xs font-mono text-[var(--gold)] mt-1">
                    {revenuePerEng >= 350000
                      ? 'Top-Quartile Capital Efficiency'
                      : 'Below $350K SaaS Benchmark'}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-white border border-[var(--line)]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                    Annual Maintenance Carry
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[var(--ink)] mt-1">
                    ${(trappedCapital / 1000000).toFixed(2)}M/yr
                  </div>
                  <div className="text-xs font-mono text-[var(--muted)] mt-1">
                    {maintenanceShare}% of estimated R&amp;D payroll
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#ebe7dc] border border-[var(--line)] text-xs text-[var(--ink)] leading-relaxed">
                <strong className="font-mono uppercase text-[var(--forest)] block mb-1">
                  90-Day Portfolio Surgery Readout:
                </strong>
                Retiring bottom-decile legacy features and automating repetitive review gates frees
                roughly <strong>${recoverableArrCapacity.toLocaleString()}/yr</strong> of existing
                engineering capacity for net-new revenue work without hiring.{' '}
                <Link href="/advisory" className="text-[var(--forest)] font-semibold underline">
                  See how we execute this in a sprint ↗
                </Link>
              </div>

              <div className="bg-[var(--forest2)] text-white rounded-2xl p-6 space-y-3 border border-[var(--forest)] text-xs">
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#d8c7a8] font-bold border-b border-white/15 pb-2.5">
                  Layer 02 · Knowledge Graph, Security &amp; Edge Architecture
                </div>
                <p className="text-zinc-300 leading-relaxed m-0">
                  <strong className="text-white">45 Interactive Route Engines:</strong> Includes PDI,
                  AUEB, EV-SE, Vibe-Coded App Security Scanner, MCP Security Auditor, Supabase RLS
                  Checker, and Department AI Playbook Compiler.
                </p>
                <p className="text-zinc-300 leading-relaxed m-0">
                  <strong className="text-white">133-Node Canonical Ontology:</strong> Typed
                  TypeScript semantic graph linking 174+ published essays, diagnostic formulas,
                  JSON-LD provenance schemas, and <code className="text-emerald-300">/llms.txt</code>{' '}
                  machine-readable citation endpoints on Cloudflare Workers.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
