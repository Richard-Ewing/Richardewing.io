import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Guides — Complete Pillar Resources | Richard Ewing',
    description: 'Comprehensive guides on technical debt economics, AI product costs, and engineering leadership. Pillar content linking 100+ glossary terms.',
    keywords: ['technical debt guide', 'AI economics guide', 'engineering management guide', 'product economics'],
    alternates: { canonical: 'https://www.richardewing.io/guides' },
};

const guides = [
    {
        title: 'The Complete Guide to Technical Debt',
        description: 'From definition to dollars. What it is, how to measure it economically, the different types, AI-era forms, and how to remediate it.',
        href: '/guides/technical-debt',
        icon: '🏗️',
        color: 'border-rose-500/20 hover:border-rose-500/50',
        textColor: 'text-rose-400',
        terms: '50+ terms',
    },
    {
        title: 'AI Economics Hub — The Cost of Intelligence',
        description: 'Every AI query costs money. Inference costs, AI COGS, agent governance, and unit economics frameworks for AI products.',
        href: '/guides/ai-economics',
        icon: '🤖',
        color: 'border-violet-500/20 hover:border-violet-500/50',
        textColor: 'text-violet-400',
        terms: '40+ terms',
    },
];

export default function GuidesPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">Guides</h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
                        Comprehensive pillar resources that connect glossary terms, tools, and frameworks into complete learning paths.
                    </p>
                    <div className="space-y-6">
                        {guides.map((guide, i) => (
                            <Link key={i} href={guide.href} className={`block rounded-2xl border p-8 transition-colors ${guide.color}`}>
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{guide.icon}</span>
                                    <div>
                                        <h2 className={`text-2xl font-grotesk font-bold mb-2 ${guide.textColor}`}>{guide.title}</h2>
                                        <p className="text-zinc-400 mb-3">{guide.description}</p>
                                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{guide.terms} linked</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
