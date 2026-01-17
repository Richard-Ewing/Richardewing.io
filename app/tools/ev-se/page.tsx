'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { ShineBorder } from '../../components/magicui/shine-border';
import { NumberTicker } from '../../components/magicui/number-ticker';

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

// Slider component
const RiskSlider = ({ label, value, onChange, description }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    description: string;
}) => (
    <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono">
            <span className="text-zinc-400">{label}</span>
            <span className={value > 50 ? 'text-red-400' : value > 25 ? 'text-yellow-400' : 'text-emerald-400'}>
                {value}% Risk
            </span>
        </div>
        <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={e => onChange(parseInt(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
        <div className="text-[10px] text-zinc-600">{description}</div>
    </div>
);

interface Results {
    perfectValue: number;
    riskedValue: number;
    wealthGap: number;
    adjustedConfidence: number;
}

export default function EVSETool() {
    const [arr, setArr] = useState('10000000');
    const [multiple, setMultiple] = useState('6');
    const [baseConfidence, setBaseConfidence] = useState(80);

    // Risk factors (0-100)
    const [scopeCreep, setScopeCreep] = useState(30);
    const [techComplexity, setTechComplexity] = useState(25);
    const [talentRisk, setTalentRisk] = useState(20);
    const [regRisk, setRegRisk] = useState(10);

    const [results, setResults] = useState<Results | null>(null);
    const [loading, setLoading] = useState(false);

    const calculate = () => {
        setLoading(true);

        setTimeout(() => {
            const arrVal = parseFloat(arr) || 0;
            const multVal = parseFloat(multiple) || 0;

            const riskImpact =
                (scopeCreep * 0.15) +
                (techComplexity * 0.20) +
                (talentRisk * 0.15) +
                (regRisk * 0.10);

            const adjustedConfidence = Math.max(0, baseConfidence - riskImpact);

            const perfectValue = arrVal * multVal;
            const riskedValue = perfectValue * (adjustedConfidence / 100);
            const wealthGap = perfectValue - riskedValue;

            setResults({
                perfectValue,
                riskedValue,
                wealthGap,
                adjustedConfidence,
            });
            setLoading(false);
        }, 800);
    };

    const waterfallData = results ? [
        { name: 'Potential', value: results.perfectValue, color: '#22d3ee' },
        { name: 'Risk Adj.', value: results.riskedValue, color: '#8b5cf6' },
        { name: 'Lost Value', value: results.wealthGap, color: '#dc2626' }
    ] : [];

    return (
        <div className="max-w-4xl w-full relative z-10">
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
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">EV-SE | Valuation Engine</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Defend the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Valuation.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                            Quantify the "Certainty Premium" of your roadmap. See how execution risk destroys enterprise value.
                        </p>

                        {/* Financial Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div>
                                <label htmlFor="arr" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                    ARR ($)
                                </label>
                                <input
                                    id="arr"
                                    type="number"
                                    value={arr}
                                    onChange={e => setArr(e.target.value)}
                                    placeholder="10000000"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="multiple" className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 block">
                                    Multiple (x)
                                </label>
                                <input
                                    id="multiple"
                                    type="number"
                                    value={multiple}
                                    onChange={e => setMultiple(e.target.value)}
                                    placeholder="6"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Risk Sliders */}
                        <div className="space-y-6 pt-6 border-t border-white/10 mb-8">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-white">Execution Risk Factors</span>
                                <span className="text-xs text-zinc-500">Drag to adjust probability</span>
                            </div>

                            <RiskSlider
                                label="Scope Creep"
                                value={scopeCreep}
                                onChange={setScopeCreep}
                                description="Probability of feature bloat and timeline expansion"
                            />
                            <RiskSlider
                                label="Technical Complexity"
                                value={techComplexity}
                                onChange={setTechComplexity}
                                description="Unknown unknowns in architecture and integration"
                            />
                            <RiskSlider
                                label="Talent Gaps"
                                value={talentRisk}
                                onChange={setTalentRisk}
                                description="Missing skills or key person dependencies"
                            />
                            <RiskSlider
                                label="Regulatory Risk"
                                value={regRisk}
                                onChange={setRegRisk}
                                description="Compliance blockers or policy changes"
                            />
                        </div>

                        <ShineBorder borderColor="rgba(34, 211, 238, 0.6)" duration={2}>
                            <button
                                onClick={calculate}
                                disabled={loading}
                                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        RUNNING SCENARIOS...
                                    </>
                                ) : (
                                    "CALCULATE WEALTH DESTRUCTION →"
                                )}
                            </button>
                        </ShineBorder>
                    </div>
                </ScrollReveal>
            ) : (
                /* --- RESULTS STATE --- */
                <>
                    <ScrollReveal>
                        {/* Wealth Gap Header */}
                        <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Wealth Destruction Gap</div>
                                    <div className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                                        -$<NumberTicker value={Math.round(results.wealthGap / 1000000)} suffix="M" />
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-zinc-400 text-sm">
                                        <span className="text-red-500">⚠</span>
                                        <span>Execution risk is discounting the company by <strong className="text-white">{(100 - results.adjustedConfidence).toFixed(0)}%</strong></span>
                                    </div>
                                </div>

                                {/* Comparison Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 sm:p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                                        <div className="text-[10px] text-cyan-400 mb-1 font-mono uppercase">The Dream</div>
                                        <div className="text-xl sm:text-2xl font-bold text-white">
                                            $<NumberTicker value={Math.round(results.perfectValue / 1000000)} suffix="M" />
                                        </div>
                                        <div className="text-[10px] text-zinc-500 mt-1">Perfect Execution</div>
                                    </div>
                                    <div className="p-4 sm:p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
                                        <div className="text-[10px] text-purple-400 mb-1 font-mono uppercase">The Reality</div>
                                        <div className="text-xl sm:text-2xl font-bold text-white">
                                            $<NumberTicker value={Math.round(results.riskedValue / 1000000)} suffix="M" />
                                        </div>
                                        <div className="text-[10px] text-zinc-500 mt-1">Risk Adjusted</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Metrics Grid */}
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <GlowCard className="p-6 col-span-2" glowColor="cyan">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Valuation Waterfall</div>
                                <WaterfallChart data={waterfallData} />
                            </GlowCard>

                            <GlowCard className="p-6 flex flex-col justify-center items-center" glowColor="danger">
                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Confidence Score</div>
                                <div className={`text-5xl sm:text-6xl font-bold ${results.adjustedConfidence < 50 ? 'text-red-500' : 'text-cyan-400'}`}>
                                    {results.adjustedConfidence.toFixed(0)}%
                                </div>
                                <div className="text-xs text-zinc-500 mt-2 text-center">Probability of hitting targets</div>
                            </GlowCard>
                        </div>
                    </ScrollReveal>

                    {/* Theory Section */}
                    <ScrollReveal delay={200}>
                        <div className="capsule-container rounded-2xl p-6 sm:p-8 border-l-4 border-red-600 mb-6">
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">The Mathematics of Valuation Compression</h2>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                Valuation is not a feeling; it's a function of <span className="text-cyan-400 font-bold">Growth Rate × Predictability</span>.
                                A roadmap with high execution risk forces investors to apply a "Discount Rate" to your future cash flows.
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                                When a CPO says "We might miss Q3", the Board hears <span className="text-red-500 font-bold">"Write down this asset by 25%."</span>
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Boardroom Defense */}
                    <ScrollReveal delay={300}>
                        <GlowCard className="p-6 sm:p-8 mb-6" glowColor="cyan">
                            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-4">Boardroom Defense Protocol</div>
                            <h3 className="text-white font-bold text-lg mb-4">Scenario: Defending Headcount</h3>
                            <div className="bg-black/50 p-6 rounded-lg">
                                <div className="text-emerald-400 font-bold mb-3 text-sm">✓ RIGHT APPROACH:</div>
                                <p className="text-zinc-300 text-sm mb-4">
                                    "Adding two Principal Engineers increases our execution confidence from 60% to 85%."
                                </p>
                                <div className="grid grid-cols-3 gap-4 p-4 bg-emerald-400/10 border border-emerald-400/30 rounded-lg">
                                    <div>
                                        <div className="text-emerald-400 font-bold text-lg">$500k</div>
                                        <div className="text-[10px] text-zinc-500">Cost</div>
                                    </div>
                                    <div>
                                        <div className="text-emerald-400 font-bold text-lg">$4.5M</div>
                                        <div className="text-[10px] text-zinc-500">Protected Value</div>
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">9x ROI</div>
                                        <div className="text-[10px] text-zinc-500">Return</div>
                                    </div>
                                </div>
                            </div>
                        </GlowCard>
                    </ScrollReveal>

                    {/* CTA */}
                    <ScrollReveal delay={400}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 border-t border-white/10">
                            <button
                                onClick={() => setResults(null)}
                                className="px-6 py-3 text-zinc-500 hover:text-white text-sm font-mono uppercase tracking-widest transition"
                            >
                                ← New Scenario
                            </button>
                            <ShineBorder borderColor="rgba(34, 211, 238, 0.6)" duration={2}>
                                <Link
                                    href="/advisory"
                                    className="block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest transition-colors text-center"
                                >
                                    Book Advisory Call →
                                </Link>
                            </ShineBorder>
                        </div>
                    </ScrollReveal>
                </>
            )}
        </div>
    );
}
