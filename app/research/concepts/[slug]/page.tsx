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
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/research" className="hover:underline">Research</Link>
          <span>/</span>
          <Link href="/concepts" className="hover:underline">Concepts</Link>
          <span>/</span>
          <span className="text-cyan-900 font-extrabold">{concept.title}</span>
        </div>

        {/* Concept Header */}
        <div className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300">
              Domain: {concept.domain}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
              Status: {concept.health.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight font-grotesk">
            {concept.title}
          </h1>

          <p className="text-xl text-zinc-900 leading-relaxed font-semibold">
            {concept.definition}
          </p>
        </div>

        {/* Executable Diagnostic Tool Banner */}
        {concept.executableTool && (
          <section className="bg-gradient-to-r from-cyan-900 via-zinc-900 to-indigo-900 text-white border border-cyan-700 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-400 text-zinc-950">
                  Executable Tool
                </span>
                <span className="text-xs font-mono text-cyan-200 font-bold">
                  [{concept.executableTool.type}]
                </span>
              </div>
              <h3 className="text-xl font-bold font-grotesk text-white">
                {concept.executableTool.name}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 max-w-xl font-medium">
                {concept.executableTool.description}
              </p>
            </div>
            <Link
              href={concept.executableTool.url}
              className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-sm rounded-xl transition shadow-sm whitespace-nowrap self-start sm:self-center"
            >
              Launch Tool ↗
            </Link>
          </section>
        )}

        {/* Concept Health Metrics */}
        <section className="bg-white border border-zinc-300 rounded-3xl p-6 space-y-4 shadow-sm">
          <h2 className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
            Concept Health &amp; Verification Metrics
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
              <div className="text-xs text-zinc-600 font-mono font-bold">Confidence Score</div>
              <div className="text-2xl font-black text-cyan-900 font-mono mt-1">
                {(concept.health.confidence * 100).toFixed(0)}%
              </div>
            </div>

            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
              <div className="text-xs text-zinc-600 font-mono font-bold">Evidence Count</div>
              <div className="text-2xl font-black text-emerald-900 font-mono mt-1">
                {concept.health.evidenceCount} Works
              </div>
            </div>

            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
              <div className="text-xs text-zinc-600 font-mono font-bold">Open Questions</div>
              <div className="text-2xl font-black text-amber-900 font-mono mt-1">
                {concept.health.openQuestionsCount}
              </div>
            </div>

            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
              <div className="text-xs text-zinc-600 font-mono font-bold">Last Verified</div>
              <div className="text-sm font-bold text-zinc-950 font-mono mt-2">
                {concept.health.lastVerified}
              </div>
            </div>
          </div>
        </section>

        {/* Canonical Reading Order Section */}
        {concept.canonicalReadingOrder && concept.canonicalReadingOrder.length > 0 && (
          <section className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Authoritative Curriculum
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">Canonical Reading Path</h2>
              <p className="text-sm text-zinc-700 font-medium">
                The recommended sequence to master this concept—from initial research notes to formal enterprise frameworks.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {concept.canonicalReadingOrder.map((step) => (
                <div
                  key={step.step}
                  className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-600 transition group"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-cyan-100 text-cyan-900 font-mono font-bold text-sm flex items-center justify-center border border-cyan-300">
                      #{step.step}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold">
                          {step.publisher}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-900 font-bold">
                          [{step.type}]
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-zinc-950 group-hover:text-cyan-800 transition">
                        {step.url ? (
                          <a href={step.url} target="_blank" rel="noopener noreferrer">
                            {step.title}
                          </a>
                        ) : (
                          step.title
                        )}
                      </h3>
                    </div>
                  </div>

                  {step.url && (
                    <a
                      href={step.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-cyan-900 hover:bg-cyan-800 text-white font-mono font-bold text-xs rounded-xl whitespace-nowrap self-start sm:self-center transition shadow-sm"
                    >
                      Read Step #{step.step} ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Operational Significance */}
        <section className="space-y-4 bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-bold font-grotesk text-zinc-950">Operational &amp; Financial Significance</h2>
          <p className="text-zinc-800 text-sm sm:text-base leading-relaxed font-medium">
            {concept.whyItMatters}
          </p>
        </section>

        {/* Concept Provenance Timeline */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">Concept Provenance Timeline</h2>
            <p className="text-sm text-zinc-700 font-medium">
              The intellectual evolution tracking how this concept moved from initial observation to tier-1 publications.
            </p>
          </div>

          <div className="relative border-l-2 border-cyan-800 ml-4 pl-6 space-y-8">
            {concept.provenanceTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-800 border-4 border-[#F5F0EB] group-hover:scale-125 transition-transform" />
                <div className="bg-white border border-zinc-300 rounded-2xl p-5 space-y-2 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300">
                      {item.stage}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-600">{item.date} — {item.publisher}</span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-950">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-800 transition">
                        {item.label} ↗
                      </a>
                    ) : (
                      item.label
                    )}
                  </h3>
                  <p className="text-xs text-zinc-700 leading-relaxed font-medium">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inspectable Evidence Ledger */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">Inspectable Evidence Ledger</h2>
            <p className="text-sm text-zinc-700 font-medium">
              Classified evidence items supporting, extending, or refining this canonical concept specification.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-zinc-300 rounded-3xl shadow-sm">
            <table className="w-full text-left text-xs text-zinc-900">
              <thead className="bg-zinc-100 text-zinc-700 font-mono text-[11px] uppercase tracking-wider border-b border-zinc-200">
                <tr>
                  <th className="p-4">Evidence Item</th>
                  <th className="p-4">Publisher</th>
                  <th className="p-4">Evidence Type</th>
                  <th className="p-4">Strength</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 font-mono">
                {concept.evidenceLedger.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-50 transition">
                    <td className="p-4 font-bold text-zinc-950 font-sans">{item.title}</td>
                    <td className="p-4 text-zinc-600 font-bold">{item.publisher}</td>
                    <td className="p-4 text-cyan-900 font-bold">{item.type}</td>
                    <td className="p-4 text-amber-700 font-bold">
                      {'★'.repeat(item.strength)}
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-zinc-200 text-zinc-800 font-bold">
                        {item.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-800 hover:underline font-bold"
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
          <section className="space-y-4 bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-bold font-grotesk text-zinc-950">Weighted Semantic Relationship Graph</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedConcepts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/concepts/${rel.slug}`}
                  className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-cyan-600 transition flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-900 font-bold">
                      [{rel.relationship}]
                    </span>
                    <div className="text-xs font-bold text-zinc-950 group-hover:text-cyan-800">
                      {rel.targetTitle}
                    </div>
                  </div>
                  <span className="text-zinc-400 group-hover:text-cyan-800 text-xs font-bold">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-8 border-t border-zinc-300 text-center">
          <Link
            href="/concepts"
            className="text-xs font-mono font-bold text-cyan-900 hover:underline"
          >
            ← Back to Canonical Concepts Directory
          </Link>
        </div>
      </div>
    </main>
  );
}
