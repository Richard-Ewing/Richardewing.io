'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import { ShineBorder } from '../../components/magicui/shine-border';
import { ArrowRight, AlertTriangle, CheckCircle2, Target, Brain, TrendingUp, AlertOctagon } from 'lucide-react';

type Role = 'engineering' | 'pm';

interface Scores {
    constraint_recognition: number;
    tradeoff_articulation: number;
    economic_awareness: number;
    failure_anticipation: number;
}

interface Observations {
    constraint_recognition: string;
    tradeoff_articulation: string;
    economic_awareness: string;
    failure_anticipation: string;
}

interface Outcome {
    total: number;
    verdict: string;
    rationale: string;
}

const DIMENSIONS = [
    {
        id: 'constraint_recognition',
        label: 'Constraint Recognition',
        icon: Target,
        desc: 'Ability to identify cost drivers and system limits.'
    },
    {
        id: 'tradeoff_articulation',
        label: 'Tradeoff Articulation',
        icon: Brain,
        desc: 'Explicitly prioritizing stability/cost over features.'
    },
    {
        id: 'economic_awareness',
        label: 'Economic Awareness',
        icon: TrendingUp,
        desc: 'Understanding of capital efficiency and leverage.'
    },
    {
        id: 'failure_anticipation',
        label: 'Failure Anticipation',
        icon: AlertOctagon,
        desc: 'Spotting risks before they become incidents.'
    }
] as const;

export default function ScoringEngine() {
    const [role, setRole] = useState<Role>('engineering');
    const [scores, setScores] = useState<Scores>({
        constraint_recognition: 0,
        tradeoff_articulation: 0,
        economic_awareness: 0,
        failure_anticipation: 0
    });
    const [observations, setObservations] = useState<Observations>({
        constraint_recognition: '',
        tradeoff_articulation: '',
        economic_awareness: '',
        failure_anticipation: ''
    });

    const [outcome, setOutcome] = useState<Outcome | null>(null);
    const [memo, setMemo] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleScoreChange = (id: keyof Scores, val: number) => {
        setScores(prev => ({ ...prev, [id]: val }));
    };

    const handleObservationChange = (id: keyof Observations, val: string) => {
        setObservations(prev => ({ ...prev, [id]: val }));
    };

    const calculateOutcome = () => {
        const total = Object.values(scores).reduce((a, b) => a + b, 0);
        let verdict = '';
        let rationale = '';

        if (total <= 4) {
            verdict = "Strong No Hire";
            rationale = "Candidate avoids decisions and optimizes for narrative over judgment.";
        } else if (total <= 7) {
            verdict = "No Hire";
            rationale = "Candidate identifies issues but avoids ownership and hard constraints.";
        } else if (total <= 10) {
            verdict = "Hire";
            rationale = "Demonstrates sound judgment with manageable gaps in economic framing.";
        } else {
            verdict = "Strong Hire";
            rationale = "Candidate consistently prioritizes constraints, trade-offs, and capital efficiency.";
        }

        setOutcome({ total, verdict, rationale });
        setMemo(null); // Reset memo on new calculation
    };

    const generateMemo = async () => {
        if (!outcome) return;
        setLoading(true);

        const obsList = Object.entries(observations)
            .filter(([_, val]) => val.trim().length > 0)
            .map(([key, val]) => `${key.replace('_', ' ')} scored ${scores[key as keyof Scores]}: ${val}`);

        try {
            const res = await fetch('/api/scoring', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    role,
                    scores,
                    observations: obsList,
                    outcome: outcome.verdict,
                    rationale: outcome.rationale
                })
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setMemo(data.memo);

        } catch (error: any) {
            console.error('Memo generation failed:', error);
            alert(`Generation failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">Scoring Engine</span>
            </div>

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Human Capital Ledger</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                        The Scoring <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Engine.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                        Standardized evaluation framework for Engineering and Product talent. Quantify judgment, not just coding ability.
                    </p>

                    {/* Role Selector */}
                    <div className="flex gap-4 mb-8 border-b border-white/10 pb-8">
                        {['engineering', 'pm'].map((r) => (
                            <button
                                key={r}
                                onClick={() => setRole(r as Role)}
                                className={`px-4 py-2 rounded-lg border uppercase font-mono text-xs tracking-widest transition-all ${role === r
                                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                                        : 'bg-zinc-900/50 border-white/10 text-zinc-500 hover:border-white/30'
                                    }`}
                            >
                                {r === 'pm' ? 'Product Manager' : 'Engineer'}
                            </button>
                        ))}
                    </div>

                    {/* Scoring Grid */}
                    <div className="space-y-8">
                        {DIMENSIONS.map((dim) => (
                            <div key={dim.id} className="bg-black/20 rounded-xl p-4 sm:p-6 border border-white/5">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="p-2 bg-zinc-900 rounded-lg text-zinc-400">
                                        <dim.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{dim.label}</h3>
                                        <p className="text-sm text-zinc-500">{dim.desc}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                                    {/* Component: Score Selector */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-1 bg-black/50 p-1 rounded-lg border border-white/10">
                                            {[0, 1, 2, 3].map(val => (
                                                <button
                                                    key={val}
                                                    onClick={() => handleScoreChange(dim.id as keyof Scores, val)}
                                                    className={`flex-1 py-2 text-sm font-mono font-bold rounded-md transition-all ${scores[dim.id as keyof Scores] === val
                                                            ? 'bg-emerald-600 text-white'
                                                            : 'hover:bg-white/10 text-zinc-500'
                                                        }`}
                                                >
                                                    {val}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex justify-between text-[10px] text-zinc-600 font-mono uppercase px-1">
                                            <span>Abysmal</span>
                                            <span>Elite</span>
                                        </div>
                                    </div>

                                    {/* Observation Input */}
                                    <textarea
                                        value={observations[dim.id as keyof Observations]}
                                        onChange={(e) => handleObservationChange(dim.id as keyof Observations, e.target.value)}
                                        placeholder={`Evidence for ${dim.label.toLowerCase()} score...`}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm text-zinc-300 focus:border-emerald-500 focus:outline-none transition-all placeholder:text-zinc-700 h-20 resize-none"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <ShineBorder borderColor="rgba(16, 185, 129, 0.6)" duration={2}>
                            <button
                                onClick={calculateOutcome}
                                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center gap-3"
                            >
                                Calculate Outcome <ArrowRight size={16} />
                            </button>
                        </ShineBorder>
                    </div>
                </div>
            </ScrollReveal>

            {/* Application Feedback - Only show if outcome exists */}
            {outcome && (
                <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                        {/* Score Card */}
                        <GlowCard className="p-8 flex flex-col items-center justify-center text-center h-full" glowColor={outcome.total > 7 ? "emerald" : "danger"}>
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Total Score</div>
                            <div className={`text-7xl font-bold tracking-tighter mb-4 ${outcome.total > 7 ? 'text-emerald-400' : 'text-red-500'}`}>
                                {outcome.total}<span className="text-2xl text-zinc-600">/12</span>
                            </div>
                            <div className={`px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-widest ${outcome.total > 7
                                    ? 'bg-emerald-900/30 border-emerald-500/50 text-emerald-400'
                                    : 'bg-red-900/30 border-red-500/50 text-red-400'
                                }`}>
                                {outcome.verdict}
                            </div>
                        </GlowCard>

                        {/* Rationale & Memo Action */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Core Rationale</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {outcome.rationale}
                                </p>
                            </div>

                            {!memo ? (
                                <button
                                    onClick={generateMemo}
                                    disabled={loading}
                                    className="w-full py-4 rounded-xl border border-white/10 bg-black/50 text-zinc-400 hover:text-white hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold disabled:opacity-50"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                                            Writing Defense Memo...
                                        </>
                                    ) : (
                                        <>
                                            <Brain size={14} /> Generate Defense Memo
                                        </>
                                    )}
                                </button>
                            ) : (
                                <div className="bg-zinc-900/50 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                                    <div className="flex items-center gap-2 mb-4">
                                        <Brain size={16} className="text-emerald-500" />
                                        <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">AI Generated Memo</span>
                                    </div>
                                    <div className="prose prose-invert prose-sm max-w-none">
                                        <p className="text-zinc-300 leading-loose italic">
                                            &quot;{memo}&quot;
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </ScrollReveal>
            )}
        </div>
    );
}
