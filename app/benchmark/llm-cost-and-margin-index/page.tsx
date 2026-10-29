import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calculator, Database, AlertTriangle, CheckCircle2 } from 'lucide-react';
import {
  MetricPanel,
  ChartPanel,
  EditorialCard,
  AccordionItem,
} from '@/components/editorial';
import {
  BENCHMARK_EDITION,
  BENCHMARK_LAST_UPDATED,
  LLM_PRICING_INDEX,
  SAAS_MARGIN_STRESS_MATRIX,
} from '@/app/lib/llm-benchmark-data';

const SONNET_UNCACHED = SAAS_MARGIN_STRESS_MATRIX[0];
const SONNET_CACHED = SAAS_MARGIN_STRESS_MATRIX[1];
const FLASH_TIER_ROUTED = SAAS_MARGIN_STRESS_MATRIX[5];
const P90_29_UNCACHED_STR = `${SONNET_UNCACHED.marginAt29SeatPct.p90.toFixed(1)}%`;
const P90_29_CACHE_LIFT_STR = `+${(
  SONNET_CACHED.marginAt29SeatPct.p90 - SONNET_UNCACHED.marginAt29SeatPct.p90
).toFixed(1)} pts`;
const P90_49_CACHE_LIFT_STR = `+${(
  SONNET_CACHED.marginAt49SeatPct.p90 - SONNET_UNCACHED.marginAt49SeatPct.p90
).toFixed(1)} pts`;
const P90_49_ROUTER_FLOOR_STR = `${FLASH_TIER_ROUTED.marginAt49SeatPct.p90.toFixed(1)}%`;

const OG_IMAGE = `https://www.richardewing.io/api/og?title=2026%20LLM%20API%20Cost%20%26%20SaaS%20Margin%20Index&category=Living%20Benchmark&ml=P90%20%2429%20Seat%20Margin&mv=${encodeURIComponent(
  P90_29_UNCACHED_STR
)}&s=MARGIN%20INVERSION`;

export const metadata: Metadata = {
  title: '2026 LLM API Cost & SaaS Margin Index',
  description:
    'Compare Claude, OpenAI, Gemini, and self-hosted LLM token rates against $29, $49, and $99 SaaS seat gross margins at P50, P90, and P99 heavy usage.',
  keywords: [
    'LLM API cost comparison 2026',
    'Claude vs OpenAI vs Gemini token pricing',
    'AI SaaS gross margin benchmark',
    'prompt caching savings benchmark',
    'self hosted Llama vs API break even',
    'SaaS seat vs credit pricing margin',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/benchmark/llm-cost-and-margin-index',
  },
  openGraph: {
    title: '2026 LLM API Cost & SaaS Margin Index | Richard Ewing',
    description:
      'Monthly token pricing and P50/P90/P99 SaaS gross margin stress test across Anthropic, OpenAI, Google Gemini, and self-hosted GPUs.',
    url: 'https://www.richardewing.io/benchmark/llm-cost-and-margin-index',
    type: 'article',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 LLM API Cost & SaaS Margin Index | Richard Ewing',
    description:
      'See where $29 and $49 flat-rate AI SaaS seats flip gross-margin negative across Claude, GPT-5, Gemini, and open-weight GPUs.',
    images: [OG_IMAGE],
  },
};

function formatMarginBadge(pct: number) {
  if (pct < 0) {
    return (
      <span className="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded bg-[#c86d56]/15 text-[#9f3a24] border border-[#c86d56]/30">
        {pct.toFixed(1)}%
      </span>
    );
  }
  if (pct < 60) {
    return (
      <span className="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded bg-[#b77a35]/15 text-[#8a571d] border border-[#b77a35]/30">
        {pct.toFixed(1)}%
      </span>
    );
  }
  return (
    <span className="inline-block font-mono font-bold text-xs px-2 py-0.5 rounded bg-[#162e26]/10 text-[#162e26] border border-[#162e26]/20">
      {pct.toFixed(1)}%
    </span>
  );
}

export default function LlmCostAndMarginIndexPage() {
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '2026 LLM API Cost & SaaS Gross Margin Index',
    description:
      'Empirical monthly benchmark comparing input, cached input, and output token pricing across Anthropic Claude, OpenAI GPT, Google Gemini, and self-hosted open-weight SLMs against $29, $49, and $99 B2B SaaS seat margins.',
    url: 'https://www.richardewing.io/benchmark/llm-cost-and-margin-index',
    dateModified: BENCHMARK_LAST_UPDATED,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creator: {
      '@type': 'Person',
      '@id': 'https://www.richardewing.io/#person',
      name: 'Richard Ewing',
      jobTitle: 'Product & AI Economist',
      url: 'https://www.richardewing.io',
    },
    variableMeasured: [
      'Input Cost per 1M Tokens (USD)',
      'Cached Input Cost per 1M Tokens (USD)',
      'Output Cost per 1M Tokens (USD)',
      'P50, P90, and P99 Monthly Inference Cost per Active SaaS Seat',
      'Net SaaS Gross Margin Percentage at $29, $49, and $99 Monthly Price Points',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Benchmarks', item: 'https://www.richardewing.io/benchmark' },
      {
        '@type': 'ListItem',
        position: 3,
        name: '2026 LLM API Cost & SaaS Margin Index',
        item: 'https://www.richardewing.io/benchmark/llm-cost-and-margin-index',
      },
    ],
  };

  const faqs = [
    {
      q: 'Why do $29/month AI SaaS seats lose money even after token prices fall?',
      a: 'Vendors cut per-token list prices, yet engineering teams simultaneously expanded context windows from 4,000 tokens to 28,000+ tokens and added multi-step tool retries. One P90 power user running 650 uncached Claude Sonnet 4.5 or GPT-5 tool loops burns $35 to $47 per month in raw inference alone, wiping out a $29 flat-rate subscription before hosting or Stripe fees.',
    },
    {
      q: 'How much gross margin does prompt caching actually recover in production?',
      a: 'Across audited B2B SaaS products with stable system instructions and repository schemas, a 75% prompt-cache hit rate cuts monthly P90 seat burn by 46% to 52%. On a $49/month plan using Claude Sonnet 4.5, enabling deterministic prompt caching lifts P90 gross margin from -4.0% back to +42.8%.',
    },
    {
      q: 'When should a CTO self-host Llama or Gemma instead of paying OpenAI or Anthropic?',
      a: 'Only when sustained daily volume crosses roughly 4.2 million tokens per day at 65%+ GPU utilization, or when strict HIPAA/defense data residency forbids external APIs. Below that threshold, idle reserved GPU hours and MLOps on-call payroll cost more than commercial pay-per-token APIs.',
    },
    {
      q: 'How should CFOs and CPOs structure AI SaaS pricing in 2026?',
      a: 'Pair a predictable platform seat fee covering deterministic workflow software with pooled workspace AI credits, hard per-seat circuit breakers, and an 80/20 model router that sends routine classification to Flash/LiteRT models while reserving frontier reasoning for high-value actions.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1e2924] pt-24 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Breadcrumb & Living Stamp */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#24332b]/12 pb-5">
          <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#66716a]">
            <Link href="/" className="hover:text-[#162e26]">Home</Link>
            <span>/</span>
            <Link href="/benchmark" className="hover:text-[#162e26]">Benchmarks</Link>
            <span>/</span>
            <span className="font-bold text-[#162e26]">LLM Cost &amp; Margin Index</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#b77a35] bg-[#b77a35]/10 border border-[#b77a35]/25 px-3 py-1 rounded-full">
            <Database className="w-3.5 h-3.5" />
            {BENCHMARK_EDITION} · Updated {BENCHMARK_LAST_UPDATED}
          </div>
        </div>

        {/* Hero & 45-Word Answer Summary */}
        <header className="space-y-6 max-w-4xl">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
            Open FinOps Telemetry · CFO, CPO &amp; CTO Reference
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#162e26] leading-[1.1]">
            2026 LLM API Cost &amp; SaaS Gross Margin Index
          </h1>
          <p
            itemProp="description"
            className="text-lg sm:text-xl text-[#4a5850] leading-relaxed"
          >
            Token list prices dropped 70% in eighteen months, yet SaaS gross margins still shrank because multi-turn agent loops and un-cached tool schemas multiplied token volume 12x. Use this monthly index for CFOs, CPOs, VPs of Product, and FinOps Managers to benchmark live model rates against $29, $49, and $99 seat economics.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/tools/ai-feature-margin?from=llm-cost-and-margin-index"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#162e26] hover:bg-[#29473b] text-white font-bold text-sm transition-all"
            >
              <Calculator className="w-4 h-4" />
              Stress-Test Your Own Feature Margin <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/aueb?from=llm-cost-and-margin-index"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#24332b]/20 hover:border-[#162e26] text-[#162e26] font-bold text-sm transition-all"
            >
              Model Seat vs Credit Pricing (AUEB) →
            </Link>
          </div>
        </header>

        {/* Top Key Findings Metric Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MetricPanel
            variant="forest"
            label="P90 Uncached $29 Seat"
            value={P90_29_UNCACHED_STR}
            trend="Gross Margin"
            trendDirection="down"
            subtext={`650 monthly tool loops on Claude Sonnet 4.5 cost $${SONNET_UNCACHED.p90MonthlyCostUsd.toFixed(2)}/seat (+$2.94 seat/payment overhead).`}
          />
          <MetricPanel
            variant="white"
            label="75% Prompt Cache Lift"
            value={P90_29_CACHE_LIFT_STR}
            trend="@ $29 Seat P90"
            trendDirection="up"
            subtext={`Prefix caching cuts Sonnet 4.5 P90 burn from $${SONNET_UNCACHED.p90MonthlyCostUsd.toFixed(2)} to $${SONNET_CACHED.p90MonthlyCostUsd.toFixed(2)}/seat (${P90_49_CACHE_LIFT_STR} @ $49 seat).`}
          />
          <MetricPanel
            variant="white"
            label="80/20 Tier Router Floor"
            value={P90_49_ROUTER_FLOOR_STR}
            trend="@ $49 Seat P90"
            trendDirection="up"
            subtext="Routing 80% of triage to Gemini 3.8 Flash + 20% frontier preserves SaaS-grade margins."
          />
          <MetricPanel
            variant="paper"
            label="Self-Host GPU Crossover"
            value="4.2M"
            trend="Tokens / Day"
            trendDirection="neutral"
            subtext="Minimum sustained daily volume before reserved H100s beat commercial API pricing."
          />
        </section>

        {/* Table 1: Direct Provider Pricing */}
        <ChartPanel
          variant="white"
          title="01. Frontier API & Open-Weight Token Pricing Matrix"
          subtitle="Direct USD cost per 1,000,000 tokens (standard input, cached prefix input, and generated output) plus median Time-To-First-Byte."
          sourceNote={`Compiled ${BENCHMARK_LAST_UPDATED} across public commercial rate cards and reserved H100/LiteRT production telemetry.`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[#24332b]/15 font-mono text-[11px] uppercase tracking-wider text-[#66716a]">
                  <th className="py-3 pr-4">Provider &amp; Model</th>
                  <th className="py-3 px-3">Tier</th>
                  <th className="py-3 px-3 text-right">Input / 1M</th>
                  <th className="py-3 px-3 text-right">Cached / 1M</th>
                  <th className="py-3 px-3 text-right">Output / 1M</th>
                  <th className="py-3 px-3 text-right">Median TTFB</th>
                  <th className="py-3 pl-4">Primary Production Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#24332b]/10">
                {LLM_PRICING_INDEX.map((row) => (
                  <tr key={row.id} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="py-3.5 pr-4 font-semibold text-[#162e26]">
                      <div>{row.model}</div>
                      <div className="text-xs font-normal text-[#66716a]">{row.provider}</div>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-xs text-[#4a5850]">{row.tier}</td>
                    <td className="py-3.5 px-3 text-right font-mono font-semibold text-[#1e2924]">
                      ${row.inputPer1M.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono text-emerald-800 font-semibold">
                      ${row.cachedInputPer1M.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono font-bold text-[#162e26]">
                      ${row.outputPer1M.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-3 text-right font-mono text-xs text-[#66716a]">
                      {row.typicalTtfbMs}ms
                    </td>
                    <td className="py-3.5 pl-4 text-xs text-[#4a5850] max-w-xs">
                      {row.bestFitWorkload}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartPanel>

        {/* Narrative Observation Block (HWS v2.0) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-serif text-3xl font-bold text-[#162e26]">
              Why CFOs Get Ambushed by P90 Power Users
            </h2>
            <p className="text-base text-[#4a5850] leading-relaxed">
              Almost every AI pricing spreadsheet I audit makes the same fatal mistake: the VP of Product models an average user sending five polite chat messages a day. That P50 user costs $1.80 to $3.18 a month. On paper, your $29 SaaS tier looks like an 80% software margin business.
            </p>
            <p className="text-base text-[#4a5850] leading-relaxed">
              Then you ship background repository indexing, MCP tool schemas, or automated CRM enrichment. Your heaviest 10% of customers (usually your highest-logo-value accounts) trigger 650 to 2,400 multi-turn loops a month, re-sending 14,000 to 28,000 input tokens on every retry. Without prefix caching and hard workspace credit caps, one enthusiastic Customer Support Manager or Engineering Manager burns $138 to $289 a month on a $49 seat.
            </p>
          </div>
          <div className="rounded-2xl border border-[#c86d56]/30 bg-white p-6 space-y-3 shadow-sm">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9f3a24]">
              <AlertTriangle className="w-4 h-4" />
              Audit Red Flag
            </div>
            <h3 className="font-serif text-xl font-bold text-[#162e26]">
              The Un-Gated Retry Multiplier
            </h3>
            <p className="text-sm text-[#4a5850] leading-relaxed">
              When an LLM outputs malformed JSON against a strict tool schema, naive SDK wrappers silently retry 2 to 4 times with full conversation history attached. Across 40+ audited codebases, silent retries inflated monthly Anthropic and OpenAI invoices by 22% to 38% with zero visible UI telemetry.
            </p>
            <Link
              href="/compare/why-ai-costs-spiral-from-silent-retries"
              className="inline-block text-xs font-mono font-bold text-[#162e26] hover:underline pt-1"
            >
              Read Silent Retry Forensics →
            </Link>
          </div>
        </section>

        {/* Table 2: P50 / P90 / P99 SaaS Seat Gross Margin Stress Matrix */}
        <ChartPanel
          variant="white"
          title="02. Monthly SaaS Seat Gross Margin Stress Test ($29 / $49 / $99 Plans)"
          subtitle="Net gross margin % after inference cost, 6% payment/billing overhead, and $1.20/seat baseline cloud hosting across P50, P90, and P99 active cohorts."
          legend={[
            { label: 'Healthy SaaS (>=60% GM)', color: '#162e26' },
            { label: 'Compressed (0% to 59% GM)', color: '#b77a35' },
            { label: 'Negative Carry (<0% GM)', color: '#c86d56' },
          ]}
          sourceNote="P50 = 120 actions/mo | P90 = 650 tool loops/mo | P99 = 2,400 autonomous agent actions/mo."
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-[#24332b]/15 font-mono text-[11px] uppercase tracking-wider text-[#66716a]">
                  <th className="py-3 pr-4">Architecture &amp; Model</th>
                  <th className="py-3 px-2 text-right">P50 Cost</th>
                  <th className="py-3 px-2 text-right">P90 Cost</th>
                  <th className="py-3 px-2 text-right">P99 Cost</th>
                  <th className="py-3 px-2 text-center">$29 Seat (P50 / P90)</th>
                  <th className="py-3 px-2 text-center">$49 Seat (P90 / P99)</th>
                  <th className="py-3 pl-2 text-center">$99 Seat (P90 / P99)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#24332b]/10">
                {SAAS_MARGIN_STRESS_MATRIX.map((row) => (
                  <tr key={row.modelLabel} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="py-3.5 pr-4 font-semibold text-[#162e26]">
                      <div className="flex items-center gap-2">
                        <span>{row.modelLabel}</span>
                        {row.cachingEnabled && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-2 text-right font-mono text-xs text-[#4a5850]">
                      ${row.p50MonthlyCostUsd.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-2 text-right font-mono text-xs font-semibold text-[#1e2924]">
                      ${row.p90MonthlyCostUsd.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-2 text-right font-mono text-xs font-bold text-[#9f3a24]">
                      ${row.p99MonthlyCostUsd.toFixed(2)}
                    </td>
                    <td className="py-3.5 px-2 text-center space-x-1.5 whitespace-nowrap">
                      {formatMarginBadge(row.marginAt29SeatPct.p50)}
                      {formatMarginBadge(row.marginAt29SeatPct.p90)}
                    </td>
                    <td className="py-3.5 px-2 text-center space-x-1.5 whitespace-nowrap">
                      {formatMarginBadge(row.marginAt49SeatPct.p90)}
                      {formatMarginBadge(row.marginAt49SeatPct.p99)}
                    </td>
                    <td className="py-3.5 pl-2 text-center space-x-1.5 whitespace-nowrap">
                      {formatMarginBadge(row.marginAt99SeatPct.p90)}
                      {formatMarginBadge(row.marginAt99SeatPct.p99)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ChartPanel>

        {/* Connected Calculators & Commercial Implementation Flywheel */}
        <section className="space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              Run Your Own Numbers · Connected Diagnostic Chain
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-1">
              Plug Your Exact Seat Price &amp; Token Mix Into Our Calculators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EditorialCard
              variant="white"
              eyebrow="Step 1 · Feature Margin"
              badge="Free Calculator"
              badgeVariant="forest"
              title="Claude & OpenAI API Margin Calculator"
              description="Enter your prompt length, cache hit ratio, and monthly active users to find the exact query count where a seat turns gross-margin negative."
              href="/tools/ai-feature-margin?from=llm-cost-and-margin-index"
              actionText="Run Margin Calculator →"
            />
            <EditorialCard
              variant="white"
              eyebrow="Step 2 · Pricing Model"
              badge="Free Calculator"
              badgeVariant="forest"
              title="AI Credit vs Seat Calculator (AUEB)"
              description="Compare flat-rate seats against hybrid workspace credit pools and overage packs before presenting new tiers to your CFO and CRO."
              href="/tools/aueb?from=llm-cost-and-margin-index"
              actionText="Compare Credit vs Seat →"
            />
            <EditorialCard
              variant="forest"
              eyebrow="Step 3 · Implementation"
              badge="$29 Kit / $450 Session"
              badgeVariant="gold"
              title="Download the Working Excel P&L Models"
              description="Get the 5 editable AI Pricing & Unit Economics spreadsheets, 12-slide CFO & Board Defense Deck, or book a 60-minute live pricing review."
              href="/operating-kit"
              actionText="Get the Survival Kit ($29) →"
            />
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-6 pt-6 border-t border-[#24332b]/12">
          <h2 className="font-serif text-3xl font-bold text-[#162e26]">
            Methodology &amp; Executive FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <AccordionItem
                key={idx}
                question={f.q}
                answer={f.a}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
