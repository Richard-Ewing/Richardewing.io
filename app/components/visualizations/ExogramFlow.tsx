import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Database, AlertOctagon, RefreshCw } from 'lucide-react';

export function ExogramFlow() {
    return (
        <div className="w-full bg-white border border-zinc-200 rounded-2xl p-8 border border-zinc-200 text-zinc-800 font-mono">
            <h3 className="text-xl font-bold text-zinc-950 font-semibold mb-8 border-b border-zinc-200 pb-4 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-cyan-900" />
                Exogram Runtime Execution Flow
            </h3>

            {/* Uncontrolled Flow (The Problem) */}
            <div className="mb-12 relative">
                <div className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Standard Probabilistic Execution (High Risk)</div>
                <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                    <div className="p-4 border border-zinc-200 rounded bg-zinc-50 border border-zinc-200 flex flex-col items-center flex-1 w-full opacity-60">
                        <Database className="w-6 h-6 mb-2 text-zinc-800" />
                        <span className="text-xs">User Prompt</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-700 hidden md:block" />
                    <div className="p-4 border border-zinc-200 rounded bg-zinc-50 border border-zinc-200 flex flex-col items-center flex-1 w-full opacity-60">
                        <Cpu className="w-6 h-6 mb-2 text-purple-500" />
                        <span className="text-xs">LLM Inference</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-red-500 hidden md:block" />
                    <div className="p-4 border border-red-900/50 rounded bg-red-950/20 flex flex-col items-center flex-1 w-full">
                        <AlertOctagon className="w-6 h-6 mb-2 text-red-500" />
                        <span className="text-xs text-zinc-900 font-bold text-center">Unverified Output<br/>(Hallucination / Drift)</span>
                    </div>
                </div>
            </div>

            {/* Exogram Flow (The Solution) */}
            <div className="relative">
                <div className="absolute top-0 left-0 text-[10px] uppercase tracking-widest text-cyan-500 font-bold">Exogram Deterministic Control Plane</div>
                <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                    <div className="p-4 border border-zinc-700 rounded bg-zinc-50 border border-zinc-200 flex flex-col items-center flex-1 w-full">
                        <Database className="w-6 h-6 mb-2 text-zinc-800" />
                        <span className="text-xs">User Prompt</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-800 hidden md:block" />
                    <div className="p-4 border border-cyan-900 rounded bg-cyan-950/30 flex flex-col items-center flex-1 w-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                        <ShieldCheck className="w-6 h-6 mb-2 text-cyan-900 relative z-10" />
                        <span className="text-xs text-zinc-900 font-bold text-center font-bold relative z-10">Policy-as-Code<br/>Interceptor</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-cyan-500 hidden md:block" />
                    <div className="p-4 border border-zinc-700 rounded bg-zinc-50 border border-zinc-200 flex flex-col items-center flex-1 w-full">
                        <Cpu className="w-6 h-6 mb-2 text-purple-400" />
                        <span className="text-xs text-center">Constrained<br/>Inference</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-500 hidden md:block" />
                    <div className="p-4 border border-emerald-900/50 rounded bg-emerald-950/20 flex flex-col items-center flex-1 w-full">
                        <ShieldCheck className="w-6 h-6 mb-2 text-emerald-500" />
                        <span className="text-xs text-zinc-900 font-bold text-center">Deterministic<br/>Verified Output</span>
                    </div>
                </div>

                {/* Remediation Loop */}
                <div className="flex justify-center mt-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-zinc-50 border border-zinc-200 border border-zinc-200 text-[10px] text-zinc-900 font-medium uppercase">
                        <RefreshCw className="w-3 h-3" />
                        <span>Autonomous Remediation Loop Triggered on Variance</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
