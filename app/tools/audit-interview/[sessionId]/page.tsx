'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ScrollReveal } from '../../../components/magicui/scroll-reveal';
import { GlowCard } from '../../../components/magicui/glow-card';
import { ArrowRight, Clock, Target, AlertTriangle } from 'lucide-react';

export default function SessionPage() {
    const params = useParams();
    const router = useRouter();
    const sessionId = params.sessionId as string;

    const [session, setSession] = useState<any>(null);
    const [questions, setQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Score State
    const [scoreData, setScoreData] = useState({ dimension: '', score: 0, rationale: '' });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchSession();
    }, []);

    const fetchSession = async () => {
        try {
            const res = await fetch(`/api/audit/session?sessionId=${sessionId}`);
            const data = await res.json();

            if (data.session.finalized) {
                router.push(`/tools/audit-interview/${sessionId}/committee`);
                return;
            }

            setSession(data.session);
            setQuestions(data.questions);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch session', error);
        }
    };

    const submitScore = async () => {
        if (!scoreData.dimension || !scoreData.rationale) return alert('Dimension and Rationale required');
        setSubmitting(true);
        try {
            await fetch('/api/audit/session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'SUBMIT_SCORE',
                    sessionId,
                    phase: session.current_phase,
                    dimension: scoreData.dimension,
                    score: parseInt(scoreData.score.toString()),
                    rationale: scoreData.rationale
                })
            });
            // Reset form
            setScoreData({ dimension: '', score: 0, rationale: '' });
            alert('Score Logged');
        } catch (error) {
            alert('Failed to log score');
        } finally {
            setSubmitting(false);
        }
    };

    const advancePhase = async () => {
        if (!confirm('Are you sure you want to advance? This cannot be undone.')) return;
        try {
            const res = await fetch('/api/audit/session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'ADVANCE_PHASE',
                    sessionId
                })
            });
            const data = await res.json();
            if (data.nextPhase === 'FINALIZED') {
                router.push(`/tools/audit-interview/${sessionId}/committee`);
            } else {
                fetchSession(); // Refresh
                window.scrollTo(0, 0);
            }
        } catch (error) {
            alert('Failed to advance phase');
        }
    };

    if (loading) return <div className="p-10 text-center text-zinc-500 font-mono">Loading Session Protocol...</div>;

    const DIMENSIONS = session.role === 'engineering'
        ? ['verification_depth', 'architectural_reasoning', 'economic_awareness', 'ai_interrogation']
        : ['willingness_to_disappoint', 'constraint_management', 'second_order_thinking', 'economic_reality'];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT: CANDIDATE VIEW (READ ONLY) */}
            <div className="space-y-6">
                {/* Header / Timer */}
                <div className="capsule-container rounded-2xl p-6 border border-white/10 mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-1">Protocol Status</div>
                            <div className="text-white font-bold flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                PHASE: {session.current_phase.toUpperCase()}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-1">Est. Time Remaining</div>
                            <div className="text-xl font-mono text-emerald-400 font-bold">--:--</div>
                        </div>
                    </div>
                </div>

                {/* Questions */}
                {questions.map((q: any) => (
                    <ScrollReveal key={q.id}>
                        <div className="bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8">
                            <span className="font-mono text-zinc-600 text-xs mb-4 block">#{q.id}</span>

                            {q.context && (
                                <div className="bg-zinc-900 rounded-lg p-4 mb-6 border-l-2 border-zinc-700">
                                    <pre className="text-xs sm:text-sm text-zinc-400 font-mono whitespace-pre-wrap">{q.context}</pre>
                                </div>
                            )}

                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight">
                                {q.prompt}
                            </h2>

                            {q.constraint && (
                                <div className="flex gap-3 items-start bg-red-900/10 p-4 rounded-lg border border-red-900/30">
                                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={16} />
                                    <span className="text-red-400 text-sm font-bold">{q.constraint}</span>
                                </div>
                            )}
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            {/* RIGHT: INTERVIEWER PANEL */}
            <div className="lg:sticky lg:top-8 h-fit space-y-6">
                <GlowCard className="p-6" glowColor="cobalt">
                    <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                        <Target className="text-cobalt" size={20} />
                        <h3 className="text-lg font-bold text-white">Interviewer Control</h3>
                    </div>

                    <div className="space-y-6">
                        {/* Dimension Selector */}
                        <div>
                            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Dimension</label>
                            <select
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm text-white focus:border-cobalt outline-none"
                                value={scoreData.dimension}
                                onChange={e => setScoreData({ ...scoreData, dimension: e.target.value })}
                                aria-label="Select Interview Dimension"
                            >
                                <option value="">Select a dimension...</option>
                                {DIMENSIONS.map(d => (
                                    <option key={d} value={d}>{d.replace(/_/g, ' ').toUpperCase()}</option>
                                ))}
                            </select>
                        </div>

                        {/* Score Selector */}
                        <div>
                            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Score</label>
                            <div className="grid grid-cols-4 gap-2">
                                {[0, 1, 2, 3].map(val => (
                                    <button
                                        key={val}
                                        onClick={() => setScoreData({ ...scoreData, score: val })}
                                        className={`py-2 text-sm font-bold rounded-md transition-all ${scoreData.score === val
                                                ? 'bg-cobalt text-white'
                                                : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'
                                            }`}
                                    >
                                        {val}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-between mt-1 text-[10px] text-zinc-600 font-mono">
                                <span>Critical Risk</span>
                                <span>Strong</span>
                            </div>
                        </div>

                        {/* Rationale */}
                        <div>
                            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Defense Rationale</label>
                            <textarea
                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-sm text-zinc-300 h-24 resize-none focus:border-cobalt outline-none"
                                placeholder="Why this score? Write for the CFO..."
                                value={scoreData.rationale}
                                onChange={e => setScoreData({ ...scoreData, rationale: e.target.value })}
                            />
                        </div>

                        <button
                            onClick={submitScore}
                            disabled={submitting}
                            className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-zinc-200 transition disabled:opacity-50"
                        >
                            {submitting ? 'Logging...' : 'Submit Score Entry'}
                        </button>
                    </div>
                </GlowCard>

                {/* Phase Control */}
                <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
                    <p className="text-zinc-500 text-xs mb-4 leading-relaxed">
                        Once you advance, you cannot return to this phase. Ensure all observations are logged.
                    </p>
                    <button
                        onClick={advancePhase}
                        className="w-full py-3 border border-red-500/50 text-red-400 font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-red-500/10 transition flex items-center justify-center gap-2"
                    >
                        Advance Protocol <ArrowRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}
