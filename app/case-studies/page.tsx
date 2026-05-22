import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/case-studies' },
    title: 'Case Studies & Failure Analyses | Richard Ewing',
    description: 'Operational realism density: how and why production AI systems collapse, and the governance frameworks that prevent them.',
};

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 text-rose-700 mb-6">
                    <span className="text-2xl">🔥</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                    Operational Failure Case Studies
                </h1>
                <p className="text-lg text-zinc-700 max-w-2xl mx-auto mb-12">
                    Real-world post-mortems of AI system collapse, orchestration entropy, and semantic contamination at enterprise scale.
                </p>

                <div className="p-12 border border-[rgba(0,0,0,0.08)] rounded-2xl bg-white shadow-sm">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-4">Systemizing the Realism</h2>
                    <p className="text-zinc-600 mb-8">
                        Our database of catastrophic failures and deterministic remediations is currently being mapped into the ontology graph.
                    </p>
                    <Link href="/skills" className="px-6 py-3 bg-zinc-950 text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        View Remediation Infrastructure
                    </Link>
                </div>
            </div>
        </main>
    );
}
