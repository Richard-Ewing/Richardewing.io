import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ · AI Advisory, Exogram & Frameworks | Richard Ewing',
  description:
    'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform. Clear answers for engineering executives.',
  alternates: { canonical: 'https://www.richardewing.io/faq' },
  openGraph: {
    title: 'FAQ · AI Advisory, Exogram & Frameworks | Richard Ewing',
    description:
      'Frequently asked questions about AI Economics, advisory services, diagnostic tools, and the Exogram platform.',
    url: 'https://www.richardewing.io/faq',
    type: 'website',
  },
};

const faqs = [
  {
    category: 'Product & AI Economist Engagements',
    question: 'What are the 3 Buying Paths for working with Richard Ewing?',
    answer:
      'We organize engagements into 3 clear paths: Path A (Fix & Scale an Existing Product P&L) starts with Free Diagnostic Calculators ($0), the Product & AI Economist Operating Kit + Live Workspace ($29), a 60-minute 1-on-1 P&L Teardown ($450), and a 2-Week Turnaround Sprint ($2,500). Path B (Build a New 0-to-1 AI Product) is a 21-Day 0-to-1 AI Product Build Sprint ($7,500) delivering deployed software on Next.js and Cloudflare Edge. Path C covers Executive Leadership & Diligence: Fractional CPO / Product Economist ($10,000/mo), PE & M&A Product Due Diligence ($15,000), and Sponsored Benchmark Research ($2,500+).',
  },
  {
    category: 'Product & AI Economist Engagements',
    question: 'How do you measure technical debt and Zombie Features in financial terms?',
    answer:
      'We deploy the Product Debt Index (PDI), Revenue Per Engineer (APER), and AI Unit Economics Benchmark (AUEB) to convert feature bloat, maintenance load, and token burn into direct dollar liabilities and recoverable EBITDA.',
  },
  {
    category: 'Product & AI Economist Engagements',
    question: 'Who is Richard Ewing and what is his background?',
    answer:
      'Richard Ewing is a Product & AI Economist, executive product leader (CPO / VP of Product), and Founder of Exogram.ai (enterprise AI governance) and CareerWin.ai (career intelligence). He scaled his product portfolio from $0 to $25M ARR at Tyler Technologies (S&P 500), turned around a $20M P&L (+200% YoY), cut $5M in annualized product waste, and holds an MBA in Finance and a BS in Computer Science.',
  },
  {
    category: 'Exogram & Technical Governance',
    question: 'What is Exogram and how does it prevent AI billing shock?',
    answer:
      'Exogram is a deterministic AI governance runtime that enforces policy-as-code at the VPC level. It gates non-deterministic model outputs, caps API token explosion, and prevents prompt injection liabilities before code reaches production.',
  },
  {
    category: 'Exogram & Technical Governance',
    question: 'How does Exogram differ from probabilistic firewalls?',
    answer:
      'Third-party API firewalls charge latency and token taxes to probabilistically inspect LLM outputs. Exogram uses hard context XML definitions and root-cause schema enforcement to eliminate non-deterministic failure at the architecture layer.',
  },
  {
    category: 'Ecosystem & Career Intelligence',
    question: 'What is CareerWin.ai and how does it fit into the platform?',
    answer:
      'CareerWin.ai is the individual career intelligence branch of the Product & AI Economics ecosystem. It provides role benchmarks, leveling intelligence, and compensation strategy for product leaders, engineers, and executives.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Knowledge Base · Clear Answers
          </p>
          <h1>Frequently Asked Questions</h1>
          <p className="inner-lede">
            Common questions about Product &amp; AI Economics advisory services, the $29
            Operating Kit, Exogram runtime governance, and CareerWin career intelligence.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/pricing-sprints">
              View Pricing &amp; Sprints
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING INVARIANT</span>
          <strong>No vague consulting jargon. Clear answers.</strong>
          <p>
            Deterministic data, verified P&amp;L turnaround playbooks, and transparent flat
            pricing.
          </p>
        </aside>
      </section>

      {/* FAQ Grid */}
      <section className="section">
        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[var(--line)] rounded-2xl p-7 shadow-sm hover:border-[var(--gold)] transition-all"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block mb-2">
                {faq.category}
              </span>
              <h2 className="text-xl font-serif font-bold text-[var(--ink)] mb-3">
                {faq.question}
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Direct Fiduciary Oversight</p>
        <h2>Have a specific question about your AI margin?</h2>
        <p>
          Book a 60-minute 1-on-1 P&amp;L Teardown ($450) or start with the $29 Operating
          Kit + Live Browser Workspace.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/contact?subject=P&L+Teardown">
            Book 60-Min Teardown ($450) ↗
          </Link>
          <Link className="button button-ghost-light" href="/toolkit">
            Get $29 Operating Kit ↗
          </Link>
        </div>
      </section>
    </>
  );
}
