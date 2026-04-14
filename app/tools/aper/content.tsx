'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, DollarSign, Lock, Zap, Users, Target, Mail, ArrowRight, Cpu, Clock, Building, Building2, Skull } from 'lucide-react';
import Link from 'next/link';
import ToolGate from '../../components/tool-gate';
import ToolCelebration from '../../components/ToolCelebration';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { QPEPRemediation } from '../../components/QPEPRemediation';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import { VaultUpsell } from '../../components/VaultUpsell';
import ShineBorder from '../../components/magicui/shine-border';
import { PersonaSwitcher } from '../../components/PersonaSwitcher';

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
            <span className="text-[10px] font-mono uppercase tracking-widest">{title}</span>
        </div>
        {children}
    </div>
);

// --- PERSONA TYPES ---
type Persona = 'Founder' | 'CPO' | 'VP Eng' | 'CFO';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Founder', label: 'Founder/CEO', icon: Target },
    { id: 'CPO', label: 'CPO/Product', icon: Users },
    { id: 'VP Eng', label: 'VP Engineering', icon: Cpu },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

// --- MAIN APPLICATION ---

interface BenchmarkData {
    name: string;
    value: number;
    color: string;
}

interface TeamBreakdown {
    frontend: number;
    backend: number;
    infra: number;
    data: number;
}

interface Results {
    aper: number;
    engineeringMargin: number;
    multiplier: number;
    benchmarks: BenchmarkData[];
    totalEngCost: number;
    engineers: number;
    costPerEng: number;
    coordinationTax: number;
    optimalHeadcount: number;
    overheadCost: number;
    teamBreakdown: TeamBreakdown;
    // Enhanced metrics
    productivityIndex: number; // 0-100 score
    newHireRampCost: number; // Cost of onboarding a new hire
    teamHealthScore: number; // Overall team health 0-100
    revenueGap: number; // ARR needed to reach elite APER
    leverageRatio: number; // Revenue per $ of eng spend
    valuationGap: number; // Lost enterprise value due to APER inefficiency
    valuationMultiple: number; // Multiple used for valuation impact
}

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
            const arrNum = parseFloat(arr) || 0;
            const engNum = parseFloat(engineers) || 1;
            const costNum = parseFloat(costPerEng) || 0;
            const tenureNum = parseFloat(avgTenure) || 12;
            const hiringNum = parseFloat(hiringVelocity) || 0;

            const aper = arrNum / engNum;
            const totalEngCost = engNum * costNum;
            const engineeringMargin = ((arrNum - totalEngCost) / arrNum) * 100;
            const multiplier = arrNum / totalEngCost;

            // Coordination tax: increases with team size and decreases with tenure
            const baseCoordinationTax = 15; // 15% baseline
            const sizeMultiplier = Math.log2(engNum) / 4; // Logarithmic scaling
            const tenureDiscount = Math.min(tenureNum / 36, 0.5); // Max 50% discount for 3+ year tenure
            const coordinationTax = baseCoordinationTax * (1 + sizeMultiplier) * (1 - tenureDiscount);

            // Overhead cost calculation
            const overheadCost = totalEngCost * (coordinationTax / 100);

            // Optimal headcount based on ARR benchmarks
            const optimalAper = 500000; // Target $500K/engineer
            const optimalHeadcount = Math.floor(arrNum / optimalAper);

            // Enhanced metrics
            // Productivity Index: weighted score based on APER, tenure, and team composition
            const aperScore = Math.min(aper / 600000 * 40, 40); // Max 40 points
            const tenureScore = Math.min(tenureNum / 24 * 30, 30); // Max 30 points for 2+ years
            const stabilityScore = Math.max(0, 30 - (hiringNum / engNum * 100)); // Lower hiring velocity = higher score
            const productivityIndex = Math.round(aperScore + tenureScore + stabilityScore);

            // New hire ramp cost: 3 months to productivity + opportunity cost
            const rampMonths = 3;
            const newHireRampCost = (costNum / 12 * rampMonths) + (aper / 12 * rampMonths * 0.5); // Salary + 50% lost productivity

            // Team health score
            const balanceScore = 100 - Math.abs(50 - (teamBreakdown.frontend + teamBreakdown.backend)) * 2; // Penalty for imbalance
            const infrastructureBonus = teamBreakdown.infra >= 15 ? 10 : 0; // Bonus for proper infra investment
            const teamHealthScore = Math.round((productivityIndex * 0.6) + (balanceScore * 0.3) + (infrastructureBonus * 0.1));

            // Revenue gap to reach elite status
            const eliteAper = 600000;
            const targetAper = 500000;
            const revenueGap = Math.max(0, (targetAper * engNum) - arrNum);
            
            // Valuation impact (CapEx Hemorrhage)
            const valuationMultiple = 10;
            const valuationGap = revenueGap * valuationMultiple;

            // Leverage ratio
            const leverageRatio = arrNum / totalEngCost;

            const benchmarks: BenchmarkData[] = [
                { name: 'Your Company', value: aper, color: aper >= 600000 ? '#22d3ee' : aper >= 400000 ? '#facc15' : aper >= 200000 ? '#f97316' : '#dc2626' },
                { name: 'Elite SaaS', value: 650000, color: '#22d3ee' },
                { name: 'Good SaaS', value: 450000, color: '#facc15' },
                { name: 'Danger Zone', value: 200000, color: '#dc2626' },
            ];

            const payload = {
                aper, engineeringMargin, multiplier, benchmarks, totalEngCost,
                engineers: engNum, costPerEng: costNum, coordinationTax,
                optimalHeadcount, overheadCost, teamBreakdown,
                productivityIndex, newHireRampCost, teamHealthScore, revenueGap, leverageRatio, valuationGap, valuationMultiple
            };

            setResults(payload);
            setLoading(false);

            // Silently persist to Supabase for longitudinal tracking
            fetch('/api/tools/runs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tool_id: 'APER',
                    run_data: { arr: arrNum, engineers: engNum, costPerEng: costNum, avgTenure: tenureNum, hiringVelocity: hiringNum, teamBreakdown },
                    output_metrics: payload
                })
            }).catch(console.error);

        }, 800);
    };

    const getStatus = (aper: number) => {
        if (aper >= 600000) return { label: 'ELITE EFFICIENCY', color: 'text-cyan-400', desc: 'You are a software factory. Hire aggressively.' };
        if (aper >= 400000) return { label: 'HEALTHY', color: 'text-yellow-400', desc: 'On target. Optimize before scaling.' };
        if (aper >= 200000) return { label: 'BLOATED', color: 'text-orange-500', desc: 'Coordination overhead is eating your runway.' };
        return { label: 'CRITICAL', color: 'text-red-600', desc: 'Immediate action required. Consider a RIF.' };
    };

    // Persona-specific insights
    const getPersonaInsight = (results: Results): { headline: string; detail: string; action: string } => {
        const aper = results.aper;
        const headcountDelta = results.engineers - results.optimalHeadcount;
        const coordinationCost = results.overheadCost;

        switch (persona) {
            case 'Founder':
                if (aper < 300000) return {
                    headline: `⚠️ You need ${headcountDelta} fewer engineers.`,
                    detail: `At ${formatMoney(aper)}/engineer, you need ${Math.round(headcountDelta * 100 / results.engineers)}% ARR growth before your next hire makes financial sense. Your next raise will be dilutive.`,
                    action: 'Book a workforce optimization session before your next board meeting.'
                };
                if (aper < 500000) return {
                    headline: `Your next hire costs more than you think.`,
                    detail: `Each new engineer at your current APER requires ${formatMoney(500000)} in incremental ARR to break even. Do you have that growth?`,
                    action: 'Model the true cost of headcount before expanding.'
                };
                return {
                    headline: 'You have hiring runway.',
                    detail: `At ${formatMoney(aper)}/engineer, you can add ${results.optimalHeadcount - results.engineers} more engineers while maintaining elite efficiency.`,
                    action: 'Scale confidently. Focus on quality over speed.'
                };

            case 'CPO':
                const coordinationTime = results.coordinationTax * 40 / 100; // Hours per week per engineer
                return {
                    headline: `Each engineer loses ${coordinationTime.toFixed(1)} hrs/week to coordination.`,
                    detail: `That's ${Math.round(coordinationTime * results.engineers * 52)} hours/year of IC time consumed by meetings and context switching. Your velocity is ~${Math.round(100 - results.coordinationTax)}% of theoretical max.`,
                    action: 'Map your meeting load and kill the non-essential ones.'
                };

            case 'VP Eng':
                if (headcountDelta > 3) return {
                    headline: `You're ${headcountDelta} engineers over optimal capacity.`,
                    detail: `Brooks's Law is real: more engineers ≠ more output. Each marginal hire is adding ${formatMoney(coordinationCost / results.engineers)}/year in coordination overhead.`,
                    action: 'Consider team topology optimization before RIF.'
                };
                return {
                    headline: `Your team is efficiently sized.`,
                    detail: `At ${results.engineers} engineers, your coordination tax of ${results.coordinationTax.toFixed(0)}% is within acceptable bounds.`,
                    action: 'Focus on reducing per-engineer overhead through tooling.'
                };

            case 'CFO':
                const engineeringRoi = results.multiplier;
                return {
                    headline: `Engineering ROI: ${engineeringRoi.toFixed(1)}x.`,
                    detail: `For every $1 spent on engineering, you generate $${engineeringRoi.toFixed(2)} in revenue. ${engineeringRoi < 3 ? 'This is below the 3x benchmark for healthy SaaS.' : 'This is a healthy return on engineering investment.'}`,
                    action: `${engineeringRoi < 3 ? 'Model headcount scenarios for budget planning.' : 'Maintain discipline as you scale.'}`
                };

            default:
                return { headline: '', detail: '', action: '' };
        }
    };



    return (
        <div className="min-h-screen bg-white text-zinc-800 selection:bg-cyan-500/30 font-sans">
            <ToolCelebration show={!!results} toolName="APER" />

            {/* HEADER */}
            <nav className="border-b border-zinc-400 bg-white/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_#eab308]" />
                        <span className="font-bold tracking-tight text-lg">APER™ <span className="text-zinc-800 font-normal">| Efficiency Diagnostic</span></span>
                    </div>
                    <Link href="/advisory" className="flex items-center gap-2 text-xs font-mono text-zinc-900 hover:text-zinc-900 transition-colors uppercase tracking-widest">
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
                                    <div className="text-xs font-mono text-zinc-800 uppercase tracking-widest mb-3 text-center">I am a...</div>
                                    <PersonaSwitcher 
                                        activePersona={persona} 
                                        onChange={setPersona} 
                                        personas={PERSONAS}
                                    />
                                </div>

                                <div className="bg-white/40 p-8 rounded-3xl border border-zinc-400 backdrop-blur-sm shadow-2xl space-y-8">
                                    
                                    {/* STEP 1: CORE METRICS */}
                                    {step === 1 && (
                                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                            <div className="flex items-center gap-3 border-b border-zinc-400 pb-4">
                                                <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold font-mono text-sm border border-yellow-500/30">1</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-zinc-900">Core Metrics</h3>
                                                    <p className="text-sm text-zinc-900">Define the top-line scale of engineering vs revenue.</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label htmlFor="arr" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block">Annual Revenue (ARR)</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-900">$</span>
                                                        <input id="arr" type="number" value={arr} onChange={(e) => setArr(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 pl-7 text-zinc-950 font-mono focus:border-yellow-500 focus:outline-none transition-colors" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="engineers" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block">Engineer Headcount</label>
                                                    <input id="engineers" type="number" value={engineers} onChange={(e) => setEngineers(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-yellow-500 focus:outline-none transition-colors" />
                                                </div>
                                                <div>
                                                    <label htmlFor="cost" className="text-xs font-mono text-yellow-400 uppercase tracking-widest mb-2 block">Fully-Loaded Cost/Eng</label>
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
                                                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold font-mono text-sm border border-orange-500/30">2</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-zinc-900">Team Composition</h3>
                                                    <p className="text-sm text-zinc-900">Break down how roles are distributed across headcount.</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {Object.entries(teamBreakdown).map(([key, val]) => (
                                                    <div key={key}>
                                                        <label className="text-xs text-zinc-900 mb-1 block capitalize">{key}</label>
                                                        <div className="relative">
                                                            <input
                                                                type="number"
                                                                title={key}
                                                                aria-label={`Enter percentage for ${key}`}
                                                                value={val}
                                                                onChange={(e) => setTeamBreakdown({ ...teamBreakdown, [key]: parseInt(e.target.value) || 0 })}
                                                                className="w-full bg-white/50 border border-zinc-400 rounded-lg px-3 py-2 text-zinc-950 font-mono text-sm focus:border-orange-500 focus:outline-none transition-colors"
                                                            />
                                                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-800 text-xs">%</span>
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
                                                <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center font-bold font-mono text-sm border border-red-500/30">3</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-zinc-900">Health Metrics</h3>
                                                    <p className="text-sm text-zinc-900">Measure stability, retention, and friction.</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label htmlFor="tenure" className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2 block flex items-center gap-2">
                                                        <Clock size={12} /> Avg Tenure (Months)
                                                    </label>
                                                    <input id="tenure" type="number" value={avgTenure} onChange={(e) => setAvgTenure(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-red-500 focus:outline-none transition-colors" />
                                                </div>
                                                <div>
                                                    <label htmlFor="hiring" className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2 block flex items-center gap-2">
                                                        <Users size={12} /> Hires (Last 12mo)
                                                    </label>
                                                    <input id="hiring" type="number" value={hiringVelocity} onChange={(e) => setHiringVelocity(e.target.value)} className="w-full bg-white/50 border border-zinc-400 rounded-xl px-4 py-3 text-zinc-950 font-mono focus:border-red-500 focus:outline-none transition-colors" />
                                                </div>
                                                <div>
                                                    <label htmlFor="remote" className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2 block flex items-center gap-2">
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
                                            <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-zinc-950 mb-1">Board-Ready Deliverable Generated</h2>
                                        <p className="text-sm text-zinc-800">Export this assessment to a verified Executive PDF.</p>
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
                                    <div className="text-xs font-mono text-zinc-800 uppercase tracking-widest mb-4">REVENUE PER ENGINEER (APER)</div>
                                    <div className={`text-7xl md:text-8xl font-bold tracking-tighter ${getStatus(results.aper).color}`}>
                                        <NumberTicker value={results.aper} prefix="$" />
                                    </div>
                                    <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatus(results.aper).color.replace('text-', 'border-').replace('400', '500/30')} bg-white/5`}>
                                        <span className={`font-bold uppercase tracking-widest text-sm ${getStatus(results.aper).color}`}>{getStatus(results.aper).label}</span>
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
                                            <h3 className="text-2xl font-bold text-zinc-900">{getPersonaInsight(results).headline}</h3>
                                            <p className="text-zinc-900 leading-relaxed">{getPersonaInsight(results).detail}</p>
                                            <p className="text-yellow-400 font-semibold">{getPersonaInsight(results).action}</p>
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
                                        <div className="text-3xl font-bold text-red-600">
                                            <NumberTicker value={results.totalEngCost} prefix="$" />
                                        </div>
                                        <div className="text-zinc-950 text-xs mt-2">{results.engineers} engineers × {formatMoney(results.costPerEng)}</div>
                                    </BentoCard>

                                    <BentoCard title="Engineering Margin" icon={TrendingUp}>
                                        <div className={`text-3xl font-bold ${results.engineeringMargin >= 70 ? 'text-emerald-400' : results.engineeringMargin >= 50 ? 'text-yellow-400' : 'text-red-600'}`}>
                                            <NumberTicker value={results.engineeringMargin} suffix="%" />
                                        </div>
                                        <div className="text-zinc-950 text-xs mt-2">Revenue after engineering</div>
                                    </BentoCard>

                                    <BentoCard title="Coordination Tax" icon={Clock} className="border-orange-500/20">
                                        <div className="text-3xl font-bold text-orange-400">
                                            {results.coordinationTax.toFixed(0)}%
                                        </div>
                                        <div className="text-zinc-950 text-xs mt-2">{formatMoney(results.overheadCost)}/yr lost</div>
                                    </BentoCard>

                                    <BentoCard title="Optimal Headcount" icon={Users} className="border-cyan-500/20">
                                        <div className="text-3xl font-bold text-cyan-400">
                                            {results.optimalHeadcount}
                                        </div>
                                        <div className="text-zinc-950 text-xs mt-2">
                                            {results.engineers > results.optimalHeadcount
                                                ? `${results.engineers - results.optimalHeadcount} over optimal`
                                                : `${results.optimalHeadcount - results.engineers} capacity available`
                                            }
                                        </div>
                                    </BentoCard>
                                </motion.div>

                                {/* CapEx Hemorrhage Horizon Matrix */}
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
                                                <div className="text-xs font-mono uppercase tracking-widest text-zinc-900">Corporate Solvency Matrix (CapEx Hemorrhage Horizon)</div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-400 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-3 opacity-10"><Skull className="w-16 h-16 text-zinc-900" /></div>
                                                    <div className="text-xs text-zinc-950 mb-2">Unrealized Revenue (Hemorrhage)</div>
                                                    <div className="text-3xl font-bold text-red-500">{formatMoney(results.revenueGap)}/yr</div>
                                                    <div className="text-xs text-red-400/60 mt-2 mt-auto">ARR missing due to sub-optimal APER.</div>
                                                </div>
                                                <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-400 relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 p-3 opacity-10"><Building2 className="w-16 h-16 text-zinc-900" /></div>
                                                    <div className="text-xs text-zinc-950 mb-2">Valuation Collapse Probability</div>
                                                    <div className="text-3xl font-bold text-orange-400">{formatMoney(results.valuationGap)}</div>
                                                    <div className="text-xs text-orange-400/60 mt-2 mt-auto">Lost Enterprise Value (assuming {results.valuationMultiple}x multiple). Down-round highly probable.</div>
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
                                            <div className="text-xs font-mono text-zinc-800 uppercase tracking-widest">Team Health Dashboard</div>
                                            <div className={`px-3 py-1 rounded-full text-xs font-bold ${results.teamHealthScore >= 75 ? 'bg-emerald-500/20 text-emerald-400' :
                                                results.teamHealthScore >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-red-500/20 text-red-400'
                                                }`}>
                                                Health Score: {results.teamHealthScore}/100
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-xs text-zinc-950 mb-1">Productivity Index</div>
                                                <div className="text-2xl font-bold text-emerald-400">{results.productivityIndex}/100</div>
                                                <div className="text-[10px] text-zinc-800 mt-1">APER + tenure + stability</div>
                                            </div>
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-xs text-zinc-950 mb-1">New Hire Ramp Cost</div>
                                                <div className="text-2xl font-bold text-yellow-400">{formatMoney(results.newHireRampCost)}</div>
                                                <div className="text-[10px] text-zinc-800 mt-1">3-month productivity loss</div>
                                            </div>
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-xs text-zinc-950 mb-1">Gap to Elite APER</div>
                                                <div className="text-2xl font-bold text-cyan-400">{results.revenueGap > 0 ? formatMoney(results.revenueGap) : '✓ Elite'}</div>
                                                <div className="text-[10px] text-zinc-800 mt-1">ARR needed for $600K/eng</div>
                                            </div>
                                            <div className="bg-zinc-100 rounded-xl p-4">
                                                <div className="text-xs text-zinc-950 mb-1">Leverage Ratio</div>
                                                <div className="text-2xl font-bold text-purple-400">{results.leverageRatio.toFixed(1)}x</div>
                                                <div className="text-[10px] text-zinc-800 mt-1">Revenue per $ eng spend</div>
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
                                            <div className="text-sm text-zinc-900">How you compare to industry standards</div>
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
                                                        {results.benchmarks.map((entry: BenchmarkData, index: number) => (
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
                                    <div className="bg-gradient-to-br from-zinc-50 via-zinc-900/80 to-zinc-50/60 rounded-2xl p-8 border border-zinc-400">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-3 h-3 rounded-full animate-pulse ${results.aper < 400000 ? 'bg-orange-500' : 'bg-cyan-400'}`} />
                                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-900">Executive Summary</span>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-xl font-bold text-zinc-950 mb-4">📊 Board-Ready Insights</h3>
                                                <ul className="space-y-3 text-zinc-800">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-yellow-400 mt-1">•</span>
                                                        <span>APER of <strong className="text-zinc-900">{formatMoney(results.aper)}</strong>/engineer is {results.aper >= 500000 ? 'above' : 'below'} the $500K SaaS benchmark.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-yellow-400 mt-1">•</span>
                                                        <span>Coordination tax of <strong className="text-zinc-900">{results.coordinationTax.toFixed(0)}%</strong> costs <strong className="text-red-400">{formatMoney(results.overheadCost)}/year</strong> in lost productivity.</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-yellow-400 mt-1">•</span>
                                                        <span>Optimal headcount is <strong className="text-zinc-900">{results.optimalHeadcount}</strong> engineers. You are {results.engineers > results.optimalHeadcount ? <strong className="text-orange-400">{results.engineers - results.optimalHeadcount} over</strong> : <strong className="text-cyan-400">{results.optimalHeadcount - results.engineers} under</strong>} optimal.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <VaultUpsell 
                                    urgencyLevel={results.aper < 400000 ? 'critical' : 'growth'}
                                    recommendedTracks={[
                                        { id: 'TRACK-04', title: 'AI Unit Economics & Margin Collapse', desc: 'Identify bloat and restructure headcount to maximize enterprise valuation.' },
                                        { id: 'TRACK-09', title: 'Fractional AI Executive Integration', desc: 'Accelerate engineering velocity without adding to the coordination tax.' }
                                    ]} 
                                />

                                {/* ACTION FOOTER */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
                                >
                                    <button onClick={() => setResults(null)} className="text-zinc-950 text-sm font-mono tracking-widest hover:text-zinc-900 uppercase">← Run New Analysis</button>
                                </motion.div>

                                {/* SOCIAL PROOF */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className="text-center pt-8"
                                >
                                    <p className="text-xs text-zinc-800 mb-3">Trusted by product leaders at</p>
                                    <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-800 font-mono text-xs">
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
                                    <p className="text-zinc-900 text-sm mb-8">Execute this sequence immediately to right-size the engineering org and maximize velocity.</p>

                                    <div className="space-y-4">
                                        {/* Step 1 */}
                                        <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-rose-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                            <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/20">
                                                <span className="text-rose-400 font-bold font-mono">01</span>
                                            </div>
                                            <div className="relative z-10 w-full">
                                                <h4 className="text-zinc-950 font-bold mb-2">Freeze Middle-Management Roles</h4>
                                                <p className="text-zinc-900 text-sm leading-relaxed mb-4">Adding Engineering Managers before unlocking IC leverage only compounds your coordination tax.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-[10px] font-mono text-rose-400 uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-xs text-zinc-900">Enact a 90-day hiring freeze for all non-IC roles. Direct saved CapEx back into developer tooling.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Step 2 */}
                                        <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-amber-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                                            <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/20">
                                                <span className="text-amber-400 font-bold font-mono">02</span>
                                            </div>
                                            <div className="relative z-10 w-full">
                                                <h4 className="text-zinc-950 font-bold mb-2">Decouple Core Domain Boundaries</h4>
                                                <p className="text-zinc-900 text-sm leading-relaxed mb-4">Cross-team dependencies drive high coordination taxes and slow overall velocity down geometrically.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-xs text-zinc-900">Mandate strict API contracts between distinct product domains. Decouple release cycles entirely.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Step 3 */}
                                        <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-cyan-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                            <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                                                <span className="text-cyan-400 font-bold font-mono">03</span>
                                            </div>
                                            <div className="relative z-10 w-full">
                                                <h4 className="text-zinc-950 font-bold mb-2">Automate Repetitive QA</h4>
                                                <p className="text-zinc-900 text-sm leading-relaxed mb-4">Over 30% of engineering bandwidth is consumed by manual testing blocks.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-xs text-zinc-900">Configure LLM-based CI/CD steps that auto-generate basic test coverage for every PR merged.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                </div>

                                {/* -------- PDF CAPTURE ZONE END -------- */}

                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </main>

            {/* AUTHORITY CONTENT: APER */}
            <div className="max-w-4xl mx-auto mt-32 mb-24 space-y-16 px-6">
                <div className="prose prose-zinc prose-lg max-w-none">
                    <h2 className="text-4xl font-bold text-zinc-950 mb-8">The Most Dangerous Number in SaaS</h2>
                    <p className="text-zinc-900 leading-relaxed">
                        <strong>Revenue Per Employee (RPE)</strong> is the ultimate truth serum. In High-Leverage SaaS (the &quot;Elite&quot; zone), one engineer generates over $600k in ARR. In Low-Leverage SaaS (the &quot;Danger&quot; zone), one engineer generates less than $200k.
                    </p>
                    <p className="text-zinc-900 leading-relaxed">
                        The <strong>APER™ Diagnostic</strong> (Algorithmic Product Engineering Ratio) strips away the excuses. It ignores &quot;story points completed&quot; and &quot;lines of code written.&quot; It asks one question: <em>Is this organization converting human intelligence into capital efficiently?</em>
                    </p>
                </div>

                <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 p-8 rounded-xl border border-cyan-500/20">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">The Coordination Tax</h3>
                    <p className="text-zinc-950 mb-6">
                        Why does adding engineers often slow you down? <strong>Brooks&apos; Law.</strong>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div>
                            <h4 className="font-bold text-zinc-950 mb-2">Small Team (Elite)</h4>
                            <p className="text-zinc-900">Communication is implicit. Decisions are instant. Architecture is unified. High APER.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-zinc-950 mb-2">Large Team (Bloated)</h4>
                            <p className="text-zinc-900">Communication is scheduled. Decisions require committees. Architecture is fragmented. Low APER.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
