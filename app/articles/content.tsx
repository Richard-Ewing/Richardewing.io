'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { articles, frameworks } from '../lib/data';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';

const categories = [
    { name: 'Economics', desc: 'Systems to measure, analyze, and optimize the cost and margin impact of AI and engineering systems.', icon: '📊' },
    { name: 'Engineering', desc: 'The architectural mechanics, testing protocols, and development practices required to build deterministic software.', icon: '⚙️' },
    { name: 'Security', desc: 'Defensive guardrails, kill switches, and sandboxing infrastructure to prevent model liabilities and vulnerabilities.', icon: '🛡️' },
    { name: 'Governance', desc: 'Control systems, board compliance structures, and organizational policies to ensure AI sustainability.', icon: '⚖️' }
];

export default function ArticlesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Grouping helper
    const getArticlesByCategory = (cat: string) => {
        return articles.filter(a => a.category?.toLowerCase() === cat.toLowerCase());
    };

    const featuredArticle = {
        title: "The AI Product Business Test",
        publication: "Built In",
        date: "Jan 2026",
        badge: "Editor's Pick",
        category: "Economics",
        description: "Before writing code, validate the unit economics of your AI feature. This editor's pick from Built In explores why most AI products fail on margin contribution, not technical feasibility.",
        url: "https://builtin.com/articles/ai-product-business-test"
    };

    const handleCategoryClick = (catName: string) => {
        if (selectedCategory === catName) {
            setSelectedCategory(null); // Toggle off
        } else {
            setSelectedCategory(catName);
        }
        // Scroll to list
        const listElement = document.getElementById('article-list');
        if (listElement) {
            listElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto bg-[#F5F0EB]">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                <span>Knowledge</span><span>/</span><span className="text-cyan-900 font-extrabold">Research Hub</span>
            </div>

            <ScrollReveal>
                <div className="mb-12 border-b border-zinc-400 pb-12">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        The Canonical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Hub.</span>
                    </h1>
                    <p className="text-lg text-zinc-900 leading-relaxed max-w-2xl font-semibold">
                        Every essay and research paper grouped by framework domain. <br />
                        <span className="text-zinc-900">Now articles support ideas. Cite them.</span>
                    </p>
                </div>
            </ScrollReveal>

            {/* Featured Article */}
            <ScrollReveal delay={100}>
                <div className="mb-20">
                    <h3 className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-widest mb-4">Featured</h3>
                    <div className="card-featured p-8 md:p-12 relative overflow-hidden group border border-zinc-300 bg-white rounded-3xl shadow-sm">
                        <div className="absolute top-0 right-0 bg-purple-500/20 text-purple-900 font-extrabold px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl border-l border-b border-purple-500/30">
                            {featuredArticle.badge}
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest">
                                <span className="text-cyan-900 font-extrabold">{featuredArticle.category}</span>
                                <span>•</span>
                                <span>{featuredArticle.publication}</span>
                                <span>•</span>
                                <span>{featuredArticle.date}</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 font-grotesk group-hover:text-purple-900 font-extrabold transition-colors">
                                {featuredArticle.title}
                            </h2>

                            <p className="text-lg text-zinc-950 mb-8 max-w-2xl font-medium">
                                {featuredArticle.description}
                            </p>

                            <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-900 font-extrabold uppercase tracking-widest text-xs font-bold hover:text-zinc-900 transition-colors">
                                Read Article <span className="text-lg">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Reorganize Articles: Group by Framework Filter */}
            <ScrollReveal delay={200}>
                <div id="frameworks" className="mb-16">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-8 font-grotesk">Browse By Framework Domain</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {categories.map((cat) => {
                            const count = getArticlesByCategory(cat.name).length;
                            return (
                                <button
                                    key={cat.name}
                                    onClick={() => handleCategoryClick(cat.name)}
                                    className={`card p-6 flex flex-col text-left transition-all border rounded-2xl bg-white shadow-sm hover:border-indigo-500 relative ${selectedCategory === cat.name ? 'border-indigo-500 ring-1 ring-indigo-500 bg-indigo-50/10' : 'border-zinc-300'}`}
                                >
                                    <div className="text-2xl mb-3">{cat.icon}</div>
                                    <h3 className="text-lg font-bold text-zinc-950 mb-2 font-grotesk">{cat.name}</h3>
                                    <p className="text-xs text-zinc-900 font-semibold leading-relaxed mb-4 flex-grow">{cat.desc}</p>
                                    <div className="text-xs font-bold font-mono text-cyan-900 flex justify-between items-center w-full">
                                        <span>{count} Articles</span>
                                        <span className="text-xs uppercase tracking-wider">{selectedCategory === cat.name ? 'Active ✕' : 'Filter →'}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </ScrollReveal>

            {/* Articles List */}
            <ScrollReveal delay={300}>
                <div id="article-list" className="mb-20">
                    {selectedCategory ? (
                        <div>
                            <div className="flex items-center justify-between mb-8 border-b border-zinc-300 pb-4">
                                <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">
                                    Articles: {selectedCategory}
                                </h2>
                                <button onClick={() => setSelectedCategory(null)} className="text-xs font-bold text-zinc-900 font-bold hover:text-red-900 font-extrabold uppercase tracking-widest">
                                    Show All Domains ✕
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {getArticlesByCategory(selectedCategory).map((article, i) => {
                                    const isExternal = article.externalUrl?.startsWith('http');
                                    const href = article.externalUrl || article.legacyUrl || `/articles/${article.slug}`;
                                    return (
                                        <Link key={article.slug} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="group block">
                                            <GlowCard className="p-6 h-full flex flex-col justify-between hover:bg-white/5 transition-colors border border-zinc-300" glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                                                <div>
                                                    <div className="flex justify-between items-center mb-4">
                                                        <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">{article.source}</span>
                                                        <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">{article.date}</span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-indigo-900 transition-colors font-grotesk">{article.title}</h3>
                                                    <p className="text-zinc-950 text-sm font-semibold leading-relaxed mb-4 line-clamp-2">{article.description}</p>
                                                </div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-cyan-900 group-hover:text-indigo-900 transition-colors">
                                                    Read Article &rarr;
                                                </div>
                                            </GlowCard>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        // Renders all articles grouped into vertical categories
                        <div className="space-y-16">
                            {categories.map((cat) => {
                                const catArticles = getArticlesByCategory(cat.name);
                                if (catArticles.length === 0) return null;
                                return (
                                    <div key={cat.name} className="border-t border-zinc-300 pt-8">
                                        <div className="mb-6">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl">{cat.icon}</span>
                                                <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">{cat.name}</h2>
                                            </div>
                                            <p className="text-xs text-zinc-900 mt-1 max-w-xl font-semibold">{cat.desc}</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {catArticles.map((article, i) => {
                                                const isExternal = article.externalUrl?.startsWith('http');
                                                const href = article.externalUrl || article.legacyUrl || `/articles/${article.slug}`;
                                                return (
                                                    <Link key={article.slug} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="group block">
                                                        <GlowCard className="p-6 h-full flex flex-col justify-between hover:bg-white/5 transition-colors border border-zinc-300" glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                                                            <div>
                                                                <div className="flex justify-between items-center mb-4">
                                                                    <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">{article.source}</span>
                                                                    <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">{article.date}</span>
                                                                </div>
                                                                <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-indigo-900 transition-colors font-grotesk">{article.title}</h3>
                                                                <p className="text-zinc-950 text-sm font-semibold leading-relaxed mb-4 line-clamp-2">{article.description}</p>
                                                            </div>
                                                            <div className="text-xs font-bold uppercase tracking-widest text-cyan-900 group-hover:text-indigo-900 transition-colors">
                                                                Read Article &rarr;
                                                            </div>
                                                        </GlowCard>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </ScrollReveal>

            {/* Newsletter CTA */}
            <ScrollReveal delay={400}>
                <div className="mb-20">
                    <LeadMagnetCTA variant="full" />
                </div>
            </ScrollReveal>
        </div>
    );
}
