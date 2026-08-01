import type { Metadata } from 'next';
import Link from 'next/link';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

export const metadata: Metadata = {
  title: 'Canonical Concepts Directory | Richard Ewing',
  description: 'Index of canonical definitions across AI Economics, AI Governance, and Software Economics. Each concept includes provenance, evidence ratings, and citation data.',
  alternates: {
    canonical: 'https://www.richardewing.io/concepts',
  },
  openGraph: {
    title: 'Canonical Concepts Directory | Richard Ewing',
    description: 'Index of canonical definitions across AI Economics, AI Governance, and Software Economics. Each concept includes provenance, evidence ratings, and citation data.',
    url: 'https://www.richardewing.io/concepts',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canonical Concepts Directory | Richard Ewing',
    description: 'Index of canonical definitions across AI Economics, AI Governance, and Software Economics. Each concept includes provenance, evidence ratings, and citation data.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  },
};

export default function ResearchConceptsIndexPage() {
  const domains = Array.from(new Set(CANONICAL_CONCEPTS.map((c) => c.domain)));
  const layer1Concepts = CANONICAL_CONCEPTS.filter((c) => c.category === 'Industry Concept (Discovery On-Ramp)');
  const layer2Concepts = CANONICAL_CONCEPTS.filter((c) => c.category === 'Richard Ewing Canon (Original Framework)');

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 text-zinc-950">
      <div className="page-container max-w-6xl mx-auto space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/research" className="hover:underline">Research</Link>
          <span>/</span>
          <span className="text-cyan-900 font-extrabold">Canonical Concepts</span>
        </div>

        {/* Header */}
        <div className="space-y-4 border-b border-zinc-400 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300">
            Knowledge Substrate • Layer 1 Industry Discovery &amp; Layer 2 Original Canon
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight font-grotesk">
            Canonical Concepts &amp; Research Graph
          </h1>

          <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-3xl">
            The intellectual operating system of Richard Ewing’s research corpus. Broad industry concepts serve as discovery entry points, bridging directly into original canonical frameworks, evidence ledgers, and diagnostic tools.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/research/publications"
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-900 text-white hover:bg-cyan-800 transition shadow-sm"
            >
              100+ Publications Catalog →
            </Link>
            <a
              href="/api/csp/v1/export"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-900 text-white hover:bg-emerald-800 transition shadow-sm"
            >
              CSP Machine API ↗
            </a>
          </div>
        </div>

        {/* Section 1: Layer 2 - The Richard Ewing Original Canon */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
              Layer 2 • High Differentiation &amp; Original Intellectual Property
            </span>
            <h2 className="text-3xl font-bold font-grotesk text-zinc-950">The Richard Ewing Canon</h2>
            <p className="text-sm text-zinc-700 font-medium">
              Original specifications, financial tax models, and governance frameworks created by Richard Ewing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layer2Concepts.map((concept) => (
              <div
                key={concept.slug}
                className="bg-white border border-zinc-300 hover:border-cyan-600 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-200">
                      {concept.domain}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-100 text-indigo-900 border border-indigo-200">
                      Original Canon
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-grotesk text-zinc-950 group-hover:text-cyan-800 transition-colors leading-snug">
                      <Link href={`/concepts/${concept.slug}`}>
                        {concept.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-zinc-700 mt-2 line-clamp-3 leading-relaxed font-medium">
                      {concept.definition}
                    </p>
                  </div>

                  {concept.executableTool && (
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-mono text-cyan-900 font-bold uppercase">
                          [{concept.executableTool.type}]
                        </div>
                        <div className="text-xs font-bold text-zinc-950">
                          {concept.executableTool.name}
                        </div>
                      </div>
                      <Link
                        href={concept.executableTool.url}
                        className="px-3 py-1.5 bg-cyan-900 hover:bg-cyan-800 text-white font-bold font-mono text-[10px] rounded-xl transition whitespace-nowrap shadow-sm"
                      >
                        Launch ↗
                      </Link>
                    </div>
                  )}

                  <div className="pt-2 border-t border-zinc-100 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500 gap-2">
                    <span>First: {concept.firstIntroduced}</span>
                    <span className="text-emerald-800 font-bold">
                      {concept.evidenceLedger.length} Evidence Items
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                    {concept.canonicalReadingOrder?.length || 0} Reading Steps
                  </span>
                  <Link
                    href={`/concepts/${concept.slug}`}
                    className="text-xs font-mono font-bold text-cyan-800 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 hover:underline"
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
            <span className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">
              Layer 1 • High-Volume Search &amp; Discovery Entry Points
            </span>
            <h2 className="text-3xl font-bold font-grotesk text-zinc-950">Industry Concepts &amp; On-Ramps</h2>
            <p className="text-sm text-zinc-700 font-medium">
              Broad industry terms that introduce readers and AI systems to Richard Ewing’s research and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layer1Concepts.map((concept) => (
              <div
                key={concept.slug}
                className="bg-white border border-zinc-300 hover:border-emerald-600 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                      {concept.domain}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-zinc-100 text-zinc-700 border border-zinc-200">
                      Industry On-Ramp
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-grotesk text-zinc-950 group-hover:text-emerald-800 transition-colors leading-snug">
                      <Link href={`/concepts/${concept.slug}`}>
                        {concept.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-zinc-700 mt-2 line-clamp-3 leading-relaxed font-medium">
                      {concept.definition}
                    </p>
                  </div>

                  {concept.executableTool && (
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-mono text-emerald-900 font-bold uppercase">
                          [{concept.executableTool.type}]
                        </div>
                        <div className="text-xs font-bold text-zinc-950">
                          {concept.executableTool.name}
                        </div>
                      </div>
                      <Link
                        href={concept.executableTool.url}
                        className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold font-mono text-[10px] rounded-xl transition whitespace-nowrap shadow-sm"
                      >
                        Launch ↗
                      </Link>
                    </div>
                  )}

                  <div className="pt-2 border-t border-zinc-100 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500 gap-2">
                    <span>Topic: {concept.firstIntroduced}</span>
                    <span className="text-emerald-800 font-bold">
                      {concept.evidenceLedger.length} Evidence Items
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                    {concept.canonicalReadingOrder?.length || 0} Reading Steps
                  </span>
                  <Link
                    href={`/concepts/${concept.slug}`}
                    className="text-xs font-mono font-bold text-emerald-800 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 hover:underline"
                  >
                    View Concept Specification →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Taxonomy */}
        <section className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
            Knowledge Domains &amp; Taxonomy
          </h3>
          <div className="flex flex-wrap gap-2">
            {domains.map((dom) => (
              <span
                key={dom}
                className="px-3 py-1 bg-zinc-100 text-zinc-800 font-mono text-xs rounded-full border border-zinc-200 font-semibold"
              >
                {dom}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
