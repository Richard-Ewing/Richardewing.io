import { exogramDocs } from '@/lib/exogram-docs';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/exogram/docs' },
    title: 'Exogram Docs & Quickstart',
    description: 'Deploy deterministic runtime boundaries, token firewalls, and context filters in under 10 minutes.',
};

export default function ExogramDocsIndex() {
    const categories = ['Architecture', 'Core Concepts', 'Integration', 'Protocols & Standards'];

    return (
        <div className="prose prose-zinc max-w-none">
            <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                Exogram Documentation
            </h1>
            <p className="text-lg text-zinc-900 mb-8 leading-relaxed">
                Welcome to the technical hub for Exogram. Here you will find the architectural blueprints, concepts, and API references required to deploy deterministic verification layers across your AI applications.
            </p>

            <div className="bg-white/50 p-6 rounded-xl border border-zinc-400 mb-12">
                <h3 className="text-sm font-semibold font-mono text-cyan-900 font-extrabold uppercase tracking-widest mb-3">Quick Install</h3>
                <code className="text-zinc-950 block bg-white/70 px-4 py-3 rounded-lg border border-zinc-400 font-mono text-sm">
                    npm install @exogram/sdk
                </code>
            </div>

            <div className="space-y-12 not-prose">
                {categories.map((cat) => {
                    const docsInCat = exogramDocs.filter((d) => d.category === cat);
                    if (docsInCat.length === 0) return null;
                    return (
                        <div key={cat}>
                            <h2 className="text-xl font-bold font-grotesk text-zinc-950 mb-4 border-b border-zinc-300 pb-2">
                                {cat}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {docsInCat.map((doc) => (
                                    <Link 
                                        key={doc.slug} 
                                        href={`/exogram/docs/${doc.slug}`} 
                                        className="block p-5 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-50 hover:border-purple-500/40 transition-all group shadow-sm"
                                    >
                                        <span className="text-[10px] font-mono font-bold text-purple-900 uppercase tracking-wider block mb-1">
                                            {doc.category}
                                        </span>
                                        <h3 className="text-base font-bold text-zinc-950 group-hover:text-purple-900 transition-colors mb-1 font-grotesk">
                                            {doc.title}
                                        </h3>
                                        <p className="text-xs text-zinc-700 font-medium line-clamp-2">
                                            {doc.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-300">
                <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-4">Runtime Integration Principle</h2>
                <p className="text-zinc-900 mb-4 leading-relaxed font-medium">
                    Exogram operates adjacent to your existing LLM pipelines. You do not need to rewrite your agent execution loops: simply pass inputs and outputs through the verification boundary before final tool execution.
                </p>
            </div>
        </div>
    );
}
