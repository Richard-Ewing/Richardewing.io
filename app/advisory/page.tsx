'use client';

import { GatewayCard } from '../components/gateway-card';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';

export default function AdvisoryPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Intervention</span><span>/</span><span className="text-white font-bold">Advisory</span>
            </div>

            {/* Hero */}
            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-12">
                    <span className="font-mono text-zinc-500 text-xs uppercase tracking-[0.3em] mb-4 block">Access Levels</span>
                    <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
                        Intervention<br />Protocols
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {/* Level 01 */}
                        <GlowCard className="p-6" glowColor="cyan">
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                                Level 01 • Retainer
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Fractional CPO</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                Embed as interim Chief Product Officer to restructure org chart and capital allocation.
                            </p>
                            <div>
                                <span className="text-white font-bold text-lg">$25k</span>
                                <span className="text-zinc-600 text-xs uppercase tracking-widest ml-2">/ Month</span>
                            </div>
                        </GlowCard>

                        {/* Level 02 */}
                        <GlowCard className="p-6" glowColor="cobalt">
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                                Level 02 • Audit
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Due Diligence</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                Technical and economic audit of software assets for PE/VC investors pre-deal.
                            </p>
                            <div>
                                <span className="text-white font-bold text-lg">$15k</span>
                                <span className="text-zinc-600 text-xs uppercase tracking-widest ml-2">/ Week</span>
                            </div>
                        </GlowCard>

                        {/* Level 03 */}
                        <GlowCard className="p-6" glowColor="danger">
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                                Level 03 • Surgery
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Turnaround</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                Q-PEP implementation to reverse unit-economic insolvency. The "Kill Switch" protocol.
                            </p>
                            <div>
                                <span className="text-white font-bold text-lg">$40k</span>
                                <span className="text-zinc-600 text-xs uppercase tracking-widest ml-2">/ Month</span>
                            </div>
                        </GlowCard>

                        {/* Level 04 */}
                        <GlowCard className="p-6" glowColor="gold">
                            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pb-2 border-b border-white/10">
                                Level 04 • Syllabus
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Private Workshops</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                Two-day intensive workshop for your exec team. "How to stop burning cash."
                            </p>
                            <div>
                                <span className="text-white font-bold text-lg">$15k</span>
                                <span className="text-zinc-600 text-xs uppercase tracking-widest ml-2">Per Session</span>
                            </div>
                        </GlowCard>
                    </div>
                </div>
            </ScrollReveal>

            {/* EVSE Gateway */}
            <ScrollReveal delay={100}>
                <section className="mb-12 py-6 border-t border-white/5">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-cyan-500/30 w-12" />
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-white">Enterprise Value Calculator</h2>
                            <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mt-1">// FINANCIAL DEFENSE MODELING</p>
                        </div>
                    </div>
                    <GatewayCard
                        title="EV Scenario Engine™"
                        href="/tools/ev-se"
                        color="cyan"
                        description="Launch Financial Defense Model"
                    />
                </section>
            </ScrollReveal>

            {/* Contact Section */}
            <ScrollReveal delay={200}>
                <section className="border-t border-white/5 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <div>
                            <span className="font-mono text-cyan-500 text-xs uppercase tracking-widest mb-2 block">Direct Line</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Initiate Protocol</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono text-zinc-400">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                                <a href="mailto:richardewing1@gmail.com" className="hover:text-white transition">richardewing1@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                                <span>(360) 480-6052</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                                <a href="https://www.linkedin.com/in/richard-ewing-mba" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
