
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Activity, TrendingDown, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// --- VISUAL COMPONENTS ---

const NumberTicker = ({ value }: { value: number }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = value;
        const timer = setInterval(() => {
            start += (end - start) / 10;
            if (Math.abs(end - start) < 0.5) { setDisplay(end); clearInterval(timer); }
            else setDisplay(Math.round(start));
        }, 20);
        return () => clearInterval(timer);
    }, [value]);
    return <span className="tabular-nums">{display}</span>;
};

const BentoCard = ({ children, title, icon: Icon, className = "" }: any) => (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur-md ${className}`}>
        <div className="flex items-center gap-2 mb-4 text-zinc-500">
            {Icon && <Icon size={14} />}
            <span className="text-[10px] font-mono uppercase tracking-widest">{title}</span>
        </div>
        {children}
    </div>
);

// --- MAIN APPLICATION ---

export default function PDITool() {
    const [tickets, setTickets] = useState('');
    const [teamSize, setTeamSize] = useState('');
    const [salary, setSalary] = useState('240000');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any>(null);

    const analyze = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/audit', {
                method: 'POST',
                body: JSON.stringify({ tickets: tickets.split('\n').filter(t => t.trim()) })
            });
            const data = await res.json();

            const total = data.summary.total_count;
            const maint = data.summary.maintenance_count;
            const score = Math.round(((total - maint) / total) * 100);

            setResults({
                score,
                metrics: {
                    growth: Math.round((data.summary.growth_count / total) * 100),
                    retention: Math.round((data.summary.retention_count / total) * 100),
                    maintenance: Math.round((maint / total) * 100),
                },
                financials: {
                    waste: (parseInt(teamSize) * parseInt(salary)) * (maint / total),
                }
            });
        } catch (e) { alert("Audit failed."); }
        finally { setLoading(false); }
    };

    const COLORS = { growth: '#22d3ee', retention: '#8b5cf6', maintenance: '#dc2626' };

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-200 selection:bg-cyan-500/30 font-sans">

            {/* HEADER */}
            <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                        <span className="font-bold tracking-tight text-lg">PDI 2.0 <span className="text-zinc-600 font-normal">| Forensic Engine</span></span>
                    </div>
                    <Link href="/tools/report" className="text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">
                        Export Board Report →
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
                                    Quantify the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Hidden Debt.</span>
                                </h1>
                                <p className="text-xl text-zinc-500">Forensic audit for engineering insolvency.</p>
                            </div>

                            <div className="space-y-6 bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                                <div>
                                    <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">1. Backlog Evidence</label>
                                    <textarea
                                        value={tickets} onChange={e => setTickets(e.target.value)}
                                        className="w-full h-48 bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-300 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700"
                                        placeholder="Paste Jira tickets or Pull Requests here..."
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">2. Team Size</label>
                                        <input type="number" value={teamSize} onChange={e => setTeamSize(e.target.value)} placeholder="20"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 block">3. Avg Salary</label>
                                        <input type="number" value={salary} onChange={e => setSalary(e.target.value)} placeholder="240000"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none" />
                                    </div>
                                </div>

                                <button
                                    onClick={analyze} disabled={loading || !tickets}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-400 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                                >
                                    {loading ? "Scanning..." : "Run Forensic Audit"}
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* --- RESULTS STATE --- */
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                            {/* SCOREBOARD */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                                <div>
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Capital Efficiency Score</div>
                                    <div className={`text-9xl font-bold tracking-tighter leading-none ${results.score < 50 ? 'text-red-600' : 'text-cyan-400'}`}>
                                        <NumberTicker value={results.score} />
                                    </div>
                                    <div className="mt-4 flex items-center gap-2">
                                        {results.score < 50 ? (
                                            <span className="px-3 py-1 rounded-full bg-red-900/30 text-red-400 border border-red-900/50 text-xs font-bold uppercase tracking-widest">INSOLVENT</span>
                                        ) : (
                                            <span className="px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-900/50 text-xs font-bold uppercase tracking-widest">HIGH LEVERAGE</span>
                                        )}
                                    </div>
                                </div>
                                <div className="prose prose-invert">
                                    <p className="text-lg leading-relaxed text-zinc-300">
                                        Based on your backlog, <strong className="text-white">{results.metrics.maintenance}% of your capacity</strong> is consumed by non-accretive work.
                                        You are burning <span className="text-red-500 font-bold font-mono">${(results.financials.waste / 1000000).toFixed(1)}M</span> annually on maintenance.
                                    </p>
                                </div>
                            </div>

                            {/* BENTO GRID DASHBOARD */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <BentoCard title="Annual Waste" icon={DollarSign} className="border-red-900/30 bg-red-950/10">
                                    <div className="text-4xl font-bold text-red-500 mt-2">${(results.financials.waste / 1000000).toFixed(2)}M</div>
                                    <p className="text-xs text-red-400/60 mt-2">Capital deployed to zero-ROI tasks.</p>
                                </BentoCard>

                                <BentoCard title="Growth Capacity" icon={TrendingDown} className="border-cyan-900/30 bg-cyan-950/10">
                                    <div className="text-4xl font-bold text-cyan-400 mt-2">{results.metrics.growth}%</div>
                                    <p className="text-xs text-cyan-400/60 mt-2">Actual feature velocity.</p>
                                </BentoCard>

                                <BentoCard title="Burn Map" icon={Activity}>
                                    <div className="h-32 w-full mt-2">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie data={[
                                                    { name: 'Growth', value: results.metrics.growth, color: COLORS.growth },
                                                    { name: 'Retention', value: results.metrics.retention, color: COLORS.retention },
                                                    { name: 'Maintenance', value: results.metrics.maintenance, color: COLORS.maintenance }
                                                ]} innerRadius={40} outerRadius={60} dataKey="value">
                                                    <Cell fill={COLORS.growth} /> <Cell fill={COLORS.retention} /> <Cell fill={COLORS.maintenance} />
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </BentoCard>
                            </div>

                            {/* CTA AREA */}
                            <div className="border-t border-white/10 pt-8 flex justify-center gap-4">
                                <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline">Restart Audit</button>
                                <Link href="/advisory" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-lg transition-colors">
                                    Book Fix Call
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* DEEP TEXT (SEO) */}
                <div className="mt-32 pt-16 border-t border-white/5 prose prose-invert prose-lg max-w-none">
                    <h2 className="text-3xl font-bold text-white mb-8">The Theory of Technical Inflation</h2>
                    <p className="text-zinc-400">Engineering organizations do not die from starvation; they die from indigestion. If your PDI is below 50, you are paying Senior Engineer salaries for Digital Janitorial work. That is <span className="text-red-500 font-bold">Capital Leakage</span>.</p>
                </div>
            </main>
        </div>
    );
}
