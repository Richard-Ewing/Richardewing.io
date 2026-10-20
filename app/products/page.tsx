import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products & Platforms: Exogram & CareerWin',
  description:
    'Turn AI insights into action with practical software platforms built for operators, not theorists. Exogram AI governance and CareerWin career intelligence.',
  alternates: {
    canonical: 'https://www.richardewing.io/products',
  },
  openGraph: {
    title: 'Products & Platforms | Richard Ewing',
    description:
      'Turn AI insights into action with practical software platforms built for operators. Exogram AI & CareerWin.',
    url: 'https://www.richardewing.io/products',
    type: 'website',
  },
};

export default function ProductsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Products & Platforms by Richard Ewing',
    description:
      'Software platforms and operational toolkits built for measurable enterprise and career outcomes.',
    url: 'https://www.richardewing.io/products',
  };

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
            <i /> Production Platforms · Operator Tooling
          </p>
          <h1>Tools for measurable outcomes.</h1>
          <p className="inner-lede">
            Turn AI insights into action with practical software built for operators, not
            theorists. Production systems governing agent behavior and advancing career
            growth.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/portfolio">
              View Executive Portfolio
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE PRODUCT THESIS</span>
          <strong>Software Solves Policy Leaks</strong>
          <p>
            You cannot govern AI costs through written guidelines alone. Governance
            requires deterministic runtime architecture.
          </p>
        </aside>
      </section>

      {/* 2 Core Platform Showcases */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Exogram AI */}
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="h-40 rounded-lg bg-gradient-to-br from-emerald-900 to-zinc-900 p-6 flex flex-col justify-between text-white mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#d8c7a8] uppercase">
                  Runtime AI Governance
                </span>
                <div>
                  <h3 className="font-serif text-3xl font-medium">Exogram AI</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Usage analytics and cost optimization
                  </p>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                An enterprise runtime governance engine that monitors, intercepts, and
                budgets autonomous agent tool calls in real time before unexpected cloud
                bills occur.
              </p>

              <div className="space-y-3 pt-4 border-t border-[var(--line)] mb-8">
                {[
                  'Track and govern enterprise LLM usage',
                  'Deterministic cost controls and rate limits',
                  'Monitor autonomous agents and tool-calling cascades',
                  'Enterprise integrations with standard LLM stacks',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-zinc-800">
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href="https://exogram.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-gold w-full text-center"
              >
                Learn more at Exogram.ai ↗
              </a>
            </div>
          </div>

          {/* CareerWin */}
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="h-40 rounded-lg bg-gradient-to-br from-[#8a5d2b] to-zinc-900 p-6 flex flex-col justify-between text-white mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#d8c7a8] uppercase">
                  Career Intelligence Platform
                </span>
                <div>
                  <h3 className="font-serif text-3xl font-medium">CareerWin</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    AI-powered career strategy platform
                  </p>
                </div>
              </div>

              <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                Evidence-led career progression engine for product leaders, engineers, and
                operators. Evaluates resume impact, simulates executive interviews, and
                models compensation outcomes.
              </p>

              <div className="space-y-3 pt-4 border-t border-[var(--line)] mb-8">
                {[
                  'Resume and LinkedIn optimization with impact scoring',
                  'Executive interview preparation and dynamic probing',
                  'Career strategy and executive compensation models',
                  'Proven outcomes across premier tech companies',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-zinc-800">
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href="https://careerwin.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-gold w-full text-center"
              >
                Learn more at CareerWin.ai ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Kit Callout */}
      <section className="section border-t border-[var(--line)]">
        <div className="bg-[var(--forest2)] text-white p-10 rounded-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#d8c7a8] uppercase tracking-widest">
              Digital Toolkit
            </span>
            <h3 className="font-serif text-2xl font-medium">
              The AI Economist Operating Kit
            </h3>
            <p className="text-xs text-zinc-300 max-w-lg leading-relaxed">
              Worksheets, spreadsheets, and decision models for calculating LLM gross
              margins, sizing engineer review drag, and presenting AI P&L to boards.
            </p>
          </div>
          <div>
            <Link className="button button-gold whitespace-nowrap" href="/operating-kit">
              Get the Operating Kit ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
