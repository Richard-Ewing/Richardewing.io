'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldAlert, Crosshair, Cpu, Briefcase, Activity, AlertTriangle, Database, TrendingUp, Users, ArrowRight, Zap } from 'lucide-react';
import { BorderBeam } from '../../components/magicui/border-beam';
import NumberTicker from '../../components/magicui/number-ticker';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';

export default function WarRoom() {
    const { user, isLoaded } = useUser();
    const [runs, setRuns] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isLoaded || !user) return;

        fetch('/api/tools/runs')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setRuns(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch runs:", err);
                setLoading(false);
            });
    }, [isLoaded, user]);

    if (!isLoaded) return <div className="min-h-screen bg-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" /></div>;

    if (!user) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
                <ShieldAlert className="text-red-500 w-16 h-16 mb-6 animate-pulse" />
                <h1 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Clearance Required</h1>
                <p className="text-zinc-500 mb-8 max-w-md font-mono text-sm uppercase tracking-widest leading-relaxed">The war room is restricted to verified C-Suite personnel. Authenticate to establish connection.</p>
                <Link href="/sign-in" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-lg transition-colors">Establish Neural Link</Link>
            </div>
        );
    }

    // --- AGGREGATION LOGIC ---
    let totalWealthGap = 0;
    let totalCloudSavings = 0;
    let marginCollapseRisk = 0;
    let pdiDebtScore = 0;
    let pdiCount = 0;

    const latestTools: Record<string, any> = {};

    runs.forEach(run => {
        // We want the latest run for each tool
        if (!latestTools[run.tool_id]) {
            latestTools[run.tool_id] = run;
        }

        // Aggregate All-Time Risks
        if (run.tool_id === 'EV-SE' && run.output_metrics?.wealthGap) totalWealthGap += run.output_metrics.wealthGap;
        if (run.tool_id === 'CLOUD-REPAT' && run.output_metrics?.annualSavings) totalCloudSavings += run.output_metrics.annualSavings;
        if (run.tool_id === 'AUEB' && run.output_metrics?.grossMargin) marginCollapseRisk = run.output_metrics.grossMargin; 
        if (run.tool_id === 'PDI' && run.output_metrics?.score) { pdiDebtScore += run.output_metrics.score; pdiCount++; }
    });

    const averagePDI = pdiCount > 0 ? (pdiDebtScore / pdiCount).toFixed(1) : 'N/A';
    const totalRuns = runs.length;

    const formatCurrency = (val: number) => {
        if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
        if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
        return `$${val.toFixed(0)}`;
    };

    return (
        <div className="min-h-screen bg-[#020202] text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            {/* Grid Background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />

            <nav className="border-b border-red-500/20 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                        <span className="font-bold tracking-widest text-sm text-white uppercase font-mono">Executive War Room <span className="text-zinc-600 font-normal">| ALL DEPARTMENTS</span></span>
                    </div>
                    <Link href="/system" className="text-[10px] font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-widest px-4 py-2 bg-white/5 rounded-md hover:bg-white/10 border border-white/5">
                        Close Session
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12 relative z-10 space-y-12">
                
                {/* GLOBAL THREAT MAP (CEO/BOARD) */}
                <ScrollReveal>
                    <div className="mb-4 flex items-center gap-3">
                        <Crosshair className="text-rose-500" />
                        <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Global Threat Matrix</h2>
                        <div className="flex-1 h-px bg-rose-500/20 ml-4 hidden sm:block"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <GlowCard className="p-6 bg-rose-950/20 border border-rose-500/20 rounded-2xl relative overflow-hidden group">
                            <BorderBeam size={100} duration={8} delay={0} colorFrom="#f43f5e" colorTo="#be123c" />
                            <div className="text-[10px] font-mono text-rose-500 uppercase tracking-widest mb-4">Total Enterprise Value at Risk</div>
                            <div className="text-4xl font-black text-white">{totalWealthGap > 0 ? formatCurrency(totalWealthGap) : 'TBD'}</div>
                            <div className="mt-4 text-xs text-rose-400/70 font-mono tracking-widest">Aggregate across all erosion models.</div>
                        </GlowCard>
                        
                        <GlowCard className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-2xl relative overflow-hidden">
                            <BorderBeam size={100} duration={10} delay={2} colorFrom="#06b6d4" colorTo="#0284c7" />
                            <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-4">Total Cloud/Infra Arbitrage</div>
                            <div className="text-4xl font-black text-white">{totalCloudSavings > 0 ? formatCurrency(totalCloudSavings) : 'TBD'}</div>
                            <div className="mt-4 text-xs text-cyan-400/70 font-mono tracking-widest">OpEx capture ready for execution.</div>
                        </GlowCard>

                        <GlowCard className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-2xl relative overflow-hidden">
                            <BorderBeam size={100} duration={9} delay={4} colorFrom="#10b981" colorTo="#047857" />
                            <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-4">AI Unit Economics (Margin)</div>
                            <div className="text-4xl font-black text-white">{marginCollapseRisk ? `${marginCollapseRisk.toFixed(1)}%` : 'TBD'}</div>
                            <div className="mt-4 text-xs text-emerald-400/70 font-mono tracking-widest">Projected gross margin post-AI scale.</div>
                        </GlowCard>

                        <GlowCard className="p-6 bg-purple-950/20 border border-purple-500/20 rounded-2xl relative overflow-hidden">
                            <BorderBeam size={100} duration={12} delay={6} colorFrom="#a855f7" colorTo="#7e22ce" />
                            <div className="text-[10px] font-mono text-purple-500 uppercase tracking-widest mb-4">Telemetry Snapshots</div>
                            <div className="text-4xl font-black text-white">{totalRuns}</div>
                            <div className="mt-4 text-xs text-purple-400/70 font-mono tracking-widest">Diagnostic data points processed.</div>
                        </GlowCard>
                    </div>
                </ScrollReveal>

                {/* DEPARTMENTAL PANELS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* ENGINEERING (CTO) */}
                    <ScrollReveal delay={100}>
                        <div className="bg-black/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <Cpu className="text-blue-500 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Engineering Protocol</h3>
                                    <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">CTO / Platform Architecture</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-xl border-l-2 border-l-blue-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-zinc-300">Product Debt Index (PDI)</span>
                                        <span className="text-xl font-black text-white">{averagePDI}</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">Current average code entropy spanning all active domains. Determines engineering velocity decay.</p>
                                    {(latestTools['pdi']?.output_metrics?.qpep_roadmap || latestTools['PDI']?.output_metrics?.qpep_roadmap) && (
                                        <div className="mt-4 mb-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Zap className="text-blue-400" size={12} />
                                                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Execution Ready</span>
                                            </div>
                                            <p className="text-xs text-blue-200/70 font-mono">Remediation timeline auto-generated from diagnostic payload.</p>
                                        </div>
                                    )}
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/pdi" className="text-[10px] uppercase tracking-widest text-blue-400 hover:text-white flex items-center gap-1 transition-colors">Execute PDI Modeler <ArrowRight size={12} /></Link>
                                    </div>
                                </div>

                                <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-xl border-l-2 border-l-purple-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-zinc-300">Engineering Velocity Erosion</span>
                                        <span className="text-xl font-black text-white">{latestTools['EV-SE'] ? formatCurrency(latestTools['EV-SE'].output_metrics?.wealthGap || 0) : 'Pending'}</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">The CapEx being permanently vaporized by slow deployment cycles and untracked sprint spillage.</p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/ev-se" className="text-[10px] uppercase tracking-widest text-purple-400 hover:text-white flex items-center gap-1 transition-colors">Run Valuation Erosion <ArrowRight size={12} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* FINANCE (CFO) */}
                    <ScrollReveal delay={200}>
                        <div className="bg-black/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <Activity className="text-emerald-500 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Finance / Economics</h3>
                                    <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">CFO / FinOps Desk</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-xl border-l-2 border-l-emerald-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-zinc-300">AI Unit Economics (AUEB)</span>
                                        <span className="text-xl font-black text-white text-right">
                                            {latestTools['AUEB'] ? `${(latestTools['AUEB'].output_metrics?.grossMargin || 0).toFixed(1)}%` : 'Pending'}
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">Tracks the collapse of software margins triggered by unbounded LLM API costs.</p>
                                    {(latestTools['AUEB']?.output_metrics?.qpep_roadmap || latestTools['aueb']?.output_metrics?.qpep_roadmap) && (
                                        <div className="mt-4 mb-2 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Zap className="text-emerald-400" size={12} />
                                                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">Execution Ready</span>
                                            </div>
                                            <p className="text-xs text-emerald-200/70 font-mono">Margin defense timeline auto-generated from diagnostic payload.</p>
                                        </div>
                                    )}
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/aueb" className="text-[10px] uppercase tracking-widest text-emerald-400 hover:text-white flex items-center gap-1 transition-colors">Calculate Margin <ArrowRight size={12} /></Link>
                                    </div>
                                </div>

                                <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-xl border-l-2 border-l-cyan-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-zinc-300">Cloud FinOps Arbitrage</span>
                                        <span className="text-xl font-black text-white">{latestTools['CLOUD-REPAT'] ? formatCurrency(latestTools['CLOUD-REPAT'].output_metrics?.annualSavings || 0) : 'Pending'}</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">OpEx available to recapture via private cloud repatriation vs AWS Basecamp index.</p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/cloud-repatriation" className="text-[10px] uppercase tracking-widest text-cyan-400 hover:text-white flex items-center gap-1 transition-colors">Arbitrage Analysis <ArrowRight size={12} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* PEOPLE / TALENT (CHRO) */}
                    <ScrollReveal delay={300}>
                        <div className="bg-black/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <Users className="text-amber-500 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Human Capital & Talent</h3>
                                    <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">CHRO / Resource Allocation</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-xl border-l-2 border-l-amber-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-zinc-300">Cost-per-Engineer Capital (APER)</span>
                                        <span className="text-xl font-black text-white text-right">
                                            {latestTools['APER'] ? `${(latestTools['APER'].output_metrics?.multiplier || 0).toFixed(1)}x` : 'Pending'}
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">Measures the enterprise-value multiplier generated per full-time senior engineer.</p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/aper" className="text-[10px] uppercase tracking-widest text-amber-400 hover:text-white flex items-center gap-1 transition-colors">Audit Headcount Value <ArrowRight size={12} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* EXTERNAL (PE / M&A) */}
                     <ScrollReveal delay={400}>
                        <div className="bg-black/60 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-500/50 transition-colors h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-zinc-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <Briefcase className="text-zinc-300 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Mergers & Acquisitions</h3>
                                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Private Equity / Due Diligence</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-zinc-900/50 border border-white/5 rounded-xl border-l-2 border-l-zinc-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-zinc-300">Technical Due Diligence Tracker</span>
                                        <span className="text-xl font-black text-white text-right">
                                            {latestTools['DUE-DILIGENCE'] ? `${(latestTools['DUE-DILIGENCE'].output_metrics?.adjustedConfidence || 0).toFixed(0)}%` : 'Pending'}
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">Overall technical health and survivability score for inbound acquisition targets.</p>
                                    <div className="mt-4 flex justify-end">
                                        <Link href="/tools/due-diligence" className="text-[10px] uppercase tracking-widest text-zinc-300 hover:text-white flex items-center gap-1 transition-colors">Run External Diligence <ArrowRight size={12} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* AI STRATEGY & RISK (CAIO/CRO) */}
                    <ScrollReveal delay={500}>
                        <div className="bg-black/60 border border-rose-500/10 rounded-3xl p-8 relative overflow-hidden group hover:border-rose-500/30 transition-colors h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-rose-500/10 transition-colors duration-1000"></div>
                            <div className="flex items-center gap-3 mb-8">
                                <AlertTriangle className="text-rose-500 h-8 w-8" />
                                <div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">AI Strategy & Risk</h3>
                                    <p className="text-xs font-mono text-rose-400 uppercase tracking-widest">Chief AI Officer / CRO</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 bg-zinc-900/50 border border-rose-500/20 rounded-xl border-l-2 border-l-rose-500">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold text-zinc-300">Model Collapse Liability</span>
                                        <span className="text-xl font-black text-white text-right">
                                            {totalWealthGap > 0 ? 'High Exposure' : 'Pending Audit'}
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-mono">Financial tax triggered by synthetic data decay forcing continuous model retraining capital expenditure.</p>
                                    
                                    <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                                        <div className="text-[10px] uppercase tracking-widest text-rose-400 font-bold mb-1 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                                            Active Threat Briefing
                                        </div>
                                        <Link href="/blog/model-collapse-financial-modeling" className="text-xs text-white hover:text-rose-300 transition-colors block leading-tight">
                                           Read the CIO.com framework on mitigating this depreciation schedule.
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </main>
        </div>
    );
}
