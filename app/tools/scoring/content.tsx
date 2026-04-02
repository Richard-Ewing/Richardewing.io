'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import ToolCelebration from '../../components/ToolCelebration';
import ToolGate from '../../components/tool-gate';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import { ArrowRight, Search, Target, Brain, TrendingUp, Cpu, BarChart3, Lock } from 'lucide-react';
import { VaultUpsell } from '../../components/VaultUpsell';

type Role = 'engineering' | 'pm';

interface Scores {
    verification_depth: number;
    architectural_reasoning: number;
    economic_awareness: number;
    ai_interrogation: number;
}

interface Observations {
    verification_depth: string;
    architectural_reasoning: string;
    economic_awareness: string;
    ai_interrogation: string;
}

interface Outcome {
    total: number;
    verdict: string;
    rationale: string;
}

const DIMENSIONS = [
    {
        id: 'verification_depth',
        label: 'Verification Depth',
        icon: Search,
        desc: 'Did they verify assumptions or just trust the input?',
        color: '#22d3ee' // Cyan
    },
    {
        id: 'architectural_reasoning',
        label: 'Architectural Reasoning',
        icon: Brain,
        desc: 'Can they structure a system under constraints?',
        color: '#8b5cf6' // Violet
    },
    {
        id: 'economic_awareness',
        label: 'Economic Awareness',
        icon: TrendingUp,
        desc: 'Do they understand cost/value trade-offs?',
        color: '#ef4444' // Red
    },
    {
        id: 'ai_interrogation',
        label: 'AI Interrogation',
        icon: Cpu,
        desc: 'Can they force the AI to produce high-quality code?',
        color: '#eab308' // Gold
    }
] as const;

// Simple Radar Chart Component
const RadarChart = ({ scores }: { scores: Scores }) => {
    // Normalize scores (0-3) to radius (10-90)
    const scale = (val: number) => 10 + (val / 3) * 80;

    const points = [
        { angle: 0, val: scores.verification_depth, label: 'Verification' },
        { angle: 90, val: scores.architectural_reasoning, label: 'Architecture' },
        { angle: 180, val: scores.economic_awareness, label: 'Economics' },
        { angle: 270, val: scores.ai_interrogation, label: 'AI' },
    ];

    const polyPoints = points.map(p => {
        const rad = (p.angle - 90) * (Math.PI / 180);
        const r = scale(p.val);
        return `${100 + r * Math.cos(rad)},${100 + r * Math.sin(rad)}`;
    }).join(' ');

    return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Grid */}
            {[20, 40, 60, 80].map(r => (
                <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#333" strokeOpacity="0.5" />
            ))}
            <line x1="100" y1="20" x2="100" y2="180" stroke="#333" strokeOpacity="0.5" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="#333" strokeOpacity="0.5" />

            {/* Data Polygon */}
            <polygon points={polyPoints} fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />

            {/* Points */}
            {points.map((p, i) => {
                const rad = (p.angle - 90) * (Math.PI / 180);
                const r = scale(p.val);
                const x = 100 + r * Math.cos(rad);
                const y = 100 + r * Math.sin(rad);
                return <circle key={i} cx={x} cy={y} r="4" fill="#10b981" />
            })}

            {/* Labels */}
            <text x="100" y="15" textAnchor="middle" fill="#9ca3af" fontSize="10" className="uppercase font-mono">Verification</text>
            <text x="190" y="105" textAnchor="middle" fill="#9ca3af" fontSize="10" className="uppercase font-mono">Architecture</text>
            <text x="100" y="195" textAnchor="middle" fill="#9ca3af" fontSize="10" className="uppercase font-mono">Economics</text>
            <text x="10" y="105" textAnchor="middle" fill="#9ca3af" fontSize="10" className="uppercase font-mono">AI</text>
        </svg>
    );
};

export default function AuditInterview() {
    const [role, setRole] = useState<Role>('engineering');
    const [scores, setScores] = useState<Scores>({
        verification_depth: 0,
        architectural_reasoning: 0,
        economic_awareness: 0,
        ai_interrogation: 0
    });
    const [observations, setObservations] = useState<Observations>({
        verification_depth: '',
        architectural_reasoning: '',
        economic_awareness: '',
        ai_interrogation: ''
    });

    const [showGate, setShowGate] = useState(false);
    const [outcome, setOutcome] = useState<Outcome | null>(null);
    const [memo, setMemo] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleScoreChange = (id: keyof Scores, val: number) => {
        setScores(prev => ({ ...prev, [id]: val }));
    };

    const handleObservationChange = (id: keyof Observations, val: string) => {
        setObservations(prev => ({ ...prev, [id]: val }));
    };

    const calculateVerdict = () => {
        setShowGate(true);
    };

    const processResults = () => {
        const total = Object.values(scores).reduce((a, b) => a + b, 0);
        let verdict = '';
        let rationale = '';

        if (total <= 4) {
            verdict = "Strong No Hire";
            rationale = "Candidate optimizes for narrative/syntax over judgment. High capital risk.";
        } else if (total <= 7) {
            verdict = "No Hire";
            rationale = "Identifies issues but avoids ownership and hard trade-offs.";
        } else if (total <= 10) {
            verdict = "Hire";
            rationale = "Demonstrates sound judgment. Can act as a capital steward.";
        } else {
            verdict = "Strong Hire";
            rationale = "Exceptional judgment. Prioritizes constraints and economic efficiency.";
        }

        setOutcome({ total, verdict, rationale });
        setMemo(null); // Reset memo on new calculation
        // Scroll to results
        setTimeout(() => {
            document.getElementById('scoring-results-artifact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const generateMemo = async () => {
        if (!outcome) return;
        setLoading(true);

        const obsList = Object.entries(observations)
            .filter(([_, val]) => val.trim().length > 0)
            .map(([key, val]) => `[${key.toUpperCase()}] ${val}`);

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

    const SCORE_LABELS = ['Critical Fail', 'Weak', 'Competent', 'Senior/Strong'];

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            <ToolCelebration show={!!outcome} toolName="AUDIT INTERVIEW" />
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/system" className="hover:text-white transition">Intelligence</Link>
                <span>/</span>
                <span className="text-white font-bold">Audit Interview</span>
            </div>

            {!outcome ? (
                /* --- INPUT STATE --- */
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Product Economist | Audit Suite</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
                            Audit <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Interview.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                            The "Product Economist" framework for technical auditing. Quantify judgment, capital risk, and leverage.
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
                                            <div className="text-center text-[10px] text-zinc-400 font-mono uppercase mt-1">
                                                {SCORE_LABELS[scores[dim.id as keyof Scores]]}
                                            </div>
                                        </div>

                                        {/* Observation Input */}
                                        <textarea
                                            value={observations[dim.id as keyof Observations]}
                                            onChange={(e) => handleObservationChange(dim.id as keyof Observations, e.target.value)}
                                            placeholder={`Notes on ${dim.label.toLowerCase()}...`}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm text-zinc-300 focus:border-emerald-500 focus:outline-none transition-all placeholder:text-zinc-700 h-20 resize-none"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <ShineBorder borderColor="rgba(16, 185, 129, 0.6)" duration={2}>
                                <button
                                    onClick={calculateVerdict}
                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all flex items-center justify-center gap-3"
                                >
                                    Calculate Verdict <ArrowRight size={16} />
                                </button>
                            </ShineBorder>
                        </div>
                        
                        {showGate && (
                            <div className="mt-6">
                                <ToolGate toolName="the Audit Interview Framework" onUnlock={() => { setShowGate(false); processResults(); }}>
                                    <></>
                                </ToolGate>
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            ) : (
                /* --- DASHBOARD STATE --- */
                <div id="scoring-results-artifact" className="bg-[#050505] p-2 sm:p-6 rounded-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-zinc-900/40 border border-emerald-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">Interview Dashboard</h2>
                            <p className="text-sm text-zinc-400">Session Complete • Protocol {role.toUpperCase()}-092</p>
                        </div>
                        <div className="mt-4 sm:mt-0 flex gap-4">
                            <button onClick={() => setOutcome(null)} className="px-4 py-2 border border-white/10 rounded-lg text-xs font-mono uppercase hover:bg-white/5 transition flex items-center gap-2">
                                <Search size={14} /> New Audit
                            </button>
                            <ExportToPDFButton targetId="scoring-pdf-export-zone" fileName={`Audit_Interview_${role}.pdf`} />
                        </div>
                    </div>

                    <div id="scoring-pdf-export-zone">
                        <ScrollReveal>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                            {/* Left Col: Verdict Card */}
                            <GlowCard className="p-8 flex flex-col items-center justify-center text-center h-full" glowColor={outcome.total > 7 ? "emerald" : "danger"}>
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Capital Allocation Verdict</div>
                                <div className={`text-6xl sm:text-7xl font-bold tracking-tighter mb-4 ${outcome.total > 7 ? 'text-emerald-400' : 'text-red-500'}`}>
                                    {outcome.verdict}
                                </div>
                                <div className="flex items-center gap-3 text-sm font-mono border-t border-white/10 pt-4 mt-4 w-full justify-center">
                                    <span className="text-zinc-400">Total Score:</span>
                                    <span className="text-white font-bold">{outcome.total}/12</span>
                                </div>
                            </GlowCard>

                            {/* Middle Col: Radar Chart */}
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
                                <span className="absolute top-4 left-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Attribute Geometry</span>
                                <div className="w-64 h-64">
                                    <RadarChart scores={scores} />
                                </div>
                            </div>

                            {/* Right Col: Breakdown List */}
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 space-y-4">
                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-4">Dimension Audit</span>
                                {DIMENSIONS.map(dim => (
                                    <div key={dim.id} className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <dim.icon size={14} className="text-zinc-400" />
                                            <span className="text-sm text-zinc-300">{dim.label}</span>
                                        </div>
                                        <div className={`text-sm font-mono font-bold ${scores[dim.id as keyof Scores] === 3 ? 'text-emerald-400' :
                                            scores[dim.id as keyof Scores] === 0 ? 'text-red-500' : 'text-white'
                                            }`}>
                                            {scores[dim.id as keyof Scores]}/3
                                        </div>
                                    </div>
                                ))}
                                <div className="border-t border-white/10 pt-4 mt-4">
                                    <p className="text-xs text-zinc-400 leading-relaxed italic">
                                        "{outcome.rationale}"
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Executive Memo Section */}
                        <div className="capsule-container rounded-2xl p-8 mb-12">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp size={18} className="text-emerald-500" />
                                <h2 className="text-xl font-bold text-white">Executive Defense Memo</h2>
                            </div>

                            {!memo ? (
                                <div className="text-center py-12 border-2 border-dashed border-white/10 rounded-xl">
                                    <p className="text-zinc-500 mb-6 max-w-md mx-auto">
                                        Generate a high-agency defense memo to justify this hiring decision to the Investment Committee.
                                    </p>
                                    <button
                                        onClick={generateMemo}
                                        disabled={loading}
                                        className="px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-colors disabled:opacity-50"
                                    >
                                        {loading ? "Drafting Memo..." : "Generate Memo"}
                                    </button>
                                </div>
                            ) : (
                                <div className="prose prose-invert prose-lg max-w-none bg-black/30 p-8 rounded-xl border-l-4 border-emerald-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Confidential // Internal Only</span>
                                        <button onClick={() => navigator.clipboard.writeText(memo)} className="text-[10px] font-mono text-zinc-500 hover:text-white uppercase">Copy</button>
                                    </div>
                                    <p className="text-zinc-200 leading-loose whitespace-pre-wrap font-serif">
                                        {memo}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="mt-8">
                            <VaultUpsell 
                                urgencyLevel={outcome.total > 7 ? 'growth' : 'critical'}
                                recommendedTracks={[
                                    { id: 'TRACK-01', title: 'Agentic Workflow Construction', desc: 'Secure internal technical competence to evaluate autonomous systems.' },
                                    { id: 'TRACK-05', title: 'Technical Debt & Valuation Impact', desc: 'Prevent catastrophic enterprise value destruction via poor engineering judgment.' }
                                ]} 
                            />
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            )}
        </div>
    );
}
