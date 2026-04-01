'use client';

import { useState } from 'react';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import ShineBorder from '../../components/magicui/shine-border';
import { VaultUpsell } from '../../components/VaultUpsell';
import { BorderBeam } from '../../components/magicui/border-beam';
import { Network, Server, ArrowRight, ShieldCheck, Cpu, DollarSign, Lock } from 'lucide-react';
import ToolGate from '../../components/tool-gate';
import { GlowCard } from '../../components/magicui/glow-card';

// Pricing per 1M tokens (Input / Output)
const MODELS: Record<string, { in: number; out: number; name: string }> = {
    'gpt-4o': { in: 5.0, out: 15.0, name: 'GPT-4o (Frontier Core)' },
    'claude-3-5-sonnet': { in: 3.0, out: 15.0, name: 'Claude 3.5 Sonnet' },
    'gpt-4-turbo': { in: 10.0, out: 30.0, name: 'GPT-4 Turbo (Legacy)' }
};

export default function AgentRouterContent() {
    // Inputs
    const [dailyRequests, setDailyRequests] = useState(10000);
    const [baseInputTokens, setBaseInputTokens] = useState(2500); // Base system + user prompt
    const [agentHops, setAgentHops] = useState(2); // E.g., Router -> Reasoner == 1 hop; Router -> Reasoner -> Verifier == 2 hops
    const [useEdgeRouter, setUseEdgeRouter] = useState(false);
    const [model, setModel] = useState('gpt-4o');

    // UI
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<{
        grossMonthlyRequests: number;
        frontierRequests: number;
        totalTokens: number;
        monthlyCost: number;
        savingsFromRouter: number;
    } | null>(null);
    const [showGate, setShowGate] = useState(false);

    const runSimulation = async () => {
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1000));
            const selectedModel = MODELS[model];

            const grossMonthlyRequests = dailyRequests * 30;
            
            // SLM Router heuristic: A local Llama3-8B Router handles 60% of base requests (FAQ, simple extraction, rejection of prompt injections) natively at ZERO API cost.
            const frontierRequests = useEdgeRouter ? Math.round(grossMonthlyRequests * 0.4) : grossMonthlyRequests;
            const routerPreventedRequests = grossMonthlyRequests - frontierRequests;

            let cumulativeCost = 0;
            let cumulativeTokens = 0;

            // Model compounding per hop
            // Hop 0: Base Request
            let currentInputTokens = baseInputTokens;
            let currentOutputTokens = Math.round(baseInputTokens * 0.2); // Average generation is 20% of input size

            for (let hop = 0; hop < agentHops; hop++) {
                // Cost calculation per hop
                const inputCost = (currentInputTokens / 1000000) * selectedModel.in;
                const outputCost = (currentOutputTokens / 1000000) * selectedModel.out;
                
                cumulativeCost += (inputCost + outputCost) * frontierRequests;
                cumulativeTokens += (currentInputTokens + currentOutputTokens) * frontierRequests;

                // For the NEXT agent hop, standard architectures prepend the previous output to the context window
                // This means Input Tokens grow monotonically alongside the chain!
                currentInputTokens = currentInputTokens + currentOutputTokens;
                currentOutputTokens = Math.round(currentOutputTokens * 0.8); // Successive agents usually summarize/refine, reducing output length
            }

            // Calculate cost if they didn't use a router (for comparison)
            let rawCostWithoutRouter = 0;
            let rawIn = baseInputTokens;
            let rawOut = Math.round(baseInputTokens * 0.2);
            for (let hop = 0; hop < agentHops; hop++) {
                rawCostWithoutRouter += (((rawIn / 1000000) * selectedModel.in) + ((rawOut / 1000000) * selectedModel.out)) * grossMonthlyRequests;
                rawIn += rawOut;
                rawOut = Math.round(rawOut * 0.8);
            }

            const savingsFromRouter = useEdgeRouter ? rawCostWithoutRouter - cumulativeCost : 0;

            setResults({
                grossMonthlyRequests,
                frontierRequests,
                totalTokens: cumulativeTokens,
                monthlyCost: cumulativeCost,
                savingsFromRouter
            });

        } finally {
            setLoading(false);
        }
    };

    const formatMoney = (num: number) => {
        if (num > 10000) return '$' + Math.round(num).toLocaleString();
        return '$' + num.toFixed(2);
    };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4 border-b border-transparent">
            <ToolCelebration show={!!results} toolName="AGENT-ROUTER" />
            
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    <Link href="/tools" className="hover:text-white transition">Enterprise Diagnostics</Link>
                    <span>/</span>
                    <span className="text-white font-bold">FinOps Router Emulator</span>
                </div>
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-white/5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Multi-Agent FinOps Forecaster</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Model the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Token Tsunami.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                            Agentic workflows compound input tokens across every hop (Planner → Coder → Verifier). Brute-forcing this topology with GPT-4o will lead to immediate API bankruptcy.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {/* Inputs */}
                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-mono text-blue-400 uppercase tracking-widest">Daily Base Triggers</label>
                                    <div className="text-2xl font-bold text-white font-mono">{dailyRequests.toLocaleString()}</div>
                                </div>
                                <input title="Daily Base Triggers" type="range" min="1000" max="250000" step="1000" value={dailyRequests} onChange={e => setDailyRequests(parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                            </div>

                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Init Payload (Tokens)</label>
                                    <div className="text-2xl font-bold text-white font-mono">{baseInputTokens.toLocaleString()}</div>
                                </div>
                                <input title="Init Payload (Tokens)" type="range" min="500" max="15000" step="100" value={baseInputTokens} onChange={e => setBaseInputTokens(parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                <div className="text-[10px] text-zinc-600 font-mono mt-2">Combined System Prompt + RAG + User Input</div>
                            </div>

                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">Sequential Agent Hops</label>
                                <select title="Sequential Agent Hops" value={agentHops} onChange={e => setAgentHops(parseInt(e.target.value))} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono focus:border-blue-500 transition-colors">
                                    <option value="1">1 Hop (Direct Response)</option>
                                    <option value="2">2 Hops (Reasoning → Validation)</option>
                                    <option value="3">3 Hops (Triage → Reasoner → Critic)</option>
                                    <option value="5">5 Hops (Massive Swarm Exhaustion)</option>
                                </select>
                            </div>

                            <div className="p-6 bg-black/40 rounded-xl border border-white/5">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">Frontier Backbone Model</label>
                                <select title="Frontier Backbone Model" value={model} onChange={e => setModel(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono focus:border-blue-500 transition-colors">
                                    {Object.entries(MODELS).map(([k, v]) => (
                                        <option key={k} value={k}>{v.name} (${v.in}/$1M In | ${v.out}/$1M Out)</option>
                                    ))}
                                </select>
                            </div>

                            {/* Edge Router Toggle */}
                            <div className="md:col-span-2 p-6 rounded-xl border transition-colors cursor-pointer group flex items-center justify-between"
                                onClick={() => setUseEdgeRouter(!useEdgeRouter)}
                                style={{
                                    backgroundColor: useEdgeRouter ? 'rgba(59, 130, 246, 0.1)' : 'rgba(0,0,0,0.4)',
                                    borderColor: useEdgeRouter ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255,255,255,0.05)'
                                }}>
                                <div>
                                    <h4 className={`font-bold font-mono uppercase tracking-widest flex items-center gap-2 mb-1 ${useEdgeRouter ? 'text-blue-400' : 'text-zinc-500'}`}>
                                        <ShieldCheck size={18} /> Enable Private SLM Semantic Router
                                    </h4>
                                    <p className="text-xs text-zinc-400">Deploy a 8B-parameter local model at the edge to natively solve or reject 60% of requests at zero API cost.</p>
                                </div>
                                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${useEdgeRouter ? 'bg-blue-500' : 'bg-zinc-800'}`}>
                                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${useEdgeRouter ? 'translate-x-6' : 'translate-x-0'}`} />
                                </div>
                            </div>
                        </div>

                        <ShineBorder borderColor="rgba(59, 130, 246, 0.6)" duration={2}>
                            <button
                                onClick={() => setShowGate(true)}
                                disabled={loading}
                                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {loading ? ( <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> CALCULATING BURN RATE...</> ) : ( <><Cpu size={18}/> RUN ECONOMICS SIMULATION</> )}
                            </button>
                        </ShineBorder>

                        {showGate && (
                            <div className="mt-6">
                                <ToolGate toolName="FinOps Simulator" toolSlug="agent-router" mappedCurriculumId="27-4" onUnlock={() => { setShowGate(false); runSimulation(); }}>
                                    <></>
                                </ToolGate>
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            ) : (
                <div id="router-results-artifact" className="bg-[#050505] p-2 sm:p-6 rounded-3xl">
                     <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-900/40 border border-blue-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-500/20 text-blue-400 border border-blue-500/50 px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">Architecture Economics Validated</h2>
                            <p className="text-sm text-zinc-400">Compounding token burn mapped across {agentHops} sequential hops.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="router-pdf-export-zone" fileName={`Agentic_Topology_Audit.pdf`} />
                        </div>
                    </div>

                    <div id="router-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-white/10">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#3b82f6" colorTo="#8b5cf6" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">API Bankruptcy Liability (CODN)</div>
                                        <div className={`text-6xl sm:text-7xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r ${results.monthlyCost > 50000 ? 'from-red-500 to-rose-600' : 'from-blue-400 to-indigo-500'}`}>
                                            {formatMoney(results.monthlyCost)}
                                        </div>
                                        
                                        {results.savingsFromRouter > 0 && (
                                            <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg flex items-center gap-3">
                                                <div className="bg-emerald-500/20 w-8 h-8 flex items-center justify-center rounded text-emerald-400"><DollarSign size={16}/></div>
                                                <div>
                                                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Router Mitigation Savings</div>
                                                    <div className="font-bold text-white">{formatMoney(results.savingsFromRouter)} / month saved</div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <p className="text-sm text-zinc-400 mt-6 leading-relaxed">
                                            Executing <strong className="text-white">{results.grossMonthlyRequests.toLocaleString()} monthly base triggers</strong> through a {agentHops}-hop agentic chain yields a geometric explosion of Input Tokens, mapping to exactly <strong className="text-white">{(results.totalTokens / 1000000000).toFixed(2)} Billion Total Tokens</strong> consumed per month.
                                        </p>
                                    </div>
                                    <div>
                                         <GlowCard className="p-6 h-full" glowColor="blue">
                                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-3 mb-3">Workflow Topology Exhaust</div>
                                                
                                                <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3">
                                                    <span className="text-sm text-zinc-400">Total System Triggers</span>
                                                    <span className="text-sm font-mono text-blue-400">{results.grossMonthlyRequests.toLocaleString()}</span>
                                                </div>
                                                
                                                {useEdgeRouter && (
                                                    <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3">
                                                        <span className="text-sm text-zinc-400">SLM Edge Deflections (0 Cost)</span>
                                                        <span className="text-sm font-mono text-emerald-400">+{(results.grossMonthlyRequests - results.frontierRequests).toLocaleString()}</span>
                                                    </div>
                                                )}

                                                <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3">
                                                    <span className="text-sm text-zinc-400">Frontier API Payloads</span>
                                                    <span className="text-sm font-mono text-indigo-400">{results.frontierRequests.toLocaleString()}</span>
                                                </div>

                                                <div className="flex justify-between items-center pt-2">
                                                    <span className="text-xs font-mono text-white">Execution Hops per Payload</span>
                                                    <span className={`text-sm font-mono font-bold ${agentHops > 2 ? 'text-orange-400' : 'text-blue-400'}`}>x {agentHops} Deep</span>
                                                </div>
                                         </GlowCard>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Action Footer */}
                        <ScrollReveal delay={250}>
                            <VaultUpsell 
                                urgencyLevel={results.monthlyCost > 10000 && !useEdgeRouter ? 'critical' : 'growth'}
                                recommendedTracks={[
                                    { id: 'Module 27-4', title: 'Hybrid Cloud-Edge Routing', desc: 'Deploying quantization and Apple Silicon for free local routing loops.' },
                                    { id: 'Module 29-10', title: 'Capstone: AI FinOps Integration', desc: 'Prevent API bankruptcy by tracking token COGS at the individual node layer.' }
                                ]} 
                            />

                            <div className="flex justify-center flex-wrap gap-6 mt-8" data-html2canvas-ignore>
                                <button onClick={() => setResults(null)} className="text-zinc-500 font-mono tracking-widest text-xs hover:text-white uppercase transition-colors">← Update Swarm Topology</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
