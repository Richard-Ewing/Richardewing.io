'use client';

import { useState, useEffect, useRef } from 'react';
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
import { ArrowRight, Terminal, Activity, AlertTriangle, Shield, CheckCircle } from 'lucide-react';

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

export default function SessionCommandCenter() {
    const params = useParams();
    const router = useRouter();
    const sessionId = params.sessionId as string;

    const [session, setSession] = useState<any>(null);
    const [scenario, setScenario] = useState<any>(null);
    const [allPhases, setAllPhases] = useState<string[]>([]);
    const [timeLeft, setTimeLeft] = useState(0);
    const [findings, setFindings] = useState('');
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [analytics, setAnalytics] = useState<any>(null);

    // Initial Load
    useEffect(() => {
        fetchSession();
    }, []);

    // Timer Tick
    useEffect(() => {
        if (!timeLeft || timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const fetchSession = async () => {
        try {
            const res = await fetch(`/api/audit/session?sessionId=${sessionId}`);
            const data = await res.json();

            if (data.analytics) {
                setAnalytics(data.analytics);
                setSession(data.session);
                setLoading(false);
                return;
            }

            setSession(data.session);
            setScenario(data.currentScenario);
            setAllPhases(data.phases);

            // Only set time if we haven't started (or strict server sync needed)
            // For now, reset time on phase change implicitly by checking if scenario changed (simplified)
            // Ideally we track 'phase_started_at' but for this demo logic, we'll just set it if it's 0 or we just loaded.
            // Actually, let's just use the server limit as the "base" and count down locally. 
            // Real implementation would sync with server start time.
            if (loading) {
                setTimeLeft(data.phaseTimeLimit || 600);
            }

            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch session', error);
        }
    };

    const advancePhase = async () => {
        if (findings.length < 5) return alert("Please document your findings before advancing.");
        // Submit findings first (Audit Trail) - reusing SUBMIT_SCORE logic or just logging text?
        // User's prompt had "Submit Findings". The old backend had 'SUBMIT_SCORE'. 
        // We'll log it as a score with "Analysis" dimension for now or just generic log. 
        // Let's use generic log. Actually, let's treat it as "Analysis" submission.

        setSubmitting(true);
        try {
            // 1. Log Findings
            await fetch('/api/audit/session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'SUBMIT_SCORE',
                    sessionId,
                    phase: session.current_phase,
                    dimension: 'analysis_log',
                    score: 0, // No quantitative score from candidate, just text
                    rationale: findings
                })
            });

            // 2. Advance
            const res = await fetch('/api/audit/session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'ADVANCE_PHASE', sessionId })
            });
            const data = await res.json();

            if (data.nextPhase === 'FINALIZED') {
                // Refresh to get analytics
                fetchSession();
            } else {
                // Reload session for next phase
                setFindings("");
                setLoading(true); // Trigger re-fetch logic
                fetchSession();
            }

        } catch (error) {
            alert('Failed to advance');
        } finally {
            setSubmitting(false);
        }
    };

    // --- RENDER HELPERS ---

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const renderChart = () => {
        if (!scenario?.chart_type || !scenario?.chart_data) return null;
        if (!scenario.chart_data.labels || !scenario.chart_data.datasets) return null;

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#8b949e' } },
                tooltip: {
                    backgroundColor: '#161b22',
                    titleColor: '#c9d1d9',
                    bodyColor: '#c9d1d9',
                    borderColor: '#30363d',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    stacked: scenario.chart_type === 'bar_stacked',
                    grid: { color: '#30363d' },
                    ticks: { color: '#8b949e' }
                },
                y: {
                    stacked: scenario.chart_type === 'bar_stacked',
                    grid: { color: '#30363d' },
                    ticks: { color: '#8b949e' }
                }
            }
        };

        if (scenario.chart_type === 'line') return <Line data={scenario.chart_data} options={options} />;
        if (scenario.chart_type === 'bar' || scenario.chart_type === 'bar_stacked') return <Bar data={scenario.chart_data} options={options} />;

        return null;
    };

    const renderArtifact = () => {
        if (!scenario) return null;

        if (scenario.chart_type === 'code_snippet') {
            if (!scenario.chart_data?.code) {
                return <div className="p-4 text-red-400 font-mono text-xs">Error: Code artifact missing.</div>;
            }
            return (
                <div className="w-full h-full bg-[#0d1117] p-6 rounded-lg border border-[#30363d] overflow-auto font-mono text-sm text-[#a5d6ff] whitespace-pre-wrap">
                    {scenario.chart_data.code}
                </div>
            );
        }

        if (scenario.chart_type === 'table_backlog') {
            if (!scenario.chart_data?.items || !Array.isArray(scenario.chart_data.items)) {
                return <div className="p-4 text-red-400 font-mono text-xs">Error: Table data missing.</div>;
            }
            return (
                <div className="w-full h-full overflow-auto">
                    <table className="w-full text-left text-sm text-[#c9d1d9]">
                        <thead>
                            <tr className="border-b border-[#30363d] text-[#8b949e]">
                                <th className="p-3">INITIATIVE</th>
                                <th className="p-3">SPONSOR</th>
                                <th className="p-3">ROI</th>
                                <th className="p-3">COST</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scenario.chart_data.items.map((item: any, i: number) => (
                                <tr key={i} className="border-b border-[#222] hover:bg-white/5">
                                    <td className="p-3 font-bold">{item.name || 'Unknown'}</td>
                                    <td className="p-3">{item.sponsor || '-'}</td>
                                    <td className={`p-3 ${item.roi?.includes?.('-') ? 'text-[#da3633]' : 'text-[#238636]'}`}>{item.roi || '-'}</td>
                                    <td className="p-3">{item.cost || '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        // Catch-all for charts
        if (['line', 'bar', 'bar_stacked'].includes(scenario.chart_type)) {
            if (!scenario.chart_data?.labels || !scenario.chart_data?.datasets) {
                return <div className="p-4 text-red-400 font-mono text-xs">Error: Chart data malformed.</div>;
            }
            return <div className="w-full h-full flex items-center justify-center pt-4">{renderChart()}</div>;
        }

        return <div className="p-4 text-zinc-500 font-mono text-xs">Artifact ready. waiting for data...</div>;
    };

    // --- LOADING & FINAL STATES ---

    if (loading) return (
        <div className="bg-[#0f1115] min-h-screen text-white flex items-center justify-center font-mono">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-emerald-500 tracking-widest text-xs uppercase animate-pulse">Initializing Protocol...</div>
            </div>
        </div>
    );

    if (analytics) {
        return (
            <div className="bg-[#0f1115] min-h-screen text-white flex flex-col items-center justify-center p-4">
                <div className="bg-[#161b22] border border-[#30363d] p-10 rounded-2xl max-w-2xl w-full text-center shadow-2xl">
                    <h1 className="text-3xl font-bold mb-2">Audit Complete</h1>
                    <p className="text-[#8b949e] mb-8">Analysis of your decision velocity and judgment logic.</p>

                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <div className="text-xs text-[#8b949e] uppercase tracking-widest mb-1">FINAL VERDICT</div>
                            <div className={`text-5xl font-bold ${analytics.verdict.includes('No') ? 'text-[#da3633]' : 'text-[#238636]'}`}>
                                {analytics.verdict}
                            </div>
                        </div>
                        <div className="text-left bg-black/30 p-4 rounded-lg">
                            <div className="text-xs text-[#8b949e] uppercase tracking-widest mb-1">AI Rationale</div>
                            <p className="text-sm text-[#c9d1d9] leading-relaxed">{analytics.rationale}</p>
                        </div>
                    </div>

                    <button
                        onClick={() => router.push('/tools/audit-interview')}
                        className="bg-[#238636] hover:bg-[#2ea043] text-white font-bold py-3 px-8 rounded-lg transition-all"
                    >
                        Run Another Simulation
                    </button>
                </div>
            </div>
        );
    }

    // --- MAIN UI ---

    return (
        <div className="bg-[#0f1115] min-h-screen text-[#c9d1d9] font-sans flex overflow-hidden">

            {/* SIDEBAR */}
            <div className="w-[280px] bg-[#161b22] border-r border-[#30363d] flex flex-col p-6 z-10 shrink-0">
                <div className="text-lg font-bold text-white mb-10 border-b border-[#30363d] pb-5 tracking-tight">
                    RICHARDEWING<span className="text-[#58a6ff]">.IO</span>
                </div>

                {/* Timer */}
                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 text-center mb-8 shadow-lg">
                    <div className="text-[10px] text-[#8b949e] uppercase tracking-widest mb-2">Time Remaining</div>
                    <div className={`font-mono text-4xl font-bold ${timeLeft < 60 ? 'text-[#da3633] animate-pulse' : 'text-white'}`}>
                        {formatTime(timeLeft)}
                    </div>
                </div>

                {/* Phase List */}
                <ul className="space-y-2 flex-1">
                    {allPhases.map((phase, i) => {
                        const isActive = session.current_phase === phase;
                        // const isPast = allPhases.indexOf(session.current_phase) > i;
                        return (
                            <li
                                key={phase}
                                className={`
                                    flex items-center p-3 rounded-md text-sm transition-all border-l-2
                                    ${isActive
                                        ? 'bg-[#58a6ff]/10 text-white border-[#58a6ff] font-bold'
                                        : 'text-[#8b949e] border-transparent hover:bg-white/5'}
                                `}
                            >
                                <span className={`mr-3 font-mono text-xs ${isActive ? 'text-[#58a6ff]' : 'opacity-30'}`}>
                                    0{i + 1}
                                </span>
                                {phase.charAt(0).toUpperCase() + phase.slice(1)}
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-auto text-[10px] text-[#30363d] font-mono">
                    SESSION ID: {session?.session_id?.substring(0, 8).toUpperCase()}
                </div>
            </div>

            {/* MAIN STAGE */}
            <div className="flex-1 flex flex-col p-6 gap-6 relative">

                {/* TOP: DASHBOARD/ARTIFACT */}
                <div className="flex-[6] bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden flex flex-col relative">
                    <div className="px-5 py-3 border-b border-[#30363d] bg-white/[0.02] flex justify-between items-center">
                        <div className="text-xs font-bold text-[#8b949e] uppercase tracking-widest">
                            {session.current_phase} ARTIFACT
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-[#da3633] uppercase">
                            <div className="w-2 h-2 bg-[#da3633] rounded-full animate-pulse" />
                            Live Feed
                        </div>
                    </div>
                    <div className="flex-1 p-6 relative">
                        {renderArtifact()}
                    </div>
                </div>

                {/* BOTTOM: WORKSPACE */}
                <div className="flex-[4] flex gap-6 min-h-0">
                    <div className="flex-1 bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col">
                        <div className="text-xs font-bold text-[#58a6ff] uppercase tracking-widest mb-3">
                            PHASE {allPhases.indexOf(session.current_phase) + 1} / {allPhases.length}
                        </div>

                        <div className="flex-1 overflow-y-auto mb-4">
                            <h2 className="text-lg font-bold text-white mb-2">{scenario?.title}</h2>
                            <p className="text-[#c9d1d9] leading-relaxed text-base whitespace-pre-wrap">
                                {scenario?.prompt}
                            </p>
                            {scenario?.context && (
                                <div className="mt-4 p-3 bg-white/5 rounded border-l-2 border-[#8b949e] text-sm text-[#8b949e] font-mono whitespace-pre-wrap">
                                    {scenario.context}
                                </div>
                            )}
                            {scenario?.constraint && !timeLeft && ( // Show constraint? User prompts usually have them open.
                                <div className="mt-4 p-3 bg-[#da3633]/10 rounded border border-[#da3633]/30 flex items-start gap-2 text-sm text-[#da3633]">
                                    <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                                    <span className="font-bold">{scenario.constraint}</span>
                                </div>
                            )}
                        </div>

                        <textarea
                            value={findings}
                            onChange={(e) => setFindings(e.target.value)}
                            disabled={timeLeft === 0}
                            placeholder={timeLeft === 0 ? "TIME EXPIRED. PHASE LOCKED." : "Enter your audit findings here..."}
                            className="w-full h-24 bg-[#0d1117] border border-[#30363d] rounded-lg p-3 text-sm text-white focus:border-[#58a6ff] outline-none resize-none mb-4 font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                        />

                        <div className="flex justify-end">
                            <button
                                onClick={advancePhase}
                                disabled={submitting || findings.length < 5}
                                className="bg-[#58a6ff] hover:bg-[#409eff] text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitting ? 'Authenticating...' : 'Submit Findings'}
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
