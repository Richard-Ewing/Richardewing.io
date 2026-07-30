import type { Metadata } from 'next';
import Link from 'next/link';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export const metadata: Metadata = {
  title: 'Canonical Concepts Directory | Richard Ewing Research',
  description: 'Authoritative canonical definitions, provenance timelines, and evidence ratings for core concepts in AI Economics, AI Governance, and Software Economics.',
  alternates: {
    canonical: 'https://www.richardewing.io/research/concepts',
  },
  openGraph: {
    title: 'Canonical Concepts Directory | Richard Ewing Research',
    description: 'Authoritative canonical definitions, provenance timelines, and evidence ratings for core concepts in AI Economics and Governance.',
    url: 'https://www.richardewing.io/research/concepts',
    type: 'website',
  },
};

export default function ConceptsDirectoryPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/research" className="hover:underline">Research</Link>
            <span>/</span>
            <span className="text-zinc-400">Canonical Concepts</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-grotesk">
            Canonical Concepts Directory
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
            The authoritative intellectual backbone of Richard Ewing&apos;s research. Each canonical concept defines a fundamental principle or financial reality, backed by empirical field audits, weighted relationship maps, and supporting publications.
          </p>

          {/* Nav Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/research"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition"
            >
              ← Research Timeline
            </Link>
            <Link
              href="/research/concepts"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/50 text-cyan-300"
            >
              Canonical Concepts
            </Link>
            <Link
              href="/research/publications"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition"
            >
              100+ Publications Catalog
            </Link>
          </div>
        </div>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CANONICAL_CONCEPTS.map((concept) => {
            const supportingArticles = RESEARCH_CORPUS.filter((art) =>
              concept.supportingPublicationIds.includes(art.id)
            );

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
                        Confidence: {(concept.confidence * 100).toFixed(0)}%
                      </span>
                      <span className="text-xs font-mono text-amber-400 font-bold">
                        {'★'.repeat(concept.evidenceQuality.rating)}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    <Link href={`/research/concepts/${concept.slug}`}>
                      {concept.title}
                    </Link>
                  </h2>

                  {/* Definition */}
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {concept.definition}
                  </p>

                  {/* Why it Matters */}
                  <div className="bg-zinc-950/60 rounded-xl p-3.5 border border-zinc-800/80 space-y-1">
                    <div className="text-[11px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                      Why It Matters
                    </div>
                    <p className="text-xs text-zinc-400 leading-normal">
                      {concept.whyItMatters}
                    </p>
                  </div>
                </div>

                {/* Footnote & Supporting Articles */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>First Introduced: {concept.firstIntroduced}</span>
                    <span>{supportingArticles.length} Supporting Works</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1 overflow-hidden">
                      {supportingArticles.slice(0, 3).map((art) => (
                        <span
                          key={art.id}
                          title={art.title}
                          className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700 truncate max-w-[120px]"
                        >
                          {art.publisher}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/research/concepts/${concept.slug}`}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                    >
                      Canonical Specification →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
