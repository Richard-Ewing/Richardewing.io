import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsletterForm } from '@/components/newsletter/newsletter-form';

export const metadata: Metadata = {
  title: 'The AI Economist Newsletter & Briefings',
  description:
    'Weekly executive briefings on AI unit economics, R&D capital allocation, and software profitability. Read by over 11,000 technology and finance leaders.',
  alternates: {
    canonical: 'https://www.richardewing.io/newsletter',
  },
  openGraph: {
    title: 'The AI Economist Newsletter | Richard Ewing',
    description:
      'Weekly briefings on AI unit economics, R&D capital, and software profitability.',
    url: 'https://www.richardewing.io/newsletter',
    type: 'website',
  },
};

const recentEditions = [
  {
    title: 'How to Reduce LLM Costs in Production',
    date: 'Aug 27, 2024',
    desc: 'Why prompt caching and semantic routing save 85% on token spend before model quantization.',
    url: 'https://theaieconomist.beehiiv.com',
  },
  {
    title: 'Salesforce and SAP Are Putting AI Agents into Enterprise Workflows',
    date: 'Aug 13, 2024',
    desc: 'The macroeconomic consequences of autonomous agents entering core ERP and CRM databases.',
    url: 'https://theaieconomist.beehiiv.com',
  },
  {
    title: 'Your Claude API Bill is Higher Than Your Revenue',
    date: 'May 21, 2024',
    desc: 'A case study in negative gross margins: how startups misprice AI features without unit economics.',
    url: 'https://theaieconomist.beehiiv.com',
  },
];

export default function NewsletterPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Periodical',
    name: 'The AI Economist',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    url: 'https://www.richardewing.io/newsletter',
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
            <i /> The AI Economist · Weekly Briefings
          </p>
          <h1>Weekly briefings on AI, product economics, and what actually works.</h1>
          <p className="inner-lede">
            Real insights. No hype. Designed for builders, product executives, and
            finance leaders managing enterprise AI capital.
          </p>

          <div className="pt-6 max-w-md">
            <NewsletterForm />
          </div>
        </div>

        {/* 3D Book / Publication Mockup */}
        <div className="inner-aside glass flex flex-col items-center text-center p-8">
          <div className="w-48 h-64 bg-gradient-to-br from-zinc-900 via-[#1E3327] to-[#121c16] text-white rounded-lg shadow-2xl p-5 flex flex-col justify-between border-l-4 border-r border-t border-b border-[var(--gold)]/60 transform rotate-2 hover:rotate-0 transition-transform">
            <div className="text-left">
              <span className="text-[9px] font-mono tracking-widest text-[#d8c7a8] uppercase block">
                Executive Edition
              </span>
              <div className="font-serif text-lg font-bold mt-1 text-white leading-tight">
                AI Economist
              </div>
            </div>
            <div className="my-auto py-2">
              <div className="h-14 w-full rounded bg-white/10 flex items-center justify-center text-xs font-mono text-zinc-300">
                The Inference Dividend
              </div>
            </div>
            <div className="text-left text-[9px] font-mono text-zinc-400 border-t border-white/15 pt-2">
              Richard Ewing, MBA
            </div>
          </div>
          <span className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-widest mt-4">
            Over 11,000 Weekly Subscribers
          </span>
        </div>
      </section>

      {/* Recent Briefings Archive */}
      <section className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Archive
          </p>
          <h2>Recent executive editions.</h2>
          <p>
            Explore past briefings dissecting token pricing anomalies, vendor lock-in,
            and software P&L turnarounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentEditions.map((ed) => (
            <a
              key={ed.title}
              href={ed.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow group"
            >
              <div>
                <span className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-widest block mb-2">
                  {ed.date}
                </span>
                <h3 className="font-serif text-xl font-medium text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors mb-2">
                  {ed.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  {ed.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--line)] text-xs font-semibold text-[var(--forest)] flex justify-between items-center">
                <span>Read briefing</span>
                <span className="text-[var(--gold)] group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://theaieconomist.beehiiv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-outline"
          >
            View full Beehiiv archive (70+ editions) ↗
          </a>
        </div>
      </section>
    </>
  );
}
