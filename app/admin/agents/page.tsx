'use client';

import React, { useEffect, useState } from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock, RefreshCw, TrendingUp, FileText, Search, Mail, BarChart3, Zap, XCircle } from 'lucide-react';

interface AgentRun {
    id: string;
    agent: string;
    status: string;
    duration_ms: number;
    items_processed: number;
    summary: string;
    metadata: any;
    created_at: string;
}

interface DashboardData {
    status: string;
    timestamp: string;
    agents: Record<string, {
        last_runs: AgentRun[];
        last_status: string;
        last_run_at: string | null;
        error: string | null;
    }>;
    pipeline: {
        HOT: number;
        WARM: number;
        COLD: number;
        NURTURE: number;
    };
}

const AGENT_CONFIG: Record<string, { icon: any; label: string; description: string; schedule: string }> = {
    'intelligence-digest': {
        icon: Zap,
        label: 'Intelligence Digest',
        description: 'Synthesizes governance trends → newsletter draft',
        schedule: 'Monday 8am / Monthly / Quarterly'
    },
    'benchmark-aggregator': {
        icon: BarChart3,
        label: 'Benchmark Aggregator',
        description: 'Recalculates industry percentile distributions',
        schedule: 'Sunday 3am UTC'
    },
    'seo-health': {
        icon: Search,
        label: 'SEO Health Monitor',
        description: 'Crawls sitemap, checks links, submits IndexNow',
        schedule: 'Daily 4am UTC'
    },
    'lead-scorer': {
        icon: TrendingUp,
        label: 'Lead Scorer',
        description: 'Scores diagnostic users → pipeline tiers',
        schedule: 'Daily 10am UTC'
    },
    'content-expander': {
        icon: FileText,
        label: 'Content Expander',
        description: 'Generates glossary drafts via Gemini',
        schedule: 'Wednesday 6am UTC'
    },
    'daily-ops-email': {
        icon: Mail,
        label: 'Daily Ops Email',
        description: 'Sends morning briefing to richardewing@exogram.ai',
        schedule: 'Daily 7am UTC'
    },
    'seo-optimizer': {
        icon: BarChart3,
        label: 'SEO Optimizer',
        description: 'Pulls GSC data, analyzes starving crowd alignment, emails performance digest',
        schedule: 'Daily 9am UTC'
    }
};

function StatusBadge({ status }: { status: string }) {
    const config: Record<string, { bg: string; text: string; icon: any }> = {
        'completed': { bg: 'bg-emerald-500/10 border-emerald-500/20', text: 'text-emerald-400', icon: CheckCircle },
        'failed': { bg: 'bg-red-500/10 border-red-500/20', text: 'text-red-400', icon: XCircle },
        'skipped': { bg: 'bg-amber-500/10 border-amber-500/20', text: 'text-amber-400', icon: Clock },
        'started': { bg: 'bg-blue-500/10 border-blue-500/20', text: 'text-blue-400', icon: RefreshCw },
        'never-run': { bg: 'bg-zinc-500/10 border-zinc-500/20', text: 'text-zinc-500', icon: Clock },
    };
    const c = config[status] || config['never-run'];
    const Icon = c.icon;

    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${c.bg} ${c.text}`}>
            <Icon className="w-3 h-3" />
            {status.toUpperCase()}
        </span>
    );
}

function timeAgo(dateStr: string | null): string {
    if (!dateStr) return 'Never';
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

export default function AgentDashboard() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

    async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/agent-status');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            setData(json);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch');
        } finally {
            setLoading(false);
            setLastRefresh(new Date());
        }
    }

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000); // Auto-refresh every 60s
        return () => clearInterval(interval);
    }, []);

    const totalLeads = data ? data.pipeline.HOT + data.pipeline.WARM + data.pipeline.COLD + data.pipeline.NURTURE : 0;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-zinc-900 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                                <Activity className="w-5 h-5 text-indigo-400" />
                            </span>
                            <span className="text-xs font-bold font-mono uppercase tracking-widest text-indigo-400">Agent Operations</span>
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Autonomous Agent Dashboard
                        </h1>
                        <p className="text-zinc-500 mt-1 text-sm">Real-time monitoring of all autonomous operations</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-zinc-600">
                            Last refresh: {lastRefresh.toLocaleTimeString()}
                        </span>
                        <button
                            onClick={fetchData}
                            disabled={loading}
                            className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400 text-sm font-medium hover:bg-indigo-500/20 transition-colors disabled:opacity-50"
                        >
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                            Refresh
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                        <p className="text-red-300 text-sm">{error}</p>
                    </div>
                )}

                {/* Pipeline Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-[#12121f] border border-zinc-200/50 rounded-xl p-5">
                        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Hot Leads</p>
                        <p className="text-4xl font-bold text-red-400">{data?.pipeline.HOT ?? '—'}</p>
                    </div>
                    <div className="bg-[#12121f] border border-zinc-200/50 rounded-xl p-5">
                        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Warm Leads</p>
                        <p className="text-4xl font-bold text-amber-400">{data?.pipeline.WARM ?? '—'}</p>
                    </div>
                    <div className="bg-[#12121f] border border-zinc-200/50 rounded-xl p-5">
                        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Total Pipeline</p>
                        <p className="text-4xl font-bold text-indigo-400">{totalLeads || '—'}</p>
                    </div>
                    <div className="bg-[#12121f] border border-zinc-200/50 rounded-xl p-5">
                        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Nurture</p>
                        <p className="text-4xl font-bold text-zinc-500">{data?.pipeline.NURTURE ?? '—'}</p>
                    </div>
                </div>

                {/* Agent Cards */}
                <h2 className="text-lg font-bold text-zinc-700 mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-indigo-400" />
                    Active Agents
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
                    {Object.entries(AGENT_CONFIG).map(([key, config]) => {
                        const agentData = data?.agents[key];
                        const Icon = config.icon;
                        const lastRun = agentData?.last_runs?.[0];

                        return (
                            <div key={key} className="bg-[#12121f] border border-zinc-200/50 rounded-xl p-5 hover:border-indigo-500/30 transition-colors">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="p-1.5 bg-indigo-500/10 rounded-md">
                                            <Icon className="w-4 h-4 text-indigo-400" />
                                        </span>
                                        <h3 className="font-semibold text-zinc-200 text-sm">{config.label}</h3>
                                    </div>
                                    <StatusBadge status={agentData?.last_status || 'never-run'} />
                                </div>
                                <p className="text-xs text-zinc-500 mb-3">{config.description}</p>
                                <div className="space-y-1.5 text-xs">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-600">Schedule</span>
                                        <span className="text-zinc-600 font-mono">{config.schedule}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-600">Last Run</span>
                                        <span className="text-zinc-600">{timeAgo(agentData?.last_run_at || null)}</span>
                                    </div>
                                    {lastRun && (
                                        <>
                                            <div className="flex justify-between">
                                                <span className="text-zinc-600">Duration</span>
                                                <span className="text-zinc-600 font-mono">{lastRun.duration_ms}ms</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-zinc-600">Items</span>
                                                <span className="text-zinc-600 font-mono">{lastRun.items_processed}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                                {lastRun?.summary && (
                                    <div className="mt-3 pt-3 border-t border-zinc-200/50">
                                        <p className="text-xs text-zinc-500 line-clamp-2">{lastRun.summary}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Run History */}
                <h2 className="text-lg font-bold text-zinc-700 mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    Recent Agent Runs
                </h2>
                <div className="bg-[#12121f] border border-zinc-200/50 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-200/50 bg-white/30">
                                    <th className="text-left p-3 text-xs font-mono uppercase tracking-widest text-zinc-600">Agent</th>
                                    <th className="text-left p-3 text-xs font-mono uppercase tracking-widest text-zinc-600">Status</th>
                                    <th className="text-left p-3 text-xs font-mono uppercase tracking-widest text-zinc-600">Time</th>
                                    <th className="text-left p-3 text-xs font-mono uppercase tracking-widest text-zinc-600">Duration</th>
                                    <th className="text-left p-3 text-xs font-mono uppercase tracking-widest text-zinc-600">Items</th>
                                    <th className="text-left p-3 text-xs font-mono uppercase tracking-widest text-zinc-600">Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && Object.entries(data.agents).flatMap(([agent, info]) =>
                                    info.last_runs.map((run: AgentRun) => (
                                        <tr key={run.id} className="border-b border-zinc-200/30 hover:bg-zinc-100/10 transition-colors">
                                            <td className="p-3 font-medium text-zinc-700">{AGENT_CONFIG[agent]?.label || agent}</td>
                                            <td className="p-3"><StatusBadge status={run.status} /></td>
                                            <td className="p-3 text-zinc-500 font-mono text-xs">{timeAgo(run.created_at)}</td>
                                            <td className="p-3 text-zinc-500 font-mono text-xs">{run.duration_ms}ms</td>
                                            <td className="p-3 text-zinc-600 font-mono">{run.items_processed}</td>
                                            <td className="p-3 text-zinc-500 text-xs max-w-xs truncate">{run.summary}</td>
                                        </tr>
                                    ))
                                )}
                                {(!data || Object.values(data.agents).every(a => a.last_runs.length === 0)) && (
                                    <tr>
                                        <td colSpan={6} className="p-8 text-center text-zinc-600">
                                            No agent runs recorded yet. Agents will begin executing on their cron schedules.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
