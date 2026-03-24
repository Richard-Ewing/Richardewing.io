import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog — Engineering Economics Insights | Richard Ewing',
    description: 'Articles on engineering economics, technical debt quantification, AI costs, R&D capital management, and product economics. Written by Richard Ewing, The Product Economist.',
    keywords: ['engineering economics blog', 'technical debt articles', 'AI cost analysis', 'R&D capital management', 'product economics insights', 'CTO blog', 'engineering leadership'],
    alternates: { canonical: 'https://www.richardewing.io/blog' },
    openGraph: { title: 'Blog — Engineering Economics Insights', description: 'Articles on engineering economics, technical debt, AI costs, and R&D capital management.', url: 'https://www.richardewing.io/blog', type: 'website' },
};

const articles = [
    {
        slug: 'subprime-code-crisis',
        title: 'The Subprime Code Crisis: Why 68% of R&D Spend Is Wasted',
        excerpt: 'Just like the 2008 financial crisis was built on asset-backed securities nobody understood, today\'s technology landscape is built on engineering debt nobody quantifies.',
        category: 'Technical Debt',
        date: '2026-03-20',
        readTime: '12 min',
        featured: true,
    },
    {
        slug: 'ai-unit-economics-30-minutes',
        title: 'How to Calculate Your AI Unit Economics in 30 Minutes',
        excerpt: 'Most AI features are margin-negative. Here\'s the exact framework to calculate whether your AI feature makes money — before your CFO asks.',
        category: 'AI Economics',
        date: '2026-03-18',
        readTime: '10 min',
        featured: true,
    },
    {
        slug: 'pe-due-diligence-red-flags',
        title: '5 Red Flags PE Firms Miss in Technical Due Diligence',
        excerpt: 'Private equity firms lose millions because their due diligence stops at revenue metrics. Here are the 5 engineering signals that predict post-acquisition failure.',
        category: 'PE/VC',
        date: '2026-03-15',
        readTime: '9 min',
    },
    {
        slug: 'technical-debt-cfo-guide',
        title: 'The Real Cost of Technical Debt: A CFO\'s Guide',
        excerpt: 'Technical debt isn\'t a developer complaint — it\'s a capital allocation problem. Here\'s how to quantify it in dollars your CFO will understand.',
        category: 'Technical Debt',
        date: '2026-03-12',
        readTime: '11 min',
    },
    {
        slug: 'dora-metrics-lying',
        title: 'Why Your DORA Metrics Are Lying to You',
        excerpt: 'DORA metrics measure speed. But speed in the wrong direction is just expensive chaos. Here\'s what to measure instead — and how to present it to your board.',
        category: 'Engineering Metrics',
        date: '2026-03-10',
        readTime: '8 min',
    },
    {
        slug: 'ai-feature-profitability',
        title: 'AI Feature Profitability: When to Kill the Model',
        excerpt: 'Your AI feature impresses users but destroys margin. At what point do you sunset it? Here\'s the decision framework that separates winners from margin casualties.',
        category: 'AI Economics',
        date: '2026-03-08',
        readTime: '9 min',
    },
    {
        slug: 'board-reporting-cto-framework',
        title: 'Board Reporting for CTOs: The 4-Quadrant Framework',
        excerpt: 'Most CTO board presentations fail because they speak engineering, not finance. This 4-quadrant framework translates technical health into capital allocation language.',
        category: 'Leadership',
        date: '2026-03-05',
        readTime: '10 min',
    },
    {
        slug: 'engineering-hiring-economics',
        title: 'Engineering Hiring Economics: The True Cost of a Mis-Hire',
        excerpt: 'A single bad engineering hire costs 3-5x their annual salary. Here\'s the math — and what your recruiting process is missing.',
        category: 'Engineering Economics',
        date: '2026-03-02',
        readTime: '8 min',
    },
    {
        slug: 'rag-architecture-costs',
        title: 'RAG Architecture Costs: What Nobody Tells You',
        excerpt: 'Everyone talks about RAG accuracy. Nobody talks about RAG economics. Here\'s the real cost breakdown: embeddings, vector storage, retrieval, and reranking.',
        category: 'AI Economics',
        date: '2026-02-28',
        readTime: '11 min',
    },
    {
        slug: 'engineering-economics-startup-stages',
        title: 'From $0 to $10M ARR: Engineering Economics at Every Stage',
        excerpt: 'What you measure at seed is different from Series A, which is different from growth. Here\'s the engineering economics playbook for every funding stage.',
        category: 'Startup Economics',
        date: '2026-02-25',
        readTime: '13 min',
    },
];

const categoryColors: Record<string, string> = {
    'Technical Debt': 'text-red-400 bg-red-500/10 border-red-500/20',
    'AI Economics': 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    'PE/VC': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    'Engineering Metrics': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    'Leadership': 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    'Engineering Economics': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    'Startup Economics': 'text-pink-400 bg-pink-500/10 border-pink-500/20',
};

export default function BlogPage() {
    const featured = articles.filter(a => a.featured);
    const regular = articles.filter(a => !a.featured);

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
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Where engineering decisions meet financial reality. Technical debt quantification, AI cost analysis,
                            R&D capital allocation, and the economics nobody else is talking about.
                        </p>
                    </div>
                </section>

                {/* Featured Articles */}
                <section className="mb-16 max-w-5xl mx-auto">
                    <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">Featured</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featured.map(article => (
                            <Link
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${categoryColors[article.category]}`}>
                                        {article.category}
                                    </span>
                                    <span className="text-[10px] text-zinc-600">{article.readTime} read</span>
                                </div>
                                <h3 className="text-xl font-grotesk font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{article.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-zinc-600">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    <span className="text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors">Read →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* All Articles */}
                <section className="max-w-5xl mx-auto">
                    <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">All Articles</h2>
                    <div className="space-y-4">
                        {regular.map(article => (
                            <Link
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="group flex items-start gap-6 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${categoryColors[article.category]}`}>
                                            {article.category}
                                        </span>
                                        <span className="text-[10px] text-zinc-600">{article.readTime}</span>
                                        <span className="text-[10px] text-zinc-700">·</span>
                                        <span className="text-[10px] text-zinc-600">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                    </div>
                                    <h3 className="text-lg font-grotesk font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                                        {article.title}
                                    </h3>
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
                            One email per week with the engineering economics analysis nobody else is doing.
                            Join 2,000+ executives and engineering leaders.
                        </p>
                        <a
                            href="https://theproducteconomist.beehiiv.com/subscribe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                        >
                            Subscribe Free →
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
