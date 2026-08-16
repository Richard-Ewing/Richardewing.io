'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ExportPDFButton from '@/components/ExportPDFButton';

export function ROICalculatorClient() {
    const [monthlySpend, setMonthlySpend] = useState<number>(15000);
    const [teamSize, setTeamSize] = useState<number>(25);
    const [governanceLevel, setGovernanceLevel] = useState<'none' | 'basic' | 'advanced'>('none');

    // Calculate Waste based on empirical multipliers
    // None: 38% waste, Basic: 22% waste, Advanced: 8% waste
    const wastePercentage = governanceLevel === 'none' ? 0.38 : governanceLevel === 'basic' ? 0.22 : 0.08;
    
    // Engineering capacity waste (~$15K/eng/mo fully loaded, 25% spent on tech debt in ungoverned teams)
    const engWasteRate = governanceLevel === 'none' ? 0.28 : governanceLevel === 'basic' ? 0.18 : 0.08;
    const monthlyEngCapacityWaste = teamSize * 15000 * engWasteRate;

    const monthlyApiWaste = monthlySpend * wastePercentage;
    const totalMonthlyWaste = monthlyApiWaste + monthlyEngCapacityWaste;
    const totalAnnualWaste = totalMonthlyWaste * 12;

    const pdiScore = Math.min(95, Math.round((wastePercentage * 120) + (teamSize * 0.4)));

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm space-y-8">
                <div>
                    <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-1">
                        Diagnostic Parameters
                    </h3>
                    <p className="text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider">
                        Adjust variables to calculate organizational leakage
                    </p>
                </div>

                {/* Field 1: Monthly AI Spend */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider">
                            Monthly AI / Token Spend ($)
                        </label>
                        <span className="text-base font-grotesk font-bold text-cyan-900">
                            ${monthlySpend.toLocaleString()}
                        </span>
                    </div>
                    <input
                        type="range"
                        min={1000}
                        max={200000}
                        step={1000}
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-800"
                    />
                    <div className="flex justify-between text-xs font-mono text-zinc-700 mt-1">
                        <span>$1K/mo</span>
                        <span>$100K/mo</span>
                        <span>$200K/mo</span>
                    </div>
                </div>

                {/* Field 2: Team Size */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider">
                            Engineering Team Size
                        </label>
                        <span className="text-base font-grotesk font-bold text-amber-900">
                            {teamSize} Engineers
                        </span>
                    </div>
                    <input
                        type="range"
                        min={5}
                        max={250}
                        step={5}
                        value={teamSize}
                        onChange={(e) => setTeamSize(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-amber-800"
                    />
                    <div className="flex justify-between text-xs font-mono text-zinc-700 mt-1">
                        <span>5 engs</span>
                        <span>100 engs</span>
                        <span>250 engs</span>
                    </div>
                </div>

                {/* Field 3: Governance Maturity */}
                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider mb-3">
                        Current Governance Maturity
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <button
                            type="button"
                            onClick={() => setGovernanceLevel('none')}
                            className={`py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                                governanceLevel === 'none'
                                    ? 'bg-rose-900 text-white border-rose-900 shadow-sm'
                                    : 'bg-zinc-50 text-zinc-800 border-zinc-300 hover:bg-zinc-100'
                            }`}
                        >
                            None / Ad-Hoc
                        </button>
                        <button
                            type="button"
                            onClick={() => setGovernanceLevel('basic')}
                            className={`py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                                governanceLevel === 'basic'
                                    ? 'bg-amber-900 text-white border-amber-900 shadow-sm'
                                    : 'bg-zinc-50 text-zinc-800 border-zinc-300 hover:bg-zinc-100'
                            }`}
                        >
                            Basic Gateways
                        </button>
                        <button
                            type="button"
                            onClick={() => setGovernanceLevel('advanced')}
                            className={`py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                                governanceLevel === 'advanced'
                                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                                    : 'bg-zinc-50 text-zinc-800 border-zinc-300 hover:bg-zinc-100'
                            }`}
                        >
                            Exogram Runtime
                        </button>
                    </div>
                </div>

            </div>

            {/* Diagnostic Results Display */}
            <div id="roi-results-card" className="lg:col-span-6 bg-zinc-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg">
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                            Estimated Capital Waste
                        </span>
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-mono rounded-md">
                            PDI Index: {pdiScore}/100
                        </span>
                    </div>

                    <div className="space-y-6 mb-8">
                        <div>
                            <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                                Estimated Monthly Leakage
                            </div>
                            <div className="text-4xl sm:text-5xl font-grotesk font-extrabold text-rose-400">
                                ${Math.round(totalMonthlyWaste).toLocaleString()}
                                <span className="text-sm font-normal text-zinc-400 font-mono"> / mo</span>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                                    Annual Margin Loss
                                </div>
                                <div className="text-2xl font-grotesk font-bold text-amber-300">
                                    ${Math.round(totalAnnualWaste).toLocaleString()}
                                </div>
                            </div>
                            <div>
                                <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                                    Recoverable Capacity
                                </div>
                                <div className="text-2xl font-grotesk font-bold text-cyan-300">
                                    {Math.round(wastePercentage * 100)}%
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-xs font-medium text-zinc-300 leading-relaxed mb-8">
                        <span className="font-mono font-bold text-amber-400 uppercase block mb-1">Diagnosis Summary:</span>
                        Based on an engineering team of {teamSize} and ${monthlySpend.toLocaleString()}/mo spend with {governanceLevel} governance, your organization is losing approximately ${Math.round(totalAnnualWaste).toLocaleString()} annually in dead token retries, unmonitored prompt bloat, and context maintenance.
                    </div>
                </div>

                <div className="space-y-3">
                    <ExportPDFButton
                        elementId="roi-results-card"
                        fileName="AI_Economics_ROI_Audit_Report.pdf"
                        buttonLabel="Download Boardroom PDF Audit Report"
                    />
                    <Link
                        href="/services"
                        className="w-full py-4 bg-amber-500 text-zinc-950 font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
                    >
                        Schedule $450 Rapid Audit to Recover Spend &rarr;
                    </Link>
                    <Link
                        href="/exogram/demo"
                        className="w-full py-3 bg-zinc-900 border border-zinc-700 text-zinc-200 font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                    >
                        Request Exogram Runtime Demo &rarr;
                    </Link>
                </div>
            </div>

        </div>
    );
}
