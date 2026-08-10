'use client';

import Link from 'next/link';
import { useState } from 'react';
import { glossaryTerms } from './terms';
import { PILLARS, CATEGORY_MAP, KEEP_TERMS } from './pillarsMapping';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
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
            terms: filteredTerms.filter(t => {
                const mappedSlug = CATEGORY_MAP[t.category] || 'cloud-infrastructure-finops';
                return mappedSlug === pillar.slug;
            }),
        };
    }).filter(g => g.terms.length > 0);

    // Initialize first category as open if we haven't touched it and search is empty
    const isCategoryOpen = (cat: string) => {
        if (searchQuery !== '') return true; // Auto-expand all matching categories when searching
        if (openCategories[cat] !== undefined) return openCategories[cat];
        return cat === termsByCategory[0]?.category; // Open first by default
    };

    const toggleCategory = (cat: string) => {
        setOpenCategories(prev => ({
            ...prev,
            [cat]: !isCategoryOpen(cat)
        }));
    };

    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <span>Knowledge</span><span>/</span><span className="text-cyan-900 font-extrabold">Glossary</span>
            </div>

            <ScrollReveal>
                <div className="mb-12 border-b border-zinc-400 pb-12">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-900 mb-6">
                        Technology & AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">Glossary.</span>
                    </h1>
                    <p className="text-lg text-zinc-950 font-bold leading-relaxed max-w-2xl mb-8">
                        {glossaryTerms.length}+ terms defined with rich explanations, practical FAQs, and links to free diagnostic tools.
                        <br />
                        <span className="text-zinc-950">Technical debt, AI economics, SaaS metrics, product management, and engineering leadership — explained.</span>
                    </p>

                    {/* Search Input */}
                    <div className="relative max-w-md w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search glossary terms (e.g. Technical Debt)..."
                            className="w-full pl-12 pr-10 py-4 bg-white border border-zinc-400 rounded-2xl text-zinc-900 font-medium placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-800 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </ScrollReveal>

            <div className="space-y-6">
                {termsByCategory.length === 0 && (
                    <div className="text-center py-12 border border-dashed border-zinc-400 rounded-3xl bg-zinc-50/50">
                        <p className="text-zinc-600 font-medium">No glossary terms match your search query.</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-3 text-cyan-600 hover:text-cyan-700 font-bold text-sm underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}
                {termsByCategory.map((group, gi) => {
                    const isOpen = isCategoryOpen(group.category);
                    return (
                        <ScrollReveal key={group.category} delay={gi * 50}>
                            <div className={`border ${isOpen ? 'border-cyan-300 bg-cyan-50/50' : 'border-zinc-400 bg-white'} rounded-2xl overflow-hidden transition-all duration-300`}>
                                {/* Accordion Header */}
                                <button 
                                    onClick={() => toggleCategory(group.category)}
                                    className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-zinc-50 transition-colors text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-cyan-100 text-cyan-900 font-extrabold' : 'bg-zinc-100 text-zinc-900'}`}>
                                            <span className="font-bold font-mono">{group.terms.length}</span>
                                        </div>
                                        <h2 className={`text-2xl font-bold font-grotesk transition-colors ${isOpen ? 'text-zinc-900' : 'text-zinc-900'}`}>
                                            {group.category}
                                        </h2>
                                    </div>
                                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'text-cyan-900 font-extrabold' : 'text-zinc-950 font-bold'}`}>
                                        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                    </div>
                                </button>
                                
                                {/* Accordion Content */}
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="p-6 sm:p-8 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {group.terms.map(term => {
                                                const isKeep = KEEP_TERMS.includes(term.slug);
                                                const pillarSlug = CATEGORY_MAP[term.category] || 'cloud-infrastructure-finops';
                                                const href = isKeep ? `/glossary/${term.slug}` : `/glossary/pillars/${pillarSlug}#${term.slug}`;
                                                
                                                return (
                                                <Link
                                                    key={term.slug}
                                                    href={href}
                                                    className="group block"
                                                >
                                                    <div className="card p-5 h-full bg-white border border-zinc-400 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all rounded-xl">
                                                        <h3 className="text-sm font-semibold font-bold text-zinc-900 mb-2 group-hover:text-cyan-900 font-extrabold transition-colors font-grotesk flex justify-between items-center">
                                                            {term.title}
                                                            {isKeep && <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-mono">Deep Dive</span>}
                                                        </h3>
                                                        <p className="text-xs font-bold text-zinc-950 line-clamp-2 leading-relaxed">
                                                            {term.definition.slice(0, 160)}...
                                                        </p>
                                                        <div className="mt-3 text-xs font-bold font-medium font-bold uppercase tracking-widest text-zinc-950 group-hover:text-cyan-900 font-extrabold transition-colors">
                                                            Read Definition →
                                                        </div>
                                                    </div>
                                                </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-20 mt-12 mb-12 relative overflow-hidden rounded-3xl border border-zinc-400 bg-gradient-to-b from-white to-cyan-50">
                <div className="absolute top-0 right-0 w-full h-full bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
                <h2 className="text-3xl font-grotesk font-black text-zinc-900 mb-4">Master The Architecture</h2>
                <p className="text-zinc-950 font-bold mb-8 max-w-lg mx-auto leading-relaxed">
                    Our diagnostic tools put these definitions into direct, mathematically precise execution—evaluate your enterprise today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
                    <Link
                        href="/tools/pdi"
                        className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl text-zinc-950 font-semibold font-bold uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-opacity shadow-md"
                    >
                        Run Free PDI Assessment
                    </Link>
                    <Link
                        href="/services"
                        className="px-8 py-4 bg-white border border-zinc-500 rounded-xl text-zinc-950 font-bold uppercase tracking-widest text-xs font-bold hover:bg-zinc-50 transition-colors"
                    >
                        Book Advisory Session →
                    </Link>
                </div>
            </div>
        </div>
    );
}
