import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'HackerNoon Articles | AI Economics by Richard Ewing',
    description: 'Richard Ewing on HackerNoon: deep dives into AI agent economics, prompt engineering costs, and the hidden expenses of generative AI adoption.',
    keywords: ['Richard Ewing HackerNoon', 'developer economics', 'open source sustainability', 'AI agent architecture', 'AI economist HackerNoon'],
    alternates: { canonical: 'https://www.richardewing.io/articles/recap/hackernoon' },
    openGraph: { title: 'Richard Ewing on HackerNoon', description: 'Published articles on developer economics, AI agents, and technical debt for startups.', url: 'https://www.richardewing.io/articles/recap/hackernoon', type: 'article' },
};

const articles = [
    {
        title: 'The Economics of AI Agents: What Nobody Tells You About Cost',
        description: 'Breaking down the real cost of running AI agents in production: token economics, orchestration overhead, and the 5-50x cost multiplier of agentic systems.',
        topics: ['AI Agents', 'Token Economics', 'Agentic Workflow', 'AI COGS'],
        icon: '🤖',
    },
    {
        title: 'Open Source Is Not Free: Hidden OSS Dependency Costs',
        description: 'The true total cost of open-source dependencies: security vulnerability monitoring, license compliance, upgrade maintenance, and risk mitigation.',
        topics: ['Open Source', 'Dependency Debt', 'Supply Chain Security', 'License Compliance'],
        icon: '📦',
    },
    {
        title: 'Technical Debt for Startups: When to Ignore and When to Fix',
        description: 'A stage-appropriate guide to technical debt management. Pre-PMF: ignore it. Post-PMF: classify and prioritize. Pre-Series B: quantify in dollars.',
        topics: ['Technical Debt', 'Startup Strategy', 'Series Funding', 'VC Due Diligence'],
        icon: '🚀',
    },
];

export default function HackerNoonRecapPage() {
    const articleSchema = {
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'Richard Ewing HackerNoon Articles — Developer-Focused Economics',
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
        publisher: { '@type': 'Organization', name: 'HackerNoon' },
        url: 'https://www.richardewing.io/articles/recap/hackernoon',
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.richardewing.io/articles' },
            { '@type': 'ListItem', position: 3, name: 'HackerNoon', item: 'https://www.richardewing.io/articles/recap/hackernoon' },
        ],
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/articles" className="hover:text-cyan-900 font-extrabold font-semibold">Articles</Link><span>/</span><span className="text-orange-900 font-extrabold font-semibold font-bold">HackerNoon</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Published on{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">HackerNoon</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-4 max-w-2xl">
                        Richard Ewing&apos;s articles on HackerNoon — the leading platform for developer-focused content, covering AI agent economics, open-source sustainability, and technical debt strategy for startups.
                    </p>
                    <p className="text-sm font-semibold text-zinc-950 mb-12">HackerNoon reaches 4M+ developers and technical decision-makers monthly.</p>

                    <div className="space-y-6 mb-16">
                        {articles.map((article, i) => (
                            <div key={i} className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-8 hover:border-orange-500/40 transition-colors">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{article.icon}</span>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">{article.title}</h2>
                                        <p className="text-zinc-900 mb-4">{article.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {article.topics.map(topic => (
                                                <span key={topic} className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-zinc-900 font-bold font-mono">{topic}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-8">
                            <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">Related Glossary Terms</h2>
                            <div className="space-y-2">
                                {['agentic-workflow', 'ai-cogs', 'technical-debt', 'vc-due-diligence', 'dependency-debt'].map(slug => (
                                    <Link key={slug} href={`/glossary/${slug}`} className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ {slug.replace(/-/g, ' ')}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-8">
                            <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">Related Tools</h2>
                            <div className="space-y-2">
                                <Link href="/tools/pdi" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ Product Debt Index (PDI)</Link>
                                <Link href="/tools/aueb" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ AUEB Calculator</Link>
                                <Link href="/tools/scoring" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ AI Scoring Engine</Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-8">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Work With Richard</h2>
                        <p className="text-zinc-950 mb-6">From AI agent cost modeling to technical debt quantification — get the frameworks used by PE firms and Fortune 500 companies.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book Advisory →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
