'use client';

import { useState } from 'react';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { VaultUpsell } from '../../components/VaultUpsell';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import NumberTicker from '../../components/magicui/number-ticker';
import { BorderBeam } from '../../components/magicui/border-beam';
import { CloudOff, Layers, Activity, DollarSign, ArrowRight, Zap, Database, Server, Lock } from 'lucide-react';
import ToolGate from '../../components/tool-gate';
import { NewsletterForm } from '../../components/newsletter-form';
import styles from './styles.module.css';

// --- PERSONA TYPES ---
type Persona = 'CFO' | 'CTO' | 'CEO' | 'PE_Partner';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'CEO', label: 'CEO/Founder', icon: Activity },
    { id: 'CTO', label: 'CTO', icon: Layers },
    { id: 'PE_Partner', label: 'PE Deal Partner', icon: Server },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

export default function CloudContent() {
    const [persona, setPersona] = useState<Persona>('CFO');
    const [step, setStep] = useState(1);

    // Inputs
    const [totalBill, setTotalBill] = useState(75000); 
    const [computeP, setComputeP] = useState(40);
    const [dbP, setDbP] = useState(40);
    const [egressP, setEgressP] = useState(20);
    
    // UI States
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [showGate, setShowGate] = useState(false);

    // Auto-balance percentages
    const handleSliderChange = (type: 'compute' | 'db' | 'egress', val: number) => {
        if (type === 'compute') {
            setComputeP(val);
            const remaining = 100 - val;
            setDbP(Math.round(remaining * 0.66));
            setEgressP(Math.round(remaining * 0.34));
        }
        if (type === 'db') {
            setDbP(val);
            const remaining = 100 - val;
            setComputeP(Math.round(remaining * 0.6));
            setEgressP(Math.round(remaining * 0.4));
        }
    };

    const analyze = async () => {
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1200));

            // Component values
            const awsCompute = totalBill * (computeP / 100);
            const awsDb = totalBill * (dbP / 100);
            const awsEgress = totalBill * (egressP / 100);

            // The "Basecamp Index" 
            // AWS Compute is around 5x identical bare-metal (save 80%)
            // AWS Managed DBs are around 7x self-hosted NVMe (save 85%)
            // AWS Egress ($0.09/GB) is roughly 25x unmetered bandwidth costs (save 95%)
            const bmCompute = awsCompute * 0.20;
            const bmDb = awsDb * 0.15;
            const bmEgress = awsEgress * 0.05;

            const extraDevops = 12000; // Adding a 12k/mo SRE for managing the bare metal

            const bareMetalTotal = bmCompute + bmDb + bmEgress + extraDevops;
            const monthlySavings = totalBill - bareMetalTotal;
            const annualSavings = monthlySavings * 12;

            // Enterprise Value Multiplier (assuming 8x revenue multiplier in SaaS)
            const evCreation = annualSavings * 8;
            
            // Typical implementation cost for a Deft/Equinix migration
            const migrationCapEx = 250000; 
            const breakevenMonths = Math.max(1, Math.ceil(migrationCapEx / monthlySavings));

            const generatedRoadmap = [
                {
                    month: 1,
                    focus: "Hardware & Networking",
                    actionItems: [
                        "Size bare-metal baseline (Equinix/Deft)",
                        "Provision BGP & cross-connects",
                        "Establish private IPsec to AWS VPC"
                    ]
                },
                {
                    month: 2,
                    focus: "State Repatriation",
                    actionItems: [
                        "Implement dual-write on primary arrays",
                        "Migrate read-replicas off RDS/Aurora",
                        "Cutover primary DBs to NVMe clusters"
                    ]
                },
                {
                    month: 3,
                    focus: "Compute & Ingress Shift",
                    actionItems: [
                        "Deploy stateless API nodes (K8s/Nomad)",
                        "Route 10% of ingress via Cloudflare/Route53",
                        "Verify telemetry & latency baselines"
                    ]
                },
                {
                    month: 4,
                    focus: "Full Cloud Exit",
                    actionItems: [
                        "Ramp remaining 90% traffic to Private DC",
                        "Spin down legacy EC2/ECS clusters",
                        "Terminate Managed AWS EDP/Contracts"
                    ]
                }
            ];

            setResults({
                awsTotal: totalBill,
                bmTotal: bareMetalTotal,
                monthlySavings,
                annualSavings,
                awsStats: { compute: awsCompute, db: awsDb, egress: awsEgress },
                bmStats: { compute: bmCompute, db: bmDb, egress: bmEgress, devops: extraDevops },
                evCreation,
                breakevenMonths,
                roadmap: generatedRoadmap,
                heavyEgress: egressP >= 30,
                heavyDb: dbP >= 40
            });

            // Persist the run to the intelligence dashboard
            fetch('/api/tools/runs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tool_id: 'cloud-repatriation',
                    run_data: { totalBill, computeP, dbP, egressP },
                    output_metrics: { annualSavings, evCreation, breakevenMonths }
                })
            }).catch(e => console.error('Failed to log tool run:', e));

        } catch (error: any) {
            console.error(error);
            alert(`Execution failed: ${error.message}`);
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
            <ToolCelebration show={!!results} toolName="CLOUD-ARBITRAGE" />
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">Cloud Repatriation</span>
            </div>

            {!results ? (
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 border border-white/5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-rose-400 uppercase tracking-widest">The "Basecamp Index" Arbitrage</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Exit the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Cloud Cartel.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl">
                            AWS operates at an 80% blended gross margin because you are renting abstraction, not hardware. Calculate the exact Enterprise Value you create by moving static workloads back to bare-metal servers.
                        </p>

                        <div className="mb-8">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Auditing from the perspective of...</div>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAS.map(p => (
                                    <button key={p.id} onClick={() => setPersona(p.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id ? 'bg-rose-500/10 border-rose-500 text-rose-400' : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/30'}`}
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
                                        <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold font-mono text-sm border border-rose-500/30">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">The AWS/GCP Bleed</h3>
                                            <p className="text-sm text-zinc-500">What is your monthly run-rate?</p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-mono text-rose-400 uppercase tracking-widest">Monthly Cloud Invoice</label>
                                            <div className="text-3xl font-bold text-white font-mono">${(totalBill/1000).toFixed(0)}k</div>
                                        </div>
                                        <input title="Monthly" type="range" min="5000" max="750000" step="5000" value={totalBill} onChange={e => setTotalBill(parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500" />
                                    </div>

                                    <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-rose-400 transition-all flex items-center justify-center gap-2">
                                        Next: Deconstruct Bill <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold font-mono text-sm border border-orange-500/30">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Invoice Allocation</h3>
                                            <p className="text-sm text-zinc-500">Different services carry different margins. Approximate the split.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2"><Server size={12}/> Compute (EC2, ECS, EKS)</label>
                                                <div className="text-xl font-bold text-white font-mono">{computeP}%</div>
                                            </div>
                                            <input title="Compute" type="range" min="10" max="80" step="5" value={computeP} onChange={e => handleSliderChange('compute', parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" />
                                        </div>

                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2"><Database size={12}/> Database & Storage</label>
                                                <div className="text-xl font-bold text-white font-mono">{dbP}%</div>
                                            </div>
                                            <input title="Database" type="range" min="10" max="80" step="5" value={dbP} onChange={e => handleSliderChange('db', parseInt(e.target.value))} className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500" />
                                        </div>

                                        <div className="p-6 bg-black/40 rounded-xl border border-white/5 relative group">
                                            <div className="flex justify-between items-end mb-1">
                                                <label className="text-xs font-mono text-rose-500 uppercase tracking-widest flex items-center gap-2"><Activity size={12}/> Network Egress/Bandwidth</label>
                                                <div className="text-xl font-bold text-white font-mono">{egressP}%</div>
                                            </div>
                                            { }
                                            <div className="w-full bg-zinc-800 h-2 rounded mt-2 overflow-hidden"><div className={`bg-rose-500 h-full ${styles.progressBar}`} style={{'--progress-width': `${egressP}%`} as React.CSSProperties} /></div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="w-1/3 py-4 bg-zinc-900 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-all">Back</button>
                                        <div className="w-2/3">
                                            <ShineBorder borderColor="rgba(244, 63, 94, 0.6)" duration={2}>
                                                <button onClick={() => { setShowGate(true); }} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-rose-500 transition-all flex items-center justify-center gap-3">
                                                    {loading ? ( <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> MODELING...</> ) : ( "RUN ARBITRAGE SIMULATION →" )}
                                                </button>
                                            </ShineBorder>
                                        </div>
                                    </div>

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="Cloud FinOps Matrix" onUnlock={() => { setShowGate(false); analyze(); }}><></></ToolGate>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            ) : (
                <div id="cloud-results-artifact" className="bg-[#050505] p-2 sm:p-6 rounded-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-900/40 border border-rose-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">FinOps Arbitrage Model Complete</h2>
                            <p className="text-sm text-zinc-400">Your repatriation economics clearly establish a mandate to exit the cloud.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="cloud-pdf-export-zone" fileName={`Cloud_Repatriation_${persona}.pdf`} />
                        </div>
                    </div>

                    <div id="cloud-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-white/10">
                                <BorderBeam size={400} duration={12} delay={9} borderWidth={1.5} colorFrom="#f43f5e" colorTo="#f97316" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Net EBITDA Recovery</div>
                                        <div className="text-5xl sm:text-6xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                                            +{formatMoney(results.annualSavings)} <span className="text-2xl text-zinc-500">/ yr</span>
                                        </div>
                                        <div className="mt-6">
                                            <span className="px-3 py-1.5 rounded-full bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
                                                <TrendingUpIcon /> {formatMoney(results.evCreation)} Enterprise Value Created
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                                            By shifting your static $ {(results.awsTotal/1000).toFixed(0)}k/mo AWS baseline to a high-density bare metal server cluster, you shrink your infrastructure OpEx by roughly {((results.monthlySavings / results.awsTotal)*100).toFixed(0)}%.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="bg-black/50 p-6 rounded-2xl border border-white/5 space-y-4">
                                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                                <span className="text-xs font-mono text-zinc-500 uppercase">Legacy AWS Invoice</span>
                                                <span className="text-lg font-mono text-red-400">{formatMoney(results.awsTotal)}/mo</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                                <span className="text-xs font-mono text-zinc-500 uppercase">Private DC + Devops</span>
                                                <span className="text-lg font-mono text-emerald-400">{formatMoney(results.bmTotal)}/mo</span>
                                            </div>
                                            <div className="flex justify-between items-center pb-1">
                                                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest font-bold">Migration Payback</span>
                                                <span className="text-xl font-mono font-bold text-white">{results.breakevenMonths} Months</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <h3 className="text-white font-bold font-grotesk text-xl mb-4 text-center mt-10 border-t border-white/10 pt-10">Capital Inefficiency Heatmap</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 relative overflow-hidden group">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Compute Abstraction Tax</div>
                                    <div className="flex justify-between text-xs font-mono mb-1"><span className="text-red-400">AWS (c5/m5)</span><span className="text-emerald-400">Bare Metal (Dual Epyc)</span></div>
                                    <div className="flex justify-between font-bold mb-4 tracking-tighter"><span className="text-red-400 text-2xl">{formatMoney(results.awsStats.compute)}</span><span className="text-emerald-400 text-2xl">{formatMoney(results.bmStats.compute)}</span></div>
                                </div>
                                
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 relative overflow-hidden group">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Managed DB Tax (RDS/Aurora)</div>
                                    <div className="flex justify-between text-xs font-mono mb-1"><span className="text-red-400">AWS</span><span className="text-emerald-400">Dedicated NVMe</span></div>
                                    <div className="flex justify-between font-bold mb-4 tracking-tighter"><span className="text-red-400 text-2xl">{formatMoney(results.awsStats.db)}</span><span className="text-emerald-400 text-2xl">{formatMoney(results.bmStats.db)}</span></div>
                                </div>

                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 relative overflow-hidden group">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Data Transfer (Egress Cartel)</div>
                                    <div className="flex justify-between text-xs font-mono mb-1"><span className="text-red-400">AWS ($0.09/GB)</span><span className="text-emerald-400">Unmetered 10G</span></div>
                                    <div className="flex justify-between font-bold mb-4 tracking-tighter"><span className="text-red-400 text-2xl">{formatMoney(results.awsStats.egress)}</span><span className="text-emerald-400 text-2xl">{formatMoney(results.bmStats.egress)}</span></div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* CLOUD EXIT GANTT CHART */}
                        <ScrollReveal delay={150}>
                            <h3 className="text-white font-bold font-grotesk text-xl mb-4 text-center mt-10 border-t border-white/10 pt-10 flex items-center justify-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                120-Day Workload Repatriation Timeline
                            </h3>
                            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-500 to-amber-500"></div>
                                <div className="space-y-6 md:space-y-8">
                                    {results.roadmap.map((plan: any, i: number) => (
                                        <div key={i} className="relative md:pl-6 pl-4">
                                            {/* Timeline dot */}
                                            <div className="absolute left-[-0.3rem] md:left-[-1.3rem] top-2 w-3 h-3 rounded-full border-2 border-[#0f1115] bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)] z-10"></div>
                                            
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                                <div className={`px-3 py-1 rounded-md text-[10px] uppercase font-mono tracking-widest shrink-0 inline-block w-fit ${plan.month === 1 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 font-bold' : 'bg-white/5 text-zinc-400'}`}>
                                                    Month {plan.month} {plan.month === 1 && '— CRITICAL DEPENDENCY'}
                                                </div>
                                                <div className="font-bold text-white text-base">
                                                    {plan.focus}
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {plan.actionItems.map((action: string, j: number) => {
                                                    const widths = ["w-full", "w-[90%]", "w-[95%]"];
                                                    const width = widths[j % widths.length];
                                                    const colorClasses = [
                                                        "from-red-500/20 to-rose-500/20 border-rose-500/50 text-rose-200",
                                                        "from-orange-500/20 to-amber-500/20 border-amber-500/50 text-amber-200",
                                                        "from-zinc-500/20 to-zinc-600/20 border-zinc-500/50 text-zinc-300"
                                                    ];
                                                    const color = colorClasses[i % colorClasses.length];
                                                    
                                                    return (
                                                        <div key={j} className={`${width} bg-gradient-to-r ${color} border-l-2 p-3 rounded-r-md min-h-[70px] flex items-center transition-all hover:translate-x-1 duration-300 shadow-sm`}>
                                                            <span className="text-xs leading-relaxed">{action}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="absolute left-[0.15rem] md:left-[-0.95rem] top-4 bottom-4 w-px bg-white/10 z-0 hidden md:block"></div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* PRESCRIPTIVE INFRASTRUCTURE PLAYBOOKS */}
                        <ScrollReveal delay={200}>
                            <div className="capsule-container rounded-2xl p-6 sm:p-8 mt-10 border border-white/5 bg-black/20">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Prescriptive Repatriation Tactics
                                </h3>
                                <p className="text-zinc-400 text-sm mb-8">Based on your AWS/GCP invoice breakdown, implement these architectural shifts to realize your ${formatMoney(results.annualSavings)}/yr savings.</p>

                                <div className="space-y-4">
                                    {/* General Compute Migration */}
                                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start">
                                        <div className="bg-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/30">
                                            <span className="text-cyan-400 font-bold text-xl">🖥️</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-2">Docker Lift & Shift (EC2/ECS)</h4>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">Stateless compute is the easiest target. AWS EC2 operates at an ~85% gross margin. Moving containers from ECS to Nomad or K3s on dual-EPYC bare metal is a solved 1-week problem.</p>
                                            <div className="bg-black/40 p-3 rounded text-xs font-mono text-zinc-300 border border-white/5 border-l-2 border-l-cyan-500">
                                                <span className="text-cyan-400">ACTION:</span> Lease 2 high-density chassis from Deft/Equinix. Install Proxmox or bare-metal Kubernetes. Adjust CI/CD to deploy images to new IP block simultaneously.
                                            </div>
                                        </div>
                                    </div>

                                    {/* DB Protocol */}
                                    {results.heavyDb && (
                                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start">
                                            <div className="bg-amber-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/30">
                                                <span className="text-amber-400 font-bold text-xl">🗄️</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-2">Managed RDS Abstraction Tax</h4>
                                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">You are paying a premium for AWS Aurora/RDS. Databases are simply blocks on disks—an NVMe bare metal cluster will yield 15x IOPS for 1/8th the price.</p>
                                                <div className="bg-black/40 p-3 rounded text-xs font-mono text-zinc-300 border border-white/5 border-l-2 border-l-amber-500">
                                                    <span className="text-amber-400">ACTION:</span> Set up logical replication from AWS RDS to your private dedicated Postgres NVMe cluster. Once synced, pause writes on AWS, failover DNS, and sever the cloud DB connection.
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Egress Protocol */}
                                    {results.heavyEgress && (
                                        <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start">
                                            <div className="bg-rose-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/30">
                                                <span className="text-rose-400 font-bold text-xl">🌐</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-2">The Egress Cartel Trap</h4>
                                                <p className="text-zinc-400 text-sm leading-relaxed mb-4">AWS charges $0.09/GB for data egress. This is an artificial monopoly markup. 10G unmetered drops in a private rack cost less than $1,000/mo statically.</p>
                                                <div className="bg-black/40 p-3 rounded text-xs font-mono text-zinc-300 border border-white/5 border-l-2 border-l-rose-500">
                                                    <span className="text-rose-400">ACTION:</span> Move all high-bandwidth egress paths (video, streaming, heavy API JSON payloads) behind Cloudflare to nullify AWS egress, then route directly from your bare metal unmetered pipelines.
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>

                        <VaultUpsell 
                            urgencyLevel={results.evCreation > 5000000 ? 'critical' : 'growth'}
                            recommendedTracks={[
                                { id: 'TRACK-04', title: 'AI Unit Economics & Margin Collapse', desc: 'Identify how rented hardware destroys long term multiples.' },
                                { id: 'TRACK-07', title: 'Data Sovereignty & Local Enclaves', desc: 'Step-by-step enclave deployment to legally bypass SaaS vendor IP contamination.' }
                            ]} 
                        />

                        {/* Action Footer */}
                        <ScrollReveal delay={250}>
                            <div className="flex justify-center flex-wrap gap-6 mt-8" data-html2canvas-ignore>
                                <button onClick={() => setResults(null)} className="text-zinc-500 font-mono tracking-widest text-xs hover:text-white uppercase transition-colors">← Refine Financials</button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}

function TrendingUpIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    )
}
