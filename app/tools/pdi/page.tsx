'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { ShineBorder } from '../../components/magicui/shine-border';
import { NumberTicker } from '../../components/magicui/number-ticker';

// Simple Pie Chart component (no external dependency)
const PieChart = ({ data }: { data: { name: string; value: number; color: string }[] }) => {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    let currentAngle = 0;

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            {data.map((slice, i) => {
                const angle = (slice.value / total) * 360;
                const startAngle = currentAngle;
                currentAngle += angle;

                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (currentAngle - 90) * Math.PI / 180;

                const x1 = 50 + 35 * Math.cos(startRad);
                const y1 = 50 + 35 * Math.sin(startRad);
                const x2 = 50 + 35 * Math.cos(endRad);
                const y2 = 50 + 35 * Math.sin(endRad);

                const largeArc = angle > 180 ? 1 : 0;

                return (
                    <path
                        key={i}
                        d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={slice.color}
                        className="transition-all duration-500"
                    />
                );
            })}
            <circle cx="50" cy="50" r="20" fill="#050505" />
        </svg>
    );
};

interface Results {
    score: number;
    metrics: {
        growth: number;
        retention: number;
        maintenance: number;
    };
    financials: {
        waste: number;
    };
    categorized?: Array<{
        ticket: string;
        category: string;
        reasoning: string;
    }>;
}

export default function PDITool() {
    const [tickets, setTickets] = useState('');
    const [teamSize, setTeamSize] = useState('20');
    const [salary, setSalary] = useState('240000');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<Results | null>(null);

    const analyze = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tickets: tickets.split('\n').filter(t => t.trim()) })
            });

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            const total = data.total;
            const maint = data.categories.maintenance;
            const growth = data.categories.growth;
            const retention = data.categories.retention;

            // PDI Score = 100 - Maintenance %
            const score = Math.round(100 - ((maint / total) * 100));

            setResults({
                score,
                metrics: {
                    growth: Math.round((growth / total) * 100),
                    retention: Math.round((retention / total) * 100),
                    maintenance: Math.round((maint / total) * 100),
                },
                financials: {
                    waste: (parseInt(teamSize) * parseInt(salary)) * (maint / total),
                },
                categorized: data.categorized,
            });
        } catch (e) {
            alert("Audit failed. Ensure you pasted valid text and the API is configured.");
        }
        finally { setLoading(false); }
    };

    const COLORS = { growth: '#22d3ee', retention: '#8b5cf6', maintenance: '#dc2626' };

    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">PDI Engine</span>
            </div>

            {!results ? (
                /* --- INPUT STATE --- */
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-red-400 uppercase tracking-widest">PDI 2.0 | Forensic Engine</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Quantify the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Hidden Debt.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                            Forensic audit for engineering insolvency. Paste your backlog and see where your capital is bleeding.
                        </p>

                        {/* Input Form */}
                        <div className="space-y-6">
                            <div>
                                <label className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                    1. Backlog Evidence
                                </label>
                                <textarea
                                    value={tickets}
                                    onChange={e => setTickets(e.target.value)}
                                    className="w-full h-40 sm:h-48 bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-300 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-zinc-700 resize-none"
                                    placeholder="Paste Jira tickets, PRs, or task descriptions here (one per line)...

Example:
Fix login page bug
Refactor payment service
Add new pricing tier
Improve dashboard performance
Migrate to new database"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="teamSize" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                        2. Team Size
                                    </label>
                                    <input
                                        id="teamSize"
                                        type="number"
                                        value={teamSize}
                                        onChange={e => setTeamSize(e.target.value)}
                                        placeholder="20"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="salary" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                        3. Avg Fully-Loaded Salary
                                    </label>
                                    <input
                                        id="salary"
                                        type="number"
                                        value={salary}
                                        onChange={e => setSalary(e.target.value)}
                                        placeholder="240000"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <ShineBorder borderColor="rgba(0, 240, 255, 0.6)" duration={2}>
                                <button
                                    onClick={analyze}
                                    disabled={loading || !tickets.trim()}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            SCANNING BACKLOG...
                                        </>
                                    ) : (
                                        "RUN FORENSIC AUDIT →"
                                    )}
                                </button>
                            </ShineBorder>
                        </div>
                    </div>
                </ScrollReveal>
            ) : (
                /* --- RESULTS STATE --- */
                <>
                    <ScrollReveal>
                        {/* Score Header */}
                        <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Capital Efficiency Score</div>
                                    <div className={`text-7xl sm:text-9xl font-bold tracking-tighter leading-none ${results.score < 50 ? 'text-red-600' : 'text-cyan-400'}`}>
                                        <NumberTicker value={results.score} />
                                    </div>
                                    <div className="mt-4">
                                        {results.score < 50 ? (
                                            <span className="px-3 py-1.5 rounded-full bg-red-900/30 text-red-400 border border-red-900/50 text-xs font-bold uppercase tracking-widest">
                                                ⚠ INSOLVENT
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1.5 rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-900/50 text-xs font-bold uppercase tracking-widest">
                                                ✓ HIGH LEVERAGE
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
                                        Based on your backlog, <strong className="text-white">{results.metrics.maintenance}% of your capacity</strong> is consumed by non-accretive work.
                                        You are burning <span className="text-red-500 font-bold font-mono">${(results.financials.waste / 1000000).toFixed(1)}M</span> annually on maintenance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Metrics Grid */}
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <GlowCard className="p-6" glowColor="danger">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Annual Waste</div>
                                <div className="text-3xl sm:text-4xl font-bold text-red-500">${(results.financials.waste / 1000000).toFixed(2)}M</div>
                                <p className="text-xs text-red-400/60 mt-2">Capital deployed to zero-ROI tasks.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Growth Capacity</div>
                                <div className="text-3xl sm:text-4xl font-bold text-cyan-400">{results.metrics.growth}%</div>
                                <p className="text-xs text-cyan-400/60 mt-2">Actual feature velocity.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="cobalt">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Burn Map</div>
                                <div className="h-24 w-24 mx-auto mt-2">
                                    <PieChart data={[
                                        { name: 'Growth', value: results.metrics.growth || 1, color: COLORS.growth },
                                        { name: 'Retention', value: results.metrics.retention || 1, color: COLORS.retention },
                                        { name: 'Maintenance', value: results.metrics.maintenance || 1, color: COLORS.maintenance }
                                    ]} />
                                </div>
                            </GlowCard>
                        </div>
                    </ScrollReveal>

                    {/* Legend */}
                    <ScrollReveal delay={150}>
                        <div className="capsule-container rounded-xl p-4 mb-6">
                            <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                                    <span className="text-zinc-400">Growth ({results.metrics.growth}%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                                    <span className="text-zinc-400">Retention ({results.metrics.retention}%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-600" />
                                    <span className="text-zinc-400">Maintenance ({results.metrics.maintenance}%)</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Enhanced Conversion Section */}
                    <ScrollReveal delay={200}>
                        <div className="mt-12 border-t border-white/10 pt-12 space-y-8">
                            {/* Email Capture */}
                            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-8 border border-white/10 shadow-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    {results.score < 50 ? (
                                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                    ) : (
                                        <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                                    )}
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                                        PDI Analysis Complete
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    {results.score < 50
                                        ? "⚠️ Your Team is Bleeding Capital"
                                        : "Want Expert Optimization?"}
                                </h3>
                                <p className="text-zinc-400 mb-6">
                                    Get a personalized deep-dive with actionable recommendations from a Product Economist.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-cyan-500 focus:outline-none transition-colors"
                                    />
                                    <Link
                                        href="/advisory"
                                        className={`px-6 py-3 font-bold uppercase tracking-widest text-sm rounded-xl flex items-center justify-center gap-2 whitespace-nowrap transition-all ${results.score < 50
                                                ? 'bg-red-600 hover:bg-red-500 text-white'
                                                : 'bg-white hover:bg-cyan-400 text-black'
                                            }`}
                                    >
                                        {results.score < 50 ? 'Emergency Intervention →' : 'Get Analysis →'}
                                    </Link>
                                </div>
                            </div>

                            {/* Secondary Actions */}
                            <div className="flex items-center justify-center gap-6 text-sm">
                                <button
                                    onClick={() => setResults(null)}
                                    className="text-zinc-500 hover:text-white transition-colors underline underline-offset-4"
                                >
                                    ← Run New Audit
                                </button>
                                <span className="text-zinc-700">|</span>
                                <Link href="/system" className="text-zinc-500 hover:text-white transition-colors">
                                    Explore All Tools →
                                </Link>
                            </div>

                            {/* Social Proof */}
                            <div className="text-center pt-8 border-t border-white/5">
                                <p className="text-xs text-zinc-600 mb-3">Trusted by product leaders at</p>
                                <div className="flex items-center justify-center gap-8 text-zinc-600 font-mono text-xs">
                                    <span>Stripe</span>
                                    <span>Figma</span>
                                    <span>Linear</span>
                                    <span>Notion</span>
                                    <span>Vercel</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Enhanced SEO Content */}
                    <ScrollReveal delay={300}>
                        <div className="mt-16 pt-8 border-t border-white/5 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">What is Product Debt Index (PDI)?</h2>
                                <p className="text-zinc-400 leading-relaxed">
                                    The Product Debt Index is a proprietary metric developed by Richard Ewing to quantify the hidden cost of technical and product debt in engineering organizations. Unlike traditional velocity metrics, PDI measures what percentage of your engineering capacity is consumed by non-value-creating maintenance work versus growth-driving feature development.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-3">How PDI is Calculated</h3>
                                    <p className="text-zinc-500 leading-relaxed mb-4">
                                        PDI uses AI to categorize your backlog items into three buckets: Growth (new features), Retention (customer value), and Maintenance (technical debt). The score is calculated as:
                                    </p>
                                    <div className="p-4 bg-zinc-900/50 rounded-lg border border-white/5 font-mono text-sm text-cyan-400">
                                        PDI = 100 - (Maintenance Work ÷ Total Work × 100)
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-3">Why PDI Matters</h3>
                                    <p className="text-zinc-500 leading-relaxed">
                                        Engineering organizations don&apos;t die from starvation—they die from indigestion. A PDI below 50 means you&apos;re paying Senior Engineer salaries for digital janitorial work. That&apos;s capital leakage that directly impacts your runway and valuation.
                                    </p>
                                </div>
                            </div>

                            <div className="text-xs text-zinc-700 pt-4 border-t border-white/5">
                                © 2026 Richard Ewing. Product Economist. All frameworks and methodologies are proprietary.
                            </div>
                        </div>
                    </ScrollReveal>
                </>
            )}
        </div>
    );
}
