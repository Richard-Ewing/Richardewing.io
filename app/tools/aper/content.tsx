'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, DollarSign, Lock, Zap, Users, Target, Mail, ArrowRight, Cpu, Clock, Building, Building2, Skull } from 'lucide-react';
import Link from 'next/link';
import ToolGate from '../../components/tool-gate';
import ToolCelebration from '../../components/ToolCelebration';
import ToolPayGate from '../../components/ToolPayGate';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { QPEPRemediation } from '../../components/QPEPRemediation';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { VaultUpsell } from '../../components/VaultUpsell';
import ShineBorder from '../../components/magicui/shine-border';
import { PersonaSwitcher } from '../../components/PersonaSwitcher';
import ProgrammaticAnswersRelated from '@/components/ProgrammaticAnswersRelated';
import { trackDiagnosticEvent } from '@/lib/telemetry/events';
import { saveDiagnosticSession, loadDiagnosticSession } from '@/lib/storage/session';
import { ExecutiveSummary } from '@/components/reports/ExecutiveSummary';
import { ExogramRecommendations } from '@/components/reports/ExogramRecommendations';
import { BenchmarkComparison } from '@/components/reports/BenchmarkComparison';
import { DiagnosticProgression } from '@/components/reports/DiagnosticProgression';
import { LongitudinalHistory } from '@/components/reports/LongitudinalHistory';
import { DiagnosticBridge } from '../../components/DiagnosticBridge';
import { calculateAperScore, AperScoreMetrics, TeamBreakdown } from '@/lib/diagnostics/aperScoring';
import { getAperPersonaInsight } from '@/lib/diagnostics/aperInterpretations';
import { Persona, formatMoney } from '@/lib/diagnostics/interpretations';

// --- MAGIC UI COMPONENTS ---

const NumberTicker = ({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        const start = 0;
        const end = value;
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (end - start) * easeOut;
            setDisplay(current);

            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [value]);

    return <span className="tabular-nums">{prefix}{display.toLocaleString('en-US', { maximumFractionDigits: 0 })}{suffix}</span>;
};

const BentoCard = ({ children, title, icon: Icon, className = '' }: { children: React.ReactNode; title: string; icon?: React.ComponentType<{ size?: number }>; className?: string }) => (
    <div className={`relative overflow-hidden rounded-2xl border border-zinc-400 bg-white/60 p-6 backdrop-blur-md ${className}`}>
        <div className="flex items-center gap-2 mb-4 text-zinc-900">
            {Icon && <Icon size={14} />}
            <span className="text-xs font-bold font-medium font-mono uppercase tracking-widest">{title}</span>
        </div>
        {children}
    </div>
);

// --- PERSONA TYPES ---
// Types are now imported.

export default function APERTool() {
    // Persona State
    const [persona, setPersona] = useState<Persona>('Founder');

    // Progressive Disclosure State
    const [step, setStep] = useState(1);

    // Basic Inputs
    const [arr, setArr] = useState('15000000');
    const [engineers, setEngineers] = useState('25');
    const [costPerEng, setCostPerEng] = useState('220000');

    // Enhanced Inputs
    const [teamBreakdown, setTeamBreakdown] = useState<TeamBreakdown>({
        frontend: 30,
        backend: 40,
        infra: 20,
        data: 10
    });
    const [avgTenure, setAvgTenure] = useState('18');
    const [hiringVelocity, setHiringVelocity] = useState('8');
    const [remotePercent, setRemotePercent] = useState('60');

    const [results, setResults] = useState<AperScoreMetrics | null>(null);
    const [loading, setLoading] = useState(false);
    const [showGate, setShowGate] = useState(false);

    useEffect(() => {
        trackDiagnosticEvent('diagnostic_started', 'aper');
        const saved = loadDiagnosticSession('aper');
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (saved) setResults(saved);
    }, []);

    const calculate = () => {
        setLoading(true);
        setTimeout(() => {
            const arrNum = parseFloat(arr) || 0;
            const engNum = parseFloat(engineers) || 1;
            const costNum = parseFloat(costPerEng) || 0;
            const tenureNum = parseFloat(avgTenure) || 12;
            const hiringNum = parseFloat(hiringVelocity) || 0;

            const metrics = calculateAperScore({
                arr: arrNum,
                engineers: engNum,
                costPerEng: costNum,
                avgTenure: tenureNum,
                hiringVelocity: hiringNum,
                remotePercent: parseFloat(remotePercent) || 0,
                teamBreakdown
            });

            setResults(metrics);
            saveDiagnosticSession('aper', metrics);
            trackDiagnosticEvent('diagnostic_completed', 'aper', { score: metrics.aper, waste: metrics.overheadCost });
            setLoading(false);

            // Silently persist to Supabase for longitudinal tracking
            fetch('/api/tools/runs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tool_id: 'aper',
                    run_data: { arr: arrNum, engineers: engNum, costPerEng: costNum, avgTenure: tenureNum, hiringVelocity: hiringNum, teamBreakdown },
                    output_metrics: metrics
                })
            }).catch(console.error);

        }, 800);
    };

    const getStatus = (aper: number) => {
        if (aper >= 600000) return { label: 'ELITE EFFICIENCY', color: 'text-cyan-900 font-extrabold font-semibold', desc: 'You are a software factory. Hire aggressively.' };
        if (aper >= 400000) return { label: 'HEALTHY', color: 'text-yellow-900 font-extrabold font-semibold', desc: 'On target. Optimize before scaling.' };
        if (aper >= 200000) return { label: 'BLOATED', color: 'text-orange-500', desc: 'Coordination overhead is eating your runway.' };
        return { label: 'CRITICAL', color: 'text-red-900 font-extrabold', desc: 'Immediate action required. Consider a RIF.' };
    };

    // Persona-specific insights are now imported



    return (
        <div className="min-h-screen bg-white text-zinc-950 font-bold selection:bg-cyan-500/30 font-sans">
            <ToolCelebration show={!!results} toolName="APER" />

            {/* HEADER */}
            <nav className="border-b border-zinc-400 bg-white/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_#eab308]" />
                        <span className="font-bold tracking-tight text-lg">APER™ <span className="text-zinc-950 font-bold font-normal">| Efficiency Diagnostic</span></span>
                    </div>
                    <Link href="/services" className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-900 hover:text-zinc-900 transition-colors uppercase tracking-widest">
                        <Lock size={12} />
                        Get Expert Help
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <AnimatePresence mode="wait">
                    {!results ? (
                        /* --- INPUT STATE --- */
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-12">
                                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-950 mb-6">
                                        Are You <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Overstaffed?</span>
                                    </h1>
                                    <p className="text-xl text-zinc-900">Calculate your Revenue Per Engineer before your board does.</p>
                                </div>

                                {/* PERSONA SELECTOR */}
                                <div className="mb-8 max-w-2xl mx-auto">
                                    <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3 text-center">I am a...</div>
                                        <PersonaSwitcher 
                                            activePersona={persona} 
                                            onChange={setPersona} 
                                            personas={[
                                                { id: 'Founder', label: 'Founder/CEO', icon: Target },
                                                { id: 'CPO', label: 'CPO/Product', icon: Users },
                                                { id: 'VP Eng', label: 'VP Engineering', icon: Cpu },
                                                { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
                                            ]}
                                        />
                                </div>

                                <div className="bg-white/40 p-8 rounded-3xl border border-zinc-400 backdrop-blur-sm shadow-2xl space-y-8">
                                    
                                    {/* STEP 1: CORE METRICS */}
                                    {step === 1 && (
                                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                            <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                                <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-900 font-extrabold font-semibold flex items-center justify-center font-bold font-mono text-sm font-semibold border border-yellow-500/30">1</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-zinc-900">Core Metrics</h3>
                                                    <p className="text-sm font-semibold text-zinc-900 font-medium">Define the top-line scale of engineering vs revenue.</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label htmlFor="arr" className="text-xs font-bold font-mono text-yellow-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Annual Revenue (ARR)</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">$</span>
                                                        <input id="arr" type="number" value={arr} onChange={(e) => setArr(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-yellow-500 focus:outline-none transition-colors" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="engineers" className="text-xs font-bold font-mono text-yellow-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Engineer Headcount</label>
                                                    <input id="engineers" type="number" value={engineers} onChange={(e) => setEngineers(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-yellow-500 focus:outline-none transition-colors" />
                                                </div>
                                                <div>
                                                    <label htmlFor="cost" className="text-xs font-bold font-mono text-yellow-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block">Fully-Loaded Cost/Eng</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">$</span>
                                                        <input id="cost" type="number" value={costPerEng} onChange={(e) => setCostPerEng(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-yellow-500 focus:outline-none transition-colors" />
                                                    </div>
                                                </div>
                                            </div>

                                            <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2">
                                                Next: Team Composition <ArrowRight size={16} />
                                            </button>
                                        </motion.div>
                                    )}

                                    {/* STEP 2: TEAM BREAKDOWN */}
                                    {step === 2 && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                            <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-900 font-extrabold font-semibold flex items-center justify-center font-bold font-mono text-sm font-semibold border border-orange-500/30">2</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-zinc-900">Team Composition</h3>
                                                    <p className="text-sm font-semibold text-zinc-900 font-medium">Break down how roles are distributed across headcount.</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {Object.entries(teamBreakdown).map(([key, val]) => (
                                                    <div key={key}>
                                                        <label className="text-sm font-semibold font-medium text-zinc-950 mb-1 block capitalize">{key}</label>
                                                        <div className="relative">
                                                            <input
                                                                type="number"
                                                                title={key}
                                                                aria-label={`Enter percentage for ${key}`}
                                                                value={val}
                                                                onChange={(e) => setTeamBreakdown({ ...teamBreakdown, [key]: parseInt(e.target.value) || 0 })}
                                                                className="w-full bg-white/50 border border-zinc-400 rounded-lg px-3 py-2 text-zinc-950 font-mono text-sm font-semibold focus:border-orange-500 focus:outline-none transition-colors"
                                                            />
                                                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-950 font-bold text-xs">%</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex gap-4">
                                                <button onClick={() => setStep(1)} className="w-1/3 py-4 bg-zinc-50 border border-zinc-400 text-zinc-950 font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all">
                                                    Back
                                                </button>
                                                <button onClick={() => setStep(3)} className="w-2/3 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-orange-400 transition-all flex items-center justify-center gap-2">
                                                    Next: Health Metrics <ArrowRight size={16} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 3: ENHANCED INPUTS */}
                                    {step === 3 && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                            <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                                <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold font-mono text-sm font-semibold border border-red-500/30">3</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-zinc-900">Health Metrics</h3>
                                                    <p className="text-sm font-semibold text-zinc-900 font-medium">Measure stability, retention, and friction.</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label htmlFor="tenure" className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block flex items-center gap-2">
                                                        <Clock size={12} /> Avg Tenure (Months)
                                                    </label>
                                                    <input id="tenure" type="number" value={avgTenure} onChange={(e) => setAvgTenure(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-red-500 focus:outline-none transition-colors" />
                                                </div>
                                                <div>
                                                    <label htmlFor="hiring" className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block flex items-center gap-2">
                                                        <Users size={12} /> Hires (Last 12mo)
                                                    </label>
                                                    <input id="hiring" type="number" value={hiringVelocity} onChange={(e) => setHiringVelocity(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-red-500 focus:outline-none transition-colors" />
                                                </div>
                                                <div>
                                                    <label htmlFor="remote" className="text-xs font-bold font-mono text-red-900 font-extrabold font-semibold uppercase tracking-widest mb-2 block flex items-center gap-2">
                                                        <Building size={12} /> Remote %
                                                    </label>
                                                    <input id="remote" type="number" value={remotePercent} onChange={(e) => setRemotePercent(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-red-500 focus:outline-none transition-colors" />
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <button onClick={() => setStep(2)} className="w-1/3 py-4 bg-zinc-50 border border-zinc-400 text-zinc-950 font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-all">
                                                    Back
                                                </button>
                                                <div className="w-2/3">
                                                    <ShineBorder borderColor="rgba(234, 179, 8, 0.6)" duration={2} className="w-full h-full p-0">
                                                        <button
                                                            onClick={() => setShowGate(true)}
                                                            disabled={loading}
                                                            className="w-full py-4 bg-white hover:bg-yellow-400 text-black font-bold uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                                        >
                                                            {loading ? (
                                                                <>
                                                                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                                    CALCULATING...
                                                                </>
                                                            ) : (
                                                                'RUN DIAGNOSTIC →'
                                                            )}
                                                        </button>
                                                    </ShineBorder>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {showGate && (
                                        <div className="mt-6">
                                            <ToolGate toolName="the APER Efficiency Diagnostic" toolSlug="aper" mappedCurriculumId="3-2" onUnlock={() => { setShowGate(false); calculate(); }}>
                                                <></>
                                            </ToolGate>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ) : (
                        /* --- RESULTS STATE --- */
                        <>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 relative">

                                {/* ACTION HEADER & PDF EXPORT */}
                                <div className="flex flex-col sm:flex-row items-center justify-between bg-white/60 border border-zinc-400 rounded-2xl p-6 mb-8 backdrop-blur-md">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-zinc-950 mb-1">Board-Ready Deliverable Generated</h2>
                                        <p className="text-sm font-semibold text-zinc-900 font-medium">Export this assessment to a verified Executive PDF.</p>
                                    </div>
                                    <ExportToPDFButton targetId="aper-pdf-export-zone" fileName={`APER_Assessment_${persona}.pdf`} />
                                </div>

                                {/* -------- PDF CAPTURE ZONE START -------- */}
                                <div id="aper-pdf-export-zone" className="space-y-8 bg-white p-2 sm:p-4 rounded-3xl">

                                {/* HERO SCORE */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="capsule-container rounded-2xl sm:rounded-[2rem] p-8 text-center mb-8"
                                >
                                    <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-4">REVENUE PER ENGINEER (APER)</div>
                                    <div className={`text-7xl md:text-8xl font-bold tracking-tighter ${getStatus(results.aper).color}`}>
                                        <NumberTicker value={results.aper} prefix="$" />
                                    </div>
                                    <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatus(results.aper).color.replace('text-', 'border-').replace('400', '500/30')} bg-white/5`}>
                                        <span className={`font-bold uppercase tracking-widest text-sm font-semibold ${getStatus(results.aper).color}`}>{getStatus(results.aper).label}</span>
                                    </div>
                                    <p className="mt-6 text-zinc-900 max-w-xl mx-auto">{getStatus(results.aper).desc}</p>
                                </motion.div>

                                {/* PERSONA-SPECIFIC INSIGHT */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                                >
                                    <BentoCard title={`Insight for ${persona}`} icon={Target} className="border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-zinc-900">{getAperPersonaInsight(persona, results).headline}</h3>
                                            <p className="text-zinc-900 leading-relaxed">{getAperPersonaInsight(persona, results).detail}</p>
                                            <p className="text-yellow-900 font-extrabold font-semibold">{getAperPersonaInsight(persona, results).action}</p>
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* METRICS GRID */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                    className="grid grid-cols-1 md:grid-cols-4 gap-6"
                                >
                                    <BentoCard title="Engineering Cost" icon={DollarSign}>
                                        <div className="text-3xl font-bold text-red-900 font-extrabold">
                                            <NumberTicker value={results.totalEngCost} prefix="$" />
                                        </div>
                                        <div className="text-zinc-950 text-xs font-bold mt-2">{results.engineers} engineers × {formatMoney(results.costPerEng)}</div>
                                    </BentoCard>

                                    <BentoCard title="Engineering Margin" icon={TrendingUp}>
                                        <div className={`text-3xl font-bold ${results.engineeringMargin >= 70 ? 'text-emerald-900 font-extrabold font-semibold' : results.engineeringMargin >= 50 ? 'text-yellow-900 font-extrabold font-semibold' : 'text-red-900 font-extrabold'}`}>
                                            <NumberTicker value={results.engineeringMargin} suffix="%" />
                                        </div>
                                        <div className="text-zinc-950 text-xs font-bold mt-2">Revenue after engineering</div>
                                    </BentoCard>

                                    <BentoCard title="Coordination Tax" icon={Clock} className="border-orange-500/20">
                                        <div className="text-3xl font-bold text-orange-900 font-extrabold font-semibold">
                                            {results.coordinationTax.toFixed(0)}%
                                        </div>
                                        <div className="text-zinc-950 text-xs font-bold mt-2">{formatMoney(results.overheadCost)}/yr lost</div>
                                    </BentoCard>

                                    <BentoCard title="Optimal Headcount" icon={Users} className="border-cyan-500/20">
                                        <div className="text-3xl font-bold text-cyan-900 font-extrabold font-semibold">
                                            {results.optimalHeadcount}
                                        </div>
                                        <div className="text-zinc-950 text-xs font-bold mt-2">
                                            {results.engineers > results.optimalHeadcount
                                                ? `${results.engineers - results.optimalHeadcount} over optimal`
                                                : `${results.optimalHeadcount - results.engineers} capacity available`
                                            }
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* CapEx Hemorrhage Horizon Matrix */}
                                <ToolPayGate toolName="APER Efficiency Diagnostic">
                                {results.valuationGap > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
                                    >
                                        <div className="capsule-container rounded-2xl p-6 mb-6 border border-red-500/30">
                                            <div className="flex items-center gap-2 mb-4">
                                                <TrendingDown className="w-4 h-4 text-red-500 animate-pulse" />
                                                <div className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">Corporate Solvency Matrix (CapEx Hemorrhage Horizon)</div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-400 relative overflow-hidden shrink-0">
                                                    <div className="absolute top-0 right-0 p-3 opacity-10"><Skull className="w-16 h-16 text-zinc-900" /></div>
                                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-2">Unrealized Revenue (Hemorrhage)</div>
                                                    <div className="text-3xl font-bold text-red-500">{formatMoney(results.revenueGap)}/yr</div>
                                                    <div className="text-xs font-bold text-zinc-900 font-bold/60 mt-2 mt-auto">ARR missing due to sub-optimal APER.</div>
                                                </div>
                                                <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-400 relative overflow-hidden shrink-0">
                                                    <div className="absolute top-0 right-0 p-3 opacity-10"><Building2 className="w-16 h-16 text-zinc-900" /></div>
                                                    <div className="text-sm font-semibold font-medium text-zinc-950 mb-2">Valuation Collapse Probability</div>
                                                    <div className="text-3xl font-bold text-orange-900 font-extrabold font-semibold">{formatMoney(results.valuationGap)}</div>
                                                    <div className="text-xs font-bold text-zinc-900 font-bold/60 mt-2 mt-auto">Lost Enterprise Value (assuming {results.valuationMultiple}x multiple). Down-round highly probable.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* TEAM HEALTH DASHBOARD */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                                >
                                    <div className="capsule-container rounded-2xl p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">Team Health Dashboard</div>
                                            <div className={`px-3 py-1 rounded-full text-xs font-bold ${results.teamHealthScore >= 75 ? 'bg-emerald-500/20 text-emerald-900 font-extrabold font-semibold' :
                                                results.teamHealthScore >= 50 ? 'bg-yellow-500/20 text-yellow-900 font-extrabold font-semibold' :
                                                    'bg-red-500/20 text-red-900 font-extrabold font-semibold'
                                                }`}>
                                                Health Score: {results.teamHealthScore}/100
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-sm font-semibold font-medium text-zinc-950 mb-1">Productivity Index</div>
                                                <div className="text-2xl font-bold text-emerald-900 font-extrabold font-semibold">{results.productivityIndex}/100</div>
                                                <div className="text-xs font-bold font-medium text-zinc-950 font-bold mt-1">APER + tenure + stability</div>
                                            </div>
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-sm font-semibold font-medium text-zinc-950 mb-1">New Hire Ramp Cost</div>
                                                <div className="text-2xl font-bold text-yellow-900 font-extrabold font-semibold">{formatMoney(results.newHireRampCost)}</div>
                                                <div className="text-xs font-bold font-medium text-zinc-950 font-bold mt-1">3-month productivity loss</div>
                                            </div>
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-sm font-semibold font-medium text-zinc-950 mb-1">Gap to Elite APER</div>
                                                <div className="text-2xl font-bold text-cyan-900 font-extrabold font-semibold">{results.revenueGap > 0 ? formatMoney(results.revenueGap) : '✓ Elite'}</div>
                                                <div className="text-xs font-bold font-medium text-zinc-950 font-bold mt-1">ARR needed for $600K/eng</div>
                                            </div>
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-sm font-semibold font-medium text-zinc-950 mb-1">Use Ratio</div>
                                                <div className="text-2xl font-bold text-purple-900 font-extrabold font-semibold">{results.leverageRatio.toFixed(1)}x</div>
                                                <div className="text-xs font-bold font-medium text-zinc-950 font-bold mt-1">Revenue per $ eng spend</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* BENCHMARK CHART */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                >
                                    <BentoCard title="Industry Benchmarks" icon={TrendingUp}>
                                        <div className="text-center mb-4">
                                            <div className="text-sm font-semibold text-zinc-900 font-medium">How you compare to industry standards</div>
                                        </div>
                                        <div className="h-64 w-full mt-4">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={results.benchmarks} layout="vertical" margin={{ left: 20 }}>
                                                    <XAxis type="number" hide />
                                                    <YAxis dataKey="name" type="category" width={120} tick={{ fill: '#71717a', fontSize: 11 }} />
                                                    <Tooltip
                                                        cursor={{ fill: 'transparent' }}
                                                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
                                                        formatter={(val) => val !== undefined ? formatMoney(Number(val)) : ''}
                                                    />
                                                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                                                        {results.benchmarks.map((entry, index: number) => (
                                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                                        ))}
                                                    </Bar>
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* EXECUTIVE SUMMARY + EMAIL CAPTURE */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                >
                                    <div className="mt-8 space-y-8">
                                        <ExecutiveSummary 
                                            tool="APER Efficiency Diagnostic" 
                                            persona={persona} 
                                            isAtRisk={results.aper < 400000}
                                            extraData={{ aper: results.aper }}
                                            freeChildren={
                                                <>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-yellow-900 font-extrabold font-semibold mt-1">•</span>
                                                        <span>APER of <strong className="text-zinc-900">{formatMoney(results.aper)}</strong>/engineer is {results.aper >= 500000 ? 'above' : 'below'} the $500K SaaS benchmark.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-yellow-900 font-extrabold font-semibold mt-1">•</span>
                                                        <span>Coordination tax of <strong className="text-zinc-900">{results.coordinationTax.toFixed(0)}%</strong> costs <strong className="text-red-900 font-extrabold font-semibold">{formatMoney(results.overheadCost)}/year</strong> in lost productivity.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-yellow-900 font-extrabold font-semibold mt-1">•</span>
                                                        <span>Optimal headcount is <strong className="text-zinc-900">{results.optimalHeadcount}</strong> engineers. You are {results.engineers > results.optimalHeadcount ? <strong className="text-orange-900 font-extrabold font-semibold">{results.engineers - results.optimalHeadcount} over</strong> : <strong className="text-cyan-900 font-extrabold font-semibold">{results.optimalHeadcount - results.engineers} under</strong>} optimal.</span>
                                                    </li>
                                                </>
                                            }
                                            gatedChildren={
                                                <div className="space-y-6">
                                                    <BenchmarkComparison tool="aper" userScore={results.aper} />
                                                    <LongitudinalHistory tool="aper" scoreKey="aper" />
                                                    <ExogramRecommendations score={results.aper < 400000 ? 40 : 80} maintenance={results.coordinationTax} />
                                                </div>
                                            }
                                        />
                                    </div>
                                </motion.div>

                                <DiagnosticProgression currentTool="aper" score={results.aper} />

                                <VaultUpsell 
                                    urgencyLevel={results.aper < 400000 ? 'critical' : 'growth'}
                                    recommendedTracks={[
                                        { id: 'TRACK-04', title: 'AI Unit Economics & Margin Collapse', desc: 'Identify bloat and restructure headcount to maximize enterprise valuation.' },
                                        { id: 'TRACK-09', title: 'Fractional AI Executive Integration', desc: 'Accelerate engineering velocity without adding to the coordination tax.' }
                                    ]} 
                                />

                                {/* Advisory Upsell */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border border-purple-500/20 rounded-2xl">
                                  <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <span className="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold font-mono text-purple-600 uppercase tracking-wider mb-1">Want an Expert to Run This?</p>
                                      <h4 className="text-lg font-bold text-zinc-950 mb-2">Get an engineering efficiency review with specific fixes</h4>
                                      <p className="text-sm text-zinc-600 mb-4">The APER gives you the ratio. A $500 Strategy Session with Richard Ewing identifies the exact bottlenecks, re-org options, and team structure changes to move the number.</p>
                                      <div className="flex flex-wrap gap-3">
                                        <a href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-zinc-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Book Advisory Session →</a>
                                        <a href="/api/buy/gut_check" className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-500/30 text-purple-700 text-sm font-bold rounded-lg hover:bg-purple-50 transition-colors">$450 Gut-Check Call →</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* ACTION FOOTER */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
                                >
                                    <button onClick={() => setResults(null)} className="text-zinc-950 text-sm font-semibold font-mono tracking-widest hover:text-zinc-900 uppercase">← Run New Analysis</button>
                                </motion.div>

                                {/* SOCIAL PROOF */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="text-center pt-8"
                                >
                                    <p className="text-xs font-bold text-zinc-900 font-bold mb-3">Trusted by product leaders at</p>
                                    <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-950 font-bold font-mono text-xs">
                                        <span>Stripe</span>
                                        <span>Figma</span>
                                        <span>Linear</span>
                                        <span>Notion</span>
                                        <span>Vercel</span>
                                    </div>
                                </motion.div>

                                {/* 3-STEP BOARD REMEDIATION PLAYBOOK */}
                                <div className="mt-12 pt-12 border-t border-zinc-400 relative z-10 text-left">
                                    <h3 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                        Phase 3: APER Headcount Optimization Playbook
                                    </h3>
                                    <p className="text-zinc-900 text-sm font-semibold mb-8">Execute this sequence immediately to right-size the engineering org and maximize velocity.</p>

                                    <div className="space-y-4">
                                        {/* Step 1 */}
                                        <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-rose-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                            <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/20">
                                                <span className="text-rose-400 font-bold font-mono">01</span>
                                            </div>
                                            <div className="relative z-10 w-full">
                                                <h4 className="text-zinc-950 font-bold mb-2">Freeze Middle-Management Roles</h4>
                                                <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">Adding Engineering Managers before accessing IC use only compounds your coordination tax.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-rose-400 uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-sm font-semibold font-medium text-zinc-950">Enact a 90-day hiring freeze for all non-IC roles. Direct saved CapEx back into developer tooling.</p>
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
                                                <h4 className="text-zinc-950 font-bold mb-2">Decouple Core Domain Boundaries</h4>
                                                <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">Cross-team dependencies drive high coordination taxes and slow overall velocity down geometrically.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-amber-400 uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-sm font-semibold font-medium text-zinc-950">Mandate strict API contracts between distinct product domains. Decouple release cycles entirely.</p>
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
                                                <h4 className="text-zinc-950 font-bold mb-2">Automate Repetitive QA</h4>
                                                <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">Over 30% of engineering bandwidth is consumed by manual testing blocks.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-sm font-semibold font-medium text-zinc-950">Configure LLM-based CI/CD steps that auto-generate basic test coverage for every PR merged.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                </ToolPayGate>

                                {/* -------- PDF CAPTURE ZONE END -------- */}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </main>

            {/* BRIDGE: DIAGNOSTIC -> FRAMEWORK & EXOGRAM */}
            <div className="max-w-4xl mx-auto px-6">
                <DiagnosticBridge 
                    diagnosticName="Algorithmic Product Engineering Ratio"
                    frameworkSlug="innovation-tax"
                    frameworkName="The Innovation Tax"
                    frameworkDescription="The APER highlights the Innovation Tax at scale. When headcount expands but velocity drops, you are paying a coordination tax that masquerades as R&D investment."
                    exogramRisk="Organizational Entropy"
                    exogramDescription="Stop throwing engineers at architectural problems. Exogram enforces structural boundaries so you can scale use without scaling headcount."
                />
            </div>
            
            <ProgrammaticAnswersRelated seed="aper-tool" maxCount={2} />
        </div>
    );
}
