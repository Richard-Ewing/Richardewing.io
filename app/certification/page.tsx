import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Governance Certification | Richard Ewing',
    description: 'Accreditation and maturity levels for institutional deterministic engineering.',
};

export default function CertificationPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-6">
                    <span className="text-2xl">🏅</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                    Institutional Governance Certification
                </h1>
                <p className="text-lg text-zinc-700 max-w-2xl mx-auto mb-12">
                    Prove your capability to design, deploy, and govern deterministic enterprise AI architectures without probabilistic vulnerabilities.
                </p>

                <div className="p-12 border border-[rgba(0,0,0,0.08)] rounded-2xl bg-white shadow-sm">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-4">Accreditation Engine Status</h2>
                    <p className="text-zinc-600 mb-8">
                        The exams, scorecards, and verifiable institutional credentials are in final technical review.
                    </p>
                    <Link href="/skills" className="px-6 py-3 bg-zinc-950 text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        Prepare with Governance Systems
                    </Link>
                </div>
            </div>
        </main>
    );
}
