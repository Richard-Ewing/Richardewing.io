'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingDown, AlertTriangle, DollarSign, Lock, Activity, Zap, Flame } from 'lucide-react';
import Link from 'next/link';

// --- MAGIC UI COMPONENTS ---

const NumberTicker = ({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        const start = 0;
        const end = value;
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOut;
            setDisplay(current);

            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [value]);

    return <span className="tabular-nums">{prefix}{display.toLocaleString('en-US', { maximumFractionDigits: suffix === '%' ? 1 : 0 })}{suffix}</span>;
};

const BentoCard = ({ children, title, icon: Icon, className = '' }: { children: React.ReactNode; title: string; icon?: React.ComponentType<{ size?: number }>; className?: string }) => (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-md ${className}`}>
        <div className="flex items-center gap-2 mb-4 text-zinc-500">
            {Icon && <Icon size={14} />}
            <span className="text-[10px] font-mono uppercase tracking-widest">{title}</span>
        </div>
        {children}
    </div>
);

// Improved Gauge Chart
const GaugeChart = ({ value }: { value: number }) => {
    const percentage = Math.min(100, Math.max(0, value));
    const rotation = (percentage / 100) * 180 - 90;

    const getColor = () => {
        if (value >= 70) return '#22c55e'; // Green
        if (value >= 50) return '#eab308'; // Yellow
        if (value >= 30) return '#f97316'; // Orange
        return '#dc2626'; // Red
    };

    return (
        <div className="relative w-full max-w-[280px] mx-auto aspect-[2/1]">
            <div className="absolute inset-0 flex items-end justify-center">
                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                    {/* Track */}
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#27272a" strokeWidth="12" strokeLinecap="round" />
                    {/* Fill */}
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke={getColor()} strokeWidth="12" strokeLinecap="round" strokeDasharray={`${percentage * 2.51} 251`} className="transition-all duration-1000 ease-out" />
                    {/* Needle */}
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

// --- MAIN APPLICATION ---

interface ModelData {
    model: string;
    cost: number;
    margin: number;
    costPerUser: number;
}

interface GrowthData {
    month: string;
    revenue: number;
    cost: number;
}

interface Results {
    grossMargin: number;
    monthlyRevenue: number;
    monthlyCost: number;
    monthlyProfit: number;
    profitPerUser: number;
    costPerUser: number;
    insolvencyPoint: number;
    models: ModelData[];
    growthData: GrowthData[];
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

            const models: ModelData[] = [
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

            const growthData: GrowthData[] = Array.from({ length: 12 }, (_, i) => {
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
        <div className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-cyan-500/30 font-sans">

            {/* HEADER */}
            <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#dc2626]" />
                        <span className="font-bold tracking-tight text-lg">AUEB <span className="text-zinc-600 font-normal">| Margin Audit</span></span>
                    </div>
                    <Link href="/advisory" className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
                        <Lock size={12} />
                        Get Expert Help
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <AnimatePresence mode="wait">
                    {!results ? (
                        /* --- INPUT STATE --- */
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                                    Calculate Your<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Collapse Point.</span>
                                </h1>
                                <p className="text-xl text-zinc-500">AI reintroduces COGS to software. Are you scaling into bankruptcy?</p>
                            </div>

                            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl space-y-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="price" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Price/User/Month</label>
                                        <input id="price" type="number" step="0.01" value={price} onChange={e => setPrice(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="queries" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Queries/User/Month</label>
                                        <input id="queries" type="number" value={queries} onChange={e => setQueries(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="costPerQuery" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Cost/Query ($)</label>
                                        <input id="costPerQuery" type="number" step="0.001" value={costPerQuery} onChange={e => setCostPerQuery(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="users" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Active Users</label>
                                        <input id="users" type="number" value={users} onChange={e => setUsers(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                </div>

                                <button
                                    onClick={calculate} disabled={loading || !price}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-red-500 hover:text-white hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {loading ? <span className="animate-pulse">CALCULATING...</span> : "RUN MARGIN AUDIT"}
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* --- RESULTS STATE --- */
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">

                            {/* GAUGE HERO */}
                            <div className="text-center mb-16 pt-8">
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">GROSS MARGIN HEALTH</div>
                                <GaugeChart value={results.grossMargin} />
                                <div className={`mt-12 text-4xl font-bold tracking-tight ${getMarginStatus(results.grossMargin).color}`}>
                                    {getMarginStatus(results.grossMargin).text}
                                </div>
                                {results.grossMargin < 30 && (
                                    <div className="mt-6 text-red-400 text-sm max-w-xl mx-auto bg-red-950/30 p-4 rounded-lg border border-red-900/50">
                                        CRITICAL: Your unit economics are upside down. You are paying users to use your product.
                                    </div>
                                )}
                            </div>

                            {/* METRICS GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <BentoCard title="Monthly Revenue" icon={DollarSign}>
                                    <div className="text-3xl font-bold text-cyan-400"><NumberTicker value={results.monthlyRevenue} prefix="$" /></div>
                                </BentoCard>
                                <BentoCard title="Monthly AI Costs" icon={Flame} className="border-red-500/20">
                                    <div className="text-3xl font-bold text-red-600"><NumberTicker value={results.monthlyCost} prefix="$" /></div>
                                </BentoCard>
                                <BentoCard title="Monthly Profit" icon={TrendingDown}>
                                    <div className={`text-3xl font-bold ${results.monthlyProfit >= 0 ? 'text-emerald-400' : 'text-red-600'}`}>
                                        <NumberTicker value={results.monthlyProfit} prefix="$" />
                                    </div>
                                </BentoCard>
                                <BentoCard title="Insolvency Point" icon={AlertTriangle} className="border-yellow-500/20">
                                    <div className="text-3xl font-bold text-yellow-400"><NumberTicker value={results.insolvencyPoint} suffix="x" /></div>
                                    <div className="text-zinc-500 text-xs mt-2">Max queries before loss</div>
                                </BentoCard>
                            </div>

                            {/* MODEL COMPARISON TABLE */}
                            <BentoCard title="Model Arbitrage" icon={Zap} className="col-span-full">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-zinc-800 text-zinc-500 font-mono text-xs uppercase">
                                                <th className="text-left py-3">Model</th>
                                                <th className="text-right py-3">Cost/User</th>
                                                <th className="text-right py-3">Margin</th>
                                                <th className="text-right py-3">Impact</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {results.models.map((model: ModelData, i: number) => {
                                                const savings = ((model.margin - results.grossMargin) / 100) * results.monthlyRevenue;
                                                return (
                                                    <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                                                        <td className="py-3 font-semibold text-white">{model.model}</td>
                                                        <td className="py-3 text-right text-zinc-400">{formatMoney(model.costPerUser)}</td>
                                                        <td className={`py-3 text-right font-bold ${model.margin >= 60 ? 'text-emerald-400' : 'text-red-500'}`}>{model.margin.toFixed(1)}%</td>
                                                        <td className="py-3 text-right text-emerald-400">{savings > 0 ? `+${formatMoney(savings)}` : '-'}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </BentoCard>

                            {/* GROWTH CHART */}
                            <BentoCard title="The Insolvency Curve" icon={Activity}>
                                <div className="h-64 w-full mt-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={results.growthData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                            <XAxis dataKey="month" stroke="#666" fontSize={12} />
                                            <YAxis stroke="#666" fontSize={12} tickFormatter={(val) => `$${val}k`} />
                                            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} formatter={(val) => val !== undefined ? `$${Number(val).toFixed(0)}k` : ''} />
                                            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.2} />
                                            <Area type="monotone" dataKey="cost" stackId="2" stroke="#dc2626" fill="#dc2626" fillOpacity={0.2} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </BentoCard>

                            {/* ACTION FOOTER */}
                            <div className="border-t border-white/10 pt-12 flex justify-center gap-4">
                                <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline">← New Analysis</button>
                                <Link href="/advisory" className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-xl transition-all">Fix My Margins →</Link>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
