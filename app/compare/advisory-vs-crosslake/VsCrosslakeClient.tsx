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

export default function VsCrosslakeClient({ faqs }: { faqs: FaqEntry[] }) {
  const [dealBand, setDealBand] = useState<'lower-mid' | 'mega'>('lower-mid');

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. DEEP FOREST 7/5 BOARDROOM COMPARISON HERO */}
        <section className="bg-[var(--forest2)] text-white border-b border-white/10">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-16 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#f3e3c6] mb-4 flex items-center gap-2.5">
                  <span className="inline-block w-6 h-[1px] bg-[var(--gold)]" />
                  PE Diligence Comparison · Speed &amp; Scope Match
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl leading-[1.08] font-medium text-[#f4f1e9] mb-5">
                  A sixty-thousand-dollar diligence binder arrives after your deal terms already locked.
                </h1>
                <p className="text-[16px] sm:text-[17px] leading-relaxed text-zinc-100 mb-7">
                  Crosslake serves large institutional buyouts with multi-specialist diligence teams
                  and six-figure scopes. Richard Ewing delivers $15,000 fixed-fee 14-day PE
                  diligence focused on software profit margins, AI spend traps, and 100-day product
                  execution.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#deal-scope"
                    style={{ color: '#09090b' }}
                    className="inline-flex items-center px-6 py-3.5 rounded-lg bg-[#d8c7a8] !text-zinc-950 font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                  >
                    Match your deal size (60 sec) ↗
                  </a>
                  <Link
                    href="/schedule?source=vs-crosslake"
                    style={{ color: '#ffffff' }}
                    className="inline-flex items-center px-6 py-3.5 rounded-lg border border-white/30 !text-white font-semibold text-sm hover:bg-white/10 transition-colors min-h-[44px]"
                  >
                    Book an IC diligence check
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0f211b] border border-white/15 rounded-2xl p-6">
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-3">
                  DEAL EXCLUSIVITY CLOCK (DAYS 1 TO 14)
                </span>
                <svg
                  viewBox="0 0 440 190"
                  className="w-full h-auto block"
                  role="img"
                  aria-label="14-day deal exclusivity timeline comparison"
                >
                  <title>14-day PE diligence turnaround</title>
                  <text x={10} y={32} fill="#f4f1e9" fontSize="12.5" fontWeight="700" fontFamily="var(--sans)">
                    Richard Ewing ($15K Fixed)
                  </text>
                  <rect x={10} y={42} width={410} height={24} rx={6} fill="rgba(255,255,255,0.12)" />
                  <motion.rect
                    x={10}
                    y={42}
                    height={24}
                    rx={6}
                    fill="#d8a25e"
                    initial={false}
                    animate={{ width: 410 }}
                    transition={{ duration: 0.7 }}
                  />
                  <text x={20} y={58} fill="#09090b" fontSize="11" fontWeight="700" fontFamily="var(--mono)">
                    DAY 14: RED-FLAG MEMO + 100-DAY CASH PLAN
                  </text>

                  <text x={10} y={114} fill="#cbd5e1" fontSize="12.5" fontWeight="700" fontFamily="var(--sans)">
                    Institutional Multi-Squad Firm ($50K+)
                  </text>
                  <rect x={10} y={124} width={410} height={24} rx={6} fill="rgba(255,255,255,0.12)" />
                  <motion.rect
                    x={10}
                    y={124}
                    height={24}
                    rx={6}
                    fill="#64748b"
                    initial={false}
                    animate={{ width: 255 }}
                    transition={{ duration: 0.7 }}
                  />
                  <text x={20} y={140} fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="var(--mono)">
                    DAY 14: INTERVIEWS IN PROGRESS
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 02. INTERACTIVE DEAL SIZE SELECTOR */}
        <section id="deal-scope" className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-9">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  HONEST BUYER FIT SELECTOR
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  Which enterprise value band are you underwriting?
                </h2>
              </div>

              <div className="inline-flex rounded-xl bg-[var(--paper2)] p-1 border border-[var(--line)] self-start">
                {(['lower-mid', 'mega'] as const).map((b) => (
                  <button
                    key={b}
                    type="button"
                    aria-pressed={dealBand === b}
                    onClick={() => setDealBand(b)}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors min-h-[44px] sm:min-h-[36px] ${
                      dealBand === b ? 'text-white' : 'text-[var(--ink)]'
                    }`}
                  >
                    {dealBand === b && (
                      <motion.span
                        layoutId="crosslake-band-pill"
                        transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                        className="absolute inset-0 rounded-lg bg-[var(--forest2)]"
                      />
                    )}
                    <span className="relative z-10">
                      {b === 'lower-mid' ? '$5M to $100M Deal' : '$150M+ Multi-Entity Carve-Out'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-[var(--line)] rounded-xl p-6">
                <span className="font-mono text-[10px] uppercase text-[var(--gold)] block mb-2">
                  MY HONEST RECOMMENDATION
                </span>
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-3">
                  {dealBand === 'lower-mid'
                    ? 'Pick the $15,000 Fixed 14-Day Audit'
                    : 'Call Crosslake for Multi-Squad Bandwidth'}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--muted)] mb-0">
                  {dealBand === 'lower-mid'
                    ? 'On lower-middle-market deals and search funds, spending $60K+ on heavy institutional diligence hurts closing math. I personally audit customer margin leaks, AI pricing exposure, and dead product backlog in two weeks for $15,000 flat.'
                    : 'If you are carving out a global subsidiary from a public parent across five time zones and need fifteen concurrent infrastructure auditors, hire Crosslake. They have the large bench built for mega-carve-outs.'}
                </p>
              </div>

              <div className="bg-white border border-[var(--line)] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase text-[var(--forest)] block mb-2">
                    WHAT MY $15K AUDIT DELIVERS
                  </span>
                  <ul className="space-y-2 text-[14px] text-[var(--ink)] pl-0 list-none m-0">
                    <li>✓ Heavy-user profit risk &amp; customer pricing exposure</li>
                    <li>✓ Dead backlog &amp; maintenance payroll waste check</li>
                    <li>✓ Unapproved AI refund, privacy &amp; billing risks</li>
                    <li>✓ Direct 100-day value plan for your incoming CFO</li>
                  </ul>
                </div>
                <Link
                  href="/schedule?source=vs-crosslake"
                  style={{ color: '#ffffff' }}
                  className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[var(--forest2)] !text-white font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Book a 15-min Deal Team Call ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 03. DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="vs-crosslake"
            metricLabel="Fixed PE Audit Fee"
            metricValue="$15,000 Flat"
            headline="Get Real Margin & Backlog Truth Before Your Exclusivity Clock Runs Out"
            subheadline="Start with a $450 pre-LOI gut-check call this week or lock a 14-day diligence sprint before IC sign-off."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Deal Team FAQ
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              What deal partners verify before hiring an audit team
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
