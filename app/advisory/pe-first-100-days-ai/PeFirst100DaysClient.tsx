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

const STAGES = [
  {
    id: 'days-1-14',
    window: 'DAYS 1 TO 14',
    shortLabel: '1. Stop Quiet Waste',
    headline: 'Cancel the forty paid seats only six people open.',
    nodeX: 110,
    nodeY: 134,
    questionToAsk: 'Show me every software and AI subscription over five hundred dollars a month alongside how many staff logged in last week.',
    fakeProgress: 'A sleek slide deck promising forty percent staff productivity by next fall.',
    realProof: 'A one-page cut list cancelling unused seats, duplicate tools, and runaway monthly bills before day fourteen.',
    owner: 'CFO + VP of Operations',
  },
  {
    id: 'days-15-45',
    window: 'DAYS 15 TO 45',
    shortLabel: '2. Fix Pricing & Focus',
    headline: 'Kill half the stale roadmap and protect your margin floor.',
    nodeX: 340,
    nodeY: 86,
    questionToAsk: 'Which three projects actually move renewals or cut real support hours this quarter, and what are we freezing today?',
    fakeProgress: 'Twelve parallel AI pilots where every department runs its own hobby project.',
    realProof: 'One focused backlog, repriced AI tiers that cover heavy-user costs, and clear human sign-off rules before software touches billing.',
    owner: 'CEO + Head of Product',
  },
  {
    id: 'days-46-100',
    window: 'DAYS 46 TO 100',
    shortLabel: '3. Lock Board Proof',
    headline: 'Turn floor results into clean numbers your Investment Committee trusts.',
    nodeX: 570,
    nodeY: 46,
    questionToAsk: 'What hard dollars landed on the income statement this quarter that were not there on closing day?',
    fakeProgress: 'Activity stats like total prompts written or hours supposedly saved.',
    realProof: 'Verified gross profit lift, faster customer turnaround times, and a repeatable playbook you can copy to the next portfolio company.',
    owner: 'Operating Partner + Board',
  },
];

const PROOF_CHECKS = [
  {
    id: 'seats',
    label: 'We checked active logins on every paid AI subscription in the last 30 days.',
  },
  {
    id: 'margin',
    label: 'Our CFO can show the exact monthly AI bill for our ten heaviest customers.',
  },
  {
    id: 'owner',
    label: 'Every active AI project has one named executive who loses bonus credit if it misses.',
  },
  {
    id: 'approval',
    label: 'A real person still approves any customer refund, price change, or contract edit.',
  },
];

export default function PeFirst100DaysClient({ faqs }: { faqs: FaqEntry[] }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [checkedIds, setCheckedIds] = useState<string[]>(['approval']);

  const activeStage = STAGES[activeStageIdx];
  const passedCount = checkedIds.length;

  function toggleCheck(id: string) {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  const auditVerdict =
    passedCount <= 1
      ? {
          tag: 'HIGH DEAL RISK',
          tone: 'border-rose-700/40 bg-rose-50 text-rose-950',
          note: 'You are flying blind right now. Stop approving new AI vendor invoices until you run a 14-day spend and pricing cleanup.',
        }
      : passedCount <= 3
        ? {
            tag: 'PARTIAL CONTROL',
            tone: 'border-amber-700/40 bg-amber-50 text-amber-950',
            note: 'You have pieces in place, yet quiet leaks are still slipping past your monthly review. Close the unchecked boxes before the next QBR.',
          }
        : {
            tag: 'BOARD-READY DISCIPLINE',
            tone: 'border-emerald-800/40 bg-emerald-50 text-emerald-950',
            note: 'Your portfolio team is already ahead of ninety percent of the market. Keep your checkbook closed on outside audits.',
          };

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. DEEP FOREST BOARDROOM HERO */}
        <section className="bg-[var(--forest2)] text-white border-b border-white/10">
          <div className="max-w-[1320px] mx-auto px-6 sm:px-10 py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#f3e3c6] mb-4 flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[1px] bg-[var(--gold)]" />
                  Pillar 04 Boardroom Playbook · Private Equity &amp; Boards
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-medium text-[#f4f1e9] mb-5">
                  The demo looked great on Friday. By Tuesday nobody on the floor used it.
                </h1>
                <p className="text-[16px] sm:text-[17px] leading-relaxed text-zinc-100 max-w-2xl mb-7">
                  In the first 100 days after acquisition, Private Equity Operating Partners create
                  real AI value by canceling unused software seats first, fixing unprofitable
                  customer pricing second, and funding only workflows tied to hard 90-day cash
                  returns.
                </p>

                <div className="flex flex-wrap gap-3.5 mb-8">
                  <Link
                    href="/schedule?source=pe-first-100-days-ai"
                    style={{ color: '#09090b' }}
                    className="inline-flex items-center px-6 py-3.5 rounded-lg bg-[#d8c7a8] !text-zinc-950 font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                  >
                    Schedule a 15-min Operating Partner call ↗
                  </Link>
                  <a
                    href="#proof-test"
                    style={{ color: '#ffffff' }}
                    className="inline-flex items-center px-6 py-3.5 rounded-lg border border-white/30 !text-white font-semibold text-sm hover:bg-white/10 transition-colors min-h-[44px]"
                  >
                    Run the 4-question portfolio check
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/15 max-w-lg">
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-[#f3e3c6] block">$5M cut</span>
                    <span className="text-xs text-zinc-100">12-product portfolio</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-[#f3e3c6] block">+40%</span>
                    <span className="text-xs text-zinc-100">faster team output</span>
                  </div>
                  <div>
                    <span className="font-serif text-2xl sm:text-3xl text-[#f3e3c6] block">$15K</span>
                    <span className="text-xs text-zinc-100">fixed M&amp;A audit</span>
                  </div>
                </div>
              </div>

              {/* Right 5-col: Keyboard-Accessible Animated SVG "100-Day Value Creation Pulse" */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#0f211b] border border-white/15 p-5 sm:p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6]">
                      100-DAY VALUE CREATION PULSE
                    </span>
                    <span className="font-mono text-[10px] text-emerald-300">
                      SELECT ANY MILESTONE
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 680 185"
                    className="w-full h-auto block"
                    role="group"
                    aria-label="Interactive 100-day Private Equity AI value creation timeline"
                  >
                    <title>Interactive 100-day Private Equity AI value creation timeline</title>
                    {[46, 86, 126, 160].map((y) => (
                      <line
                        key={y}
                        x1={30}
                        y1={y}
                        x2={650}
                        y2={y}
                        stroke="rgba(255,255,255,0.08)"
                      />
                    ))}

                    <path
                      d="M 60 138 C 160 135, 220 102, 340 86 C 450 72, 500 54, 620 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.16)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    <motion.path
                      d="M 60 138 C 160 135, 220 102, 340 86 C 450 72, 500 54, 620 40"
                      fill="none"
                      stroke="#d8a25e"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={false}
                      animate={{
                        pathLength: activeStageIdx === 0 ? 0.25 : activeStageIdx === 1 ? 0.6 : 1,
                      }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {STAGES.map((st, idx) => {
                      const isActive = idx === activeStageIdx;
                      return (
                        <g
                          key={st.id}
                          role="button"
                          tabIndex={0}
                          aria-label={`${st.window}: ${st.shortLabel}`}
                          aria-pressed={isActive}
                          onClick={() => setActiveStageIdx(idx)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setActiveStageIdx(idx);
                            }
                          }}
                          style={{ cursor: 'pointer', outline: 'none' }}
                        >
                          {isActive && (
                            <motion.circle
                              cx={st.nodeX}
                              cy={st.nodeY}
                              r={20}
                              fill="rgba(216, 162, 94, 0.24)"
                              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                              initial={{ scale: 1, opacity: 0.45 }}
                              animate={
                                prefersReducedMotion
                                  ? { scale: 1, opacity: 0.55 }
                                  : { scale: [0.9, 1.25, 0.9], opacity: [0.35, 0.75, 0.35] }
                              }
                              transition={
                                prefersReducedMotion
                                  ? { duration: 0 }
                                  : { duration: 2.2, repeat: Infinity }
                              }
                            />
                          )}
                          <circle
                            cx={st.nodeX}
                            cy={st.nodeY}
                            r={11}
                            fill={isActive ? '#d8a25e' : '#1f3b2c'}
                            stroke="#f4f1e9"
                            strokeWidth="2.5"
                          />
                          <text
                            x={st.nodeX}
                            y={st.nodeY + 34}
                            textAnchor="middle"
                            fill={isActive ? '#f4f1e9' : '#e2e8f0'}
                            fontSize="13"
                            fontWeight={isActive ? '700' : '500'}
                            fontFamily="var(--mono)"
                          >
                            {st.window}
                          </text>
                        </g>
                      );
                    })}
                  </svg>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#f3e3c6] block">
                      ACTIVE STAGE · {activeStage.window}
                    </span>
                    <p className="text-[14px] text-white font-medium mt-1 mb-0">
                      {activeStage.headline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. INTERACTIVE 3-STAGE 100-DAY BENTO SWITCHER */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="max-w-3xl reveal">
            <p className="eyebrow">
              <i /> Step-by-step operating plan
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight font-medium text-[var(--ink)] my-3">
              What I would do first if you handed me your portfolio tomorrow.
            </h2>
            <p className="text-[15.5px] text-[var(--muted)] m-0">
              Skip the six-month transformation committee. Click each window below to see the exact
              floor questions that surface cash fast.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-7 mb-6">
            {STAGES.map((st, idx) => (
              <button
                key={st.id}
                type="button"
                aria-pressed={activeStageIdx === idx}
                onClick={() => setActiveStageIdx(idx)}
                className={`relative px-5 py-3 rounded-xl text-sm font-semibold border transition-colors min-h-[44px] ${
                  activeStageIdx === idx
                    ? 'text-white border-[var(--forest2)]'
                    : 'text-[var(--ink)] bg-[#faf8f2] border-[var(--line)] hover:border-[var(--forest)]'
                }`}
              >
                {activeStageIdx === idx && (
                  <motion.span
                    layoutId="pe-stage-pill"
                    transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                    className="absolute inset-0 rounded-xl bg-[var(--forest2)]"
                  />
                )}
                <span className="relative z-10">{st.shortLabel}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5"
            >
              <div className="lg:col-span-5 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                    {activeStage.window} · OWNER: {activeStage.owner}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] mb-4">
                    {activeStage.headline}
                  </h3>
                  <div className="rounded-xl bg-white border border-[var(--line)] p-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--forest)] block mb-1">
                      EXACT QUESTION TO ASK THE CEO
                    </span>
                    <p className="text-[14.5px] text-[var(--ink)] font-medium leading-relaxed m-0">
                      &ldquo;{activeStage.questionToAsk}&rdquo;
                    </p>
                  </div>
                </div>
                <Link
                  href="/tools/due-diligence"
                  className="mt-6 text-xs font-semibold text-[var(--forest)] border-b border-[var(--gold)] pb-0.5 self-start"
                >
                  Open full PE Due Diligence Calculator ↗
                </Link>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white border border-rose-700/25 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-rose-800 block mb-2">
                      SLIDE DECK THEATER (REJECT THIS)
                    </span>
                    <p className="text-[15px] leading-relaxed text-[var(--ink)]">
                      {activeStage.fakeProgress}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-rose-800 pt-4 border-t border-rose-700/15 mt-4 block">
                    Looks busy, adds zero cash
                  </span>
                </div>

                <div className="bg-white border border-emerald-800/30 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-emerald-800 block mb-2">
                      HARD CASH PROOF (DEMAND THIS)
                    </span>
                    <p className="text-[15px] leading-relaxed text-[var(--ink)]">
                      {activeStage.realProof}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-800 pt-4 border-t border-emerald-800/15 mt-4 block">
                    Shows up cleanly at QBR
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* 03. CANDID FIRST-PERSON FIELD STORY BENTO */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 reveal">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                THE RULE THAT STOPPED THE BLEEDING
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-4">
                Every CFO cuts the exact same tools first when money gets tight.
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-4">
                When I stepped in to clean up a twelve-product portfolio, nobody thought they had a
                spending problem. Every department leader could defend their favorite software tool
                in a meeting.
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-4">
                Then we pulled actual login sheets and renewal dates. Half of those contracts were
                pure shelfware sitting untouched while teams still exported spreadsheets by hand to
                finish Friday close. Putting one simple spending rule in place changed everything:
                no renewal clears finance unless a manager can name the real dollar return from the
                last ninety days.
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--ink)] font-medium mb-0">
                That one rule freed up five million dollars across the portfolio and cleared over
                two hundred stale projects off the board. Your engineering and product teams did not
                get smarter overnight. They finally stopped babysitting junk nobody used.
              </p>
            </div>

            {/* Interactive 4-Question Portfolio Proof Test */}
            <div
              id="proof-test"
              className="lg:col-span-5 bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  FREE 60-SECOND PORTFOLIO CHECK
                </span>
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-4">
                  Check the boxes your portfolio company passes today:
                </h3>
                <div className="space-y-3">
                  {PROOF_CHECKS.map((item) => {
                    const checked = checkedIds.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="checkbox"
                        aria-checked={checked}
                        onClick={() => toggleCheck(item.id)}
                        className={`w-full text-left p-3.5 rounded-xl border transition flex items-start gap-3 min-h-[48px] ${
                          checked
                            ? 'bg-[var(--forest2)] text-white border-[var(--forest2)]'
                            : 'bg-[#faf8f2] text-[var(--ink)] border-[var(--line)] hover:border-[var(--forest)]'
                        }`}
                      >
                        <span
                          className={`mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded border text-xs font-bold shrink-0 ${
                            checked
                              ? 'bg-[var(--gold)] border-[var(--gold)] text-zinc-950'
                              : 'border-[var(--muted)] text-transparent'
                          }`}
                        >
                          ✓
                        </span>
                        <span className="text-[13.5px] leading-snug">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={`mt-5 rounded-xl border p-4 ${auditVerdict.tone}`}>
                <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                  <span>{auditVerdict.tag}</span>
                  <span>{passedCount} / 4 PASSED</span>
                </div>
                <p className="text-[13px] leading-relaxed mb-3">{auditVerdict.note}</p>
                <Link
                  href={`/schedule?source=pe-first-100-days-ai&leak=${encodeURIComponent(`${passedCount} of 4 Passed`)}`}
                  className="inline-flex items-center text-xs font-bold underline underline-offset-4"
                >
                  Review this score on a private 15-min call ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04. DIRECT CTA STRIP + CHECKOUT DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="bg-[var(--paper2)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--forest)] block mb-1">
                FIXED-SCOPE PE OPTIONS · ZERO COMMITTEE LAG
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-2">
                Need an independent read before close or before Q1 planning?
              </h2>
              <p className="text-[14.5px] text-[var(--muted)] m-0">
                Start with a $450 60-minute portfolio gut-check, a $2,500 14-day spend and pricing
                sprint, or a standalone $15,000 buy-side or sell-side diligence readout.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link className="button button-gold" href="/schedule?source=pe-first-100-days-ai">
                Book Confidential Call ↗
              </Link>
              <Link className="button button-outline" href="/for-investors">
                PE &amp; Investor Hub
              </Link>
            </div>
          </div>

          <ScorecardCheckoutDrawer
            source="pe-first-100-days-ai"
            metricLabel="Portfolio Proof Score"
            metricValue={`${passedCount} / 4 Passed`}
            headline="Turn Portfolio AI Spend Into Defensible Board Numbers"
            subheadline="Pick the speed you need: the $29 executive workbook, a $450 live teardown, or a $2,500 14-day turnaround sprint."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Boardroom FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Questions Operating Partners ask before bringing me in
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
