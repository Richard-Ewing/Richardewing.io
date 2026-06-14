"use client";

import Link from 'next/link';
import Image from 'next/image';
import { AsSeenIn } from '@/components/AsSeenIn';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center py-24 overflow-hidden">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full bg-gradient-to-br from-rose-300/50 via-violet-200/40 to-transparent blur-3xl animate-drift-slow" />
                <div className="absolute bottom-[-15%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-purple-300/40 via-indigo-200/30 to-transparent blur-3xl animate-drift-slow-reverse" />
                <div className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-gradient-to-bl from-amber-200/30 via-rose-100/25 to-transparent blur-3xl animate-drift-subtle" />
            </div>

            <div className="page-container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left: Text content */}
                    <div className="flex-1 text-center lg:text-left">

                        {/* Eyebrow — Identity first */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-sm mb-8">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm font-semibold text-zinc-700 tracking-wide">Richard Ewing — AI Economist</span>
                        </div>

                        {/* H1 — Clear value proposition */}
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-zinc-900 mb-6 leading-[1.12] max-w-2xl tracking-tight">
                            I Help Enterprises Stop{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-purple-600">
                                Losing Money
                            </span>{' '}
                            on AI.
                        </h1>

                        {/* Subheadline — What you actually do */}
                        <p className="text-lg text-zinc-600 mb-10 max-w-xl leading-relaxed font-medium">
                            R&D capital audits, AI unit economics diagnostics, and the deterministic 
                            governance frameworks that turn volatile models into predictable enterprise assets.
                        </p>

                        {/* Dual CTA */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                            <Link 
                                href="/advisory" 
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 hover:-translate-y-0.5"
                            >
                                Book a Strategic Advisory Call
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link 
                                href="/tools/pdi" 
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-zinc-300 text-zinc-800 font-semibold text-base hover:border-violet-400 hover:bg-violet-50/40 transition-all"
                            >
                                Run a Free Diagnosis
                            </Link>
                        </div>

                        {/* Credibility line */}
                        <div className="mb-6">
                            <p className="text-zinc-600 text-sm font-medium leading-relaxed">
                                Creator of the{' '}
                                <Link href="/framework" className="text-violet-700 font-bold hover:text-violet-500 transition-colors underline decoration-violet-300 underline-offset-2">
                                    Production AI Governance Framework
                                </Link>
                                {' '}·{' '}Founder of{' '}
                                <Link href="/exogram" className="text-purple-700 font-bold hover:text-purple-500 transition-colors underline decoration-purple-300 underline-offset-2">
                                    Exogram
                                </Link>
                            </p>
                            <p className="text-zinc-500 text-xs mt-2 font-medium tracking-wide">
                                Published in CIO.com · BuiltIn · HackerNoon · MindTheProduct
                            </p>
                        </div>
                    </div>

                    {/* Right: Headshot */}
                    <div className="flex-shrink-0 relative">
                        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                            {/* Gradient ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 via-purple-400 to-rose-400 p-[3px]">
                                <div className="w-full h-full rounded-full overflow-hidden bg-[#F5F0EB]">
                                    <Image 
                                        src="/assets/headshot.jpg" 
                                        alt="Richard Ewing — AI Economist" 
                                        fill 
                                        className="object-cover rounded-full" 
                                        sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 shadow-md">
                                <span className="text-xs font-bold text-zinc-800 whitespace-nowrap">🎯 $25M+ ARR Scaled</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* As Seen In — full width below */}
                <div className="mt-16">
                    <AsSeenIn />
                </div>

            </div>
        </section>
    );
};

export default Hero;
