"use client";

import React, { useState } from 'react';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import { Calculator, FileSpreadsheet, Presentation, CheckCircle2, AlertTriangle, Download, TrendingUp, Trash2, ShieldCheck } from 'lucide-react';

interface BacklogItem {
    id: string;
    name: string;
    monthlyEngHours: number;
    monthlyCloudCost: number;
    attributedArr: number;
    activeUsersPct: number;
}

const initialBacklog: BacklogItem[] = [
    { id: '1', name: 'Legacy Custom PDF Exporter', monthlyEngHours: 65, monthlyCloudCost: 1400, attributedArr: 12000, activeUsersPct: 3.2 },
    { id: '2', name: 'AI Auto-Summarizer (Uncapped GPT-4o)', monthlyEngHours: 40, monthlyCloudCost: 11800, attributedArr: 45000, activeUsersPct: 28.0 },
    { id: '3', name: 'Enterprise SSO & Audit Logs', monthlyEngHours: 15, monthlyCloudCost: 300, attributedArr: 420000, activeUsersPct: 84.0 },
    { id: '4', name: 'Beta Slack Bot v1 (Unmaintained)', monthlyEngHours: 48, monthlyCloudCost: 2100, attributedArr: 0, activeUsersPct: 1.1 },
];

export default function ToolkitInteractivePreview() {
    const [activeTab, setActiveTab] = useState<'pricing' | 'zombie' | 'board'>('pricing');

    // Tab 1: AI Pricing & Margin Stress-Tester State
    const [seatPrice, setSeatPrice] = useState<number>(49);
    const [avgQueriesPerDay, setAvgQueriesPerDay] = useState<number>(35);
    const [costPerQueryCents, setCostPerQueryCents] = useState<number>(2.4);
    const [powerUserMultiplier, setPowerUserMultiplier] = useState<number>(4.5);

    // Tab 1 Math
    const monthlyQueriesAvg = avgQueriesPerDay * 22;
    const monthlyCostAvg = (monthlyQueriesAvg * costPerQueryCents) / 100;
    const avgGrossMarginPct = Math.round(((seatPrice - monthlyCostAvg) / seatPrice) * 100);

    const monthlyCostPower = monthlyCostAvg * powerUserMultiplier;
    const powerGrossMarginPct = Math.round(((seatPrice - monthlyCostPower) / seatPrice) * 100);
    const recommendedCapQueries = Math.floor(((seatPrice * 0.22) * 100) / costPerQueryCents);

    // Tab 2: Zombie Feature Matrix Math ($95/hr fully loaded eng rate)
    const hourlyEngCost = 95;

    const downloadSampleCsv = () => {
        const csvContent = [
            'Feature_Name,Monthly_Eng_Hours,Fully_Loaded_Eng_Cost_USD,Monthly_Cloud_AI_Spend_USD,Annualized_Carry_Cost_USD,Attributed_ARR_USD,Active_User_Adoption_Pct,Net_Feature_Contribution_USD,Verdict',
            ...initialBacklog.map(item => {
                const annualCarry = ((item.monthlyEngHours * hourlyEngCost) + item.monthlyCloudCost) * 12;
                const netContribution = item.attributedArr - annualCarry;
                const verdict = netContribution < 0 ? 'KILL_OR_REPRICE_ZOMBIE' : 'INVEST_CORE_ASSET';
                return `"${item.name}",${item.monthlyEngHours},${item.monthlyEngHours * hourlyEngCost},${item.monthlyCloudCost},${annualCarry},${item.attributedArr},${item.activeUsersPct}%,${netContribution},${verdict}`;
            })
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'RichardEwing_Product_Economist_Backlog_Audit_Sample.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-white border-2 border-zinc-900 rounded-3xl shadow-2xl overflow-hidden my-12">
            {/* Top Bar */}
            <div className="bg-zinc-950 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest font-bold text-emerald-400">
                        LIVE INTERACTIVE KIT PREVIEW (TEST THE MATH BEFORE YOU BUY)
                    </span>
                </div>
                <button
                    onClick={downloadSampleCsv}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-mono font-bold text-zinc-100 border border-zinc-700 transition-colors cursor-pointer"
                >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    Download Free Sample CSV Matrix
                </button>
            </div>

            {/* Tab Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-zinc-200 bg-zinc-50">
                <button
                    onClick={() => setActiveTab('pricing')}
                    className={`p-4 text-left font-grotesk font-bold text-sm flex items-center gap-2.5 border-b-2 transition-all cursor-pointer ${
                        activeTab === 'pricing'
                            ? 'border-violet-600 bg-white text-zinc-950'
                            : 'border-transparent text-zinc-600 hover:text-zinc-950'
                    }`}
                >
                    <Calculator className="w-4 h-4 text-violet-600 shrink-0" />
                    <span>01. AI Feature Pricing Stress-Tester</span>
                </button>
                <button
                    onClick={() => setActiveTab('zombie')}
                    className={`p-4 text-left font-grotesk font-bold text-sm flex items-center gap-2.5 border-b-2 transition-all cursor-pointer ${
                        activeTab === 'zombie'
                            ? 'border-rose-600 bg-white text-zinc-950'
                            : 'border-transparent text-zinc-600 hover:text-zinc-950'
                    }`}
                >
                    <Trash2 className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>02. Zombie Feature Kill-List Matrix</span>
                </button>
                <button
                    onClick={() => setActiveTab('board')}
                    className={`p-4 text-left font-grotesk font-bold text-sm flex items-center gap-2.5 border-b-2 transition-all cursor-pointer ${
                        activeTab === 'board'
                            ? 'border-emerald-600 bg-white text-zinc-950'
                            : 'border-transparent text-zinc-600 hover:text-zinc-950'
                    }`}
                >
                    <Presentation className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>03. 12-Slide CFO &amp; Board Blueprint</span>
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-10">
                {activeTab === 'pricing' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6 space-y-5">
                            <div>
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-700">
                                    Template 01 Preview • AI Pricing &amp; Margin Model
                                </span>
                                <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mt-1">
                                    See Where Power Users Turn Your Flat-Rate AI Subscription Negative
                                </h3>
                                <p className="text-sm text-zinc-600 mt-1 font-medium">
                                    Adjust the sliders to test how usage spikes and retry loops impact your SaaS gross margin.
                                </p>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold text-zinc-800 mb-1.5">
                                    <span>Monthly Subscription Price Per Seat:</span>
                                    <span className="font-mono text-violet-700">${seatPrice}/mo</span>
                                </div>
                                <input
                                    type="range"
                                    min={15}
                                    max={199}
                                    step={2}
                                    value={seatPrice}
                                    onChange={(e) => setSeatPrice(Number(e.target.value))}
                                    className="w-full accent-violet-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold text-zinc-800 mb-1.5">
                                    <span>Average AI Prompts / Workflows Per Workday:</span>
                                    <span className="font-mono text-violet-700">{avgQueriesPerDay} runs/day</span>
                                </div>
                                <input
                                    type="range"
                                    min={5}
                                    max={120}
                                    step={5}
                                    value={avgQueriesPerDay}
                                    onChange={(e) => setAvgQueriesPerDay(Number(e.target.value))}
                                    className="w-full accent-violet-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold text-zinc-800 mb-1.5">
                                    <span>Blended Token + Retry Cost Per Run (Cents):</span>
                                    <span className="font-mono text-violet-700">{costPerQueryCents.toFixed(1)}¢ / run</span>
                                </div>
                                <input
                                    type="range"
                                    min={0.5}
                                    max={10}
                                    step={0.5}
                                    value={costPerQueryCents}
                                    onChange={(e) => setCostPerQueryCents(Number(e.target.value))}
                                    className="w-full accent-violet-600 cursor-pointer"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold text-zinc-800 mb-1.5">
                                    <span>P90 Power-User Usage Multiplier:</span>
                                    <span className="font-mono text-rose-600">{powerUserMultiplier}x average usage</span>
                                </div>
                                <input
                                    type="range"
                                    min={2}
                                    max={10}
                                    step={0.5}
                                    value={powerUserMultiplier}
                                    onChange={(e) => setPowerUserMultiplier(Number(e.target.value))}
                                    className="w-full accent-rose-600 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-6 bg-zinc-950 text-white rounded-2xl p-6 sm:p-8 border border-zinc-800 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                                    <div className="text-[11px] font-mono uppercase text-zinc-400">Average User Margin</div>
                                    <div className={`text-3xl font-mono font-extrabold mt-1 ${avgGrossMarginPct >= 70 ? 'text-emerald-400' : avgGrossMarginPct >= 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                                        {avgGrossMarginPct}%
                                    </div>
                                    <div className="text-xs text-zinc-400 mt-1">
                                        ${monthlyCostAvg.toFixed(2)}/mo inference COGS
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                                    <div className="text-[11px] font-mono uppercase text-zinc-400">P90 Power User Margin</div>
                                    <div className={`text-3xl font-mono font-extrabold mt-1 ${powerGrossMarginPct >= 50 ? 'text-emerald-400' : powerGrossMarginPct >= 0 ? 'text-amber-400' : 'text-rose-500'}`}>
                                        {powerGrossMarginPct}%
                                    </div>
                                    <div className="text-xs text-zinc-400 mt-1">
                                        ${monthlyCostPower.toFixed(2)}/mo inference COGS
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-500/30">
                                <div className="text-xs font-mono font-bold uppercase text-violet-300 mb-1">
                                    Product Economist Prescription (Included in Full Excel Model):
                                </div>
                                <p className="text-xs text-zinc-200 leading-relaxed">
                                    {powerGrossMarginPct < 30 ? (
                                        <>
                                            <strong>Margin Alert:</strong> Your top 10% heaviest users cost <strong>${monthlyCostPower.toFixed(2)}/mo</strong> on a <strong>${seatPrice}/mo</strong> seat. To preserve a 78% software gross margin, enforce a base tier allowance of <strong>{recommendedCapQueries} premium runs/month</strong>, then auto-route to a small model or trigger usage credit packs.
                                        </>
                                    ) : (
                                        <>
                                            <strong>Healthy Unit Margin:</strong> Even at {powerUserMultiplier}x usage, P90 users retain a <strong>{powerGrossMarginPct}%</strong> gross margin. Cap base tier inclusion at <strong>{recommendedCapQueries} runs/month</strong> to protect against automated agent loops.
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'zombie' && (
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-700">
                                    Template 02 Preview • The $5M Cost-Reduction Playbook
                                </span>
                                <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mt-1">
                                    The &ldquo;Zombie Feature&rdquo; Kill-List &amp; Backlog P&amp;L Matrix
                                </h3>
                                <p className="text-sm text-zinc-600 mt-1 font-medium">
                                    Most product teams measure story points shipped. A Product Economist measures Annualized Maintenance Carry vs. Attributed ARR.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="bg-zinc-100 text-zinc-800 font-mono text-[11px] uppercase border-b border-zinc-200">
                                        <th className="p-3.5">Feature / Subsystem</th>
                                        <th className="p-3.5">Eng Maintenance</th>
                                        <th className="p-3.5">Cloud / API Burn</th>
                                        <th className="p-3.5">Annual Carry Cost</th>
                                        <th className="p-3.5">Attributed ARR</th>
                                        <th className="p-3.5">Net P&amp;L Impact</th>
                                        <th className="p-3.5">Executive Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-200 font-medium">
                                    {initialBacklog.map((row) => {
                                        const annualCarry = ((row.monthlyEngHours * hourlyEngCost) + row.monthlyCloudCost) * 12;
                                        const netImpact = row.attributedArr - annualCarry;
                                        const isZombie = netImpact < 0;
                                        return (
                                            <tr key={row.id} className={isZombie ? 'bg-rose-50/40' : 'bg-white'}>
                                                <td className="p-3.5 font-bold text-zinc-950">
                                                    {row.name}
                                                    <div className="text-[11px] text-zinc-500 font-normal">
                                                        Adopted by {row.activeUsersPct}% of active seats
                                                    </div>
                                                </td>
                                                <td className="p-3.5 font-mono text-zinc-700">{row.monthlyEngHours} hrs/mo</td>
                                                <td className="p-3.5 font-mono text-zinc-700">${row.monthlyCloudCost.toLocaleString()}/mo</td>
                                                <td className="p-3.5 font-mono font-bold text-zinc-900">${annualCarry.toLocaleString()}/yr</td>
                                                <td className="p-3.5 font-mono font-bold text-zinc-900">${row.attributedArr.toLocaleString()}/yr</td>
                                                <td className={`p-3.5 font-mono font-extrabold ${isZombie ? 'text-rose-700' : 'text-emerald-700'}`}>
                                                    {isZombie ? `-$${Math.abs(netImpact).toLocaleString()}/yr` : `+$${netImpact.toLocaleString()}/yr`}
                                                </td>
                                                <td className="p-3.5">
                                                    {isZombie ? (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-rose-100 text-rose-800 border border-rose-300">
                                                            Sunset / Re-Tier
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                                                            Core Profit Driver
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'board' && (
                    <div className="space-y-6">
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700">
                                Template 03 Preview • CFO &amp; Boardroom Translation Blueprint
                            </span>
                            <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mt-1">
                                The 12-Slide CFO &amp; Board Defense Deck Architecture
                            </h3>
                            <p className="text-sm text-zinc-600 mt-1 font-medium">
                                Stop walking into board meetings showing Jira velocity charts. Use these exact 12 slide structures to get your roadmap and AI budget approved.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { slide: 'Slide 01', title: 'Executive P&L Summary', desc: 'Net New ARR vs. Engineering & AI COGS on a single 4-quadrant scorecard.' },
                                { slide: 'Slide 02', title: 'R&D Capital Allocation Split', desc: 'Breaking down New Growth vs. Customer Retention vs. Maintenance Carry.' },
                                { slide: 'Slide 03', title: 'AI Unit Economics & Margin Floor', desc: 'P50 vs. P90 token cost per seat and hard runtime cap thresholds.' },
                                { slide: 'Slide 04', title: 'The Zombie Feature Sunset Plan', desc: 'How deprecating bottom-decile features recovers 30%+ engineering capacity.' },
                                { slide: 'Slide 05', title: 'Product Debt Index (PDI) Valuation', desc: 'Translating refactoring work into avoided downtime and faster payback.' },
                                { slide: 'Slide 06', title: 'Next-Quarter Capital Ask & Payback', desc: 'Framing roadmap hires and compute spend with exact month-by-month IRR.' },
                            ].map((item) => (
                                <div key={item.slide} className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                                    <div className="text-[11px] font-mono font-bold text-emerald-700 uppercase">{item.slide}</div>
                                    <div className="font-grotesk font-bold text-zinc-950 text-base mt-1">{item.title}</div>
                                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
