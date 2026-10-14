import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
  title: 'Product & AI Economist Advisory | Richard Ewing',
  description:
    'Three distinct paths: Fix and scale your Product P&L ($29 Operating Kit to $2,500 Turnaround), ship a 0-to-1 AI product ($7,500), or hire an Embedded Fractional CPO ($10,000/mo).',
  alternates: {
    canonical: 'https://www.richardewing.io/services',
  },
  openGraph: {
    title: 'Product & AI Economist Advisory | Richard Ewing',
    description:
      'Product P&L turnarounds, AI feature pricing, $29 Operating Kit + Live Workspace, 0-to-1 AI Build Sprints, PE Diligence, and Fractional CPO leadership.',
    url: 'https://www.richardewing.io/services',
    type: 'website',
  },
};

const paths = [
  {
    pathNumber: 'PATH A',
    title: 'Fix & Scale an Existing Product P&L',
    subtitle: 'For leadership with live products facing margin compression or stagnant velocity.',
    offers: [
      {
        name: 'The Free Diagnostic Suite',
        price: 'Free',
        period: 'no paywall',
        description: 'Instant margin, pricing, and product debt calculators with board-ready PDF scorecard export.',
        actionLabel: 'Launch Free Tools ↗',
        actionHref: '/tools',
      },
      {
        name: 'The $29 Operating Kit + Workspace',
        price: '$29',
        period: 'one-time',
        description: '5 production P&L spreadsheets, board deck templates, and interactive browser workspace access.',
        actionLabel: 'Get Instant Access ($29) ↗',
        actionHref: '/toolkit',
      },
      {
        name: 'AI P&L & Roadmap Teardown',
        price: '$450',
        period: '48-hour turnaround',
        description: 'Live 60-minute 1-on-1 working session. Pinpoint margin leaks, cut dead backlog, and restructure tiers.',
        actionLabel: 'Book 1-on-1 Teardown ($450) ↗',
        actionHref: '/contact?subject=Teardown+Inquiry',
      },
      {
        name: '2-Week P&L Turnaround Sprint',
        price: '$2,500',
        period: 'fixed-scope',
        description: 'Audit feature-level ROI, eliminate token waste, and build your board defense package.',
        actionLabel: 'Request Turnaround Sprint ↗',
        actionHref: '/contact?subject=Turnaround+Sprint',
      },
    ],
  },
  {
    pathNumber: 'PATH B',
    title: 'Build a New 0-to-1 AI Product / Authority Engine',
    subtitle: 'For founders and teams moving from proof-of-concept to production software.',
    offers: [
      {
        name: '21-Day AI Build & Launch Sprint',
        price: '$7,500',
        period: 'fixed-scope sprint',
        description: 'Go from concept to production software with unit economics, runtime guardrails, and telemetry on day one.',
        actionLabel: 'Discuss Build Sprint ↗',
        actionHref: '/contact?subject=Build+Sprint',
      },
      {
        name: 'Sponsored Benchmark Research',
        price: '$2,500+',
        period: 'editorial study',
        description: 'Co-branded industry benchmark research distributed across 174+ publications and executive channels.',
        actionLabel: 'Inquire About Research ↗',
        actionHref: '/contact?subject=Sponsored+Research',
      },
    ],
  },
  {
    pathNumber: 'PATH C',
    title: 'Executive Leadership & Due Diligence',
    subtitle: 'Embedded product executive leadership and private equity technical due diligence.',
    offers: [
      {
        name: 'Embedded Fractional CPO',
        price: '$10,000',
        period: 'per month',
        description: 'Hands-on executive leadership: product P&L ownership, roadmap governance, and team alignment.',
        actionLabel: 'Explore Fractional CPO ↗',
        actionHref: '/contact?subject=Fractional+CPO',
      },
      {
        name: 'Private Equity M&A Due Diligence',
        price: '$15,000',
        period: 'per acquisition',
        description: 'Technical debt, AI margin reality, and product capitalization audit for PE investors.',
        actionLabel: 'Request Diligence Scope ↗',
        actionHref: '/contact?subject=M&A+Diligence',
      },
    ],
  },
];

const faqs = [
  {
    q: 'How quickly can we start an engagement?',
    a: 'The $29 Operating Kit is accessible immediately. 1-on-1 teardowns are scheduled within 48 hours. 2-week turnaround sprints typically begin on the following Monday.',
  },
  {
    q: 'What data do I need to prepare before a teardown or sprint?',
    a: 'Your current pricing model, high-level cloud and LLM API cost trends, and a recent sprint backlog or roadmap. No production source code or customer confidential data is required.',
  },
  {
    q: 'What is the refund policy on digital products?',
    a: 'The $29 Operating Kit carries a 100% money-back guarantee within 14 days if it does not save you at least 10x its cost in engineering or cloud efficiency.',
  },
];

export default function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Product & AI Economist Advisory Services',
    provider: {
      '@type': 'Person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io',
    },
    description:
      'Executive product advisory, P&L turnarounds, and fixed-scope AI engineering sprints.',
    url: 'https://www.richardewing.io/services',
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
            <i /> Product Economist Advisory · Commercial Engagements
          </p>
          <h1>Your AI budget is growing. Your gross margins are not.</h1>
          <p className="inner-lede">
            As a Product Economist with an enterprise software background ($0 to $25M ARR
            growth, +200% YoY turnarounds, and 3 production software platforms), I help
            technology leaders align cloud spend with shipped value.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/pricing-sprints">
              View Detailed Sprints ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE COMMERCIAL DISCIPLINE</span>
          <strong>Three clear buying paths. Fixed scopes. Guaranteed ROI.</strong>
          <p>
            Choose the specific path that matches your operational milestone: self-service
            models, targeted diagnostic sprints, or embedded leadership.
          </p>
        </aside>
      </section>

      {/* Buying Paths Section */}
      <section className="section">
        <div className="space-y-16">
          {paths.map((path) => (
            <div key={path.pathNumber} className="space-y-6">
              <div className="border-b border-[var(--line)] pb-4">
                <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--gold)] uppercase block mb-1">
                  {path.pathNumber}
                </span>
                <h2 className="text-3xl font-serif font-medium text-[var(--ink)]">
                  {path.title}
                </h2>
                <p className="text-sm text-[var(--muted)] mt-1">{path.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {path.offers.map((offer) => (
                  <div
                    key={offer.name}
                    className="border border-[var(--line)] bg-[#FAF8F3] rounded-xl p-6 flex flex-col justify-between hover:border-[var(--forest)] hover:shadow-md transition"
                  >
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-2xl font-serif font-semibold text-[var(--ink)]">
                          {offer.price}
                        </span>
                        <span className="text-[10px] font-mono text-[var(--muted)]">
                          {offer.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-serif font-medium text-[var(--ink)]">
                        {offer.name}
                      </h3>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">
                        {offer.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[var(--line)]">
                      <Link
                        href={offer.actionHref}
                        className="w-full button button-outline !py-2 !min-h-0 text-xs !justify-center"
                      >
                        {offer.actionLabel}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section border-t border-[var(--line)]">
        <div className="section-heading mb-10">
          <p className="eyebrow">
            <i /> Common Questions
          </p>
          <h2>Everything you need to know about working together.</h2>
        </div>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Need help deciding where to start?</h2>
        <p>
          Run the free Reality Check diagnostic to benchmark your cloud spend, or send a brief
          note about your product P&amp;L challenge.
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
