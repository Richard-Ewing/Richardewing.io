'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingDown, AlertTriangle, DollarSign, Lock, Activity, Zap, Flame, Users, Target, Mail, ArrowRight, Cpu } from 'lucide-react';
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

// --- PERSONA TYPES ---
type Persona = 'Founder' | 'CPO' | 'VP Eng' | 'CFO';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Founder', label: 'Founder/CEO', icon: Target },
    { id: 'CPO', label: 'CPO/Product', icon: Users },
    { id: 'VP Eng', label: 'VP Engineering', icon: Cpu },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

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

interface FeatureData {
    name: string;
    queriesPercent: number;
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
    monthsToCollapse: number;
    featureBreakdown: { name: string; cost: number; margin: number }[];
}

export default function AUEBTool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');

    // Basic Inputs
    const [price, setPrice] = useState('29');
    const [queries, setQueries] = useState('150');
    const [costPerQuery, setCostPerQuery] = useState('0.025');
    const [users, setUsers] = useState('5000');

    // Enhanced Inputs
    const [growthRate, setGrowthRate] = useState('15');
    const [cachingEnabled, setCachingEnabled] = useState(false);
    const [features, setFeatures] = useState<FeatureData[]>([
        { name: 'AI Chat', queriesPercent: 40 },
        { name: 'AI Search', queriesPercent: 30 },
        { name: 'AI Summary', queriesPercent: 20 },
        { name: 'AI Insights', queriesPercent: 10 },
    ]);

    const [results, setResults] = useState<Results | null>(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const calculate = () => {
        setLoading(true);
        setTimeout(() => {
            const priceNum = parseFloat(price) || 0;
            const queriesNum = parseFloat(queries) || 0;
            const costNum = parseFloat(costPerQuery) || 0;
            const usersNum = parseFloat(users) || 0;
            const growthRateNum = parseFloat(growthRate) || 15;

            // Apply caching discount
            const effectiveCost = cachingEnabled ? costNum * 0.6 : costNum;

            const costPerUser = queriesNum * effectiveCost;
            const grossMargin = ((priceNum - costPerUser) / priceNum) * 100;
            const profitPerUser = priceNum - costPerUser;

            const monthlyRevenue = priceNum * usersNum;
            const monthlyCost = costPerUser * usersNum;
            const monthlyProfit = monthlyRevenue - monthlyCost;
            const insolvencyPoint = Math.floor(priceNum / effectiveCost);

            // Calculate months to margin collapse (when cost > revenue)
            let monthsToCollapse = 0;
            if (grossMargin < 100) {
                for (let i = 1; i <= 36; i++) {
                    const projectedUsers = usersNum * Math.pow(1 + (growthRateNum / 100), i);
                    const projectedCost = projectedUsers * costPerUser;
                    const projectedRevenue = projectedUsers * priceNum;
                    if (projectedCost > projectedRevenue * 0.5) { // Cost > 50% of revenue
                        monthsToCollapse = i;
                        break;
                    }
                }
            }

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
                const monthUsers = usersNum * Math.pow(1 + (growthRateNum / 100), i);
                return {
                    month: `M${month}`,
                    revenue: (monthUsers * priceNum) / 1000,
                    cost: (monthUsers * costPerUser) / 1000,
                };
            });

            // Feature breakdown
            const featureBreakdown = features.map(f => ({
                name: f.name,
                cost: (f.queriesPercent / 100) * monthlyCost,
                margin: 100 - ((f.queriesPercent / 100) * (100 - grossMargin))
            }));

            setResults({
                grossMargin, monthlyRevenue, monthlyCost, monthlyProfit, profitPerUser, costPerUser,
                insolvencyPoint, models, growthData, price: priceNum, queries: queriesNum, users: usersNum,
                monthsToCollapse: monthsToCollapse || 36,
                featureBreakdown
            });
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

    // Persona-specific insights
    const getPersonaInsight = (results: Results): { headline: string; detail: string; action: string } => {
        const margin = results.grossMargin;
        const collapse = results.monthsToCollapse;
        const monthlyCost = results.monthlyCost;

        switch (persona) {
            case 'Founder':
                if (margin < 30) return {
                    headline: '⚠️ You are scaling into bankruptcy.',
                    detail: `At ${formatMoney(monthlyCost)}/month in AI costs, your next funding round will be a down round. Investors will see this in due diligence.`,
                    action: 'Book an emergency margin audit before your next board meeting.'
                };
                if (margin < 50) return {
                    headline: 'Your runway is shorter than you think.',
                    detail: `AI costs will consume 50%+ of revenue in ${collapse} months at current growth. This will force a pricing conversation you\'re not ready for.`,
                    action: 'Model the impact on your next raise. Book a strategy call.'
                };
                return {
                    headline: 'Your unit economics are investor-ready.',
                    detail: `${margin.toFixed(0)}% gross margin gives you pricing power and runway. You can afford to grow aggressively.`,
                    action: 'Optimize further to maximize valuation multiple.'
                };

            case 'CPO':
                const worstFeature = results.featureBreakdown.sort((a, b) => a.margin - b.margin)[0];
                if (margin < 50) return {
                    headline: `Feature "${worstFeature?.name || 'AI'}" is your margin killer.`,
                    detail: `This feature consumes ${((worstFeature?.cost || 0) / monthlyCost * 100).toFixed(0)}% of AI costs. Either re-architect or remove it.`,
                    action: 'Get a feature P&L analysis to identify the real ROI.'
                };
                return {
                    headline: 'Your AI features are economically viable.',
                    detail: `All features are contributing positively to margin. Focus on expansion, not optimization.`,
                    action: 'Model new AI feature economics before building.'
                };

            case 'VP Eng':
                const bestModel = results.models[0];
                const currentMargin = results.grossMargin;
                const potentialMargin = bestModel?.margin || currentMargin;
                const savings = (potentialMargin - currentMargin) / 100 * results.monthlyRevenue;

                if (savings > 1000) return {
                    headline: `Switching to ${bestModel?.model} saves ${formatMoney(savings)}/month.`,
                    detail: `Your current model choice is costing you ${formatMoney(savings * 12)}/year in lost margin. This is a quick win.`,
                    action: 'Get a model migration roadmap with quality benchmarks.'
                };
                return {
                    headline: 'Your model selection is near-optimal.',
                    detail: `Potential savings from model switching are minimal. Focus on caching and query optimization.`,
                    action: 'Schedule an architecture review for further gains.'
                };

            case 'CFO':
                const aiCacRatio = monthlyCost / (results.monthlyRevenue / results.users);
                if (margin < 50) return {
                    headline: `AI CAC is ${(aiCacRatio * 100).toFixed(0)}% of ARPU.`,
                    detail: `For every $1 of revenue, you're spending ${(aiCacRatio).toFixed(2)} on AI infrastructure. Industry benchmark is < 20%.`,
                    action: 'Model the impact on LTV:CAC and payback period.'
                };
                return {
                    headline: 'AI unit economics are within benchmarks.',
                    detail: `AI costs at ${(100 - margin).toFixed(0)}% of revenue is acceptable for this stage. Monitor monthly.`,
                    action: 'Set up automated margin tracking and alerts.'
                };

            default:
                return { headline: '', detail: '', action: '' };
        }
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Lead captured:', email, 'Persona:', persona);
        setEmailSubmitted(true);
        setTimeout(() => {
            window.location.href = '/advisory';
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-cyan-500/30 font-sans">

            {/* HEADER */}
            <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#dc2626]" />
                        <span className="font-bold tracking-tight text-lg">AUEB™ <span className="text-zinc-600 font-normal">| AI Margin Audit</span></span>
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
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                                    Are You Scaling<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Into Bankruptcy?</span>
                                </h1>
                                <p className="text-xl text-zinc-500">Calculate your AI margin collapse point before investors do.</p>
                            </div>

                            {/* PERSONA SELECTOR */}
                            <div className="mb-8">
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">I am a...</div>
                                <div className="flex flex-wrap gap-2">
                                    {PERSONAS.map(p => (
                                        <button
                                            key={p.id}
                                            onClick={() => setPersona(p.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id
                                                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400'
                                                    : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/30'
                                                }`}
                                        >
                                            <p.icon size={14} />
                                            {p.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl space-y-8">
                                {/* BASIC INPUTS */}
                                <div>
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Unit Economics</div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        <div>
                                            <label htmlFor="price" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Price/User/Month</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                                <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 pl-7 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="queries" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">AI Queries/User/Mo</label>
                                            <input id="queries" type="number" value={queries} onChange={(e) => setQueries(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label htmlFor="cost" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Cost/Query</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                                <input id="cost" type="number" step="0.001" value={costPerQuery} onChange={(e) => setCostPerQuery(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 pl-7 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="users" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Active Users</label>
                                            <input id="users" type="number" value={users} onChange={(e) => setUsers(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* ENHANCED INPUTS */}
                                <div className="pt-6 border-t border-white/5">
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Growth & Optimization</div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label htmlFor="growth" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Monthly Growth Rate</label>
                                            <div className="relative">
                                                <input id="growth" type="number" value={growthRate} onChange={(e) => setGrowthRate(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">%</span>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Caching Strategy</label>
                                            <button
                                                onClick={() => setCachingEnabled(!cachingEnabled)}
                                                className={`w-full px-4 py-3 rounded-xl border transition-all flex items-center justify-between ${cachingEnabled
                                                        ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                                                        : 'bg-black/50 border-zinc-800 text-zinc-400'
                                                    }`}
                                            >
                                                <span>{cachingEnabled ? 'Semantic caching enabled' : 'No caching implemented'}</span>
                                                <span className="text-xs font-mono">{cachingEnabled ? '~40% savings' : 'Click to toggle'}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* FEATURE BREAKDOWN */}
                                <div className="pt-6 border-t border-white/5">
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">AI Feature Mix (% of queries)</div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {features.map((f, i) => (
                                            <div key={i}>
                                                <label className="text-xs text-zinc-400 mb-1 block">{f.name}</label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        value={f.queriesPercent}
                                                        onChange={(e) => {
                                                            const newFeatures = [...features];
                                                            newFeatures[i].queriesPercent = parseInt(e.target.value) || 0;
                                                            setFeatures(newFeatures);
                                                        }}
                                                        className="w-full bg-black/50 border border-zinc-800 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-cyan-500 focus:outline-none"
                                                    />
                                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-600 text-xs">%</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={calculate}
                                    disabled={loading}
                                    className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Calculating Collapse Point...
                                        </>
                                    ) : (
                                        'Calculate My Collapse Point →'
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* --- RESULTS STATE --- */
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">

                            {/* GAUGE HERO */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="capsule-container rounded-2xl sm:rounded-[2rem] p-8 text-center mb-8"
                            >
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
                            </motion.div>

                            {/* PERSONA-SPECIFIC INSIGHT */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                            >
                                <BentoCard title={`Insight for ${persona}`} icon={Target} className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-white">{getPersonaInsight(results).headline}</h3>
                                        <p className="text-zinc-400 leading-relaxed">{getPersonaInsight(results).detail}</p>
                                        <p className="text-cyan-400 font-semibold">{getPersonaInsight(results).action}</p>
                                    </div>
                                </BentoCard>
                            </motion.div>

                            {/* METRICS GRID */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-4 gap-6"
                            >
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
                                <BentoCard title="Months to 50% COGS" icon={AlertTriangle} className="border-yellow-500/20">
                                    <div className="text-3xl font-bold text-yellow-400">{results.monthsToCollapse}</div>
                                    <div className="text-zinc-500 text-xs mt-2">At {growthRate}% monthly growth</div>
                                </BentoCard>
                            </motion.div>

                            {/* MODEL COMPARISON TABLE */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                <BentoCard title="Model Arbitrage" icon={Zap} className="col-span-full">
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
                            </motion.div>

                            {/* GROWTH CHART */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            >
                                <BentoCard title="12-Month Runway Projection" icon={Activity}>
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
                            </motion.div>

                            {/* EXECUTIVE SUMMARY + EMAIL CAPTURE */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            >
                                <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-8 border border-white/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-3 h-3 rounded-full animate-pulse ${results.grossMargin < 50 ? 'bg-red-500' : 'bg-cyan-400'}`} />
                                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Executive Summary</span>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">📊 Board-Ready Insights</h3>
                                            <ul className="space-y-3 text-zinc-400">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-cyan-400 mt-1">•</span>
                                                    <span>Gross margin of <strong className="text-white">{results.grossMargin.toFixed(0)}%</strong> is {results.grossMargin >= 60 ? 'sustainable' : results.grossMargin >= 40 ? 'concerning' : 'critical'} for AI-native products.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-cyan-400 mt-1">•</span>
                                                    <span>At <strong className="text-white">{growthRate}% monthly growth</strong>, AI costs will exceed 50% of revenue in <strong className="text-yellow-400">{results.monthsToCollapse} months</strong>.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-cyan-400 mt-1">•</span>
                                                    <span>Switching to <strong className="text-white">{results.models[0]?.model}</strong> could save <strong className="text-emerald-400">{formatMoney(((results.models[0]?.margin || 0) - results.grossMargin) / 100 * results.monthlyRevenue)}/month</strong>.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-l border-white/10 pl-8">
                                            {!emailSubmitted ? (
                                                <>
                                                    <h3 className="text-xl font-bold text-white mb-2">Want the Full Analysis?</h3>
                                                    <p className="text-zinc-400 text-sm mb-4">Get a personalized deep-dive with model migration roadmap and feature P&L breakdown.</p>
                                                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                                                        <div className="relative">
                                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                                            <input
                                                                type="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                placeholder="your@email.com"
                                                                required
                                                                className="w-full pl-11 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none"
                                                            />
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className={`w-full px-6 py-3 font-bold uppercase tracking-widest text-sm rounded-xl flex items-center justify-center gap-2 transition-all ${results.grossMargin < 50
                                                                    ? 'bg-red-600 hover:bg-red-500 text-white'
                                                                    : 'bg-white hover:bg-cyan-400 text-black'
                                                                }`}
                                                        >
                                                            Get Full Report <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                    </form>
                                                </>
                                            ) : (
                                                <div className="text-center py-4">
                                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <span className="text-2xl">✓</span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                                                    <p className="text-zinc-400">Redirecting to book your session...</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ACTION FOOTER */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10"
                            >
                                <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← Run New Analysis</button>
                                <Link href="/advisory" className={`px-10 py-4 font-bold uppercase tracking-widest rounded-xl transition-all ${results.grossMargin < 50
                                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]'
                                        : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                                    }`}>
                                    {results.grossMargin < 50 ? '🚨 Emergency Margin Audit' : 'Optimize My Margins'} →
                                </Link>
                                <Link href="/system" className="text-zinc-500 text-sm hover:text-white">Explore All Tools →</Link>
                            </motion.div>

                            {/* SOCIAL PROOF */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-center pt-8"
                            >
                                <p className="text-xs text-zinc-600 mb-3">Trusted by product leaders at</p>
                                <div className="flex items-center justify-center gap-8 text-zinc-600 font-mono text-xs">
                                    <span>Stripe</span>
                                    <span>Figma</span>
                                    <span>Linear</span>
                                    <span>Notion</span>
                                    <span>Vercel</span>
                                </div>
                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
