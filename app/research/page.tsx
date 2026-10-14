import type { Metadata } from 'next';
import Link from 'next/link';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { ResearchExplorer } from '@/components/research/research-explorer';

export const metadata: Metadata = {
  title: 'Research & Practical Frameworks | Richard Ewing',
  description:
    'Practical frameworks, data-backed analysis, and hard-won lessons on AI economics, engineering productivity, and product leadership.',
  alternates: {
    canonical: 'https://www.richardewing.io/research',
  },
  openGraph: {
    title: 'Research & Practical Frameworks | Richard Ewing',
    description:
      'Practical frameworks, data-backed analysis, and hard-won lessons on AI economics, engineering productivity, and product leadership.',
    url: 'https://www.richardewing.io/research',
    type: 'website',
  },
};

export default function ResearchPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Research & Practical Frameworks',
    description:
      'Practical frameworks, data-backed analysis, and hard-won lessons from the front lines of AI.',
    url: 'https://www.richardewing.io/research',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Rediscover Economics
          </p>
          <h1>Research</h1>
          <p className="inner-lede">
            Practical frameworks, data-backed analysis, and hard-won lessons from the
            front lines of AI in production enterprise environments.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/research/publications">
              View all 174+ publications ↗
            </Link>
            <Link className="button button-outline" href="/concepts">
              Explore canonical concepts
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING PRINCIPLE</span>
          <strong>Measure the economics. Then make the call.</strong>
          <p>
            Clear assumptions. Practical tools. Measurable outcomes without corporate
            theater.
          </p>
        </aside>
      </section>

      {/* Main Research Content with Filter & Search */}
      <section className="section">
        <ResearchExplorer articles={RESEARCH_CORPUS} limit={18} />
      </section>

      {/* Bottom Link to Full Catalog */}
      <section className="publication-band">
        <div>
          <p className="eyebrow">The Complete Corpus</p>
          <h2>All published works in one place.</h2>
          <p>
            Browse 174+ essays, deep dives, and articles across CIO.com, Built In, Mind
            the Product, HackerNoon, LinkedIn, and Beehiiv.
          </p>
          <Link className="button button-dark" href="/research/publications">
            Browse complete publications ledger ↗
          </Link>
        </div>
        <div className="publication-logos">
          <strong>CIO.com</strong>
          <strong>Built In</strong>
          <strong>Mind the Product</strong>
          <strong>HackerNoon</strong>
          <strong>LinkedIn</strong>
          <strong>Beehiiv</strong>
        </div>
      </section>
    </>
  );
}
