import { exogramDocs } from '@/lib/exogram-docs';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/exogram/docs' },
    title: 'Exogram Docs & Quickstart',
    description: 'Deploy deterministic runtime boundaries, token firewalls, and context filters in under 10 minutes.',
};

export default function ExogramDocsIndex() {
    return (
        <div className="prose prose-zinc max-w-none">
            <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                Exogram Documentation
            </h1>
            <p className="text-lg text-zinc-900 mb-12">
                Welcome to the technical hub for Exogram. Here you will find the architectural blueprints, concepts, and API references required to deploy deterministic verification layers across your AI applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {exogramDocs.slice(0, 4).map(doc => (
                    <a key={doc.slug} href={`/exogram/docs/${doc.slug}`} className="block p-6 rounded-xl border border-zinc-400 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all group">
                        <span className="text-xs font-bold font-medium font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest">{doc.category}</span>
                        <h3 className="text-xl font-bold text-zinc-950 mt-2 mb-2 group-hover:text-purple-900 font-extrabold font-semibold transition-colors">{doc.title}</h3>
                        <p className="text-sm font-semibold text-zinc-900 font-medium">{doc.description}</p>
                    </a>
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-16 mb-4">Getting Started</h2>
            <p className="text-zinc-900 mb-4">
                Exogram operates implicitly adjacent to your existing LLM pipelines. You do not need to rewrite your agent execution loops - simply pass inputs and outputs through the verification boundary.
            </p>
            <div className="bg-white/50 p-6 rounded-xl border border-zinc-400 mt-8">
                <h3 className="text-sm font-semibold font-mono text-cyan-900 font-extrabold font-semibold mb-4">QUICK INSTALL</h3>
                <code className="text-zinc-950 block bg-white/50 px-4 py-3 rounded-lg border border-zinc-400 font-mono text-sm">
                    npm install @exogram/sdk
                </code>
            </div>
        </div>
    );
}
