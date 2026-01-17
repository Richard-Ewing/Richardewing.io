'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { ShineBorder } from '../../components/magicui/shine-border';
import { NumberTicker } from '../../components/magicui/number-ticker';
import { Target, Users, Cpu, DollarSign, Mail, ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';

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

// --- PERSONA TYPES ---
type Persona = 'Founder' | 'CPO' | 'VP Eng' | 'CFO';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Founder', label: 'Founder/CEO', icon: Target },
    { id: 'CPO', label: 'CPO/Product', icon: Users },
    { id: 'VP Eng', label: 'VP Engineering', icon: Cpu },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

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
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');

    // Inputs
    const [tickets, setTickets] = useState('');
    const [teamSize, setTeamSize] = useState('20');
    const [salary, setSalary] = useState('240000');
    const [roadmapHorizon, setRoadmapHorizon] = useState('Q4');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<Results | null>(null);

    // Email capture
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

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
        } catch {
            alert("Audit failed. Ensure you pasted valid text and the API is configured.");
        }
        finally { setLoading(false); }
    };

    const formatMoney = (num: number) => {
        if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
        return '$' + num.toFixed(0);
    };

    // Persona-specific insights
    const getPersonaInsight = (results: Results): { headline: string; detail: string; action: string } => {
        const score = results.score;
        const waste = results.financials.waste;
        const maintenance = results.metrics.maintenance;

        switch (persona) {
            case 'Founder':
                if (score < 50) return {
                    headline: `⚠️ You're burning ${formatMoney(waste)}/year on janitorial work.`,
                    detail: `With ${maintenance}% of capacity in maintenance, you're paying senior engineer salaries for junior-level work. This is capital leakage that affects your runway and valuation.`,
                    action: 'Schedule a product rationalization session before your next funding round.'
                };
                return {
                    headline: 'Your roadmap is investor-ready.',
                    detail: `${results.metrics.growth}% growth focus signals healthy capital allocation. Your engineering spend is creating enterprise value.`,
                    action: 'Document this as proof of operational discipline for investors.'
                };

            case 'CPO':
                if (score < 60) return {
                    headline: `Your roadmap credibility is at ${score}%.`,
                    detail: `When ${maintenance}% of engineering is in maintenance mode, your feature commitments become unreliable. The board sees this as execution risk.`,
                    action: 'Map the debt hotspots and create a burn-down plan.'
                };
                return {
                    headline: 'Your roadmap is execution-ready.',
                    detail: `With ${results.metrics.growth}% growth allocation, you have the capacity to hit your commitments.`,
                    action: 'Focus on protecting this allocation from scope creep.'
                };

            case 'VP Eng':
                const seniorHours = waste / (parseInt(salary) / 2080); // Approximate hours wasted
                if (score < 50) return {
                    headline: `${Math.round(seniorHours).toLocaleString()} hours/year of senior IC time is wasted.`,
                    detail: `Your team is doing ${maintenance}% maintenance work. This is the #1 cause of senior engineer attrition—they didn't sign up to be janitors.`,
                    action: 'Identify the debt clusters and make a case for dedicated reduction sprints.'
                };
                return {
                    headline: 'Your team is in high-leverage mode.',
                    detail: `At ${score}% efficiency, your engineers are working on value-creating activities. Protect this.`,
                    action: 'Maintain discipline on new feature scope to prevent regression.'
                };

            case 'CFO':
                const roi = (100 - maintenance) / 100;
                if (score < 50) return {
                    headline: `Engineering ROI: ${(roi * 100).toFixed(0)} cents per dollar.`,
                    detail: `For every $1 spent on engineering, ${(maintenance).toFixed(0)} cents is going to maintenance with no return. Annual waste: ${formatMoney(waste)}.`,
                    action: 'Model the impact of a debt reduction investment vs. continued drag.'
                };
                return {
                    headline: `Engineering ROI: ${(roi * 100).toFixed(0)} cents per dollar.`,
                    detail: `This is within healthy bounds for a growth-stage company. Continue monitoring quarterly.`,
                    action: 'Set up quarterly PDI tracking as a financial KPI.'
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

    const COLORS = { growth: '#22d3ee', retention: '#8b5cf6', maintenance: '#dc2626' };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
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
                            <span className="font-mono text-xs text-red-400 uppercase tracking-widest">PDI 2.0 | AI Forensic Engine</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Quantify the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Hidden Debt.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                            AI-powered forensic audit for engineering insolvency. Paste your backlog and see where your capital is bleeding.
                        </p>

                        {/* PERSONA SELECTOR */}
                        <div className="mb-8">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">I am a...</div>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAS.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => setPersona(p.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id
                                                ? 'bg-red-500/10 border-red-500 text-red-400'
                                                : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/30'
                                            }`}
                                    >
                                        <p.icon size={14} />
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

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

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                                <div>
                                    <label htmlFor="horizon" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                        4. Roadmap Horizon
                                    </label>
                                    <select
                                        id="horizon"
                                        value={roadmapHorizon}
                                        onChange={e => setRoadmapHorizon(e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                                    >
                                        <option value="Q1">Q1 (This Quarter)</option>
                                        <option value="H1">H1 (6 Months)</option>
                                        <option value="FY">FY (Full Year)</option>
                                    </select>
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

                    {/* PERSONA-SPECIFIC INSIGHT */}
                    <ScrollReveal delay={50}>
                        <div className="capsule-container rounded-2xl p-6 mb-6 border-l-4 border-red-500">
                            <div className="flex items-center gap-2 mb-3 text-zinc-500">
                                <Target size={14} />
                                <span className="text-[10px] font-mono uppercase tracking-widest">Insight for {persona}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{getPersonaInsight(results).headline}</h3>
                            <p className="text-zinc-400 leading-relaxed mb-3">{getPersonaInsight(results).detail}</p>
                            <p className="text-cyan-400 font-semibold">{getPersonaInsight(results).action}</p>
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
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Growth Focus</div>
                                <div className="text-3xl sm:text-4xl font-bold text-cyan-400">{results.metrics.growth}%</div>
                                <p className="text-xs text-cyan-400/60 mt-2">New feature development.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Retention Work</div>
                                <div className="text-3xl sm:text-4xl font-bold text-purple-400">{results.metrics.retention}%</div>
                                <p className="text-xs text-purple-400/60 mt-2">Customer satisfaction & churn prevention.</p>
                            </GlowCard>
                        </div>
                    </ScrollReveal>

                    {/* Breakdown Chart */}
                    <ScrollReveal delay={150}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Backlog Composition</div>
                                <div className="w-48 h-48 mx-auto">
                                    <PieChart data={[
                                        { name: 'Growth', value: results.metrics.growth, color: COLORS.growth },
                                        { name: 'Retention', value: results.metrics.retention, color: COLORS.retention },
                                        { name: 'Maintenance', value: results.metrics.maintenance, color: COLORS.maintenance },
                                    ]} />
                                </div>
                                <div className="flex justify-center gap-6 mt-6">
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-cyan-400" /><span className="text-xs text-zinc-400">Growth</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-purple-500" /><span className="text-xs text-zinc-400">Retention</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-red-600" /><span className="text-xs text-zinc-400">Maintenance</span></div>
                                </div>
                            </GlowCard>

                            {/* EXECUTIVE SUMMARY + EMAIL */}
                            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className={`w-3 h-3 rounded-full animate-pulse ${results.score < 50 ? 'bg-red-500' : 'bg-cyan-400'}`} />
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Executive Summary</span>
                                </div>

                                <ul className="space-y-2 text-zinc-400 text-sm mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-0.5">•</span>
                                        <span>PDI of <strong className="text-white">{results.score}</strong> means {100 - results.score}% of capacity is non-value-creating.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-400 mt-0.5">•</span>
                                        <span>Annual maintenance waste: <strong className="text-red-400">{formatMoney(results.financials.waste)}</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-0.5">•</span>
                                        <span>Growth allocation: <strong className="text-cyan-400">{results.metrics.growth}%</strong> of backlog.</span>
                                    </li>
                                </ul>

                                {!emailSubmitted ? (
                                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                                        <div className="text-sm text-white font-semibold mb-2">Get the full debt burn-down plan:</div>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                required
                                                className="w-full pl-11 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-red-500 focus:outline-none text-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className={`w-full px-6 py-3 font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 transition-all ${results.score < 50
                                                    ? 'bg-red-600 hover:bg-red-500 text-white'
                                                    : 'bg-white hover:bg-cyan-400 text-black'
                                                }`}
                                        >
                                            Get Debt Analysis <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </form>
                                ) : (
                                    <div className="text-center py-2">
                                        <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <span className="text-xl">✓</span>
                                        </div>
                                        <p className="text-sm text-zinc-400">Redirecting...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Ticket Breakdown */}
                    {results.categorized && results.categorized.length > 0 && (
                        <ScrollReveal delay={200}>
                            <GlowCard className="p-6 mb-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">AI Categorization Results</div>
                                <div className="max-h-64 overflow-y-auto space-y-2">
                                    {results.categorized.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${item.category === 'growth' ? 'bg-cyan-500/20 text-cyan-400' :
                                                    item.category === 'retention' ? 'bg-purple-500/20 text-purple-400' :
                                                        'bg-red-500/20 text-red-400'
                                                }`}>
                                                {item.category}
                                            </span>
                                            <div className="flex-1">
                                                <p className="text-sm text-white">{item.ticket}</p>
                                                <p className="text-xs text-zinc-500 mt-1">{item.reasoning}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlowCard>
                        </ScrollReveal>
                    )}

                    {/* Action Footer */}
                    <ScrollReveal delay={250}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/10">
                            <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← Run New Audit</button>
                            <Link href="/advisory" className={`px-10 py-4 font-bold uppercase tracking-widest rounded-xl transition-all ${results.score < 50
                                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]'
                                    : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                                }`}>
                                {results.score < 50 ? '🚨 Start Debt Burn-Down' : 'Optimize My Roadmap'} →
                            </Link>
                            <Link href="/system" className="text-zinc-500 text-sm hover:text-white">Explore All Tools →</Link>
                        </div>
                    </ScrollReveal>

                    {/* Social Proof */}
                    <ScrollReveal delay={300}>
                        <div className="text-center pt-8">
                            <p className="text-xs text-zinc-600 mb-3">Trusted by product leaders at</p>
                            <div className="flex items-center justify-center gap-8 text-zinc-600 font-mono text-xs">
                                <span>Stripe</span>
                                <span>Figma</span>
                                <span>Linear</span>
                                <span>Notion</span>
                                <span>Vercel</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </>
            )}
        </div>
    );
}
