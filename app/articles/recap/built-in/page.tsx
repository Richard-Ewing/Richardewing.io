import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Built In Articles: Engineering Team Economics',
    description: 'Read Richard Ewing\'s built-in insights on developer productivity, calculating engineering ROI, and managing the total cost of hiring for tech startups.',
    keywords: ['Richard Ewing Built In', 'engineering economics articles', 'scaling engineering teams', 'developer productivity', 'AI economist Built In'],
    alternates: { canonical: 'https://www.richardewing.io/articles/recap/built-in' },
    openGraph: { title: 'Richard Ewing on Built In', description: 'Published articles on engineering team economics and developer productivity.', url: 'https://www.richardewing.io/articles/recap/built-in', type: 'article' },
};

const articles = [
    {
        title: 'Your AI Agent Needs a Kill Switch',
        description: 'The common approach to AI agent security is based on guardrails that amount to guesses. A real security program needs rigid rules, not probabilistic predictions.',
        topics: ['AI Security', 'Kill Switch Protocol', 'Deterministic Control', 'Agentic AI'],
        icon: '🛡️',
    },
    {
        title: 'Revenue Per Engineer: The Metric Your Board Should Track',
        description: 'Why APER (Annualized Productive Engineering Revenue) is the missing link between engineering investment and business results. How top companies measure ...',
        topics: ['APER', 'Engineering Productivity', 'Revenue Per Engineer', 'Board Metrics'],
        icon: '📈',
    },
    {
        title: 'The True Cost of a Bad Hire in Engineering',
        description: 'Quantifying the total cost of a mis-hire in engineering: salary, onboarding, ramp time, team disruption, and the technical debt they leave behind. The h...',
        topics: ['Cost Per Hire', 'Engineering ROI', 'Team Scaling', 'Hiring Economics'],
        icon: '👥',
    },
    {
        title: 'Why Your Engineering Team Is Slower Than You Think',
        description: 'The maintenance load trap: how invisible infrastructure work consumes 40-80% of engineering capacity without anyone noticing. How to measure and reclaim...',
        topics: ['Maintenance Load', 'Feature Velocity', 'Engineering Capacity', 'Invisible Work'],
        icon: '⚡',
    },
];

export default function BuiltInRecapPage() {
    const articleSchema = {
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'Richard Ewing Built In Articles — Engineering Economics for Scaling Teams',
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
        publisher: { '@type': 'Organization', name: 'Built In' },
        url: 'https://www.richardewing.io/articles/recap/built-in',
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.richardewing.io/articles' },
            { '@type': 'ListItem', position: 3, name: 'Built In', item: 'https://www.richardewing.io/articles/recap/built-in' },
        ],
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/articles" className="hover:text-cyan-900 font-extrabold font-semibold">Articles</Link><span>/</span><span className="text-emerald-900 font-extrabold font-semibold font-bold">Built In</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Published on{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Built In</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-4 max-w-2xl">
                        Richard Ewing&apos;s articles on Built In — the leading platform for startup and tech company culture, covering engineering team economics, developer productivity, and scaling strategies.
                     </p>
                    <p className="text-sm font-semibold text-zinc-950 mb-12">Built In reaches 3M+ tech professionals monthly across 8 metro markets.</p>

                    <div className="space-y-6 mb-16">
                        {articles.map((article, i) => (
                            <div key={i} className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 hover:border-emerald-500/40 transition-colors">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{article.icon}</span>
                                    <div className="flex-1">
                                        <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-3">{article.title}</h2>
                                        <p className="text-zinc-900 mb-4">{article.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {article.topics.map(topic => (
                                                <span key={topic} className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-zinc-900 font-bold font-mono">{topic}</span>
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
                                {[
                                    'deterministic-execution-control',
                                    'admissibility-allowlist',
                                    'state-integrity-check',
                                    'cryptographic-audit-ledger',
                                    'aper',
                                    'engineering-productivity',
                                    'maintenance-load',
                                    'feature-velocity',
                                    'cost-per-hire'
                                ].map(slug => (
                                    <Link key={slug} href={`/glossary/${slug}`} className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ {slug.replace(/-/g, ' ')}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-8">
                            <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-4">Related Tools</h2>
                            <div className="space-y-2">
                                <Link href="/tools/aper" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ APER Calculator</Link>
                                <Link href="/tools/ev-se" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ EV-SE Calculator</Link>
                                <Link href="/tools/audit-interview" className="block text-sm font-semibold text-zinc-900 font-medium hover:text-cyan-900 font-extrabold font-semibold transition-colors">→ Audit Interview</Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Work With Richard</h2>
                        <p className="text-zinc-950 mb-6">Scale your engineering organization with evidence-based economics. R&amp;D Capital Audits quantify engineering investment returns for boards and investors.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book Advisory →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
