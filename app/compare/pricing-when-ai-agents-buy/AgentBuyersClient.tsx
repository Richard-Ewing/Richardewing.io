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

export default function AgentBuyersClient({ faqs }: { faqs: FaqEntry[] }) {
  const [buyerType, setBuyerType] = useState<'human' | 'automated'>('automated');
  const [oldSeats, setOldSeats] = useState<number>(60);
  const [seatPrice, setSeatPrice] = useState<number>(80);
  const [seatReductionPct, setSeatReductionPct] = useState<number>(70);

  const oldMrr = oldSeats * seatPrice;
  const keptSeats = Math.max(2, Math.round(oldSeats * (1 - seatReductionPct / 100)));
  const flatSeatMrr = keptSeats * seatPrice;
  const annualRevenueLost = Math.max(0, (oldMrr - flatSeatMrr) * 12);
  const protectedBaseMrr = Math.round(oldMrr * 0.92);

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* 01. CRISP WHITE 6/6 SPLIT HERO WITH LIVE BUYER SWITCHER */}
        <section className="bg-white border-b border-[var(--line)]">
          <div className="max-w-[var(--max)] mx-auto px-[5vw] py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <p className="eyebrow">
                  <i /> Pillar 01 Pricing Shift · Next-Quarter Renewals
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl leading-[1.08] font-medium text-[var(--ink)] mb-5">
                  Your customer cut fifty seats down to three while running ten times more work.
                </h1>
                <p className="text-[16px] leading-relaxed text-[var(--muted)] mb-7">
                  When automated software replaces human logins, per-seat pricing shrinks vendor
                  revenue even as delivery bills surge. Pairing a predictable platform fee with
                  clear automated volume bands protects recurring profit during seat consolidation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#seat-shrink-check" className="button button-gold">
                    Model your renewal drop (60 sec) ↗
                  </a>
                  <Link href="/schedule?source=agent-buyers-pricing" className="button button-outline">
                    Book a pricing review
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)]">
                    SEAT COLLAPSE VS. VOLUME SURGE
                  </span>
                  <div className="inline-flex rounded-full bg-[var(--paper2)] p-1 border border-[var(--line)]">
                    {(['human', 'automated'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={buyerType === t}
                        onClick={() => setBuyerType(t)}
                        className={`relative px-3.5 py-2 text-xs font-semibold rounded-full transition-colors min-h-[44px] sm:min-h-[36px] ${
                          buyerType === t ? 'text-white' : 'text-[var(--ink)]'
                        }`}
                      >
                        {buyerType === t && (
                          <motion.span
                            layoutId="agent-buyer-pill"
                            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                            className="absolute inset-0 rounded-full bg-[var(--forest2)]"
                          />
                        )}
                        <span className="relative z-10">
                          {t === 'human' ? 'Old Human Logins' : 'Automated Accounts'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Diverging SVG Curve Chart */}
                <div className="bg-white rounded-xl border border-[var(--line)] p-4">
                  <svg
                    viewBox="0 0 540 215"
                    className="w-full h-auto block"
                    role="img"
                    aria-label="Chart comparing seat count drop against software workload surge over four quarters"
                  >
                    <title>Seat shrinkage vs. workload surge</title>
                    {[40, 85, 130, 175].map((y) => (
                      <line key={y} x1={40} y1={y} x2={510} y2={y} stroke="rgba(36, 51, 43, 0.09)" />
                    ))}
                    {['Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => (
                      <text
                        key={q}
                        x={65 + i * 140}
                        y={202}
                        textAnchor="middle"
                        fill="#52525b"
                        fontSize="11"
                        fontFamily="var(--mono)"
                      >
                        {q}
                      </text>
                    ))}

                    {/* Work volume line */}
                    <motion.path
                      d={
                        buyerType === 'human'
                          ? 'M 65 132 L 205 125 L 345 118 L 485 112'
                          : 'M 65 135 L 205 102 L 345 64 L 485 32'
                      }
                      fill="none"
                      stroke="#047857"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      initial={false}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Seat revenue line */}
                    <motion.path
                      d={
                        buyerType === 'human'
                          ? 'M 65 125 L 205 118 L 345 110 L 485 104'
                          : 'M 65 82 L 205 108 L 345 144 L 485 168'
                      }
                      fill="none"
                      stroke={buyerType === 'human' ? '#29473b' : '#be123c'}
                      strokeWidth="3.5"
                      strokeDasharray={buyerType === 'automated' ? '6 4' : undefined}
                      strokeLinecap="round"
                      initial={false}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6 }}
                    />

                    <text x={330} y={24} fill="#047857" fontSize="11" fontWeight="700" fontFamily="var(--mono)">
                      {buyerType === 'human' ? 'STEADY HUMAN WORKLOAD' : 'WORKLOAD VOLUME (+4.8x)'}
                    </text>
                    <text
                      x={320}
                      y={buyerType === 'human' ? 96 : 186}
                      fill={buyerType === 'human' ? '#29473b' : '#be123c'}
                      fontSize="11"
                      fontWeight="700"
                      fontFamily="var(--mono)"
                    >
                      {buyerType === 'human' ? 'SEAT REVENUE (+12%)' : 'FLAT SEAT REVENUE (-72%)'}
                    </text>
                  </svg>
                </div>
                <p className="text-[13px] text-[var(--muted)] mt-3 mb-0">
                  Your customer gets five times more value while paying you seventy percent less at
                  renewal. That math puts software vendors out of business quietly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. FIELD ADVICE BENTO */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[var(--forest2)] text-white rounded-2xl p-6 sm:p-7">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-2">
                01 / THE RENEWAL SHOCK
              </span>
              <h2 className="font-serif text-2xl leading-tight font-medium text-white mb-3">
                Nobody warns you until procurement sends the redline.
              </h2>
              <p className="text-[14px] leading-relaxed text-zinc-100 mb-0">
                Accounts rarely churn cleanly. They cut seats from eighty down to twelve because
                three supervisors now run automated queues for the whole floor.
              </p>
            </div>

            <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-7">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                02 / THE FIX THAT WORKS
              </span>
              <h2 className="font-serif text-2xl leading-tight font-medium text-[var(--ink)] mb-3">
                Stop tying your baseline fee to human eyeballs.
              </h2>
              <p className="text-[14px] leading-relaxed text-[var(--muted)] mb-0">
                Anchor your recurring fee on company size, active customer volume, or connected
                departments, then add clear volume tiers above a fair monthly cap.
              </p>
            </div>

            <div className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-7">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                03 / HONEST UNCERTAINTY
              </span>
              <h2 className="font-serif text-2xl leading-tight font-medium text-[var(--ink)] mb-3">
                Do not invent weird new metrics buyers cannot audit.
              </h2>
              <p className="text-[14px] leading-relaxed text-[var(--muted)] mb-0">
                Wait before flipping your whole price book if ninety percent of your accounts still
                work screen by screen. Fix your top automated contracts first and keep renewals
                simple.
              </p>
            </div>
          </div>
        </section>

        {/* 03. INTERACTIVE 60-SECOND CHECK - Seat Shrinkage Stress Check */}
        <section id="seat-shrink-check" className="max-w-[var(--max)] mx-auto px-[5vw] py-10">
          <div className="bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-9">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
              FREE 60-SECOND RENEWAL TEST
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              See what happens when one enterprise customer shrinks their human seats.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="old-seats">Paid human seats on contract today</label>
                    <span className="font-mono text-[var(--forest)]">{oldSeats} seats</span>
                  </div>
                  <input
                    id="old-seats"
                    type="range"
                    min={10}
                    max={300}
                    step={5}
                    value={oldSeats}
                    onChange={(e) => setOldSeats(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="seat-price">Monthly fee per seat</label>
                    <span className="font-mono text-[var(--forest)]">${seatPrice}/mo</span>
                  </div>
                  <input
                    id="seat-price"
                    type="range"
                    min={20}
                    max={250}
                    step={5}
                    value={seatPrice}
                    onChange={(e) => setSeatPrice(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="seat-cut">Seats buyer cuts after automating work</label>
                    <span className="font-mono text-rose-800">{seatReductionPct}% cut ({keptSeats} kept)</span>
                  </div>
                  <input
                    id="seat-cut"
                    type="range"
                    min={10}
                    max={90}
                    step={5}
                    value={seatReductionPct}
                    onChange={(e) => setSeatReductionPct(Number(e.target.value))}
                    className="w-full accent-rose-700 h-2 cursor-pointer"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-rose-800 block mb-2">
                  SINGLE-ACCOUNT RENEWAL IMPACT
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Annual Drop
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-rose-800">
                      -${annualRevenueLost.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Protected Hybrid
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-emerald-800">
                      ${protectedBaseMrr.toLocaleString('en-US')}/mo
                    </span>
                  </div>
                </div>
                <p className="text-[13.5px] leading-relaxed text-[var(--ink)] mb-5">
                  On pure seat pricing, one client drops from ${oldMrr.toLocaleString('en-US')}/mo
                  to ${flatSeatMrr.toLocaleString('en-US')}/mo while your workload climbs. A
                  platform-plus-volume floor keeps you at ${protectedBaseMrr.toLocaleString('en-US')}/mo.
                </p>
                <Link
                  href={`/schedule?source=agent-buyers-pricing&leak=${encodeURIComponent(`$${annualRevenueLost.toLocaleString('en-US')}/yr Seat Drop`)}`}
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[var(--forest2)] !text-white font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Restructure this contract model in 14 days ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 04. DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="agent-buyers-pricing"
            metricLabel="Account Renewal Drop"
            metricValue={`$${annualRevenueLost.toLocaleString('en-US')}/yr`}
            headline="Move Off Fragile Seat Pricing Before Renewals Reset Downward"
            subheadline="Stress-test your tiers with the $29 kit, spend 60 minutes with me for $450, or lock the $2,500 14-day repricing sprint."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Pricing Questions
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Common questions when customers consolidate logins
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
