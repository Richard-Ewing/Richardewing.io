import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CANONICAL_CONCEPTS, type EvidenceLedgerItem } from '@/app/lib/concept-corpus';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import SoftwarePhaseTransitionVisual from '@/app/components/visualizations/SoftwarePhaseTransitionVisual';
import ConceptProvenanceSection from '@/app/components/concepts/ConceptProvenanceSection';
import ConceptDownstreamSolution from '@/app/components/concepts/ConceptDownstreamSolution';
import MultiHopGraphExplorer from '@/app/components/concepts/MultiHopGraphExplorer';

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

  const rawDesc = concept.aeo?.shortDefinition || concept.definition;
  const description = (() => {
    let desc = rawDesc.trim().replace(/\s+/g, ' ');
    if (!desc.endsWith('.')) desc += '.';
    if (desc.length >= 140 && desc.length <= 158) return desc;
    if (desc.length > 158) return desc.slice(0, 155) + '...';

    const candidateSuffixes = [
      ` Forensic systems architecture and engineering economics research by Richard Ewing for CTOs.`,
      ` Forensic systems architecture and engineering economics research by Richard Ewing.`,
      ` Systems architecture, engineering economics research, and executive frameworks.`,
      ` Systems architecture and engineering economics research by Richard Ewing.`,
      ` Systems architecture and engineering economics frameworks by Richard Ewing.`,
      ` Engineering economics research and frameworks by Richard Ewing.`,
      ` Forensic analysis and frameworks by Richard Ewing.`,
      ` Research and frameworks by Richard Ewing.`,
      ` Research by Richard Ewing.`
    ];
    for (const suffix of candidateSuffixes) {
      const combined = desc + suffix;
      if (combined.length >= 140 && combined.length <= 158) {
        return combined;
      }
    }
    const fallback = `${desc} Research and analysis by Richard Ewing.`;
    return fallback.length > 158 ? fallback.slice(0, 155) + '...' : fallback;
  })();

  return {
    title: `${concept.title} - Research Spec`,
    description,
    alternates: {
      canonical: `https://www.richardewing.io/concepts/${slug}`,
    },
    openGraph: {
      title: `${concept.title} - Research Spec | Richard Ewing`,
      description,
      url: `https://www.richardewing.io/concepts/${concept.slug}`,
      type: 'article',
      images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${concept.title} - Research Spec | Richard Ewing`,
      description,
      images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
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

  const exactConceptArticles = RESEARCH_CORPUS.filter(
    (art) => art.relatedConceptIds?.includes(concept.slug)
  );
  const domainFallbackArticles = RESEARCH_CORPUS.filter(
    (art) => !exactConceptArticles.includes(art) && art.domain === concept.domain
  );
  const domainArticles = [...exactConceptArticles, ...domainFallbackArticles].slice(0, 4);

  // Merge static evidence items with matching publications from RESEARCH_CORPUS
  const corpusEvidence: EvidenceLedgerItem[] = exactConceptArticles
    .filter((art) => !concept.evidenceLedger.some((e) => e.url === art.url || e.title === art.title))
    .map((art) => ({
      id: `ev-${art.id}`,
      title: art.title,
      url: art.url,
      publisher: art.publisher,
      type: art.type || 'Empirical Study',
      strength: 5 as const,
      role: 'Supports' as const,
      date: art.date || '2026',
    }));

  const allEvidence: EvidenceLedgerItem[] = [...concept.evidenceLedger, ...corpusEvidence];

  // Schema.org DefinedTerm & Article JSON-LD with persistent entity URI
  const definedTermJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'DefinedTerm',
        '@id': concept.entityUri || `https://www.richardewing.io/concepts/${concept.slug}#entity`,
        name: concept.title,
        description: concept.definition,
        inDefinedTermSet: 'https://www.richardewing.io/#definedtermset',
        inDefinedTermSetName: 'AI Economics Defined Terms',
        url: `https://www.richardewing.io/concepts/${concept.slug}`,
        author: {
          '@type': 'Person',
          name: 'Richard Ewing',
          jobTitle: 'AI Economist',
          url: 'https://www.richardewing.io',
        },
      },
      {
        '@type': 'TechArticle',
        '@id': `https://www.richardewing.io/concepts/${concept.slug}#article`,
        headline: concept.title,
        description: concept.definition,
        url: `https://www.richardewing.io/concepts/${concept.slug}`,
        author: {
          '@type': 'Person',
          name: 'Richard Ewing',
          jobTitle: 'AI Economist',
          url: 'https://www.richardewing.io',
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.canonical-definition', 'p'],
        },
      }
    ]
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
    <main className="min-h-screen bg-[var(--paper,#f4f1e9)] pt-20 pb-24 text-[var(--ink,#1e2924)]">
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
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-[var(--muted,#66716a)] uppercase tracking-widest">
          <Link href="/" className="hover:text-[var(--forest,#29473b)]">Home</Link>
          <span>/</span>
          <Link href="/research" className="hover:text-[var(--forest,#29473b)]">Research</Link>
          <span>/</span>
          <Link href="/concepts" className="hover:text-[var(--forest,#29473b)]">Specifications</Link>
          <span>/</span>
          <span className="text-[var(--forest,#29473b)] truncate">{concept.title}</span>
        </div>

        {/* Quick Graph Connected Concepts Navigation Pills */}
        <div className="bg-white border border-[var(--line,rgba(36,51,43,0.16))] rounded-2xl p-4 flex flex-wrap items-center gap-2 text-xs shadow-sm">
          <span className="font-mono font-bold text-[var(--muted,#66716a)] uppercase tracking-wider text-[10px] mr-1">
            Connected Graph:
          </span>
          {relatedConcepts.map((rel) => (
            <Link
              key={rel.slug}
              href={`/concepts/${rel.slug}`}
              className="px-3 py-1 bg-[var(--paper2,#ebe7dc)] hover:bg-[var(--forest,#29473b)] hover:text-white text-[var(--ink,#1e2924)] border border-[var(--line,rgba(36,51,43,0.12))] rounded-lg font-mono text-[11px] font-semibold transition"
            >
              {rel.targetTitle}
            </Link>
          ))}
        </div>

        {/* First Screen: 30-Second Executive Summary Hero */}
        <div className="space-y-6 bg-white border border-[var(--line,rgba(36,51,43,0.16))] rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--forest,#29473b)] text-white uppercase tracking-wider">
                Canonical Research Specification
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--paper2,#ebe7dc)] text-zinc-700 border border-[var(--line,rgba(36,51,43,0.12))]">
                Level: {concept.expertiseLevel || 'Executive'}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              Verified: {concept.health.lastVerified}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[var(--ink,#1e2924)] tracking-tight leading-tight">
            {concept.title}
          </h1>

          {/* 30-Second Immediate Answer Block */}
          <div className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.16))] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest block">
                30-Second Executive Definition
              </span>
              <p className="text-lg sm:text-xl font-serif text-[var(--ink,#1e2924)] leading-relaxed">
                {concept.aeo?.shortDefinition || concept.definition}
              </p>
            </div>

            {concept.canonicalQuote && (
              <p className="text-sm font-serif italic text-zinc-800 border-l-4 border-l-[var(--gold,#b77a35)] pl-4 py-1">
                &ldquo;{concept.canonicalQuote}&rdquo;
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--line,rgba(36,51,43,0.12))] text-xs font-sans">
              <div>
                <strong className="font-mono font-bold text-[var(--forest,#29473b)] uppercase block mb-1">Why It Matters:</strong>
                <p className="text-zinc-700 leading-relaxed">{concept.whyItMatters}</p>
              </div>

              {concept.whoShouldCare && (
                <div>
                  <strong className="font-mono font-bold text-[var(--forest,#29473b)] uppercase block mb-1">Target Roles:</strong>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {concept.whoShouldCare.map((role, rIdx) => (
                      <span key={rIdx} className="px-2 py-0.5 rounded bg-white text-zinc-800 font-mono text-[10px] border border-[var(--line,rgba(36,51,43,0.12))]">
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
            <div className="bg-[var(--forest2,#162e26)] text-white border border-[var(--forest,#29473b)] rounded-2xl p-6 sm:p-8 space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#d8c7a8] uppercase tracking-widest block">
                Canonical Architecture Flow
              </span>
              <h3 className="text-base font-serif font-bold text-white">
                {concept.canonicalDiagram.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 font-mono text-xs text-center font-bold">
                {concept.canonicalDiagram.flowSteps.map((step, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-xl bg-white/10 border border-white/15 space-y-1">
                    <span className="text-[10px] text-[#d8c7a8] block font-normal">Step 0{sIdx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Multi-Hop Knowledge Graph Traversal & Infinite Relationship Hopper */}
        <MultiHopGraphExplorer initialSlug={concept.slug} />

        {/* Interactive Software Creation Phase Transition Visualizer */}
        {(concept.slug === 'software-phase-transition' || concept.slug === 'product-economist') && (
          <SoftwarePhaseTransitionVisual />
        )}

        {/* Citation Graph (Forward Citations) */}
        {concept.citationGraph && (
          <section className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-3">
            <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider block">
              Academic &amp; Industry Citation Graph
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 font-mono text-center text-xs font-bold pt-1">
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-xl">
                <span className="text-[10px] text-zinc-500 block">Publications</span>
                <span className="text-lg font-black text-cyan-900">{concept.citationGraph.publicationsCount}</span>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-xl">
                <span className="text-[10px] text-zinc-500 block">Newsletters</span>
                <span className="text-lg font-black text-emerald-900">{concept.citationGraph.newslettersCount}</span>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-xl">
                <span className="text-[10px] text-zinc-500 block">Calculators</span>
                <span className="text-lg font-black text-amber-900">{concept.citationGraph.calculatorsCount}</span>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-xl">
                <span className="text-[10px] text-zinc-500 block">Book Chapters</span>
                <span className="text-lg font-black text-indigo-900">{concept.citationGraph.bookChaptersCount}</span>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-xl">
                <span className="text-[10px] text-zinc-500 block">Keynotes</span>
                <span className="text-lg font-black text-rose-900">{concept.citationGraph.keynoteTalksCount}</span>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-3 rounded-xl">
                <span className="text-[10px] text-zinc-500 block">GitHub Repos</span>
                <span className="text-lg font-black text-zinc-900">{concept.citationGraph.gitHubReposCount}</span>
              </div>
            </div>
          </section>
        )}

        {/* Reverse Citations Matrix ("Used & Implemented By") */}
        {concept.reverseCitations && concept.reverseCitations.length > 0 && (
          <section className="bg-white border border-zinc-300 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                Ecosystem Recursion &amp; Cross-Pollination
              </span>
              <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                Reverse Citations: Implemented &amp; Audited Across Platform
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              {concept.reverseCitations.map((rc, rcIdx) => (
                <Link
                  key={rcIdx}
                  href={rc.url}
                  className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 hover:border-cyan-600 transition flex flex-col justify-between space-y-2 group"
                >
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-200 inline-block">
                      {rc.targetType}
                    </span>
                    <h3 className="text-xs font-bold text-zinc-950 group-hover:text-cyan-800 transition">
                      {rc.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase">
                    [{rc.relationship}] →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Improved Canonical Research Position Stance */}
        {concept.positionStatement && (
          <section className="bg-[var(--forest2,#162e26)] text-white border border-[var(--forest,#29473b)] rounded-3xl p-8 sm:p-10 space-y-4 shadow-md">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#d8c7a8] uppercase tracking-widest">
              <span>Canonical Research Position</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Richard Ewing&apos;s Research Thesis
            </h2>
            <p className="text-lg sm:text-xl text-[#d8c7a8] leading-relaxed font-serif italic">
              &ldquo;{concept.positionStatement}&rdquo;
            </p>
          </section>
        )}

        {/* Genesis Box */}
        {concept.whyThisConceptExists && (
          <section className="bg-white border border-[var(--line,rgba(36,51,43,0.16))] rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-wider">
                Genesis &amp; Intellectual Positioning
              </span>
              <h2 className="text-2xl font-serif font-bold text-[var(--ink,#1e2924)]">
                Why This Specification Exists
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-medium text-xs">
              <div className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] p-5 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-rose-800 uppercase block">1. The Problem</strong>
                <p className="text-zinc-800 leading-relaxed font-sans">{concept.whyThisConceptExists.problem}</p>
              </div>

              <div className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] p-5 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-[var(--gold,#b77a35)] uppercase block">2. Existing Approaches</strong>
                <p className="text-zinc-800 leading-relaxed font-sans">{concept.whyThisConceptExists.existingApproaches}</p>
              </div>

              <div className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] p-5 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-indigo-900 uppercase block">3. The Structural Gap</strong>
                <p className="text-zinc-800 leading-relaxed font-sans">{concept.whyThisConceptExists.gap}</p>
              </div>

              <div className="bg-[var(--forest2,#162e26)] text-white border border-[var(--forest,#29473b)] p-5 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-[#d8c7a8] uppercase block">4. This Specification</strong>
                <p className="text-zinc-200 font-sans leading-relaxed">{concept.whyThisConceptExists.solution}</p>
              </div>
            </div>
          </section>
        )}

        {/* Operational Realignment Matrix */}
        {concept.whatChanges && (
          <section className="bg-white border border-[var(--line,rgba(36,51,43,0.16))] rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-wider">
                Operational Realignment
              </span>
              <h2 className="text-2xl font-serif font-bold text-[var(--ink,#1e2924)]">
                What Changes If You Believe This?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-medium text-xs">
              <div className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] p-5 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-[var(--forest,#29473b)] uppercase block">Engineering</strong>
                <p className="text-zinc-800 leading-relaxed font-sans">{concept.whatChanges.engineering}</p>
              </div>

              <div className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] p-5 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-emerald-800 uppercase block">Finance &amp; COGS</strong>
                <p className="text-zinc-800 leading-relaxed font-sans">{concept.whatChanges.finance}</p>
              </div>

              <div className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] p-5 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-[var(--gold,#b77a35)] uppercase block">Product Strategy</strong>
                <p className="text-zinc-800 leading-relaxed font-sans">{concept.whatChanges.product}</p>
              </div>

              <div className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] p-5 rounded-2xl space-y-1">
                <strong className="font-mono font-bold text-rose-800 uppercase block">Security &amp; Audit</strong>
                <p className="text-zinc-800 leading-relaxed font-sans">{concept.whatChanges.security}</p>
              </div>
            </div>
          </section>
        )}

        {/* Executable Diagnostic Tool Banner */}
        {concept.executableTool && (
          <section className="bg-[var(--forest2,#162e26)] text-white border border-[var(--forest,#29473b)] rounded-3xl p-8 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[var(--gold,#b77a35)] text-white uppercase">
                  Executable Diagnostic
                </span>
                <span className="text-xs font-mono text-[#d8c7a8]">
                  [{concept.executableTool.type}]
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                {concept.executableTool.name}
              </h3>
              <p className="text-sm text-zinc-300 max-w-xl font-sans leading-relaxed">
                {concept.executableTool.description}
              </p>
            </div>
            <Link
              href={concept.executableTool.url}
              className="button button-gold shrink-0 self-start sm:self-center"
            >
              Launch Tool ↗
            </Link>
          </section>
        )}

        {/* Latest Research Activity Feed */}
        {domainArticles.length > 0 && (
          <section className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider block">
                  Freshness &amp; Research Updates
                </span>
                <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                  Latest Publications &amp; Research Activity
                </h2>
              </div>
              <Link
                href="/research/publications"
                className="text-xs font-mono font-bold text-cyan-900 hover:text-cyan-700 flex items-center gap-1 uppercase tracking-wider"
              >
                Explore Full Corpus ({RESEARCH_CORPUS.length} Works) &rarr;
              </Link>
            </div>

            <div className="space-y-3 pt-2">
              {domainArticles.map((art) => (
                <div key={art.id} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                      <span className="text-cyan-900 uppercase">{art.publisher}</span>
                      {art.date && <span className="text-zinc-500">• {art.date}</span>}
                    </div>
                    <h3 className="text-sm font-bold text-zinc-950">
                      {art.title}
                    </h3>
                    {art.thesis && (
                      <p className="text-xs text-zinc-600 line-clamp-2 font-sans font-medium">
                        {art.thesis}
                      </p>
                    )}
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

        {/* 4-Section Sovereign Provenance & Propagation Ledger */}
        <ConceptProvenanceSection concept={concept} />

        {/* Inspectable Evidence Ledger */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif font-bold text-[var(--ink,#1e2924)]">Inspectable Evidence Ledger</h2>
            <p className="text-sm text-[var(--muted,#66716a)] font-sans">
              Classified evidence items supporting, extending, or refining this canonical research specification.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-[var(--line,rgba(36,51,43,0.16))] rounded-2xl shadow-sm">
            <table className="w-full text-left text-xs text-zinc-900">
              <thead className="bg-[var(--paper2,#ebe7dc)] text-zinc-700 font-mono text-[11px] uppercase tracking-wider border-b border-[var(--line,rgba(36,51,43,0.12))]">
                <tr>
                  <th className="p-4">Evidence Item</th>
                  <th className="p-4">Publisher</th>
                  <th className="p-4">Evidence Type</th>
                  <th className="p-4">Strength</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line,rgba(36,51,43,0.08))] font-mono">
                {allEvidence.map((item) => (
                  <tr key={item.id} className="hover:bg-[var(--paper,#f4f1e9)] transition">
                    <td className="p-4 font-bold text-[var(--ink,#1e2924)] font-sans">{item.title}</td>
                    <td className="p-4 text-zinc-600 font-bold">{item.publisher}</td>
                    <td className="p-4 text-[var(--forest,#29473b)] font-bold">{item.type}</td>
                    <td className="p-4 text-[var(--gold,#b77a35)] font-bold">
                      {'★'.repeat(item.strength)}
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--paper2,#ebe7dc)] text-zinc-800 font-bold">
                        {item.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--forest,#29473b)] hover:text-[var(--gold,#b77a35)] font-bold transition-colors"
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

        {/* Downstream Operational Realization */}
        <ConceptDownstreamSolution concept={concept} />

        {/* Recommended Citation & Attribution Matrix */}
        <section className="space-y-4 bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.16))] rounded-3xl p-8 shadow-sm">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-wider">
              Academic &amp; Industry Attribution Standard
            </span>
            <h2 className="text-2xl font-serif font-bold text-[var(--ink,#1e2924)]">
              Recommended Citation
            </h2>
          </div>

          <div className="space-y-4 font-mono text-xs text-zinc-900">
            <div className="bg-white border border-[var(--line,rgba(36,51,43,0.12))] rounded-2xl p-5 space-y-2">
              <span className="text-[11px] text-[var(--muted,#66716a)] font-bold uppercase block">Canonical Reference String</span>
              <p className="font-serif text-sm font-semibold text-[var(--ink,#1e2924)] select-all leading-relaxed">
                Ewing, R. ({new Date().getFullYear()}). &ldquo;{concept.title}.&rdquo; <em>Richard Ewing Research Canon</em>. Available at: https://www.richardewing.io/concepts/{concept.slug}
              </p>
            </div>

            <div className="bg-[var(--forest2,#162e26)] text-white border border-[var(--forest,#29473b)] rounded-2xl p-5 space-y-2">
              <span className="text-[11px] text-[#d8c7a8] font-bold uppercase block">BibTeX Citation</span>
              <pre className="text-[11px] leading-relaxed overflow-x-auto text-emerald-300 select-all">
{`@article{ewing_${concept.slug.replace(/-/g, '_')},
  author = {Ewing, Richard},
  title = {${concept.title}},
  journal = {Richard Ewing Research Canon},
  year = {2026},
  url = {https://www.richardewing.io/concepts/${concept.slug}}
}`}
              </pre>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] pt-2">
              <div className="p-4 bg-white border border-[var(--line,rgba(36,51,43,0.12))] rounded-xl">
                <span className="text-zinc-500 font-bold block mb-1">First Origin &amp; Provenance:</span>
                <span className="font-bold text-[var(--ink,#1e2924)]">
                  {concept.provenanceTimeline[0]?.publisher || 'LinkedIn'} ({concept.provenanceTimeline[0]?.date || '2026'})
                </span>
              </div>
              <div className="p-4 bg-white border border-[var(--line,rgba(36,51,43,0.12))] rounded-xl">
                <span className="text-zinc-500 font-bold block mb-1">Current Specification Version:</span>
                <span className="font-bold text-[var(--ink,#1e2924)]">Version 1.0 (Q2 2026 Baseline)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-8 border-t border-[var(--line,rgba(36,51,43,0.16))] text-center">
          <Link
            href="/concepts"
            className="text-xs font-mono font-bold text-[var(--forest,#29473b)] hover:text-[var(--gold,#b77a35)] uppercase tracking-wider transition-colors"
          >
            ← Back to Canonical Specifications Directory
          </Link>
        </div>
      </div>
    </main>
  );
}
