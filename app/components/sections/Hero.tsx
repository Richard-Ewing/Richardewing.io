"use client";

import Link from 'next/link';
import Image from 'next/image';
import { AsSeenIn } from '@/components/AsSeenIn';
import { ArrowRight } from 'lucide-react';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';
import PricingLadderStepper from '@/app/components/PricingLadderStepper';
import BudgetLeakCalculator from '@/components/BudgetLeakCalculator';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center py-16 lg:py-20 overflow-hidden">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full bg-gradient-to-br from-rose-300/50 via-violet-200/40 to-transparent blur-3xl animate-drift-slow" />
                <div className="absolute bottom-[-15%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-purple-300/40 via-indigo-200/30 to-transparent blur-3xl animate-drift-slow-reverse" />
                <div className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-gradient-to-bl from-amber-200/30 via-rose-100/25 to-transparent blur-3xl animate-drift-subtle" />
                {/* Subtle premium grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45)_0%,transparent_75%)] pointer-events-none" />
            </div>

            <div className="page-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">

                    {/* Left: Non-Technical Executive Hero Copy */}
                    <div className="lg:col-span-7 text-center lg:text-left">

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-sm mb-6">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs sm:text-sm font-semibold text-zinc-700 tracking-wide">Richard Ewing — AI Economist & Enterprise Financial Advisor</span>
                        </div>

                        {/* H1 Headline - Plain English 5-Second Executive Test */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-extrabold text-zinc-950 mb-6 leading-[1.18] tracking-tight font-grotesk">
                            Find and fix the money leaking out of your AI and engineering budgets.
                        </h1>

                        {/* Plain English Executive Subhead */}
                        <p className="text-base sm:text-lg text-zinc-700 mb-6 leading-relaxed font-medium max-w-2xl">
                            I help CFOs, CEOs, and technology leaders stop unpredictable AI invoices, eliminate unmonitored software waste, and protect gross margins before board meetings.
                        </p>

                        {/* 3 Non-Technical Executive Priorities */}
                        <div className="space-y-3 mb-8 text-left bg-white/70 backdrop-blur-sm border border-zinc-300 p-5 rounded-2xl max-w-xl shadow-sm">
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                                <p className="text-sm text-zinc-900 font-semibold">Where is our monthly AI spend actually going?</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                                <p className="text-sm text-zinc-900 font-semibold">Which engineering projects produce revenue vs. burn cash?</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                                <p className="text-sm text-zinc-900 font-semibold">How do we enforce spending guardrails before budget overruns?</p>
                            </div>
                        </div>

                        {/* Dominant Primary Assessment CTA */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 mb-8">
                            <Link
                                href="/assessment"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-extrabold text-xs sm:text-sm hover:opacity-90 transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 hover:-translate-y-0.5 uppercase tracking-wider"
                            >
                                Run Free 10-Second Budget Leak Benchmark
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/services#gut_check"
                                className="text-xs font-mono font-bold text-zinc-600 hover:text-purple-700 underline transition-colors"
                            >
                                Or schedule a ${COMMERCIAL_OFFERS.gut_check.price} Executive Rapid Audit →
                            </Link>
                        </div>

                        {/* Social Proof & Authority Metrics */}
                        <div className="flex items-center gap-4 pt-2 border-t border-zinc-200/80">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-purple-300">
                                <Image
                                    src="/assets/headshot.jpg"
                                    alt="Richard Ewing - AI Economist"
                                    fill
                                    className="object-cover"
                                    sizes="48px"
                                />
                            </div>
                            <div className="text-xs text-zinc-600 font-medium">
                                <p className="font-bold text-zinc-900">Richard Ewing — Founder of Exogram & CareerWin</p>
                                <p>11,141+ LinkedIn Followers · 1,400+ Executive Subscribers · 778 AI Citations</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Neil Patel Calculator Widget */}
                    <div className="lg:col-span-5">
                        <BudgetLeakCalculator />
                    </div>

                </div>

                {/* Horizontal Pricing Progression Ladder */}
                <div className="mt-12">
                    <PricingLadderStepper />
                </div>

                {/* As Seen In Bar */}
                <div className="mt-12">
                    <AsSeenIn />
                </div>

            </div>
        </section>
    );
};

export default Hero;
