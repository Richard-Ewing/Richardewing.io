'use client';

import React, { useState } from 'react';
import { GitPullRequest, DollarSign, Clock, Users, ArrowRight } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

export default function CodeReviewBottleneckTool() {
    const [engineerHeadcount, setEngineerHeadcount] = useState<number>(24);
    const [seniorRatio, setSeniorRatio] = useState<number>(40);
    const [avgSeniorSalary, setAvgSeniorSalary] = useState<number>(195000);
    const [monthlyPRs, setMonthlyPRs] = useState<number>(380);
    const [avgHoursPerReview, setAvgHoursPerReview] = useState<number>(2.5);

    // Calculations
    const seniorEngineers = Math.max(1, Math.round(engineerHeadcount * (seniorRatio / 100)));
    const totalReviewHoursMonthly = monthlyPRs * avgHoursPerReview;
    const reviewHoursPerSeniorMonthly = Math.round(totalReviewHoursMonthly / seniorEngineers);
    const reviewCapacityPercent = Math.min(100, Math.round((reviewHoursPerSeniorMonthly / 160) * 100));

    const seniorHourlyRate = avgSeniorSalary / 2000;
    const annualReviewPayrollSpend = Math.round(totalReviewHoursMonthly * seniorHourlyRate * 12);
    const recapturablePayrollWithGates = Math.round(annualReviewPayrollSpend * 0.60);

    let bottleneckTier = 'Severe PR Review Gridlock';
    let tierColor = 'bg-rose-50 text-rose-800 border-rose-200';
    if (reviewCapacityPercent < 25) {
        bottleneckTier = 'Optimal Review Throughput';
        tierColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
    } else if (reviewCapacityPercent < 50) {
        bottleneckTier = 'Moderate Review Drag';
        tierColor = 'bg-amber-50 text-amber-800 border-amber-200';
    }

    return (
        <ToolGate toolName="Code Review Bottleneck Calculator">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-3">
                        <GitPullRequest className="w-3.5 h-3.5 text-cyan-600" />
                        Engineering SDLC &bull; Step 4 Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        AI Code Review <span className="text-cyan-600">Bottleneck Calculator</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        When AI tools generate code in seconds, the bottleneck shifts from writing syntax to reviewing synthetic PRs. Calculate the exact payroll drag of senior engineers acting as human compilers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Sliders */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                Engineering Org Parameters
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Total Engineering Headcount</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">{engineerHeadcount} engineers</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={5}
                                        max={150}
                                        step={1}
                                        value={engineerHeadcount}
                                        onChange={(e) => setEngineerHeadcount(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Monthly Pull Request Volume</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">{monthlyPRs} PRs / mo</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={50}
                                        max={2000}
                                        step={25}
                                        value={monthlyPRs}
                                        onChange={(e) => setMonthlyPRs(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Avg Time Spent per PR Review (Hours)</label>
                                        <span className="text-xs font-mono font-bold text-rose-600">{avgHoursPerReview} hrs / PR</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={0.5}
                                        max={6.0}
                                        step={0.5}
                                        value={avgHoursPerReview}
                                        onChange={(e) => setAvgHoursPerReview(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-zinc-200">
                                    <div>
                                        <label className="text-xs font-bold text-zinc-700 block mb-1">Senior / Staff Ratio (%)</label>
                                        <input
                                            type="number"
                                            min={10}
                                            max={90}
                                            step={5}
                                            value={seniorRatio}
                                            onChange={(e) => setSeniorRatio(Math.max(5, parseInt(e.target.value) || 5))}
                                            className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-cyan-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-zinc-700 block mb-1">Avg Senior Loaded Salary ($)</label>
                                        <input
                                            type="number"
                                            min={100000}
                                            max={400000}
                                            step={10000}
                                            value={avgSeniorSalary}
                                            onChange={(e) => setAvgSeniorSalary(Math.max(50000, parseInt(e.target.value) || 50000))}
                                            className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-cyan-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Output */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">
                                    Senior Engineer Review Drag
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <div className="text-5xl font-extrabold font-grotesk text-rose-600">{reviewCapacityPercent}%</div>
                                    <div className="text-xs font-mono text-zinc-500">of senior bandwidth consumed by reviews</div>
                                </div>
                                <div className={'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 border ' + tierColor}>
                                    {bottleneckTier}
                                </div>
                            </div>

                            {/* Monthly Breakdown */}
                            <div className="space-y-3 pt-3 border-t border-zinc-200 text-xs">
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-600 font-medium">Total Review Hours / Mo:</span>
                                    <span className="font-mono font-bold text-zinc-900">{totalReviewHoursMonthly.toLocaleString()} hrs</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-600 font-medium">Annual Review Payroll Spend:</span>
                                    <span className="font-mono font-bold text-rose-600">${annualReviewPayrollSpend.toLocaleString()} / yr</span>
                                </div>
                            </div>

                            {/* Recapturable Bandwidth */}
                            <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200 space-y-1">
                                <div className="text-[10px] font-mono text-cyan-900 font-bold uppercase tracking-wider">
                                    Annual Value of Automated Compiler Gates
                                </div>
                                <div className="text-3xl font-bold font-mono text-cyan-950">
                                    ${recapturablePayrollWithGates.toLocaleString()}
                                </div>
                                <p className="text-[10px] text-cyan-800">
                                    60% of review time is saved by mechanical type checks and diff bounding before PR assignment.
                                </p>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/workspace/engineering"
                                    className="text-xs font-bold text-cyan-700 hover:text-cyan-900 hover:underline"
                                >
                                    Book Engineering SDLC Audit &rarr;
                                </Link>
                                <ExportToPDFButton targetId="review-calc" fileName="code-review-bottleneck-audit.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-cyan-50/70 border border-cyan-200 text-xs space-y-2">
                            <div className="font-bold text-cyan-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Connection
                            </div>
                            <p className="text-cyan-900 leading-relaxed">
                                Directly links to <Link href="/framework/engineering" className="underline font-bold">The 3-Tier Agentic Control Plane</Link> and <Link href="/glossary/pillars/agentic-governance-engineering" className="underline font-bold">Agentic SDLC</Link>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <DiagnosticCTA />
                </div>
            </div>
        </ToolGate>
    );
}
