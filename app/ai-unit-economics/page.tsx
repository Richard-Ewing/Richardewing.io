import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import AUEBTool from '@/app/tools/aueb/content';
import {
  EditorialCard,
  MetricPanel,
  QuoteBlock,
  AccordionItem,
} from '@/components/editorial';
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Unit Economics & SaaS Margin Defense',
  description:
    'Calculate AI feature profitability per query, audit inference token costs, and prevent SaaS gross margin collapse under generative workloads.',
  alternates: {
    canonical: 'https://www.richardewing.io/ai-unit-economics',
  },
  openGraph: {
    title: 'AI Unit Economics & SaaS Margin Defense | Richard Ewing',
    description:
      'Model your AI feature costs per user, find your margin collapse point, and restructure pricing before your next board meeting.',
    url: 'https://www.richardewing.io/ai-unit-economics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Unit Economics & SaaS Margin Defense | Richard Ewing',
    description:
      'Model your AI feature costs per user, find your margin collapse point, and restructure pricing before your next board meeting.',
    images: ['https://www.richardewing.io/api/og?title=AI+Unit+Economics+%26+Margin+Defense&category=Topical+Authority+Hub'],
  },
};

export default function AIUnitEconomicsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Unit Economics Benchmark & Margin Defense',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://www.richardewing.io/ai-unit-economics',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    description:
      'Diagnostic model to quantify inference token costs, calculate gross margin collapse thresholds, and establish sustainable pricing.',
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
        name: 'AI Unit Economics',
        item: 'https://www.richardewing.io/ai-unit-economics',
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#b77a35]/10 border border-[#b77a35]/30 text-[#b77a35] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Topical Authority Hub · AI Economics
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#162e26] leading-[1.15] mb-6">
          AI Unit Economics: Why Model Inference Collapses SaaS Margins
        </h1>

        <p className="font-sans text-lg sm:text-xl text-[#66716a] max-w-3xl mx-auto leading-relaxed mb-8">
          Flat-rate subscriptions worked when cloud servers cost fractions of a cent per user.
          When you connect generative models to production software without query-level cost accounting,
          your most active customers become your biggest financial drain. Here is how to measure,
          model, and protect your gross margins.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#162e26] text-white font-medium hover:bg-[#29473b] transition-all text-sm shadow-sm"
          >
            Launch Interactive Benchmark ↓
          </a>
          <Link
            href="/contact?subject=P%26L+Teardown"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#24332b]/20 text-[#162e26] font-medium hover:bg-[#ebe7dc] transition-all text-sm"
          >
            Book $450 Executive Teardown ↗
          </Link>
        </div>
      </header>

      {/* Key Benchmark Metrics */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricPanel
            label="SaaS Gross Margin Collapse"
            value="84% to 38%"
            trend="-46 pts"
            trendDirection="down"
            subtext="Typical drop when adding unmetered LLM queries to flat-rate seat pricing."
            variant="paper"
          />
          <MetricPanel
            label="Uncached Query Waste"
            value="44%"
            trend="Industry Avg"
            trendDirection="neutral"
            subtext="Identical prompt templates and repeated tasks re-billed by model vendors."
            variant="white"
          />
          <MetricPanel
            label="Recoverable Margin Dividend"
            value="$180K/yr"
            trend="+28% Gross"
            trendDirection="up"
            subtext="Recaptured through multi-tier model routing and edge semantic caching."
            variant="forest"
          />
        </div>
      </section>

      {/* The 3 Core Causes */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Root Cause Analysis
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            The Three Structural Causes of Negative Token Margins
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl">
            Gross margin compression is rarely an engineering accident. It is the mathematical
            result of three mismatched business decisions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EditorialCard
            eyebrow="Pricing Misalignment"
            title="The Flat-Fee Trap"
            description="Selling software for $30 per seat per month while power users generate $80 in monthly model token bills. As feature adoption climbs, cash burn accelerates."
            badge="Critical Risk"
            badgeVariant="rose"
            variant="white"
            meta="CFO Alert"
          />
          <EditorialCard
            eyebrow="Inference Routing"
            title="Frontier Model Squeeze"
            description="Directing every basic summary, classification, or regex extraction to a massive reasoning model that costs 20x more than a compact task-specific alternative."
            badge="Architectural Leak"
            badgeVariant="gold"
            variant="white"
            meta="Engineering Waste"
          />
          <EditorialCard
            eyebrow="Runtime Governance"
            title="Unchecked Agent Loops"
            description="Multi-agent routines that run in recursive retry cycles without circuit breakers or token caps, silently spending thousands of dollars on a single customer task."
            badge="Runaway Defect"
            badgeVariant="rose"
            variant="white"
            meta="Operational Risk"
          />
        </div>
      </section>

      {/* Quote Block */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <QuoteBlock
          quote="If your product engineering team cannot tell you the exact cost per query for every AI interaction in production, your CFO is essentially writing a blank check to model providers."
          attribution="Richard Ewing"
          source="AI Economist & Enterprise R&D Auditor"
          variant="forest"
        />
      </section>

      {/* Embedded Live Benchmark Tool */}
      <section id="calculator" className="max-w-6xl mx-auto px-6 mb-20">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Interactive Diagnostic Engine
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            AI Unit Economics Benchmark (AUEB)
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl mx-auto">
            Input your current model parameters, daily query volumes, and subscription revenue
            to calculate your exact margin collapse point and annual dividend opportunity.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#24332b]/15 shadow-sm p-4 sm:p-8">
          <Suspense
            fallback={
              <div className="p-16 text-center font-mono text-sm text-[#66716a]">
                Initializing AI Unit Economics Benchmark engine...
              </div>
            }
          >
            <AUEBTool />
          </Suspense>
        </div>
      </section>

      {/* Operational Playbook */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Operational Remediation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            The Margin Defense Playbook
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl">
            Four concrete architectural changes engineering and product teams implement to restore
            software margins above 75%:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-[#24332b]/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#162e26]/10 text-[#162e26]">
                <Cpu className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#162e26]">
                Tiered Model Routing
              </h3>
            </div>
            <p className="text-sm text-[#66716a] leading-relaxed">
              Route 70% to 80% of incoming queries to fast, lightweight models costing under $0.15
              per million tokens. Reserve high-reasoning frontier models strictly for difficult edge
              cases where accuracy differences generate measurable commercial value.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#24332b]/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#b77a35]/10 text-[#b77a35]">
                <ShieldAlert className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#162e26]">
                Edge Semantic Caching
              </h3>
            </div>
            <p className="text-sm text-[#66716a] leading-relaxed">
              Store vector embeddings and completed answers for recurring user requests. Resolving
              repeating intent from local cache yields sub-20ms response times and eliminates 30%
              to 50% of variable API charges.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#24332b]/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#c86d56]/10 text-[#c86d56]">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#162e26]">
                Context Window Pruning
              </h3>
            </div>
            <p className="text-sm text-[#66716a] leading-relaxed">
              Stop passing massive 40-message chat transcripts on every interaction. Implement strict
              sliding-window summaries and selective retrieval so prompts stay lean and prompt token
              costs stop compounding quadratically.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#24332b]/15">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2 rounded-lg bg-[#162e26]/10 text-[#162e26]">
                <Sparkles className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#162e26]">
                Hybrid Pricing Architecture
              </h3>
            </div>
            <p className="text-sm text-[#66716a] leading-relaxed">
              Pair a baseline platform seat fee with monthly credit allowances. When power users
              exceed their allotted token budget, automated billing kicks in or execution throttles,
              protecting your gross margins from unexpected customer spikes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Common Executive Questions
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-2">
            Frequently Asked Questions on AI Margins
          </h2>
        </div>

        <div className="space-y-4">
          <AccordionItem
            tag="FINANCE & COGS"
            question="How does AI inference cost differ from traditional cloud hosting COGS?"
            answer="Traditional SaaS cloud costs (EC2, S3, databases) scale sub-linearly with user count: serving an extra dashboard view costs fractions of a millicent. In contrast, generative AI inference creates direct, variable computational cost for every request. If a customer runs 30 complex document reviews a day, they consume real GPU time that directly reduces gross margin."
          />
          <AccordionItem
            tag="PRICING STRATEGY"
            question="When should a software company move from flat-rate pricing to usage-based pricing?"
            answer="You should transition the moment the standard deviation of your customer token consumption exceeds 40% of your average customer cost. If the top 5% of your users consume 60% of your model budget, flat-rate pricing forces low-usage accounts to subsidize high-usage power accounts until power accounts push your account-level gross margin negative."
          />
          <AccordionItem
            tag="ARCHITECTURE"
            question="How much can semantic caching actually save on monthly API bills?"
            answer="In customer support, internal workflow search, and structured document processing, between 35% and 55% of queries share identical semantic intent. By matching user queries via vector similarity before calling external model APIs, teams cut monthly provider bills by 30% to 50% while improving response latency to under 25 milliseconds."
          />
          <AccordionItem
            tag="AUDIT & TIMELINE"
            question="How do we audit our token costs without slowing down engineering sprints?"
            answer="A forensic unit economics audit does not require rewriting your application. It involves instrumenting request-level proxy logs, tagging inference calls by customer tier and feature ID, and running a 14-day analysis of model-routing efficiency to pinpoint margin leaks."
          />
        </div>
      </section>

      {/* Primary Conversion CTA: $450 Teardown */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-[#162e26] text-white p-8 sm:p-12 border border-[#29473b] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b77a35]/20 border border-[#b77a35]/40 text-[#d8c7a8] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              1-on-1 Working Session · $450 Fixed Fee
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Book Your AI P&amp;L and Roadmap Teardown
            </h2>

            <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Live 60-minute executive session with Richard Ewing. We inspect your AI feature costs,
              API bills, and product roadmap to pinpoint margin compression, establish token budgets,
              and restructure pricing before your next board review.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">60-minute live 1-on-1 deep dive with Richard Ewing</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Seat vs. usage vs. outcome pricing restructure</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Immediate cut-list to free up 20% to 35% engineering capacity</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#b77a35] shrink-0 mt-0.5" />
                <span className="text-zinc-200">Written 30-day margin recovery blueprint + Operating Kit</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact?subject=P%26L+Teardown"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#b77a35] text-white font-bold hover:bg-[#a36b2d] transition-all text-base shadow-md"
              >
                Book 1-on-1 Teardown ($450)
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
