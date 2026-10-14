'use client';

import React, { useState } from 'react';
import { Bot, Sparkles, CheckCircle2, HelpCircle, MapPin, Calendar, Users, DollarSign } from 'lucide-react';

export default function VacationContextExample() {
    const [viewMode, setViewMode] = useState<'exogram' | 'standard'>('exogram');

    return (
        <div className="w-full bg-white border border-[var(--line)] rounded-2xl p-6 md:p-8 shadow-sm text-left relative overflow-hidden">
            {/* View Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-5 mb-6">
                <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--gold)]">
                        Interactive Case Demonstration
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[var(--ink)] mt-1">
                        The Prompt-Engineering Tax in Action
                    </h3>
                </div>

                <div className="inline-flex rounded-xl bg-[var(--paper2)] p-1 border border-[var(--line)]">
                    <button
                        type="button"
                        onClick={() => setViewMode('exogram')}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                            viewMode === 'exogram'
                                ? 'bg-[var(--forest2)] text-white shadow-sm'
                                : 'text-[var(--muted)] hover:text-[var(--ink)]'
                        }`}
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
                        With Exogram
                    </button>
                    <button
                        type="button"
                        onClick={() => setViewMode('standard')}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                            viewMode === 'standard'
                                ? 'bg-[var(--ink)] text-white shadow-sm'
                                : 'text-[var(--muted)] hover:text-[var(--ink)]'
                        }`}
                    >
                        <Bot className="w-3.5 h-3.5" />
                        Conventional Chatbot
                    </button>
                </div>
            </div>

            {/* Prompt Card */}
            <div className="mb-6 p-4 rounded-xl bg-[var(--paper)] border border-[var(--line)] flex items-start gap-3">
                <div className="px-2.5 py-1 bg-[var(--forest2)] text-[var(--gold)] text-[11px] font-mono font-bold rounded uppercase tracking-wider shrink-0 mt-0.5">
                    User Question
                </div>
                <div className="text-[var(--ink)] font-serif italic text-base sm:text-lg font-medium">
                    &ldquo;Where should we go for vacation in October?&rdquo;
                </div>
            </div>

            {/* Comparison Display */}
            {viewMode === 'exogram' ? (
                <div className="space-y-6">
                    {/* Retained Context Pills */}
                    <div className="bg-[var(--paper)] rounded-xl p-4 border border-[var(--line)]">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink)] flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--forest)]" />
                                Retained User-Controlled Context (Active &amp; Editable)
                            </span>
                            <span className="text-[11px] font-mono text-[var(--muted)]">
                                4 Relevant Entities Assembled
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                            <div className="p-2.5 bg-white rounded-lg border border-[var(--line)] flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0" />
                                <div>
                                    <div className="text-[10px] font-mono text-[var(--muted)] uppercase">Home Area</div>
                                    <div className="font-semibold text-[var(--ink)]">Seattle Area</div>
                                </div>
                            </div>
                            <div className="p-2.5 bg-white rounded-lg border border-[var(--line)] flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[var(--gold)] shrink-0" />
                                <div>
                                    <div className="text-[10px] font-mono text-[var(--muted)] uppercase">Timeline Event</div>
                                    <div className="font-semibold text-[var(--ink)]">October Anniversary</div>
                                </div>
                            </div>
                            <div className="p-2.5 bg-white rounded-lg border border-[var(--line)] flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-[var(--gold)] shrink-0" />
                                <div>
                                    <div className="text-[10px] font-mono text-[var(--muted)] uppercase">Trip Style</div>
                                    <div className="font-semibold text-[var(--ink)]">Driveable, Budget-Conscious</div>
                                </div>
                            </div>
                            <div className="p-2.5 bg-white rounded-lg border border-[var(--line)] flex items-center gap-2">
                                <Users className="w-4 h-4 text-[var(--gold)] shrink-0" />
                                <div>
                                    <div className="text-[10px] font-mono text-[var(--muted)] uppercase">Likely Travelers</div>
                                    <div className="font-semibold text-[var(--ink)]">Couple or Family</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Exogram Response Card */}
                    <div className="bg-white rounded-xl p-5 md:p-6 border-2 border-[var(--gold)]/50 shadow-sm relative">
                        <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[var(--forest)]" />
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink)]">
                                    Exogram Context-Aware Model Response
                                </span>
                            </div>
                            <span className="text-[11px] font-mono bg-[var(--paper2)] text-[var(--ink)] px-2 py-0.5 rounded font-medium">
                                Smallest Question Protocol
                            </span>
                        </div>

                        <blockquote className="text-[var(--ink)] font-serif text-base leading-relaxed mb-4 border-l-2 border-[var(--gold)] pl-4 py-1">
                            &ldquo;October may be a celebration month for you. Are you planning a family trip, a couples getaway, or one trip for both? I can start with driveable, budget-conscious options from the Seattle area. To make this practical, I only need to know whether you want a long weekend or a full week.&rdquo;
                        </blockquote>

                        <div className="pt-3 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)] font-sans">
                            <div className="flex items-center gap-1 text-[var(--forest)] font-medium">
                                <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--forest)]" />
                                Formed a transparent, editable hypothesis from retained context.
                            </div>
                            <div className="text-[var(--muted)] font-mono text-[11px]">
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

                    <div className="p-4 bg-[var(--paper)] rounded-xl border border-[var(--line)] text-xs text-[var(--muted)] font-mono">
                        <span className="font-bold text-[var(--ink)]">THE PROMPT TAX:</span> The user must now spend 10 minutes typing out a lengthy backstory that they already explained three weeks ago in a different chat.
                    </div>
                </div>
            )}
        </div>
    );
}
