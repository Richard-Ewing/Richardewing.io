'use client';

import React, { useState } from 'react';
import { Percent } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

export default function AIFeatureMarginTool() {
    const [subscriptionPrice, setSubscriptionPrice] = useState<number>(79);
    const [queriesPerUserMonth, setQueriesPerUserMonth] = useState<number>(140);
    const [tokensPerQuery, setTokensPerQuery] = useState<number>(1200);
    const [modelCostPerM, setModelCostPerM] = useState<number>(8.00);
    const [baseHostingCostPerUser, setBaseHostingCostPerUser] = useState<number>(4.50);

    // Calculations
    const monthlyTokensPerUser = (queriesPerUserMonth * tokensPerQuery);
    const monthlyTokenCOGSPerUser = (monthlyTokensPerUser / 1000000) * modelCostPerM;
    const totalCOGSPerUser = baseHostingCostPerUser + monthlyTokenCOGSPerUser;

    const grossProfitPerUser = subscriptionPrice - totalCOGSPerUser;
    const grossMarginPercent = Math.round((grossProfitPerUser / subscriptionPrice) * 100);

    const maxQueries60Margin = Math.max(0, Math.round(((subscriptionPrice * 0.40 - baseHostingCostPerUser) / ((tokensPerQuery / 1000000) * modelCostPerM))));

    let statusTier = 'Toxic Negative-Carry Feature';
    let statusColor = 'bg-rose-50 text-rose-800 border-rose-200';
    let statusDesc = 'Every active user query bleeds capital. This feature looks popular in mixpanel but is actively destroying SaaS gross margin profile.';

    if (grossMarginPercent >= 75) {
        statusTier = 'High-Margin Sovereign Asset';
        statusColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
        statusDesc = 'Healthy unit economics aligned with traditional SaaS 80%+ gross margin targets.';
    } else if (grossMarginPercent >= 50) {
        statusTier = 'Margin Dilutive (Requires Credit Caps)';
        statusColor = 'bg-amber-50 text-amber-800 border-amber-200';
        statusDesc = 'Acceptable for top-tier enterprise tiers, but power users will easily push account unit economics into negative EBITDA.';
    }

    return (
        <ToolGate toolName="AI Feature Margin Matrix">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-900 uppercase tracking-widest mb-3">
                        <Percent className="w-3.5 h-3.5 text-emerald-600" />
                        Product Economics &bull; Step 4 Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        AI Feature <span className="text-emerald-600">Unit Margin Matrix</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Flat SaaS pricing with variable generative AI inference creates &ldquo;negative-carry features&rdquo; where more user engagement leads to lower gross margin. Model your feature contribution margins.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Sliders */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                Pricing &amp; Consumption Metrics
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Monthly User Subscription Price ($)</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">${subscriptionPrice} / user / mo</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={15}
                                        max={500}
                                        step={5}
                                        value={subscriptionPrice}
                                        onChange={(e) => setSubscriptionPrice(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Average AI Queries per Active User / Mo</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">{queriesPerUserMonth} queries</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={10}
                                        max={1000}
                                        step={10}
                                        value={queriesPerUserMonth}
                                        onChange={(e) => setQueriesPerUserMonth(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Blended Tokens per Query (Input + Output)</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">{tokensPerQuery.toLocaleString()} tokens</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={200}
                                        max={8000}
                                        step={100}
                                        value={tokensPerQuery}
                                        onChange={(e) => setTokensPerQuery(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-zinc-200">
                                    <div>
                                        <label className="text-xs font-bold text-zinc-700 block mb-1">Blended Model Cost ($ per 1M Tokens)</label>
                                        <input
                                            type="number"
                                            min={0.2}
                                            max={50}
                                            step={0.5}
                                            value={modelCostPerM}
                                            onChange={(e) => setModelCostPerM(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                                            className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-zinc-700 block mb-1">Base Non-AI Hosting ($/User/Mo)</label>
                                        <input
                                            type="number"
                                            min={0.5}
                                            max={50}
                                            step={0.5}
                                            value={baseHostingCostPerUser}
                                            onChange={(e) => setBaseHostingCostPerUser(Math.max(0, parseFloat(e.target.value) || 0))}
                                            className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Margin Matrix */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">Feature Gross Margin</div>
                                <div className="flex items-baseline gap-2">
                                    <div className={'text-6xl font-extrabold font-grotesk ' + (
                                        grossMarginPercent >= 75 ? 'text-emerald-600' :
                                        grossMarginPercent >= 50 ? 'text-amber-600' : 'text-rose-600'
                                    )}>
                                        {grossMarginPercent}%
                                    </div>
                                    <div className="text-xs font-mono text-zinc-500">Gross Margin</div>
                                </div>
                                <div className={'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 border ' + statusColor}>
                                    {statusTier}
                                </div>
                            </div>

                            {/* Cost Breakdown */}
                            <div className="space-y-3 pt-3 border-t border-zinc-200 text-xs">
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-600 font-medium">Monthly Synthetic AI COGS / User:</span>
                                    <span className="font-mono font-bold text-rose-600">${monthlyTokenCOGSPerUser.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-zinc-600 font-medium">Base Infrastructure COGS / User:</span>
                                    <span className="font-mono font-bold text-zinc-900">${baseHostingCostPerUser.toFixed(2)}</span>
                                </div>
                                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-300 flex justify-between items-center">
                                    <span className="text-xs font-bold text-zinc-900">Net Feature Gross Profit / User:</span>
                                    <span className="text-sm font-mono font-bold text-emerald-700">${grossProfitPerUser.toFixed(2)} / mo</span>
                                </div>
                            </div>

                            {/* Safe Threshold Caps */}
                            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                                <div className="text-[10px] font-mono text-emerald-900 font-bold uppercase tracking-wider">
                                    Recommended Safe Monthly Query Cap
                                </div>
                                <div className="text-2xl font-bold font-mono text-emerald-950">
                                    {maxQueries60Margin} queries / user
                                </div>
                                <p className="text-[10px] text-emerald-800">
                                    Enforce this monthly cap with Exogram rate limiting to guarantee minimum 60% gross profit.
                                </p>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/workspace/products"
                                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                                >
                                    Book Product Economics Audit &rarr;
                                </Link>
                                <ExportToPDFButton targetId="feature-margin-calc" fileName="ai-feature-margin-audit.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-2">
                            <div className="font-bold text-emerald-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Connection
                            </div>
                            <p className="text-emerald-900 leading-relaxed">
                                Directly feeds into <Link href="/framework/product" className="underline font-bold">Product Debt Index (PDI)</Link> and <Link href="/concepts/ai-margin-squeeze" className="underline font-bold">AI Margin Squeeze</Link>.
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
