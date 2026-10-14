'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getSortedArticles, getCategories } from '@/lib/blog-data';

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
        <div className="space-y-12">
            {/* Search and Category Filter Bar */}
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="relative w-full sm:w-96">
                        <input
                            type="text"
                            placeholder="Search essays, case studies, formulas..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-lg border border-[var(--line)] bg-[#faf8f2] text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--forest)] transition"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-2.5 text-xs text-[var(--muted)] hover:text-[var(--ink)]"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                    <span className="text-xs font-mono text-[var(--muted)]">
                        Showing {filtered.length} of {allArticles.length} essays
                    </span>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                            !selectedCategory
                                ? 'bg-[var(--forest)] text-[#f7f5ed] shadow-sm'
                                : 'bg-[#faf8f2] text-[#4a5850] border border-[var(--line)] hover:border-[var(--forest)]'
                        }`}
                    >
                        All Essays ({allArticles.length})
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.name}
                            onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                                selectedCategory === cat.name
                                    ? 'bg-[var(--forest)] text-[#f7f5ed] shadow-sm'
                                    : 'bg-[#faf8f2] text-[#4a5850] border border-[var(--line)] hover:border-[var(--forest)]'
                            }`}
                        >
                            {cat.name} ({cat.count})
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Articles Grid */}
            {featured.length > 0 && (
                <div className="space-y-4">
                    <span className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-wider block">
                        Featured Essays
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featured.map(article => (
                            <Link
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="border border-[var(--line)] bg-[#FAF8F3] rounded-xl p-8 hover:border-[var(--forest)] hover:shadow-md transition flex flex-col justify-between group"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-xs font-mono">
                                        <span className="text-[var(--forest)] font-semibold">
                                            {article.category}
                                        </span>
                                        <span className="text-[var(--muted)]">
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-medium text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                </div>
                                <div className="pt-6 mt-6 border-t border-[var(--line)] flex items-center justify-between text-xs">
                                    <span className="font-mono text-[var(--muted)]">
                                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                    <span className="font-mono text-[var(--gold)]">
                                        Read Essay ↗
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* All Articles List */}
            <div className="space-y-6 pt-4">
                <span className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-wider block">
                    {featured.length > 0 ? `All Library Essays (${regular.length})` : `All Essays (${filtered.length})`}
                </span>

                {regular.length === 0 && filtered.length === 0 ? (
                    <div className="text-center py-12 border border-dashed border-[var(--line)] rounded-xl bg-[#faf8f2]">
                        <p className="text-[var(--muted)] text-sm mb-3">No essays match your search query.</p>
                        <button
                            onClick={() => { setSearch(''); setSelectedCategory(null); }}
                            className="text-xs font-mono text-[var(--forest)] hover:underline"
                        >
                            Reset filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regular.map(article => (
                            <Link
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="border border-[var(--line)] bg-[#FAF8F3] rounded-xl p-6 hover:border-[var(--forest)] hover:shadow-sm transition flex flex-col justify-between group"
                            >
                                <div className="space-y-2.5">
                                    <div className="flex items-center justify-between text-[11px] font-mono">
                                        <span className="text-[var(--forest)] font-medium">
                                            {article.category}
                                        </span>
                                        <span className="text-[var(--muted)]">
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-serif font-medium text-[var(--ink)] group-hover:text-[var(--forest)] transition-colors leading-snug">
                                        {article.title}
                                    </h3>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                </div>
                                <div className="pt-4 mt-4 border-t border-[var(--line)] flex items-center justify-between text-[11px]">
                                    <span className="font-mono text-[var(--muted)]">
                                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                    <span className="font-mono text-[var(--gold)]">
                                        Read ↗
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
