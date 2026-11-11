import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FrameworkDiagnosticBridge, {
  ExecutiveDefinitionBlock,
} from '@/components/seo/FrameworkDiagnosticBridge';
import { QuoteBlock } from '@/components/editorial/QuoteBlock';

export const metadata: Metadata = {
  title: 'Executive Advisory & AI Economics Sprints',
  description:
    'Executive advisory, AI feature pricing sprints, portfolio surgery, and runtime governance controls for CEOs, CFOs, CTOs, and CPOs. View fees and scopes.',
  alternates: {
    canonical: 'https://www.richardewing.io/advisory',
  },
  openGraph: {
    title: 'Executive Advisory & AI Economics Sprints | Richard Ewing',
    description:
      'Executive advisory, AI feature pricing sprints, portfolio surgery, and runtime governance controls for CEOs, CFOs, CTOs, and CPOs. View fees and scopes.',
    url: 'https://www.richardewing.io/advisory',
    type: 'website',
    images: [
      { url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Advisory & AI Economics Sprints | Richard Ewing',
    description:
      'Executive advisory, AI feature pricing sprints, portfolio surgery, and runtime governance controls for CEOs, CFOs, CTOs, and CPOs. View fees and scopes.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const disciplines = [
  {
    number: '01',
    id: 'pricing-economics',
    tag: 'MONETIZATION & INFERENCE COGS',
    title: 'AI Feature Pricing & Unit Economics',
    subtitle: 'Know what your AI products actually cost to deliver before power users eat your gross margin.',
    buyers: 'CFO · Chief Product Officer · Director of Finance · VP of Monetization',
    tension:
      'Flat per-seat SaaS pricing breaks the week your heaviest 5% of customers trigger multi-step agent loops, oversized retrieval windows, and silent API retries. Usage climbs, product teams celebrate adoption, and finance watches gross margin drop twelve points in a single quarter.',
    addresses: [
      'Token, context-window, and retry-loop cost attribution per feature and customer tier',
      'Seat vs. usage credit vs. outcome-hybrid packaging with hard gross margin floors',
      'Frontier LLM vs. small-model routing and prompt-caching break-even math',
      'Enterprise contract minimums, rate limits, and renewal repricing guardrails',
    ],
    artifact:
      'Live-formula Excel AI Feature Margin Stress-Tester, repriced customer tier matrix, and written 30-day margin recovery plan.',
    outcome:
      'AI features structured to expand net revenue retention rather than subsidize foundation model vendors.',
    toolLabel: 'Test Your Margin Floor in AUEB ↗',
    toolHref: '/tools/aueb',
  },
  {
    number: '02',
    id: 'engineering-efficiency',
    tag: 'PORTFOLIO & DELIVERY ECONOMICS',
    title: 'Engineering Efficiency & Portfolio Surgery',
    subtitle: 'Recover the engineering payroll currently trapped inside dead backlog and review bottlenecks.',
    buyers: 'CEO · COO · CPO · VP of Engineering · Engineering Manager · Product Ops Lead',
    tension:
      'Giving developers AI coding assistants makes code generation faster, yet customer-facing launches still slip. When 60%+ of sprints go toward keeping low-adoption legacy products alive, reviewing noisy pull requests, and untangling cross-team dependencies, typing speed is never the real constraint.',
    addresses: [
      'Keep / Sunset / Consolidate portfolio rationalization (grounded in cutting $5M in enterprise portfolio spend)',
      'Backlog surgery to clear stale initiatives (modeled on cutting 200+ dead items to lift velocity 40%)',
      'Code review queue bottlenecks, post-AI verification load, and planned-vs-actual R&D cost',
      'Operating cadence and ownership boundaries across US, nearshore, and offshore squads',
    ],
    artifact:
      'Zombie Feature Kill-List & Capacity Reallocation Ledger, delivery bottleneck diagnosis, and accountable 90-day roadmap.',
    outcome:
      '20% to 40% of existing engineering capacity redirected back into revenue-generating roadmap work without adding headcount.',
    toolLabel: 'Calculate Product Debt Index (PDI) ↗',
    toolHref: '/tools/pdi',
  },
  {
    number: '03',
    id: 'ai-governance',
    tag: 'RUNTIME CONTROLS & RISK BOUNDARIES',
    title: 'Deterministic AI Governance & Agent Controls',
    subtitle: 'Put code-enforced boundaries around what AI assistants, MCP tools, and autonomous agents can touch.',
    buyers: 'CTO · CIO · COO · General Counsel · CISO · Customer Support Manager',
    tension:
      'A written PDF policy will not stop an autonomous support agent from issuing unauthorized refunds, leaking tenant records across namespaces, or mutating a production CRM. Once AI moves from chatting to taking actions, governance becomes a runtime systems problem.',
    addresses: [
      'Pre-execution action gates (ALLOW / BLOCK / ESCALATE) grounded in architecting Exogram AI and EAAP RFC-0001',
      'Human approval and escalation thresholds for Customer Support Managers, Finance Ops, and RevOps teams',
      'Shadow AI discovery, Model Context Protocol (MCP) permission scoping, and vendor data-retention audits',
      'Cryptographic audit trails, PII air-gaps, and EU AI Act / enterprise security review readiness',
    ],
    artifact:
      'Deterministic Agent Admissibility Charter, Shadow AI & MCP exposure register, and department-by-department operating SOPs.',
    outcome:
      'Autonomous workflows that ship faster because leadership, legal, and enterprise buyers can verify every execution boundary.',
    toolLabel: 'Run MCP & Agent Security Audit ↗',
    toolHref: '/tools/mcp-security-auditor',
  },
  {
    number: '04',
    id: 'capital-allocation',
    tag: 'BOARD DEFENSE & M&A DILIGENCE',
    title: 'R&D Capital Allocation, PE Diligence & 0-to-1 Launch',
    subtitle: 'Make software, vendor, and acquisition bets you can defend under hostile boardroom questioning.',
    buyers: 'CEO · CFO · Board Directors · PE Operating Partners · Corp Dev Leads',
    tension:
      'Boards and investment committees are finished funding vague AI roadmaps on faith. Whether you are defending next year\'s R&D budget, commercializing a new enterprise product from zero, or acquiring a SaaS target carrying hidden technical debt, every assumption has to tie back to cash flow.',
    addresses: [
      'Build-versus-buy financial modeling and $1M+ cloud / AI vendor contract negotiations',
      'Pre-acquisition technical and product debt due diligence for Private Equity sponsors and buyers',
      '0-to-1 product commercialization, alpha/beta validation, pricing, and enterprise SLAs ($25M launch pedigree)',
      'Section 174 R&D capitalization alignment, quarterly business reviews (QBRs), and board defense materials',
    ],
    artifact:
      '12-Slide CFO & Board Capital Defense Deck, Keep/Stop investment model, or Pre-Close M&A Technical Diligence Dossier.',
    outcome:
      'Capital committed to initiatives that earn their cost of capital, and weak bets stopped before they burn another two quarters.',
    toolLabel: 'Run 60-Second Reality Check ↗',
    toolHref: '/reality-check',
  },
];

const engagementTiers = [
  {
    badge: '48-HOUR TURNAROUND',
    name: 'Executive P&L & Architecture Teardown',
    price: '$450',
    cadence: '60-min 1-on-1 working session',
    summary:
      'Fast, surgical working session for a CEO, CFO, CPO, or Engineering Manager facing an urgent AI API bill spike, a stuck launch, or a high-stakes board review.',
    deliverables: [
      'Live 60-minute teardown of your AI unit costs, pricing tiers, or product backlog',
      'Immediate cut-list to stop negative-margin usage loops or dead sprint work',
      'Written 30-day action memo delivered within 48 hours',
      'Includes the $79 Complete Executive Playbook & Spreadsheet Bundle free',
    ],
    ctaLabel: 'Book 60-Min Teardown ($450) ↗',
    ctaHref: '/contact#subject=P%26L+Teardown',
    featured: false,
  },
  {
    badge: 'MOST BOOKED · FIXED-SCOPE SPRINTS',
    name: 'Diagnostic & Production Build Sprints',
    price: '$2,500 - $7,500',
    cadence: '14-day or 21-day fixed fee',
    summary:
      'Time-boxed engagements with zero open-ended hourly billing, scoped to fix a margin problem before next QBR or ship a governed 0-to-1 AI workflow.',
    deliverables: [
      '$2,500 · 14-Day Product P&L Turnaround: Token COGS audit, backlog surgery, repriced tier matrix, and two leadership readouts',
      '$7,500 · 21-Day 0-to-1 AI Build Sprint: Ship a live production AI system with model routing, cost caps, and runtime guardrails',
      'Working Excel financial scenarios and architecture handoff documentation',
      'Designed to pay for itself inside a single quarterly budget cycle',
    ],
    ctaLabel: 'Compare Sprint Scopes ↗',
    ctaHref: '/pricing-sprints',
    featured: true,
  },
  {
    badge: 'TEAM ALIGNMENT · 2 HR TO HALF-DAY',
    name: 'Executive Strategy Workshops',
    price: '$5,000 - $8,000',
    cadence: '5 to 30 leaders · live facilitation',
    summary:
      'Structured working sessions that put product, engineering, finance, and operations leaders in the same room using the same financial math.',
    deliverables: [
      '$5,000 · Board-Ready Technical Reporting (2-hour executive session for CTOs, CPOs, and VPs)',
      '$8,000 · R&D Capital Allocation or AI Cost Governance Masterclass (4-hour half-day intensive)',
      'Pre-session intake of your roadmap, vendor stack, and gross margin structure',
      'Documented decision charter and 90-day owner assignments',
    ],
    ctaLabel: 'Explore Workshop Formats ↗',
    ctaHref: '/workshops',
    featured: false,
  },
  {
    badge: 'ONGOING FIDUCIARY & M&A OVERSIGHT',
    name: 'Embedded Advisory & PE Diligence',
    price: '$10,000/mo',
    cadence: 'Quarterly retainer · $15K M&A audit',
    summary:
      'Independent operator bench strength for CEOs, CFOs, and Private Equity sponsors navigating organizational change, vendor renewals, or acquisitions.',
    deliverables: [
      'Biweekly or weekly executive decision reviews, QBR prep, and board defense',
      'Direct coaching for Directors of Product, Group PMs, and Engineering Leads',
      'Independent evaluation of $1M+ cloud, SaaS, and foundation model contracts',
      'Available as a $15,000 standalone Pre-Acquisition PE Technical & Product Debt Audit',
    ],
    ctaLabel: 'Inquire About Retainer ↗',
    ctaHref: '/contact#subject=Fractional+CPO+Inquiry',
    featured: false,
  },
];

const operatingSteps = [
  {
    step: '01',
    title: 'Audit the real unit math',
    body: 'We start with actual invoices, token logs, sprint allocations, and customer contract terms rather than slide-deck averages. Most margin leaks hide inside power-user tails and untracked maintenance work.',
  },
  {
    step: '02',
    title: 'Isolate the real bottleneck',
    body: 'We pinpoint whether business value is stalling inside unpriced AI consumption, oversized backlogs, slow code-review queues, departmental handoffs, or unenforced agent permissions.',
  },
  {
    step: '03',
    title: 'Force clear capital trade-offs',
    body: 'No company has infinite capital or engineering hours. We separate products and AI bets that earn a defensible return from legacy commitments that need to be repriced, consolidated, or stopped.',
  },
  {
    step: '04',
    title: 'Hand over working models and owners',
    body: 'You never get a 90-page theoretical PDF that gathers dust. Every engagement ends with live spreadsheets, enforceable runtime rules, and named 30/60/90-day execution owners.',
  },
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
    serviceType: [
      'AI Feature Pricing & Unit Economics',
      'Engineering Efficiency & Portfolio Rationalization',
      'Deterministic AI Governance & Agent Risk Controls',
      'R&D Capital Allocation & PE Technical Diligence',
    ],
    description:
      'Fixed-scope sprints, strategy workshops, and ongoing executive advisory connecting AI and software investment with P&L performance, engineering velocity, and runtime governance.',
    url: 'https://www.richardewing.io/advisory',
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

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Executive Advisory · Product, P&amp;L &amp; AI Governance
          </p>
          <h1>Turn AI and software spend into margins your CFO can defend.</h1>
          <p className="inner-lede">
            Shipping AI features and buying developer copilots is the easy part. Explaining
            to your CEO, CFO, and Board why gross margins compressed while roadmap dates kept
            slipping is where leadership teams get stuck. I work with executives to connect
            product strategy, engineering capacity, and AI architecture to real financial
            outcomes.
          </p>

          <ExecutiveDefinitionBlock
            kicker="Operating Mandate: Operator-Led Advisory"
            definition="My advisory practice draws on 15+ years of operating leadership (scaling a 0-to-1 enterprise ERP to $25M, cutting $5M in portfolio spend across 12 products, owning company-wide P&L across 5 departments) paired with hands-on experience architecting live conversational AI and deterministic agent control planes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-4">
            {disciplines.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--ink)] bg-white/75 border border-[var(--line)] rounded-lg px-3.5 py-2.5 hover:border-[var(--forest)] transition-colors"
              >
                <span className="font-mono text-[11px] font-bold text-[var(--gold)]">
                  {d.number}
                </span>
                <span className="font-medium">{d.title}</span>
              </a>
            ))}
          </div>

          <div className="actions">
            <Link className="button button-gold" href="/schedule?source=advisory">
              Schedule Executive Consult ↗
            </Link>
            <Link className="button button-outline" href="/reality-check">
              Start with Free Reality Check
            </Link>
            <Link className="button button-outline" href="/contact">
              Discuss Custom Scope
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass space-y-4">
          <div className="w-full h-44 rounded-lg overflow-hidden relative">
            <Image
              src="/assets/images/richard-discussion.jpg"
              alt="Richard Ewing advising software executives on AI unit economics and portfolio governance"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="bg-white/80 border border-[var(--line)] rounded-lg p-2.5">
              <div className="font-serif text-lg font-bold text-[var(--forest)]">$25M</div>
              <div className="text-[10px] font-mono text-[var(--muted)] uppercase">
                0-to-1 ERP Launch
              </div>
            </div>
            <div className="bg-white/80 border border-[var(--line)] rounded-lg p-2.5">
              <div className="font-serif text-lg font-bold text-[var(--forest)]">$5M Cut</div>
              <div className="text-[10px] font-mono text-[var(--muted)] uppercase">
                Portfolio Rationalized
              </div>
            </div>
            <div className="bg-white/80 border border-[var(--line)] rounded-lg p-2.5">
              <div className="font-serif text-lg font-bold text-[var(--forest)]">+40%</div>
              <div className="text-[10px] font-mono text-[var(--muted)] uppercase">
                Delivery Velocity Lift
              </div>
            </div>
            <div className="bg-white/80 border border-[var(--line)] rounded-lg p-2.5">
              <div className="font-serif text-lg font-bold text-[var(--forest)]">3 Live</div>
              <div className="text-[10px] font-mono text-[var(--muted)] uppercase">
                AI Platforms Built
              </div>
            </div>
          </div>

          <blockquote className="text-xs italic text-[var(--ink)] leading-relaxed font-serif pt-2 border-t border-[var(--line)]">
            &ldquo;Richard brings a rare combination of product, engineering, and P&amp;L
            ownership to high-stakes AI decisions.&rdquo;
          </blockquote>
          <div className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-wider">
            Executive Client · Enterprise B2B SaaS
          </div>
        </aside>
      </section>

      {/* Section 1: The 4 Core Advisory Disciplines */}
      <section id="disciplines" className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Core Advisory Disciplines
          </p>
          <h2>Four operational problems I solve with leadership teams.</h2>
          <p>
            Most organizations do not suffer from a lack of AI ideas. They suffer from
            unpriced inference consumption, overloaded engineering backlogs, ungoverned agent
            permissions, and capital commitments nobody can defend at quarterly review.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {disciplines.map((d) => (
            <article
              key={d.id}
              id={d.id}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:border-[var(--forest)] hover:shadow-md transition-shadow"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] pb-4">
                  <span className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-widest">
                    {d.number} · {d.tag}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--forest)] bg-[var(--forest)]/10 border border-[var(--forest)]/20 px-2.5 py-0.5 rounded uppercase">
                    Executive Discipline
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--forest)] leading-snug">
                    {d.subtitle}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-[var(--muted)] bg-white/80 border border-[var(--line)] rounded-lg px-3.5 py-2">
                  <strong className="text-[var(--ink)] uppercase mr-1.5">Built For:</strong>
                  {d.buyers}
                </div>

                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {d.tension}
                </p>

                <div className="border-t border-[var(--line)] pt-4">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink)] mb-2.5">
                    What We Address:
                  </div>
                  <ul className="space-y-2">
                    {d.addresses.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-zinc-800 leading-relaxed"
                      >
                        <span className="text-[var(--gold)] font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-[var(--line)] rounded-xl p-4 space-y-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block">
                      Boardroom Deliverable:
                    </span>
                    <p className="text-xs text-[var(--ink)] font-medium leading-relaxed mt-0.5">
                      {d.artifact}
                    </p>
                  </div>
                  <div className="pt-1.5 border-t border-[var(--line)]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--forest)] block">
                      Target Outcome:
                    </span>
                    <p className="text-xs text-[var(--muted)] leading-relaxed mt-0.5">
                      {d.outcome}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-[var(--line)]">
                <Link
                  href={d.toolHref}
                  className="text-xs font-semibold text-[var(--forest)] hover:text-[var(--gold)] transition-colors"
                >
                  {d.toolLabel}
                </Link>
                <Link
                  href={`/contact#subject=${encodeURIComponent(d.title)}`}
                  className="button button-outline text-xs py-2 px-4"
                >
                  Scope This Discipline ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 2: Commercial Distinction - Engagement Models & Transparent Pricing */}
      <section
        id="offerings"
        className="section bg-[#ebe7dc]/60 border-y border-[var(--line)]"
      >
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Engagement Models &amp; Transparent Fees
          </p>
          <h2>How leadership teams buy this expertise.</h2>
          <p>
            The four disciplines above define what we fix. Below are the four fixed-scope
            ways clients engage me, structured around the urgency of the decision and the
            depth of intervention required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engagementTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 flex flex-col justify-between ${
                tier.featured
                  ? 'bg-[var(--forest2)] border-[var(--forest)] text-white shadow-lg'
                  : 'bg-[#faf8f2] border-[var(--line)] text-[var(--ink)]'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                      tier.featured ? 'text-[#d8c7a8]' : 'text-[var(--gold)]'
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${
                      tier.featured
                        ? 'bg-white/10 border-white/15 text-zinc-200'
                        : 'bg-white border-[var(--line)] text-[var(--muted)]'
                    }`}
                  >
                    {tier.cadence}
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                  <h3
                    className={`font-serif text-2xl font-medium ${
                      tier.featured ? 'text-white' : 'text-[var(--ink)]'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <span
                    className={`font-serif text-2xl sm:text-3xl font-bold ${
                      tier.featured ? 'text-[#d8c7a8]' : 'text-[var(--forest)]'
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    tier.featured ? 'text-zinc-300' : 'text-[var(--muted)]'
                  }`}
                >
                  {tier.summary}
                </p>

                <div
                  className={`space-y-2.5 border-t pt-4 mb-6 ${
                    tier.featured ? 'border-white/15' : 'border-[var(--line)]'
                  }`}
                >
                  {tier.deliverables.map((item) => (
                    <div
                      key={item}
                      className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                        tier.featured ? 'text-zinc-200' : 'text-zinc-800'
                      }`}
                    >
                      <span
                        className={`font-bold mt-0.5 ${
                          tier.featured ? 'text-[#d8c7a8]' : 'text-[var(--gold)]'
                        }`}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  className={`button w-full text-center ${
                    tier.featured ? 'button-gold' : 'button-dark'
                  }`}
                  href={tier.ctaHref}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Self-Serve On-Ramp Bar */}
        <div className="mt-8 bg-white border border-[var(--line)] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--gold)] block mb-1">
              Not Ready for Live Advisory Yet?
            </span>
            <p className="text-xs sm:text-sm text-[var(--ink)] m-0">
              Download the 5 P&amp;L spreadsheets and CFO defense templates yourself in the{' '}
              <strong>$29 Operating Kit</strong>, or test your numbers across{' '}
              <strong>45 interactive diagnostic calculators</strong>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/toolkit" className="button button-outline text-xs py-2 px-4">
              $29 Operating Kit ↗
            </Link>
            <Link href="/tools" className="button button-outline text-xs py-2 px-4">
              45 Free Calculators ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: How I Approach the Work + Operator vs Consultancy Wedge */}
      <section id="approach" className="section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="eyebrow">
                <i /> Operating Method
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[var(--ink)] mt-2 mb-3">
                Grounded in operating scars, not slide-deck theory.
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                I advise from seats I have actually held: leading a 12-product enterprise
                portfolio at Moss Adams, owning company-wide P&amp;L across 5 departments at
                Sechrist Design, commercializing a $25M 0-to-1 ERP product at Tyler
                Technologies, and architecting Exogram AI and CareerWin from scratch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {operatingSteps.map((s) => (
                <div
                  key={s.step}
                  className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5 space-y-2"
                >
                  <span className="font-mono text-xs font-bold text-[var(--gold)]">
                    STEP {s.step}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <QuoteBlock
              quote="AI should improve the economics of the products and teams adopting it, not introduce inference bills and agent liabilities that leadership cannot explain to the board."
              attribution="Richard Ewing"
              source="Product & AI Economist · Founder of Exogram AI"
              variant="paper"
            />
          </div>

          <div className="lg:col-span-5 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-7 space-y-5">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--gold)] block mb-1">
                Why Clients Switch
              </span>
              <h3 className="font-serif text-2xl font-medium text-[var(--ink)]">
                Where an operator-builder fits between strategy firms and dev shops.
              </h3>
            </div>

            <div className="space-y-4 text-xs leading-relaxed">
              <div className="bg-white border border-[var(--line)] rounded-xl p-4">
                <strong className="text-[var(--ink)] block mb-1">
                  vs. Big-4 &amp; Strategy Consultancies
                </strong>
                <p className="text-[var(--muted)] m-0">
                  Strategy firms charge $250K+ for junior analysts learning AI on your dime.
                  You work directly with a principal who has defended budgets and written
                  production runtime controls.{' '}
                  <Link
                    href="/compare/advisory-vs-mckinsey"
                    className="text-[var(--forest)] font-semibold underline"
                  >
                    Compare approach ↗
                  </Link>
                </p>
              </div>

              <div className="bg-white border border-[var(--line)] rounded-xl p-4">
                <strong className="text-[var(--ink)] block mb-1">
                  vs. Pure Engineering Advisors
                </strong>
                <p className="text-[var(--muted)] m-0">
                  Pure technical fractional CTOs optimize infrastructure without fixing
                  broken product packaging, customer churn, or Section 174 capital exposure.{' '}
                  <Link
                    href="/compare/advisory-vs-traditional-fractional-cto"
                    className="text-[var(--forest)] font-semibold underline"
                  >
                    See difference ↗
                  </Link>
                </p>
              </div>

              <div className="bg-[var(--forest2)] text-white rounded-xl p-4">
                <strong className="text-[#d8c7a8] block mb-1">
                  Inspect Verified Proof Before You Book
                </strong>
                <p className="text-zinc-300 m-0">
                  Review live AI platforms built from zero on the{' '}
                  <Link href="/portfolio" className="text-white font-semibold underline">
                    Executive Portfolio
                  </Link>{' '}
                  or inspect employer-verified turnarounds on{' '}
                  <Link href="/case-studies" className="text-white font-semibold underline">
                    Case Studies
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Surface Diagnostic Bridge */}
      <section className="section bg-white border-y border-[var(--line)] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <FrameworkDiagnosticBridge
            variant="framework-to-diagnostic"
            slug="pricing-sprints"
            advisorySource="advisory"
            title="Audit Your AI P&L Before Booking an Advisory Sprint"
            subtitle="Pre-Advisory Diagnostic Evaluation"
            primaryTool={{
              name: 'AI Unit Economics Benchmark (AUEB)',
              url: '/tools/aueb',
              badge: 'Interactive Benchmark',
              description:
                'Stress-test your inference gross margins or calculate your Technical Insolvency Date free before scheduling an executive working session.',
            }}
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Clear Next Step</p>
        <h2>Ready to pressure-test your AI economics or product roadmap?</h2>
        <p>
          Start with the free 60-second Reality Check diagnostic or book an exploratory
          conversation directly.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/schedule?source=advisory-footer">
            Book Advisory Call ↗
          </Link>
          <Link className="button button-ghost-light" href="/reality-check">
            Run Free Reality Check
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Send Scope Note ↗
          </Link>
        </div>
      </section>
    </>
  );
}
