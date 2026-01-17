
'use client';

import { useState } from 'react';
import { GatewayCard } from '../components/gateway-card';

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
        <section className="mb-24 py-12 px-8 bg-black/40 border border-white/5 rounded-3xl relative overflow-hidden backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-2">Margin Calculator</h2>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-8">// SAAS GROSS MARGINS (WITH R&D COSTS)</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-2">Total Revenue ($)</label>
                    <input type="number" value={rev} onChange={(e) => { setRev(e.target.value); calculate(); }}
                        className="w-full bg-black border border-white/20 rounded p-3 text-white font-mono focus:border-cyan-400 outline-none" />
                </div>
                <div>
                    <label className="block text-[10px] font-mono text-zinc-400 uppercase mb-2">Hosting/AWS Costs ($)</label>
                    <input type="number" value={cogs} onChange={(e) => { setCogs(e.target.value); calculate(); }}
                        className="w-full bg-black border border-white/20 rounded p-3 text-white font-mono focus:border-cyan-400 outline-none" />
                </div>
                <div>
                    <label className="block text-[10px] font-mono text-red-500 uppercase mb-2">Support & Maint. Salaries ($)</label>
                    <input type="number" value={ppl} onChange={(e) => { setPpl(e.target.value); calculate(); }}
                        className="w-full bg-black border border-red-900/50 rounded p-3 text-white font-mono focus:border-red-500 outline-none" />
                </div>
            </div>

            <div className="bg-black p-6 rounded-lg border border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <div className="text-xs font-mono text-zinc-500 uppercase">Gross Margin</div>
                    <div className={`text-4xl font-bold font-mono ${margin !== null && margin < 60 ? 'text-red-500' : 'text-cyan-400'}`}>
                        {margin !== null ? margin.toFixed(1) + '%' : '--%'}
                    </div>
                </div>
                {margin !== null && margin < 60 && (
                    <a href="/advisory" className="px-6 py-3 bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-red-500 transition-all">
                        Fix Your Margins &rarr;
                    </a>
                )}
            </div>
        </section>
    );
};

export default function SystemPage() {
    return (
        <div className="max-w-4xl w-full z-10 animate-fade-in-up">
            <div className="mb-8 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Intelligence</span><span>/</span><span className="text-white font-bold">System</span>
            </div>

            <div className="mb-24">
                <header className="mb-16">
                    <div className="inline-block bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono uppercase tracking-widest mb-6 rounded-full text-cyan-400">
                        The Operating System
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter mb-8">
                        Algorithmic <br /><span className="text-zinc-600">Solvency.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Most product organizations are black boxes of capital consumption. The Product Economist uses two proprietary frameworks to force financial transparency.
                    </p>
                </header>

                {/* APER Section */}
                <section id="aper">
                    <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8">
                        <div className="text-4xl font-mono text-zinc-700 font-bold">01</div>
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">APER&trade; Diagnostic</h2>
                            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-8">// ACTIONABLE PRODUCT ECONOMIC REVIEW</p>
                            <p className="text-zinc-400 mb-8 text-lg">
                                A 14-day forensic audit of your engineering throughput. We do not look at Jira points. We look at the "Cost of Goods Sold" (COGS) relative to feature adoption.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
                                    <div className="text-white font-bold mb-2">Revenue Per Employee</div>
                                    <div className="text-xs text-zinc-500">The North Star metric. If this is flat while headcount grows, you are dying.</div>
                                </div>
                                <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
                                    <div className="text-white font-bold mb-2">Feature ROI</div>
                                    <div className="text-xs text-zinc-500">Connecting AWS costs directly to specific product features.</div>
                                </div>
                                <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl">
                                    <div className="text-white font-bold mb-2">The Zombie Index</div>
                                    <div className="text-xs text-zinc-500">Identifying code that consumes maintenance capital but generates zero revenue.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Margin Calculator */}
            <MarginCalculator />

            {/* PDI Engine Gateway */}
            <section className="mb-12 py-8 px-6 border-t border-white/5">
                <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-mono text-zinc-700 font-bold">02</div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Product Debt Index™</h2>
                        <p className="font-mono text-xs text-red-500 tracking-widest uppercase mt-2">// PDI-2026 STANDARD</p>
                    </div>
                </div>

                <GatewayCard
                    title="Launch PDI Forensic Engine"
                    href="/tools/pdi"
                    color="red"
                    description="Quantify Technical Debt"
                />
            </section>

            {/* Q-PEP Section */}
            <section id="qpep" className="mb-12 border-t border-white/5 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8">
                    <div className="text-4xl font-mono text-zinc-700 font-bold">03</div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Q-PEP&trade; Protocol</h2>
                        <p className="font-mono text-xs text-cobalt tracking-widest uppercase mb-8">// QUALITATIVE-PROFITABILITY EFFICIENCY PROTOCOL</p>
                        <p className="text-zinc-400 mb-8 text-lg">
                            The framework for turnaround. Once leakage is identified (APER), Q-PEP is the surgery. It restructures the "Product Org" into an "Investment Portfolio."
                        </p>
                        <ul className="space-y-4 mb-8 font-mono text-xs tracking-wide text-zinc-300">
                            <li className="flex items-center gap-4"><span className="w-2 h-2 bg-cobalt rounded-full"></span>PHASE 1: Kill the "Maybe" Features</li>
                            <li className="flex items-center gap-4"><span className="w-2 h-2 bg-cobalt rounded-full"></span>PHASE 2: CapEx vs. OpEx Re-Classification</li>
                            <li className="flex items-center gap-4"><span className="w-2 h-2 bg-cobalt rounded-full"></span>PHASE 3: The "Win Locker" Implementation</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    );
}
