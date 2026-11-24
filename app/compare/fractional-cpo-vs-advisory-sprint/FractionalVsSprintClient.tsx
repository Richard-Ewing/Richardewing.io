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

const WEEK_SNAPSHOTS: Record<
  number,
  {
    sprint: { pct: number; spent: string; status: string };
    fractional: { pct: number; spent: string; status: string };
    fulltime: { pct: number; spent: string; status: string };
  }
> = {
  2: {
    sprint: { pct: 100, spent: '$2,500', status: 'Finished: pricing fixed, dead work cut' },
    fractional: { pct: 22, spent: '$7,500', status: 'Still interviewing staff and taking notes' },
    fulltime: { pct: 8, spent: '$25,000', status: 'Recruiter just posted the job listing' },
  },
  6: {
    sprint: { pct: 100, spent: '$2,500', status: 'Your team is already banking savings' },
    fractional: { pct: 58, spent: '$22,500', status: 'First new roadmap draft presented' },
    fulltime: { pct: 28, spent: '$45,000', status: 'Second round of candidate interviews' },
  },
  12: {
    sprint: { pct: 100, spent: '$2,500', status: 'Paid back in weeks, zero ongoing fee' },
    fractional: { pct: 92, spent: '$45,000', status: 'Embedded leader running weekly cadence' },
    fulltime: { pct: 55, spent: '$95,000+', status: 'New VP finally starts onboarding' },
  },
};

export default function FractionalVsSprintClient({ faqs }: { faqs: FaqEntry[] }) {
  const [selectedWeek, setSelectedWeek] = useState<2 | 6 | 12>(2);
  const [needDailyMgmt, setNeedDailyMgmt] = useState<'yes' | 'no'>('no');
  const [urgency, setUrgency] = useState<'now' | 'quarter'>('now');
  const [budget, setBudget] = useState<'lean' | 'mid' | 'exec'>('lean');

  const snapshot = WEEK_SNAPSHOTS[selectedWeek];

  function getFitRecommendation() {
    if (needDailyMgmt === 'yes' && budget === 'exec') {
      return {
        pick: 'HIRE A FULL-TIME VP OF PRODUCT (SKIP MY SPRINT)',
        tone: 'border-zinc-400 bg-white text-[var(--ink)]',
        detail:
          'You have the budget and you need a permanent leader in daily meetings for the next three years. Start an executive search today and do not waste money patching a permanent seat with short sprints.',
        ctaLabel: 'Still want a free baseline first? Run Reality Check ↗',
        ctaHref: '/reality-check',
      };
    }
    if (needDailyMgmt === 'yes' && budget === 'lean') {
      return {
        pick: 'STABILIZE FIRST ($450 OR $2,500), HIRE AN EMBEDDED LEADER LATER',
        tone: 'border-[var(--gold)] bg-[#faf8f2] text-[var(--ink)]',
        detail:
          'You want an embedded leader, yet under $5,000 will not fund a real fractional CPO retainer. Do not buy a watered-down part-time consultant. Use a $450 teardown or $2,500 14-day sprint to cut waste first so cash frees up for the hire.',
        ctaLabel: 'Start with a $450 Teardown or 14-Day Sprint ↗',
        ctaHref: `/schedule?source=fractional-cpo-vs-sprint&leak=${encodeURIComponent('Stabilize First Sprint')}`,
      };
    }
    if (needDailyMgmt === 'yes') {
      return {
        pick: 'EMBEDDED FRACTIONAL CPO RETAINER ($10K/MO)',
        tone: 'border-[var(--forest)]/40 bg-[#faf8f2] text-[var(--ink)]',
        detail:
          'You need someone leading weekly product decisions and coaching managers right now while you hold off on a $300K full-time salary. Start with a 14-day audit first if you want proof before signing a quarterly retainer.',
        ctaLabel: 'Discuss Embedded Retainer Availability ↗',
        ctaHref: `/schedule?source=fractional-cpo-vs-sprint&leak=${encodeURIComponent('Fractional CPO Fit')}`,
      };
    }
    if (urgency === 'quarter' && budget === 'lean') {
      return {
        pick: 'KEEP YOUR WALLET CLOSED (START WITH $0 OR $29)',
        tone: 'border-emerald-800/35 bg-emerald-50 text-emerald-950',
        detail:
          'Nothing is on fire this month. Run the free Reality Check calculator or grab the $29 spreadsheet kit and fix the obvious waste with your existing team before paying any outside advisor.',
        ctaLabel: 'Run the Free 60-Second Reality Check ↗',
        ctaHref: '/reality-check',
      };
    }
    return {
      pick: '14-DAY FIXED ADVISORY SPRINT ($2,500) OR $450 TEARDOWN',
      tone: 'border-[var(--gold)] bg-[#faf8f2] text-[var(--ink)]',
      detail:
        'You already have people who can execute once the mess is cleared. Do not pay $45,000 for a slow retainer. Lock a fixed two-week scope, get the cut list and pricing math fast, and move on.',
      ctaLabel: 'Lock a 14-Day Sprint or $450 Teardown ↗',
      ctaHref: `/schedule?source=fractional-cpo-vs-sprint&leak=${encodeURIComponent('14-Day Sprint Fit')}`,
    };
  }

  const fit = getFitRecommendation();

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. CENTERED EDITORIAL VERDICT HERO ON WARM STONE (--paper2) */}
        <section className="bg-[var(--paper2)] border-b border-[var(--line)]">
          <div className="max-w-[1120px] mx-auto px-6 sm:px-10 py-14 sm:py-20 text-center">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--gold)] mb-4">
              Pillar 02 Candid Comparison · Product Leadership &amp; Backlog Surgery
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] font-medium text-[var(--ink)] max-w-4xl mx-auto mb-5">
              I used to tell every founder to hire a fractional product leader. I stopped doing that.
            </h1>
            <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-[var(--muted)] max-w-3xl mx-auto mb-8">
              A fractional CPO fits companies needing ongoing weekly team leadership for six to
              twelve months at $10,000 to $18,000 per month. A fixed-scope 14-day advisory sprint
              fits CEOs who need broken pricing, bloated backlogs, or board math fixed in two weeks
              for $2,500.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-5xl mx-auto mb-8">
              <div className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] block mb-1">
                  FULL-TIME VP PRODUCT
                </span>
                <strong className="font-serif text-xl text-[var(--ink)] block mb-1">
                  $280K+ / yr · 4 to 6 mo search
                </strong>
                <p className="text-[13px] text-[var(--muted)] m-0">
                  Best when your product line is stable and you need a permanent executive for years.
                </p>
              </div>
              <div className="bg-[#faf8f2] border border-[var(--line)] rounded-xl p-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--forest)] block mb-1">
                  FRACTIONAL CPO RETAINER
                </span>
                <strong className="font-serif text-xl text-[var(--ink)] block mb-1">
                  $10K to $18K / mo · Ongoing
                </strong>
                <p className="text-[13px] text-[var(--muted)] m-0">
                  Best when nobody inside can run weekly product rituals or mentor junior managers.
                </p>
              </div>
              <div className="bg-[var(--forest2)] text-white border border-[var(--forest2)] rounded-xl p-5 shadow-md">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#f3e3c6] block mb-1">
                  14-DAY FIXED SPRINT
                </span>
                <strong className="font-serif text-xl text-white block mb-1">
                  $2,500 once · Done in 2 weeks
                </strong>
                <p className="text-[13px] text-zinc-100 m-0">
                  Best when you need hard pricing math, backlog cuts, and board answers right now.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3.5">
              <a className="button button-gold" href="#fit-finder">
                Find your honest fit in 60 seconds ↗
              </a>
              <Link className="button button-outline" href="/schedule?source=fractional-cpo-vs-sprint">
                Book a $450 1-on-1 gut check
              </Link>
            </div>
          </div>
        </section>

        {/* 02. BESPOKE MOTION GRAPHIC #3 - "12-Week Cost vs. Decisions Race" */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-9">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  ANIMATED 12-WEEK REALITY RACE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  Cash out the door vs. real decisions actually shipped
                </h2>
              </div>

              <div className="inline-flex rounded-xl bg-[var(--paper2)] p-1 border border-[var(--line)] self-start">
                {([2, 6, 12] as const).map((wk) => (
                  <button
                    key={wk}
                    type="button"
                    aria-pressed={selectedWeek === wk}
                    onClick={() => setSelectedWeek(wk)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors min-h-[44px] sm:min-h-[36px] ${
                      selectedWeek === wk ? 'text-white' : 'text-[var(--ink)]'
                    }`}
                  >
                    {selectedWeek === wk && (
                      <motion.span
                        layoutId="week-race-pill"
                        transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                        className="absolute inset-0 rounded-lg bg-[var(--forest2)]"
                      />
                    )}
                    <span className="relative z-10">Week {wk}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[var(--line)] p-4 sm:p-6">
              <svg
                viewBox="0 0 760 225"
                className="w-full h-auto block"
                role="img"
                aria-label="12-week progress and cost race comparing sprint, fractional CPO, and full-time VP hire"
              >
                <title>12-week progress and cost race comparing sprint, fractional CPO, and full-time VP hire</title>
                {[
                  {
                    label: '14-Day Fixed Sprint',
                    spent: snapshot.sprint.spent,
                    status: snapshot.sprint.status,
                    pct: snapshot.sprint.pct,
                    color: '#047857',
                    y: 24,
                  },
                  {
                    label: 'Fractional CPO Retainer',
                    spent: snapshot.fractional.spent,
                    status: snapshot.fractional.status,
                    pct: snapshot.fractional.pct,
                    color: '#b77a35',
                    y: 96,
                  },
                  {
                    label: 'Full-Time VP Search',
                    spent: snapshot.fulltime.spent,
                    status: snapshot.fulltime.status,
                    pct: snapshot.fulltime.pct,
                    color: '#52525b',
                    y: 168,
                  },
                ].map((row, idx) => {
                  const barW = Math.max(26, (row.pct / 100) * 480);
                  return (
                    <g key={row.label}>
                      <text
                        x={12}
                        y={row.y + 12}
                        fill="#1e2924"
                        fontSize="14"
                        fontWeight="700"
                        fontFamily="var(--sans)"
                      >
                        {row.label}
                      </text>
                      <text
                        x={12}
                        y={row.y + 32}
                        fill="#52525b"
                        fontSize="11.5"
                        fontFamily="var(--mono)"
                      >
                        Cash spent: {row.spent}
                      </text>

                      <rect x={230} y={row.y - 2} width={480} height={24} rx={6} fill="#f4f1e9" />

                      <motion.rect
                        x={230}
                        y={row.y - 2}
                        height={24}
                        rx={6}
                        fill={row.color}
                        initial={false}
                        animate={{ width: barW }}
                        transition={{ type: 'spring', stiffness: 130, damping: 22, delay: idx * 0.05 }}
                      />

                      <text
                        x={230}
                        y={row.y + 39}
                        fill="#3f3f46"
                        fontSize="12"
                        fontFamily="var(--sans)"
                      >
                        {row.status}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <p className="text-[13.5px] text-[var(--muted)] mt-4 mb-0">
              Click <strong className="text-[var(--ink)]">Week 2</strong>,{' '}
              <strong className="text-[var(--ink)]">Week 6</strong>, and{' '}
              <strong className="text-[var(--ink)]">Week 12</strong>. Payback counted in weeks beats
              waiting half a year for a new hire to finish onboarding while cash burns.
            </p>
          </div>
        </section>

        {/* 03. ASYMMETRIC 5-COL / 7-COL CANDID ADVICE BENTO */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-[var(--forest2)] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between reveal">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-2">
                  WHY I CHANGED MY OWN ADVICE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-white mb-4">
                  Hiding prices behind four sales calls is how consultants sell you hours you never
                  needed.
                </h2>
                <p className="text-[14.5px] leading-relaxed text-zinc-100 mb-4">
                  Years ago I thought every stuck software company needed an embedded part-time
                  executive on a six-month retainer. Then I watched what actually happened inside
                  mid-market teams.
                </p>
                <p className="text-[14.5px] leading-relaxed text-zinc-100 mb-0">
                  Nine times out of ten, the CEO already had capable managers on payroll. Nobody was
                  giving them cover to kill two hundred stale projects, renegotiate a bad vendor
                  contract, or reprice an unprofitable AI feature. Once we cleared those three
                  roadblocks in two weeks, paying someone $15,000 a month to sit in status meetings
                  made zero sense.
                </p>
              </div>
              <div className="pt-5 mt-6 border-t border-white/15">
                <Link
                  href="/pricing-sprints"
                  className="text-xs font-semibold text-[#f3e3c6] border-b border-[var(--gold)] pb-0.5"
                >
                  See all published sprint prices (no gatekeeping) ↗
                </Link>
              </div>
            </div>

            <div
              id="fit-finder"
              className="lg:col-span-7 bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  FREE 60-SECOND FIT CHECK · INCLUDES WHEN TO HIRE SOMEONE ELSE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-5">
                  Answer three plain questions for my honest recommendation.
                </h2>

                <div className="space-y-5">
                  <div>
                    <span className="block text-sm font-semibold text-[var(--ink)] mb-2">
                      1. Do you need someone sitting in daily or weekly team meetings managing staff?
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { v: 'no', label: 'No, my team can run once the plan is clear' },
                        { v: 'yes', label: 'Yes, we have an empty leadership chair' },
                      ].map((opt) => (
                        <button
                          key={opt.v}
                          type="button"
                          aria-pressed={needDailyMgmt === opt.v}
                          onClick={() => setNeedDailyMgmt(opt.v as 'yes' | 'no')}
                          className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition min-h-[44px] ${
                            needDailyMgmt === opt.v
                              ? 'bg-[var(--forest2)] text-white border-[var(--forest2)]'
                              : 'bg-[#faf8f2] text-[var(--ink)] border-[var(--line)]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-semibold text-[var(--ink)] mb-2">
                      2. How soon do you need a board-ready answer or cash fix?
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { v: 'now', label: 'Within 2 to 4 weeks' },
                        { v: 'quarter', label: 'No rush, next quarter is fine' },
                      ].map((opt) => (
                        <button
                          key={opt.v}
                          type="button"
                          aria-pressed={urgency === opt.v}
                          onClick={() => setUrgency(opt.v as 'now' | 'quarter')}
                          className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition min-h-[44px] ${
                            urgency === opt.v
                              ? 'bg-[var(--forest2)] text-white border-[var(--forest2)]'
                              : 'bg-[#faf8f2] text-[var(--ink)] border-[var(--line)]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-semibold text-[var(--ink)] mb-2">
                      3. What can you comfortably allocate right now?
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { v: 'lean', label: 'Under $5,000 fixed' },
                        { v: 'mid', label: '$10,000/mo for a quarter' },
                        { v: 'exec', label: '$280,000+ full-time salary' },
                      ].map((opt) => (
                        <button
                          key={opt.v}
                          type="button"
                          aria-pressed={budget === opt.v}
                          onClick={() => setBudget(opt.v as 'lean' | 'mid' | 'exec')}
                          className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition min-h-[44px] ${
                            budget === opt.v
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
              </div>

              <div className={`mt-6 rounded-xl border-2 p-5 ${fit.tone}`}>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--gold)] block mb-1">
                  MY HONEST VERDICT FOR YOUR SITUATION
                </span>
                <h3 className="font-serif text-xl font-bold text-[var(--ink)] mb-2">{fit.pick}</h3>
                <p className="text-[14px] leading-relaxed text-[var(--ink)] mb-4">{fit.detail}</p>
                <Link
                  href={fit.ctaHref}
                  style={{ color: '#ffffff' }}
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-[var(--forest2)] !text-white font-semibold text-xs hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  {fit.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04. CHECKOUT DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="fractional-cpo-vs-sprint"
            metricLabel="Recommended Path"
            metricValue={
              needDailyMgmt === 'yes' && budget === 'lean'
                ? 'Stabilize First Sprint'
                : needDailyMgmt === 'yes'
                  ? 'Fractional / Full-Time'
                  : '14-Day Fixed Sprint'
            }
            headline="Skip Six Months of Retainer Drag: Pick Exact Speed"
            subheadline="Test my thinking for $450 in one hour, clear the mess in 14 days for $2,500, or bring me in as an embedded Fractional CPO only if your seat is truly empty."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Blunt Answers
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              What founders ask before choosing a sprint or a fractional leader
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
