import type { Metadata } from 'next';
import Link from 'next/link';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

export const metadata: Metadata = {
  title: 'Canonical Concepts Directory & Research Graph | Richard Ewing',
  description: 'Topical index of canonical research concepts, evidence ledgers, and formal specifications across AI Economics, AI Governance, Software Economics, and Engineering Leadership.',
  alternates: {
    canonical: 'https://www.richardewing.io/concepts',
  },
};

export default function ResearchConceptsIndexPage() {
  const domains = Array.from(new Set(CANONICAL_CONCEPTS.map((c) => c.domain)));

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50">
            Node Entity Inversion • Concepts &gt; Evidence &gt; Publications
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-grotesk">
            Canonical Research Concepts
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
            The intellectual substrate of Richard Ewing’s research corpus. Concepts serve as primary entities with step-by-step provenance timelines, inspectable evidence ledgers, and executable diagnostic engines.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/concepts"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 transition"
            >
              Top-Level /concepts Directory
            </Link>
            <Link
              href="/research/publications"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition"
            >
              100+ Publications Catalog
            </Link>
            <a
              href="/api/csp/v1/export"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-950 border border-emerald-800/60 text-emerald-400 hover:bg-emerald-900/40 transition"
            >
              CSP Protocol Export API ↗
            </a>
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CANONICAL_CONCEPTS.map((concept) => {
            return (
              <div
                key={concept.slug}
                className="bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                      {concept.domain}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-zinc-400">
                        Confidence: {(concept.health.confidence * 100).toFixed(0)}%
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-bold">
                        {concept.health.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Definition */}
                  <div>
                    <h2 className="text-xl font-bold font-grotesk text-white group-hover:text-cyan-400 transition-colors">
                      <Link href={`/concepts/${concept.slug}`}>
                        {concept.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-zinc-300 mt-2 line-clamp-3 leading-relaxed">
                      {concept.definition}
                    </p>
                  </div>

                  {/* Executable Tool Badge if Present */}
                  {concept.executableTool && (
                    <div className="bg-zinc-950/80 border border-cyan-900/50 rounded-xl p-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                          [{concept.executableTool.type}]
                        </div>
                        <div className="text-xs font-bold text-white">
                          {concept.executableTool.name}
                        </div>
                      </div>
                      <Link
                        href={concept.executableTool.url}
                        className="px-2.5 py-1 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold font-mono text-[10px] rounded-lg transition whitespace-nowrap"
                      >
                        Launch ↗
                      </Link>
                    </div>
                  )}

                  {/* Provenance & Evidence Metrics */}
                  <div className="pt-2 border-t border-zinc-800/60 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 gap-2">
                    <span>First: {concept.firstIntroduced}</span>
                    <span className="text-emerald-400 font-semibold">
                      {concept.evidenceLedger.length} Evidence Items
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    {concept.canonicalReadingOrder?.length || 0} Reading Steps
                  </span>
                  <Link
                    href={`/concepts/${concept.slug}`}
                    className="text-xs font-mono font-bold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    View Concept Specification →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Domain Classification Legend */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Knowledge Domains & Canonical Taxonomy
          </h3>
          <div className="flex flex-wrap gap-2">
            {domains.map((dom) => (
              <span
                key={dom}
                className="px-3 py-1 bg-zinc-950 text-zinc-300 font-mono text-xs rounded-full border border-zinc-800"
              >
                {dom}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
