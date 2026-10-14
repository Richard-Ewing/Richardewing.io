import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Start Here | Richard Ewing',
  description:
    'A guided path through AI unit economics, research concepts, production frameworks, and executive advisory for technology leaders.',
  alternates: {
    canonical: 'https://www.richardewing.io/start-here',
  },
  openGraph: {
    title: 'Start Here | Richard Ewing',
    description:
      'The executive guide to navigating the AI Economist ecosystem: diagnostics, research, frameworks, and advisory.',
    url: 'https://www.richardewing.io/start-here',
    type: 'website',
  },
};

const guideSteps = [
  {
    step: 'STEP 01',
    title: 'Benchmark Your Economics (60 Seconds)',
    tag: 'FREE DIAGNOSTIC',
    desc: 'Before making architectural or team changes, quantify where your AI spend is going. Compare your cloud bills and team velocity against industry peer groups.',
    primaryActionText: 'Run the Reality Check ↗',
    primaryActionHref: '/reality-check',
    secondaryText: 'Explore all 25 diagnostic tools',
    secondaryHref: '/tools',
  },
  {
    step: 'STEP 02',
    title: 'Inspect the Published Research',
    tag: 'PEER-REVIEWED CORPUS',
    desc: 'Browse 174+ verified publications across CIO.com, Built In, Mind the Product, and HackerNoon. Examine empirical analyses of Section 174, zombie code, and token margin compression.',
    primaryActionText: 'Browse 174+ Publications ↗',
    primaryActionHref: '/research/publications',
    secondaryText: 'Read Canonical Concepts',
    secondaryHref: '/concepts',
  },
  {
    step: 'STEP 03',
    title: 'Study the Production Governance Framework',
    tag: 'ARCHITECTURE & STACK',
    desc: 'Explore the 5-tier isometric stack governing production AI systems: from unit economics and model routing to runtime safety boundaries and automated regression probes.',
    primaryActionText: 'Explore the 5-Tier Framework ↗',
    primaryActionHref: '/framework',
    secondaryText: 'Read Architectural Doctrine',
    secondaryHref: '/architectural-doctrine',
  },
  {
    step: 'STEP 04',
    title: 'Choose Your Commercial Intervention',
    tag: 'ENGAGEMENT & SPRINT',
    desc: 'From self-service spreadsheets in the $29 Operating Kit to intensive 2-week P&L turnaround sprints and embedded fractional CPO leadership.',
    primaryActionText: 'View Pricing & Sprints ↗',
    primaryActionHref: '/pricing-sprints',
    secondaryText: 'Get the $29 Operating Kit',
    secondaryHref: '/toolkit',
  },
];

export default function StartHerePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Start Here | Richard Ewing',
    description: 'A guided path through AI unit economics and advisory.',
    url: 'https://www.richardewing.io/start-here',
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
            <i /> Executive Orientation · Start Here
          </p>
          <h1>The executive guide to fixing your AI economics.</h1>
          <p className="inner-lede">
            Welcome. If you are a CEO, CFO, CPO, or engineering leader responsible for
            technology P&amp;L, this guided tour connects diagnosis to published evidence,
            architectural doctrine, and practical turnarounds.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Step 1: Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/about">
              About Richard Ewing ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE GUIDING PRINCIPLE</span>
          <strong>Measure first. Understand root causes. Then act.</strong>
          <p>
            Do not guess where your engineering budget is leaking. Use verified diagnostic
            data and peer benchmarks before committing capital.
          </p>
        </aside>
      </section>

      {/* 4 Steps Section */}
      <section className="section">
        <div className="section-heading mb-12">
          <p className="eyebrow">
            <i /> The 4-Step Sequence
          </p>
          <h2>A systematic progression from problem to outcome.</h2>
          <p>
            Follow this order to extract the highest strategic value from the research,
            tools, and advisory frameworks.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl">
          {guideSteps.map((s) => (
            <div
              key={s.step}
              className="border border-[var(--line)] bg-[#FAF8F3] rounded-2xl p-8 hover:border-[var(--forest)] hover:shadow-md transition space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[var(--gold)]">
                  {s.step}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[rgba(30,51,39,0.06)] text-[var(--forest)] font-semibold">
                  {s.tag}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-medium text-[var(--ink)]">
                {s.title}
              </h3>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {s.desc}
              </p>

              <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center gap-4">
                <Link className="button button-gold text-xs !py-2 !min-h-0" href={s.primaryActionHref}>
                  {s.primaryActionText}
                </Link>
                <Link className="text-xs font-mono text-[var(--forest)] hover:underline" href={s.secondaryHref}>
                  {s.secondaryText} ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Ready to begin?</h2>
        <p>
          Start with Step 1: Run the free 60-second Reality Check diagnostic.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch directly ↗
          </Link>
        </div>
      </section>
    </>
  );
}
