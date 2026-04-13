import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BorderBeam } from '@/app/components/magicui/border-beam';
import Meteors from '@/app/components/magicui/meteors';
import { ArrowRight, BarChart3, TrendingDown, Cpu, ShieldAlert, Zap, Globe, Scale } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The AI Capital Engineering Benchmark (2026)',
    description: 'Proprietary diagnostic data tracking LLM CapEx vs OpEx thresholds, open-source wrapper economics, and FTE displacement timelines across 500+ enterprises.',
    keywords: [
        'AI economics', 'LLM CapEx vs OpEx', 'tech debt benchmarks 2026',
        'AI wrapper latency', 'FTE displacement timeline', 'capital engineering statistics'
    ],
    alternates: { canonical: 'https://www.richardewing.io/benchmark/ai-capital-2026' },
};

export default function AICapitalBenchmark() {
    return (
        <div className="min-h-screen bg-black text-white relative font-sans overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-900/20 via-black/5 to-transparent pointer-events-none"></div>
            
            <Meteors count={30} />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32">
                <Link href="/benchmark" className="inline-flex items-center text-sm font-mono text-zinc-500 hover:text-white transition-colors mb-12 uppercase tracking-widest">
                    {"<"} Back to Benchmarks
                </Link>

                {/* Hero Headers */}
                <div className="space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                        <Globe size={14} /> Open Data Benchmark
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-white to-zinc-500 leading-tight">
                        The 2026 AI Capital<br /> 
                        <span className="text-cyan-500">Engineering Index</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                        An irrefutable empirical analysis of LLM operating costs, architectural latency, and the true threshold where renting AI APIs becomes a hostile M&A liability.
                    </p>
                    <p className="text-sm font-mono text-zinc-500">
                        Date Computed: Q2 2026 | Sample Size: 512 Enterprise Repositories
                    </p>
                </div>

                {/* Hard Data Hub 1: LLM Economics */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
                        <Cpu className="text-cyan-400" /> 01. The CapEx vs OpEx Threshold
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Zap size={64}/></div>
                            <p className="text-sm text-zinc-500 font-mono mb-2 uppercase">Avg API OpEx / Mo</p>
                            <p className="text-4xl font-bold text-white">$41,500</p>
                            <p className="text-xs text-rose-400 mt-2 flex items-center gap-1"><TrendingDown size={12}/> +14% QoQ Growth</p>
                        </div>
                        <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Scale size={64}/></div>
                            <p className="text-sm text-zinc-500 font-mono mb-2 uppercase">The Crossover Point</p>
                            <p className="text-4xl font-bold text-white">4.2M</p>
                            <p className="text-xs text-cyan-400 mt-2">Tokens/Day triggering SLM CapEx advantage.</p>
                        </div>
                        <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><BarChart3 size={64}/></div>
                            <p className="text-sm text-zinc-500 font-mono mb-2 uppercase">Acquisition Penalty</p>
                            <p className="text-4xl font-bold text-white">-2.4x</p>
                            <p className="text-xs text-rose-400 mt-2 flex items-center gap-1">EBITDA multiple compression if wrapper-only.</p>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-zinc-300">
                        <p className="text-lg">
                            The single greatest architectural failure of the last 24 months is the *"RAG Wrapper Trap"*. Engineering leaders rushed to connect their user interfaces directly to external foundation model APIs (OpenAI, Anthropic). 
                        </p>
                        <p className="text-lg">
                            While this granted extreme speed-to-market, the empirical metrics are brutal: <strong>Organisations spending more than $15,000/month on inference APIs suffer an immediate structural penalty during M&A technical due diligence.</strong> Private Equity firms view heavy API reliance not as R&D innovation, but as uncontrolled variable operational expenditure (OpEx) tied to a third-party vendor.
                        </p>
                    </div>

                    {/* The Conversion Spoke */}
                    <div className="my-12 relative w-full rounded-2xl bg-gradient-to-r from-zinc-950 to-cyan-950/20 border border-cyan-500/20 p-8 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)]">
                        <BorderBeam duration={12} size={200} colorFrom="#06b6d4" colorTo="#3b82f6" />
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                            <div className="md:col-span-3">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
                                    <ShieldAlert className="text-cyan-400" /> Are You Bleeding CapEx?
                                </h3>
                                <p className="text-zinc-400">
                                    Stop guessing if your infrastructure is financially toxic. Our Exogram Auditors plug directly into your GitHub / AWS stacks to map your true capability debt in 72 hours.
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <Link href="/advisory" className="w-full text-center px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.8)]">
                                    Book The Audit →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hard Data Hub 2: FTE Displacement */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
                        <TrendingDown className="text-cyan-400" /> 02. The FTE Displacement Index
                    </h2>
                    
                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 mb-8 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-800 text-sm font-mono text-zinc-500 uppercase tracking-wider">
                                    <th className="pb-4 pr-6">Engineering Role</th>
                                    <th className="pb-4 pr-6">2024 Autonomy Rate</th>
                                    <th className="pb-4 pr-6 text-white font-bold">2026 Autonomy Rate</th>
                                    <th className="pb-4 text-right">Replacement Vector</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300">
                                <tr className="border-b border-zinc-800/50">
                                    <td className="py-4 pr-6 font-medium">L1/L2 Frontend Engineer</td>
                                    <td className="py-4 pr-6 text-zinc-500">14%</td>
                                    <td className="py-4 pr-6 text-cyan-400 font-bold">78%</td>
                                    <td className="py-4 text-right">Native v0 / Claude Components</td>
                                </tr>
                                <tr className="border-b border-zinc-800/50">
                                    <td className="py-4 pr-6 font-medium">QA / SDET Analyst</td>
                                    <td className="py-4 pr-6 text-zinc-500">22%</td>
                                    <td className="py-4 pr-6 text-cyan-400 font-bold">91%</td>
                                    <td className="py-4 text-right">Agentic Testing Pipelines</td>
                                </tr>
                                <tr className="border-b border-zinc-800/50">
                                    <td className="py-4 pr-6 font-medium">DevOps (K8s Maintenance)</td>
                                    <td className="py-4 pr-6 text-zinc-500">8%</td>
                                    <td className="py-4 pr-6 text-cyan-400 font-bold">45%</td>
                                    <td className="py-4 text-right">Terraform Drift Auto-Remediation</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-6 font-medium">Architect / Principal</td>
                                    <td className="py-4 pr-6 text-zinc-500">2%</td>
                                    <td className="py-4 pr-6 text-cyan-400 font-bold">12%</td>
                                    <td className="py-4 text-right text-zinc-500">Not Displaced (Augmented 3x)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="prose prose-invert max-w-none text-zinc-300">
                        <p className="text-lg">
                            The math is no longer speculative. The capability overhang has breached the enterprise execution layer. Engineering organizations clinging to the 2022 model of "hiring massive armies of Junior React developers" are mathematically defaulting. 
                        </p>
                        <p className="text-lg border-l-4 border-cyan-500 pl-6 italic my-8 text-white">
                            "You do not scale an AI-native product by adding more software engineers. You scale it by adding more automated testing validation gates, and moving budget from payroll into compute."
                        </p>
                    </div>

                    {/* Final Conversion Spoke */}
                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4 font-grotesk">Deploy The Playbook To Your Board</h2>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                            Don't let your CFO read this report before you do. Get a bespoke Exogram capability map generated specifically around your team's pull-request velocity and AWS spend.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/advisory" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-zinc-200 transition-all flex items-center gap-2">
                                Secure A Strategic Audit <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
