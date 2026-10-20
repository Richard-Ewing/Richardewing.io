import type { Metadata } from 'next';
import Link from 'next/link';
import { RealityCheckDiagnostic } from '@/components/diagnostics/reality-check-diagnostic';

export const metadata: Metadata = {
  title: 'Reality Check: AI Economics Diagnostic',
  description:
    'A practical diagnostic to quantify your enterprise AI economics, uncover engineering waste, and generate an actionable remediation plan.',
  alternates: {
    canonical: 'https://www.richardewing.io/reality-check',
  },
  openGraph: {
    title: 'Reality Check | AI Economics Diagnostic | Richard Ewing',
    description:
      'Quantify your enterprise AI economics and uncover hidden engineering leaks in under 2 minutes.',
    url: 'https://www.richardewing.io/reality-check',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reality Check: AI Economics Diagnostic | Richard Ewing',
    description:
      'Quantify your enterprise AI economics and uncover hidden engineering leaks in under 2 minutes.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

export default function RealityCheckPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'The AI Reality Check Diagnostic',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    url: 'https://www.richardewing.io/reality-check',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    description:
      'Quantify your AI unit economics, identify engineering waste, and generate a prioritized action plan.',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Reality Check', item: 'https://www.richardewing.io/reality-check' },
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
            <i /> Interactive Diagnostic Experience
          </p>
          <h1>Reality Check</h1>
          <p className="inner-lede">
            A practical diagnostic to quantify your AI economics, find engineering waste,
            and generate a prioritized action plan before the next board review.
          </p>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING BENCHMARK</span>
          <strong>28.5% Average Waste</strong>
          <p>
            Typical enterprise AI initiatives lose over a quarter of their monthly spend
            to retries, idle seats, and unchecked context window growth.
          </p>
        </aside>
      </section>

      {/* Diagnostic Stepper */}
      <section className="section">
        <RealityCheckDiagnostic />
      </section>

      {/* Explanatory Deep Dive */}
      <section className="section border-t border-[var(--line)]">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Methodology
          </p>
          <h2>Where enterprise AI spend actually goes.</h2>
          <p>
            Most technology leaders track aggregate cloud invoices, not unit-level task
            economics. Here are the four primary leaks uncovered in production audits:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
            <span className="text-[10px] font-mono text-[var(--gold)]">LEAK 01</span>
            <h3 className="font-serif text-lg font-medium my-2">Unused Capacity</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Over-allocated reserved GPU instances and dormant seats across developer
              tool subscriptions.
            </p>
          </div>
          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
            <span className="text-[10px] font-mono text-[var(--gold)]">LEAK 02</span>
            <h3 className="font-serif text-lg font-medium my-2">Inefficient Workflows</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Uncached agent loops, redundant tool calls, and bloated prompt templates
              multiplying token costs.
            </p>
          </div>
          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
            <span className="text-[10px] font-mono text-[var(--gold)]">LEAK 03</span>
            <h3 className="font-serif text-lg font-medium my-2">Over-Provisioning</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Defaulting to premier frontier models for classification or extraction tasks
              that smaller models execute for 90% less.
            </p>
          </div>
          <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
            <span className="text-[10px] font-mono text-[var(--gold)]">LEAK 04</span>
            <h3 className="font-serif text-lg font-medium my-2">Low-Value Use Cases</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Deploying internal AI copilots on non-core workflows where the human review
              burden exceeds manual task duration.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Ready for an in-depth audit?</h2>
        <p>
          Book a 2-week scoped pricing and unit economics sprint to stress-test your AI
          P&L.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/advisory">
            Explore Executive Advisory ↗
          </Link>
        </div>
      </section>
    </>
  );
}
