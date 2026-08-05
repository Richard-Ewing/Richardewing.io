"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExecutiveInboxStore, ExecutiveInboxItem } from '../../../lib/workspace/executiveInbox';
import { Inbox, ShieldAlert, CheckCircle, Clock, ArrowRight, FileText, CheckSquare } from 'lucide-react';

export default function ExecutiveInboxPage() {
    const [items, setItems] = useState<ExecutiveInboxItem[]>([]);
    const [approvedIds, setApprovedIds] = useState<string[]>([]);

    useEffect(() => {
        setItems(ExecutiveInboxStore.getInboxItems());
    }, []);

    const handleApprove = (id: string) => {
        setApprovedIds(prev => [...prev, id]);
    };

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="mb-8 border-b border-zinc-200 pb-6 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Inbox className="w-5 h-5 text-cyan-600" />
                            <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider">Executive Daily Inbox</span>
                        </div>
                        <h1 className="text-3xl font-grotesk font-bold text-zinc-900">Good Morning, Richard</h1>
                        <p className="text-xs text-zinc-600 font-mono mt-1">
                            {items.length - approvedIds.length} Executive items requiring approval, review, or rehearsal today.
                        </p>
                    </div>

                    <Link href="/workspace" className="text-xs font-mono text-cyan-700 font-bold hover:underline">
                        &larr; Back to Workspace Console
                    </Link>
                </div>

                {/* Inbox List */}
                <div className="space-y-4">
                    {items.map((item) => {
                        const isApproved = approvedIds.includes(item.id);
                        return (
                            <div key={item.id} className={`p-6 rounded-2xl border transition-all ${isApproved ? 'bg-zinc-100 border-zinc-300 opacity-60' : 'bg-white border-zinc-200 shadow-sm hover:border-cyan-500'}`}>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${item.priority === 'Urgent' ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-cyan-100 text-cyan-800 border border-cyan-200'}`}>
                                                {item.priority} • {item.type}
                                            </span>
                                            {isApproved && (
                                                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-200 flex items-center gap-1">
                                                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Approved & Signed
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-lg font-grotesk font-bold text-zinc-900">{item.title}</h3>
                                        <p className="text-xs text-zinc-600 font-mono mt-1">{item.subtitle}</p>
                                    </div>

                                    {!isApproved ? (
                                        <button
                                            onClick={() => handleApprove(item.id)}
                                            className="px-5 py-2.5 bg-zinc-900 hover:bg-cyan-600 text-white font-bold rounded-xl text-xs font-mono transition-colors flex items-center justify-center gap-2 shadow-sm"
                                        >
                                            <CheckSquare className="w-4 h-4" /> {item.actionRequired}
                                        </button>
                                    ) : (
                                        <span className="text-xs font-mono text-emerald-700 font-bold">Execution Staged &rarr;</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
