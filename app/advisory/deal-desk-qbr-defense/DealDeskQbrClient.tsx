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

const DEFENSE_RULES = [
  {
    code: '01 / FIVE-FILE DEMO COLLAPSE',
    title: 'Ban Uncapped Pilots',
    body: 'I still watch teams price a multi-year enterprise contract off a neat five-user demo. By month two, fifty departments log in under an open-ended order form and your vendor bill wipes out the margin.',
    fix: 'I tell every deal desk to write a named seat or task cap into the contract before signature.',
    tag: 'Stops runaway rollouts',
  },
  {
    code: '02 / SPREADSHEET GLUE HABIT',
    title: 'Price Overages Before Signature',
    body: 'In almost every company I audit, the VP of Sales Ops and Director of Finance spend three days every month-end gluing spreadsheet exports together just to learn whether discounted deals made money.',
    fix: 'Set one published overage step-up rate in the quote sheet so your reps never improvise.',
    tag: 'Ends month-end guesswork',
  },
  {
    code: '03 / IGNORED DASHBOARD GRAVEYARD',
    title: 'Show Cash Not Activity at QBR',
    body: 'I have sat through dozens of QBRs where adoption charts looked green and Finance still froze the renewal. Nobody in Finance pays bills with click counts while the CFO cuts your line on Monday morning.',
    fix: 'Open every QBR with verified cash kept, avoided headcount spend, and net margin.',
    tag: 'Protects renewal budgets',
  },
];

const WATERFALL_MODES = {
  undefended: {
    label: 'Undefended 25% Discount',
    discountText: '-$25,000',
    usageText: '-$48,000',
    cashText: '$27,000',
    marginText: '27% Net Margin',
    summary:
      'A 25% quarter-end discount plus an uncapped heavy-user bill cuts a $100,000 enterprise contract down to $27,000 kept. Finance flags the account for immediate repricing or cancellation.',
    bars: [
      { id: 'list', label: 'List Contract', value: '$100K', y: 65, height: 140, fill: '#29473b' },
      { id: 'discount', label: 'Sales Discount', value: '-$25K', y: 65, height: 35, fill: '#b77a35' },
      { id: 'usage', label: 'Heavy Usage Bill', value: '-$48K', y: 100, height: 67, fill: '#be123c' },
      { id: 'kept', label: 'Cash Kept', value: '$27K', y: 167, height: 38, fill: '#9f1239' },
    ],
  },
  defended: {
    label: 'Defended Deal Desk Floor',
    discountText: '-$10,000',
    usageText: '-$16,000',
    cashText: '$74,000',
    marginText: '74% Net Margin',
    summary:
      'A 10% deal-desk discount cap paired with a written usage ceiling holds delivery bills at $16,000 and leaves $74,000 in cash kept. Your CFO signs the renewal in five minutes.',
    bars: [
      { id: 'list', label: 'List Contract', value: '$100K', y: 65, height: 140, fill: '#29473b' },
      { id: 'discount', label: 'Sales Discount', value: '-$10K', y: 65, height: 14, fill: '#b77a35' },
      { id: 'usage', label: 'Heavy Usage Bill', value: '-$16K', y: 79, height: 22, fill: '#475569' },
      { id: 'kept', label: 'Cash Kept', value: '$74K', y: 101, height: 104, fill: '#047857' },
    ],
  },
} as const;

export default function DealDeskQbrClient({ faqs }: { faqs: FaqEntry[] }) {
  const prefersReducedMotion = useReducedMotion();

  const [waterfallMode, setWaterfallMode] = useState<'undefended' | 'defended'>('undefended');
  const [dealSize, setDealSize] = useState<number>(80000);
  const [discountPct, setDiscountPct] = useState<number>(22);
  const [heavyCostShare, setHeavyCostShare] = useState<number>(22);
  const [ceilingWritten, setCeilingWritten] = useState<'yes' | 'no'>('no');
  const [copiedScript, setCopiedScript] = useState<boolean>(false);

  const waterfall = WATERFALL_MODES[waterfallMode];

  const netBilledRevenue = Math.round(dealSize * (1 - discountPct / 100));
  const baseDeliveryCost = dealSize * (heavyCostShare / 100);
  const effectiveDeliveryCost = Math.round(
    ceilingWritten === 'no' ? baseDeliveryCost * 1.45 : baseDeliveryCost
  );
  const profitKept = netBilledRevenue - effectiveDeliveryCost;
  const netMarginPct =
    netBilledRevenue > 0 ? Math.round((profitKept / netBilledRevenue) * 100) : 0;
  const minSafeWalkAwayPrice = Math.round(effectiveDeliveryCost / 0.35);

  const verdict =
    netMarginPct < 45 || profitKept <= 0 || (ceilingWritten === 'no' && netMarginPct < 55)
      ? {
          status: 'BLOCK DEAL',
          tone: 'border-rose-700/40 bg-rose-50 text-rose-950',
          badgeTone: 'text-rose-800',
          note: 'Do not send this order form out the door. Uncapped heavy usage paired with this discount destroys deal profit before quarter two.',
        }
      : ceilingWritten === 'yes' && netMarginPct >= 65 && discountPct <= 15
        ? {
            status: 'APPROVE AT DEAL DESK',
            tone: 'border-emerald-800/40 bg-emerald-50 text-emerald-950',
            badgeTone: 'text-emerald-800',
            note: 'Your pricing floor and written usage ceiling protect net margin cleanly. Sales Ops can clear this deal without pulling the CFO into a meeting.',
          }
        : {
            status: 'CFO SIGN-OFF REQUIRED',
            tone: 'border-amber-700/40 bg-amber-50 text-amber-950',
            badgeTone: 'text-amber-800',
            note: 'Too much margin is exposed to either extra discounting or unwritten usage surges. Put a hard usage ceiling in writing or raise the floor before closing.',
          };

  const formatSignedDollars = (val: number) =>
    val < 0 ? `-$${Math.abs(val).toLocaleString('en-US')}` : `$${val.toLocaleString('en-US')}`;

  const formattedDeal = dealSize.toLocaleString('en-US');
  const formattedNetRevenue = netBilledRevenue.toLocaleString('en-US');
  const formattedProfitKept = formatSignedDollars(profitKept);
  const formattedWalkAway = minSafeWalkAwayPrice.toLocaleString('en-US');
  const formattedDeliveryCost = effectiveDeliveryCost.toLocaleString('en-US');

  const cfoDefenseScript = `At a ${discountPct}% discount on our $${formattedDeal} list quote, net billed cash is $${formattedNetRevenue} against $${formattedDeliveryCost} in modeled delivery cost, leaving ${formattedProfitKept} kept (${netMarginPct}% net margin). ${
    ceilingWritten === 'yes'
      ? `Because the order form locks a written usage ceiling and holds our $${formattedWalkAway} safe floor, this deal clears our quarterly profit target.`
      : `Without a written usage ceiling in the order form, heavy buyer volume pushes our safe walk-away price to $${formattedWalkAway}, so we should require a ceiling clause or hold at ${verdict.status}.`
  }`;

  const leakParam = `${netMarginPct}% Margin (${formattedProfitKept} Kept)`;

  async function handleCopyScript() {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(cfoDefenseScript);
        setCopiedScript(true);
        setTimeout(() => setCopiedScript(false), 2000);
      }
    } catch {
      setCopiedScript(false);
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. DEEP INK (--ink) 8/4 ASYMMETRIC MASTHEAD HERO */}
        <section className="bg-[var(--ink)] text-white border-b border-white/10">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left 8-col Masthead */}
              <div className="lg:col-span-8">
                <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#e6c38c] mb-4 flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[1px] bg-[var(--gold)]" />
                  Pillar 03 Executive Playbook · Deal Desk &amp; Renewal Defense
                </p>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-medium text-[#faf8f2] mb-5">
                  Finance already rejected your slide deck before the QBR started.
                </h1>

                <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-zinc-100 max-w-3xl mb-7">
                  Deal desk and QBR defense replace vague AI adoption slides with unit profit proof
                  before contracts get signed or budgets get cut. It connects custom sales
                  discounts, vendor bills, and renewal cash into numbers finance leaders approve.
                </p>

                <div className="flex flex-wrap gap-3.5 mb-8">
                  <a
                    href="#deal-desk-guard"
                    style={{ color: '#09090b' }}
                    className="inline-flex items-center px-6 py-3.5 rounded-lg bg-[#d8c7a8] !text-zinc-950 font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                  >
                    Run the 60-sec Deal Margin Guard ↗
                  </a>
                  <Link
                    href="/schedule?source=deal-desk-qbr-defense"
                    style={{ color: '#ffffff' }}
                    className="inline-flex items-center px-6 py-3.5 rounded-lg border border-white/30 !text-white font-semibold text-sm hover:bg-white/10 transition-colors min-h-[44px]"
                  >
                    Book a 15-min QBR &amp; Deal Desk call
                  </Link>
                </div>

                {/* Inline 3-stat QBR defense bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-2xl">
                  <div>
                    <span className="font-serif text-2xl text-[#e6c38c] block">60 sec</span>
                    <span className="text-xs text-zinc-100">deal desk floor check</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl text-[#e6c38c] block">3 rules</span>
                    <span className="text-xs text-zinc-100">zero uncapped renewal surprises</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl text-[#e6c38c] block">$450 / $2,500</span>
                    <span className="text-xs text-zinc-100">teardown or 14-day sprint</span>
                  </div>
                </div>
              </div>

              {/* Right 4-col Floating #faf8f2 QBR Survival Rule Card */}
              <motion.aside
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-4 bg-[#faf8f2] text-[var(--ink)] rounded-2xl p-6 sm:p-7 border border-white/20 shadow-xl"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                  QBR SURVIVAL RULE · FIELD NOTE
                </span>
                <strong className="font-serif text-[22px] leading-snug text-[var(--ink)] block mb-3">
                  Never approve a discount without a written usage ceiling.
                </strong>
                <p className="text-[14px] leading-relaxed text-[var(--muted)] mb-4">
                  On the twenty-ninth of last quarter, a Director of Finance forwarded me a custom
                  enterprise order form. Sales priced the whole year off a five-user test, and the
                  deal bled cash the moment fifty departments logged in.
                </p>
                <div className="rounded-xl bg-[var(--paper2)] border border-[var(--line)] p-4 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--forest)] block mb-1">
                    ONE LINE THAT SAVES RENEWALS
                  </span>
                  <p className="text-[13px] text-[var(--ink)] font-medium leading-relaxed m-0">
                    If Finance cannot read the net profit per customer in ten seconds, your QBR
                    deck is dead on arrival.
                  </p>
                </div>
                <a
                  href="#deal-desk-guard"
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[var(--ink)] !text-white font-semibold text-xs hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Check Your Discount Floor Now ↗
                </a>
              </motion.aside>
            </div>
          </div>
        </section>

        {/* 02. 4/4/4 THREE DEFENSE RULES BENTO + ANGLE 47 BEFORE/AFTER RECEIPT */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
              THREE NON-NEGOTIABLE DEAL DESK STANDARDS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight font-medium text-[var(--ink)] mb-3">
              Why custom AI deals pass sales review and fail QBRs ninety days later.
            </h2>
            <p className="text-[15.5px] text-[var(--muted)] m-0">
              I have watched Chief Revenue Officers celebrate big enterprise signatures in December
              and spend April explaining to the CFO why gross margin dropped twelve points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {DEFENSE_RULES.map((rule) => (
              <article
                key={rule.code}
                className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                    {rule.code}
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--ink)] mb-3">{rule.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-[var(--muted)] mb-3">
                    {rule.body}
                  </p>
                  <p className="text-[14px] text-[var(--ink)] font-medium mb-0">
                    My rule: {rule.fix}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[var(--line)] font-mono text-[11px] text-[var(--forest)]">
                  RESULT: {rule.tag}
                </div>
              </article>
            ))}
          </div>

          {/* Angle 47: Before-and-After QBR Receipt Side-by-Side Comparison */}
          <div className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  SIDE-BY-SIDE QBR RECEIPT (BEFORE VS. AFTER)
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  What gets cut at renewal vs. what your CFO signs without hesitation.
                </h2>
              </div>
              <Link
                href="/for-cfos"
                className="text-xs font-semibold text-[var(--forest)] border-b border-[var(--gold)] pb-0.5 self-start md:self-auto whitespace-nowrap"
              >
                Read the CFO Governance Brief ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-rose-700/25 bg-rose-50/60 p-5 sm:p-6">
                <span className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-rose-800 block mb-2">
                  BEFORE: REJECTED QBR SLIDE (&ldquo;HOURS SAVED THEATER&rdquo;)
                </span>
                <ul className="space-y-2.5 text-[14px] text-[var(--ink)] pl-0 list-none m-0">
                  <li className="flex justify-between gap-4 border-b border-rose-700/15 pb-2">
                    <span className="text-[var(--muted)]">Headline claim</span>
                    <strong className="text-right">1,420 staff hours saved</strong>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-rose-700/15 pb-2">
                    <span className="text-[var(--muted)]">Pricing term</span>
                    <strong className="text-right">25% discount, uncapped seats</strong>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-rose-700/15 pb-2">
                    <span className="text-[var(--muted)]">Vendor bill shown?</span>
                    <strong className="text-rose-800 text-right">Hidden in IT overhead</strong>
                  </li>
                  <li className="flex justify-between gap-4 pt-1">
                    <span className="text-[var(--muted)]">Finance decision</span>
                    <strong className="text-rose-800 text-right">Freeze renewal &amp; cut seats</strong>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-800/30 bg-emerald-50/60 p-5 sm:p-6">
                <span className="font-mono text-[10px] font-bold tracking-[0.14em] uppercase text-emerald-800 block mb-2">
                  AFTER: CFO-APPROVED QBR RECEIPT (&ldquo;UNIT CASH PROOF&rdquo;)
                </span>
                <ul className="space-y-2.5 text-[14px] text-[var(--ink)] pl-0 list-none m-0">
                  <li className="flex justify-between gap-4 border-b border-emerald-800/15 pb-2">
                    <span className="text-[var(--muted)]">Headline proof</span>
                    <strong className="text-right">$74,000 net cash kept</strong>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-emerald-800/15 pb-2">
                    <span className="text-[var(--muted)]">Pricing term</span>
                    <strong className="text-right">10% cap + written usage ceiling</strong>
                  </li>
                  <li className="flex justify-between gap-4 border-b border-emerald-800/15 pb-2">
                    <span className="text-[var(--muted)]">Vendor bill shown?</span>
                    <strong className="text-emerald-800 text-right">$16,000 capped per contract</strong>
                  </li>
                  <li className="flex justify-between gap-4 pt-1">
                    <span className="text-[var(--muted)]">Finance decision</span>
                    <strong className="text-emerald-800 text-right">Renew &amp; expand next quarter</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 03. 12-COL DEAL DISCOUNT VS MARGIN FLOOR WATERFALL SVG */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-9">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  ANIMATED DEAL WATERFALL ($100,000 ENTERPRISE QUOTE)
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  Deal Discount vs. Margin Floor Waterfall
                </h2>
              </div>

              <div className="inline-flex rounded-xl bg-[var(--paper2)] p-1 border border-[var(--line)] self-start">
                {(['undefended', 'defended'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    aria-pressed={waterfallMode === mode}
                    onClick={() => setWaterfallMode(mode)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors min-h-[44px] sm:min-h-[38px] ${
                      waterfallMode === mode ? 'text-white' : 'text-[var(--ink)]'
                    }`}
                  >
                    {waterfallMode === mode && (
                      <motion.span
                        layoutId="deal-waterfall-pill"
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 360, damping: 28 }
                        }
                        className="absolute inset-0 rounded-lg bg-[var(--ink)]"
                      />
                    )}
                    <span className="relative z-10">{WATERFALL_MODES[mode].label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[var(--line)] p-4 sm:p-6">
              <svg
                viewBox="0 0 680 250"
                className="w-full h-auto block"
                role="img"
                aria-label="Deal discount and heavy usage bill waterfall showing cash kept on a $100,000 enterprise contract"
              >
                <title>
                  Deal discount and heavy usage bill waterfall comparing undefended 25 percent
                  discount against defended deal desk floor
                </title>

                {/* Baseline floor & 65% Safe Margin reference line */}
                <line
                  x1={40}
                  y1={205}
                  x2={640}
                  y2={205}
                  stroke="rgba(30, 41, 36, 0.2)"
                  strokeWidth="1.5"
                />
                <line
                  x1={40}
                  y1={114}
                  x2={640}
                  y2={114}
                  stroke="#047857"
                  strokeWidth="1.2"
                  strokeDasharray="5 5"
                />

                {waterfall.bars.map((bar, idx) => {
                  const barX = 72 + idx * 148;
                  const barW = 92;
                  return (
                    <g key={bar.id}>
                      <motion.rect
                        x={barX}
                        width={barW}
                        rx={6}
                        fill={bar.fill}
                        initial={false}
                        animate={{ y: bar.y, height: bar.height }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 145, damping: 22, delay: idx * 0.04 }
                        }
                      />
                      <text
                        x={barX + barW / 2}
                        y={bar.y - 8}
                        textAnchor="middle"
                        fill="#1e2924"
                        fontSize="13"
                        fontWeight="700"
                        fontFamily="var(--mono)"
                      >
                        {bar.value}
                      </text>
                      <text
                        x={barX + barW / 2}
                        y={228}
                        textAnchor="middle"
                        fill="#3f3f46"
                        fontSize="12"
                        fontWeight="600"
                        fontFamily="var(--sans)"
                      >
                        {bar.label}
                      </text>
                    </g>
                  );
                })}

                <g>
                  <rect
                    x={190}
                    y={118}
                    width={152}
                    height={17}
                    rx={4}
                    fill="#faf8f2"
                    stroke="rgba(4, 120, 87, 0.25)"
                    strokeWidth="1"
                  />
                  <text
                    x={266}
                    y={130}
                    textAnchor="middle"
                    fill="#047857"
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="var(--mono)"
                  >
                    65% SAFE FLOOR ($65K)
                  </text>
                </g>
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mt-5 pt-5 border-t border-[var(--line)]">
              <p className="md:col-span-9 text-[14px] leading-relaxed text-[var(--ink)] m-0">
                {waterfall.summary}
              </p>
              <div className="md:col-span-3 md:text-right">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--gold)] block">
                  OUTCOME
                </span>
                <strong className="font-serif text-xl text-[var(--ink)]">
                  {waterfall.marginText}
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* 04. 7/5 SPLIT: DEAL DESK MARGIN FLOOR GUARD + HONEST DISQUALIFIER */}
        <section id="deal-desk-guard" className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 7-col Interactive 60-Sec Check */}
            <div className="lg:col-span-7 bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                      60-SECOND MARGIN FLOOR CHECK · BEFORE ORDER FORM APPROVAL
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                      Deal Desk Discount &amp; Margin Floor Guard
                    </h2>
                  </div>
                  <Link
                    href="/tools/aueb"
                    className="text-xs font-semibold text-[var(--forest)] border-b border-[var(--gold)] pb-0.5 self-start sm:self-auto whitespace-nowrap"
                  >
                    Open full AUEB calculator ↗
                  </Link>
                </div>

                <div className="space-y-5 mb-6">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                      <label htmlFor="quoted-deal-slider">Quoted Annual Deal Size</label>
                      <span className="font-mono text-[var(--forest)]">${formattedDeal}/yr</span>
                    </div>
                    <input
                      id="quoted-deal-slider"
                      type="range"
                      min={12000}
                      max={250000}
                      step={2000}
                      value={dealSize}
                      onChange={(e) => setDealSize(Number(e.target.value))}
                      className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                      <label htmlFor="sales-discount-slider">Requested Sales Discount</label>
                      <span className="font-mono text-[var(--forest)]">{discountPct}% off list</span>
                    </div>
                    <input
                      id="sales-discount-slider"
                      type="range"
                      min={0}
                      max={40}
                      step={1}
                      value={discountPct}
                      onChange={(e) => setDiscountPct(Number(e.target.value))}
                      className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                      <label htmlFor="heavy-cost-slider">Expected Heavy-Use Cost Share</label>
                      <span className="font-mono text-rose-800">{heavyCostShare}% of list price</span>
                    </div>
                    <input
                      id="heavy-cost-slider"
                      type="range"
                      min={5}
                      max={45}
                      step={1}
                      value={heavyCostShare}
                      onChange={(e) => setHeavyCostShare(Number(e.target.value))}
                      className="w-full accent-rose-700 h-2 cursor-pointer"
                    />
                  </div>

                  <div>
                    <span className="block text-sm font-semibold text-[var(--ink)] mb-2">
                      Usage Ceiling Written in Order Form?
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          { v: 'yes', label: 'Yes, hard usage ceiling written in' },
                          { v: 'no', label: 'No, unlimited seat or uncapped run' },
                        ] as const
                      ).map((opt) => (
                        <button
                          key={opt.v}
                          type="button"
                          aria-pressed={ceilingWritten === opt.v}
                          onClick={() => setCeilingWritten(opt.v)}
                          className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition-colors min-h-[44px] ${
                            ceilingWritten === opt.v
                              ? 'bg-[var(--ink)] text-white border-[var(--ink)]'
                              : 'bg-[#faf8f2] text-[var(--ink)] border-[var(--line)]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-2xl border p-5 sm:p-6 ${verdict.tone}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className={`font-mono text-[11px] font-bold tracking-[0.14em] uppercase ${verdict.badgeTone}`}>
                    VERDICT: {verdict.status}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--ink)] font-semibold">
                    Net Billed: ${formattedNetRevenue}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Net Margin
                    </span>
                    <strong className="font-serif text-2xl text-[var(--ink)]">
                      {netMarginPct}%
                    </strong>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Dollar Profit Kept
                    </span>
                    <strong className="font-serif text-2xl text-[var(--ink)]">
                      {formattedProfitKept}
                    </strong>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Safe Walk-Away Price
                    </span>
                    <strong className="font-serif text-2xl text-[var(--ink)]">
                      ${formattedWalkAway}
                    </strong>
                  </div>
                </div>

                <p className="text-[13.5px] leading-relaxed text-[var(--ink)] mb-4">
                  {verdict.note}
                </p>

                {/* Copy-ready 2-sentence CFO QBR defense script */}
                <div className="bg-white rounded-xl border border-[var(--line)] p-4 mb-4">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--forest)]">
                      COPY-READY 2-SENTENCE CFO QBR SCRIPT
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyScript}
                      className="px-3 py-1.5 rounded-lg bg-[var(--paper2)] border border-[var(--line)] text-[11px] font-semibold text-[var(--ink)] hover:bg-[var(--paper)] transition-colors min-h-[44px] sm:min-h-[36px]"
                    >
                      {copiedScript ? 'Copied to Clipboard' : 'Copy CFO Script'}
                    </button>
                  </div>
                  <p className="text-[13px] leading-relaxed text-[var(--ink)] m-0">
                    {cfoDefenseScript}
                  </p>
                </div>

                <Link
                  href={`/schedule?source=deal-desk-qbr-defense&leak=${encodeURIComponent(leakParam)}`}
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[var(--ink)] !text-white font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Bring this deal sheet to a 15-min review ↗
                </Link>
              </div>
            </div>

            {/* Right 5-col Honest Disqualifier Card */}
            <div className="lg:col-span-5 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                  BUY NOTHING YET · WHEN TO SKIP DEAL DESK ADVISORY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-4">
                  Skip Deal Desk advisory if your average contract sits under $5,000.
                </h2>
                <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-4">
                  If you sell standard self-serve monthly plans under five thousand dollars a year
                  with zero custom sales discounts and zero formal board QBR reviews, I will tell
                  you straight up to keep your money.
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-5">
                  Open a plain one-page monthly profit spreadsheet listing customer cash collected
                  next to vendor bills. You do not need my help to see which flat plan needs a
                  price bump.
                </p>

                <div className="rounded-xl bg-white border border-[var(--line)] p-5 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--forest)] block mb-2">
                    WHEN A 14-DAY SPRINT PAYS FOR ITSELF
                  </span>
                  <ul className="space-y-2.5 text-[14px] text-[var(--ink)] pl-0 list-none m-0">
                    <li className="flex gap-2.5">
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>Sales discounts above 15% are sliding past Deal Desk unchecked</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>Your CFO is questioning AI margins ahead of quarterly board prep</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-[var(--gold)] font-bold">✓</span>
                      <span>Renewals stall because your team shows click charts instead of cash</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--line)]">
                <Link className="button button-gold" href="/pricing-sprints">
                  See Fixed Sprint Prices ↗
                </Link>
                <Link className="button button-outline" href="/for-boards">
                  Board Review Brief
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 05. SCORECARD CHECKOUT DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="deal-desk-qbr-defense"
            metricLabel="Modeled Deal Cash Kept"
            metricValue={leakParam}
            headline="Protect Your Next Quarter Before Sales Signs Another Uncapped Deal"
            subheadline="Start with the $29 margin workbook, bring one live contract to a $450 60-minute teardown, or fix your entire deal desk floor in 14 days for $2,500."
          />

          <div className="mt-12 max-w-4xl">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
              STRAIGHT ANSWERS FOR SALES OPS &amp; FINANCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Questions CFOs and Revenue Leaders ask before locking deal desk rules
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
