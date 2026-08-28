'use client';

import React, { useState } from 'react';
import { DollarSign, Landmark, TrendingDown, ArrowRight, PieChart } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

export default function CFOCapitalizationTool() {
    const [annualRDPayroll, setAnnualRDPayroll] = useState<number>(6500000);
    const [reportedInnovationPercent, setReportedInnovationPercent] = useState<number>(75);
    const [actualMaintenancePercent, setActualMaintenancePercent] = useState<number>(55);
    const [annualCloudGPUInference, setAnnualCloudGPUInference] = useState<number>(480000);

    // Calculations
    const reportedInnovationSpend = Math.round(annualRDPayroll * (reportedInnovationPercent / 100));
    const actualInnovationSpend = Math.round(annualRDPayroll * ((100 - actualMaintenancePercent) / 100));
    const innovationTaxWastedSpend = Math.max(0, reportedInnovationSpend - actualInnovationSpend);

    // Section 174 5-year domestic amortization impact
    const section174FirstYearDeduction = reportedInnovationSpend * 0.10; // 10% first year half-year convention
    const phantomTaxableIncomeImpact = Math.round(reportedInnovationSpend * 0.90 * 0.21); // 21% corp tax on delayed deduction

    return (
        <ToolGate toolName="CFO Capitalization Calculator">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-900 uppercase tracking-widest mb-3">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        CFO &amp; Finance &bull; Step 4 Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        CFO AI R&amp;D Capitalization &amp; <span className="text-emerald-600">Section 174 Audit</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Engineering reports 75% innovation, but audits reveal 55% maintenance. Calculate your true Innovation Tax, Section 174 amortization drag, and phantom tax liability.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Sliders */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                Corporate Financial &amp; R&amp;D Inputs
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-zinc-700 block mb-1">Total Annual Engineering &amp; R&amp;D Payroll ($)</label>
                                    <input
                                        type="number"
                                        min={500000}
                                        max={50000000}
                                        step={250000}
                                        value={annualRDPayroll}
                                        onChange={(e) => setAnnualRDPayroll(Math.max(100000, parseInt(e.target.value) || 100000))}
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-emerald-500"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Reported % of R&amp;D on New Capabilities</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">{reportedInnovationPercent}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={30}
                                        max={95}
                                        step={5}
                                        value={reportedInnovationPercent}
                                        onChange={(e) => setReportedInnovationPercent(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Actual Forensic Maintenance Burden (%)</label>
                                        <span className="text-xs font-mono font-bold text-rose-600">{actualMaintenancePercent}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={15}
                                        max={85}
                                        step={5}
                                        value={actualMaintenancePercent}
                                        onChange={(e) => setActualMaintenancePercent(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-zinc-700 block mb-1">Annual AI Cloud GPU &amp; Inference Token Spend ($)</label>
                                    <input
                                        type="number"
                                        min={10000}
                                        max={10000000}
                                        step={25000}
                                        value={annualCloudGPUInference}
                                        onChange={(e) => setAnnualCloudGPUInference(Math.max(0, parseInt(e.target.value) || 0))}
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Calculations */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">
                                    Disguised Maintenance Waste (Innovation Tax)
                                </div>
                                <div className="text-4xl font-extrabold font-grotesk text-rose-600">
                                    ${innovationTaxWastedSpend.toLocaleString()} <span className="text-xs font-mono text-zinc-500">/ yr</span>
                                </div>
                                <div className="text-xs text-zinc-600 mt-1">
                                    OpEx masquerading as capitalized innovation spend.
                                </div>
                            </div>

                            {/* Tax & Capitalization */}
                            <div className="space-y-3 pt-3 border-t border-zinc-200 text-xs">
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-600 font-medium">True Innovation Investment:</span>
                                    <span className="font-mono font-bold text-emerald-700">${actualInnovationSpend.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-600 font-medium">Section 174 Amortization Drag:</span>
                                    <span className="font-mono font-bold text-zinc-900">5-Year Amortization Required</span>
                                </div>
                                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-300 flex justify-between items-center">
                                    <span className="text-xs font-bold text-zinc-900">Section 174 Delayed Tax Drag:</span>
                                    <span className="text-sm font-mono font-bold text-rose-600">${phantomTaxableIncomeImpact.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/workspace/finance"
                                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                                >
                                    Book CFO Capital Audit &rarr;
                                </Link>
                                <ExportToPDFButton targetId="cfo-calc" fileName="cfo-rd-capitalization-audit.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-2">
                            <div className="font-bold text-emerald-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Connection
                            </div>
                            <p className="text-emerald-900 leading-relaxed">
                                Maps to <Link href="/glossary/innovation-tax" className="underline font-bold">The Innovation Tax</Link> and <Link href="/framework/economics" className="underline font-bold">AI Economics &amp; Margin Engineering</Link>.
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
