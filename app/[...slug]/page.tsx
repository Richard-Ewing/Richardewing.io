import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pageData, siteUrl } from '@/lib/site-data';

export function generateStaticParams() {
  return pageData.map((p) => ({ slug: p.slug.split('/') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join('/');
  const page = pageData.find((p) => p.slug === key);
  if (!page) return {};

  return {
    title: `${page.title} | Richard Ewing`,
    description: page.description,
    alternates: { canonical: `${siteUrl}/${page.slug}` },
    openGraph: {
      title: `${page.title} | Richard Ewing`,
      description: page.description,
      url: `${siteUrl}/${page.slug}`,
      type: 'website',
    },
  };
}

const relatedCards = [
  {
    title: 'Reality Check',
    desc: 'Compare claims with operational unit economics.',
    href: '/reality-check',
    tag: 'DIAGNOSTIC',
  },
  {
    title: 'Research Library',
    desc: 'Evidence, frameworks, and practical lessons.',
    href: '/research',
    tag: 'RESEARCH',
  },
  {
    title: 'Published Work',
    desc: 'Browse writing across industry technology outlets.',
    href: '/research/publications',
    tag: 'PUBLICATIONS',
  },
  {
    title: 'Executive Portfolio',
    desc: 'Experience, platforms, and measurable outcomes.',
    href: '/portfolio',
    tag: 'PORTFOLIO',
  },
  {
    title: 'Executive Advisory',
    desc: 'Focused engagements around unit economics and pricing.',
    href: '/advisory',
    tag: 'ADVISORY',
  },
  {
    title: 'Tools & Diagnostics',
    desc: 'Explore AI spend leak calculators and benchmark indices.',
    href: '/tools',
    tag: 'TOOLS',
  },
];

export default async function DynamicSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join('/');
  const page = pageData.find((p) => p.slug === key);

  if (!page) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${siteUrl}/${page.slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Richard Ewing',
      url: siteUrl,
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
            <i /> Richard Ewing · Product & AI Economist
          </p>
          <h1>{page.title}</h1>
          <p className="inner-lede">{page.description}</p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/research/publications">
              Explore published work
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING PRINCIPLE</span>
          <strong>Measure the economics. Then make the call.</strong>
          <p>Clear assumptions. Practical tools. Measurable outcomes.</p>
        </aside>
      </section>

      {/* Editorial Content Section */}
      <section className="section page-intro">
        <div>
          <p className="eyebrow">The System</p>
          <h2>Evidence-led clarity for technology leaders.</h2>
        </div>
        <div>
          <p>{page.description}</p>
          <p className="mt-4 text-xs text-[var(--muted)] leading-relaxed">
            All research, diagnostic tools, and advisory methodologies on RichardEwing.io
            are grounded in 15+ years of enterprise software P&L turnaround experience.
            Explore related tools and frameworks below.
          </p>
        </div>
      </section>

      {/* Cross-Link Route Grid */}
      <section className="section border-t border-[var(--line)]">
        <div className="route-grid">
          {relatedCards.map((c, i) => (
            <Link className="route-card reveal" href={c.href} key={c.href}>
              <span className="route-tag">
                {c.tag} / 0{i + 1}
              </span>
              <div className={`route-visual visual-${i + 1}`}>
                <span>{`0${i + 1}`}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <b>Explore ↗</b>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Make the next decision with better evidence.</h2>
        <p>
          Start with a diagnostic, explore the research, or discuss a focused engagement.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
