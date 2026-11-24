'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';
import FAQItem from '@/app/components/FAQItem';
import ScorecardCheckoutDrawer from '@/app/components/ScorecardCheckoutDrawer';

interface FaqEntry {
  q: string;
  a: string;
}

const MATRIX_CARDS = [
  {
    num: '01',
    title: '1. Unapproved Refunds & Edits',
    note: 'Automated assistants granting credits or contract discounts without Finance sign-off.',
    tag: 'Money Gate Failure',
  },
  {
    num: '02',
    title: '2. Hidden Human Cleanup',
    note: 'Sellers touting full automation while temporary staff quietly fix messy errors by hand.',
    tag: 'Margin Illusion',
  },
  {
    num: '03',
    title: '3. Rented Wrapper Risk',
    note: 'Zero proprietary value, just a thin custom screen glued onto one outside provider.',
    tag: 'Valuation Haircut',
  },
  {
    num: '04',
    title: '4. Uncapped Heavy-User Bills',
    note: 'Flat customer plans wiped out by stuck weekend retry loops and runaway usage.',
    tag: 'Profit Drain',
  },
];

const GATES = [
  {
    id: 'money',
    num: '1',
    label: 'Gate 1: Money Actions',
    shortLabel: 'Money Actions',
    x: 110,
    owner: 'CFO + VP of Operations',
    sellerClaim:
      'Our support assistant only handles routine billing questions and follows strict written company refund rules.',
    stressResult:
      'Polite instructions fail when pushed. Phrasing a complaint as a billing mistake three times in a row convinces the assistant to approve a $4,800 credit while bypassing Finance.',
    impact: 'Require hard system spending locks before wire release',
  },
  {
    id: 'privacy',
    num: '2',
    label: 'Gate 2: Client Privacy',
    shortLabel: 'Client Privacy',
    x: 275,
    owner: 'General Counsel',
    sellerClaim:
      'Private customer spreadsheets never leave our locked accounts or touch unapproved outside websites.',
    stressResult:
      'Staff paste live client renewal lists and personal customer details into free consumer chat windows every week because the official internal tool stalls on large files.',
    impact: 'Trigger escrow holdback and enterprise contract disclosure',
  },
  {
    id: 'ownership',
    num: '3',
    label: 'Gate 3: Vendor Ownership',
    shortLabel: 'Vendor Ownership',
    x: 445,
    owner: 'PE Operating Partner',
    sellerClaim:
      'We built proprietary automated workflows over three years that competitors cannot copy quickly.',
    stressResult:
      'Unplugging one outside vendor breaks the entire customer product. Worse, forty contract workers quietly fix broken outputs at night so customer satisfaction looks spotless.',
    impact: 'Re-price from software multiple down to services multiple',
  },
  {
    id: 'margin',
    num: '4',
    label: 'Gate 4: Margin Floor',
    shortLabel: 'Margin Floor',
    x: 610,
    owner: 'CFO + Deal Lead',
    sellerClaim:
      'Monthly AI usage costs stay tiny per customer and leave our eighty percent gross profit untouched.',
    stressResult:
      'A stuck background job repeats the same paid step forty times over a holiday weekend without an emergency shutoff, erasing three months of profit on top accounts.',
    impact: 'Enforce automatic daily spending caps prior to close',
  },
];

const DEALBREAKER_SCENARIOS = [
  {
    id: 'refund-lock',
    title: 'Refund & Price Approval Lock',
    question:
      'Does a hard system lock stop automated tools from issuing credits, refunds, or contract edits without a human manager approving?',
    redFlagNote: 'Polite rules alone fail when a persistent customer pushes back.',
    holdback: 750000,
  },
  {
    id: 'shadow-privacy',
    title: 'Private File & Shadow Tool Control',
    question:
      'Are employees blocked from pasting live customer files or spreadsheets into free outside chat websites?',
    redFlagNote: 'Staff pasting client files creates immediate legal liability for the buyer.',
    holdback: 1200000,
  },
  {
    id: 'hidden-labor',
    title: 'Hidden Contractor Cleanup Check',
    question:
      'Has the seller proven automated outputs reach customers cleanly without undisclosed contractors fixing errors by hand?',
    redFlagNote: 'Manual cleanup disguised as software hides real payroll cost.',
    holdback: 1000000,
  },
  {
    id: 'wrapper-risk',
    title: 'Single-Vendor Wrapper Dependency',
    question:
      'Does the target own repeatable business logic, or does the main product stop working if one outside vendor changes terms?',
    redFlagNote: 'Paying software multiples for a thin rented screen destroys return.',
    holdback: 1500000,
  },
  {
    id: 'weekend-cap',
    title: 'Runaway Bill & Weekend Kill-Switch',
    question:
      'Does a hard daily spending ceiling shut off stuck automated jobs before weekend vendor bills wipe out monthly profit?',
    redFlagNote: 'Silent retry loops turn flat-fee customers deeply unprofitable overnight.',
    holdback: 500000,
  },
];

export default function MaRedTeamingClient({ faqs }: { faqs: FaqEntry[] }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeGateIdx, setActiveGateIdx] = useState<number>(0);
  const [redFlags, setRedFlags] = useState<Record<string, boolean>>({
    'refund-lock': true,
    'shadow-privacy': false,
    'hidden-labor': false,
    'wrapper-risk': false,
    'weekend-cap': true,
  });

  const activeGate = GATES[activeGateIdx];

  function setScenarioStatus(id: string, isRedFlag: boolean) {
    setRedFlags((prev) => ({ ...prev, [id]: isRedFlag }));
  }

  const redFlagCount = Object.values(redFlags).filter(Boolean).length;
  const suggestedHoldback = DEALBREAKER_SCENARIOS.reduce(
    (sum, item) => (redFlags[item.id] ? sum + item.holdback : sum),
    0
  );
  const formattedHoldback = suggestedHoldback.toLocaleString('en-US');

  const verdict =
    redFlagCount === 0
      ? {
          tag: 'CLEAN TO CLOSE',
          tone: 'border-emerald-800/35 bg-emerald-50 text-emerald-950',
          badgeTone: 'bg-emerald-800 text-white',
          note: 'Zero dealbreakers flagged across these five gates. Keep your diligence checkbook closed on extra red-team testing and move to standard closing docs.',
        }
      : redFlagCount <= 2
        ? {
            tag: 'PRICE HAIRCUT REQUIRED',
            tone: 'border-amber-700/40 bg-amber-50 text-amber-950',
            badgeTone: 'bg-amber-700 text-white',
            note: 'You caught fixable cracks that sellers never highlight in the data room. Require hard software locks or an escrow holdback before releasing closing cash.',
          }
        : {
            tag: 'PAUSE & RE-PRICE DEAL',
            tone: 'border-rose-700/40 bg-rose-50 text-rose-950',
            badgeTone: 'bg-rose-800 text-white',
            note: 'Do not sign final closing documents on the seller schedule. Three or more red flags mean unpriced legal exposure, hidden labor, or runaway vendor bills.',
          };

  const leakParam =
    redFlagCount === 0
      ? 'Clean to Close'
      : `${redFlagCount} Red Flags ($${formattedHoldback} Holdback)`;

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. CLEAN WHITE BROADSHEET SPLIT HERO (6/6 GRID) */}
        <section className="bg-white border-b border-[var(--line)]">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-14 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">
                  <i /> Pillar 04 Pre-Close Diligence · Buyers &amp; General Counsel
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[50px] leading-[1.08] font-medium text-[var(--ink)] mb-5">
                  Never close an acquisition before trying to break the target company&apos;s AI tools.
                </h1>
                <p className="text-[16px] sm:text-[17px] leading-relaxed text-[var(--ink)] mb-4">
                  Pre-close AI stress-testing (red-teaming) tries to break a target company&apos;s
                  automated software before an acquisition closes. It uncovers unapproved data
                  sharing, missing human approval gates, and runaway vendor bills that lower
                  purchase price or kill deals.
                </p>
                <p className="text-[14px] leading-relaxed text-[var(--muted)] mb-7">
                  In plain English, red-teaming means trying to break automated software before
                  closing the exact way an angry customer or careless employee will on Monday
                  morning.
                </p>

                <div className="flex flex-wrap gap-3.5 mb-7">
                  <Link
                    href="/schedule?source=ai-red-teaming-ma-dealbreakers"
                    className="button button-gold"
                  >
                    Book Confidential Pre-Close Review ↗
                  </Link>
                  <a href="#dealbreaker-check" className="button button-outline">
                    Run 5-Point Dealbreaker Test
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[var(--line)] max-w-md">
                  <div>
                    <span className="font-serif text-2xl text-[var(--ink)] block">4 gates</span>
                    <span className="text-xs text-[var(--muted)]">tested before closing</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl text-[var(--ink)] block">60 sec</span>
                    <span className="text-xs text-[var(--muted)]">dealbreaker screen</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl text-[var(--ink)] block">$15K</span>
                    <span className="text-xs text-[var(--muted)]">fixed red-team sprint</span>
                  </div>
                </div>
              </div>

              {/* Right 6-col: 2x2 Red-Flag Deal Matrix inside --paper frame */}
              <div className="lg:col-span-6">
                <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--line)]">
                    <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--forest)] font-semibold">
                      2X2 RED-FLAG DEAL MATRIX
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)]">
                      PRE-CLOSE EXPOSURE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {MATRIX_CARDS.map((card) => (
                      <div
                        key={card.num}
                        className="bg-white border border-[var(--line)] rounded-xl p-4 flex flex-col justify-between"
                      >
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-1">
                            {card.tag}
                          </span>
                          <strong className="font-serif text-[17px] leading-snug text-[var(--ink)] block mb-1.5">
                            {card.title}
                          </strong>
                          <p className="text-[13px] leading-relaxed text-[var(--muted)] m-0">
                            {card.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[12.5px] text-[var(--muted)] mt-4 pt-3 border-t border-[var(--line)] mb-0">
                    Sellers never volunteer these four failures in a polished data room presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. 12-COL INTERACTIVE 4-GATE PRE-CLOSE INSPECTION PIPELINE */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="max-w-3xl mb-7">
            <p className="eyebrow">
              <i /> Live Inspection Pipeline
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight font-medium text-[var(--ink)] my-3">
              Four pre-close stress tests every buyer should run before wiring cash.
            </h2>
            <p className="text-[15.5px] text-[var(--muted)] m-0">
              Click any gate below or inside the diagram to compare what the seller claimed against
              what live stress-testing actually uncovered.
            </p>
          </div>

          {/* Keyboard-friendly Gate Selector Buttons */}
          <div className="flex flex-wrap gap-2.5 mb-5">
            {GATES.map((gate, idx) => {
              const isActive = idx === activeGateIdx;
              return (
                <button
                  key={gate.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveGateIdx(idx)}
                  style={isActive ? { color: '#ffffff' } : undefined}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-[var(--forest2)] !text-white border-[var(--forest2)]'
                      : 'bg-white text-[var(--ink)] border-[var(--line)] hover:border-[var(--forest)]'
                  }`}
                >
                  {gate.label}
                </button>
              );
            })}
          </div>

          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-5 sm:p-8">
            <div className="w-full overflow-hidden rounded-xl bg-white border border-[var(--line)] p-4 sm:p-6 mb-6">
              <svg
                viewBox="0 0 720 190"
                className="w-full h-auto block"
                role="group"
                aria-label="Interactive 4-gate pre-close AI inspection pipeline"
              >
                <title>Interactive 4-gate pre-close AI inspection pipeline</title>

                {/* Base Pipeline Line */}
                <path
                  d="M 110 92 L 610 92"
                  fill="none"
                  stroke="rgba(30, 41, 36, 0.16)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Animated Trace Path */}
                <motion.path
                  d="M 110 92 L 610 92"
                  fill="none"
                  stroke="#b77a35"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={false}
                  animate={{
                    pathLength:
                      activeGateIdx === 0
                        ? 0.08
                        : activeGateIdx === 1
                          ? 0.36
                          : activeGateIdx === 2
                            ? 0.68
                            : 1,
                  }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
                  }
                />

                {GATES.map((gate, idx) => {
                  const isActive = idx === activeGateIdx;
                  const isReached = idx <= activeGateIdx;
                  return (
                    <g
                      key={gate.id}
                      role="button"
                      tabIndex={0}
                      aria-label={gate.label}
                      aria-pressed={isActive}
                      onClick={() => setActiveGateIdx(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveGateIdx(idx);
                        }
                      }}
                      style={{ cursor: 'pointer', outline: 'none' }}
                    >
                      <text
                        x={gate.x}
                        y={38}
                        textAnchor="middle"
                        fill={isActive ? '#a97538' : '#66716a'}
                        fontSize="11"
                        fontWeight="700"
                        fontFamily="var(--mono)"
                      >
                        GATE 0{gate.num}
                      </text>

                      {isActive && (
                        <motion.circle
                          cx={gate.x}
                          cy={92}
                          r={24}
                          fill="rgba(183, 122, 53, 0.25)"
                          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                          initial={{ scale: 1, opacity: 0.45 }}
                          animate={
                            prefersReducedMotion
                              ? { scale: 1, opacity: 0.55 }
                              : { scale: [0.9, 1.24, 0.9], opacity: [0.35, 0.75, 0.35] }
                          }
                          transition={
                            prefersReducedMotion
                              ? { duration: 0 }
                              : { duration: 2.2, repeat: Infinity }
                          }
                        />
                      )}

                      <circle
                        cx={gate.x}
                        cy={92}
                        r={15}
                        fill={isActive ? '#b77a35' : isReached ? '#29473b' : '#162e26'}
                        stroke="#ffffff"
                        strokeWidth="3"
                      />

                      <text
                        x={gate.x}
                        y={97}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="var(--mono)"
                      >
                        {gate.num}
                      </text>

                      <text
                        x={gate.x}
                        y={144}
                        textAnchor="middle"
                        fill={isActive ? '#1e2924' : '#4b5563'}
                        fontSize="13"
                        fontWeight={isActive ? '700' : '600'}
                        fontFamily="var(--sans)"
                      >
                        {gate.shortLabel}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeGate.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="bg-white border border-[var(--line)] rounded-xl p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--forest)] block mb-2">
                      SELLER CLAIM IN DATA ROOM · OWNER: {activeGate.owner}
                    </span>
                    <p className="text-[15px] leading-relaxed text-[var(--ink)] font-medium mb-0">
                      &ldquo;{activeGate.sellerClaim}&rdquo;
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--muted)] pt-4 border-t border-[var(--line)] mt-4 block">
                    Sounds safe until someone tests edge behavior
                  </span>
                </div>

                <div className="bg-white border border-rose-700/30 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-rose-800 block mb-2">
                      STRESS-TEST RESULT · {activeGate.label}
                    </span>
                    <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-0">
                      {activeGate.stressResult}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-rose-800 font-semibold pt-4 border-t border-rose-700/15 mt-4 block">
                    Deal impact: {activeGate.impact}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 03. 7/5 BENTO ROW: M&A FIELD STORY (--paper) + BOARDROOM WARNING (--forest2) */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 bg-[var(--paper)] border border-[var(--line)] rounded-2xl p-6 sm:p-8">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                FIELD NOTE · TWELVE DAYS BEFORE WIRE DAY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-4">
                The target looked spotless on paper. One afternoon test uncovered three dealbreakers.
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-4">
                Last quarter a buyer brought me in twelve days before wire day to try to break a
                target company&apos;s automated support desk. The seller&apos;s presentation promised
                eighty percent automated ticket handling and tight customer privacy controls.
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-4">
                Within two hours I watched their Customer Support Lead paste live client billing
                spreadsheets into a free consumer chat window because the official company tool
                stalled on big files. Worse, turning on the automated refund helper had shaved two
                minutes off reply times while quietly bypassing the Director of Finance&apos;s
                approval check on contract credits.
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-4">
                Written instructions telling software to behave politely do not protect real money.
                When I pushed the support assistant like an upset buyer demanding a full refund, it
                caved on the third message and tried to issue the credit. Pulling last month&apos;s
                vendor bills also surfaced a stuck weekend job that repeated one paid action forty
                times on Sunday night because nobody built a hard spending shutoff.
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--ink)] font-medium mb-0">
                The General Counsel and PE Operating Partner walked back to the deal table with
                timestamped receipts. They cut two million dollars off the purchase price and held
                back escrow cash until hard system locks replaced polite rules.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[var(--forest2)] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-2">
                  BOARDROOM WARNING · GENERAL COUNSEL &amp; CFO
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl leading-snug text-white mb-5">
                  Never sign reps-and-warranties on software behavior nobody tried to break.
                </h3>

                <div className="space-y-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <strong className="text-sm font-semibold text-[#f3e3c6] block mb-1">
                      Polite rules fold under pressure
                    </strong>
                    <p className="text-[13.5px] leading-relaxed text-zinc-100 m-0">
                      Asking software not to grant discounts is wishful thinking. Require a hard
                      approval block inside billing before closing.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <strong className="text-sm font-semibold text-[#f3e3c6] block mb-1">
                      Speed often hides side effects
                    </strong>
                    <p className="text-[13.5px] leading-relaxed text-zinc-100 m-0">
                      Faster customer turnaround means zero if the assistant quietly skips legal
                      review, tax checks, or discount floors.
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <strong className="text-sm font-semibold text-[#f3e3c6] block mb-1">
                      Demand the worst weekend bill
                    </strong>
                    <p className="text-[13.5px] leading-relaxed text-zinc-100 m-0">
                      Monthly averages hide retry loops. Ask for the three highest single-day vendor
                      charges from the past twelve months.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/15 flex flex-col gap-3">
                <Link
                  href="/services/technical-due-diligence"
                  style={{ color: '#09090b' }}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#d8c7a8] !text-zinc-950 font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  See Technical Due Diligence Scope ↗
                </Link>
                <Link
                  href="/advisory/pe-first-100-days-ai"
                  style={{ color: '#ffffff' }}
                  className="inline-flex items-center text-xs font-semibold !text-white underline underline-offset-4 self-start"
                >
                  Read the First 100 Days Post-Close Playbook ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04. 5/7 BENTO ROW: HONEST DISQUALIFIER (--paper2) + 5-POINT DEALBREAKER TEST */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-5 bg-[var(--paper2)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                  HONEST DISQUALIFIER · KEEP YOUR CHECKBOOK CLOSED
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-4">
                  When to skip pre-close AI red-team testing completely.
                </h2>
                <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-4">
                  You do not need to pay me fifteen thousand dollars for a pre-close stress test if
                  the target company only uses AI internally for meeting notes, rough email drafts,
                  or sales call summaries.
                </p>
                <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-4">
                  When zero automated software touches live customer files, grants refunds, edits
                  contracts, changes prices, or triggers vendor charges on every customer click,
                  there is no hidden financial bomb waiting on closing day. Run your normal legal
                  and financial review instead.
                </p>
                <p className="text-[14.5px] leading-relaxed text-[var(--ink)] font-medium mb-6">
                  Start with my free baseline diligence calculator first if you want a quick check
                  before bringing in outside help.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 pt-4 border-t border-[var(--line)]">
                <Link href="/tools/due-diligence" className="button button-outline">
                  Open Free Due Diligence Calculator ↗
                </Link>
                <Link
                  href="/for-investors"
                  className="text-xs font-semibold text-[var(--forest)] underline underline-offset-4"
                >
                  Explore PE &amp; Investor Advisory Hub ↗
                </Link>
              </div>
            </div>

            <div
              id="dealbreaker-check"
              className="lg:col-span-7 bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  FREE 60-SECOND PRE-CLOSE CHECK
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] mb-2">
                  5-Point Pre-Close M&amp;A Dealbreaker Test
                </h3>
                <p className="text-[14px] text-[var(--muted)] mb-5">
                  Switch each gate between Pass and Red Flag to estimate deal risk and suggested
                  pre-close escrow holdback.
                </p>

                <div className="space-y-3">
                  {DEALBREAKER_SCENARIOS.map((item) => {
                    const isFlag = Boolean(redFlags[item.id]);
                    return (
                      <div
                        key={item.id}
                        className={`rounded-xl border p-4 transition-colors ${
                          isFlag
                            ? 'bg-rose-50/55 border-rose-700/30'
                            : 'bg-[#faf8f2] border-[var(--line)]'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="max-w-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <strong className="text-[14px] text-[var(--ink)]">
                                {item.title}
                              </strong>
                              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                                (${item.holdback.toLocaleString('en-US')} risk)
                              </span>
                            </div>
                            <p className="text-[13px] leading-snug text-[var(--muted)] mb-1">
                              {item.question}
                            </p>
                            {isFlag && (
                              <p className="text-[12px] font-medium text-rose-900 m-0">
                                Red flag: {item.redFlagNote}
                              </p>
                            )}
                          </div>

                          <div className="inline-flex rounded-lg bg-white border border-[var(--line)] p-1 shrink-0 self-start sm:self-center">
                            <button
                              type="button"
                              aria-pressed={!isFlag}
                              onClick={() => setScenarioStatus(item.id, false)}
                              style={!isFlag ? { color: '#ffffff' } : undefined}
                              className={`px-3 py-1.5 rounded-md text-xs font-semibold min-h-[40px] sm:min-h-[36px] transition-colors ${
                                !isFlag
                                  ? 'bg-[var(--forest2)] !text-white'
                                  : 'text-[var(--ink)] hover:bg-[var(--paper)]'
                              }`}
                            >
                              Pass
                            </button>
                            <button
                              type="button"
                              aria-pressed={isFlag}
                              onClick={() => setScenarioStatus(item.id, true)}
                              style={isFlag ? { color: '#ffffff' } : undefined}
                              className={`px-3 py-1.5 rounded-md text-xs font-semibold min-h-[40px] sm:min-h-[36px] transition-colors ${
                                isFlag
                                  ? 'bg-rose-800 !text-white'
                                  : 'text-[var(--ink)] hover:bg-[var(--paper)]'
                              }`}
                            >
                              Red Flag
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`mt-6 rounded-xl border p-5 ${verdict.tone}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={`font-mono text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded ${verdict.badgeTone}`}
                  >
                    {verdict.tag}
                  </span>
                  <span className="font-mono text-xs font-bold">
                    {redFlagCount} / 5 RED FLAGS · SUGGESTED HOLDBACK: ${formattedHoldback}
                  </span>
                </div>
                <p className="text-[13.5px] leading-relaxed mb-3">{verdict.note}</p>
                <Link
                  href={`/schedule?source=ai-red-teaming-ma-dealbreakers&leak=${encodeURIComponent(leakParam)}`}
                  className="inline-flex items-center text-xs font-bold underline underline-offset-4"
                >
                  Bring this {redFlagCount === 0 ? 'clean checklist' : `$${formattedHoldback} holdback brief`} to a private 15-min call ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 05. CTA STRIP + CHECKOUT DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--forest)] block mb-1">
                BUY-SIDE &amp; SELL-SIDE DILIGENCE · FIXED SCOPE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-2">
                Want real proof before the Investment Committee signs off?
              </h2>
              <p className="text-[14.5px] text-[var(--muted)] m-0">
                Book a confidential $450 60-minute pre-close gut-check, a $2,500 targeted pricing
                and contract check, or a standalone $15,000 buy-side red-team audit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                className="button button-gold"
                href="/schedule?source=ai-red-teaming-ma-dealbreakers"
              >
                Book Confidential Review ↗
              </Link>
              <Link className="button button-outline" href="/services/technical-due-diligence">
                Due Diligence Scope
              </Link>
            </div>
          </div>

          <ScorecardCheckoutDrawer
            source="ai-red-teaming-ma-dealbreakers"
            metricLabel="Suggested Pre-Close Holdback"
            metricValue={redFlagCount === 0 ? '$0 (Clean)' : `$${formattedHoldback}`}
            headline="Verify Software Claims Before Closing Day"
            subheadline="Pick the level you need: the $29 executive diligence workbook, a $450 live pre-close teardown, or a $2,500 rapid audit."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Deal Team FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Questions buyers and General Counsel ask before signing
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
