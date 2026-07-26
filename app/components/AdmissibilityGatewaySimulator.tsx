"use client";

import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, Zap, Terminal, RefreshCw, Check, Play } from 'lucide-react';

export const AdmissibilityGatewaySimulator = () => {
    const [simState, setSimState] = useState<'idle' | 'running' | 'rejected' | 'passed'>('idle');
    const [scenario, setScenario] = useState<'token_blowout' | 'unauthorized_exec' | 'valid_query'>('token_blowout');

    const runSimulation = () => {
        setSimState('running');
        setTimeout(() => {
            if (scenario === 'valid_query') {
                setSimState('passed');
            } else {
                setSimState('rejected');
            }
        }, 1200);
    };

    return (
        <div className="my-12 bg-zinc-950 border border-purple-800/60 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden relative">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-300 uppercase tracking-widest mb-1">
                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                        <span>Interactive Gateway Runtime Simulator</span>
                    </div>
                    <h3 className="text-2xl font-grotesk font-bold text-white">
                        Admissibility Gateway in Action
                    </h3>
                </div>

                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl text-xs font-mono">
                    <button
                        onClick={() => { setScenario('token_blowout'); setSimState('idle'); }}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                            scenario === 'token_blowout' ? 'bg-purple-600 text-white' : 'text-zinc-300 hover:text-white'
                        }`}
                    >
                        Token Blowout
                    </button>
                    <button
                        onClick={() => { setScenario('unauthorized_exec'); setSimState('idle'); }}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                            scenario === 'unauthorized_exec' ? 'bg-purple-600 text-white' : 'text-zinc-300 hover:text-white'
                        }`}
                    >
                        Unauthorized Exec
                    </button>
                    <button
                        onClick={() => { setScenario('valid_query'); setSimState('idle'); }}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                            scenario === 'valid_query' ? 'bg-purple-600 text-white' : 'text-zinc-300 hover:text-white'
                        }`}
                    >
                        Sanctioned Request
                    </button>
                </div>
            </div>

            {/* Terminal Screen */}
            <div className="bg-black border border-zinc-800 rounded-2xl p-5 font-mono text-xs space-y-3 min-h-[220px] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-purple-300 text-[10px] font-bold">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-purple-400" />
                        <span>exogram-runtime-node-01.internal.vpc</span>
                    </div>
                    <span>POLICY_VER_1.4.2</span>
                </div>

                <div className="space-y-1.5">
                    <div className="text-zinc-200 font-medium">
                        [<span className="text-purple-400 font-bold">INBOUND PROMPT</span>] Payload received from agent-worker-89
                    </div>
                    
                    {scenario === 'token_blowout' && (
                        <div className="text-amber-300 font-bold">
                            &gt; Action: Recursive SQL execution loop detected (Est. tokens: 142,000 / $18.40)
                        </div>
                    )}
                    {scenario === 'unauthorized_exec' && (
                        <div className="text-amber-300 font-bold">
                            &gt; Action: Attempting un-sandboxed shell call `rm -rf /production/tmp`
                        </div>
                    )}
                    {scenario === 'valid_query' && (
                        <div className="text-emerald-300 font-bold">
                            &gt; Action: Structured vector lookup for user dashboard report
                        </div>
                    )}

                    {simState === 'running' && (
                        <div className="flex items-center gap-2 text-purple-300 font-bold py-2">
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>Evaluating admissibility bounds & cost ceilings...</span>
                        </div>
                    )}

                    {simState === 'rejected' && (
                        <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-xl space-y-1 text-rose-100 mt-3 animate-in fade-in">
                            <div className="flex items-center gap-2 font-bold text-rose-300">
                                <ShieldAlert className="w-4 h-4" />
                                <span>GATEWAY REJECTION (HARD BLOCK ENFORCED)</span>
                            </div>
                            <p className="text-[11px] text-zinc-200 font-medium">
                                Violation: Deterministic budget ceiling exceeded. Action blocked before model invocation. Margin preserved ($0.00 spent).
                            </p>
                        </div>
                    )}

                    {simState === 'passed' && (
                        <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-xl space-y-1 text-emerald-100 mt-3 animate-in fade-in">
                            <div className="flex items-center gap-2 font-bold text-emerald-300">
                                <ShieldCheck className="w-4 h-4" />
                                <span>ADMISSIBLE EXECUTION (PASSED IN 4ms)</span>
                            </div>
                            <p className="text-[11px] text-zinc-200 font-medium">
                                Deterministic bounds verified. Request passed to LLM mesh under token quota.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Controls */}
            <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                    onClick={runSimulation}
                    disabled={simState === 'running'}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shrink-0 cursor-pointer disabled:opacity-50"
                >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Gateway Simulation</span>
                </button>

                <div className="text-xs text-zinc-300 font-mono font-medium">
                    Deterministic controls guarantee zero unexpected API billing shock.
                </div>
            </div>
        </div>
    );
};

export default AdmissibilityGatewaySimulator;
