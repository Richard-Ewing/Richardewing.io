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

export default function VsSvpgClient({ faqs }: { faqs: FaqEntry[] }) {
  const [boardState, setBoardState] = useState<'pressure' | 'healthy'>('pressure');

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. WARM LINEN EDITORIAL MANIFESTO HERO */}
        <section className="bg-[var(--paper)] border-b border-[var(--line)]">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-14 sm:py-20">
            <div className="max-w-4xl">
              <p className="eyebrow">
                <i /> Product Operating Model Comparison
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-medium text-[var(--ink)] mb-5">
                Empowered product teams still stall when nobody cuts the dead projects.
              </h1>
              <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-[var(--muted)] mb-7">
                SVPG excels at multi-quarter product culture coaching for healthy organizations.
                Richard Ewing focuses on blunt P&amp;L turnarounds, portfolio cuts, and AI pricing
                discipline inside 14 days for CEOs and CFOs under immediate board pressure.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#coaching-vs-turnaround" className="button button-gold">
                  Pick your honest path (60 sec) ↗
                </a>
                <Link href="/schedule?source=vs-svpg" className="button button-outline">
                  Book a 1-on-1 P&amp;L teardown
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 02. BESPOKE SVG HORIZON MOTION GRAPHIC + CHECKER */}
        <section id="coaching-vs-turnaround" className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                TIME TO IMPACT HORIZON
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-5">
                14-day cash &amp; backlog surgery vs. 12-month culture shift
              </h2>

              <div className="bg-white rounded-xl border border-[var(--line)] p-4 sm:p-5">
                <svg
                  viewBox="0 0 600 185"
                  className="w-full h-auto block"
                  role="img"
                  aria-label="Timeline comparing 14-day turnaround sprint against multi-quarter coaching"
                >
                  <title>Time to measurable P&amp;L impact</title>
                  <text x={8} y={32} fill="#1e2924" fontSize="13" fontWeight="700" fontFamily="var(--sans)">
                    Richard Ewing Turnaround (14 Days to First Cuts)
                  </text>
                  <rect x={8} y={42} width={570} height={24} rx={6} fill="#f4f1e9" />
                  <motion.rect
                    x={8}
                    y={42}
                    height={24}
                    rx={6}
                    fill="#047857"
                    initial={false}
                    animate={{ width: boardState === 'pressure' ? 540 : 320 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  />
                  <text x={18} y={58} fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="var(--mono)">
                    DEAD BACKLOG CUT + PRICING FLOOR FIXED
                  </text>

                  <text x={8} y={114} fill="#52525b" fontSize="13" fontWeight="700" fontFamily="var(--sans)">
                    SVPG / Product Coaching (6 to 18 Months)
                  </text>
                  <rect x={8} y={124} width={570} height={24} rx={6} fill="#f4f1e9" />
                  <motion.rect
                    x={8}
                    y={124}
                    height={24}
                    rx={6}
                    fill="#b77a35"
                    initial={false}
                    animate={{ width: boardState === 'healthy' ? 540 : 210 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  />
                  <text x={18} y={140} fill="#09090b" fontSize="11" fontWeight="700" fontFamily="var(--mono)">
                    TEAM DISCOVERY HABITS &amp; PM CRAFT MATURITY
                  </text>
                </svg>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {(['pressure', 'healthy'] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    aria-pressed={boardState === st}
                    onClick={() => setBoardState(st)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors min-h-[44px] ${
                      boardState === st
                        ? 'text-white border-[var(--forest2)] bg-[var(--forest2)]'
                        : 'text-[var(--ink)] bg-white border-[var(--line)]'
                    }`}
                  >
                    {st === 'pressure'
                      ? 'CFO/Board wants cash & speed within 90 days'
                      : 'Margins healthy, want long-term PM craft coaching'}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[var(--forest2)] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-2">
                  MY HONEST ADVICE TO YOU
                </span>
                <h3 className="font-serif text-2xl text-white mb-4">
                  {boardState === 'pressure'
                    ? 'Do not buy product philosophy during a margin crisis.'
                    : 'Call SVPG or Product Institute if your books are already clean.'}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-zinc-100 mb-0">
                  {boardState === 'pressure'
                    ? 'When your CFO is demanding answers on wasted developer payroll and shrinking margins, workshops about team empowerment make the board furious. Cut the dead projects and fix customer pricing first in fourteen days.'
                    : 'If your cash margins are healthy and you simply want dozens of product managers trained in modern discovery rituals over the next year, SVPG and Product Institute are built specifically for that long-term coaching journey.'}
                </p>
              </div>
              <Link
                href={boardState === 'pressure' ? '/schedule?source=vs-svpg' : '/tools/pdi'}
                style={{ color: '#09090b' }}
                className="mt-6 w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#d8c7a8] !text-zinc-950 font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
              >
                {boardState === 'pressure'
                  ? 'Book 14-Day Backlog & P&L Reset ↗'
                  : 'Measure Your Product Debt Free First ↗'}
              </Link>
            </div>
          </div>
        </section>

        {/* 03. DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="vs-svpg"
            metricLabel="Turnaround Speed"
            metricValue="14 Calendar Days"
            headline="Clear Two Hundred Stale Backlog Items Before Q1 Planning"
            subheadline="Test my approach in one $450 teardown call or lock a $2,500 fixed 14-day portfolio & backlog sprint."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Coaching vs. Turnaround FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              What CEOs ask before hiring product coaches or a turnaround advisor
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
