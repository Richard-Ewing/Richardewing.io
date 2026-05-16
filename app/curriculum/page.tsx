import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Executive Curriculum | Richard Ewing',
    description: 'Institutional onboarding tracks for CTO Governance, AI Cost Containment, and Deterministic Engineering.',
};

export default function CurriculumPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-100 text-violet-700 mb-6">
                    <span className="text-2xl">🎓</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                    Governance Curriculum Tracks
                </h1>
                <p className="text-lg text-zinc-700 max-w-2xl mx-auto mb-12">
                    Institutional onboarding and certification tracks for engineering leadership transitioning to deterministic AI governance.
                </p>

                <div className="p-12 border border-[rgba(0,0,0,0.08)] rounded-2xl bg-white shadow-sm">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-4">Under Construction</h2>
                    <p className="text-zinc-600 mb-8">
                        The structured learning tracks for CTOs, Lead Engineers, and AI Economists are currently being deployed.
                    </p>
                    <Link href="/skills" className="px-6 py-3 bg-zinc-950 text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        Explore Governance Systems Meanwhile
                    </Link>
                </div>
            </div>
        </main>
    );
}
