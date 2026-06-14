'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain,
    ShieldAlert,
    Users,
    DollarSign,
    Clock,
    AlertTriangle,
    TrendingUp,
    Building2,
    Skull,
    ArrowRight,
    Eye,
    Zap,
    Target,
    BarChart3,
} from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import Link from 'next/link';

// --- RISK SLIDER COMPONENT ---
const RiskSlider = ({
    label,
    value,
    onChange,
    description,
    min = 0,
    max = 100,
    step = 1,
    suffix = '%',
}: {
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
        <div className="space-y-3 p-4 bg-white/60 rounded-xl border border-zinc-400 hover:border-purple-500/20 transition-colors group">
            <div className="flex justify-between items-center">
                <span className="text-base text-zinc-950 font-bold group-hover:text-purple-900 transition-colors">
                    {label}
                </span>
                <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-zinc-100 border border-zinc-400">
                    <span className="text-xs font-bold font-mono text-zinc-950">
                        {suffix === '$' ? `$${value.toLocaleString()}` : `${value}${suffix}`}
                    </span>
                </div>
            </div>
            <div className="relative pt-2 pb-1">
                <div className="absolute top-3 left-0 right-0 h-1 rounded-lg bg-zinc-200" />
                <div
                    className="absolute top-3 left-0 h-1 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500"
                    ref={(el) => {
                        if (el) el.style.width = `${percentage}%`;
                    }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    title={label}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="relative w-full h-1 bg-transparent appearance-none cursor-pointer z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                />
            </div>
            <p className="text-sm font-medium text-zinc-950 leading-relaxed pt-1">{description}</p>
        </div>
    );
};

// --- STAT CARD COMPONENT ---
const StatCard = ({
    label,
    value,
    sublabel,
    color = 'purple',
    icon: Icon,
}: {
    label: string;
    value: string;
    sublabel?: string;
    color?: 'purple' | 'red' | 'amber' | 'emerald';
    icon?: React.ComponentType<{ className?: string }>;
}) => {
    const colorMap = {
        purple: 'border-purple-500/20 bg-purple-500/5',
        red: 'border-red-500/20 bg-red-500/5',
        amber: 'border-amber-500/20 bg-amber-500/5',
        emerald: 'border-emerald-500/20 bg-emerald-500/5',
    };
    const textColorMap = {
        purple: 'text-purple-700',
        red: 'text-red-600',
        amber: 'text-amber-700',
        emerald: 'text-emerald-700',
    };

    return (
        <div className={`p-5 rounded-2xl border ${colorMap[color]} flex flex-col gap-1`}>
            <div className="flex items-center gap-2 mb-1">
                {Icon && <Icon className={`w-4 h-4 ${textColorMap[color]}`} />}
                <span className="text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    {label}
                </span>
            </div>
            <div className={`text-2xl lg:text-3xl font-bold tracking-tight ${textColorMap[color]}`}>
                {value}
            </div>
            {sublabel && (
                <span className="text-xs font-medium text-zinc-600 mt-1">{sublabel}</span>
            )}
        </div>
    );
};

// --- DONUT CHART ---
const DonutChart = ({ percentage, label }: { percentage: number; label: string }) => {
    const clampedPct = Math.min(Math.max(percentage, 0), 100);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (clampedPct / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-28 h-28">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#e4e4e7"
                        strokeWidth="8"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="url(#donutGrad)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />
                    <defs>
                        <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9333ea" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-zinc-950">{clampedPct.toFixed(1)}%</span>
                </div>
            </div>
            <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest text-center">
                {label}
            </span>
        </div>
    );
};

// --- HORIZONTAL BAR COMPONENT ---
const HorizontalBar = ({
    label,
    value,
    maxValue,
    color,
    prefix = '$',
}: {
    label: string;
    value: number;
    maxValue: number;
    color: string;
    prefix?: string;
}) => {
    const widthPercent = maxValue > 0 ? (Math.abs(value) / maxValue) * 100 : 0;
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <div className="w-full sm:w-40 text-xs font-bold font-mono text-zinc-950 sm:text-right hidden sm:block leading-tight">
                {label}
            </div>
            <div className="w-full sm:hidden text-xs font-bold font-mono text-zinc-900 uppercase tracking-widest">
                {label}
            </div>
            <div className="flex-1 w-full h-10 bg-zinc-50 border border-zinc-400 rounded-lg overflow-hidden relative">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${widthPercent}%` }}
                    className="absolute top-0 bottom-0 left-0 rounded-r-lg origin-left transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                    style={{ backgroundColor: color }}
                >
                    <span className="text-[11px] font-mono font-bold text-black drop-shadow-md whitespace-nowrap">
                        {prefix}
                        {value >= 1_000_000
                            ? `${(value / 1_000_000).toFixed(1)}M`
                            : `${(value / 1_000).toFixed(0)}k`}
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

// =========================================
// MAIN COMPONENT
// =========================================
export default function HallucinationTaxTool() {
    // --- INPUTS ---
    const [teamSize, setTeamSize] = useState<number>(50);
    const [avgSalary, setAvgSalary] = useState<number>(150000);
    const [verificationHours, setVerificationHours] = useState<number>(4.3);
    const [hallucinationRate, setHallucinationRate] = useState<number>(15);
    const [incidentCount, setIncidentCount] = useState<number>(3);
    const [costPerIncident, setCostPerIncident] = useState<number>(50000);

    // --- CALCULATION ENGINE ---
    const results = useMemo(() => {
        const hourlyRate = avgSalary / 2080;
        const annualVerificationTax = teamSize * verificationHours * hourlyRate * 52;
        const verificationTaxPerEmployee = annualVerificationTax / teamSize;
        const annualIncidentCost = incidentCount * costPerIncident;
        const totalHallucinationTax = annualVerificationTax + annualIncidentCost;
        const totalPayroll = teamSize * avgSalary;
        const payrollPercentage = totalPayroll > 0 ? (annualVerificationTax / totalPayroll) * 100 : 0;

        // Benchmark: $14,200/yr per employee industry average
        const benchmarkPerEmployee = 14200;
        const benchmarkTotal = teamSize * benchmarkPerEmployee;
        const vsIndustry = verificationTaxPerEmployee - benchmarkPerEmployee;

        return {
            hourlyRate,
            annualVerificationTax,
            verificationTaxPerEmployee,
            annualIncidentCost,
            totalHallucinationTax,
            totalPayroll,
            payrollPercentage,
            benchmarkPerEmployee,
            benchmarkTotal,
            vsIndustry,
        };
    }, [teamSize, avgSalary, verificationHours, hallucinationRate, incidentCount, costPerIncident]);

    const formatCurrency = (v: number) => {
        if (v >= 1_000_000) return `$${(v / 1_000_000).toFixed(2)}M`;
        if (v >= 1_000) return `$${(v / 1_000).toFixed(0)}k`;
        return `$${v.toFixed(0)}`;
    };

    const isSevere = results.totalHallucinationTax > results.totalPayroll * 0.15;

    return (
        <main className="min-h-screen bg-white pt-28 pb-20 selection:bg-purple-500/30 font-grotesk">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* --- HEADER --- */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <div className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-900 font-extrabold text-xs font-mono tracking-widest uppercase flex items-center gap-2">
                            <Brain className="w-3 h-3" />
                            AI Economics
                        </div>
                        <div className="px-2 py-1 rounded bg-white/5 text-zinc-900 text-xs font-bold font-mono tracking-widest uppercase border border-zinc-400">
                            Hallucination Tax
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-zinc-950 mb-6 tracking-tight leading-none">
                        Hallucination{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400">
                            Tax Calculator
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-900 max-w-3xl font-light leading-relaxed">
                        Your team spends{' '}
                        <span className="font-semibold text-purple-700">{verificationHours} hours/week</span>{' '}
                        verifying AI outputs. That&apos;s invisible labor taxing every employee.
                        Quantify the total cost of hallucination-induced verification, incidents,
                        and trust erosion across your organization.
                    </p>
                </div>

                <ToolGate toolSlug="hallucination-tax" toolName="Hallucination Tax Calculator">
                    {/* --- MAIN DASHBOARD --- */}
                    <div className="grid lg:grid-cols-12 gap-8 relative mt-16">
                        {/* --- LEFT COLUMN: CONTROLS --- */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Workforce Baseline */}
                            <div className="bg-white/50 border border-zinc-400 rounded-3xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl group hover:border-purple-500/30 transition-colors shrink-0">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                                <h3 className="text-zinc-950 font-grotesk font-bold text-xl mb-6 flex items-center gap-2 border-b border-zinc-400 pb-4">
                                    <Building2 className="w-5 h-5 text-purple-900" />
                                    Workforce Baseline
                                </h3>

                                <div className="space-y-4">
                                    <RiskSlider
                                        label="Team Size"
                                        value={teamSize}
                                        onChange={setTeamSize}
                                        min={5}
                                        max={500}
                                        step={5}
                                        suffix=" people"
                                        description="Total employees interacting with AI tools daily."
                                    />
                                    <RiskSlider
                                        label="Avg Fully-Loaded Salary"
                                        value={avgSalary}
                                        onChange={setAvgSalary}
                                        min={50000}
                                        max={300000}
                                        step={5000}
                                        suffix="$"
                                        description="Includes benefits, taxes, and overhead."
                                    />
                                </div>
                            </div>

                            {/* Verification Overhead */}
                            <div className="bg-white/50 border border-zinc-400 rounded-3xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl group hover:border-indigo-500/30 transition-colors shrink-0">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                                <h3 className="text-zinc-950 font-grotesk font-bold text-xl mb-6 flex items-center gap-2 border-b border-zinc-400 pb-4">
                                    <Eye className="w-5 h-5 text-indigo-900" />
                                    Verification Overhead
                                </h3>

                                <div className="space-y-4">
                                    <RiskSlider
                                        label="Hours/Week Verifying AI"
                                        value={verificationHours}
                                        onChange={setVerificationHours}
                                        min={1}
                                        max={20}
                                        step={0.1}
                                        suffix=" hrs"
                                        description="Average time per person checking, correcting, and validating AI outputs. Research default: 4.3 hrs."
                                    />
                                    <RiskSlider
                                        label="Hallucination Rate"
                                        value={hallucinationRate}
                                        onChange={setHallucinationRate}
                                        min={5}
                                        max={50}
                                        step={1}
                                        suffix="%"
                                        description="Estimated % of AI outputs requiring correction in your workflows. Industry range: 5–50%."
                                    />
                                </div>
                            </div>

                            {/* Incident Impact */}
                            <div className="bg-white/50 border border-zinc-400 rounded-3xl p-6 lg:p-8 relative overflow-hidden backdrop-blur-xl group hover:border-red-500/30 transition-colors shrink-0">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                                <h3 className="text-zinc-950 font-grotesk font-bold text-xl mb-6 flex items-center gap-2 border-b border-zinc-400 pb-4">
                                    <AlertTriangle className="w-5 h-5 text-red-700" />
                                    Production Incidents
                                </h3>

                                <div className="space-y-4">
                                    <RiskSlider
                                        label="AI-Caused Incidents (12mo)"
                                        value={incidentCount}
                                        onChange={setIncidentCount}
                                        min={0}
                                        max={50}
                                        step={1}
                                        suffix=" incidents"
                                        description="Production incidents traced to AI hallucinations or errors in the last 12 months."
                                    />
                                    <RiskSlider
                                        label="Avg Cost per Incident"
                                        value={costPerIncident}
                                        onChange={setCostPerIncident}
                                        min={5000}
                                        max={500000}
                                        step={5000}
                                        suffix="$"
                                        description="Include remediation labor, downtime, customer impact, and compliance costs."
                                    />
                                </div>
                            </div>

                            {/* Research Callout */}
                            <div className="p-5 rounded-2xl bg-purple-500/5 items-start flex gap-3 border border-purple-500/20">
                                <Brain className="w-5 h-5 text-purple-700 mt-1 flex-shrink-0" />
                                <div className="text-xs font-bold text-zinc-900">
                                    <strong className="text-zinc-950">
                                        The $67.4B Global Tax:
                                    </strong>{' '}
                                    Research indicates organizations spend an average of $14,200 per
                                    employee per year on AI verification labor alone — before
                                    counting production incidents. This invisible tax compounds
                                    silently across every department using AI.
                                </div>
                            </div>
                        </div>

                        {/* --- RIGHT COLUMN: RESULTS DASHBOARD --- */}
                        <div className="lg:col-span-8 flex flex-col gap-6" id="pdf-export-target">
                            {/* Hero Result */}
                            <div className="bg-white border border-zinc-400 rounded-3xl p-6 lg:p-10 relative overflow-hidden shadow-2xl shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5" />

                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-zinc-400 pb-6">
                                    <div>
                                        <div className="text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest mb-2">
                                            Total Hallucination Tax
                                        </div>
                                        <div className="flex items-end gap-4">
                                            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-red-500">
                                                {formatCurrency(results.totalHallucinationTax)}
                                            </h2>
                                            <span className="text-zinc-950 font-mono mb-2">
                                                / year
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0 flex gap-2 w-full md:w-auto">
                                        <div className="flex-1 md:flex-none text-center bg-white/50 border border-zinc-400 px-4 py-2 rounded-xl">
                                            <div className="text-xs font-bold uppercase font-mono text-zinc-950 mb-1">
                                                Verification Tax
                                            </div>
                                            <div className="text-lg font-bold text-purple-700">
                                                {formatCurrency(results.annualVerificationTax)}
                                            </div>
                                        </div>
                                        <div className="flex-1 md:flex-none text-center bg-white/50 border border-zinc-400 px-4 py-2 rounded-xl">
                                            <div className="text-xs font-bold uppercase font-mono text-zinc-950 mb-1">
                                                Incident Cost
                                            </div>
                                            <div className="text-lg font-bold text-red-600">
                                                {formatCurrency(results.annualIncidentCost)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Visual Breakdown Bars */}
                                <div className="relative z-10">
                                    <h3 className="text-sm font-semibold text-zinc-950 mb-6 uppercase tracking-wider font-mono">
                                        Cost Breakdown
                                    </h3>
                                    <div className="space-y-4 py-4">
                                        <HorizontalBar
                                            label="Verification Labor"
                                            value={results.annualVerificationTax}
                                            maxValue={results.totalHallucinationTax}
                                            color="#9333ea"
                                        />
                                        <HorizontalBar
                                            label="Production Incidents"
                                            value={results.annualIncidentCost}
                                            maxValue={results.totalHallucinationTax}
                                            color="#ef4444"
                                        />
                                        <HorizontalBar
                                            label="Total Tax"
                                            value={results.totalHallucinationTax}
                                            maxValue={results.totalHallucinationTax}
                                            color="#6366f1"
                                        />
                                    </div>
                                </div>

                                {/* Severe Warning */}
                                <AnimatePresence>
                                    {isSevere && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-8 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-4"
                                        >
                                            <div className="bg-red-500/20 p-2 rounded-lg">
                                                <Skull className="w-5 h-5 text-red-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-red-900 font-bold mb-1">
                                                    Critical Payroll Erosion Detected
                                                </h4>
                                                <p className="text-sm font-medium text-zinc-900">
                                                    AI hallucination costs exceed 15% of your total
                                                    payroll. Your organization is paying a
                                                    compounding tax on every AI interaction. This
                                                    requires immediate governance intervention.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Per-Employee + Benchmark Section */}
                            <div className="bg-white/50 border border-zinc-400 rounded-3xl p-6 lg:p-10 relative overflow-hidden backdrop-blur-xl shrink-0">
                                <div className="relative z-10">
                                    <h3 className="text-sm font-semibold text-zinc-950 mb-8 uppercase tracking-wider font-mono flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4" />
                                        Per-Employee Analysis &amp; Industry Benchmark
                                    </h3>

                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                        <StatCard
                                            label="Tax per Employee"
                                            value={formatCurrency(results.verificationTaxPerEmployee)}
                                            sublabel="Annual verification cost per person"
                                            color="purple"
                                            icon={Users}
                                        />
                                        <StatCard
                                            label="Industry Benchmark"
                                            value={formatCurrency(results.benchmarkPerEmployee)}
                                            sublabel="$14,200/yr avg per employee"
                                            color="amber"
                                            icon={TrendingUp}
                                        />
                                        <StatCard
                                            label={
                                                results.vsIndustry >= 0
                                                    ? 'Above Benchmark'
                                                    : 'Below Benchmark'
                                            }
                                            value={`${results.vsIndustry >= 0 ? '+' : '-'}${formatCurrency(Math.abs(results.vsIndustry))}`}
                                            sublabel="vs. industry average per employee"
                                            color={results.vsIndustry >= 0 ? 'red' : 'emerald'}
                                            icon={Target}
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                                        <DonutChart
                                            percentage={results.payrollPercentage}
                                            label="Payroll consumed by verification"
                                        />
                                        <div className="flex-1 space-y-4">
                                            <div className="flex gap-3 items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                                                <p className="text-zinc-950 text-base leading-relaxed">
                                                    <span className="font-bold">
                                                        {results.payrollPercentage.toFixed(1)}%
                                                    </span>{' '}
                                                    of your total payroll (
                                                    {formatCurrency(results.totalPayroll)}) is
                                                    consumed by AI verification overhead alone.
                                                </p>
                                            </div>
                                            <div className="flex gap-3 items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                                                <p className="text-zinc-950 text-base leading-relaxed">
                                                    At industry scale, this verification tax
                                                    represents{' '}
                                                    <span className="font-bold">
                                                        $67.4 billion globally
                                                    </span>{' '}
                                                    in invisible labor costs across all
                                                    organizations using AI.
                                                </p>
                                            </div>
                                            <div className="flex gap-3 items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                                                <p className="text-zinc-950 text-base leading-relaxed">
                                                    A{' '}
                                                    <span className="font-bold">
                                                        {hallucinationRate}% hallucination rate
                                                    </span>{' '}
                                                    means roughly{' '}
                                                    {(
                                                        teamSize *
                                                        verificationHours *
                                                        (hallucinationRate / 100) *
                                                        52
                                                    ).toFixed(0)}{' '}
                                                    hours/year are spent correcting fabricated
                                                    outputs across your team.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Advisory Upsell */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border border-purple-500/20 rounded-2xl">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                  <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                  <p className="text-xs font-bold font-mono text-purple-600 uppercase tracking-wider mb-1">Want an Expert to Run This?</p>
                                  <h4 className="text-lg font-bold text-zinc-950 mb-2">Eliminate your hallucination tax permanently</h4>
                                  <p className="text-sm text-zinc-600 mb-4">This calculator quantified the cost. A $5,000 Hallucination Tax Audit deploys retrieval-augmented verification across your AI stack and builds the feedback loops that kill fabrication at the source.</p>
                                  <div className="flex flex-wrap gap-3">
                                    <a href="/advisory" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-zinc-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Book Advisory Session →</a>
                                    <a href="/api/buy/gut_check" className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-500/30 text-purple-700 text-sm font-bold rounded-lg hover:bg-purple-50 transition-colors">$450 Gut-Check Call →</a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* CTA + Export Footer */}
                            <div className="bg-white/50 border border-zinc-400 rounded-3xl relative overflow-hidden backdrop-blur-xl shrink-0">
                                <div className="p-8 space-y-6">
                                    <div className="inline-flex px-3 py-1 bg-white/5 border border-zinc-400 rounded tracking-widest text-xs font-bold text-zinc-900 font-mono uppercase">
                                        Eliminate Your Hallucination Tax
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <Link
                                            href="/advisory"
                                            className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-zinc-900 hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                                        >
                                            <div>
                                                <div className="font-bold text-base mb-1">
                                                    Book a Hallucination Tax Audit
                                                </div>
                                                <div className="text-sm text-purple-200">
                                                    Expert-led assessment of your AI verification
                                                    costs
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                        </Link>

                                        <Link
                                            href="/tools/aueb"
                                            className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-white border-2 border-purple-200 text-zinc-950 hover:border-purple-400 hover:bg-purple-50/50 transition-all"
                                        >
                                            <div>
                                                <div className="font-bold text-base mb-1">
                                                    Run Full AI Economics Audit
                                                </div>
                                                <div className="text-sm text-zinc-600">
                                                    Comprehensive ROAI across all AI investments
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 flex-shrink-0 text-purple-600 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Tools Footer */}
                                <div className="mt-auto border-t border-zinc-400 bg-zinc-50 p-4 px-8 flex justify-between items-center">
                                    <div className="flex gap-4">
                                        <ExportToPDFButton
                                            targetId="pdf-export-target"
                                            fileName="hallucination-tax-audit.pdf"
                                        />
                                    </div>
                                    <div className="text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                                        Confidential Engine
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ToolGate>
            </div>
        </main>
    );
}
