"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, Download, Lock } from 'lucide-react';
import { supabaseAdmin } from '../../lib/supabase';

// Static base for flagship reports
const staticReports = [
    {
        id: 'ai-governance-maturity-index',
        title: 'AI Governance Maturity Index',
        description: 'The definitive evaluation of enterprise AI operational readiness, bridging the gap between prototypical deployments and Admissibility-Native infrastructure.',
        date: 'Current Quarter',
        isGated: false
    },
    {
        id: 'product-debt-report',
        title: 'Product Debt Report',
        description: 'An analysis of technical insolvency risk across SaaS and Healthcare deployments, tracking the architectural entanglement of probabilistic models.',
        date: 'Current Quarter',
        isGated: false
    },
    {
        id: 'hallucination-debt-index',
        title: 'Hallucination Debt Index',
        description: 'Measuring the compound verification burden placed on engineering teams when probabilistic output is allowed to dictate critical workflows.',
        date: 'Current Quarter',
        isGated: true
    },
    {
        id: 'runtime-governance-benchmark',
        title: 'Runtime Governance Benchmark',
        description: 'The state of deterministic policy interception in modern AI systems. Why observability without enforcement is governance theater.',
        date: 'Current Quarter',
        isGated: true
    },
    {
        id: 'ai-margin-compression-report',
        title: 'AI Margin Compression Report',
        description: 'How inference routing inefficiencies and unoptimized Synthetic COGS are destroying SaaS gross margins at scale.',
        date: 'Current Quarter',
        isGated: true
    }
];


export default function ReportsPage() {
    // In a live environment, we would use a Server Component or SWR to fetch reports directly from DB.
    // For now, we simulate dynamic injection.
    const [reports, setReports] = useState(staticReports);
    return (
        <main className="pt-24 pb-20 bg-zinc-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <header className="mb-16 border-b border-zinc-200 pb-12">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                        <span>Intelligence</span><span>/</span><span className="text-cyan-900 font-extrabold">Reports</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-900 mb-6">
                        Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">Intelligence</span>
                    </h1>
                    <p className="text-xl text-zinc-600 font-medium max-w-2xl leading-relaxed">
                        Quarterly governance benchmarks, operational debt analyses, and industry distributions extracted directly from our telemetry network.
                    </p>
                </header>

                {/* Report List */}
                <div className="space-y-6">
                    {reports.map(report => (
                        <div key={report.id} className="p-8 bg-white border border-zinc-200 rounded-2xl flex flex-col md:flex-row gap-8 items-start md:items-center hover:border-cyan-500/50 hover:shadow-md transition-all">
                            
                            <div className="w-16 h-16 shrink-0 bg-cyan-50 border border-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                                <FileText className="w-8 h-8" />
                            </div>
                            
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-800">{report.date}</span>
                                    {report.isGated && (
                                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded">
                                            <Lock className="w-3 h-3" /> Client Only
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mb-2">{report.title}</h2>
                                <p className="text-zinc-600 leading-relaxed text-sm">{report.description}</p>
                            </div>

                            <div className="shrink-0 w-full md:w-auto">
                                <button 
                                    className={`w-full md:w-auto px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-colors ${
                                        report.isGated 
                                        ? 'bg-zinc-100 text-zinc-900 font-medium cursor-not-allowed border border-zinc-200' 
                                        : 'bg-zinc-50 border border-zinc-200 text-zinc-950 font-semibold hover:bg-zinc-800'
                                    }`}
                                    disabled={report.isGated}
                                >
                                    <Download className="w-4 h-4" /> 
                                    {report.isGated ? 'Locked' : 'Download PDF'}
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
