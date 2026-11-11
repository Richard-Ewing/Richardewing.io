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
    tag: '01 · ENTERPRISE 0-TO-1 COMMERCIALIZATION',
    roleMeta: 'Tyler Technologies · Principal Product Manager (May 2008 - Oct 2014)',
    title:
      'Tyler Technologies: Commercializing a 0-to-1 Municipal ERP to $25M and Cutting Churn 20%',
    context:
      'Public-sector municipalities needed a modern Enterprise Resource Planning (ERP) platform capable of handling complex fund accounting, regulatory reporting, and mission-critical uptime without multi-year implementation failures.',
    intervention:
      'Led 0-to-1 product discovery and commercialization working backward from municipal finance and operations buyers. Directed alpha and beta customer validation, commercial packaging, pricing tiers, field sales enablement, and strict enterprise SLA and high-availability standards.',
    outcomes: [
      '$25M in new product revenue generated from the 0-to-1 municipal ERP line',
      '20% reduction in enterprise customer churn after enforcing high-availability SLAs',
      'Repeatable alpha-to-general-availability launch playbook across engineering, sales, and support',
      'Long-term public-sector contract retention anchored in measurable reliability',
    ],
    metricHighlight: '$25M',
    metricLabel: '0-to-1 ERP Revenue',
  },
  {
    tag: '02 · ENTERPRISE PORTFOLIO RATIONALIZATION',
    roleMeta: 'Moss Adams · Group Product Manager, Enterprise Portfolio (Jun 2022 - Aug 2024)',
    title:
      'Moss Adams: Cutting $5M in Portfolio Spend and Lifting Delivery Velocity 40% Across 12 Products',
    context:
      'A 12-product enterprise portfolio spanning in-house software and third-party vendor platforms faced competing stakeholder demands, 200+ stale backlog initiatives, cross-regional delivery friction, and rising licensing and cloud maintenance costs.',
    intervention:
      'Directed two cross-regional product and delivery teams (US, nearshore, and offshore), forecast and defended a $1M to $3M annual budget, negotiated $1M+ vendor contracts, led C-suite QBRs and Azure modernization governance, and served as Change Review Board approver for client billing and reporting systems.',
    outcomes: [
      '$5M in reduced spend achieved via disciplined product sunset, consolidation, and vendor contract decisions',
      '+40% increase in delivery velocity after auditing and retiring 200+ stale backlog items',
      'Defensible C-suite QBR capital governance across all 12 enterprise applications',
      'Zero billing disruption across sensitive client reporting changes under CRB oversight',
    ],
    metricHighlight: '$5M Cut',
    metricLabel: '+40% Delivery Velocity',
  },
  {
    tag: '03 · COMPANY-WIDE P&L & OPERATING TRANSFORMATION',
    roleMeta: 'Sechrist Design · Director of Operations (Oct 2014 - May 2017)',
    title:
      'Sechrist Design: Owning Company-Wide P&L Across 5 Departments Behind 200% YoY Growth to $20M',
    context:
      'Rapidly expanding organization needed tighter financial controls, unified departmental execution, supplier cost discipline, and scalable operating procedures across fragmented business units.',
    intervention:
      'Reported directly to the CEO overseeing 5 departments (finance, project management, IT, and operations). Owned company-wide P&L and multi-million-dollar departmental budgets, redesigned org structure and hiring, standardized SOPs, renegotiated supplier terms, and consolidated 4 departments into a unified operating model.',
    outcomes: [
      'Company reporting attributed 200% year-over-year growth to $20M in revenue to the broader transformation',
      '4 separate departments consolidated into one accountable operating structure',
      'Full company-wide P&L visibility, departmental budget ownership, and supplier margin discipline',
      'Standardized project delivery and financial reporting directly to the CEO',
    ],
    metricHighlight: '$20M',
    metricLabel: '200% YoY Transformation',
  },
  {
    tag: '04 · PUBLIC-SECTOR CLOUD MODERNIZATION',
    roleMeta: 'State of Washington · Product Manager (Mar 2021 - Jun 2022)',
    title:
      'State of Washington: Delivering Cloud Modernization for 7.7M Residents With Zero Audit Findings',
    context:
      'Public digital services serving 7.7 million residents required cloud-native modernization across multiple state agencies under unforgiving legislative deadlines, accessibility laws, and data-privacy constraints.',
    intervention:
      'Represented resident needs across multi-agency product roadmaps, translating statutory privacy and compliance requirements into actionable engineering milestones with transparent public accountability.',
    outcomes: [
      '98% on-time delivery reported across multi-agency modernization milestones',
      'Zero legislative audit findings across regulated public-service releases',
      'Modernized cloud workflows serving a statewide population of 7.7 million residents',
      'Aligned interagency policy, security, and engineering stakeholders without scope drift',
    ],
    metricHighlight: '98%',
    metricLabel: 'On-Time · 0 Audit Findings',
  },
  {
    tag: '05 · 0-TO-1 PRODUCT OPERATING MODEL',
    roleMeta:
      'Entrepreneurs of Tomorrow · Interim Director of PM & Advisory Board (Jun 2025 - Present)',
    title:
      'Entrepreneurs of Tomorrow: Standing Up Roadmap Governance and KPIs Across 4 Product Pods',
    context:
      'A growing 20+ person organization needed an experienced product executive to formalize product management standards, coach emerging Product Managers, and connect squad execution to Founder & CEO priorities.',
    intervention:
      'Partnered directly with the Founder & CEO, leading up to 4 Product Managers (each leading 3 to 6 member teams). Built the product operating model, team charters, discovery and delivery SOPs, roadmap governance, and executive KPI/OKR cadence from scratch.',
    outcomes: [
      'Complete 0-to-1 product management operating model deployed across 4 cross-functional squads',
      'Executive KPI and OKR reporting established for Founder & CEO visibility',
      'Standardized product charters, intake prioritization, and release accountability',
      'Ongoing strategic oversight as Product Management Advisory Board Member',
    ],
    metricHighlight: '4 Pods',
    metricLabel: '0-to-1 PM Operating Model',
  },
  {
    tag: '06 · CONVERSATIONAL AI & DETERMINISTIC AGENT CONTROL PLANE',
    roleMeta: 'Exogram AI · Sole Founder, CEO & Chief Architect (Aug 2024 - Present)',
    title:
      'Exogram AI & EAAP RFC-0001: Persistent Cross-Session Context Paired With Pre-Execution Agent Gates',
    context:
      'Conversational AI platforms lose context between sessions while autonomous agents wired into external APIs lack hard pre-execution safety and cost controls, leaving enterprises exposed to unauthorized mutations.',
    intervention:
      'Architected a Python + TypeScript conversational platform featuring a 7-layer context and temporal entity graph, Pinecone vector retrieval, encrypted Supabase/PostgreSQL tenant memory, multi-LLM routing (Claude, Gemini, OpenAI), and the open 4-layer Exogram Action Admissibility Protocol (EAAP RFC-0001).',
    outcomes: [
      'Recognized in the official AWS Startups Showcase directory',
      '7-layer persistent context loop with explicit user correction and hard revocation',
      'Open-source EAAP RFC-0001 enforcing 14 runtime invariants (ALLOW / BLOCK / ESCALATE) with zero model inference inside L3 judgment gates',
      'Cryptographic HMAC meaning verification and SHA-256 TOCTOU state hash admissibility checks',
    ],
    metricHighlight: 'RFC-0001',
    metricLabel: '14 Runtime Invariants',
    deepLinkHref: '/exogram',
    deepLinkLabel: 'Inspect Exogram Architecture ↗',
  },
  {
    tag: '07 · FULL-STACK EVIDENCE-BOUND AI SAAS',
    roleMeta: 'CareerWin.ai · Founder & Product Architect (Production v0.2.422)',
    title:
      'CareerWin.ai: Building a Zero-Fabrication Career OS, Supabase RLS Vault & Universal ATS Extension',
    context:
      'Job seekers using generic LLM wrappers end up with hallucinated resume metrics that fail background and interview scrutiny, while manually re-entering career history across fragmented ATS portals.',
    intervention:
      'Engineered a Next.js + TypeScript SaaS on Cloudflare Workers (@opennextjs/cloudflare) backed by Supabase Auth and Row-Level Security. Built a 5-step Master Work Record & Cut Vault onboarding flow, a 10-layer Gemini/Claude compiler bound strictly to verified user evidence, DOCX/PDF export engines, and a companion Chrome extension.',
    outcomes: [
      'Live multi-tenant SaaS (v0.2.422) with verified Supabase PostgreSQL Row-Level Security',
      '10-layer zero-fabrication compiler eliminating invented employers, dates, and fake metrics',
      'Published the 2026 Enterprise ATS & AI Resume Benchmark Study',
      'Universal ATS Chrome Extension automating portal autofill from verified work records',
    ],
    metricHighlight: '10-Layer',
    metricLabel: 'Evidence-Bound Compiler',
    deepLinkHref: '/careerwin',
    deepLinkLabel: 'Read CareerWin Case Study ↗',
  },
];

export default function CaseStudiesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Verified Case Studies & P&L Outcomes | Richard Ewing',
    description:
      'Employer-verified enterprise turnarounds and production AI system architectures across Tyler Technologies, Moss Adams, Sechrist Design, State of Washington, Exogram AI, and CareerWin.',
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

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Proven Outcomes · Employer &amp; Repo Verified
          </p>
          <h1>Seven verified turnarounds and production AI builds.</h1>
          <p className="inner-lede">
            No anonymized composites or invented consulting folklore. Every case study on
            this page maps directly to a named employer, a real P&amp;L or public-sector
            mandate, or a live AI software platform I architected and shipped.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/pricing-sprints">
              Review Sprint Options ↗
            </Link>
            <Link className="button button-outline" href="/portfolio">
              Interactive AI Showcase ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass space-y-3">
          <span>THE VERIFICATION STANDARD</span>
          <strong>Named companies. Real seats. Auditable systems.</strong>
          <p>
            Five enterprise and public-sector operating mandates ($25M 0-to-1 ERP, $5M
            portfolio cut, $20M transformation, 7.7M residents) plus two production AI
            ventures built from zero.
          </p>
          <div className="pt-1">
            <Link
              href="/case-studies/runtime-incidents"
              className="text-xs font-mono font-bold text-[var(--forest)] underline"
            >
              Also inspect: AI Runtime Incident Postmortems ↗
            </Link>
          </div>
        </aside>
      </section>

      {/* Case Studies List */}
      <section className="section">
        <div className="space-y-10">
          {caseStudies.map((cs) => (
            <article
              key={cs.title}
              className="border border-[var(--line)] bg-[#FAF8F3] rounded-2xl p-7 sm:p-10 hover:border-[var(--forest)] hover:shadow-md transition-shadow space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--line)] pb-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[var(--gold)] tracking-wider uppercase block">
                    {cs.tag}
                  </span>
                  <div className="text-xs font-mono text-[var(--muted)]">{cs.roleMeta}</div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[var(--ink)] pt-1">
                    {cs.title}
                  </h2>
                </div>
                <div className="sm:text-right flex-none bg-white border border-[var(--line)] rounded-xl px-4 py-3 self-start sm:self-center">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[var(--forest)]">
                    {cs.metricHighlight}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--muted)] uppercase">
                    {cs.metricLabel}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs sm:text-sm leading-relaxed text-[#3e4a42]">
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <strong className="font-serif text-base text-[var(--ink)] block mb-1">
                      The Operational Problem
                    </strong>
                    <p className="text-[var(--muted)] m-0">{cs.context}</p>
                  </div>
                  <div>
                    <strong className="font-serif text-base text-[var(--ink)] block mb-1">
                      What We Changed &amp; Built
                    </strong>
                    <p className="text-[var(--muted)] m-0">{cs.intervention}</p>
                  </div>
                </div>

                <div className="md:col-span-5 bg-white border border-[var(--line)] rounded-xl p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[var(--forest)] uppercase tracking-wider block">
                      Documented Outcomes:
                    </span>
                    <ul className="space-y-2">
                      {cs.outcomes.map((o) => (
                        <li
                          key={o}
                          className="flex items-start gap-2 text-xs text-[#2e3a32] leading-relaxed"
                        >
                          <span className="text-[var(--gold)] font-bold mt-0.5">✓</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {cs.deepLinkHref && cs.deepLinkLabel && (
                    <div className="pt-3 border-t border-[var(--line)]">
                      <Link
                        href={cs.deepLinkHref}
                        className="text-xs font-semibold text-[var(--forest)] hover:text-[var(--gold)] transition-colors"
                      >
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

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Apply this operating discipline to your roadmap or AI stack.</h2>
        <p>
          Run the free 60-second Reality Check diagnostic, compare fixed-scope sprint options,
          or reach out directly about an advisory or executive product mandate.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the Free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/advisory">
            Explore Advisory Disciplines ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Discuss an Engagement ↗
          </Link>
        </div>
      </section>
    </>
  );
}
