import { NextResponse } from 'next/server';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export async function GET() {
  const protocolGraph = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    '@id': 'https://www.richardewing.io/api/csp/v1/export',
    name: 'The Cognitive Substrate Protocol (CSP) Graph',
    description: 'Portable, versioned graph of canonical concepts, evidence ledgers, provenance timelines, and Answer Engine Optimization (AEO) matrices by Richard Ewing.',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      jobTitle: 'AI Economist',
      url: 'https://www.richardewing.io',
    },
    totalConcepts: CANONICAL_CONCEPTS.length,
    totalPublications: RESEARCH_CORPUS.length,
    dataset: CANONICAL_CONCEPTS.map((concept) => ({
      '@type': 'DefinedTerm',
      '@id': `https://www.richardewing.io/concepts/${concept.slug}`,
      name: concept.title,
      description: concept.definition,
      domain: concept.domain,
      health: concept.health,
      executableTool: concept.executableTool,
      aeo: concept.aeo,
      canonicalReadingOrder: concept.canonicalReadingOrder,
      provenanceTimeline: concept.provenanceTimeline,
      evidenceLedger: concept.evidenceLedger,
      relatedConcepts: concept.relatedConceptSlugs,
    })),
  };

  return NextResponse.json(protocolGraph, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
