import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioInteractiveShowcase from './PortfolioInteractiveShowcase';

export const metadata: Metadata = {
  title: 'Executive Portfolio & AI Systems Built',
  description:
    'Explore live AI platforms (Exogram AI, CareerWin, AI Economist) and verified enterprise P&L turnarounds across 15+ years of product leadership.',
  alternates: {
    canonical: 'https://www.richardewing.io/portfolio',
  },
  openGraph: {
    title: 'Executive Portfolio & AI Systems Built | Richard Ewing',
    description:
      'Explore live AI platforms (Exogram AI, CareerWin, AI Economist) and verified enterprise P&L turnarounds across 15+ years of product leadership.',
    url: 'https://www.richardewing.io/portfolio',
    type: 'website',
    images: [
      { url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Portfolio & AI Systems Built | Richard Ewing',
    description:
      'Explore live AI platforms (Exogram AI, CareerWin, AI Economist) and verified enterprise P&L turnarounds across 15+ years of product leadership.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const leadershipPillars = [
  {
    tag: '01 / PRODUCT FUNCTIONS & PEOPLE LEADERSHIP',
    title: 'Building Product Organizations & Operating Models',
    body: 'Recruited twice to build product management functions from scratch: authoring product charters, methodologies, SOPs, sprint cadences, and roadmap governance while hiring, coaching, and reviewing Product Managers across US, nearshore, and overseas teams.',
  },
  {
    tag: '02 / PORTFOLIO DECISIONS & P&L ACCOUNTABILITY',
    title: 'Portfolio Consolidation, Budgets & Vendor Spend',
    body: 'Owned company-wide P&L across five departments and $1M to $3M+ product budgets. Sunset and consolidated overlapping products to cut $5M in spend, cleared 200+ stale backlog items to lift velocity 40%, and negotiated vendor contracts up to $1M+.',
  },
  {
    tag: '03 / 0-TO-1 LAUNCHES & EXECUTIVE ALIGNMENT',
    title: 'Commercialization, Layered Roadmaps & C-Suite QBRs',
    body: 'Took a net-new municipal ERP product from customer discovery and alpha/beta validation through pricing, sales enablement, and $25M in new revenue, while leading layered C-suite roadmaps and quarterly business reviews (QBRs).',
  },
  {
    tag: '04 / CONVERSATIONAL & AGENTIC AI PLATFORMS',
    title: 'Persistent Context, Knowledge Graphs & Agent Governance',
    body: 'Sole founder of Exogram.ai and architect of CareerWin.ai: pairing frontier LLMs (Claude, Gemini, OpenAI) with encrypted memory vaults, self-wiring knowledge graphs, vector retrieval, deliverable canvases, and human-in-the-loop approval gates.',
  },
];

const careerLedger = [
  {
    company: 'Exogram AI LLC',
    role: 'Founder & CEO · Head of Product (Conversational & Agentic AI Platform)',
    period: 'Aug 2024 - Present · Seattle, WA',
    metric: 'Live Public AI Platform',
    summary:
      'Sole founder owning product vision, strategy, AI-native development workflow, and public launch end to end. Pivoted from developer middleware to a full-stack conversational AI platform built for people who want finished work products rather than unpaid prompt engineering.',
    outcomes: [
      'Shipped web client, onboarding, encrypted memory vault, self-wiring knowledge graph, and deliverable canvas (memos, decks, matrices, checklists)',
      'Defined dependable agent standards: source grounding, audit trails, memory correction, privacy boundaries, and human approval points before agents act',
      'Authored the open Exogram Action Admissibility Protocol (EAAP RFC-0001) and earned AWS Startups Showcase recognition',
    ],
  },
  {
    company: 'Entrepreneurs of Tomorrow',
    role: 'Interim Director of Product Management & Advisory Board Member',
    period: 'Jun 2025 - Present · Seattle, WA',
    metric: '4 PM Teams · 0-to-1 PM Org',
    summary:
      'Recruited in a dual executive and advisory board capacity partnering directly with the Founder & CEO across a 20+ person organization to move from ad-hoc project delivery to a disciplined product department.',
    outcomes: [
      'Lead and coach up to four Product Managers at peak, each running a 3 to 6 member engineering team, driving hiring and org-structure decisions with the CEO',
      'Built the product operating model from the ground up: product charter, standardized sprint cadences, roadmap governance, and executive reporting',
      'Defined and tracked portfolio KPIs and OKRs across predictability, milestone attainment, capacity, adoption, compliance exposure, and forecast confidence',
    ],
  },
  {
    company: 'Moss Adams',
    role: 'Group Product Manager · Enterprise SaaS Portfolio & Product Operations',
    period: 'Jun 2022 - Aug 2024 · Seattle, WA',
    metric: '$5M Cut · +40% Velocity',
    summary:
      'Recruited to create product management methodologies and SOPs and lead a 12-product portfolio of in-house and third-party enterprise applications across two PM-led teams of 6 to 8 members in the US and overseas.',
    outcomes: [
      'Decided what to sunset, consolidate, and renew across overlapping products, reducing $5M in spend while negotiating vendor contracts up to $1M+',
      'Audited and reprioritized 200+ stale backlog initiatives to stop team spinning, lifting delivery velocity 40%',
      'Forecast and defended a $1M to $3M annual budget, owned hiring/reviews/terminations, led C-suite QBRs and Azure post-acquisition integration, and served as Change Review Board approver for client billing and reporting',
    ],
  },
  {
    company: 'State of Washington',
    role: 'Product Manager · Public-Sector Cloud Modernization',
    period: 'Mar 2021 - Jun 2022 · Olympia, WA',
    metric: '7.7M Residents · 98% On-Time',
    summary:
      'Voice of the customer for public-facing services reaching Washington\'s 7.7 million residents, translating resident needs into cross-agency, cloud-native citizen portal priorities under fixed legislative timelines and strict privacy rules.',
    outcomes: [
      'Program reporting cited 98% on-time delivery against legislatively mandated timelines and zero legislative audit findings',
      'Partnered across state agencies to move manual, paper-based processes into accessible digital workflows',
      'Operated within strict state cybersecurity, identity verification, and data privacy governance',
    ],
  },
  {
    company: 'Sechrist Design',
    role: 'Director of Operations · P&L, Operations & Organizational Scaling',
    period: 'Oct 2014 - May 2017 · Greater Seattle Area',
    metric: '5 Depts · $20M Transformation',
    summary:
      'Reported directly to the CEO leading company-wide operations across five departments (including finance, project management, and IT) and their department heads while owning the P&L and multi-million-dollar organizational budget.',
    outcomes: [
      'Consolidated four departments into a unified operating model; company reporting attributed 200% year-over-year growth to $20M in revenue to the broader business transformation',
      'Built organizational and departmental annual budgets, defended CapEx and headcount business cases to the CEO, and tracked gross and contribution margin',
      'Designed org structure, led hiring and terminations, authored company SOPs, and negotiated supplier and technology-partner terms',
    ],
  },
  {
    company: 'Tyler Technologies',
    role: 'Principal Product Manager · Enterprise ERP SaaS & 0-to-1 Platform Strategy',
    period: 'May 2008 - Oct 2014 · Renton, WA',
    metric: '$25M Revenue · -20% Churn',
    summary:
      'Owned the 0-to-1 concept, requirements, and commercialization of a net-new municipal ERP module, translating widespread client spreadsheet friction into an enterprise product with no prior market alternative.',
    outcomes: [
      'Generated $25M in new product revenue from concept through alpha/beta municipal customer validation and commercial launch',
      'Established SLAs and high-availability standards for municipal clients, contributing to a 20% reduction in enterprise churn',
      'Partnered with Sales and Marketing on pricing, positioning, sales calls, user conference workshops, and weekly customer enablement webinars',
    ],
  },
];

const selectedPublications = [
  {
    outlet: 'CIO.com',
    title: 'AI Agents Won\'t Crash the Economy. Bad Governance Might.',
  },
  {
    outlet: 'Built In · Editors\' Picks',
    title: 'I Used AI to Build My Startup. Here\'s What I Learned.',
  },
  {
    outlet: 'Built In',
    title: 'Most AI Projects Just Burn Cash. Here\'s How to Make Them Profitable.',
  },
  {
    outlet: 'Built In',
    title: 'The Innovation Tax Audit: Is Your R&D Actually Just OpEx?',
  },
  {
    outlet: 'Built In',
    title: 'Hey, Senior PMs: Shipping Faster Won\'t Get You Promoted.',
  },
  {
    outlet: 'The Product Economist',
    title: 'GitHub Copilot Is Generating More Code Than Your Team Can Review.',
  },
];

export default function PortfolioPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Executive Portfolio & AI Systems Built | Richard Ewing',
    description:
      'Product executive with 15+ years leading product organizations, P&L, and 0-to-1 launches ($25M ERP, $5M portfolio cut), and founder of Exogram.ai and CareerWin.ai.',
    url: 'https://www.richardewing.io/portfolio',
    mainEntity: {
      '@type': 'Person',
      name: 'Richard Ewing',
      jobTitle: 'Head of Product, Product & AI Economist, Founder of Exogram AI',
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'City University of Seattle' },
        { '@type': 'CollegeOrUniversity', name: 'ITT Technical Institute, Seattle' },
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
        name: 'Portfolio',
        item: 'https://www.richardewing.io/portfolio',
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

      {/* 01. INNER HERO - Clean Editorial Rhythm Matching Homepage & LinkedIn/Resume */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Portfolio · Product Executive, P&amp;L Leader &amp; AI Builder
          </p>
          <h1>
            Product organizations led at scale.{' '}
            <em className="italic text-[var(--forest)]">AI products built from zero.</em>
          </h1>
          <p className="inner-lede">
            I have spent 15+ years building product functions, owning multi-million-dollar
            budgets and P&amp;L, and launching 0-to-1 enterprise software across SaaS, ERP,
            professional services, and the public sector, alongside founding and shipping
            Exogram.ai and CareerWin.ai end to end.
          </p>

          <div className="actions">
            <Link className="button button-gold" href="/advisory">
              Explore executive advisory ↗
            </Link>
            <Link className="button button-outline" href="/case-studies">
              Read 7 verified case studies
            </Link>
          </div>

          <div className="proof-mini">
            <span>
              $25M
              <small>0-to-1 ERP revenue</small>
            </span>
            <span>
              $5M cut
              <small>12-product portfolio</small>
            </span>
            <span>
              +40%
              <small>delivery velocity</small>
            </span>
            <span>
              2 live
              <small>AI products shipped solo</small>
            </span>
          </div>

          <p className="text-[12.5px] text-[var(--muted)] mt-5">
            Live now:{' '}
            <a
              href="https://exogram.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--forest)] font-semibold underline underline-offset-4"
            >
              Exogram.ai
            </a>{' '}
            ·{' '}
            <a
              href="https://careerwin.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--forest)] font-semibold underline underline-offset-4"
            >
              CareerWin.ai
            </a>
          </p>
        </div>

        <aside className="inner-aside glass">
          <div className="w-full h-48 rounded-md overflow-hidden relative mb-4">
            <Image
              src="/assets/images/richard-ewing-headshot.jpg"
              alt="Richard Ewing, product executive and AI builder"
              fill
              className="object-cover object-top"
            />
          </div>
          <span>TWO WAYS TO WORK TOGETHER</span>
          <strong>Hiring a product leader, or need an advisor?</strong>
          <p>
            Open to VP, Head, and Director of Product roles, plus Group PM and Product
            Operations (remote-first or Seattle). Also taking a small number of advisory
            clients. BS Computer Science · MBA · Lean Six Sigma Yellow Belt.
          </p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/contact#subject=Product+Leadership+Role" className="text-[var(--forest)] font-semibold underline underline-offset-4">
              Discuss a role
            </Link>
            <Link href="/advisory" className="text-[var(--forest)] font-semibold underline underline-offset-4">
              See advisory
            </Link>
          </p>
        </aside>
      </section>

      {/* 02. LIVE AI PLATFORMS BUILT - Dual-Layer Warm Paper Showcase */}
      <section id="ai-platforms" className="section">
        <div className="section-heading">
          <p className="eyebrow">
            <i /> Live AI platforms &amp; tools
          </p>
          <h2>From product strategy to shipped AI architecture.</h2>
          <p>
            Select any platform below to inspect both layers of the work: the user and
            commercial problem solved, and the persistent memory, retrieval, multi-LLM, and
            governance architecture underneath.
          </p>
        </div>

        <div className="mt-10">
          <PortfolioInteractiveShowcase />
        </div>
      </section>

      {/* 03. WHAT I'M KNOWN FOR - Full-Bleed Paper Band Matching Resume Core Competencies */}
      <div id="competencies" className="bg-[var(--paper2)] border-y border-[var(--line)]">
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">
              <i /> What I am known for
            </p>
            <h2>Four disciplines across product, P&amp;L, and agentic AI.</h2>
            <p>
              Bridging executive stakeholder alignment and budget ownership with modern,
              AI-native product delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {leadershipPillars.map((p) => (
              <div
                key={p.title}
                className="bg-[#faf8f2] border border-[var(--line)] rounded-lg p-7 space-y-2.5"
              >
                <span className="font-mono text-[10px] tracking-[0.13em] uppercase text-[var(--gold)] block">
                  {p.tag}
                </span>
                <h3 className="font-serif text-[23px] leading-[1.2] font-medium text-[var(--ink)] m-0">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-[var(--muted)] m-0">{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 04. VERIFIED EXPERIENCE BY ORGANIZATION - Employer-Accurate Ledger */}
      <section id="experience" className="section">
        <div className="section-heading">
          <p className="eyebrow">
            <i /> Experience &amp; operating outcomes
          </p>
          <h2>Every role, budget, and outcome separated by company.</h2>
          <p>
            Direct line of sight from each organization and seat held to the product,
            operational, and financial results delivered.
          </p>
        </div>

        <div className="space-y-4 mt-10">
          {careerLedger.map((item) => (
            <article
              key={item.company}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-lg p-7 sm:p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-[var(--line)] pb-4 mb-5">
                <div>
                  <span className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-[var(--gold)] block mb-1">
                    {item.period}
                  </span>
                  <h3 className="font-serif text-[25px] font-medium text-[var(--ink)] m-0">
                    {item.company}
                  </h3>
                  <div className="text-[13px] font-medium text-[var(--forest)] mt-0.5">
                    {item.role}
                  </div>
                </div>
                <span className="font-mono text-[11px] font-semibold text-[var(--forest)] bg-white border border-[var(--line)] px-3 py-1.5 rounded self-start md:self-center shrink-0">
                  {item.metric}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <p className="lg:col-span-5 text-[13px] leading-[1.75] text-[var(--muted)] m-0">
                  {item.summary}
                </p>

                <ul className="lg:col-span-7 space-y-2 m-0 p-0 list-none">
                  {item.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2.5 text-[12.5px] leading-[1.65] text-[var(--ink)]"
                    >
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white border border-[var(--line)] rounded-lg p-5">
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--gold)] block mb-1">
              MBA · 2006 - 2009
            </span>
            <h3 className="font-serif text-[19px] font-medium text-[var(--ink)] m-0">
              Master of Business Administration
            </h3>
            <p className="text-[12px] text-[var(--muted)] mt-1 mb-0">
              City University of Seattle
            </p>
          </div>

          <div className="bg-white border border-[var(--line)] rounded-lg p-5">
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--gold)] block mb-1">
              BS, COMPUTER SCIENCE · 2002 - 2006
            </span>
            <h3 className="font-serif text-[19px] font-medium text-[var(--ink)] m-0">
              Bachelor of Science, Computer Science
            </h3>
            <p className="text-[12px] text-[var(--muted)] mt-1 mb-0">
              ITT Technical Institute, Seattle
            </p>
          </div>

          <div className="bg-white border border-[var(--line)] rounded-lg p-5">
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--gold)] block mb-1">
              PROCESS &amp; PRODUCT OPS
            </span>
            <h3 className="font-serif text-[19px] font-medium text-[var(--ink)] m-0">
              Lean Six Sigma Yellow Belt
            </h3>
            <p className="text-[12px] text-[var(--muted)] mt-1 mb-0">
              Plus Built In Editors&apos; Picks &amp; AWS Startups Showcase
            </p>
          </div>
        </div>
      </section>

      {/* 05. PUBLICATION BAND - Selected Resume & LinkedIn Articles */}
      <section className="publication-band">
        <div>
          <p className="eyebrow">Selected publications · 174+ works</p>
          <h2>Published in CIO.com, Built In, Mind the Product, and HackerNoon.</h2>
          <p>
            Writing on AI unit economics, agent governance, R&amp;D capital allocation, and
            why shipping code faster without product discipline stalls teams.
          </p>
          <div className="actions">
            <Link className="button button-dark" href="/research/publications">
              Browse all 174+ works ↗
            </Link>
            <Link className="button button-outline" href="/book">
              The Pragmatic AI Builder ↗
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {selectedPublications.map((pub) => (
            <div
              key={pub.title}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-lg p-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.11em] text-[var(--gold)] block mb-1">
                {pub.outlet}
              </span>
              <div className="font-serif text-[15px] leading-snug text-[var(--ink)] font-medium">
                {pub.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06. CLOSING CTA - Exact Executive Roles & Advisory Availability */}
      <section className="closing-cta">
        <p className="eyebrow">Executive leadership &amp; advisory</p>
        <h2>Open to product leadership mandates and executive advisory.</h2>
        <p>
          Available for Vice President of Product, Head of Product, Director of Product
          Management, Group Product Manager, and Product Operations roles (remote-first or
          Seattle-based), as well as fixed-scope advisory sprints.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/advisory">
            Explore executive advisory ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Connect directly ↗
          </Link>
        </div>
      </section>
    </>
  );
}
