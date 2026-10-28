"use client";

import React, { useState, useEffect } from 'react';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { supabaseAdmin } from '../../lib/supabase';
import { Activity, BarChart2, ShieldAlert } from 'lucide-react';

// For this static generation, we are mocking the fetch from Supabase benchmark_distributions
// In a fully live environment, this would hit a public GET /api/benchmarks endpoint.

const mockBenchmarks = [
    {
        diagnostic_id: 'pdi',
        industry: 'SaaS',
        sample_size: 142,
        top_quartile: 32,
        median: 58,
        bottom_quartile: 74
    },
    {
        diagnostic_id: 'aueb',
        industry: 'SaaS',
        sample_size: 142,
        top_quartile: 78,
        median: 62,
        bottom_quartile: 45
    },
    {
        diagnostic_id: 'pdi',
        industry: 'Healthcare',
        sample_size: 84,
        top_quartile: 24,
        median: 45,
        bottom_quartile: 68
    }
];


export default function BenchmarksPage() {
    const [selectedIndustry, setSelectedIndustry] = useState('SaaS');

    const filteredBenchmarks = mockBenchmarks.filter(b => b.industry === selectedIndustry);

    return (
        <main className="pt-24 pb-20 bg-zinc-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <header className="mb-16 border-b border-zinc-200 pb-12">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                        <span>Intelligence</span><span>/</span><span className="text-cyan-900 font-extrabold">Live Benchmarks</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-900 mb-6">
                        Governance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-600">Baselines</span>
                    </h1>
                    <p className="text-xl text-zinc-600 font-medium max-w-2xl leading-relaxed">
                        Live, aggregated telemetry from the Exogram diagnostics network. Compare your operational efficiency against verified industry peers.
                    </p>
                </header>

                {/* Filters */}
                <div className="mb-8 flex items-center gap-4">
                    <span className="text-sm font-bold text-zinc-800 uppercase tracking-widest font-mono">Industry Segment:</span>
                    <div className="flex gap-2">
                        {['SaaS', 'Healthcare'].map(ind => (
                            <button 
                                key={ind}
                                onClick={() => setSelectedIndustry(ind)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${selectedIndustry === ind ? 'bg-zinc-50 border border-zinc-200 text-zinc-950 font-semibold' : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
                            >
                                {ind}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Data Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredBenchmarks.map(b => (
                        <div key={b.diagnostic_id} className="p-8 bg-white border border-zinc-200 rounded-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-grotesk font-bold text-zinc-900">
                                    {b.diagnostic_id === 'pdi' ? 'Product Debt Index' : 'AI Unit Economics'}
                                </h2>
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-900 font-medium bg-zinc-100 px-2 py-1 rounded">n={b.sample_size}</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm font-bold text-zinc-800 mb-2">
                                        <span>Top Quartile (Elite)</span>
                                        <span className="text-emerald-600">{b.diagnostic_id === 'aueb' ? `${b.top_quartile}%` : b.top_quartile}</span>
                                    </div>
                                    <div className="w-full bg-zinc-100 rounded-full h-2">
                                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${b.diagnostic_id === 'aueb' ? b.top_quartile : (100 - b.top_quartile)}%` }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm font-bold text-zinc-800 mb-2">
                                        <span>Industry Median</span>
                                        <span className="text-zinc-900">{b.diagnostic_id === 'aueb' ? `${b.median}%` : b.median}</span>
                                    </div>
                                    <div className="w-full bg-zinc-100 rounded-full h-2">
                                        <div className="bg-zinc-400 h-2 rounded-full" style={{ width: `${b.diagnostic_id === 'aueb' ? b.median : (100 - b.median)}%` }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm font-bold text-zinc-800 mb-2">
                                        <span>Bottom Quartile (High Risk)</span>
                                        <span className="text-red-600">{b.diagnostic_id === 'aueb' ? `${b.bottom_quartile}%` : b.bottom_quartile}</span>
                                    </div>
                                    <div className="w-full bg-zinc-100 rounded-full h-2">
                                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${b.diagnostic_id === 'aueb' ? b.bottom_quartile : (100 - b.bottom_quartile)}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            
                    <AdvisoryCTA variant="tool-result" />
                </div>
        </main>
    );
}
