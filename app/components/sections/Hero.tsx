"use client";

import Link from 'next/link';
import { AsSeenIn } from '@/components/AsSeenIn';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-rose-200/40 via-violet-200/30 to-transparent blur-3xl animate-drift-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-purple-200/30 via-indigo-200/20 to-transparent blur-3xl animate-drift-slow-reverse" />
                <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-bl from-amber-100/20 via-rose-100/15 to-transparent blur-3xl animate-drift-subtle" />
            </div>

            <div className="page-container text-center">

                {/* Eyebrow — Identity first */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-zinc-200/80 shadow-sm mb-8">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-semibold text-zinc-800 tracking-wide">Richard Ewing — AI Economist</span>
                </div>

                {/* H1 — Clear value proposition */}
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-zinc-900 mb-6 leading-[1.15] max-w-3xl mx-auto tracking-tight">
                    I Help Enterprises Stop{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-purple-600">
                        Losing Money
                    </span>{' '}
                    on AI.
                </h1>

                {/* Subheadline — What you actually do */}
                <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                    R&D capital audits, AI unit economics diagnostics, and the deterministic 
                    governance frameworks that turn volatile models into predictable enterprise assets.
                </p>

                {/* Dual CTA */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Link 
                        href="/advisory" 
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 text-white font-semibold text-base hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20 hover:shadow-xl hover:shadow-zinc-900/30 hover:-translate-y-0.5"
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
                <div className="mb-8">
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
                        Published in CIO.com · BuiltIn · HackerNoon · MindTheProduct · Amazon Author
                    </p>
                </div>

                {/* As Seen In */}
                <AsSeenIn />

            </div>
        </section>
    );
};

export default Hero;
