"use client";

import React, { useState } from 'react';
import { Network, Activity, BarChart2, ShieldAlert, ArrowRight, Building } from 'lucide-react';
import Link from 'next/link';

// Mock data simulating aggregated organizational telemetry
const orgData = {
    name: "Acme Corp Global",
    industry: "SaaS",
    overallPdi: 64, // Organization average
    overallAueb: 42,
    divisions: [
        { name: 'Platform Engineering', pdi: 71, aueb: 38, status: 'High Risk', trend: '+12 (Worsening)' },
        { name: 'AI Research', pdi: 42, aueb: 65, status: 'Stable', trend: '-5 (Improving)' },
        { name: 'Customer Systems', pdi: 63, aueb: 45, status: 'Warning', trend: '+2 (Stable)' }
    ]
};

export default function EnterpriseDashboard() {
    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                                <Building className="w-5 h-5" />
                            </span>
                            <span className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-500">Enterprise Observability</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">{orgData.name}</h1>
                        <p className="text-zinc-600 mt-2 font-medium">Cross-departmental governance and hallucination debt tracking.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-right">
                            <p className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-500 mb-1">Org Avg PDI</p>
                            <p className="text-3xl font-grotesk font-bold text-zinc-900">{orgData.overallPdi}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-500 mb-1">Org Avg AUEB</p>
                            <p className="text-3xl font-grotesk font-bold text-zinc-900">{orgData.overallAueb}%</p>
                        </div>
                    </div>
                </header>

                {/* Synthesis Insight */}
                <div className="mb-12 p-6 bg-purple-50 border border-purple-200 rounded-2xl flex gap-4 items-start">
                    <Activity className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                    <div>
                        <h3 className="text-sm font-bold font-mono uppercase tracking-widest text-purple-900 mb-2">Autonomous Governance Insight</h3>
                        <p className="text-purple-950 font-medium leading-relaxed">
                            Platform Engineering is carrying a disproportionate share of the organization's technical insolvency risk (PDI: 71). Their hallucination verification burden is compressing global AI margins. It is highly recommended to route this division through the Exogram Deterministic Simulation to establish runtime policy constraints.
                        </p>
                        <Link href="/exogram" className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors">
                            Initialize Division Remediation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Division Scorecard */}
                <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mb-6">Division Scorecard</h2>
                <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200 bg-zinc-50/50">
                                    <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-zinc-500">Department</th>
                                    <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-zinc-500">Product Debt (PDI)</th>
                                    <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-zinc-500">Gross Margin (AUEB)</th>
                                    <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-zinc-500">90-Day Trend</th>
                                    <th className="p-4 text-xs font-bold font-mono uppercase tracking-widest text-zinc-500">Posture</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orgData.divisions.map((div, i) => (
                                    <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                                        <td className="p-4 font-bold text-zinc-900">{div.name}</td>
                                        <td className="p-4 font-medium text-zinc-600">{div.pdi}</td>
                                        <td className="p-4 font-medium text-zinc-600">{div.aueb}%</td>
                                        <td className="p-4 text-sm font-medium">
                                            <span className={div.trend.includes('+') && !div.trend.includes('Stable') ? 'text-red-600' : 'text-emerald-600'}>
                                                {div.trend}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                                                div.status === 'High Risk' ? 'bg-red-100 text-red-700' :
                                                div.status === 'Warning' ? 'bg-amber-100 text-amber-700' :
                                                'bg-emerald-100 text-emerald-700'
                                            }`}>
                                                {div.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
