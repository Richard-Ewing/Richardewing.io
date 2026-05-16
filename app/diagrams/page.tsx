import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Architecture Diagrams | Richard Ewing',
    description: 'Visual representations of bounded cognition maps, admissibility routing, and deterministic execution gating.',
};

export default function DiagramsPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 text-cyan-700 mb-6">
                    <span className="text-2xl">🔄</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                    Governance Architecture Diagrams
                </h1>
                <p className="text-lg text-zinc-700 max-w-2xl mx-auto mb-12">
                    A visual library mapping the execution flow of secure, zero-trust autonomous agent architectures.
                </p>

                <div className="p-12 border border-[rgba(0,0,0,0.08)] rounded-2xl bg-white shadow-sm">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-4">Visual Library Integration</h2>
                    <p className="text-zinc-600 mb-8">
                        Mermaid.js and Excalidraw architecture maps are currently being syndicated to this hub.
                    </p>
                    <Link href="/frameworks" className="px-6 py-3 bg-zinc-950 text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        Read the Executive Frameworks
                    </Link>
                </div>
            </div>
        </main>
    );
}
