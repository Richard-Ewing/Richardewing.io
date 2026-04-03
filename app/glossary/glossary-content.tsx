'use client';

import Link from 'next/link';
import { useState } from 'react';
import { glossaryTerms, glossaryCategories } from './terms';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function GlossaryContent() {
    const termsByCategory = glossaryCategories.map(cat => ({
        category: cat,
        terms: glossaryTerms.filter(t => t.category === cat),
    })).filter(g => g.terms.length > 0);

    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
        [termsByCategory[0]?.category]: true // Open first category by default
    });

    const toggleCategory = (cat: string) => {
        setOpenCategories(prev => ({
            ...prev,
            [cat]: !prev[cat]
        }));
    };

    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Knowledge</span><span>/</span><span className="text-cyan-400 font-bold">Glossary</span>
            </div>

            <ScrollReveal>
                <div className="mb-12 border-b border-white/10 pb-12">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                        Technology & AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">Glossary.</span>
                    </h1>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        {glossaryTerms.length}+ terms defined with rich explanations, practical FAQs, and links to free diagnostic tools.
                        <br />
                        <span className="text-white">Technical debt, AI economics, SaaS metrics, product management, and engineering leadership — explained.</span>
                    </p>
                </div>
            </ScrollReveal>

            <div className="space-y-6">
                {termsByCategory.map((group, gi) => {
                    const isOpen = openCategories[group.category];
                    return (
                        <ScrollReveal key={group.category} delay={gi * 50}>
                            <div className={`border ${isOpen ? 'border-cyan-500/30 bg-white/5' : 'border-white/10 bg-[#0a0c10]'} rounded-2xl overflow-hidden transition-all duration-300`}>
                                {/* Accordion Header */}
                                <button 
                                    onClick={() => toggleCategory(group.category)}
                                    className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-white/5 transition-colors text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-zinc-400'}`}>
                                            <span className="font-bold font-mono">{group.terms.length}</span>
                                        </div>
                                        <h2 className={`text-2xl font-bold font-grotesk transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                                            {group.category}
                                        </h2>
                                    </div>
                                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'text-cyan-400' : 'text-zinc-500'}`}>
                                        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                    </div>
                                </button>
                                
                                {/* Accordion Content */}
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="p-6 sm:p-8 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {group.terms.map(term => (
                                                <Link
                                                    key={term.slug}
                                                    href={`/glossary/${term.slug}`}
                                                    className="group block"
                                                >
                                                    <div className="card p-5 h-full bg-black/40 border border-white/5 hover:border-cyan-500/50 hover:bg-white/5 transition-all rounded-xl">
                                                        <h3 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors font-grotesk">
                                                            {term.title}
                                                        </h3>
                                                        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                                                            {term.definition.slice(0, 160)}...
                                                        </p>
                                                        <div className="mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-cyan-400 transition-colors">
                                                            Read Definition →
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center py-20 mt-12 mb-12 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-transparent to-cyan-950/20">
                <div className="absolute top-0 right-0 w-full h-full bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
                <h2 className="text-3xl font-grotesk font-black text-white mb-4">Master The Architecture</h2>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto leading-relaxed">
                    Our diagnostic tools put these definitions into direct, mathematically precise execution—evaluate your enterprise today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
                    <Link
                        href="/tools/pdi"
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cobalt rounded-xl text-white font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                    >
                        Run Free PDI Assessment
                    </Link>
                    <Link
                        href="/advisory"
                        className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
                    >
                        Book Advisory Session →
                    </Link>
                </div>
            </div>
        </div>
    );
}
