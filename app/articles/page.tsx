import type { Metadata } from 'next';
import Link from 'next/link';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { ResearchExplorer } from '@/components/research/research-explorer';

export const metadata: Metadata = {
  title: 'Forensic AI & Engineering Research | Richard Ewing',
  description:
    'Published research, essays, and empirical articles on AI unit economics, R&D capital efficiency, and tech debt. Written for CTOs and engineering leaders.',
  alternates: {
    canonical: 'https://www.richardewing.io/articles',
  },
  openGraph: {
    title: 'Forensic Engineering Research & Articles | Richard Ewing',
    description:
      'Deep essays on R&D capital efficiency, AI unit economics, and technical debt valuation. Published in CIO.com, Built In, and Mind the Product.',
    url: 'https://www.richardewing.io/articles',
    type: 'website',
  },
};

export default function ArticlesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Forensic Engineering Research & Articles',
    description:
      'Deep essays on R&D capital efficiency, AI unit economics, and technical debt valuation.',
    url: 'https://www.richardewing.io/articles',
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
            <i /> Forensic Research · 174+ Publications
          </p>
          <h1>Forensic AI &amp; Engineering Research</h1>
          <p className="inner-lede">
            Published essays and operational analysis across CIO.com, Built In, Mind the
            Product, HackerNoon, and LinkedIn. Filter by domain or search by topic.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/concepts">
              Explore canonical concepts
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING INVARIANT</span>
          <strong>Evidence over hype. Always.</strong>
          <p>
            Grounding enterprise technology decisions in real P&amp;L turnaround data,
            measurable costs, and verified engineering metrics.
          </p>
        </aside>
      </section>

      {/* Main Research Content */}
      <section className="section">
        <ResearchExplorer articles={RESEARCH_CORPUS} limit={30} />
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Need independent analysis on your AI roadmap?</h2>
        <p>
          Book a 1-on-1 working session to audit your unit economics and engineering
          backlog.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/pricing-sprints">
            View Engagement Tiers ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
