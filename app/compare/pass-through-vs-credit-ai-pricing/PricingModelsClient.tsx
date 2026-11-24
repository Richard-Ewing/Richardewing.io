'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import FAQItem from '@/app/components/FAQItem';
import ScorecardCheckoutDrawer from '@/app/components/ScorecardCheckoutDrawer';

interface FaqEntry {
  q: string;
  a: string;
}

const PRICING_MODELS = [
  {
    id: 'flat',
    label: 'Flat Monthly Seat',
    normalProfit: 82,
    heavyProfit: 14,
    color: '#b77a35',
    heavyColor: '#be123c',
  },
  {
    id: 'credits',
    label: 'Prepaid Credit Packs',
    normalProfit: 74,
    heavyProfit: 68,
    color: '#29473b',
    heavyColor: '#b45309',
  },
  {
    id: 'passthrough',
    label: 'Pass-Through Bill',
    normalProfit: 78,
    heavyProfit: 76,
    color: '#29473b',
    heavyColor: '#29473b',
  },
  {
    id: 'hybrid',
    label: 'Base Fee + Clear Cap',
    normalProfit: 84,
    heavyProfit: 79,
    color: '#162e26',
    heavyColor: '#047857',
  },
];

export default function PricingModelsClient({ faqs }: { faqs: FaqEntry[] }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 });

  const [usageMode, setUsageMode] = useState<'normal' | 'heavy'>('heavy');
  const [monthlyPrice, setMonthlyPrice] = useState<number>(99);
  const [heavyShare, setHeavyShare] = useState<number>(20);
  const [heavyCost, setHeavyCost] = useState<number>(135);
  const [customers, setCustomers] = useState<number>(150);

  const normalUsers = Math.round(customers * ((100 - heavyShare) / 100));
  const heavyUsers = customers - normalUsers;
  const normalCostPerUser = Math.round(monthlyPrice * 0.14);
  const monthlyRevenue = customers * monthlyPrice;
  const monthlyAiBill = normalUsers * normalCostPerUser + heavyUsers * heavyCost;
  const grossProfit = monthlyRevenue - monthlyAiBill;
  const grossMarginPct = monthlyRevenue > 0 ? Math.round((grossProfit / monthlyRevenue) * 100) : 0;
  const heavyAccountLoss = Math.max(0, heavyCost - monthlyPrice);
  const annualLeak = heavyAccountLoss * heavyUsers * 12;

  const statusTone =
    heavyAccountLoss > 0
      ? {
          badge: 'QUIET CASH LEAK',
          border: 'border-rose-700/35 bg-rose-50/70',
          text: 'text-rose-900',
          summary: `Your heaviest ${heavyUsers} accounts cost you more than they pay. Every new power user makes your month worse.`,
        }
      : grossMarginPct < 55
        ? {
            badge: 'SQUEEZED PROFIT FLOOR',
            border: 'border-rose-700/35 bg-rose-50/70',
            text: 'text-rose-900',
            summary: `Heavy users are not underwater individually yet, still your blended profit dropped to ${grossMarginPct}%. One more busy month pushes this plan into the red.`,
          }
        : grossMarginPct < 72
          ? {
              badge: 'MARGIN UNDER PRESSURE',
              border: 'border-amber-700/35 bg-amber-50/70',
              text: 'text-amber-900',
              summary: `You are still making money today, yet one big customer surge will push your profit below safe software levels.`,
            }
          : {
              badge: 'HEALTHY FLOOR',
              border: 'border-emerald-800/35 bg-emerald-50/70',
              text: 'text-emerald-900',
              summary: `Your current numbers hold up cleanly. Keep your wallet closed on pricing help until usage jumps.`,
            };

  const formattedLeak = annualLeak.toLocaleString('en-US');
  const leakParam = annualLeak > 0 ? `$${formattedLeak}/yr` : `${grossMarginPct}% Margin`;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        {/* Scroll-linked top progress rail */}
        {!prefersReducedMotion && (
          <motion.div
            style={{ scaleX, transformOrigin: '0% 50%' }}
            className="fixed top-[70px] lg:top-[78px] left-0 right-0 h-[3px] bg-[var(--gold)] z-40 pointer-events-none"
          />
        )}

        {/* 01. HERO - Warm Linen Editorial Split + High-Contrast Margin Alert Card */}
        <section className="inner-hero">
          <div className="inner-art" />
          <div className="inner-copy">
            <p className="eyebrow">
              <i /> Pillar 01 Advice · AI Feature Pricing
            </p>
            <h1>
              Your best customers should not be the ones draining your bank account.
            </h1>
            <p className="inner-lede">
              Pass-through pricing bills customers for actual AI usage above a flat software fee,
              while credit pricing sells prepaid usage bundles. A steady base plan with a clear
              monthly ceiling keeps budgets predictable for buyers and protects your profit when
              heavy users show up.
            </p>

            <div className="actions">
              <a className="button button-gold" href="#stress-check">
                Test your own price tag (60 sec) ↗
              </a>
              <Link
                className="button button-outline"
                href="/schedule?source=ai-pricing-models"
              >
                Book a pricing review
              </Link>
            </div>

            <div className="proof-mini">
              <span>
                4 models
                <small>tested in real P&amp;Ls</small>
              </span>
              <span>
                60 sec
                <small>plain-English profit check</small>
              </span>
              <span>
                $450 / $2,500
                <small>fixed-scope sprint options</small>
              </span>
            </div>
          </div>

          {/* Plain Tailwind aside card (avoids unlayered .inner-aside cascade overrides on nested dark callout) */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 self-end bg-[#faf8f2]/95 border border-[var(--line)] rounded-2xl p-6 sm:p-7 shadow-sm backdrop-blur-md"
          >
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
              FIELD NOTE · LAST TUESDAY
            </span>
            <strong className="font-serif text-[22px] leading-snug text-[var(--ink)] block mb-3">
              Traffic went up ten percent. The monthly AI bill quadrupled.
            </strong>
            <p className="text-[13.5px] leading-relaxed text-[var(--muted)] mb-4">
              I sat with a CFO who thought her new AI add-on was a hit. Nobody noticed that nine
              power users were burning through four hundred dollars of usage each on a ninety-nine
              dollar plan.
            </p>
            <div className="rounded-xl bg-[var(--forest2)] text-white p-4 border border-white/10">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#f3e3c6] mb-1.5">
                <span>Flat Seat Profit Trap</span>
                <span>Real Pattern</span>
              </div>
              <p className="text-[13.5px] text-white leading-relaxed m-0">
                Old software got cheaper every time a customer clicked. AI software sends you a
                fresh bill every single time they click.
              </p>
            </div>
          </motion.aside>
        </section>

        {/* 02. BESPOKE MOTION GRAPHIC BENTO - "Where Your Profit Actually Goes" */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 7-col: Animated SVG Motion Graphic Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                      LIVE MOTION COMPARISON
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                      What happens to your profit when heavy buyers arrive
                    </h2>
                  </div>

                  {/* Animated sliding pill toggle */}
                  <div className="inline-flex rounded-full bg-[var(--paper2)] p-1 border border-[var(--line)] self-start">
                    {(['normal', 'heavy'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        aria-pressed={usageMode === mode}
                        onClick={() => setUsageMode(mode)}
                        className={`relative px-3.5 py-2 text-xs font-semibold rounded-full transition-colors min-h-[44px] sm:min-h-[36px] ${
                          usageMode === mode ? 'text-white' : 'text-[var(--ink)]'
                        }`}
                      >
                        {usageMode === mode && (
                          <motion.span
                            layoutId="pricing-usage-pill"
                            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                            className="absolute inset-0 rounded-full bg-[var(--forest2)]"
                          />
                        )}
                        <span className="relative z-10">
                          {mode === 'normal' ? 'Light Month' : 'Heavy User Surge'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animated SVG Profit Chart */}
                <div className="w-full overflow-hidden rounded-xl bg-white border border-[var(--line)] p-4 sm:p-5">
                  <svg
                    viewBox="0 0 600 250"
                    className="w-full h-auto block"
                    role="img"
                    aria-label="Profit margin comparison across four AI pricing models"
                  >
                    <title>Profit margin comparison across four AI pricing models</title>
                    {[0, 25, 50, 75, 100].map((pct) => {
                      const x = 180 + pct * 3.8;
                      return (
                        <g key={pct}>
                          <line
                            x1={x}
                            y1={20}
                            x2={x}
                            y2={215}
                            stroke="rgba(36, 51, 43, 0.10)"
                            strokeDasharray={pct === 75 ? '4 4' : undefined}
                          />
                          <text
                            x={x}
                            y={235}
                            textAnchor="middle"
                            fill="#52525b"
                            fontSize="11"
                            fontFamily="var(--mono)"
                          >
                            {pct}%
                          </text>
                        </g>
                      );
                    })}

                    <text
                      x={465}
                      y={14}
                      textAnchor="middle"
                      fill="#047857"
                      fontSize="10"
                      fontWeight="600"
                      fontFamily="var(--mono)"
                    >
                      SAFE PROFIT LINE (75%)
                    </text>

                    {PRICING_MODELS.map((m, idx) => {
                      const y = 38 + idx * 45;
                      const pct = usageMode === 'normal' ? m.normalProfit : m.heavyProfit;
                      const barWidth = Math.max(24, pct * 3.8);
                      const fill = usageMode === 'normal' ? m.color : m.heavyColor;
                      const fitsInside = barWidth >= 66;
                      return (
                        <g key={m.id}>
                          <text
                            x={168}
                            y={y + 18}
                            textAnchor="end"
                            fill="#1e2924"
                            fontSize="13"
                            fontWeight="600"
                            fontFamily="var(--sans)"
                          >
                            {m.label}
                          </text>
                          <rect
                            x={180}
                            y={y}
                            width={380}
                            height={28}
                            rx={6}
                            fill="#f4f1e9"
                          />
                          <motion.rect
                            x={180}
                            y={y}
                            height={28}
                            rx={6}
                            fill={fill}
                            initial={false}
                            animate={{ width: barWidth }}
                            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: idx * 0.05 }}
                          />
                          <text
                            x={fitsInside ? 180 + barWidth - 10 : 180 + barWidth + 8}
                            y={y + 18}
                            textAnchor={fitsInside ? 'end' : 'start'}
                            fill={fitsInside ? '#ffffff' : '#1e2924'}
                            fontSize="12"
                            fontWeight="700"
                            fontFamily="var(--mono)"
                          >
                            {pct}%
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              <p className="text-[13.5px] text-[var(--muted)] mt-4 mb-0">
                Toggle between <strong className="text-[var(--ink)]">Light Month</strong> and{' '}
                <strong className="text-[var(--ink)]">Heavy User Surge</strong>. Notice how flat
                pricing looks great on launch day and falls off a cliff the week customers actually
                love your product.
              </p>
            </motion.div>

            {/* Right 5-col: Dark Forest Direct Advice Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 bg-[var(--forest2)] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10"
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#f3e3c6] block mb-2">
                  MY BLUNT ADVICE TO YOU
                </span>
                <h3 className="font-serif text-2xl sm:text-[28px] leading-tight text-white mb-4">
                  Stop making your buyer do math just to sign your contract.
                </h3>
                <p className="text-[14.5px] leading-relaxed text-zinc-100 mb-4">
                  I have watched good sales teams lose six-figure deals over prepaid credit packs.
                  Your buyer is a VP of Operations or a Director of Finance. They do not want to
                  guess how many credits a busy Tuesday will burn before lunch.
                </p>
                <p className="text-[14.5px] leading-relaxed text-zinc-100 mb-5">
                  When they cannot predict next month&apos;s invoice, they freeze. They ask for a
                  smaller pilot, or they push the decision into next quarter.
                </p>
                <p className="text-[14.5px] leading-relaxed text-[#f4f1e9] font-medium">
                  Give them a plain monthly plan they understand in five seconds. Put a clear usage
                  ceiling on it. When they cross that ceiling, let them step up a tier or pay a clean
                  published overage rate.
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#f3e3c6]">
                  Want me to check your tiers?
                </span>
                <Link
                  href="/schedule?source=ai-pricing-models"
                  style={{ color: '#09090b' }}
                  className="inline-flex items-center px-4 py-2.5 rounded-lg bg-[#d8c7a8] !text-zinc-950 font-semibold text-xs hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Book 60-Min Teardown ($450) ↗
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 03. ASYMMETRIC BENTO GRID - The Three Pricing Traps */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-14">
          <div className="max-w-3xl reveal">
            <p className="eyebrow">
              <i /> What breaks in the real world
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight font-medium text-[var(--ink)] my-3">
              Three pricing habits I keep fixing for founders and CFOs.
            </h2>
            <p className="text-[15.5px] text-[var(--muted)] m-0">
              You do not need a fifty-page pricing study to see which trap you are standing in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            <article className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between reveal">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                  01 / FLAT-SEAT WIPEOUT
                </span>
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-3">
                  All-you-can-eat invites the hungriest eaters.
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--muted)] mb-3">
                  A few customers always discover they can run your AI feature all day long. You end
                  up celebrating a big logo win while quietly losing money on them every month.
                </p>
                <p className="text-[14px] text-[var(--ink)] font-medium">
                  My fix: keep your simple monthly seat price, yet cap heavy automated runs so one
                  account never eats the margin of ten quiet ones.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[var(--line)] font-mono text-[11px] text-rose-800">
                RISK: Best customers turn unprofitable
              </div>
            </article>

            <article className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between reveal">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                  02 / CREDIT ANXIETY
                </span>
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-3">
                  Credits burn before lunch and make users nervous.
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--muted)] mb-3">
                  Watch what happens when you sell ten thousand mystery credits. Staff stop clicking
                  because nobody wants to be the person who blew the department allowance on
                  Wednesday morning.
                </p>
                <p className="text-[14px] text-[var(--ink)] font-medium">
                  My fix: price around a plain business unit the buyer already tracks, like completed
                  reports, handled tickets, or reviewed contracts.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[var(--line)] font-mono text-[11px] text-amber-800">
                RISK: Renewal dies because nobody used it
              </div>
            </article>

            <article className="bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between reveal">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                  03 / PURE PASS-THROUGH
                </span>
                <h3 className="font-serif text-2xl text-[var(--ink)] mb-3">
                  Honest math that still creates billing headaches.
                </h3>
                <p className="text-[14.5px] leading-relaxed text-[var(--muted)] mb-3">
                  Passing your exact AI vendor bill straight to the customer sounds fair on paper.
                  Then a surprise spike hits in November, their CFO calls angry, and your account
                  manager spends Friday defending a three-page invoice.
                </p>
                <p className="text-[14px] text-[var(--ink)] font-medium">
                  My fix: pair pass-through billing with automatic spending alerts at seventy-five
                  percent and a hard pause button the customer controls.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[var(--line)] font-mono text-[11px] text-[var(--forest)]">
                BEST FIT: Mid-market accounts with wild swings
              </div>
            </article>
          </div>
        </section>

        {/* 04. INTERACTIVE 60-SECOND CHECK - Plain-English Margin Stress Check */}
        <section id="stress-check" className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="bg-white border-2 border-[var(--forest)]/20 rounded-2xl p-6 sm:p-9 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[var(--line)]">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-1">
                  FREE 60-SECOND CHECK · DO THIS BEFORE PAYING ANYONE $1
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] m-0">
                  Plug in your own rough numbers and see if heavy users are eating your profit.
                </h2>
              </div>
              <Link
                href="/tools/aueb"
                className="text-xs font-semibold text-[var(--forest)] border-b border-[var(--gold)] pb-0.5 self-start lg:self-auto whitespace-nowrap"
              >
                Need deeper spreadsheet math? Open full AUEB tool ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-7 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="price-slider">What you charge per customer each month</label>
                    <span className="font-mono text-[var(--forest)]">${monthlyPrice}/mo</span>
                  </div>
                  <input
                    id="price-slider"
                    type="range"
                    min={25}
                    max={500}
                    step={5}
                    value={monthlyPrice}
                    onChange={(e) => setMonthlyPrice(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="customers-slider">Total paying customers on this plan</label>
                    <span className="font-mono text-[var(--forest)]">{customers} accounts</span>
                  </div>
                  <input
                    id="customers-slider"
                    type="range"
                    min={20}
                    max={1000}
                    step={10}
                    value={customers}
                    onChange={(e) => setCustomers(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="heavy-share-slider">Share of accounts who use AI heavily</label>
                    <span className="font-mono text-[var(--forest)]">{heavyShare}% ({heavyUsers} accounts)</span>
                  </div>
                  <input
                    id="heavy-share-slider"
                    type="range"
                    min={5}
                    max={50}
                    step={5}
                    value={heavyShare}
                    onChange={(e) => setHeavyShare(Number(e.target.value))}
                    className="w-full accent-[var(--forest)] h-2 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-semibold text-[var(--ink)] mb-1.5">
                    <label htmlFor="heavy-cost-slider">Your monthly AI bill for one heavy customer</label>
                    <span className="font-mono text-rose-800">${heavyCost}/mo</span>
                  </div>
                  <input
                    id="heavy-cost-slider"
                    type="range"
                    min={15}
                    max={450}
                    step={5}
                    value={heavyCost}
                    onChange={(e) => setHeavyCost(Number(e.target.value))}
                    className="w-full accent-rose-700 h-2 cursor-pointer"
                  />
                </div>
              </div>

              <div className={`lg:col-span-5 rounded-2xl border p-6 ${statusTone.border}`}>
                <span className={`font-mono text-[10px] font-bold tracking-[0.14em] uppercase block mb-2 ${statusTone.text}`}>
                  {statusTone.badge}
                </span>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Blended Profit
                    </span>
                    <span className="font-serif text-2xl font-bold text-[var(--ink)]">
                      {grossMarginPct}%
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 border border-[var(--line)]">
                    <span className="block font-mono text-[10px] uppercase text-[var(--muted)]">
                      Heavy-User Leak
                    </span>
                    <span className="font-serif text-2xl font-bold text-rose-800">
                      ${formattedLeak}/yr
                    </span>
                  </div>
                </div>
                <p className="text-[13.5px] leading-relaxed text-[var(--ink)] mb-5">
                  {statusTone.summary}
                </p>
                <Link
                  href={`/schedule?source=ai-pricing-models&leak=${encodeURIComponent(leakParam)}`}
                  style={{ color: '#ffffff' }}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[var(--forest2)] !text-white font-semibold text-sm hover:opacity-95 transition-opacity min-h-[44px]"
                >
                  Bring these numbers to a 60-min teardown ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 05. HONEST DISQUALIFIER + NATURAL ABRUPT ENDING */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-[#faf8f2] border border-[var(--line)] rounded-2xl p-6 sm:p-8 reveal">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--gold)] block mb-2">
                WHEN TO KEEP YOUR WALLET CLOSED
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-4">
                You probably do not need to pay me yet.
              </h2>
              <p className="text-[15px] leading-relaxed text-[var(--ink)] mb-4">
                If you have fewer than twenty paying customers, keep your money. Open a plain
                spreadsheet this afternoon, list your top ten heaviest users next to what they pay
                you, and see if any row turns red. You can fix a small leak in one afternoon without
                hiring an outside advisor.
              </p>
              <p className="text-[15px] leading-relaxed text-[var(--muted)] mb-0">
                Call me when you have real annual contracts coming up for renewal, a CFO asking why
                gross profit slipped six points in two quarters, and a sales team afraid that
                changing the price sheet will stall every deal in the pipeline. That is where two
                weeks of clean unit math pays for itself in the first billing cycle.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[var(--paper2)] border border-[var(--line)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between reveal">
              <div>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--forest)] block mb-3">
                  WHAT WE DO IN 14 DAYS ($2,500)
                </span>
                <ul className="space-y-2.5 text-[14px] text-[var(--ink)] pl-0 list-none m-0">
                  <li className="flex gap-2.5">
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>Sort every customer tier by real AI cost vs. cash collected</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>Build a clean base-plus-cap price sheet buyers grasp fast</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>Write the exact renewal email so existing clients stay calm</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>Hand your CFO one board-ready margin model in Excel</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="button button-gold" href="/pricing-sprints">
                  Compare Sprint Scopes ↗
                </Link>
                <Link className="button button-outline" href="/advisory">
                  All Advisory Pillars
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 06. CHECKOUT DRAWER + FAQS */}
        <section className="max-w-[var(--max)] mx-auto px-[5vw] py-12">
          <ScorecardCheckoutDrawer
            source="ai-pricing-models"
            metricLabel="Modeled Heavy-User Leak"
            metricValue={annualLeak > 0 ? `$${formattedLeak}/yr` : `${grossMarginPct}% Margin`}
            headline="Fix Your AI Price Sheet Before Heavy Usage Eats Next Quarter"
            subheadline="Start with the $29 spreadsheet kit, jump on a $450 60-minute teardown this week, or book the $2,500 14-day repricing sprint."
          />

          <div className="mt-12 max-w-4xl">
            <p className="eyebrow">
              <i /> Straight Answers
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-medium text-[var(--ink)] mb-6">
              Common questions from CEOs and Finance Directors
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
