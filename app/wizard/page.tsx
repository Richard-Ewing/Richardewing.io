"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { WizardPipeline, WizardState } from '../../lib/wizard/wizardPipeline';
import { Target, Activity, CheckCircle, ArrowRight, Shield, Download, Layers, Sparkles, ExternalLink } from 'lucide-react';

export default function MissionWizardPage() {
    const [state, setState] = useState<WizardState>({
        step: 1,
        selectedObjective: 'Reduce AI OpEx & Eliminate Context Rot',
        targetRole: 'CFO',
        connectedProviders: ['AWS', 'GitHub', 'Anthropic'],
        businessContext: {
            industry: 'SaaS / Enterprise Software',
            employeeCount: 450,
            annualAISpendUSD: 450000,
            riskAppetite: 'Balanced'
        }
    });

    const [isExecuting, setIsExecuting] = useState(false);

    const handleRunWizard = async () => {
        setIsExecuting(true);
        const result = await WizardPipeline.executeStep6Through10(state);
        setState(result);
        setIsExecuting(false);
    };

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header & Wizard Progress */}
                <div className="mb-8 border-b border-zinc-200 pb-6">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded bg-cyan-50 text-cyan-700 font-mono text-xs font-bold border border-cyan-200">
                                Step {state.step} of 10
                            </span>
                            <span className="text-xs font-mono text-zinc-500 uppercase font-bold">Universal Executive Mission Wizard</span>
                        </div>
                        <Link href="/workspace" className="text-xs font-mono text-cyan-700 font-bold hover:underline">
                            View Customer Workspace &rarr;
                        </Link>
                    </div>
                    <h1 className="text-3xl font-grotesk font-bold text-zinc-900">Execute Executive Mission</h1>
                    <p className="text-xs text-zinc-600 font-mono mt-1">
                        Connect telemetry, run causal reasoning engines, stage execution tickets, and compile board-ready slide decks in 10 guided steps.
                    </p>

                    {/* Step Visualizer */}
                    <div className="mt-6 grid grid-cols-5 sm:grid-cols-10 gap-1 text-[10px] font-mono text-center font-bold">
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`py-1.5 rounded ${idx + 1 <= state.step ? 'bg-cyan-600 text-white font-bold' : 'bg-zinc-200 text-zinc-500'}`}
                            >
                                {idx + 1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step 1 to 5 Input Controls */}
                {state.step < 10 && (
                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
                        <div>
                            <label className="block text-xs font-mono text-cyan-700 font-bold uppercase mb-2">Step 1: Select Mission Objective</label>
                            <select 
                                value={state.selectedObjective}
                                onChange={(e) => setState({ ...state, selectedObjective: e.target.value })}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-3 text-sm font-grotesk font-bold text-zinc-900 focus:outline-none focus:border-cyan-500"
                            >
                                <option value="Reduce AI OpEx & Eliminate Context Rot">Reduce AI OpEx & Eliminate Context Rot ($319,500/yr)</option>
                                <option value="Renew Cursor Enterprise Licensing">Renew Cursor Enterprise Licensing ($185,000/yr)</option>
                                <option value="Prepare Board Meeting Briefing & Deck">Prepare Board Meeting Briefing & Deck (11 Slides)</option>
                                <option value="Defend Next Year Technology Budget">Defend Next Year Technology Budget ($612,000/yr)</option>
                                <option value="Prepare for Enterprise SOX & AI Audit">Prepare for Enterprise SOX & AI Audit ($450,000/yr)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-cyan-700 font-bold uppercase mb-2">Step 2: Executive Role Persona</label>
                            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-xs">
                                {['CEO', 'CFO', 'CTO', 'CIO', 'CISO'].map((role) => (
                                    <button
                                        key={role}
                                        onClick={() => setState({ ...state, targetRole: role as any })}
                                        className={`py-2 rounded-lg font-bold border transition-colors ${state.targetRole === role ? 'bg-cyan-600 text-white border-cyan-500 font-bold' : 'bg-zinc-50 text-zinc-700 border-zinc-200'}`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-cyan-700 font-bold uppercase mb-2">Step 3: Connect Enterprise Telemetry</label>
                            <div className="flex flex-wrap gap-2">
                                {['AWS', 'Azure', 'GitHub', 'Anthropic', 'OpenAI', 'Datadog', 'ServiceNow', 'Jira'].map((prov) => (
                                    <span key={prov} className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-lg text-xs font-mono text-zinc-800 font-bold flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3 text-emerald-600" /> {prov} Connected
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleRunWizard}
                            disabled={isExecuting}
                            className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold font-mono rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                        >
                            {isExecuting ? <Activity className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                            Run 10-Step Mission Wizard Execution &rarr;
                        </button>
                    </div>
                )}

                {/* Step 10 Final Deliverables View */}
                {state.step === 10 && state.decisionPackage && (
                    <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950 text-white rounded-2xl p-8 shadow-xl border border-zinc-800 space-y-6">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                                        Step 10 Complete • Verified Execution
                                    </span>
                                </div>
                                <h2 className="text-2xl font-grotesk font-bold text-white">{state.selectedObjective}</h2>
                            </div>
                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-mono font-bold">
                                Savings: ${state.verifiedSavingsUSD?.toLocaleString()}/yr
                            </span>
                        </div>

                        <div className="p-4 bg-zinc-900/90 rounded-xl border border-zinc-800 space-y-2">
                            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Compiled Decision Package Summary</span>
                            <p className="text-xs text-zinc-300">{state.decisionPackage.summary}</p>
                        </div>

                        {/* Staged Execution Tickets */}
                        <div>
                            <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase mb-3">Staged Execution Tickets ({state.executionTickets?.length})</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {state.executionTickets?.map((tkt) => (
                                    <div key={tkt.ticketId} className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] font-mono text-cyan-400 font-bold">{tkt.target} • {tkt.status}</span>
                                            <h5 className="font-bold text-white text-xs mt-0.5">{tkt.title}</h5>
                                        </div>
                                        <a href={tkt.externalRefUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 text-zinc-400 hover:text-white">
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Generated Artifacts Grid */}
                        <div>
                            <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase mb-3">Compiled Executive Deliverables ({state.artifacts?.length})</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {state.artifacts?.map((art) => (
                                    <div key={art.artifactId} className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">{art.deliverableType}</span>
                                            <h5 className="font-bold text-white text-xs mt-1">{art.title}</h5>
                                        </div>
                                        <a href={art.downloadRef} target="_blank" rel="noopener noreferrer" className="mt-3 pt-2 border-t border-zinc-800 text-[11px] font-mono text-cyan-400 font-bold flex items-center justify-between">
                                            Download File <Download className="w-3 h-3" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                            <button
                                onClick={() => setState({ ...state, step: 1 })}
                                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                            >
                                &larr; Execute Another Mission
                            </button>
                            <Link
                                href="/workspace"
                                className="px-5 py-2 bg-cyan-600 text-white font-bold rounded-lg text-xs font-mono hover:bg-cyan-700 transition-colors shadow-sm"
                            >
                                Open Persistent Workspace &rarr;
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
