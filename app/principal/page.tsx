'use client';

import Image from 'next/image';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { NumberTicker } from '../components/magicui/number-ticker';
import { GlowCard } from '../components/magicui/glow-card';

export default function PrincipalPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cobalt/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-12 mb-8">
                    <span className="font-mono text-cobalt text-xs uppercase tracking-[0.3em] mb-6 block">The Principal</span>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start mb-8">
                        <div className="relative group shrink-0">
                            <div className="absolute inset-0 bg-cobalt blur opacity-20 group-hover:opacity-40 transition-opacity rounded-2xl" />
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-zinc-800 border-2 border-white/10 overflow-hidden relative">
                                <Image src="/assets/images/headshot.jpg" alt="Richard Ewing" fill className="object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Richard Ewing</h1>
                            <div className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-4">Product Economist • Seattle, WA</div>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                                I help boards stop bleeding money on AI they don't understand. 15 years of shipping code and managing P&Ls across enterprise, government, and startups.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white"><NumberTicker value={15} suffix="y" /></div>
                            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase">Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white"><NumberTicker value={7} suffix="M+" /></div>
                            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase">Users Migrated</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-cobalt"><NumberTicker value={2} prefix="$" suffix="B+" /></div>
                            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase">Waste ID'd</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white">MBA</div>
                            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase">Finance</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={100}>
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-cobalt" /> Career Timeline
                    </h2>

                    <div className="space-y-4">
                        <GlowCard className="p-5 sm:p-6" glowColor="cobalt">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <h3 className="text-white font-bold text-base sm:text-lg">Product Economist</h3>
                                <span className="font-mono text-xs text-cobalt">2020 - Present</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">Independent advisory practice serving PE firms, enterprise turnarounds, and AI due diligence.</p>
                        </GlowCard>

                        <GlowCard className="p-5 sm:p-6" glowColor="cyan">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <h3 className="text-white font-bold text-base sm:text-lg">State of Washington</h3>
                                <span className="font-mono text-xs text-zinc-500">2015 - 2020</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">Led digital transformation for DOL. Migrated 7.7M users to cloud with zero downtime. Governor's Award recipient.</p>
                        </GlowCard>

                        <GlowCard className="p-5 sm:p-6" glowColor="white">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <h3 className="text-white font-bold text-base sm:text-lg">Enterprise & Startups</h3>
                                <span className="font-mono text-xs text-zinc-500">2009 - 2015</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">Product leadership roles at various enterprise software and fintech startups. Shipped products to millions of users.</p>
                        </GlowCard>
                    </div>
                </div>
            </ScrollReveal>

            {/* Education & Credentials */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-gold" /> Education & Credentials
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-white/10 rounded-xl p-4">
                            <div className="font-mono text-xs text-gold uppercase mb-2">MBA - Finance</div>
                            <div className="text-white font-bold">Western Governors University</div>
                        </div>
                        <div className="border border-white/10 rounded-xl p-4">
                            <div className="font-mono text-xs text-zinc-500 uppercase mb-2">Certifications</div>
                            <div className="text-white text-sm">CSM, CSPO, PMP, ITIL, Six Sigma</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
