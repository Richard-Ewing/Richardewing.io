import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Activity, ShieldAlert } from 'lucide-react';

// Hardcoded comparisons for scaffold purposes.
// In reality, this would be an array in lib/content/comparisons.ts
const COMPARISONS = [
    {
        slug: 'deterministic-vs-probabilistic-engineering',
        title: 'Deterministic vs Probabilistic Engineering',
        description: 'Why relying on system prompts fails, and why runtime governance is required for production AI.',
        keywords: ['deterministic vs probabilistic', 'system prompt limits', 'AI reliability']
    },
    {
        slug: 'claude-code-vs-cursor-governance',
        title: 'Claude Code vs Cursor Governance',
        description: 'Comparing the enterprise governance controls of leading AI coding environments.',
        keywords: ['Claude Code governance', 'Cursor enterprise', 'AI editor safety']
    },
    {
        slug: 'runtime-gating-vs-prompt-engineering',
        title: 'Runtime Gating vs Prompt Engineering',
        description: 'Why you cannot prompt an agent into safety, and why execution middleware is the only defensible moat.',
        keywords: ['prompt engineering failure', 'runtime gating', 'AI safety middleware']
    }
];

export async function generateStaticParams() {
    return COMPARISONS.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const comparison = COMPARISONS.find(c => c.slug === slug);
    if (!comparison) return {};

    return {
        title: `${comparison.title} | Enterprise Comparison`,
        description: comparison.description,
    };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const comparison = COMPARISONS.find(c => c.slug === slug);

    if (!comparison) return <div className="p-20 text-center">Comparison Not Found.</div>;

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                <div className="mb-8 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    <Link href="/frameworks" className="hover:text-amber-900 transition-colors">Governance Frameworks</Link>
                    <span>/</span>
                    <span className="text-amber-900">Comparisons</span>
                </div>

                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-6">
                        <span className="text-2xl">⚖️</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        {comparison.title}
                    </h1>
                    <p className="text-xl text-zinc-700 max-w-2xl mx-auto font-medium">
                        {comparison.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 bg-rose-50 border border-rose-500/20 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ShieldAlert className="w-24 h-24 text-rose-900" />
                        </div>
                        <h3 className="text-sm font-bold font-mono text-rose-950 uppercase tracking-widest mb-4">Probabilistic Approach</h3>
                        <p className="text-zinc-800 font-semibold mb-4">Relying on LLM adherence to instructions. High variance. Requires human verification loops.</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                <span className="text-rose-600 mt-0.5">•</span> Governance Theater
                            </li>
                            <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                <span className="text-rose-600 mt-0.5">•</span> Verification Overload
                            </li>
                            <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                <span className="text-rose-600 mt-0.5">•</span> Execution Drift
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 bg-cyan-50 border border-cyan-500/20 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Activity className="w-24 h-24 text-cyan-900" />
                        </div>
                        <h3 className="text-sm font-bold font-mono text-cyan-950 uppercase tracking-widest mb-4">Deterministic Approach</h3>
                        <p className="text-zinc-800 font-semibold mb-4">Enforcing limits via runtime code middleware. Zero variance. Stops bad actions at the gate.</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                <span className="text-cyan-600 mt-0.5">•</span> Admissibility Pipelines
                            </li>
                            <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                <span className="text-cyan-600 mt-0.5">•</span> Cryptographic Containment
                            </li>
                            <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                <span className="text-cyan-600 mt-0.5">•</span> Zero-Trust Execution
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    Keywords: {comparison.keywords.join(', ')}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/skills" className="px-6 py-3 bg-zinc-950 text-white font-bold rounded hover:bg-zinc-800 transition-colors inline-flex items-center gap-2">
                        View Governance Infrastructure <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
