import type { Metadata } from 'next';
import Link from 'next/link';
import {
  EditorialCard,
  PublicationCard,
  ConceptCard,
  MetricPanel,
  QuoteBlock,
  AccordionItem,
} from '@/components/editorial';
import { ArrowRight, BookOpen, FileText, CheckCircle2, Compass, Landmark, Scale, Network } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The AI Economist: Capital Allocation & Unit Margins | Richard Ewing',
  description:
    'Category-defining methodology bridging finance, software architecture, and product leadership to ensure enterprise AI investments generate durable cash flow.',
  alternates: {
    canonical: 'https://www.richardewing.io/ai-economist',
  },
  openGraph: {
    title: 'The AI Economist: Capital Allocation & Unit Margins | Richard Ewing',
    description:
      'Why the transition from deterministic code to probabilistic models requires an AI Economist to protect software margins and allocate R&D capital.',
    url: 'https://www.richardewing.io/ai-economist',
    type: 'website',
  },
};

export default function AIEconomistPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The AI Economist: Capital Allocation at the Model Inference Layer',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      jobTitle: 'AI Economist & Enterprise R&D Auditor',
      url: 'https://www.richardewing.io',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Richard Ewing Advisory',
      url: 'https://www.richardewing.io',
    },
    description:
      'A canonical methodology defining the role of the AI Economist across financial modeling, system routing, and R&D capital allocation.',
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1e2924] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#162e26]/10 border border-[#162e26]/30 text-[#162e26] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
          <Landmark className="w-3.5 h-3.5 text-[#b77a35]" />
          Category Methodology · Canonical Definition
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#162e26] leading-[1.15] mb-6">
          The AI Economist: Capital Allocation at the Model Inference Layer
        </h1>

        <p className="font-sans text-lg sm:text-xl text-[#66716a] max-w-3xl mx-auto leading-relaxed mb-8">
          Software economics used to be simple: write code once, host it cheaply, and collect
          an 85% gross margin. Generative models ended that era. Every interaction now incurs real,
          variable computing costs. An AI Economist bridges financial modeling, systems architecture,
          and product strategy to ensure enterprise AI investments yield measurable cash flow.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#162e26] text-white font-medium hover:bg-[#29473b] transition-all text-sm shadow-sm"
          >
            Explore Research Corpus (174+) ↗
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#24332b]/20 text-[#162e26] font-medium hover:bg-[#ebe7dc] transition-all text-sm"
          >
            Inspect The Book ↗
          </Link>
        </div>
      </header>

      {/* Authority Metric Panels */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricPanel
            label="Published Research Works"
            value="174+"
            trend="Peer-Reviewed"
            trendDirection="neutral"
            subtext="Across CIO.com, Built In, Mind the Product, and HackerNoon."
            variant="paper"
          />
          <MetricPanel
            label="Capital Under Forensic Audit"
            value="$85M+"
            trend="R&D Payroll & APIs"
            trendDirection="neutral"
            subtext="Evaluated across enterprise SaaS, healthtech, and fintech software."
            variant="white"
          />
          <MetricPanel
            label="Average Gross Margin Recovery"
            value="+32%"
            trend="Measured Yield"
            trendDirection="up"
            subtext="Restored through tiered model routing, semantic caching, and pricing resets."
            variant="forest"
          />
        </div>
      </section>

      {/* The Triad */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="mb-10 text-center sm:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Role Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#162e26] mt-2">
            The Triad of the AI Economist
          </h2>
          <p className="font-sans text-[#66716a] text-base mt-2 max-w-2xl">
            Neither a pure financial analyst nor a pure machine learning engineer, the AI Economist
            operates across three interconnected domains:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EditorialCard
            eyebrow="Domain 01"
            title="Financial Economics & Unit Margins"
            description="Calculating cost per query, token consumption standard deviations, and customer margin break-even points. Converting raw API billing logs into board-ready COGS projections."
            badge="Finance & P&L"
            badgeVariant="forest"
            variant="white"
            meta="Gross Margin Defense"
          />
          <EditorialCard
            eyebrow="Domain 02"
            title="Systems Architecture & Routing"
            description="Establishing deterministic boundaries: semantic caching, small-model task distillation, context window budgeting, and prompt payload compression to halt runaway token consumption."
            badge="Engineering Systems"
            badgeVariant="gold"
            variant="white"
            meta="Runtime Efficiency"
          />
          <EditorialCard
            eyebrow="Domain 03"
            title="Capital Strategy & Board Defense"
            description="Auditing product backlogs for negative-carry zombie features, defending R&D capitalization choices under Section 174, and providing clear proof of AI returns for the board."
            badge="Executive Advisory"
            badgeVariant="rose"
            variant="white"
            meta="Capital Allocation"
          />
        </div>
      </section>

      {/* Quote Block */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <QuoteBlock
          quote="Software economics used to be simple: write the code once, pay pennies for cloud servers, collect an 85% gross margin. Generative models ended that era. Every user action now incurs real computational cost. If you don't have an AI economist looking at your product architecture, your margin will vanish while your user count grows."
          attribution="Richard Ewing"
          source="AI Economist & Enterprise R&D Auditor"
          variant="forest"
        />
      </section>

      {/* The 5-Step Asset Engine Hierarchy */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--paper2,#ebe7dc)] border border-[#24332b]/15">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
              Closed-Loop Asset Engine
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-2">
              The 5-Step Asset Engine Hierarchy
            </h2>
            <p className="font-sans text-[#66716a] text-sm sm:text-base mt-2 leading-relaxed">
              Curriculum and advice without empirical proof is just consulting theater. Every
              recommendation, diagnostic score, and advisory roadmap delivered by Richard Ewing
              originates from a strict five-step proving ground:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-[#24332b]/10">
              <span className="font-mono text-xs text-[#b77a35] font-bold">STEP 01</span>
              <h4 className="font-serif text-base font-bold text-[#162e26] mt-1 mb-1">Research</h4>
              <p className="text-xs text-[#66716a]">174+ published articles and field case studies.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#24332b]/10">
              <span className="font-mono text-xs text-[#b77a35] font-bold">STEP 02</span>
              <h4 className="font-serif text-base font-bold text-[#162e26] mt-1 mb-1">Concept</h4>
              <p className="text-xs text-[#66716a]">130+ canonical ontology specifications.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#24332b]/10">
              <span className="font-mono text-xs text-[#b77a35] font-bold">STEP 03</span>
              <h4 className="font-serif text-base font-bold text-[#162e26] mt-1 mb-1">Framework</h4>
              <p className="text-xs text-[#66716a]">Mathematical formulas and margin limits.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#24332b]/10">
              <span className="font-mono text-xs text-[#b77a35] font-bold">STEP 04</span>
              <h4 className="font-serif text-base font-bold text-[#162e26] mt-1 mb-1">Diagnostic</h4>
              <p className="text-xs text-[#66716a]">Interactive benchmark audit tools.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#162e26] text-white border border-[#24332b]/20">
              <span className="font-mono text-xs text-[#d8c7a8] font-bold">STEP 05</span>
              <h4 className="font-serif text-base font-bold text-white mt-1 mb-1">Execution</h4>
              <p className="text-xs text-zinc-300">Live advisory and deployed software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
              Original Research
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-2">
              Featured Publications &amp; Field Studies
            </h2>
          </div>
          <Link
            href="/research/publications"
            className="text-xs font-mono font-semibold text-[#162e26] hover:text-[#b77a35] inline-flex items-center gap-1"
          >
            View Complete Index (174+) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PublicationCard
            title="The Real Cost of AI: Why Model Inference Collapses Margins"
            publisher="CIO.com"
            date="June 2026"
            thesis="Generative AI introduces variable COGS into historically fixed-cost software. If leaders fail to track task-level compute, high user engagement destroys margins."
            url="/research"
            domain="AI Economics"
            readTime="7 min read"
          />
          <PublicationCard
            title="The True Cost of AI Coding Assistants: Why Velocity Metrics Lie"
            publisher="Built In"
            date="May 2026"
            thesis="Experienced developers face a 19% productivity tax when factoring in AI debugging and prompt engineering rework. Why lines of code is a misleading proxy."
            url="/research"
            domain="Engineering Economics"
            readTime="9 min read"
          />
          <PublicationCard
            title="Zombie Features in the AI Era: Stop Subsidizing Unused Models"
            publisher="Mind the Product"
            date="April 2026"
            thesis="How product teams ship unmetered chat copilots that accumulate technical debt and cloud liabilities while less than 4% of active users find utility."
            url="/research"
            domain="Product Leadership"
            readTime="8 min read"
          />
        </div>
      </section>

      {/* Canonical Concepts */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
              Ontology &amp; Frameworks
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-2">
              Canonical AI Economics Concepts
            </h2>
          </div>
          <Link
            href="/concepts"
            className="text-xs font-mono font-semibold text-[#162e26] hover:text-[#b77a35] inline-flex items-center gap-1"
          >
            Inspect All 130+ Concepts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ConceptCard
            slug="product-debt-index"
            title="Product Debt Index (PDI)"
            definition="A standardized 0 to 100 rating measuring the exit valuation risk of accumulated technical debt, legacy dependencies, and unmanaged AI inference complexity."
            domain="Valuation & M&A"
            expertiseLevel="Boardroom"
            canonicalQuote="Technical debt is an unrecorded balance sheet liability that surfaces abruptly during M&A technical due diligence."
          />
          <ConceptCard
            slug="cost-of-predictivity"
            title="Cost of Predictivity (CoP)"
            definition="The marginal computational and human verification expenditure required to raise an AI model's output reliability from acceptable to mission-critical."
            domain="AI Economics"
            expertiseLevel="Executive"
            canonicalQuote="Moving from 85% accuracy to 99% accuracy often incurs a 10x explosion in token costs and review cycles."
          />
        </div>
      </section>

      {/* The Canonical Book */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#24332b]/15 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="p-6 rounded-2xl bg-[#162e26] text-white shrink-0 text-center md:text-left w-full md:w-64">
            <span className="font-mono text-[10px] text-[#d8c7a8] uppercase tracking-widest font-bold">
              Canonical Book
            </span>
            <h3 className="font-serif text-2xl font-bold mt-2 mb-3 leading-snug">
              The Pragmatic AI Builder
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">
              Turn domain expertise and engineering ability into a profitable software business without
              venture capital theater.
            </p>
            <span className="inline-block px-2.5 py-1 rounded bg-white/10 text-xs font-mono font-semibold text-white">
              20 Chapters · 4 Parts
            </span>
          </div>

          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
              The Field Guide
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#162e26]">
              Software Construction Without Venture Capital Theater
            </h3>
            <p className="text-sm sm:text-base text-[#66716a] leading-relaxed">
              Written in plain English, *The Pragmatic AI Builder* is the authoritative operator
              manual for founders, engineering leaders, and product directors. Learn the General
              Contractor model: how to direct AI coding tools, budget context windows, eliminate
              token waste, and price for sustainable gross margins.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#162e26] text-white font-medium hover:bg-[#29473b] transition-all text-sm"
              >
                Inspect Chapter Outlines ↗
              </Link>
              <Link
                href="/ai-economist-book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--paper2,#ebe7dc)] text-[#162e26] font-medium hover:bg-zinc-200 transition-all text-sm"
              >
                Read Book Overview ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-semibold">
            Methodology FAQ
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-2">
            Frequently Asked Questions on AI Economics
          </h2>
        </div>

        <div className="space-y-4">
          <AccordionItem
            tag="ROLE DEFINITION"
            question="What does an AI Economist actually do for a technology company?"
            answer="An AI Economist connects engineering architecture to the profit-and-loss statement. They model query-level inference economics, design multi-tier model routing strategies, establish circuit breakers on agent loops, and work with product leaders to align subscription pricing with variable token costs."
          />
          <AccordionItem
            tag="STAKEHOLDERS"
            question="How does an AI Economist collaborate with the CFO and VP of Engineering?"
            answer="The AI Economist gives the CFO granular visibility into unit margins, cloud inference COGS, and return on AI investments. Simultaneously, they provide the VP of Engineering with concrete architectural guidelines (prompt caching, token budgets, compact model benchmarks) so developers can ship features without fear of unexpected budget overruns."
          />
          <AccordionItem
            tag="FINOPS VS AI ECONOMICS"
            question="How does AI Economics differ from traditional cloud FinOps?"
            answer="Traditional FinOps focuses on infrastructure provisioning: reserved cloud instances, idle database cleanup, and storage tiering. AI Economics focuses on algorithmic and behavioral consumption: prompt payload optimization, context pruning, model task allocation, cognitive labor verification, and user pricing models."
          />
          <AccordionItem
            tag="STARTING POINT"
            question="Where should our team start if our margins are already declining?"
            answer="Begin with our free AI Unit Economics Benchmark (/tools/aueb) or book a 60-minute $450 AI P&L and Roadmap Teardown. We immediately inspect your top three cost drivers, identify prompt bloat, and produce an actionable 30-day recovery plan."
          />
        </div>
      </section>

      {/* Primary Conversion CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-[#162e26] text-white p-8 sm:p-12 border border-[#29473b] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b77a35]/20 border border-[#b77a35]/40 text-[#d8c7a8] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
              Executive Engagement · Confidential Advisory
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Retain Richard Ewing as Your Fractional AI Economist
            </h2>

            <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Partner with Richard Ewing on an executive advisory retainer. We conduct deep codebase
              and P&amp;L forensic audits, restructure customer pricing, and prepare your executive
              team and board for profitable AI scaling.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/advisory"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#b77a35] text-white font-bold hover:bg-[#a36b2d] transition-all text-base shadow-md"
              >
                Explore Advisory Retainers
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20 transition-all text-sm"
              >
                View Transparent Pricing ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
