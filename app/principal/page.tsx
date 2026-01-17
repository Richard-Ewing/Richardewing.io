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
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Richard Ewing</h1>
                            <div className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-4">Product Economist • Seattle, WA</div>
                            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                                I build "Mission Critical" product engines. I bridge the gap between code and capital, scaling SaaS from 0-to-1 to $25M ARR. I am a Product Executive who enters organizations facing systemic inefficiencies and installs the operational rigor required for enterprise dominance.
                            </p>
                        </div>
                    </div>

                    {/* Stats - Psychology: Specific numbers build instant credibility */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-6">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white"><NumberTicker value={15} suffix="+" /></div>
                            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white"><NumberTicker value={7} suffix="M+" /></div>
                            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase">Users Scaled</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-cobalt"><NumberTicker value={25} prefix="$" suffix="M" /></div>
                            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase">ARR Scaled</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white"><NumberTicker value={50} suffix="+" /></div>
                            <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase">Leaders Mentored</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Core Thesis */}
            <ScrollReveal delay={50}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border-l-2 border-cobalt">
                    <div className="font-mono text-xs text-cobalt uppercase tracking-widest mb-3">Core Thesis</div>
                    <p className="text-xl sm:text-2xl text-white font-bold leading-tight mb-4">
                        "Innovation without Operation is Hallucination."
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Engineering speaks velocity; C-Suite speaks P&L. When these two languages disconnect, you get features that don't sell and roadmaps that don't ship. I am the translation layer.
                    </p>
                </div>
            </ScrollReveal>

            {/* Timeline - Psychology: Recency bias - show current/recent first */}
            <ScrollReveal delay={100}>
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-cobalt" /> Career Timeline
                    </h2>

                    <div className="space-y-4">
                        <GlowCard className="p-5 sm:p-6" glowColor="cobalt">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <div>
                                    <h3 className="text-white font-bold text-base sm:text-lg">Principal Product Economist</h3>
                                    <div className="text-zinc-500 text-xs">Independent Advisory Practice</div>
                                </div>
                                <span className="font-mono text-xs text-cobalt bg-cobalt/10 px-2 py-1 rounded">2024 - Present</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">Fractional Product Executive and Capital Efficiency Advisor for Series B+ SaaS and PE portfolios. Bridging Engineering Velocity and Financial Viability.</p>
                        </GlowCard>

                        <GlowCard className="p-5 sm:p-6" glowColor="cyan">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <div>
                                    <h3 className="text-white font-bold text-base sm:text-lg">Director of Product Management</h3>
                                    <div className="text-zinc-500 text-xs">Entrepreneurs of Tomorrow (Board Advisor → Operating Head)</div>
                                </div>
                                <span className="font-mono text-xs text-zinc-500">2025 - Present</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">Built Product Management from scratch. Delivered AI conversational agent driving radical efficiency across Finance/Ops. Established 100% compliance frameworks.</p>
                        </GlowCard>

                        <GlowCard className="p-5 sm:p-6" glowColor="cyan">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <div>
                                    <h3 className="text-white font-bold text-base sm:text-lg">Group Product Manager (Head of Product)</h3>
                                    <div className="text-zinc-500 text-xs">Moss Adams</div>
                                </div>
                                <span className="font-mono text-xs text-zinc-500">2022 - 2024</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">De facto Director for 16-person org. Led Azure cloud migration securing $5M cost reduction. Doubled velocity, cleared 200-item backlog. Promoted 8 to senior roles.</p>
                        </GlowCard>

                        <GlowCard className="p-5 sm:p-6" glowColor="white">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <div>
                                    <h3 className="text-white font-bold text-base sm:text-lg">Product Manager (7.7M Users)</h3>
                                    <div className="text-zinc-500 text-xs">State of Washington</div>
                                </div>
                                <span className="font-mono text-xs text-zinc-500">2021 - 2022</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">Led 25+ engineering team through cloud migration. 98% on-time delivery, 25% faster MVPs. Governor's "Extra Mile" Award recipient.</p>
                        </GlowCard>

                        <GlowCard className="p-5 sm:p-6" glowColor="gold">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <div>
                                    <h3 className="text-white font-bold text-base sm:text-lg">Director of Operations (CPO Capacity)</h3>
                                    <div className="text-zinc-500 text-xs">Sechrist Design</div>
                                </div>
                                <span className="font-mono text-xs text-zinc-500">2014 - 2017</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">Full P&L ownership. Drove 200% YoY revenue growth to $20M. Consolidated 4 silos into unified high-efficiency unit. Improved retention 40%.</p>
                        </GlowCard>

                        <GlowCard className="p-5 sm:p-6" glowColor="white">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                <div>
                                    <h3 className="text-white font-bold text-base sm:text-lg">Principal Product Manager (0-to-1)</h3>
                                    <div className="text-zinc-500 text-xs">Tyler Technologies</div>
                                </div>
                                <span className="font-mono text-xs text-zinc-500">2008 - 2014</span>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">Scaled flagship ERP SaaS from $0 to $25M ARR. Slashed churn 20%, increased adoption 30%. Established product governance standards.</p>
                        </GlowCard>
                    </div>
                </div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-gold" /> Education
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-white/10 rounded-xl p-4 hover:border-gold/30 transition">
                            <div className="font-mono text-xs text-gold uppercase mb-2">Master of Business Administration</div>
                            <div className="text-white font-bold">City University of Seattle</div>
                            <div className="text-zinc-500 text-xs mt-1">2006 - 2009</div>
                        </div>
                        <div className="border border-white/10 rounded-xl p-4 hover:border-cobalt/30 transition">
                            <div className="font-mono text-xs text-cobalt uppercase mb-2">Bachelor of Science, Computer Science</div>
                            <div className="text-white font-bold">ITT Technical Institute</div>
                            <div className="text-zinc-500 text-xs mt-1">2002 - 2006</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
