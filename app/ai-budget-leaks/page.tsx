import type { Metadata } from 'next';
import Link from 'next/link';
import { RealityCheckDiagnostic } from '@/components/diagnostics/reality-check-diagnostic';
import {
  EditorialCard,
  MetricPanel,
  QuoteBlock,
  AccordionItem,
} from '@/components/editorial';
import { ArrowRight, CheckCircle2, AlertOctagon, TrendingDown, Layers, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Budget Leaks: Stop Enterprise Model Waste',
  description:
    'Forensic breakdown of enterprise AI budget leaks: dormant seats, agent retry spirals, over-provisioned models, and low-utility internal copilots.',
  alternates: {
    canonical: 'https://www.richardewing.io/ai-budget-leaks',
  },
  openGraph: {
    title: 'AI Budget Leaks: Stop Enterprise Model Waste | Richard Ewing',
    description:
      'Typical enterprise AI initiatives lose 28.5% of their spend to avoidable engineering leaks. Calculate your waste and stop the bleed.',
    url: 'https://www.richardewing.io/ai-budget-leaks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Budget Leaks: Stop Enterprise Model Waste | Richard Ewing',
    description:
      'Typical enterprise AI initiatives lose 28.5% of their spend to avoidable engineering leaks. Calculate your waste and stop the bleed.',
    images: ['https://www.richardewing.io/api/og?title=Enterprise+AI+Budget+Leaks&category=Forensic+Telemetry'],
  },
};

export default function AIBudgetLeaksPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Enterprise AI Budget Leak Diagnostic',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://www.richardewing.io/ai-budget-leaks',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    description:
      'Diagnostic assessment quantifying enterprise AI budget waste across developer licenses, model routing, and agent loops.',
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
        name: 'AI Budget Leaks',
        item: 'https://www.richardewing.io/ai-budget-leaks',
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c86d56]/10 border border-[#c86d56]/30 text-[#c86d56] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
          <AlertOctagon className="w-3.5 h-3.5" />
          Topical Authority Hub · Forensic Telemetry
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#162e26] leading-[1.15] mb-6">
          AI Budget Leaks: Where Enterprise Model Spend Disappears
        </h1>

        <p className="font-sans text-lg sm:text-xl text-[#66716a] max-w-3xl mx-auto leading-relaxed mb-8">
          Most engineering leaders look at aggregate monthly cloud invoices and assume rising token
          usage equals customer value. In reality, typical enterprise AI initiatives lose over a quarter
          of their monthly spend to retries, idle developer seats, unpruned context windows, and
          low-utility internal toys. Here is how to diagnose the leaks and recover capital.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#diagnostic"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#162e26] text-white font-medium hover:bg-[#29473b] transition-all text-sm shadow-sm"
          >
            Start Leak Diagnostic ↓
          </a>
          <Link
            href="/contact?subject=Turnaround+Sprint"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#24332b]/20 text-[#162e26] font-medium hover:bg-[#ebe7dc] transition-all text-sm"
          >
            Reserve $2,500 Turnaround Sprint ↗
          </Link>
        </div>
      </header>

      {/* Metric Panels */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricPanel
            label="Average Enterprise AI Waste"
            value="28.5%"
            trend="Forensic Baseline"
            trendDirection="down"
            subtext="Portion of monthly AI budget lost to non-productive technical overhead."
            variant="paper"
          />
          <MetricPanel
            label="Median Annual Leak per 50 Eng"
            value="$427,000"
            trend="Unmonitored"
            trendDirection="down"
            subtext="Across unused copilot licenses and unthrottled API endpoints."
            variant="white"
          />
          <MetricPanel
            label="Recoverable Capital Yield"
            value="$120K to $350K"
            trend="+32% Recovered"
            trendDirection="up"
            subtext="Typical spend recaptured in a 14-day forensic turnaround sprint."
            variant="forest"
          />
        </div>
      </section>

      {/* The 4 Core Leaks */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Forensic Tax Breakdown
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            The Four Primary Leaks in Production AI
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl">
            Based on forensic audits of software companies spending $50,000 to $500,000 monthly
            on model endpoints and coding assistants:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EditorialCard
            eyebrow="38% of Total Waste"
            title="Leak 01: Unused Capacity & Dormant Seats"
            description="Companies purchase 100 enterprise developer tool seats, but active daily usage hovers at 32 engineers. Reserved GPU clusters run during weekends and holidays with zero batch queue activity."
            badge="Seat Dilution"
            badgeVariant="rose"
            variant="white"
            meta="Finance & Procurement Leak"
          />
          <EditorialCard
            eyebrow="24% of Total Waste"
            title="Leak 02: Inefficient Workflows & Retry Loops"
            description="Autonomous multi-step agents fail on JSON schema parsing and retry 5 times sequentially. Uncached agent sessions re-send 30,000 tokens of static workspace context on every user keystroke."
            badge="Agent Overhead"
            badgeVariant="gold"
            variant="white"
            meta="Runtime Architecture Defect"
          />
          <EditorialCard
            eyebrow="22% of Total Waste"
            title="Leak 03: Frontier Model Over-Provisioning"
            description="Engineering teams default to top-tier reasoning models for deterministic text extraction, classification, or regex extraction that smaller models execute for 90% less cost at equal fidelity."
            badge="Routing Misallocation"
            badgeVariant="rose"
            variant="white"
            meta="Inference Cost Spike"
          />
          <EditorialCard
            eyebrow="16% of Total Waste"
            title="Leak 04: Low-Utility Copilot Vanity Projects"
            description="Internal generative assistants deployed on peripheral workflows where human review time exceeds manual execution time. Zero measurable throughput lift paired with high recurring API invoices."
            badge="Negative ROI"
            badgeVariant="muted"
            variant="white"
            meta="Product Backlog Defect"
          />
        </div>
      </section>

      {/* Quote Block */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <QuoteBlock
          quote="Most enterprise AI budgets do not fail because the models are expensive. They fail because engineering teams treat API endpoints like free database queries, with zero visibility into retry loops or prompt payload bloat."
          attribution="Richard Ewing"
          source="AI Economist & Enterprise R&D Auditor"
          variant="forest"
        />
      </section>

      {/* Embedded Live Reality Check Diagnostic */}
      <section id="diagnostic" className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Interactive Assessment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            The AI Reality Check Diagnostic
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl mx-auto">
            Quantify your monthly engineering waste, identify your primary cost driver,
            and generate a prioritized action plan in under three minutes.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#24332b]/15 shadow-sm p-6 sm:p-10">
          <RealityCheckDiagnostic />
        </div>
      </section>

      {/* Remediation Framework */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Actionable Strategy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            How to Plug the Leaks in 14 Days
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl">
            Four immediate interventions that product operations and engineering managers deploy
            to reclaim runway without cutting developer productivity:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-[#24332b]/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#162e26]/10 text-[#162e26]">
                <Activity className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#162e26]">
                Shadow API Token Consolidation
              </h3>
            </div>
            <p className="text-sm text-[#66716a] leading-relaxed">
              Consolidate disconnected developer personal API keys behind a centralized edge gateway.
              Implement rate limits, cost attribution headers, and automated alerts that trigger
              when any single developer key exceeds daily operational thresholds.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#24332b]/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#b77a35]/10 text-[#b77a35]">
                <Layers className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#162e26]">
                Prompt History Capping
              </h3>
            </div>
            <p className="text-sm text-[#66716a] leading-relaxed">
              Enforce strict context window pruning. Never re-submit entire conversational transcripts
              verbatim. Truncate stale conversation history and inject concise semantic summaries
              to prevent input token costs from compounding with each turn.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#24332b]/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#c86d56]/10 text-[#c86d56]">
                <TrendingDown className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#162e26]">
                Small Model Fallbacks
              </h3>
            </div>
            <p className="text-sm text-[#66716a] leading-relaxed">
              Audit all prompt templates. Reassign 60% of simple data extraction, classification,
              and formatting tasks from expensive frontier models to fast compact models. Test output
              accuracy against a benchmark suite to verify zero quality drop.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#24332b]/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#162e26]/10 text-[#162e26]">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#162e26]">
                Zombie Feature Kill-List
              </h3>
            </div>
            <p className="text-sm text-[#66716a] leading-relaxed">
              Review monthly active usage across all shipped generative features. If a feature
              incurs substantial model inference cost but engages less than 3% of your active user
              base, retire the feature and redeploy that engineering budget to core customer workflows.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Auditing & Diagnostics FAQ
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-2">
            Frequently Asked Questions on Budget Leaks
          </h2>
        </div>

        <div className="space-y-4">
          <AccordionItem
            tag="AGENT TELEMETRY"
            question="How do agent retry loops quietly drain engineering budgets?"
            answer="When an autonomous agent calls an external tool or executes code in a sandbox, a minor formatting mismatch or timeout often triggers an automated retry. Without deterministic recursion caps, a single stuck loop can run 50 consecutive attempts in under two minutes, consuming hundreds of thousands of tokens before reporting an error."
          />
          <AccordionItem
            tag="TOKEN HYGIENE"
            question="What is prompt context bloat, and how can teams prune it?"
            answer="Prompt context bloat happens when developers append entire database records, redundant system instructions, and multi-turn conversational transcripts to every model call. By using semantic chunking, prompt caching, and summarizing past turns into concise state vectors, teams reduce input tokens by 60% to 80% per interaction."
          />
          <AccordionItem
            tag="VERIFICATION TAX"
            question="How do we calculate the verification tax on internal AI copilots?"
            answer="The verification tax measures the human labor required to review, correct, and debug AI-generated outputs. If an engineer takes 15 minutes to write code manually, but takes 12 minutes to prompt an AI plus 8 minutes to debug its subtle logic hallucinations, the AI tool produces a net negative productivity drag."
          />
          <AccordionItem
            tag="TELEMETRY FIRST"
            question="What telemetry should engineering teams implement first to catch leaks?"
            answer="Install a centralized proxy gateway between your application and model endpoints. Log three attributes for every request: customer organization ID, feature slug, and token count split by input and output. Within 48 hours, your CFO and VP of Engineering will see the top five cost drivers clearly."
          />
        </div>
      </section>

      {/* Primary Conversion CTA: $2,500 Sprint */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-[#162e26] text-white p-8 sm:p-12 border border-[#29473b] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b77a35]/20 border border-[#b77a35]/40 text-[#d8c7a8] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              14-Day Fixed Scope · $2,500 One-Time
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Reserve Your Product P&amp;L Turnaround Sprint
            </h2>

            <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Two-week forensic audit and operational overhaul of your product line. We analyze
              telemetry, cloud costs, and team velocity to fix margins, eliminate wasteful model spend,
              and prepare board-ready materials before your next quarterly review.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Full telemetry &amp; API spend audit with model routing cuts</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Pricing &amp; packaging restructuring with gross margin modeling</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Feature-level unit economics model delivered to your CFO</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Prioritized 90-day roadmap scrubbed of negative carry</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact?subject=Turnaround+Sprint"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#b77a35] text-white font-bold hover:bg-[#a36b2d] transition-all text-base shadow-md"
              >
                Reserve Turnaround Sprint ($2,500)
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20 transition-all text-sm"
              >
                Compare Advisory Options ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
