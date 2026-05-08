import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Richard Ewing CIO.com Articles — Executive Technology Lea...',
    description: 'Read Richard Ewing\'s published articles on CIO.com covering R&D capital efficiency, technical debt economics, AI adoption strategies, and engineering l...',
    keywords: ['Richard Ewing CIO.com', 'CIO articles technical debt', 'R&D capital efficiency CIO', 'CTO thought leadership', 'AI economist CIO.com'],
    alternates: { canonical: 'https://www.richardewing.io/articles/recap/cio-com' },
    openGraph: { title: 'Richard Ewing on CIO.com', description: 'Published articles on R&D capital efficiency, technical debt economics, and AI adoption for CIOs.', url: 'https://www.richardewing.io/articles/recap/cio-com', type: 'article' },
};

const articles = [
    {
        title: 'The Hidden Cost of Technical Debt: Why CIOs Must Act Now',
        description: 'How technical debt silently erodes R&D capital efficiency and what CIOs can do about it. Introduces the Innovation Tax framework for quantifying the cos...',
        topics: ['Technical Debt', 'Innovation Tax', 'R&D Capital Efficiency', 'Engineering Economics'],
        icon: '💰',
    },
    {
        title: 'AI Adoption Without the AI Tax: A Framework for CIOs',
        description: 'A practical framework for evaluating AI feature economics before committing engineering resources. Covers AI COGS, Cost of Predictivity, and margin pres...',
        topics: ['AI COGS', 'Cost of Predictivity', 'AI Unit Economics', 'Gross Margin'],
        icon: '🤖',
    },
    {
        title: 'Engineering Productivity Metrics That Actually Matter',
        description: 'Why velocity and story points mislead, and which metrics (DORA, APER) give CIOs real visibility into engineering output and business impact.',
        topics: ['DORA Metrics', 'APER', 'Engineering Productivity', 'Feature Velocity'],
        icon: '📊',
    },
];

export default function CIORecapPage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Richard Ewing CIO.com Articles — Executive Technology Leadership',
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
        publisher: { '@type': 'Organization', name: 'CIO.com' },
        url: 'https://www.richardewing.io/articles/recap/cio-com',
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.richardewing.io/articles' },
            { '@type': 'ListItem', position: 3, name: 'CIO.com', item: 'https://www.richardewing.io/articles/recap/cio-com' },
        ],
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/articles" className="hover:text-cyan-900 font-extrabold font-semibold">Articles</Link><span>/</span><span className="text-cyan-900 font-extrabold font-semibold font-bold">CIO.com</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Published on{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">CIO.com</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-4 max-w-2xl">
                        Richard Ewing&apos;s published articles on CIO.com — Tier 1 media for CIOs, CTOs, and technology executives. Covering R&amp;D capital efficiency, technical debt economics, and AI adoption strategies.
                    </p>
                    <p className="text-sm font-semibold text-zinc-950 mb-12">CIO.com is an IDG publication reaching 2M+ technology decision-makers monthly.</p>

                    <div className="space-y-6 mb-16">
                        {articles.map((article, i) => (
                            <div key={i} className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 hover:border-cyan-500/40 transition-colors">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{article.icon}</span>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">{article.title}</h2>
                                        <p className="text-zinc-900 mb-4">{article.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {article.topics.map(topic => (
                                                <span key={topic} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-zinc-900 font-bold font-mono">{topic}</span>
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
                                {['technical-debt', 'innovation-tax', 'ai-cogs', 'dora-metrics', 'cost-of-predictivity'].map(slug => (
                                    <Link key={slug} href={`/glossary/${slug}`} className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ {slug.replace(/-/g, ' ')}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-8">
                            <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">Related Tools</h2>
                            <div className="space-y-2">
                                <Link href="/tools/pdi" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ Product Debt Index (PDI)</Link>
                                <Link href="/tools/aper" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ APER Calculator</Link>
                                <Link href="/tools/aueb" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ AUEB Calculator</Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Work With Richard</h2>
                        <p className="text-zinc-950 mb-6">The frameworks published on CIO.com are available as proprietary advisory engagements. R&amp;D Capital Audits translate technical complexity into board-ready financial clarity.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book Advisory →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
