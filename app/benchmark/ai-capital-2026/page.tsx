import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Cpu,
  ShieldAlert,
  TrendingDown,
  Activity,
  Scale,
  ShieldCheck,
  Database,
} from 'lucide-react';
import { MetricPanel, ChartPanel } from '@/components/editorial';

export const metadata: Metadata = {
  title: '2026 AI Capital Allocation Benchmark',
  description:
    'Empirical 2026 M&A telemetry covering the 4.2M token/day SLM crossover threshold, engineering autonomy rates, latency churn, and pgvector adoption.',
  keywords: [
    'AI economics',
    'LLM CapEx vs OpEx',
    'tech debt benchmarks 2026',
    'AI wrapper latency',
    'FTE displacement timeline',
    'capital engineering statistics',
    'RAG latency impact',
    'technical insolvency horizon',
  ],
  alternates: { canonical: 'https://www.richardewing.io/benchmark/ai-capital-2026' },
};

export default function AICapitalBenchmark() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1e2924] pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6 space-y-20">
        <div>
          <Link
            href="/benchmark"
            className="inline-flex items-center text-xs font-mono font-bold text-[#66716a] hover:text-[#162e26] transition-colors uppercase tracking-widest"
          >
            &larr; Back to Benchmarks
          </Link>
        </div>

        {/* Hero Headers */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b77a35]/30 bg-[#b77a35]/10 text-[#b77a35] text-xs font-bold font-mono uppercase tracking-widest">
            Open Data Benchmark · Q2 2026 Baseline
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#162e26] leading-[1.1]">
            The 2026 AI Capital Engineering Index
          </h1>
          <p
            itemProp="description"
            className="text-lg sm:text-xl text-[#4a5850] max-w-3xl leading-relaxed"
          >
            Reference telemetry for CFOs, CTOs, VPs of Engineering, and Private Equity Operating Partners analyzing LLM operating costs, architectural latency, workforce autonomy rates, and the CapEx vs OpEx crossover of AI infrastructure.
          </p>
          <div className="flex flex-wrap gap-3 items-center pt-1">
            <Link
              href="/benchmark/llm-cost-and-margin-index"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#162e26] hover:bg-[#29473b] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all"
            >
              View Live Oct 2026 LLM Token &amp; Margin Index <ArrowRight size={14} />
            </Link>
            <span className="text-xs font-mono text-[#66716a] border border-[#24332b]/15 px-3 py-2 bg-white rounded-xl">
              Scope: 500+ Audited Engineering Cohorts
            </span>
          </div>
        </header>

        {/* Hard Data Hub 1: LLM Economics */}
        <section className="space-y-8">
          <h2 className="font-serif text-3xl font-bold text-[#162e26] flex items-center gap-3">
            <Cpu className="text-[#b77a35] w-7 h-7" /> 01. The CapEx vs OpEx Threshold
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricPanel
              variant="white"
              label="Avg API OpEx / Mo"
              value="$41,500"
              trend="+14% QoQ"
              trendDirection="down"
              subtext="Median external LLM inference spend across Series B+ SaaS cohorts."
            />
            <MetricPanel
              variant="forest"
              label="The Crossover Point"
              value="4.2M"
              trend="Tokens / Day"
              trendDirection="neutral"
              subtext="Sustained daily volume triggering reserved SLM GPU cost advantage."
            />
            <MetricPanel
              variant="paper"
              label="Acquisition Penalty"
              value="-2.4x"
              trend="EBITDA Multiple"
              trendDirection="down"
              subtext="Valuation multiple compression during M&A diligence for un-gated API wrappers."
            />
          </div>

          <div className="space-y-4 text-[#4a5850] text-base leading-relaxed">
            <p>
              The costliest architectural mistake of the past 24 months is the un-metered RAG wrapper trap. Engineering leaders connected user interfaces directly to commercial foundation model APIs without modeling marginal cost per power user at scale.
            </p>
            <p>
              While external APIs buy rapid time-to-market at launch, 2026 M&amp;A diligence data is unforgiving: <strong className="text-[#162e26]">software companies spending over $15,000/month on un-cached external inference APIs without per-customer margin controls face immediate valuation discounts.</strong> Private Equity Operating Partners classify un-gated token spend as variable COGS tied to third-party pricing power rather than proprietary R&amp;D.
            </p>
            <p>
              Across audited workloads, once sustained volume crosses <strong className="text-[#162e26]">4.2 Million Tokens/Day</strong> at steady utilization, fine-tuning and serving quantized 7B to 26B open-weight models or implementing an 80/20 Flash tier router beats raw frontier API calls.
            </p>
          </div>

          <div className="rounded-2xl bg-[#162e26] text-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#d8c7a8]">
                <ShieldAlert className="w-4 h-4" /> Capital Efficiency Check
              </div>
              <h3 className="font-serif text-2xl font-bold">
                Are Power Users Turning Your SaaS Seats Gross-Margin Negative?
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Test your exact prompt token volume against commercial API rates in 60 seconds, or book a forensic R&amp;D capital and pricing audit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/tools/slm-vs-api"
                className="px-5 py-3 bg-[#b77a35] hover:opacity-95 text-white font-bold text-sm rounded-xl transition-all"
              >
                Run SLM vs API Calculator →
              </Link>
              <Link
                href="/services"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition-all"
              >
                Book Audit
              </Link>
            </div>
          </div>
        </section>

        {/* Hard Data Hub 2: FTE Displacement */}
        <section className="space-y-8">
          <h2 className="font-serif text-3xl font-bold text-[#162e26] flex items-center gap-3">
            <TrendingDown className="text-[#b77a35] w-7 h-7" /> 02. The FTE Autonomy &amp; Redeployment Index
          </h2>

          <ChartPanel
            variant="white"
            title="Task Autonomy Progression by Engineering Function (2024 vs 2026)"
            subtitle="Share of routine ticket backlog executed by deterministic agent pipelines under senior human review."
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-[#24332b]/15 font-mono text-xs text-[#66716a] uppercase tracking-wider">
                    <th className="pb-3 pr-6">Engineering Role</th>
                    <th className="pb-3 pr-6">2024 Autonomy Rate</th>
                    <th className="pb-3 pr-6 text-[#162e26]">2026 Autonomy Rate</th>
                    <th className="pb-3 text-right">Primary Automation Mechanism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#24332b]/10 text-[#1e2924]">
                  <tr>
                    <td className="py-3.5 pr-6 font-semibold">L1/L2 Frontend Engineer</td>
                    <td className="py-3.5 pr-6 font-mono text-[#66716a]">14%</td>
                    <td className="py-3.5 pr-6 font-mono font-bold text-[#162e26]">78%</td>
                    <td className="py-3.5 text-right text-[#4a5850]">Component-bound agentic UI generation</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 font-semibold">QA / SDET Analyst</td>
                    <td className="py-3.5 pr-6 font-mono text-[#66716a]">22%</td>
                    <td className="py-3.5 pr-6 font-mono font-bold text-[#162e26]">91%</td>
                    <td className="py-3.5 text-right text-[#4a5850]">Automated E2E regression &amp; compiler gates</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 font-semibold">Data Analyst (SQL)</td>
                    <td className="py-3.5 pr-6 font-mono text-[#66716a]">18%</td>
                    <td className="py-3.5 pr-6 font-mono font-bold text-[#162e26]">65%</td>
                    <td className="py-3.5 text-right text-[#4a5850]">Schema-grounded Text-to-SQL pipelines</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 font-semibold">DevOps (Cluster Ops)</td>
                    <td className="py-3.5 pr-6 font-mono text-[#66716a]">8%</td>
                    <td className="py-3.5 pr-6 font-mono font-bold text-[#162e26]">45%</td>
                    <td className="py-3.5 text-right text-[#4a5850]">Terraform drift detection &amp; auto-remediation</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-6 font-semibold">Staff Architect / Principal</td>
                    <td className="py-3.5 pr-6 font-mono text-[#66716a]">2%</td>
                    <td className="py-3.5 pr-6 font-mono font-bold text-[#162e26]">12%</td>
                    <td className="py-3.5 text-right text-[#162e26] font-semibold">Not Displaced (3.4x Output Multiplier)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ChartPanel>

          <div className="space-y-4 text-[#4a5850] text-base leading-relaxed">
            <p>
              Engineering organizations still budgeting around the 2022 playbook of hiring large pods of junior syntax writers are losing margin to leaner peers. You do not scale an AI-native product by adding un-gated headcount; you scale by pairing Staff Architects and Engineering Managers with deterministic CI verification gates.
            </p>
            <p>
              In Q2 2026 cohorts, a Senior or Staff Architect operating inside strict spec-driven boundaries (`AGENTS.md`, `SPEC.md`, automated schema tests) out-ships a traditional 8-person pod by 3.4x at 60% lower gross payroll cost.
            </p>
          </div>
        </section>

        {/* Hard Data Hub 3: Architectural Latency */}
        <section className="space-y-8">
          <h2 className="font-serif text-3xl font-bold text-[#162e26] flex items-center gap-3">
            <Activity className="text-[#b77a35] w-7 h-7" /> 03. Architectural Latency vs Enterprise Renewal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MetricPanel
              variant="white"
              label="Synchronous Agent Timeout Zone"
              value="4.8s TTFB"
              trend="Activation Drop"
              trendDirection="down"
              subtext="Median wait time for synchronous multi-agent chains before users abandon the workflow."
            />
            <MetricPanel
              variant="paper"
              label="Sluggish UI Renewal Loss"
              value="22% Churn"
              trend="Enterprise ACV"
              trendDirection="down"
              subtext="Share of non-renewed B2B AI contracts citing slow, blocking UI response times at renewal."
            />
          </div>

          <p className="text-base text-[#4a5850] leading-relaxed">
            Across 500+ production deployments, synchronous AI features with Time-To-First-Byte exceeding <strong className="text-[#162e26]">2,000 milliseconds</strong> suffer a 60% drop in week-one seat activation. High-retention B2B teams move heavy reasoning off the blocking request thread into background queues while keeping inline interactions on sub-300ms Flash or edge models.
          </p>
        </section>

        {/* Hard Data Hub 4: Vector DB Consolidation */}
        <section className="space-y-8">
          <h2 className="font-serif text-3xl font-bold text-[#162e26] flex items-center gap-3">
            <Database className="text-[#b77a35] w-7 h-7" /> 04. Vector Store Consolidation Back to PostgreSQL
          </h2>

          <div className="bg-white border border-[#24332b]/15 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="w-full h-9 flex rounded-xl overflow-hidden text-xs font-mono font-bold">
              <div
                className="bg-[#162e26] h-full flex items-center px-4 text-white"
                style={{ width: '68%' }}
              >
                PostgreSQL (pgvector) · 68%
              </div>
              <div
                className="bg-[#b77a35] h-full flex items-center px-3 text-white"
                style={{ width: '18%' }}
              >
                Dedicated · 18%
              </div>
              <div
                className="bg-[#ebe7dc] h-full flex items-center px-3 text-[#1e2924]"
                style={{ width: '14%' }}
              >
                Other · 14%
              </div>
            </div>
            <p className="text-xs font-mono text-[#66716a] text-center">
              2026 Enterprise Vector Search Production Share (Series B+ Software Teams)
            </p>
          </div>

          <p className="text-base text-[#4a5850] leading-relaxed">
            Maintaining a separate standalone vector database beside a primary relational store created dual-write synchronization bugs, stale permissions, and redundant cloud bills. By Q2 2026, <strong className="text-[#162e26]">68% of audited enterprise teams</strong> consolidated RAG embeddings directly into PostgreSQL (`pgvector`) so row-level permissions and transactional state stay atomic.
          </p>
        </section>

        {/* Methodology & Limitations */}
        <section className="rounded-3xl bg-[#ebe7dc] border border-[#24332b]/15 p-8 space-y-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#b77a35] uppercase tracking-widest block">
              Benchmark Governance
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#162e26] mt-1">
              Methodology, Scope &amp; Limitations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#4a5850]">
            <div className="space-y-2">
              <h3 className="font-bold text-[#162e26] flex items-center gap-2">
                <Activity size={16} className="text-[#b77a35]" /> 1. Data Collection &amp; Scope
              </h3>
              <p className="leading-relaxed">
                Computed from anonymized diagnostic submissions across the AI Unit Economics Benchmark (AUEB), Product Debt Index (PDI), and APER calculators paired with advisory audit baselines.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#162e26] flex items-center gap-2">
                <Scale size={16} className="text-[#b77a35]" /> 2. Versioning &amp; Cadence
              </h3>
              <p className="leading-relaxed">
                Capital allocation metrics update quarterly; live provider token rates and SaaS seat margins update monthly in the LLM Cost &amp; Margin Index.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#162e26] flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#b77a35]" /> 3. Inclusion Criteria
              </h3>
              <p className="leading-relaxed">
                Filtered to B2B software organizations spending more than $2,500/month on cloud compute or commercial foundation model APIs.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-[#162e26] flex items-center gap-2">
                <ShieldAlert size={16} className="text-[#b77a35]" /> 4. Known Limitations
              </h3>
              <p className="leading-relaxed">
                API pricing and GPU spot availability shift rapidly; figures serve as directional baselines alongside company-specific P&amp;L diligence.
              </p>
            </div>
          </div>
        </section>

        {/* Final Conversion CTA */}
        <section className="rounded-3xl bg-[#162e26] text-white p-8 sm:p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Bring Audit-Ready Numbers to Your Next Board Meeting
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg">
            Do not wait for your CFO or PE sponsor to flag margin compression first. Run our free diagnostic calculators or book a fixed-scope turnaround sprint.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/services"
              className="px-8 py-4 bg-[#b77a35] hover:opacity-95 text-white font-bold text-sm rounded-xl transition-all inline-flex items-center gap-2"
            >
              Book a Strategic Audit <ArrowRight size={16} />
            </Link>
            <Link
              href="/tools"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl transition-all"
            >
              Explore All Diagnostic Calculators
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
