'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { ScrollReveal } from '../../../components/magicui/scroll-reveal';
import { GlowCard } from '../../../components/magicui/glow-card';
import ShineBorder from '../../../components/magicui/shine-border';
import ToolGate from '../../../components/tool-gate';
import Link from 'next/link';
import { VaultUpsell } from '../../../components/VaultUpsell';
import styles from './styles.module.css';

// Register ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// ... imports
import { Trophy, Target, Cpu } from 'lucide-react';
import { QUESTION_BANK, SCENARIOS, Role } from '../../../lib/question-bank';

export default function SessionCommandCenter() {
    const params = useParams();
    const router = useRouter();
    const sessionId = params.sessionId as string;

    const [session, setSession] = useState<any>(null);
    const [scenario, setScenario] = useState<any>(null);
    const [allPhases, setAllPhases] = useState<string[]>([]);
    const [timeLeft, setTimeLeft] = useState(0);
    const [rationale, setRationale] = useState('');
    const [loading, setLoading] = useState(true);
    const [analytics, setAnalytics] = useState<any>(null);
    const [showGate, setShowGate] = useState(false);

    const fetchSession = async () => {
        setLoading(true);
        try {
            // STATELESS: Read from LocalStorage
            const storedSession = localStorage.getItem(`audit_session_${sessionId}`);
            if (!storedSession) {
                console.error("Session not found in LocalStorage");
                setLoading(false);
                return;
            }

            const parsedSession = JSON.parse(storedSession);
            setSession(parsedSession);

            // Resolve Scenario Locally
            let currentScenario = null;
            if (!parsedSession.finalized && parsedSession.questions_map) {
                const questionId = parsedSession.questions_map[parsedSession.current_phase];
                if (questionId) {
                    const roleBank = QUESTION_BANK[parsedSession.role as Role];
                    currentScenario = roleBank.find(q => q.id === questionId);
                }
            }
            setScenario(currentScenario);
            setAllPhases(parsedSession.phases || SCENARIOS[parsedSession.role as Role].phases);

            // Timer (Static reset based on SCENARIOS config)
            const roleConfig: any = SCENARIOS[parsedSession.role as Role];
            const limit = roleConfig.time_limits[parsedSession.current_phase] || 600;
            if (!parsedSession.finalized) {
                setTimeLeft(limit);
            }

            // If Finalized, Load Analytics
            if (parsedSession.finalized) {
                const storedScores = localStorage.getItem(`audit_scores_${sessionId}`);
                if (storedScores) {
                    // Check if we already have analytics in local storage? 
                    // Or just re-fetch analysis from stateless API
                    const scores = JSON.parse(storedScores);

                    const anaRes = await fetch('/api/audit/session', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            action: 'ANALYZE_SESSION',
                            scores,
                            role: parsedSession.role
                        })
                    });
                    const anaData = await anaRes.json();
                    if (anaData.analytics) {
                        setAnalytics(anaData.analytics);
                    }
                }
            }

            setLoading(false);
        } catch (error) {
            console.error('Failed to load session', error);
            setLoading(false);
        }
    };

    // Initial Load
    useEffect(() => {
        fetchSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Timer Tick
    useEffect(() => {
        if (!timeLeft || timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const submitFindings = async () => {
        if (rationale.length < 5) return alert("Please document your findings before advancing.");

        setLoading(true);
        try {
            // 1. Grade Answer (Stateless API)
            const gradeRes = await fetch('/api/audit/session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'GRADE_ANSWER',
                    role: session.role,
                    phase: session.current_phase,
                    questionId: session.questions_map?.[session.current_phase],
                    answer: rationale
                })
            });
            const gradeData = await gradeRes.json();

            // 2. Update Local State
            const newScore = {
                session_id: sessionId,
                phase: session.current_phase,
                dimension: 'analysis_log',
                score: gradeData.score || 3,
                rationale: gradeData.evaluation || rationale, // Fallback
                evaluation: gradeData.evaluation, // explicitly store for UI
                timestamp: Date.now()
            };

            // Append to Scores
            const storedScores = JSON.parse(localStorage.getItem(`audit_scores_${sessionId}`) || '[]');
            storedScores.push(newScore);
            localStorage.setItem(`audit_scores_${sessionId}`, JSON.stringify(storedScores));

            // 3. Advance Phase Locally
            const phases = session.phases || SCENARIOS[session.role as Role].phases;
            const currentIdx = phases.indexOf(session.current_phase);

            const updatedSession = { ...session };
            if (currentIdx === phases.length - 1) {
                updatedSession.finalized = true;
            } else {
                updatedSession.current_phase = phases[currentIdx + 1];
            }

            // Save Session Update
            localStorage.setItem(`audit_session_${sessionId}`, JSON.stringify(updatedSession));
            setSession(updatedSession);

            // 4. Reload (will trigger fetchSession -> next scenario or analytics)
            setRationale("");
            await fetchSession();

        } catch (error: any) {
            console.error(error);
            alert(`Protocol Error: ${error.message || "Failed to save findings"}`);
            setLoading(false);
        }
    };

    // --- HELPER --
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const isEng = session?.role === 'engineering';

    // --- THEME ---
    const getTheme = () => {
        if (!isEng) { // Product
            return {
                primary: 'text-indigo-400',
                border: 'border-indigo-500/20',
                bg: 'bg-indigo-500/10',
                glow: 'purple',
                accent: 'text-indigo-500',
                icon: Target
            };
        }
        return { // Engineering
            primary: 'text-emerald-400',
            border: 'border-emerald-500/20',
            bg: 'bg-emerald-500/10',
            glow: 'cyan',
            accent: 'text-emerald-500',
            icon: Cpu
        };
    };

    // ... renderChart and renderArtifact (keep as is, simplified for replacement) ...
    const renderChart = () => {
        if (!scenario?.chart_type || !scenario?.chart_data) return null;

        // Safety check for data structure
        if (!scenario.chart_data.labels || !scenario.chart_data.datasets) {
            return (
                <div className="p-4 bg-red-900/10 border border-red-500/20 text-red-500 rounded font-mono text-xs">
                    Error: Chart data malformed.
                </div>
            );
        }

        const data = {
            labels: scenario.chart_data.labels,
            datasets: scenario.chart_data.datasets.map((ds: any) => ({
                label: ds.label,
                data: ds.data,
                borderColor: ds.borderColor,
                backgroundColor: ds.backgroundColor || 'transparent',
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
            }))
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom' as const,
                    labels: { color: '#71717a', font: { family: 'monospace' } }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#71717a', font: { family: 'monospace' } }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#71717a', font: { family: 'monospace' } }
                }
            }
        };

        let ChartComponent = Line;
        if (scenario.chart_type.includes('bar')) {
            ChartComponent = Bar as any;
            if (scenario.chart_type === 'bar_stacked') {
                (options.scales.x as any).stacked = true;
                (options.scales.y as any).stacked = true;
            }
        }

        return (
            <div className="w-full h-64 sm:h-80">
                <ChartComponent data={data} options={options} />
            </div>
        );
    };

    const renderArtifact = () => {
        if (!scenario) return null;

        if (scenario.chart_type === 'code_snippet') {
            return (
                <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden font-mono text-xs sm:text-sm relative group">
                    <div className="flex items-center px-4 py-2 border-b border-[#30363d] bg-[#161b22]">
                        <div className="ml-4 text-zinc-500 text-[10px] uppercase tracking-widest">legacy_code_v1.py</div>
                    </div>
                    <pre className="p-4 overflow-x-auto text-zinc-300">
                        <code>{scenario.code || scenario.chart_data?.code}</code>
                    </pre>
                </div>
            );
        }

        // UPDATED: Correct columns for PM Backlog (Initiative, Type, Risk, Value)
        if (scenario.chart_type === 'table_backlog') {
            return (
                <div className="w-full overflow-hidden border border-white/10 rounded-xl">
                    <table className="w-full text-sm text-left font-mono">
                        <thead className="bg-[#161b22] text-zinc-500 text-[10px] uppercase tracking-widest">
                            <tr>
                                <th className="px-4 py-3 font-medium">Initiative</th>
                                <th className="px-4 py-3 font-medium">Type</th>
                                <th className="px-4 py-3 font-medium">Risk</th>
                                <th className="px-4 py-3 font-medium">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-[#0f1115]">
                            {scenario.chart_data?.items?.map((item: any, i: number) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-4 py-3 font-semibold text-white">{item.name}</td>
                                    <td className="px-4 py-3 text-zinc-400">{item.type || item.sponsor}</td>
                                    <td className="px-4 py-3 text-zinc-400">{item.risk || item.cost}</td>
                                    <td className={`px-4 py-3 ${item.value?.includes('Unk') ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {item.value || item.roi}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        return (
            <div className="bg-[#161b22] border border-white/5 rounded-xl p-4">
                {renderChart()}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0f1115] text-white flex flex-col items-center justify-center font-mono">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-2 border-t-transparent border-white/20 rounded-full animate-spin"></div>
                    <span className="text-sm text-zinc-500 uppercase tracking-widest animate-pulse">Initializing Environment...</span>
                </div>
            </div>
        );
    }

    if (!session) return <div className="text-white font-mono p-10">Session Init Failed. Check API.</div>;

    const theme = getTheme();
    const ThemeIcon = theme.icon;

    // --- RENDER FINAL ---
    if (session.finalized && analytics) {
        // Use real analytics from backend
        // Fallback or legacy handling
        const isHire = analytics.decision === 'HIRE';
        const decisionText = analytics.decision;

        const statusColor = isHire ? 'text-emerald-500' : 'text-red-500';
        const statusBorder = isHire ? 'border-emerald-500/20' : 'border-red-500/20';
        const statusBg = isHire ? 'bg-emerald-500/10' : 'bg-red-500/10';

        return (
            <div className="min-h-screen bg-[#000] text-white font-sans p-6 overflow-y-auto">
                <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000">


                    {/* VERDICT BOX */}
                    <div className="text-center py-16 border border-[#30363d] bg-[#0d1117] rounded-2xl relative overflow-hidden">
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${isHire ? 'emerald-500' : 'red-500'} to-transparent opacity-50`}></div>

                        <div className={`inline-block px-4 py-1 rounded-full border ${statusBorder} ${statusBg} ${statusColor} text-[10px] font-mono uppercase tracking-widest mb-8`}>
                            Assessment Complete
                        </div>

                        <div className={`text-6xl sm:text-8xl font-black tracking-tighter ${statusColor} mb-6 drop-shadow-2xl`}>
                            {analytics.verdict.split(':')[0]}
                        </div>

                        <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                            {analytics.verdict.split(':')[1]}
                        </div>
                    </div>

                    {/* DIMENSIONS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#161b22] border border-[#30363d] p-6 rounded-xl">
                            <h3 className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Phase Breakdown</h3>
                            <div className="space-y-4">
                                {analytics.scores.map((s: any, i: number) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                                        <span className="text-sm font-mono text-zinc-300">{s.phase}</span>
                                        <span className={`text-xs font-bold ${s.score >= 5 ? 'text-emerald-400' : 'text-zinc-400'} bg-white/5 px-2 py-1 rounded`}>
                                            L{s.score}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#161b22] border border-[#30363d] p-6 rounded-xl">
                            <h3 className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Judgment Signal</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed italic">
                                "{analytics.rationale}"
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <span className="text-xs text-emerald-400 uppercase tracking-widest">Strengths Detected:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['System', 'Verification', 'Economics'].map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] rounded">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center pt-8 gap-6">
                        <div className="w-full mt-8">
                            <VaultUpsell 
                                urgencyLevel={analytics.verdict.includes('Strong No Hire') || analytics.verdict.includes('No Hire') ? 'critical' : 'growth'}
                                recommendedTracks={[
                                    { id: 'TRACK-01', title: 'Agentic Workflow Construction', desc: 'Secure internal technical competence to evaluate autonomous systems.' },
                                    { id: 'TRACK-05', title: 'Technical Debt & Valuation Impact', desc: 'Prevent catastrophic enterprise value destruction via poor engineering judgment.' }
                                ]} 
                            />

                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={() => (window.location.href = '/tools/audit-interview')}
                                    className="text-zinc-500 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    ← Run Another Simulation
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0f1115] text-white flex flex-col md:flex-row font-sans selection:bg-red-500/30 overflow-hidden">
            {/* LEFT SIDEBAR - COMMAND */}
            <div className="w-full md:w-80 border-r border-white/5 bg-[#0f1115] flex flex-col relative z-20">
                <div className="p-6 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-1">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg ${isEng ? 'bg-gradient-to-br from-emerald-600 to-emerald-900 shadow-emerald-900/20' : 'bg-gradient-to-br from-indigo-600 to-indigo-900 shadow-indigo-900/20'}`}>
                            <ThemeIcon size={16} />
                        </div>
                        <div>
                            <h1 className="font-bold text-sm tracking-tight text-white">{isEng ? 'Engineering Protocol' : 'Product Protocol'}</h1>
                            <div className="text-[10px] text-zinc-500 font-mono uppercase">Session {session.session_id.slice(0, 4)}</div>
                        </div>
                    </div>
                </div>

                {/* TIMER BLOCK */}
                <div className="p-6 border-b border-white/5 bg-gradient-to-b from-black/20 to-transparent">
                    <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-2">Time Remaining</div>
                    <div className={`text-5xl font-mono font-bold tracking-tighter tabular-nums transition-colors duration-500 ${timeLeft < 60 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                        {formatTime(timeLeft)}
                    </div>
                    <div className="h-1 w-full bg-zinc-900 mt-4 rounded-full overflow-hidden">
                        { }
                        <div
                            className={`h-full transition-all duration-1000 ${timeLeft < 60 ? 'bg-red-500' : 'bg-zinc-500'} ${styles.timeProgress}`}
                            style={ { '--time-left-pct': `${(timeLeft / 1200) * 100}%` } as React.CSSProperties }
                        ></div>
                    </div>
                </div>

                {/* PHASE TRACKER */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Phase Progression</div>
                    <div className="space-y-4">
                        {allPhases.map((p, i) => {
                            const isCurrent = session.current_phase === p;
                            const isPast = allPhases.indexOf(session.current_phase) > i;

                            return (
                                <div key={p} className={`relative pl-6 transition-all duration-500 ${isCurrent ? 'opacity-100' : 'opacity-40'}`}>
                                    <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full border ${isCurrent ? `${theme.bg} ${theme.primary} border-current shadow-[0_0_10px_currentColor]` :
                                        isPast ? 'bg-zinc-700 border-zinc-700' :
                                            'border-zinc-700'
                                        }`}></div>

                                    <h3 className={`text-sm font-bold uppercase tracking-wider ${isCurrent ? 'text-white' : 'text-zinc-500'}`}>
                                        {p}
                                    </h3>
                                    <div className="text-[10px] font-mono text-zinc-600 mt-0.5">
                                        Phase {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* MAIN STAGE */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#0f1115] relative">
                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-${theme.primary.replace('text-', '')}-900/10 via-[#0f1115] to-[#0f1115] pointer-events-none`}></div>

                <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto space-y-8 pb-20">
                            {/* SCENARIO HEADER */}
                            <div>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.border} ${theme.bg} ${theme.primary} text-[10px] font-mono uppercase tracking-widest mb-4`}>
                                    <span className={`w-1.5 h-1.5 rounded-full bg-current animate-pulse`}></span>
                                    Active Protocol
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    {scenario ? scenario.prompt.split('\n')[0] : "Loading..."}
                                </h2>
                                <div className="text-zinc-400 text-lg leading-relaxed whitespace-pre-wrap bg-white/5 p-6 rounded-lg border border-white/5">
                                    {scenario ? scenario.prompt : "Decrypting mission parameters..."}
                                </div>
                            </div>

                            {/* ARTIFACT DISPLAY */}
                            {scenario && (
                                <div className="space-y-6">
                                    {scenario.chart_type === 'code_snippet' && (
                                        <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden font-mono text-xs sm:text-sm relative group">
                                            <div className="flex items-center px-4 py-2 border-b border-[#30363d] bg-[#161b22]">
                                                <div className="text-zinc-500 text-[10px] uppercase tracking-widest">src/processor.py</div>
                                            </div>
                                            <pre className="p-4 overflow-x-auto text-zinc-300">
                                                <code>{scenario.code}</code>
                                            </pre>
                                        </div>
                                    )}

                                    {scenario.chart_type === 'dashboard' && scenario.chart_data && (
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                            {scenario.chart_data.metrics.map((m: any, i: number) => (
                                                <div key={i} className="bg-[#161b22] border border-white/10 p-4 rounded-lg">
                                                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{m.label}</div>
                                                    <div className={`text-xl font-mono font-bold ${m.trend === 'up' && m.label.includes('Cost') ? 'text-red-500' :
                                                        m.trend === 'down' && m.label.includes('Margin') ? 'text-red-500' : 'text-white'
                                                        }`}>
                                                        {m.value}
                                                    </div>
                                                    <div className="text-[10px] text-zinc-600 mt-1">{m.context}</div>
                                                </div>
                                            ))}
                                            <div className="col-span-full mt-2 text-center text-xs text-zinc-500 font-mono bg-white/5 p-2 rounded">
                                                STATUS: {scenario.chart_data.status}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* INTERACTION AREA */}
                            <div className="pt-6 border-t border-white/5 space-y-4">
                                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                    Candidate Findings Log
                                </label>
                                <textarea
                                    value={rationale}
                                    onChange={(e) => setRationale(e.target.value)}
                                    placeholder="Type your hypothesis, root cause analysis, or defense here..."
                                    className={`w-full h-40 bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white font-mono text-sm focus:${theme.primary.replace('text-', 'border-')} focus:outline-none focus:ring-1 focus:ring-opacity-50 transition-all resize-none placeholder:text-zinc-700`}
                                />
                                <div className="flex justify-end">
                                    <ShineBorder borderColor={isEng ? "rgba(52, 211, 153, 0.5)" : "rgba(129, 140, 248, 0.5)"} duration={3}>
                                        <button
                                            onClick={() => {
                                                const phases = session.phases || SCENARIOS[session.role as Role].phases;
                                                const currentIdx = phases.indexOf(session.current_phase);
                                                const isLastPhase = currentIdx === phases.length - 1;
                                                if (isLastPhase) {
                                                    setShowGate(true);
                                                } else {
                                                    submitFindings();
                                                }
                                            }}
                                            disabled={loading}
                                            className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors disabled:opacity-50"
                                        >
                                            {loading ? 'Processing...' : 'Submit Findings & Advance ->'}
                                        </button>
                                    </ShineBorder>

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="the Audit Interview Protocol" onUnlock={() => { setShowGate(false); submitFindings(); }}>
                                                <></>
                                            </ToolGate>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
