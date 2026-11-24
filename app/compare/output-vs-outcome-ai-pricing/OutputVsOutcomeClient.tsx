'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import FAQItem from '@/app/components/FAQItem';
import ScorecardCheckoutDrawer from '@/app/components/ScorecardCheckoutDrawer';

interface FaqEntry {
  q: string;
  a: string;
}

type ChartMode = 'output' | 'outcome';
type ProofMode = 'automatic' | 'shared' | 'disputed';

const DECISION_RULES = [
  {
    code: '01 / FIFTY IDENTICAL DRAFTS',
    title: 'Billing per draft rewards noisy software.',
    body: 'Ask a writing assistant for fifty cold outbound emails and your team deletes forty-seven of them. Under output pricing, the vendor gets paid fifty times while your sales reps still start over from scratch.',
    rule: 'Never bill per raw draft when staff throw most of them away.',
    role: 'VP of Sales Ops trap',
  },
  {
    code: '02 / THE BABYSITTING CLEANUP TAX',
    title: 'Unfinished output shifts payroll onto the buyer.',
    body: 'Every clumsy reply or half-right summary forces an employee to spend twenty minutes fixing tone and checking numbers. Finance notices that hidden cleanup payroll before renewal week.',
    rule: 'Price the finished handoff, not the first rough pass.',
    role: 'Customer Support Lead reality',
  },
  {
    code: '03 / THE TWENTY-DOLLAR CHAT TEST',
    title: 'A free prompt beats a per-output wrapper.',
    body: 'If your buyer can paste the same company notes into a twenty-dollar chat window and get comparable words back, charging per generated page invites instant churn.',
    rule: 'Own the verified business event inside your own billing record.',
    role: 'CFO procurement filter',
  },
  {
    code: '04 / DISPUTE-PROOF RECORDS',
    title: 'Outcome fees fail whenever proof is murky.',
    body: 'If your customer has to manually tell you whether a deal closed or a ticket stayed solved, invoices turn into monthly debates. Keep a flat base fee until both sides trust the count.',
    rule: 'Verify completion cleanly before dropping seat floors.',
    role: 'Director of Finance rule',
  },
];

export default function OutputVsOutcomeClient({ faqs }: { faqs: FaqEntry[] }) {
  const prefersReducedMotion = useReducedMotion();

  const [chartMode, setChartMode] = useState<ChartMode>('output');
  const [jobValue, setJobValue] = useState<number>(120);
  const [cleanupPct, setCleanupPct] = useState<number>(35);
  const [proofMode, setProofMode] = useState<ProofMode>('shared');

  // 60-second Outcome Pricing Viability Scorer math (200 attempted jobs/month baseline)
  const monthlyAttempts = 200;
  const cleanRuns = Math.round(monthlyAttempts * ((100 - cleanupPct) / 100));
  const reworkRuns = monthlyAttempts - cleanRuns;
  const cleanupHours = Math.round(reworkRuns * 0.25);

  const disputeDragPct = proofMode === 'automatic' ? 5 : proofMode === 'shared' ? 18 : 40;
  const netMarginPct = Math.max(
    12,
    Math.min(86, Math.round(84 - cleanupPct * 0.55 - disputeDragPct * 0.65))
  );
  const impliedMonthlyOutcomeBill = Math.round(cleanRuns * (jobValue * 0.12));
  const monthlyDisputedCash = Math.round(impliedMonthlyOutcomeBill * (disputeDragPct / 100));
  const annualDisputeRisk = monthlyDisputedCash * 12;

  const isOutcomeReady = proofMode === 'automatic' && cleanupPct <= 25 && jobValue >= 60;
  const isFlatSeatRequired = proofMode === 'disputed' || cleanupPct >= 50;

  const verdict = isOutcomeReady
    ? {
        badge: 'SELL OUTCOMES',
        boxClass: 'border-emerald-800/35 bg-emerald-50/75',
        badgeClass: 'text-emerald-900',
        headline: 'Verified outcome billing fits your numbers.',
        summary: `Only ${cleanupPct}% of runs need cleanup and both teams see automatic proof. Buyers accept outcome fees when ${cleanRuns.toLocaleString('en-US')} clean jobs ship each month with ${netMarginPct}% blended margin.`,
      }
    : isFlatSeatRequired
      ? {
          badge: 'STAY FLAT SEAT',
          boxClass: 'border-rose-700/35 bg-rose-50/75',
          badgeClass: 'text-rose-900',
          headline: 'Pure outcome billing will trigger invoice fights.',
          summary: `${cleanupPct}% of runs require ${cleanupHours.toLocaleString('en-US')} monthly hours of human babysitting and ${disputeDragPct}% of results face billing disputes. Hold a capped flat seat until cleanup drops.`,
        }
      : {
          badge: 'CAP OUTPUTS WITH A BASE FEE',
          boxClass: 'border-amber-700/35 bg-amber-50/75',
          badgeClass: 'text-amber-900',
          headline: 'Pair a steady monthly base fee with a narrow outcome tier.',
          summary: `With ${cleanupPct}% rework and ${disputeDragPct}% proof drag, pure outcome fees expose $${annualDisputeRisk.toLocaleString('en-US')}/yr to renewal pushback. Lock your floor with a predictable base fee first.`,
        };

  const formattedRisk = annualDisputeRisk.toLocaleString('en-US');
  const leakParam = isOutcomeReady ? `${netMarginPct}% Margin` : `$${formattedRisk}/yr`;

  const valueCurve =
    chartMode === 'output'
      ? 'M 70 176 C 190 144, 335 134, 575 128'
      : 'M 70 184 C 210 142, 375 84, 575 38';
  const billCurve =
    chartMode === 'output'
      ? 'M 70 188 C 195 162, 345 102, 575 40'
      : 'M 70 194 C 210 176, 375 144, 575 110';
  const markerY = chartMode === 'output' ? 40 : 38;
  const markerColor = chartMode === 'output' ? '#be123c' : '#29473b';

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        {/* 01. HERO: CREAM #faf8f2 8/4 INVOICE-STACK SPLIT */}
        <section className="bg-[#faf8f2] border-b border-[var(--line)]">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-14 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left 8-col */}
              <div className="lg:col-span-8">
                <p className="eyebrow">
                  <i /> Pillar 01 Comparison · Output vs. Outcome Pricing
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] font-medium text-[var(--ink)] mt-3 mb-5 tracking-[-0.03em]">
                  Charging per click rewards slow software. Charging for finished work wins
                  renewals.
                </h1>
                <p className="text-[16.5px] sm:text-[17.5px] leading-relaxed text-[var(--ink)] max-w-2xl mb-7 font-normal">
                  Output pricing bills customers for raw AI activity like generated drafts,
                  messages, or hours saved. Outcome pricing bills only when a verified business
                  result ships, such as a resolved support ticket, recovered invoice, or booked
                  appointment.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 mb-8">
                  <a className="button button-gold" href="#outcome-check">
                    Run the 60-sec Outcome Viability Scorer ↗
                  </a>
                  <Link
                    className="button button-outline"
                    href="/schedule?source=output-vs-outcome-ai-pricing"
                  >
                    Book a pricing review
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--line)] max-w-2xl">
                  <div>
                    <span className="font-serif text-xl sm:text-2xl text-[var(--ink)] block">
                      3 models
                    </span>
                    <span className="text-xs text-[var(--muted)]">
                      output, outcome, and base-plus-cap
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-xl sm:text-2xl text-[var(--ink)] block">
                      60 seconds
                    </span>
                    <span className="text-xs text-[var(--muted)]">
                      plain-English margin and proof check
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-xl sm:text-2xl text-[var(--ink)] block">
                      $450 / $2,500
                    </span>
                    <span className="text-xs text-[var(--muted)]">
                      fixed-scope pricing sprint options
                    </span>
                  </div>
                </div>
              </div>

              {/* Right 4-col: 2-Card Invoice Reality Stack */}
              <div className="lg:col-span-4 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
                  className="bg-white border border-[var(--line)] rounded-2xl p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-rose-800 font-semibold">
                      Paid per draft (Output)
                    </span>
                    <span className="font-mono text-[11px] text-[var(--muted)]">INV #408</span>
                  </div>
                  <strong className="font-serif text-lg text-[var(--ink)] block mb-2">
                    50 outreach drafts generated
                  </strong>
                  <div className="space-y-1.5 text-[13px] text-[var(--muted)] border-t border-[var(--line)] pt-2.5">
                    <div className="flex justify-between">
                      <span>Draft unit fee ($0.80 x 50)</span>
                      <span className="font-mono text-[var(--ink)]">$40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Staff cleanup time (4 hrs)</span>
                      <span className="font-mono text-rose-800">-$260</span>
                    </div>
                    <div className="flex justify-between font-semibold text-[var(--ink)] pt-1 border-t border-[var(--line)]">
                      <span>Verified meetings booked</span>
                      <span className="font-mono text-rose-800">0</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: 0.08 }}
                  className="bg-[var(--paper2)] border-2 border-[var(--gold)] rounded-2xl p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--forest)] font-semibold">
                      Paid per solved case (Outcome)
                    </span>
                    <span className="font-mono text-[11px] text-[var(--forest)]">INV #409</span>
                  </div>
                  <strong className="font-serif text-lg text-[var(--ink)] block mb-2">
                    14 qualified appointments held
                  </strong>
                  <div className="space-y-1.5 text-[13px] text-[var(--muted)] border-t border-[var(--line)] pt-2.5">
                    <div className="flex justify-between">
                      <span>Verified outcome fee ($18 x 14)</span>
                      <span className="font-mono text-[var(--ink)]">$252</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rejected drafts billed</span>
                      <span className="font-mono text-[var(--forest)]">$0</span>
                    </div>
                    <div className="flex justify-between font-semibold text-[var(--ink)] pt-1 border-t border-[var(--line)]">
                      <span>CFO renewal status</span>
                      <span className="font-mono text-[var(--forest)]">APPROVED</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. 8/4 BAND: BUYER VALUE VS VENDOR BILL DIVERGENCE SVG + 2 CFO REACTION CARDS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 8-col: Dual-line Animated SVG */}
            <div className="lg:col-span-8 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                      INTERACTIVE VOLUME CURVE
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                      Buyer Value vs. Vendor Bill Divergence
                    </h2>
                  </div>

                  <div className="inline-flex rounded-full bg-[var(--paper2)] p-1 border border-[var(--line)] self-start">
                    {(
                      [
                        { id: 'output', label: 'Paid Per Draft (Output)' },
                        { id: 'outcome', label: 'Paid Per Solved Job (Outcome)' },
                      ] as const
                    ).map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        aria-pressed={chartMode === mode.id}
                        onClick={() => setChartMode(mode.id)}
                        className={`relative px-3.5 py-2 text-xs font-semibold rounded-full transition-colors min-h-[44px] sm:min-h-[36px] ${
                          chartMode === mode.id ? 'text-white' : 'text-[var(--ink)]'
                        }`}
                      >
                        {chartMode === mode.id && (
                          <motion.span
                            layoutId="outcome-divergence-pill"
                            transition={
                              prefersReducedMotion
                                ? { duration: 0 }
                                : { type: 'spring', stiffness: 360, damping: 28 }
                            }
                            className="absolute inset-0 rounded-full bg-[var(--forest2)]"
                          />
                        )}
                        <span className="relative z-10">{mode.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full overflow-hidden rounded-xl bg-white border border-[var(--line)] p-4 sm:p-5">
                  <svg
                    viewBox="0 0 640 240"
                    className="w-full h-auto block"
                    role="img"
                    aria-label="Buyer value versus vendor bill curves across customer volume steps"
                  >
                    <title>Buyer value versus vendor bill curves across customer volume steps</title>
                    {[40, 88, 136, 184].map((y) => (
                      <line
                        key={y}
                        x1={60}
                        y1={y}
                        x2={595}
                        y2={y}
                        stroke="rgba(36, 51, 43, 0.10)"
                      />
                    ))}

                    {[
                      { x: 70, label: 'Pilot' },
                      { x: 196, label: 'Team' },
                      { x: 322, label: 'Rollout' },
                      { x: 448, label: 'Floor' },
                      { x: 575, label: 'Renewal' },
                    ].map((step) => (
                      <g key={step.label}>
                        <line
                          x1={step.x}
                          y1={24}
                          x2={step.x}
                          y2={202}
                          stroke="rgba(36, 51, 43, 0.08)"
                          strokeDasharray={step.label === 'Renewal' ? '4 4' : undefined}
                        />
                        <text
                          x={step.x}
                          y={222}
                          textAnchor="middle"
                          fill="#52525b"
                          fontSize="11"
                          fontFamily="var(--mono)"
                        >
                          {step.label}
                        </text>
                      </g>
                    ))}

                    <text
                      x={46}
                      y={44}
                      textAnchor="end"
                      fill="#52525b"
                      fontSize="10"
                      fontFamily="var(--mono)"
                    >
                      High
                    </text>
                    <text
                      x={46}
                      y={188}
                      textAnchor="end"
                      fill="#52525b"
                      fontSize="10"
                      fontFamily="var(--mono)"
                    >
                      Low
                    </text>

                    {/* Buyer Value Curve */}
                    <motion.path
                      key={`value-${chartMode}`}
                      d={valueCurve}
                      fill="none"
                      stroke="#29473b"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Vendor Bill Curve */}
                    <motion.path
                      key={`bill-${chartMode}`}
                      d={billCurve}
                      fill="none"
                      stroke={chartMode === 'output' ? '#be123c' : '#b77a35'}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray={chartMode === 'output' ? undefined : '7 5'}
                      initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Pulsing renewal checkpoint ring (scale animation only) */}
                    <motion.circle
                      cx={575}
                      cy={markerY}
                      r={14}
                      fill={chartMode === 'output' ? 'rgba(190, 18, 60, 0.22)' : 'rgba(41, 71, 59, 0.22)'}
                      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={
                        prefersReducedMotion
                          ? { scale: 1, opacity: 0.55 }
                          : { scale: [0.9, 1.3, 0.9], opacity: [0.35, 0.75, 0.35] }
                      }
                      transition={
                        prefersReducedMotion ? { duration: 0 } : { duration: 2.2, repeat: Infinity }
                      }
                    />
                    <circle
                      cx={575}
                      cy={markerY}
                      r={6}
                      fill={markerColor}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />

                    <text
                      x={565}
                      y={chartMode === 'output' ? 24 : 22}
                      textAnchor="end"
                      fill={markerColor}
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="var(--mono)"
                    >
                      {chartMode === 'output'
                        ? 'BILL OUTRUNS REAL VALUE'
                        : 'VALUE STAYS ABOVE BILL'}
                    </text>

                    {/* Inline legend */}
                    <circle cx={82} cy={18} r={4.5} fill="#29473b" />
                    <text x={93} y={22} fill="#1e2924" fontSize="11" fontWeight="600" fontFamily="var(--sans)">
                      Verified Buyer Value
                    </text>
                    <circle cx={240} cy={18} r={4.5} fill={chartMode === 'output' ? '#be123c' : '#b77a35'} />
                    <text x={251} y={22} fill="#1e2924" fontSize="11" fontWeight="600" fontFamily="var(--sans)">
                      Monthly Vendor Bill
                    </text>
                  </svg>
                </div>
              </div>

              <p className="text-[13.5px] text-[var(--muted)] mt-4 mb-0">
                {chartMode === 'output'
                  ? 'When you charge per draft, your invoice climbs straight up as teams experiment while real business value flattens under staff editing time.'
                  : 'When you tie charges to verified solved jobs, your customer sees clear return above the bill every quarter.'}
              </p>
            </div>

            {/* Right 4-col: 2 CFO Reaction Cards */}
            <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
              <div className="bg-white border border-[var(--line)] rounded-2xl p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-rose-800 block mb-2">
                    CFO REACTION · OUTPUT BILLING
                  </span>
                  <h3 className="font-serif text-xl text-[var(--ink)] mb-2.5">
                    &ldquo;Why did our invoice triple while headcount stayed flat?&rdquo;
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[var(--muted)] mb-0">
                    Finance sees twelve thousand generated summaries alongside zero drop in
                    customer support backlog. Your contract lands on the cancellation list sixty
                    days before renewal.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--line)] font-mono text-[11px] text-rose-800">
                  RESULT: CHURN OR 40% DISCOUNT DEMAND
                </div>
              </div>

              <div className="bg-[var(--forest2)] text-white rounded-2xl p-6 border border-white/10 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-2">
                    CFO REACTION · VERIFIED OUTCOME
                  </span>
                  <h3 className="font-serif text-xl text-white mb-2.5">
                    &ldquo;Every dollar billed matches a closed support case.&rdquo;
                  </h3>
                  <p className="text-[14px] leading-relaxed text-zinc-100 mb-4">
                    The Director of Finance reconciles your invoice against completed work in ten
                    minutes. Expansion budgets open up because the math defends itself.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-[#f3e3c6]">Check your unit math</span>
                  <Link
                    href="/tools/ai-feature-margin"
                    style={{ color: '#09090b' }}
                    className="inline-flex items-center px-3.5 py-2 rounded-lg bg-[#d8c7a8] !text-zinc-950 font-semibold text-xs hover:opacity-95 transition-opacity min-h-[44px] sm:min-h-[36px]"
                  >
                    Margin Tool ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. 4-COLUMN DECISION RULES GRID */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14 border-t border-[var(--line)]">
          <div className="max-w-3xl mb-8">
            <p className="eyebrow">
              <i /> Four Rules Before You Touch Your Price Sheet
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight font-medium text-[var(--ink)] my-3">
              Where output plans quietly fail and when outcome pricing wins.
            </h2>
            <p className="text-[15.5px] text-[var(--muted)] m-0">
              Last month a VP of Sales Ops asked me why prospects kept stalling on her per-draft
              plan. We walked through her customer invoices and spotted all four traps in twenty
              minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DECISION_RULES.map((item) => (
              <article
                key={item.code}
                className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                    {item.code}
                  </span>
                  <h3 className="font-serif text-xl leading-snug text-[var(--ink)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[var(--muted)] mb-4">
                    {item.body}
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--line)]">
                  <p className="text-[13.5px] font-medium text-[var(--ink)] mb-2">{item.rule}</p>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--forest)]">
                    {item.role}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 04. SIDE-BY-SIDE WEAK VS FIXED INVOICE DIFF (ANGLE 46) */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-10">
          <div className="bg-[var(--paper2)] border border-[var(--line)] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  SIDE-BY-SIDE INVOICE DIFF
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  How to rewrite a weak output invoice into one finance signs fast.
                </h2>
              </div>
              <Link
                href="/compare/pass-through-vs-credit-ai-pricing"
                className="text-xs font-semibold text-[var(--forest)] border-b border-[var(--gold)] pb-0.5 self-start md:self-auto whitespace-nowrap"
              >
                Compare pass-through vs. credit pricing ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-white border border-rose-700/25 rounded-xl p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-800">
                    WEAK OUTPUT INVOICE (STALLS RENEWAL)
                  </span>
                  <span className="font-mono text-xs text-rose-800">$2,400/mo</span>
                </div>
                <ul className="space-y-2.5 text-[14px] text-[var(--ink)] pl-0 list-none m-0">
                  <li className="flex justify-between gap-3 border-b border-[var(--line)] pb-2">
                    <span className="text-[var(--muted)]">3,000 generated ticket replies</span>
                    <span className="font-mono">$1,500</span>
                  </li>
                  <li className="flex justify-between gap-3 border-b border-[var(--line)] pb-2">
                    <span className="text-[var(--muted)]">1,800 automated call notes</span>
                    <span className="font-mono">$900</span>
                  </li>
                  <li className="flex justify-between gap-3 pt-1 font-medium">
                    <span>Buyer question</span>
                    <span className="text-rose-800">How many issues closed?</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[var(--forest)]/30 rounded-xl p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--forest)]">
                    FIXED OUTCOME + BASE FEE (WINS EXPANSION)
                  </span>
                  <span className="font-mono text-xs text-[var(--forest)]">$2,550/mo</span>
                </div>
                <ul className="space-y-2.5 text-[14px] text-[var(--ink)] pl-0 list-none m-0">
                  <li className="flex justify-between gap-3 border-b border-[var(--line)] pb-2">
                    <span className="text-[var(--muted)]">Core platform base access (capped)</span>
                    <span className="font-mono">$1,250</span>
                  </li>
                  <li className="flex justify-between gap-3 border-b border-[var(--line)] pb-2">
                    <span className="text-[var(--muted)]">260 verified resolved tickets ($5 each)</span>
                    <span className="font-mono">$1,300</span>
                  </li>
                  <li className="flex justify-between gap-3 pt-1 font-medium">
                    <span>Buyer question</span>
                    <span className="text-[var(--forest)]">Can we add the west desk?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 05. 6/6 SPLIT: OUTCOME PRICING VIABILITY SCORER + HONEST DISQUALIFIER */}
        <section id="outcome-check" className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 6-col: 60-Sec Outcome Pricing Viability Scorer */}
            <div className="lg:col-span-6 bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  FREE 60-SECOND CHECK · BEFORE YOU REPRINT PRICE SHEETS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-5">
                  Outcome Pricing Viability Scorer
                </h2>

                {/* Stepper 1: Value of 1 finished job */}
                <div className="mb-5 pb-5 border-b border-[var(--line)]">
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <label
                      htmlFor="job-value-input"
                      className="text-sm font-semibold text-[var(--ink)]"
                    >
                      1. Value of one finished job to the buyer
                    </label>
                    <span className="font-mono text-base font-bold text-[var(--forest)]">
                      ${jobValue.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      aria-label="Decrease job value by 20 dollars"
                      onClick={() => setJobValue((v) => Math.max(20, v - 20))}
                      className="px-3.5 py-2 rounded-lg border border-[var(--line)] bg-[#faf8f2] text-sm font-bold text-[var(--ink)] min-h-[44px] sm:min-h-[38px]"
                    >
                      -$20
                    </button>
                    <input
                      id="job-value-input"
                      type="number"
                      min={20}
                      max={2000}
                      step={10}
                      value={jobValue}
                      onChange={(e) => {
                        const next = Number(e.target.value);
                        if (!Number.isNaN(next)) setJobValue(Math.max(20, Math.min(2000, next)));
                      }}
                      className="w-24 text-center font-mono text-sm font-semibold border border-[var(--line)] rounded-lg py-2 min-h-[44px] sm:min-h-[38px] text-[var(--ink)] bg-white"
                    />
                    <button
                      type="button"
                      aria-label="Increase job value by 20 dollars"
                      onClick={() => setJobValue((v) => Math.min(2000, v + 20))}
                      className="px-3.5 py-2 rounded-lg border border-[var(--line)] bg-[#faf8f2] text-sm font-bold text-[var(--ink)] min-h-[44px] sm:min-h-[38px]"
                    >
                      +$20
                    </button>
                    <div className="flex gap-1.5 ml-auto">
                      {[40, 120, 350].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setJobValue(preset)}
                          className={`px-2.5 py-1.5 rounded-md font-mono text-xs border min-h-[44px] sm:min-h-[34px] ${
                            jobValue === preset
                              ? 'bg-[var(--forest2)] text-white border-[var(--forest2)]'
                              : 'bg-white text-[var(--ink)] border-[var(--line)]'
                          }`}
                        >
                          ${preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stepper 2: % of runs needing human cleanup */}
                <div className="mb-5 pb-5 border-b border-[var(--line)]">
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <label
                      htmlFor="cleanup-pct-input"
                      className="text-sm font-semibold text-[var(--ink)]"
                    >
                      2. Share of runs needing human cleanup
                    </label>
                    <span className="font-mono text-base font-bold text-rose-800">
                      {cleanupPct}% ({cleanupHours.toLocaleString('en-US')} hrs/mo)
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      aria-label="Decrease cleanup share by 5 percent"
                      onClick={() => setCleanupPct((v) => Math.max(0, v - 5))}
                      className="px-3.5 py-2 rounded-lg border border-[var(--line)] bg-[#faf8f2] text-sm font-bold text-[var(--ink)] min-h-[44px] sm:min-h-[38px]"
                    >
                      -5%
                    </button>
                    <input
                      id="cleanup-pct-input"
                      type="number"
                      min={0}
                      max={85}
                      step={5}
                      value={cleanupPct}
                      onChange={(e) => {
                        const next = Number(e.target.value);
                        if (!Number.isNaN(next)) setCleanupPct(Math.max(0, Math.min(85, next)));
                      }}
                      className="w-24 text-center font-mono text-sm font-semibold border border-[var(--line)] rounded-lg py-2 min-h-[44px] sm:min-h-[38px] text-[var(--ink)] bg-white"
                    />
                    <button
                      type="button"
                      aria-label="Increase cleanup share by 5 percent"
                      onClick={() => setCleanupPct((v) => Math.min(85, v + 5))}
                      className="px-3.5 py-2 rounded-lg border border-[var(--line)] bg-[#faf8f2] text-sm font-bold text-[var(--ink)] min-h-[44px] sm:min-h-[38px]"
                    >
                      +5%
                    </button>
                    <div className="flex gap-1.5 ml-auto">
                      {[10, 35, 60].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setCleanupPct(preset)}
                          className={`px-2.5 py-1.5 rounded-md font-mono text-xs border min-h-[44px] sm:min-h-[34px] ${
                            cleanupPct === preset
                              ? 'bg-[var(--forest2)] text-white border-[var(--forest2)]'
                              : 'bg-white text-[var(--ink)] border-[var(--line)]'
                          }`}
                        >
                          {preset}%
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3-option Segmented Proof Toggle */}
                <div className="mb-6">
                  <span className="text-sm font-semibold text-[var(--ink)] block mb-2.5">
                    3. Can both billing teams verify &ldquo;done&rdquo; with zero argument?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(
                      [
                        { id: 'automatic', label: 'Automatic proof' },
                        { id: 'shared', label: 'Monthly spot-check' },
                        { id: 'disputed', label: 'Buyer self-reports' },
                      ] as const
                    ).map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        aria-pressed={proofMode === opt.id}
                        onClick={() => setProofMode(opt.id)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-colors min-h-[44px] ${
                          proofMode === opt.id
                            ? 'bg-[var(--forest2)] text-white border-[var(--forest2)]'
                            : 'bg-[#faf8f2] text-[var(--ink)] border-[var(--line)]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verdict Box */}
              <div className={`rounded-2xl border p-5 ${verdict.boxClass}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`font-mono text-[11px] font-bold tracking-[0.14em] uppercase ${verdict.badgeClass}`}>
                    {verdict.badge}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[var(--ink)]">
                    Margin: {netMarginPct}% · Dispute Drag: {disputeDragPct}%
                  </span>
                </div>
                <strong className="font-serif text-lg text-[var(--ink)] block mb-1.5">
                  {verdict.headline}
                </strong>
                <p className="text-[13.5px] leading-relaxed text-[var(--ink)] mb-4">
                  {verdict.summary}
                </p>
                <Link
                  href={`/schedule?source=output-vs-outcome-ai-pricing&leak=${encodeURIComponent(leakParam)}`}
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[var(--forest2)] !text-white font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Bring this verdict to a 60-min review ↗
                </Link>
              </div>
            </div>

            {/* Right 6-col: Honest Disqualifier Card */}
            <div className="lg:col-span-6 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                  HONEST DISQUALIFIER · WHEN TO KEEP YOUR WALLET CLOSED
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-4">
                  Do not pay for outcome pricing advice if your buyer still argues over what counts
                  as done.
                </h2>
                <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-4">
                  Companies with fewer than twenty paying accounts should keep their money. Open your last
                  twenty customer invoices this afternoon, sit with your Customer Support Lead for
                  thirty minutes, and mark which automated jobs finished cleanly without human
                  rewrites.
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-5">
                  Pure outcome pricing also fails when your tool completes its step and the
                  buyer&apos;s own legal or procurement team stalls the transaction for six weeks. I
                  do not take retainers to push broken proof models onto skeptical finance teams.
                </p>

                <div className="rounded-xl bg-[var(--paper2)] border border-[var(--line)] p-5 mb-6">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--forest)] block mb-2.5">
                    WHEN A 14-DAY REPRICING SPRINT PAYS FOR ITSELF ($2,500)
                  </span>
                  <ul className="space-y-2 text-[14px] text-[var(--ink)] pl-0 list-none m-0">
                    <li className="flex gap-2.5">
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>Annual renewals are stalling because buyers see draft fees as noise</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>You need a safe base-plus-outcome price sheet your CFO signs off on</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>Sales reps need plain renewal wording that stops discount requests</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--line)]">
                <Link className="button button-gold" href="/pricing-sprints">
                  Compare Fixed Sprints ↗
                </Link>
                <Link className="button button-outline" href="/tools/ai-feature-margin">
                  Run AI Feature Margin Check
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 06. CHECKOUT DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="output-vs-outcome-ai-pricing"
            metricLabel="Modeled Dispute & Rework Exposure"
            metricValue={leakParam}
            headline="Fix Your Pricing Model Before Next Quarter's Renewals Hit Finance"
            subheadline="Start with the $29 survival kit, book a $450 60-minute live pricing teardown, or lock in a $2,500 14-day repricing sprint."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Straight Answers
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Questions CFOs and founders ask before changing their price sheet
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
