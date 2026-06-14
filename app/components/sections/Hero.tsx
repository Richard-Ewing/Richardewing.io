"use client";

import Link from 'next/link';
import WordRotate from '@/components/magicui/word-rotate';
import { AsSeenIn } from '@/components/AsSeenIn';
import { ArrowRight, Shield, AlertTriangle, Search } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[75vh] flex items-center justify-center py-16">
            <div className="page-container text-center">

                {/* Eyebrow pill — operational authority */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-6">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    <span className="text-sm font-semibold text-zinc-950">Production AI Governance Research Program</span>
                </div>

                {/* H1 — Static dominant thesis */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4 leading-tight max-w-4xl mx-auto">
                    Most AI Failures Are Not Model Failures.{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-violet-500 to-purple-600">
                        They Are Operational Failures.
                    </span>
                </h1>

                {/* Constrained pain rotator — subordinated beneath thesis */}
                <div className="flex justify-center items-center gap-2 mb-4 text-lg md:text-xl text-zinc-700 font-medium">
                    <AlertTriangle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <WordRotate
                        className="text-zinc-900 font-bold"
                        words={[
                            "Context rot degrades every session.",
                            "Retry inflation burns budget overnight.",
                            "Repository drift rewrites production code.",
                            "Verification collapse ships hallucinations.",
                            "Cascading permissions breach containment.",
                        ]}
                    />
                </div>

                {/* Operational specificity subheadline */}
                <p className="text-lg text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    I audit R&D capital, diagnose AI unit economics, and deploy the deterministic 
                    governance frameworks that turn volatile models into predictable enterprise assets.
                </p>

                {/* Dual CTA */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <Link href="/tools/pdi" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 text-zinc-900 font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-rose-500/20">
                        Run a Free Diagnosis <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/advisory" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-zinc-400 text-zinc-950 font-bold text-lg hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                        Book a Strategic Advisory Call
                    </Link>
                </div>

                {/* Credibility line */}
                <p className="text-zinc-800 mb-6 text-sm font-semibold">
                    Richard Ewing, AI Economist · Creator of the <Link href="/framework" className="text-indigo-900 font-extrabold hover:text-indigo-500 transition">Production AI Governance Framework</Link> · Founder of <a href="/exogram" className="text-purple-900 font-extrabold hover:text-purple-500 transition">Exogram</a>
                </p>

                {/* As Seen In */}
                <AsSeenIn />

                {/* 3-Step Engine — DIAGNOSE → CONTAIN → ENFORCE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">

                    <Link href="/tools/pdi" className="card text-left hover:border-rose-300 group block relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-rose-500"></div>
                        <div className="pt-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center">
                                    <Search className="w-5 h-5 text-rose-600" />
                                </div>
                                <div className="text-xs font-bold text-rose-600 uppercase tracking-widest font-mono">Step 01</div>
                            </div>
                            <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-rose-700 text-lg transition-colors">Diagnose</h3>
                            <p className="text-sm font-medium text-zinc-800">Quantify your hidden technical debt in dollar terms. Calculate your Technical Insolvency Date.</p>
                        </div>
                    </Link>

                    <Link href="/runtime-failure-index" className="card text-left hover:border-violet-300 group block relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-violet-500"></div>
                        <div className="pt-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-violet-50 border border-violet-200 flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-violet-600" />
                                </div>
                                <div className="text-xs font-bold text-violet-600 uppercase tracking-widest font-mono">Step 02</div>
                            </div>
                            <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-violet-700 text-lg transition-colors">Contain</h3>
                            <p className="text-sm font-medium text-zinc-800">Map the failure modes destroying your margins. Context rot, retry inflation, verification collapse — with root cause analysis.</p>
                        </div>
                    </Link>

                    <Link href="/exogram" className="card text-left hover:border-purple-300 group block relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                        <div className="pt-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-purple-600" />
                                </div>
                                <div className="text-xs font-bold text-purple-600 uppercase tracking-widest font-mono">Step 03</div>
                            </div>
                            <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-purple-700 text-lg transition-colors">Enforce</h3>
                            <p className="text-sm font-medium text-zinc-800">Deploy deterministic verification infrastructure. Once agents gain execution authority, runtime governance becomes mandatory.</p>
                        </div>
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default Hero;
