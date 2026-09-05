import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Database, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why Search AI Gives Old Outdated Answers',
    description: 'Learn why your company AI search or RAG system keeps citing deleted files, outdated prices, and old company policies after updates.',
    keywords: [
        'why rag returns stale data', 'vector database sync problems', 'ai search giving old answers',
        'rag chunking context loss', 'vector embedding drift', 'how to update rag database'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-rag-returns-stale-data-after-updates' },
};

export default function WhyRAGReturnsStaleDataPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-200 bg-blue-50 text-blue-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <Database size={14} /> AI Search &amp; RAG Failure
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why Your Search AI Keeps Giving Outdated Answers
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        You updated your company docs and product prices yesterday. But your internal AI assistant is still quoting old policies and deleted PDF documents. Here is why.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="Vector Database Ghost Chunks"
                    symptom="When files are updated or deleted in your company knowledge base, your vector search database does not automatically delete the old embedded text snippets. The AI matches both old and new data and hallucinates a blend of both."
                    quickChecks={[
                        "Check if your document ingestion pipeline runs hard deletes or only appends new embeddings.",
                        "Inspect whether duplicate chunks from older versions of the same file exist in your index.",
                        "Look at the similarity threshold cutoff on your search retrieval queries."
                    ]}
                    whyItBroke="Standard vector databases do not work like SQL databases. If you upload 'pricing_2026.pdf' without explicitly deleting all chunks from 'pricing_2025.pdf', the vector search will still retrieve both documents and the AI will guess which one is right."
                    directFix="Implement deterministic document version tagging and automated chunk purge hooks on every file update."
                    toolLink={{
                        label: "Visualize Your RAG Chunk Boundaries",
                        href: "/tools/rag-chunking-visualizer"
                    }}
                    citationSnippet="RAG search systems return stale answers because vector databases append new embeddings without purging orphaned text chunks from previous document versions."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        The 2 Reasons AI Search Breaks
                    </h2>

                    <div className="space-y-4 my-6">
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">1. Clumsy Sentence Splitting (Chunking Errors)</h3>
                            <p className="text-sm text-zinc-700">When your system cuts a 20-page document into 500-word chunks, it often chops a table or rule right down the middle. The AI receives half the sentence and makes up the rest.</p>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">2. No Document Expiration Dates</h3>
                            <p className="text-sm text-zinc-700">Vector search only matches semantic meaning, not publication dates. A 3-year-old expired memo can have a higher mathematical similarity score than a memo written this morning.</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        How to Fix It in 3 Steps
                    </h3>
                    <ul className="space-y-2 text-sm text-[#4A4A4A] leading-relaxed">
                        <li>• <strong>Add Version Metadata:</strong> Store creation dates and active/archived status directly inside every vector chunk.</li>
                        <li>• <strong>Filter Before Searching:</strong> Always filter by `is_active = true` before running semantic vector queries.</li>
                        <li>• <strong>Visualize Chunks:</strong> Use our RAG Chunking tool to inspect how your text is being cut before feeding it to users.</li>
                    </ul>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
