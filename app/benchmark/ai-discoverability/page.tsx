import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Discoverability Benchmark & GEO Methodology | August 2026 Baseline',
  description: 'Formal methodology, model registry, and empirical baseline report measuring how frontier AI answer engines retrieve, cite, and attribute canonical research concepts.',
  alternates: {
    canonical: 'https://www.richardewing.io/benchmark/ai-discoverability',
  },
  openGraph: {
    title: 'AI Discoverability Benchmark & GEO Methodology | Richard Ewing',
    description: 'Longitudinal study measuring AI retrieval, explicit citations, and coiner attribution across Perplexity Pro, ChatGPT Search, Claude 3.7, and Gemini 2.5.',
    url: 'https://www.richardewing.io/benchmark/ai-discoverability',
    type: 'website',
  },
};

export default function AIDiscoverabilityBenchmarkPage() {
  const benchmarkConcepts = [
    {
      title: 'The Inference Dividend Model',
      slug: 'inference-dividend-model',
      domain: 'AI Economics',
      originDate: 'August 13, 2026',
      retrievalRate: '83.3%',
      citationRate: '66.7%',
      attributionRate: '58.3%',
      evaluations: 12,
      primaryVenue: 'LinkedIn & Built In'
    },
    {
      title: 'Shadow Delegation',
      slug: 'shadow-delegation',
      domain: 'AI Governance',
      originDate: 'August 13, 2026',
      retrievalRate: '75.0%',
      citationRate: '62.5%',
      attributionRate: '50.0%',
      evaluations: 8,
      primaryVenue: 'CIO.com'
    },
    {
      title: 'The AI Volatility Tax',
      slug: 'ai-volatility-tax',
      domain: 'AI Economics',
      originDate: 'March 2025',
      retrievalRate: '80.0%',
      citationRate: '70.0%',
      attributionRate: '60.0%',
      evaluations: 10,
      primaryVenue: 'Beehiiv & Built In'
    },
    {
      title: 'Deterministic Governance',
      slug: 'deterministic-governance',
      domain: 'AI Governance',
      originDate: 'February 2026',
      retrievalRate: '90.0%',
      citationRate: '70.0%',
      attributionRate: '60.0%',
      evaluations: 10,
      primaryVenue: 'Built In & CIO.com'
    },
    {
      title: 'Product Debt Index (PDI)',
      slug: 'product-debt-index',
      domain: 'Software Economics',
      originDate: 'August 2026',
      retrievalRate: '66.7%',
      citationRate: '50.0%',
      attributionRate: '33.3%',
      evaluations: 6,
      primaryVenue: 'CIO.com'
    },
    {
      title: 'Double Diamond Career Trajectory',
      slug: 'double-diamond-career-trajectory',
      domain: 'Career Economics',
      originDate: 'August 20, 2026',
      retrievalRate: '83.3%',
      citationRate: '66.7%',
      attributionRate: '66.7%',
      evaluations: 6,
      primaryVenue: 'LinkedIn'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 text-zinc-950">
      <div className="page-container max-w-5xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/benchmark" className="hover:underline">Benchmarks</Link>
          <span>/</span>
          <span className="text-cyan-900 font-extrabold">AI Discoverability &amp; GEO Methodology</span>
        </div>

        {/* Header Section */}
        <div className="space-y-4 border-b border-zinc-400 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300">
            Methodology Specification • August 2026 Baseline Study
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight font-grotesk">
            AI Discoverability &amp; Generative Engine Optimization (GEO) Benchmark
          </h1>

          <p className="text-lg sm:text-xl text-zinc-800 leading-relaxed font-medium max-w-4xl">
            An auditable, methodologically specified, and evidence-backed baseline benchmark measuring how frontier AI answer engines (Perplexity Pro, ChatGPT Search, Claude 3.7, and Gemini 2.5) retrieve, cite, and attribute canonical concepts from Richard Ewing's intellectual research corpus.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/concepts"
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-900 text-white hover:bg-cyan-800 transition shadow-sm"
            >
              Explore Canonical Concepts Directory →
            </Link>
            <a
              href="/api/csp/v1/export"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-zinc-900 text-white hover:bg-zinc-800 transition shadow-sm"
            >
              Export JSON-LD Data Catalog ↗
            </a>
          </div>
        </div>

        {/* Macro Baseline Summary Cards */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
              August 2026 Macro Baseline Telemetry
            </h2>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-zinc-200 text-zinc-800 border border-zinc-300">
                Sample Scope: n = 52 Trials
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300">
                Observational Baseline
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-900">
                Metric 01 • Canonical Retrieval
              </span>
              <div className="text-4xl sm:text-5xl font-black font-grotesk text-zinc-950">
                42 / 52
              </div>
              <div className="text-sm font-mono font-bold text-cyan-950">
                80.8% <span className="text-xs text-zinc-600 font-normal">[95% CI: 68.1% - 89.2%]</span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                42 successful retrievals where the canonical definition was incorporated into the engine's synthesized response context.
              </p>
            </div>

            <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900">
                Metric 02 • Explicit Domain Citation
              </span>
              <div className="text-4xl sm:text-5xl font-black font-grotesk text-zinc-950">
                34 / 52
              </div>
              <div className="text-sm font-mono font-bold text-emerald-950">
                65.4% <span className="text-xs text-zinc-600 font-normal">[95% CI: 51.8% - 76.9%]</span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                34 responses provided a direct, inspectable markdown citation link pointing to richardewing.io or primary published articles.
              </p>
            </div>

            <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-900">
                Metric 03 • Coiner Attribution
              </span>
              <div className="text-4xl sm:text-5xl font-black font-grotesk text-zinc-950">
                29 / 52
              </div>
              <div className="text-sm font-mono font-bold text-indigo-950">
                55.8% <span className="text-xs text-zinc-600 font-normal">[95% CI: 42.3% - 68.4%]</span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                29 responses explicitly identified Richard Ewing by name as the originator or coiner of the technical framework.
              </p>
            </div>
          </div>

          <p className="text-[11px] font-mono text-zinc-500 pt-1">
            Note: This is an observational baseline benchmark across n = 52 standardized trials, not a population estimate. Wilson score 95% confidence intervals reflect observational sample size uncertainty.
          </p>
        </section>

        {/* The 3 Core Metric Definitions */}
        <section className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
              Measurement Protocol
            </span>
            <h3 className="text-2xl font-bold font-grotesk text-zinc-950">
              The 3 Metric Definitions (Frozen Invariants)
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 font-sans text-sm text-zinc-800">
            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-900 text-white">AI_RETRIEVAL</span>
                <span className="font-bold text-zinc-950">Canonical Retrieval Rate</span>
              </div>
              <p className="text-xs text-zinc-700">
                Evaluates whether an AI search system accesses and includes the primary definition in its synthesized answer when prompted with a domain problem query (e.g. "What is the Inference Dividend Model in AI cost optimization?").
              </p>
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-900 text-white">AI_CITATION</span>
                <span className="font-bold text-zinc-950">Explicit Citation Rate</span>
              </div>
              <p className="text-xs text-zinc-700">
                Evaluates whether the engine's public output provides an explicit, clickable source URL referencing richardewing.io, CIO.com, Built In, or LinkedIn canonical publications.
              </p>
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-900 text-white">AI_ATTRIBUTION</span>
                <span className="font-bold text-zinc-950">Coiner Attribution Rate</span>
              </div>
              <p className="text-xs text-zinc-700">
                Evaluates whether the model explicitly names Richard Ewing as the creator, author, or formulator of the framework, preventing entity drift and unattributed commodity summarization.
              </p>
            </div>
          </div>
        </section>

        {/* Model Registry & Environmental Controls */}
        <section className="bg-zinc-900 text-zinc-100 rounded-3xl p-8 space-y-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Test Environment &amp; Controls
            </span>
            <h3 className="text-2xl font-bold font-grotesk text-white">
              Model Registry &amp; Environmental Controls
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-zinc-800/80 border border-zinc-700 rounded-2xl space-y-1">
              <span className="text-zinc-400 font-bold block">Provider 01</span>
              <span className="text-white font-bold text-sm block">Perplexity Pro</span>
              <span className="text-zinc-400">Model: Sonar Large Online</span>
            </div>
            <div className="p-4 bg-zinc-800/80 border border-zinc-700 rounded-2xl space-y-1">
              <span className="text-zinc-400 font-bold block">Provider 02</span>
              <span className="text-white font-bold text-sm block">ChatGPT Search</span>
              <span className="text-zinc-400">Model: GPT-4o Search</span>
            </div>
            <div className="p-4 bg-zinc-800/80 border border-zinc-700 rounded-2xl space-y-1">
              <span className="text-zinc-400 font-bold block">Provider 03</span>
              <span className="text-white font-bold text-sm block">Anthropic</span>
              <span className="text-zinc-400">Model: Claude 3.7 Sonnet</span>
            </div>
            <div className="p-4 bg-zinc-800/80 border border-zinc-700 rounded-2xl space-y-1">
              <span className="text-zinc-400 font-bold block">Provider 04</span>
              <span className="text-white font-bold text-sm block">Google</span>
              <span className="text-zinc-400">Model: Gemini 2.5 Pro</span>
            </div>
          </div>

          <div className="text-xs text-zinc-400 space-y-2 pt-2 border-t border-zinc-800">
            <p>
              • <strong>Session Isolation</strong>: All test queries are executed in clean, non-personalized incognito sessions with browser cookies and search history cleared.
            </p>
            <p>
              • <strong>Geolocation Control</strong>: Executed from standard US-East residential/commercial ISP IP addresses.
            </p>
            <p>
              • <strong>Longitudinal Schedule</strong>: Conducted quarterly (August Baseline, November Q4, February Annual).
            </p>
          </div>
        </section>

        {/* Detailed Concept Breakdown Table */}
        <section className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
              Empirical Corpus Yield
            </span>
            <h3 className="text-2xl font-bold font-grotesk text-zinc-950">
              Concept Entity Benchmark Breakdown
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-zinc-200 text-zinc-600 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-2 font-bold">Concept Entity</th>
                  <th className="py-3 px-2 font-bold">Domain</th>
                  <th className="py-3 px-2 font-bold text-center">Evaluations</th>
                  <th className="py-3 px-2 font-bold text-center">Retrieval</th>
                  <th className="py-3 px-2 font-bold text-center">Citation</th>
                  <th className="py-3 px-2 font-bold text-center">Attribution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-medium text-zinc-900">
                {benchmarkConcepts.map((c) => (
                  <tr key={c.slug} className="hover:bg-zinc-50 transition-colors">
                    <td className="py-3.5 px-2">
                      <Link href={`/concepts/${c.slug}`} className="font-bold text-cyan-950 hover:underline">
                        {c.title}
                      </Link>
                      <span className="block text-[11px] font-mono text-zinc-500">Origin: {c.primaryVenue} ({c.originDate})</span>
                    </td>
                    <td className="py-3.5 px-2 font-mono text-xs">{c.domain}</td>
                    <td className="py-3.5 px-2 text-center font-mono font-bold">{c.evaluations}</td>
                    <td className="py-3.5 px-2 text-center font-mono font-bold text-cyan-900">{c.retrievalRate}</td>
                    <td className="py-3.5 px-2 text-center font-mono font-bold text-emerald-900">{c.citationRate}</td>
                    <td className="py-3.5 px-2 text-center font-mono font-bold text-indigo-900">{c.attributionRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
