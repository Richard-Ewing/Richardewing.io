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
    title: `${concept.title} — Canonical Concept Specification | Richard Ewing`,
    description,
    alternates: {
      canonical: `https://www.richardewing.io/concepts/${slug}`,
    },
    openGraph: {
      title: `${concept.title} | Richard Ewing Research`,
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
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 text-zinc-950">
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

      <div className="max-w-4xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/research" className="hover:underline">Research</Link>
          <span>/</span>
          <Link href="/concepts" className="hover:underline">Concepts</Link>
          <span>/</span>
          <span className="text-cyan-900 font-extrabold">{concept.title}</span>
        </div>

        {/* Learning Path Banner */}
        {concept.learningStep && (
          <div className="bg-cyan-900 text-white px-6 py-3.5 rounded-2xl flex items-center justify-between gap-4 font-mono text-xs shadow-sm">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-cyan-400 text-zinc-950 font-bold">
                Learning Path
              </span>
              <span className="font-bold">{concept.learningStep.pathName}</span>
            </div>
            <span className="font-bold text-cyan-200">
              Step {concept.learningStep.stepNumber} of {concept.learningStep.totalSteps}
            </span>
          </div>
        )}

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

          {/* Canonical Signature Quote */}
          {concept.canonicalQuote && (
            <blockquote className="border-l-4 border-cyan-800 pl-4 py-2 my-4 bg-cyan-50/50 rounded-r-2xl text-base italic font-serif text-cyan-950 font-semibold">
              &ldquo;{concept.canonicalQuote}&rdquo;
            </blockquote>
          )}
        </div>

        {/* Position Statement / Thesis Stance */}
        {concept.positionStatement && (
          <section className="bg-gradient-to-r from-zinc-900 via-cyan-950 to-zinc-900 text-white border border-cyan-800 rounded-3xl p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-300 uppercase tracking-widest">
              <span>★ Authoritative Position Statement</span>
            </div>
            <h2 className="text-2xl font-bold font-grotesk text-white">
              Richard Ewing’s Research Stance
            </h2>
            <p className="text-base text-zinc-200 leading-relaxed font-medium">
              {concept.positionStatement}
            </p>
          </section>
        )}

        {/* Impact Metrics Summary */}
        {concept.impactMetrics && (
          <section className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider block">
              Concept Impact &amp; Corpus Scale
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1 font-mono text-center">
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl">
                <div className="text-xs text-zinc-600 font-bold">Publications</div>
                <div className="text-xl font-black text-cyan-900 mt-1">{concept.impactMetrics.totalPublications}</div>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl">
                <div className="text-xs text-zinc-600 font-bold">Newsletters</div>
                <div className="text-xl font-black text-emerald-900 mt-1">{concept.impactMetrics.totalNewsletters}</div>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl">
                <div className="text-xs text-zinc-600 font-bold">Frameworks</div>
                <div className="text-xl font-black text-indigo-900 mt-1">{concept.impactMetrics.totalFrameworks}</div>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl">
                <div className="text-xs text-zinc-600 font-bold">Calculators</div>
                <div className="text-xl font-black text-amber-900 mt-1">{concept.impactMetrics.totalCalculators}</div>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-2xl col-span-2 sm:col-span-1">
                <div className="text-xs text-zinc-600 font-bold">Est. Depth</div>
                <div className="text-sm font-bold text-zinc-950 mt-2">{concept.impactMetrics.estimatedReadingTime}</div>
              </div>
            </div>
          </section>
        )}

        {/* Claims & Evidence Graph Section */}
        {concept.claims && concept.claims.length > 0 && (
          <section className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Empirical Research Claims
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                Core Hypotheses &amp; Testable Claims
              </h2>
            </div>

            <div className="space-y-4 pt-2">
              {concept.claims.map((claim, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-bold text-zinc-950 font-grotesk">
                      Claim #{idx + 1}: &ldquo;{claim.statement}&rdquo;
                    </h3>
                    <span className="flex-shrink-0 px-2.5 py-1 rounded text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300">
                      {(claim.confidence * 100).toFixed(0)}% Confidence
                    </span>
                  </div>

                  <div className="bg-white border border-zinc-200 p-4 rounded-xl text-xs text-zinc-800 space-y-1">
                    <strong className="font-bold font-mono text-cyan-950 block uppercase">Supporting Telemetry / Evidence:</strong>
                    <p className="font-medium leading-relaxed">{claim.supportingData}</p>
                  </div>

                  {claim.counterarguments && claim.counterarguments.length > 0 && (
                    <div className="space-y-1 text-xs text-zinc-700">
                      <strong className="font-bold font-mono text-zinc-900 uppercase block">Addressed Counterarguments:</strong>
                      <ul className="list-disc pl-4 space-y-1 font-medium">
                        {claim.counterarguments.map((ca, cIdx) => (
                          <li key={cIdx}>{ca}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ecosystem Consensus Coverage Score Dashboard */}
        {concept.consensusCoverage && (
          <section className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Ecosystem Propagation &amp; Consensus Tracker
              </span>
              <h2 className="text-xl font-bold font-grotesk text-zinc-950">
                Cross-Platform Canonical Consensus Index
              </h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 pt-2 font-mono text-[11px] text-center font-bold">
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.website ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Website {concept.consensusCoverage.website ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.linkedIn ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                LinkedIn {concept.consensusCoverage.linkedIn ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.beehiiv ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Beehiiv {concept.consensusCoverage.beehiiv ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.builtIn ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Built In {concept.consensusCoverage.builtIn ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.cio ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                CIO {concept.consensusCoverage.cio ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.book ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Book {concept.consensusCoverage.book ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.gitHub ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                GitHub {concept.consensusCoverage.gitHub ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.youtube ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                YouTube {concept.consensusCoverage.youtube ? '✓' : '—'}
              </div>
              <div className={`p-2.5 rounded-xl border ${concept.consensusCoverage.talks ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-zinc-100 text-zinc-400 border-zinc-200'}`}>
                Keynote {concept.consensusCoverage.talks ? '✓' : '—'}
              </div>
            </div>
          </section>
        )}

        {/* Audience-Specific Recommendations ("Recommended by Richard Ewing") */}
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

        {/* Relational Graph (Prerequisites, Applications & Contrasting Concepts) */}
        {concept.graphRelations && (
          <section className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Extended Knowledge Graph
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                Prerequisites, Applications &amp; Contrasts
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Prerequisites */}
              {concept.graphRelations.prerequisites.length > 0 && (
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-wider block">
                    Prerequisite Knowledge Nodes
                  </span>
                  <div className="space-y-1.5 pt-1">
                    {concept.graphRelations.prerequisites.map((pre) => (
                      <Link
                        key={pre.slug}
                        href={`/concepts/${pre.slug}`}
                        className="block text-xs font-bold text-zinc-950 hover:text-cyan-800 hover:underline"
                      >
                        ← {pre.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Industry Applications */}
              {concept.graphRelations.applications.length > 0 && (
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider block">
                    Target Enterprise Applications
                  </span>
                  <ul className="space-y-1 text-xs text-zinc-800 font-medium">
                    {concept.graphRelations.applications.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-emerald-800 font-bold">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contrasting Concepts */}
              {concept.graphRelations.contrastingConcepts.length > 0 && (
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-2 sm:col-span-2">
                  <span className="text-[10px] font-mono font-bold text-amber-900 uppercase tracking-wider block">
                    Contrasting &amp; Opposing Concepts
                  </span>
                  <div className="space-y-3 pt-1">
                    {concept.graphRelations.contrastingConcepts.map((cc) => (
                      <div key={cc.slug} className="bg-white border border-zinc-200 p-3 rounded-xl space-y-1">
                        <Link href={`/concepts/${cc.slug}`} className="text-xs font-bold text-zinc-950 hover:underline">
                          vs. {cc.title}
                        </Link>
                        <p className="text-xs text-zinc-700 font-medium">{cc.distinction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* AEO Multi-Length Answer Engine Block */}
        {concept.aeo && (
          <section className="bg-white border border-cyan-800/40 rounded-3xl p-8 space-y-8 shadow-sm">
            <div className="space-y-2 border-b border-zinc-200 pb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-900 text-white uppercase tracking-wider">
                AEO Direct Answer Matrix
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                Authoritative Answer Formats
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-widest block">
                  Short Definition (50 Words)
                </span>
                <p className="text-sm font-semibold text-zinc-950 leading-relaxed">
                  {concept.aeo.shortDefinition}
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-2">
                <span className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-widest block">
                  Executive Summary (150 Words)
                </span>
                <p className="text-sm text-zinc-800 leading-relaxed font-medium">
                  {concept.aeo.executiveSummary}
                </p>
              </div>
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
