import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found | Richard Ewing',
    description: 'The page you were looking for does not exist. Explore free diagnostic tools, the glossary, or book an advisory session.',
};

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                <div className="text-8xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                    404
                </div>
                <h1 className="text-3xl font-bold text-white mb-4 font-grotesk">
                    Page Not Found
                </h1>
                <p className="text-gray-400 mb-8 text-lg">
                    This page doesn&apos;t exist — but there&apos;s plenty that does.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Link
                        href="/tools/pdi"
                        className="card p-4 hover:border-cyan-500/30 transition-all group text-left"
                    >
                        <div className="text-xs font-mono text-cyan-500 uppercase mb-1">Free Tool</div>
                        <div className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                            Product Debt Index
                        </div>
                        <div className="text-gray-500 text-xs">Calculate your tech debt in $</div>
                    </Link>

                    <Link
                        href="/glossary"
                        className="card p-4 hover:border-purple-500/30 transition-all group text-left"
                    >
                        <div className="text-xs font-mono text-purple-500 uppercase mb-1">Knowledge</div>
                        <div className="font-bold text-white group-hover:text-purple-400 transition-colors">
                            Glossary (330+ Terms)
                        </div>
                        <div className="text-gray-500 text-xs">Technical debt to AI governance</div>
                    </Link>

                    <Link
                        href="/advisory"
                        className="card p-4 hover:border-emerald-500/30 transition-all group text-left"
                    >
                        <div className="text-xs font-mono text-emerald-500 uppercase mb-1">Services</div>
                        <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                            Advisory Services
                        </div>
                        <div className="text-gray-500 text-xs">Book a free introductory call</div>
                    </Link>

                    <Link
                        href="/articles"
                        className="card p-4 hover:border-amber-500/30 transition-all group text-left"
                    >
                        <div className="text-xs font-mono text-amber-500 uppercase mb-1">Publications</div>
                        <div className="font-bold text-white group-hover:text-amber-400 transition-colors">
                            Articles & Frameworks
                        </div>
                        <div className="text-gray-500 text-xs">Published in Built In, CIO.com</div>
                    </Link>
                </div>

                <Link
                    href="/"
                    className="text-sm text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-mono"
                >
                    ← Return Home
                </Link>
            </div>
        </main>
    );
}
