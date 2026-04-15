'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getSortedArticles, getCategories } from '@/lib/blog-data';
import { categoryColors } from '@/lib/blog-types';

export default function BlogContent() {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const allArticles = useMemo(() => getSortedArticles(), []);
    const categories = useMemo(() => getCategories(), []);

    const filtered = useMemo(() => {
        let result = allArticles;
        if (selectedCategory) result = result.filter(a => a.category === selectedCategory);
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(a =>
                a.title.toLowerCase().includes(q) ||
                a.excerpt.toLowerCase().includes(q) ||
                a.category.toLowerCase().includes(q)
            );
        }
        return result;
    }, [allArticles, selectedCategory, search]);

    const featured = filtered.filter(a => a.featured);
    const regular = filtered.filter(a => !a.featured);

    return (
        <main className="pt-24 pb-20">
            <div className="page-container">
                {/* Hero */}
                <section className="text-center mb-12 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="relative">
                        <p className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest mb-4">The Product Economist</p>
                        <h1 className="text-4xl md:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            Engineering Economics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Blog.</span>
                        </h1>
                        <p className="text-lg text-zinc-900 max-w-2xl mx-auto mb-8">
                            {allArticles.length} articles on engineering economics, technical debt quantification, AI cost analysis,
                            R&D capital allocation, and the economics nobody else is talking about.
                        </p>

                        {/* Search */}
                        <div className="max-w-md mx-auto relative">
                            <input
                                type="text"
                                placeholder="Search articles…"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="w-full px-5 py-3 bg-white/[0.05] border border-zinc-400 rounded-xl text-zinc-950 placeholder-zinc-500 text-sm font-semibold focus:outline-none focus:border-cyan-500/50 transition-colors"
                            />
                            {search && (
                                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-950 font-bold hover:text-zinc-900 text-xs">✕</button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`text-xs font-bold font-medium font-mono px-2.5 py-1 rounded-full border transition-colors ${!selectedCategory ? 'text-cyan-900 font-extrabold font-semibold bg-cyan-500/20 border-cyan-500/40' : 'text-zinc-950 bg-zinc-500/5 border-zinc-500/20 hover:text-zinc-900'}`}
                        >
                            All ({allArticles.length})
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat.name}
                                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                                className={`text-xs font-bold font-medium font-mono px-2.5 py-1 rounded-full border transition-colors ${selectedCategory === cat.name ? 'text-cyan-900 font-extrabold font-semibold bg-cyan-500/20 border-cyan-500/40' : categoryColors[cat.name] || 'text-zinc-900 bg-zinc-500/10 border-zinc-500/20'} hover:opacity-80`}
                            >
                                {cat.name} ({cat.count})
                            </button>
                        ))}
                    </div>
                </section>

                {/* Results count */}
                {(search || selectedCategory) && (
                    <div className="text-center mb-8">
                        <p className="text-xs font-bold text-zinc-900 font-bold">
                            {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
                            {selectedCategory && <span> in <span className="text-zinc-900">{selectedCategory}</span></span>}
                            {search && <span> matching &quot;<span className="text-zinc-900">{search}</span>&quot;</span>}
                        </p>
                    </div>
                )}

                {/* Featured */}
                {featured.length > 0 && (
                    <section className="mb-16 max-w-5xl mx-auto">
                        <h2 className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-6">Featured</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featured.map(article => (
                                <Link key={article.slug} href={`/blog/${article.slug}`}
                                    className="group block rounded-2xl border border-zinc-400 bg-white/[0.03] p-8 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-xs font-bold font-medium font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${categoryColors[article.category]}`}>{article.category}</span>
                                        <span className="text-xs font-bold font-medium text-zinc-950">{article.readTime} read</span>
                                    </div>
                                    <h3 className="text-xl font-grotesk font-bold text-zinc-950 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors mb-3">{article.title}</h3>
                                    <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed mb-4">{article.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-zinc-950">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        <span className="text-xs font-bold text-zinc-900 font-bold group-hover:text-cyan-900 font-extrabold font-semibold">Read →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* All Articles */}
                <section className="max-w-5xl mx-auto">
                    <h2 className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-6">
                        {featured.length > 0 ? `All ${regular.length} Articles` : `${filtered.length} Articles`}
                    </h2>
                    {regular.length === 0 && filtered.length === 0 ? (
                        <div className="text-center py-20 border border-dashed border-zinc-400 rounded-2xl">
                            <p className="text-zinc-950 mb-4">No articles match your search.</p>
                            <button onClick={() => { setSearch(''); setSelectedCategory(null); }} className="text-cyan-900 font-extrabold font-semibold hover:underline text-sm">Clear filters</button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {categories
                                .filter(cat => (!selectedCategory || selectedCategory === cat.name))
                                .map(cat => {
                                    const catArticles = regular.filter(a => a.category === cat.name);
                                    if (catArticles.length === 0) return null;
                                    
                                    return (
                                        <details key={cat.name} className="group/accordion rounded-xl border border-zinc-400 bg-zinc-50 overflow-hidden" open={!!search || !!selectedCategory}>
                                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.04] transition-colors select-none marker:content-none [&::-webkit-details-marker]:hidden">
                                                <div className="flex items-center gap-4">
                                                    <span className={`text-xs font-bold font-medium font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${categoryColors[cat.name] || 'text-zinc-900 bg-zinc-500/10 border-zinc-500/20'}`}>
                                                        {cat.name}
                                                    </span>
                                                    <span className="text-sm font-semibold font-bold text-zinc-950 group-hover/accordion:text-cyan-900 font-extrabold font-semibold transition-colors flex-1">{cat.name} Library</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-zinc-900">
                                                    <span className="text-xs">{catArticles.length} {catArticles.length === 1 ? 'Article' : 'Articles'}</span>
                                                    <span className="transform transition-transform duration-200 group-open/accordion:rotate-180">↓</span>
                                                </div>
                                            </summary>
                                            
                                            <div className="border-t border-zinc-400 bg-zinc-50 p-2 sm:p-4 space-y-2">
                                                {catArticles.map(article => (
                                                    <Link key={article.slug} href={`/blog/${article.slug}`}
                                                        className="group flex items-start gap-4 sm:gap-6 p-4 rounded-xl border border-transparent hover:border-zinc-400 hover:bg-white/[0.03] transition-all">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-1.5">
                                                                <span className="text-xs font-bold font-medium font-mono text-zinc-900">{article.readTime}</span>
                                                                <span className="text-xs font-bold font-medium text-zinc-900">·</span>
                                                                <span className="text-xs font-bold font-medium font-mono text-zinc-900">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                            </div>
                                                            <h3 className="text-base font-grotesk font-bold text-zinc-950 font-bold group-hover:text-cyan-900 font-extrabold font-semibold transition-colors mb-1">{article.title}</h3>
                                                            <p className="text-sm font-semibold text-zinc-950 leading-relaxed line-clamp-2">{article.excerpt}</p>
                                                        </div>
                                                        <span className="text-zinc-950 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors mt-2 shrink-0">→</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </details>
                                    );
                                })}
                        </div>
                    )}
                </section>

                {/* Cross-link to Published Articles */}
                <section className="mt-16 max-w-5xl mx-auto">
                    <div className="p-8 rounded-2xl border border-zinc-400 bg-white/[0.03]">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest">Tier 1 Publications</span>
                        </div>
                        <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-2">Looking for my published articles?</h3>
                        <p className="text-sm font-semibold text-zinc-900 font-medium mb-4">These blog posts expand on ideas from my articles in CIO.com, Built In, Mind the Product, and HackerNoon.</p>
                        <Link href="/articles" className="text-sm font-semibold text-zinc-900 font-medium hover:text-purple-900 font-extrabold font-semibold transition-colors">
                            View all published articles →
                        </Link>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="mt-8 max-w-2xl mx-auto">
                    <div className="card p-8 text-center border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5">
                        <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mb-3">Get the Weekly Briefing</h3>
                        <p className="text-zinc-900 text-sm font-semibold mb-6 max-w-md mx-auto">
                            One email per week with the engineering economics analysis nobody else is doing. Join 2,000+ executives and engineering leaders.
                        </p>
                        <a href="https://theproducteconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer"
                            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-violet-600 text-zinc-950 font-semibold font-bold text-sm font-semibold hover:opacity-90 transition-opacity">
                            Subscribe Free →
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
