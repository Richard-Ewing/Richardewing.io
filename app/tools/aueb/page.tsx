'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { ShineBorder } from '../../components/magicui/shine-border';
import { NumberTicker } from '../../components/magicui/number-ticker';

// Gauge Chart Component
const GaugeChart = ({ value }: { value: number }) => {
    const percentage = Math.min(100, Math.max(0, value));
    const rotation = (percentage / 100) * 180 - 90;

    const getColor = () => {
        if (value >= 70) return '#22c55e';
        if (value >= 50) return '#eab308';
        if (value >= 30) return '#f97316';
        return '#dc2626';
    };

    return (
        <div className="relative w-full max-w-[280px] mx-auto aspect-[2/1]">
            <div className="absolute inset-0 flex items-end justify-center">
                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#27272a" strokeWidth="12" strokeLinecap="round" />
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke={getColor()} strokeWidth="12" strokeLinecap="round" strokeDasharray={`${percentage * 2.51} 251`} className="transition-all duration-1000 ease-out" />
                    <g transform={`rotate(${rotation} 100 100)`} className="transition-transform duration-1000 ease-out">
                        <line x1="100" y1="100" x2="100" y2="35" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="100" cy="100" r="6" fill="#fff" />
                    </g>
                </svg>
                <div className="absolute bottom-0 text-center translate-y-8">
                    <div className="text-4xl font-bold text-white tracking-tighter">{value.toFixed(0)}%</div>
                </div>
            </div>
        </div>
    );
};

// Simple Area Chart Component
const InsolvencyCurve = ({ data }: { data: { month: string; revenue: number; cost: number }[] }) => {
    const maxValue = Math.max(...data.map(d => Math.max(d.revenue, d.cost)));
    const height = 200;
    const width = 100;

    const revenuePoints = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - (d.revenue / maxValue) * height;
        return `${x},${y}`;
    }).join(' ');

    const costPoints = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - (d.cost / maxValue) * height;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="w-full h-64 mt-4">
            <svg viewBox={`0 0 ${width} ${height + 20}`} className="w-full h-full" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 25, 50, 75, 100].map(p => (
                    <line key={p} x1="0" y1={height - (p / 100) * height} x2={width} y2={height - (p / 100) * height} stroke="#333" strokeDasharray="2,2" />
                ))}

                {/* Revenue area */}
                <polygon
                    points={`0,${height} ${revenuePoints} ${width},${height}`}
                    fill="url(#revenueGradient)"
                />
                <polyline points={revenuePoints} fill="none" stroke="#22d3ee" strokeWidth="0.5" />

                {/* Cost area */}
                <polygon
                    points={`0,${height} ${costPoints} ${width},${height}`}
                    fill="url(#costGradient)"
                />
                <polyline points={costPoints} fill="none" stroke="#dc2626" strokeWidth="0.5" />

                {/* Gradients */}
                <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity="0.05" />
                    </linearGradient>
                </defs>

                {/* X-axis labels */}
                {data.filter((_, i) => i % 3 === 0).map((d, i) => (
                    <text key={i} x={(i * 3 / (data.length - 1)) * width} y={height + 15} fill="#666" fontSize="3" textAnchor="middle">{d.month}</text>
                ))}
            </svg>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <span className="text-xs text-zinc-500">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600" />
                    <span className="text-xs text-zinc-500">AI Costs</span>
                </div>
            </div>
        </div>
    );
};

interface Results {
    grossMargin: number;
    monthlyRevenue: number;
    monthlyCost: number;
    monthlyProfit: number;
    profitPerUser: number;
    costPerUser: number;
    insolvencyPoint: number;
    models: { model: string; cost: number; margin: number; costPerUser: number }[];
    growthData: { month: string; revenue: number; cost: number }[];
    price: number;
    queries: number;
    users: number;
}

export default function AUEBTool() {
    const [price, setPrice] = useState('20');
    const [queries, setQueries] = useState('100');
    const [costPerQuery, setCostPerQuery] = useState('0.03');
    const [users, setUsers] = useState('10000');

    const [results, setResults] = useState<Results | null>(null);
    const [loading, setLoading] = useState(false);

    const calculate = () => {
        setLoading(true);
        setTimeout(() => {
            const priceNum = parseFloat(price) || 0;
            const queriesNum = parseFloat(queries) || 0;
            const costNum = parseFloat(costPerQuery) || 0;
            const usersNum = parseFloat(users) || 0;

            const costPerUser = queriesNum * costNum;
            const grossMargin = ((priceNum - costPerUser) / priceNum) * 100;
            const profitPerUser = priceNum - costPerUser;

            const monthlyRevenue = priceNum * usersNum;
            const monthlyCost = costPerUser * usersNum;
            const monthlyProfit = monthlyRevenue - monthlyCost;
            const insolvencyPoint = Math.floor(priceNum / costNum);

            const models = [
                { model: 'GPT-4', cost: 0.03 },
                { model: 'GPT-4o', cost: 0.015 },
                { model: 'GPT-4o-mini', cost: 0.001 },
                { model: 'Claude Sonnet', cost: 0.015 },
                { model: 'Claude Haiku', cost: 0.0008 },
                { model: 'Llama 3 (70B)', cost: 0.0005 },
            ].map(m => ({
                ...m,
                margin: ((priceNum - (queriesNum * m.cost)) / priceNum) * 100,
                costPerUser: queriesNum * m.cost
            })).sort((a, b) => b.margin - a.margin);

            const growthData = Array.from({ length: 12 }, (_, i) => {
                const month = i + 1;
                const monthUsers = usersNum * Math.pow(1.15, i);
                return {
                    month: `M${month}`,
                    revenue: (monthUsers * priceNum) / 1000,
                    cost: (monthUsers * costPerUser) / 1000,
                };
            });

            setResults({ grossMargin, monthlyRevenue, monthlyCost, monthlyProfit, profitPerUser, costPerUser, insolvencyPoint, models, growthData, price: priceNum, queries: queriesNum, users: usersNum });
            setLoading(false);
        }, 800);
    };

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(2);
    };

    const getMarginStatus = (margin: number) => {
        if (margin >= 70) return { text: 'SUSTAINABLE', color: 'text-emerald-400' };
        if (margin >= 50) return { text: 'VIABLE BUT TIGHT', color: 'text-yellow-400' };
        if (margin >= 30) return { text: 'RISK ZONE', color: 'text-orange-500' };
        return { text: 'INSOLVENT', color: 'text-red-600' };
    };

    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-red-400 font-bold">AUEB Engine</span>
            </div>

            {!results ? (
                /* --- INPUT STATE --- */
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#dc2626]" />
                            <span className="font-mono text-xs text-red-400 uppercase tracking-widest">AUEB | AI Unit Economics Benchmark</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Calculate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Collapse Point.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                            AI reintroduces COGS to software. Are you scaling into bankruptcy?
                        </p>

                        {/* Input Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div>
                                <label htmlFor="price" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                    Price/User/Month ($)
                                </label>
                                <input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    placeholder="20"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="queries" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                    Queries/User/Month
                                </label>
                                <input
                                    id="queries"
                                    type="number"
                                    value={queries}
                                    onChange={e => setQueries(e.target.value)}
                                    placeholder="100"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="costPerQuery" className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3 block">
                                    Cost/Query ($)
                                </label>
                                <input
                                    id="costPerQuery"
                                    type="number"
                                    step="0.001"
                                    value={costPerQuery}
                                    onChange={e => setCostPerQuery(e.target.value)}
                                    placeholder="0.03"
                                    className="w-full bg-black/50 border border-red-900/30 rounded-xl p-3 text-white font-mono focus:border-red-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="users" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                    Active Users
                                </label>
                                <input
                                    id="users"
                                    type="number"
                                    value={users}
                                    onChange={e => setUsers(e.target.value)}
                                    placeholder="10000"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <ShineBorder borderColor="rgba(220, 38, 38, 0.6)" duration={2}>
                            <button
                                onClick={calculate}
                                disabled={loading || !price}
                                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        CALCULATING...
                                    </>
                                ) : (
                                    "RUN MARGIN AUDIT →"
                                )}
                            </button>
                        </ShineBorder>
                    </div>
                </ScrollReveal>
            ) : (
                /* --- RESULTS STATE --- */
                <>
                    {/* Gauge Hero */}
                    <ScrollReveal>
                        <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6">
                            <div className="text-center">
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">Gross Margin Health</div>
                                <GaugeChart value={results.grossMargin} />
                                <div className={`mt-12 text-3xl sm:text-4xl font-bold tracking-tight ${getMarginStatus(results.grossMargin).color}`}>
                                    {getMarginStatus(results.grossMargin).text}
                                </div>
                                {results.grossMargin < 30 && (
                                    <div className="mt-6 text-red-400 text-sm max-w-xl mx-auto bg-red-950/30 p-4 rounded-lg border border-red-900/50">
                                        ⚠️ CRITICAL: Your unit economics are upside down. You are paying users to use your product.
                                    </div>
                                )}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Metrics Grid */}
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                            <GlowCard className="p-4 sm:p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Monthly Revenue</div>
                                <div className="text-xl sm:text-2xl font-bold text-cyan-400">
                                    <NumberTicker value={Math.round(results.monthlyRevenue / 1000)} prefix="$" suffix="K" />
                                </div>
                            </GlowCard>
                            <GlowCard className="p-4 sm:p-6" glowColor="danger">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-2">AI Costs</div>
                                <div className="text-xl sm:text-2xl font-bold text-red-600">
                                    <NumberTicker value={Math.round(results.monthlyCost / 1000)} prefix="$" suffix="K" />
                                </div>
                            </GlowCard>
                            <GlowCard className="p-4 sm:p-6" glowColor={results.monthlyProfit >= 0 ? 'cyan' : 'danger'}>
                                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Monthly Profit</div>
                                <div className={`text-xl sm:text-2xl font-bold ${results.monthlyProfit >= 0 ? 'text-emerald-400' : 'text-red-600'}`}>
                                    <NumberTicker value={Math.round(results.monthlyProfit / 1000)} prefix="$" suffix="K" />
                                </div>
                            </GlowCard>
                            <GlowCard className="p-4 sm:p-6" glowColor="gold">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Insolvency Point</div>
                                <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                                    <NumberTicker value={results.insolvencyPoint} suffix=" queries" />
                                </div>
                            </GlowCard>
                        </div>
                    </ScrollReveal>

                    {/* Model Comparison */}
                    <ScrollReveal delay={200}>
                        <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-6">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Model Arbitrage</div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-zinc-800 text-zinc-500 font-mono text-xs uppercase">
                                            <th className="text-left py-3">Model</th>
                                            <th className="text-right py-3">Cost/User</th>
                                            <th className="text-right py-3">Margin</th>
                                            <th className="text-right py-3">Monthly Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {results.models.map((model, i) => {
                                            const savings = ((model.margin - results.grossMargin) / 100) * results.monthlyRevenue;
                                            return (
                                                <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition">
                                                    <td className="py-3 font-semibold text-white">{model.model}</td>
                                                    <td className="py-3 text-right text-zinc-400 font-mono">{formatMoney(model.costPerUser)}</td>
                                                    <td className={`py-3 text-right font-bold ${model.margin >= 60 ? 'text-emerald-400' : model.margin >= 30 ? 'text-yellow-400' : 'text-red-500'}`}>
                                                        {model.margin.toFixed(1)}%
                                                    </td>
                                                    <td className="py-3 text-right text-emerald-400 font-mono">
                                                        {savings > 0 ? `+${formatMoney(savings)}` : '-'}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Insolvency Curve */}
                    <ScrollReveal delay={300}>
                        <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-6">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">The Insolvency Curve</div>
                            <p className="text-sm text-zinc-400 mb-4">12-month projection at 15% MoM growth</p>
                            <InsolvencyCurve data={results.growthData} />
                        </div>
                    </ScrollReveal>

                    {/* CTA */}
                    <ScrollReveal delay={400}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 border-t border-white/10">
                            <button
                                onClick={() => setResults(null)}
                                className="px-6 py-3 text-zinc-500 hover:text-white text-sm font-mono uppercase tracking-widest transition"
                            >
                                ← New Analysis
                            </button>
                            <ShineBorder borderColor="rgba(220, 38, 38, 0.6)" duration={2}>
                                <Link
                                    href="/advisory"
                                    className="block px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-widest transition-colors text-center"
                                >
                                    Fix My Margins →
                                </Link>
                            </ShineBorder>
                        </div>
                    </ScrollReveal>
                </>
            )}
        </div>
    );
}
