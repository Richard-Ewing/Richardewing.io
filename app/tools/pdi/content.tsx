'use client';

import { useState, useEffect } from 'react';
import { calculateProductDebtScore, PDIScoreMetrics } from '@/lib/diagnostics/scoring';
import { getPersonaInsight, Persona, formatMoney } from '@/lib/diagnostics/interpretations';
import { getRecommendedTracks } from '@/lib/diagnostics/recommendations';
import { saveDiagnosticSession, loadDiagnosticSession } from '@/lib/storage/session';
import { trackDiagnosticEvent } from '@/lib/telemetry/events';
import { ExecutiveSummary } from '@/components/reports/ExecutiveSummary';
import { ExogramRecommendations } from '@/components/reports/ExogramRecommendations';
import { BenchmarkComparison } from '@/components/reports/BenchmarkComparison';
import { DiagnosticProgression } from '@/components/reports/DiagnosticProgression';
import { LongitudinalHistory } from '@/components/reports/LongitudinalHistory';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import ExecutiveMemoExport from '@/app/components/ExecutiveMemoExport';
import { motion } from 'framer-motion';
import ToolCelebration from '../../components/ToolCelebration';
import Link from 'next/link';
import ProgrammaticAnswersRelated from '@/components/ProgrammaticAnswersRelated';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { GlowCard } from '../../components/magicui/glow-card';
import ShineBorder from '../../components/magicui/shine-border';
import NumberTicker from '../../components/magicui/number-ticker';
import { BorderBeam } from '../../components/magicui/border-beam';
import { Target, Users, Cpu, DollarSign, Mail, ArrowRight, TrendingUp, TrendingDown, AlertTriangle, Lock, Zap, Skull, Building2 } from 'lucide-react';
import { NewsletterForm } from '../../components/newsletter-form';
import { ToolGateCTA } from '../../components/ToolGateCTA';
import ToolGate from '../../components/tool-gate';
import { VaultUpsell, RecommendedTrack } from '../../components/VaultUpsell';
import { DiagnosticBridge } from '../../components/DiagnosticBridge';
import AdvisoryCTA from '../../components/AdvisoryCTA';

// Simple Pie Chart component (no external dependency)
const PieChart = ({ data }: { data: { name: string; value: number; color: string }[] }) => {
    const total = data.reduce((sum, d) => sum + d.value, 0);

    if (total === 0 || isNaN(total)) {
        return (
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#d4d4d8" strokeWidth="15" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="25" fill="#f8fafc" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            {data.map((slice, i) => {
                if (slice.value === 0) return null;
                const startAngle = data.filter((_, idx) => idx < i).reduce((sum, s) => sum + (s.value / total) * 360, 0);
                const angle = (slice.value / total) * 360;
                const endAngle = startAngle + angle;

                // Handle single slice edge case (100% donut)
                if (angle === 360) {
                    return (
                        <circle key={i} cx="50" cy="50" r="35" fill="none" stroke={slice.color} strokeWidth="30" />
                    );
                }

                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (endAngle - 90) * Math.PI / 180;

                const x1 = 50 + 35 * Math.cos(startRad);
                const y1 = 50 + 35 * Math.sin(startRad);
                const x2 = 50 + 35 * Math.cos(endRad);
                const y2 = 50 + 35 * Math.sin(endRad);

                const largeArc = angle > 180 ? 1 : 0;

                return (
                    <path
                        key={i}
                        d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArc} 1 ${x2} ${y2} Z`}
                        fill={slice.color}
                        className="transition-all duration-500"
                    />
                );
            })}
            {/* Cutout for Donut Shape - matched to new light mode background */}
            <circle cx="50" cy="50" r="20" fill="#ffffff" />
        </svg>
    );
};

const BentoCard = ({ children, title, icon: Icon, className = '' }: { children: React.ReactNode; title: string; icon?: React.ComponentType<{ size?: number; className?: string }>; className?: string }) => (
    <div className={`relative overflow-hidden rounded-2xl border border-zinc-400 bg-white/5 p-6 ${className}`}>
        <div className="flex items-center gap-2 mb-4">
            {Icon && <Icon size={20} className="text-blue-900 font-extrabold font-semibold" />}
            <h3 className="font-semibold text-zinc-900">{title}</h3>
        </div>
        {children}
    </div>
);

// --- PERSONA TYPES ---
const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Founder', label: 'Founder/CEO', icon: Target },
    { id: 'CPO', label: 'CPO/Product', icon: Users },
    { id: 'VP Eng', label: 'VP Engineering', icon: Cpu },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

interface Results extends PDIScoreMetrics {
    categorized?: Array<{
        ticket: string;
        category: string;
        reasoning: string;
    }>;
    qpep_roadmap?: Array<{
        month: number;
        focus: string;
        action_items: string[];
    }>;
}

export default function PDITool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');

    // Progressive Disclosure State
    const [step, setStep] = useState(1);

    // Inputs
    const [tickets, setTickets] = useState('');
    const [teamSize, setTeamSize] = useState(20);
    const [salary, setSalary] = useState(240000);
    const [prCycleHours, setPrCycleHours] = useState('48');
    const [sprintLength, setSprintLength] = useState('2');
    const [deployFreqDays, setDeployFreqDays] = useState('7');
    
    // UI States
    const [loading, setLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [results, setResults] = useState<Results | null>(null);
    const [showGate, setShowGate] = useState(false);
    const [showPaywall, setShowPaywall] = useState(false);

    // Email capture

    useEffect(() => {
        trackDiagnosticEvent('diagnostic_started', 'pdi');
        const saved = loadDiagnosticSession('pdi');
        if (saved) setResults(saved);
    }, []);

    const analyze = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tickets: tickets.split('\n').filter(t => t.trim()) })
            });

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            const total = data.total;
            const maint = data.categories.maintenance;
            const growth = data.categories.growth;
            const retention = data.categories.retention;

            const scoreMetrics = calculateProductDebtScore({
                teamSize,
                salary,
                sprintLength: parseInt(sprintLength) || 2,
                prCycleHours: Number(prCycleHours) || 48,
                deployFreqDays: Number(deployFreqDays) || 7,
                maintenanceTickets: maint,
                growthTickets: growth,
                retentionTickets: retention,
                totalTickets: total
            });

            const newResults = {
                ...scoreMetrics,
                categorized: data.categorized,
                qpep_roadmap: data.qpep_roadmap,
            };

            setResults(newResults);
            saveDiagnosticSession('pdi', newResults);
            trackDiagnosticEvent('diagnostic_completed', 'pdi', { score: scoreMetrics.score, waste: scoreMetrics.financials.waste });

            // Silently persist to Supabase for longitudinal tracking (Data Moat telemetry)
            fetch('/api/tools/runs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tool_id: 'pdi',
                    run_data: { teamSize, salary, sprintLength, prCycleHours, deployFreqDays },
                    output_metrics: {
                        score: scoreMetrics.score,
                        financial_waste: scoreMetrics.financials.waste,
                        metrics: scoreMetrics.metrics,
                        debtVelocity: scoreMetrics.debtVelocity,
                        burnDownWeeks: scoreMetrics.burnDownWeeks,
                        ticketCount: total,
                        qpep_roadmap: data.qpep_roadmap
                    }
                })
            }).catch(console.error);

        } catch (error: any) {
            console.error(error);
            alert(`Audit failed: ${error.message || "Unknown error"}`);
        }
        finally { setLoading(false); }
    };

    // Centralized methods are now imported.

    const handleSaveToVault = async (): Promise<boolean> => {
        if (!results) return false;
        
        try {
            // 1. Save to Supabase via API
            const saveRes = await fetch('/api/tools/pdi/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    score: results.score,
                    financial_waste: results.financials.waste,
                    inputs: { teamSize, salary, sprintLength, prCycleHours, deployFreqDays, tickets: tickets.substring(0, 1000) },
                    qpep_roadmap: results.qpep_roadmap
                })
            });

            if (!saveRes.ok) {
                const errData = await saveRes.json().catch(() => ({}));
                if (saveRes.status === 402) {
                    setShowPaywall(true);
                    return false; // Abort export
                }
                throw new Error(errData.error || `Vault connection failed (${saveRes.status})`);
            }
            return true;
        } catch (error: any) {
            console.error('Export Error:', error);
            alert(`Failed to save report: ${error?.message || error}`);
            return false;
        }
    };

    const COLORS = { growth: '#22d3ee', retention: '#8b5cf6', maintenance: '#dc2626' };

    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto px-4">
            <ToolCelebration show={!!results} toolName="PDI" />
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <Link href="/system" className="hover:text-zinc-900 transition">Intelligence</Link>
                <span>/</span>
                <span className="text-zinc-950 font-bold">PDI Engine</span>
            </div>

            {!results ? (
                /* --- INPUT STATE --- */
                <ScrollReveal>
                    <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                            <span className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest">PDI 2.0 | AI Forensic Engine</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tighter mb-4">
                            Quantify the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Hidden Debt.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-900 mb-8">
                            AI-powered forensic audit for engineering insolvency. Paste your backlog and see where your capital is bleeding.
                        </p>

                        {/* PERSONA SELECTOR */}
                        <div className="mb-8">
                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3">I am a...</div>
                            <div className="flex flex-wrap gap-2">
                                {PERSONAS.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => setPersona(p.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${persona === p.id
                                            ? 'bg-red-500/10 border-red-500 text-red-900 font-extrabold font-semibold'
                                            : 'bg-white/80 border-zinc-400 text-zinc-900 hover:border-white/30'
                                            }`}
                                    >
                                        <p.icon size={14} />
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* PROGRESSIVE DISCLOSURE WIZARD */}
                        <div className="space-y-6">
                            
                            {/* STEP 1: ORGANIZATIONAL SCALE */}
                            {step === 1 && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-900 font-extrabold font-semibold flex items-center justify-center font-bold font-mono text-sm font-semibold border border-cyan-500/30">1</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900">Organizational Scale</h3>
                                            <p className="text-sm font-semibold text-zinc-900 font-medium">Define the size and cost of your engineering machine.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest flex items-center gap-2">
                                                    Engineering Team Size
                                                    <span className="w-4 h-4 rounded-full bg-zinc-200 text-zinc-900 flex items-center justify-center text-xs font-bold font-medium cursor-help" title="Total number of ICs, EMs, and QA who touch the codebase.">?</span>
                                                </label>
                                                <div className="text-3xl font-bold text-zinc-950 font-mono">{teamSize}</div>
                                            </div>
                                            <input 
                                                title="Engineering Team Size"
                                                aria-label="Engineering Team Size"
                                                type="range" min="1" max="500" value={teamSize} 
                                                onChange={e => setTeamSize(parseInt(e.target.value))}
                                                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-500" 
                                            />
                                            <div className="flex justify-between text-xs font-bold font-medium text-zinc-950 font-mono mt-2">
                                                <span>1 (Startup)</span>
                                                <span>{teamSize > 120 ? 'Enterprise (>120)' : teamSize > 40 ? 'Scale-up (40-120)' : 'Growth (1-40)'}</span>
                                                <span>500 (Enterprise)</span>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-400 relative group">
                                            <div className="flex justify-between items-end mb-4">
                                                <label className="text-xs font-bold font-mono text-violet-400 uppercase tracking-widest flex items-center gap-2">
                                                    Average Fully-Loaded Salary
                                                    <span className="w-4 h-4 rounded-full bg-zinc-200 text-zinc-900 flex items-center justify-center text-xs font-bold font-medium cursor-help" title="Base salary + benefits, taxes, software licenses, and overhead. Usually 120-140% of base.">?</span>
                                                </label>
                                                <div className="text-3xl font-bold text-zinc-950 font-mono">${(salary / 1000).toFixed(0)}k</div>
                                            </div>
                                            <input 
                                                title="Average Fully-Loaded Salary"
                                                aria-label="Average Fully-Loaded Salary"
                                                type="range" min="60000" max="450000" step="5000" value={salary} 
                                                onChange={e => setSalary(parseInt(e.target.value))}
                                                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-violet-500" 
                                            />
                                        </div>
                                    </div>

                                    <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2">
                                        Next: R&D Cadence <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            )}

                            {/* STEP 2: CADENCE & HORIZON */}
                            {step === 2 && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold font-mono text-sm font-semibold border border-violet-500/30">2</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900">R&D Cadence</h3>
                                            <p className="text-sm font-semibold text-zinc-900 font-medium">How you plan and measure velocity.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div>
                                            <label className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3 block">Sprint Length</label>
                                            <select title="Sprint Length" aria-label="Sprint Length" value={sprintLength} onChange={e => setSprintLength(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl p-4 text-zinc-950 font-mono focus:border-violet-500 focus:outline-none transition-colors">
                                                <option value="1">1 Week</option>
                                                <option value="2">2 Weeks</option>
                                                <option value="3">3 Weeks</option>
                                                <option value="4">4 Weeks</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3 block">PR Cycle (Hours)</label>
                                            <input title="PR Cycle Time" aria-label="PR Cycle Time" placeholder="e.g. 48" type="number" value={prCycleHours} onChange={e => setPrCycleHours(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl p-4 text-zinc-950 font-mono focus:border-violet-500 focus:outline-none transition-colors" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3 block">Deploy Freq (Days)</label>
                                            <input title="Deploy Frequency" aria-label="Deploy Frequency" placeholder="e.g. 7" type="number" value={deployFreqDays} onChange={e => setDeployFreqDays(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl p-4 text-zinc-950 font-mono focus:border-violet-500 focus:outline-none transition-colors" />
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="w-1/3 py-4 bg-zinc-50 border border-zinc-400 text-zinc-950 font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all">
                                            Back
                                        </button>
                                        <button onClick={() => setStep(3)} className="w-2/3 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-violet-400 transition-all flex items-center justify-center gap-2">
                                            Next: Inject Evidence <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: EVIDENCE INJECTION */}
                            {step === 3 && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-900 font-extrabold font-semibold flex items-center justify-center font-bold font-mono text-sm font-semibold border border-red-500/30">3</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900">Backlog Evidence</h3>
                                            <p className="text-sm font-semibold text-zinc-900 font-medium">Paste your recent Jira tickets, PRs, or tasks.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <textarea
                                            value={tickets}
                                            onChange={e => setTickets(e.target.value)}
                                            className="w-full h-48 sm:h-64 bg-white/50 border border-zinc-400 rounded-xl p-4 font-mono text-sm font-semibold text-zinc-950 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-zinc-950 resize-none"
                                            placeholder="Paste Jira tickets, PRs, or task descriptions here (one per line)...

Example:
Fix login page race condition
Refactor payment microservice
Add enterprise SSO tier
Optimize dashboard database query
Migrate from Heroku to AWS"
                                        />
                                        <p className="text-xs font-bold text-zinc-900 font-bold mt-2 font-mono">Our LLM classifier will categorize these into Growth, Retention, or Maintenance to calculate your capital leakage.</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(2)} className="w-1/3 py-4 bg-zinc-50 border border-zinc-400 text-zinc-950 font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all">
                                            Back
                                        </button>
                                        <div className="w-2/3">
                                            <ShineBorder borderColor="rgba(220, 38, 38, 0.6)" duration={2}>
                                                <button
                                                    onClick={() => setShowGate(true)}
                                                    disabled={loading || !tickets.trim()}
                                                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-red-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                                >
                                                    {loading ? (
                                                        <>
                                                            <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                            ANALYZING...
                                                        </>
                                                    ) : (
                                                        "RUN FORENSIC AUDIT →"
                                                    )}
                                                </button>
                                            </ShineBorder>
                                        </div>
                                    </div>

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="the Product Debt Index" onUnlock={() => { setShowGate(false); analyze(); }}>
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
                <div id="pdi-results-artifact" className="bg-white p-2 sm:p-6 rounded-3xl">
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-white/60 border border-cyan-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                            </div>
                            <h2 className="text-xl font-bold text-zinc-950 mb-1">PDI Diagnostic Complete</h2>
                            <p className="text-sm font-semibold text-zinc-900 font-medium">Export this assessment to a verified Executive PDF for board review.</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <ExportToPDFButton targetId="pdi-pdf-export-zone" fileName={`PDI_Diagnostic_${persona}.pdf`} />
                        </div>
                    </div>

                    <div id="pdi-pdf-export-zone" className="space-y-6">
                        <ScrollReveal>
                            {/* Score Header */}
                            <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-6 relative overflow-hidden border border-zinc-400">
                            <BorderBeam size={300} duration={12} delay={9} borderWidth={1.5} />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                                <div>
                                    <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Capital Efficiency Score</div>
                                    <div className={`text-7xl sm:text-9xl font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r ${results.score < 50 ? 'from-red-500 to-orange-600' : 'from-cyan-400 to-blue-500'}`}>
                                        <NumberTicker value={results.score} />
                                    </div>
                                    <div className="mt-4">
                                        {results.score < 50 ? (
                                            <span className="px-3 py-1.5 rounded-full bg-red-50/30 text-red-900 font-extrabold font-semibold border border-red-900/50 text-xs font-bold uppercase tracking-widest">
                                                ⚠ INSOLVENT
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1.5 rounded-full bg-cyan-900/30 text-cyan-900 font-extrabold font-semibold border border-cyan-900/50 text-xs font-bold uppercase tracking-widest">
                                                ✓ HIGH LEVERAGE
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg sm:text-xl text-zinc-950 leading-relaxed">
                                        Based on your backlog, <strong className="text-zinc-900">{results.metrics.maintenance}% of your capacity</strong> is consumed by non-accretive work.
                                        You are burning <span className="text-red-500 font-bold font-mono">${(results.financials.waste / 1000000).toFixed(1)}M</span> annually on maintenance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* EXECUTIVE SUMMARY & EXOGRAM INTEGRATION */}
                    <ScrollReveal delay={50}>
                        <ExecutiveSummary 
                            tool="Product Debt Index" 
                            persona={persona} 
                            isAtRisk={results.score < 50}
                            extraData={{ score: results.score }}
                            freeChildren={
                                <>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-900 font-extrabold font-semibold mt-0.5">•</span>
                                        <span>Score of <strong className="text-zinc-900">{results.score}</strong> means {100 - results.score}% of capacity is non-value-creating.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-900 font-extrabold font-semibold mt-0.5">•</span>
                                        <span>Annual maintenance waste: <strong className="text-red-900 font-extrabold font-semibold">{formatMoney(results.financials.waste)}</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-900 font-extrabold font-semibold mt-0.5">•</span>
                                        <span>Growth allocation: <strong className="text-cyan-900 font-extrabold font-semibold">{results.metrics.growth}%</strong> of backlog.</span>
                                    </li>
                                </>
                            }
                            gatedChildren={
                                <div className="space-y-6">
                                    <BenchmarkComparison tool="pdi" userScore={results.score} />
                                    <LongitudinalHistory tool="pdi" scoreKey="score" />
                                    <ExogramRecommendations score={results.score} maintenance={results.metrics.maintenance} />
                                    <AdvisoryCTA variant="tool-result" />
                                </div>
                            }
                        />
                    </ScrollReveal>

                    {/* Executive Board Memo Export */}
                    <ScrollReveal delay={75}>
                        <ExecutiveMemoExport 
                            toolName="Product Debt Index (PDI)"
                            metrics={[
                                { label: 'Product Debt Score', value: `${results.score} / 100` },
                                { label: 'Maintenance Capacity Load', value: `${results.metrics.maintenance}%` },
                                { label: 'Annual Maintenance Waste', value: formatMoney(results.financials.waste) },
                                { label: 'Growth Backlog Allocation', value: `${results.metrics.growth}%` },
                            ]}
                            executiveSummary={`Current technical debt maintenance consumes ${results.metrics.maintenance}% of total engineering bandwidth, resulting in ${formatMoney(results.financials.waste)} in annual un-accretive expenditure. Without structural refactoring, velocity will drop to near-zero before feature delivery goals are met.`}
                            remediationSteps={[
                                "Institute a strict 20% R&D debt remediation budget cap per sprint cycle.",
                                "Audit high-volatility modules using Product Debt Index diagnostic benchmarks.",
                                "Deploy Exogram deterministic runtime gatekeeper to block unverified AI code from entering production."
                            ]}
                        />
                    </ScrollReveal>

                    {/* Metrics Grid */}
                    <ScrollReveal delay={100}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <GlowCard className="p-6" glowColor="danger">
                                <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Annual Waste</div>
                                <div className="text-3xl sm:text-4xl font-bold text-red-500">${(results.financials.waste / 1000000).toFixed(2)}M</div>
                                <p className="text-xs font-bold text-zinc-900 font-bold/60 mt-2">Capital deployed to zero-ROI tasks.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Growth Focus</div>
                                <div className="text-3xl sm:text-4xl font-bold text-cyan-900 font-extrabold font-semibold">{results.metrics.growth}%</div>
                                <p className="text-xs font-bold text-zinc-900 font-bold/60 mt-2">New feature development.</p>
                            </GlowCard>

                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2">Retention Work</div>
                                <div className="text-3xl sm:text-4xl font-bold text-purple-900 font-extrabold font-semibold">{results.metrics.retention}%</div>
                                <p className="text-xs font-bold text-zinc-900 font-bold/60 mt-2">Customer satisfaction & churn prevention.</p>
                            </GlowCard>
                        </div>
                    </ScrollReveal>

                    {/* Enhanced Metrics */}
                    <ScrollReveal delay={150}>
                        <div className="capsule-container rounded-2xl p-6 mb-6">
                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">Debt Dynamics</div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-zinc-100 rounded-xl p-4">
                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-1">Waste per Sprint</div>
                                    <div className="text-xl font-bold text-red-900 font-extrabold font-semibold">{formatMoney(results.financials.wastePerSprint)}</div>
                                </div>
                                <div className="bg-zinc-100 rounded-xl p-4">
                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-1">Debt Velocity</div>
                                    <div className="text-xl font-bold text-orange-900 font-extrabold font-semibold">{results.debtVelocity} tickets/sprint</div>
                                </div>
                                <div className="bg-zinc-100 rounded-xl p-4">
                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-1">Clear Backlog In</div>
                                    <div className="text-xl font-bold text-yellow-900 font-extrabold font-semibold">{results.burnDownWeeks} weeks</div>
                                    <div className="text-xs font-bold font-medium text-zinc-950">if dedicated</div>
                                </div>
                                <div className="bg-zinc-100 rounded-xl p-4">
                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-1">Debt Reduction ROI</div>
                                    <div className="text-xl font-bold text-emerald-900 font-extrabold font-semibold">{results.financials.debtReductionROI.toFixed(1)}x</div>
                                    <div className="text-xs font-bold font-medium text-zinc-950">per sprint invested</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Corporate Solvency Matrix (Technical Default Extrapolation) */}
                    <ScrollReveal delay={175}>
                        <div className={`capsule-container rounded-2xl p-6 mb-6 border ${results.financials.isTechnicalDefault ? 'border-red-500/50' : 'border-emerald-500/30'}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className={`w-4 h-4 ${results.financials.isTechnicalDefault ? 'text-red-500 animate-pulse' : 'text-emerald-900 font-extrabold font-semibold'}`} />
                                <div className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">Corporate Solvency Matrix (Technical Default)</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-400 relative overflow-hidden shrink-0">
                                    <div className="absolute top-0 right-0 p-3 opacity-10"><Skull className="w-16 h-16 text-zinc-900" /></div>
                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-2">Annual Maintenance Burden</div>
                                    <div className="text-3xl font-bold text-red-500">{formatMoney(results.financials.waste)}</div>
                                    <div className="text-xs font-bold text-zinc-900 font-bold/60 mt-2 mt-auto">Cost of servicing status-quo tech debt (Interest).</div>
                                </div>
                                <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-400 relative overflow-hidden shrink-0">
                                    <div className="absolute top-0 right-0 p-3 opacity-10"><Building2 className="w-16 h-16 text-zinc-900" /></div>
                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-2">Generative AI Rewrite Protocol</div>
                                    <div className="text-3xl font-bold text-cyan-900 font-extrabold font-semibold">{formatMoney(results.financials.rewriteCost)}</div>
                                    <div className="text-xs font-bold text-zinc-900 font-bold/60 mt-2 mt-auto">Cost to burn down and rebuild via Agentic orchestration (Principal).</div>
                                </div>
                            </div>
                            
                            <div className={`mt-6 p-4 rounded-xl border ${results.financials.isTechnicalDefault ? 'bg-red-500/10 border-red-500/30' : 'bg-emerald-500/10 border-emerald-500/30'}`}>
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-full ${results.financials.isTechnicalDefault ? 'bg-red-500/20 text-red-900 font-extrabold font-semibold' : 'bg-emerald-500/20 text-emerald-900 font-extrabold font-semibold'}`}>
                                        {results.financials.isTechnicalDefault ? <TrendingDown className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <div className={`font-bold ${results.financials.isTechnicalDefault ? 'text-red-900 font-extrabold font-semibold' : 'text-emerald-900 font-extrabold font-semibold'}`}>
                                            {results.financials.isTechnicalDefault ? 'CRITICAL: Technical Default Threshold Exceeded' : 'Viable: System Solvency Maintained'}
                                        </div>
                                        <div className="text-sm font-semibold font-medium text-zinc-950 mt-1">
                                            {results.financials.isTechnicalDefault 
                                                ? `The interest payment (maintenance) is now ${results.financials.defaultRatio.toFixed(1)}x greater than the principal (rebuild cost). You are in Technical Default. It is mathematically cheaper to burn the codebase down and rewrite it.` 
                                                : `Your maintenance burden is tracking below the cost of a full rewrite. Implement aggressive debt rotation now before crossing the default horizon.`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Breakdown Chart */}
                    <ScrollReveal delay={150}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <GlowCard className="p-6" glowColor="cyan">
                                <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">Backlog Composition</div>
                                <div className="w-48 h-48 mx-auto">
                                    <PieChart data={[
                                        { name: 'Growth', value: results.metrics.growth, color: COLORS.growth },
                                        { name: 'Retention', value: results.metrics.retention, color: COLORS.retention },
                                        { name: 'Maintenance', value: results.metrics.maintenance, color: COLORS.maintenance },
                                    ]} />
                                </div>
                                <div className="flex justify-center gap-6 mt-6">
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-cyan-400" /><span className="text-xs font-bold text-zinc-900 font-bold">Growth</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-purple-500" /><span className="text-xs font-bold text-zinc-900 font-bold">Retention</span></div>
                                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-red-600" /><span className="text-xs font-bold text-zinc-900 font-bold">Maintenance</span></div>
                                </div>
                            </GlowCard>

                            {/* EXECUTIVE SUMMARY + EMAIL */}
                            <div className="bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50/60 rounded-2xl p-6 border border-zinc-400">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className={`w-3 h-3 rounded-full animate-pulse ${results.score < 50 ? 'bg-red-500' : 'bg-cyan-400'}`} />
                                    <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">Executive Summary</span>
                                </div>

                                <ul className="space-y-2 text-zinc-900 text-sm font-semibold mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-900 font-extrabold font-semibold mt-0.5">•</span>
                                        <span>PDI of <strong className="text-zinc-900">{results.score}</strong> means {100 - results.score}% of capacity is non-value-creating.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-900 font-extrabold font-semibold mt-0.5">•</span>
                                        <span>Annual maintenance waste: <strong className="text-red-900 font-extrabold font-semibold">{formatMoney(results.financials.waste)}</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-cyan-900 font-extrabold font-semibold mt-0.5">•</span>
                                        <span>Growth allocation: <strong className="text-cyan-900 font-extrabold font-semibold">{results.metrics.growth}%</strong> of backlog.</span>
                                    </li>
                                </ul>

                                <div className="space-y-3">
                                    <div className="text-sm font-semibold text-zinc-950 font-semibold mb-2">Get the full debt burn-down plan:</div>
                                    <NewsletterForm
                                        buttonText="Get Debt Analysis"
                                        extraData={{
                                            tool: 'PDI',
                                            persona,
                                            score: results.score
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Ticket Breakdown */}
                    {results.categorized && results.categorized.length > 0 && (
                        <ScrollReveal delay={200}>
                            <GlowCard className="p-6 mb-6" glowColor="cyan">
                                <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">AI Categorization Results</div>
                                <div className="max-h-64 overflow-y-auto space-y-2">
                                    {results.categorized.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-zinc-100 rounded-lg">
                                            <span className={`px-2 py-0.5 rounded text-xs font-bold font-medium font-mono uppercase ${item.category === 'growth' ? 'bg-cyan-500/20 text-cyan-900 font-extrabold font-semibold' :
                                                item.category === 'retention' ? 'bg-purple-500/20 text-purple-900 font-extrabold font-semibold' :
                                                    'bg-red-500/20 text-red-900 font-extrabold font-semibold'
                                                }`}>
                                                {item.category}
                                            </span>
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-zinc-900 font-medium">{item.ticket}</p>
                                                <p className="text-sm font-semibold font-medium text-zinc-950 mt-1">{item.reasoning}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlowCard>
                        </ScrollReveal>
                    )}

                    {/* Q-PEP ROADMAP - GANTT CHART */}
                    {results.qpep_roadmap && results.qpep_roadmap.length > 0 && (
                        <ScrollReveal delay={225}>
                            <h3 className="text-xl font-bold text-zinc-950 mb-4 mt-8 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                Quarterly Product Execution Plan (Q-PEP)
                            </h3>
                            <div className="bg-zinc-50 border border-zinc-400 rounded-2xl p-6 md:p-8 mb-8 relative overflow-hidden shrink-0">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 via-orange-500 to-cyan-500"></div>
                                <h4 className="font-mono text-xs font-bold text-zinc-900 font-bold uppercase tracking-widest mb-6 border-b border-zinc-400 pb-4">Execution Gantt Chart (90-Day Burn Down)</h4>
                                
                                <div className="space-y-6 md:space-y-8">
                                    {results.qpep_roadmap.map((plan, i) => (
                                        <div key={i} className="relative md:pl-6 pl-4">
                                            {/* Timeline dot */}
                                            <div className="absolute left-[-0.3rem] md:left-[-1.3rem] top-2 w-3 h-3 rounded-full border-2 border-[#0f1115] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10"></div>
                                            
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                                <div className="bg-white/5 px-3 py-1 rounded-md text-xs font-bold font-medium uppercase font-mono tracking-widest text-zinc-900 shrink-0 inline-block w-fit">
                                                    Month {plan.month}
                                                </div>
                                                <div className="font-bold text-zinc-950 text-base leading-tight md:leading-normal">{plan.focus}</div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {plan.action_items.map((action: string, j: number) => {
                                                    // Visual length variations to simulate Gantt chart task durations
                                                    const widths = ["w-full", "w-[90%]", "w-[95%]"];
                                                    const width = widths[j % widths.length];
                                                    // Progressive colors down the months
                                                    const colorClasses = [
                                                        "from-red-500/20 to-orange-500/20 border-orange-500/50 text-orange-900 font-extrabold",
                                                        "from-orange-500/20 to-yellow-500/20 border-yellow-500/50 text-yellow-900 font-extrabold",
                                                        "from-blue-500/20 to-cyan-500/20 border-cyan-500/50 text-cyan-900 font-extrabold"
                                                    ];
                                                    const color = colorClasses[i % colorClasses.length];
                                                    
                                                    return (
                                                        <div key={j} className={`${width} bg-gradient-to-r ${color} border-l-2 p-3 rounded-r-md min-h-[70px] flex items-center transition-all hover:brightness-125 hover:translate-x-1 duration-300 shadow-sm`}>
                                                            <span className="text-xs font-bold leading-relaxed">{action}</span>
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

                    {/* ADVISORY PROTOCOLS - 3-Step Board Playbook */}
                    <ScrollReveal delay={250}>
                        <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border border-zinc-400 bg-zinc-50">
                            <h3 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                3-Step Board Remediation Playbook
                            </h3>
                            <p className="text-zinc-900 text-sm font-semibold mb-8">Based on your audit metrics, execute this operational surgery immediately to stop capital hemorrhage.</p>

                            <div className="space-y-4">
                                {/* Step 1 */}
                                <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-rose-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                    <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/20">
                                        <span className="text-rose-400 font-bold font-mono">01</span>
                                    </div>
                                    <div className="relative z-10 w-full">
                                        <h4 className="text-zinc-950 font-bold mb-2">CapEx Quarantine Protocol</h4>
                                        <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">Mandate an absolute freeze on net-new feature development for any codebase quadrant operating above 40% maintenance allocation.</p>
                                        <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-rose-400 uppercase tracking-widest font-bold">
                                                <Zap size={10} /> Execution Directive
                                            </div>
                                            <p className="text-sm font-semibold font-medium text-zinc-950">Enforce the &quot;Win Locker&quot; pattern: Zero PR approvals on quarantined domains until debt ratio decreases by 15%.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-amber-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                                    <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/20">
                                        <span className="text-amber-400 font-bold font-mono">02</span>
                                    </div>
                                    <div className="relative z-10 w-full">
                                        <h4 className="text-zinc-950 font-bold mb-2">Balance Sheet Refactoring</h4>
                                        <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">Structural maintenance debt must be capitalized as a core business function, not shadow IT work done on weekends.</p>
                                        <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-amber-400 uppercase tracking-widest font-bold">
                                                <Zap size={10} /> Execution Directive
                                            </div>
                                            <p className="text-sm font-semibold font-medium text-zinc-950">Set Jira sprint templates to automatically lock 20% of engineering points to &quot;Structural Neutralization&quot; before any feature work is scheduled.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-cyan-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                    <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                                        <span className="text-cyan-900 font-extrabold font-semibold font-bold font-mono">03</span>
                                    </div>
                                    <div className="relative z-10 w-full">
                                        <h4 className="text-zinc-950 font-bold mb-2">CFO Workflow Alignment</h4>
                                        <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">You are burning {formatMoney(results.financials.wastePerSprint)} per sprint cycle in overhead. This is no longer an engineering problem; it’s a capital efficiency crisis.</p>
                                        <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                            <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                                <Zap size={10} /> Execution Directive
                                            </div>
                                            <p className="text-sm font-semibold font-medium text-zinc-950">Route all maintenance spikes over $50k OpEx equivalent through formal CFO approval workflows using the PDI metric as the justification vehicle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Advisory Upsell */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border border-purple-500/20 rounded-2xl">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🎯</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold font-mono text-purple-600 uppercase tracking-wider mb-1">Want an Expert to Run This?</p>
                          <h4 className="text-lg font-bold text-zinc-950 mb-2">Get a forensic capital leak analysis with remediation plan</h4>
                          <p className="text-sm text-zinc-600 mb-4">You found the PDI score. A $2,500 Insolvency Audit locates the exact line items bleeding your R&D budget and builds the 90-day fix.</p>
                          <div className="flex flex-wrap gap-3">
                            <a href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-zinc-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Book Advisory Session →</a>
                            <a href="/api/buy/gut_check" className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-500/30 text-purple-700 text-sm font-bold rounded-lg hover:bg-purple-50 transition-colors">$450 Gut-Check Call →</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <DiagnosticProgression currentTool="pdi" score={results.score} />

                    {/* VAULT MONETIZATION UPSELL INJECTION */}
                    <VaultUpsell 
                        recommendedTracks={getRecommendedTracks(results.score, results.metrics.growth, results.debtVelocity)} 
                        urgencyLevel={results.score < 50 || results.metrics.growth < 30 ? 'critical' : 'growth'} 
                    />

                    {/* Action Footer */}
                    <ScrollReveal delay={300}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-zinc-400" data-html2canvas-ignore>
                            <button onClick={() => setResults(null)} className="text-zinc-950 text-sm font-semibold hover:text-zinc-900 underline underline-offset-4">← Run New Audit</button>
                            <ExportToPDFButton 
                                targetId="pdi-results-artifact" 
                                fileName={`Product_Debt_Index_${new Date().toISOString().split('T')[0]}.pdf`} 
                                onBeforeExport={handleSaveToVault} 
                            />
                            <Link href="/system" className="text-zinc-950 text-sm font-semibold hover:text-zinc-900">Explore All Tools →</Link>
                        </div>
                    </ScrollReveal>

                    {/* Social Proof */}
                    <ScrollReveal delay={300}>
                        <div className="text-center pt-8 pb-4">
                            <p className="text-xs font-bold text-zinc-900 font-bold mb-3">Trusted by product leaders at</p>
                            <div className="flex items-center justify-center gap-8 text-zinc-950 font-bold font-mono text-xs">
                                <span>Stripe</span>
                                <span>Figma</span>
                                <span>Linear</span>
                                <span>Notion</span>
                                <span>Vercel</span>
                            </div>
                        </div>
                    </ScrollReveal>
                    </div> {/* End PDF Export Zone */}
                </div>
            )
            }

            {/* BRIDGE: DIAGNOSTIC -> FRAMEWORK & EXOGRAM */}
            <div className="max-w-4xl mx-auto px-6">
                <DiagnosticBridge 
                    diagnosticName="Product Debt Index"
                    frameworkSlug="technical-insolvency-date"
                    frameworkName="Technical Insolvency Date"
                    frameworkDescription="The PDI measures your velocity towards Technical Insolvency—the quarter when maintenance costs consume 100% of engineering capacity and feature development drops to zero."
                    exogramRisk="Execution Variance"
                    exogramDescription="Stop relying on subjective engineering estimates. Exogram forces runtime observability, catching architectural drift before it turns into unmanageable technical debt."
                />
            </div>

            {/* MONETIZATION & LEAD CAPTURE: ToolGateCTA */}
            <ToolGateCTA toolName="Product Debt Index" />

            <ProgrammaticAnswersRelated seed="pdi-tool" maxCount={2} />

            {/* MONETIZATION ENGINE: PAYWALL MODAL */}
            {showPaywall && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm" data-html2canvas-ignore>
                    <div className="bg-white border border-zinc-400 rounded-3xl max-w-md w-full p-8 relative shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200 shrink-0">
                        {/* Lighting Fx */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
                                <Lock className="w-5 h-5 text-red-900 font-extrabold font-semibold" />
                            </div>
                            
                            <h3 className="text-3xl font-bold text-zinc-950 mb-2 font-grotesk tracking-tight">Limit Reached.</h3>
                            <p className="text-zinc-900 text-sm font-semibold mb-8 leading-relaxed">
                                You have consumed your allocation of 3 free diagnostic audits. Unlock the Full Library to save unlimited board-ready PDF reports directly to your Vault.
                            </p>
                            
                            <div className="space-y-3">
                                <a 
                                    href="/api/buy/tools_library_unlock" 
                                    onClick={() => setShowPaywall(false)}
                                    className="flex items-center justify-center w-full py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest text-xs font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02]"
                                >
                                    Unlock Library for $199
                                </a>
                                <button 
                                    onClick={() => setShowPaywall(false)} 
                                    className="flex items-center justify-center w-full py-3 bg-transparent hover:bg-white/5 text-zinc-900 font-bold uppercase tracking-widest text-xs font-bold rounded-xl transition-all"
                                >
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}
