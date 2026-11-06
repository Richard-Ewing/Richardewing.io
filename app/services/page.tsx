import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/app/components/FAQItem';
import { PRODUCTS } from '@/app/lib/products';

export const metadata: Metadata = {
  title: 'AI Build Sprints, Automation & Advisory',
  description:
    'Unstick your AI app or pricing in 60 min ($450), automate a department in 14 days ($2,500), ship an AI app in 21 days ($7,500), or hire a Fractional CPO.',
  alternates: {
    canonical: 'https://www.richardewing.io/services',
  },
  openGraph: {
    title: 'AI Build Sprints, Department Automation & P&L Advisory | Richard Ewing',
    description:
      'From the $29 Builder & PM Survival Kit and $450 Live 60-Min Unstick Sessions to 14-Day Department Automation ($2,500), 21-Day 0-to-1 AI Build Sprints ($7,500), and PE Diligence.',
    url: 'https://www.richardewing.io/services',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Build Sprints, Department Automation & P&L Advisory | Richard Ewing',
    description:
      'From the $29 Builder & PM Survival Kit and $450 Live 60-Min Unstick Sessions to 14-Day Department Automation ($2,500), 21-Day 0-to-1 AI Build Sprints ($7,500), and PE Diligence.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const paths = [
  {
    pathNumber: 'PATH A',
    title: 'Unstick Your App, Automate the Department & Fix Your P&L',
    subtitle: 'For builders stuck at 80%, Product Managers, Department Heads, and executives cutting SaaS or token waste.',
    offers: [
      {
        id: 'free_suite',
        name: 'The Free Diagnostic Suite (39 Tools)',
        price: 'Free',
        period: 'no paywall',
        description: 'Instant AI margin, pricing, MCP security, and technical debt calculators with board-ready PDF scorecard export.',
        actionLabel: 'Launch Free Tools ↗',
        actionHref: '/tools',
        external: false,
      },
      {
        id: 'survival_kit',
        name: 'The Builder, PM & Operator Survival Kit',
        price: '$29 / $79',
        period: 'instant download',
        description: '5 editable P&L spreadsheets, SPEC.md / AGENTS.md templates, 12-slide CFO board deck, $250K+ career guide, and /workspace access.',
        actionLabel: 'Get Instant Access ($29) ↗',
        actionHref: '/toolkit',
        external: false,
      },
      {
        id: 'gut_check',
        name: 'Live 60-Min "Unstick My Product, Agent, or Pricing" Session',
        price: '$450',
        period: '48-hour turnaround',
        description: 'Live screen-share session to unstick a vibe-coded app at 80% (Supabase RLS, Stripe webhooks, auth), fix a 5x AI bill spike, or prep a board/interview deck. Includes the $79 Bundle free.',
        actionLabel: 'Book 60-Min Session ($450) ↗',
        actionHref: PRODUCTS.gut_check.paymentLink,
        external: true,
      },
      {
        id: 'insolvency_diagnostic',
        name: '14-Day "Automate the Department & Turnaround P&L" Sprint',
        price: '$2,500',
        period: 'fixed-scope (14 days)',
        description: 'Replace $5,000/mo of bloated SaaS seats and manual support/ops busywork with governed MCP + n8n workflows, kill zombie backlog, and deliver a board-ready P&L deck.',
        actionLabel: 'Reserve 14-Day Sprint ($2,500) ↗',
        actionHref: PRODUCTS.insolvency_diagnostic.paymentLink,
        external: true,
      },
    ],
  },
  {
    pathNumber: 'PATH B',
    title: 'Build a New 0-to-1 Production AI App & AEO Traffic Engine',
    subtitle: 'For funded founders, B2B companies, agencies, and firms moving from idea or prototype to live customer revenue.',
    offers: [
      {
        id: 'rd_capital_audit',
        name: '21-Day "0-to-1 Production AI App & AEO Traffic Engine" Build Sprint',
        price: '$7,500',
        period: 'fixed-scope (21 days)',
        description: 'We architect, code, and deploy your live production AI application or interactive calculator lead funnel on Cloudflare Edge with Supabase Auth/RLS, Stripe billing, /llms.txt, and FAQPage citation schemas built in.',
        actionLabel: 'Reserve 21-Day Build Sprint ($7,500) ↗',
        actionHref: PRODUCTS.full_audit.paymentLink,
        external: true,
      },
      {
        id: 'sponsored_research',
        name: 'Sponsored Benchmark Research & Custom Buyer Calculator',
        price: '$2,500+',
        period: 'editorial study',
        description: 'Co-branded industry benchmark study or interactive buyer ROI calculator distributed across 174+ publications and executive channels.',
        actionLabel: 'Inquire About Research ↗',
        actionHref: '/contact#subject=Sponsored+Research',
        external: false,
      },
    ],
  },
  {
    pathNumber: 'PATH C',
    title: 'Embedded Executive Leadership & Private Equity Due Diligence',
    subtitle: 'Hands-on Chief Product Officer leadership and pre-acquisition M&A technical and AI margin audits.',
    offers: [
      {
        id: 'advisory_retainer',
        name: 'Embedded Fractional CPO',
        price: '$10,000',
        period: 'per month',
        description: 'Hands-on executive leadership: product P&L ownership, AI pricing & margin governance, spec-driven engineering velocity, and board reporting.',
        actionLabel: 'Explore Fractional CPO ↗',
        actionHref: '/schedule?source=services-fractional-cpo',
        external: false,
      },
      {
        id: 'tech_due_diligence',
        name: 'Private Equity M&A Technical & AI Due Diligence',
        price: '$15,000',
        period: 'per acquisition',
        description: 'Pre-acquisition forensic audit of technical debt (PDI), wrapper risk, P90 token COGS, Supabase/MCP security posture, and R&D capitalization for PE deal teams.',
        actionLabel: 'Request Diligence Scope ↗',
        actionHref: '/schedule?source=services-pe-diligence',
        external: false,
      },
    ],
  },
];

const faqs = [
  {
    q: 'How quickly can we start a 60-minute session or 14-day/21-day sprint?',
    a: 'The $29 Survival Kit and $79 Complete Playbook Bundle are accessible immediately after checkout. Live 60-minute Unstick & Teardown sessions ($450) are scheduled within 48 hours. 14-day automation sprints ($2,500) and 21-day 0-to-1 build sprints ($7,500) kick off on the following Monday.',
  },
  {
    q: 'What can we cover in the $450 Live 60-Minute Working Session?',
    a: 'Anything blocking your product, revenue, or career right now: unsticking a Lovable/Bolt/Cursor/Claude Code app stuck at 80% (Supabase RLS, Stripe webhooks, Cloudflare deployment), cutting a 5x OpenAI/Anthropic API bill spike, designing hybrid seat-plus-credit pricing tiers, or stress-testing a board or final-round interview deck.',
  },
  {
    q: 'What is the refund policy on digital products?',
    a: 'The $29 Survival Kit and $79 Complete Bundle carry a 100% money-back guarantee within 14 days if they do not save you at least 10x their cost in engineering time, cloud spend, or career outcomes.',
  },
];

export default function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Build Sprints, Department Automation & Product Economist Advisory',
    provider: {
      '@type': 'Person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io',
    },
    description:
      'Live 60-minute AI unstick sessions ($450), 14-day department automation and P&L turnaround sprints ($2,500), 21-day 0-to-1 production AI app and AEO traffic engine build sprints ($7,500), Fractional CPO leadership, and PE due diligence.',
    url: 'https://www.richardewing.io/services',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Advisory & Sprints', item: 'https://www.richardewing.io/services' },
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
            <i /> Build, Unstick, Automate &amp; Scale · Commercial Engagements
          </p>
          <h1>Ship production AI, automate the department, and protect your gross margin.</h1>
          <p className="inner-lede">
            Whether you need to unstick an AI app at 80% in 60 minutes ($450), replace $5,000/mo of bloated SaaS with governed MCP agents in 14 days ($2,500), launch a 0-to-1 AI product and AEO calculator engine in 21 days ($7,500), or bring in an Embedded Fractional CPO ($10K/mo): every engagement is fixed-scope and built for commercial reality.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the 60-Second Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/toolkit">
              Start with the $29 Survival Kit ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE COMMERCIAL DISCIPLINE</span>
          <strong>Three clear buying paths. Fixed scopes. Zero discovery call bloat.</strong>
          <p>
            Start tonight with the $29 Kit, share screens within 48 hours for $450, or commission a done-for-you 14-day or 21-day sprint.
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
                    id={offer.id}
                    className="border border-[var(--line)] bg-[#FAF8F3] rounded-xl p-6 flex flex-col justify-between hover:border-[var(--forest)] hover:shadow-md transition scroll-mt-24"
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
                      {offer.external ? (
                        <a
                          href={offer.actionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full button button-gold !py-2.5 !min-h-0 text-xs !justify-center"
                        >
                          {offer.actionLabel}
                        </a>
                      ) : (
                        <Link
                          href={offer.actionHref}
                          className="w-full button button-outline !py-2 !min-h-0 text-xs !justify-center"
                        >
                          {offer.actionLabel}
                        </Link>
                      )}
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
        <h2>Not sure which sprint fits your goal?</h2>
        <p>
          Run the free 60-second Reality Check diagnostic to see your numbers, or book a 15-minute scope check directly on Cal.com.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/schedule?source=services">
            Book on Cal.com ↗
          </Link>
        </div>
      </section>
    </>
  );
}
