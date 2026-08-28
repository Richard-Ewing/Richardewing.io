'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, DollarSign, ArrowRight, Server, Zap, ShieldCheck } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

interface FrontierModel {
    id: string;
    name: string;
    inputCostPerM: number;
    outputCostPerM: number;
}

interface SelfHostedGPU {
    id: string;
    name: string;
    costPerHour: number;
    recommendedModel: string;
    maxQPS: number;
}

const FRONTIER_MODELS: FrontierModel[] = [
    { id: 'claude-3-7-sonnet', name: 'Claude 3.7 Sonnet', inputCostPerM: 3.00, outputCostPerM: 15.00 },
    { id: 'claude-3-7-opus', name: 'Claude 3.7 Opus', inputCostPerM: 15.00, outputCostPerM: 75.00 },
    { id: 'gpt-5-omni', name: 'GPT-5 Omni', inputCostPerM: 5.00, outputCostPerM: 15.00 },
    { id: 'gpt-5-mini', name: 'GPT-5 Mini', inputCostPerM: 0.30, outputCostPerM: 1.20 },
];

const GPU_INSTANCES: SelfHostedGPU[] = [
    { id: '1x-a10g', name: '1x NVIDIA A10G (AWS g5.xlarge)', costPerHour: 1.01, recommendedModel: '8B Quantized (Llama 3.3 / Gemma 2)', maxQPS: 12 },
    { id: '1x-l4', name: '1x NVIDIA L4 (GCP g2-standard-4)', costPerHour: 0.70, recommendedModel: '8B-14B vLLM', maxQPS: 18 },
    { id: '1x-h100', name: '1x NVIDIA H100 (Lambda / RunPod)', costPerHour: 2.49, recommendedModel: '70B Quantized / High-Concurrency 8B', maxQPS: 65 },
    { id: '2x-a10g-ha', name: '2x A10G (High Availability Cluster)', costPerHour: 2.02, recommendedModel: 'Multi-Replica 8B Active-Active', maxQPS: 24 },
];

export default function SLMBreakEvenTool() {
    const [monthlyQueries, setMonthlyQueries] = useState<number>(350000);
    const [avgInputTokens, setAvgInputTokens] = useState<number>(850);
    const [avgOutputTokens, setAvgOutputTokens] = useState<number>(350);
    const [selectedFrontier, setSelectedFrontier] = useState<string>('claude-3-7-sonnet');
    const [selectedGPU, setSelectedGPU] = useState<string>('1x-l4');
    const [fineTuningOnetimeCost, setFineTuningOnetimeCost] = useState<number>(3500);

    const frontier = FRONTIER_MODELS.find(m => m.id === selectedFrontier) || FRONTIER_MODELS[0];
    const gpu = GPU_INSTANCES.find(g => g.id === selectedGPU) || GPU_INSTANCES[0];

    // Calculations
    const monthlyInputTokens = (monthlyQueries * avgInputTokens) / 1000000;
    const monthlyOutputTokens = (monthlyQueries * avgOutputTokens) / 1000000;

    const monthlyFrontierCost = (monthlyInputTokens * frontier.inputCostPerM) + (monthlyOutputTokens * frontier.outputCostPerM);
    const monthlyGPUCost = gpu.costPerHour * 730;
    const monthlyMaintenanceCost = 800;
    const totalMonthlySelfHostedCost = monthlyGPUCost + monthlyMaintenanceCost;

    const monthlyNetSavings = monthlyFrontierCost - totalMonthlySelfHostedCost;
    const annualNetSavings = (monthlyNetSavings * 12) - fineTuningOnetimeCost;

    const costPerQueryFrontier = ((avgInputTokens / 1000000) * frontier.inputCostPerM) + ((avgOutputTokens / 1000000) * frontier.outputCostPerM);
    const breakEvenQueries = costPerQueryFrontier > 0 ? Math.round(totalMonthlySelfHostedCost / costPerQueryFrontier) : 0;

    const isBreakEvenReached = monthlyQueries >= breakEvenQueries;

    return (
        <ToolGate toolName="SLM vs API Break-Even Calculator">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-xs font-mono font-bold text-violet-900 uppercase tracking-widest mb-3">
                        <Server className="w-3.5 h-3.5 text-violet-600" />
                        Inference Economics &bull; Step 4 Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        SLM Fine-Tuning vs Hosted API <span className="text-violet-600">Break-Even Calculator</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Defaulting every routine prompt to frontier APIs (Claude 3.7 / GPT-5) destroys software gross margins. Model your exact break-even volume for fine-tuning and hosting Small Language Models (SLMs).
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                1. Workload &amp; Token Volume
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold text-zinc-700">Monthly Query Volume</label>
                                        <span className="text-xs font-mono font-bold text-zinc-900">{monthlyQueries.toLocaleString()} queries/mo</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={10000}
                                        max={2000000}
                                        step={10000}
                                        value={monthlyQueries}
                                        onChange={(e) => setMonthlyQueries(parseInt(e.target.value))}
                                        className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-zinc-700 block mb-1">Avg Input Tokens / Query</label>
                                        <input
                                            type="number"
                                            min={50}
                                            max={16000}
                                            step={50}
                                            value={avgInputTokens}
                                            onChange={(e) => setAvgInputTokens(Math.max(10, parseInt(e.target.value) || 10))}
                                            className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-violet-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-zinc-700 block mb-1">Avg Output Tokens / Query</label>
                                        <input
                                            type="number"
                                            min={20}
                                            max={4000}
                                            step={20}
                                            value={avgOutputTokens}
                                            onChange={(e) => setAvgOutputTokens(Math.max(10, parseInt(e.target.value) || 10))}
                                            className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-violet-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pt-4 pb-3 border-b border-zinc-200">
                                2. Architecture Comparison
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold text-zinc-700 block mb-1">Current Hosted Frontier Model</label>
                                    <select
                                        value={selectedFrontier}
                                        onChange={(e) => setSelectedFrontier(e.target.value)}
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-violet-500 bg-white"
                                    >
                                        {FRONTIER_MODELS.map(m => (
                                            <option key={m.id} value={m.id}>
                                                {m.name} ({m.inputCostPerM.toFixed(2)} in / {m.outputCostPerM.toFixed(2)} out per M)
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-zinc-700 block mb-1">Target Self-Hosted GPU Cluster</label>
                                    <select
                                        value={selectedGPU}
                                        onChange={(e) => setSelectedGPU(e.target.value)}
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-violet-500 bg-white"
                                    >
                                        {GPU_INSTANCES.map(g => (
                                            <option key={g.id} value={g.id}>
                                                {g.name} &bull; {g.costPerHour.toFixed(2)}/hr ({Math.round(g.costPerHour * 730)}/mo)
                                            </option>
                                        ))}
                                    </select>
                                    <span className="text-[11px] text-zinc-500 font-mono mt-1 block">
                                        Optimal for: {gpu.recommendedModel} (Max throughput: ~{gpu.maxQPS} QPS)
                                    </span>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-zinc-700 block mb-1">One-Time Fine-Tuning &amp; Eval Dataset Cost ($)</label>
                                    <input
                                        type="number"
                                        min={0}
                                        max={50000}
                                        step={500}
                                        value={fineTuningOnetimeCost}
                                        onChange={(e) => setFineTuningOnetimeCost(Math.max(0, parseInt(e.target.value) || 0))}
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-violet-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">Monthly Break-Even Point</div>
                                <div className="text-4xl font-extrabold font-grotesk text-zinc-950">
                                    {breakEvenQueries.toLocaleString()} <span className="text-lg font-mono text-zinc-400 font-normal">queries/mo</span>
                                </div>
                                <div className={'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 ' + (
                                    isBreakEvenReached ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                                )}>
                                    {isBreakEvenReached ? '✓ Break-Even Achieved' : '⚠ Below Break-Even Volume'}
                                </div>
                            </div>

                            {/* Monthly Comparison */}
                            <div className="space-y-3 pt-4 border-t border-zinc-200">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-zinc-600 font-medium">Frontier API Monthly Cost:</span>
                                    <span className="font-mono font-bold text-rose-600">${Math.round(monthlyFrontierCost).toLocaleString()} / mo</span>
                                </div>
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-zinc-600 font-medium">Self-Hosted GPU + Ops:</span>
                                    <span className="font-mono font-bold text-zinc-900">${Math.round(totalMonthlySelfHostedCost).toLocaleString()} / mo</span>
                                </div>
                                <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-300 flex justify-between items-center">
                                    <span className="text-xs font-bold text-zinc-900">Monthly Net Variance:</span>
                                    <span className={'text-sm font-mono font-bold ' + (monthlyNetSavings >= 0 ? 'text-emerald-600' : 'text-rose-600')}>
                                        {monthlyNetSavings >= 0 ? '+' : ''}${Math.round(monthlyNetSavings).toLocaleString()} / mo
                                    </span>
                                </div>
                            </div>

                            {/* 12-Month ROI */}
                            <div className="p-4 rounded-2xl bg-violet-50/70 border border-violet-200 space-y-1">
                                <div className="text-[10px] font-mono text-violet-900 font-bold uppercase tracking-wider">
                                    12-Month Net Recaptured Margin (After Fine-Tuning)
                                </div>
                                <div className="text-3xl font-bold font-mono text-violet-950">
                                    ${annualNetSavings.toLocaleString()}
                                </div>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/services"
                                    className="text-xs font-bold text-violet-700 hover:text-violet-900 hover:underline"
                                >
                                    Book Model Right-Sizing Audit &rarr;
                                </Link>
                                <ExportToPDFButton targetId="slm-break-even-calc" fileName="slm-break-even-model.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-violet-50/70 border border-violet-200 text-xs space-y-2">
                            <div className="font-bold text-violet-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Connection
                            </div>
                            <p className="text-violet-900 leading-relaxed">
                                Connects to <Link href="/framework/engineering" className="underline font-bold">SLM vs API Arbitrage</Link> and supports curriculum track <Link href="/vault/curriculum/tracks" className="underline font-bold">Track 11: Economics of Build vs Buy for AI</Link>.
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
