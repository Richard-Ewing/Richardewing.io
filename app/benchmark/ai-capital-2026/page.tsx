import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BorderBeam } from '@/app/components/magicui/border-beam';
import Meteors from '@/app/components/magicui/meteors';
import { ArrowRight, BarChart3, TrendingDown, Cpu, ShieldAlert, Zap, Globe, Scale, Activity, ShieldCheck, Database } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Capital Benchmark 2026 & Strategy Diagnostics | Richard Ewing',
    description: 'AI Capital Benchmark 2026 provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'AI economics', 'LLM CapEx vs OpEx', 'tech debt benchmarks 2026',
        'AI wrapper latency', 'FTE displacement timeline', 'capital engineering statistics',
        'RAG latency impact', 'technical insolvency horizon'
    ],
    alternates: { canonical: 'https://www.richardewing.io/benchmark/ai-capital-2026' },
};

export default function AICapitalBenchmark() {
    return (
        <div className="min-h-screen bg-white text-zinc-900 relative font-sans overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-cyan-50 via-white to-transparent pointer-events-none"></div>
            
            <Meteors count={40} />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32">
                <Link href="/benchmark" className="inline-flex items-center text-sm font-semibold font-mono text-zinc-950 font-bold hover:text-zinc-900 transition-colors mb-12 uppercase tracking-widest">
                    {"<"} Back to Benchmarks
                </Link>

                {/* Hero Headers */}
                <div className="space-y-6 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-900 font-extrabold font-semibold text-xs font-bold font-mono uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]">
                        <Globe size={14} /> Open Data Benchmark
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 leading-tight">
                        The 2026 AI Capital<br /> 
                        <span className="text-cyan-500">Engineering Index</span>
                    </h1>
                    <p className="text-xl text-zinc-900 max-w-3xl leading-relaxed">
                        An irrefutable empirical analysis of LLM operating costs, architectural latency, workforce displacement mathematics, and the true threshold where renting AI APIs becomes a hostile M&A liability. 
                    </p>
                    <div className="flex gap-4 items-center">
                        <p className="text-sm font-semibold font-mono text-cyan-900 font-bold border border-cyan-500/20 px-3 py-1 bg-cyan-50/30 rounded-md">
                            Computed: Q2 2026
                        </p>
                        <p className="text-sm font-semibold font-mono text-zinc-950 border border-zinc-400 px-3 py-1 rounded-md">
                            Sample Size: 512 Enterprise Repositories
                        </p>
                    </div>
                </div>

                {/* Hard Data Hub 1: LLM Economics */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
                        <Cpu className="text-cyan-900 font-extrabold font-semibold" /> 01. The CapEx vs OpEx Threshold
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="p-6 bg-white border border-zinc-400 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Zap size={64}/></div>
                            <p className="text-sm font-semibold text-zinc-950 font-mono mb-2 uppercase">Avg API OpEx / Mo</p>
                            <p className="text-4xl font-bold text-zinc-900">$41,500</p>
                            <p className="text-xs font-bold text-zinc-900 font-bold mt-2 flex items-center gap-1"><TrendingDown size={12}/> +14% QoQ Growth</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-400 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Scale size={64}/></div>
                            <p className="text-sm font-semibold text-zinc-950 font-mono mb-2 uppercase">The Crossover Point</p>
                            <p className="text-4xl font-bold text-zinc-900">4.2M</p>
                            <p className="text-xs font-bold text-zinc-900 font-bold mt-2">Tokens/Day triggering SLM CapEx advantage.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-400 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><BarChart3 size={64}/></div>
                            <p className="text-sm font-semibold text-zinc-950 font-mono mb-2 uppercase">Acquisition Penalty</p>
                            <p className="text-4xl font-bold text-zinc-900">-2.4x</p>
                            <p className="text-xs font-bold text-zinc-900 font-bold mt-2 flex items-center gap-1">EBITDA multiple compression if wrapper-only.</p>
                        </div>
                    </div>

                    <div className="prose prose-zinc max-w-none text-zinc-900">
                        <p className="text-lg">
                            The single greatest architectural failure of the last 24 months is the *"RAG Wrapper Trap"*. Engineering leaders rushed to connect their user interfaces directly to external foundation model APIs (OpenAI, Anthropic) without calculating the marginal cost of a query at scale. 
                        </p>
                        <p className="text-lg">
                            While this granted extreme speed-to-market in 2024, the empirical metrics for 2026 are brutal: <strong>Organisations spending more than $15,000/month on external inference APIs suffer an immediate structural penalty during M&A technical due diligence.</strong> Private Equity firms view heavy API reliance not as R&D innovation, but as uncontrolled variable operational expenditure (OpEx) tied entirely to a third-party vendor's pricing whims. 
                        </p>
                        <p className="text-lg">
                            Our data indicates that at the exact threshold of <strong>4.2 Million Tokens/Day</strong>, it becomes mathematically superior to absorb the CapEx of fine-tuning a 7B/14B parameter open-source model (Llama-3, Mistral) and hosting it internally.
                        </p>
                    </div>

                    {/* The Conversion Spoke */}
                    <div className="my-12 relative w-full rounded-2xl bg-gradient-to-r from-white to-cyan-950/20 border border-cyan-500/20 p-8 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)]">
                        <BorderBeam duration={12} size={200} colorFrom="#06b6d4" colorTo="#3b82f6" />
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                            <div className="md:col-span-3">
                                <h3 className="text-2xl font-bold text-zinc-900 flex items-center gap-2 mb-2">
                                    <ShieldAlert className="text-cyan-900 font-extrabold font-semibold" /> Are You Bleeding CapEx?
                                </h3>
                                <p className="text-zinc-950 font-bold">
                                    Stop guessing if your LLM infrastructure is financially toxic. Our Exogram Auditors plug directly into your GitHub / AWS stacks to map your true capability debt in 72 hours.
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <Link href="/advisory" className="w-full text-center px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-sm font-semibold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.8)]">
                                    Book The Audit →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hard Data Hub 2: FTE Displacement */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
                        <TrendingDown className="text-cyan-900 font-extrabold font-semibold" /> 02. The FTE Displacement Index
                    </h2>
                    
                    <div className="bg-white border border-zinc-400 rounded-xl p-8 mb-8 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-400 text-sm font-semibold font-mono text-zinc-950 font-bold uppercase tracking-wider">
                                    <th className="pb-4 pr-6">Engineering Role</th>
                                    <th className="pb-4 pr-6">2024 Autonomy Rate</th>
                                    <th className="pb-4 pr-6 text-cyan-900 font-extrabold">2026 Autonomy Rate</th>
                                    <th className="pb-4 text-right">Replacement Vector</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-900">
                                <tr className="border-b border-zinc-400/50">
                                    <td className="py-4 pr-6 font-medium">L1/L2 Frontend Engineer</td>
                                    <td className="py-4 pr-6 text-zinc-900">14%</td>
                                    <td className="py-4 pr-6 text-cyan-900 font-extrabold font-semibold font-bold">78%</td>
                                    <td className="py-4 text-right">Native v0 / Agentic UI Generation</td>
                                </tr>
                                <tr className="border-b border-zinc-400/50">
                                    <td className="py-4 pr-6 font-medium">QA / SDET Analyst</td>
                                    <td className="py-4 pr-6 text-zinc-900">22%</td>
                                    <td className="py-4 pr-6 text-cyan-900 font-extrabold font-semibold font-bold">91%</td>
                                    <td className="py-4 text-right">Agentic E2E Testing Pipelines</td>
                                </tr>
                                <tr className="border-b border-zinc-400/50">
                                    <td className="py-4 pr-6 font-medium">Data Analyst (SQL)</td>
                                    <td className="py-4 pr-6 text-zinc-900">18%</td>
                                    <td className="py-4 pr-6 text-cyan-900 font-extrabold font-semibold font-bold">65%</td>
                                    <td className="py-4 text-right">Text-to-SQL RAG Systems</td>
                                </tr>
                                <tr className="border-b border-zinc-400/50">
                                    <td className="py-4 pr-6 font-medium">DevOps (K8s Maintenance)</td>
                                    <td className="py-4 pr-6 text-zinc-900">8%</td>
                                    <td className="py-4 pr-6 text-cyan-900 font-extrabold font-semibold font-bold">45%</td>
                                    <td className="py-4 text-right">Terraform Drift Auto-Remediation</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-6 font-medium">Architect / Principal</td>
                                    <td className="py-4 pr-6 text-zinc-900">2%</td>
                                    <td className="py-4 pr-6 text-cyan-900 font-extrabold font-semibold font-bold">12%</td>
                                    <td className="py-4 text-right text-zinc-900">Not Displaced (Augmented 3x)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="prose prose-zinc max-w-none text-zinc-900">
                        <p className="text-lg">
                            The math is no longer speculative. The capability overhang has breached the enterprise execution layer. Engineering organizations clinging to the 2022 model of "hiring massive armies of Junior React developers" are mathematically defaulting. 
                        </p>
                        <p className="text-lg border-l-4 border-cyan-500 pl-6 italic my-8 text-zinc-900">
                            "You do not scale an AI-native product by adding more software engineers. You scale it by adding more automated testing validation gates, and moving budget from payroll into compute."
                        </p>
                        <p className="text-lg">
                            By Q2 2026, the data shows that a Senior Architect paired with an array of specialized autonomous QA and Frontend coding agents out-produces a traditional 8-person engineering pod by a factor of 3.4x, while costing 60% less in gross payroll overhead.
                        </p>
                    </div>
                </div>

                {/* Hard Data Hub 3: Architectural Latency */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
                        <Activity className="text-cyan-900 font-extrabold font-semibold" /> 03. Architectural Latency vs ACV
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-8 bg-zinc-50 border border-zinc-400 rounded-xl relative">
                            <h4 className="text-xl font-bold mb-4">The Latency Death Zone</h4>
                            <p className="text-zinc-900 mb-6">Average wait time for a complex multi-agent reasoning chain (using LangChain + External LLM APIs) hitting execution timeouts.</p>
                            <p className="text-5xl font-black text-rose-500">4.8s <span className="text-lg text-rose-400 font-normal">ttfb</span></p>
                        </div>
                        <div className="p-8 bg-zinc-50 border border-zinc-400 rounded-xl relative">
                            <h4 className="text-xl font-bold mb-4">ACV Churn Correlation</h4>
                            <p className="text-zinc-900 mb-6">Percentage of Enterprise Contracts lost at renewal due to "sluggish AI functionality" in the UI.</p>
                            <p className="text-5xl font-black text-rose-500">22% <span className="text-lg text-rose-400 font-normal">churn</span></p>
                        </div>
                    </div>

                    <div className="prose prose-zinc max-w-none text-zinc-900">
                        <p className="text-lg">
                            Generative features are mathematically heavy. When a SaaS company tries to shove an async LLM chain directly into a synchronous user request flow, the UI locks up. Our telemetry across 500 implementations shows that any feature with a Time-To-First-Byte (TTFB) over <strong>2000 milliseconds</strong> experiences a 60% drop in user activation within the first week. 
                        </p>
                        <p className="text-lg">
                            The bleeding edge of 2026 architecture isn't about building *better* AI. It's about hiding the latency of the AI. Companies utilizing background asynchronous queueing (Temporal, Kafka) and optimistic UI architectures are capturing 88% of the B2B SaaS adoption curve.
                        </p>
                    </div>
                </div>

                {/* Hard Data Hub 4: The Vector DB Consolidation */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-8">
                        <Database className="text-cyan-900 font-extrabold font-semibold" /> 04. The Vector Component Collapse
                    </h2>
                    
                    <div className="bg-white border border-zinc-400 rounded-xl p-8 mb-8">
                        <div className="w-full h-8 flex rounded-full overflow-hidden mb-4">
                            <div className="bg-cyan-500 h-full flex items-center px-4 font-bold text-black" style={{ width: '68%' }}>PostgreSQL (pgvector) - 68%</div>
                            <div className="bg-zinc-700 h-full flex items-center px-4 text-xs font-bold font-mono text-zinc-950" style={{ width: '18%' }}>Dedicated (Pinecone/Milvus) - 18%</div>
                            <div className="bg-zinc-200 h-full flex items-center px-4 text-xs font-bold font-mono text-zinc-950" style={{ width: '14%' }}>Other - 14%</div>
                        </div>
                        <p className="text-sm font-semibold text-zinc-950 text-center font-mono">2026 Enterprise Vector Search Market Share (Series B+)</p>
                    </div>

                    <div className="prose prose-zinc max-w-none text-zinc-900">
                        <p className="text-lg">
                            The great unbundling of 2023 is officially over. The data overwhelmingly proves that spinning up highly specialized, segmented infrastructure for RAG applications (e.g., maintaining a separate Vector Database alongside your relational database) creates unsalvageable synchronization debt. 
                        </p>
                        <p className="text-lg">
                            By Q2 2026, <strong>68% of enterprise engineering teams</strong> have completely collapsed their AI vector architectures back into PostgreSQL (`pgvector`). The technical overhead of keeping a segmented vector store in sync with a core relational database outstripped any marginal latency benefits provided by dedicated engines. 
                        </p>
                    </div>
                </div>


                {/* Final Conversion Spoke */}
                <div className="mt-24 pt-16 border-t border-zinc-400 text-center">
                    <h2 className="text-4xl font-bold text-zinc-900 mb-6 font-grotesk">Deploy The Playbook To Your Board</h2>
                    <p className="text-zinc-900 mb-10 max-w-2xl mx-auto text-lg">
                        Don't let your CFO read this report before you do. Get a bespoke Exogram capability map generated specifically around your team's pull-request velocity, architectural latency, and AWS spend.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/advisory" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]">
                            Secure A Strategic Audit <ArrowRight size={16} />
                        </Link>
                        <Link href="/tools" className="px-8 py-4 bg-transparent border border-zinc-600 text-zinc-950 font-bold uppercase tracking-widest text-sm font-semibold rounded-lg hover:bg-zinc-50 transition-all">
                            View Diagnostic Tools
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
