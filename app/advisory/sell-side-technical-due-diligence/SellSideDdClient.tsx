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

const RED_FLAGS = [
  {
    id: 'margin-leak',
    label: 'Heavy AI users make blended gross margin jump around by 8+ points',
    haircutPct: 9,
    fixDays: '10 days',
  },
  {
    id: 'single-owner',
    label: 'Only one senior builder understands how billing, deployment, and backups work',
    haircutPct: 6,
    fixDays: '7 days',
  },
  {
    id: 'zombie-products',
    label: 'More than 30% of developer payroll goes to old products with flat renewals',
    haircutPct: 8,
    fixDays: '14 days',
  },
  {
    id: 'unwritten-approvals',
    label: 'No written human sign-off rules around automated customer refunds or pricing',
    haircutPct: 5,
    fixDays: '5 days',
  },
];

export default function SellSideDdClient({ faqs }: { faqs: FaqEntry[] }) {
  const [viewMode, setViewMode] = useState<'unprepared' | 'cleaned'>('unprepared');
  const [dealSizeM, setDealSizeM] = useState<number>(35);
  const [activeFlags, setActiveFlags] = useState<string[]>(['margin-leak', 'zombie-products']);

  function toggleFlag(id: string) {
    setActiveFlags((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  const totalHaircutPct = RED_FLAGS.filter((f) => activeFlags.includes(f.id)).reduce(
    (sum, f) => sum + f.haircutPct,
    0
  );
  const haircutDollarsM = Number(((dealSizeM * totalHaircutPct) / 100).toFixed(1));
  const netSaleM = Number((dealSizeM - haircutDollarsM).toFixed(1));

  const ladderBars =
    viewMode === 'unprepared'
      ? [
          { label: 'Headline LOI Price', val: 100, text: '$35.0M Headline Offer', color: '#162e26' },
          { label: 'Margin & AI Bill Cut', val: 85, text: '-$3.2M Buyer Discount', color: '#be123c' },
          { label: 'Escrow Holdback', val: 72, text: '-$2.8M Locked 18 Mos', color: '#b45309' },
          { label: 'Cash Wired at Close', val: 72, text: '$29.0M Cash Delivered', color: '#52525b' },
        ]
      : [
          { label: 'Headline LOI Price', val: 100, text: '$35.0M Headline Offer', color: '#162e26' },
          { label: '30-Day Pre-Sale Fix', val: 99, text: '-$0.0M Clean Proof', color: '#047857' },
          { label: 'Escrow Holdback', val: 96, text: '-$1.0M Standard Hold', color: '#29473b' },
          { label: 'Cash Wired at Close', val: 96, text: '$34.0M Cash Delivered', color: '#047857' },
        ];

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. FULL-WIDTH DEEP FOREST EXIT DOSSIER HERO */}
        <section className="bg-[var(--forest2)] text-white border-b border-white/10">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-16 sm:py-20">
            <div className="max-w-4xl">
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#f3e3c6] mb-4 flex items-center gap-2.5">
                <span className="inline-block w-6 h-[1px] bg-[var(--gold)]" />
                Pillar 04 Exit Readiness · Sell-Side Technical Due Diligence
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-medium text-[#f4f1e9] mb-5">
                A buyer found a four-million-dollar leak two weeks before closing day.
              </h1>
              <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-zinc-100 max-w-3xl mb-8">
                Sell-side technical due diligence prepares a software company for buyer scrutiny
                sixty days before a sale opens. Fixing hidden customer margin leaks, overgrown
                roadmaps, and key-person dependencies upfront prevents late-stage price cuts and
                escrow holdbacks.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href="#haircut-estimator"
                  style={{ color: '#09090b' }}
                  className="inline-flex items-center px-6 py-3.5 rounded-lg bg-[#d8c7a8] !text-zinc-950 font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Estimate your buyer haircut (60 sec) ↗
                </a>
                <Link
                  href="/schedule?source=sell-side-dd"
                  style={{ color: '#ffffff' }}
                  className="inline-flex items-center px-6 py-3.5 rounded-lg border border-white/30 !text-white font-semibold text-sm hover:bg-white/10 transition-colors min-h-[44px]"
                >
                  Book a confidential pre-sale review
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 02. BESPOKE SVG MOTION GRAPHIC - "Pre-Sale Valuation Defense Ladder" */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-8 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                    LIVE EXIT MATH VISUAL
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                    What happens to a $35M sale price when buyers find surprises
                  </h2>
                </div>

                <div className="inline-flex rounded-full bg-[var(--paper2)] p-1 border border-[var(--line)] self-start">
                  {(['unprepared', 'cleaned'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      aria-pressed={viewMode === m}
                      onClick={() => setViewMode(m)}
                      className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors min-h-[44px] sm:min-h-[36px] ${
                        viewMode === m ? 'text-white' : 'text-[var(--ink)]'
                      }`}
                    >
                      {viewMode === m && (
                        <motion.span
                          layoutId="sellside-mode-pill"
                          transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                          className="absolute inset-0 rounded-full bg-[var(--forest2)]"
                        />
                      )}
                      <span className="relative z-10">
                        {m === 'unprepared' ? 'Unprepared Exit' : '30-Day Pre-Sale Cleanup'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[var(--line)] p-4 sm:p-5">
                <svg
                  viewBox="0 0 680 235"
                  className="w-full h-auto block"
                  role="img"
                  aria-label="Pre-sale valuation defense comparison between unprepared exit and 30-day cleanup"
                >
                  <title>Pre-sale valuation defense ladder</title>
                  {ladderBars.map((bar, idx) => {
                    const y = 18 + idx * 54;
                    const width = Math.max(40, (bar.val / 100) * 440);
                    return (
                      <g key={bar.label}>
                        <text
                          x={8}
                          y={y + 20}
                          fill="#1e2924"
                          fontSize="13"
                          fontWeight="600"
                          fontFamily="var(--sans)"
                        >
                          {bar.label}
                        </text>
                        <rect x={175} y={y + 4} width={440} height={26} rx={6} fill="#f4f1e9" />
                        <motion.rect
                          x={175}
                          y={y + 4}
                          height={26}
                          rx={6}
                          fill={bar.color}
                          initial={false}
                          animate={{ width }}
                          transition={{ type: 'spring', stiffness: 120, damping: 20, delay: idx * 0.05 }}
                        />
                        <text
                          x={185}
                          y={y + 21}
                          fill="#ffffff"
                          fontSize="11.5"
                          fontWeight="700"
                          fontFamily="var(--mono)"
                        >
                          {bar.text}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
              <p className="text-[13px] text-[var(--muted)] mt-4 mb-0">
                Buyers love unprepared founders because every unanswered question during week two of
                diligence turns directly into a lower cash wire on closing day.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                  WHAT HAPPENED AT CLOSING
                </span>
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-3">
                  Bankers polish your sales story. Auditors open the back closet.
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--muted)] mb-4">
                  I have sat on the buyer side of software acquisitions. Within forty-eight hours of
                  getting data room access, we skip the marketing slides and check three items:
                  customer profit by tier, how much payroll maintains dead products, and what breaks
                  when one key employee leaves.
                </p>
                <p className="text-[14.5px] leading-relaxed text-[var(--ink)] font-medium mb-0">
                  Finding those problems sixty days early keeps your price intact. Letting a buyer find
                  them costs you millions after you already stopped talking to competing bidders.
                </p>
              </div>
              <Link
                href="/tools/due-diligence"
                className="mt-6 text-xs font-semibold text-[var(--forest)] border-b border-[var(--gold)] pb-0.5 self-start"
              >
                Run the full 36-point buyer audit checklist ↗
              </Link>
            </div>
          </div>
        </section>

        {/* 03. INTERACTIVE 60-SECOND CHECK - Sell-Side Valuation Haircut Estimator */}
        <section id="haircut-estimator" className="max-w-[var(--max)] mx-auto px-[5vw] py-10">
          <div className="bg-[#faf8f2] border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-9">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[var(--line)]">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  FREE 60-SECOND EXIT CHECK · DO THIS BEFORE SIGNING AN LOI
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  Check which buyer red flags are hiding in your company right now.
                </h2>
              </div>
              <div className="font-mono text-xs text-[var(--forest)] font-bold">
                Target Price: ${dealSizeM}M
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="deal-size-slider">Expected headline sale price</label>
                    <span className="font-mono text-[var(--forest)]">${dealSizeM}M</span>
                  </div>
                  <input
                    id="deal-size-slider"
                    type="range"
                    min={5}
                    max={150}
                    step={5}
                    value={dealSizeM}
                    onChange={(e) => setDealSizeM(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div className="space-y-2.5 pt-2">
                  {RED_FLAGS.map((flag) => {
                    const checked = activeFlags.includes(flag.id);
                    return (
                      <button
                        key={flag.id}
                        type="button"
                        role="checkbox"
                        aria-checked={checked}
                        onClick={() => toggleFlag(flag.id)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-colors flex items-start justify-between gap-3 min-h-[48px] ${
                          checked
                            ? 'bg-[var(--forest2)] text-white border-[var(--forest2)]'
                            : 'bg-white text-[var(--ink)] border-[var(--line)]'
                        }`}
                      >
                        <span className="text-[13.5px] leading-snug">{flag.label}</span>
                        <span
                          className={`font-mono text-[11px] font-bold shrink-0 ${
                            checked ? 'text-[#f3e3c6]' : 'text-[var(--muted)]'
                          }`}
                        >
                          -{flag.haircutPct}% risk
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-[var(--line)] rounded-2xl p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-rose-800 block mb-2">
                  ESTIMATED BUYER PRICE REDUCTION
                </span>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#faf8f2] rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      At-Risk Cash
                    </span>
                    <span className="font-serif text-2xl font-bold text-rose-800">
                      ${haircutDollarsM.toLocaleString('en-US')}M
                    </span>
                  </div>
                  <div className="bg-[#faf8f2] rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Projected Close
                    </span>
                    <span className="font-serif text-2xl font-bold text-[var(--ink)]">
                      ${netSaleM.toLocaleString('en-US')}M
                    </span>
                  </div>
                </div>
                <p className="text-[13.5px] leading-relaxed text-[var(--ink)] mb-5">
                  {activeFlags.length === 0
                    ? 'Zero flags checked. If your financial and engineering books really look this clean, skip paid sell-side diligence and go straight to market.'
                    : `Buyers routinely demand ${totalHaircutPct}% in price cuts or escrow holdbacks for these exact items. You can clean most of them up in two to four weeks before diligence starts.`}
                </p>
                <Link
                  href={`/schedule?source=sell-side-dd&leak=${encodeURIComponent(`$${haircutDollarsM}M Exit Risk`)}`}
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[var(--forest2)] !text-white font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Book a $15K Pre-Sale Dry Run ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04. HONEST DISQUALIFIER + DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="bg-[var(--paper2)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 mb-8">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--forest)] block mb-2">
              WHEN TO KEEP YOUR WALLET CLOSED
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-3">
              Do not buy a pre-sale technical audit if your deal is an asset or talent buyout.
            </h2>
            <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-0">
              If your company brings in under two million dollars a year, or if your buyer is mostly
              acquiring your customer relationships to fold them into their own platform, they are
              not going to pay a software multiple anyway. Save the fifteen thousand dollars and
              spend it on clean accounting instead.
            </p>
          </div>

          <ScorecardCheckoutDrawer
            source="sell-side-dd"
            metricLabel="Projected Price Protection"
            metricValue={haircutDollarsM > 0 ? `$${haircutDollarsM}M Protected` : 'Clean Exit Baseline'}
            headline="Walk Into Diligence Ready Before Buyers Open Your Data Room"
            subheadline="Start with a $450 pre-sale risk teardown this week, or lock a two-week $2,500 cleanup sprint before your bankers go live."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Founder Exit FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Questions CEOs ask sixty days before going to market
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
