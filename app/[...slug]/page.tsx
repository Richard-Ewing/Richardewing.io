import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pageData, siteUrl } from '@/lib/site-data';
import { frameworks } from '@/lib/data';
import { subFrameworks } from '@/app/lib/framework-data';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';
import { PILLARS } from '@/app/glossary/pillarsMapping';
import { SKILLS, FAILURES } from '@/lib/content/skills';
import { CAREER_PATHS } from '@/app/lib/career-paths';

export function generateStaticParams() {
  return pageData.map((p) => ({ slug: p.slug.split('/') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join('/');
  const page = pageData.find((p) => p.slug === key);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${siteUrl}/${page.slug}` },
    openGraph: {
      title: `${page.title} | Richard Ewing`,
      description: page.description,
      url: `${siteUrl}/${page.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.title} | Richard Ewing`,
      description: page.description,
    },
  };
}

const relatedCards = [
  {
    title: 'Reality Check',
    desc: 'Compare claims with operational unit economics.',
    href: '/reality-check',
    tag: 'DIAGNOSTIC',
  },
  {
    title: 'Research Library',
    desc: 'Evidence, frameworks, and practical lessons.',
    href: '/research',
    tag: 'RESEARCH',
  },
  {
    title: 'Published Work',
    desc: 'Browse writing across industry technology outlets.',
    href: '/research/publications',
    tag: 'PUBLICATIONS',
  },
  {
    title: 'Executive Portfolio',
    desc: 'Experience, platforms, and measurable outcomes.',
    href: '/portfolio',
    tag: 'PORTFOLIO',
  },
  {
    title: 'Executive Advisory',
    desc: 'Focused engagements around unit economics and pricing.',
    href: '/advisory',
    tag: 'ADVISORY',
  },
  {
    title: 'Tools & Diagnostics',
    desc: 'Explore AI spend leak calculators and benchmark indices.',
    href: '/tools',
    tag: 'TOOLS',
  },
];

const SITE_MAP_GROUPS = [
  {
    category: 'Core Commercial & Executive Advisory',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Executive Advisory', href: '/advisory' },
      { label: 'Engagement Paths', href: '/engagement-paths' },
      { label: 'Pricing & Sprints', href: '/pricing-sprints' },
      { label: 'Transparent Pricing', href: '/pricing' },
      { label: 'Schedule Advisory Briefing', href: '/schedule' },
      { label: 'Advisory Services Overview', href: '/services' },
      { label: 'AI Cost Attribution Audit', href: '/services/ai-cost-audit' },
      { label: 'Platform Consolidation Strategy', href: '/services/platform-consolidation' },
      { label: 'PE & M&A Technical Due Diligence', href: '/services/technical-due-diligence' },
      { label: 'Executive Portfolio', href: '/portfolio' },
      { label: 'Case Studies & Runtime Incidents', href: '/case-studies' },
      { label: 'Speaking & Executive Workshops', href: '/speaking' },
      { label: 'About Richard Ewing', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    category: 'Executive Persona Hubs & Products',
    links: [
      { label: 'For CFOs & Finance Leaders', href: '/for-cfos' },
      { label: 'For CTOs & VPs of Engineering', href: '/for-ctos' },
      { label: 'For COOs & Operations Leaders', href: '/for-coos' },
      { label: 'For Board Directors', href: '/for-boards' },
      { label: 'For Private Equity & Investors', href: '/for-investors' },
      { label: 'For General Counsels & Legal', href: '/for-general-counsels' },
      { label: 'Products & Platforms Overview', href: '/products' },
      { label: 'Operating Kit ($29)', href: '/operating-kit' },
      { label: 'Executive Toolkit', href: '/toolkit' },
      { label: 'The AI Economist Book', href: '/ai-economist-book' },
      { label: 'Builder Master Curriculum', href: '/builder-curriculum' },
      { label: 'The AI Product Builder Cohort', href: '/programs/ai-product-builder' },
      { label: 'Exogram Runtime Governance', href: '/exogram' },
      { label: 'Exogram Architecture', href: '/exogram/architecture' },
      { label: 'Exogram Documentation', href: '/exogram/docs' },
      { label: 'CareerWin Intelligence', href: '/careerwin' },
    ],
  },
  {
    category: 'Diagnostic Calculators & Forensic Tools (35+)',
    links: [
      { label: 'Reality Check Diagnostic', href: '/reality-check' },
      { label: 'All Diagnostic Calculators', href: '/tools' },
      { label: 'AI Waste & ROI Calculator', href: '/roi-calculator' },
      { label: 'Product Debt Index (PDI)', href: '/tools/pdi' },
      { label: 'AI Unit Economics Benchmark (AUEB)', href: '/tools/aueb' },
      { label: 'Revenue Per Engineer (APER)', href: '/tools/aper' },
      { label: 'Valuation Scenario Engine (EV-SE)', href: '/tools/ev-se' },
      { label: 'CFO R&D Capitalization Audit', href: '/tools/cfo-capitalization-audit' },
      { label: 'Section 174 AI Tax Calculator', href: '/tools/section-174-calculator' },
      { label: 'Board AI Risk Scorecard', href: '/tools/board-risk-scorecard' },
      { label: 'AI Feature Margin Calculator', href: '/tools/ai-feature-margin' },
      { label: 'SLM vs Cloud API Calculator', href: '/tools/slm-vs-api' },
      { label: 'Small Model Break-Even Calculator', href: '/tools/slm-break-even' },
      { label: 'Cloud Repatriation Calculator', href: '/tools/cloud-repatriation' },
      { label: 'FTE Displacement & Support ROI', href: '/tools/fte-displacement' },
      { label: 'Negative-Carry Code Auditor', href: '/tools/negative-carry-code-auditor' },
      { label: 'AI Coding Agent Readiness (AARI)', href: '/tools/aari' },
      { label: 'Multi-Agent Token Simulator', href: '/tools/agent-router' },
      { label: 'MCP Security & Connection Auditor', href: '/tools/mcp-security-auditor' },
      { label: 'Shadow AI Risk Calculator', href: '/tools/shadow-ai' },
      { label: 'Prompt Injection Sandbox', href: '/tools/prompt-injection-sandbox' },
      { label: 'RAG Chunking Visualizer', href: '/tools/rag-chunking-visualizer' },
      { label: 'Audit Interview Assessment', href: '/tools/audit-interview' },
      { label: 'Code Review Bottleneck Calculator', href: '/tools/code-review-bottleneck-calc' },
      { label: 'Spec-Driven Development Scorecard', href: '/tools/spec-quality-scorecard' },
      { label: 'Copilot ROI Calculator', href: '/tools/copilot-roi' },
      { label: 'Tech Leadership Career Diagnostic', href: '/tools/career-pathing' },
      { label: 'Executive AI Operating Model Check', href: '/tools/executive-ai-operating-model' },
      { label: 'CPO Product Portfolio Margin Matrix', href: '/tools/cpo-product-portfolio-matrix' },
      { label: 'Volatility Tax Auditor (VTA)', href: '/tools/vta' },
      { label: 'M&A Technical Due Diligence Tool', href: '/tools/due-diligence' },
      { label: 'EU AI Act Compliance Checker', href: '/tools/eu-ai-act-checker' },
      { label: 'AI ROI Timeline Projector', href: '/tools/ai-roi-timeline' },
      { label: 'Hallucination Tax Calculator', href: '/tools/hallucination-tax' },
      { label: 'Innovation Tax Calculator', href: '/tools/innovation-tax-calculator' },
      { label: 'Agentic Drift Matrix', href: '/tools/agentic-drift-matrix' },
      { label: 'AI Unit Economics Audit', href: '/tools/ai-unit-economics-audit' },
    ],
  },
  {
    category: 'Research Library, Hubs & Benchmarks',
    links: [
      { label: 'Research Library', href: '/research' },
      { label: 'Published Works (174+)', href: '/research/publications' },
      { label: 'The AI Economist Blog (127+ Essays)', href: '/blog' },
      { label: 'The AI Economist Newsletter', href: '/newsletter' },
      { label: 'Canonical Concepts Hub', href: '/concepts' },
      { label: 'Executive Glossary Hub', href: '/glossary' },
      { label: 'Production AI Governance Framework', href: '/framework' },
      { label: 'Benchmark Reports Hub', href: '/reports' },
      { label: 'State of AI Engineering Report', href: '/reports/state-of-ai-engineering' },
      { label: 'AI Discoverability & GEO Benchmark', href: '/benchmark/ai-discoverability' },
      { label: 'AI Capital 2026 Benchmark', href: '/benchmark/ai-capital-2026' },
      { label: 'Enterprise AI Q&A Hub', href: '/answers' },
      { label: 'Platform & Tool Comparisons', href: '/compare' },
      { label: 'Executive Challenges Hub', href: '/challenges' },
      { label: 'Enterprise Verticals Hub', href: '/industries' },
      { label: 'Career Pathways Hub', href: '/careers' },
      { label: 'Vault Curriculum Tracks', href: '/vault/curriculum/tracks' },
    ],
  },
];

export default async function DynamicSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join('/');
  const page = pageData.find((p) => p.slug === key);

  if (!page) {
    notFound();
  }

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url: `${siteUrl}/${page.slug}`,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Richard Ewing',
        url: siteUrl,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: page.title, item: `${siteUrl}/${page.slug}` },
      ],
    },
  ];

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
            <i /> Richard Ewing · Product & AI Economist
          </p>
          <h1>{page.title}</h1>
          <p className="inner-lede">{page.description}</p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/research/publications">
              Explore published work
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING PRINCIPLE</span>
          <strong>Measure the economics. Then make the call.</strong>
          <p>Clear assumptions. Practical tools. Measurable outcomes.</p>
        </aside>
      </section>

      {page.slug === 'site-map' ? (
        <section className="section border-t border-[var(--line)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SITE_MAP_GROUPS.map((group) => (
              <div key={group.category} className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl">
                <h2 className="font-serif text-xl font-medium mb-4 text-[var(--ink)]">
                  {group.category}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link className="text-[var(--forest2)] hover:underline" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl">
              <h2 className="font-serif text-xl font-medium mb-4 text-[var(--ink)]">
                Core Frameworks & Sub-Framework Pillars
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {frameworks.map((f) => (
                  <li key={f.slug}>
                    <Link className="text-[var(--forest2)] hover:underline" href={`/articles/frameworks/${f.slug}`}>
                      {f.name}
                    </Link>
                  </li>
                ))}
                {Object.values(subFrameworks).map((fw) => (
                  <li key={fw.slug}>
                    <Link className="text-[var(--forest2)] hover:underline" href={`/framework/${fw.slug}`}>
                      {fw.name} Framework
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl">
              <h2 className="font-serif text-xl font-medium mb-4 text-[var(--ink)]">
                Glossary Pillars, Skills & Failure Signatures
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {PILLARS.map((p) => (
                  <li key={p.slug}>
                    <Link className="text-[var(--forest2)] hover:underline" href={`/glossary/pillars/${p.slug}`}>
                      {p.name}
                    </Link>
                  </li>
                ))}
                {SKILLS.slice(0, 10).map((s) => (
                  <li key={s.slug}>
                    <Link className="text-[var(--forest2)] hover:underline" href={`/skills/${s.slug}`}>
                      {s.title}
                    </Link>
                  </li>
                ))}
                {FAILURES.slice(0, 10).map((f) => (
                  <li key={f.slug}>
                    <Link className="text-[var(--forest2)] hover:underline" href={`/failures/${f.slug}`}>
                      {f.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl md:col-span-2">
              <h2 className="font-serif text-xl font-medium mb-4 text-[var(--ink)]">
                Canonical Concepts & Career Pathways
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                {CANONICAL_CONCEPTS.slice(0, 24).map((c) => (
                  <li key={c.slug}>
                    <Link className="text-[var(--forest2)] hover:underline" href={`/concepts/${c.slug}`}>
                      {c.title}
                    </Link>
                  </li>
                ))}
                {CAREER_PATHS.map((cp) => (
                  <li key={cp.slug}>
                    <Link className="text-[var(--forest2)] hover:underline" href={`/careers/${cp.slug}`}>
                      {cp.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Editorial Content Section */}
          <section className="section page-intro">
            <div>
              <p className="eyebrow">The System</p>
              <h2>Evidence-led clarity for technology leaders.</h2>
            </div>
            <div>
              <p>{page.description}</p>
              <p className="mt-4 text-xs text-[var(--muted)] leading-relaxed">
                All research, diagnostic tools, and advisory methodologies on RichardEwing.io
                are grounded in 15+ years of enterprise software P&L turnaround experience.
                Explore related tools and frameworks below.
              </p>
            </div>
          </section>

          {/* Cross-Link Route Grid */}
          <section className="section border-t border-[var(--line)]">
            <div className="route-grid">
              {relatedCards.map((c, i) => (
                <Link className="route-card reveal" href={c.href} key={c.href}>
                  <span className="route-tag">
                    {c.tag} / 0{i + 1}
                  </span>
                  <div className={`route-visual visual-${i + 1}`}>
                    <span>{`0${i + 1}`}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <b>Explore ↗</b>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Make the next decision with better evidence.</h2>
        <p>
          Start with a diagnostic, explore the research, or discuss a focused engagement.
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
