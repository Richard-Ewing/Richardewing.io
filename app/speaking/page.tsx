import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Keynotes & Workshops | AI Economics & Engineering Leadership | Richard Ewing',
  description:
    'Keynotes, executive workshops, and masterclasses on AI economics, engineering productivity, and software governance. Book Richard Ewing for your next conference or leadership summit.',
  alternates: {
    canonical: 'https://www.richardewing.io/speaking',
  },
  openGraph: {
    title: 'Keynotes & Executive Workshops | Richard Ewing',
    description:
      'Engaging, high-impact sessions on AI unit economics and engineering leadership.',
    url: 'https://www.richardewing.io/speaking',
    type: 'website',
  },
};

const topics = [
  {
    title: 'The AI Margin Illusion: Why Enterprise Token Bills Outpace Revenue',
    category: 'EXECUTIVE KEYNOTE',
    desc: 'An eye-opening breakdown of the hidden economics of generative AI. Explores retry cascades, user review drag, and how leading software firms structure AI feature pricing to maintain 75%+ gross margins.',
    duration: '45-60 min keynote',
  },
  {
    title: 'From Cost Center to Compound Capital: Engineering in the Age of Agents',
    category: 'TECHNICAL LEADERSHIP',
    desc: 'How engineering organizations must evolve as autonomous coding agents write an increasing share of PRs. Diagnosing review bottlenecks, technical debt accumulation, and capital efficiency.',
    duration: '45-60 min keynote + Q&A',
  },
  {
    title: 'AI Economics Masterclass: Unit Margins, Token Budgets & P&L Modeling',
    category: 'HANDS-ON WORKSHOP',
    desc: 'A half-day intensive workshop for product managers, finance directors, and engineering leads. Hands-on modeling of inference costs, latency tradeoffs, and pricing architectures.',
    duration: 'Half-day or Full-day workshop',
  },
];

export default function SpeakingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Keynotes & Executive Workshops by Richard Ewing',
    provider: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    description:
      'Keynotes and interactive masterclasses on AI unit economics, product leadership, and engineering governance.',
    url: 'https://www.richardewing.io/speaking',
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
            <i /> Speaking & Events · Executive Masterclasses
          </p>
          <h1>Keynotes and workshops for real-world impact.</h1>
          <p className="inner-lede">
            Practical, engaging sessions for technology executives and product leaders who
            want to turn generative AI from a speculative experiment into a durable
            competitive advantage.
          </p>

          <div className="space-y-2 py-4">
            {[
              'AI economics and unit margin protection',
              'Product strategy, roadmap triage & pricing',
              'Engineering velocity & review bottleneck remediation',
              'Enterprise AI governance, risk & runtime safety',
            ].map((topic) => (
              <div key={topic} className="flex items-center gap-2 text-sm text-zinc-800">
                <span className="text-[var(--gold)] font-bold">✓</span>
                <span className="font-medium">{topic}</span>
              </div>
            ))}
          </div>

          <div className="actions">
            <Link className="button button-gold" href="/contact">
              Check speaking availability ↗
            </Link>
            <a className="button button-outline" href="#topics">
              Explore keynote topics
            </a>
          </div>
        </div>

        <div className="inner-aside glass space-y-4">
          <div className="w-full h-56 rounded-lg overflow-hidden relative">
            <Image
              src="/assets/images/richard-speaking.jpg"
              alt="Richard Ewing speaking on stage"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[var(--line)] text-center">
            <div>
              <div className="font-serif text-xl font-bold text-[var(--forest)]">50+</div>
              <div className="text-[10px] text-[var(--muted)]">Events</div>
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-[var(--forest)]">5,000+</div>
              <div className="text-[10px] text-[var(--muted)]">Leaders</div>
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-[var(--forest)]">4.9/5</div>
              <div className="text-[10px] text-[var(--muted)]">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Topics */}
      <section id="topics" className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> Program Catalog
          </p>
          <h2>Signature Keynotes & Workshops.</h2>
          <p>
            Customized for corporate offsites, executive retreats, industry conferences,
            and private equity portfolio company summits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topics.map((t) => (
            <div
              key={t.title}
              className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-[var(--gold)] uppercase tracking-widest block mb-2">
                  {t.category}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[var(--ink)] mb-3">
                  {t.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  {t.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-500">{t.duration}</span>
                <Link className="font-bold text-[var(--forest)]" href="/contact">
                  Inquire ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Book an Event</p>
        <h2>Bring the AI Economist to your stage.</h2>
        <p>
          Inquire about keynotes, executive summits, and private team workshops.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/contact">
            Request Speaker Deck ↗
          </Link>
        </div>
      </section>
    </>
  );
}
