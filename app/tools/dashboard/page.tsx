'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Database, History } from 'lucide-react';

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

    if (!isLoaded) return <div className="min-h-screen bg-[#050505] flex items-center justify-center"><div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" /></div>;

    if (!user) {
        return (
            <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Authentication Required</h1>
                <p className="text-zinc-400 mb-8 max-w-md">You must be signed in to view your longitudinal execution data and historical tool snapshots.</p>
                <Link href="/sign-in" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">Sign In</Link>
            </div>
        );
    }

    const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    const getToolColor = (toolId: string) => {
        switch (toolId) {
            case 'APER': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
            case 'AUEB': return 'text-red-400 bg-red-400/10 border-red-400/20';
            case 'EV-SE': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
            default: return 'text-white bg-white/10 border-white/20';
        }
    };

    const renderRunCard = (run: ToolRun) => {
        const date = new Date(run.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        
        let primaryMetric = { label: 'Metric', value: 'N/A' };
        let secondaryMetric = { label: 'Secondary', value: 'N/A' };

        if (run.tool_id === 'APER') {
            primaryMetric = { label: 'APER', value: formatCurrency(run.output_metrics?.aper || 0) };
            secondaryMetric = { label: 'Eng. ROI', value: `${(run.output_metrics?.multiplier || 0).toFixed(1)}x` };
        } else if (run.tool_id === 'AUEB') {
            primaryMetric = { label: 'Gross Margin', value: `${(run.output_metrics?.grossMargin || 0).toFixed(1)}%` };
            secondaryMetric = { label: 'Monthly AI Cost', value: formatCurrency(run.output_metrics?.monthlyCost || 0) };
        } else if (run.tool_id === 'EV-SE') {
            primaryMetric = { label: 'Wealth Gap', value: formatCurrency(run.output_metrics?.wealthGap || 0) };
            secondaryMetric = { label: 'Confidence', value: `${(run.output_metrics?.adjustedConfidence || 0).toFixed(0)}%` };
        }

        return (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={run.id} 
                className="bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <span className={`px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-md border ${getToolColor(run.tool_id)}`}>
                            {run.tool_id}
                        </span>
                        <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                            <Calendar size={12} /> {date}
                        </span>
                    </div>
                    <div className="flex items-center gap-8">
                        <div>
                            <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{primaryMetric.label}</div>
                            <div className="text-2xl font-bold text-white">{primaryMetric.value}</div>
                        </div>
                        <div>
                            <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{secondaryMetric.label}</div>
                            <div className="text-xl font-medium text-zinc-300">{secondaryMetric.value}</div>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                    <Link href={`/tools/${run.tool_id.toLowerCase()}`} className="text-sm font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                        Re-run Analysis <ArrowRight size={14} />
                    </Link>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-200">
            <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Database className="text-zinc-400" size={18} />
                        <span className="font-bold tracking-tight text-lg">Intelligence <span className="text-zinc-600 font-normal">| Longitudinal Dashboard</span></span>
                    </div>
                    <Link href="/system" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
                        Back to Hub
                    </Link>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-6 py-16">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">Historical Execution Data</h1>
                    <p className="text-lg text-zinc-400">Track your margin erosion, valuation gaps, and engineering efficiency across time.</p>
                </div>

                {loading ? (
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-32 bg-zinc-900/20 border border-white/5 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                ) : runs.length === 0 ? (
                    <div className="text-center py-24 bg-zinc-900/20 border border-white/5 rounded-3xl border-dashed">
                        <History className="mx-auto text-zinc-600 mb-4" size={48} />
                        <h3 className="text-xl font-bold text-white mb-2">No historical data found</h3>
                        <p className="text-zinc-500 mb-8 max-w-md mx-auto">You haven't executed any enterprise tool snapshots yet. Run an analysis to establish your baseline.</p>
                        <div className="flex items-center justify-center gap-4">
                            <Link href="/tools/aper" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors">Run APER</Link>
                            <Link href="/tools/ev-se" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors">Run EV-SE</Link>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {runs.map(renderRunCard)}
                    </div>
                )}
            </main>
        </div>
    );
}
