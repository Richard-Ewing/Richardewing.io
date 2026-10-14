import type { Metadata } from 'next';
import Link from 'next/link';
import { IsometricStack } from '@/components/framework/isometric-stack';

export const metadata: Metadata = {
  title: 'Production AI Governance & Economics Framework | Richard Ewing',
  description:
    'A practical model for pricing, building, governing, and measuring AI in production. Turn AI from an uncontrolled cost center into compound capital.',
  alternates: {
    canonical: 'https://www.richardewing.io/framework',
  },
  openGraph: {
    title: 'Production AI Governance & Economics Framework | Richard Ewing',
    description:
      'A practical model for pricing, building, and governing AI. Turn AI from an uncontrolled cost center into compound capital.',
    url: 'https://www.richardewing.io/framework',
    type: 'website',
  },
};

export default function FrameworkPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    name: 'Production AI Governance & Economics Framework',
    headline: 'A practical model for pricing, building, and governing AI',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    url: 'https://www.richardewing.io/framework',
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
            <i /> AI Economics Framework · System Architecture
          </p>
          <h1>A practical model for pricing, building, and governing AI.</h1>
          <p className="inner-lede">
            Turn AI from an uncontrolled cost center into compound capital. A 5-tier
            architectural doctrine connecting low-level inference tokens directly to
            boardroom gross margins.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Test your numbers in the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/advisory">
              Explore advisory sprints
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>ARCHITECTURAL DOCTRINE</span>
          <strong>Deterministic Over Hype</strong>
          <p>
            Do not let probabilistic LLMs determine your company&apos;s unit margins. Wrap
            every model in deterministic economic policy.
          </p>
        </aside>
      </section>

      {/* Interactive 5-Tier Isometric Stack */}
      <section className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> The 5-Layer Stack
          </p>
          <h2>Interactive Architectural Doctrine.</h2>
          <p>
            Click each layer to inspect the operating mechanisms, cost control
            checkpoints, and executive metrics that safeguard enterprise profitability.
          </p>
        </div>

        <IsometricStack />
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Put the framework to work</p>
        <h2>Apply this model to your roadmap.</h2>
        <p>
          Book a 2-week scoped pricing sprint to audit your AI architecture and protect
          margins.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/contact">
            Request an Advisory Sprint ↗
          </Link>
        </div>
      </section>
    </>
  );
}
