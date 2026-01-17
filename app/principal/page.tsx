'use client';

import Image from 'next/image';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { NumberTicker } from '../components/magicui/number-ticker';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';
import Link from 'next/link';

export default function PrincipalPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Multi-color gradient background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cobalt/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 lg:p-12 mb-8 relative overflow-hidden">
                    {/* Subtle animated gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-cobalt/10 pointer-events-none" />

                    <div className="relative">
                        <span className="font-mono text-cyan-400 text-xs uppercase tracking-[0.3em] mb-6 block">The Principal</span>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start mb-8">
                            <div className="relative group shrink-0">
                                {/* Animated glow ring */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-cobalt to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-zinc-800 border-2 border-white/20 overflow-hidden relative">
                                    <Image src="/assets/images/headshot.jpg" alt="Richard Ewing" fill className="object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">Richard Ewing</h1>
                                <div className="font-mono text-sm text-cyan-400 uppercase tracking-widest mb-4">Product Economist</div>
                                <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                                    The executive who <span className="text-white font-bold">turns bleeding product organizations into profit engines</span>.
                                    I don't manage backlogs—I manage P&Ls. I don't ship features—I ship ROI.
                                </p>
                            </div>
                        </div>

                        {/* Power Stats - Psychology: Massive numbers = instant credibility */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-8">
                            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                                <div className="text-3xl sm:text-4xl font-bold text-cyan-400">
                                    <NumberTicker value={25} prefix="$" suffix="M" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase mt-1">ARR Scaled</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                                <div className="text-3xl sm:text-4xl font-bold text-white">
                                    <NumberTicker value={7} suffix="M+" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase mt-1">Users Migrated</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                                <div className="text-3xl sm:text-4xl font-bold text-cobalt">
                                    <NumberTicker value={5} prefix="$" suffix="M" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase mt-1">Cost Reduced</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition">
                                <div className="text-3xl sm:text-4xl font-bold text-gold">
                                    <NumberTicker value={200} suffix="%" />
                                </div>
                                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase mt-1">Revenue Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* The Thesis - Psychology: Bold positioning statement */}
            <ScrollReveal delay={50}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-cyan-500">
                    <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3">The Thesis</div>
                    <p className="text-2xl sm:text-3xl text-white font-bold leading-tight mb-4">
                        "Innovation without Operation<br />is Hallucination."
                    </p>
                    <p className="text-zinc-400 text-base leading-relaxed">
                        Engineering speaks velocity. The C-Suite speaks P&L. When these languages fail to connect,
                        you get features that don't sell and roadmaps that don't ship. <span className="text-white font-semibold">I am the translation layer.</span>
                    </p>
                </div>
            </ScrollReveal>

            {/* Domain Expertise - No company names, just prestige */}
            <ScrollReveal delay={100}>
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-cobalt" /> Domain Expertise
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <GlowCard className="p-6" glowColor="cyan">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🏛️</div>
                                <div>
                                    <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1">Public Sector</div>
                                    <h3 className="text-white font-bold text-lg mb-2">Government-Scale Digital Transformation</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Led infrastructure overhaul serving <span className="text-white font-bold">7.7 million citizens</span>.
                                        Zero-downtime cloud migration. <span className="text-gold">Governor's Award Recipient</span>.
                                    </p>
                                </div>
                            </div>
                        </GlowCard>

                        <GlowCard className="p-6" glowColor="cobalt">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">💼</div>
                                <div>
                                    <div className="font-mono text-[10px] text-cobalt uppercase tracking-widest mb-1">Professional Services</div>
                                    <h3 className="text-white font-bold text-lg mb-2">Top-10 Accounting Firm Modernization</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Orchestrated <span className="text-white font-bold">$5M strategic cost reduction</span> via Azure migration.
                                        Built 16-person product org from ground up. Doubled velocity.
                                    </p>
                                </div>
                            </div>
                        </GlowCard>

                        <GlowCard className="p-6" glowColor="gold">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🚀</div>
                                <div>
                                    <div className="font-mono text-[10px] text-gold uppercase tracking-widest mb-1">Venture-Backed Startups</div>
                                    <h3 className="text-white font-bold text-lg mb-2">0-to-1 Product Leadership</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Scaled ERP SaaS from <span className="text-white font-bold">$0 to $25M ARR</span>.
                                        Slashed churn 20%. Defined industry standard for enterprise utility platforms.
                                    </p>
                                </div>
                            </div>
                        </GlowCard>

                        <GlowCard className="p-6" glowColor="danger">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🔥</div>
                                <div>
                                    <div className="font-mono text-[10px] text-red-400 uppercase tracking-widest mb-1">Turnaround Operations</div>
                                    <h3 className="text-white font-bold text-lg mb-2">Revenue Resurrection Specialist</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Inherited stagnant P&L, drove <span className="text-white font-bold">200% YoY growth to $20M</span>.
                                        Consolidated 4 siloed teams. Improved retention 40%.
                                    </p>
                                </div>
                            </div>
                        </GlowCard>
                    </div>
                </div>
            </ScrollReveal>

            {/* The Secret Weapon - Psychology: Unique methodology = differentiation */}
            <ScrollReveal delay={150}>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-cobalt rounded-full" />
                        <h2 className="text-xl sm:text-2xl font-bold text-white">The Methodology</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-5 border border-white/10 rounded-xl hover:border-cyan-500/30 transition">
                            <div className="font-mono text-xs text-cyan-400 uppercase mb-2">Framework 01</div>
                            <h3 className="text-white font-bold mb-2">APER™ Diagnostic</h3>
                            <p className="text-zinc-500 text-sm">Actionable Product Economic Review. Forensic audit of engineering throughput vs. revenue impact.</p>
                        </div>
                        <div className="p-5 border border-white/10 rounded-xl hover:border-cobalt/30 transition">
                            <div className="font-mono text-xs text-cobalt uppercase mb-2">Framework 02</div>
                            <h3 className="text-white font-bold mb-2">Q-PEP™ Protocol</h3>
                            <p className="text-zinc-500 text-sm">Qualitative-Profitability Efficiency Protocol. Surgery for unit-economic insolvency.</p>
                        </div>
                        <div className="p-5 border border-white/10 rounded-xl hover:border-red-500/30 transition">
                            <div className="font-mono text-xs text-red-400 uppercase mb-2">Framework 03</div>
                            <h3 className="text-white font-bold mb-2">Product Debt Index™</h3>
                            <p className="text-zinc-500 text-sm">AI-powered forensic engine to quantify capital leakage in your backlog.</p>
                        </div>
                        <div className="p-5 border border-white/10 rounded-xl hover:border-gold/30 transition">
                            <div className="font-mono text-xs text-gold uppercase mb-2">Framework 04</div>
                            <h3 className="text-white font-bold mb-2">Product Quarterback™</h3>
                            <p className="text-zinc-500 text-sm">15+ years of methodology distilled into an executive playbook. <span className="italic">O'Reilly book in progress.</span></p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Education - Minimal, prestigious */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-6 h-0.5 bg-gold" /> Credentials
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 border border-white/10 rounded-xl hover:border-gold/30 transition group">
                            <div className="font-mono text-xs text-gold uppercase mb-1">Master of Business Administration</div>
                            <div className="text-white font-bold group-hover:text-gold transition">City University of Seattle</div>
                            <div className="text-zinc-600 text-xs mt-1">Finance Concentration</div>
                        </div>
                        <div className="p-4 border border-white/10 rounded-xl hover:border-cobalt/30 transition group">
                            <div className="font-mono text-xs text-cobalt uppercase mb-1">Bachelor of Science</div>
                            <div className="text-white font-bold group-hover:text-cobalt transition">Computer Science</div>
                            <div className="text-zinc-600 text-xs mt-1">Technical Foundation</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* CTA - Psychology: Clear next step */}
            <ScrollReveal delay={250}>
                <div className="text-center py-8 border-t border-white/10">
                    <p className="text-zinc-400 mb-4">Ready to work with a Product Economist?</p>
                    <ShineBorder borderColor="rgba(0, 240, 255, 0.6)" duration={2}>
                        <Link
                            href="/advisory"
                            className="inline-block bg-white text-black font-bold uppercase text-sm px-10 py-4 tracking-widest hover:bg-cyan-400 transition-colors"
                        >
                            View Intervention Protocols →
                        </Link>
                    </ShineBorder>
                </div>
            </ScrollReveal>
        </div>
    );
}
