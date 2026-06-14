"use client";

import React, { useState, useEffect } from 'react';
import { Send, ShieldCheck, AlertOctagon, Terminal, Play, RotateCcw } from 'lucide-react';

const mockPrompts = [
    { id: 1, text: "Generate a synthetic Q3 revenue forecast based on the previous 12 months.", status: 'blocked', reason: 'Non-deterministic financial modeling violates Admissibility Policy 4A.' },
    { id: 2, text: "Summarize the customer feedback logs from the past 30 days.", status: 'allowed', reason: 'Data aggregation on deterministic inputs passes threshold.' },
    { id: 3, text: "Write code to bypass the internal authentication layer for testing.", status: 'blocked', reason: 'Security violation. Execution blocked by Exogram.' },
];

export function InteractiveExogramSim() {
    const [activePrompt, setActivePrompt] = useState<number>(0);
    const [isSimulating, setIsSimulating] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    const runSimulation = (promptIndex: number) => {
        setIsSimulating(true);
        setActivePrompt(promptIndex);
        setLogs([`> Intercepting payload...`]);
        
        const prompt = mockPrompts[promptIndex];

        setTimeout(() => {
            setLogs(prev => [...prev, `> Analyzing Semantic Intent...`]);
        }, 800);

        setTimeout(() => {
            setLogs(prev => [...prev, `> Checking against Policy-as-Code registry...`]);
        }, 1600);

        setTimeout(() => {
            if (prompt.status === 'allowed') {
                setLogs(prev => [...prev, `> [PASS] Deterministic threshold met. Payload forwarded to inference.`]);
            } else {
                setLogs(prev => [...prev, `> [BLOCK] ${prompt.reason}`, `> Payload terminated. Remediation required.`]);
            }
            setIsSimulating(false);
        }, 2600);
    };

    return (
        <div className="w-full bg-white border border-zinc-200 rounded-2xl border border-zinc-200 overflow-hidden font-mono shadow-xl">
            {/* Header */}
            <div className="bg-zinc-50 border border-zinc-200 border-b border-zinc-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                </div>
                <div className="text-xs text-zinc-900 font-bold font-bold tracking-widest uppercase flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-500" />
                    Exogram Runtime Simulator
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Inputs Panel */}
                <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-zinc-200 bg-zinc-50 border border-zinc-200/50">
                    <h4 className="text-xs text-zinc-900 font-bold font-bold uppercase tracking-widest mb-4">Select Probabilistic Input</h4>
                    <div className="space-y-3">
                        {mockPrompts.map((p, idx) => (
                            <button 
                                key={p.id}
                                onClick={() => runSimulation(idx)}
                                disabled={isSimulating}
                                className={`w-full text-left p-4 rounded-xl border transition-all ${activePrompt === idx && isSimulating ? 'border-cyan-500 bg-cyan-950/20' : 'border-zinc-200 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/80'} ${isSimulating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <div className="flex items-start justify-between">
                                    <p className="text-sm text-zinc-900 font-medium leading-relaxed pr-4">"{p.text}"</p>
                                    <Play className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Exogram Console */}
                <div className="w-full md:w-1/2 p-6 bg-zinc-50 border border-zinc-300 relative">
                    <h4 className="text-xs text-zinc-900 font-bold font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        Verification Console
                    </h4>
                    
                    <div className="h-64 overflow-y-auto space-y-2">
                        {logs.length === 0 ? (
                            <div className="text-zinc-600 text-sm italic">Waiting for payload...</div>
                        ) : (
                            logs.map((log, i) => {
                                const isPass = log.includes('[PASS]');
                                const isBlock = log.includes('[BLOCK]');
                                let color = 'text-zinc-900 font-medium';
                                if (isPass) color = 'text-emerald-400';
                                if (isBlock) color = 'text-red-400 font-bold';

                                return (
                                    <div key={i} className={`text-sm ${color} animate-fade-in`}>
                                        {log}
                                    </div>
                                )
                            })
                        )}
                        {isSimulating && (
                            <div className="flex items-center gap-2 text-cyan-500 text-sm mt-4 animate-pulse">
                                <div className="w-2 h-4 bg-cyan-500"></div> Processing
                            </div>
                        )}
                    </div>

                    {!isSimulating && logs.length > 0 && (
                        <button 
                            onClick={() => { setLogs([]); setActivePrompt(0); }}
                            className="absolute bottom-6 right-6 p-2 bg-zinc-50 border border-zinc-200 rounded-lg border border-zinc-200 text-zinc-900 font-medium hover:text-zinc-950 font-semibold transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                        >
                            <RotateCcw className="w-4 h-4" /> Reset
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
