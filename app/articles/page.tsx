import type { Metadata } from 'next';
import Link from 'next/link';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { ResearchExplorer } from '@/components/research/research-explorer';

export const metadata: Metadata = {
  title: 'Forensic AI & Engineering Research',
  description:
    'Published research, essays, and empirical articles on AI unit economics, R&D capital efficiency, and tech debt. Written for CTOs and engineering leaders.',
  alternates: {
    canonical: 'https://www.richardewing.io/articles',
  },
  openGraph: {
    title: 'Forensic Engineering Research & Articles | Richard Ewing',
    description:
      'Deep essays on R&D capital efficiency, AI unit economics, and technical debt valuation. Published in CIO.com, Built In, and Mind the Product.',
    url: 'https://www.richardewing.io/articles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forensic Engineering Research & Articles | Richard Ewing',
    description:
      'Deep essays on R&D capital efficiency, AI unit economics, and technical debt valuation. Published in CIO.com, Built In, and Mind the Product.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

export default function ArticlesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Forensic Engineering Research & Articles',
    description:
      'Deep essays on R&D capital efficiency, AI unit economics, and technical debt valuation.',
    url: 'https://www.richardewing.io/articles',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.richardewing.io/articles' },
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
            <i /> Forensic Research · 174+ Publications
          </p>
          <h1>Forensic AI &amp; Engineering Research</h1>
          <p className="inner-lede">
            Published essays and operational analysis across CIO.com, Built In, Mind the
            Product, HackerNoon, and LinkedIn. Filter by domain or search by topic.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/concepts">
              Explore canonical concepts
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING INVARIANT</span>
          <strong>Evidence over hype. Always.</strong>
          <p>
            Grounding enterprise technology decisions in real P&amp;L turnaround data,
            measurable costs, and verified engineering metrics.
          </p>
        </aside>
      </section>

      {/* Main Research Content */}
      <section className="section">
        <ResearchExplorer articles={RESEARCH_CORPUS} limit={30} />
      </section>

      {/* Flagship Frameworks & Executive Diagnostics Feeder Section */}
      <section className="section border-t border-[var(--line)]">
        <div className="section-heading mb-10">
          <p className="eyebrow">
            <i /> Authority Feeder · Core Models
          </p>
          <h2>Flagship Frameworks &amp; Executive Diagnostics</h2>
          <p>
            Direct 1-click access to core economic doctrine, empirical diagnostic calculators, and executive governance briefings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--gold)] uppercase font-bold tracking-wider">01 / DOCTRINE</span>
              <h3 className="font-serif text-lg font-bold text-[var(--ink)] my-2">Flagship Frameworks</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Foundational models quantifying technical liabilities and agentic workflow risks.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-[var(--forest)] border-t border-[var(--line)] pt-3">
              <li><Link href="/articles/frameworks/technical-insolvency-date" className="hover:underline">Technical Insolvency Date ↗</Link></li>
              <li><Link href="/articles/frameworks/vibe-coding-debt" className="hover:underline">Vibe Coding Debt ↗</Link></li>
              <li><Link href="/articles/frameworks/shadow-agents" className="hover:underline">Shadow Agents ↗</Link></li>
            </ul>
          </div>

          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--gold)] uppercase font-bold tracking-wider">02 / DIAGNOSTICS</span>
              <h3 className="font-serif text-lg font-bold text-[var(--ink)] my-2">Primary Diagnostics</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Interactive calculators to stress-test your AI unit economics and technical debt.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-[var(--forest)] border-t border-[var(--line)] pt-3">
              <li><Link href="/tools/pdi" className="hover:underline">Product Debt Index (PDI) ↗</Link></li>
              <li><Link href="/reality-check" className="hover:underline">AI Reality Check ↗</Link></li>
              <li><Link href="/tools/aueb" className="hover:underline">AI Unit Economics (AUEB) ↗</Link></li>
            </ul>
          </div>

          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--gold)] uppercase font-bold tracking-wider">03 / AUDITS &amp; SPRINTS</span>
              <h3 className="font-serif text-lg font-bold text-[var(--ink)] my-2">Financial Capital Audits</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Quantify engineering payroll leakage and scope fixed-timeline turnaround sprints.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-[var(--forest)] border-t border-[var(--line)] pt-3">
              <li><Link href="/roi-calculator" className="hover:underline">Executive ROI Calculator ↗</Link></li>
              <li><Link href="/pricing-sprints" className="hover:underline">Fixed-Scope Sprints ↗</Link></li>
              <li><Link href="/advisory" className="hover:underline">Executive Advisory ↗</Link></li>
            </ul>
          </div>

          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[var(--gold)] uppercase font-bold tracking-wider">04 / GOVERNANCE</span>
              <h3 className="font-serif text-lg font-bold text-[var(--ink)] my-2">Role Briefings &amp; Platforms</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                Tailored executive playbooks and comparative runtime safety evaluations.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-[var(--forest)] border-t border-[var(--line)] pt-3">
              <li><Link href="/for-cfos" className="hover:underline">CFO Governance Briefing ↗</Link></li>
              <li><Link href="/for-ctos" className="hover:underline">CTO Governance Briefing ↗</Link></li>
              <li><Link href="/compare/ai-guardrails-platforms" className="hover:underline">AI Guardrails Comparison ↗</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Need independent analysis on your AI roadmap?</h2>
        <p>
          Book a 1-on-1 working session to audit your unit economics and engineering
          backlog.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/pricing-sprints">
            View Engagement Tiers ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
