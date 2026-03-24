import type { Metadata } from 'next';
import Link from 'next/link';
import { getSortedArticles, getCategories } from '@/lib/blog-data';
import { categoryColors } from '@/lib/blog-types';

export const metadata: Metadata = {
    title: 'Blog — 100+ Engineering Economics Articles | Richard Ewing',
    description: 'Over 100 articles on engineering economics, technical debt, AI costs, cloud optimization, DevOps ROI, and R&D capital management. Written by Richard Ewing, The Product Economist.',
    keywords: ['engineering economics blog', 'technical debt articles', 'AI cost analysis', 'R&D capital management', 'product economics insights', 'CTO blog'],
    alternates: { canonical: 'https://www.richardewing.io/blog' },
    openGraph: { title: 'Blog — 100+ Engineering Economics Articles', description: '100+ articles on engineering economics, technical debt, AI costs, and R&D capital.', url: 'https://www.richardewing.io/blog', type: 'website' },
};

export default function BlogPage() {
    const articles = getSortedArticles();
    const featured = articles.filter(a => a.featured);
    const regular = articles.filter(a => !a.featured);
    const categories = getCategories();

    return (
        <main className="pt-24 pb-20">
            <div className="page-container">
                {/* Hero */}
                <section className="text-center mb-16 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="relative">
                        <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">The Product Economist</p>
                        <h1 className="text-4xl md:text-6xl font-grotesk font-bold text-white mb-6">
                            Engineering Economics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Blog.</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-4">
                            {articles.length} articles on engineering economics, technical debt quantification, AI cost analysis,
                            R&D capital allocation, and the economics nobody else is talking about.
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(cat => (
                            <span key={cat.name} className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${categoryColors[cat.name] || 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20'}`}>
                                {cat.name} ({cat.count})
                            </span>
                        ))}
                    </div>
                </section>

                {/* Featured */}
                <section className="mb-16 max-w-5xl mx-auto">
                    <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Featured</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featured.map(article => (
                            <Link key={article.slug} href={`/blog/${article.slug}`}
                                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${categoryColors[article.category]}`}>{article.category}</span>
                                    <span className="text-[10px] text-zinc-600">{article.readTime} read</span>
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">{article.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{article.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-zinc-600">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    <span className="text-xs text-cyan-400 group-hover:text-cyan-300">Read →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* All Articles */}
                <section className="max-w-5xl mx-auto">
                    <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">All {regular.length} Articles</h2>
                    <div className="space-y-4">
                        {regular.map(article => (
                            <Link key={article.slug} href={`/blog/${article.slug}`}
                                className="group flex items-start gap-6 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${categoryColors[article.category] || 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20'}`}>{article.category}</span>
                                        <span className="text-[10px] text-zinc-600">{article.readTime}</span>
                                        <span className="text-[10px] text-zinc-700">·</span>
                                        <span className="text-[10px] text-zinc-600">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                    </div>
                                    <h3 className="text-lg font-grotesk font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">{article.title}</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{article.excerpt}</p>
                                </div>
                                <span className="text-zinc-600 group-hover:text-cyan-400 transition-colors mt-4 shrink-0">→</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="mt-16 max-w-2xl mx-auto">
                    <div className="card p-8 text-center border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5">
                        <h3 className="text-2xl font-grotesk font-bold text-white mb-3">Get the Weekly Briefing</h3>
                        <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                            One email per week with the engineering economics analysis nobody else is doing. Join 2,000+ executives and engineering leaders.
                        </p>
                        <a href="https://theproducteconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer"
                            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-bold text-sm hover:opacity-90 transition-opacity">
                            Subscribe Free →
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
