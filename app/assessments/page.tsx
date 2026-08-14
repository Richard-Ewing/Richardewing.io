"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCT_ASSESSMENT_CATALOG, AssessmentDefinition } from '../../lib/product/assessments';
import { AssessmentCompiler, CompiledAssessmentOutput } from '../../lib/compiler/assessmentCompiler';
import { Activity, Shield, FileText, ArrowRight, CheckCircle, Download, Layers } from 'lucide-react';

export default function AssessmentCatalogPage() {
    const [selectedAssessment, setSelectedAssessment] = useState<AssessmentDefinition | null>(null);
    const [isCompiling, setIsCompiling] = useState(false);
    const [compiledResult, setCompiledResult] = useState<CompiledAssessmentOutput | null>(null);

    const handleRunAssessment = async (def: AssessmentDefinition) => {
        setSelectedAssessment(def);
        setIsCompiling(true);
        setCompiledResult(null);

        const result = await AssessmentCompiler.compileAssessment(def);
        setCompiledResult(result);
        setIsCompiling(false);
    };

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Navigation Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
                    <Link href="/dashboard" className="hover:text-cyan-600 transition-colors">Console</Link>
                    <span>/</span>
                    <span className="text-zinc-900 font-semibold">Executive Product Catalog</span>
                </div>

                {/* Header */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-cyan-600" />
                            </div>
                            <span className="text-sm font-mono text-cyan-700 font-bold uppercase tracking-wider">Productized Digital Assessments</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">Executive Assessment Catalog</h1>
                        <p className="text-zinc-600 text-sm mt-2 max-w-2xl">
                            Self-service digital assessment compilers that transform enterprise telemetry into verified decision packages and executive-ready deliverables.
                        </p>
                    </div>
                </header>

                {/* Catalog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {PRODUCT_ASSESSMENT_CATALOG.map((def) => (
                        <div key={def.id} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between hover:border-cyan-500 transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 font-mono text-xs font-bold border border-cyan-200">
                                        Role: {def.targetRole}
                                    </span>
                                    <span className="text-xs font-mono text-zinc-500">{def.estimatedDurationMinutes} mins</span>
                                </div>

                                <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-2">{def.title}</h3>
                                <p className="text-xs font-mono text-zinc-600 mb-4">{def.primaryQuestion}</p>

                                <div className="space-y-2 mb-6">
                                    <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Generated Deliverables:</span>
                                    <div className="flex flex-wrap gap-1">
                                        {def.deliverables.map(del => (
                                            <span key={del} className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 text-[11px] font-mono border border-zinc-200">
                                                {del}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleRunAssessment(def)}
                                className="w-full py-2.5 bg-zinc-900 hover:bg-cyan-600 text-white font-bold rounded-xl text-xs font-mono transition-colors flex items-center justify-center gap-2"
                            >
                                Compile Assessment <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Compilation Status & Results Display */}
                {isCompiling && (
                    <div className="p-8 bg-white rounded-2xl border border-cyan-500/50 shadow-lg text-center space-y-4">
                        <Activity className="w-10 h-10 text-cyan-600 animate-spin mx-auto" />
                        <h3 className="text-xl font-grotesk font-bold text-zinc-900">Compiling Assessment: {selectedAssessment?.title}</h3>
                        <p className="text-xs font-mono text-zinc-600">Gathering telemetry, executing causal engines, and compiling executive deliverables...</p>
                    </div>
                )}

                {compiledResult && (
                    <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950 text-white rounded-2xl p-8 shadow-xl border border-zinc-800 space-y-6">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                            <div>
                                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Assessment Compiled Successfully</span>
                                <h2 className="text-2xl font-grotesk font-bold text-white">{compiledResult.decisionPackage.questionText}</h2>
                            </div>
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-mono font-bold">
                                Confidence: {compiledResult.decisionPackage.overallConfidencePct}%
                            </span>
                        </div>

                        <div className="p-4 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-2">
                            <span className="text-xs font-mono text-cyan-400 font-bold">Executive Narrative & Impact</span>
                            <p className="text-xs text-zinc-300">{compiledResult.decisionPackage.summary}</p>
                            <span className="text-xs font-mono text-emerald-400 font-bold block mt-2">
                                Expected Annual Value Recovery: ${compiledResult.decisionPackage.expectedOutcomeUSD.toLocaleString()}
                            </span>
                        </div>

                        {/* Generated Executive Deliverables */}
                        <div>
                            <h4 className="text-sm font-mono text-cyan-400 font-bold uppercase mb-3">Generated Executive Artifacts ({compiledResult.artifacts.length})</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {compiledResult.artifacts.map((art) => (
                                    <div key={art.artifactId} className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">{art.deliverableType}</span>
                                            <h5 className="font-bold text-white text-sm mt-1">{art.title}</h5>
                                        </div>
                                        <a
                                            href={art.downloadRef}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 pt-2 border-t border-zinc-800 text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center justify-between font-bold"
                                        >
                                            Download Artifact <Download className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
