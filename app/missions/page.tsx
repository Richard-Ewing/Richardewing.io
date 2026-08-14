"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { EXECUTIVE_MISSION_CATALOG, ExecutiveMissionDefinition } from '../../lib/product/missions';
import { MissionRuntime, ExecutedMissionOutput } from '../../lib/runtime/missionRuntime';
import { Target, Activity, CheckCircle, ArrowRight, Shield, Layers, FileText, ExternalLink } from 'lucide-react';

export default function MissionsCatalogPage() {
    const [selectedMission, setSelectedMission] = useState<ExecutiveMissionDefinition | null>(null);
    const [isExecuting, setIsExecuting] = useState(false);
    const [missionOutput, setMissionOutput] = useState<ExecutedMissionOutput | null>(null);

    const handleExecuteMission = async (mission: ExecutiveMissionDefinition) => {
        setSelectedMission(mission);
        setIsExecuting(true);
        setMissionOutput(null);

        const output = await MissionRuntime.executeMission(mission);
        setMissionOutput(output);
        setIsExecuting(false);
    };

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Navigation Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
                    <Link href="/dashboard" className="hover:text-cyan-600 transition-colors">Console</Link>
                    <span>/</span>
                    <span className="text-zinc-900 font-semibold">Executive Mission System</span>
                </div>

                {/* Header */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <Target className="w-5 h-5 text-cyan-600" />
                            </div>
                            <span className="text-sm font-mono text-cyan-700 font-bold uppercase tracking-wider">Executive Mission Operating System</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">Executive Mission Catalog</h1>
                        <p className="text-zinc-600 text-sm mt-2 max-w-2xl">
                            High-stakes executive missions orchestrating evidence collection, decision packages, execution ticket staging, and board deck compilation.
                        </p>
                    </div>
                </header>

                {/* Missions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {EXECUTIVE_MISSION_CATALOG.map((mission) => (
                        <div key={mission.id} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between hover:border-cyan-500 transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 font-mono text-xs font-bold border border-cyan-200">
                                        Role: {mission.targetRole}
                                    </span>
                                    {mission.commercialGoalUSD > 0 && (
                                        <span className="text-xs font-mono text-emerald-600 font-bold">
                                            Target: ${mission.commercialGoalUSD.toLocaleString()}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-4">{mission.title}</h3>

                                <div className="space-y-2 mb-6">
                                    <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Execution Sequence:</span>
                                    {mission.executionSteps.map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-xs font-mono text-zinc-700">
                                            <span className="text-cyan-600 font-bold">{idx + 1}.</span>
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => handleExecuteMission(mission)}
                                className="w-full py-2.5 bg-zinc-900 hover:bg-cyan-600 text-white font-bold rounded-xl text-xs font-mono transition-colors flex items-center justify-center gap-2"
                            >
                                Launch Executive Mission <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Execution State */}
                {isExecuting && (
                    <div className="p-8 bg-white rounded-2xl border border-cyan-500/50 shadow-lg text-center space-y-4">
                        <Activity className="w-10 h-10 text-cyan-600 animate-spin mx-auto" />
                        <h3 className="text-xl font-grotesk font-bold text-zinc-900">Executing Mission: {selectedMission?.title}</h3>
                        <p className="text-xs font-mono text-zinc-600">Gathering telemetry, compiling decision packages, staging execution tickets, and generating slide decks...</p>
                    </div>
                )}

                {missionOutput && (
                    <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950 text-white rounded-2xl p-8 shadow-xl border border-zinc-800 space-y-6">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                            <div>
                                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Mission Executed Successfully</span>
                                <h2 className="text-2xl font-grotesk font-bold text-white">{missionOutput.title}</h2>
                            </div>
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-mono font-bold">
                                Version: {missionOutput.versionRecordId}
                            </span>
                        </div>

                        {/* Staged Execution Tickets */}
                        <div>
                            <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase mb-3">Staged Execution Tickets ({missionOutput.executionTickets.length})</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {missionOutput.executionTickets.map((tkt) => (
                                    <div key={tkt.ticketId} className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] font-mono text-cyan-400 font-bold">{tkt.target} • {tkt.status}</span>
                                            <h5 className="font-bold text-white text-xs mt-1">{tkt.title}</h5>
                                        </div>
                                        <a href={tkt.externalRefUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Generated Presentation Deck */}
                        <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">Presentation Deck ({missionOutput.presentationDeck.tier})</span>
                                <h5 className="font-bold text-white text-sm mt-1">{missionOutput.presentationDeck.slides[0].title}</h5>
                                <p className="text-xs text-zinc-400 mt-1">{missionOutput.presentationDeck.slideCount} Compiled Slides Ready for Board Presentation</p>
                            </div>
                            <a
                                href={missionOutput.presentationDeck.exportRefUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-cyan-500 text-zinc-950 font-bold rounded-lg text-xs font-mono hover:bg-cyan-400 transition-colors"
                            >
                                Export Deck (.pptx)
                            </a>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
