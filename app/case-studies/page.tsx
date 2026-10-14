import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies & Production Outcomes | Richard Ewing',
  description:
    'Documented software turnarounds, AI unit economics interventions, and enterprise SaaS scaling from $0 to $25M ARR with measurable metrics.',
  alternates: {
    canonical: 'https://www.richardewing.io/case-studies',
  },
  openGraph: {
    title: 'Case Studies & Production Outcomes | Richard Ewing',
    description:
      'Grounded operator case studies: enterprise turnarounds, AI gross margin recovery, and engineering waste elimination.',
    url: 'https://www.richardewing.io/case-studies',
    type: 'website',
  },
};

const caseStudies = [
  {
    tag: 'ENTERPRISE SAAS TURNAROUND',
    title: 'Tyler Technologies: Scaling $0 to $25M ARR and Turning Around a $20M P&L',
    context:
      'Enterprise software division facing stalled organic growth, mounting legacy product debt, and declining capital efficiency.',
    intervention:
      'Instituted rigorous feature-level P&L accounting, eliminated low-yield product lines, refocused engineering sprints on high-retention enterprise workflows, and renegotiated key infrastructure contracts.',
    outcomes: [
      '$0 to $25M ARR organic revenue growth trajectory',
      '+200% YoY operating turnaround on $20M product P&L',
      'Over $5M in negative-carry engineering waste eliminated',
      'Restructured 100+ person engineering and product roadmap alignment',
    ],
    metricHighlight: '+200%',
    metricLabel: 'YoY P&L Turnaround',
  },
  {
    tag: 'AI UNIT ECONOMICS & MARGIN RESCUE',
    title: 'B2B SaaS: Reversing AI Gross Margin Compression from 41% to 78%',
    context:
      'Fast-growing vertical AI platform experiencing runaway token bills and silent LLM retry loops that threatened venture round milestones.',
    intervention:
      'Audited token invocation paths, implemented SLM caching and model routing, added client-side latency budgets, and migrated from flat per-seat pricing to hybrid outcome tiers.',
    outcomes: [
      'Gross margins restored from 41% back to 78%',
      '68% reduction in redundant foundation model API calls',
      'Average response latency reduced from 2.4s to 380ms',
      'New monetization model grew net revenue retention by +22%',
    ],
    metricHighlight: '78%',
    metricLabel: 'Gross Margin Restored',
  },
  {
    tag: 'PRIVATE EQUITY DUE DILIGENCE',
    title: 'PE Acquisition Audit: Uncovering $3.2M in Negative-Carry Backlog',
    context:
      'Private equity sponsor evaluating an $85M buyout of an established healthcare software provider with an unverified AI modernization roadmap.',
    intervention:
      'Conducted deep code-level technical diligence across 14 core repositories, verified actual R&D capitalization under Section 174, and identified dormant legacy features consuming maintenance capacity.',
    outcomes: [
      '$3.2M in dormant product debt identified prior to closing',
      'R&D capitalization model aligned with realistic engineering velocity',
      'Post-acquisition 100-day product rationalization plan delivered',
      'Sponsor successfully restructured purchase terms based on audit data',
    ],
    metricHighlight: '$3.2M',
    metricLabel: 'Product Debt Identified',
  },
  {
    tag: '0-TO-1 PLATFORM BUILD',
    title: 'Exogram AI: Architecting Runtime Governance for Autonomous Systems',
    context:
      'Need for a deterministic, zero-hallucination runtime control layer for agentic software interacting with production APIs and databases.',
    intervention:
      'Designed and shipped an edge-deployed spatial intelligence system with bidirectional action loops, cryptographic boundary verification, and sub-50ms execution speed.',
    outcomes: [
      'Sub-50ms global edge verification latency on Cloudflare Workers',
      'Zero unauthorized API state mutations across test harness',
      'Modular SDK architecture supporting Python and TypeScript runtimes',
      'Featured across multiple enterprise research papers and keynotes',
    ],
    metricHighlight: '<50ms',
    metricLabel: 'Edge Execution Latency',
  },
];

export default function CaseStudiesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Case Studies & Production Outcomes | Richard Ewing',
    description: 'Documented software turnarounds and AI unit economics case studies.',
    url: 'https://www.richardewing.io/case-studies',
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
            <i /> Proven Outcomes · Operator Provenance
          </p>
          <h1>Documented turnarounds. Verified P&amp;L results.</h1>
          <p className="inner-lede">
            Real enterprise case studies grounded in 15+ years of software leadership.
            Every case represents verifiable changes in gross margin, engineering velocity, and
            capital allocation.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/pricing-sprints">
              Review Sprint Options ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATOR STANDARD</span>
          <strong>Evidence over claims. Outcomes over theory.</strong>
          <p>
            No fabricated outcomes or hypothetical scenarios. Every case study reflects
            practical operational interventions tested in production environments.
          </p>
        </aside>
      </section>

      {/* Case Studies List */}
      <section className="section">
        <div className="space-y-16">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="border border-[var(--line)] bg-[#FAF8F3] rounded-2xl p-8 sm:p-12 hover:border-[var(--forest)] hover:shadow-lg transition space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--line)] pb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[var(--gold)] tracking-wider uppercase block mb-1">
                    {cs.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--ink)]">
                    {cs.title}
                  </h2>
                </div>
                <div className="sm:text-right flex-none">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[var(--forest)]">
                    {cs.metricHighlight}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--muted)]">
                    {cs.metricLabel}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed text-[#3e4a42]">
                <div className="space-y-4">
                  <div>
                    <strong className="font-serif text-sm text-[var(--ink)] block mb-1">
                      The Operational Challenge
                    </strong>
                    <p className="text-[var(--muted)]">{cs.context}</p>
                  </div>
                  <div>
                    <strong className="font-serif text-sm text-[var(--ink)] block mb-1">
                      The Economic Intervention
                    </strong>
                    <p className="text-[var(--muted)]">{cs.intervention}</p>
                  </div>
                </div>

                <div className="bg-white/60 border border-[var(--line)] rounded-xl p-6 space-y-3">
                  <span className="text-xs font-mono font-bold text-[var(--forest)] uppercase tracking-wider block">
                    Verified Outcomes:
                  </span>
                  <ul className="space-y-2">
                    {cs.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#2e3a32]">
                        <span className="text-[var(--gold)] font-bold">✓</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Apply these principles to your product roadmap.</h2>
        <p>
          Run the free 60-second Reality Check diagnostic or discuss your specific P&amp;L
          challenge with Richard Ewing.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Discuss an engagement ↗
          </Link>
        </div>
      </section>
    </>
  );
}
