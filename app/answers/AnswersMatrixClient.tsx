'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Persona } from '../lib/spoke-data';

export interface ClientSpokeTopic {
    topicSlug: string;
    topicName: string;
    personas: {
        [key in Persona]?: {
            questionSlug: string;
            questionHeadline: string;
        }[];
    };
}

interface AnswersMatrixClientProps {
    topics: ClientSpokeTopic[];
}

const PERSONA_LABELS: Record<Persona, string> = {
    'founder-ceo': 'Founder / CEO / Builder',
    'product-manager': 'Product Manager / VP Product',
    'cto-vp-engineering': 'CTO / VP Engineering',
    'platform-engineer': 'Platform / AI Engineer',
    'cfo-investor': 'CFO / Board / PE Investor',
};

export default function AnswersMatrixClient({ topics }: AnswersMatrixClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<string>('all');
    const [selectedPersona, setSelectedPersona] = useState<string>('all');

    const normalizedSearch = searchQuery.trim().toLowerCase();

    const filteredTopics = topics
        .filter((topic) => selectedTopic === 'all' || topic.topicSlug === selectedTopic)
        .map((topic) => {
            const filteredPersonas: ClientSpokeTopic['personas'] = {};
            (Object.entries(topic.personas) as [Persona, { questionSlug: string; questionHeadline: string }[]][]).forEach(
                ([persona, queries]) => {
                    if (selectedPersona !== 'all' && persona !== selectedPersona) return;
                    const matchingQueries = (queries || []).filter((q) => {
                        if (!normalizedSearch) return true;
                        return (
                            q.questionHeadline.toLowerCase().includes(normalizedSearch) ||
                            topic.topicName.toLowerCase().includes(normalizedSearch) ||
                            q.questionSlug.replace(/-/g, ' ').toLowerCase().includes(normalizedSearch)
                        );
                    });
                    if (matchingQueries.length > 0) {
                        filteredPersonas[persona] = matchingQueries;
                    }
                }
            );
            return {
                ...topic,
                personas: filteredPersonas,
            };
        })
        .filter((topic) => Object.keys(topic.personas).length > 0);

    const totalVisibleQuestions = filteredTopics.reduce(
        (acc, t) =>
            acc +
            Object.values(t.personas).reduce((sum, qList) => sum + (qList ? qList.length : 0), 0),
        0
    );

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            {/* Search & Filter Control Panel */}
            <div className="bg-white border border-[var(--line)] rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--gold)] block">
                            Instant Question &amp; Answer Filter
                        </span>
                        <p className="text-sm text-[var(--muted)] mt-0.5">
                            Showing <strong>{totalVisibleQuestions}</strong> direct answers across vibe-coding rescue, MCP agents, AEO/GEO, AI pricing, career leverage, and CFO board defense.
                        </p>
                    </div>
                    {(searchQuery || selectedTopic !== 'all' || selectedPersona !== 'all') && (
                        <button
                            type="button"
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedTopic('all');
                                setSelectedPersona('all');
                            }}
                            className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--rust)] hover:underline self-start sm:self-auto"
                        >
                            Reset Filters ✕
                        </button>
                    )}
                </div>

                {/* Search Input */}
                <div className="relative">
                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search any question (e.g., 'stuck at 80%', 'Supabase RLS', 'Stripe webhook', 'MCP', 'llms.txt', 'API bill', 'PM interview')..."
                        aria-label="Search questions in the Answer Matrix"
                        className="w-full px-4 py-3.5 rounded-xl border border-[var(--line)] bg-[var(--paper)]/60 focus:bg-white text-[var(--ink)] text-sm font-medium focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                </div>

                {/* Topic Filter Pills */}
                <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] block">
                        Filter by Topic Cluster:
                    </span>
                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => setSelectedTopic('all')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                                selectedTopic === 'all'
                                    ? 'bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]'
                                    : 'bg-[var(--paper)]/60 text-[var(--ink2)] border-[var(--line)] hover:border-[var(--gold)]'
                            }`}
                        >
                            All Clusters
                        </button>
                        {topics.map((topic) => (
                            <button
                                key={topic.topicSlug}
                                type="button"
                                onClick={() => setSelectedTopic(topic.topicSlug)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                                    selectedTopic === topic.topicSlug
                                        ? 'bg-[var(--gold)] text-white border-[var(--gold)]'
                                        : 'bg-[var(--paper)]/60 text-[var(--ink2)] border-[var(--line)] hover:border-[var(--gold)]'
                                }`}
                            >
                                {topic.topicName}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Persona Filter Pills */}
                <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] block">
                        Filter by Role:
                    </span>
                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => setSelectedPersona('all')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                                selectedPersona === 'all'
                                    ? 'bg-[var(--forest)] text-white border-[var(--forest)]'
                                    : 'bg-[var(--paper)]/60 text-[var(--ink2)] border-[var(--line)] hover:border-[var(--forest)]'
                            }`}
                        >
                            All Roles
                        </button>
                        {(Object.keys(PERSONA_LABELS) as Persona[]).map((personaKey) => (
                            <button
                                key={personaKey}
                                type="button"
                                onClick={() => setSelectedPersona(personaKey)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border ${
                                    selectedPersona === personaKey
                                        ? 'bg-[var(--forest)] text-white border-[var(--forest)]'
                                        : 'bg-[var(--paper)]/60 text-[var(--ink2)] border-[var(--line)] hover:border-[var(--forest)]'
                                }`}
                            >
                                {PERSONA_LABELS[personaKey]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filtered Topic Cards (100% SSR rendered on initial load) */}
            {filteredTopics.length === 0 ? (
                <div className="bg-white border border-[var(--line)] rounded-2xl p-10 text-center space-y-4">
                    <p className="text-lg font-serif font-bold text-[var(--ink)]">
                        No exact question matched &ldquo;{searchQuery}&rdquo;.
                    </p>
                    <p className="text-sm text-[var(--muted)] max-w-lg mx-auto">
                        Reset your filters to browse all questions, or run the 60-second Reality Check diagnostic to get an immediate custom readout for your architecture or P&amp;L.
                    </p>
                    <div className="flex justify-center gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedTopic('all');
                                setSelectedPersona('all');
                            }}
                            className="button button-outline"
                        >
                            Show All Questions
                        </button>
                        <Link href="/reality-check" className="button button-gold">
                            Run Reality Check ↗
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="space-y-12">
                    {filteredTopics.map((topic) => (
                        <div
                            key={topic.topicSlug}
                            className="bg-white border border-[var(--line)] rounded-2xl p-8 shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--line)]">
                                <div className="w-2.5 h-2.5 rounded-full bg-[var(--forest)]" />
                                <h2 className="text-2xl font-serif font-bold text-[var(--ink)]">
                                    {topic.topicName}
                                </h2>
                            </div>

                            <div className="space-y-10">
                                {Object.entries(topic.personas).map(([personaStr, queries]) => {
                                    const persona = personaStr as Persona;
                                    return (
                                        <div key={persona} className="space-y-4">
                                            <h3 className="text-xs font-bold font-mono text-[var(--gold)] uppercase tracking-wider bg-[var(--paper2)] inline-block px-3 py-1 rounded">
                                                For: {PERSONA_LABELS[persona] || persona.replace('-', ' ')}
                                            </h3>
                                            <ul className="space-y-2.5">
                                                {queries?.map((query) => (
                                                    <li key={query.questionSlug} className="group">
                                                        <Link
                                                            href={`/answers/${topic.topicSlug}/${persona}/${query.questionSlug}`}
                                                            className="flex items-start gap-3 p-4 bg-[var(--paper)]/50 hover:bg-white border border-[var(--line)] hover:border-[var(--gold)] rounded-xl transition-all shadow-xs"
                                                        >
                                                            <span className="text-[var(--gold)] font-bold mt-0.5">→</span>
                                                            <span className="text-[var(--ink)] text-sm font-serif font-bold group-hover:text-[var(--gold)] transition-colors">
                                                                {query.questionHeadline}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
