'use client';

import { useState } from 'react';
import { GatewayCard } from '../components/gateway-card';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';

const MarginCalculator = () => {
    const [rev, setRev] = useState('');
    const [cogs, setCogs] = useState('');
    const [ppl, setPpl] = useState('');
    const [margin, setMargin] = useState<number | null>(null);

    const calculate = () => {
        const r = parseFloat(rev) || 0;
        const c = parseFloat(cogs) || 0;
        const p = parseFloat(ppl) || 0;
        if (r > 0) {
            setMargin(((r - (c + p)) / r) * 100);
        }
    };

    return (
        <section className="capsule-container rounded-2xl p-6 sm:p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Margin Calculator</h2>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">// SAAS GROSS MARGINS (WITH R&D COSTS)</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                    <label htmlFor="rev" className="block text-[10px] font-mono text-zinc-400 uppercase mb-2">Total Revenue ($)</label>
                    <input
                        id="rev"
                        type="number"
                        value={rev}
                        placeholder="100000"
                        onChange={(e) => { setRev(e.target.value); calculate(); }}
                        className="w-full bg-black border border-white/20 rounded-lg p-3 text-white font-mono focus:border-cyan-400 outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="cogs" className="block text-[10px] font-mono text-zinc-400 uppercase mb-2">Hosting/AWS Costs ($)</label>
                    <input
                        id="cogs"
                        type="number"
                        value={cogs}
                        placeholder="10000"
                        onChange={(e) => { setCogs(e.target.value); calculate(); }}
                        className="w-full bg-black border border-white/20 rounded-lg p-3 text-white font-mono focus:border-cyan-400 outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="ppl" className="block text-[10px] font-mono text-red-500 uppercase mb-2">Support & Maint. ($)</label>
                    <input
                        id="ppl"
                        type="number"
                        value={ppl}
                        placeholder="50000"
                        onChange={(e) => { setPpl(e.target.value); calculate(); }}
                        className="w-full bg-black border border-red-900/50 rounded-lg p-3 text-white font-mono focus:border-red-500 outline-none transition-colors"
                    />
                </div>
            </div>

            <div className="bg-black p-4 sm:p-6 rounded-lg border border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                    <div className="text-xs font-mono text-zinc-500 uppercase">Gross Margin</div>
                    <div className={`text-3xl sm:text-4xl font-bold font-mono ${margin !== null && margin < 60 ? 'text-red-500' : 'text-cyan-400'}`}>
                        {margin !== null ? margin.toFixed(1) + '%' : '--%'}
                    </div>
                </div>
                {margin !== null && margin < 60 && (
                    <a href="/advisory" className="px-6 py-3 bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-red-500 transition-all">
                        Fix Your Margins →
                    </a>
                )}
            </div>
        </section>
    );
};

export default function SystemPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Intelligence</span><span>/</span><span className="text-white font-bold">System</span>
            </div>

            <ScrollReveal>
                <div className="mb-12">
                    <header className="mb-8">
                        <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-xs font-mono uppercase tracking-widest mb-4 rounded-full text-cyan-400">
                            The Operating System
                        </div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6">
                            Algorithmic <br /><span className="text-zinc-600">Solvency.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
                            Most product organizations are black boxes of capital consumption. The Product Economist uses two proprietary frameworks to force financial transparency.
                        </p>
                    </header>

                    {/* APER Section */}
                    <section id="aper" className="mb-12">
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
                                    <a href="/canonical/aper.html" className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-cyan-500/20 transition">View PDF →</a>
                                    <a href="/canonical/aper-diagnostic.html" className="px-4 py-2 bg-zinc-900/50 border border-white/10 text-zinc-400 text-xs font-mono uppercase tracking-widest rounded-lg hover:text-white transition">Interactive Engine</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollReveal>

            {/* Margin Calculator */}
            <ScrollReveal delay={100}>
                <MarginCalculator />
            </ScrollReveal>

            {/* PDI Engine Gateway */}
            <ScrollReveal delay={200}>
                <section className="mb-12 py-6 border-t border-white/5">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl sm:text-4xl font-mono text-zinc-700 font-bold">02</div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Product Debt Index™</h2>
                            <p className="font-mono text-xs text-red-500 tracking-widest uppercase mt-1">// PDI-2026 STANDARD</p>
                        </div>
                    </div>
                    <GatewayCard
                        title="Launch PDI Forensic Engine"
                        href="/tools/pdi"
                        color="red"
                        description="Quantify Technical Debt"
                    />
                </section>
            </ScrollReveal>

            {/* Q-PEP Section */}
            <ScrollReveal delay={300}>
                <section id="qpep" className="mb-12 border-t border-white/5 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 sm:gap-6">
                        <div className="text-3xl sm:text-4xl font-mono text-zinc-700 font-bold">03</div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Q-PEP™ Protocol</h2>
                            <p className="font-mono text-xs text-cobalt tracking-widest uppercase mb-6">// QUALITATIVE-PROFITABILITY EFFICIENCY PROTOCOL</p>
                            <p className="text-zinc-400 mb-6 text-base sm:text-lg">
                                The framework for turnaround. Once leakage is identified (APER), Q-PEP is the surgery. It restructures the "Product Org" into an "Investment Portfolio."
                            </p>
                            <ul className="space-y-3 font-mono text-xs sm:text-sm tracking-wide text-zinc-300">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 1: Kill the "Maybe" Features</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 2: CapEx vs. OpEx Re-Classification</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-cobalt rounded-full" />PHASE 3: The "Win Locker" Implementation</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
}
