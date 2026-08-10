'use client';


import Link from 'next/link';
import { Database } from 'lucide-react';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import ShineBorder from '../components/magicui/shine-border';




export default function SystemPage() {
    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-24">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <span>Intelligence</span><span>/</span><span className="text-zinc-950 font-bold">System</span>
            </div>

            <ScrollReveal>
                <div className="mb-8">
                    <header className="mb-8">
                        <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-xs font-bold font-mono uppercase tracking-widest mb-4 rounded-full text-cyan-900 font-extrabold font-semibold">
                            The Operating System
                        </div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tighter mb-6">
                            Algorithmic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-zinc-600">Solvency.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-900 max-w-2xl leading-relaxed">
                            Most product organizations are black boxes of capital consumption. The AI Economist uses proprietary frameworks to force <span className="text-zinc-950 font-bold">financial transparency</span>.
                        </p>
                    </header>

                    {/* Tool Cards - AI-Powered */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <GlowCard className="p-6 sm:col-span-2" glowColor="zinc">
                            <div className="flex items-center gap-2 mb-3">
                                <Database className="w-4 h-4 text-zinc-950 font-bold" />
                                <span className="font-mono text-xs font-bold font-medium text-zinc-900 uppercase tracking-widest">Board-Level Intelligence</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950 mb-2">Executive Board Room</h3>
                            <p className="text-zinc-950 text-sm font-semibold mb-4">Secure repository for your historical execution snapshots. Track margin erosion, valuation destruction, and operational drift across quarters in a unified C-Suite dashboard.</p>
                            <ShineBorder borderColor="rgba(255, 255, 255, 0.4)" duration={3}>
                                <Link href="/tools/board-room" className="block w-full text-center bg-white text-black font-bold text-xs font-bold uppercase tracking-widest py-3 hover:bg-zinc-200 transition">
                                    Enter Board Room →
                                </Link>
                            </ShineBorder>
                        </GlowCard>

                        <GlowCard className="p-6" glowColor="danger">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="font-mono text-xs font-bold font-medium text-red-900 font-extrabold font-semibold uppercase tracking-widest">AI-Powered</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950 mb-2">PDI 2.0 Engine</h3>
                            <p className="text-zinc-950 text-sm font-semibold mb-4">Product Debt Index. Forensic audit of your backlog to quantify capital leakage.</p>
                            <ShineBorder borderColor="rgba(220, 38, 38, 0.6)" duration={2}>
                                <Link href="/tools/pdi" className="block w-full text-center bg-red-600 text-zinc-950 font-semibold font-bold text-xs font-bold uppercase tracking-widest py-3 hover:bg-red-500 transition">
                                    Launch PDI →
                                </Link>
                            </ShineBorder>
                        </GlowCard>

                        <GlowCard className="p-6" glowColor="cyan">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                                <span className="font-mono text-xs font-bold font-medium text-cyan-900 font-extrabold font-semibold uppercase tracking-widest">Valuation</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950 mb-2">EV-SE Engine</h3>
                            <p className="text-zinc-950 text-sm font-semibold mb-4">Enterprise Value Scenario Engine. Quantify how execution risk destroys valuation.</p>
                            <ShineBorder borderColor="rgba(34, 211, 238, 0.6)" duration={2}>
                                <Link href="/tools/ev-se" className="block w-full text-center bg-cyan-500 text-black font-bold text-xs font-bold uppercase tracking-widest py-3 hover:bg-cyan-400 transition">
                                    Launch EV-SE →
                                </Link>
                            </ShineBorder>
                        </GlowCard>

                        <GlowCard className="p-6 sm:col-span-2" glowColor="cobalt">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse shadow-[0_0_10px_#8b5cf6]" />
                                <span className="font-mono text-xs font-bold font-medium text-violet-400 uppercase tracking-widest">Unit Economics</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950 mb-2">AUEB Engine</h3>
                            <p className="text-zinc-950 text-sm font-semibold mb-4">AI Unit Economics Benchmark. Calculate your margin collapse point with model arbitrage analysis.</p>
                            <ShineBorder borderColor="rgba(139, 92, 246, 0.6)" duration={2}>
                                <Link href="/tools/aueb" className="block w-full text-center bg-violet-600 text-zinc-950 font-semibold font-bold text-xs font-bold uppercase tracking-widest py-3 hover:bg-violet-500 transition">
                                    Launch AUEB →
                                </Link>
                            </ShineBorder>
                        </GlowCard>

                        <GlowCard className="p-6 sm:col-span-2" glowColor="emerald">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                                <span className="font-mono text-xs font-bold font-medium text-emerald-900 font-extrabold font-semibold uppercase tracking-widest">Human Capital Audit</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950 mb-2">Audit Interview</h3>
                            <p className="text-zinc-950 text-sm font-semibold mb-4">Quantify candidate judgment. Move beyond code syntax to measure capital stewardship and architectural reasoning.</p>
                            <ShineBorder borderColor="rgba(16, 185, 129, 0.6)" duration={2}>
                                <Link href="/tools/audit-interview" className="block w-full text-center bg-emerald-600 text-zinc-950 font-semibold font-bold text-xs font-bold uppercase tracking-widest py-3 hover:bg-emerald-500 transition">
                                    Launch Audit Interview →
                                </Link>
                            </ShineBorder>
                        </GlowCard>
                    </div>

                    {/* APER Diagnostic Tool Gateway */}
                    <section id="aper" className="mb-8 pt-6 border-t border-zinc-400">
                        <div className="border border-yellow-500/20 rounded-2xl p-6 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_#eab308]" />
                                        <span className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest">Interactive Tool</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-zinc-950 mb-1">APER™ Diagnostic</h3>
                                    <p className="text-zinc-900 text-sm">The &quot;Revenue Per Engineer&quot; efficiency engine. Detect overstaffing and coordination overhead instantly.</p>
                                </div>
                                <ShineBorder borderColor="rgba(234, 179, 8, 0.6)" duration={2}>
                                    <Link href="/tools/aper" className="block px-6 py-3 bg-yellow-500 text-black font-bold text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 transition whitespace-nowrap">
                                        Launch APER →
                                    </Link>
                                </ShineBorder>
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollReveal>



            {/* Q-PEP Section */}
            <ScrollReveal delay={200}>
                <section id="qpep" className="mb-8 border-t border-zinc-400 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 sm:gap-6">
                        <div className="text-3xl sm:text-4xl font-mono text-zinc-950 font-bold">02</div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-4">Q-PEP™ Protocol</h2>
                            <p className="font-mono text-xs font-bold text-cobalt tracking-widest uppercase mb-6">{"// QUALITATIVE-PROFITABILITY EFFICIENCY PROTOCOL"}</p>
                            <p className="text-zinc-900 mb-6 text-base sm:text-lg">
                                The framework for turnaround. Once leakage is identified (APER), Q-PEP is the surgery. It restructures the "Product Org" into an "Investment Portfolio."
                            </p>
                            <ul className="space-y-3 font-mono text-xs font-bold sm:text-sm font-semibold tracking-wide text-zinc-950 mb-6">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 1: Kill the "Maybe" Features</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 2: CapEx vs. OpEx Re-Classification</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 3: The "Win Locker" Implementation</li>
                            </ul>
                            <Link href="/system" className="px-4 py-2 bg-cobalt/10 border border-cobalt/30 text-cobalt text-xs font-bold font-mono uppercase tracking-widest rounded-lg hover:bg-cobalt/20 transition">View Framework →</Link>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={300}>
                <div className="text-center py-8 border-t border-zinc-400">
                    <p className="text-zinc-900 mb-6">Ready to install financial transparency?</p>
                    <ShineBorder borderColor="rgba(0, 240, 255, 0.6)" duration={2}>
                        <Link
                            href="/services"
                            className="inline-block bg-white text-black font-bold uppercase text-sm font-semibold px-10 py-4 tracking-widest hover:bg-cyan-400 transition-colors"
                        >
                            Book an Intervention →
                        </Link>
                    </ShineBorder>
                </div>
            </ScrollReveal>
        </div>
    );
}
