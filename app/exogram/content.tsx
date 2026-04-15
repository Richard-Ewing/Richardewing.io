'use client';

import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import NumberTicker from '../components/magicui/number-ticker';
import ShineBorder from '../components/magicui/shine-border';
import { Activity, Cpu, Database, GitCommit, Server, Shield } from 'lucide-react';

export default function ExogramPage() {
    return (
        <div className="max-w-6xl w-full relative z-10">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="mb-12">
                <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                    <span>Intelligence</span><span>/</span><span className="text-purple-900 font-extrabold font-semibold font-bold">Exogram</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                    Active <span className="text-purple-500">Projects.</span>
                </h1>
                <p className="text-lg text-zinc-900 max-w-2xl leading-relaxed">
                    A live window into the internal tools and systems I build to power my practice.
                    This is "Dogfooding" as a service.
                </p>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Primary Project: Exogram */}
                <div className="lg:col-span-2 space-y-8">
                    <ScrollReveal>
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-40 transition blur duration-500" />
                            <div className="relative bg-white rounded-xl p-8 border border-zinc-400">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">Exogram</h2>
                                            <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold font-medium font-mono uppercase tracking-widest rounded-full flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                Online
                                            </div>
                                        </div>
                                        <p className="text-zinc-950 text-sm font-semibold font-mono uppercase tracking-widest">Autonomous Research Agent</p>
                                    </div>
                                    <Cpu className="w-8 h-8 text-purple-500" />
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                    <div className="p-4 bg-white/5 rounded-lg border border-zinc-400">
                                        <div className="text-xs font-bold text-zinc-950 font-mono uppercase mb-1">Context Window</div>
                                        <div className="text-xl font-bold text-zinc-950 font-grotesk"><NumberTicker value={200} suffix="k" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400" /></div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg border border-zinc-400">
                                        <div className="text-xs font-bold text-zinc-950 font-mono uppercase mb-1">Memory Nodes</div>
                                        <div className="text-xl font-bold text-zinc-950 font-grotesk"><NumberTicker value={14205} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400" /></div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg border border-zinc-400">
                                        <div className="text-xs font-bold text-zinc-950 font-mono uppercase mb-1">Daily Inops</div>
                                        <div className="text-xl font-bold text-zinc-950 font-grotesk"><NumberTicker value={140} className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400" /></div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-lg border border-zinc-400">
                                        <div className="text-xs font-bold text-zinc-950 font-mono uppercase mb-1">Uptime</div>
                                        <div className="text-xl font-bold text-green-400 font-grotesk">99.9%</div>
                                    </div>
                                </div>

                                {/* Terminal Output / Log */}
                                <div className="bg-white border border-zinc-400 rounded-lg p-4 font-mono text-xs font-bold h-40 overflow-hidden relative">
                                    <div className="absolute top-2 right-2 flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                                    </div>
                                    <div className="space-y-1 text-zinc-900 opacity-70">
                                        <div><span className="text-purple-500">➜</span> [SYSTEM] Initializing semantic index...</div>
                                        <div><span className="text-purple-500">➜</span> [MEMORY] Loaded 14,205 nodes from vector store</div>
                                        <div><span className="text-purple-500">➜</span> [AGENT] Watching for market signals...</div>
                                        <div><span className="text-green-500">✓</span> [SUCCESS] Ingestion completed in 420ms</div>
                                        <div className="animate-pulse"><span className="text-purple-500">➜</span> _</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>


                </div>

                {/* Sidebar / Changelog */}
                <div className="space-y-6">
                    <ScrollReveal delay={200}>
                        <div className="p-6 rounded-xl border border-zinc-400 bg-white/5">
                            <h3 className="text-sm font-semibold font-bold text-zinc-950 font-grotesk uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-gold" /> System Status
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-zinc-950 font-bold">API Gateway</span>
                                    <span className="text-green-400">Operational</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-zinc-950 font-bold">Vector DB</span>
                                    <span className="text-green-400">Operational</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-zinc-950 font-bold">Inference</span>
                                    <span className="text-yellow-900 font-extrabold font-semibold">High Load</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-zinc-950 font-bold">Storage</span>
                                    <span className="text-green-400">Operational</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="p-6 rounded-xl border border-zinc-400 bg-white/5">
                            <h3 className="text-sm font-semibold font-bold text-zinc-950 font-grotesk uppercase tracking-widest mb-6">Recent Deployments</h3>
                            <div className="relative border-l border-zinc-400 ml-2 space-y-8">
                                <div className="pl-6 relative">
                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-black" />
                                    <div className="text-xs font-bold text-zinc-900 font-bold font-mono mb-1">Today, 09:42 AM</div>
                                    <div className="text-zinc-950 font-bold text-sm">Exogram v1.0.4</div>
                                    <p className="text-xs font-bold text-zinc-950 mt-1">Improved context retrieval algorithms and semantic index.</p>
                                </div>
                                <div className="pl-6 relative">
                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-black" />
                                    <div className="text-xs font-bold text-zinc-900 font-bold font-mono mb-1">Yesterday</div>
                                    <div className="text-zinc-950 font-bold text-sm">System UI Update</div>
                                    <p className="text-xs font-bold text-zinc-950 mt-1">Deployed High Contrast theme and new stats components.</p>
                                </div>
                                <div className="pl-6 relative">
                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-700 ring-4 ring-black" />
                                    <div className="text-xs font-bold text-zinc-950 font-mono mb-1">2 days ago</div>
                                    <div className="text-zinc-950 font-bold text-sm">Security Patch</div>
                                    <p className="text-xs font-bold text-zinc-950 mt-1">Routine dependency updates.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
