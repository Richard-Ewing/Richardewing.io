"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { EnterpriseRuntime } from '../../../lib/runtime/enterpriseRuntime';
import { RealityEngine } from '../../../lib/reality/realityEngine';
import { EnterpriseTimeline } from '../../../lib/timeline/enterpriseTimeline';
import { EnterpriseSearch, SearchResultItem } from '../../../lib/search/enterpriseSearch';
import { Building2, Search, Activity, Clock, Layers, ShieldCheck, Database, FileText } from 'lucide-react';

export default function OrganizationOperatingSystemPage() {
    const org = EnterpriseRuntime.getOrganizationState();
    const entities = EnterpriseRuntime.getEntities();
    const reality = RealityEngine.computeEnterpriseReality();
    const timeline = EnterpriseTimeline.getTimeline();

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);

    const handleSearch = (q: string) => {
        setSearchQuery(q);
        if (q.trim().length > 0) {
            setSearchResults(EnterpriseSearch.search(q));
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Navigation Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
                    <Link href="/workspace" className="hover:text-cyan-600 transition-colors">Workspace</Link>
                    <span>/</span>
                    <span className="text-zinc-900 font-semibold">Enterprise Operating System</span>
                </div>

                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-cyan-600" />
                            </div>
                            <span className="text-sm font-mono text-cyan-700 font-bold uppercase tracking-wider">Enterprise OS Graph</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">{org.organizationName}</h1>
                        <p className="text-xs font-mono text-zinc-600 mt-1">
                            Universal Entity Graph • Reality Engine Confidence: <span className="text-emerald-700 font-bold">{reality.confidenceScorePct}%</span>
                        </p>
                    </div>

                    {/* Universal Search Console */}
                    <div className="w-full md:w-80">
                        <div className="relative">
                            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                placeholder="Search vendors, repos, board decisions..."
                                className="w-full pl-9 pr-4 py-2 bg-white border border-zinc-300 rounded-xl text-xs font-mono text-zinc-900 focus:outline-none focus:border-cyan-500"
                            />
                        </div>
                    </div>
                </header>

                {/* Universal Search Results Overlay */}
                {searchResults.length > 0 && (
                    <div className="mb-8 p-6 bg-white rounded-2xl border border-cyan-500/50 shadow-lg space-y-3">
                        <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Universal Search Results ({searchResults.length})</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {searchResults.map((item) => (
                                <div key={item.id} className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                                    <span className="text-[10px] font-mono text-cyan-700 font-bold uppercase">{item.type}</span>
                                    <h4 className="font-bold text-zinc-900 text-xs mt-0.5">{item.title}</h4>
                                    <p className="text-[11px] font-mono text-zinc-600 mt-1">{item.snippet}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Reality Engine Summary */}
                <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950 text-white rounded-2xl p-8 shadow-xl border border-zinc-800 space-y-6 mb-10">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                        <div>
                            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Enterprise Reality Engine</span>
                            <h2 className="text-2xl font-grotesk font-bold text-white">Current Reality vs Forecast Trajectory</h2>
                        </div>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-mono font-bold">
                            Exposure: ${reality.financialExposureUSD.toLocaleString()}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                        <div className="p-4 bg-zinc-900/90 rounded-xl border border-zinc-800">
                            <span className="text-cyan-400 font-bold block mb-1">Current Reality</span>
                            <p className="text-zinc-300">{reality.currentState}</p>
                        </div>

                        <div className="p-4 bg-zinc-900/90 rounded-xl border border-zinc-800">
                            <span className="text-amber-400 font-bold block mb-1">Forecast Trajectory</span>
                            <p className="text-zinc-300">{reality.forecastState}</p>
                        </div>

                        <div className="p-4 bg-zinc-900/90 rounded-xl border border-zinc-800">
                            <span className="text-emerald-400 font-bold block mb-1">Desired Future State</span>
                            <p className="text-zinc-300">{reality.desiredState}</p>
                        </div>
                    </div>
                </div>

                {/* Registered Enterprise Entities Grid */}
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm mb-10">
                    <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-cyan-600" /> Universal Enterprise Entities ({entities.length})
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                        {entities.map((ent) => (
                            <div key={ent.id} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                                <span className="text-[10px] text-cyan-700 font-bold uppercase">{ent.type}</span>
                                <h4 className="font-bold text-zinc-900 text-sm mt-1">{ent.name}</h4>
                                <span className="text-zinc-500 block text-[11px] mt-1">Owner: {ent.ownerRole} • v{ent.version}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Global Enterprise Timeline */}
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                    <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-cyan-600" /> Global Enterprise Timeline
                    </h3>

                    <div className="space-y-4 font-mono text-xs">
                        {timeline.map((evt) => (
                            <div key={evt.eventId} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] text-cyan-700 font-bold uppercase">{evt.category} • {new Date(evt.timestamp).toLocaleDateString()}</span>
                                    <h4 className="font-bold text-zinc-900 text-sm mt-0.5">{evt.title}</h4>
                                    <p className="text-zinc-600 text-xs mt-1">{evt.description}</p>
                                </div>
                                {evt.financialImpactUSD && (
                                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                                        +${evt.financialImpactUSD.toLocaleString()}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
