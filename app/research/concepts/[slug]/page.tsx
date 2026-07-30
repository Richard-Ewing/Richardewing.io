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

  const description = concept.aeo?.shortDefinition || concept.definition;

  return {
    title: `${concept.title} — Canonical Research Specification | Richard Ewing`,
    description,
    alternates: {
      canonical: `https://www.richardewing.io/concepts/${slug}`,
    },
    openGraph: {
      title: `${concept.title} | Canonical Specification | Richard Ewing`,
      description,
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

  const domainArticles = RESEARCH_CORPUS.filter(
    (art) => art.domain === concept.domain || art.relatedConceptIds?.includes(concept.slug)
  ).slice(0, 3);

  // Schema.org DefinedTerm JSON-LD
  const definedTermJsonLd = {
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

  // Schema.org FAQPage JSON-LD
  const faqJsonLd = concept.aeo?.faqs && concept.aeo.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: concept.aeo.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-28 pb-24 text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="max-w-4xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/research" className="hover:underline">Research</Link>
          <span>/</span>
          <Link href="/concepts" className="hover:underline">Specifications</Link>
          <span>/</span>
          <span className="text-cyan-900 font-extrabold">{concept.title}</span>
        </div>

        {/* Quick Graph Connected Concepts Navigation Pills */}
        <div className="bg-white border border-zinc-300 rounded-2xl p-4 flex flex-wrap items-center gap-2 text-xs shadow-sm">
          <span className="font-mono font-bold text-zinc-600 uppercase tracking-wider text-[10px] mr-1">
            Connected Graph:
          </span>
          {relatedConcepts.map((rel) => (
            <Link
              key={rel.slug}
              href={`/concepts/${rel.slug}`}
              className="px-3 py-1 bg-cyan-50 hover:bg-cyan-100 text-cyan-950 border border-cyan-200 rounded-lg font-mono font-bold transition"
            >
              {rel.targetTitle}
            </Link>
          ))}
        </div>

        {/* First Screen: 30-Second Executive Summary Hero */}
        <div className="space-y-6 bg-white border-2 border-zinc-900 rounded-3xl p-8 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-900 text-white uppercase tracking-wider">
                Canonical Research Specification
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-100 text-indigo-900 border border-indigo-300">
                Level: {concept.expertiseLevel || 'Executive'}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
              Verified: {concept.health.lastVerified}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight font-grotesk">
            {concept.title}
          </h1>

          {/* 30-Second Immediate Answer Block */}
          <div className="bg-zinc-50 border border-zinc-300 rounded-2xl p-6 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-widest block">
                30-Second Executive Definition
              </span>
              <p className="text-lg font-bold text-zinc-950 leading-relaxed font-grotesk">
                {concept.aeo?.shortDefinition || concept.definition}
              </p>
            </div>

            {concept.canonicalQuote && (
              <p className="text-sm font-semibold text-cyan-950 italic border-l-4 border-cyan-800 pl-3 py-1">
                &ldquo;{concept.canonicalQuote}&rdquo;
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-200 text-xs">
              <div>
                <strong className="font-mono font-bold text-zinc-900 uppercase block">Why It Matters:</strong>
                <p className="text-zinc-800 font-medium leading-relaxed mt-0.5">{concept.whyItMatters}</p>
              </div>

              {concept.whoShouldCare && (
                <div>
                  <strong className="font-mono font-bold text-zinc-900 uppercase block">Who Should Care:</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {concept.whoShouldCare.map((role, rIdx) => (
                      <span key={rIdx} className="px-2 py-0.5 rounded bg-zinc-200 text-zinc-900 font-bold text-[10px]">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Canonical Flow Diagram */}
          {concept.canonicalDiagram && (
            <div className="bg-cyan-950 text-white border border-cyan-800 rounded-2xl p-6 space-y-3">
              <span className="text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-widest block">
                Canonical Architecture Flow
              </span>
              <h3 className="text-base font-bold font-grotesk text-white">
                {concept.canonicalDiagram.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs text-center font-bold">
                {concept.canonicalDiagram.flowSteps.map((step, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-cyan-900/80 border border-cyan-700 space-y-1">
                    <span className="text-[10px] text-cyan-300 block font-normal">Step 0{sIdx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Elevated Canonical Research Position Stance */}
        {concept.positionStatement && (
          <section className="bg-gradient-to-r from-zinc-950 via-cyan-950 to-zinc-950 text-white border-2 border-cyan-700 rounded-3xl p-8 space-y-4 shadow-md">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-300 uppercase tracking-widest">
              <span>★ Canonical Research Position</span>
            </div>
            <h2 className="text-2xl font-bold font-grotesk text-white">
              Richard Ewing’s Research Thesis
            </h2>
            <p className="text-lg text-zinc-100 leading-relaxed font-semibold">
              {concept.positionStatement}
            </p>
          </section>
        )}

        {/* "Why This Specification Exists" (Genesis Box) */}
        {concept.whyThisConceptExists && (
          <section className="bg-white border border-zinc-300 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Genesis &amp; Intellectual Positioning
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                Why This Specification Exists
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-medium text-xs">
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-red-900 uppercase block">1. The Problem</strong>
                <p className="text-zinc-800 leading-relaxed">{concept.whyThisConceptExists.problem}</p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-amber-900 uppercase block">2. Existing Approaches</strong>
                <p className="text-zinc-800 leading-relaxed">{concept.whyThisConceptExists.existingApproaches}</p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-indigo-900 uppercase block">3. The Structural Gap</strong>
                <p className="text-zinc-800 leading-relaxed">{concept.whyThisConceptExists.gap}</p>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-cyan-950 uppercase block">4. This Specification</strong>
                <p className="text-cyan-950 font-bold leading-relaxed">{concept.whyThisConceptExists.solution}</p>
              </div>
            </div>
          </section>
        )}

        {/* "What Changes If You Believe This?" (Functional Impact Matrix) */}
        {concept.whatChanges && (
          <section className="bg-white border border-zinc-300 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Operational Realignment
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                What Changes If You Believe This?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-medium text-xs">
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-cyan-900 uppercase block">Engineering</strong>
                <p className="text-zinc-800 leading-relaxed">{concept.whatChanges.engineering}</p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-emerald-900 uppercase block">Finance &amp; COGS</strong>
                <p className="text-zinc-800 leading-relaxed">{concept.whatChanges.finance}</p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-indigo-900 uppercase block">Product Strategy</strong>
                <p className="text-zinc-800 leading-relaxed">{concept.whatChanges.product}</p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-rose-900 uppercase block">Security &amp; Audit</strong>
                <p className="text-zinc-800 leading-relaxed">{concept.whatChanges.security}</p>
              </div>
            </div>
          </section>
        )}

        {/* Expanded Consensus Maturity Index */}
        {concept.expandedConsensus && (
          <section className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Consensus Propagation Index
              </span>
              <h2 className="text-xl font-bold font-grotesk text-zinc-950">
                Specification Maturity &amp; Ecosystem Spread
              </h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 pt-2 font-mono text-[11px] text-center font-bold">
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.website ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Website {concept.expandedConsensus.website ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.newsletter ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Newsletter {concept.expandedConsensus.newsletter ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.book ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Book {concept.expandedConsensus.book ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.video ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Video {concept.expandedConsensus.video ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.talk ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Talk {concept.expandedConsensus.talk ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.framework ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Framework {concept.expandedConsensus.framework ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.calculator ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Calculator {concept.expandedConsensus.calculator ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.research ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Research {concept.expandedConsensus.research ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.expandedConsensus.caseStudy ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Case Study {concept.expandedConsensus.caseStudy ? '✓' : '—'}
              </div>
            </div>
          </section>
        )}

        {/* Audience-Specific Executive Guidance */}
        {concept.personaRecommendations && concept.personaRecommendations.length > 0 && (
          <section className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Audience-Specific Executive Guidance
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                Recommended Action by Role
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {concept.personaRecommendations.map((rec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300">
                      {rec.role}
                    </span>
                    <p className="text-xs text-zinc-900 font-medium leading-relaxed">
                      {rec.takeaway}
                    </p>
                  </div>
                  <Link
                    href={`/concepts/${rec.recommendedNextSlug}`}
                    className="text-xs font-mono font-bold text-cyan-900 hover:underline flex items-center gap-1 pt-2 border-t border-zinc-200"
                  >
                    Recommended Next Step →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

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

        {/* Latest Research Activity Feed */}
        {domainArticles.length > 0 && (
          <section className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Freshness &amp; Research Updates
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                Latest Publications &amp; Research Activity
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {domainArticles.map((art) => (
                <div key={art.id} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                      <span className="text-cyan-900 uppercase">{art.publisher}</span>
                      {art.date && <span className="text-zinc-500">• {art.date}</span>}
                    </div>
                    <h3 className="text-sm font-bold text-zinc-950">
                      {art.title}
                    </h3>
                  </div>
                  <a
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-cyan-900 text-white text-xs font-mono font-bold rounded-xl whitespace-nowrap self-start sm:self-center hover:bg-cyan-800"
                  >
                    Read Work ↗
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Concept FAQs Section */}
        {concept.aeo?.faqs && concept.aeo.faqs.length > 0 && (
          <section className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Answer Engine FAQ Matrix
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4 pt-2">
              {concept.aeo.faqs.map((faq, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-2">
                  <h3 className="text-base font-bold text-zinc-950 font-grotesk flex items-start gap-2">
                    <span className="text-cyan-800 font-mono font-bold">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-zinc-800 leading-relaxed font-medium pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Inspectable Evidence Ledger (Reference Layer) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-grotesk text-zinc-950">Inspectable Evidence Ledger</h2>
            <p className="text-sm text-zinc-700 font-medium">
              Classified evidence items supporting, extending, or refining this canonical research specification.
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

        {/* Back Link */}
        <div className="pt-8 border-t border-zinc-300 text-center">
          <Link
            href="/concepts"
            className="text-xs font-mono font-bold text-cyan-900 hover:underline"
          >
            ← Back to Canonical Specifications Directory
          </Link>
        </div>
      </div>
    </main>
  );
}
