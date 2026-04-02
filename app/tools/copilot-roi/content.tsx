'use client';

import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, LineChart, Code, ShieldAlert, Target, Users, Cpu, DollarSign, Download, ArrowRight, Zap, AlertTriangle, Building2, Skull } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';

// --- NATIVE CHARTING COMPONENT ---
// Reuses the identical standard native React component style applied in EV-SE for deterministic local compilation
const WaterfallChart = ({ data }: { data: { name: string; value: number; color: string; prefix?: string; suffix?: string }[] }) => {
    // For scaling to 100%, find max absolute value
    const maxValue = Math.max(...data.map(d => Math.abs(d.value)));
    const sectionId = useId().replace(/[^a-zA-Z0-9-]/g, '');

    return (
        <div className="space-y-4 py-6">
            {data.map((item, i) => {
                const isNegative = item.value < 0;
                const absValue = Math.abs(item.value);
                const widthPercent = maxValue > 0 ? (absValue / maxValue) * 100 : 0;
                
                return (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 relative group">
                        <div className="w-full sm:w-36 text-xs font-mono text-zinc-500 sm:text-right hidden sm:block leading-tight">{item.name}</div>
                        <div className="w-full sm:hidden text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{item.name}</div>
                        
                        <div className="flex-1 w-full h-10 bg-black/40 border border-white/5 rounded-lg overflow-hidden relative">
                            <motion.div 
                                initial={{ width: 0 }} 
                                animate={{ width: `${widthPercent}%` }} 
                                className={`absolute top-0 bottom-0 ${isNegative ? 'right-0 rounded-l-lg origin-right' : 'left-0 rounded-r-lg origin-left'} transition-all duration-1000 ease-out flex items-center ${isNegative ? 'justify-start pl-4' : 'justify-end pr-4'}`}
                                style={{ backgroundColor: item.color }}
                            >
                                <span className={`text-[11px] font-mono font-bold text-black drop-shadow-md`}>
                                    {item.prefix || ''}{(absValue / 1000).toFixed(0)}k{item.suffix || ''}
                                </span>
                            </motion.div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// --- RISK SLIDER COMPONENT ---
const RiskSlider = ({ label, value, onChange, description, min = 0, max = 100, step = 1, suffix = '%' }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
    description: string;
    min?: number;
    max?: number;
    step?: number;
    suffix?: string;
}) => {
    const percentage = ((value - min) / (max - min)) * 100;
    
    return (
        <div className="space-y-3 p-4 bg-zinc-900/40 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-colors group">
            <div className="flex justify-between items-center">
                <span className="text-sm text-white font-medium group-hover:text-cyan-400 transition-colors">{label}</span>
                <div className={`flex items-center gap-2 px-2 py-1 rounded-lg bg-black/30 border border-white/5`}>
                    <span className="text-xs font-mono text-zinc-300 font-bold">{value}{suffix}</span>
                </div>
            </div>
            <div className="relative pt-2 pb-1">
                <div className="absolute top-3 left-0 right-0 h-1 rounded-lg bg-zinc-800" />
                <div 
                    className="absolute top-3 left-0 h-1 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500" 
                    ref={(el) => { if (el) el.style.width = `${percentage}%`; }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    title={label}
                    onChange={e => onChange(Number(e.target.value))}
                    className="relative w-full h-1 bg-transparent appearance-none cursor-pointer z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                />
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed pt-1">{description}</p>
        </div>
    );
};

// --- PERSONA TYPES ---
type Persona = 'Founder' | 'CPO' | 'VP Eng' | 'CFO';

const PERSONAS: { id: Persona; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'Founder', label: 'Founder/CEO', icon: Target },
    { id: 'CPO', label: 'CPO/Product', icon: Users },
    { id: 'VP Eng', label: 'VP Eng/CTO', icon: Cpu },
    { id: 'CFO', label: 'CFO/Finance', icon: DollarSign },
];

export default function CopilotROITool() {
    const [activePersona, setActivePersona] = useState<Persona>('Founder');
    
    // Core Engineering Inputs
    const [teamSize, setTeamSize] = useState<number>(50);
    const [avgSalary, setAvgSalary] = useState<number>(150000);
    const [licenseCost, setLicenseCost] = useState<number>(360); // e.g. GitHub Copilot Enterprise

    // Performance & Drag Inputs
    const [assumedLift, setAssumedLift] = useState<number>(20); // Vendors usually claim 25-55%
    const [vibeDebt, setVibeDebt] = useState<number>(30); // % of code that introduces undetected debt
    const [reviewBottleneck, setReviewBottleneck] = useState<number>(2); // extra hours per week senior devs spend reviewing

    // ==========================================
    // MATHEMATICAL ENGINE: COPILOT ROI
    // ==========================================
    
    // 1. Costs
    const annualLicenseCost = teamSize * licenseCost;
    const teamAnnualPayroll = teamSize * avgSalary;
    
    // 2. Gross Lift (The vendor promise)
    // If developers are X% faster, we attribute that % of their salary as "value" generated or hours saved.
    const grossProductivityLiftDollar = teamAnnualPayroll * (assumedLift / 100);

    // 3. The Penalties
    // Penalty A: Vibe Coding Debt
    // Assumption: Of the new code generated (Lift), VibeDebt% requires massive refactoring downstream.
    // The typical cost to fix bugs in prod is 5x-10x the cost of writing it. We'll use a conservative 2x multiplier of the wage allocation.
    const vibeDebtDragDollar = grossProductivityLiftDollar * (vibeDebt / 100) * 1.5; 

    // Penalty B: Review Bottleneck
    // Junior devs pump out PRs. Senior devs must unravel the hallucinations.
    // Cost = (Hours) * (Average Hourly Rate approx Salary/2080) * (Team Size) * (52 Weeks)
    const hourlyRate = avgSalary / 2080;
    const reviewBottleneckDragDollar = (reviewBottleneck * hourlyRate * teamSize) * 52;

    // 4. Net Impact
    const netROAI_Dollar = grossProductivityLiftDollar - annualLicenseCost - vibeDebtDragDollar - reviewBottleneckDragDollar;
    const isNegativeReturn = netROAI_Dollar < 0;

    const waterfallData = [
        { name: 'Gross Promised Lift', value: grossProductivityLiftDollar, color: '#22c55e', prefix: '+$' },
        { name: 'License Subscriptions', value: -annualLicenseCost, color: '#f43f5e', prefix: '-$' },
        { name: 'Vibe Coding Debt Drag', value: -vibeDebtDragDollar, color: '#ea580c', prefix: '-$' },
        { name: 'PR Review Bottlenecks', value: -reviewBottleneckDragDollar, color: '#d946ef', prefix: '-$' },
        { name: 'Net Enterprise ROAI', value: netROAI_Dollar, color: isNegativeReturn ? '#ef4444' : '#10b981', prefix: netROAI_Dollar < 0 ? '-$' : '+$' },
    ];

    // Readouts based on Persona
    const getPersonaReadout = (): { title: string, insights: string[], alertText: string } => {
        switch (activePersona) {
            case 'CFO':
                return {
                    title: 'CapEx/OpEx Analysis',
                    insights: [
                        `Vendor promises $${(grossProductivityLiftDollar / 1000000).toFixed(2)}M in equivalent productivity, but net value destruction is driven by hidden OpEx.`,
                        `Vibe Debt alone acts as a $${(vibeDebtDragDollar / 1000000).toFixed(2)}M invisible tax on operating margins.`,
                        `Current setup indicates the licenses have an effective true cost of $${((annualLicenseCost + vibeDebtDragDollar + reviewBottleneckDragDollar) / teamSize).toFixed(0)} per seat when accounting for wage displacement.`
                    ],
                    alertText: isNegativeReturn ? 'STRUCTURAL MARGIN COLLAPSE DETECTED' : 'ROI IS HIGHLY SENSITIVE TO VIBE DEBT'
                };
            case 'VP Eng':
                return {
                    title: 'Capacity Destruction',
                    insights: [
                        `Senior engineers are burning ${reviewBottleneck} hours/week just reading AI-bloated Pull Requests, costing $${(reviewBottleneckDragDollar / 1000).toFixed(0)}k/year.`,
                        `${vibeDebt}% of generated LOC is technical liability, injecting $${(vibeDebtDragDollar / 1000).toFixed(0)}k in downstream maintenance debt.`,
                        `Your team's velocity throughput is a localized mirage. Gross code generation is up, but cycle times are increasing.`
                    ],
                    alertText: 'SENIOR ENGINEERING CAPACITY IS BEING DILUTED'
                };
            case 'CPO':
                return {
                    title: 'Delivery Velocity Mirage',
                    insights: [
                        `Features appear to enter QA faster, but ${vibeDebt}% hallucination rates are causing erratic sprint roll-overs.`,
                        `Code review bottlenecks are blocking critical path delivery by an aggregate ${reviewBottleneck * teamSize} hours per week.`,
                        `Downstream bug velocity is offsetting the ${assumedLift}% raw code generation gains.`
                    ],
                    alertText: 'FEATURE DELIVERY PREDICTABILITY THREATENED'
                };
            case 'Founder':
            default:
                return {
                    title: 'Enterprise Value Impact',
                    insights: [
                        `You are paying $${(annualLicenseCost / 1000).toFixed(0)}k directly to vendors to generate $${(vibeDebtDragDollar / 1000).toFixed(0)}k of compounding technical debt.`,
                        `The "Cost of Predictivity" implies you are buying code volume at the cost of senior engineer retention.`,
                        `Net Return on AI Investment (ROAI) creates a ${isNegativeReturn ? 'destructive' : 'positive'} $${(Math.abs(netROAI_Dollar) / 1000000).toFixed(2)}M swing in enterprise value.`
                    ],
                    alertText: isNegativeReturn ? 'AI LICENSING IS DESTROYING ENTERPRISE VALUE' : 'MAINTAIN EXTREME GOVERNANCE OVER CODE QUALITY'
                };
        }
    };

    const readout = getPersonaReadout();

    return (
        <main className="min-h-screen bg-black pt-28 pb-20 selection:bg-cyan-500/30 font-grotesk">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* --- HEADER --- */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
                            <Bot className="w-3 h-3" />
                            AI Enterprise Economics
                        </div>
                        <div className="px-2 py-1 rounded bg-white/5 text-zinc-400 text-[10px] font-mono tracking-widest uppercase border border-white/10">
                            Unit Cost Forecaster
                        </div>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
                        Copilot <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500">ROI Forecaster</span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl font-light leading-relaxed">
                        Vendors sell "Lines of Code Generated". You buy "Net Revenue Retention". Calculate how raw generative AI velocity is violently degraded by code review bottlenecks and Vibe Coding Debt.
                    </p>
                </div>

                <ToolGate toolSlug="copilot-roi" toolName="Copilot ROI Forecaster">
                    
                    {/* --- MAIN DASHBOARD LAYOUT --- */}
                    <div className="grid lg:grid-cols-12 gap-8 relative mt-16">
                        
                        {/* --- LEFT COLUMN: CONTROLS --- */}
                        <div className="lg:col-span-4 space-y-6">
                            
                            {/* Control Block 1: Baseline */}
                            <div className="bg-black/50 border border-white/10 rounded-3xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl group hover:border-cyan-500/30 transition-colors">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                
                                <h3 className="text-white font-grotesk font-bold text-xl mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                                    <Building2 className="w-5 h-5 text-cyan-400" />
                                    Engineering Baseline
                                </h3>

                                <div className="space-y-4">
                                    <RiskSlider 
                                        label="Engineering Headcount" 
                                        value={teamSize} 
                                        onChange={setTeamSize} 
                                        min={10} max={1000} step={10} suffix=" Devs"
                                        description="Total developers actively using the AI tool." 
                                    />
                                    <RiskSlider 
                                        label="Avg Fully-Loaded Salary" 
                                        value={avgSalary} 
                                        onChange={setAvgSalary} 
                                        min={50000} max={300000} step={5000} suffix="$"
                                        description="Includes benefits, taxes, and overhead." 
                                    />
                                    <RiskSlider 
                                        label="Annual AI License Cost/Seat" 
                                        value={licenseCost} 
                                        onChange={setLicenseCost} 
                                        min={100} max={2000} step={10} suffix="$"
                                        description="Per-dev yearly cost for GitHub Copilot, Cursor, etc." 
                                    />
                                </div>
                            </div>

                            {/* Control Block 2: Penalties */}
                            <div className="bg-black/50 border border-white/10 rounded-3xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl group hover:border-fuchsia-500/30 transition-colors">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                
                                <h3 className="text-white font-grotesk font-bold text-xl mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                                    <AlertTriangle className="w-5 h-5 text-fuchsia-400" />
                                    Execution Drag
                                </h3>

                                <div className="space-y-4">
                                    <RiskSlider 
                                        label="Assumed Productivity Lift" 
                                        value={assumedLift} 
                                        onChange={setAssumedLift} 
                                        min={0} max={100} step={5}
                                        description="Vendor-provided estimate of speed increase (usually ~30%)." 
                                    />
                                    <RiskSlider 
                                        label="Vibe Coding Debt" 
                                        value={vibeDebt} 
                                        onChange={setVibeDebt} 
                                        min={0} max={100} step={5}
                                        description="% of AI code merged with minimal downstream comprehension. Causes bug multipliers." 
                                    />
                                    <RiskSlider 
                                        label="Review Bottleneck Penalty" 
                                        value={reviewBottleneck} 
                                        onChange={setReviewBottleneck} 
                                        min={0} max={15} step={1} suffix=" hrs/wk"
                                        description="Extra hours senior devs spend scrutinizing AI-generated verbose PRs weekly." 
                                    />
                                </div>
                            </div>
                            
                            <div className="p-5 rounded-2xl bg-fuchsia-500/5 items-start flex gap-3 border border-fuchsia-500/20">
                                <Code className="w-5 h-5 text-fuchsia-400 mt-1 flex-shrink-0" />
                                <div className="text-xs text-zinc-400">
                                    <strong className="text-zinc-200">The Subprime Code Crisis:</strong> Vibe coding generates massive volumes of syntactically correct but architecturally flawed code. This calculator mathematically prices the downstream cost of unwinding that code.
                                </div>
                            </div>

                        </div>

                        {/* --- RIGHT COLUMN: MEGA DASHBOARD --- */}
                        <div className="lg:col-span-8 flex flex-col gap-6" id="pdf-export-target">
                            
                            {/* Main Math Block */}
                            <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 lg:p-10 relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-black to-fuchsia-500/5"></div>
                                
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-white/10 pb-6">
                                    <div>
                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Net Financial Position</div>
                                        <div className="flex items-end gap-4">
                                            <h2 className={`text-5xl lg:text-7xl font-bold tracking-tighter ${isNegativeReturn ? 'text-red-500' : 'text-emerald-500'}`}>
                                                {isNegativeReturn ? '-' : '+'}${Math.abs(netROAI_Dollar / 1000).toFixed(0)}k
                                            </h2>
                                            <span className="text-zinc-500 font-mono mb-2">/ year</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0 flex gap-2 w-full md:w-auto">
                                        <div className="flex-1 md:flex-none text-center bg-black/50 border border-white/10 px-4 py-2 rounded-xl">
                                            <div className="text-[10px] uppercase font-mono text-zinc-500 mb-1">Gross Expected Lift</div>
                                            <div className="text-lg font-bold text-emerald-400">${(grossProductivityLiftDollar / 1000).toFixed(0)}k</div>
                                        </div>
                                        <div className="flex-1 md:flex-none text-center bg-black/50 border border-white/10 px-4 py-2 rounded-xl">
                                            <div className="text-[10px] uppercase font-mono text-zinc-500 mb-1">Total Drag Penalties</div>
                                            <div className="text-lg font-bold text-red-400">-${((annualLicenseCost + vibeDebtDragDollar + reviewBottleneckDragDollar) / 1000).toFixed(0)}k</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider font-mono">Margin Degradation Waterfall</h3>
                                    <WaterfallChart data={waterfallData} />
                                </div>

                                {/* Warning Toast if severely negative */}
                                <AnimatePresence>
                                    {netROAI_Dollar < -(teamAnnualPayroll * 0.1) && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-4"
                                        >
                                            <div className="bg-red-500/20 p-2 rounded-lg">
                                                <Skull className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-red-400 font-bold mb-1">Terminal Insolvency Risk</h4>
                                                <p className="text-sm text-red-300/80">AI tool licensing combined with downstream review hours is displacing over 10% of total engineering capacity. Stop feature development and audit code review processes immediately.</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Persona Intelligence Block */}
                            <div className="bg-black/50 border border-white/10 rounded-3xl relative overflow-hidden backdrop-blur-xl flex flex-col h-full">
                                {/* Persona Tabs */}
                                <div className="flex overflow-x-auto border-b border-white/10 scrollbar-hide">
                                    {PERSONAS.map((p) => {
                                        const Icon = p.icon;
                                        const isActive = activePersona === p.id;
                                        return (
                                            <button
                                                key={p.id}
                                                onClick={() => setActivePersona(p.id)}
                                                className={`flex-1 min-w-[120px] px-4 py-5 flex items-center justify-center gap-2 text-sm font-medium transition-all border-b-2 font-mono uppercase tracking-wider ${
                                                    isActive 
                                                        ? 'border-cyan-500 text-cyan-400 bg-cyan-500/5' 
                                                        : 'border-transparent text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                                }`}
                                            >
                                                <Icon size={16} />
                                                {p.label}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Persona Content */}
                                <div className="p-8 flex-1">
                                    <motion.div
                                        key={activePersona}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded tracking-widest text-[10px] text-zinc-400 font-mono mb-4 uppercase">
                                            {readout.title}
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            {readout.insights.map((insight, idx) => (
                                                <div key={idx} className="flex gap-3 items-start group">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 opacity-50 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                                    <p className="text-zinc-300 text-lg leading-relaxed flex-1">
                                                        {insight}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={`p-4 rounded-xl border flex items-center gap-3 ${
                                            isNegativeReturn ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                                        }`}>
                                            <div className={`p-2 rounded-full ${isNegativeReturn ? 'bg-red-500/20' : 'bg-emerald-500/20'}`}>
                                                <ShieldAlert className="w-4 h-4" />
                                            </div>
                                            <span className="font-mono text-sm font-bold tracking-widest">{readout.alertText}</span>
                                        </div>
                                    </motion.div>
                                </div>
                                
                                {/* Tools Footer */}
                                <div className="mt-auto border-t border-white/10 bg-white/[0.02] p-4 px-8 flex justify-between items-center">
                                    <div className="flex gap-4">
                                        <ExportToPDFButton 
                                            targetId="pdf-export-target" 
                                            fileName={`copilot-roi-audit-${activePersona.toLowerCase()}.pdf`}
                                        />
                                    </div>
                                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Confidential Engine</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </ToolGate>
            </div>
        </main>
    );
}
