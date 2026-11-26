'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import FAQItem from '@/app/components/FAQItem';
import ScorecardCheckoutDrawer from '@/app/components/ScorecardCheckoutDrawer';

interface FaqEntry {
  q: string;
  a: string;
}

const COVERAGE_LAYERS = [
  { layer: 'Tier Packaging & Naming', boutique: 95, ewing: 90 },
  { layer: 'Large Buyer Survey Panels', boutique: 95, ewing: 40 },
  { layer: 'Heavy-User Cost & Margin Audit', boutique: 30, ewing: 98 },
  { layer: 'Backlog & Vendor Contract Cuts', boutique: 10, ewing: 96 },
];

export default function VsMonetizelyClient({ faqs }: { faqs: FaqEntry[] }) {
  const [focusArea, setFocusArea] = useState<'margin' | 'survey'>('margin');

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. CRISP WHITE 5/7 VERDICT HERO */}
        <section className="bg-white border-b border-[var(--line)]">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <p className="eyebrow">
                  <i /> Pricing Boutique Comparison
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl leading-[1.08] font-medium text-[var(--ink)] mb-5">
                  A beautiful price sheet still loses money if nobody checked your AI bills.
                </h1>
                <p className="text-[16px] leading-relaxed text-[var(--muted)] mb-7">
                  Boutique pricing consultancies such as Monetizely and Pricing I/O focus on
                  packaging and buyer willingness-to-pay research. Richard Ewing pairs repricing
                  with actual AI cost floors, backlog cuts, and CFO profit defense in a $2,500
                  14-day sprint.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#coverage-check" className="button button-gold">
                    Check which firm fits you ↗
                  </a>
                  <Link href="/schedule?source=vs-monetizely" className="button button-outline">
                    Book a $450 teardown
                  </Link>
                </div>
              </div>

              {/* Right 7-col: Animated SVG Coverage Matrix */}
              <div className="lg:col-span-7 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-7">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  WHERE EACH FIRM ACTUALLY STOPS
                </span>
                <h2 className="font-serif text-2xl leading-tight font-medium text-[var(--ink)] mb-5">
                  Pricing survey depth vs. full product profit coverage
                </h2>

                <div className="bg-white rounded-xl border border-[var(--line)] p-4 sm:p-5">
                  <svg
                    viewBox="0 0 600 220"
                    className="w-full h-auto block"
                    role="img"
                    aria-label="4-layer coverage comparison between pricing boutiques and Richard Ewing"
                  >
                    <title>Coverage comparison across pricing and P&amp;L layers</title>
                    <text x={240} y={14} fill="#52525b" fontSize="10" fontWeight="700" fontFamily="var(--mono)">
                      PRICING BOUTIQUES
                    </text>
                    <text x={420} y={14} fill="#047857" fontSize="10" fontWeight="700" fontFamily="var(--mono)">
                      RICHARD EWING
                    </text>

                    {COVERAGE_LAYERS.map((row, idx) => {
                      const y = 30 + idx * 48;
                      return (
                        <g key={row.layer}>
                          <text x={8} y={y + 20} fill="#1e2924" fontSize="12.5" fontWeight="600" fontFamily="var(--sans)">
                            {row.layer}
                          </text>
                          <rect x={240} y={y + 2} width={160} height={14} rx={4} fill="#f4f1e9" />
                          <motion.rect
                            x={240}
                            y={y + 2}
                            height={14}
                            rx={4}
                            fill="#94a3b8"
                            initial={false}
                            animate={{ width: (row.boutique / 100) * 160 }}
                            transition={{ duration: 0.55, delay: idx * 0.05 }}
                          />
                          <rect x={420} y={y + 2} width={160} height={14} rx={4} fill="#f4f1e9" />
                          <motion.rect
                            x={420}
                            y={y + 2}
                            height={14}
                            rx={4}
                            fill="#047857"
                            initial={false}
                            animate={{ width: (row.ewing / 100) * 160 }}
                            transition={{ duration: 0.55, delay: idx * 0.05 }}
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. INTERACTIVE FIT CHECK */}
        <section id="coverage-check" className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  HONEST 60-SECOND FIT CHECK
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  What is actually keeping your CFO awake right now?
                </h2>
              </div>

              <div className="inline-flex rounded-xl bg-[var(--paper2)] p-1 border border-[var(--line)] self-start">
                {(['margin', 'survey'] as const).map((a) => (
                  <button
                    key={a}
                    type="button"
                    aria-pressed={focusArea === a}
                    onClick={() => setFocusArea(a)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors min-h-[44px] sm:min-h-[36px] ${
                      focusArea === a ? 'text-white' : 'text-[var(--ink)]'
                    }`}
                  >
                    {focusArea === a && (
                      <motion.span
                        layoutId="monetizely-focus-pill"
                        transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                        className="absolute inset-0 rounded-lg bg-[var(--forest2)]"
                      />
                    )}
                    <span className="relative z-10">
                      {a === 'margin' ? 'AI Costs & Margin Leak' : '500-Buyer Packaging Survey'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[var(--line)] rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="font-mono text-[10px] uppercase text-[var(--forest)] block mb-1">
                  VERDICT
                </span>
                <p className="text-[15px] leading-relaxed text-[var(--ink)] m-0">
                  {focusArea === 'margin'
                    ? 'Go with my $2,500 14-day sprint. We fix the heavy-user leaks inside your billing today, cut dead software weight, and hand your CFO a clean price sheet inside two weeks.'
                    : 'Call Monetizely or Pricing I/O. If your software margins are already high and your primary bottleneck is statistical buyer research across hundreds of survey responses, a dedicated pricing survey boutique fits better.'}
                </p>
              </div>
              <Link
                href={focusArea === 'margin' ? '/schedule?source=vs-monetizely' : '/tools/aueb'}
                style={{ color: '#ffffff' }}
                className="shrink-0 inline-flex items-center px-5 py-3 rounded-xl bg-[var(--forest2)] !text-white font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
              >
                {focusArea === 'margin' ? 'Book 14-Day Margin Sprint ↗' : 'Run Free Margin Check First ↗'}
              </Link>
            </div>
          </div>
        </section>

        {/* 03. DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="vs-monetizely"
            metricLabel="Published Sprint Fee"
            metricValue="$2,500 Fixed"
            headline="Fix Both Packaging and Cost Floors Without Six-Week Retainers"
            subheadline="Start with the $29 pricing workbook, jump on a $450 teardown call, or book the $2,500 14-day sprint."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Straight Answers
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Common questions comparing pricing boutiques and operator sprints
            </h2>
            <div className="space-y-3">
              {faqs.map((item) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
