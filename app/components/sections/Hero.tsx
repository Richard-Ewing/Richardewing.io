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
                {/* Subtle premium grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
                {/* Soft center highlight gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45)_0%,transparent_75%)] pointer-events-none" />
            </div>

            <div className="page-container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left: Text content */}
                    <div className="flex-1 text-center lg:text-left">

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200/80 shadow-sm mb-8">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm font-semibold text-zinc-700 tracking-wide">Richard Ewing - AI Economist</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-zinc-900 mb-6 leading-[1.12] max-w-2xl tracking-tight">
                            I audit AI investments so companies stop{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-purple-600">
                                bleeding margin
                            </span>.
                        </h1>

                        {/* Positioning sentence */}
                        <p className="text-xl md:text-2xl text-zinc-800 italic mb-6 max-w-xl font-medium">
                            The question is not whether AI works. The question is whether AI pays.
                        </p>

                        {/* Positioning statement - the one repeatable sentence */}
                        <p className="text-lg text-zinc-700 mb-3 max-w-xl leading-relaxed font-semibold">
                            I help organizations measure, govern, and improve the economics of enterprise AI through advisory services, diagnostic assessments, and practical frameworks.
                        </p>

                        {/* Who you help */}
                        <p className="text-base text-zinc-500 mb-10 max-w-xl leading-relaxed">
                            I work with CTOs, CFOs, and PE operating partners who need to know where their AI spend is going, what it is producing, and how to constrain it.
                        </p>

                        {/* Dual CTA */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
                            <Link
                                href="/tools/aueb"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/35 hover:-translate-y-0.5"
                            >
                                Run the Free AI Benchmark
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-zinc-300 text-zinc-800 font-semibold text-base hover:border-violet-400 hover:bg-violet-50/40 transition-all"
                            >
                                Book a $450 Gut-Check Evaluation
                            </Link>
                        </div>

                        {/* Funnel progression - shows the clear path */}
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 text-xs font-mono text-zinc-400 mb-10">
                            <span className="text-violet-600 font-bold">Free Benchmark</span>
                            <span>→</span>
                            <span>$450 Diagnostic</span>
                            <span>→</span>
                            <span>R&D Audit</span>
                            <span>→</span>
                            <span>Advisory Retainer</span>
                        </div>

                        {/* Credibility - Knowledge Platform */}
                        <div className="mb-6 space-y-4">
                            {/* REACH */}
                            <div>
                                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-1">Reach</span>
                                <p className="text-zinc-600 text-sm font-medium leading-relaxed">
                                    <span className="font-bold text-zinc-800">10,845</span> LinkedIn followers · <span className="font-bold text-zinc-800">1,362</span> newsletter subscribers · <span className="font-bold text-zinc-800">778</span> AI search citations
                                </p>
                            </div>
                            
                            {/* KNOWLEDGE PLATFORM */}
                            <div>
                                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-1">Knowledge Platform</span>
                                <p className="text-zinc-600 text-sm font-medium leading-relaxed">
                                    <span className="font-bold text-zinc-800">19</span> frameworks · <span className="font-bold text-zinc-800">56</span> glossary definitions · <span className="font-bold text-zinc-800">136</span> research articles · <span className="font-bold text-zinc-800">25</span> interactive tools
                                </p>
                            </div>

                            <p className="text-zinc-500 text-xs mt-4 font-bold tracking-wider uppercase">
                                Published in CIO.com · Built In · MindTheProduct · HackerNoon
                            </p>
                            <p className="text-zinc-500 text-sm mt-2 font-medium">
                                Creator of the{' '}
                                <Link href="/framework" className="text-violet-700 font-bold hover:text-violet-500 transition-colors underline decoration-violet-300 underline-offset-2">
                                    Production AI Governance Framework
                                </Link>
                                {' '}· Founder of{' '}
                                <Link href="/exogram" className="text-purple-700 font-bold hover:text-purple-500 transition-colors underline decoration-purple-300 underline-offset-2">
                                    Exogram
                                </Link>
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
                                        alt="Richard Ewing - AI Economist"
                                        fill
                                        className="object-cover rounded-full"
                                        sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* As Seen In */}
                <div className="mt-16">
                    <AsSeenIn />
                </div>

            </div>
        </section>
    );
};

export default Hero;
