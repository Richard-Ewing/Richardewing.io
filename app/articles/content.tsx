'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { articles } from '../lib/data';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import FAQItem from '../components/FAQItem';

const categories = [
    { name: 'Economics', desc: 'Systems to measure, analyze, and optimize the cost and margin impact of AI and engineering systems.', icon: '📊' },
    { name: 'Engineering', desc: 'The architectural mechanics, testing protocols, and development practices required to build deterministic software.', icon: '⚙️' },
    { name: 'Security', desc: 'Defensive guardrails, kill switches, and sandboxing infrastructure to prevent model liabilities and vulnerabilities.', icon: '🛡️' },
    { name: 'Governance', desc: 'Control systems, board compliance structures, and organizational policies to ensure AI sustainability.', icon: '⚖️' }
];

const categoryGradients: Record<string, { gradient: string; icon: string }> = {
    'economics': { gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent', icon: '📊' },
    'engineering': { gradient: 'from-amber-500/20 via-orange-500/10 to-transparent', icon: '⚙️' },
    'security': { gradient: 'from-rose-500/20 via-red-500/10 to-transparent', icon: '🛡️' },
    'governance': { gradient: 'from-purple-500/20 via-violet-500/10 to-transparent', icon: '⚖️' },
};

export default function ArticlesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [filterPopular, setFilterPopular] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Grouping & Filtering helper
    const getFilteredArticles = () => {
        let list = articles;
        if (selectedCategory) {
            list = list.filter(a => a.category?.toLowerCase() === selectedCategory.toLowerCase());
        }
        if (filterPopular) {
            list = list.filter(a => a.editorsPick === true);
        }
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            list = list.filter(a => 
                a.title.toLowerCase().includes(query) || 
                a.description.toLowerCase().includes(query) ||
                (a.category || '').toLowerCase().includes(query) ||
                (a.source || '').toLowerCase().includes(query)
            );
        }
        return list;
    };

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

    // Schema JSON-LD
    const articlesSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Forensic Engineering & AI Economics Articles by Richard Ewing',
        'description': 'Deeper essays on technical due diligence, feature-bloat calculations, and the hidden operational inflation of enterprise generative AI integrations.',
        'numberOfItems': articles.length,
        'itemListElement': articles.map((article, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'url': article.externalUrl || `https://www.richardewing.io/articles/${article.slug}`,
            'name': article.title,
            'description': article.description
        }))
    };

    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto bg-[#F5F0EB]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesSchema) }} />

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
                        <span className="text-zinc-900 font-bold">Now articles support ideas. Cite them.</span>
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

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
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

                                <a href={featuredArticle.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-900 font-extrabold uppercase tracking-widest text-xs font-bold hover:text-zinc-950 transition-colors">
                                    Read Article <span className="text-lg">→</span>
                                </a>
                            </div>
                            
                            {/* Featured Thumbnail */}
                            <div className="w-full md:w-64 h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent border border-zinc-300 flex items-center justify-center relative overflow-hidden shrink-0">
                                <span className="text-6xl filter drop-shadow-md select-none">📊</span>
                                <span className="absolute bottom-3 right-4 text-xs font-bold font-mono text-indigo-900 uppercase tracking-widest">Featured</span>
                            </div>
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
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b border-zinc-300 pb-4 gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
                            <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">
                                {selectedCategory ? `Articles: ${selectedCategory}` : "All Articles"}
                            </h2>
                            <div className="flex items-center gap-3">
                                {selectedCategory && (
                                    <button onClick={() => setSelectedCategory(null)} className="text-xs font-bold text-zinc-900 font-bold hover:text-red-900 font-extrabold uppercase tracking-widest shrink-0">
                                        Show All Domains ✕
                                    </button>
                                )}
                                {/* Search input */}
                                <div className="relative w-48 sm:w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search articles..."
                                        className="w-full pl-9 pr-8 py-1.5 bg-white border border-zinc-300 rounded-lg text-xs font-semibold placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-800 transition-colors"
                                        >
                                            <X className="w-3.5 h-3.5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* Sort / Filter Toggle */}
                        <div className="flex items-center gap-1 bg-white border border-zinc-300 rounded-lg p-1 text-xs font-bold shrink-0 self-end md:self-auto relative select-none">
                            <button 
                                onClick={() => setFilterPopular(false)}
                                className={`relative px-3 py-1.5 rounded-md transition-colors duration-200 z-10 ${!filterPopular ? 'text-white' : 'text-zinc-600 hover:text-zinc-950'}`}
                            >
                                {!filterPopular && (
                                    <motion.span
                                        layoutId="activeFilterPill"
                                        className="absolute inset-0 bg-zinc-800 rounded-md -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                All
                            </button>
                            <button 
                                onClick={() => setFilterPopular(true)}
                                className={`relative px-3 py-1.5 rounded-md transition-colors duration-200 z-10 ${filterPopular ? 'text-white' : 'text-zinc-600 hover:text-zinc-950'}`}
                            >
                                {filterPopular && (
                                    <motion.span
                                        layoutId="activeFilterPill"
                                        className="absolute inset-0 bg-zinc-800 rounded-md -z-10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                Most Popular
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getFilteredArticles().length === 0 && (
                            <div className="col-span-full text-center py-12 border border-dashed border-zinc-300 rounded-3xl bg-white">
                                <p className="text-zinc-600 font-medium">No articles match your search query.</p>
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="mt-3 text-cyan-600 hover:text-cyan-700 font-bold text-sm underline"
                                >
                                    Clear search
                                </button>
                            </div>
                        )}
                        {getFilteredArticles().map((article, i) => {
                            const isExternal = article.externalUrl?.startsWith('http');
                            const href = article.externalUrl || article.legacyUrl || `/articles/${article.slug}`;
                            const catKey = (article.category || 'economics').toLowerCase();
                            const { gradient, icon } = categoryGradients[catKey] || categoryGradients['economics'];
                            
                            return (
                                <Link key={article.slug} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="group block">
                                    <GlowCard className="p-6 h-full flex flex-col justify-between hover:bg-white/5 transition-colors border border-zinc-300" glowColor={i % 2 === 0 ? "cyan" : "purple"}>
                                        <div>
                                            {/* Dynamic Category Gradient Thumbnail */}
                                            <div className={`w-full h-36 rounded-xl mb-4 bg-gradient-to-br ${gradient} border border-zinc-200/60 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform`}>
                                                <span className="text-4xl filter drop-shadow-md select-none">{icon}</span>
                                                <span className="absolute bottom-2 right-3 px-2 py-0.5 rounded bg-white/70 text-[9px] font-mono font-bold text-zinc-800 uppercase tracking-widest">
                                                    {article.category}
                                                </span>
                                                {article.editorsPick && (
                                                    <span className="absolute top-2 left-3 px-2 py-0.5 rounded bg-purple-600 text-white text-[8px] font-bold uppercase tracking-wider">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{article.source}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{article.date}</span>
                                                    <span className="text-zinc-400 font-mono text-[10px]">•</span>
                                                    <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{article.readTime}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-indigo-900 transition-colors font-grotesk">{article.title}</h3>
                                            <p className="text-zinc-900 text-sm font-medium leading-relaxed mb-4 line-clamp-2">{article.description}</p>
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-cyan-900 group-hover:text-indigo-900 transition-colors mt-auto pt-2">
                                            Read Article &rarr;
                                        </div>
                                    </GlowCard>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </ScrollReveal>

            {/* Articles FAQ Section */}
            <ScrollReveal delay={350}>
                <section className="mb-20 border-t border-zinc-300 pt-12">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem 
                            question="How are frameworks different from articles?" 
                            answer="Frameworks (such as the Production AI Governance Framework) are canonical reference definitions and operational systems. Articles are time-stamped essays published in external outlets (like CIO.com or Built In) that explore practical applications, case studies, and financial benchmarks of those frameworks."
                        />
                        <FAQItem 
                            question="Can I cite or republish these essays?" 
                            answer="You are welcome to quote or cite glossary definitions and research data with appropriate attribution to richardewing.io. For syndication or full republishing rights, please reach out via our contact page."
                        />
                    </div>
                </section>
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
