import type { Metadata } from 'next';
import Link from 'next/link';
import { MetricPanel } from '@/components/editorial/MetricPanel';
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

const aiCapabilities = [
  {
    tag: 'CONTEXT & COGNITIVE LOOPS',
    title: 'Persistent Context & Temporal Memory',
    detail:
      'Designed Exogram AI\'s 7-layer context engine: event provenance logging, semantic entity extraction, relationship graphs, and temporal state lifecycles (current, proposed, verified, superseded, expired) with user-controlled correction and hard revocation.',
  },
  {
    tag: 'MULTI-MODEL ROUTING',
    title: 'Multi-LLM Orchestration & Margin Control',
    detail:
      'Production orchestration across Anthropic Claude, Google Gemini, and OpenAI APIs using task-scoped context assembly, model fallback chains, latency budgets, and cost-per-invocation floors.',
  },
  {
    tag: 'RETRIEVAL & KNOWLEDGE GRAPHS',
    title: 'Vector RAG & Typed Domain Ontologies',
    detail:
      'Pinecone vector retrieval with per-tenant namespace isolation, encrypted Supabase/PostgreSQL memory stores, and a 133-node typed TypeScript ontology powering structured JSON-LD and /llms.txt citations.',
  },
  {
    tag: 'AGENT GOVERNANCE & MCP',
    title: 'Deterministic Runtime Control Planes',
    detail:
      'Author of the open Exogram Action Admissibility Protocol (EAAP RFC-0001): 4-layer pre-execution Python judgment gates, HMAC meaning verification, SHA-256 TOCTOU state hashing, and governed MCP tool boundaries.',
  },
  {
    tag: 'EVIDENCE-BOUND GENERATION',
    title: 'Anti-Hallucination & Verification Pipelines',
    detail:
      'Built CareerWin\'s 10-layer career compiler to bind every generated resume bullet to verified Master Work Record evidence, paired with contradiction checks across resumes, LinkedIn profiles, and target job specs.',
  },
  {
    tag: 'EDGE & CLOUD PRODUCTION',
    title: 'Full-Stack Edge SaaS & Browser Extensions',
    detail:
      'Hands-on shipping across Next.js App Router, TypeScript, Python, Cloudflare Workers (@opennextjs/cloudflare), Supabase Auth + verified Row-Level Security, Stripe billing, and Chrome MV3 extensions.',
  },
];

const careerLedger = [
  {
    company: 'Moss Adams',
    role: 'Group Product Manager, Enterprise Portfolio',
    period: 'Jun 2022 - Aug 2024 · Seattle, WA',
    headlineMetric: '$5M Cut · +40% Velocity',
    scope:
      'Led product management across a 12-product enterprise portfolio of in-house and third-party applications. Directed two cross-regional squads of 6 to 8 members each (US, nearshore, offshore), forecast and defended a $1M to $3M annual budget, negotiated $1M+ vendor contracts, and served as Change Review Board approver for client billing and reporting systems.',
    outcomes: [
      'Reduced enterprise portfolio spend by $5M through sunset, consolidation, and vendor rationalization decisions',
      'Increased delivery velocity by 40% after auditing and clearing 200+ stale backlog initiatives',
      'Led C-suite quarterly business reviews (QBRs) and Azure cloud modernization governance',
    ],
  },
  {
    company: 'Tyler Technologies',
    role: 'Principal Product Manager',
    period: 'May 2008 - Oct 2014 · Renton, WA',
    headlineMetric: '$25M 0-to-1 ERP Revenue',
    scope:
      'Owned 0-to-1 product strategy, customer discovery, alpha/beta validation, commercial packaging, pricing, sales enablement, and launch execution for a new municipal Enterprise Resource Planning (ERP) product line.',
    outcomes: [
      'Commercialized the new municipal ERP product from zero to $25M in new product revenue',
      'Reduced enterprise customer churn by 20% by instituting strict SLAs and high-availability standards',
      'Aligned engineering, implementation, support, and field sales teams around repeatable enterprise rollouts',
    ],
  },
  {
    company: 'Sechrist Design',
    role: 'Director of Operations',
    period: 'Oct 2014 - May 2017 · Seattle, WA',
    headlineMetric: '5 Depts · $20M Transformation',
    scope:
      'Reported directly to the CEO overseeing 5 departments (finance, project management, IT, and operations). Owned company-wide P&L, multi-million-dollar organizational and departmental budgets, hiring, SOP design, and supplier negotiations.',
    outcomes: [
      'Consolidated 4 departments into a single operating model with clear margin and delivery accountability',
      'Company reporting attributed 200% year-over-year growth to $20M in revenue to the broader business transformation',
      'Rebuilt vendor pricing, financial controls, and cross-departmental operating cadence',
    ],
  },
  {
    company: 'Entrepreneurs of Tomorrow',
    role: 'Interim Director of Product Management & Advisory Board Member',
    period: 'Jun 2025 - Present · Seattle, WA',
    headlineMetric: '4 PM Pods · 0-to-1 Operating Model',
    scope:
      'Partnered directly with the Founder & CEO across a 20+ person organization, leading up to 4 Product Managers (each leading 3 to 6 member cross-functional squads) while serving on the Product Management Advisory Board.',
    outcomes: [
      'Built the product management operating model, team charters, and SOPs from the ground up',
      'Established roadmap governance and executive KPI/OKR reporting directly to leadership',
      'Coached Product Managers on discovery rigor, scope discipline, and cross-team delivery',
    ],
  },
  {
    company: 'State of Washington',
    role: 'Product Manager',
    period: 'Mar 2021 - Jun 2022 · Olympia, WA',
    headlineMetric: '7.7M Residents · 98% On-Time',
    scope:
      'Represented public user needs across digital public services reaching 7.7 million Washington residents, partnering across state agencies on cloud-native modernization under strict statutory, accessibility, and privacy mandates.',
    outcomes: [
      'Program reporting cited 98% on-time milestone delivery across multi-agency releases',
      'Completed regulated modernization cycles with zero legislative audit findings',
      'Balanced public accessibility requirements with legacy agency system constraints',
    ],
  },
];

export default function PortfolioPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Executive Portfolio & AI Systems Built | Richard Ewing',
    description:
      'Production AI platforms (Exogram AI, CareerWin.ai, The AI Economist) and verified enterprise P&L leadership across Moss Adams, Tyler Technologies, and Sechrist Design.',
    url: 'https://www.richardewing.io/portfolio',
    mainEntity: {
      '@type': 'Person',
      name: 'Richard Ewing',
      jobTitle: 'Product Leader, Product & AI Economist, Founder & Chief Architect',
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

      {/* Hero Header */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Executive Portfolio · Product Leadership, P&amp;L &amp; AI Architecture
          </p>
          <h1>Enterprise P&amp;L leadership. Production AI systems built from zero.</h1>
          <p className="inner-lede">
            Most executives who own multi-million-dollar budgets stop building software. Most
            engineers who wire multi-model AI pipelines have never defended a company-wide P&amp;L,
            sunset a failing product line, or negotiated a $1M+ vendor contract. This page
            documents both halves of my work: three live intelligence platforms I architected
            from scratch, and 15+ years leading enterprise product and operations teams.
          </p>

          <div className="actions">
            <Link className="button button-gold" href="/advisory">
              Explore Executive Advisory ↗
            </Link>
            <Link className="button button-outline" href="/case-studies">
              Inspect 7 Verified Case Studies
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass space-y-3">
          <span>OPERATOR &amp; BUILDER LEDGER</span>
          <strong>15+ Years Enterprise Scale + 3 Live AI Platforms</strong>
          <p>
            Computer Science BS + MBA. Proven across B2B enterprise portfolios, multi-department
            P&amp;L turnarounds, regulated public systems, and 0-to-1 AI software.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1 text-left">
            <div className="bg-white/80 border border-[var(--line)] rounded-lg p-2.5">
              <div className="font-serif text-base font-bold text-[var(--forest)]">$25M</div>
              <div className="text-[10px] font-mono text-[var(--muted)]">
                Tyler Tech 0-to-1 ERP
              </div>
            </div>
            <div className="bg-white/80 border border-[var(--line)] rounded-lg p-2.5">
              <div className="font-serif text-base font-bold text-[var(--forest)]">$5M Cut</div>
              <div className="text-[10px] font-mono text-[var(--muted)]">
                Moss Adams Portfolio
              </div>
            </div>
            <div className="bg-white/80 border border-[var(--line)] rounded-lg p-2.5">
              <div className="font-serif text-base font-bold text-[var(--forest)]">+40%</div>
              <div className="text-[10px] font-mono text-[var(--muted)]">
                Delivery Velocity Lift
              </div>
            </div>
            <div className="bg-white/80 border border-[var(--line)] rounded-lg p-2.5">
              <div className="font-serif text-base font-bold text-[var(--forest)]">174+</div>
              <div className="text-[10px] font-mono text-[var(--muted)]">
                Published Works
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Section 1: Interactive Dual-Layer AI Systems Showcase */}
      <section id="ai-platforms" className="section">
        <div className="section-heading mb-10">
          <p className="eyebrow">
            <i /> Live Software &amp; AI Ventures
          </p>
          <h2>Three distinct intelligence architectures shipped to production.</h2>
          <p>
            Switch across each platform below to inspect both layers of the build: the
            commercial product problem solved for users and buyers, and the underlying AI,
            memory, security, and edge architecture engineered underneath.
          </p>
        </div>

        <PortfolioInteractiveShowcase />

        {/* Architectural Scope Clarity Note */}
        <div className="mt-6 bg-white border border-[var(--line)] rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div>
            <strong className="font-mono uppercase text-[var(--ink)] mr-2">
              Architectural Boundary Note:
            </strong>
            Rather than pre-training base neural weights from scratch, my engineering work
            focuses on the production systems layer around frontier foundation models (Claude,
            Gemini, OpenAI): persistent context graphs, vector RAG, multi-model routing,
            evidence-traceable generation, and deterministic pre-execution governance.
          </div>
          <Link
            href="/exogram/architecture"
            className="text-[var(--forest)] font-semibold whitespace-nowrap underline"
          >
            Inspect EAAP RFC-0001 ↗
          </Link>
        </div>
      </section>

      {/* Section 2: Hands-On AI & Systems Engineering Matrix */}
      <section
        id="ai-capabilities"
        className="section bg-[#ebe7dc]/60 border-y border-[var(--line)]"
      >
        <div className="section-heading mb-10">
          <p className="eyebrow">
            <i /> Technical Depth · Systems Builder
          </p>
          <h2>What I actually architect and build in AI.</h2>
          <p>
            Advisory recommendations and product roadmaps hold up better when the person
            writing them has personally wired the retrieval pipelines, database security
            policies, and runtime cost circuit breakers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-6 space-y-2.5"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--gold)] block">
                {cap.tag}
              </span>
              <h3 className="font-serif text-xl font-medium text-[var(--ink)]">
                {cap.title}
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed m-0">{cap.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Verified Enterprise Leadership & P&L Track Record */}
      <section id="enterprise-track-record" className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Verified Operator Provenance
          </p>
          <h2>Enterprise leadership &amp; P&amp;L track record by employer.</h2>
          <p>
            Every metric below is separated by company, seat held, and operational scope:
            enterprise SaaS commercialization, multi-product portfolio rationalization,
            company-wide P&amp;L management, and regulated public-sector modernization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <MetricPanel
            label="Tyler Technologies"
            value="$25M"
            trend="0-to-1 ERP"
            trendDirection="up"
            subtext="New municipal ERP product revenue plus 20% enterprise churn reduction."
            variant="white"
          />
          <MetricPanel
            label="Moss Adams"
            value="$5M Cut"
            trend="+40% Velocity"
            trendDirection="up"
            subtext="Reduced spend across 12 enterprise apps and cleared 200+ stale backlog items."
            variant="white"
          />
          <MetricPanel
            label="Sechrist Design"
            value="$20M"
            trend="200% YoY"
            trendDirection="up"
            subtext="Company-wide P&L ownership across 5 departments during broader transformation."
            variant="white"
          />
          <MetricPanel
            label="State of Washington"
            value="98%"
            trend="0 Audit Findings"
            trendDirection="neutral"
            subtext="On-time cloud modernization across public services reaching 7.7M residents."
            variant="forest"
          />
        </div>

        <div className="space-y-6">
          {careerLedger.map((item) => (
            <article
              key={item.company}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 hover:border-[var(--forest)] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[var(--line)] pb-4 mb-5">
                <div>
                  <span className="text-[11px] font-mono text-[var(--gold)] font-bold uppercase tracking-wider block">
                    {item.period}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[var(--ink)] mt-0.5">
                    {item.company}{' '}
                    <span className="text-base font-sans font-normal text-[var(--muted)]">
                      · {item.role}
                    </span>
                  </h3>
                </div>
                <div className="inline-flex self-start md:self-auto px-3.5 py-1.5 rounded-lg bg-[var(--forest)]/10 border border-[var(--forest)]/20 font-mono text-xs font-bold text-[var(--forest)]">
                  {item.headlineMetric}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--ink)] mb-1.5">
                    Mandate &amp; Operating Scope
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed m-0">
                    {item.scope}
                  </p>
                </div>

                <div className="lg:col-span-7 bg-white border border-[var(--line)] rounded-xl p-5">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--forest)] mb-2.5">
                    Documented Business Outcomes
                  </div>
                  <ul className="space-y-2">
                    {item.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2.5 text-xs text-zinc-800 leading-relaxed"
                      >
                        <span className="text-[var(--gold)] font-bold mt-0.5">✓</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Education & Credentials Bar */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-[var(--line)] rounded-xl p-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block">
              Graduate Business Foundation
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mt-1">
              Master of Business Administration (MBA)
            </strong>
            <span className="text-xs text-[var(--muted)]">City University of Seattle</span>
          </div>

          <div className="bg-white border border-[var(--line)] rounded-xl p-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block">
              Engineering Foundation
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mt-1">
              Bachelor of Science in Computer Science
            </strong>
            <span className="text-xs text-[var(--muted)]">ITT Technical Institute, Seattle</span>
          </div>

          <div className="bg-white border border-[var(--line)] rounded-xl p-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block">
              Industry Recognition
            </span>
            <strong className="font-serif text-lg text-[var(--ink)] block mt-1">
              AWS Startups Showcase &amp; Editor&apos;s Pick
            </strong>
            <span className="text-xs text-[var(--muted)]">
              Exogram AI · CIO.com · Built In · Mind the Product
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: Published Research & Executive Mandate Availability */}
      <section className="section border-t border-[var(--line)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--gold)] block">
                Published Research · 174+ Essays &amp; Frameworks
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--ink)]">
                Originator of Product Debt Index (PDI), Technical Insolvency Date, and AUEB.
              </h2>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                Author of the 20-chapter book <em>The Pragmatic AI Builder</em> and contributor
                across <strong>CIO.com</strong>, <strong>Built In</strong> (Editor&apos;s Pick),{' '}
                <strong>Mind the Product</strong>, and <strong>HackerNoon</strong>, writing for
                CEOs, CFOs, CTOs, and product leaders on software economics and agentic risk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/research/publications" className="button button-outline text-xs">
                Browse 174+ Publications ↗
              </Link>
              <Link href="/book" className="button button-outline text-xs">
                Read The Pragmatic AI Builder ↗
              </Link>
            </div>
          </div>

          <div className="bg-[var(--forest2)] text-white p-8 rounded-2xl flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8c7a8] block">
                Executive Mandates &amp; Advisory Availability
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                Advisory Sprints, PE Diligence &amp; Executive Product Leadership
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Available for fixed-scope AI pricing and portfolio sprints, Private Equity
                technical due diligence, and select Interim, Fractional, or Full-Time{' '}
                <strong className="text-white">Chief Product Officer (CPO)</strong>,{' '}
                <strong className="text-white">VP of Product</strong>, or{' '}
                <strong className="text-white">Head of AI Product &amp; Platform</strong> mandates.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link className="button button-gold text-xs" href="/advisory">
                Explore Advisory &amp; Sprints ↗
              </Link>
              <Link className="button button-ghost-light text-xs" href="/contact">
                Discuss an Executive Role ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
