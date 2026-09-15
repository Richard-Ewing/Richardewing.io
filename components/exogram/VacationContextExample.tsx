'use client';

import React, { useState } from 'react';
import { Bot, Sparkles, CheckCircle2, HelpCircle, MapPin, Calendar, Users, DollarSign, ArrowRight } from 'lucide-react';

export default function VacationContextExample() {
    const [viewMode, setViewMode] = useState<'exogram' | 'standard'>('exogram');

    return (
        <div className="w-full bg-white border border-zinc-300 rounded-2xl p-6 md:p-8 shadow-sm text-left relative overflow-hidden">
            {/* View Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-6">
                <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                        Interactive Case Demonstration
                    </span>
                    <h3 className="text-xl font-grotesk font-bold text-zinc-950 mt-1">
                        The Prompt-Engineering Tax in Action
                    </h3>
                </div>

                <div className="inline-flex rounded-xl bg-zinc-100 p-1 border border-zinc-200">
                    <button
                        type="button"
                        onClick={() => setViewMode('exogram')}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                            viewMode === 'exogram'
                                ? 'bg-purple-600 text-white shadow-sm'
                                : 'text-zinc-700 hover:text-zinc-950'
                        }`}
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        With Exogram
                    </button>
                    <button
                        type="button"
                        onClick={() => setViewMode('standard')}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                            viewMode === 'standard'
                                ? 'bg-zinc-800 text-white shadow-sm'
                                : 'text-zinc-700 hover:text-zinc-950'
                        }`}
                    >
                        <Bot className="w-3.5 h-3.5" />
                        Conventional Chatbot
                    </button>
                </div>
            </div>

            {/* Prompt Card */}
            <div className="mb-6 p-4 rounded-xl bg-purple-50/50 border border-purple-200 flex items-start gap-3">
                <div className="px-2.5 py-1 bg-purple-600 text-white text-[11px] font-mono font-bold rounded uppercase tracking-wider shrink-0 mt-0.5">
                    User Question
                </div>
                <div className="text-zinc-950 font-serif italic text-base sm:text-lg font-medium">
                    &ldquo;Where should we go for vacation in October?&rdquo;
                </div>
            </div>

            {/* Comparison Display */}
            {viewMode === 'exogram' ? (
                <div className="space-y-6">
                    {/* Retained Context Pills */}
                    <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                Retained User-Controlled Context (Active &amp; Editable)
                            </span>
                            <span className="text-[11px] font-mono text-zinc-500">
                                4 Relevant Entities Assembled
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                            <div className="p-2.5 bg-white rounded-lg border border-zinc-200 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                                <div>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Home Area</div>
                                    <div className="font-semibold text-zinc-900">Seattle Area</div>
                                </div>
                            </div>
                            <div className="p-2.5 bg-white rounded-lg border border-zinc-200 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-purple-600 shrink-0" />
                                <div>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Timeline Event</div>
                                    <div className="font-semibold text-zinc-900">October Anniversary</div>
                                </div>
                            </div>
                            <div className="p-2.5 bg-white rounded-lg border border-zinc-200 flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-purple-600 shrink-0" />
                                <div>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Trip Style</div>
                                    <div className="font-semibold text-zinc-900">Driveable, Budget-Conscious</div>
                                </div>
                            </div>
                            <div className="p-2.5 bg-white rounded-lg border border-zinc-200 flex items-center gap-2">
                                <Users className="w-4 h-4 text-purple-600 shrink-0" />
                                <div>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Likely Travelers</div>
                                    <div className="font-semibold text-zinc-900">Couple or Family</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Exogram Response Card */}
                    <div className="bg-white rounded-xl p-5 md:p-6 border-2 border-purple-500/40 shadow-sm relative">
                        <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900">
                                    Exogram Context-Aware Model Response
                                </span>
                            </div>
                            <span className="text-[11px] font-mono bg-purple-100 text-purple-900 px-2 py-0.5 rounded font-medium">
                                Smallest Question Protocol
                            </span>
                        </div>

                        <blockquote className="text-zinc-950 font-sans text-base leading-relaxed mb-4 border-l-2 border-purple-500 pl-4 py-1">
                            &ldquo;October may be a celebration month for you. Are you planning a family trip, a couples getaway, or one trip for both? I can start with driveable, budget-conscious options from the Seattle area. To make this practical, I only need to know whether you want a long weekend or a full week.&rdquo;
                        </blockquote>

                        <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600 font-sans">
                            <div className="flex items-center gap-1 text-emerald-700 font-medium">
                                <CheckCircle2 className="w-4 h-4 shrink-0" />
                                Formed a transparent, editable hypothesis from retained context.
                            </div>
                            <div className="text-zinc-500 font-mono text-[11px]">
                                Clarifying questions asked: 1
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    {/* Conventional Interrogation Breakdown */}
                    <div className="bg-red-50/50 rounded-xl p-5 border border-red-200">
                        <div className="flex items-center gap-2 mb-3">
                            <HelpCircle className="w-4 h-4 text-red-600" />
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-800">
                                Conventional AI: The 7-Question Interrogation Loop
                            </span>
                        </div>
                        <p className="text-xs text-zinc-700 leading-relaxed mb-4">
                            Because the standard chatbot holds zero durable context between sessions, it starts completely blind. It must interrogate you before providing value:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-800">
                            <div className="p-2 bg-white rounded border border-red-100 flex items-center gap-2">
                                <span className="text-red-500 font-bold">?</span> Where do you live or depart from?
                            </div>
                            <div className="p-2 bg-white rounded border border-red-100 flex items-center gap-2">
                                <span className="text-red-500 font-bold">?</span> Who is traveling with you?
                            </div>
                            <div className="p-2 bg-white rounded border border-red-100 flex items-center gap-2">
                                <span className="text-red-500 font-bold">?</span> What is your total budget?
                            </div>
                            <div className="p-2 bg-white rounded border border-red-100 flex items-center gap-2">
                                <span className="text-red-500 font-bold">?</span> Do you prefer flying or driving?
                            </div>
                            <div className="p-2 bg-white rounded border border-red-100 flex items-center gap-2">
                                <span className="text-red-500 font-bold">?</span> How many days are you taking off?
                            </div>
                            <div className="p-2 bg-white rounded border border-red-100 flex items-center gap-2">
                                <span className="text-red-500 font-bold">?</span> What activities do you prefer?
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 text-xs text-zinc-700 font-mono">
                        <span className="font-bold text-zinc-950">THE PROMPT TAX:</span> The user must now spend 10 minutes typing out a lengthy backstory that they already explained three weeks ago in a different chat.
                    </div>
                </div>
            )}
        </div>
    );
}
