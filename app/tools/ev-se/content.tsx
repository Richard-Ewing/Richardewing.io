'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import NumberTicker from '../../components/magicui/number-ticker';
import { BorderBeam } from '../../components/magicui/border-beam';
import { Target, Users, Cpu, DollarSign, Mail, ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';
import { NewsletterForm } from '../../components/newsletter-form';
import ToolGate from '../../components/tool-gate';
import ToolCelebration from '../../components/ToolCelebration';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { QPEPRemediation } from '../../components/QPEPRemediation';
import { VaultUpsell } from '../../components/VaultUpsell';
import styles from './styles.module.css';

// Simple Bar Chart component (no external dependency)
const WaterfallChart = ({ data }: { data: { name: string; value: number; color: string }[] }) => {
    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <div className="space-y-4 mt-4">
            {data.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                    <div className="w-24 text-xs font-mono text-zinc-500 text-right">{item.name}</div>
                    <div className="flex-1 h-10 bg-zinc-900 rounded-lg overflow-hidden relative">
                        {/* eslint-disable-next-line react/forbid-dom-props */}
                        <div
                            className={`h-full rounded-lg transition-all duration-1000 ease-out flex items-center justify-end pr-4 ${styles.waterfallBar}`}
                            style={ {
                                '--bar-width': `${(item.value / maxValue) * 100}%`,
                                '--bar-color': item.color,
                            } as React.CSSProperties }
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
                {/* eslint-disable-next-line react/forbid-dom-props */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={e => onChange(parseInt(e.target.value))}
                    aria-label={label}
                    title={label}
                    className={`relative w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer z-10 ${styles.riskSlider}`}
                    style={ {
                        '--slider-bg': `linear-gradient(to right, #22c55e ${value}%, transparent ${value}%)`,
                    } as React.CSSProperties }
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
    qpep_roadmap?: Array<{
        month: number;
        focus: string;
        action_items: string[];
    }>;
}

export default function EVSETool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');
    const [step, setStep] = useState(1);
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
    const [showGate, setShowGate] = useState(false);


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

            const qpep_roadmap = [];
            if (biggestRisk.name === 'Scope Creep') {
                qpep_roadmap.push({ month: 1, focus: "Scope Quarantine", action_items: ["Freeze all non-critical feature development", "Implement strict PR boundary testing", "Audit actively running feature flags"] });
                qpep_roadmap.push({ month: 2, focus: "Product Pruning", action_items: ["Deprecate underutilized endpoints", "Consolidate redundant macro-features", "Offboard low-ROI technical debt"] });
                qpep_roadmap.push({ month: 3, focus: "Value Expansion", action_items: ["Reallocate engineering to core differentiator", "Launch structured Beta program", "Stabilize release velocity"] });
            } else if (biggestRisk.name === 'Tech Complexity') {
                qpep_roadmap.push({ month: 1, focus: "Architecture Simplification", action_items: ["Audit third-party dependencies", "Abstract legacy microservices", "Decommission redundant databases"] });
                qpep_roadmap.push({ month: 2, focus: "Pipeline Hardening", action_items: ["Implement generic CI/CD pipelines", "Standardize container orchestration", "Enhance telemetry visibility"] });
                qpep_roadmap.push({ month: 3, focus: "Scale Preparedness", action_items: ["Stress test data ingestion limit", "Establish automated failover", "Document system bottlenecks"] });
            } else if (biggestRisk.name === 'Talent Risk') {
                qpep_roadmap.push({ month: 1, focus: "Knowledge Distillation", action_items: ["Mandatory pair-programming on critical path", "Extract IP from 'hero' engineers", "Document deployment runbooks"] });
                qpep_roadmap.push({ month: 2, focus: "Resilience Training", action_items: ["Cross-train backend engineers on infra", "Simulate key-person departure", "Standardize onboarding flow"] });
                qpep_roadmap.push({ month: 3, focus: "Capacity Expansion", action_items: ["Hire strategic external contractors", "Implement automated code reviews", "Establish clear succession plans"] });
            } else {
                qpep_roadmap.push({ month: 1, focus: "Compliance Audit", action_items: ["Map all PII data flows", "Review third-party sub-processors", "Establish clear retention policies"] });
                qpep_roadmap.push({ month: 2, focus: "Security Hardening", action_items: ["Implement localized data residency", "Conduct external penetration testing", "Deploy automated compliance checking in CI"] });
                qpep_roadmap.push({ month: 3, focus: "Enterprise Readiness", action_items: ["Secure SOC2 Type II certification", "Draft transparent SLAs", "De-risk future regulatory shifts"] });
            }

            // Scenario modeling
            const scenarios = {
                best: perfectValue * 1.2,
                expected: riskedValue,
                worst: perfectValue * (Math.max(0, adjustedConfidence - 20) / 100),
            };

            const payload = {
                perfectValue,
                riskedValue,
                wealthGap,
                adjustedConfidence,
                scenarios,
                biggestRiskFactor: biggestRisk.name,
                biggestRiskCost,
                qpep_roadmap,
            };

            setResults(payload);
            setLoading(false);

            // Silently persist to Supabase for longitudinal tracking
            fetch('/api/tools/runs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tool_id: 'EV-SE',
                    run_data: { 
                        arr, multiple, baseConfidence, stage, targetRaise, 
                        raiseTimeline, scopeCreep, techComplexity, talentRisk, regRisk 
                    },
                    output_metrics: payload
                })
            }).catch(console.error);
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



    const waterfallData = results ? [
        { name: 'Potential', value: results.perfectValue, color: '#22d3ee' },
        { name: 'Risk Adj.', value: results.riskedValue, color: '#8b5cf6' },
        { name: 'Wealth Gap', value: results.wealthGap, color: '#dc2626' }
    ] : [];

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            <ToolCelebration show={!!results} toolName="EV-SE" />
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

                        <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
                                {/* eslint-disable-next-line react/forbid-dom-props */}
                                <div className={`h-full bg-purple-500 transition-all duration-500 ${styles.progressHeader}`} style={ { '--header-progress': `${(step / 3) * 100}%` } as React.CSSProperties } />
                            </div>

                        {/* Core Inputs - STEP 1 */}
                        {step === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
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
                            <button onClick={() => setStep(2)} className="w-full mt-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2">Next: Funding Context <ArrowRight size={16} /></button>
                        </motion.div>
                        )}

                        {/* Funding Context - STEP 2 */}
                        {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                            <div>
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
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <button onClick={() => setStep(1)} className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-all">← Back</button>
                                <button onClick={() => setStep(3)} className="flex-1 py-4 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2">Next: Execution Risks <ArrowRight size={16} /></button>
                            </div>
                        </motion.div>
                        )}

                        {/* Risk Sliders - STEP 3 */}
                        {step === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 mt-2">
                            <div>
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

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <button onClick={() => setStep(2)} className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-all">← Back</button>
                            <div className="flex-1">
                            <ShineBorder borderColor="rgba(168, 85, 247, 0.6)" duration={2}>
                                <button
                                    onClick={() => setShowGate(true)}
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

                            {showGate && (
                                <div className="mt-6">
                                    <ToolGate toolName="the Enterprise Value Scenario Engine" onUnlock={() => { setShowGate(false); calculate(); }}>
                                        <></>
                                    </ToolGate>
                                </div>
                            )}
                        </motion.div>
                        )}
                        </div>
                    </div>
                </ScrollReveal>
            ) : (
                /* --- RESULTS STATE --- */
                <>
                    {/* ACTION HEADER & PDF EXPORT */}
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-900/40 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-1">Valuation Waterfall Generated</h2>
                            <p className="text-sm text-zinc-400">Export this assessment to a verified Executive PDF.</p>
                        </div>
                        <ExportToPDFButton targetId="ev-se-pdf-export-zone" fileName={`EV-SE_Valuation_${persona}.pdf`} />
                    </div>

                    {/* -------- PDF CAPTURE ZONE START -------- */}
                    <div id="ev-se-pdf-export-zone" className="space-y-6 bg-[#050505] p-2 sm:p-4 rounded-3xl">

                    <ScrollReveal>
                        {/* Score Header */}
                        <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-white/10">
                            <BorderBeam size={300} duration={12} delay={9} borderWidth={1.5} colorFrom="#FF4444" colorTo="#A855F7" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                <div>
                                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Wealth Destruction Gap</div>
                                    <div className="text-6xl sm:text-8xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
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

                                <div className="space-y-3">
                                    <div className="text-sm text-white font-semibold mb-2">Get investor-ready scenario deck:</div>
                                    <NewsletterForm
                                        buttonText="Get Scenario Deck"
                                        extraData={{
                                            tool: 'EV-SE',
                                            persona,
                                            riskAdjustedValue: results.riskedValue
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* EXECUTION ROADMAP - GANTT CHART */}
                    {results.qpep_roadmap && results.qpep_roadmap.length > 0 && (
                        <ScrollReveal delay={180}>
                            <h3 className="text-xl font-bold text-white mb-4 mt-8 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                Value Remediation Plan
                            </h3>
                            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
                                <h4 className="font-mono text-xs text-purple-400 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">90-Day Execution Gantt Chart: {results.biggestRiskFactor}</h4>
                                
                                <div className="space-y-6 md:space-y-8">
                                    {results.qpep_roadmap.map((plan, i) => (
                                        <div key={i} className="relative md:pl-6 pl-4">
                                            {/* Timeline dot */}
                                            <div className="absolute left-[-0.3rem] md:left-[-1.3rem] top-2 w-3 h-3 rounded-full border-2 border-[#0f1115] bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10"></div>
                                            
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                                <div className="bg-white/5 px-3 py-1 rounded-md text-[10px] uppercase font-mono tracking-widest text-zinc-400 shrink-0 inline-block w-fit">
                                                    Month {plan.month}
                                                </div>
                                                <div className="font-bold text-white text-base leading-tight md:leading-normal">{plan.focus}</div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {plan.action_items.map((action: string, j: number) => {
                                                    const widths = ["w-full", "w-[90%]", "w-[95%]"];
                                                    const width = widths[j % widths.length];
                                                    const colorClasses = [
                                                        "from-purple-500/20 to-pink-500/20 border-purple-500/50 text-purple-200",
                                                        "from-pink-500/20 to-rose-500/20 border-pink-500/50 text-pink-200",
                                                        "from-rose-500/20 to-red-500/20 border-rose-500/50 text-red-200"
                                                    ];
                                                    const color = colorClasses[i % colorClasses.length];
                                                    
                                                    return (
                                                        <div key={j} className={`${width} bg-gradient-to-r ${color} border-l-2 p-3 rounded-r-md min-h-[70px] flex items-center transition-all hover:brightness-125 hover:translate-x-1 duration-300 shadow-sm`}>
                                                            <span className="text-xs leading-relaxed">{action}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                    {/* Vertical Timeline line */}
                                    <div className="absolute left-[0.15rem] md:left-[-0.95rem] top-4 bottom-4 w-px bg-white/10 z-0 hidden md:block"></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* Action Footer */}
                    <ScrollReveal delay={200}>
                        <div className="pt-8">
                            <VaultUpsell 
                                urgencyLevel={results.adjustedConfidence < 60 ? 'critical' : 'growth'}
                                recommendedTracks={[
                                    { id: 'TRACK-05', title: 'Technical Debt & Valuation Impact', desc: 'Identify how structural technical debt directly haircuts M&A valuation multiples.' },
                                    { id: 'TRACK-09', title: 'Scope Creep & Risk Profiling', desc: 'Build governance models that lock roadmaps and eliminate key person risk.' }
                                ]} 
                            />
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
                                <button onClick={() => setResults(null)} className="text-zinc-500 text-sm hover:text-white underline underline-offset-4">← New Scenario</button>
                            </div>
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

                    </div>

                    {/* Q-PEP Remediation Block — captured into PDF */}
                    <QPEPRemediation toolId="EV-SE" metrics={results} />

                    {/* -------- PDF CAPTURE ZONE END -------- */}
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
