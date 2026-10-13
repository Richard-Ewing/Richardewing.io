"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Sparkles } from 'lucide-react';
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
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-sm border border-zinc-300 shadow-sm mb-6">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs sm:text-sm font-bold text-zinc-800 tracking-wide">
                                Richard Ewing  -  Product & AI Economist · Scaled SaaS $0 to $25M ARR
                            </span>
                        </div>

                        {/* H1 Headline - 10th-Thought + Hormozi Plain English */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-extrabold text-zinc-950 mb-6 leading-[1.15] tracking-tight font-grotesk">
                            Your AI bill goes up every month. Your team isn&apos;t shipping any faster.
                        </h1>

                        {/* Plain English Executive Subhead */}
                        <p className="text-base sm:text-lg text-zinc-800 mb-6 leading-relaxed font-medium max-w-2xl">
                            I scaled enterprise software from <strong className="text-zinc-950">$0 to $25M ARR</strong> at Tyler Technologies, turned around a stagnant <strong className="text-zinc-950">$20M P&amp;L (+200% YoY)</strong>, and built two live AI platforms from scratch. I help CEOs, CFOs, and VPs of Product price AI features profitably, cut zombie roadmaps, and protect gross margins.
                        </p>

                        {/* 3 Non-Technical Executive Priorities */}
                        <div className="space-y-3 mb-8 text-left bg-white/80 backdrop-blur-sm border border-zinc-300 p-5 rounded-2xl max-w-xl shadow-sm">
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                                <p className="text-sm text-zinc-900 font-semibold">How do we price AI features so power users don&apos;t wipe out our gross margin?</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                                <p className="text-sm text-zinc-900 font-semibold">Which engineering projects are Zombie Features burning $500K+/yr with &lt;3% adoption?</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                                <p className="text-sm text-zinc-900 font-semibold">Looking for a battle-tested CPO / VP of Product, an AI P&amp;L turnaround, or the $29 Operating Kit?</p>
                            </div>
                        </div>

                        {/* Dominant Primary CTAs */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-3.5 mb-5">
                            <Link
                                href="/toolkit"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/25 hover:-translate-y-0.5 uppercase tracking-wider"
                            >
                                <Sparkles className="w-4 h-4" />
                                Get the $29 Operating Kit
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5 uppercase tracking-wider"
                            >
                                <Award className="w-4 h-4 text-amber-400" />
                                Executive &amp; Builder Portfolio
                            </Link>
                        </div>

                        <div className="mb-8 text-center lg:text-left">
                            <Link
                                href="/services#gut_check"
                                className="text-xs font-mono font-bold text-zinc-700 hover:text-purple-700 underline transition-colors"
                            >
                                Or book a ${COMMERCIAL_OFFERS.gut_check.price} 1-on-1 Product P&amp;L &amp; Pricing Tear-Down →
                            </Link>
                        </div>

                        {/* Social Proof & Authority Metrics */}
                        <div className="flex items-center gap-4 pt-3 border-t border-zinc-200/80">
                            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-violet-500 shadow-md ring-2 ring-violet-200/60">
                                <Image
                                    src="/assets/headshot.jpg"
                                    alt="Richard Ewing - Product & AI Economist"
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                    priority
                                />
                            </div>
                            <div className="text-xs text-zinc-600 font-medium text-left">
                                <p className="font-bold text-zinc-900">Richard Ewing  -  Founder of Exogram.ai &amp; CareerWin.ai · CS + Finance MBA</p>
                                <p>11,141+ LinkedIn Followers · 174+ Published Works · 778+ AI Citations</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Calculator Widget */}
                    <div className="lg:col-span-5">
                        <BudgetLeakCalculator />
                    </div>

                </div>

                {/* Horizontal Pricing Progression Ladder */}
                <div className="mt-12">
                    <PricingLadderStepper />
                </div>

            </div>
        </section>
    );
};

export default Hero;

