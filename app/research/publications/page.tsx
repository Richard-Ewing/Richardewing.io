import type { Metadata } from 'next';
import Link from 'next/link';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { ResearchExplorer } from '@/components/research/research-explorer';

export const metadata: Metadata = {
  title: 'Publications & Published Works (174+) | Richard Ewing',
  description:
    'Comprehensive catalog of 174+ published works across CIO.com, Built In, Mind the Product, HackerNoon, Beehiiv, and LinkedIn on AI economics, governance, and capital allocation.',
  alternates: {
    canonical: 'https://www.richardewing.io/research/publications',
  },
  openGraph: {
    title: 'Publications & Published Works (174+) | Richard Ewing',
    description:
      'Comprehensive catalog of 174+ published works across CIO.com, Built In, Mind the Product, HackerNoon, Beehiiv, and LinkedIn.',
    url: 'https://www.richardewing.io/research/publications',
    type: 'website',
  },
};

const outlets = [
  'CIO.com',
  'Built In',
  'Mind the Product',
  'HackerNoon',
  'LinkedIn',
  'Beehiiv',
];

export default function PublicationsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Published Work for Builders and Leaders',
    description:
      'Articles, essays, and insights on AI economics, product strategy, engineering productivity, and governance.',
    url: 'https://www.richardewing.io/research/publications',
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
            <i /> AI Economics · Published Works
          </p>
          <h1>Published work for builders and leaders.</h1>
          <p className="inner-lede">
            A definitive index of over 174 published works across premier technology
            and executive publications. Articles, essays, and insights on AI unit
            economics, software productivity, and engineering governance.
          </p>

          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/research">
              Back to Research overview
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>CATALOG STATS</span>
          <strong>174+ Verified Works</strong>
          <p>
            Indexed across CIO.com, Built In, Mind the Product, HackerNoon, Beehiiv, and
            LinkedIn.
          </p>
        </aside>
      </section>

      {/* Outlet Verification Strip */}
      <div className="border-b border-[var(--line)] bg-[var(--paper2)] py-5 px-[5vw]">
        <div className="max-w-[var(--max)] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <span className="uppercase tracking-widest text-[10px] text-[var(--gold)]">
            Verified Publishers
          </span>
          <div className="flex flex-wrap items-center gap-6 font-serif text-sm font-semibold text-zinc-700">
            {outlets.map((outlet) => (
              <span key={outlet}>{outlet}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Full Publication Explorer */}
      <section className="section">
        <ResearchExplorer
          articles={RESEARCH_CORPUS}
          limit={48}
          showPublisherFilter={true}
        />
      </section>
    </>
  );
}
