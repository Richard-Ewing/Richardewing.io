'use client';

import React, { useState } from 'react';
import { Layers, TrendingUp, AlertTriangle, CheckCircle2, DollarSign } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

interface FeatureItem {
    id: string;
    name: string;
    subscriptionPrice: number;
    monthlyTokenCost: number;
    userAdoption: number; // percentage
    pricingModel: 'Flat Seat' | 'Usage Credit' | 'Outcome Tier';
}

const INITIAL_FEATURES: FeatureItem[] = [
    { id: '1', name: 'AI Smart Summary & Search', subscriptionPrice: 29, monthlyTokenCost: 4.5, userAdoption: 85, pricingModel: 'Flat Seat' },
    { id: '2', name: 'Deep Multi-Agent Document Analyst', subscriptionPrice: 49, monthlyTokenCost: 38.0, userAdoption: 40, pricingModel: 'Flat Seat' },
    { id: '3', name: 'Autonomous Workflow Generator', subscriptionPrice: 99, monthlyTokenCost: 18.0, userAdoption: 25, pricingModel: 'Usage Credit' },
    { id: '4', name: 'Automated CRM Lead Enrichment', subscriptionPrice: 79, monthlyTokenCost: 65.0, userAdoption: 60, pricingModel: 'Flat Seat' },
];

export default function CPOProductPortfolioTool() {
    const [features, setFeatures] = useState<FeatureItem[]>(INITIAL_FEATURES);

    const updateFeature = (id: string, field: keyof FeatureItem, value: any) => {
        setFeatures(prev => prev.map(f => f.id === id ? { ...f, [field]: value } : f));
    };

    // Calculate margins
    const analyzedFeatures = features.map(f => {
        const grossMarginPercent = Math.round(((f.subscriptionPrice - f.monthlyTokenCost) / f.subscriptionPrice) * 100);
        let status: 'Healthy' | 'Caution' | 'Negative Carry';
        let statusColor: string;

        if (grossMarginPercent < 50) {
            status = 'Negative Carry';
            statusColor = 'bg-rose-50 text-rose-800 border-rose-200';
        } else if (grossMarginPercent < 70) {
            status = 'Caution';
            statusColor = 'bg-amber-50 text-amber-800 border-amber-200';
        } else {
            status = 'Healthy';
            statusColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
        }

        return { ...f, grossMarginPercent, status, statusColor };
    });

    const averageMargin = Math.round(
        analyzedFeatures.reduce((acc, f) => acc + f.grossMarginPercent, 0) / analyzedFeatures.length
    );

    const negativeCarryCount = analyzedFeatures.filter(f => f.status === 'Negative Carry').length;

    return (
        <ToolGate toolName="CPO Product Portfolio Matrix">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-xs font-mono font-bold text-violet-900 uppercase tracking-widest mb-3">
                        <Layers className="w-3.5 h-3.5 text-violet-600" />
                        CPO &amp; Product Leadership &bull; Step 4 Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        CPO AI Feature Margin &amp; <span className="text-violet-600">Portfolio Pruning Matrix</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        For Chief Product Officers, VPs of Product, and Product Directors: Identify negative-carry AI features, enforce a 70%+ gross margin floor, and transition from seat-based to outcome pricing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Feature Table */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                            <div className="flex justify-between items-center pb-3 border-b border-zinc-200">
                                <h2 className="text-lg font-bold font-grotesk text-zinc-950">Active AI Feature Portfolio</h2>
                                <span className="text-xs font-mono text-zinc-500 font-bold">4 Features Audited</span>
                            </div>

                            <div className="space-y-4">
                                {analyzedFeatures.map(f => (
                                    <div key={f.id} className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-zinc-950 text-sm font-grotesk">{f.name}</span>
                                            <span className={'text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ' + f.statusColor}>
                                                {f.status} &bull; {f.grossMarginPercent}% Margin
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3 text-xs">
                                            <div>
                                                <label className="text-[10px] font-bold text-zinc-500 block mb-1">Monthly Price ($)</label>
                                                <input
                                                    type="number"
                                                    value={f.subscriptionPrice}
                                                    onChange={e => updateFeature(f.id, 'subscriptionPrice', parseFloat(e.target.value) || 0)}
                                                    className="w-full px-2 py-1 border border-zinc-300 rounded-lg font-mono font-bold bg-white text-zinc-900"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold text-zinc-500 block mb-1">Monthly Token COGS ($)</label>
                                                <input
                                                    type="number"
                                                    value={f.monthlyTokenCost}
                                                    onChange={e => updateFeature(f.id, 'monthlyTokenCost', parseFloat(e.target.value) || 0)}
                                                    className="w-full px-2 py-1 border border-zinc-300 rounded-lg font-mono font-bold bg-white text-zinc-900"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-bold text-zinc-500 block mb-1">Pricing Model</label>
                                                <select
                                                    value={f.pricingModel}
                                                    onChange={e => updateFeature(f.id, 'pricingModel', e.target.value)}
                                                    className="w-full px-2 py-1 border border-zinc-300 rounded-lg font-medium text-xs bg-white text-zinc-900"
                                                >
                                                    <option value="Flat Seat">Flat Seat</option>
                                                    <option value="Usage Credit">Usage Credit</option>
                                                    <option value="Outcome Tier">Outcome Tier</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Recommendations */}
                    <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 shadow-md space-y-5">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">Portfolio Gross Margin</div>
                                <div className="text-4xl font-extrabold font-grotesk text-violet-600">{averageMargin}%</div>
                                <div className="text-xs text-zinc-600 mt-1">Target SaaS Benchmark: &gt;= 75%</div>
                            </div>

                            {/* Warning / Recommendation */}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-300 space-y-2 text-xs">
                                <div className="font-bold text-zinc-950 uppercase font-mono tracking-wider">
                                    CPO Strategic Recommendation
                                </div>
                                {negativeCarryCount > 0 ? (
                                    <p className="text-zinc-700 leading-relaxed font-medium">
                                        Found <span className="font-bold text-rose-600">{negativeCarryCount} negative-carry feature(s)</span>. Immediately transition from Flat Seat to Usage Credit tiers or implement semantic caching to prevent gross margin collapse.
                                    </p>
                                ) : (
                                    <p className="text-zinc-700 leading-relaxed font-medium">
                                        All features satisfy corporate margin floors. Continue monitoring high-volume user cohorts for token decay.
                                    </p>
                                )}
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/workspace/products"
                                    className="text-xs font-bold text-violet-700 hover:text-violet-900 hover:underline"
                                >
                                    CPO Advisory Consultation &rarr;
                                </Link>
                                <ExportToPDFButton targetId="cpo-matrix" fileName="cpo-feature-margin-audit.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-violet-50/70 border border-violet-200 text-xs space-y-2">
                            <div className="font-bold text-violet-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Connection
                            </div>
                            <p className="text-violet-900 leading-relaxed">
                                Connects to <Link href="/framework/product" className="underline font-bold">Probabilistic Product Management</Link> and <Link href="/glossary/cost-of-predictivity" className="underline font-bold">Cost of Predictivity</Link>.
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
