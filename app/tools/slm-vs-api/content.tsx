'use client';

import { useState } from 'react';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import { VaultUpsell } from '../../components/VaultUpsell';
import NumberTicker from '../../components/magicui/number-ticker';
import { BorderBeam } from '../../components/magicui/border-beam';
import { Target, Users, Cpu, DollarSign, ArrowRight, BrainCircuit, HardDrive, Zap, Lock } from 'lucide-react';
import { NewsletterForm } from '../../components/newsletter-form';
import ToolGate from '../../components/tool-gate';

// --- PERSONA TYPES ---
type Persona = 'CTO' | 'CFO' | 'founder' | 'VP Eng';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'founder', label: 'Founder/CEO', icon: Target },
    { id: 'CTO', label: 'CTO / Architect', icon: Cpu },
    { id: 'VP Eng', label: 'VP Engineering', icon: Users },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

export default function SLMTool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('CTO');

    // Progressive Disclosure State
    const [step, setStep] = useState(1);

    // Inputs
    const [queriesPerDay, setQueriesPerDay] = useState(10000);
    const [tokensPerQuery, setTokensPerQuery] = useState(2500);
    const [apiProvider, setApiProvider] = useState('gpt-4o'); 
    const [hardwareStrategy, setHardwareStrategy] = useState('g5.xlarge'); 
    
    // UI States
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [showGate, setShowGate] = useState(false);

    // Providers Pricing Math
    const API_PRICING: Record<string, { in: number, out: number, name: string }> = {
        'gpt-4o': { in: 5.0, out: 15.0, name: 'OpenAI GPT-4o' }, // per 1M tokens
        'gpt-4o-mini': { in: 0.150, out: 0.600, name: 'OpenAI GPT-4o-mini' },
        'claude-3.5-sonnet': { in: 3.0, out: 15.0, name: 'Anthropic Claude 3.5 Sonnet' },
        'claude-3-haiku': { in: 0.25, out: 1.25, name: 'Anthropic Claude 3 Haiku' }
    };

    const HW_PRICING: Record<string, { mo: number, amortized: number, name: string }> = {
        'g5.xlarge': { mo: 750, amortized: 750, name: 'AWS G5 (A10G) Rented' },
        '2x-g5.4xlarge': { mo: 3200, amortized: 3200, name: 'AWS G5 Distributed' },
        'h100-owned': { mo: 500, amortized: 1500, name: 'Owned PCIe H100 (Amortized)' },
        'mac-studio': { mo: 100, amortized: 200, name: 'Apple M2 Ultra (Colocated)' }
    };

    const analyze = async () => {
        setLoading(true);
        try {
            // Simulate AI audit delay
            await new Promise(r => setTimeout(r, 1500));

            const daysPerMonth = 30.4;
            const totalMonthlyQueries = queriesPerDay * daysPerMonth;
            
            // Assume 75% input, 25% output RAG token ratio
            const inputTokens = totalMonthlyQueries * (tokensPerQuery * 0.75);
            const outputTokens = totalMonthlyQueries * (tokensPerQuery * 0.25);

            const apiCostIn = (inputTokens / 1000000) * API_PRICING[apiProvider].in;
            const apiCostOut = (outputTokens / 1000000) * API_PRICING[apiProvider].out;
            const totalApiCost = apiCostIn + apiCostOut;

            const hwCost = HW_PRICING[hardwareStrategy];
            const maintenanceHoursPerMonth = 20; // assumed 20 hours of devops
            const devopsCostPerMonth = maintenanceHoursPerMonth * 150; // $150/hr
            
            const totalLocalCost = hwCost.amortized + devopsCostPerMonth;

            const monthlySavings = totalApiCost - totalLocalCost;
            const isSelfHostCheaper = monthlySavings > 0;
            const breakevenDays = Math.max(0, Math.round((totalLocalCost / (totalApiCost / daysPerMonth))));

            // Formulate Executive Summary
            const annualSavings = monthlySavings * 12;

            setResults({
                apiCost: totalApiCost,
                localCost: totalLocalCost,
                isSelfHostCheaper,
                monthlySavings,
                annualSavings,
                breakevenDays,
                apiCostIn,
                apiCostOut,
                devopsCostPerMonth,
                totalMonthlyQueries,
                hardwareName: hwCost.name,
                apiName: API_PRICING[apiProvider].name
            });

        } catch (error: any) {
            console.error(error);
            alert(`Calculation failed: ${error.message}`);
        }
        finally { setLoading(false); }
    };

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(0);
    };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            <ToolCelebration show={!!results} toolName="SLM-ARB" />
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">Inference Arbitrage</span>
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-white/5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">AI Unit Economics | Build vs Buy</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Kill the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">API Tax.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl">
                            At a certain volume, renting OpenAI tokens becomes a massive capital leak. Calculate exactly when you should transition to hosting your own open-source models (Llama 3, Mistral) on bare metal or custom cloud clusters.
                        </p>

                        <div className="mb-8">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">I am calculating for the...</div>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAS.map(p => (
                                    <button key={p.id} onClick={() => setPersona(p.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/30'}`}
                                    >
                                        <p.icon size={14} /> {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {step === 1 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold font-mono text-sm border border-blue-500/30">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Inference Volume</h3>
                                            <p className="text-sm text-zinc-500">How heavy is your generative payload?</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-mono text-blue-400 uppercase tracking-widest flex items-center gap-2">
                                                    Generative Workflows / Day
                                                    <span className="w-4 h-4 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-[10px] cursor-help" title="How many times users trigger an LLM (chat, summarization, workflow automation)">?</span>
                                                </label>
                                                <div className="text-2xl font-bold text-white font-mono">{queriesPerDay.toLocaleString()}</div>
                                            </div>
                                            <input type="range" title="Queries Per Day" aria-label="Queries Per Day" min="1000" max="500000" step="1000" value={queriesPerDay} onChange={e => setQueriesPerDay(parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                                        </div>

                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                                                    Average Tokens / Workflow
                                                    <span className="w-4 h-4 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center text-[10px] cursor-help" title="RAG payload: User prompt + DB Context + LLM Output. 1000 tokens ≈ 750 words.">?</span>
                                                </label>
                                                <div className="text-2xl font-bold text-white font-mono">{tokensPerQuery.toLocaleString()} t/req</div>
                                            </div>
                                            <input type="range" title="Tokens Per Workflow" aria-label="Tokens Per Workflow" min="500" max="32000" step="500" value={tokensPerQuery} onChange={e => setTokensPerQuery(parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                        </div>
                                    </div>

                                    <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                                        Next: Setup Infrastructure <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm border border-emerald-500/30">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Vendor & Target Hardware</h3>
                                            <p className="text-sm text-zinc-500">Choose your API dependency and local hardware alternative.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 block"><BrainCircuit size={12} className="inline mr-1"/> Current API Tax Collector</label>
                                            <select title="API Provider" aria-label="API Provider" value={apiProvider} onChange={e => setApiProvider(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono focus:border-emerald-500 focus:outline-none transition-colors">
                                                {Object.keys(API_PRICING).map(k => <option key={k} value={k}>{API_PRICING[k].name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3 block"><HardDrive size={12} className="inline mr-1"/> Local SLM Strategy (vLLM/Ollama)</label>
                                            <select title="Hardware Strategy" aria-label="Hardware Strategy" value={hardwareStrategy} onChange={e => setHardwareStrategy(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white font-mono focus:border-emerald-500 focus:outline-none transition-colors">
                                                {Object.keys(HW_PRICING).map(k => <option key={k} value={k}>{HW_PRICING[k].name}</option>)}
                                            </select>
                                            <p className="text-[10px] text-zinc-600 font-mono mt-2">Includes amortized $150/hr DevOps maintenance tax.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="w-1/3 py-4 bg-zinc-900 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-all">Back</button>
                                        <div className="w-2/3">
                                            <ShineBorder borderColor="rgba(16, 185, 129, 0.6)" duration={2}>
                                                <button onClick={() => { setShowGate(true); }} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center justify-center gap-3">
                                                    {loading ? ( <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> MODELING...</> ) : ( "RUN ARBITRAGE SIMULATION →" )}
                                                </button>
                                            </ShineBorder>
                                        </div>
                                    </div>

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="AI Infra Audit" onUnlock={() => { setShowGate(false); analyze(); }}><></></ToolGate>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            ) : (
                <div id="slm-results-artifact" className="bg-[#050505] p-2 sm:p-6 rounded-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-900/40 border border-emerald-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">Inference Arbitrage Results Signed</h2>
                            <p className="text-sm text-zinc-400">Your AI unit economics have been quantified.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="slm-pdf-export-zone" fileName={`SLM_Arbitrage_${persona}.pdf`} />
                        </div>
                    </div>

                    <div id="slm-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-white/10">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#10b981" colorTo="#34d399" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">36-Month Strategic Verdict</div>
                                        <div className={`text-6xl sm:text-7xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r ${results.isSelfHostCheaper ? 'from-emerald-400 to-teal-500' : 'from-red-400 to-orange-500'}`}>
                                            {results.isSelfHostCheaper ? 'Repatriate to Bare Metal.' : 'Stay on the API.'}
                                        </div>
                                        <div className="mt-6 flex flex-col gap-2">
                                            <span className="text-zinc-400 font-mono text-sm leading-relaxed">
                                                At {(results.totalMonthlyQueries).toLocaleString()} runs/mo using {results.apiName}, your monthly API bill is <strong className="text-white">{formatMoney(results.apiCost)}</strong>.
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-black/50 p-6 rounded-2xl border border-white/5">
                                            {results.isSelfHostCheaper ? (
                                                <>
                                                    <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-1">Projected Annual Savings</div>
                                                    <div className="text-5xl font-bold text-emerald-400 font-mono mb-2">+{formatMoney(results.annualSavings)}</div>
                                                    <p className="text-xs text-zinc-400">By migrating to {results.hardwareName}, you break even on hardware and maintenance in <strong className="text-white">{results.breakevenDays} days</strong> of operation.</p>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="text-xs font-mono text-red-500 uppercase tracking-widest mb-1">Local Hosting Premium</div>
                                                    <div className="text-5xl font-bold text-red-400 font-mono mb-2">-{formatMoney(Math.abs(results.annualSavings))}</div>
                                                    <p className="text-xs text-zinc-400">You do not have the token volume to justify {results.hardwareName} and a local MLOps team overhead.</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                <GlowCard className="p-6" glowColor="blue">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">API Run Rate</div>
                                    <div className="text-3xl font-bold text-blue-400">{formatMoney(results.apiCost)}<span className="text-sm font-normal text-zinc-500">/mo</span></div>
                                    <p className="text-[10px] text-zinc-500 mt-2 line-clamp-2">Paid to LLM vendor directly via metered billing.</p>
                                </GlowCard>

                                <GlowCard className="p-6" glowColor="emerald">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Total Local Cost</div>
                                    <div className="text-3xl font-bold text-emerald-400">{formatMoney(results.localCost)}<span className="text-sm font-normal text-zinc-500">/mo</span></div>
                                    <p className="text-[10px] text-zinc-500 mt-2 line-clamp-2">{results.hardwareName} + Devops baseline overhead.</p>
                                </GlowCard>

                                <GlowCard className="p-6" glowColor={results.isSelfHostCheaper ? "emerald" : "red"}>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Arbitrage Gap</div>
                                    <div className="text-3xl font-bold text-white">{formatMoney(Math.abs(results.monthlySavings))}<span className="text-sm font-normal text-zinc-500">/mo</span></div>
                                    <p className="text-[10px] text-zinc-500 mt-2 line-clamp-2">The exact financial gap between architectures.</p>
                                </GlowCard>
                            </div>
                        </ScrollReveal>

                         <ScrollReveal delay={150}>
                             <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-6 border border-white/10 mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap size={16} className="text-yellow-400" />
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">The "Why" For Private AI</span>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                                    Aside from raw compute arbitrage, moving to an SLM (like Llama-3-8B) provides 100% data sovereignty, eliminating the blast-radius risk of sending PII and proprietary board logic outside your VPC. If your business is regulated (HealthTech, FinTech, Defense), the "API Tax" isn't just financial, it's a regulatory liability. 
                                </p>
                            </div>
                        </ScrollReveal>

                        <VaultUpsell 
                            urgencyLevel={results.isSelfHostCheaper ? 'critical' : 'growth'}
                            recommendedTracks={[
                                { id: 'TRACK-04', title: 'AI Unit Economics & Margin Collapse', desc: 'Identify AI insolvency triggers and restructure inference costs.' },
                                { id: 'TRACK-07', title: 'Data Sovereignty & Local SLMs', desc: 'Deploy Local Enclaves to bypass SaaS vendor IP contamination.' }
                            ]} 
                        />

                        {/* Action Footer */}
                        <ScrollReveal delay={250}>
                            <div className="flex justify-center gap-6 mt-6" data-html2canvas-ignore>
                                <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← Re-Calculate Variables</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
