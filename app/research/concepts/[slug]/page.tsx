import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

interface ConceptPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CANONICAL_CONCEPTS.map((concept) => ({
    slug: concept.slug,
  }));
}

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const { slug } = await params;
  const concept = CANONICAL_CONCEPTS.find((c) => c.slug === slug);
  if (!concept) return {};

  return {
    title: `${concept.title} — Canonical Concept Specification | Richard Ewing`,
    description: concept.definition,
    alternates: {
      canonical: `https://www.richardewing.io/concepts/${slug}`,
    },
    openGraph: {
      title: `${concept.title} | Richard Ewing Research`,
      description: concept.definition,
      url: `https://www.richardewing.io/concepts/${concept.slug}`,
      type: 'article',
    },
  };
}

export default async function ConceptDetailPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = CANONICAL_CONCEPTS.find((c) => c.slug === slug);
  if (!concept) notFound();

  const relatedConcepts = concept.relatedConceptSlugs.map((rel) => {
    const target = CANONICAL_CONCEPTS.find((c) => c.slug === rel.slug);
    return {
      ...rel,
      targetTitle: target ? target.title : rel.slug,
    };
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `https://www.richardewing.io/concepts/${concept.slug}#term`,
    name: concept.title,
    description: concept.definition,
    inDefinedTermSet: 'https://www.richardewing.io/canonical/dataset.jsonld',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io',
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/research" className="hover:underline">Research</Link>
          <span>/</span>
          <Link href="/concepts" className="hover:underline">Concepts</Link>
          <span>/</span>
          <span className="text-zinc-400">{concept.title}</span>
        </div>

        {/* Concept Header */}
        <div className="space-y-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50">
              Domain: {concept.domain}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/40">
              Status: {concept.health.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-grotesk">
            {concept.title}
          </h1>

          <p className="text-xl text-zinc-200 leading-relaxed font-semibold">
            {concept.definition}
          </p>
        </div>

        {/* Concept Health & Research Metadata Dashboard */}
        <section className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Concept Health & Verification Metrics
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-800">
              <div className="text-xs text-zinc-500 font-mono">Confidence Score</div>
              <div className="text-2xl font-black text-cyan-400 font-mono mt-1">
                {(concept.health.confidence * 100).toFixed(0)}%
              </div>
            </div>

            <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-800">
              <div className="text-xs text-zinc-500 font-mono">Evidence Count</div>
              <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                {concept.health.evidenceCount} Works
              </div>
            </div>

            <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-800">
              <div className="text-xs text-zinc-500 font-mono">Open Questions</div>
              <div className="text-2xl font-black text-amber-400 font-mono mt-1">
                {concept.health.openQuestionsCount}
              </div>
            </div>

            <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-800">
              <div className="text-xs text-zinc-500 font-mono">Last Verified</div>
              <div className="text-sm font-bold text-white font-mono mt-2">
                {concept.health.lastVerified}
              </div>
            </div>
          </div>
        </section>

        {/* Operational Significance */}
        <section className="space-y-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold font-grotesk text-white">Operational & Financial Significance</h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {concept.whyItMatters}
          </p>
        </section>

        {/* Concept Provenance Timeline */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-grotesk text-white">Concept Provenance Timeline</h2>
            <p className="text-sm text-zinc-400">
              The intellectual evolution tracking how this concept moved from initial observation to tier-1 publications.
            </p>
          </div>

          <div className="relative border-l-2 border-cyan-900/60 ml-4 pl-6 space-y-8">
            {concept.provenanceTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 border-4 border-zinc-950 group-hover:scale-125 transition-transform" />
                <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                      {item.stage}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{item.date} — {item.publisher}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                        {item.label} ↗
                      </a>
                    ) : (
                      item.label
                    )}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inspectable Evidence Ledger */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-grotesk text-white">Inspectable Evidence Ledger</h2>
            <p className="text-sm text-zinc-400">
              Classified evidence items supporting, extending, or refining this canonical concept specification.
            </p>
          </div>

          <div className="overflow-x-auto bg-zinc-900/60 border border-zinc-800 rounded-2xl">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-zinc-950/80 text-zinc-400 font-mono text-[11px] uppercase tracking-wider border-b border-zinc-800">
                <tr>
                  <th className="p-4">Evidence Item</th>
                  <th className="p-4">Publisher</th>
                  <th className="p-4">Evidence Type</th>
                  <th className="p-4">Strength</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 font-mono">
                {concept.evidenceLedger.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-800/30 transition">
                    <td className="p-4 font-bold text-white font-sans">{item.title}</td>
                    <td className="p-4 text-zinc-400">{item.publisher}</td>
                    <td className="p-4 text-cyan-400">{item.type}</td>
                    <td className="p-4 text-amber-400 font-bold">
                      {'★'.repeat(item.strength)}
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-300">
                        {item.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline font-bold"
                      >
                        Inspect ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Weighted Semantic Relationship Graph */}
        {relatedConcepts.length > 0 && (
          <section className="space-y-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold font-grotesk text-white">Weighted Semantic Relationship Graph</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedConcepts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/concepts/${rel.slug}`}
                  className="p-3.5 bg-zinc-950/80 border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                      [{rel.relationship}]
                    </span>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300">
                      {rel.targetTitle}
                    </div>
                  </div>
                  <span className="text-zinc-600 group-hover:text-cyan-400 text-xs">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Open Questions & Known Limitations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {concept.openQuestions && concept.openQuestions.length > 0 && (
            <section className="space-y-3 bg-cyan-950/20 border border-cyan-800/40 rounded-2xl p-6">
              <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                Open Questions & Research Agenda
              </h2>
              <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1.5 leading-relaxed">
                {concept.openQuestions.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </section>
          )}

          {concept.knownLimitations && concept.knownLimitations.length > 0 && (
            <section className="space-y-3 bg-amber-950/20 border border-amber-800/40 rounded-2xl p-6">
              <h2 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Known Limitations & Boundaries
              </h2>
              <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1.5 leading-relaxed">
                {concept.knownLimitations.map((lim, idx) => (
                  <li key={idx}>{lim}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Back Link */}
        <div className="pt-8 border-t border-zinc-800 text-center">
          <Link
            href="/concepts"
            className="text-xs font-mono text-cyan-400 hover:underline"
          >
            ← Back to Canonical Concepts Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
