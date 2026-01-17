'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { ShineBorder } from '../../components/magicui/shine-border';
import { NumberTicker } from '../../components/magicui/number-ticker';
import { Target, Users, Cpu, DollarSign, Mail, ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';

// Simple Bar Chart component (no external dependency)
const WaterfallChart = ({ data }: { data: { name: string; value: number; color: string }[] }) => {
    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <div className="space-y-4 mt-4">
            {data.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                    <div className="w-24 text-xs font-mono text-zinc-500 text-right">{item.name}</div>
                    <div className="flex-1 h-10 bg-zinc-900 rounded-lg overflow-hidden relative">
                        <div
                            className="h-full rounded-lg transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                            style={{
                                width: `${(item.value / maxValue) * 100}%`,
                                backgroundColor: item.color,
                            }}
                        >
                            <span className="text-xs font-mono text-white font-bold">
                                ${(item.value / 1000000).toFixed(1)}M
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Slider component with enhanced UX
const RiskSlider = ({ label, value, onChange, description }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    description: string;
}) => {
    const getRiskLabel = (v: number) => {
        if (v <= 15) return { emoji: '✓', text: 'Low', color: 'text-emerald-400' };
        if (v <= 35) return { emoji: '◐', text: 'Moderate', color: 'text-yellow-400' };
        if (v <= 60) return { emoji: '⚠', text: 'High', color: 'text-orange-400' };
        return { emoji: '⛔', text: 'Critical', color: 'text-red-400' };
    };
    const risk = getRiskLabel(value);

    return (
        <div className="space-y-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
            <div className="flex justify-between items-center">
                <span className="text-sm text-white font-medium">{label}</span>
                <div className={`flex items-center gap-2 px-2 py-1 rounded-lg bg-black/30 ${risk.color}`}>
                    <span>{risk.emoji}</span>
                    <span className="text-xs font-mono">{value}% {risk.text}</span>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 h-2 rounded-lg bg-gradient-to-r from-emerald-500/30 via-yellow-500/30 to-red-500/30" />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={e => onChange(parseInt(e.target.value))}
                    aria-label={label}
                    title={label}
                    className="relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10"
                    style={{
                        background: `linear-gradient(to right, #22c55e ${value}%, transparent ${value}%)`,
                    }}
                />
            </div>
            <div className="flex justify-between text-[10px] text-zinc-600">
                <span>Low Risk</span>
                <span>High Risk</span>
            </div>
            <p className="text-xs text-zinc-500">{description}</p>
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

type Stage = 'Seed' | 'Series A' | 'Series B' | 'Series C+' | 'Growth';

interface Results {
    perfectValue: number;
    riskedValue: number;
    wealthGap: number;
    adjustedConfidence: number;
    scenarios: {
        best: number;
        expected: number;
        worst: number;
    };
    biggestRiskFactor: string;
    biggestRiskCost: number;
}

export default function EVSETool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');

    // Basic inputs
    const [arr, setArr] = useState('12000000');
    const [multiple, setMultiple] = useState('8');
    const [baseConfidence, setBaseConfidence] = useState(75);

    // Enhanced inputs
    const [stage, setStage] = useState<Stage>('Series A');
    const [targetRaise, setTargetRaise] = useState('20000000');
    const [raiseTimeline, setRaiseTimeline] = useState('6');

    // Risk factors (0-100)
    const [scopeCreep, setScopeCreep] = useState(35);
    const [techComplexity, setTechComplexity] = useState(30);
    const [talentRisk, setTalentRisk] = useState(25);
    const [regRisk, setRegRisk] = useState(15);

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
            const arrVal = parseFloat(arr) || 0;
            const multVal = parseFloat(multiple) || 0;

            // Calculate risk contributions
            const risks = [
                { name: 'Scope Creep', impact: scopeCreep * 0.15 },
                { name: 'Tech Complexity', impact: techComplexity * 0.20 },
                { name: 'Talent Risk', impact: talentRisk * 0.15 },
                { name: 'Regulatory Risk', impact: regRisk * 0.10 },
            ];

            const riskImpact = risks.reduce((sum, r) => sum + r.impact, 0);
            const biggestRisk = risks.sort((a, b) => b.impact - a.impact)[0];

            const adjustedConfidence = Math.max(0, baseConfidence - riskImpact);

            const perfectValue = arrVal * multVal;
            const riskedValue = perfectValue * (adjustedConfidence / 100);
            const wealthGap = perfectValue - riskedValue;

            // Calculate cost of biggest risk
            const biggestRiskCost = (biggestRisk.impact / riskImpact) * wealthGap;

            // Scenario modeling
            const scenarios = {
                best: perfectValue * 1.2,
                expected: riskedValue,
                worst: perfectValue * (Math.max(0, adjustedConfidence - 20) / 100),
            };

            setResults({
                perfectValue,
                riskedValue,
                wealthGap,
                adjustedConfidence,
                scenarios,
                biggestRiskFactor: biggestRisk.name,
                biggestRiskCost,
            });
            setLoading(false);
        }, 800);
    };

    // Persona-specific insights
    const getPersonaInsight = (results: Results): { headline: string; detail: string; action: string } => {
        const gap = results.wealthGap;
        const confidence = results.adjustedConfidence;
        const targetRaiseNum = parseFloat(targetRaise) || 0;

        switch (persona) {
            case 'Founder':
                const dilutionImpact = ((targetRaiseNum / results.riskedValue) - (targetRaiseNum / results.perfectValue)) * 100;
                if (confidence < 60) return {
                    headline: `⚠️ Your execution risk costs $${(gap / 1000000).toFixed(1)}M in valuation.`,
                    detail: `At ${confidence}% confidence, investors will apply a ${(100 - confidence).toFixed(0)}% discount to your ask. That's ${dilutionImpact.toFixed(1)}% extra dilution you don't need to give up.`,
                    action: 'Book a risk mitigation session before your next investor meeting.'
                };
                return {
                    headline: `Your valuation is defensible.`,
                    detail: `At ${confidence}% execution confidence, you can defend a ${formatMoney(results.riskedValue)} valuation.`,
                    action: 'Model different scenarios for your board deck.'
                };

            case 'CPO':
                return {
                    headline: `"${results.biggestRiskFactor}" is your valuation anchor.`,
                    detail: `This single risk factor accounts for ${formatMoney(results.biggestRiskCost)} of the valuation gap. Address this and your valuation improves immediately.`,
                    action: 'Create a risk mitigation plan for this specific area.'
                };

            case 'VP Eng':
                if (techComplexity > 40) return {
                    headline: `Technical complexity is costing $${(techComplexity * 0.20 * results.perfectValue / 100 / 1000000).toFixed(1)}M in valuation.`,
                    detail: `Your tech complexity score of ${techComplexity}% signals execution uncertainty to investors. They will discount your multiple.`,
                    action: 'Document your architecture decisions and de-risk the roadmap.'
                };
                return {
                    headline: `Technical execution is a strength.`,
                    detail: `Tech complexity at ${techComplexity}% is contributing positively to investor confidence.`,
                    action: 'Highlight your technical moat in investor materials.'
                };

            case 'CFO':
                const worstCase = results.scenarios.worst;
                const expectedCase = results.scenarios.expected;
                return {
                    headline: `Model range: ${formatMoney(worstCase)} to ${formatMoney(results.scenarios.best)}.`,
                    detail: `Expected valuation: ${formatMoney(expectedCase)}. Worst case (70% of expected): ${formatMoney(worstCase)}. Plan for the worst, aim for the best.`,
                    action: 'Use these scenarios for financial planning and runway modeling.'
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
                body: JSON.stringify({ email, persona, tool: 'EV-SE', riskAdjustedValue: results?.riskedValue }),
            });
        } catch (err) {
            console.error('Form submission error:', err);
        }
        setEmailSubmitted(true);
        setTimeout(() => {
            window.location.href = '/advisory';
        }, 2000);
    };

    const waterfallData = results ? [
        { name: 'Potential', value: results.perfectValue, color: '#22d3ee' },
        { name: 'Risk Adj.', value: results.riskedValue, color: '#8b5cf6' },
        { name: 'Wealth Gap', value: results.wealthGap, color: '#dc2626' }
    ] : [];

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">EV-SE Engine</span>
            </div>

            {!results ? (
                /* --- INPUT STATE --- */
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">EV-SE | Valuation Scenario Engine</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Model Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Valuation Gap.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                            Execution risk destroys enterprise value. Quantify what your roadmap uncertainty is costing you.
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
                                            ? 'bg-purple-500/10 border-purple-500 text-purple-400'
                                            : 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:border-white/30'
                                            }`}
                                    >
                                        <p.icon size={14} />
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Core Inputs */}
                        <div className="space-y-8">
                            <div>
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Valuation Inputs</div>
                                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                    <div>
                                        <label htmlFor="arr" className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2 block">ARR</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                            <input
                                                id="arr"
                                                type="number"
                                                value={arr}
                                                onChange={e => setArr(e.target.value)}
                                                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 pl-7 text-white font-mono focus:border-purple-500 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="multiple" className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2 block">Target Multiple</label>
                                        <div className="relative">
                                            <input
                                                id="multiple"
                                                type="number"
                                                value={multiple}
                                                onChange={e => setMultiple(e.target.value)}
                                                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-purple-500 focus:outline-none"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">x</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="stage" className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2 block">Stage</label>
                                        <select
                                            id="stage"
                                            value={stage}
                                            onChange={e => setStage(e.target.value as Stage)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-purple-500 focus:outline-none"
                                        >
                                            <option value="Seed">Seed</option>
                                            <option value="Series A">Series A</option>
                                            <option value="Series B">Series B</option>
                                            <option value="Series C+">Series C+</option>
                                            <option value="Growth">Growth</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="confidence" className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2 block">Base Confidence</label>
                                        <div className="relative">
                                            <input
                                                id="confidence"
                                                type="number"
                                                value={baseConfidence}
                                                onChange={e => setBaseConfidence(parseInt(e.target.value))}
                                                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-purple-500 focus:outline-none"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Funding Context */}
                            <div className="pt-6 border-t border-white/5">
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Funding Context</div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="target" className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2 block">Target Raise</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                                            <input
                                                id="target"
                                                type="number"
                                                value={targetRaise}
                                                onChange={e => setTargetRaise(e.target.value)}
                                                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 pl-7 text-white font-mono focus:border-purple-500 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="timeline" className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2 block">Raise Timeline</label>
                                        <select
                                            id="timeline"
                                            value={raiseTimeline}
                                            onChange={e => setRaiseTimeline(e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-purple-500 focus:outline-none"
                                        >
                                            <option value="3">3 months</option>
                                            <option value="6">6 months</option>
                                            <option value="12">12 months</option>
                                            <option value="18">18+ months</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Risk Sliders */}
                            <div className="pt-6 border-t border-white/5">
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Execution Risk Factors</div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <RiskSlider
                                        label="Scope Creep"
                                        value={scopeCreep}
                                        onChange={setScopeCreep}
                                        description="Probability of feature creep derailing timeline"
                                    />
                                    <RiskSlider
                                        label="Tech Complexity"
                                        value={techComplexity}
                                        onChange={setTechComplexity}
                                        description="Unknown unknowns in architecture/implementation"
                                    />
                                    <RiskSlider
                                        label="Talent Risk"
                                        value={talentRisk}
                                        onChange={setTalentRisk}
                                        description="Key person dependencies, hiring challenges"
                                    />
                                    <RiskSlider
                                        label="Regulatory Risk"
                                        value={regRisk}
                                        onChange={setRegRisk}
                                        description="Compliance, legal, market access challenges"
                                    />
                                </div>
                            </div>

                            <ShineBorder borderColor="rgba(168, 85, 247, 0.6)" duration={2}>
                                <button
                                    onClick={calculate}
                                    disabled={loading}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-purple-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                            CALCULATING VALUATION GAP...
                                        </>
                                    ) : (
                                        "MODEL MY VALUATION →"
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
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Wealth Destruction Gap</div>
                                    <div className="text-6xl sm:text-8xl font-bold text-red-500 tracking-tighter leading-none">
                                        $<NumberTicker value={results.wealthGap / 1000000} />M
                                    </div>
                                    <div className="mt-4">
                                        <span className={`px-3 py-1.5 rounded-full ${results.adjustedConfidence < 60 ? 'bg-red-900/30 text-red-400 border border-red-900/50' : 'bg-purple-900/30 text-purple-400 border border-purple-900/50'} text-xs font-bold uppercase tracking-widest`}>
                                            {results.adjustedConfidence.toFixed(0)}% Execution Confidence
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
                                        Your execution risk is destroying <span className="text-red-500 font-bold">${(results.wealthGap / 1000000).toFixed(1)}M</span> in potential enterprise value.
                                        At perfect execution, you'd be worth <span className="text-cyan-400 font-bold">${(results.perfectValue / 1000000).toFixed(0)}M</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* PERSONA-SPECIFIC INSIGHT */}
                    <ScrollReveal delay={50}>
                        <div className="capsule-container rounded-2xl p-6 mb-6 border-l-4 border-purple-500">
                            <div className="flex items-center gap-2 mb-3 text-zinc-500">
                                <Target size={14} />
                                <span className="text-[10px] font-mono uppercase tracking-widest">Insight for {persona}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{getPersonaInsight(results).headline}</h3>
                            <p className="text-zinc-400 leading-relaxed mb-3">{getPersonaInsight(results).detail}</p>
                            <p className="text-purple-400 font-semibold">{getPersonaInsight(results).action}</p>
                        </div>
                    </ScrollReveal>

                    {/* Metrics Grid */}
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Potential Value</div>
                                <div className="text-3xl sm:text-4xl font-bold text-cyan-400">${(results.perfectValue / 1000000).toFixed(0)}M</div>
                                <p className="text-xs text-cyan-400/60 mt-2">At perfect execution.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Risk-Adjusted Value</div>
                                <div className="text-3xl sm:text-4xl font-bold text-purple-400">${(results.riskedValue / 1000000).toFixed(0)}M</div>
                                <p className="text-xs text-purple-400/60 mt-2">What investors will pay.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="danger">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Biggest Risk Factor</div>
                                <div className="text-2xl sm:text-3xl font-bold text-orange-400">{results.biggestRiskFactor}</div>
                                <p className="text-xs text-orange-400/60 mt-2">Costing {formatMoney(results.biggestRiskCost)}.</p>
                            </GlowCard>
                        </div>
                    </ScrollReveal>

                    {/* Charts Grid */}
                    <ScrollReveal delay={150}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Valuation Waterfall</div>
                                <WaterfallChart data={waterfallData} />
                            </GlowCard>

                            {/* EXECUTIVE SUMMARY + EMAIL */}
                            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-6 border border-white/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className={`w-3 h-3 rounded-full animate-pulse ${results.adjustedConfidence < 60 ? 'bg-red-500' : 'bg-purple-400'}`} />
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Scenario Summary</span>
                                </div>

                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between items-center p-2 rounded bg-emerald-500/10">
                                        <span className="text-zinc-400">Best Case</span>
                                        <span className="text-emerald-400 font-mono font-bold">{formatMoney(results.scenarios.best)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 rounded bg-purple-500/10">
                                        <span className="text-zinc-400">Expected Case</span>
                                        <span className="text-purple-400 font-mono font-bold">{formatMoney(results.scenarios.expected)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 rounded bg-red-500/10">
                                        <span className="text-zinc-400">Worst Case</span>
                                        <span className="text-red-400 font-mono font-bold">{formatMoney(results.scenarios.worst)}</span>
                                    </div>
                                </div>

                                {!emailSubmitted ? (
                                    <form onSubmit={handleEmailSubmit} className="space-y-3">
                                        <div className="text-sm text-white font-semibold mb-2">Get investor-ready scenario deck:</div>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                required
                                                className="w-full pl-11 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none text-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className={`w-full px-6 py-3 font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 transition-all ${results.adjustedConfidence < 60
                                                ? 'bg-red-600 hover:bg-red-500 text-white'
                                                : 'bg-white hover:bg-purple-400 text-black'
                                                }`}
                                        >
                                            Get Scenario Deck <ArrowRight className="w-4 h-4" />
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

                    {/* Action Footer */}
                    <ScrollReveal delay={200}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/10">
                            <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← New Scenario</button>
                            <Link href="/advisory" className={`px-10 py-4 font-bold uppercase tracking-widest rounded-xl transition-all ${results.adjustedConfidence < 60
                                ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]'
                                : 'bg-purple-500 hover:bg-purple-400 text-white shadow-[0_0_30px_rgba(168,85,247,0.3)]'
                                }`}>
                                {results.adjustedConfidence < 60 ? '🚨 Risk Mitigation Session' : 'Defend My Valuation'} →
                            </Link>
                            <Link href="/system" className="text-zinc-500 text-sm hover:text-white">Explore All Tools →</Link>
                        </div>
                    </ScrollReveal>

                    {/* Social Proof */}
                    <ScrollReveal delay={250}>
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

            {/* AUTHORITY CONTENT: EV-SE */}
            <div className="max-w-4xl mx-auto mt-32 mb-24 space-y-16 px-6">
                <div className="prose prose-invert prose-lg max-w-none">
                    <h2 className="text-4xl font-bold text-white mb-8">The Myth of the &quot;10x Multiple&quot;</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Founders love to quote top-decile public market multiples. &quot;Datadog trades at 15x, so I trade at 15x.&quot; This is a delusion. Valuation is not just a function of Growth Rate; it is a function of <strong>Predictability</strong>.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        The <strong>EV-SE Engine™</strong> (Enterprise Value Scenario Engine) introduces the concept of the <strong>Certainty Premium</strong>. Investors pay for certainty. If your roadmap has a high probability of failure (due to technical risk, scope creep, or talent gaps), your effective valuation is discounted—often by 30-50%—before you even enter the boardroom.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-4">The &quot;Haircut&quot; Protocol</h3>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li className="flex gap-2"><span className="text-red-500">→</span> <strong>Scope Creep:</strong> -15% Valuation Impact</li>
                            <li className="flex gap-2"><span className="text-red-500">→</span> <strong>Key Person Risk:</strong> -20% Valuation Impact</li>
                            <li className="flex gap-2"><span className="text-red-500">→</span> <strong>Tech Debt:</strong> -10% Valuation Impact</li>
                        </ul>
                        <p className="mt-4 text-xs text-zinc-500">This tool forces you to confront these discounts upfront.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Defending the Downside</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            The most valuable thing a Product Leader can do is not &quot;ideation&quot;—it is <strong>Risk Adjustment</strong>. By using this calculator to model &quot;Worst Case,&quot; &quot;Base Case,&quot; and &quot;Blue Sky,&quot; you transform your roadmap from a lottery ticket into a bankable bond. This is how you defend your budget in a downturn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
