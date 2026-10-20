import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Transparent Pricing & Advisory Sprints',
  description:
    'Fixed-scope product P&L turnarounds, AI feature pricing sprints, and embedded fractional product leadership with transparent pricing and deliverables.',
  alternates: {
    canonical: 'https://www.richardewing.io/pricing',
  },
  openGraph: {
    title: 'Transparent Pricing & Advisory Sprints | Richard Ewing',
    description:
      'Transparent advisory pricing: $29 Operating Kit, $450 P&L Teardown, $2,500 Turnaround Sprint, $7,500 AI Build Sprint, and $10,000/mo Fractional CPO.',
    url: 'https://www.richardewing.io/pricing',
    type: 'website',
  },
};

const sprintTiers = [
  {
    id: 'operating-kit',
    badge: 'FILES + LIVE WORKSPACE',
    name: 'Operating Kit & Live Workspace',
    price: '$29',
    period: 'one-time',
    description:
      'The complete operator toolkit: 5 working P&L spreadsheets, board deck templates, and lifetime access to the interactive browser workspace.',
    timeline: 'Instant Access',
    deliverables: [
      'AI Feature Pricing & Token Margin Stress-Tester (Excel & CSV)',
      'Zombie Feature Kill-List & Backlog ROI Scoring Matrix',
      '12-Slide Board & CFO Defense Deck Template',
      'First-30-Days P&L Turnaround Runbook',
      'Interactive Browser Workspace (/workspace) access',
    ],
    ctaText: 'Get the Operating Kit ($29) ↗',
    ctaHref: '/toolkit',
    highlight: false,
  },
  {
    id: 'pnl-teardown',
    badge: '1-ON-1 WORKING SESSION',
    name: 'AI P&L & Roadmap Teardown',
    price: '$450',
    period: 'one-time',
    description:
      'Live 60-minute executive session. We inspect your AI feature costs, API bills, and product roadmap to pinpoint margin compression and cut dead backlog.',
    timeline: 'Completed in 48 Hours',
    deliverables: [
      '60-minute live 1-on-1 working session with Richard Ewing',
      'Seat vs. usage vs. outcome pricing restructure for AI features',
      'Immediate cut-list to free up 20% to 35% engineering capacity',
      'Written 30-day margin recovery blueprint',
      'Full $29 Operating Kit included at no extra charge',
    ],
    ctaText: 'Book 1-on-1 Teardown ($450) ↗',
    ctaHref: '/contact?subject=P&L+Teardown',
    highlight: false,
  },
  {
    id: 'turnaround-sprint',
    badge: 'MOST POPULAR · 2 WEEKS',
    name: 'Product P&L Turnaround Sprint',
    price: '$2,500',
    period: 'fixed-fee',
    description:
      'Two-week forensic audit and operational overhaul of your product line. We analyze telemetry, cloud costs, and team velocity to fix margins before your next board meeting.',
    timeline: '14 Calendar Days',
    deliverables: [
      'Full telemetry & API spend audit with model-routing cost cuts',
      'Pricing & packaging restructuring with gross margin modeling',
      'Feature-level unit economics model delivered to your CFO',
      'Prioritized 90-day product roadmap scrubbed of negative carry',
      'Executive readout with C-suite and board materials included',
    ],
    ctaText: 'Reserve Turnaround Sprint ($2,500) ↗',
    ctaHref: '/contact?subject=Turnaround+Sprint',
    highlight: true,
  },
  {
    id: 'build-sprint',
    badge: '0-TO-1 DEPLOYED SOFTWARE',
    name: '21-Day AI Build Sprint',
    price: '$7,500',
    period: 'fixed-fee',
    description:
      'We architect, build, and deploy a live, production AI tool, diagnostic engine, or client portal with hardened guardrails and token metering in 21 days.',
    timeline: '21 Calendar Days',
    deliverables: [
      'Complete production application deployed to Cloudflare Edge',
      'Hardened LLM prompt architecture and semantic token routing',
      'Telemetry instrumentation with real-time margin tracking',
      'Full source code repository handoff with zero vendor lock-in',
      '30-day post-launch warranty and operator runbook',
    ],
    ctaText: 'Commission AI Build ($7,500) ↗',
    ctaHref: '/contact?subject=AI+Build+Sprint',
    highlight: false,
  },
  {
    id: 'fractional-cpo',
    badge: 'EMBEDDED LEADERSHIP',
    name: 'Fractional CPO / Product Economist',
    price: '$10,000',
    period: 'per month',
    description:
      'Hands-on executive product leadership for growth-stage tech companies. Direct ownership of product strategy, unit economics, engineering capital allocation, and board reporting.',
    timeline: '3-Month Initial Retainer',
    deliverables: [
      'Direct ownership of product roadmap and margin governance',
      'Weekly executive staff meetings and engineering syncs',
      'Quarterly board deck authoring and investor briefings',
      'M&A and technical due diligence audit representation',
      'Mentorship and leveling for your product management team',
    ],
    ctaText: 'Inquire About Retainer ($10,000/mo) ↗',
    ctaHref: '/contact?subject=Fractional+CPO',
    highlight: false,
  },
];

const comparisonRows = [
  {
    feature: 'Delivery Timeline',
    kit: 'Instant',
    teardown: '48 Hours',
    turnaround: '14 Days',
    build: '21 Days',
    cpo: 'Ongoing Retainer',
  },
  {
    feature: 'Format',
    kit: 'Self-serve templates',
    teardown: '60-min live Zoom',
    turnaround: '2-week embedded audit',
    build: 'Production code & deploy',
    cpo: 'Embedded executive',
  },
  {
    feature: 'Operating Kit Files Included',
    kit: 'Yes',
    teardown: 'Yes',
    turnaround: 'Yes',
    build: 'Yes',
    cpo: 'Yes',
  },
  {
    feature: 'Token Margin Restructuring',
    kit: 'Template model',
    teardown: 'High-level review',
    turnaround: 'Forensic audit & plan',
    build: 'Architected in code',
    cpo: 'Continuous governance',
  },
  {
    feature: 'Board & CFO Deck Authoring',
    kit: 'Template only',
    teardown: 'Written memo',
    turnaround: 'Custom 12-slide deck',
    build: 'Architecture specs',
    cpo: 'Full board ownership',
  },
  {
    feature: 'Direct Access to Richard Ewing',
    kit: 'Self-serve',
    teardown: '1 working session',
    turnaround: 'Daily async + 3 calls',
    build: 'Lead architect',
    cpo: 'Unlimited executive access',
  },
];

export default function PricingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    name: 'Richard Ewing Advisory Pricing & Sprints',
    description:
      'Transparent advisory pricing: $29 Operating Kit, $450 P&L Teardown, $2,500 Turnaround Sprint, $7,500 AI Build Sprint, and $10,000/mo Fractional CPO.',
    url: 'https://www.richardewing.io/pricing',
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
            <i /> Transparent Engagements · Clear Deliverables
          </p>
          <h1>Pricing &amp; Sprints</h1>
          <p className="inner-lede">
            No open-ended consulting bills or vague hourly retainers. Choose fixed-scope
            advisory, self-serve toolkits, or embedded executive leadership with defined
            deliverables and guaranteed timelines.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check first ↗
            </Link>
            <Link className="button button-outline" href="/case-studies">
              View verified case studies
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE PRICING RULE</span>
          <strong>Fixed scope. Measurable ROI. Zero surprise invoices.</strong>
          <p>
            Every tier has explicit deliverables, an agreed-upon calendar timeline, and
            transparent flat-fee pricing.
          </p>
        </aside>
      </section>

      {/* 3 Buying Paths Primer */}
      <section className="section page-intro">
        <div>
          <p className="eyebrow">Three Buying Paths</p>
          <h2>How executives engage.</h2>
        </div>
        <div>
          <p>
            Depending on your stage, budget, and urgency, you can start with a $29
            self-serve operating kit, commission a $2,500 forensic turnaround sprint, or
            bring on fractional leadership to own your product P&amp;L end-to-end.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl border border-[var(--line)] bg-[var(--paper)]">
              <span className="text-xs font-mono text-[var(--gold)] font-bold block mb-1">
                PATH A · $29 to $2,500
              </span>
              <strong className="text-sm font-serif block text-[var(--ink)] mb-1">
                Fix &amp; Protect Gross Margins
              </strong>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                For established products suffering from token bill bloat, dead backlog, or
                margin compression.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--line)] bg-[var(--paper)]">
              <span className="text-xs font-mono text-[var(--gold)] font-bold block mb-1">
                PATH B · $7,500
              </span>
              <strong className="text-sm font-serif block text-[var(--ink)] mb-1">
                Ship a 0-to-1 AI Product
              </strong>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                For founders and enterprises needing a hardened diagnostic engine or AI tool
                deployed in 21 days.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-[var(--line)] bg-[var(--paper)]">
              <span className="text-xs font-mono text-[var(--gold)] font-bold block mb-1">
                PATH C · $10,000/mo
              </span>
              <strong className="text-sm font-serif block text-[var(--ink)] mb-1">
                Fractional Executive Leadership
              </strong>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                For growth-stage leadership teams needing direct executive ownership of
                product, P&amp;L, and board reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="section border-t border-[var(--line)]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow center">Engagement Tiers</p>
          <h2 className="text-3xl font-serif text-[var(--ink)] mb-3">
            Transparent, flat-rate options.
          </h2>
          <p className="text-sm text-[var(--muted)]">
            Select the tier that matches your current operating reality. All engagements are
            led directly by Richard Ewing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sprintTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                tier.highlight
                  ? 'bg-[var(--forest2)] text-white shadow-xl border-2 border-[var(--gold)]'
                  : 'bg-white border border-[var(--line)] shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      tier.highlight
                        ? 'bg-[var(--gold)] text-[var(--ink)]'
                        : 'bg-[var(--paper2)] text-[var(--muted)]'
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <span
                    className={`text-xs font-mono ${
                      tier.highlight ? 'text-zinc-300' : 'text-[var(--muted)]'
                    }`}
                  >
                    {tier.timeline}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-serif mb-2 ${
                    tier.highlight ? 'text-white' : 'text-[var(--ink)]'
                  }`}
                >
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className={`text-4xl font-serif font-bold ${
                      tier.highlight ? 'text-[var(--gold)]' : 'text-[var(--ink)]'
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-xs font-mono uppercase ${
                      tier.highlight ? 'text-zinc-300' : 'text-[var(--muted)]'
                    }`}
                  >
                    / {tier.period}
                  </span>
                </div>

                <p
                  className={`text-xs leading-relaxed mb-6 ${
                    tier.highlight ? 'text-zinc-200' : 'text-[var(--muted)]'
                  }`}
                >
                  {tier.description}
                </p>

                <div
                  className={`border-t pt-5 mb-6 ${
                    tier.highlight ? 'border-white/10' : 'border-[var(--line)]'
                  }`}
                >
                  <p
                    className={`text-[11px] font-mono uppercase tracking-wider font-bold mb-3 ${
                      tier.highlight ? 'text-[var(--gold)]' : 'text-[var(--ink)]'
                    }`}
                  >
                    Key Deliverables:
                  </p>
                  <ul className="space-y-2.5">
                    {tier.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className={`text-xs flex items-start gap-2 leading-snug ${
                          tier.highlight ? 'text-zinc-200' : 'text-[var(--ink)]'
                        }`}
                      >
                        <span className="text-[var(--gold)] font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={tier.ctaHref}
                  className={`button w-full text-center block ${
                    tier.highlight
                      ? 'button-gold'
                      : 'button-dark'
                  }`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="section border-t border-[var(--line)]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="eyebrow center">Side-by-Side Comparison</p>
          <h2 className="text-2xl font-serif text-[var(--ink)]">
            Compare all tiers at a glance.
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse bg-white rounded-2xl overflow-hidden border border-[var(--line)] shadow-sm">
            <thead>
              <tr className="border-b border-[var(--line)] bg-[var(--paper2)]">
                <th className="p-4 font-serif text-sm text-[var(--ink)]">Deliverable</th>
                <th className="p-4 font-mono font-bold text-[var(--muted)]">Operating Kit ($29)</th>
                <th className="p-4 font-mono font-bold text-[var(--muted)]">P&amp;L Teardown ($450)</th>
                <th className="p-4 font-mono font-bold text-[var(--gold)] bg-[var(--forest2)] text-white">Turnaround ($2,500)</th>
                <th className="p-4 font-mono font-bold text-[var(--muted)]">AI Build ($7,500)</th>
                <th className="p-4 font-mono font-bold text-[var(--muted)]">Fractional CPO ($10k/mo)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[var(--line)] hover:bg-[var(--paper)] transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'
                  }`}
                >
                  <td className="p-4 font-bold text-[var(--ink)]">{row.feature}</td>
                  <td className="p-4 text-[var(--muted)]">{row.kit}</td>
                  <td className="p-4 text-[var(--muted)]">{row.teardown}</td>
                  <td className="p-4 font-bold text-[var(--ink)] bg-[var(--forest2)]/5">{row.turnaround}</td>
                  <td className="p-4 text-[var(--muted)]">{row.build}</td>
                  <td className="p-4 text-[var(--muted)]">{row.cpo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow center">Common Questions</p>
          <h2 className="text-3xl font-serif text-[var(--ink)] text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-[var(--line)] shadow-sm">
              <h3 className="text-base font-serif font-bold text-[var(--ink)] mb-2">
                What happens after I purchase the $29 Operating Kit?
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                You immediately receive an email with direct download links to the 5 Excel
                and CSV models, plus an invitation link to the Live Browser Workspace at
                richardewing.io/workspace. You own the files for life and receive future
                updates at no additional charge.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[var(--line)] shadow-sm">
              <h3 className="text-base font-serif font-bold text-[var(--ink)] mb-2">
                How quickly can we begin a $2,500 Turnaround Sprint?
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Turnaround sprints begin within 48 to 72 hours of contract execution. I take
                on a maximum of two turnaround sprints per calendar month to guarantee deep,
                focused attention on your telemetry data, code metrics, and gross margins.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[var(--line)] shadow-sm">
              <h3 className="text-base font-serif font-bold text-[var(--ink)] mb-2">
                Do you sign an NDA before inspecting our numbers?
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Yes. A standard mutual non-disclosure agreement is executed before any
                working session, telemetry export, or financial review begins. Your API
                bills, customer data, and proprietary roadmap are kept strictly
                confidential.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[var(--line)] shadow-sm">
              <h3 className="text-base font-serif font-bold text-[var(--ink)] mb-2">
                What if we need a custom scope or M&amp;A due diligence?
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                For private equity sponsors, acquisition due diligence, or bespoke
                enterprise advisory, contact me directly via the inquiry form below to
                discuss specific timelines and terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Ready to Fix Your Product P&amp;L?</p>
        <h2>Start with the data. Protect your margins.</h2>
        <p>
          Whether you need instant worksheets, a 48-hour teardown, or an embedded
          turnaround partner, let&apos;s get to work.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the Reality Check first ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact?subject=Pricing+Inquiry">
            Start a conversation ↗
          </Link>
        </div>
      </section>
    </>
  );
}
