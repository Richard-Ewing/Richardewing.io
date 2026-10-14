import type { Metadata } from 'next';
import Link from 'next/link';
import { ConceptExplorer } from '@/components/concepts/concept-explorer';

export const metadata: Metadata = {
  title: 'Canonical Concepts & Research Graph | Richard Ewing',
  description:
    'The intellectual operating system of Richard Ewing’s research corpus. Broad industry concepts serve as discovery entry points, bridging directly into original canonical frameworks and diagnostic tools.',
  alternates: {
    canonical: 'https://www.richardewing.io/concepts',
  },
  openGraph: {
    title: 'Canonical Concepts & Research Graph | Richard Ewing',
    description:
      'Index of original frameworks, financial tax models, and governance concepts across AI economics and software capital.',
    url: 'https://www.richardewing.io/concepts',
    type: 'website',
  },
};

export default function ResearchConceptsIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Canonical Concepts & Research Graph',
    description:
      'The intellectual operating system of Richard Ewing’s research corpus.',
    url: 'https://www.richardewing.io/concepts',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Richard Ewing · Canonical Research Concepts
          </p>
          <h1>Canonical Concepts &amp; Research Graph.</h1>
          <p className="inner-lede">
            The intellectual operating system of Richard Ewing’s research corpus. Broad
            industry concepts serve as discovery entry points, bridging directly into original
            canonical frameworks, evidence ledgers, and diagnostic tools.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/research/publications">
              Browse 174+ Publications ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING PRINCIPLE</span>
          <strong>Concepts without economics are just theories.</strong>
          <p>
            Every concept in this canon is tied directly to production unit economics,
            verifiable software P&amp;L impact, or runtime engineering governance.
          </p>
        </aside>
      </section>

      {/* Explorer Section */}
      <section className="section">
        <ConceptExplorer />
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Test the concepts against your production software economics.</h2>
        <p>
          Compare your actual cloud spend and engineering velocity against industry benchmarks.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/advisory">
            Explore Executive Advisory ↗
          </Link>
        </div>
      </section>
    </>
  );
}
