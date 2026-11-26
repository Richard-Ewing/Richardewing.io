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

const QUARTERS = [
  {
    id: 'q1',
    label: 'Q1: Carve & Stabilize',
    oldShare: 85,
    newShare: 15,
    summary: 'Put a clear boundary around new customer work while keeping paying accounts safe on the old floor.',
    proof: 'First revenue workflow runs live on the new foundation with zero missed customer renewals.',
  },
  {
    id: 'q2',
    label: 'Q2: Move High-Cost Path',
    oldShare: 60,
    newShare: 40,
    summary: 'Shift the single heaviest billing or support workflow over first so savings show up before summer.',
    proof: 'Support tickets on the migrated workflow drop while sales still ships new features.',
  },
  {
    id: 'q3',
    label: 'Q3: Majority Cutover',
    oldShare: 25,
    newShare: 75,
    summary: 'Move remaining customer cohorts in scheduled waves with clean rollback switches ready.',
    proof: 'Seventy-five percent of daily traffic runs cleanly without doubling staff payroll.',
  },
  {
    id: 'q4',
    label: 'Q4: Retire Old Bill',
    oldShare: 0,
    newShare: 100,
    summary: 'Turn off legacy servers and close out the duplicate vendor contracts once the last account moves.',
    proof: 'Old infrastructure bill drops to zero and engineering speed jumps permanently.',
  },
];

export default function MigrationRoadmapClient({ faqs }: { faqs: FaqEntry[] }) {
  const [activeQ, setActiveQ] = useState<number>(1);
  const [engPayrollM, setEngPayrollM] = useState<number>(4);
  const [freezeMonths, setFreezeMonths] = useState<number>(8);
  const [atRiskChurnPct, setAtRiskChurnPct] = useState<number>(12);

  const qData = QUARTERS[activeQ];
  const frozenPayrollBurn = Math.round(((engPayrollM * 1000000) / 12) * freezeMonths);
  const hiddenRenewalDrag = Math.round(frozenPayrollBurn * (atRiskChurnPct / 100));
  const totalFreezeCost = frozenPayrollBurn + hiddenRenewalDrag;

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. WARM STONE (--paper2) 8/4 LEFT-WEIGHTED EDITORIAL HERO */}
        <section className="bg-[var(--paper2)] border-b border-[var(--line)]">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="eyebrow">
                  <i /> Pillar 02 Operating Model · Zero-Freeze Rebuilds
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] font-medium text-[var(--ink)] mb-5">
                  They froze the roadmap for nine months to rebuild. Customers left before month six.
                </h1>
                <p className="text-[16px] sm:text-[17px] leading-relaxed text-[var(--muted)] max-w-3xl mb-7">
                  Replacing an aging software platform without freezing your roadmap moves one
                  workflow slice at a time while new customer features keep shipping. Parallel
                  cutover avoids nine-month sales droughts and risky single-weekend launches.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#freeze-calculator" className="button button-gold">
                    Price your freeze risk (60 sec) ↗
                  </a>
                  <Link href="/schedule?source=platform-migration" className="button button-outline">
                    Book a migration plan review
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[var(--forest2)] text-white rounded-2xl p-6 border border-white/10">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-2">
                  MY RULE ON REBUILDS
                </span>
                <strong className="font-serif text-2xl text-white block mb-3 leading-snug">
                  Never bet twelve months of revenue on a single weekend switch.
                </strong>
                <p className="text-[13.5px] leading-relaxed text-zinc-100 mb-0">
                  When a team promises zero new features until the big rewrite finishes next fall,
                  they always come back asking for six more months in August. Slice the work so
                  old systems retire one piece per quarter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. BESPOKE SVG MOTION GRAPHIC - "4-Quarter Dual-Track Ship Map" */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  4-QUARTER PARALLEL SHIP MAP
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  Retire the old system slice by slice without stalling sales
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {QUARTERS.map((q, idx) => (
                  <button
                    key={q.id}
                    type="button"
                    aria-pressed={activeQ === idx}
                    onClick={() => setActiveQ(idx)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors min-h-[44px] sm:min-h-[36px] ${
                      activeQ === idx
                        ? 'text-white border-[var(--forest2)]'
                        : 'text-[var(--ink)] bg-white border-[var(--line)]'
                    }`}
                  >
                    {activeQ === idx && (
                      <motion.span
                        layoutId="migration-q-pill"
                        transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                        className="absolute inset-0 rounded-xl bg-[var(--forest2)]"
                      />
                    )}
                    <span className="relative z-10">{q.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 bg-white rounded-xl border border-[var(--line)] p-4 sm:p-5">
                <svg
                  viewBox="0 0 600 185"
                  className="w-full h-auto block"
                  role="img"
                  aria-label="Parallel cutover split showing legacy workload shrinking as new platform grows"
                >
                  <title>Parallel cutover progress</title>
                  <text x={14} y={36} fill="#52525b" fontSize="13" fontWeight="700" fontFamily="var(--sans)">
                    Legacy Platform Share ({qData.oldShare}%)
                  </text>
                  <rect x={14} y={48} width={560} height={30} rx={7} fill="#f4f1e9" />
                  <motion.rect
                    x={14}
                    y={48}
                    height={30}
                    rx={7}
                    fill="#b45309"
                    initial={false}
                    animate={{ width: Math.max(12, (qData.oldShare / 100) * 560) }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  />

                  <text x={14} y={118} fill="#1e2924" fontSize="13" fontWeight="700" fontFamily="var(--sans)">
                    New Platform Share ({qData.newShare}%)
                  </text>
                  <rect x={14} y={130} width={560} height={30} rx={7} fill="#f4f1e9" />
                  <motion.rect
                    x={14}
                    y={130}
                    height={30}
                    rx={7}
                    fill="#047857"
                    initial={false}
                    animate={{ width: Math.max(12, (qData.newShare / 100) * 560) }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  />
                </svg>
              </div>

              <div className="lg:col-span-5 bg-white border border-[var(--line)] rounded-xl p-6">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
                  {qData.label}
                </span>
                <p className="text-[14.5px] leading-relaxed text-[var(--ink)] font-medium mb-3">
                  {qData.summary}
                </p>
                <div className="pt-3 border-t border-[var(--line)]">
                  <span className="font-mono text-[10px] uppercase text-[var(--forest)] block mb-1">
                    BOARD PROOF FOR THIS QUARTER
                  </span>
                  <p className="text-[13.5px] text-[var(--muted)] m-0">{qData.proof}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. INTERACTIVE 60-SECOND CHECK - Rewrite Freeze Risk Calculator */}
        <section id="freeze-calculator" className="max-w-[var(--max)] mx-auto px-[5vw] py-10">
          <div className="bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-9">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
              FREE 60-SECOND REBUILD CHECK
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              See what a roadmap freeze actually costs your company in payroll and stalled sales.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="payroll-slider">Annual engineering and product payroll</label>
                    <span className="font-mono text-[var(--forest)]">${engPayrollM}M / yr</span>
                  </div>
                  <input
                    id="payroll-slider"
                    type="range"
                    min={1}
                    max={25}
                    step={1}
                    value={engPayrollM}
                    onChange={(e) => setEngPayrollM(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="freeze-slider">Planned roadmap freeze length</label>
                    <span className="font-mono text-rose-800">{freezeMonths} months</span>
                  </div>
                  <input
                    id="freeze-slider"
                    type="range"
                    min={2}
                    max={18}
                    step={1}
                    value={freezeMonths}
                    onChange={(e) => setFreezeMonths(Number(e.target.value))}
                    className="w-full accent-rose-700 h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="churn-slider">Extra renewal loss from zero new features</label>
                    <span className="font-mono text-[var(--forest)]">{atRiskChurnPct}% drag</span>
                  </div>
                  <input
                    id="churn-slider"
                    type="range"
                    min={0}
                    max={30}
                    step={2}
                    value={atRiskChurnPct}
                    onChange={(e) => setAtRiskChurnPct(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-rose-800 block mb-2">
                  CAPITAL LOCKED IN A FREEZE
                </span>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Payroll Frozen
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[var(--ink)]">
                      ${frozenPayrollBurn.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Total Exposure
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-rose-800">
                      ${totalFreezeCost.toLocaleString('en-US')}
                    </span>
                  </div>
                </div>
                <p className="text-[13.5px] leading-relaxed text-[var(--ink)] mb-5">
                  Before you sign off on halting product updates for {freezeMonths} months, carve
                  out a ninety-day parallel slice so cash-paying customers see steady progress every
                  quarter.
                </p>
                <Link
                  href={`/schedule?source=platform-migration&leak=${encodeURIComponent(`$${totalFreezeCost.toLocaleString('en-US')} Freeze Risk`)}`}
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[var(--forest2)] !text-white font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Map a Zero-Freeze Plan in 14 Days ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04. DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="platform-migration"
            metricLabel="Frozen Payroll Risk"
            metricValue={`$${totalFreezeCost.toLocaleString('en-US')}`}
            headline="Retire Old Systems Without Halting Your Revenue Roadmap"
            subheadline="Bring your migration deck to a $450 60-minute teardown or lock a $2,500 14-day backlog and cutover sprint."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Migration Answers
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Questions leadership teams ask before approving a platform rewrite
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
