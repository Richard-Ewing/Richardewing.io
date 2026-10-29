import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { MetricPanel, EditorialCard } from '@/components/editorial';

export const metadata: Metadata = {
  title: 'AI Cost & Engineering Benchmarks (2026)',
  description:
    'Open 2026 benchmarks for LLM API token pricing, $29/$49/$99 SaaS gross margins, technical debt drag, and revenue per engineer across 500+ orgs.',
  keywords: [
    'technical debt benchmark',
    'LLM API cost benchmark 2026',
    'AI SaaS gross margin benchmark',
    'engineering productivity benchmark 2026',
    'state of product debt',
    'R&D efficiency report',
    'software maintenance costs 2026',
  ],
  alternates: { canonical: 'https://www.richardewing.io/benchmark' },
  openGraph: {
    title: '2026 AI Cost & Engineering Benchmarks | Richard Ewing',
    description:
      'Monthly LLM token pricing, SaaS seat margin stress tests, and anonymized R&D capital telemetry from 500+ software teams.',
    url: 'https://www.richardewing.io/benchmark',
    type: 'website',
  },
};

export default function BenchmarkPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '2026 AI Economics & Product Debt Benchmarks',
    description:
      'Open 2026 empirical datasets for LLM API token pricing, SaaS gross margins, technical debt drag, and revenue per engineer across 500+ engineering organizations.',
    url: 'https://www.richardewing.io/benchmark',
    author: {
      '@type': 'Person',
      '@id': 'https://www.richardewing.io/#person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io',
    },
    hasPart: [
      {
        '@type': 'Dataset',
        name: '2026 LLM API Cost & SaaS Gross Margin Index',
        url: 'https://www.richardewing.io/benchmark/llm-cost-and-margin-index',
      },
      {
        '@type': 'Dataset',
        name: 'The 2026 AI Capital Engineering Index',
        url: 'https://www.richardewing.io/benchmark/ai-capital-2026',
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Benchmarks', item: 'https://www.richardewing.io/benchmark' },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1e2924] pt-24 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        <header className="space-y-5 max-w-3xl">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
            Open Empirical Telemetry · 2026 Living Reports
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#162e26] leading-[1.1]">
            2026 AI Economics &amp; Product Debt Benchmarks
          </h1>
          <p
            itemProp="description"
            className="text-lg text-[#4a5850] leading-relaxed"
          >
            Ungated reference datasets built for CFOs, CPOs, CTOs, VPs of Engineering, and Private Equity Operating Partners. Compare your inference bills, SaaS gross margins, maintenance ratios, and revenue per engineer against real production cohorts.
          </p>
        </header>

        {/* Top Headline Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricPanel
            variant="forest"
            label="Maintenance vs Net-New Build"
            value="67%"
            trend="R&D Capacity"
            trendDirection="down"
            subtext="Share of audited engineering organizations spending more payroll on maintenance OpEx than new product features."
          />
          <MetricPanel
            variant="white"
            label="Hidden Liability Discovered"
            value="$1.2M"
            trend="Median Audit"
            trendDirection="neutral"
            subtext="Average unrecorded technical debt and negative-carry AI spend surfaced per diagnostic engagement."
          />
          <MetricPanel
            variant="paper"
            label="Unmeasured Debt Runway"
            value="18 mo"
            trend="To Insolvency"
            trendDirection="down"
            subtext="Median runway to Technical Insolvency Date when sprint maintenance allocation goes untracked."
          />
        </section>

        {/* Flagship Open Benchmark Hubs */}
        <section className="space-y-6">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              Published Reference Indices
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#162e26] mt-1">
              Open Benchmark Datasets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EditorialCard
              variant="forest"
              eyebrow="Monthly Living Index"
              badge="Updated Oct 2026"
              badgeVariant="gold"
              title="2026 LLM API Cost & SaaS Gross Margin Index"
              description="Side-by-side input, cached prefix, and output token pricing across Claude 4.5, GPT-5, Gemini 3, and reserved H100s stress-tested against $29, $49, and $99 SaaS seats at P50, P90, and P99 usage."
              href="/benchmark/llm-cost-and-margin-index"
              actionText="Open LLM Margin Index →"
            />
            <EditorialCard
              variant="white"
              eyebrow="Annual Capital Report"
              badge="Open Data"
              badgeVariant="forest"
              title="The 2026 AI Capital Engineering Index"
              description="Empirical M&A telemetry covering the 4.2M token/day SLM crossover threshold, engineering role autonomy rates, latency-driven ACV churn, and PostgreSQL pgvector consolidation."
              href="/benchmark/ai-capital-2026"
              actionText="Read Capital Engineering Index →"
            />
          </div>
        </section>

        {/* State of Product Debt Executive Summary & Newsletter */}
        <section className="rounded-3xl border border-[#24332b]/15 bg-white p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
                Executive Readout · PDF &amp; Briefing
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#162e26]">
                What Is Inside the State of Product Debt Report
              </h2>
              <ul className="space-y-2.5">
                {[
                  'Product Debt Index (PDI) quartile benchmarks by ARR stage',
                  'AI inference cost per useful output across B2B SaaS verticals',
                  'Engineering sprint split: net-new build vs maintenance OpEx',
                  'Revenue per engineer (APER) bands from Seed through PE buyout',
                  'Technical Insolvency Date distributions and CFO remediation levers',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[#1e2924] text-sm">
                    <CheckCircle className="w-4 h-4 text-[#162e26] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#FAF9F6] border border-[#24332b]/15 p-7 text-center space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#162e26]">
                Get Monthly Benchmark Updates
              </h3>
              <p className="text-sm text-[#4a5850]">
                Receive monthly token pricing shifts, SaaS margin benchmarks, and teardown memos via The AI Economist briefing.
              </p>
              <a
                href="https://theaieconomist.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 px-6 bg-[#162e26] hover:bg-[#29473b] text-white font-bold text-sm rounded-xl transition-all"
              >
                Subscribe for Free Updates →
              </a>
              <p className="text-xs font-mono text-[#66716a]">
                Read by 8,000+ CTOs, CFOs, CPOs, and Founders. Zero spam.
              </p>
            </div>
          </div>
        </section>

        {/* Personalized Diagnostic Callout */}
        <section className="rounded-3xl border border-[#24332b]/15 bg-[#ebe7dc] p-8 sm:p-10 text-center space-y-5">
          <h2 className="font-serif text-3xl font-bold text-[#162e26]">
            Benchmarks Show Industry Medians. Diagnostics Audit Your P&amp;L.
          </h2>
          <p className="text-[#4a5850] max-w-2xl mx-auto">
            Run your own engineering payroll, maintenance ratio, or monthly token volume through our deterministic calculators, or book a hands-on diagnostic session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/tools/pdi"
              className="px-6 py-3.5 bg-white border border-[#24332b]/20 hover:border-[#162e26] text-[#162e26] font-bold text-sm rounded-xl transition-all"
            >
              Run Technical Debt Calculator (PDI)
            </Link>
            <Link
              href="/services"
              className="px-6 py-3.5 bg-[#162e26] hover:bg-[#29473b] text-white font-bold text-sm rounded-xl transition-all inline-flex items-center gap-2"
            >
              View Advisory &amp; Build Sprints <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
