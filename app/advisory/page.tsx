import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FrameworkDiagnosticBridge from '@/components/seo/FrameworkDiagnosticBridge';

export const metadata: Metadata = {
  title: 'AI Advisory Sprints & CFO Cost Audits',
  description:
    'Fixed-scope CFO cost audit sprints and AI feature pricing turnarounds for CEOs, CFOs, and CTOs. Audit LLM spend, R&D waste, and vendor contracts.',
  alternates: {
    canonical: 'https://www.richardewing.io/advisory',
  },
  openGraph: {
    title: 'AI Advisory Sprints & CFO Cost Audits | Richard Ewing',
    description:
      'Fixed-scope CFO cost audit sprints and AI feature pricing turnarounds for CEOs, CFOs, and CTOs. Audit LLM spend, R&D waste, and vendor contracts.',
    url: 'https://www.richardewing.io/advisory',
    type: 'website',
    images: [
      { url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Advisory Sprints & CFO Cost Audits | Richard Ewing',
    description:
      'Fixed-scope CFO cost audit sprints and AI feature pricing turnarounds for CEOs, CFOs, and CTOs. Audit LLM spend, R&D waste, and vendor contracts.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const disciplines = [
  {
    n: '01',
    id: 'pricing-economics',
    tag: 'MONETIZATION & UNIT MARGINS',
    title: 'AI Feature Pricing & Unit Economics',
    subtitle: 'Know what your AI features actually cost to deliver.',
    buyers: 'For CFOs, CPOs, VPs of Product & Directors of Finance',
    body: 'Inference calls, retry loops, and deep context windows break traditional per-seat SaaS margins. I help product and finance leaders model feature-level and customer-level costs, set hard gross-margin floors, and redesign packaging before heavy usage turns into cash burn.',
    bullets: [
      'Token, context-window, and retry cost analysis per customer tier',
      'Seat vs. usage vs. outcome-hybrid pricing and packaging',
      'Model routing and consumption guardrails to stop margin erosion',
      'Commercial business cases for 0-to-1 AI launches ($25M launch pedigree)',
    ],
    deliverable: 'AI Feature Margin Model (.xlsx), repriced tier matrix & 30-day recovery plan',
    toolLabel: 'Run AI Unit Economics Benchmark ↗',
    toolHref: '/tools/aueb',
  },
  {
    n: '02',
    id: 'product-operations',
    tag: 'OPERATING MODEL & DELIVERY VELOCITY',
    title: 'Product Operating Model, Portfolio & Backlog Surgery',
    subtitle: 'Get measurable output from the product and engineering teams you already fund.',
    buyers: 'For CEOs, COOs, VPs of Product, Engineering Managers & Product Ops Leads',
    body: 'AI coding tools generate more pull requests than senior engineers can review, while oversized backlogs and overlapping products stall what actually matters. Drawing on cutting $5M across a 12-product portfolio and clearing 200+ stale initiatives to lift velocity 40%, I rebuild how teams prioritize and ship.',
    bullets: [
      'Keep, sunset, or consolidate decisions across multi-product portfolios',
      'Backlog rationalization to stop team spinning and lift release predictability',
      'Product management methodologies, charters, sprint cadences, and SOPs from scratch',
      'Review-queue bottleneck diagnosis across US, nearshore, and offshore teams',
    ],
    deliverable: 'Portfolio Consolidation Matrix, backlog cut-list & 90-day operating charter',
    toolLabel: 'Calculate Product Debt Index ↗',
    toolHref: '/tools/pdi',
  },
  {
    n: '03',
    id: 'ai-governance',
    tag: 'AGENTIC AI & HUMAN-IN-THE-LOOP',
    title: 'Agentic AI Governance & Operational Controls',
    subtitle: 'Put enforceable boundaries around what autonomous agents can access and do.',
    buyers: 'For CTOs, CIOs, General Counsel, CISOs & Customer Support Managers',
    body: 'Written policies alone will not stop an AI agent from mutating billing records or leaking client data. Grounded in building Exogram.ai from concept to public launch, I help organizations establish source grounding, privacy boundaries, audit trails, and human approval points before agents act.',
    bullets: [
      'Autonomous agent action boundaries and human-in-the-loop escalation gates',
      'Source-grounded answers, memory correction, and tenant privacy isolation',
      'Shadow AI exposure audits and third-party AI vendor risk evaluations',
      'Execution auditability for client-facing, billing, and regulated workflows',
    ],
    deliverable: 'Agent Governance Charter, approval-gate matrix & department operating SOPs',
    toolLabel: 'Audit Agent & MCP Permissions ↗',
    toolHref: '/tools/mcp-security-auditor',
  },
  {
    n: '04',
    id: 'capital-allocation',
    tag: 'P&L, VENDOR SPEND & QBR DEFENSE',
    title: 'Strategic Capital Allocation, Vendor Spend & QBRs',
    subtitle: 'Make technology, vendor, and headcount decisions you can defend to the board.',
    buyers: 'For CEOs, CFOs, Board Directors & Private Equity Operating Partners',
    body: 'Leadership rarely has unlimited capital or headcount. Having owned company-wide P&L across five departments, forecast $1M to $3M+ product budgets, and negotiated $1M+ vendor contracts, I help executives align roadmaps, vendor renewals, and CapEx/OpEx trade-offs with financial reality.',
    bullets: [
      'Build-versus-buy financial business cases and $1M+ vendor contract negotiations',
      'Layered executive roadmaps and C-suite Quarterly Business Reviews (QBRs)',
      'Planned-versus-actual R&D cost tracking, OKR attainment, and headcount defense',
      'Pre-acquisition product and technical debt diligence for PE sponsors',
    ],
    deliverable: 'Executive QBR & Board Capital Defense Deck, vendor audit, or M&A red-flag readout',
    toolLabel: 'Run 60-Second Reality Check ↗',
    toolHref: '/reality-check',
  },
];

const engagementModels = [
  {
    tag: '01 / TIME-BOUND DIAGNOSTICS',
    title: 'Pricing & Turnaround Sprints',
    price: '$2,500 - $7,500',
    unit: '14-day diagnostic or 21-day build',
    featured: false,
    desc: 'Fixed-scope engagements built to diagnose AI unit economics, rationalize a bloated backlog, or ship a governed 0-to-1 AI workflow with zero hourly billing.',
    items: [
      '$2,500 · 14-Day AI Economics & Backlog Turnaround Sprint',
      '$7,500 · 21-Day 0-to-1 Governed AI Product Build Sprint',
      'Financial scenario models, prioritized actions & executive readout',
    ],
    cta: 'Compare Sprint Scopes ↗',
    href: '/pricing-sprints',
  },
  {
    tag: '02 / LEADERSHIP ALIGNMENT',
    title: 'Executive Strategy Workshops',
    price: '$5,000 - $8,000',
    unit: '2-hour session or half-day intensive',
    featured: false,
    desc: 'Focused working sessions that get product, engineering, finance, and operations leaders aligned on the same unit math and investment priorities.',
    items: [
      '$5,000 · Board-Ready Technical & QBR Reporting (2 hours)',
      '$8,000 · R&D Capital Allocation or AI Cost Governance (Half-day)',
      'Documented decision framework and 90-day ownership plan',
    ],
    cta: 'View Workshop Formats ↗',
    href: '/workshops',
  },
  {
    tag: '03 / ONGOING PARTNERSHIP',
    title: 'Executive Retainer & PE Diligence',
    price: '$10,000/mo',
    unit: 'Biweekly advisory or $15K M&A audit',
    featured: true,
    desc: 'Ongoing independent counsel for CEOs, CFOs, CTOs, and CPOs steering portfolio consolidation, PM org design, vendor renewals, or acquisitions.',
    items: [
      'Biweekly strategic decision, roadmap, and pricing reviews',
      'Coaching for Directors of Product and Group Product Managers',
      'Vendor contract reviews, QBR prep, or standalone $15K PE diligence',
    ],
    cta: 'Inquire About Availability ↗',
    href: '/contact#subject=Executive+Advisory+Retainer',
  },
];

const entryOffer = {
  kicker: 'NOT READY FOR A SPRINT? · 48-HOUR TURNAROUND',
  title: 'Start with one working session, $450',
  desc: 'One hour 1-on-1 for a CEO, CFO, or VP of Product on a spiking AI bill, a stalled roadmap, or an upcoming QBR deck. You leave with an immediate cut-list, a written 30-day action memo, and the $79 Playbook Bundle included.',
  cta: 'Book a 60-minute teardown ↗',
  href: '/contact#subject=Executive+Teardown',
};

const approachSteps = [
  {
    n: '01',
    t: 'Understand the economics',
    d: 'Establish what you are spending across engineering, vendors, and AI inference, what it actually produces, and where assumptions fail.',
    href: '/tools/aueb',
  },
  {
    n: '02',
    t: 'Identify the constraints',
    d: 'Pinpoint the backlog bloat, missing product SOPs, review bottlenecks, or unmanaged agent risks holding delivery back.',
    href: '/tools/pdi',
  },
  {
    n: '03',
    t: 'Evaluate the decisions',
    d: 'Force clear trade-offs on what to fund, what to reprice, which overlapping tools to sunset, and where human approval is mandatory.',
    href: '/reality-check',
  },
  {
    n: '04',
    t: 'Establish accountability',
    d: 'Translate findings into layered C-suite roadmaps, QBR KPIs, and named owners tied to measurable margin and velocity gains.',
    href: '/case-studies',
  },
];

const outlets = [
  'CIO.com',
  'Built In',
  'Mind the Product',
  'HackerNoon',
  'LinkedIn',
  'Beehiiv',
];

export default function AdvisoryPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Executive Advisory for AI, Product & Technology Leaders',
    provider: {
      '@type': 'Person',
      name: 'Richard Ewing',
      jobTitle: 'Product & AI Economist',
      url: 'https://www.richardewing.io/about',
    },
    description:
      'Executive product, P&L, portfolio, and AI governance advisory for CEOs, CFOs, CTOs, and product leaders.',
    url: 'https://www.richardewing.io/advisory',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Executive Advisory Engagements',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '14-Day AI Economics & Backlog Turnaround Sprint',
          sku: 'RW-SPRINT-2500',
          price: '2500.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://www.richardewing.io/advisory',
        },
        {
          '@type': 'Offer',
          name: 'Pricing & Turnaround Sprints',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: '2500',
            maxPrice: '7500',
            priceCurrency: 'USD',
          },
          url: 'https://www.richardewing.io/pricing-sprints',
        },
        {
          '@type': 'Offer',
          name: 'Executive Strategy Workshops',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: '5000',
            maxPrice: '8000',
            priceCurrency: 'USD',
          },
          url: 'https://www.richardewing.io/workshops',
        },
        {
          '@type': 'Offer',
          name: 'Executive Retainer & PE Diligence',
          price: '10000',
          priceCurrency: 'USD',
          url: 'https://www.richardewing.io/contact#subject=Executive+Advisory+Retainer',
        },
        {
          '@type': 'Offer',
          name: 'Executive Teardown Session',
          price: '450',
          priceCurrency: 'USD',
          url: 'https://www.richardewing.io/contact#subject=Executive+Teardown',
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Advisory',
        item: 'https://www.richardewing.io/advisory',
      },
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

      {/* 01. INNER HERO - Mirrors Homepage & About Clean Editorial Rhythm */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Executive Advisory · Product, P&amp;L &amp; AI Governance
          </p>
          <h1>Turn technology and AI spend into measurable business value.</h1>
          <p className="inner-lede">
            More AI activity and more code do not automatically produce better margins or
            faster launches. I work with CEOs, CFOs, CTOs, and product leaders to connect
            product strategy with financial reality, disciplined operations, and accountable
            execution.
          </p>

          <div className="actions">
            <Link className="button button-gold" href="/schedule?source=advisory">
              Schedule an executive call ↗
            </Link>
            <Link className="button button-outline" href="/reality-check">
              Run the free Reality Check
            </Link>
          </div>

          <div className="proof-mini">
            <span>
              $25M
              <small>0-to-1 ERP launch</small>
            </span>
            <span>
              $5M cut
              <small>portfolio consolidated</small>
            </span>
            <span>
              +40%
              <small>delivery velocity lift</small>
            </span>
            <span>
              15+ yrs
              <small>P&amp;L &amp; product leadership</small>
            </span>
          </div>
        </div>

        <aside className="inner-aside glass">
          <div className="w-full h-48 rounded-md overflow-hidden relative mb-4">
            <Image
              src="/assets/images/richard-discussion.jpg"
              alt="Richard Ewing in executive advisory discussion"
              fill
              className="object-cover"
            />
          </div>
          <span>OPERATOR ADVISORY PRACTICE</span>
          <strong>Operating scars, not abstract consulting slides.</strong>
          <p>
            Grounded in leading a 12-product portfolio at Moss Adams, owning 5-department
            P&amp;L at Sechrist Design, launching a $25M ERP at Tyler Technologies, and
            building Exogram.ai from zero.
          </p>
        </aside>
      </section>

      {/* 02. CORE ADVISORY DISCIPLINES - Clean 2x2 Architectural Cards (8px radius) */}
      <section id="disciplines" className="section">
        <div className="section-heading">
          <p className="eyebrow">
            <i /> Core advisory services
          </p>
          <h2>Four disciplines where value is created or lost.</h2>
          <p>
            Each discipline maps directly to seats I have held as a Head of Product, Group
            Product Manager, Director of Operations, and AI platform founder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          {disciplines.map((d) => (
            <article
              key={d.id}
              id={d.id}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-lg p-7 sm:p-8 flex flex-col justify-between transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-[0.13em] uppercase text-[var(--gold)] font-medium">
                    {d.n} / {d.tag}
                  </span>
                </div>

                <h3 className="font-serif text-[26px] leading-[1.18] font-medium text-[var(--ink)] mb-1.5">
                  {d.title}
                </h3>
                <p className="text-[13.5px] font-semibold text-[var(--forest)] mb-2">
                  {d.subtitle}
                </p>
                <p className="font-mono text-[10.5px] text-[var(--muted)] mb-4">
                  {d.buyers}
                </p>

                <p className="text-[13px] leading-[1.75] text-[var(--muted)] mb-5">
                  {d.body}
                </p>

                <div className="border-t border-[var(--line)] pt-4 mb-5 space-y-2">
                  {d.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-start gap-2.5 text-[12.5px] text-[var(--ink)] leading-relaxed"
                    >
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[var(--line)] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-[12px] text-[var(--muted)]">
                  <strong className="text-[var(--ink)]">You receive:</strong> {d.deliverable}
                </div>
                <Link
                  href={d.toolHref}
                  className="text-[12px] font-semibold text-[var(--forest)] border-b border-[var(--gold)] pb-0.5 whitespace-nowrap self-start sm:self-auto"
                >
                  {d.toolLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03. ENGAGEMENT MODELS - Full-Bleed Warm Paper Band Leading With Sprints */}
      <div id="offerings" className="bg-[var(--paper2)] border-y border-[var(--line)]">
        <section id="pricing" className="section">
          <div className="section-heading">
            <p className="eyebrow">
              <i /> Engagement models &amp; fees
            </p>
            <h2>Fixed-Scope CFO Cost Audit Sprints vs Ongoing Retainers</h2>
            <p>
              The four disciplines above are what we solve. Fixed-scope sprints carry a locked fee,
              clear deliverable dates, and zero billing creep compared with open-ended monthly
              retainers, so CFOs and CEOs can approve measurable payback before committing longer
              capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {engagementModels.map((m) => (
              <div
                key={m.title}
                className={`border rounded-lg p-6 lg:p-7 bg-[#faf8f2] flex flex-col justify-between transition-shadow hover:shadow-md ${
                  m.featured ? 'border-[var(--forest)]' : 'border-[var(--line)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] font-medium">
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-[24px] leading-[1.18] font-medium text-[var(--ink)] m-0">
                    {m.title}
                  </h3>

                  <div className="mt-2 mb-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="font-serif text-[25px] font-semibold text-[var(--forest)]">
                      {m.price}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">
                      {m.unit}
                    </span>
                  </div>

                  <p className="text-[13px] leading-[1.7] text-[var(--muted)] mb-5">
                    {m.desc}
                  </p>

                  <div className="border-t border-[var(--line)] pt-4 mb-6 space-y-2">
                    {m.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-[12.5px] text-[var(--ink)] leading-relaxed"
                      >
                        <span className="text-[var(--gold)] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link className="button button-dark w-full justify-center" href={m.href}>
                    {m.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <aside
            aria-label="Single-session entry option"
            className="mt-5 border border-[var(--line)] rounded-lg bg-[#faf8f2] p-6 sm:p-7 flex flex-col items-start gap-4"
          >
            <div className="max-w-2xl space-y-1.5">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block font-medium">
                {entryOffer.kicker}
              </span>
              <h3 className="font-serif text-[22px] leading-[1.2] font-medium text-[var(--ink)] m-0">
                {entryOffer.title}
              </h3>
              <p className="text-[12.5px] leading-[1.7] text-[var(--muted)] m-0">
                {entryOffer.desc}
              </p>
            </div>
            <Link
              className="button button-outline w-full sm:w-auto justify-center"
              href={entryOffer.href}
            >
              {entryOffer.cta}
            </Link>
          </aside>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 border-t border-[var(--line)] text-[12.5px] text-[var(--muted)]">
            <span>
              Prefer to run the math internally first? Use the self-serve spreadsheets in the{' '}
              <strong className="text-[var(--ink)]">$29 Operating Kit</strong> or explore{' '}
              <strong className="text-[var(--ink)]">45 free calculators</strong>.
            </span>
            <div className="flex gap-5 shrink-0">
              <Link href="/toolkit" className="text-link mt-0">
                $29 Operating Kit ↗
              </Link>
              <Link href="/tools" className="text-link mt-0">
                Browse 45 Tools ↗
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 04. HOW I APPROACH THE WORK - Mirrors Homepage .split-section + .path-list */}
      <section id="approach" className="section split-section">
        <div className="section-heading">
          <p className="eyebrow">
            <i /> How I approach the work
          </p>
          <h2>Better decisions. Measurable outcomes. Accountable execution.</h2>
          <p>
            I have led a 12-product enterprise portfolio, managed multi-million-dollar
            budgets, reduced $5M in spend through portfolio consolidation, lifted delivery
            velocity 40%, owned company-wide P&amp;L across five departments, commercialized a
            $25M 0-to-1 ERP product, and built Exogram.ai solo from concept to public launch.
          </p>
          <div className="flex flex-wrap gap-6 mt-2">
            <Link className="text-link" href="/portfolio">
              Inspect full portfolio ↗
            </Link>
            <Link className="text-link" href="/case-studies">
              Read 7 verified case studies ↗
            </Link>
          </div>
        </div>

        <div className="path-list">
          {approachSteps.map((x) => (
            <Link href={x.href} className="path-row" key={x.n}>
              <span>{x.n}</span>
              <div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      {/* 05. PUBLICATION BAND - Exact Homepage Pattern */}
      <section className="publication-band">
        <div>
          <p className="eyebrow">Published perspective</p>
          <h2>174+ essays on AI economics, product ops, and governance.</h2>
          <p>
            Including Built In Editors&apos; Picks and CIO.com columns read by CEOs, CFOs,
            CTOs, and VPs of Product before they book an engagement.
          </p>
          <Link className="button button-dark" href="/research/publications">
            Explore publications ↗
          </Link>
        </div>

        <div className="publication-logos">
          {outlets.map((x) => (
            <strong key={x}>{x}</strong>
          ))}
        </div>
      </section>

      {/* 06. PRE-ADVISORY DIAGNOSTIC BRIDGE (Outside .section to preserve h2 scale) */}
      <div className="max-w-[1320px] mx-auto px-[5vw] py-6">
        <FrameworkDiagnosticBridge
          variant="framework-to-diagnostic"
          slug="pricing-sprints"
          advisorySource="advisory"
          title="Stress-Test Your AI Margins Before Booking a Call"
          subtitle="Free Pre-Advisory Diagnostic"
          primaryTool={{
            name: 'AI Unit Economics Benchmark (AUEB)',
            url: '/tools/aueb',
            badge: 'Interactive Benchmark',
            description:
              'Model your inference costs per customer tier or check your Technical Insolvency Date free before scheduling an engagement.',
          }}
        />
      </div>

      {/* 07. CLOSING CTA - Exact Homepage Pattern */}
      <section className="closing-cta">
        <p className="eyebrow">A clear next step</p>
        <h2>Connect technology strategy with financial reality.</h2>
        <p>
          Start with the free 60-second Reality Check or reach out directly to discuss an
          advisory sprint, workshop, or executive mandate.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/contact">
            Discuss an engagement ↗
          </Link>
          <Link className="button button-ghost-light" href="/reality-check">
            Run the free Reality Check
          </Link>
        </div>
      </section>
    </>
  );
}
