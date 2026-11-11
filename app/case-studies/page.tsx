import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verified Case Studies & P&L Outcomes',
  description:
    'Inspect 7 verified enterprise turnarounds and production AI builds across Tyler Technologies, Moss Adams, Sechrist Design, Exogram AI, and CareerWin.',
  alternates: {
    canonical: 'https://www.richardewing.io/case-studies',
  },
  openGraph: {
    title: 'Verified Case Studies & P&L Outcomes | Richard Ewing',
    description:
      'Inspect 7 verified enterprise turnarounds and production AI builds across Tyler Technologies, Moss Adams, Sechrist Design, Exogram AI, and CareerWin.',
    url: 'https://www.richardewing.io/case-studies',
    type: 'website',
    images: [
      { url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Case Studies & P&L Outcomes | Richard Ewing',
    description:
      'Inspect 7 verified enterprise turnarounds and production AI builds across Tyler Technologies, Moss Adams, Sechrist Design, Exogram AI, and CareerWin.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

interface CaseStudy {
  tag: string;
  roleMeta: string;
  title: string;
  context: string;
  intervention: string;
  outcomes: string[];
  metricHighlight: string;
  metricLabel: string;
  deepLinkHref?: string;
  deepLinkLabel?: string;
}

const caseStudies: CaseStudy[] = [
  {
    tag: '01 / ENTERPRISE 0-TO-1 COMMERCIALIZATION',
    roleMeta: 'Tyler Technologies · Principal Product Manager (May 2008 - Oct 2014)',
    title:
      'Tyler Technologies: Commercializing a 0-to-1 Municipal ERP Module to $25M in New Revenue',
    context:
      'Municipal clients relied on error-prone manual spreadsheets with no dedicated enterprise ERP alternative on the market.',
    intervention:
      'Owned the 0-to-1 concept, requirements, alpha/beta municipal customer validation, pricing, sales enablement, user conference workshops, and SLA governance from idea through launch.',
    outcomes: [
      '$25M in new product revenue generated from the net-new municipal ERP module',
      '20% reduction in enterprise churn after establishing SLAs and high-availability standards',
      'Direct contribution to closed municipal contracts through sales support and enablement webinars',
    ],
    metricHighlight: '$25M',
    metricLabel: '0-to-1 ERP Revenue',
  },
  {
    tag: '02 / PORTFOLIO CONSOLIDATION & PRODUCT OPS',
    roleMeta: 'Moss Adams · Group Product Manager, Enterprise Portfolio (Jun 2022 - Aug 2024)',
    title:
      'Moss Adams: Cutting $5M in Portfolio Spend and Lifting Delivery Velocity 40% Across 12 Products',
    context:
      'A 12-product portfolio of in-house and third-party enterprise applications faced overlapping vendor spend, 200+ stale backlog items, and inconsistent product methodologies across US and overseas teams.',
    intervention:
      'Created standardized PM methodologies and SOPs, directed two PM-led squads (6 to 8 members each), forecast a $1M to $3M budget, negotiated $1M+ vendor contracts, led C-suite QBRs and Azure post-acquisition integration, and served as Change Review Board approver.',
    outcomes: [
      '$5M in spend reduced by sunsetting and consolidating overlapping products',
      '+40% increase in delivery velocity after retiring and reprioritizing 200+ stale initiatives',
      'Layered C-suite and business-partner roadmaps tied directly to OKRs and billing safety',
    ],
    metricHighlight: '$5M Cut',
    metricLabel: '+40% Velocity',
  },
  {
    tag: '03 / COMPANY-WIDE P&L & OPERATING MODEL',
    roleMeta: 'Sechrist Design · Director of Operations (Oct 2014 - May 2017)',
    title:
      'Sechrist Design: Owning Five-Department P&L Behind 200% YoY Growth to $20M',
    context:
      'Rapid growth outpaced departmental coordination, requiring tighter budget ownership, procurement discipline, and standardized operating procedures.',
    intervention:
      'Reported directly to the CEO overseeing five departments (finance, project management, IT, and operations). Owned the P&L and annual departmental budgets, authored SOPs, negotiated supplier terms, and consolidated four departments into one unified operating model.',
    outcomes: [
      'Company reporting attributed 200% year-over-year growth to $20M in revenue to the broader business transformation',
      'Four departments consolidated into a single operating structure with margin tracking',
      'Defended ROI-driven CapEx and headcount business cases directly to the CEO',
    ],
    metricHighlight: '$20M',
    metricLabel: '200% YoY Transformation',
  },
  {
    tag: '04 / PUBLIC-SECTOR CLOUD MODERNIZATION',
    roleMeta: 'State of Washington · Product Manager (Mar 2021 - Jun 2022)',
    title:
      'State of Washington: Modernizing Citizen Workflows for 7.7M Residents With Zero Audit Findings',
    context:
      'Public services reaching 7.7 million residents needed to transition manual, paper-based state processes into a unified cloud-native citizen portal on fixed legislative deadlines.',
    intervention:
      'Served as voice of the customer across multi-agency stakeholder groups, aligning competing agency roadmaps within strict data privacy, identity verification, and state cybersecurity standards.',
    outcomes: [
      '98% on-time delivery against legislatively mandated timelines as cited in program reporting',
      'Zero legislative audit findings across regulated public-service releases',
      'Accessible digital workflows deployed for Washington residents',
    ],
    metricHighlight: '98%',
    metricLabel: 'On-Time · 0 Audit Findings',
  },
  {
    tag: '05 / 0-TO-1 PRODUCT DEPARTMENT BUILD',
    roleMeta:
      'Entrepreneurs of Tomorrow · Interim Director of PM & Advisory Board (Jun 2025 - Present)',
    title:
      'Entrepreneurs of Tomorrow: Building the Product Operating Model Across Four PM Teams',
    context:
      'A 20+ person organization needed to transition from ad-hoc project delivery to a disciplined product management function with executive visibility.',
    intervention:
      'Partnered directly with the Founder & CEO, leading up to four Product Managers (each running a 3 to 6 member engineering team) while authoring the product charter, sprint cadences, roadmap governance, and KPI/OKR reporting.',
    outcomes: [
      'Product management department, hiring plans, and org structure established with CEO buy-in',
      'Portfolio KPIs tracked across predictability, milestone attainment, capacity, and compliance',
      'Ongoing methodological governance as Product Management Advisory Board Member',
    ],
    metricHighlight: '4 PMs',
    metricLabel: '0-to-1 Product Org',
  },
  {
    tag: '06 / CONVERSATIONAL & AGENTIC AI PLATFORM',
    roleMeta: 'Exogram AI LLC · Founder & CEO (Aug 2024 - Present)',
    title:
      'Exogram.ai: Persistent Context, Deliverable Canvas & Dependable Autonomous Agents',
    context:
      'Users waste hours re-explaining context every AI session, while autonomous agents lack source grounding, privacy boundaries, and human approval controls.',
    intervention:
      'Pivoted from developer middleware to a live public conversational AI platform built solo end to end: pairing frontier LLMs with an encrypted memory vault, self-wiring knowledge graph, deliverable canvas, and EAAP RFC-0001 admissibility gates.',
    outcomes: [
      'Live public web platform staging memos, decks, decision matrices, and checklists from shorthand input',
      'Dependable agent execution with source grounding, memory correction, and human approval points',
      'Recognized in the AWS Startups Showcase directory',
    ],
    metricHighlight: 'Live AI',
    metricLabel: 'Memory + Agent Canvas',
    deepLinkHref: '/exogram',
    deepLinkLabel: 'Explore Exogram platform ↗',
  },
  {
    tag: '07 / EVIDENCE-BOUND AI SAAS',
    roleMeta: 'CareerWin.ai · Founder & Product Architect (Live v0.2.422)',
    title:
      'CareerWin.ai: Zero-Fabrication Master Work Record, Supabase RLS & ATS Extension',
    context:
      'Generic AI resume tools fabricate metrics that fail interviews while forcing candidates to re-type job history across dozens of enterprise ATS portals.',
    intervention:
      'Engineered an edge-deployed Next.js SaaS with Supabase PostgreSQL Row-Level Security, a 5-step Master Work Record & Cut Vault, a 10-layer Gemini/Claude compiler bound to verified evidence, and a Universal ATS Chrome Extension.',
    outcomes: [
      'Zero-fabrication resume and interview compiler backed by verified user work records',
      'Published the 2026 Enterprise ATS & AI Resume Benchmark Study',
      'Companion Chrome extension automating Workday, Greenhouse, and Lever portal autofill',
    ],
    metricHighlight: '10-Layer',
    metricLabel: 'Zero-Fabrication SaaS',
    deepLinkHref: '/careerwin',
    deepLinkLabel: 'Read CareerWin case study ↗',
  },
];

export default function CaseStudiesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Verified Case Studies & P&L Outcomes | Richard Ewing',
    description:
      'Employer-verified enterprise turnarounds and production AI platforms across Tyler Technologies, Moss Adams, Sechrist Design, State of Washington, Exogram AI, and CareerWin.',
    url: 'https://www.richardewing.io/case-studies',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.richardewing.io',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: 'https://www.richardewing.io/case-studies',
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

      {/* 01. INNER HERO */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Proven Outcomes · Named Employers &amp; Live Platforms
          </p>
          <h1>Seven verified turnarounds and production AI builds.</h1>
          <p className="inner-lede">
            Every case study below maps directly to a named company, an accountable P&amp;L
            or public-sector seat, or a live AI software platform built from zero.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/pricing-sprints">
              Review sprint options ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>EVIDENCE OVER CLAIMS</span>
          <strong>No anonymized composites. Real seats and outcomes.</strong>
          <p>
            Five enterprise and public-sector leadership mandates plus two live AI ventures.{' '}
            <Link href="/case-studies/runtime-incidents" className="underline text-[var(--forest)] font-semibold">
              Inspect AI runtime incident analyses ↗
            </Link>
          </p>
        </aside>
      </section>

      {/* 02. CASE STUDIES LEDGER (Proper h2 in .section-heading, h3 on cards) */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">
            <i /> Documented record
          </p>
          <h2>Enterprise P&amp;L results and shipped AI systems.</h2>
          <p>
            Separated cleanly by organization, role, operational problem, and measurable
            business outcome.
          </p>
        </div>

        <div className="space-y-5 mt-10">
          {caseStudies.map((cs) => (
            <article
              key={cs.title}
              className="border border-[var(--line)] bg-[#faf8f2] rounded-lg p-7 sm:p-9 transition-shadow hover:shadow-md space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--line)] pb-5">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.13em] uppercase text-[var(--gold)] block mb-1">
                    {cs.tag}
                  </span>
                  <div className="font-mono text-[11px] text-[var(--muted)] mb-1.5">
                    {cs.roleMeta}
                  </div>
                  <h3 className="font-serif text-[24px] sm:text-[27px] leading-[1.2] font-medium text-[var(--ink)] m-0">
                    {cs.title}
                  </h3>
                </div>
                <div className="sm:text-right flex-none bg-white border border-[var(--line)] rounded-md px-4 py-2.5 self-start sm:self-center">
                  <div className="font-serif text-[26px] font-semibold text-[var(--forest)] leading-none">
                    {cs.metricHighlight}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--muted)] uppercase mt-1">
                    {cs.metricLabel}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-start">
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <strong className="font-serif text-[17px] font-medium text-[var(--ink)] block mb-1">
                      The Operational Challenge
                    </strong>
                    <p className="text-[13px] leading-[1.7] text-[var(--muted)] m-0">
                      {cs.context}
                    </p>
                  </div>
                  <div>
                    <strong className="font-serif text-[17px] font-medium text-[var(--ink)] block mb-1">
                      What Changed
                    </strong>
                    <p className="text-[13px] leading-[1.7] text-[var(--muted)] m-0">
                      {cs.intervention}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 bg-white border border-[var(--line)] rounded-lg p-5 space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--forest)] font-semibold block">
                    Verified Outcomes
                  </span>
                  <ul className="space-y-2 m-0 p-0 list-none">
                    {cs.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2.5 text-[12.5px] leading-[1.6] text-[var(--ink)]"
                      >
                        <span className="text-[var(--gold)] font-bold">✓</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                  {cs.deepLinkHref && cs.deepLinkLabel && (
                    <div className="pt-2 border-t border-[var(--line)]">
                      <Link href={cs.deepLinkHref} className="text-link mt-0">
                        {cs.deepLinkLabel}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03. CLOSING CTA */}
      <section className="closing-cta">
        <p className="eyebrow">A clear next step</p>
        <h2>Apply this operating rigor to your product roadmap.</h2>
        <p>
          Run the free 60-second Reality Check or reach out directly to discuss an advisory
          engagement or product leadership mandate.
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
