import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Executive Advisory & AI Economics Sprints',
  description:
    'No-nonsense executive advisory for CEOs, CFOs, and product leaders. AI feature pricing, engineering efficiency, governance, and capital allocation.',
  alternates: {
    canonical: 'https://www.richardewing.io/advisory',
  },
  openGraph: {
    title: 'Executive Advisory & AI Economics Sprints | Richard Ewing',
    description:
      'No-nonsense executive advisory for CEOs, CFOs, and product leaders. Pricing, governance, and capital allocation.',
    url: 'https://www.richardewing.io/advisory',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Advisory & AI Economics Sprints | Richard Ewing',
    description:
      'No-nonsense executive advisory for CEOs, CFOs, and product leaders. Pricing, governance, and capital allocation.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const offerings = [
  {
    title: 'Strategy Workshops',
    tag: 'FOCUSED SESSIONS',
    desc: 'Half-day or full-day working sessions for executive leadership teams to align on AI roadmap economics, identify phantom costs, and establish unified governance.',
    bullets: [
      'Executive alignment on AI unit margins',
      'Vendor vs custom build financial modeling',
      'Team velocity & review bottleneck diagnosis',
      'Boardroom-ready strategy scorecard',
    ],
  },
  {
    title: 'Executive Advisory',
    tag: 'ONGOING RETAINER',
    desc: 'Direct, bi-weekly strategic advisory for CEOs, CFOs, and CPOs. Providing independent fiduciary oversight on AI capital expenditure and feature pricing.',
    bullets: [
      'Bi-weekly strategic working sessions',
      'Ad-hoc architecture & pricing reviews',
      'Shadow AI and vendor contract audits',
      'Investor & board deck preparation',
    ],
  },
  {
    title: 'Pricing & Sprints',
    tag: 'SCOPED AUDITS',
    desc: 'Two-week intensive diagnostic sprint analyzing your production token consumption, telemetry data, and gross margins to deliver a prioritized remediation plan.',
    bullets: [
      'Complete AI token & inference cost audit',
      'Unit margin stress-testing per customer tier',
      'Prompt cache & model routing recommendations',
      'Comprehensive executive readout & workbook',
    ],
  },
];

export default function AdvisoryPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Executive AI Advisory & Economics Sprints',
    provider: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    description:
      'Executive advisory and pricing sprints for software leadership teams navigating AI unit economics.',
    url: 'https://www.richardewing.io/advisory',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Advisory', item: 'https://www.richardewing.io/advisory' },
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

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Executive Advisory · Fiduciary Leadership
          </p>
          <h1>Practical advisory for AI, product, and growth leaders.</h1>
          <p className="inner-lede">
            No-nonsense advisory to help you make better decisions, faster, with
            measurable outcomes. Grounded in 15+ years of enterprise software P&L
            ownership.
          </p>

          <div className="space-y-2 py-4">
            {[
              'AI feature pricing & unit economics',
              'Engineering efficiency & bottleneck remediation',
              'Deterministic AI governance & risk controls',
              'Strategic capital allocation & board preparation',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-800">
                <span className="text-[var(--gold)] font-bold">✓</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="actions">
            <Link className="button button-gold" href="/contact">
              Discuss an engagement ↗
            </Link>
            <Link className="button button-outline" href="/reality-check">
              Start with the free Reality Check
            </Link>
          </div>
        </div>

        <div className="inner-aside glass space-y-4">
          <div className="w-full h-44 rounded-lg overflow-hidden relative">
            <Image
              src="/assets/images/richard-discussion.jpg"
              alt="Richard Ewing in executive discussion"
              fill
              className="object-cover"
            />
          </div>
          <blockquote className="text-xs italic text-[var(--ink)] leading-relaxed font-serif pt-2 border-t border-[var(--line)]">
            &ldquo;Richard brings a rare combination of product, engineering, and business
            perspective to AI.&rdquo;
          </blockquote>
          <div className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-wider">
            Executive Client, Enterprise B2B SaaS
          </div>
        </div>
      </section>

      {/* 3 Offerings Grid */}
      <section id="offerings" className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Engagement Paths
          </p>
          <h2>How we work together.</h2>
          <p>
            Engagements are strictly scoped, outcome-driven, and designed to generate a
            positive return on capital before the next quarterly review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((off) => (
            <div
              key={off.title}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-widest block mb-2">
                  {off.tag}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[var(--ink)] mb-3">
                  {off.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  {off.desc}
                </p>

                <div className="space-y-2 border-t border-[var(--line)] pt-4 mb-6">
                  {off.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-xs text-zinc-700">
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link className="button button-gold w-full text-center" href="/contact">
                  Request availability ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Clear Next Step</p>
        <h2>Uncover your AI margin opportunity.</h2>
        <p>Start with a diagnostic or schedule an exploratory conversation.</p>
        <div className="actions center">
          <Link className="button button-gold" href="/contact">
            Get in Touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
