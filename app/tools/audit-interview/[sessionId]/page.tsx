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
import { ShineBorder } from '../../../components/magicui/shine-border';
import Link from 'next/link';

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
    const router = useRouter(); // Keeping router if needed for redirects
    const sessionId = params.sessionId as string;

    const [session, setSession] = useState<any>(null);
    const [scenario, setScenario] = useState<any>(null);
    const [allPhases, setAllPhases] = useState<string[]>([]);
    const [timeLeft, setTimeLeft] = useState(0);
    const [rationale, setRationale] = useState(''); // Changed from findings to rationale to match PDI styling
    const [loading, setLoading] = useState(true);
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

            if (!res.ok || data.error) {
                console.error("Session fetch error:", data.error);
                return;
            }

            if (data.analytics) {
                setAnalytics(data.analytics);
                setSession(data.session);
                setLoading(false);
                return;
            }

            setSession(data.session);
            setScenario(data.currentScenario);
            setAllPhases(data.phases || []);

            if (loading && data.phaseTimeLimit) {
                setTimeLeft(data.phaseTimeLimit);
            }

            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch session', error);
        }
    };

    const submitFindings = async () => {
        if (rationale.length < 5) return alert("Please document your findings before advancing.");

        setLoading(true); // Show processing state
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
                    score: 0,
                    rationale: rationale
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
                fetchSession();
            } else {
                setRationale("");
                fetchSession();
            }

        } catch (error) {
            alert('Failed to advance');
            setLoading(false);
        }
    };

    // --- HELPER --
    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    // --- RENDERERS ---
    const renderChart = () => {
        if (!scenario?.chart_type || !scenario?.chart_data) return null;

        // Safety check for data structure
        if (!scenario.chart_data.labels || !scenario.chart_data.datasets) {
            // If we have chart type but no valid data, fail gracefully
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
            if (!scenario.code && !scenario.chart_data?.code) {
                return <div className="p-4 text-red-400 font-mono text-xs">Error: Code artifact missing.</div>;
            }
            return (
                <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden font-mono text-xs sm:text-sm relative group">
                    <div className="flex items-center px-4 py-2 border-b border-[#30363d] bg-[#161b22]">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-[#fa7970]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#faa356]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#7ce38b]"></div>
                        </div>
                        <div className="ml-4 text-zinc-500 text-[10px] uppercase tracking-widest">legacy_code_v1.py</div>
                    </div>
                    <pre className="p-4 overflow-x-auto text-zinc-300">
                        <code>{scenario.code || scenario.chart_data?.code}</code>
                    </pre>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-red-900/50 text-red-400 text-[10px] px-2 py-1 rounded border border-red-500/20">VULNERABILITY DETECTED</span>
                    </div>
                </div>
            );
        }

        if (scenario.chart_type === 'table_backlog') {
            if (!scenario.chart_data?.items || !Array.isArray(scenario.chart_data.items)) {
                return <div className="p-4 text-red-400 font-mono text-xs">Error: Table data missing.</div>;
            }
            return (
                <div className="w-full overflow-hidden border border-white/10 rounded-xl">
                    <table className="w-full text-sm text-left font-mono">
                        <thead className="bg-[#161b22] text-zinc-500 text-[10px] uppercase tracking-widest">
                            <tr>
                                <th className="px-4 py-3 font-medium">Feature</th>
                                <th className="px-4 py-3 font-medium">Sponsor</th>
                                <th className="px-4 py-3 font-medium">ROI</th>
                                <th className="px-4 py-3 font-medium">Cost Ref</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 bg-[#0f1115]">
                            {scenario.chart_data.items.map((item: any, i: number) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="px-4 py-3 font-semibold text-white">{item.name}</td>
                                    <td className="px-4 py-3 text-zinc-400">{item.sponsor}</td>
                                    <td className={`px-4 py-3 ${item.roi.includes('-') ? 'text-red-400' : 'text-emerald-400'}`}>{item.roi}</td>
                                    <td className="px-4 py-3 text-zinc-500">{item.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        return (
            <div className="bg-[#161b22] border border-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Real-time Telemetry</div>
                    <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 bg-red-500/10 text-red-400 text-[9px] rounded uppercase font-bold tracking-wider animate-pulse">Live</div>
                    </div>
                </div>
                {renderChart()}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0f1115] text-white flex flex-col items-center justify-center font-mono">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-2 border-t-transparent border-red-500 rounded-full animate-spin"></div>
                    <span className="text-sm text-zinc-500 uppercase tracking-widest animate-pulse">Initializing Environment...</span>
                </div>
            </div>
        );
    }

    if (!session) return <div className="text-white font-mono p-10">Session Init Failed. Check API.</div>;

    // --- RENDER FINAL ---
    if (session.finalized && analytics) {
        let verdictColor = 'text-zinc-400';
        if (analytics.verdict.includes('Strong Hire')) verdictColor = 'text-emerald-400';
        else if (analytics.verdict === 'Hire') verdictColor = 'text-indigo-400';
        else if (analytics.verdict === 'No Hire') verdictColor = 'text-orange-400';
        else verdictColor = 'text-red-500';

        return (
            <div className="min-h-screen bg-[#000] text-white font-sans p-6 overflow-y-auto">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center py-12">
                        <div className="inline-block px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-6">
                            Session Audit Complete
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-4">
                            Final Protocol <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Verdict</span>
                        </h1>
                        <div className={`text-5xl sm:text-7xl font-black tracking-tight ${verdictColor} my-8 drop-shadow-2xl`}>
                            {analytics.verdict.toUpperCase()}
                        </div>
                        <p className="max-w-xl mx-auto text-xl text-zinc-400 leading-relaxed">
                            {analytics.rationale}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {analytics.scores.map((s: any, i: number) => (
                            <div key={i} className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-mono uppercase text-zinc-500">{s.phase} Phase</span>
                                    <span className="text-xs font-bold text-zinc-300">{s.score > 0 ? `${s.score}/3 Points` : 'Qualitative'}</span>
                                </div>
                                <p className="text-sm text-zinc-300 leading-relaxed italic border-l-2 border-zinc-700 pl-4">
                                    &quot;{s.rationale}&quot;
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center pt-8">
                        <button
                            onClick={() => (window.location.href = '/tools/audit-interview')}
                            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors"
                        >
                            Run New Simulation
                        </button>
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
                        <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg shadow-red-900/20">
                            AI
                        </div>
                        <div>
                            <h1 className="font-bold text-sm tracking-tight text-white">Protocol 2.0</h1>
                            <div className="text-[10px] text-zinc-500 font-mono uppercase">Audit Session {session.session_id.slice(0, 4)}</div>
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
                        <div
                            className={`h-full transition-all duration-1000 ${timeLeft < 60 ? 'bg-red-500' : 'bg-zinc-500'}`}
                            style={{ width: `${(timeLeft / 600) * 100}%` }}
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
                                    <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full border ${isCurrent ? 'bg-red-500 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' :
                                            isPast ? 'bg-zinc-700 border-zinc-700' :
                                                'border-zinc-700'
                                        }`}></div>
                                    {isCurrent && <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-red-500 animate-ping"></div>}

                                    <h3 className={`text-sm font-bold uppercase tracking-wider ${isCurrent ? 'text-white' : 'text-zinc-500'}`}>
                                        {p}
                                    </h3>
                                    <div className="text-[10px] font-mono text-zinc-600 mt-0.5">
                                        Scenario {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* USER INFO */}
                <div className="p-4 border-t border-white/5 bg-[#0a0a0a]">
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                        <span>ROLE: {session.role.toUpperCase()}</span>
                        <span>CANDIDATE: {session.candidate_id}</span>
                    </div>
                </div>
            </div>

            {/* MAIN STAGE */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#0f1115] relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0f1115] to-[#0f1115] pointer-events-none"></div>

                <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto space-y-8 pb-20">
                            {/* SCENARIO HEADER */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-[10px] font-mono uppercase tracking-widest mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                                    Active Protocol
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    {scenario ? scenario.title : "Loading Scenario..."}
                                </h2>
                                <p className="text-zinc-400 text-lg leading-relaxed whitespace-pre-wrap">
                                    {scenario ? scenario.prompt : "Decrypting mission parameters..."}
                                </p>
                            </div>

                            {/* ARTIFACT DISPLAY */}
                            {scenario && (
                                <GlowCard className="bg-[#0a0a0a]/50 backdrop-blur-sm" glowColor={scenario.chart_type === 'code_snippet' ? 'danger' : 'purple'}>
                                    {renderArtifact()}
                                </GlowCard>
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
                                    className="w-full h-40 bg-[#0a0a0a] border border-white/10 rounded-xl p-4 text-white font-mono text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all resize-none placeholder:text-zinc-700"
                                />
                                <div className="flex justify-end">
                                    <ShineBorder borderColor="rgba(239, 68, 68, 0.5)" duration={3}>
                                        <button
                                            onClick={submitFindings}
                                            disabled={loading}
                                            className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors disabled:opacity-50"
                                        >
                                            {loading ? 'Processing...' : 'Submit Findings & Advance ->'}
                                        </button>
                                    </ShineBorder>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
}
