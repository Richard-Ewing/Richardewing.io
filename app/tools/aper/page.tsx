'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, AlertTriangle, DollarSign, Lock, Zap, Users, Target, Mail, ArrowRight, Cpu, Clock, Building } from 'lucide-react';
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

    return <span className="tabular-nums">{prefix}{display.toLocaleString('en-US', { maximumFractionDigits: 0 })}{suffix}</span>;
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

// --- PERSONA TYPES ---
type Persona = 'Founder' | 'CPO' | 'VP Eng' | 'CFO';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Founder', label: 'Founder/CEO', icon: Target },
    { id: 'CPO', label: 'CPO/Product', icon: Users },
    { id: 'VP Eng', label: 'VP Engineering', icon: Cpu },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

// --- MAIN APPLICATION ---

interface BenchmarkData {
    name: string;
    value: number;
    color: string;
}

interface TeamBreakdown {
    frontend: number;
    backend: number;
    infra: number;
    data: number;
}

interface Results {
    aper: number;
    engineeringMargin: number;
    multiplier: number;
    benchmarks: BenchmarkData[];
    totalEngCost: number;
    engineers: number;
    costPerEng: number;
    coordinationTax: number;
    optimalHeadcount: number;
    overheadCost: number;
    teamBreakdown: TeamBreakdown;
    // Enhanced metrics
    productivityIndex: number; // 0-100 score
    newHireRampCost: number; // Cost of onboarding a new hire
    teamHealthScore: number; // Overall team health 0-100
    revenueGap: number; // ARR needed to reach elite APER
    leverageRatio: number; // Revenue per $ of eng spend
}

export default function APERTool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');

    // Basic Inputs
    const [arr, setArr] = useState('15000000');
    const [engineers, setEngineers] = useState('25');
    const [costPerEng, setCostPerEng] = useState('220000');

    // Enhanced Inputs
    const [teamBreakdown, setTeamBreakdown] = useState<TeamBreakdown>({
        frontend: 30,
        backend: 40,
        infra: 20,
        data: 10
    });
    const [avgTenure, setAvgTenure] = useState('18');
    const [hiringVelocity, setHiringVelocity] = useState('8');
    const [remotePercent, setRemotePercent] = useState('60');

    const [results, setResults] = useState<Results | null>(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(0);
    };

    const calculate = () => {
        setLoading(true);
        setTimeout(() => {
            const arrNum = parseFloat(arr) || 0;
            const engNum = parseFloat(engineers) || 1;
            const costNum = parseFloat(costPerEng) || 0;
            const tenureNum = parseFloat(avgTenure) || 12;
            const hiringNum = parseFloat(hiringVelocity) || 0;

            const aper = arrNum / engNum;
            const totalEngCost = engNum * costNum;
            const engineeringMargin = ((arrNum - totalEngCost) / arrNum) * 100;
            const multiplier = arrNum / totalEngCost;

            // Coordination tax: increases with team size and decreases with tenure
            const baseCoordinationTax = 15; // 15% baseline
            const sizeMultiplier = Math.log2(engNum) / 4; // Logarithmic scaling
            const tenureDiscount = Math.min(tenureNum / 36, 0.5); // Max 50% discount for 3+ year tenure
            const coordinationTax = baseCoordinationTax * (1 + sizeMultiplier) * (1 - tenureDiscount);

            // Overhead cost calculation
            const overheadCost = totalEngCost * (coordinationTax / 100);

            // Optimal headcount based on ARR benchmarks
            const optimalAper = 500000; // Target $500K/engineer
            const optimalHeadcount = Math.floor(arrNum / optimalAper);

            // Enhanced metrics
            // Productivity Index: weighted score based on APER, tenure, and team composition
            const aperScore = Math.min(aper / 600000 * 40, 40); // Max 40 points
            const tenureScore = Math.min(tenureNum / 24 * 30, 30); // Max 30 points for 2+ years
            const stabilityScore = Math.max(0, 30 - (hiringNum / engNum * 100)); // Lower hiring velocity = higher score
            const productivityIndex = Math.round(aperScore + tenureScore + stabilityScore);

            // New hire ramp cost: 3 months to productivity + opportunity cost
            const rampMonths = 3;
            const newHireRampCost = (costNum / 12 * rampMonths) + (aper / 12 * rampMonths * 0.5); // Salary + 50% lost productivity

            // Team health score
            const balanceScore = 100 - Math.abs(50 - (teamBreakdown.frontend + teamBreakdown.backend)) * 2; // Penalty for imbalance
            const infrastructureBonus = teamBreakdown.infra >= 15 ? 10 : 0; // Bonus for proper infra investment
            const teamHealthScore = Math.round((productivityIndex * 0.6) + (balanceScore * 0.3) + (infrastructureBonus * 0.1));

            // Revenue gap to reach elite status
            const eliteAper = 600000;
            const revenueGap = Math.max(0, (eliteAper * engNum) - arrNum);

            // Leverage ratio
            const leverageRatio = arrNum / totalEngCost;

            const benchmarks: BenchmarkData[] = [
                { name: 'Your Company', value: aper, color: aper >= 600000 ? '#22d3ee' : aper >= 400000 ? '#facc15' : aper >= 200000 ? '#f97316' : '#dc2626' },
                { name: 'Elite SaaS', value: 650000, color: '#22d3ee' },
                { name: 'Good SaaS', value: 450000, color: '#facc15' },
                { name: 'Danger Zone', value: 200000, color: '#dc2626' },
            ];

            setResults({
                aper, engineeringMargin, multiplier, benchmarks, totalEngCost,
                engineers: engNum, costPerEng: costNum, coordinationTax,
                optimalHeadcount, overheadCost, teamBreakdown,
                productivityIndex, newHireRampCost, teamHealthScore, revenueGap, leverageRatio
            });
            setLoading(false);
        }, 800);
    };

    const getStatus = (aper: number) => {
        if (aper >= 600000) return { label: 'ELITE EFFICIENCY', color: 'text-cyan-400', desc: 'You are a software factory. Hire aggressively.' };
        if (aper >= 400000) return { label: 'HEALTHY', color: 'text-yellow-400', desc: 'On target. Optimize before scaling.' };
        if (aper >= 200000) return { label: 'BLOATED', color: 'text-orange-500', desc: 'Coordination overhead is eating your runway.' };
        return { label: 'CRITICAL', color: 'text-red-600', desc: 'Immediate action required. Consider a RIF.' };
    };

    // Persona-specific insights
    const getPersonaInsight = (results: Results): { headline: string; detail: string; action: string } => {
        const aper = results.aper;
        const headcountDelta = results.engineers - results.optimalHeadcount;
        const coordinationCost = results.overheadCost;

        switch (persona) {
            case 'Founder':
                if (aper < 300000) return {
                    headline: `⚠️ You need ${headcountDelta} fewer engineers.`,
                    detail: `At ${formatMoney(aper)}/engineer, you need ${Math.round(headcountDelta * 100 / results.engineers)}% ARR growth before your next hire makes financial sense. Your next raise will be dilutive.`,
                    action: 'Book a workforce optimization session before your next board meeting.'
                };
                if (aper < 500000) return {
                    headline: `Your next hire costs more than you think.`,
                    detail: `Each new engineer at your current APER requires ${formatMoney(500000)} in incremental ARR to break even. Do you have that growth?`,
                    action: 'Model the true cost of headcount before expanding.'
                };
                return {
                    headline: 'You have hiring runway.',
                    detail: `At ${formatMoney(aper)}/engineer, you can add ${results.optimalHeadcount - results.engineers} more engineers while maintaining elite efficiency.`,
                    action: 'Scale confidently. Focus on quality over speed.'
                };

            case 'CPO':
                const coordinationTime = results.coordinationTax * 40 / 100; // Hours per week per engineer
                return {
                    headline: `Each engineer loses ${coordinationTime.toFixed(1)} hrs/week to coordination.`,
                    detail: `That's ${Math.round(coordinationTime * results.engineers * 52)} hours/year of IC time consumed by meetings and context switching. Your velocity is ~${Math.round(100 - results.coordinationTax)}% of theoretical max.`,
                    action: 'Map your meeting load and kill the non-essential ones.'
                };

            case 'VP Eng':
                if (headcountDelta > 3) return {
                    headline: `You're ${headcountDelta} engineers over optimal capacity.`,
                    detail: `Brooks's Law is real: more engineers ≠ more output. Each marginal hire is adding ${formatMoney(coordinationCost / results.engineers)}/year in coordination overhead.`,
                    action: 'Consider team topology optimization before RIF.'
                };
                return {
                    headline: `Your team is efficiently sized.`,
                    detail: `At ${results.engineers} engineers, your coordination tax of ${results.coordinationTax.toFixed(0)}% is within acceptable bounds.`,
                    action: 'Focus on reducing per-engineer overhead through tooling.'
                };

            case 'CFO':
                const engineeringRoi = results.multiplier;
                return {
                    headline: `Engineering ROI: ${engineeringRoi.toFixed(1)}x.`,
                    detail: `For every $1 spent on engineering, you generate $${engineeringRoi.toFixed(2)} in revenue. ${engineeringRoi < 3 ? 'This is below the 3x benchmark for healthy SaaS.' : 'This is a healthy return on engineering investment.'}`,
                    action: `${engineeringRoi < 3 ? 'Model headcount scenarios for budget planning.' : 'Maintain discipline as you scale.'}`
                };

            default:
                return { headline: '', detail: '', action: '' };
        }
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch('https://formspree.io/f/xzddbpwy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, persona, tool: 'APER', aper: results?.aper }),
            });
        } catch (err) {
            console.error('Form submission error:', err);
        }
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
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_#eab308]" />
                        <span className="font-bold tracking-tight text-lg">APER™ <span className="text-zinc-600 font-normal">| Efficiency Diagnostic</span></span>
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
                                    Are You <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Overstaffed?</span>
                                </h1>
                                <p className="text-xl text-zinc-500">Calculate your Revenue Per Engineer before your board does.</p>
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
                                                ? 'bg-yellow-500/10 border-yellow-500 text-yellow-400'
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
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Core Metrics</div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label htmlFor="arr" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block">Annual Revenue (ARR)</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                                <input id="arr" type="number" value={arr} onChange={(e) => setArr(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 pl-7 text-white font-mono focus:border-yellow-500 focus:outline-none" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="engineers" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block">Engineer Headcount</label>
                                            <input id="engineers" type="number" value={engineers} onChange={(e) => setEngineers(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-yellow-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label htmlFor="cost" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block">Fully-Loaded Cost/Eng</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                                <input id="cost" type="number" value={costPerEng} onChange={(e) => setCostPerEng(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 pl-7 text-white font-mono focus:border-yellow-500 focus:outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TEAM BREAKDOWN */}
                                <div className="pt-6 border-t border-white/5">
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Team Composition (% of headcount)</div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {Object.entries(teamBreakdown).map(([key, val]) => (
                                            <div key={key}>
                                                <label className="text-xs text-zinc-400 mb-1 block capitalize">{key}</label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        value={val}
                                                        onChange={(e) => setTeamBreakdown({ ...teamBreakdown, [key]: parseInt(e.target.value) || 0 })}
                                                        className="w-full bg-black/50 border border-zinc-800 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-yellow-500 focus:outline-none"
                                                    />
                                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-600 text-xs">%</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ENHANCED INPUTS */}
                                <div className="pt-6 border-t border-white/5">
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Team Health Metrics</div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label htmlFor="tenure" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block flex items-center gap-2">
                                                <Clock size={12} /> Avg Tenure (months)
                                            </label>
                                            <input id="tenure" type="number" value={avgTenure} onChange={(e) => setAvgTenure(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-yellow-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label htmlFor="hiring" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block flex items-center gap-2">
                                                <Users size={12} /> Hires (last 12mo)
                                            </label>
                                            <input id="hiring" type="number" value={hiringVelocity} onChange={(e) => setHiringVelocity(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-yellow-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label htmlFor="remote" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block flex items-center gap-2">
                                                <Building size={12} /> Remote %
                                            </label>
                                            <input id="remote" type="number" value={remotePercent} onChange={(e) => setRemotePercent(e.target.value)} className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono focus:border-yellow-500 focus:outline-none" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={calculate}
                                    disabled={loading}
                                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            Calculating Efficiency...
                                        </>
                                    ) : (
                                        'Calculate My APER →'
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* --- RESULTS STATE --- */
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">

                            {/* HERO SCORE */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="capsule-container rounded-2xl sm:rounded-[2rem] p-8 text-center mb-8"
                            >
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">REVENUE PER ENGINEER (APER)</div>
                                <div className={`text-7xl md:text-8xl font-bold tracking-tighter ${getStatus(results.aper).color}`}>
                                    <NumberTicker value={results.aper} prefix="$" />
                                </div>
                                <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatus(results.aper).color.replace('text-', 'border-').replace('400', '500/30')} bg-white/5`}>
                                    <span className={`font-bold uppercase tracking-widest text-sm ${getStatus(results.aper).color}`}>{getStatus(results.aper).label}</span>
                                </div>
                                <p className="mt-6 text-zinc-400 max-w-xl mx-auto">{getStatus(results.aper).desc}</p>
                            </motion.div>

                            {/* PERSONA-SPECIFIC INSIGHT */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                            >
                                <BentoCard title={`Insight for ${persona}`} icon={Target} className="border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-white">{getPersonaInsight(results).headline}</h3>
                                        <p className="text-zinc-400 leading-relaxed">{getPersonaInsight(results).detail}</p>
                                        <p className="text-yellow-400 font-semibold">{getPersonaInsight(results).action}</p>
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
                                <BentoCard title="Engineering Cost" icon={DollarSign}>
                                    <div className="text-3xl font-bold text-red-600">
                                        <NumberTicker value={results.totalEngCost} prefix="$" />
                                    </div>
                                    <div className="text-zinc-500 text-xs mt-2">{results.engineers} engineers × {formatMoney(results.costPerEng)}</div>
                                </BentoCard>

                                <BentoCard title="Engineering Margin" icon={TrendingUp}>
                                    <div className={`text-3xl font-bold ${results.engineeringMargin >= 70 ? 'text-emerald-400' : results.engineeringMargin >= 50 ? 'text-yellow-400' : 'text-red-600'}`}>
                                        <NumberTicker value={results.engineeringMargin} suffix="%" />
                                    </div>
                                    <div className="text-zinc-500 text-xs mt-2">Revenue after engineering</div>
                                </BentoCard>

                                <BentoCard title="Coordination Tax" icon={Clock} className="border-orange-500/20">
                                    <div className="text-3xl font-bold text-orange-400">
                                        {results.coordinationTax.toFixed(0)}%
                                    </div>
                                    <div className="text-zinc-500 text-xs mt-2">{formatMoney(results.overheadCost)}/yr lost</div>
                                </BentoCard>

                                <BentoCard title="Optimal Headcount" icon={Users} className="border-cyan-500/20">
                                    <div className="text-3xl font-bold text-cyan-400">
                                        {results.optimalHeadcount}
                                    </div>
                                    <div className="text-zinc-500 text-xs mt-2">
                                        {results.engineers > results.optimalHeadcount
                                            ? `${results.engineers - results.optimalHeadcount} over optimal`
                                            : `${results.optimalHeadcount - results.engineers} capacity available`
                                        }
                                    </div>
                                </BentoCard>
                            </motion.div>

                            {/* TEAM HEALTH DASHBOARD */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                            >
                                <div className="capsule-container rounded-2xl p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Team Health Dashboard</div>
                                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${results.teamHealthScore >= 75 ? 'bg-emerald-500/20 text-emerald-400' :
                                            results.teamHealthScore >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                                                'bg-red-500/20 text-red-400'
                                            }`}>
                                            Health Score: {results.teamHealthScore}/100
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="bg-black/30 rounded-xl p-4">
                                            <div className="text-xs text-zinc-500 mb-1">Productivity Index</div>
                                            <div className="text-2xl font-bold text-emerald-400">{results.productivityIndex}/100</div>
                                            <div className="text-[10px] text-zinc-600 mt-1">APER + tenure + stability</div>
                                        </div>
                                        <div className="bg-black/30 rounded-xl p-4">
                                            <div className="text-xs text-zinc-500 mb-1">New Hire Ramp Cost</div>
                                            <div className="text-2xl font-bold text-yellow-400">{formatMoney(results.newHireRampCost)}</div>
                                            <div className="text-[10px] text-zinc-600 mt-1">3-month productivity loss</div>
                                        </div>
                                        <div className="bg-black/30 rounded-xl p-4">
                                            <div className="text-xs text-zinc-500 mb-1">Gap to Elite APER</div>
                                            <div className="text-2xl font-bold text-cyan-400">{results.revenueGap > 0 ? formatMoney(results.revenueGap) : '✓ Elite'}</div>
                                            <div className="text-[10px] text-zinc-600 mt-1">ARR needed for $600K/eng</div>
                                        </div>
                                        <div className="bg-black/30 rounded-xl p-4">
                                            <div className="text-xs text-zinc-500 mb-1">Leverage Ratio</div>
                                            <div className="text-2xl font-bold text-purple-400">{results.leverageRatio.toFixed(1)}x</div>
                                            <div className="text-[10px] text-zinc-600 mt-1">Revenue per $ eng spend</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* BENCHMARK CHART */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                <BentoCard title="Industry Benchmarks" icon={TrendingUp}>
                                    <div className="text-center mb-4">
                                        <div className="text-sm text-zinc-500">How you compare to industry standards</div>
                                    </div>
                                    <div className="h-64 w-full mt-4">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={results.benchmarks} layout="vertical" margin={{ left: 20 }}>
                                                <XAxis type="number" hide />
                                                <YAxis dataKey="name" type="category" width={120} tick={{ fill: '#71717a', fontSize: 11 }} />
                                                <Tooltip
                                                    cursor={{ fill: 'transparent' }}
                                                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
                                                    formatter={(val) => val !== undefined ? formatMoney(Number(val)) : ''}
                                                />
                                                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                                                    {results.benchmarks.map((entry: BenchmarkData, index: number) => (
                                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                                    ))}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </BentoCard>
                            </motion.div>

                            {/* EXECUTIVE SUMMARY + EMAIL CAPTURE */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            >
                                <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-8 border border-white/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-3 h-3 rounded-full animate-pulse ${results.aper < 400000 ? 'bg-orange-500' : 'bg-cyan-400'}`} />
                                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Executive Summary</span>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">📊 Board-Ready Insights</h3>
                                            <ul className="space-y-3 text-zinc-400">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-1">•</span>
                                                    <span>APER of <strong className="text-white">{formatMoney(results.aper)}</strong>/engineer is {results.aper >= 500000 ? 'above' : 'below'} the $500K SaaS benchmark.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-1">•</span>
                                                    <span>Coordination tax of <strong className="text-white">{results.coordinationTax.toFixed(0)}%</strong> costs <strong className="text-red-400">{formatMoney(results.overheadCost)}/year</strong> in lost productivity.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-yellow-400 mt-1">•</span>
                                                    <span>Optimal headcount is <strong className="text-white">{results.optimalHeadcount}</strong> engineers. You are {results.engineers > results.optimalHeadcount ? <strong className="text-orange-400">{results.engineers - results.optimalHeadcount} over</strong> : <strong className="text-cyan-400">{results.optimalHeadcount - results.engineers} under</strong>} optimal.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="border-l border-white/10 pl-8">
                                            {!emailSubmitted ? (
                                                <>
                                                    <h3 className="text-xl font-bold text-white mb-2">Want the Full Analysis?</h3>
                                                    <p className="text-zinc-400 text-sm mb-4">Get a team topology review and optimal headcount roadmap.</p>
                                                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                                                        <div className="relative">
                                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                                            <input
                                                                type="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                placeholder="your@email.com"
                                                                required
                                                                className="w-full pl-11 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-yellow-500 focus:outline-none"
                                                            />
                                                        </div>
                                                        <button
                                                            type="submit"
                                                            className={`w-full px-6 py-3 font-bold uppercase tracking-widest text-sm rounded-xl flex items-center justify-center gap-2 transition-all ${results.aper < 400000
                                                                ? 'bg-orange-600 hover:bg-orange-500 text-white'
                                                                : 'bg-white hover:bg-yellow-400 text-black'
                                                                }`}
                                                        >
                                                            Get Team Analysis <ArrowRight className="w-4 h-4" />
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
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-white/10"
                            >
                                <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← Run New Analysis</button>
                                <Link href="/advisory" className={`px-10 py-4 font-bold uppercase tracking-widest rounded-xl transition-all ${results.aper < 400000
                                    ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.4)]'
                                    : 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_30px_rgba(234,179,8,0.3)]'
                                    }`}>
                                    {results.aper < 400000 ? '⚠️ Workforce Optimization Session' : 'Maximize My Efficiency'} →
                                </Link>
                                <Link href="/system" className="text-zinc-500 text-sm hover:text-white">Explore All Tools →</Link>
                            </motion.div>

                            {/* SOCIAL PROOF */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
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

            {/* AUTHORITY CONTENT: APER */}
            <div className="max-w-4xl mx-auto mt-32 mb-24 space-y-16 px-6">
                <div className="prose prose-invert prose-lg max-w-none">
                    <h2 className="text-4xl font-bold text-white mb-8">The Most Dangerous Number in SaaS</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        <strong>Revenue Per Employee (RPE)</strong> is the ultimate truth serum. In High-Leverage SaaS (the &quot;Elite&quot; zone), one engineer generates over $600k in ARR. In Low-Leverage SaaS (the &quot;Danger&quot; zone), one engineer generates less than $200k.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        The <strong>APER™ Diagnostic</strong> (Algorithmic Product Engineering Ratio) strips away the excuses. It ignores &quot;story points completed&quot; and &quot;lines of code written.&quot; It asks one question: <em>Is this organization converting human intelligence into capital efficiently?</em>
                    </p>
                </div>

                <div className="bg-gradient-to-r from-zinc-900 to-black p-8 rounded-xl border border-cyan-500/20">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">The Coordination Tax</h3>
                    <p className="text-zinc-300 mb-6">
                        Why does adding engineers often slow you down? <strong>Brooks&apos; Law.</strong>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div>
                            <h4 className="font-bold text-white mb-2">Small Team (Elite)</h4>
                            <p className="text-zinc-500">Communication is implicit. Decisions are instant. Architecture is unified. High APER.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">Large Team (Bloated)</h4>
                            <p className="text-zinc-500">Communication is scheduled. Decisions require committees. Architecture is fragmented. Low APER.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
