'use client';

import { useEffect, useState } from 'react';
import { BarChart3, TrendingUp, TrendingDown, AlertTriangle, RefreshCw, ExternalLink, ArrowUpRight, Target } from 'lucide-react';

interface PageData {
    url: string;
    category: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
}

interface QueryData {
    query: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
}

interface CrowdAlignment {
    crowd: string;
    matchingQueries: number;
    totalImpressions: number;
    topQuery: string;
}

interface ActionItem {
    type: string;
    page: string;
    reason: string;
    priority: 'high' | 'medium' | 'low';
}

interface PerformanceData {
    success: boolean;
    summary?: {
        totalPages: number;
        totalClicks: number;
        totalImpressions: number;
        glossaryVsPaidFunnel: {
            glossaryImpressions: number;
            paidFunnelImpressions: number;
            ratio: string;
        };
    };
    categories?: Record<string, { clicks: number; impressions: number; pages: number }>;
    lowCtrPages?: PageData[];
    topPages?: PageData[];
    topQueries?: QueryData[];
    starvingCrowdAlignment?: CrowdAlignment[];
    actions?: ActionItem[];
    error?: string;
    setup?: Record<string, string>;
}

export default function SeoPerformanceDashboard() {
    const [data, setData] = useState<PerformanceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState(28);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/gsc/performance?days=${days}`);
            const json = await res.json();
            setData(json);
        } catch {
            setData({ success: false, error: 'Failed to fetch' });
        }
        setLoading(false);
    };

    useEffect(() => { fetchData(); }, [days]);

    const categoryColors: Record<string, string> = {
        glossary: 'bg-amber-500',
        tools: 'bg-purple-500',
        advisory: 'bg-emerald-500',
        curriculum: 'bg-blue-500',
        blog: 'bg-cyan-500',
        framework: 'bg-rose-500',
        other: 'bg-zinc-400',
    };

    if (loading) {
        return (
            <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-3 py-20">
                    <RefreshCw className="w-5 h-5 animate-spin text-purple-600" />
                    <span className="text-zinc-600 font-mono text-sm">Loading GSC data...</span>
                </div>
            </main>
        );
    }

    if (!data?.success) {
        return (
            <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold font-grotesk text-zinc-950 mb-8">SEO Performance Dashboard</h1>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> Google Search Console Not Connected
                    </h2>
                    <p className="text-amber-800 mb-6">To see live performance data, connect a Google Service Account:</p>
                    {data?.setup && (
                        <ol className="space-y-3">
                            {Object.entries(data.setup).map(([key, value]) => (
                                <li key={key} className="flex items-start gap-3">
                                    <span className="bg-amber-200 text-amber-900 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {key.replace('step', '')}
                                    </span>
                                    <span className="text-sm text-amber-900">{value}</span>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </main>
        );
    }

    const summary = data.summary!;
    const categories = data.categories || {};
    const ratio = parseFloat(summary.glossaryVsPaidFunnel.ratio);

    return (
        <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold font-grotesk text-zinc-950 flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                        SEO Performance
                    </h1>
                    <p className="text-zinc-500 text-sm mt-1">Google Search Console • {days}-day rolling window</p>
                </div>
                <div className="flex items-center gap-2">
                    {[7, 14, 28].map(d => (
                        <button key={d} onClick={() => setDays(d)}
                            className={`px-3 py-1.5 text-xs font-bold font-mono rounded-lg transition-colors ${days === d ? 'bg-purple-600 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
                            {d}d
                        </button>
                    ))}
                    <button onClick={fetchData} className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition-colors">
                        <RefreshCw className="w-4 h-4 text-zinc-600" />
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Total Impressions</div>
                    <div className="text-3xl font-bold text-zinc-950">{summary.totalImpressions.toLocaleString()}</div>
                </div>
                <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Total Clicks</div>
                    <div className="text-3xl font-bold text-emerald-600">{summary.totalClicks.toLocaleString()}</div>
                </div>
                <div className={`border rounded-2xl p-6 ${ratio >= 1 ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Paid/Glossary Ratio</div>
                    <div className={`text-3xl font-bold flex items-center gap-2 ${ratio >= 1 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {summary.glossaryVsPaidFunnel.ratio}x
                        {ratio >= 1 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1">Goal: &gt; 1.0x</div>
                </div>
                <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Total Pages</div>
                    <div className="text-3xl font-bold text-zinc-950">{summary.totalPages}</div>
                </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 mb-8">
                <h2 className="text-lg font-bold text-zinc-950 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" /> Performance by Category
                </h2>
                <div className="space-y-3">
                    {Object.entries(categories)
                        .sort(([, a], [, b]) => b.impressions - a.impressions)
                        .map(([cat, stats]) => {
                            const maxImpressions = Math.max(...Object.values(categories).map(c => c.impressions));
                            const pct = (stats.impressions / maxImpressions) * 100;
                            const avgCtr = stats.clicks / Math.max(stats.impressions, 1);
                            return (
                                <div key={cat} className="flex items-center gap-4">
                                    <div className="w-24 text-sm font-bold text-zinc-700 capitalize flex items-center gap-2">
                                        <div className={`w-2.5 h-2.5 rounded-full ${categoryColors[cat] || 'bg-zinc-400'}`} />
                                        {cat}
                                    </div>
                                    <div className="flex-1">
                                        <div className="w-full h-6 bg-zinc-100 rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full ${categoryColors[cat] || 'bg-zinc-400'} transition-all`}
                                                style={{ width: `${pct}%` }} />
                                        </div>
                                    </div>
                                    <div className="text-right w-24 text-sm font-mono font-bold text-zinc-700">
                                        {stats.impressions.toLocaleString()}
                                    </div>
                                    <div className="text-right w-16 text-xs font-mono text-zinc-500">
                                        {stats.clicks} clicks
                                    </div>
                                    <div className={`text-right w-14 text-xs font-mono font-bold ${avgCtr > 0.03 ? 'text-emerald-600' : avgCtr > 0.01 ? 'text-amber-600' : 'text-red-600'}`}>
                                        {(avgCtr * 100).toFixed(1)}%
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Top Pages */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-zinc-950 mb-4">🏆 Top Pages by Impressions</h2>
                    <div className="space-y-2 max-h-[500px] overflow-y-auto">
                        {(data.topPages || []).slice(0, 20).map((page, i) => (
                            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 transition-colors">
                                <span className="text-xs font-mono text-zinc-400 w-5">{i + 1}</span>
                                <div className={`w-2 h-2 rounded-full ${categoryColors[page.category] || 'bg-zinc-400'}`} />
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm text-zinc-900 truncate font-medium">{page.url}</div>
                                </div>
                                <div className="text-xs font-mono text-zinc-600">{page.impressions.toLocaleString()}</div>
                                <div className={`text-xs font-mono font-bold ${page.ctr > 0.03 ? 'text-emerald-600' : page.ctr > 0.01 ? 'text-amber-600' : 'text-red-600'}`}>
                                    {(page.ctr * 100).toFixed(1)}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Queries */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                    <h2 className="text-lg font-bold text-zinc-950 mb-4">🔍 Top Queries</h2>
                    <div className="space-y-2 max-h-[500px] overflow-y-auto">
                        {(data.topQueries || []).slice(0, 20).map((query, i) => (
                            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 transition-colors">
                                <span className="text-xs font-mono text-zinc-400 w-5">{i + 1}</span>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm text-zinc-900 truncate">{query.query}</div>
                                </div>
                                <div className="text-xs font-mono text-zinc-600">{query.impressions.toLocaleString()}</div>
                                <div className="text-xs font-mono text-zinc-500">{query.clicks}c</div>
                                <div className="text-xs font-mono text-purple-600">#{query.position.toFixed(0)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Low CTR Alert */}
            {data.lowCtrPages && data.lowCtrPages.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> Low CTR Pages (Below 2% — Need Meta Rewrite)
                    </h2>
                    <div className="space-y-2">
                        {data.lowCtrPages.map((page, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-100">
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-zinc-900 truncate">{page.url}</div>
                                    <div className="text-xs text-zinc-500 capitalize">{page.category}</div>
                                </div>
                                <div className="text-sm font-mono text-zinc-600">{page.impressions.toLocaleString()} imp</div>
                                <div className="text-sm font-mono font-bold text-red-600">{(page.ctr * 100).toFixed(1)}% CTR</div>
                                <a href={`https://www.richardewing.io${page.url}`} target="_blank" rel="noopener noreferrer"
                                    className="p-1 rounded hover:bg-red-100 transition-colors">
                                    <ExternalLink className="w-4 h-4 text-red-400" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Funnel Health */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-zinc-950 mb-4 flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-purple-600" /> Funnel Health
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                        <div className="text-xs font-mono text-amber-600 uppercase mb-1">Glossary (Top)</div>
                        <div className="text-2xl font-bold text-zinc-950">{(categories['glossary']?.impressions || 0).toLocaleString()}</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                        <div className="text-xs font-mono text-purple-600 uppercase mb-1">Tools (Mid)</div>
                        <div className="text-2xl font-bold text-zinc-950">{(categories['tools']?.impressions || 0).toLocaleString()}</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                        <div className="text-xs font-mono text-emerald-600 uppercase mb-1">Advisory (Bot)</div>
                        <div className="text-2xl font-bold text-zinc-950">{(categories['advisory']?.impressions || 0).toLocaleString()}</div>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                        <div className="text-xs font-mono text-blue-600 uppercase mb-1">Curriculum</div>
                        <div className="text-2xl font-bold text-zinc-950">{(categories['curriculum']?.impressions || 0).toLocaleString()}</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
