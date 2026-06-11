'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    Activity, AlertTriangle, ArrowUpRight, BarChart3, Bot, CheckCircle, Clock,
    CreditCard, DollarSign, ExternalLink, Eye, Flame, Globe, Layers, LineChart,
    Mail, MousePointerClick, RefreshCw, Search, Shield, Sparkles, Target,
    TrendingDown, TrendingUp, Users, XCircle, Zap
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════════════ */

type Tab = 'overview' | 'seo' | 'revenue' | 'agents' | 'intelligence';

// Revenue
interface RevenueData {
    success?: boolean;
    totalRevenue?: number;
    mrr?: number;
    transactionCount?: number;
    avgOrderValue?: number;
    revenueByCategory?: Record<string, number>;
    recentTransactions?: Array<{
        id: string;
        amount: number;
        currency?: string;
        productName: string;
        date: string;
        status: string;
    }>;
    error?: string;
}

// SEO
interface SeoData {
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
    topPages?: Array<{ url: string; category: string; clicks: number; impressions: number; ctr: number; position: number }>;
    topQueries?: Array<{ query: string; clicks: number; impressions: number; ctr: number; position: number }>;
    lowCtrPages?: Array<{ url: string; category: string; clicks: number; impressions: number; ctr: number; position: number }>;
    starvingCrowdAlignment?: CrowdAlignment[];
    error?: string;
    setup?: Record<string, string>;
    indexNow?: {
        totalSubmitted: number;
        lastStatus: string;
        lastSubmittedAt: string | null;
        history: Array<{ date: string; agent: string; submitted: number; status: string; summary: string }>;
    };
    aiPerformance?: {
        totalImpressions: number;
        totalClicks: number;
        ctr: number;
        position: number;
        queries: Array<{ query: string; clicks: number; impressions: number; ctr: number; position: number }>;
    };
}

interface CrowdAlignment {
    crowd: string;
    matchingQueries: number;
    totalImpressions: number;
    topQuery: string;
}

// Agents
interface AgentRun {
    id: string;
    agent: string;
    status: string;
    duration_ms: number;
    items_processed: number;
    summary: string;
    metadata: Record<string, unknown>;
    created_at: string;
}

interface AgentData {
    status: string;
    timestamp: string;
    agents: Record<string, {
        last_runs: AgentRun[];
        last_status: string;
        last_run_at: string | null;
        error: string | null;
    }>;
    pipeline: { HOT: number; WARM: number; COLD: number; NURTURE: number };
}

// SEO Rewrites
interface SeoRewrite {
    id: string;
    url: string;
    old_title: string;
    new_title: string;
    reasoning: string;
    created_at: string;
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════════════════ */

const AGENT_CONFIG: Record<string, { icon: typeof Activity; label: string; description: string; schedule: string }> = {
    'ceo-agent': { icon: Target, label: 'CEO Agent', description: 'Business strategy & sanity preserver clustering', schedule: 'Weekly 9am UTC' },
    'marketer-agent': { icon: TrendingUp, label: 'Marketer Agent', description: 'AutoResearch ratchet loops (SEO/Email)', schedule: 'Daily 6am UTC' },
    'qa-agent': { icon: Shield, label: 'QA Engineer', description: 'Checkout and API stability monitoring', schedule: 'Continuous' },
    'ux-ui-agent': { icon: Sparkles, label: 'UX/UI Designer', description: 'User friction & interface accessibility analysis', schedule: 'Weekly 10am UTC' },
    'cx-agent': { icon: Users, label: 'CX Agent', description: 'Customer journey, support sentiment & churn analysis', schedule: 'Daily 11am UTC' },
    'intelligence-digest': { icon: Zap, label: 'Intelligence Digest', description: 'Synthesizes governance trends → newsletter draft', schedule: 'Mon 8am / Monthly / Quarterly' },
    'benchmark-aggregator': { icon: BarChart3, label: 'Benchmark Aggregator', description: 'Recalculates industry percentile distributions', schedule: 'Sunday 3am UTC' },
    'seo-health': { icon: Search, label: 'SEO Health Monitor', description: 'Crawls sitemap, checks links, submits IndexNow', schedule: 'Daily 4am UTC' },
    'lead-scorer': { icon: TrendingUp, label: 'Lead Scorer', description: 'Scores diagnostic users → pipeline tiers', schedule: 'Daily 10am UTC' },
    'content-expander': { icon: Layers, label: 'Content Expander', description: 'Generates glossary drafts via Gemini', schedule: 'Wednesday 6am UTC' },
    'daily-ops-email': { icon: Mail, label: 'Daily Ops Email', description: 'Sends morning briefing email', schedule: 'Daily 7am UTC' },
    'seo-optimizer': { icon: LineChart, label: 'SEO Optimizer', description: 'Pulls GSC data, starving crowd alignment, emails digest', schedule: 'Daily 9am UTC' },
    'auto-rewriter': { icon: Bot, label: 'Auto Rewriter', description: 'Autonomously rewrites low-CTR meta titles/descriptions', schedule: 'Triggered by SEO Optimizer' },
};

const CATEGORY_COLORS: Record<string, string> = {
    advisory: 'bg-emerald-500', curriculum: 'bg-blue-500', tools: 'bg-purple-500',
    subscriptions: 'bg-indigo-500', glossary: 'bg-amber-500', blog: 'bg-cyan-500',
    framework: 'bg-rose-500', other: 'bg-zinc-500',
};

const STARVING_CROWDS = [
    { id: 'ai-economics', name: 'VP Eng (AI Billing Shock)', keywords: ['copilot roi', 'ai coding tool cost', 'ai tool pricing', 'github copilot cost', 'ai economics'] },
    { id: 'shadow-ai', name: 'CISO (Shadow AI Risk)', keywords: ['shadow ai', 'ai compliance', 'ai governance', 'eu ai act', 'ai policy'] },
    { id: 'agent-governance', name: 'Platform Eng (Agent Failures)', keywords: ['ai agent failure', 'agentic drift', 'ai agent production', 'llm agent'] },
    { id: 'vibe-coding', name: 'Eng Director (AI Technical Debt)', keywords: ['vibe coding', 'ai technical debt', 'ai code quality', 'copilot code review'] },
    { id: 'hallucination-tax', name: 'Ops VP (Hallucination Cost)', keywords: ['ai hallucination', 'verification tax', 'ai accuracy', 'llm hallucination cost'] },
];

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

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

function fmtCurrency(n: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

function fmtNumber(n: number): string {
    return new Intl.NumberFormat('en-US').format(n);
}

/* ═══════════════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function StatusBadge({ status }: { status: string }) {
    const config: Record<string, { bg: string; text: string; icon: typeof CheckCircle }> = {
        'completed': { bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-600', icon: CheckCircle },
        'success': { bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-600', icon: CheckCircle },
        'failed': { bg: 'bg-red-50 border-red-200', text: 'text-red-600', icon: XCircle },
        'error': { bg: 'bg-red-50 border-red-200', text: 'text-red-600', icon: XCircle },
        'skipped': { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-600', icon: Clock },
        'warning': { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-600', icon: AlertTriangle },
        'started': { bg: 'bg-blue-50 border-blue-200', text: 'text-blue-600', icon: RefreshCw },
        'running': { bg: 'bg-blue-50 border-blue-200', text: 'text-blue-600', icon: RefreshCw },
        'never-run': { bg: 'bg-gray-50 border-gray-200', text: 'text-[#6B6B6B]', icon: Clock },
    };
    const c = config[status] || config['never-run'];
    const Icon = c.icon;
    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${c.bg} ${c.text}`}>
            <Icon className="w-3 h-3" />
            {status.toUpperCase().replace('-', ' ')}
        </span>
    );
}

function KpiCard({ label, value, icon: Icon, color = 'text-[#1A1A1A]', subtitle }: {
    label: string; value: string; icon: typeof DollarSign; color?: string; subtitle?: string;
}) {
    return (
        <div className="bg-white border border-black/8 rounded-xl p-5 hover:border-black/15 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 group">
            <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">{label}</p>
                <span className="p-1.5 bg-[#F5F0EB] rounded-lg group-hover:bg-[#EDE7E0] transition-colors">
                    <Icon className={`w-4 h-4 ${color}`} />
                </span>
            </div>
            <p className={`text-3xl font-bold tracking-tight ${color}`}>{value}</p>
            {subtitle && <p className="text-[11px] text-[#6B6B6B] mt-1.5 font-mono">{subtitle}</p>}
        </div>
    );
}

function SectionHeader({ icon: Icon, title, children }: {
    icon: typeof Activity; title: string; children?: React.ReactNode;
}) {
    return (
        <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
                <span className="p-2 bg-purple-50 border border-purple-200 rounded-lg">
                    <Icon className="w-4 h-4 text-[#7C3AED]" />
                </span>
                <h2 className="text-lg font-bold bg-gradient-to-r from-[#1A1A1A] to-[#4A3A6B] bg-clip-text text-transparent">
                    {title}
                </h2>
            </div>
            {children}
        </div>
    );
}

function NotConnected({ label }: { label: string }) {
    return (
        <div className="bg-white border border-black/8 rounded-xl p-8 flex flex-col items-center justify-center gap-3 shadow-sm">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <p className="text-sm text-[#6B6B6B] font-mono">{label} — Not connected</p>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function CommandCenter() {
    const searchParams = useSearchParams();
    const [tab, setTab] = useState<Tab>('overview');
    const [days, setDays] = useState(28);
    const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
    const [loading, setLoading] = useState(true);

    // Data states
    const [revenue, setRevenue] = useState<RevenueData | null>(null);
    const [seo, setSeo] = useState<SeoData | null>(null);
    const [agents, setAgents] = useState<AgentData | null>(null);
    const [rewrites, setRewrites] = useState<SeoRewrite[]>([]);
    const [intelligence, setIntelligence] = useState<any | null>(null);

    /* ── Fetchers ────────────────────────────────────────────────────── */

    const fetchRevenue = useCallback(async (d: number) => {
        try {
            const res = await fetch(`/api/admin/revenue?days=${d}`);
            return await res.json();
        } catch { return null; }
    }, []);

    const fetchSeo = useCallback(async (d: number) => {
        try {
            const res = await fetch(`/api/gsc/performance?days=${d}`);
            return await res.json();
        } catch { return null; }
    }, []);

    const fetchAgents = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/agent-status');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json();
        } catch { return null; }
    }, []);

    const fetchRewrites = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/agent-status');
            if (!res.ok) return [];
            const data = await res.json();
            // Rewrites may be logged within agent run metadata for seo-optimizer
            const seoRuns = data?.agents?.['seo-optimizer']?.last_runs || [];
            const allRewrites: SeoRewrite[] = [];
            for (const run of seoRuns) {
                if (run.metadata?.autonomousRewrites && Array.isArray(run.metadata.autonomousRewrites)) {
                    // These are stored inline in run metadata from seo-optimizer
                }
                // Also check for starvingCrowdAlignment
            }
            return allRewrites;
        } catch { return []; }
    }, []);

    const fetchIntelligence = useCallback(async () => {
        try {
            const res = await fetch('/api/admin/intelligence');
            if (!res.ok) return null;
            return await res.json();
        } catch { return null; }
    }, []);

    const refreshAll = useCallback(async () => {
        setLoading(true);
        const [revData, seoData, agentData, rewriteData, intlData] = await Promise.all([
            fetchRevenue(days),
            fetchSeo(days),
            fetchAgents(),
            fetchRewrites(),
            fetchIntelligence(),
        ]);
        setRevenue(revData);
        setSeo(seoData);
        setAgents(agentData);
        setRewrites(rewriteData);
        setIntelligence(intlData);
        setLastRefresh(new Date());
        setLoading(false);
    }, [days, fetchRevenue, fetchSeo, fetchAgents, fetchRewrites, fetchIntelligence]);

    useEffect(() => {
        refreshAll();
        const interval = setInterval(refreshAll, 60000);
        return () => clearInterval(interval);
    }, [refreshAll]);

    useEffect(() => {
        const tabParam = searchParams.get('tab') as Tab;
        if (['overview', 'seo', 'revenue', 'agents', 'intelligence'].includes(tabParam)) {
            setTab(tabParam);
        } else {
            setTab('overview');
        }
    }, [searchParams]);


    /* ── Derived data ────────────────────────────────────────────────── */

    const pipeline = agents?.pipeline || { HOT: 0, WARM: 0, COLD: 0, NURTURE: 0 };
    const totalPipeline = pipeline.HOT + pipeline.WARM + pipeline.COLD + pipeline.NURTURE;

    // Compute starving crowd alignment from SEO data
    const crowdAlignment: CrowdAlignment[] = (() => {
        if (!seo?.topQueries) return [];
        const queries = seo.topQueries;
        return STARVING_CROWDS.map(crowd => {
            const matches = queries.filter(q =>
                crowd.keywords.some(k => q.query.toLowerCase().includes(k))
            );
            return {
                crowd: crowd.name,
                matchingQueries: matches.length,
                totalImpressions: matches.reduce((sum, m) => sum + m.impressions, 0),
                topQuery: matches.sort((a, b) => b.impressions - a.impressions)[0]?.query || 'none',
            };
        }).sort((a, b) => b.totalImpressions - a.totalImpressions);
    })();

    const seoCategories = seo?.categories || {};
    const seoSummary = seo?.summary;
    const glossaryRatio = seoSummary ? parseFloat(seoSummary.glossaryVsPaidFunnel.ratio) : 0;

    /* ═════════════════════════════════════════════════════════════════
       TAB SECTIONS
       ═════════════════════════════════════════════════════════════════ */

    /* ── REVENUE SECTION ─────────────────────────────────────────────── */
    const RevenueSection = ({ condensed = false }: { condensed?: boolean }) => {
        if (!revenue?.success) return <NotConnected label="Revenue (Stripe)" />;
        return (
            <div className="space-y-6">
                {!condensed && <SectionHeader icon={DollarSign} title="Revenue" />}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <KpiCard label={`Revenue (${days}d)`} value={fmtCurrency(revenue.totalRevenue || 0)} icon={DollarSign} color="text-emerald-600" />
                    <KpiCard label="MRR" value={fmtCurrency(revenue.mrr || 0)} icon={TrendingUp} color="text-[#7C3AED]" subtitle="Active subscriptions" />
                    <KpiCard label="Transactions" value={fmtNumber(revenue.transactionCount || 0)} icon={CreditCard} color="text-[#7C3AED]" />
                    <KpiCard label="Avg Order Value" value={fmtCurrency(revenue.avgOrderValue || 0)} icon={ArrowUpRight} color="text-amber-600" />
                </div>

                {/* Revenue by Category */}
                {revenue.revenueByCategory && (
                    <div className="bg-white border border-black/8 rounded-xl p-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-[#7C3AED]" />
                            Revenue by Product Category
                        </h3>
                        <div className="space-y-3">
                            {Object.entries(revenue.revenueByCategory)
                                .filter(([, v]) => v > 0)
                                .sort(([, a], [, b]) => b - a)
                                .map(([cat, amount]) => {
                                    const maxAmount = Math.max(...Object.values(revenue.revenueByCategory!).filter(v => v > 0));
                                    const pct = maxAmount > 0 ? (amount / maxAmount) * 100 : 0;
                                    return (
                                        <div key={cat} className="flex items-center gap-4">
                                            <div className="w-28 flex items-center gap-2 shrink-0">
                                                <div className={`w-2.5 h-2.5 rounded-full ${CATEGORY_COLORS[cat] || 'bg-zinc-500'}`} />
                                                <span className="text-sm font-semibold text-[#3A3A3A] capitalize">{cat}</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="w-full h-5 bg-[#F5F0EB] rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${CATEGORY_COLORS[cat] || 'bg-zinc-500'} transition-all duration-700`}
                                                        style={{ width: `${pct}%` }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-24 text-right text-sm font-mono font-bold text-[#1A1A1A]">
                                                {fmtCurrency(amount)}
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                )}

                {/* Recent Transactions */}
                {!condensed && revenue.recentTransactions && revenue.recentTransactions.length > 0 && (
                    <div className="bg-white border border-black/8 rounded-xl overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-black/8">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#7C3AED]" />
                                Recent Transactions
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-black/8 bg-[#FAFAFA]">
                                        <th className="text-left p-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Product</th>
                                        <th className="text-right p-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Amount</th>
                                        <th className="text-right p-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {revenue.recentTransactions.map(t => (
                                        <tr key={t.id} className="border-b border-black/5 hover:bg-[#F5F0EB] transition-colors">
                                            <td className="p-3 text-[#1A1A1A] font-medium">{t.productName}</td>
                                            <td className="p-3 text-right text-emerald-600 font-mono font-bold">{fmtCurrency(t.amount)}</td>
                                            <td className="p-3 text-right text-[#6B6B6B] font-mono text-xs">{timeAgo(t.date)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    /* ── SEO SECTION ──────────────────────────────────────────────────── */
    const SeoSection = ({ condensed = false }: { condensed?: boolean }) => {
        if (!seo?.success) {
            return (
                <div className="space-y-6">
                    {!condensed && <SectionHeader icon={Globe} title="SEO Performance" />}
                    
                    <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-6 shadow-sm">
                        <h3 className="text-sm font-semibold text-amber-900 mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                            Google Search Console Not Connected
                        </h3>
                        <p className="text-xs text-amber-800 mb-4">
                            {seo?.error || 'To see live performance data, connect a Google Service Account.'}
                        </p>
                        {seo?.setup && (
                            <ol className="space-y-2 text-xs text-amber-900 font-mono">
                                {Object.entries(seo.setup).map(([key, value]) => (
                                    <li key={key} className="flex items-start gap-2">
                                        <span className="bg-amber-200 text-amber-900 font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0 mt-0.5">
                                            {key.replace('step', '')}
                                        </span>
                                        <span>{value}</span>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </div>

                    {/* Render IndexNow submission history even if GSC is not connected */}
                    {!condensed && (
                        <div className="bg-white border border-black/8 rounded-xl p-6 shadow-sm">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-indigo-600" /> Bing IndexNow Submission Log
                            </h3>
                            <div className="space-y-2 max-h-[350px] overflow-y-auto">
                                {seo?.indexNow?.history && seo.indexNow.history.length > 0 ? (
                                    seo.indexNow.history.map((run, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-[#F5F0EB]/40 rounded-lg border border-black/5">
                                            <div className="min-w-0">
                                                <div className="text-[10px] font-mono text-[#6B6B6B] capitalize">{run.agent} • {timeAgo(run.date)}</div>
                                                <div className="text-xs font-semibold text-[#1A1A1A] truncate">{run.summary}</div>
                                            </div>
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${run.status === 'completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                                {run.submitted} URL{run.submitted !== 1 && 's'}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-[#6B6B6B]/80 text-xs font-mono">
                                        No IndexNow submission history found.
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            );
        }
        return (
            <div className="space-y-6">
                {!condensed && <SectionHeader icon={Globe} title="SEO Performance" />}

                {/* KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    <KpiCard label="Total Impressions" value={fmtNumber(seoSummary?.totalImpressions || 0)} icon={Eye} color="text-[#7C3AED]" />
                    <KpiCard label="Total Clicks" value={fmtNumber(seoSummary?.totalClicks || 0)} icon={MousePointerClick} color="text-emerald-600" />
                    <KpiCard
                        label="Paid / Glossary Ratio"
                        value={`${seoSummary?.glossaryVsPaidFunnel.ratio || '—'}x`}
                        icon={glossaryRatio >= 1 ? TrendingUp : TrendingDown}
                        color={glossaryRatio >= 1 ? 'text-emerald-600' : 'text-red-600'}
                        subtitle="Goal: > 1.0x"
                    />
                    <KpiCard label="Indexed Pages" value={fmtNumber(seoSummary?.totalPages || 0)} icon={Search} color="text-[#7C3AED]" />
                    <KpiCard
                        label="IndexNow Status"
                        value={fmtNumber(seo.indexNow?.totalSubmitted || 0)}
                        icon={Activity}
                        color="text-[#7C3AED]"
                        subtitle={seo.indexNow?.lastSubmittedAt ? `Last: ${timeAgo(seo.indexNow.lastSubmittedAt)}` : 'No submissions'}
                    />
                    <KpiCard
                        label="AI Overview Imp"
                        value={fmtNumber(seo.aiPerformance?.totalImpressions || 0)}
                        icon={Sparkles}
                        color="text-cyan-600"
                        subtitle={seo.aiPerformance ? `${seo.aiPerformance.totalClicks} clicks • ${((seo.aiPerformance.ctr || 0) * 100).toFixed(1)}% CTR` : 'No AI traffic'}
                    />
                </div>

                {/* Category Breakdown Bars */}
                <div className="bg-white border border-black/8 rounded-xl p-6 shadow-sm">
                    <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#7C3AED]" />
                        Performance by Category
                    </h3>
                    <div className="space-y-3">
                        {Object.entries(seoCategories)
                            .sort(([, a], [, b]) => b.impressions - a.impressions)
                            .map(([cat, stats]) => {
                                const maxImp = Math.max(...Object.values(seoCategories).map(c => c.impressions));
                                const pct = maxImp > 0 ? (stats.impressions / maxImp) * 100 : 0;
                                const avgCtr = stats.clicks / Math.max(stats.impressions, 1);
                                return (
                                    <div key={cat} className="flex items-center gap-4">
                                        <div className="w-24 flex items-center gap-2 shrink-0">
                                            <div className={`w-2.5 h-2.5 rounded-full ${CATEGORY_COLORS[cat] || 'bg-zinc-500'}`} />
                                            <span className="text-sm font-semibold text-[#3A3A3A] capitalize">{cat}</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-full h-5 bg-[#F5F0EB] rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${CATEGORY_COLORS[cat] || 'bg-zinc-500'} transition-all duration-700`}
                                                    style={{ width: `${pct}%` }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-20 text-right text-sm font-mono font-bold text-[#1A1A1A]">
                                            {fmtNumber(stats.impressions)}
                                        </div>
                                        <div className="w-16 text-right text-xs font-mono text-[#6B6B6B]">
                                            {stats.clicks} clicks
                                        </div>
                                        <div className={`w-14 text-right text-xs font-mono font-bold ${avgCtr > 0.03 ? 'text-emerald-600' : avgCtr > 0.01 ? 'text-amber-600' : 'text-red-600'}`}>
                                            {(avgCtr * 100).toFixed(1)}%
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                {/* Glossary vs Paid Funnel */}
                {seoSummary && (
                    <div className={`border rounded-xl p-6 ${glossaryRatio >= 1 ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                        <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                            <ArrowUpRight className={`w-4 h-4 ${glossaryRatio >= 1 ? 'text-emerald-600' : 'text-red-600'}`} />
                            Glossary vs Paid Funnel
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-[#F5F0EB] rounded-lg p-4 text-center">
                                <div className="text-[11px] font-mono uppercase text-amber-600 mb-1">Glossary (Top)</div>
                                <div className="text-2xl font-bold text-[#1A1A1A]">{fmtNumber(seoCategories['glossary']?.impressions || 0)}</div>
                            </div>
                            <div className="bg-[#F5F0EB] rounded-lg p-4 text-center">
                                <div className="text-[11px] font-mono uppercase text-[#7C3AED] mb-1">Tools (Mid)</div>
                                <div className="text-2xl font-bold text-[#1A1A1A]">{fmtNumber(seoCategories['tools']?.impressions || 0)}</div>
                            </div>
                            <div className="bg-[#F5F0EB] rounded-lg p-4 text-center">
                                <div className="text-[11px] font-mono uppercase text-emerald-600 mb-1">Advisory (Bot)</div>
                                <div className="text-2xl font-bold text-[#1A1A1A]">{fmtNumber(seoCategories['advisory']?.impressions || 0)}</div>
                            </div>
                            <div className="bg-[#F5F0EB] rounded-lg p-4 text-center">
                                <div className="text-[11px] font-mono uppercase text-blue-600 mb-1">Curriculum</div>
                                <div className="text-2xl font-bold text-[#1A1A1A]">{fmtNumber(seoCategories['curriculum']?.impressions || 0)}</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Low CTR Alert */}
                {!condensed && seo.lowCtrPages && seo.lowCtrPages.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h3 className="text-sm font-semibold text-red-900 mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            Low CTR Pages (Below 2% — Need Meta Rewrite)
                        </h3>
                        <div className="space-y-2">
                            {seo.lowCtrPages.map((page, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-100 shadow-sm">
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-semibold text-zinc-900 truncate">{page.url}</div>
                                        <div className="text-xs text-zinc-500 capitalize">{page.category}</div>
                                    </div>
                                    <div className="text-xs font-mono text-zinc-600">{fmtNumber(page.impressions)} imp</div>
                                    <div className="text-xs font-mono font-bold text-red-600">{(page.ctr * 100).toFixed(1)}% CTR</div>
                                    <a href={`https://www.richardewing.io${page.url}`} target="_blank" rel="noopener noreferrer"
                                        className="p-1 rounded hover:bg-red-50 transition-colors">
                                        <ExternalLink className="w-4 h-4 text-red-400" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Top Pages & Queries (full view only) */}
                {!condensed && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white border border-black/8 rounded-xl p-6 shadow-sm">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-emerald-600" /> Top Pages
                            </h3>
                            <div className="space-y-1.5 max-h-[400px] overflow-y-auto">
                                {(seo.topPages || []).slice(0, 15).map((page, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F5F0EB] transition-colors">
                                        <span className="text-[11px] font-mono text-[#6B6B6B] w-5">{i + 1}</span>
                                        <div className={`w-2 h-2 rounded-full shrink-0 ${CATEGORY_COLORS[page.category] || 'bg-zinc-500'}`} />
                                        <div className="flex-1 min-w-0 text-sm text-[#1A1A1A] truncate">{page.url}</div>
                                        <div className="text-xs font-mono text-[#6B6B6B]">{fmtNumber(page.impressions)}</div>
                                        <div className={`text-xs font-mono font-bold ${page.ctr > 0.03 ? 'text-emerald-600' : page.ctr > 0.01 ? 'text-amber-600' : 'text-red-600'}`}>
                                            {(page.ctr * 100).toFixed(1)}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white border border-black/8 rounded-xl p-6 shadow-sm">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                <Search className="w-4 h-4 text-[#7C3AED]" /> Top Queries
                            </h3>
                            <div className="space-y-1.5 max-h-[400px] overflow-y-auto">
                                {(seo.topQueries || []).slice(0, 15).map((q, i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F5F0EB] transition-colors">
                                        <span className="text-[11px] font-mono text-[#6B6B6B] w-5">{i + 1}</span>
                                        <div className="flex-1 min-w-0 text-sm text-[#1A1A1A] truncate">{q.query}</div>
                                        <div className="text-xs font-mono text-[#6B6B6B]">{fmtNumber(q.impressions)}</div>
                                        <div className="text-xs font-mono text-[#6B6B6B]">{q.clicks}c</div>
                                        <div className="text-xs font-mono text-[#7C3AED]">#{q.position.toFixed(0)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* IndexNow & AI Search Queries (full view only) */}
                {!condensed && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        {/* IndexNow Logs */}
                        <div className="bg-white border border-black/8 rounded-xl p-6 shadow-sm">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-indigo-600" /> Bing IndexNow Submission Log
                            </h3>
                            <div className="space-y-2 max-h-[350px] overflow-y-auto">
                                {seo.indexNow?.history && seo.indexNow.history.length > 0 ? (
                                    seo.indexNow.history.map((run, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-[#F5F0EB]/40 rounded-lg border border-black/5">
                                            <div className="min-w-0">
                                                <div className="text-[10px] font-mono text-[#6B6B6B] capitalize">{run.agent} • {timeAgo(run.date)}</div>
                                                <div className="text-xs font-semibold text-[#1A1A1A] truncate">{run.summary}</div>
                                            </div>
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${run.status === 'completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                                {run.submitted} URL{run.submitted !== 1 && 's'}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-[#6B6B6B]/80 text-xs font-mono">
                                        No IndexNow submission history found.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* AI performance queries */}
                        <div className="bg-white border border-black/8 rounded-xl p-6 shadow-sm">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-cyan-600" /> AI-Intent Search Queries
                            </h3>
                            <div className="space-y-1.5 max-h-[350px] overflow-y-auto">
                                {seo.aiPerformance?.queries && seo.aiPerformance.queries.length > 0 ? (
                                    seo.aiPerformance.queries.map((q, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#F5F0EB] transition-colors">
                                            <span className="text-[11px] font-mono text-[#6B6B6B] w-5">{i + 1}</span>
                                            <div className="flex-1 min-w-0 text-sm text-[#1A1A1A] font-semibold truncate">{q.query}</div>
                                            <div className="text-xs font-mono text-[#6B6B6B]">{fmtNumber(q.impressions)} imp</div>
                                            <div className="text-xs font-mono text-[#6B6B6B]">{q.clicks} clicks</div>
                                            <div className={`text-xs font-mono font-bold ${q.ctr > 0.03 ? 'text-emerald-600' : q.ctr > 0.01 ? 'text-amber-600' : 'text-red-600'}`}>
                                                {(q.ctr * 100).toFixed(1)}%
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-[#6B6B6B]/80 text-xs font-mono">
                                        No AI-intent search queries detected.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    /* ── AGENTS SECTION ───────────────────────────────────────────────── */
    const AgentsSection = ({ condensed = false }: { condensed?: boolean }) => {
        if (!agents) return <NotConnected label="Agents (Supabase)" />;
        return (
            <div className="space-y-6">
                {!condensed && <SectionHeader icon={Bot} title="Autonomous Agent Activity" />}

                {/* Agent Cards */}
                <div className={`grid gap-4 ${condensed ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}`}>
                    {Object.entries(AGENT_CONFIG).map(([key, config]) => {
                        const agentData = agents.agents?.[key];
                        const Icon = config.icon;
                        const lastRun = agentData?.last_runs?.[0];
                        return (
                            <div key={key} className="bg-white border border-black/8 rounded-xl p-5 hover:border-[#7C3AED]/30 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 shadow-sm">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="p-1.5 bg-purple-50 rounded-md">
                                            <Icon className="w-4 h-4 text-[#7C3AED]" />
                                        </span>
                                        <h4 className="font-semibold text-[#1A1A1A] text-sm">{config.label}</h4>
                                    </div>
                                    <StatusBadge status={agentData?.last_status || 'never-run'} />
                                </div>
                                {!condensed && (
                                    <>
                                        <p className="text-xs text-[#6B6B6B] mb-3">{config.description}</p>
                                        <div className="space-y-1.5 text-xs">
                                            <div className="flex justify-between">
                                                <span className="text-[#6B6B6B]">Schedule</span>
                                                <span className="text-[#3A3A3A] font-mono">{config.schedule}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-[#6B6B6B]">Last Run</span>
                                                <span className="text-[#3A3A3A]">{timeAgo(agentData?.last_run_at || null)}</span>
                                            </div>
                                            {lastRun && (
                                                <>
                                                    <div className="flex justify-between">
                                                        <span className="text-[#6B6B6B]">Duration</span>
                                                        <span className="text-[#3A3A3A] font-mono">{lastRun.duration_ms}ms</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-[#6B6B6B]">Items</span>
                                                        <span className="text-[#3A3A3A] font-mono">{lastRun.items_processed}</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        {lastRun?.summary && (
                                            <div className="mt-3 pt-3 border-t border-black/8">
                                                <p className="text-xs text-[#6B6B6B] line-clamp-2">{lastRun.summary}</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Autonomous Rewrites Log */}
                {!condensed && (
                    <div className="bg-white border border-black/8 rounded-xl overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-black/8 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-600" />
                            <h3 className="text-sm font-semibold text-[#1A1A1A]">Autonomous Rewrites Log</h3>
                        </div>
                        <div className="p-6">
                            {(() => {
                                // Extract rewrite data from seo-optimizer run metadata
                                const seoRuns = agents.agents?.['seo-optimizer']?.last_runs || [];
                                const rewriteEntries: Array<{ url: string; oldTitle: string; newTitle: string; reasoning: string; date: string }> = [];
                                for (const run of seoRuns) {
                                    const meta = run.metadata as Record<string, unknown>;
                                    const rw = meta?.autonomousRewrites;
                                    if (typeof rw === 'number' && rw > 0) {
                                        // Rewrite count noted but details may not be in metadata
                                        rewriteEntries.push({
                                            url: '(see commit)',
                                            oldTitle: `${rw} page(s) rewritten`,
                                            newTitle: 'Deployed to production',
                                            reasoning: `Auto-rewriter ran during seo-optimizer at ${run.created_at}`,
                                            date: run.created_at,
                                        });
                                    }
                                }

                                if (rewriteEntries.length === 0) {
                                    return (
                                        <div className="text-center py-8">
                                            <Bot className="w-8 h-8 text-black/15 mx-auto mb-3" />
                                            <p className="text-sm text-[#6B6B6B]">No autonomous rewrites recorded yet.</p>
                                            <p className="text-xs text-[#6B6B6B]/70 mt-1">The SEO Optimizer triggers auto-rewrites when low-CTR pages are detected.</p>
                                        </div>
                                    );
                                }

                                return (
                                    <div className="space-y-4">
                                        {rewriteEntries.map((rw, i) => (
                                            <div key={i} className="bg-[#F5F0EB] border border-black/5 rounded-lg p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-mono text-[#7C3AED]">{rw.url}</span>
                                                    <span className="text-[11px] text-[#6B6B6B]">{timeAgo(rw.date)}</span>
                                                </div>
                                                <div className="flex items-start gap-3 mb-2">
                                                    <div className="flex-1">
                                                        <div className="text-xs text-red-500/70 line-through mb-1">{rw.oldTitle}</div>
                                                        <div className="text-xs text-emerald-600 font-semibold">{rw.newTitle}</div>
                                                    </div>
                                                </div>
                                                <p className="text-[11px] text-[#6B6B6B] flex items-start gap-1.5">
                                                    <Sparkles className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                                                    {rw.reasoning}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                )}

                {/* Recent Agent Runs table (full view only) */}
                {!condensed && (
                    <div className="bg-white border border-black/8 rounded-xl overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-black/8">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#7C3AED]" />
                                Recent Agent Runs
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-black/8 bg-[#FAFAFA]">
                                        <th className="text-left p-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Agent</th>
                                        <th className="text-left p-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Status</th>
                                        <th className="text-left p-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Time</th>
                                        <th className="text-left p-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Duration</th>
                                        <th className="text-left p-3 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Summary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {agents && Object.entries(agents.agents || {}).flatMap(([agent, info]) =>
                                        info.last_runs.map((run: AgentRun) => (
                                            <tr key={run.id} className="border-b border-black/5 hover:bg-[#F5F0EB] transition-colors">
                                                <td className="p-3 font-medium text-[#1A1A1A]">{AGENT_CONFIG[agent]?.label || agent}</td>
                                                <td className="p-3"><StatusBadge status={run.status} /></td>
                                                <td className="p-3 text-[#6B6B6B] font-mono text-xs">{timeAgo(run.created_at)}</td>
                                                <td className="p-3 text-[#6B6B6B] font-mono text-xs">{run.duration_ms}ms</td>
                                                <td className="p-3 text-[#6B6B6B] text-xs max-w-xs truncate">{run.summary}</td>
                                            </tr>
                                        ))
                                    )}
                                    {(!agents || Object.values(agents.agents || {}).every(a => a.last_runs.length === 0)) && (
                                        <tr>
                                            <td colSpan={5} className="p-8 text-center text-[#6B6B6B]">
                                                No agent runs recorded yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    /* ── PIPELINE SECTION ─────────────────────────────────────────────── */
    const PipelineSection = () => {
        if (!agents) return <NotConnected label="Pipeline (Agent Status)" />;
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-black/8 rounded-xl p-5 hover:border-red-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Hot Leads</p>
                        <Flame className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-4xl font-bold text-red-600">{pipeline.HOT || '—'}</p>
                    <div className="mt-2 h-1 bg-[#F5F0EB] rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 rounded-full transition-all duration-700" style={{ width: `${totalPipeline > 0 ? (pipeline.HOT / totalPipeline) * 100 : 0}%` }} />
                    </div>
                </div>
                <div className="bg-white border border-black/8 rounded-xl p-5 hover:border-amber-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Warm Leads</p>
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                    </div>
                    <p className="text-4xl font-bold text-amber-600">{pipeline.WARM || '—'}</p>
                    <div className="mt-2 h-1 bg-[#F5F0EB] rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full transition-all duration-700" style={{ width: `${totalPipeline > 0 ? (pipeline.WARM / totalPipeline) * 100 : 0}%` }} />
                    </div>
                </div>
                <div className="bg-white border border-black/8 rounded-xl p-5 hover:border-blue-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Cold Leads</p>
                        <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-4xl font-bold text-blue-600">{pipeline.COLD || '—'}</p>
                    <div className="mt-2 h-1 bg-[#F5F0EB] rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full transition-all duration-700" style={{ width: `${totalPipeline > 0 ? (pipeline.COLD / totalPipeline) * 100 : 0}%` }} />
                    </div>
                </div>
                <div className="bg-white border border-black/8 rounded-xl p-5 hover:border-black/15 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#6B6B6B]">Nurture</p>
                        <Users className="w-4 h-4 text-[#6B6B6B]" />
                    </div>
                    <p className="text-4xl font-bold text-[#3A3A3A]">{pipeline.NURTURE || '—'}</p>
                    <div className="mt-2 h-1 bg-[#F5F0EB] rounded-full overflow-hidden">
                        <div className="h-full bg-zinc-400 rounded-full transition-all duration-700" style={{ width: `${totalPipeline > 0 ? (pipeline.NURTURE / totalPipeline) * 100 : 0}%` }} />
                    </div>
                </div>
            </div>
        );
    };

    /* ── STARVING CROWDS SECTION ──────────────────────────────────────── */
    const StarvingCrowdsSection = () => (
        <div className="bg-white border border-black/8 rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-600" />
                Starving Crowd Alignment
            </h3>
            {crowdAlignment.length === 0 ? (
                <p className="text-sm text-[#6B6B6B] text-center py-4">SEO data required for crowd alignment analysis.</p>
            ) : (
                <div className="space-y-3">
                    {crowdAlignment.map((crowd, i) => {
                        const hasMatch = crowd.matchingQueries > 0;
                        return (
                            <div key={i} className={`flex items-center gap-4 p-3 rounded-lg border ${hasMatch ? 'border-emerald-200 bg-emerald-50' : 'border-red-200 bg-red-50'}`}>
                                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${hasMatch ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-[#1A1A1A]">{crowd.crowd}</div>
                                    <div className="text-xs text-[#6B6B6B] mt-0.5">
                                        {hasMatch
                                            ? `${crowd.matchingQueries} matching queries · Top: "${crowd.topQuery}"`
                                            : 'No matching queries found — content gap'
                                        }
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <div className={`text-sm font-bold font-mono ${hasMatch ? 'text-emerald-600' : 'text-red-600'}`}>
                                        {fmtNumber(crowd.totalImpressions)}
                                    </div>
                                    <div className="text-[11px] text-[#6B6B6B]">impressions</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );

    /* ── INTELLIGENCE SECTION ─────────────────────────────────────────── */
    const IntelligenceSection = () => {
        if (!intelligence) return <NotConnected label="Intelligence API" />;
        
        const approveRecommendation = async (id: string) => {
            await fetch('/api/admin/intelligence', {
                method: 'POST',
                body: JSON.stringify({ action: 'approve', recommendationId: id })
            });
            refreshAll();
        };

        return (
            <div className="space-y-8">
                {/* Pending Recommendations */}
                <div className="bg-white border border-[#7C3AED]/30 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(124,58,237,0.08)]">
                    <div className="px-6 py-4 border-b border-black/8 bg-purple-50/50">
                        <h3 className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#7C3AED]" />
                            Pending Agent Recommendations
                        </h3>
                    </div>
                    <div className="p-6 space-y-4">
                        {intelligence.pendingRecommendations?.map((rec: any) => (
                            <div key={rec.id} className="p-4 border border-black/10 rounded-lg bg-[#FAFAFA]">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 bg-purple-100 text-[#7C3AED] text-[10px] font-mono font-bold uppercase rounded">{rec.agent}</span>
                                        <span className="text-sm font-bold text-[#1A1A1A]">{rec.target}</span>
                                    </div>
                                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                        {rec.estimatedImpact}
                                    </span>
                                </div>
                                <p className="text-sm text-[#3A3A3A] mb-3">{rec.description}</p>
                                <div className="bg-white p-3 rounded border border-black/5 text-xs text-[#6B6B6B] mb-4">
                                    <strong className="text-[#3A3A3A]">Rationale:</strong> {rec.rationale}
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => approveRecommendation(rec.id)} className="px-4 py-2 bg-[#7C3AED] text-white text-xs font-bold rounded hover:bg-[#6D28D9] transition-colors">
                                        Approve & Deploy
                                    </button>
                                    <button className="px-4 py-2 bg-white border border-black/10 text-[#6B6B6B] text-xs font-bold rounded hover:bg-[#F5F0EB] transition-colors">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Market Research */}
                    <div className="bg-white border border-black/8 rounded-xl shadow-sm">
                        <div className="px-6 py-4 border-b border-black/8">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-2">
                                <Search className="w-4 h-4 text-blue-600" />
                                Market Research Clusters (CEO)
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {intelligence.marketResearch?.map((mr: any) => (
                                <div key={mr.id} className="p-4 border border-blue-100 rounded-lg bg-blue-50/30">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-sm text-[#1A1A1A]">{mr.theme}</h4>
                                        <span className="text-xs font-mono font-bold text-blue-700">{mr.confidence}% Conf.</span>
                                    </div>
                                    <p className="text-xs text-[#3A3A3A] mb-3">{mr.summary}</p>
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-mono text-[#6B6B6B] uppercase mb-1">Sources</div>
                                        {mr.sources.map((s: string, i: number) => (
                                            <div key={i} className="text-[11px] text-[#6B6B6B] flex items-start gap-2">
                                                <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 shrink-0" /> 
                                                <span>{s}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Implemented Changes */}
                    <div className="bg-white border border-black/8 rounded-xl shadow-sm">
                        <div className="px-6 py-4 border-b border-black/8">
                            <h3 className="text-sm font-semibold text-[#1A1A1A] flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                                Autonomously Implemented (Ratchet)
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {intelligence.implementedChanges?.map((imp: any) => (
                                <div key={imp.id} className="p-4 border border-emerald-100 rounded-lg bg-emerald-50/30">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-mono font-bold uppercase rounded">{imp.agent}</span>
                                        <span className="text-xs text-[#6B6B6B] font-mono">{timeAgo(imp.deployedAt)}</span>
                                    </div>
                                    <h4 className="font-semibold text-sm text-[#1A1A1A] mb-1">{imp.target}</h4>
                                    <p className="text-xs text-[#3A3A3A] mb-2">{imp.description}</p>
                                    {imp.themeTested && (
                                        <div className="bg-white/60 p-2 rounded border border-emerald-200/50 text-[11px] text-emerald-800 mb-3 flex items-start gap-1.5">
                                            <Search className="w-3 h-3 shrink-0 mt-0.5" />
                                            <span><strong>Market Hypothesis:</strong> {imp.themeTested}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-4 bg-white p-2 rounded border border-black/5">
                                        <div className="flex-1">
                                            <div className="text-[10px] font-mono text-[#6B6B6B] uppercase">Before</div>
                                            <div className="text-sm font-bold text-[#6B6B6B] line-through">{imp.metricBefore}</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[10px] font-mono text-emerald-600 uppercase">After</div>
                                            <div className="text-sm font-bold text-emerald-600">{imp.metricAfter}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    /* ═════════════════════════════════════════════════════════════════
       RENDER
       ═════════════════════════════════════════════════════════════════ */

    const tabs: Array<{ id: Tab; label: string; icon: typeof Activity }> = [
        { id: 'overview', label: 'Overview', icon: Layers },
        { id: 'intelligence', label: 'Intelligence', icon: Sparkles },
        { id: 'seo', label: 'SEO', icon: Globe },
        { id: 'revenue', label: 'Revenue', icon: DollarSign },
        { id: 'agents', label: 'Agents', icon: Bot },
    ];

    return (
        <div className="min-h-screen text-[#1A1A1A] pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Header ─────────────────────────────────────────────── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="p-2 bg-gradient-to-br from-purple-100 to-purple-50 border border-purple-200 rounded-xl">
                                <Activity className="w-5 h-5 text-[#7C3AED]" />
                            </span>
                            <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-[#7C3AED]">
                                Command Center
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#1A1A1A] to-[#4A3A6B] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-grotesk), Space Grotesk, sans-serif' }}>
                            Operations Dashboard
                        </h1>
                        <p className="text-[#6B6B6B] mt-1 text-sm">
                            Revenue · SEO · Agents · Pipeline — auto-refreshes every 60s
                        </p>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                        {/* Day toggle */}
                        <div className="flex items-center bg-white border border-black/8 rounded-lg p-1 gap-1 shadow-sm">
                            {[7, 14, 28].map(d => (
                                <button
                                    key={d}
                                    onClick={() => setDays(d)}
                                    className={`px-3 py-1.5 text-xs font-bold font-mono rounded-md transition-all duration-200 ${days === d
                                        ? 'bg-[#7C3AED] text-white shadow-sm'
                                        : 'text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F0EB]'
                                        }`}
                                >
                                    {d}d
                                </button>
                            ))}
                        </div>
                        <span className="text-[11px] text-[#6B6B6B] hidden md:inline">
                            {lastRefresh.toLocaleTimeString()}
                        </span>
                        <button
                            onClick={refreshAll}
                            disabled={loading}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg text-[#7C3AED] text-sm font-medium hover:bg-purple-100 transition-colors disabled:opacity-50"
                        >
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                            Refresh
                        </button>
                    </div>
                </div>

                {/* ── Navigation Tabs ────────────────────────────────────── */}
                <div className="flex items-center gap-1 mb-8 bg-white border border-black/8 rounded-xl p-1.5 w-fit shadow-sm">
                    {tabs.map(t => {
                        const Icon = t.icon;
                        const active = tab === t.id;
                        return (
                            <button
                                key={t.id}
                                onClick={() => setTab(t.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${active
                                    ? 'bg-[#7C3AED] text-white shadow-sm'
                                    : 'text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F5F0EB]'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {t.label}
                            </button>
                        );
                    })}
                </div>

                {/* ── Loading overlay ────────────────────────────────────── */}
                {loading && (
                    <div className="flex items-center justify-center gap-3 py-12 mb-8">
                        <RefreshCw className="w-5 h-5 animate-spin text-[#7C3AED]" />
                        <span className="text-[#6B6B6B] font-mono text-sm">Loading command center data...</span>
                    </div>
                )}

                {/* ═══════════════════════════════════════════════════════════
                   TAB CONTENT
                   ═══════════════════════════════════════════════════════════ */}

                {!loading && tab === 'overview' && (
                    <div className="space-y-10">
                        {/* Revenue (condensed) */}
                        <section>
                            <SectionHeader icon={DollarSign} title="Revenue">
                                <button onClick={() => setTab('revenue')} className="text-xs text-[#7C3AED] hover:text-[#6D28D9] font-mono flex items-center gap-1">
                                    View Full <ExternalLink className="w-3 h-3" />
                                </button>
                            </SectionHeader>
                            <RevenueSection condensed />
                        </section>

                        {/* SEO (condensed) */}
                        <section>
                            <SectionHeader icon={Globe} title="SEO Performance">
                                <button onClick={() => setTab('seo')} className="text-xs text-[#7C3AED] hover:text-[#6D28D9] font-mono flex items-center gap-1">
                                    View Full <ExternalLink className="w-3 h-3" />
                                </button>
                            </SectionHeader>
                            <SeoSection condensed />
                        </section>

                        {/* Pipeline */}
                        <section>
                            <SectionHeader icon={Users} title="Lead Pipeline" />
                            <PipelineSection />
                        </section>

                        {/* Agents (condensed) */}
                        <section>
                            <SectionHeader icon={Bot} title="Agent Activity">
                                <button onClick={() => setTab('agents')} className="text-xs text-[#7C3AED] hover:text-[#6D28D9] font-mono flex items-center gap-1">
                                    View Full <ExternalLink className="w-3 h-3" />
                                </button>
                            </SectionHeader>
                            <AgentsSection condensed />
                        </section>

                        {/* Starving Crowds */}
                        <section>
                            <SectionHeader icon={Target} title="Starving Crowd Alignment" />
                            <StarvingCrowdsSection />
                        </section>
                    </div>
                )}

                {!loading && tab === 'seo' && (
                    <div className="space-y-10">
                        <SeoSection />
                        <StarvingCrowdsSection />
                    </div>
                )}

                {!loading && tab === 'revenue' && (
                    <RevenueSection />
                )}

                {!loading && tab === 'agents' && (
                    <div className="space-y-10">
                        <PipelineSection />
                        <AgentsSection />
                    </div>
                )}

                {!loading && tab === 'intelligence' && (
                    <IntelligenceSection />
                )}

            </div>
        </div>
    );
}
