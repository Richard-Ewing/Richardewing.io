import type { Metadata } from 'next';
import Link from 'next/link';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

export const metadata: Metadata = {
  title: 'Canonical Concepts Directory & Research Graph | Richard Ewing',
  description: 'Authoritative index of Layer 1 Industry Discovery Concepts and Layer 2 Richard Ewing Original Frameworks across AI Economics, AI Governance, Software Economics, and Product Leadership.',
  alternates: {
    canonical: 'https://www.richardewing.io/concepts',
  },
};

export default function ResearchConceptsIndexPage() {
  const domains = Array.from(new Set(CANONICAL_CONCEPTS.map((c) => c.domain)));
  const layer1Concepts = CANONICAL_CONCEPTS.filter((c) => c.category === 'Industry Concept (Discovery On-Ramp)');
  const layer2Concepts = CANONICAL_CONCEPTS.filter((c) => c.category === 'Richard Ewing Canon (Original Framework)');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50">
            Knowledge Substrate • Layer 1 Industry Discovery &amp; Layer 2 Original Canon
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-grotesk">
            Canonical Concepts &amp; Research Graph
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
            The intellectual operating system of Richard Ewing’s research corpus. Broad industry concepts serve as discovery entry points, bridging directly into original canonical frameworks, evidence ledgers, and diagnostic tools.
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

        {/* Section 1: Layer 2 - The Richard Ewing Original Canon */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Layer 2 • High Differentiation &amp; Original Intellectual Property
            </span>
            <h2 className="text-3xl font-bold font-grotesk text-white">The Richard Ewing Canon</h2>
            <p className="text-sm text-zinc-400">
              Original specifications, financial tax models, and governance frameworks created by Richard Ewing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layer2Concepts.map((concept) => (
              <div
                key={concept.slug}
                className="bg-zinc-900/70 border border-cyan-900/40 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                      {concept.domain}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                      Original Canon
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-grotesk text-white group-hover:text-cyan-400 transition-colors">
                      <Link href={`/concepts/${concept.slug}`}>
                        {concept.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-zinc-300 mt-2 line-clamp-3 leading-relaxed">
                      {concept.definition}
                    </p>
                  </div>

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
            ))}
          </div>
        </section>

        {/* Section 2: Layer 1 - Industry Discovery On-Ramps */}
        <section className="space-y-6 pt-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              Layer 1 • High-Volume Search &amp; Discovery Entry Points
            </span>
            <h2 className="text-3xl font-bold font-grotesk text-white">Industry Concepts &amp; On-Ramps</h2>
            <p className="text-sm text-zinc-400">
              Broad industry terms that introduce readers and AI systems to Richard Ewing’s research and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layer1Concepts.map((concept) => (
              <div
                key={concept.slug}
                className="bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                      {concept.domain}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-zinc-800 text-zinc-400">
                      Industry On-Ramp
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-grotesk text-white group-hover:text-emerald-400 transition-colors">
                      <Link href={`/concepts/${concept.slug}`}>
                        {concept.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-zinc-300 mt-2 line-clamp-3 leading-relaxed">
                      {concept.definition}
                    </p>
                  </div>

                  {concept.executableTool && (
                    <div className="bg-zinc-950/80 border border-emerald-900/50 rounded-xl p-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                          [{concept.executableTool.type}]
                        </div>
                        <div className="text-xs font-bold text-white">
                          {concept.executableTool.name}
                        </div>
                      </div>
                      <Link
                        href={concept.executableTool.url}
                        className="px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold font-mono text-[10px] rounded-lg transition whitespace-nowrap"
                      >
                        Launch ↗
                      </Link>
                    </div>
                  )}

                  <div className="pt-2 border-t border-zinc-800/60 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 gap-2">
                    <span>Topic: {concept.firstIntroduced}</span>
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
                    className="text-xs font-mono font-bold text-emerald-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    View Concept Specification →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Domain Taxonomy */}
        <section className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Knowledge Domains &amp; Taxonomy
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
