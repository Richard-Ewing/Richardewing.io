"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, ArrowUpRight, AlertTriangle, CheckCircle2, Activity } from 'lucide-react';

export default function EngineeringCapitalPage() {
    const [teamSize, setTeamSize] = useState<number>(25);
    const [avgSalary, setAvgSalary] = useState<number>(185000);
    const [maintenanceRatioPct, setMaintenanceRatioPct] = useState<number>(38);
    const [verificationHoursPerWeek, setVerificationHoursPerWeek] = useState<number>(5.5);

    const totalSalaryBudget = teamSize * avgSalary;
    const maintenanceDebtCost = Math.round(totalSalaryBudget * (maintenanceRatioPct / 100));
    const annualVerificationTax = Math.round(teamSize * (verificationHoursPerWeek / 40) * avgSalary);
    const productDebtIndex = Math.max(10, 100 - maintenanceRatioPct);
    const monthsToInsolvency = Math.max(4, Math.round(36 - (maintenanceRatioPct * 0.6)));

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-800 mb-6">
                    <Link href="/dashboard" className="hover:text-cyan-600 transition-colors">Console</Link>
                    <span>/</span>
                    <span className="text-zinc-900 font-semibold">Engineering Capital</span>
                </div>

                {/* Header */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                                <Cpu className="w-5 h-5 text-violet-700" />
                            </div>
                            <span className="text-sm font-mono text-violet-700 font-bold uppercase tracking-wider">Product 2 • CTO & VP Engineering</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">Engineering Capital & Technical Insolvency</h1>
                        <p className="text-zinc-900 text-sm mt-2 max-w-2xl">
                            Evaluates whether engineering throughput creates enterprise value or accumulates technical insolvency and manual verification debt.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link href="/tools/pdi" className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg text-sm transition-colors flex items-center gap-2">
                            <Activity className="w-4 h-4" /> Run PDI Audit
                        </Link>
                    </div>
                </header>

                {/* Interactive Controls & Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    
                    {/* Controls */}
                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
                        <h2 className="text-lg font-grotesk font-bold text-zinc-900 border-b border-zinc-100 pb-3">Engineering Profile</h2>
                        
                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Systems Engineers Count ({teamSize})</label>
                            <input 
                                type="number" 
                                value={teamSize}
                                onChange={(e) => setTeamSize(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-violet-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Avg Annual Fully Loaded Comp ($)</label>
                            <input 
                                type="number" 
                                value={avgSalary}
                                onChange={(e) => setAvgSalary(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-violet-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Maintenance & Refactoring Burden ({maintenanceRatioPct}%)</label>
                            <input 
                                type="range" 
                                min="10" 
                                max="70" 
                                value={maintenanceRatioPct}
                                onChange={(e) => setMaintenanceRatioPct(Number(e.target.value))}
                                className="w-full accent-violet-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">AI Code Verification (hrs/eng/week)</label>
                            <input 
                                type="number" 
                                step="0.5"
                                value={verificationHoursPerWeek}
                                onChange={(e) => setVerificationHoursPerWeek(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-violet-500"
                            />
                        </div>
                    </div>

                    {/* KPI Display */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-zinc-800 uppercase tracking-widest font-bold">Product Debt Index</span>
                                <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{productDebtIndex} / 100</h3>
                                <p className="text-xs text-zinc-800 mt-1 font-mono">Higher indicates healthier capacity</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                                <span className="text-zinc-800">Maintenance Drag: ${maintenanceDebtCost.toLocaleString()}/yr</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-bold">Technical Insolvency Forecast</span>
                                <h3 className="text-3xl font-grotesk font-bold text-amber-800 mt-2">{monthsToInsolvency} Months</h3>
                                <p className="text-xs text-zinc-800 mt-1 font-mono">Time until maintenance exceeds 50% capacity</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                                <span className="text-zinc-800">Status: {monthsToInsolvency < 18 ? 'High Insolvency Risk' : 'Manageable'}</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm sm:col-span-2 flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-xs font-mono text-violet-700 uppercase tracking-widest font-bold">Verification Overhead Tax</span>
                                    <h3 className="text-4xl font-grotesk font-bold text-violet-800 mt-2">${annualVerificationTax.toLocaleString()} / yr</h3>
                                    <p className="text-sm text-zinc-900 mt-1">
                                        Total compensation spent manually reviewing non-deterministic, AI-generated code snippets and prompt outputs.
                                    </p>
                                </div>
                                <div className="p-3 bg-violet-50 border border-violet-200 rounded-xl text-violet-800 font-bold">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                                <span className="text-xs font-mono text-zinc-800">Calculated via EV/SE & Hallucination Audit engines</span>
                                <Link href="/tools/ev-se" className="text-xs font-bold text-violet-700 hover:text-violet-800 flex items-center gap-1">
                                    EV/SE Calculator <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Directive & Architecture Plan */}
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                    <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-violet-700" /> CTO Engineering Capital Action Items
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-violet-700 font-bold">1. Deterministic Boundaries</span>
                            <h4 className="font-bold text-zinc-900">Isolate AI Generation</h4>
                            <p className="text-xs text-zinc-900">Require all AI agent pull requests to be scoped to strictly sandboxed, fully tested sub-components.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-violet-700 font-bold">2. Automated Lint Verification</span>
                            <h4 className="font-bold text-zinc-900">Automated Static Analysis</h4>
                            <p className="text-xs text-zinc-900">Install pre-commit verification scripts to filter out hallucinatory syntax before code review.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-violet-700 font-bold">3. Technical Debt Repayment</span>
                            <h4 className="font-bold text-zinc-900">Refactoring Allocation</h4>
                            <p className="text-xs text-zinc-900">Dedicate 20% of sprint points strictly to architectural debt remediation to push back insolvency dates.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
