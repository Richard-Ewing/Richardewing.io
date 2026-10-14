import type { Metadata } from 'next';
import Link from 'next/link';
import { ROICalculatorClient } from './ROICalculatorClient';

export const metadata: Metadata = {
  title: 'AI Waste & ROI Calculator | Richard Ewing',
  description:
    'Calculate your monthly AI spend leakage, engineering R&D waste, and Product Debt Index (PDI) risk score. Clear metrics for CFOs and engineering leads.',
  alternates: { canonical: 'https://www.richardewing.io/roi-calculator' },
  openGraph: {
    title: 'AI Waste & ROI Calculator | Richard Ewing',
    description:
      'Calculate your monthly AI spend leakage, engineering R&D waste, and Product Debt Index (PDI) risk score.',
    url: 'https://www.richardewing.io/roi-calculator',
    type: 'website',
  },
};

export default function ROICalculatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Waste & Capital Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://www.richardewing.io/roi-calculator',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    description:
      'Quantify token explosion, context rot costs, and unmonitored retry leakage across your engineering team.',
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
            <i /> Interactive Diagnostic · Capital Efficiency
          </p>
          <h1>AI Waste &amp; Capital Calculator</h1>
          <p className="inner-lede">
            Quantify token explosion, context rot costs, and unmonitored retry leakage
            across your engineering team. Generate boardroom-ready metrics before your next
            budget cycle.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run Flagship Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/tools">
              View all 25 diagnostics
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING BENCHMARK</span>
          <strong>28.5% Average Leakage</strong>
          <p>
            Across 42 surveyed engineering organizations, ad-hoc AI features leak over a
            quarter of API spend in dead retries and unmonitored prompt context.
          </p>
        </aside>
      </section>

      {/* Calculator Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <ROICalculatorClient />
        </div>
      </section>

      {/* Methodology Note */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto bg-white border border-[var(--line)] rounded-2xl p-8 sm:p-12 shadow-sm text-sm text-[var(--muted)] space-y-4">
          <h3 className="text-xl font-serif font-bold text-[var(--ink)]">
            Calculator Methodology &amp; Empirical Model
          </h3>
          <p className="leading-relaxed">
            This calculator applies the Product Debt Index (PDI) and AI Provider Efficiency
            Ratio (A-PER) baseline models. Engineering waste is calculated assuming a
            $15,000/month fully-loaded engineer cost with variable capacity misallocated to
            non-deterministic maintenance depending on governance maturity.
          </p>
          <div className="pt-4 border-t border-[var(--line)] flex flex-wrap gap-6 text-xs font-mono font-bold text-[var(--muted)]">
            <Link href="/tools" className="hover:text-[var(--ink)] transition-colors">
              Explore All Diagnostic Tools →
            </Link>
            <Link href="/case-studies" className="hover:text-[var(--ink)] transition-colors">
              View Enterprise Case Studies →
            </Link>
            <Link href="/advisory" className="hover:text-[var(--ink)] transition-colors">
              Book Executive P&amp;L Advisory →
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Remediation Blueprint</p>
        <h2>Need help recovering lost engineering capacity?</h2>
        <p>
          Book a 1-on-1 P&amp;L Teardown or run a 2-Week Turnaround Sprint to restructure
          your AI unit margins.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/pricing-sprints">
            View Pricing &amp; Sprints ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
