import type { Metadata } from 'next';
import Link from 'next/link';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { getSortedArticles } from '@/lib/blog-data';
import { ResearchExplorer } from '@/components/research/research-explorer';

export const metadata: Metadata = {
  title: 'Research & Practical Frameworks',
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
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research & Practical Frameworks | Richard Ewing',
    description:
      'Practical frameworks, data-backed analysis, and hard-won lessons on AI economics, engineering productivity, and product leadership.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

export default function ResearchPage() {
  const internalEssays = getSortedArticles()
    .filter((a) => !a.canonicalUrl || a.canonicalUrl.includes('richardewing.io'))
    .slice(0, 6);

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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Research', item: 'https://www.richardewing.io/research' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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

      {/* SSR Internal Canonical Essays & Deep Dives */}
      <section className="section border-t border-[var(--line)] pt-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow">
              <i /> Canonical Essays &amp; Briefings
            </p>
            <h2 className="font-serif text-3xl font-medium text-[var(--ink)] mt-1">
              On-Site Research &amp; Executive Briefings
            </h2>
          </div>
          <Link className="button button-outline" href="/blog">
            Browse all executive essays ↗
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internalEssays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/blog/${essay.slug}`}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-6 hover:border-[var(--forest)] transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[var(--gold)] uppercase tracking-wider mb-2">
                  <span>{essay.category}</span>
                  <span className="text-zinc-500">{essay.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors mb-2 leading-snug">
                  {essay.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3">
                  {essay.excerpt}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[var(--line)] text-xs font-mono font-bold text-[var(--forest)] flex items-center justify-between">
                <span>Read Full Analysis</span>
                <span className="text-[var(--gold)]">→</span>
              </div>
            </Link>
          ))}
        </div>
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
