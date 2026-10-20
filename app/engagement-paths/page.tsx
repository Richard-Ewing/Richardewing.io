import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engagement Paths',
  description:
    'Three structured engagement paths: self-service diagnostics, focused turnaround sprints, and embedded executive leadership for technology organizations.',
  alternates: {
    canonical: 'https://www.richardewing.io/engagement-paths',
  },
  openGraph: {
    title: 'Engagement Paths | Richard Ewing',
    description:
      'Explore the three ways to work with Product & AI Economist Richard Ewing: Diagnostics, Sprints, and Advisory.',
    url: 'https://www.richardewing.io/engagement-paths',
    type: 'website',
  },
};

const paths = [
  {
    pathNumber: 'PATH 01',
    name: 'Diagnostic & Self-Service',
    investment: '$0 to $29',
    timeline: 'Immediate self-guided',
    idealFor: 'Product managers, founders, and finance leads looking for quick clarity.',
    description:
      'Quantify your AI margin leak, product debt, and team efficiency in minutes. Benchmark your numbers against verified industry datasets.',
    deliverables: [
      'The free 60-second Reality Check diagnostic (/reality-check)',
      'AI Unit Economics Benchmark & PDI Calculators (/tools)',
      'The $29 Product & AI Economist Operating Kit (/operating-kit)',
      'Interactive browser workspace with local data storage (/workspace)',
    ],
    ctaText: 'Start with Reality Check ↗',
    ctaHref: '/reality-check',
  },
  {
    pathNumber: 'PATH 02',
    name: 'Targeted Sprints & Audits',
    investment: '$450 to $7,500',
    timeline: '48 Hours to 21 Days',
    idealFor: 'VPs of Product, CTOs, and CEOs facing board pressure on AI ROI or flat ARR.',
    description:
      'Fixed-scope, intensive operational interventions. We audit your production economics, eliminate waste, and build board-ready presentations.',
    deliverables: [
      '60-Minute 1-on-1 AI P&L & Roadmap Teardown ($450)',
      '2-Week Product P&L Turnaround Sprint ($2,500)',
      '21-Day 0-to-1 Production AI Build Sprint ($7,500)',
      'Complete deliverable packages with zero surprise billable hours',
    ],
    ctaText: 'Explore Sprint Scopes ↗',
    ctaHref: '/pricing-sprints',
  },
  {
    pathNumber: 'PATH 03',
    name: 'Embedded Executive Advisory',
    investment: '$10,000/mo to $15,000',
    timeline: 'Quarterly Retainer or Project',
    idealFor: 'Growth-stage boards, CEOs, and private equity investors navigating M&A.',
    description:
      'Embedded product executive leadership. Align engineering capacity with revenue, mentor product leadership, and defend gross margins.',
    deliverables: [
      'Embedded Fractional CPO leadership ($10,000/mo)',
      'Private equity technical due diligence and code audits ($15,000)',
      'Board meeting preparation and capital allocation governance',
      'Direct executive access via Slack, phone, and leadership meetings',
    ],
    ctaText: 'Discuss Executive Advisory ↗',
    ctaHref: '/advisory',
  },
];

export default function EngagementPathsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Engagement Paths | Richard Ewing',
    description: 'Structured engagement paths for technology leaders.',
    url: 'https://www.richardewing.io/engagement-paths',
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
            <i /> Structured Engagements · Clear Outcomes
          </p>
          <h1>Three ways to partner. Zero ambiguity.</h1>
          <p className="inner-lede">
            Whether you need a self-service spreadsheet model, an intensive 2-week turnaround,
            or embedded C-suite leadership, select the engagement path that matches your current
            stage and operational speed.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/pricing-sprints">
              Review Sprint Pricing ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE PARTNERSHIP PROMISE</span>
          <strong>Honest diagnoses. Measurable economics. Clear timelines.</strong>
          <p>
            Every engagement tier is built to deliver at least 10x measurable ROI through
            recovered engineering capacity and protected gross margins.
          </p>
        </aside>
      </section>

      {/* Engagement Paths Cards */}
      <section className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> The Paths
          </p>
          <h2>Find the right level of collaboration.</h2>
          <p>
            Choose between self-service toolkits, short-term tactical sprints, and ongoing
            executive leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {paths.map((p) => (
            <div
              key={p.pathNumber}
              className="border border-[var(--line)] bg-[#FAF8F3] rounded-2xl p-8 flex flex-col justify-between hover:border-[var(--forest)] hover:shadow-md transition"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                  <span className="text-[10px] font-mono font-bold text-[var(--gold)] tracking-wider">
                    {p.pathNumber}
                  </span>
                  <span className="text-xs font-mono text-[var(--muted)]">
                    {p.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-medium text-[var(--ink)] mb-2">
                    {p.name}
                  </h3>
                  <div className="text-xl font-serif text-[var(--forest)] font-semibold mb-3">
                    {p.investment}
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <p className="text-xs font-medium text-[#3d4942] italic">
                    Ideal for: {p.idealFor}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)]">
                  <span className="text-xs font-mono font-bold text-[var(--forest)] uppercase tracking-wider block mb-3">
                    Typical Engagements:
                  </span>
                  <ul className="space-y-2">
                    {p.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-[#3d4942] flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-[var(--gold)] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[var(--line)]">
                <Link
                  href={p.ctaHref}
                  className="w-full button button-outline !justify-center text-xs"
                >
                  {p.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Ready to examine your production numbers?</h2>
        <p>
          Start with the free Reality Check diagnostic or schedule a 15-minute introductory call.
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
