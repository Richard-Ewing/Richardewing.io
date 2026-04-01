import { getExogramDoc, exogramDocs } from '@/lib/exogram-docs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return exogramDocs.map((doc) => ({
        slug: doc.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const doc = getExogramDoc(resolvedParams.slug);
    if (!doc) return { title: 'Not Found' };

    return {
        title: `${doc.title} — Exogram Docs`,
        description: doc.description,
        alternates: { canonical: `https://www.richardewing.io/exogram/docs/${doc.slug}` }
    };
}

export default async function ExogramDocPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const doc = getExogramDoc(resolvedParams.slug);
    if (!doc) return notFound();

    return (
        <article className="prose prose-invert prose-purple max-w-none">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                {doc.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-white mt-2 mb-6">
                {doc.title}
            </h1>
            <p className="text-xl text-zinc-400 mb-12">
                {doc.description}
            </p>

            <div className="space-y-8">
                {doc.content.map((block, i) => {
                    if (block.type === 'h2') {
                        return <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">{block.text}</h2>;
                    }
                    if (block.type === 'p') {
                        return <p key={i} className="text-zinc-300 leading-relaxed">{block.text}</p>;
                    }
                    if (block.type === 'ul' && block.items) {
                        return (
                            <ul key={i} className="space-y-3 list-disc list-outside ml-5 text-zinc-300">
                                {block.items.map((item, j) => (
                                    <li key={j} className="pl-2 marker:text-purple-500">{item}</li>
                                ))}
                            </ul>
                        );
                    }
                    if (block.type === 'code') {
                        return (
                            <div key={i} className="my-6 rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
                                <div className="px-4 py-2 border-b border-white/5 bg-white/[0.02]">
                                    <span className="text-[10px] font-mono text-zinc-500">{block.language || 'text'}</span>
                                </div>
                                <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300">
                                    <code>{block.text}</code>
                                </pre>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            
            <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-sm">
                <span className="text-zinc-500 font-mono">EAAP Protocol v1.0</span>
                <span className="text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">Verified Architecture</span>
            </div>
        </article>
    );
}
