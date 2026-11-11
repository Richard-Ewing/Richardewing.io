'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

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
    <div className="bg-[#faf8f2] text-[var(--ink)] rounded-lg border border-[var(--line)] overflow-hidden">
      {/* Platform Switcher Tabs - Warm Paper Editorial Style */}
      <div
        role="tablist"
        aria-label="Production AI Platforms"
        className="grid grid-cols-1 md:grid-cols-3 border-b border-[var(--line)] bg-[var(--paper2)]"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activePlatform === 'exogram'}
          onClick={() => setActivePlatform('exogram')}
          className={`p-5 sm:p-6 text-left transition-colors border-b-2 cursor-pointer ${
            activePlatform === 'exogram'
              ? 'border-[var(--forest)] bg-[#faf8f2] text-[var(--ink)]'
              : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'
          }`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--gold)] block mb-1.5">
            01 / CONVERSATIONAL &amp; AGENTIC AI
          </span>
          <div className="font-serif text-[22px] font-medium text-[var(--ink)] leading-tight">
            Exogram.ai
          </div>
          <div className="text-[12px] text-[var(--muted)] mt-1">
            Persistent memory, self-wiring graph &amp; deliverable canvas
          </div>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activePlatform === 'careerwin'}
          onClick={() => setActivePlatform('careerwin')}
          className={`p-5 sm:p-6 text-left transition-colors border-b-2 cursor-pointer md:border-x md:border-x-[var(--line)] ${
            activePlatform === 'careerwin'
              ? 'border-b-[var(--forest)] bg-[#faf8f2] text-[var(--ink)]'
              : 'border-b-transparent text-[var(--muted)] hover:text-[var(--ink)]'
          }`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--gold)] block mb-1.5">
            02 / EVIDENCE-BOUND AI SAAS
          </span>
          <div className="font-serif text-[22px] font-medium text-[var(--ink)] leading-tight">
            CareerWin.ai
          </div>
          <div className="text-[12px] text-[var(--muted)] mt-1">
            Master Work Record, ATS forensics &amp; browser extension
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
              : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'
          }`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--gold)] block mb-1.5">
            03 / 45 LIVE DIAGNOSTIC TOOLS
          </span>
          <div className="font-serif text-[22px] font-medium text-[var(--ink)] leading-tight">
            The AI Economist Engine
          </div>
          <div className="text-[12px] text-[var(--muted)] mt-1">
            Interactive P&amp;L simulator &amp; executive benchmarks
          </div>
        </button>
      </div>

      {/* Active Platform Content */}
      <div className="p-6 sm:p-9">
        {activePlatform === 'exogram' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer 01: Product Vision, Pivot & Commercial Value */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--gold)] block">
                LAYER 01 / PRODUCT VISION &amp; USER OUTCOME · SOLE FOUNDER &amp; CEO
              </span>
              <h3 className="font-serif text-[26px] sm:text-[30px] leading-[1.15] font-medium text-[var(--ink)] m-0">
                Built for people who want finished work products, not unpaid prompt labor.
              </h3>
              <p className="text-[13.5px] leading-[1.75] text-[var(--muted)]">
                Most people still re-explain themselves to AI every session. I pivoted Exogram
                from developer middleware into a live, publicly available conversational AI
                platform anyone can use, owning vision, strategy, development, and launch solo
                end to end. Users speak in shorthand; Exogram remembers context across sessions,
                stages memos, decks, decision matrices, and checklists on an integrated canvas,
                and deploys autonomous agents with human approval points.
              </p>

              <div className="border-t border-[var(--line)] pt-4 space-y-2">
                {[
                  'Pivoted from developer middleware to a live consumer & operator AI platform',
                  'Work products, not transcripts: auto-stages memos, decks, and matrices on canvas',
                  'Directed an AI-native multi-agent development workflow under human review',
                  'Recognized in the official AWS Startups Showcase directory',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-[12.5px] text-[var(--ink)] leading-relaxed"
                  >
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="actions">
                <a
                  href="https://exogram.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-gold"
                >
                  Open Exogram.ai <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link href="/exogram" className="button button-outline">
                  Read platform overview <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Layer 02: AI & Systems Architecture (Warm Paper Architectural Cards) */}
            <div className="lg:col-span-6 bg-white border border-[var(--line)] rounded-lg p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--forest)] font-semibold">
                  LAYER 02 / AI &amp; SYSTEMS ARCHITECTURE ENGINEERED
                </span>
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  Python · TypeScript · Multi-LLM
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    idx: '01 / LIVING MEMORY & SELF-WIRING KNOWLEDGE GRAPH',
                    desc: 'Encrypted tenant memory vault paired with a 7-layer entity and temporal state graph (current, proposed, verified, superseded, expired) and Pinecone vector retrieval.',
                  },
                  {
                    idx: '02 / SHORTHAND INTENT & MULTI-MODEL ORCHESTRATION',
                    desc: 'Infers user intent from shorthand input, retrieves task-scoped context, and routes across frontier reasoning models (Claude, Gemini, OpenAI) without manual prompting.',
                  },
                  {
                    idx: '03 / SOURCE GROUNDING, CORRECTION & HARD REVOCATION',
                    desc: 'Grounds agent outputs in verified records with full audit trails, explicit user memory correction, and strict per-user privacy boundaries.',
                  },
                  {
                    idx: '04 / HUMAN APPROVAL GATES & EAAP RFC-0001',
                    desc: 'Enforces pre-execution human approval points and deterministic Python admissibility checks (ALLOW / BLOCK / ESCALATE) before agents act on external systems.',
                  },
                ].map((row) => (
                  <div
                    key={row.idx}
                    className="p-3.5 rounded-md bg-[#faf8f2] border border-[var(--line)]"
                  >
                    <div className="font-mono text-[10px] tracking-[0.1em] text-[var(--gold)] font-semibold mb-1">
                      {row.idx}
                    </div>
                    <p className="text-[12.5px] leading-[1.65] text-[var(--muted)] m-0">
                      {row.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <Link href="/exogram/architecture" className="text-link mt-0">
                  Inspect technical architecture &amp; EAAP RFC-0001 ↗
                </Link>
              </div>
            </div>
          </div>
        )}

        {activePlatform === 'careerwin' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer 01: Product Vision & Commercial Value */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--gold)] block">
                LAYER 01 / PRODUCT VISION &amp; USER OUTCOME · FOUNDER &amp; ARCHITECT
              </span>
              <h3 className="font-serif text-[26px] sm:text-[30px] leading-[1.15] font-medium text-[var(--ink)] m-0">
                Replacing hallucinated AI resume fluff with a verified Master Work Record.
              </h3>
              <p className="text-[13.5px] leading-[1.75] text-[var(--muted)]">
                Generic AI resume writers invent fake metrics that fall apart in hiring-manager
                interviews, while applicants type the same job history into dozens of portals.
                CareerWin guides users into a persistent Master Work Record and Cut Vault once,
                then compiles honest, role-leveled ATS resumes and interview prep backed by our
                2026 Enterprise ATS Benchmark Study.
              </p>

              <div className="border-t border-[var(--line)] pt-4 space-y-2">
                {[
                  '5-step onboarding into a reusable Master Work Record and Cut Vault',
                  'Published the 2026 Enterprise ATS & AI Resume Benchmark Study',
                  'Plain-English self-serve UX accessible across every discipline',
                  'Resume teardown, LinkedIn contradiction checks & STAR interview coaching',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-[12.5px] text-[var(--ink)] leading-relaxed"
                  >
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="actions">
                <a
                  href="https://careerwin.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-gold"
                >
                  Open CareerWin.ai <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link href="/careerwin" className="button button-outline">
                  Read CareerWin case study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Layer 02: AI & Systems Architecture */}
            <div className="lg:col-span-6 bg-white border border-[var(--line)] rounded-lg p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--forest)] font-semibold">
                  LAYER 02 / AI &amp; SYSTEMS ARCHITECTURE ENGINEERED
                </span>
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  Next.js · Edge · Supabase RLS
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    idx: '01 / 10-LAYER ZERO-FABRICATION COMPILER',
                    desc: 'Multi-model Gemini and Claude pipeline bound strictly to verified Master Work Record entries so generated bullets never invent employers, dates, or fake numbers.',
                  },
                  {
                    idx: '02 / SUPABASE AUTH & ROW-LEVEL SECURITY VAULT',
                    desc: 'Production PostgreSQL persistence (v0.2.422) storing career history, Cut Vault bullets, and application versions behind verified Row-Level Security policies.',
                  },
                  {
                    idx: '03 / SEMANTIC GAP SCORING & DOCX/PDF ENGINE',
                    desc: 'Parses PDF and DOCX resumes, cross-checks resume vs. LinkedIn claims, scores job-description fit, and exports clean single-column ATS documents.',
                  },
                  {
                    idx: '04 / CLOUDFLARE EDGE + UNIVERSAL ATS CHROME EXTENSION',
                    desc: 'Edge-deployed SaaS paired with a companion browser extension that autofills Workday, Greenhouse, and Lever applications directly from verified records.',
                  },
                ].map((row) => (
                  <div
                    key={row.idx}
                    className="p-3.5 rounded-md bg-[#faf8f2] border border-[var(--line)]"
                  >
                    <div className="font-mono text-[10px] tracking-[0.1em] text-[var(--gold)] font-semibold mb-1">
                      {row.idx}
                    </div>
                    <p className="text-[12.5px] leading-[1.65] text-[var(--muted)] m-0">
                      {row.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePlatform === 'economist' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer 01: Interactive P&L Sandbox */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--gold)] block">
                LAYER 01 / LIVE EXECUTIVE DIAGNOSTIC SANDBOX
              </span>
              <h3 className="font-serif text-[26px] sm:text-[30px] leading-[1.15] font-medium text-[var(--ink)] m-0">
                Turning executive product and P&amp;L frameworks into interactive software.
              </h3>
              <p className="text-[13.5px] leading-[1.75] text-[var(--muted)]">
                Move the sliders below to test how I evaluate ARR Per Engineer (APER) and
                quantify the R&amp;D payroll trapped inside legacy maintenance before a
                portfolio review or QBR.
              </p>

              <div className="bg-white border border-[var(--line)] rounded-lg p-5 space-y-4">
                <div>
                  <div className="flex justify-between text-[12.5px] font-medium text-[var(--ink)] mb-1.5">
                    <span>Product Line ARR</span>
                    <span className="font-mono font-semibold text-[var(--forest)]">
                      ${arrInput}M ARR
                    </span>
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
                  <div className="flex justify-between text-[12.5px] font-medium text-[var(--ink)] mb-1.5">
                    <span>Product &amp; Engineering Headcount</span>
                    <span className="font-mono font-semibold text-[var(--forest)]">
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
                  <div className="flex justify-between text-[12.5px] font-medium text-[var(--ink)] mb-1.5">
                    <span>Sprints Spent on Maintenance &amp; Debt</span>
                    <span className="font-mono font-semibold text-[var(--gold)]">
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

              <div className="actions">
                <Link href="/diagnose" className="button button-dark">
                  Run guided diagnostic <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/toolkit" className="button button-outline">
                  $29 Operating Kit ↗
                </Link>
              </div>
            </div>

            {/* Layer 02: Readout + Ontology Architecture */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-white border border-[var(--line)]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    ARR Per Engineer (APER)
                  </div>
                  <div className="font-serif text-[30px] font-semibold text-[var(--forest)] mt-1">
                    ${revenuePerEng.toLocaleString()}
                  </div>
                  <div className="font-mono text-[11px] text-[var(--gold)] mt-1">
                    {revenuePerEng >= 350000
                      ? 'Top-quartile efficiency'
                      : 'Below $350K SaaS benchmark'}
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-white border border-[var(--line)]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    Annual Maintenance Carry
                  </div>
                  <div className="font-serif text-[30px] font-semibold text-[var(--ink)] mt-1">
                    ${(trappedCapital / 1000000).toFixed(2)}M/yr
                  </div>
                  <div className="font-mono text-[11px] text-[var(--muted)] mt-1">
                    {maintenanceShare}% of estimated R&amp;D payroll
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-[var(--paper2)] border border-[var(--line)] text-[12.5px] leading-[1.7] text-[var(--ink)]">
                <strong className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--forest)] block mb-1">
                  PORTFOLIO CONSOLIDATION READOUT
                </strong>
                Sunsetting low-adoption features and clearing stale backlog frees roughly{' '}
                <strong>${recoverableArrCapacity.toLocaleString()}/yr</strong> of existing
                engineering capacity for net-new roadmap delivery without adding headcount.{' '}
                <Link href="/advisory" className="font-semibold text-[var(--forest)] underline">
                  Apply this in an advisory sprint ↗
                </Link>
              </div>

              <div className="p-5 rounded-lg bg-white border border-[var(--line)] space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--gold)] block">
                  LAYER 02 / ONTOLOGY &amp; TOOLING ARCHITECTURE
                </span>
                <p className="text-[12.5px] leading-[1.7] text-[var(--muted)] m-0">
                  Built on Next.js and Cloudflare Workers: 45 interactive financial and AI
                  governance calculators (PDI, AUEB, EV-SE, MCP Auditor) wired into a
                  TypeScript knowledge graph, JSON-LD provenance schemas, and{' '}
                  <Link href="/tools" className="font-semibold text-[var(--forest)] underline">
                    self-serve executive benchmarks ↗
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
