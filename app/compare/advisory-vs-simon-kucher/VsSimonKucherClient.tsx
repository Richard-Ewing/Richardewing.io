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

export default function VsSimonKucherClient({ faqs }: { faqs: FaqEntry[] }) {
  const [companyScale, setCompanyScale] = useState<'mid' | 'fortune500'>('mid');

  const bars =
    companyScale === 'mid'
      ? [
          { label: 'Richard Ewing Sprint', weeks: '2 weeks', fee: '$2,500 fixed', w: 92, color: '#047857' },
          { label: 'Simon-Kucher Project', weeks: '12+ weeks', fee: '$150K+ typical', w: 22, color: '#52525b' },
        ]
      : [
          { label: 'Simon-Kucher Enterprise', weeks: 'Multi-country', fee: '$250K+ scope', w: 92, color: '#29473b' },
          { label: 'Richard Ewing Sprint', weeks: 'Single P&L focus', fee: '$2,500 to $15K', w: 42, color: '#b77a35' },
        ];

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. BROADSHEET DOUBLE-BORDER EDITORIAL MASTHEAD */}
        <section className="bg-[#faf8f2] border-b-2 border-[var(--ink)]/20">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-14 sm:py-20">
            <div className="border-y border-[var(--line)] py-8 sm:py-10">
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--gold)] mb-3">
                Honest Boutique Comparison · Enterprise Pricing vs. Operator Sprint
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-medium text-[var(--ink)] max-w-4xl mb-5">
                Stop paying six figures for pricing slide decks that sit in board binders.
              </h1>
              <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-[var(--muted)] max-w-3xl mb-7">
                Simon-Kucher leads global multi-month pricing programs for large enterprises,
                typically requiring six-figure budgets. Richard Ewing delivers fixed-scope 14-day AI
                pricing and margin sprints for $2,500, built for mid-market CEOs and CFOs who need
                answers in two weeks.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#fit-switcher" className="button button-gold">
                  See who fits your company size ↗
                </a>
                <Link href="/schedule?source=vs-simon-kucher" className="button button-outline">
                  Book a $450 60-min pricing review
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 02. BESPOKE SVG MOTION GRAPHIC + SIDE-BY-SIDE LEDGER */}
        <section id="fit-switcher" className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                      SPEED TO DECISION &amp; FEE FIT
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                      Pick your company profile to see the honest match
                    </h2>
                  </div>

                  <div className="inline-flex rounded-full bg-[var(--paper2)] p-1 border border-[var(--line)]">
                    {(['mid', 'fortune500'] as const).map((s) => (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={companyScale === s}
                        onClick={() => setCompanyScale(s)}
                        className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors min-h-[44px] sm:min-h-[36px] ${
                          companyScale === s ? 'text-white' : 'text-[var(--ink)]'
                        }`}
                      >
                        {companyScale === s && (
                          <motion.span
                            layoutId="sk-scale-pill"
                            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                            className="absolute inset-0 rounded-full bg-[var(--forest2)]"
                          />
                        )}
                        <span className="relative z-10">
                          {s === 'mid' ? 'Mid-Market ($5M-$150M)' : 'Global Fortune 500'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#faf8f2] rounded-xl border border-[var(--line)] p-4 sm:p-5">
                  <svg
                    viewBox="0 0 600 155"
                    className="w-full h-auto block"
                    role="img"
                    aria-label="Fit and speed comparison between Richard Ewing and Simon-Kucher"
                  >
                    <title>Speed and fit score by company size</title>
                    {bars.map((b, idx) => {
                      const y = 18 + idx * 68;
                      return (
                        <g key={b.label}>
                          <text x={8} y={y + 14} fill="#1e2924" fontSize="13.5" fontWeight="700" fontFamily="var(--sans)">
                            {b.label} ({b.weeks})
                          </text>
                          <text x={592} y={y + 14} textAnchor="end" fill="#52525b" fontSize="12" fontFamily="var(--mono)">
                            {b.fee}
                          </text>
                          <rect x={8} y={y + 24} width={584} height={24} rx={6} fill="#ffffff" />
                          <motion.rect
                            x={8}
                            y={y + 24}
                            height={24}
                            rx={6}
                            fill={b.color}
                            initial={false}
                            animate={{ width: (b.w / 100) * 584 }}
                            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: idx * 0.05 }}
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-[var(--paper2)] border border-[var(--line)]">
                <p className="text-[14px] leading-relaxed text-[var(--ink)] m-0">
                  {companyScale === 'mid'
                    ? 'For a $5M to $150M software company, hiring a massive global consultancy burns $150,000+ and three months while junior analysts interview your staff. You get direct operator surgery in fourteen days for $2,500.'
                    : 'If you are coordinating regional pricing teams across North America, Europe, and Asia with twenty product lines, call Simon-Kucher. Their global research bench was built specifically for that scale.'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[var(--forest2)] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-2">
                  DIRECT SIDE-BY-SIDE LEDGER
                </span>
                <h3 className="font-serif text-2xl text-white mb-5">
                  Who actually sits across the table from your CFO
                </h3>
                <div className="space-y-4 text-[14px] text-zinc-100">
                  <div className="pb-3 border-b border-white/15">
                    <strong className="text-[#f3e3c6] block text-xs font-mono uppercase mb-1">
                      Who runs the work
                    </strong>
                    <span>Richard Ewing personally vs. partner-led pitch handed to junior analysts.</span>
                  </div>
                  <div className="pb-3 border-b border-white/15">
                    <strong className="text-[#f3e3c6] block text-xs font-mono uppercase mb-1">
                      Where cost math lives
                    </strong>
                    <span>Customer willingness to pay plus real AI bill floors vs. commercial surveys alone.</span>
                  </div>
                  <div>
                    <strong className="text-[#f3e3c6] block text-xs font-mono uppercase mb-1">
                      Published fee
                    </strong>
                    <span>$450 session or $2,500 14-day sprint vs. custom six-figure proposal.</span>
                  </div>
                </div>
              </div>

              <Link
                href="/schedule?source=vs-simon-kucher"
                style={{ color: '#09090b' }}
                className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#d8c7a8] !text-zinc-950 font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
              >
                Talk directly with Richard Ewing ↗
              </Link>
            </div>
          </div>
        </section>

        {/* 03. DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="vs-simon-kucher"
            metricLabel="Typical Sprint Investment"
            metricValue="$2,500 Fixed"
            headline="Skip the Twelve-Week Consulting Proposal: Reprice in 14 Days"
            subheadline="Stress-test your own price sheet with the $29 workbook, run a $450 teardown this week, or book the $2,500 sprint."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Honest Comparison FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Questions finance leaders ask before choosing a pricing partner
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
