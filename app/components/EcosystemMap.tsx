'use client';

import React from 'react';
import Link from 'next/link';

export default function EcosystemMap() {
    return (
        <div className="w-full bg-[#FCFAF7] border border-zinc-300 rounded-3xl p-6 sm:p-10 my-12 relative overflow-hidden shadow-sm">
            {/* Subtle mesh background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <div className="text-center mb-8">
                    <span className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-[0.2em] bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">Ontology Mesh Map</span>
                    <h3 className="text-xl font-bold font-grotesk text-zinc-950 mt-3">The Production AI Governance Ecosystem</h3>
                    <p className="text-xs text-zinc-900 mt-1 max-w-md mx-auto">Every resource on this site is a node in a single multi-year research program exploring AI operational limits.</p>
                </div>

                {/* Flow Diagram */}
                <div className="w-full flex flex-col items-center gap-6">
                    {/* Node 1: Research Program */}
                    <Link href="/research" className="w-64 group">
                        <div className="p-4 rounded-xl border border-zinc-400 bg-white hover:border-cyan-500 transition-all text-center relative shadow-sm">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                            <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">THE ORIGIN (WHY)</div>
                            <div className="font-bold text-sm text-zinc-950 group-hover:text-cyan-900 transition-colors">Research Program</div>
                            <div className="text-[10px] text-zinc-950 font-semibold mt-0.5">Evolution & Lineage Timeline</div>
                        </div>
                    </Link>

                    {/* Connecting Line */}
                    <div className="h-6 w-px bg-gradient-to-b from-zinc-300 to-zinc-400 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
                    </div>

                    {/* Node 2: Frameworks */}
                    <Link href="/framework" className="w-64 group">
                        <div className="p-4 rounded-xl border border-zinc-400 bg-white hover:border-cyan-500 transition-all text-center relative shadow-sm">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                            <div className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-widest mb-1">THE SYSTEM (WHAT)</div>
                            <div className="font-bold text-sm text-zinc-950 group-hover:text-cyan-900 transition-colors">Governance Framework</div>
                            <div className="text-[10px] text-zinc-950 font-semibold mt-0.5">The 6-Pillar Operational Model</div>
                        </div>
                    </Link>

                    {/* Connecting Split Lines */}
                    <div className="w-full max-w-lg flex flex-col items-center">
                        <div className="h-4 w-px bg-zinc-400" />
                        <div className="w-full h-px bg-zinc-400" />
                        <div className="w-full flex justify-between px-6 sm:px-12">
                            <div className="h-4 w-px bg-zinc-400" />
                            <div className="h-4 w-px bg-zinc-400" />
                            <div className="h-4 w-px bg-zinc-400" />
                        </div>
                    </div>

                    {/* Asset Nodes (Three Columns) */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Node 3: Articles */}
                        <Link href="/articles" className="group">
                            <div className="p-4 rounded-xl border border-zinc-400 bg-white hover:border-cyan-500 transition-all text-center relative h-full shadow-sm">
                                <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">EVIDENCE</div>
                                <div className="font-bold text-sm text-zinc-950 group-hover:text-cyan-900 transition-colors">Articles & Papers</div>
                                <div className="text-[10px] text-zinc-950 font-semibold mt-1">CIO.com, Built In, The Canon</div>
                            </div>
                        </Link>

                        {/* Node 4: Diagnostics */}
                        <Link href="/tools" className="group">
                            <div className="p-4 rounded-xl border border-zinc-400 bg-white hover:border-cyan-500 transition-all text-center relative h-full shadow-sm">
                                <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">MEASUREMENT</div>
                                <div className="font-bold text-sm text-zinc-950 group-hover:text-cyan-900 transition-colors">Diagnostic Tools</div>
                                <div className="text-[10px] text-zinc-950 font-semibold mt-1">PDI, AUEB, EV-SE Engine</div>
                            </div>
                        </Link>

                        {/* Node 5: Curriculum */}
                        <Link href="/curriculum" className="group">
                            <div className="p-4 rounded-xl border border-zinc-400 bg-white hover:border-cyan-500 transition-all text-center relative h-full shadow-sm">
                                <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">EDUCATION</div>
                                <div className="font-bold text-sm text-zinc-950 group-hover:text-cyan-900 transition-colors">Academy Curriculum</div>
                                <div className="text-[10px] text-zinc-950 font-semibold mt-1">25 Tracks, 303 Stepper Modules</div>
                            </div>
                        </Link>
                    </div>

                    {/* Connecting Split Lines Down */}
                    <div className="w-full max-w-lg flex flex-col items-center">
                        <div className="w-full flex justify-between px-6 sm:px-12">
                            <div className="h-4 w-px bg-zinc-400" />
                            <div className="h-4 w-px bg-zinc-400" />
                            <div className="h-4 w-px bg-zinc-400" />
                        </div>
                        <div className="w-full h-px bg-zinc-400" />
                        <div className="h-4 w-px bg-zinc-400" />
                    </div>

                    {/* Convergence Box: Exogram & GitHub */}
                    <div className="w-full max-w-md grid grid-cols-2 gap-4">
                        {/* Node 6: Exogram */}
                        <Link href="/exogram" className="group">
                            <div className="p-4 rounded-xl border border-purple-300 bg-purple-50/50 hover:border-purple-500 transition-all text-center relative shadow-sm">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                                <div className="text-[10px] font-mono font-bold text-purple-700 uppercase tracking-widest mb-1">RUNTIME CONTROL</div>
                                <div className="font-bold text-sm text-zinc-950 group-hover:text-purple-900 transition-colors">Exogram Platform</div>
                                <div className="text-[10px] text-zinc-950 font-semibold mt-1">Deterministic Boundary</div>
                            </div>
                        </Link>

                        {/* Node 7: GitHub */}
                        <a href="https://github.com/Richard-Ewing" target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="p-4 rounded-xl border border-zinc-400 bg-white hover:border-cyan-500 transition-all text-center relative h-full shadow-sm">
                                <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">INFRASTRUCTURE</div>
                                <div className="font-bold text-sm text-zinc-950 group-hover:text-cyan-900 transition-colors">GitHub Codebase</div>
                                <div className="text-[10px] text-zinc-950 font-semibold mt-1">Open-Source Engine (SECS)</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
