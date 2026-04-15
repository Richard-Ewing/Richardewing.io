'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ScrollReveal } from '../../../../components/magicui/scroll-reveal';
import { GlowCard } from '../../../../components/magicui/glow-card';
import { ArrowRight, Lock, TrendingUp, Search, XCircle, CheckCircle2 } from 'lucide-react';
import { VaultUpsell } from '../../../../components/VaultUpsell';

// Reusing the radar chart logic but adapted for this data structure
const RadarChart = ({ scores }: { scores: any[] }) => {
    // We expect scores to include { dimension: "x", score: 3 }
    // We need to aggregate if multiple scores exist for one dim, but assuming simple case for now or take median
    const dimMap = new Map();
    scores.forEach(s => {
        if (!dimMap.has(s.dimension)) dimMap.set(s.dimension, []);
        dimMap.get(s.dimension).push(s.score);
    });

    const finalScores: Record<string, number> = {};
    dimMap.forEach((vals, key) => {
        const sum = vals.reduce((a: number, b: number) => a + b, 0);
        finalScores[key] = sum / vals.length;
    });

    const entries = Object.entries(finalScores);
    if (entries.length < 3) return <div className="text-zinc-700 text-xs">Insufficient data for geometry</div>;

    const scale = (val: number) => 10 + (val / 3) * 80;
    const points = entries.map(([key, val], i) => {
        const angle = (i * 360) / entries.length;
        return { angle, val, label: key };
    });

    const polyPoints = points.map(p => {
        const rad = (p.angle - 90) * (Math.PI / 180);
        const r = scale(p.val);
        return `${100 + r * Math.cos(rad)},${100 + r * Math.sin(rad)}`;
    }).join(' ');

    return (
        <svg viewBox="0 0 200 200" className="w-full h-full">
            {[20, 40, 60, 80].map(r => (
                <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#333" strokeOpacity="0.5" />
            ))}
            <polygon points={polyPoints} fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="2" />
            {points.map((p, i) => {
                const rad = (p.angle - 90) * (Math.PI / 180);
                const r = scale(p.val);
                const x = 100 + r * Math.cos(rad);
                const y = 100 + r * Math.sin(rad);
                return (
                    <g key={i}>
                        <circle cx={x} cy={y} r="4" fill="#10b981" />
                        {/* Simplified labelling to avoid SVG complexity */}
                    </g>
                )
            })}
        </svg>
    );
};

export default function CommitteeDashboard() {
    const params = useParams();
    const router = useRouter();
    const sessionId = params.sessionId as string;

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/audit/session?sessionId=${sessionId}`);
                const json = await res.json();
                if (!json.session.finalized) {
                    // Redirect back if not finalized
                    router.push(`/tools/audit-interview/${sessionId}`);
                    return;
                }
                setData(json);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [sessionId, router]);

    if (loading || !data) return <div className="p-10 text-center text-zinc-700 font-mono">Loading Committee Dossier...</div>;

    const { session, analytics } = data;

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
            {/* Header */}
            <ScrollReveal>
                <div className="capsule-container rounded-2xl p-8 mb-12 border border-zinc-400">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full flex items-center gap-2">
                                    <Lock size={12} className="text-red-400" />
                                    <span className="font-mono text-xs font-medium text-red-400 uppercase tracking-widest">Session Locked</span>
                                </div>
                                <span className="font-mono text-zinc-800 text-xs font-medium uppercase tracking-widest">{session.session_id}</span>
                            </div>
                            <h1 className="text-3xl sm:text-5xl font-bold text-zinc-950 tracking-tight mb-2">Committee Dashboard</h1>
                            <p className="text-zinc-600 text-sm">
                                Hiring Decision for <span className="text-zinc-950 font-bold">{session.role.toUpperCase()}</span> Candidate
                            </p>
                        </div>
                        <div className="text-right hidden sm:block">
                            <div className="text-xs font-medium font-mono text-zinc-700 uppercase tracking-widest mb-1">Interviewer</div>
                            <div className="text-zinc-950 font-mono bg-zinc-100 px-3 py-1 rounded-lg border border-zinc-400">{session.interviewer_id}</div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Verdict */}
                <ScrollReveal delay={100}>
                    <GlowCard className="p-8 h-full flex flex-col items-center justify-center text-center" glowColor={analytics.verdict.includes('Strong') ? 'emerald' : 'danger'}>
                        <div className="text-xs font-mono text-zinc-700 uppercase tracking-widest mb-4">Capital Allocation Verdict</div>
                        <div className={`text-5xl lg:text-6xl font-bold tracking-tighter mb-6 ${analytics.verdict.includes('Hire') && !analytics.verdict.includes('No') ? 'text-emerald-400' : 'text-red-500'
                            }`}>
                            {analytics.verdict}
                        </div>
                        <div className="border-t border-zinc-400 pt-6 w-full">
                            <p className="text-zinc-600 text-sm italic leading-relaxed">
                                "{analytics.rationale}"
                            </p>
                        </div>
                    </GlowCard>
                </ScrollReveal>

                {/* Center: Radar */}
                <ScrollReveal delay={200}>
                    <div className="bg-zinc-100 border border-zinc-400 rounded-2xl p-6 flex flex-col items-center justify-center h-full relative">
                        <span className="absolute top-4 left-4 text-xs font-medium font-mono text-zinc-700 uppercase tracking-widest">Attribute Geometry</span>
                        <div className="w-64 h-64">
                            <RadarChart scores={analytics.scores} />
                        </div>
                    </div>
                </ScrollReveal>

                {/* Right: Scores List */}
                <ScrollReveal delay={300}>
                    <div className="bg-zinc-100 border border-zinc-400 rounded-2xl p-6 h-full overflow-y-auto max-h-[400px]">
                        <span className="text-xs font-medium font-mono text-zinc-700 uppercase tracking-widest block mb-4">Score Audit</span>
                        <div className="space-y-4">
                            {analytics.scores.map((s: any, i: number) => (
                                <div key={i} className="border-b border-zinc-400 last:border-0 pb-4 last:pb-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-xs text-zinc-700 font-bold uppercase">{s.dimension.replace(/_/g, ' ')}</span>
                                        <span className={`font-mono text-xs font-bold ${s.score > 2 ? 'text-emerald-400' : 'text-zinc-900'}`}>{s.score}/3</span>
                                    </div>
                                    <p className="text-xs font-medium text-zinc-700 italic">"{s.rationale}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Questions Transcript */}
            <ScrollReveal delay={400}>
                <div className="mt-12 bg-zinc-100 border border-zinc-400 rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-zinc-950 mb-6 flex items-center gap-2">
                        <Search size={18} className="text-zinc-900" />
                        Session Transcript
                    </h3>
                    <div className="space-y-2">
                        {/* Assuming we log the questions shown - for now we just show the count or list from question bank if we tracked them specifically per session */}
                        <div className="p-4 bg-zinc-100 rounded-lg text-sm text-zinc-600 font-mono">
                            Transcript available in full dossier export.
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <div className="mt-8">
                <VaultUpsell 
                    urgencyLevel={analytics?.verdict?.includes('Strong No Hire') || analytics?.verdict?.includes('No Hire') ? 'critical' : 'growth'}
                    recommendedTracks={[
                        { id: 'TRACK-01', title: 'Agentic Workflow Construction', desc: 'Secure internal technical competence to evaluate autonomous systems.' },
                        { id: 'TRACK-05', title: 'Technical Debt & Valuation Impact', desc: 'Prevent catastrophic enterprise value destruction via poor engineering judgment.' }
                    ]} 
                />
            </div>
        </div>
    );
}
