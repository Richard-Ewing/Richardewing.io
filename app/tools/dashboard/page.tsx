'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Database, History, Activity, ShieldAlert, TrendingUp } from 'lucide-react';
import { GlowCard } from '../../components/magicui/glow-card';
import { BorderBeam } from '../../components/magicui/border-beam';
import NumberTicker from '../../components/magicui/number-ticker';

interface ToolRun {
    id: string;
    tool_id: string;
    run_data: any;
    output_metrics: any;
    created_at: string;
}

export default function IntelligenceDashboard() {
    const { user, isLoaded } = useUser();
    const [runs, setRuns] = useState<ToolRun[]>([]);
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

    if (!isLoaded) return <div className="min-h-screen bg-white flex items-center justify-center"><div className="w-8 h-8 border-2 border-zinc-500 border-t-white rounded-full animate-spin" /></div>;

    if (!user) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-3xl font-bold text-zinc-950 mb-4">Authentication Required</h1>
                <p className="text-zinc-900 mb-8 max-w-md">You must be signed in to access the C-Suite Command Center and historical execution data.</p>
                <Link href="/sign-in" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">Authenticate</Link>
            </div>
        );
    }

    const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    const getToolColor = (toolId: string) => {
        switch (toolId) {
            case 'APER': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
            case 'AUEB': return 'text-red-400 bg-red-400/10 border-red-400/20';
            case 'EV-SE': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
            case 'PDI': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
            case 'DUE-DILIGENCE': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
            case 'CLOUD-REPAT': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
            default: return 'text-zinc-950 bg-white/10 border-zinc-500';
        }
    };

    // Calculate Aggregates
    let totalValuationGap = 0;
    let avgConfidence = 0;
    let countConfidence = 0;

    runs.forEach(r => {
        if (r.tool_id === 'EV-SE' && r.output_metrics?.wealthGap) totalValuationGap += r.output_metrics.wealthGap;
        if (r.tool_id === 'APER' && r.output_metrics?.aper) totalValuationGap += (r.output_metrics.aper * 0.5); // proxy impact
        if (r.output_metrics?.adjustedConfidence) {
            avgConfidence += r.output_metrics.adjustedConfidence;
            countConfidence++;
        }
    });
    
    const finalConfidence = countConfidence > 0 ? Math.round(avgConfidence / countConfidence) : 0;
    const uniqueToolsRun = new Set(runs.map(r => r.tool_id)).size;
    const totalToolsAvailable = 12;

    const renderRunCard = (run: ToolRun, idx: number) => {
        const date = new Date(run.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        
        let primaryMetric = { label: 'Metric', value: 'N/A' };
        let secondaryMetric = { label: 'Secondary', value: 'N/A' };

        if (run.tool_id === 'APER') {
            primaryMetric = { label: 'Valuation Cap', value: formatCurrency(run.output_metrics?.aper || 0) };
            secondaryMetric = { label: 'Eng ROI Multiplier', value: `${(run.output_metrics?.multiplier || 0).toFixed(1)}x` };
        } else if (run.tool_id === 'AUEB') {
            primaryMetric = { label: 'Projected Margin', value: `${(run.output_metrics?.grossMargin || 0).toFixed(1)}%` };
            secondaryMetric = { label: 'AI Infra Drag', value: formatCurrency(run.output_metrics?.monthlyCost || 0) };
        } else if (run.tool_id === 'EV-SE') {
            primaryMetric = { label: 'Wealth Gap (At Risk)', value: formatCurrency(run.output_metrics?.wealthGap || 0) };
            secondaryMetric = { label: 'Pipeline Confidence', value: `${(run.output_metrics?.adjustedConfidence || 0).toFixed(0)}%` };
        }

        return (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={run.id} 
                className="bg-white/60 border border-zinc-400 hover:border-zinc-500 transition-all p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 w-full md:w-auto">
                    <div className="flex items-center justify-between md:justify-start gap-4 mb-4">
                        <span className={`px-3 py-1 text-xs font-medium font-mono font-bold uppercase tracking-widest rounded-md border ${getToolColor(run.tool_id)}`}>
                            {run.tool_id}
                        </span>
                        <span className="text-sm font-medium text-zinc-950 font-mono flex items-center gap-1">
                            <Calendar size={12} /> {date}
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
                        <div>
                            <div className="text-xs font-medium text-zinc-950 font-mono uppercase tracking-widest mb-1">{primaryMetric.label}</div>
                            <div className="text-2xl font-bold text-zinc-900">{primaryMetric.value}</div>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-white/10" />
                        <div>
                            <div className="text-xs font-medium text-zinc-950 font-mono uppercase tracking-widest mb-1">{secondaryMetric.label}</div>
                            <div className="text-xl font-medium text-zinc-900">{secondaryMetric.value}</div>
                        </div>
                    </div>
                </div>
                
                <div className="relative z-10 flex items-center gap-4 border-t md:border-t-0 md:border-l border-zinc-400 pt-4 md:pt-0 md:pl-6 w-full md:w-auto mt-2 md:mt-0">
                    <Link href={`/tools/${run.tool_id.toLowerCase()}`} className="w-full md:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-zinc-950 rounded-lg text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                        Re-Execute <ArrowRight size={14} />
                    </Link>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-white text-zinc-950">
            <nav className="border-b border-zinc-400 bg-white/80 backdrop-blur-2xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Activity className="text-cyan-400" size={18} />
                        <span className="font-bold tracking-tight text-lg text-zinc-900">C-Suite Command Center <span className="text-zinc-800 font-normal">| Strategic Diagnostics</span></span>
                    </div>
                    <Link href="/system" className="text-xs font-medium font-mono text-zinc-900 hover:text-zinc-900 transition-colors uppercase tracking-widest px-4 py-2 bg-white/5 rounded-md hover:bg-white/10 border border-zinc-400">
                        Exit to Hub
                    </Link>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">

                {/* Executive Summary Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <GlowCard className="p-8 bg-zinc-50 border border-zinc-400 rounded-3xl relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                <ShieldAlert size={20} className="text-red-400" />
                            </div>
                            <span className="text-xs font-medium font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20 tracking-widest uppercase">Systemic Risk</span>
                        </div>
                        <div className="text-sm font-mono text-zinc-800 uppercase tracking-widest mb-2">Identified Valuation Gap</div>
                        <div className="text-4xl font-bold font-grotesk text-zinc-950 flex items-baseline gap-1">
                            $ <NumberTicker value={totalValuationGap} />
                        </div>
                        <p className="text-sm font-medium text-zinc-950 mt-4 leading-relaxed">Aggregated enterprise value theoretically at risk due to technical debt, margin drag, and inefficient APER.</p>
                        <BorderBeam duration={12} delay={0} size={250} />
                    </GlowCard>

                    <GlowCard className="p-8 bg-zinc-50 border border-zinc-400 rounded-3xl relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <TrendingUp size={20} className="text-emerald-400" />
                            </div>
                            <span className="text-xs font-medium font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 tracking-widest uppercase">Health Metric</span>
                        </div>
                        <div className="text-sm font-mono text-zinc-800 uppercase tracking-widest mb-2">Eng Pipeline Confidence</div>
                        <div className="text-4xl font-bold font-grotesk text-zinc-950 flex items-baseline gap-1">
                            <NumberTicker value={finalConfidence} /> %
                        </div>
                        <p className="text-sm font-medium text-zinc-950 mt-4 leading-relaxed">Aggregate confidence score across all executed technical benchmarks and organizational health metrics.</p>
                        <BorderBeam duration={8} delay={3} size={250} />
                    </GlowCard>

                    <GlowCard className="p-8 bg-zinc-50 border border-zinc-400 rounded-3xl relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <Database size={20} className="text-cyan-400" />
                            </div>
                            <span className="text-xs font-medium font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20 tracking-widest uppercase">Coverage</span>
                        </div>
                        <div className="text-sm font-mono text-zinc-800 uppercase tracking-widest mb-2">Diagnostic Tools Run</div>
                        <div className="text-4xl font-bold font-grotesk text-zinc-950 flex items-baseline gap-1">
                            <NumberTicker value={uniqueToolsRun} /> <span className="text-xl text-zinc-950">/ {totalToolsAvailable}</span>
                        </div>
                        <p className="text-sm font-medium text-zinc-950 mt-4 leading-relaxed">You have executed {uniqueToolsRun} out of {totalToolsAvailable} core intelligence protocols to map your organization.</p>
                        <BorderBeam duration={10} delay={6} size={250} />
                    </GlowCard>
                </div>

                <div className="mb-8 flex items-center justify-between border-b border-zinc-400 pb-4">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 flex items-center gap-3">
                        <History className="text-cyan-400" /> Execution Ledger
                    </h2>
                    <span className="text-xs font-mono text-zinc-950 tracking-widest uppercase">{runs.length} Snapshots Stored</span>
                </div>

                {loading ? (
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-40 bg-white/20 border border-zinc-400 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                ) : runs.length === 0 ? (
                    <div className="text-center py-24 bg-white/20 border border-zinc-400 rounded-3xl border-dashed">
                        <History className="mx-auto text-zinc-800 mb-4" size={48} />
                        <h3 className="text-xl font-bold text-zinc-950 mb-2">Awaiting Telemetry</h3>
                        <p className="text-zinc-950 mb-8 max-w-md mx-auto">You have not executed any intelligence playbooks yet. Run an analysis to establish your longitudinal baseline.</p>
                        <div className="flex items-center justify-center gap-4">
                            <Link href="/tools/aper" className="px-6 py-3 bg-white hover:bg-zinc-200 text-black rounded-lg text-sm font-bold uppercase tracking-widest transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">Execute APER</Link>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {runs.map((r, i) => renderRunCard(r, i))}
                    </div>
                )}
            </main>
        </div>
    );
}
