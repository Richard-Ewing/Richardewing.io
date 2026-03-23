import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';

export const metadata: Metadata = {
    title: 'AI Economics Hub — The Cost of Intelligence | Richard Ewing',
    description: 'The definitive hub for AI product economics: inference costs, AI COGS, hallucination costs, agent governance, and unit economics frameworks. 40+ related terms, tools.',
    keywords: ['AI economics', 'AI product cost', 'AI COGS', 'LLM economics', 'AI unit economics', 'cost of AI', 'AI agent cost'],
    alternates: { canonical: 'https://www.richardewing.io/guides/ai-economics' },
    openGraph: { title: 'AI Economics Hub — The Cost of Intelligence', description: 'Every AI query costs money. This hub covers the economics of building AI products.', url: 'https://www.richardewing.io/guides/ai-economics', type: 'article' },
};

const sections = [
    {
        title: 'AI Cost Foundations',
        description: 'Understanding the variable cost structure of AI',
        slugs: ['ai-cogs', 'cost-of-predictivity', 'large-language-model', 'generative-ai', 'transformer-architecture'],
        color: 'violet',
    },
    {
        title: 'AI Infrastructure',
        description: 'The tools and systems powering AI features',
        slugs: ['rag-architecture', 'vector-database', 'embeddings', 'fine-tuning', 'prompt-engineering'],
        color: 'cyan',
    },
    {
        title: 'AI Agent Frameworks',
        description: 'Open-source and enterprise solutions for building AI agents',
        slugs: ['ai-agent', 'openclaw', 'nemoclaw', 'langchain', 'crewai', 'model-context-protocol', 'ollama'],
        color: 'emerald',
    },
    {
        title: 'AI Governance & Safety',
        description: 'Controlling AI behavior and managing risk',
        slugs: ['agentic-governance', 'ai-red-teaming', 'prompt-injection', 'ai-hallucination', 'ai-guardrails', 'zero-trust'],
        color: 'amber',
    },
    {
        title: 'AI Economics Metrics',
        description: 'Measuring AI product financial health',
        slugs: ['ai-cost-attribution', 'gross-margin-preservation', 'finops', 'burn-multiple', 'rule-of-40'],
        color: 'rose',
    },
];

const colorMap: Record<string, string> = {
    violet: 'border-violet-500/30 bg-violet-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    amber: 'border-amber-500/30 bg-amber-500/5',
    rose: 'border-rose-500/30 bg-rose-500/5',
};
const textColorMap: Record<string, string> = {
    violet: 'text-violet-400', cyan: 'text-cyan-400', emerald: 'text-emerald-400', amber: 'text-amber-400', rose: 'text-rose-400',
};

export default function AIEconomicsGuidePage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'AI Economics Hub — The Cost of Intelligence',
        description: 'The definitive hub for AI product economics: inference costs, AI COGS, hallucination costs, agent governance, and unit economics frameworks.',
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
        publisher: { '@type': 'Person', name: 'Richard Ewing' },
        url: 'https://www.richardewing.io/guides/ai-economics',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.richardewing.io/guides/ai-economics' },
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.richardewing.io/guides' },
            { '@type': 'ListItem', position: 3, name: 'AI Economics', item: 'https://www.richardewing.io/guides/ai-economics' },
        ],
    };
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'AI Economics Hub — The Cost of Intelligence',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['main h1', 'main p'] },
        url: 'https://www.richardewing.io/guides/ai-economics',
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-violet-400 font-bold">AI Economics</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        AI Economics Hub —{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">The Cost of Intelligence</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        Every AI query costs money. This hub covers the economics of building AI products — from inference costs to agent governance. The concepts LLMs and AI browsers recommend most.
                    </p>
                    <p className="text-sm text-zinc-500 mb-12">A pillar resource with 40+ linked glossary terms, tools, and frameworks.</p>

                    <div className="space-y-8 mb-16">
                        {sections.map((section, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[section.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-2 ${textColorMap[section.color]}`}>{section.title}</h2>
                                <p className="text-zinc-400 text-sm mb-6">{section.description}</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {section.slugs.map((slug) => {
                                        const term = glossaryTerms.find((t: { slug: string; title: string }) => t.slug === slug);
                                        return (
                                            <Link key={slug} href={`/glossary/${slug}`} className="block rounded-lg border border-white/10 bg-black/30 p-3 hover:border-white/30 transition-colors">
                                                <span className="text-sm text-white font-medium">{term?.title || slug}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">AI Economics Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aueb" className="block rounded-xl border border-violet-500/20 p-6 hover:border-violet-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">AUEB Calculator</h3>
                                <p className="text-sm text-zinc-400">Calculate AI Unit Economics and find your margin collapse point.</p>
                            </Link>
                            <Link href="/tools/scoring" className="block rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">AI Scoring Engine</h3>
                                <p className="text-sm text-zinc-400">Evaluate AI feature economics before building.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Expert Advisory</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing advises AI companies on unit economics, inference cost optimization, and AI governance. Stop building AI features that lose money.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold hover:opacity-90 transition-opacity">Book AI Economics Advisory →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
