'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, AlertTriangle, DollarSign, Lock, Zap } from 'lucide-react';
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

// --- MAIN APPLICATION ---

interface BenchmarkData {
    name: string;
    value: number;
    color: string;
}

interface Results {
    aper: number;
    engineeringMargin: number;
    multiplier: number;
    benchmarks: BenchmarkData[];
    totalEngCost: number;
    engineers: number;
    costPerEng: number;
}

export default function APERTool() {
    const [arr, setArr] = useState('10000000');
    const [engineers, setEngineers] = useState('20');
    const [costPerEng, setCostPerEng] = useState('240000');

    const [results, setResults] = useState<Results | null>(null);
    const [loading, setLoading] = useState(false);

    const calculate = () => {
        setLoading(true);
        setTimeout(() => {
            const arrNum = parseFloat(arr) || 0;
            const engNum = parseFloat(engineers) || 0;
            const costNum = parseFloat(costPerEng) || 0;

            const aper = arrNum / engNum;
            const totalEngCost = engNum * costNum;
            const engineeringMargin = ((arrNum - totalEngCost) / arrNum) * 100;
            const multiplier = aper / costNum;

            const benchmarks: BenchmarkData[] = [
                { name: 'Your Company', value: aper, color: aper >= 600000 ? '#22d3ee' : aper >= 400000 ? '#facc15' : '#dc2626' },
                { name: 'Elite SaaS', value: 650000, color: '#22d3ee' },
                { name: 'Good SaaS', value: 450000, color: '#facc15' },
                { name: 'Danger Zone', value: 200000, color: '#dc2626' },
            ];

            setResults({ aper, engineeringMargin, multiplier, benchmarks, totalEngCost, engineers: engNum, costPerEng: costNum });
            setLoading(false);
        }, 800);
    };

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'k';
        return '$' + num.toFixed(0);
    };

    const getStatus = (aper: number) => {
        if (aper >= 600000) return { label: 'ELITE EFFICIENCY', color: 'text-cyan-400', desc: 'You are a software factory. Hire aggressively.' };
        if (aper >= 400000) return { label: 'HEALTHY', color: 'text-yellow-400', desc: 'Standard efficiency. Focus on leverage.' };
        if (aper >= 200000) return { label: 'BLOATED', color: 'text-orange-500', desc: 'You have a coordination problem. Freeze hiring.' };
        return { label: 'CRITICAL INEFFICIENCY', color: 'text-red-600', desc: 'Burn is outpacing value. Immediate RIF or pivot required.' };
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
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                                    Are You <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Overstaffed?</span>
                                </h1>
                                <p className="text-xl text-zinc-500">Calculate your Algorithmic Product Engineering Ratio (APER™).</p>
                            </div>

                            <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label htmlFor="arr" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Annual Revenue (ARR)</label>
                                        <input id="arr" type="number" value={arr} onChange={e => setArr(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="engineers" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Engineer Headcount</label>
                                        <input id="engineers" type="number" value={engineers} onChange={e => setEngineers(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label htmlFor="costPerEng" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">Cost per Engineer</label>
                                        <input id="costPerEng" type="number" value={costPerEng} onChange={e => setCostPerEng(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                        <div className="text-[10px] text-zinc-600 mt-1">Include salary, equity, benefits</div>
                                    </div>
                                </div>

                                <button
                                    onClick={calculate} disabled={loading || !arr || !engineers}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-yellow-400 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {loading ? <span className="animate-pulse">DIAGNOSING...</span> : "RUN APER DIAGNOSTIC"}
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
                                <div className={`text-8xl font-bold tracking-tighter ${getStatus(results.aper).color}`}>
                                    <NumberTicker value={results.aper} prefix="$" />
                                </div>
                                <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatus(results.aper).color.replace('text-', 'border-').replace('400', '500/30')} bg-white/5`}>
                                    <span className={`font-bold uppercase tracking-widest text-sm ${getStatus(results.aper).color}`}>{getStatus(results.aper).label}</span>
                                </div>
                                <p className="mt-6 text-zinc-400 max-w-xl mx-auto">{getStatus(results.aper).desc}</p>
                            </motion.div>

                            {/* METRICS GRID */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
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
                                    <div className="text-zinc-500 text-xs mt-2">Revenue after engineering costs</div>
                                </BentoCard>

                                <BentoCard title="Leverage Ratio" icon={Zap} className="border-yellow-500/20">
                                    <div className="text-3xl font-bold text-yellow-400">
                                        <NumberTicker value={results.multiplier} suffix="x" />
                                    </div>
                                    <div className="text-zinc-500 text-xs mt-2">Revenue generated per $1 of eng salary</div>
                                </BentoCard>
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

                            {/* INTERPRETATION */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            >
                                <BentoCard title="What This Means" icon={AlertTriangle} className="border-yellow-500/20">
                                    <div className="space-y-4">
                                        {results.aper >= 600000 && (
                                            <div className="text-zinc-300">
                                                <p className="mb-3">You are operating at <strong className="text-cyan-400">elite efficiency</strong>. Your revenue per engineer of <strong>{formatMoney(results.aper)}</strong> puts you in the top decile of SaaS companies.</p>
                                                <p><strong className="text-white">Recommendation:</strong> You have room to hire aggressively. Your current team demonstrates exceptional leverage.</p>
                                            </div>
                                        )}

                                        {results.aper >= 400000 && results.aper < 600000 && (
                                            <div className="text-zinc-300">
                                                <p className="mb-3">You are at <strong className="text-yellow-400">healthy efficiency</strong>. Your APER of <strong>{formatMoney(results.aper)}</strong> is within industry standards for growth-stage SaaS.</p>
                                                <p><strong className="text-white">Recommendation:</strong> Focus on improving leverage through better tooling, processes, and architectural decisions before scaling headcount.</p>
                                            </div>
                                        )}

                                        {results.aper >= 200000 && results.aper < 400000 && (
                                            <div className="text-zinc-300">
                                                <p className="mb-3">You are showing signs of <strong className="text-orange-500">coordination overhead</strong>. At <strong>{formatMoney(results.aper)}</strong> per engineer, you may be overstaffed relative to your revenue.</p>
                                                <p><strong className="text-white">Recommendation:</strong> Freeze hiring immediately. Focus on increasing output from your existing team through better prioritization and technical debt reduction.</p>
                                            </div>
                                        )}

                                        {results.aper < 200000 && (
                                            <div className="text-zinc-300">
                                                <p className="mb-3">You have <strong className="text-red-600">critical inefficiency</strong>. At <strong>{formatMoney(results.aper)}</strong> per engineer, your burn rate is outpacing value creation.</p>
                                                <p><strong className="text-white">Recommendation:</strong> This requires immediate action. Consider a reduction in force (RIF), significant pivot, or focus on revenue acceleration. The current trajectory is unsustainable.</p>
                                            </div>
                                        )}

                                        <div className="mt-6 pt-6 border-t border-white/10">
                                            <div className="text-sm text-zinc-500 mb-2">Industry Context:</div>
                                            <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                                <li><strong className="text-cyan-400">$600K+/engineer:</strong> Elite (Stripe, Figma, Linear)</li>
                                                <li><strong className="text-yellow-400">$400-600K/engineer:</strong> Healthy (Most successful SaaS)</li>
                                                <li><strong className="text-orange-500">$200-400K/engineer:</strong> Concerning (Coordination tax visible)</li>
                                                <li><strong className="text-red-600">&lt;$200K/engineer:</strong> Critical (Immediate action required)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </BentoCard>
                            </motion.div>

                            {/* ACTION FOOTER */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                className="border-t border-white/10 pt-12 flex justify-center gap-4"
                            >
                                <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline">← New Analysis</button>
                                <Link href="/advisory" className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold uppercase rounded-xl transition-all">Fix My Efficiency →</Link>
                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
