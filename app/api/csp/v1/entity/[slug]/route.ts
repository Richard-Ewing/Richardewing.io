import { NextResponse } from 'next/server';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function GET(request: Request, { params }: RouteProps) {
  const { slug } = await params;
  const concept = CANONICAL_CONCEPTS.find((c) => c.slug === slug);

  if (!concept) {
    return NextResponse.json(
      {
        error: 'Entity not found',
        message: `No canonical concept entity matching slug: ${slug}`,
      },
      { status: 404 }
    );
  }

  const entityRecord = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': concept.entityUri || `https://www.richardewing.io/concepts/${concept.slug}#entity`,
    name: concept.title,
    description: concept.definition,
    domain: concept.domain,
    expertiseLevel: concept.expertiseLevel,
    firstIntroduced: concept.firstIntroduced,
    canonicalQuote: concept.canonicalQuote,
    positionStatement: concept.positionStatement,
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      jobTitle: 'AI Economist',
      url: 'https://www.richardewing.io',
    },
    inDefinedTermSet: 'https://www.richardewing.io/canonical/dataset.jsonld',
    canonicalUrl: `https://www.richardewing.io/concepts/${concept.slug}`,
    origin: concept.telemetry?.origin,
    internalCorpus: concept.telemetry?.internalCorpus,
    humanEvidenceSummary: concept.telemetry?.humanEvidenceSummary,
    humanSignals: concept.telemetry?.humanSignals || [],
    machineDiscoverabilitySummary: concept.telemetry?.machineDiscoverabilitySummary,
    machineSignals: concept.telemetry?.machineSignals || [],
    evolutionTimeline: concept.telemetry?.evolutionTimeline || concept.evolutionTimeline || [],
    problemMapping: concept.problemMapping,
    executableTool: concept.executableTool,
    relatedConcepts: concept.relatedConceptSlugs,
    citationString: `Ewing, R. (2026). "${concept.title}." Richard Ewing Research Canon. Available at: https://www.richardewing.io/concepts/${concept.slug}`,
  };

  return NextResponse.json(entityRecord, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
