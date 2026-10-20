import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product & AI Economist Operating Kit ($29)',
  description:
    'Instant download of 5 production P&L spreadsheets, board deck templates, and lifetime access to the interactive browser workspace used to scale $0 to $25M ARR.',
  alternates: {
    canonical: 'https://www.richardewing.io/operating-kit',
  },
  openGraph: {
    title: 'The Product & AI Economist Operating Kit ($29) | Richard Ewing',
    description:
      '5 working P&L models, board defense deck blueprints, and interactive browser workspace access for $29.',
    url: 'https://www.richardewing.io/operating-kit',
    type: 'website',
  },
};

const kitItems = [
  {
    n: '01',
    title: 'AI Feature Pricing & Token Margin Stress-Tester',
    format: 'Excel (.xlsx) + CSV + Interactive',
    desc: 'Model your cost-per-prompt, retry rates, and customer usage bands before launching AI features. Know your exact gross margin floor.',
  },
  {
    n: '02',
    title: 'Zombie Feature Kill-List & Backlog ROI Scoring Matrix',
    format: 'Excel (.xlsx) + Notion Template',
    desc: 'The exact framework used to identify negative-carry code, eliminate 30% of zombie backlog items, and free up hundreds of engineering hours.',
  },
  {
    n: '03',
    title: '12-Slide CFO & Board Defense Deck Blueprint',
    format: 'PowerPoint (.pptx) + Keynote',
    desc: 'Pre-formatted board presentation deck that connects engineering velocity directly to product P&L metrics, gross margins, and capital efficiency.',
  },
  {
    n: '04',
    title: 'First-30-Days P&L Turnaround Runbook',
    format: 'PDF Guide + Action Checklist',
    desc: 'Step-by-step executive runbook for newly appointed product leaders or founders taking over a stagnant or loss-making software product.',
  },
  {
    n: '05',
    title: 'Interactive Browser Workspace Access',
    format: 'Live Web Application (/workspace)',
    desc: 'Configure your company profile, run local unit economics simulations in your browser, and generate board-ready executive summaries with zero cloud lock-in.',
  },
];

export default function OperatingKitPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'The Product & AI Economist Operating Kit',
    description:
      'Production P&L spreadsheets, board deck templates, and interactive workspace access.',
    image: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg',
    offers: {
      '@type': 'Offer',
      price: '29.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.richardewing.io/operating-kit',
    },
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
            <i /> Executive Toolkit · Instant Access
          </p>
          <h1>The Product &amp; AI Economist Operating Kit.</h1>
          <p className="inner-lede">
            The exact 5 working P&amp;L models, board deck templates, and interactive tools
            used to scale from $0 to $25M ARR and turn around a $20M P&amp;L (+200% YoY).
            Zero theoretical filler. 100% operational math.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/toolkit">
              Get the Operating Kit ($29) ↗
            </Link>
            <Link className="button button-outline" href="/reality-check">
              Try the free Reality Check ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>INSTANT DIGITAL ACCESS</span>
          <strong>5 Production Models + Interactive Workspace.</strong>
          <p>
            One-time payment of $29. Includes all spreadsheets, deck templates, and lifetime
            browser workspace updates. 14-day full refund guarantee.
          </p>
        </aside>
      </section>

      {/* Kit Inventory */}
      <section className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Included Assets
          </p>
          <h2>Everything inside the kit.</h2>
          <p>
            Download the files immediately after checkout. Compatible with Microsoft Excel,
            Google Sheets, Apple Keynote, and modern web browsers.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl">
          {kitItems.map((item) => (
            <div
              key={item.n}
              className="border border-[var(--line)] bg-[#FAF8F3] rounded-xl p-6 hover:border-[var(--forest)] hover:shadow-md transition flex flex-col sm:flex-row gap-6 items-start justify-between"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[var(--gold)] font-bold">
                    {item.n} / ASSET
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(30,51,39,0.06)] text-[var(--forest)] font-medium">
                    {item.format}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-medium text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex-none self-end sm:self-center">
                <span className="text-xs font-mono text-[var(--forest)] font-semibold">
                  Included ✓
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee & Checkout Callout */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto border border-[var(--forest)] rounded-2xl p-8 sm:p-12 bg-[#FAF8F3] text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider">
            100% Risk-Free Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[var(--ink)]">
            Gain immediate control over your software unit economics.
          </h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xl mx-auto">
            If this kit doesn’t help you identify at least 10x its price in engineering or
            cloud waste in your first 14 days, send an email for a full, courteous refund.
          </p>
          <div className="pt-2">
            <Link className="button button-gold text-sm !px-8" href="/toolkit">
              Get Instant Access ($29) ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Need tailored 1-on-1 assistance with your models?</h2>
        <p>
          Book a 60-minute live P&amp;L teardown or explore a 2-week turnaround sprint.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/pricing-sprints">
            View All Sprints &amp; Pricing ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
