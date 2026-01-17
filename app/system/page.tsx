'use client';


import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { ShineBorder } from '../components/magicui/shine-border';



export default function SystemPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Intelligence</span><span>/</span><span className="text-white font-bold">System</span>
            </div>

            <ScrollReveal>
                <div className="mb-8">
                    <header className="mb-8">
                        <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-xs font-mono uppercase tracking-widest mb-4 rounded-full text-cyan-400">
                            The Operating System
                        </div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6">
                            Algorithmic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-zinc-600">Solvency.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
                            Most product organizations are black boxes of capital consumption. The Product Economist uses proprietary frameworks to force <span className="text-white font-bold">financial transparency</span>.
                        </p>
                    </header>

                    {/* Tool Cards - AI-Powered */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <GlowCard className="p-6" glowColor="danger">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest">AI-Powered</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">PDI 2.0 Engine</h3>
                            <p className="text-zinc-500 text-sm mb-4">Product Debt Index. Forensic audit of your backlog to quantify capital leakage.</p>
                            <ShineBorder borderColor="rgba(220, 38, 38, 0.6)" duration={2}>
                                <Link href="/tools/pdi" className="block w-full text-center bg-red-600 text-white font-bold text-xs uppercase tracking-widest py-3 hover:bg-red-500 transition">
                                    Launch PDI →
                                </Link>
                            </ShineBorder>
                        </GlowCard>

                        <GlowCard className="p-6" glowColor="cyan">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest">Valuation</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">EV-SE Engine</h3>
                            <p className="text-zinc-500 text-sm mb-4">Enterprise Value Scenario Engine. Quantify how execution risk destroys valuation.</p>
                            <ShineBorder borderColor="rgba(34, 211, 238, 0.6)" duration={2}>
                                <Link href="/tools/ev-se" className="block w-full text-center bg-cyan-500 text-black font-bold text-xs uppercase tracking-widest py-3 hover:bg-cyan-400 transition">
                                    Launch EV-SE →
                                </Link>
                            </ShineBorder>
                        </GlowCard>

                        <GlowCard className="p-6 sm:col-span-2" glowColor="cobalt">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse shadow-[0_0_10px_#8b5cf6]" />
                                <span className="font-mono text-[10px] text-violet-400 uppercase tracking-widest">Unit Economics</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">AUEB Engine</h3>
                            <p className="text-zinc-500 text-sm mb-4">AI Unit Economics Benchmark. Calculate your margin collapse point with model arbitrage analysis.</p>
                            <ShineBorder borderColor="rgba(139, 92, 246, 0.6)" duration={2}>
                                <Link href="/tools/aueb" className="block w-full text-center bg-violet-600 text-white font-bold text-xs uppercase tracking-widest py-3 hover:bg-violet-500 transition">
                                    Launch AUEB →
                                </Link>
                            </ShineBorder>
                        </GlowCard>
                    </div>

                    {/* APER Section */}
                    <section id="aper" className="mb-8 pt-6 border-t border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 sm:gap-6">
                            <div className="text-3xl sm:text-4xl font-mono text-zinc-700 font-bold">01</div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">APER™ Diagnostic</h2>
                                <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-6">// ACTIONABLE PRODUCT ECONOMIC REVIEW</p>
                                <p className="text-zinc-400 mb-6 text-base sm:text-lg">
                                    A 14-day forensic audit of your engineering throughput. We do not look at Jira points. We look at the "Cost of Goods Sold" (COGS) relative to feature adoption.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                    <GlowCard className="p-4" glowColor="cyan">
                                        <div className="text-white font-bold mb-2 text-sm">Revenue Per Employee</div>
                                        <div className="text-xs text-zinc-500">The North Star metric. If this is flat while headcount grows, you are dying.</div>
                                    </GlowCard>
                                    <GlowCard className="p-4" glowColor="cyan">
                                        <div className="text-white font-bold mb-2 text-sm">Feature ROI</div>
                                        <div className="text-xs text-zinc-500">Connecting AWS costs directly to specific product features.</div>
                                    </GlowCard>
                                    <GlowCard className="p-4" glowColor="cyan">
                                        <div className="text-white font-bold mb-2 text-sm">The Zombie Index</div>
                                        <div className="text-xs text-zinc-500">Identifying code that consumes maintenance capital but generates zero revenue.</div>
                                    </GlowCard>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Link href="/canonical/aper.html" className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-cyan-500/20 transition">View Framework →</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollReveal>



            {/* Q-PEP Section */}
            <ScrollReveal delay={200}>
                <section id="qpep" className="mb-8 border-t border-white/10 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 sm:gap-6">
                        <div className="text-3xl sm:text-4xl font-mono text-zinc-700 font-bold">02</div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Q-PEP™ Protocol</h2>
                            <p className="font-mono text-xs text-cobalt tracking-widest uppercase mb-6">// QUALITATIVE-PROFITABILITY EFFICIENCY PROTOCOL</p>
                            <p className="text-zinc-400 mb-6 text-base sm:text-lg">
                                The framework for turnaround. Once leakage is identified (APER), Q-PEP is the surgery. It restructures the "Product Org" into an "Investment Portfolio."
                            </p>
                            <ul className="space-y-3 font-mono text-xs sm:text-sm tracking-wide text-zinc-300 mb-6">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 1: Kill the "Maybe" Features</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 2: CapEx vs. OpEx Re-Classification</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 3: The "Win Locker" Implementation</li>
                            </ul>
                            <Link href="/canonical/q-pep.html" className="px-4 py-2 bg-cobalt/10 border border-cobalt/30 text-cobalt text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-cobalt/20 transition">View Framework →</Link>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={300}>
                <div className="text-center py-8 border-t border-white/10">
                    <p className="text-zinc-400 mb-6">Ready to install financial transparency?</p>
                    <ShineBorder borderColor="rgba(0, 240, 255, 0.6)" duration={2}>
                        <Link
                            href="/advisory"
                            className="inline-block bg-white text-black font-bold uppercase text-sm px-10 py-4 tracking-widest hover:bg-cyan-400 transition-colors"
                        >
                            Book an Intervention →
                        </Link>
                    </ShineBorder>
                </div>
            </ScrollReveal>
        </div>
    );
}
