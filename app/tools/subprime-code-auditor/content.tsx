'use client';

import React, { useState } from 'react';
import { Landmark } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

export default function SubprimeCodeAuditorTool() {
    const [linesOfCode, setLinesOfCode] = useState<number>(240000);
    const [aiCodePercentage, setAiCodePercentage] = useState<number>(45);
    const [testCoverage, setTestCoverage] = useState<number>(38);
    const [engineerHeadcount, setEngineerHeadcount] = useState<number>(18);
    const [averageEngineerCost, setAverageEngineerCost] = useState<number>(175000);
    const [monthlyBugRegressions, setMonthlyBugRegressions] = useState<number>(24);

    // Calculations
    const testPenalty = Math.max(0, (70 - testCoverage) * 0.7);
    const aiRiskFactor = (aiCodePercentage / 100) * 40;
    const regressionPenalty = Math.min(30, monthlyBugRegressions * 0.8);

    const subprimeRiskScore = Math.min(100, Math.round(testPenalty + aiRiskFactor + regressionPenalty));
    const maintenanceCapacityPercent = Math.min(95, Math.round(35 + (subprimeRiskScore * 0.55)));
    const quartersToInsolvency = Math.max(1, Math.round((100 - maintenanceCapacityPercent) / 3.5));

    const annualEngineeringPayroll = engineerHeadcount * averageEngineerCost;
    const wastedPayrollAnnual = Math.round(annualEngineeringPayroll * (maintenanceCapacityPercent / 100));
    const valuationDiscount = Math.round(wastedPayrollAnnual * 1.5);

    let riskTier = 'Severe Technical Insolvency Exposure';
    let riskBadgeColor = 'bg-rose-50 text-rose-800 border-rose-200';
    if (subprimeRiskScore < 35) {
        riskTier = 'Low Subprime Risk (Well-Governed)';
        riskBadgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
    } else if (subprimeRiskScore < 60) {
        riskTier = 'Moderate Subprime Accumulation';
        riskBadgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
    }

    return (
        <ToolGate toolName="Subprime Code Risk Auditor">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-900 uppercase tracking-widest mb-3">
                        <Landmark className="w-3.5 h-3.5 text-rose-600" />
                        PE Due Diligence &bull; Step 4 Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        Subprime Code <span className="text-rose-600">Risk Auditor (SCRA)</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        When teams generate code 4x faster with unconstrained AI without writing unit tests, they create &ldquo;subprime code&rdquo; - fast to ship, catastrophic to maintain. Calculate the balance-sheet refactor discount.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Sliders */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                Target Codebase Parameters
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Estimated % of AI-Generated / Copilot Code</label>
                                        <span className="text-xs font-mono font-bold text-rose-600">{aiCodePercentage}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={0}
                                        max={95}
                                        step={5}
                                        value={aiCodePercentage}
                                        onChange={(e) => setAiCodePercentage(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Automated Unit Test Coverage (%)</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">{testCoverage}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={5}
                                        max={95}
                                        step={5}
                                        value={testCoverage}
                                        onChange={(e) => setTestCoverage(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Monthly Bug Regressions &amp; Hotfixes</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">{monthlyBugRegressions} / mo</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={2}
                                        max={60}
                                        step={2}
                                        value={monthlyBugRegressions}
                                        onChange={(e) => setMonthlyBugRegressions(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-zinc-200">
                                    <div>
                                        <label className="text-xs font-bold text-zinc-700 block mb-1">Total Lines of Code (LOC)</label>
                                        <input
                                            type="number"
                                            min={10000}
                                            max={5000000}
                                            step={10000}
                                            value={linesOfCode}
                                            onChange={(e) => setLinesOfCode(Math.max(1000, parseInt(e.target.value) || 1000))}
                                            className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-rose-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-zinc-700 block mb-1">Engineering Team Headcount</label>
                                        <input
                                            type="number"
                                            min={1}
                                            max={200}
                                            value={engineerHeadcount}
                                            onChange={(e) => setEngineerHeadcount(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-rose-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Liability & Insolvency Projection */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">Subprime Code Risk Score</div>
                                <div className="flex items-baseline gap-3">
                                    <div className="text-5xl font-extrabold font-grotesk text-rose-600">{subprimeRiskScore}</div>
                                    <div className="text-xl font-mono font-bold text-zinc-400">/ 100</div>
                                </div>
                                <div className={'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 border ' + riskBadgeColor}>
                                    {riskTier}
                                </div>
                            </div>

                            {/* Technical Insolvency Horizon */}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-300 space-y-2">
                                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                                    Sprint Maintenance Capacity Drag
                                </div>
                                <div className="text-2xl font-bold font-mono text-zinc-950">
                                    {maintenanceCapacityPercent}% <span className="text-xs text-zinc-500 font-normal">of sprint capacity consumed by bugs</span>
                                </div>
                                <p className="text-[11px] text-zinc-600 leading-normal">
                                    Estimated <strong>{quartersToInsolvency} quarters</strong> until 100% of engineering bandwidth is consumed by maintenance (Technical Insolvency Date).
                                </p>
                            </div>

                            {/* Valuation Write-Down Liability */}
                            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-1">
                                <div className="text-[10px] font-mono text-rose-900 font-bold uppercase tracking-wider">
                                    Suggested M&amp;A Technical Debt Escrow / Discount
                                </div>
                                <div className="text-3xl font-bold font-mono text-rose-950">
                                    ${valuationDiscount.toLocaleString()}
                                </div>
                                <p className="text-[10px] text-rose-800">
                                    Required capital adjustment to refactor un-maintainable AI boilerplate post-acquisition.
                                </p>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/workspace/strategy"
                                    className="text-xs font-bold text-rose-700 hover:text-rose-900 hover:underline"
                                >
                                    Book PE Technical Audit &rarr;
                                </Link>
                                <ExportToPDFButton targetId="subprime-code-calc" fileName="subprime-code-risk-audit.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs space-y-2">
                            <div className="font-bold text-rose-950 uppercase font-mono tracking-wider">
                                Sovereign Concept Connection
                            </div>
                            <p className="text-rose-900 leading-relaxed">
                                Directly maps to <Link href="/concepts/subprime-code-crisis" className="underline font-bold">Subprime Code Crisis</Link> and <Link href="/concepts/vibe-coding" className="underline font-bold">Vibe Coding Debt</Link>.
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
