import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

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
      canonical: `https://www.richardewing.io/research/concepts/${concept.slug}`,
    },
    openGraph: {
      title: `${concept.title} | Richard Ewing Research`,
      description: concept.definition,
      url: `https://www.richardewing.io/research/concepts/${concept.slug}`,
      type: 'article',
    },
  };
}

export default async function ConceptDetailPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  const concept = CANONICAL_CONCEPTS.find((c) => c.slug === slug);
  if (!concept) notFound();

  const supportingArticles = RESEARCH_CORPUS.filter((art) =>
    concept.supportingPublicationIds.includes(art.id)
  );

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
    '@id': `https://www.richardewing.io/research/concepts/${concept.slug}#term`,
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
          <Link href="/research/concepts" className="hover:underline">Concepts</Link>
          <span>/</span>
          <span className="text-zinc-400">{concept.title}</span>
        </div>

        {/* Concept Header Header */}
        <div className="space-y-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50">
              Domain: {concept.domain}
            </span>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-zinc-400">Status: <strong className="text-emerald-400">{concept.status}</strong></span>
              <span className="text-zinc-400">Confidence: <strong className="text-cyan-400">{(concept.confidence * 100).toFixed(0)}%</strong></span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-grotesk">
            {concept.title}
          </h1>

          <p className="text-xl text-zinc-200 leading-relaxed font-semibold">
            {concept.definition}
          </p>

          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 gap-2">
            <span>First Introduced: {concept.firstIntroduced}</span>
            <span>Last Verified: {concept.lastUpdated}</span>
          </div>
        </div>

        {/* Why It Matters / Operational Impact */}
        <section className="space-y-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold font-grotesk text-white">Operational & Financial Significance</h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {concept.whyItMatters}
          </p>
        </section>

        {/* Evidence Quality Audit */}
        <section className="space-y-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold font-grotesk text-white">Evidence Quality Audit</h2>
            <div className="text-amber-400 font-bold text-sm font-mono">
              {'★'.repeat(concept.evidenceQuality.rating)} ({concept.evidenceQuality.rating}/5 Rating)
            </div>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {concept.evidenceQuality.description}
          </p>
        </section>

        {/* Supporting Publications (Inverted Concept-First Engine) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-grotesk text-white">Supporting Publications & Evidence</h2>
            <p className="text-sm text-zinc-400">
              Off-site media essays, research laboratory notes, and executive articles establishing evidence for this concept.
            </p>
          </div>

          <div className="space-y-4">
            {supportingArticles.length === 0 ? (
              <p className="text-sm text-zinc-500">No linked publications currently mapped.</p>
            ) : (
              supportingArticles.map((art) => (
                <div
                  key={art.id}
                  className="bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/50 rounded-2xl p-6 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-300">
                        {art.publisher}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                        {art.type}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      <a href={art.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                        {art.title}
                      </a>
                    </h3>
                    <p className="text-xs text-zinc-400">{art.thesis}</p>
                  </div>
                  <a
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-cyan-400 font-mono font-bold text-xs rounded-xl whitespace-nowrap self-start sm:self-center transition"
                  >
                    View Publication ↗
                  </a>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Weighted Relationship Graph */}
        {relatedConcepts.length > 0 && (
          <section className="space-y-4 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold font-grotesk text-white">Weighted Semantic Relationship Graph</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedConcepts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/research/concepts/${rel.slug}`}
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

        {/* Open Questions */}
        {concept.openQuestions && concept.openQuestions.length > 0 && (
          <section className="space-y-3 bg-cyan-950/20 border border-cyan-800/40 rounded-2xl p-6">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Open Questions & Future Research
            </h2>
            <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1.5 leading-relaxed">
              {concept.openQuestions.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-8 border-t border-zinc-800 text-center">
          <Link
            href="/research/concepts"
            className="text-xs font-mono text-cyan-400 hover:underline"
          >
            ← Back to Canonical Concepts Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
