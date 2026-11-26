import type { Metadata } from 'next';
import Link from 'next/link';
import { ExecutiveDefinitionBlock, FrameworkDiagnosticBridge } from '@/components/seo/FrameworkDiagnosticBridge';
import ScorecardCheckoutDrawer from '@/app/components/ScorecardCheckoutDrawer';
import BuyRedirectButton from '@/app/components/client/BuyRedirectButton';

export const metadata: Metadata = {
  title: 'Fixed-Scope Advisory Pricing & Sprints',
  description:
    'Fixed-scope product P&L turnarounds, AI feature pricing sprints, and embedded fractional product leadership with transparent pricing and deliverables.',
  alternates: {
    canonical: 'https://www.richardewing.io/pricing-sprints',
  },
  openGraph: {
    title: 'Pricing & Sprints | Richard Ewing',
    description:
      'Transparent advisory pricing: $29 Operating Kit, $450 P&L Teardown, $2,500 Turnaround Sprint, $7,500 AI Build Sprint, and $10,000/mo Fractional CPO.',
    url: 'https://www.richardewing.io/pricing-sprints',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing & Sprints | Richard Ewing',
    description:
      'Transparent advisory pricing: $29 Operating Kit, $450 P&L Teardown, $2,500 Turnaround Sprint, $7,500 AI Build Sprint, and $10,000/mo Fractional CPO.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
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
    instantBuyHref: '/api/buy/premium_guide_29?source=pricing-sprints-29',
    instantBuyText: 'Instant Stripe Checkout ($29) ↗',
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
    ctaHref: '/schedule?source=pricing-sprints-450',
    instantBuyHref: '/api/buy/gut_check?source=pricing-sprints-450',
    instantBuyText: 'Instant Stripe Checkout ($450) ↗',
    highlight: false,
  },
  {
    id: 'turnaround-sprint',
    badge: 'MOST POPULAR · EXECUTIVE TURNAROUND',
    name: '2-Week Product P&L Turnaround',
    price: '$2,500',
    period: 'fixed-scope sprint',
    description:
      'For B2B SaaS leadership under board pressure to show AI return. We audit feature-level ROI, eliminate token waste, and restructure monetization.',
    timeline: '2-Week Sprint',
    deliverables: [
      'Full cloud & token unit economics audit across production routes',
      'Identification of negative-carry code and silent retry loops',
      'Restructured pricing matrix tied to gross margin floors',
      'Board-ready capital allocation and engineering efficiency deck',
      'Two executive presentation sessions with leadership team',
    ],
    ctaText: 'Request Turnaround Sprint ↗',
    ctaHref: '/schedule?source=pricing-sprints-2500',
    instantBuyHref: '/api/buy/insolvency_diagnostic?source=pricing-sprints-2500',
    instantBuyText: 'Instant Stripe Checkout ($2,500) ↗',
    highlight: true,
  },
  {
    id: 'ai-build-sprint',
    badge: '0-TO-1 PRODUCTION BUILD',
    name: '21-Day AI Build & Launch Sprint',
    price: '$7,500',
    period: 'fixed-scope sprint',
    description:
      'Go from approved concept to shipping production AI software with unit economics, runtime guardrails, and telemetry built in on day one.',
    timeline: '21-Day Sprint',
    deliverables: [
      'Full technical architecture and model routing design',
      'Runtime safety boundaries and deterministic guardrail layer',
      'Cost-per-invocation tracking and latency budgets',
      'Production deployment on edge or modern cloud infrastructure',
      'Documentation, developer handoff, and 30 days support',
    ],
    ctaText: 'Discuss 21-Day Build Sprint ↗',
    ctaHref: '/schedule?source=pricing-sprints-7500',
    instantBuyHref: '/api/buy/full_audit?source=pricing-sprints-7500',
    instantBuyText: 'Instant Stripe Checkout ($7,500) ↗',
    highlight: false,
  },
  {
    id: 'fractional-cpo',
    badge: 'EMBEDDED LEADERSHIP',
    name: 'Embedded Fractional CPO',
    price: '$10,000',
    period: 'per month',
    description:
      'Hands-on product executive leadership for growth-stage companies. Align engineering capacity with revenue, lead the product org, and defend the P&L.',
    timeline: 'Quarterly Retainer',
    deliverables: [
      'Weekly executive staff meetings and board preparation',
      'Ownership of product P&L, gross margin, and roadmap governance',
      'Direct mentoring of Directors of Product and Engineering Leads',
      'Vendor negotiations across AI foundation models and infrastructure',
      'Direct Slack/email access for CEO, CFO, and leadership team',
    ],
    ctaText: 'Inquire About Retainer ↗',
    ctaHref: '/schedule?source=pricing-sprints-retainer',
    highlight: false,
  },
];

export default function PricingSprintsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pricing & Sprints | Richard Ewing',
    description:
      'Fixed-scope product P&L turnarounds, AI feature pricing sprints, and embedded fractional product leadership.',
    url: 'https://www.richardewing.io/pricing-sprints',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Pricing & Sprints', item: 'https://www.richardewing.io/pricing-sprints' },
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
            <i /> Transparent Pricing · Fixed Scopes
          </p>
          <h1>Predictable pricing. Measurable P&amp;L outcomes.</h1>
          <p className="inner-lede">
            No endless consulting hours. Every engagement has a clear scope, fixed dollar
            investment, transparent deliverable checklist, and a verified outcome.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the free Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/advisory">
              Review Advisory Methodology ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE COMMERCIAL CONTRACT</span>
          <strong>Fixed investment. Defined timelines. Zero surprise bills.</strong>
          <p>
            Whether you need a $29 operating kit or a full $2,500 turnaround sprint, you
            know the exact investment and deliverables before we begin.
          </p>
        </aside>
      </section>

      {/* Executive Definition (AEO Featured Snippet Block) */}
      <div className="max-w-[var(--max)] mx-auto px-[5vw] pt-8">
        <ExecutiveDefinitionBlock
          kicker="Executive Definition: Fixed-Scope AI Advisory Sprints"
          definition="Fixed-Scope AI Advisory Sprints are time-boxed, outcome-guaranteed engagements designed for CEOs, CFOs, and CTOs to audit production token burn, eliminate negative-carry feature liabilities, restructure AI SaaS monetization, and ship governed agent systems in 14 to 21 days without open-ended consulting retainers."
        />
      </div>

      {/* Sprint Tiers Grid */}
      <section className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Engagement Options
          </p>
          <h2>Choose the sprint that matches your operational challenge.</h2>
          <p>
            From self-service spreadsheets to hands-on turnaround engineering, every option is
            grounded in 15+ years of software P&amp;L experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sprintTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-8 border flex flex-col justify-between transition-[border-color,box-shadow] duration-300 ${
                tier.highlight
                  ? 'border-[var(--forest)] bg-[#FAF8F3] shadow-lg ring-1 ring-[var(--forest)]'
                  : 'border-[var(--line)] bg-[#FAF8F3] hover:border-[#8d9f8d] hover:shadow-md'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[var(--gold)]">
                    {tier.badge}
                  </span>
                  <span className="text-xs font-mono text-[var(--muted)]">
                    {tier.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-medium text-[var(--ink)] mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-serif font-semibold text-[var(--ink)]">
                      {tier.price}
                    </span>
                    <span className="text-xs font-mono text-[var(--muted)]">
                      / {tier.period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)]">
                  <span className="text-xs font-mono font-bold text-[var(--forest)] uppercase tracking-wider block mb-3">
                    What is delivered:
                  </span>
                  <ul className="space-y-2.5">
                    {tier.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-[#3d4942] flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-[var(--gold)] font-bold flex-none">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[var(--line)] space-y-2.5">
                <Link
                  href={tier.ctaHref}
                  className={`w-full button ${
                    tier.highlight ? 'button-gold' : 'button-outline'
                  } !justify-center`}
                >
                  {tier.ctaText}
                </Link>
                {tier.instantBuyHref && (
                  <BuyRedirectButton
                    href={tier.instantBuyHref}
                    className="block w-full text-center text-xs font-mono font-semibold text-[var(--forest)] hover:text-[var(--ink)] underline underline-offset-4 pt-1"
                  >
                    {tier.instantBuyText}
                  </BuyRedirectButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="section border-t border-[var(--line)]">
        <div className="section-heading mb-10">
          <p className="eyebrow">
            <i /> Side-by-Side Comparison
          </p>
          <h2>Detailed deliverable breakdown by engagement level.</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="border-b border-[var(--line)] text-sm font-serif">
                <th className="py-4 pr-6 font-medium text-[var(--ink)]">Scope Component</th>
                <th className="py-4 px-4 font-medium text-[var(--ink)]">$29 Operating Kit</th>
                <th className="py-4 px-4 font-medium text-[var(--ink)]">$450 Teardown</th>
                <th className="py-4 px-4 font-medium text-[var(--forest)]">$2,500 Sprint</th>
                <th className="py-4 pl-4 font-medium text-[var(--ink)]">$10k/mo Retainer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] text-[#3e4a42]">
              <tr>
                <td className="py-3.5 pr-6 font-medium text-[var(--ink)]">Format</td>
                <td className="py-3.5 px-4">Files &amp; Tools</td>
                <td className="py-3.5 px-4">Live 1-on-1 Call</td>
                <td className="py-3.5 px-4 font-semibold text-[var(--forest)]">2-Week Hands-On Sprint</td>
                <td className="py-3.5 pl-4">Embedded Executive</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-6 font-medium text-[var(--ink)]">Turnaround Time</td>
                <td className="py-3.5 px-4">Instant</td>
                <td className="py-3.5 px-4">48 Hours</td>
                <td className="py-3.5 px-4 font-semibold text-[var(--forest)]">14 Calendar Days</td>
                <td className="py-3.5 pl-4">Quarterly Term</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-6 font-medium text-[var(--ink)]">Production Code &amp; Cloud Audit</td>
                <td className="py-3.5 px-4">Self-guided</td>
                <td className="py-3.5 px-4">Roadmap &amp; Bill Review</td>
                <td className="py-3.5 px-4 font-semibold text-[var(--forest)]">Deep Inspection</td>
                <td className="py-3.5 pl-4">Continuous Governance</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-6 font-medium text-[var(--ink)]">CFO &amp; Board Defense Deck</td>
                <td className="py-3.5 px-4">Template included</td>
                <td className="py-3.5 px-4">Written notes</td>
                <td className="py-3.5 px-4 font-semibold text-[var(--forest)]">Custom Prepared Deck</td>
                <td className="py-3.5 pl-4">Direct Board Presentation</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-6 font-medium text-[var(--ink)]">Direct Executive Access</td>
                <td className="py-3.5 px-4">Community</td>
                <td className="py-3.5 px-4">1 Hour Session</td>
                <td className="py-3.5 px-4 font-semibold text-[var(--forest)]">Daily Slack &amp; 2 Briefings</td>
                <td className="py-3.5 pl-4">Daily Shared Slack Channel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Candid Pre-Sprint Comparison Guides */}
      <div className="max-w-[var(--max)] mx-auto px-[5vw] mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/compare/pass-through-vs-credit-ai-pricing"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              PRICING STRESS CHECK
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              Pass-Through vs. Credit AI Pricing ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              Check if heavy users are draining your monthly profit before repricing.
            </span>
          </Link>
          <Link
            href="/compare/fractional-cpo-vs-advisory-sprint"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              HIRING FIT CHECK
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              Fractional CPO vs. 14-Day Sprint ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              Honest 12-week cost vs. speed breakdown before signing a retainer.
            </span>
          </Link>
          <Link
            href="/advisory/pe-first-100-days-ai"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              PE &amp; BOARD PLAYBOOK
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              First 100 Days of PE AI Value ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              4-question portfolio proof check for Operating Partners and Boards.
            </span>
          </Link>
          <Link
            href="/compare/output-vs-outcome-ai-pricing"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              OUTCOME PRICING CHECK
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              Output vs. Outcome AI Pricing ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              See when charging per finished job wins renewals and when flat fees protect you.
            </span>
          </Link>
          <Link
            href="/advisory/deal-desk-qbr-defense"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              DEAL DESK &amp; QBR DEFENSE
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              Deal Desk &amp; Executive QBR Defense ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              Set hard discount floors and written usage ceilings before sales signs uncapped deals.
            </span>
          </Link>
          <Link
            href="/advisory/ai-red-teaming-ma-dealbreakers"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              PRE-CLOSE DILIGENCE
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              AI Red-Team Tests &amp; M&amp;A Dealbreakers ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              Test a target company&apos;s automated tools for hidden leaks and runaway bills before closing.
            </span>
          </Link>
          <Link
            href="/compare/pricing-when-ai-agents-buy"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              SEAT SHRINKAGE DEFENSE
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              Pricing When AI Agents Buy Software ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              Protect recurring revenue when customers cut paid human logins down by seventy percent.
            </span>
          </Link>
          <Link
            href="/compare/advisory-vs-simon-kucher"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              ENTERPRISE COMPARISON
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              Richard Ewing vs. Simon-Kucher ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              Compare $2,500 14-day operator pricing sprints against six-figure global consulting studies.
            </span>
          </Link>
          <Link
            href="/compare/advisory-vs-monetizely-pricingio"
            className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 hover:border-[var(--forest)] transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
              BOUTIQUE COMPARISON
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mb-1">
              vs. Monetizely &amp; Pricing I/O ↗
            </strong>
            <span className="text-xs text-[var(--muted)]">
              Compare packaging survey boutiques against full product profit and AI cost sprints.
            </span>
          </Link>
        </div>
      </div>

      {/* Bidirectional Diagnostic Tool & Advisory Bridge */}
      <div className="max-w-[var(--max)] mx-auto px-[5vw]">
        <FrameworkDiagnosticBridge
          variant="framework-to-diagnostic"
          slug="pricing-sprints"
          advisorySource="pricing-sprints"
          title="Empirical Diagnostic Proving Grounds"
          subtitle="Pre-Sprint Evaluation · Operational Telemetry"
          primaryTool={{
            name: "AI Reality Check Diagnostic",
            url: "/reality-check",
            badge: "Operational Stress-Test",
            description: "Run a 60-second diagnostic to isolate hidden cloud spend leaks, unmonitored retry loops, and negative-carry features before scoping your sprint."
          }}
        />
        <ScorecardCheckoutDrawer source="pricing-sprints" />
      </div>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Unsure which sprint matches your needs?</h2>
        <p>
          Run the free 60-second Reality Check to calculate your estimated AI waste and
          identify the right operational intervention.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Send an executive inquiry ↗
          </Link>
        </div>
      </section>
    </>
  );
}
