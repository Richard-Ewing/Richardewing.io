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

export default function FractionalVsVpClient({ faqs }: { faqs: FaqEntry[] }) {
  const [horizon, setHorizon] = useState<'6m' | '12m'>('12m');
  const [baseSalaryK, setBaseSalaryK] = useState<number>(280);
  const [recruiterPct, setRecruiterPct] = useState<number>(25);
  const [searchMonths, setSearchMonths] = useState<number>(5);

  const recruiterFee = Math.round(baseSalaryK * 1000 * (recruiterPct / 100));
  const fullLoadedPayroll = Math.round(baseSalaryK * 1000 * 1.22);
  const year1VpCash = recruiterFee + fullLoadedPayroll;
  const fractionalYearCash = 120000;
  const cashSavedYear1 = Math.max(0, year1VpCash - fractionalYearCash);

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. WARM CREAM (--paper) CENTERED EXECUTIVE LEDGER HERO */}
        <section className="bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-[1120px] mx-auto px-6 sm:px-10 py-14 sm:py-20 text-center">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--gold)] mb-4">
              Pillar 02 Executive Hiring Math · Fractional CPO vs. Full-Time VP
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] font-medium text-[var(--ink)] max-w-4xl mx-auto mb-5">
              Hiring a three-hundred-thousand-dollar VP into a broken backlog burns both cash and trust.
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-[var(--muted)] max-w-3xl mx-auto mb-8">
              A full-time VP of Product costs over $350,000 in Year 1 and takes five months to
              recruit. A fractional CPO steps in within days at $10,000 per month to fix product
              operations and prepare the seat before you commit permanent payroll.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left mb-8">
              <div className="bg-white border border-[var(--line)] rounded-xl p-5">
                <span className="font-mono text-[10px] uppercase text-[var(--muted)] block mb-1">
                  FULL-TIME VP SEARCH
                </span>
                <strong className="font-serif text-2xl text-[var(--ink)] block">
                  $350K to $420K
                </strong>
                <span className="text-xs text-[var(--muted)]">Year-1 cash + 5 mo empty seat</span>
              </div>
              <div className="bg-[var(--forest2)] text-white rounded-xl p-5">
                <span className="font-mono text-[10px] uppercase text-[#f3e3c6] block mb-1">
                  FRACTIONAL CPO BRIDGE
                </span>
                <strong className="font-serif text-2xl text-white block">
                  $10,000 / month
                </strong>
                <span className="text-xs text-zinc-100">Starts this week, zero search fee</span>
              </div>
              <div className="bg-white border border-[var(--line)] rounded-xl p-5">
                <span className="font-mono text-[10px] uppercase text-[var(--gold)] block mb-1">
                  14-DAY BACKLOG RESET
                </span>
                <strong className="font-serif text-2xl text-[var(--ink)] block">
                  $2,500 once
                </strong>
                <span className="text-xs text-[var(--muted)]">Clean the mess before hiring</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="#year1-cost" className="button button-gold">
                Run Year-1 Hiring Cost Calculator ↗
              </a>
              <Link href="/schedule?source=fractional-vs-vp" className="button button-outline">
                Compare fit on a 15-min call
              </Link>
            </div>
          </div>
        </section>

        {/* 02. BESPOKE SVG MOTION GRAPHIC - "12-Month Cumulative Cash & Ramp Curve" */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  CUMULATIVE CASH OUTFLOW CURVE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  Cash burned before your seat produces measurable profit
                </h2>
              </div>

              <div className="inline-flex rounded-full bg-[var(--paper2)] p-1 border border-[var(--line)] self-start">
                {(['6m', '12m'] as const).map((h) => (
                  <button
                    key={h}
                    type="button"
                    aria-pressed={horizon === h}
                    onClick={() => setHorizon(h)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors min-h-[44px] sm:min-h-[36px] ${
                      horizon === h ? 'text-white' : 'text-[var(--ink)]'
                    }`}
                  >
                    {horizon === h && (
                      <motion.span
                        layoutId="vp-horizon-pill"
                        transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                        className="absolute inset-0 rounded-full bg-[var(--forest2)]"
                      />
                    )}
                    <span className="relative z-10">{h === '6m' ? 'First 6 Months' : 'Full Year 1'}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[var(--line)] p-4 sm:p-6">
              <svg
                viewBox="0 0 680 220"
                className="w-full h-auto block"
                role="img"
                aria-label="12-month cash outlay curves comparing Full-Time VP hire versus Fractional CPO"
              >
                <title>Year-1 cash outlay comparison</title>
                {[45, 95, 145, 190].map((y) => (
                  <line key={y} x1={40} y1={y} x2={650} y2={y} stroke="rgba(36, 51, 43, 0.08)" />
                ))}
                <text x={50} y={208} fill="#52525b" fontSize="11" fontFamily="var(--mono)">Month 1</text>
                <text x={340} y={208} fill="#52525b" fontSize="11" fontFamily="var(--mono)">
                  {horizon === '6m' ? 'Month 3' : 'Month 6'}
                </text>
                <text x={600} y={208} fill="#52525b" fontSize="11" fontFamily="var(--mono)">
                  {horizon === '6m' ? 'Month 6' : 'Month 12'}
                </text>

                {/* Full-Time VP curve */}
                <motion.path
                  d={
                    horizon === '6m'
                      ? 'M 60 175 L 220 148 L 420 112 L 620 75'
                      : 'M 60 175 L 220 142 L 420 92 L 620 34'
                  }
                  fill="none"
                  stroke="#be123c"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={false}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Fractional CPO curve */}
                <motion.path
                  d={
                    horizon === '6m'
                      ? 'M 60 178 L 220 164 L 420 150 L 620 136'
                      : 'M 60 178 L 220 162 L 420 140 L 620 118'
                  }
                  fill="none"
                  stroke="#047857"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={false}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <text x={450} y={28} fill="#be123c" fontSize="12" fontWeight="700" fontFamily="var(--mono)">
                  {horizon === '6m' ? 'FULL-TIME VP: ~$185K' : 'FULL-TIME VP: ~$411K'}
                </text>
                <text x={440} y={108} fill="#047857" fontSize="12" fontWeight="700" fontFamily="var(--mono)">
                  {horizon === '6m' ? 'FRACTIONAL CPO: $60K' : 'FRACTIONAL CPO: $120K'}
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* 03. INTERACTIVE 60-SECOND CHECK - Year-1 Cost Estimator */}
        <section id="year1-cost" className="max-w-[var(--max)] mx-auto px-[5vw] py-10">
          <div className="bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-9">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
              FREE 60-SECOND HIRING CHECK
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Calculate your true Year-1 cash commitment before signing an executive search.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="vp-salary">Target VP base salary</label>
                    <span className="font-mono text-[var(--forest)]">${baseSalaryK}K / yr</span>
                  </div>
                  <input
                    id="vp-salary"
                    type="range"
                    min={180}
                    max={400}
                    step={10}
                    value={baseSalaryK}
                    onChange={(e) => setBaseSalaryK(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="recruiter-fee">Executive recruiter fee</label>
                    <span className="font-mono text-[var(--forest)]">{recruiterPct}% (${recruiterFee.toLocaleString('en-US')})</span>
                  </div>
                  <input
                    id="recruiter-fee"
                    type="range"
                    min={0}
                    max={33}
                    step={3}
                    value={recruiterPct}
                    onChange={(e) => setRecruiterPct(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="search-months">Months the leadership chair stays empty</label>
                    <span className="font-mono text-rose-800">{searchMonths} months</span>
                  </div>
                  <input
                    id="search-months"
                    type="range"
                    min={2}
                    max={9}
                    step={1}
                    value={searchMonths}
                    onChange={(e) => setSearchMonths(Number(e.target.value))}
                    className="w-full accent-rose-700 h-2 cursor-pointer"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 bg-[var(--forest2)] text-white rounded-2xl p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#f3e3c6] block mb-2">
                  YEAR-1 CASH DIFFERENCE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-xl p-3.5 border border-white/15">
                    <span className="block font-mono text-[10px] uppercase text-zinc-200">
                      VP Year-1 Cash
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-white">
                      ${year1VpCash.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3.5 border border-white/15">
                    <span className="block font-mono text-[10px] uppercase text-zinc-200">
                      Cash Kept
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#f3e3c6]">
                      ${cashSavedYear1.toLocaleString('en-US')}
                    </span>
                  </div>
                </div>
                <p className="text-[13.5px] leading-relaxed text-zinc-100 mb-5">
                  While waiting {searchMonths} months for a permanent hire, you can clean the
                  backlog first for $2,500 or bridge the chair for ${cashSavedYear1.toLocaleString('en-US')} less cash in Year 1.
                </p>
                <Link
                  href={`/schedule?source=fractional-vs-vp&leak=${encodeURIComponent(`$${cashSavedYear1.toLocaleString('en-US')} Saved`)}`}
                  style={{ color: '#09090b' }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#d8c7a8] !text-zinc-950 font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Pressure-test your hiring plan ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04. HONEST DISQUALIFIER + DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 mb-8">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
              WHEN TO HIRE FULL-TIME RIGHT AWAY
            </span>
            <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-0">
              Skip fractional retainers and hire a full-time VP immediately if you have already
              cleared fifteen million dollars in annual revenue, run three or more product lines,
              and need one permanent executive sitting in every customer escalation for the next
              five years.
            </p>
          </div>

          <ScorecardCheckoutDrawer
            source="fractional-vs-vp"
            metricLabel="Year-1 Payroll Saved"
            metricValue={`$${cashSavedYear1.toLocaleString('en-US')}`}
            headline="Stabilize Your Product Org Before Locking In $350K+ Payroll"
            subheadline="Run a $450 teardown this week, clean the backlog in 14 days for $2,500, or bridge the seat at $10,000/mo."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Hiring FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Questions CEOs ask before opening a VP search
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
