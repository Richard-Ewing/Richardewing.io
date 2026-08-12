"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, TrendingDown } from 'lucide-react';

export default function BudgetLeakCalculator() {
    const [teamSize, setTeamSize] = useState<number>(20);
    const [monthlySpend, setMonthlySpend] = useState<number>(15000);
    const [focusArea, setFocusArea] = useState<string>("billing");

    // Calculation logic for estimated waste (typically 18% to 35% of AI & engineering spend)
    const annualSpend = monthlySpend * 12;
    const estimatedWasteMin = Math.round(annualSpend * 0.18);
    const estimatedWasteMax = Math.round(annualSpend * 0.35);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <div className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                        <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-extrabold text-white font-grotesk tracking-tight">10-Second Budget Leak Calculator</h3>
                        <p className="text-xs text-slate-400 font-medium">Estimate your enterprise's unmonitored AI & engineering capital loss</p>
                    </div>
                </div>

                {/* Inputs */}
                <div className="space-y-5 mb-6">
                    {/* Team size slider */}
                    <div>
                        <div className="flex justify-between items-center text-xs font-semibold mb-2">
                            <span className="text-slate-300">Engineering & AI Staff Size:</span>
                            <span className="text-violet-400 font-mono font-bold text-sm">{teamSize} Employees</span>
                        </div>
                        <input
                            type="range"
                            min="5"
                            max="200"
                            step="5"
                            value={teamSize}
                            onChange={(e) => setTeamSize(Number(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
                        />
                    </div>

                    {/* Monthly Spend slider */}
                    <div>
                        <div className="flex justify-between items-center text-xs font-semibold mb-2">
                            <span className="text-slate-300">Estimated Monthly AI & Cloud Bill:</span>
                            <span className="text-emerald-400 font-mono font-bold text-sm">{formatCurrency(monthlySpend)}/mo</span>
                        </div>
                        <input
                            type="range"
                            min="2000"
                            max="100000"
                            step="2000"
                            value={monthlySpend}
                            onChange={(e) => setMonthlySpend(Number(e.target.value))}
                            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                    </div>

                    {/* Primary Concern */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">Primary Risk Vector:</label>
                        <select
                            value={focusArea}
                            onChange={(e) => setFocusArea(e.target.value)}
                            className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-violet-500"
                        >
                            <option value="billing">Unpredictable AI API Invoices (Billing Shock)</option>
                            <option value="security">Unmonitored Employees Pasting Internal Data into LLMs</option>
                            <option value="code">AI Code Maintenance Inflation & Technical Debt</option>
                        </select>
                    </div>
                </div>

                {/* Calculation Result */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 mb-6 text-center">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">Estimated Annual Budget Leak</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-violet-300 to-amber-300 font-mono">
                        {formatCurrency(estimatedWasteMin)} – {formatCurrency(estimatedWasteMax)} / yr
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                        <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                        Based on standard 18%–35% unmonitored inference & labor overhead metrics
                    </p>
                </div>

                {/* Action CTA */}
                <Link
                    href="/assessment"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-xs hover:opacity-90 transition-all shadow-lg shadow-violet-600/30 uppercase tracking-wider"
                >
                    Get Free Detailed Financial Audit Report
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
