'use client';

import Link from 'next/link';
import { useState } from 'react';
import { glossaryTerms } from './terms';
import { PILLARS, CATEGORY_MAP, KEEP_TERMS } from './pillarsMapping';
import { ChevronDown, ChevronUp, Search, X } from 'lucide-react';

export default function GlossaryContent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

    const filteredTerms = glossaryTerms.filter(term => 
        term.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const termsByCategory = PILLARS.map(pillar => {
        return {
            category: pillar.name,
            slug: pillar.slug,
            terms: filteredTerms.filter(t => {
                const mappedSlug = CATEGORY_MAP[t.category] || 'cloud-infrastructure-finops';
                return mappedSlug === pillar.slug;
            }),
        };
    }).filter(g => g.terms.length > 0);

    const isCategoryOpen = (cat: string) => {
        if (searchQuery !== '') return true;
        if (openCategories[cat] !== undefined) return openCategories[cat];
        return cat === termsByCategory[0]?.category;
    };

    const toggleCategory = (cat: string) => {
        setOpenCategories(prev => ({
            ...prev,
            [cat]: !isCategoryOpen(cat)
        }));
    };

    return (
        <div className="max-w-6xl w-full mx-auto space-y-12">
            {/* Header & Search */}
            <div className="border-b border-[var(--line)] pb-10 space-y-6">
                <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block mb-2">
                        Executive Lexicon · {glossaryTerms.length}+ Terms Defined
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-medium text-[var(--ink)] tracking-tight mb-4">
                        Product, AI &amp; Engineering Economics Glossary.
                    </h1>
                    <p className="text-base text-[var(--muted)] leading-relaxed max-w-3xl">
                        Clear, non-technical definitions for software unit economics, technical insolvency,
                        zombie features, retry inflation, and board-level engineering metrics.
                    </p>
                </div>

                {/* Search Input */}
                <div className="relative max-w-md w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)] w-4 h-4" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={`Search ${glossaryTerms.length}+ terms (e.g. AI Unit Economics, PDI)...`}
                        className="w-full pl-11 pr-10 py-3 bg-[#faf8f2] border border-[var(--line)] rounded-xl text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--forest)] transition"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--ink)]"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Quick Topic Filter Chips */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    <span className="font-mono text-[var(--muted)] mr-1">Quick Filters:</span>
                    {[
                        { label: 'AI Overspend', query: 'Retry Inflation' },
                        { label: 'Engineering Velocity', query: 'APER' },
                        { label: 'Token Margins', query: 'AI Unit Economics' },
                        { label: 'Code Debt in Dollars', query: 'Product Debt Index' },
                        { label: 'Shadow AI', query: 'Shadow AI' },
                        { label: 'Technical Insolvency', query: 'Technical Insolvency' },
                    ].map((chip, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSearchQuery(searchQuery === chip.query ? '' : chip.query)}
                            className={`px-3 py-1.5 rounded-full border transition-all text-xs font-medium ${
                                searchQuery === chip.query
                                    ? 'bg-[var(--forest)] text-[#f7f5ed] border-[var(--forest)]'
                                    : 'bg-[#faf8f2] text-[#4a5850] border-[var(--line)] hover:border-[var(--forest)]'
                            }`}
                        >
                            {chip.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Strategic Pillar Hubs Grid */}
            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                    <div>
                        <span className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-wider block mb-0.5">
                            Core Knowledge Pillars
                        </span>
                        <h2 className="text-2xl font-serif font-medium text-[var(--ink)]">
                            Strategic Topic Hubs
                        </h2>
                    </div>
                    <span className="text-xs font-mono text-[var(--muted)]">
                        Domain Directory
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PILLARS.slice(0, 8).map((pillar) => (
                        <Link
                            key={pillar.slug}
                            href={`/glossary/pillars/${pillar.slug}`}
                            className="p-5 rounded-xl border border-[var(--line)] bg-[#FAF8F3] hover:border-[var(--forest)] hover:shadow-sm transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--forest)] px-2 py-0.5 rounded bg-[rgba(30,51,39,0.06)] inline-block mb-3">
                                    Knowledge Hub
                                </span>
                                <h3 className="text-sm font-serif font-semibold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors">
                                    {pillar.name}
                                </h3>
                            </div>
                            <div className="text-[11px] font-mono text-[var(--gold)] mt-4 flex items-center justify-between">
                                <span>Explore Hub</span>
                                <span>→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Accordion Terms by Category */}
            <div className="space-y-6 pt-4">
                {termsByCategory.length === 0 && (
                    <div className="text-center py-12 border border-dashed border-[var(--line)] rounded-2xl bg-[#faf8f2]">
                        <p className="text-[var(--muted)] text-sm">No glossary terms match your search query.</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-3 text-[var(--forest)] hover:underline font-mono text-xs"
                        >
                            Clear search filter
                        </button>
                    </div>
                )}
                {termsByCategory.map((group) => {
                    const isOpen = isCategoryOpen(group.category);
                    return (
                        <div
                            key={group.category}
                            className="border border-[var(--line)] rounded-xl bg-[#FAF8F3] overflow-hidden transition-all"
                        >
                            {/* Accordion Header */}
                            <div className="w-full flex items-center justify-between p-6 hover:bg-[#f5f2e8] transition-colors">
                                <button 
                                    onClick={() => toggleCategory(group.category)}
                                    className="flex items-center gap-4 flex-1 text-left cursor-pointer"
                                >
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[rgba(30,51,39,0.08)] text-[var(--forest)]">
                                        <span className="font-mono text-xs font-bold">{group.terms.length}</span>
                                    </div>
                                    <h2 className="text-xl font-serif font-medium text-[var(--ink)]">
                                        {group.category}
                                    </h2>
                                </button>
                                <div className="flex items-center gap-3">
                                    <Link
                                        href={`/glossary/pillars/${group.slug}`}
                                        className="text-[11px] font-mono text-[var(--forest)] hover:underline uppercase tracking-wider px-2.5 py-1 rounded border border-[var(--line)] bg-white"
                                    >
                                        Pillar Hub ↗
                                    </Link>
                                    <button
                                        onClick={() => toggleCategory(group.category)}
                                        className="shrink-0 text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer p-1"
                                        aria-label="Toggle section"
                                    >
                                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Accordion Content */}
                            {isOpen && (
                                <div className="p-6 pt-0 border-t border-[var(--line)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                    {group.terms.map((term) => {
                                        const isKeep = KEEP_TERMS.includes(term.slug);
                                        const pillarSlug = CATEGORY_MAP[term.category] || 'cloud-infrastructure-finops';
                                        const href = isKeep ? `/glossary/${term.slug}` : `/glossary/pillars/${pillarSlug}#${term.slug}`;

                                        return (
                                            <Link
                                                key={term.slug}
                                                href={href}
                                                className="group block p-4 rounded-lg bg-white border border-[var(--line)] hover:border-[var(--forest)] hover:shadow-sm transition"
                                            >
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-serif font-semibold text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors">
                                                            {term.title}
                                                        </h3>
                                                        {isKeep && (
                                                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[rgba(208,154,85,0.12)] text-[#8c6023]">
                                                                Deep Dive
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-xs text-[var(--muted)] line-clamp-2 leading-relaxed">
                                                        {term.definition}
                                                    </p>
                                                    <span className="text-[11px] font-mono text-[var(--gold)] block pt-1">
                                                        Read Definition ↗
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
