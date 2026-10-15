import type { Metadata } from 'next';
import Link from 'next/link';
import {
  EditorialCard,
  ToolCard,
  MetricPanel,
  QuoteBlock,
  AccordionItem,
} from '@/components/editorial';
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Lock, Eye, BarChart3, Sliders } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Cost Governance: Runtime Caps & Audit',
  description:
    'Establish deterministic runtime caps, circuit breakers, semantic guardrails, and audit-ready board reporting to stop runaway AI model spend.',
  alternates: {
    canonical: 'https://www.richardewing.io/ai-cost-governance',
  },
  openGraph: {
    title: 'AI Cost Governance: Runtime Caps & Audit | Richard Ewing',
    description:
      'Prevent $50K surprise model bills with hard circuit breakers, multi-tenant token attribution, and executive board reporting.',
    url: 'https://www.richardewing.io/ai-cost-governance',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cost Governance: Runtime Caps & Audit | Richard Ewing',
    description:
      'Prevent $50K surprise model bills with hard circuit breakers, multi-tenant token attribution, and executive board reporting.',
    images: ['https://www.richardewing.io/api/og?title=AI+Cost+Governance+%26+Runtime+Caps&category=Enterprise+Governance'],
  },
};

export default function AICostGovernancePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Cost Governance & Executive Framework',
    serviceType: 'Executive AI Advisory & Cost Governance',
    provider: {
      '@type': 'Person',
      '@id': 'https://www.richardewing.io/#person',
      name: 'Richard Ewing',
      jobTitle: 'AI Economist & Enterprise R&D Auditor',
      url: 'https://www.richardewing.io',
    },
    url: 'https://www.richardewing.io/ai-cost-governance',
    description:
      'Operational governance framework delivering runtime token caps, deterministic circuit breakers, and board-ready AI spend auditing.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.richardewing.io',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Cost Governance',
        item: 'https://www.richardewing.io/ai-cost-governance',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1e2924] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#162e26]/10 border border-[#162e26]/30 text-[#162e26] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#b77a35]" />
          Topical Authority Hub · Enterprise Governance
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#162e26] leading-[1.15] mb-6">
          AI Cost Governance: Runtime Caps, Circuit Breakers, and Board Reporting
        </h1>

        <p className="font-sans text-lg sm:text-xl text-[#66716a] max-w-3xl mx-auto leading-relaxed mb-8">
          Connecting autonomous agent loops to enterprise credit cards without deterministic runtime
          controls is an open operational risk. A single recursive agent loop or unthrottled customer
          batch upload can drain $40,000 before morning. Here is how technology leaders establish hard
          spending limits, attribute token costs by customer tier, and prepare audit-ready board reporting.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact?subject=Fractional+CPO"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#162e26] text-white font-medium hover:bg-[#29473b] transition-all text-sm shadow-sm"
          >
            Inquire for Fractional CPO ($10,000/mo) ↗
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#24332b]/20 text-[#162e26] font-medium hover:bg-[#ebe7dc] transition-all text-sm"
          >
            Explore Governance Diagnostics ↗
          </Link>
        </div>
      </header>

      {/* Metric Panels */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricPanel
            label="Weekend Runaway Overrun Risk"
            value="$40,000+"
            trend="Uncapped Loops"
            trendDirection="down"
            subtext="Observed in recursive agent retry loops running without hard session ceilings."
            variant="paper"
          />
          <MetricPanel
            label="Inference Cost Reduction"
            value="68%"
            trend="Measured Drop"
            trendDirection="up"
            subtext="Achieved when routine queries are routed through compact deterministic gateways."
            variant="white"
          />
          <MetricPanel
            label="Board Audit Compliance"
            value="100%"
            trend="Clean Ledger"
            trendDirection="neutral"
            subtext="Delivered via request-level tagging by organization ID and product feature code."
            variant="forest"
          />
        </div>
      </section>

      {/* Four Pillars */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Governance Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            The Four Pillars of Enterprise AI Cost Governance
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl">
            Hard boundaries that protect gross margins while giving software engineers the freedom
            to ship generative features quickly:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EditorialCard
            eyebrow="Pillar 01"
            title="Runtime Spending Caps & Circuit Breakers"
            description="Establish hard daily and per-session token limits at the API proxy layer. If an agent loops repeatedly or exceeds customer tier allowances, the gateway triggers automated fallbacks to cached responses or prompts the user rather than running up infinite bills."
            badge="Hard Guardrail"
            badgeVariant="rose"
            variant="white"
            meta="Runtime Protection"
          />
          <EditorialCard
            eyebrow="Pillar 02"
            title="Deterministic Semantic Routing"
            description="Inspect user intent before invoking expensive frontier models. Route 80% of routine classifications, data extractions, and formatting tasks to compact models costing pennies, reserving high-parameter reasoning models for genuine cognitive forks."
            badge="Cost Compression"
            badgeVariant="gold"
            variant="white"
            meta="Inference Architecture"
          />
          <EditorialCard
            eyebrow="Pillar 03"
            title="Multi-Tenant Cost Attribution"
            description="Tag every model request with customer account ID, feature slug, and user role. Instantly identify your top 5% margin-destroying accounts and reconcile cloud provider invoices against specific contract revenues."
            badge="FinOps Visibility"
            badgeVariant="forest"
            variant="white"
            meta="Ledger Attribution"
          />
          <EditorialCard
            eyebrow="Pillar 04"
            title="Board-Ready Audit Reporting"
            description="Translate complex technical telemetry (prompt tokens, completion tokens, latency, cache hit rates) into clear financial metrics: gross margin impact, customer payback velocity, and R&D capital efficiency for quarterly audit reviews."
            badge="Executive Defense"
            badgeVariant="muted"
            variant="white"
            meta="Boardroom Governance"
          />
        </div>
      </section>

      {/* Quote Block */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <QuoteBlock
          quote="Governance is not about restricting engineering velocity. It is about building guardrails so secure that developers can ship AI features with confidence, knowing a stray while-loop will not drain company runway before morning."
          attribution="Richard Ewing"
          source="AI Economist & Enterprise R&D Auditor"
          variant="forest"
        />
      </section>

      {/* Governance Diagnostics Showcase */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Diagnostic Tooling
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            Audit Your Governance Posture
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl">
            Test your current cost exposure and calculate your team's margin resilience using our
            free executive diagnostic tools:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ToolCard
            title="AI Unit Economics Benchmark"
            href="/tools/aueb"
            desc="Model your exact token cost per query, find your gross margin collapse point, and compare frontier vs compact model spend."
            tag="UNIT ECONOMICS"
            metricLabel="Median Dividend"
            metricValue="$180K/yr"
            roles={['CFO', 'VP Eng']}
            actionText="Run AUEB Audit ↗"
          />
          <ToolCard
            title="The AI Reality Check"
            href="/reality-check"
            desc="Quantify engineering waste across unused copilot seats, runaway retry loops, and over-provisioned models in under three minutes."
            tag="FORENSIC AUDIT"
            metricLabel="Typical Waste"
            metricValue="28.5%"
            roles={['CTO', 'Lead PM']}
            actionText="Start Reality Check ↗"
          />
          <ToolCard
            title="Product Debt Index (PDI)"
            href="/tools/pdi"
            desc="Score your exit valuation risk and evaluate unrecorded technical debt liabilities from unmanaged AI dependencies."
            tag="VALUATION AUDIT"
            metricLabel="Risk Scale"
            metricValue="0 to 100"
            roles={['Board', 'CEO']}
            actionText="Calculate PDI ↗"
          />
        </div>
      </section>

      {/* Operational Policy Checklist */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#24332b]/15 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
              Executive Policy Checklist
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#162e26] mt-2">
              Five Rules Every Tech Leader Should Enforce Today
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-[#24332b]/10">
              <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
              <div>
                <strong className="font-serif text-base text-[#162e26] block">
                  1. Zero Unmetered Agent Autonomy
                </strong>
                <span className="text-xs sm:text-sm text-[#66716a]">
                  Never allow an autonomous agent to execute dynamic tool calls without a hard maximum
                  cap on recursive turns (recommendation: max 4 turns before human review).
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-[#24332b]/10">
              <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
              <div>
                <strong className="font-serif text-base text-[#162e26] block">
                  2. Mandatory Account-Level Budget Ceiling
                </strong>
                <span className="text-xs sm:text-sm text-[#66716a]">
                  Configure your proxy to throttle or alert when any individual enterprise customer
                  exceeds 150% of their modeled monthly inference allocation.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-[#24332b]/10">
              <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
              <div>
                <strong className="font-serif text-base text-[#162e26] block">
                  3. Centralized Proxy Gateway Only
                </strong>
                <span className="text-xs sm:text-sm text-[#66716a]">
                  Prohibit hardcoding direct vendor API endpoints in production application code. All
                  model calls must pass through a logging, caching, and rate-limiting gateway.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-[#24332b]/10">
              <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
              <div>
                <strong className="font-serif text-base text-[#162e26] block">
                  4. Prompt Caching by Default
                </strong>
                <span className="text-xs sm:text-sm text-[#66716a]">
                  Structure prompts so system instructions and reference schemas remain static at the
                  prefix, taking full advantage of 50% to 80% vendor prompt caching discounts.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-[#24332b]/10">
              <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
              <div>
                <strong className="font-serif text-base text-[#162e26] block">
                  5. Monthly Zombie Feature Review
                </strong>
                <span className="text-xs sm:text-sm text-[#66716a]">
                  Cross-reference monthly model invoices against weekly active feature usage. Decommission
                  features that burn capital with minimal user adoption.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Cost Governance FAQ
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-2">
            Frequently Asked Questions on AI Cost Governance
          </h2>
        </div>

        <div className="space-y-4">
          <AccordionItem
            tag="RUNTIME LIMITS"
            question="How do runtime circuit breakers prevent catastrophic API bill overruns?"
            answer="A runtime circuit breaker acts like an electrical fuse between your software and model provider APIs. It tracks running token counts and dollar spend across minute, hour, and daily windows. If an infinite retry loop or rogue scraper spikes spend past a predetermined threshold, the circuit trips automatically, gracefully returning a fallback message rather than allowing thousands of dollars to drain unchecked."
          />
          <AccordionItem
            tag="QUOTAS"
            question="How should engineering leaders set per-user token quotas?"
            answer="Set quotas based on your subscription tier economics. Calculate the maximum monthly model spend allowable while preserving a minimum 75% gross margin on that customer. For instance, on a $50/user plan, budget a hard cap of $10 in inference costs. Implement progressive warnings as users approach 80% of their monthly limit."
          />
          <AccordionItem
            tag="BOARD DECKS"
            question="What metrics should be included in the quarterly board deck on AI spend?"
            answer="Boards do not want raw token counts. They need three financial numbers: 1) Gross Margin per Active User (including inference COGS), 2) Infrastructure Unit Cost Trend (cost per completed business task over time), and 3) Net Feature Capital Efficiency (incremental revenue generated by AI features divided by total R&D and model inference expenses)."
          />
          <AccordionItem
            tag="FRACTIONAL LEADERSHIP"
            question="How does fractional product leadership help install governance guardrails?"
            answer="An embedded fractional Chief Product Officer works directly with your engineering and finance leads to install proxy telemetry, establish budget policies, kill zombie features, and restructure pricing packaging, achieving in weeks what internal teams often struggle to align across quarters."
          />
        </div>
      </section>

      {/* Primary Conversion CTA: $10,000/mo CPO */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-[#162e26] text-white p-8 sm:p-12 border border-[#29473b] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b77a35]/20 border border-[#b77a35]/40 text-[#d8c7a8] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              Executive Retainer · $10,000/Month
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Fractional CPO &amp; Executive Product Advisory
            </h2>

            <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Embedded product and economics leadership for post-seed through Series B software
              companies. We install deterministic cost governance, audit your feature roadmap,
              protect gross margins, and prepare board materials alongside your leadership team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Weekly executive product and P&amp;L review sessions</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Runtime cost governance and model proxy architecture</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Quarterly board deck preparation &amp; audit materials</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Direct Slack and asynchronous access for C-suite leaders</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact?subject=Fractional+CPO"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#b77a35] text-white font-bold hover:bg-[#a36b2d] transition-all text-base shadow-md"
              >
                Inquire for Fractional CPO ($10,000/mo)
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20 transition-all text-sm"
              >
                Inspect All Advisory Tiers ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
