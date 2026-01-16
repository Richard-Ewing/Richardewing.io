import type { Metadata } from "next";
import Link from "next/link";
import { MarginCalculator } from "@/components/MarginCalculator";
import { PDIEngine } from "@/components/PDIEngine";

export const metadata: Metadata = {
    title: "The System | Q-PEP & APER Methodology",
    description: "The Product Economist's proprietary operating system for engineering solvency. The APER Diagnostic and Q-PEP Protocol.",
};

export default function System() {
    return (
        <>
            <div className="mb-8 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-zinc-400">Intelligence</span>
                <span>/</span>
                <span className="text-white font-bold">System</span>
            </div>

            <div className="inline-block bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono uppercase tracking-widest mb-6 rounded-full text-cyan">
                The Operating System
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter mb-8">
                Algorithmic <br /><span className="text-zinc-600">Solvency.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
                Most product organizations are black boxes of capital consumption. The Product Economist uses two
                proprietary frameworks to force financial transparency.
            </p>

            <section id="aper" className="mb-32">
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8">
                    <div className="text-4xl font-mono text-zinc-700 font-bold">01</div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">APER&trade; Diagnostic</h2>
                        <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-8">// ACTIONABLE PRODUCT ECONOMIC REVIEW</p>

                        <p className="text-zinc-400 mb-8 text-lg">
                            A 14-day forensic audit of your engineering throughput. We do not look at Jira points. We
                            look at the "Cost of Goods Sold" (COGS) relative to feature adoption.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="bg-surface border border-white/10 p-6 rounded-xl">
                                <div className="text-white font-bold mb-2">Revenue Per Employee</div>
                                <div className="text-xs text-zinc-500">The North Star metric. If this is flat while headcount grows, you are dying.</div>
                            </div>
                            <div className="bg-surface border border-white/10 p-6 rounded-xl">
                                <div className="text-white font-bold mb-2">Feature ROI</div>
                                <div className="text-xs text-zinc-500">Connecting AWS costs directly to specific product features.</div>
                            </div>
                            <div className="bg-surface border border-white/10 p-6 rounded-xl">
                                <div className="text-white font-bold mb-2">The Zombie Index</div>
                                <div className="text-xs text-zinc-500">Identifying code that consumes maintenance capital but generates zero revenue.</div>
                            </div>
                        </div>

                        <Link href="/canonical/aper.html" className="inline-flex items-center text-sm font-mono uppercase tracking-widest text-white hover:text-cyan transition-colors border-b border-white/20 pb-1">
                            Read the Technical Paper &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            <MarginCalculator />

            <PDIEngine />

            <section id="qpep" className="mb-32 border-t border-white/5 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8">
                    <div className="text-4xl font-mono text-zinc-700 font-bold">02</div>
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Q-PEP&trade; Protocol</h2>
                        <p className="font-mono text-xs text-cobalt tracking-widest uppercase mb-8">// QUALITATIVE-PROFITABILITY EFFICIENCY PROTOCOL</p>

                        <p className="text-zinc-400 mb-8 text-lg">
                            The framework for turnaround. Once leakage is identified (APER), Q-PEP is the surgery. It
                            restructures the "Product Org" into an "Investment Portfolio."
                        </p>

                        <ul className="space-y-4 mb-8 font-mono text-xs tracking-wide text-zinc-300">
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-cobalt rounded-full"></span>
                                PHASE 1: Kill the "Maybe" Features (Inventory Flush)
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-cobalt rounded-full"></span>
                                PHASE 2: CapEx vs. OpEx Re-Classification
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="w-2 h-2 bg-cobalt rounded-full"></span>
                                PHASE 3: The "Win Locker" Implementation
                            </li>
                        </ul>

                        <Link href="/canonical/q-pep.html" className="inline-flex items-center text-sm font-mono uppercase tracking-widest text-white hover:text-cobalt transition-colors border-b border-white/20 pb-1">
                            View the Implementation Guide &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
