'use client';

import { useState } from 'react';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import NumberTicker from '../../components/magicui/number-ticker';
import { BorderBeam } from '../../components/magicui/border-beam';
import { Globe, Users, Headphones, DollarSign, ArrowRight, Zap, Building2, UserMinus, Lock } from 'lucide-react';
import { VaultUpsell } from '../../components/VaultUpsell';
import ToolGate from '../../components/tool-gate';

// --- PERSONA TYPES ---
type Persona = 'COO' | 'CFO' | 'CXO' | 'Founder';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Founder', label: 'Founder/CEO', icon: Building2 },
    { id: 'COO', label: 'COO (Ops)', icon: Globe },
    { id: 'CXO', label: 'VP Support/CX', icon: Headphones },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

export default function FTEContent() {
    const [persona, setPersona] = useState<Persona>('COO');
    const [step, setStep] = useState(1);

    // Inputs
    const [headcount, setHeadcount] = useState(40);
    const [fullyLoadedSalary, setFullyLoadedSalary] = useState(35000); // e.g. BPO offshore
    const [ticketsMonthly, setTicketsMonthly] = useState(60000);
    const [automationTarget, setAutomationTarget] = useState(40); // % target
    
    // UI States
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [showGate, setShowGate] = useState(false);

    const analyze = async () => {
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1500));

            const totalCurrentSpend = headcount * fullyLoadedSalary;
            
            // Deflection Math
            const deflectedTicketsMonthly = ticketsMonthly * (automationTarget / 100);
            const deflectedTicketsAnnually = deflectedTicketsMonthly * 12;
            
            // Assume Agent context cost is $0.15 per ticket (Claude Haiku / GPT-4o-mini RAG)
            const agentApiCostPerTicket = 0.15;
            const annualAgentComputeCost = deflectedTicketsAnnually * agentApiCostPerTicket;

            // Compute FTE displacement
            // If automation target is 40%, you theoretically cut 40% of headcount.
            const headcountReduction = Math.round(headcount * (automationTarget / 100));
            const annualHumanSavings = headcountReduction * fullyLoadedSalary;

            // Implementation Cost Amortization (assume $150k one time build)
            const implementationCost = 150000;
            const netYear1Savings = annualHumanSavings - annualAgentComputeCost - implementationCost;
            const netOngoingSavings = annualHumanSavings - annualAgentComputeCost;
            
            // Breakeven Point in Months
            const monthlyHumanSavings = annualHumanSavings / 12;
            const monthlyComputeCost = annualAgentComputeCost / 12;
            const breakevenMonths = Math.ceil(implementationCost / (monthlyHumanSavings - monthlyComputeCost));

            setResults({
                totalCurrentSpend,
                annualHumanSavings,
                annualAgentComputeCost,
                netYear1Savings,
                netOngoingSavings,
                breakevenMonths,
                headcountReduction,
                implementationCost
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
            <ToolCelebration show={!!results} toolName="FTE-DISPLACEMENT" />
            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <Link href="/system" className="hover:text-zinc-900 transition">Intelligence</Link>
                <span>/</span>
                <span className="text-zinc-950 font-bold">FTE Displacement Matrix</span>
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-zinc-400">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest">Autonomous Labor Deflection</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tighter mb-4">
                            Expand Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Gross Margins.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-900 mb-8 max-w-2xl">
                            Tier-1 human support is an outdated variable cost. Calculate exactly how much EBITDA you can recapture by displacing 30-60% of your BPO routing layer with Sovereign Agentic Workflows.
                        </p>

                        <div className="mb-8">
                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3">Auditing from the perspective of...</div>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAS.map(p => (
                                    <button key={p.id} onClick={() => setPersona(p.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id ? 'bg-purple-500/10 border-purple-500 text-purple-900 font-extrabold font-semibold' : 'bg-white/80 border-zinc-400 text-zinc-900 hover:border-white/30'}`}
                                    >
                                        <p.icon size={14} /> {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {step === 1 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-900 font-extrabold font-semibold flex items-center justify-center font-bold font-mono text-sm font-semibold border border-cyan-500/30">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900">Current Support Overhead</h3>
                                            <p className="text-sm font-semibold text-zinc-900 font-medium">How large is your human routing layer?</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest flex items-center gap-2">
                                                    Tier-1 / BPO Headcount
                                                </label>
                                                <div className="text-2xl font-bold text-zinc-950 font-mono">{headcount} reps</div>
                                            </div>
                                            <input title="Headcount" type="range" min="5" max="500" step="5" value={headcount} onChange={e => setHeadcount(parseInt(e.target.value))} className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                                        </div>

                                        <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-bold font-mono text-indigo-900 font-extrabold font-semibold uppercase tracking-widest flex items-center gap-2">
                                                    Fully-Loaded Annual Salary
                                                </label>
                                                <div className="text-2xl font-bold text-zinc-950 font-mono">${(fullyLoadedSalary/1000).toFixed(1)}k</div>
                                            </div>
                                            <input title="Salary" type="range" min="15000" max="120000" step="1000" value={fullyLoadedSalary} onChange={e => setFullyLoadedSalary(parseInt(e.target.value))} className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
                                            <div className="flex justify-between text-xs font-bold font-medium text-zinc-950 mt-2 font-mono">
                                                <span>Offshore ($15k)</span>
                                                <span>Nearshore ($35k)</span>
                                                <span>US Onshore ($80k+)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-purple-400 transition-all flex items-center justify-center gap-2">
                                        Next: Deflection Target <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-900 font-extrabold font-semibold flex items-center justify-center font-bold font-mono text-sm font-semibold border border-purple-500/30">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900">Agentic Deflection Ratio</h3>
                                            <p className="text-sm font-semibold text-zinc-900 font-medium">How many tickets can a strict deterministic LLM handle autonomously?</p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400 relative group">
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold font-mono text-rose-400 uppercase tracking-widest flex items-center gap-2">
                                                Target Autonomous Resolution
                                            </label>
                                            <div className="text-2xl font-bold text-zinc-950 font-mono">{automationTarget}%</div>
                                        </div>
                                        <input title="Automation" type="range" min="10" max="85" step="5" value={automationTarget} onChange={e => setAutomationTarget(parseInt(e.target.value))} className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-rose-500" />
                                        <div className="text-sm font-semibold font-medium text-zinc-950 mt-4 leading-relaxed tracking-wide">
                                            At {automationTarget}%, you are attempting to fully clear <strong className="text-zinc-900">{Math.round(ticketsMonthly * (automationTarget/100)).toLocaleString()} tickets/mo</strong> without human intervention.
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400">
                                        <label className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3 block">Total Monthly Incident Volume</label>
                                        <input title="Tickets" type="number" value={ticketsMonthly} onChange={e => setTicketsMonthly(parseInt(e.target.value))} className="w-full bg-white/50 border border-zinc-400 rounded-xl p-4 text-zinc-950 font-mono focus:border-purple-500 focus:outline-none transition-colors" />
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="w-1/3 py-4 bg-zinc-50 border border-zinc-400 text-zinc-950 font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all">Back</button>
                                        <div className="w-2/3">
                                            <ShineBorder borderColor="rgba(168, 85, 247, 0.6)" duration={2}>
                                                <button onClick={() => { setShowGate(true); }} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-purple-500 transition-all flex items-center justify-center gap-3">
                                                    {loading ? ( <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> MODELING...</> ) : ( "RUN DISPLACEMENT LOGIC →" )}
                                                </button>
                                            </ShineBorder>
                                        </div>
                                    </div>

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="FTE Displacement Matrix" onUnlock={() => { setShowGate(false); analyze(); }}><></></ToolGate>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            ) : (
                <div id="fte-results-artifact" className="bg-white p-2 sm:p-6 rounded-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-white/60 border border-purple-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-zinc-950 mb-1">EBITDA Expansion Forecast</h2>
                            <p className="text-sm font-semibold text-zinc-900 font-medium">Your Agentic workflow savings have been modeled.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="fte-pdf-export-zone" fileName={`FTE_Displacement_${persona}.pdf`} />
                        </div>
                    </div>

                    <div id="fte-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-zinc-400">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#a855f7" colorTo="#6366f1" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                    <div>
                                        <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Steady State Margin Shift</div>
                                        <div className="text-5xl sm:text-6xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                                            +{formatMoney(results.netOngoingSavings)} <span className="text-2xl text-zinc-900">/ yr</span>
                                        </div>
                                        <div className="mt-6">
                                            <span className="px-3 py-1.5 rounded-full bg-purple-900/30 text-purple-900 font-extrabold font-semibold border border-purple-900/50 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
                                                <UserMinus size={12}/> {results.headcountReduction} FTEs Reallocated
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-zinc-900 font-medium mt-4 leading-relaxed">
                                            By automating {automationTarget}% of {ticketsMonthly.toLocaleString()} monthly incidents, you transition {formatMoney(results.annualHumanSavings)} of variable human payroll into {formatMoney(results.annualAgentComputeCost)} of fixed, infinitely scalable compute cost.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="bg-white/50 p-6 rounded-2xl border border-zinc-400 space-y-4">
                                            <div className="flex justify-between items-center border-b border-zinc-400 pb-3">
                                                <span className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase">Legacy Payroll Cost</span>
                                                <span className="text-lg font-mono text-red-900 font-extrabold font-semibold">{formatMoney(results.totalCurrentSpend)}/yr</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-zinc-400 pb-3">
                                                <span className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase">Agent Setup CapEx</span>
                                                <span className="text-lg font-mono text-amber-400">{formatMoney(results.implementationCost)}</span>
                                            </div>
                                            <div className="flex justify-between items-center pb-1">
                                                <span className="text-xs font-bold font-mono text-emerald-500 uppercase tracking-widest font-bold">Capital Breakeven</span>
                                                <span className="text-xl font-mono font-bold text-zinc-900">{results.breakevenMonths} Months</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                <GlowCard className="p-6" glowColor="red">
                                    <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Eliminated Payroll</div>
                                    <div className="text-3xl font-bold text-red-900 font-extrabold font-semibold">-{formatMoney(results.annualHumanSavings)}<span className="text-sm font-semibold font-normal text-zinc-900">/yr</span></div>
                                    <p className="text-xs font-bold font-medium text-zinc-950 mt-2 line-clamp-2">Variable human overhead completely removed from P&L.</p>
                                </GlowCard>

                                <GlowCard className="p-6" glowColor="cyan">
                                    <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Agent Compute Cost</div>
                                    <div className="text-3xl font-bold text-cyan-900 font-extrabold font-semibold">+{formatMoney(results.annualAgentComputeCost)}<span className="text-sm font-semibold font-normal text-zinc-900">/yr</span></div>
                                    <p className="text-xs font-bold font-medium text-zinc-950 mt-2 line-clamp-2">New fixed LLM inference cost logic.</p>
                                </GlowCard>

                                <GlowCard className="p-6" glowColor="emerald">
                                    <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Year 1 Net Impact</div>
                                    <div className="text-3xl font-bold text-emerald-900 font-extrabold font-semibold">{formatMoney(results.netYear1Savings)}<span className="text-sm font-semibold font-normal text-zinc-900"> EBITDA</span></div>
                                    <p className="text-xs font-bold font-medium text-zinc-950 mt-2 line-clamp-2">Includes immediate {formatMoney(results.implementationCost)} CapEx implementation write-off.</p>
                                </GlowCard>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={150}>
                             <div className="bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50/60 rounded-2xl p-6 border border-zinc-400 mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap size={16} className="text-cyan-900 font-extrabold font-semibold" />
                                    <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">The Path to Automation</span>
                                </div>
                                <p className="text-zinc-950 text-sm font-semibold leading-relaxed mb-4">
                                    Replacing humans with agents fundamentally changes your unit economics. However, open-ended LLMs hallucinate and fail. To realize this EBITDA expansion, you must constrain the AI within deterministic execution boundaries, mapping exact workflow DAGs rather than relying on unstructured "chatbots."
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* 3-STEP BOARD REMEDIATION PLAYBOOK */}
                        <ScrollReveal delay={180}>
                            <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border border-zinc-400 bg-zinc-50 text-left">
                                <h3 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                    3-Step Headcount Rightsizing Playbook
                                </h3>
                                <p className="text-zinc-900 text-sm font-semibold mb-8">Execute this operational sequence immediately to capture gross margin expansion through autonomous labor deflection without compromising SLA integrity.</p>

                                <div className="space-y-4">
                                    {/* Step 1 */}
                                    <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-rose-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                        <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/20">
                                            <span className="text-rose-400 font-bold font-mono">01</span>
                                        </div>
                                        <div className="relative z-10 w-full">
                                            <h4 className="text-zinc-950 font-bold mb-2">Halt BPO Contract Renewals</h4>
                                            <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">You are currently subsidizing inefficient human labor for deterministic classification and triage tasks. End this immediately.</p>
                                            <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-rose-400 uppercase tracking-widest font-bold">
                                                    <Zap size={10} /> Execution Directive
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950">Instruct Procurement and vendor management to freeze all Tier-1 support outsourcing renewals currently in the pipeline. Place vendors on month-to-month contracts.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-amber-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                                        <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/20">
                                            <span className="text-amber-400 font-bold font-mono">02</span>
                                        </div>
                                        <div className="relative z-10 w-full">
                                            <h4 className="text-zinc-950 font-bold mb-2">Deploy Semantic Triage Layer</h4>
                                            <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">You cannot rip-and-replace support. You must intercept incoming volume before it enters the human queue.</p>
                                            <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-amber-400 uppercase tracking-widest font-bold">
                                                    <Zap size={10} /> Execution Directive
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950">Implement an intent classification router (e.g., Llama 3 8B) in front of Zendesk/Intercom. Auto-close Top 5 known issues instantly with RAG documentation before allocating an agent.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-cyan-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                        <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                                            <span className="text-cyan-900 font-extrabold font-semibold font-bold font-mono">03</span>
                                        </div>
                                        <div className="relative z-10 w-full">
                                            <h4 className="text-zinc-950 font-bold mb-2">Upskill Top 10% Retained Staff</h4>
                                            <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">As deterministic volume falls, unresolved tickets will spike in complexity. You need engineers, not agents.</p>
                                            <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                                    <Zap size={10} /> Execution Directive
                                                </div>
                                                <p className="text-sm font-semibold font-medium text-zinc-950">Transition remaining Tier-3 support personnel into "AI Automation Engineers." Task them explicitly with updating knowledge vectors to prevent human escalation of newly closed loop cases.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </ScrollReveal>

                        <VaultUpsell 
                            urgencyLevel={results.netYear1Savings > 0 ? 'critical' : 'growth'}
                            recommendedTracks={[
                                { id: 'TRACK-01', title: 'Agentic Workflow Construction', desc: 'Map deterministic DAGs to permanently displace operational overhead.' },
                                { id: 'TRACK-05', title: 'Technical Debt & Valuation Impact', desc: 'Secure the foundation required for high-confidence autonomous agents.' }
                            ]} 
                        />

                        {/* Action Footer */}
                        <ScrollReveal delay={250}>
                            <div className="flex justify-center flex-wrap gap-6 mt-6" data-html2canvas-ignore>
                                <button onClick={() => setResults(null)} className="text-zinc-950 font-mono tracking-widest text-xs font-bold hover:text-zinc-900 uppercase transition-colors">← Rerun Model</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
