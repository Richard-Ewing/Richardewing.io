'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';
import { NumberTicker } from '../components/magicui/number-ticker';

export default function AdvisoryPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Intervention</span><span>/</span><span className="text-danger font-bold">Advisory</span>
            </div>

            {/* Hero */}
            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

                    <div className="relative">
                        {/* Urgency Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-danger rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-danger uppercase tracking-widest">Limited Availability • Q1 2026</span>
                        </div>

                        <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] mb-4 block">Access Levels</span>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                            Intervention<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Protocols.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
                            I don't do "consulting theater." These are surgical interventions designed to stop the bleeding and install permanent capital discipline.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-cyan-400"><NumberTicker value={200} suffix="%" /></div>
                                <div className="text-[10px] font-mono text-zinc-500 uppercase">Avg Revenue Lift</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-white"><NumberTicker value={14} /></div>
                                <div className="text-[10px] font-mono text-zinc-500 uppercase">Days to Diagnosis</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-gold"><NumberTicker value={9} suffix="x" /></div>
                                <div className="text-[10px] font-mono text-zinc-500 uppercase">Avg ROI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Service Levels */}
            <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                    {/* Level 01 */}
                    <GlowCard className="p-6 relative overflow-hidden" glowColor="cyan">
                        <div className="absolute top-0 right-0 bg-cyan-500/10 text-cyan-400 px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-bl-lg">
                            Most Popular
                        </div>
                        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-white/10 mt-4">
                            Level 01 • Retainer
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Fractional CPO</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Embed as interim Chief Product Officer. Restructure org chart, roadmap governance, and capital allocation.
                        </p>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold text-white">$25k</span>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest mb-1">/ Month</span>
                        </div>
                    </GlowCard>

                    {/* Level 02 */}
                    <GlowCard className="p-6" glowColor="cobalt">
                        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                            Level 02 • Audit
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Due Diligence</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Technical and economic audit of software assets for PE/VC investors pre-deal. The "Truth Report."
                        </p>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold text-white">$15k</span>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest mb-1">/ Week</span>
                        </div>
                    </GlowCard>

                    {/* Level 03 */}
                    <GlowCard className="p-6 relative overflow-hidden" glowColor="danger">
                        <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-bl-lg">
                            Highest Impact
                        </div>
                        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-white/10 mt-4">
                            Level 03 • Surgery
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Turnaround</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Full Q-PEP implementation to reverse unit-economic insolvency. The "Kill Switch" protocol.
                        </p>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold text-white">$40k</span>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest mb-1">/ Month</span>
                        </div>
                    </GlowCard>

                    {/* Level 04 */}
                    <GlowCard className="p-6" glowColor="gold">
                        <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                            Level 04 • Syllabus
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Private Workshops</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Two-day intensive workshop for your exec team. "How to stop burning cash and start printing it."
                        </p>
                        <div className="flex items-end gap-2">
                            <span className="text-3xl font-bold text-white">$15k</span>
                            <span className="text-zinc-600 text-xs uppercase tracking-widest mb-1">Per Session</span>
                        </div>
                    </GlowCard>
                </div>
            </ScrollReveal>

            {/* Tools CTA */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border-l-4 border-cyan-500">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <div>
                            <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">Free Diagnostic Tools</div>
                            <h3 className="text-xl font-bold text-white">Try Before You Buy</h3>
                            <p className="text-zinc-400 text-sm mt-2">Run a free audit on your backlog or valuation scenarios.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/tools" className="px-4 py-2 bg-white/10 border border-white/20 text-white text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-white/20 transition">
                                All Tools →
                            </Link>
                            <Link href="/tools/pdi" className="px-4 py-2 bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-red-600/30 transition">
                                Debt Audit →
                            </Link>
                            <Link href="/tools/aueb" className="px-4 py-2 bg-violet-500/20 border border-violet-500/40 text-violet-400 text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-violet-500/30 transition">
                                AI Costs →
                            </Link>
                            <Link href="/tools/aper" className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-yellow-500/30 transition">
                                Team Efficiency →
                            </Link>
                            <Link href="/tools/scoring" className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-emerald-500/30 transition">
                                Audit Interview →
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Contact Section */}
            <ScrollReveal delay={300}>
                <section className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10">
                    <div className="text-center mb-8">
                        <span className="font-mono text-cyan-500 text-xs uppercase tracking-widest mb-2 block">Direct Line</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Initiate Protocol</h2>
                        <p className="text-zinc-400">Schedule a 30-minute diagnostic call. No pitch deck, no upsell.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <a href="mailto:richardewing1@gmail.com" className="p-4 border border-white/10 rounded-xl text-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition group">
                            <div className="text-2xl mb-2">✉️</div>
                            <div className="text-white font-bold text-sm group-hover:text-cyan-400 transition">Email</div>
                            <div className="text-zinc-500 text-xs font-mono mt-1">richardewing1@gmail.com</div>
                        </a>
                        <a href="tel:+13604806052" className="p-4 border border-white/10 rounded-xl text-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition group">
                            <div className="text-2xl mb-2">📞</div>
                            <div className="text-white font-bold text-sm group-hover:text-cyan-400 transition">Phone</div>
                            <div className="text-zinc-500 text-xs font-mono mt-1">(360) 480-6052</div>
                        </a>
                        <a href="https://www.linkedin.com/in/richard-ewing-mba" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-xl text-center hover:border-cyan-500/30 hover:bg-cyan-500/5 transition group">
                            <div className="text-2xl mb-2">💼</div>
                            <div className="text-white font-bold text-sm group-hover:text-cyan-400 transition">LinkedIn</div>
                            <div className="text-zinc-500 text-xs font-mono mt-1">Connect</div>
                        </a>
                    </div>

                    <div className="text-center">
                        <ShineBorder borderColor="rgba(220, 38, 38, 0.6)" duration={2}>
                            <a
                                href="mailto:richardewing1@gmail.com?subject=Advisory%20Inquiry"
                                className="inline-block bg-danger text-white font-bold uppercase text-sm px-10 py-4 tracking-widest hover:bg-red-600 transition-colors"
                            >
                                Request Intervention →
                            </a>
                        </ShineBorder>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
