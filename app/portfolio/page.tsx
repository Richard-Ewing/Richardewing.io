import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Executive Portfolio: Systems & Ventures',
  description:
    'From research to real-world impact. Explore software platforms, executive case studies, and enterprise AI governance systems built by Richard Ewing.',
  alternates: {
    canonical: 'https://www.richardewing.io/portfolio',
  },
  openGraph: {
    title: 'Executive Portfolio | Richard Ewing',
    description:
      'Explore software platforms, executive case studies, and enterprise AI governance systems built by Richard Ewing.',
    url: 'https://www.richardewing.io/portfolio',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Portfolio: Systems & Ventures | Richard Ewing',
    description:
      'Explore software platforms, executive case studies, and enterprise AI governance systems built by Richard Ewing.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const platforms = [
  {
    id: 'exogram',
    title: 'Exogram AI',
    subtitle: 'AI governance and cost optimization',
    tag: 'VENTURE · GOVERNANCE',
    desc: 'Runtime governance and cost control engine for autonomous AI agents. Real-time token budgeting, policy boundary enforcement, and exfiltration prevention.',
    features: [
      'Usage & token governance',
      'Deterministic cost controls',
      'Autonomous agent monitoring',
      'Enterprise audit readiness',
    ],
    url: 'https://exogram.ai',
    isExternal: true,
  },
  {
    id: 'careerwin',
    title: 'CareerWin',
    subtitle: 'AI-powered career strategy platform',
    tag: 'VENTURE · EDTECH',
    desc: 'Evidence-led career acceleration and resume intelligence platform helping technical operators quantify their impact and optimize compensation.',
    features: [
      'Resume intelligence & scoring',
      'Executive interview preparation',
      'Compensation negotiation models',
      'Measurable career outcomes',
    ],
    url: 'https://careerwin.ai',
    isExternal: true,
  },
  {
    id: 'advisory',
    title: 'Executive Advisory',
    subtitle: 'Strategic advisory and pricing workshops',
    tag: 'ADVISORY · CAPITAL',
    desc: 'High-conviction advisory engagements for CEOs, CFOs, and VPs of Product. Fixing AI unit margins, unwinding tech debt, and eliminating phantom roadmap drag.',
    features: [
      'AI feature pricing & margins',
      'Engineering efficiency audits',
      'Governance & safety frameworks',
      'Boardroom P&L strategy',
    ],
    url: '/advisory',
    isExternal: false,
  },
];

export default function PortfolioPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Executive Portfolio of Richard Ewing',
    description:
      'From research to real-world impact: software ventures, enterprise P&L turnarounds, and executive advisory.',
    url: 'https://www.richardewing.io/portfolio',
    mainEntity: {
      '@type': 'Person',
      name: 'Richard Ewing',
      jobTitle: 'Product & AI Economist',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.richardewing.io/portfolio' },
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
            <i /> Portfolio · Operator Systems
          </p>
          <h1>From research to real-world impact.</h1>
          <p className="inner-lede">
            Tools, software platforms, and executive advisory built for measurable
            business outcomes. Bridging academic economic rigor with battle-tested
            enterprise delivery.
          </p>
        </div>

        <aside className="inner-aside glass">
          <span>OPERATOR TRACK RECORD</span>
          <strong>15+ Years Enterprise Scale</strong>
          <p>
            $0 to $25M ARR scale, +200% YoY turnarounds, and 3 live venture platforms.
          </p>
        </aside>
      </section>

      {/* Main Platform Cards */}
      <section className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Systems & Ventures
          </p>
          <h2>Platforms built for operators.</h2>
          <p>
            Independent ventures and executive advisory practices solving fundamental
            problems in AI cost, data governance, and career equity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((p) => (
            <div
              key={p.id}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-widest block mb-2">
                  {p.tag}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[var(--ink)] mb-1">
                  {p.title}
                </h3>
                <div className="text-xs font-semibold text-[var(--forest)] mb-4">
                  {p.subtitle}
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  {p.desc}
                </p>

                <div className="space-y-2 border-t border-[var(--line)] pt-4 mb-6">
                  {p.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 text-xs text-zinc-700"
                    >
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {p.isExternal ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-gold w-full text-center"
                  >
                    Learn more ↗
                  </a>
                ) : (
                  <Link href={p.url} className="button button-gold w-full text-center">
                    Explore advisory ↗
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operator Background Highlights */}
      <section className="section border-t border-[var(--line)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">
              <i /> Operator Provenance
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium my-4">
              Real enterprise P&L ownership. Not theoretical advice.
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
              Before founding Exogram and authoring the AI Economist corpus, Richard
              led enterprise software portfolios at scale. Computer Science foundation
              paired with an MBA in Finance from top institutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-[var(--line)] rounded-lg">
                <div className="font-serif text-2xl font-bold text-[var(--forest)]">
                  $25M ARR
                </div>
                <div className="text-xs text-[var(--muted)] mt-1">
                  Enterprise product scale from zero
                </div>
              </div>
              <div className="p-4 bg-white border border-[var(--line)] rounded-lg">
                <div className="font-serif text-2xl font-bold text-[var(--forest)]">
                  +200% YoY
                </div>
                <div className="text-xs text-[var(--muted)] mt-1">
                  Product turnaround & margin lift
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--forest2)] text-white p-8 rounded-xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8c7a8]">
              Target Executive Engagements
            </span>
            <h3 className="font-serif text-2xl font-medium">
              Boardroom Advisory & Interim CPO
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Available for high-stakes AI strategy reviews, unit economics audits, and
              interim leadership roles for growth-stage and private equity-backed software
              enterprises.
            </p>
            <div className="pt-2">
              <Link className="button button-gold" href="/advisory">
                Explore Engagement Paths ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
