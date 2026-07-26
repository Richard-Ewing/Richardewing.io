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
        <main className="min-h-screen bg-zinc-950 text-white pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
                        VPC Policy-as-Code Sandbox
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                        Request Exogram Live Demo
                    </h1>
                    <p className="text-lg text-zinc-300 font-medium leading-relaxed">
                        Test deterministic AI governance runtime control in your VPC. Cap token bloat, eliminate prompt injection, and enforce schema compliance at line rate.
                    </p>
                </div>

                {/* Main Form Container */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl mb-16">
                    <ExogramDemoForm />
                </div>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                        <div className="text-2xl mb-2">⚡</div>
                        <h3 className="font-grotesk font-bold text-white text-base mb-1">Zero Latency Overhead</h3>
                        <p className="text-xs font-medium text-zinc-400">Policy evaluation executed at line rate inside your existing VPC ingress boundary.</p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                        <div className="text-2xl mb-2">🔒</div>
                        <h3 className="font-grotesk font-bold text-white text-base mb-1">Zero Data Retention</h3>
                        <p className="text-xs font-medium text-zinc-400">Prompts and outputs are checked deterministically without third-party log retention.</p>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                        <div className="text-2xl mb-2">📊</div>
                        <h3 className="font-grotesk font-bold text-white text-base mb-1">Hard Cost Caps</h3>
                        <p className="text-xs font-medium text-zinc-400">Prevent runaway token retries and recursive agent spending spikes automatically.</p>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs font-mono text-zinc-400">
                    Already an enterprise user?{' '}
                    <Link href="/exogram" className="text-cyan-400 underline hover:text-cyan-300">
                        View Exogram Platform Specifications &rarr;
                    </Link>
                </div>

            </div>
        </main>
    );
}
