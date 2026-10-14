import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsletterForm } from '@/components/newsletter/newsletter-form';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
  title: 'The Pragmatic AI Builder Book | Richard Ewing',
  description:
    'Turn expertise into a profitable AI business without VC theater. A field guide to domain validation, unit economics, and cash-flow software.',
  alternates: { canonical: 'https://www.richardewing.io/ai-economist-book' },
  openGraph: {
    title: 'The Pragmatic AI Builder Book | Richard Ewing',
    description:
      'How to turn what you already know into an AI business without venture capital theater.',
    url: 'https://www.richardewing.io/ai-economist-book',
    type: 'website',
  },
};

const chapters = [
  {
    section: 'Part I: Should I Build This? (Customer Pain & The Wedge Scout)',
    desc: 'Uncovering your authentic unfair foothold, the 10-Signal Evidence Stack, and the Decision Ladder for when NOT to build.',
    items: [
      'Chapter 1: The Life Experience Audit (Your Unfair Foothold)',
      'Chapter 2: The Wedge Scout Framework & The Evidence Stack',
      'Chapter 3: The Decision Ladder: When NOT to Build Software',
      'Chapter 4: The Triple Defensibility Test (Why Not ChatGPT, SaaS, or Internal Build?)',
      'Chapter 5: Cognitive Task Allocation (Principles Over Model Names)',
      'Chapter 6: Field Scouting & The Discovery Conversation',
    ],
  },
  {
    section: 'Part II: How Do I Build It Safely? (The General Contractor Model)',
    desc: 'Architectural blueprints, context budgeting, cognitive division of labor, and cost governance.',
    items: [
      'Chapter 7: The General Contractor Model (Software Construction Without Typing Syntax)',
      'Chapter 8: The Builder\'s Nine Questions (Pre-Code Verification)',
      'Chapter 9: The Three Immutable Directives (Rules, Tests, and Worktrees)',
      'Chapter 10: Cognitive Division of Labor in Production',
      'Chapter 11: The Unit Economics of AI Features (Token Budgets & Caching)',
      'Chapter 12: The Forensic Audit Statement of Work',
    ],
  },
  {
    section: 'Part III: How Do I Structure the Business? (Legal Rails & Capital)',
    desc: 'Sensible entity formation, navigating startup credit tiers realistically, and non-dilutive capital.',
    items: [
      'Chapter 13: Sensible Entity Formation (Formalities & Tax Reserves)',
      'Chapter 14: Navigating Cloud Credits & Startup Programs (Realistic Tiers vs Caps)',
      'Chapter 15: Non-Dilutive Government Grants & R&D Credits',
      'Chapter 16: The Clarifying Power of High-Stakes Compression',
    ],
  },
  {
    section: 'Part IV: How Do I Turn It into a Real Company? (The Flywheel)',
    desc: 'The complete 6-stage flywheel, value-based pricing heuristics, distribution, and customer retention loops.',
    items: [
      'Chapter 17: The Embedded Founder (Services as the Research Lab & Financing Engine)',
      'Chapter 18: Value-Based Pricing & The Strategic Paid Pilot',
      'Chapter 19: Distribution, Retention & Pain Reoccurrence',
      'Chapter 20: The Quiet Launch & The 5-Day Nurture Funnel',
    ],
  },
];

export default function BookPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need a technical background or computer science degree to read this book?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The book is written in plain English using real-world analogies. It teaches you the General Contractor method: how to direct AI coding assistants like Cursor and Claude to build clean software while you focus on customer discovery, unit economics, and sales.',
        },
      },
      {
        '@type': 'Question',
        name: 'What formats will the book be available in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pragmatic AI Builder will be available on Amazon Kindle ($9.99), Paperback ($24.99), Apple Books, and Google Play, with an expanded Digital Developer Toolkit available on richardewing.io.',
        },
      },
      {
        '@type': 'Question',
        name: 'What templates and tools are included with the book?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The book includes the complete Forensic Audit Statement of Work (SOW), the Strategic Paid Pilot Agreement template, the drop-in builder directives, the Builder\'s Nine Questions inspection checklist, and the startup credit readiness guide.',
        },
      },
    ],
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
            <i /> Forthcoming Book · 2026 Edition
          </p>
          <h1>The Pragmatic AI Builder</h1>
          <p className="inner-lede">
            Turn what you already know into a profitable software business without venture
            capital theater. A field guide to domain validation, unit economics, and
            cash-flow software.
          </p>
          <div className="actions">
            <a href="#chapters" className="button button-gold">
              Explore Table of Contents ↗
            </a>
            <Link className="button button-outline" href="/operating-kit">
              Get $29 Operating Kit Now
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE FOUNDER DIRECTIVE</span>
          <strong>Cash-flow first. Dilution last.</strong>
          <p>
            Venture capital is expensive debt in disguise. Build software that solves
            real-world pain and generates revenue on Day 1.
          </p>
        </aside>
      </section>

      {/* Chapter Breakdown */}
      <section id="chapters" className="section scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow center">Table of Contents</p>
            <h2 className="text-3xl font-serif text-[var(--ink)]">
              Four Core Parts · 20 Chapters
            </h2>
            <p className="text-sm text-[var(--muted)] mt-2">
              From initial pain discovery to deployed code, legal rails, and cash-flow
              retention.
            </p>
          </div>

          <div className="space-y-6">
            {chapters.map((part, idx) => (
              <div
                key={idx}
                className="bg-white border border-[var(--line)] rounded-2xl p-7 sm:p-8 shadow-sm hover:border-[var(--gold)] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-[var(--paper2)] text-[var(--gold)] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[var(--line)]">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[var(--ink)]">
                    {part.section}
                  </h3>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  {part.desc}
                </p>

                <div className="border-t border-[var(--line)] pt-4">
                  <ul className="space-y-2">
                    {part.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-[var(--ink)] font-serif flex items-start gap-2.5"
                      >
                        <span className="text-[var(--gold)] font-bold mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow center">Book Details</p>
          <h2 className="text-2xl font-serif text-[var(--ink)] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="Do I need a technical background or computer science degree to read this book?"
              answer="No. The book is written in plain English using real-world analogies. It teaches you the General Contractor method: how to direct AI coding assistants like Cursor and Claude to build clean software while you focus on customer discovery, unit economics, and sales."
            />
            <FAQItem
              question="What formats will the book be available in?"
              answer="The Pragmatic AI Builder will be available on Amazon Kindle ($9.99), Paperback ($24.99), Apple Books, and Google Play, with an expanded Digital Developer Toolkit available on richardewing.io."
            />
            <FAQItem
              question="What templates and tools are included with the book?"
              answer="The book includes the complete Forensic Audit Statement of Work (SOW), the Strategic Paid Pilot Agreement template, the drop-in builder directives, the Builder's Nine Questions inspection checklist, and the startup credit readiness guide."
            />
          </div>
        </div>
      </section>

      {/* Early Access / Newsletter Section */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-3xl mx-auto bg-white border border-[var(--line)] rounded-2xl p-8 sm:p-10 shadow-sm text-center">
          <p className="eyebrow center">Early Access</p>
          <h2 className="text-2xl font-serif text-[var(--ink)] mb-3">
            Get Sample Chapters &amp; Release Updates
          </h2>
          <p className="text-xs text-[var(--muted)] max-w-lg mx-auto mb-6">
            Join 11,000+ technology leaders receiving early drafts, worksheets, and launch
            notifications directly from Richard Ewing.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Immediate Implementation</p>
        <h2>Need the operating models today?</h2>
        <p>
          Download the 5 production P&amp;L spreadsheets and CFO deck templates in the
          Operating Kit.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/operating-kit">
            Get Operating Kit ($29) ↗
          </Link>
          <Link className="button button-ghost-light" href="/reality-check">
            Run the Reality Check ↗
          </Link>
        </div>
      </section>
    </>
  );
}
