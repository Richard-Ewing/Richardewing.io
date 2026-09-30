import type { Metadata } from 'next';
import Link from 'next/link';
import { ExogramDemoForm } from './ExogramDemoForm';

export const metadata: Metadata = {
    title: 'Exogram Live Sandbox Demo & VPC Trial Request',
    description: 'Schedule a live demonstration of Exogram runtime AI cost caps, policy-as-code gateway enforcement, and XML context boundaries.',
    alternates: { canonical: 'https://www.richardewing.io/exogram/demo' },
    openGraph: {
        title: 'Exogram Live Sandbox Demo | Richard Ewing',
        description: 'Schedule a live demonstration of Exogram runtime AI cost caps, policy-as-code gateway enforcement, and XML context boundaries.',
        url: 'https://www.richardewing.io/exogram/demo',
        siteName: 'Richard Ewing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exogram Live Sandbox Demo | Richard Ewing',
        description: 'Schedule a live demonstration of Exogram runtime AI cost caps, policy-as-code gateway enforcement, and XML context boundaries.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function ExogramDemoPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-3">
                        VPC Policy-as-Code Sandbox
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Request Exogram Live Demo
                    </h1>
                    <p className="text-lg text-zinc-700 font-medium leading-relaxed">
                        Test deterministic AI governance runtime control in your VPC. Cap token bloat, eliminate prompt injection, and enforce schema compliance at line rate.
                    </p>
                </div>

                {/* Main Form Container */}
                <div className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 shadow-sm mb-16">
                    <ExogramDemoForm />
                </div>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white border border-zinc-300 p-6 rounded-2xl shadow-sm">
                        <div className="text-2xl mb-2">⚡</div>
                        <h3 className="font-grotesk font-bold text-zinc-950 text-base mb-1">Zero Latency Overhead</h3>
                        <p className="text-xs font-medium text-zinc-600">Policy evaluation executed at line rate inside your existing VPC ingress boundary.</p>
                    </div>

                    <div className="bg-white border border-zinc-300 p-6 rounded-2xl shadow-sm">
                        <div className="text-2xl mb-2">🔒</div>
                        <h3 className="font-grotesk font-bold text-zinc-950 text-base mb-1">Zero Data Retention</h3>
                        <p className="text-xs font-medium text-zinc-600">Prompts and outputs are checked deterministically without third-party log retention.</p>
                    </div>

                    <div className="bg-white border border-zinc-300 p-6 rounded-2xl shadow-sm">
                        <div className="text-2xl mb-2">📊</div>
                        <h3 className="font-grotesk font-bold text-zinc-950 text-base mb-1">Hard Cost Caps</h3>
                        <p className="text-xs font-medium text-zinc-600">Prevent runaway token retries and recursive agent spending spikes automatically.</p>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs font-mono text-zinc-500">
                    Already an enterprise user?{' '}
                    <Link href="/exogram" className="text-cyan-700 underline hover:text-cyan-900 font-semibold">
                        View Exogram Platform Specifications &rarr;
                    </Link>
                </div>

            </div>
        </main>
    );
}
