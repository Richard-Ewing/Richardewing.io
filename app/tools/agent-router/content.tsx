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
import { Network, Server, ArrowRight, ShieldCheck, Cpu, DollarSign, Lock, Zap } from 'lucide-react';
import ToolGate from '../../components/tool-gate';
import { GlowCard } from '../../components/magicui/glow-card';
import { PersonaSwitcher, Persona } from '../../components/PersonaSwitcher';

// Pricing per 1M tokens (Input / Output)
const MODELS: Record<string, { in: number; out: number; name: string }> = {
    'gpt-4o': { in: 5.0, out: 15.0, name: 'GPT-4o (Frontier Core)' },
    'claude-3-5-sonnet': { in: 3.0, out: 15.0, name: 'Claude 3.5 Sonnet' },
    'gpt-4-turbo': { in: 10.0, out: 30.0, name: 'GPT-4 Turbo (Legacy)' }
};

export default function AgentRouterContent() {
    const [persona, setPersona] = useState<Persona>('VP Eng');
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
                <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                    <Link href="/tools" className="hover:text-zinc-900 transition">Enterprise Diagnostics</Link>
                    <span>/</span>
                    <span className="text-zinc-950 font-bold">FinOps Router Emulator</span>
                </div>
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-zinc-400">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest">Multi-Agent FinOps Forecaster</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tighter mb-4">
                            Model the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Token Tsunami.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-900 mb-8 max-w-2xl leading-relaxed">
                            Agentic workflows compound input tokens across every hop (Planner → Coder → Verifier). Brute-forcing this topology with GPT-4o will lead to immediate API bankruptcy.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {/* Inputs */}
                            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-bold font-mono text-blue-900 font-extrabold font-semibold uppercase tracking-widest">Daily Base Triggers</label>
                                    <div className="text-2xl font-bold text-zinc-950 font-mono">{dailyRequests.toLocaleString()}</div>
                                </div>
                                <input title="Daily Base Triggers" type="range" min="1000" max="250000" step="1000" value={dailyRequests} onChange={e => setDailyRequests(parseInt(e.target.value))} className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                            </div>

                            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400">
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-bold font-mono text-indigo-900 font-extrabold font-semibold uppercase tracking-widest">Init Payload (Tokens)</label>
                                    <div className="text-2xl font-bold text-zinc-950 font-mono">{baseInputTokens.toLocaleString()}</div>
                                </div>
                                <input title="Init Payload (Tokens)" type="range" min="500" max="15000" step="100" value={baseInputTokens} onChange={e => setBaseInputTokens(parseInt(e.target.value))} className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                <div className="text-xs font-bold font-medium text-zinc-950 font-bold font-mono mt-2">Combined System Prompt + RAG + User Input</div>
                            </div>

                            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400">
                                <label className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest block mb-4">Sequential Agent Hops</label>
                                <select title="Sequential Agent Hops" value={agentHops} onChange={e => setAgentHops(parseInt(e.target.value))} className="w-full bg-white/50 border border-zinc-400 rounded-xl p-4 text-zinc-950 font-mono focus:border-blue-500 transition-colors">
                                    <option value="1">1 Hop (Direct Response)</option>
                                    <option value="2">2 Hops (Reasoning → Validation)</option>
                                    <option value="3">3 Hops (Triage → Reasoner → Critic)</option>
                                    <option value="5">5 Hops (Massive Swarm Exhaustion)</option>
                                </select>
                            </div>

                            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400">
                                <label className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest block mb-4">Frontier Backbone Model</label>
                                <select title="Frontier Backbone Model" value={model} onChange={e => setModel(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl p-4 text-zinc-950 font-mono focus:border-blue-500 transition-colors">
                                    {Object.entries(MODELS).map(([k, v]) => (
                                        <option key={k} value={k}>{v.name} (${v.in}/$1M In | ${v.out}/$1M Out)</option>
                                    ))}
                                </select>
                            </div>

                            {/* Edge Router Toggle */}
                            <div className={`md:col-span-2 p-6 rounded-xl border transition-colors cursor-pointer group flex items-center justify-between ${useEdgeRouter ? 'bg-blue-500/10 border-blue-500/50' : 'bg-zinc-50 border-zinc-400'}`}
                                onClick={() => setUseEdgeRouter(!useEdgeRouter)}>
                                <div>
                                    <h4 className={`font-bold font-mono uppercase tracking-widest flex items-center gap-2 mb-1 ${useEdgeRouter ? 'text-blue-900 font-extrabold font-semibold' : 'text-zinc-900'}`}>
                                        <ShieldCheck size={18} /> Enable Private SLM Semantic Router
                                    </h4>
                                    <p className="text-xs font-bold text-zinc-900 font-bold">Deploy a 8B-parameter local model at the edge to natively solve or reject 60% of requests at zero API cost.</p>
                                </div>
                                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${useEdgeRouter ? 'bg-blue-500' : 'bg-zinc-100'}`}>
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
                <div id="router-results-artifact" className="bg-white p-2 sm:p-6 rounded-3xl">
                     <div className="flex flex-col sm:flex-row items-center justify-between bg-white/60 border border-blue-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-500/20 text-blue-900 font-extrabold font-semibold border border-blue-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-zinc-950 mb-1">Architecture Economics Validated</h2>
                            <p className="text-sm font-semibold text-zinc-900 font-medium">Compounding token burn mapped across {agentHops} sequential hops.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="router-pdf-export-zone" fileName={`Agentic_Topology_Audit.pdf`} />
                        </div>
                    </div>

                    <PersonaSwitcher activePersona={persona} onChange={setPersona} />

                    <div id="router-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-zinc-400">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#3b82f6" colorTo="#8b5cf6" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                    <div>
                                        <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">
                                            {persona === 'CFO' ? 'Gross Margin Erosion Risk' :
                                             persona === 'VP Eng' ? 'API Bankruptcy Liability (CODN)' :
                                             persona === 'CISO' ? 'External Payload Extrusion Risk' :
                                             'Vendor Lock-In Liability'}
                                        </div>
                                        <div className={`text-6xl sm:text-7xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r ${results.monthlyCost > 50000 ? 'from-red-500 to-rose-600' : 'from-blue-400 to-indigo-500'}`}>
                                            {formatMoney(results.monthlyCost)}
                                        </div>
                                        
                                        {results.savingsFromRouter > 0 && (
                                            <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg flex items-center gap-3">
                                                <div className="bg-emerald-500/20 w-8 h-8 flex items-center justify-center rounded text-emerald-900 font-extrabold font-semibold"><DollarSign size={16}/></div>
                                                <div>
                                                    <div className="text-xs font-bold font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest">Router Mitigation Savings</div>
                                                    <div className="font-bold text-zinc-900">{formatMoney(results.savingsFromRouter)} / month saved</div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <p className="text-sm font-semibold text-zinc-900 font-medium mt-6 leading-relaxed">
                                            Executing <strong className="text-zinc-900">{results.grossMonthlyRequests.toLocaleString()} monthly base triggers</strong> through a {agentHops}-hop agentic chain yields a geometric explosion of Input Tokens, mapping to exactly <strong className="text-zinc-900">{(results.totalTokens / 1000000000).toFixed(2)} Billion Total Tokens</strong> consumed per month.
                                        </p>
                                     </div>
                                     <div>
                                         {persona === 'CFO' && (
                                            <div className="bg-white/50 p-6 rounded-2xl border border-green-500/20 space-y-4 h-full">
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest border-b border-zinc-400 pb-3">Unit Margin Collapse Matrix</div>
                                                <div className="flex justify-between items-center pb-2 border-b border-zinc-400">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">Annualized API Run Rate</span>
                                                    <span className="text-sm font-semibold font-mono text-red-900 font-extrabold font-semibold">${(results.monthlyCost * 12).toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between items-center pb-2 border-b border-zinc-400">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">Average API Cost / System Trigger</span>
                                                    <span className="text-sm font-semibold font-mono text-amber-400">${(results.monthlyCost / results.grossMonthlyRequests).toFixed(4)}</span>
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950 font-mono mt-2 pt-2">Variable token pricing destroys gross margins when tied to fixed-fee SaaS tiers.</p>
                                            </div>
                                         )}
                                         {persona === 'VP Eng' && (
                                              <GlowCard className="p-6 h-full" glowColor="blue">
                                                 <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest border-b border-zinc-400 pb-3 mb-3">Workflow Topology Exhaust</div>
                                                 
                                                 <div className="flex justify-between items-center pb-3 border-b border-zinc-400 mb-3">
                                                     <span className="text-sm font-semibold text-zinc-900 font-medium">Total System Triggers</span>
                                                     <span className="text-sm font-semibold font-mono text-blue-900 font-extrabold font-semibold">{results.grossMonthlyRequests.toLocaleString()}</span>
                                                 </div>
                                                 
                                                 {useEdgeRouter && (
                                                     <div className="flex justify-between items-center pb-3 border-b border-zinc-400 mb-3">
                                                         <span className="text-sm font-semibold text-zinc-900 font-medium">SLM Edge Deflections (0 Cost)</span>
                                                         <span className="text-sm font-semibold font-mono text-emerald-900 font-extrabold font-semibold">+{(results.grossMonthlyRequests - results.frontierRequests).toLocaleString()}</span>
                                                     </div>
                                                 )}

                                                 <div className="flex justify-between items-center pb-3 border-b border-zinc-400 mb-3">
                                                     <span className="text-sm font-semibold text-zinc-900 font-medium">Frontier API Payloads</span>
                                                     <span className="text-sm font-semibold font-mono text-indigo-900 font-extrabold font-semibold">{results.frontierRequests.toLocaleString()}</span>
                                                 </div>

                                                 <div className="flex justify-between items-center pt-2">
                                                     <span className="text-xs font-bold font-mono text-zinc-900">Execution Hops per Payload</span>
                                                     <span className={`text-sm font-semibold font-mono font-bold ${agentHops > 2 ? 'text-orange-900 font-extrabold font-semibold' : 'text-blue-900 font-extrabold font-semibold'}`}>x {agentHops} Deep</span>
                                                 </div>
                                             </GlowCard>
                                         )}
                                         {persona === 'CISO' && (
                                            <div className="bg-white/50 p-6 rounded-2xl border border-rose-500/20 space-y-4 h-full">
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest border-b border-zinc-400 pb-3">External Payload Exposure</div>
                                                <div className="text-center py-4">
                                                    <div className="text-4xl font-bold text-rose-400 font-mono">{(results.totalTokens / 1000000).toFixed(1)}M</div>
                                                    <p className="text-sm font-semibold font-medium text-zinc-950 mt-2">Proprietary Tokens Exfiltrated to Public API per month</p>
                                                </div>
                                            </div>
                                         )}
                                          {persona === 'Legal' && (
                                            <div className="bg-white/50 p-6 rounded-2xl border border-amber-500/20 space-y-4 h-full">
                                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest border-b border-zinc-400 pb-3">Vendor Lock-In Dependency</div>
                                                <div className="flex justify-between items-center pb-2">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">SaaS Provider Dependency</span>
                                                    <span className="text-sm font-semibold font-mono text-amber-400 text-right">Critical</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-2 border-t border-zinc-400">
                                                    <span className="text-sm font-semibold text-zinc-900 font-medium">Risk of Unilateral Price Bumps</span>
                                                    <span className="text-sm font-semibold font-mono text-rose-400 text-right">Extremely High</span>
                                                </div>
                                            </div>
                                         )}
                                     </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* WATERFALL CHART */}
                        <ScrollReveal delay={100}>
                            <div className="bg-white border border-zinc-400 rounded-2xl p-6 mb-8 shadow-2xl overflow-hidden relative shrink-0">
                                <h3 className="text-xs font-bold font-mono text-blue-900 font-extrabold font-semibold uppercase tracking-widest border-b border-zinc-400/80 pb-3 mb-6">Agentic Token Compounding (Per System Trigger)</h3>
                                <div className="space-y-4">
                                    {Array.from({ length: agentHops }).map((_, i) => {
                                        const hopTokens = baseInputTokens * ((i + 1) * 1.5);
                                        const widthPercent = Math.min((hopTokens / (baseInputTokens * (agentHops * 1.5))) * 100, 100);
                                        return (
                                            <motion.div 
                                                key={i}
                                                initial={{ width: 0, opacity: 0 }}
                                                animate={{ width: `${widthPercent}%`, opacity: 1 }}
                                                transition={{ duration: 0.8, delay: 0.3 + (i * 0.2), ease: "easeOut" }}
                                                className={`h-12 rounded-r-lg flex items-center px-4 relative group ${i === 0 ? 'bg-blue-900/40 border-l-2 border-blue-500' : 'bg-indigo-900/40 border-l-2 border-indigo-500'}`}
                                            >
                                                <div className="absolute left-4 font-mono text-zinc-950 font-bold text-sm">
                                                    Hop {i+1}: <span className="text-zinc-900 ml-1">{i === 0 ? 'Triage / Planner' : i === 1 ? 'Researcher / Search' : i === 2 ? 'Code Editor' : i === 3 ? 'Verifier / Critic' : 'Auto-Healer'}</span>
                                                </div>
                                                <div className="absolute right-4 font-mono text-xs font-bold font-medium text-zinc-950 group-hover:text-zinc-900 transition-colors">
                                                    +{hopTokens.toLocaleString()} t
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                                <div className="mt-6 pt-4 border-t border-zinc-400/80 flex justify-between items-center text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">
                                    <span>Total Context Window Accumulation</span>
                                    <span className="text-rose-400 font-bold">{Math.floor(baseInputTokens * (agentHops > 1 ? agentHops * 1.5 : 1)).toLocaleString()} + Tokens / Request</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* OPEX HEMORRHAGE MATRIX (NEW STRAT) */}
                        <ScrollReveal delay={120}>
                            <div className="mb-6 border-b border-zinc-400 pb-4 mt-8">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-2">
                                    <Network size={18} className="text-indigo-900 font-extrabold font-semibold"/>
                                    Enterprise OPEX Drain Matrix
                                </h3>
                                <p className="text-zinc-950 text-sm">Quantifying collateral damage on downstream technical and operational budgets.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                                <div className="bg-white/5 border border-zinc-400 p-5 rounded-xl">
                                    <h4 className="text-zinc-950 font-semibold mb-4 border-b border-zinc-400 pb-2">Compute Deprivation (Opportunity Cost)</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1"><span className="text-zinc-950 font-bold">Headcount Equivalent</span><span className="text-indigo-900 font-extrabold font-semibold font-mono font-bold">{(results.monthlyCost * 12 / 185000).toFixed(1)} Engineers</span></div>
                                            <div className="w-full bg-white rounded-full h-1"><motion.div className="bg-indigo-500 h-1 rounded-full" initial={{width: 0}} animate={{width: `${Math.min(100, (results.monthlyCost * 12 / 185000) * 10)}%`}}></motion.div></div>
                                        </div>
                                        <p className="text-sm font-semibold font-medium text-zinc-950 mt-2">The capital combusted by looping Frontier Models through tertiary logic hops equates to the loaded cost of highly skilled technical hires.</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-zinc-400 p-5 rounded-xl">
                                    <h4 className="text-zinc-950 font-semibold mb-4 border-b border-zinc-400 pb-2">API Rate Limit Stacking</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 text-amber-400 font-bold shrink-0">429</div>
                                            <div>
                                                <div className="text-zinc-950 font-semibold">Tier-5 Threshold Violation</div>
                                                <div className="text-xs font-bold text-zinc-900 font-bold">With {(results.totalTokens / 1000000000).toFixed(2)}B tokens flooding OpenAI/Anthropic, you hit global org-level rate limits (HTTP 429), taking down parallel engineering squads.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Board-Ready 3-Step Remediation Playbook */}
                        <ScrollReveal delay={150}>
                             <div className="mb-6 border-b border-zinc-400 pb-4 mt-8">
                                <h3 className="text-xl font-bold text-zinc-950 mb-2 flex items-center gap-2">
                                    <ShieldCheck size={18} className="text-emerald-900 font-extrabold font-semibold"/>
                                    Execution Playbook: API Firewalling
                                </h3>
                                <p className="text-zinc-950 text-sm">Deploy this architecture to structurally eliminate compounding token debt.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white/80 border border-zinc-400 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-100 transition-colors border-l-2 border-l-blue-500 shrink-0">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
                                     <div className="text-blue-900 font-extrabold font-semibold font-mono text-xs font-bold mb-3 uppercase tracking-widest bg-blue-500/10 w-8 h-8 rounded flex items-center justify-center border border-blue-500/20">01</div>
                                     <h4 className="text-zinc-950 font-bold mb-2">Deploy Semantic Router</h4>
                                     <p className="text-zinc-900 text-sm font-semibold mb-4">Route all incoming payloads through a local, CPU-bound classifying model to drop or cache baseline queries before they hit paid APIs.</p>
                                     <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-blue-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-sm font-semibold font-medium text-zinc-950">Run Llama-3 8B locally on CPU cache to preemptively classify and deflect 60% of requests.</p>
                                     </div>
                                </div>
                                <div className="bg-white/80 border border-zinc-400 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-100 transition-colors border-l-2 border-l-indigo-500 shrink-0">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
                                     <div className="text-indigo-900 font-extrabold font-semibold font-mono text-xs font-bold mb-3 uppercase tracking-widest bg-indigo-500/10 w-8 h-8 rounded flex items-center justify-center border border-indigo-500/20">02</div>
                                     <h4 className="text-zinc-950 font-bold mb-2">Contextual Pruning</h4>
                                     <p className="text-zinc-900 text-sm font-semibold mb-4">Agent hops intrinsically copy-paste the last agent's output. Force a summarization layer between hops.</p>
                                     <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-indigo-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-sm font-semibold font-medium text-zinc-950">Compress prompt strings by 80% using a cheap deterministic model between execution hops.</p>
                                     </div>
                                </div>
                                <div className="bg-white/80 border border-zinc-400 p-6 rounded-xl relative overflow-hidden group hover:bg-zinc-100 transition-colors border-l-2 border-l-emerald-500 shrink-0">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
                                     <div className="text-emerald-900 font-extrabold font-semibold font-mono text-xs font-bold mb-3 uppercase tracking-widest bg-emerald-500/10 w-8 h-8 rounded flex items-center justify-center border border-emerald-500/20">03</div>
                                     <h4 className="text-zinc-950 font-bold mb-2">Cascade Routing</h4>
                                     <p className="text-zinc-900 text-sm font-semibold mb-4">Never hardcode GPT-4o. Configure the router to attempt Claude Haiku or GPT-4o-Mini first.</p>
                                     <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2 relative z-10">
                                         <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                             <Zap size={10} /> Execution Directive
                                         </div>
                                         <p className="text-sm font-semibold font-medium text-zinc-950">Only escalate to the Frontier model layer if the target validation regex explicitly fails.</p>
                                     </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={250}>
                            <VaultUpsell 
                                urgencyLevel={results.monthlyCost > 10000 && !useEdgeRouter ? 'critical' : 'growth'}
                                recommendedTracks={[
                                    { id: 'Module 27-4', title: 'Hybrid Cloud-Edge Routing', desc: 'Deploying quantization and Apple Silicon for free local routing loops.' },
                                    { id: 'Module 29-10', title: 'Capstone: AI FinOps Integration', desc: 'Prevent API bankruptcy by tracking token COGS at the individual node layer.' }
                                ]} 
                            />

                            <div className="flex justify-center flex-wrap gap-6 mt-8" data-html2canvas-ignore>
                                <button onClick={() => setResults(null)} className="text-zinc-950 font-mono tracking-widest text-xs font-bold hover:text-zinc-900 uppercase transition-colors">← Update Swarm Topology</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
