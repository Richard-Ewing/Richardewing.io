import Link from 'next/link';
import { Search, TrendingDown, Shield, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found | Richard Ewing',
    description: 'The page you are looking for does not exist. Explore Production AI Governance tools, frameworks, and diagnostics at richardewing.io.',
    robots: 'noindex, follow',
};

export default function NotFound() {
    return (
        <main className="pt-28 pb-20 min-h-[80vh]">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-7xl font-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-500 mb-4">404</p>
                    <h1 className="text-2xl font-grotesk font-bold text-zinc-950 mb-3">This Page Doesn&apos;t Exist</h1>
                    <p className="text-zinc-600 max-w-md mx-auto">
                        But the problem you&apos;re trying to solve probably does. Start with a diagnosis.
                    </p>
                </div>

                {/* Semantic Recovery — Diagnostics First */}
                <div className="mb-12">
                    <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-[0.2em] mb-4 text-center">
                        Diagnose the Problem
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Link href="/tools/pdi" className="p-5 rounded-2xl bg-white border border-rose-200 hover:border-rose-400 transition-all group shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center">
                                    <Search className="w-4 h-4 text-rose-600" />
                                </div>
                                <span className="text-xs font-mono font-bold text-rose-500 uppercase">Free Tool</span>
                            </div>
                            <h3 className="font-bold text-zinc-900 text-sm group-hover:text-rose-700 transition-colors">Product Debt Index</h3>
                            <p className="text-xs text-zinc-500 mt-1">Calculate your Technical Insolvency Date</p>
                        </Link>

                        <Link href="/runtime-failure-index" className="p-5 rounded-2xl bg-white border border-violet-200 hover:border-violet-400 transition-all group shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center">
                                    <TrendingDown className="w-4 h-4 text-violet-600" />
                                </div>
                                <span className="text-xs font-mono font-bold text-violet-500 uppercase">Database</span>
                            </div>
                            <h3 className="font-bold text-zinc-900 text-sm group-hover:text-violet-700 transition-colors">Runtime Failure Index</h3>
                            <p className="text-xs text-zinc-500 mt-1">Real AI failures with root cause analysis</p>
                        </Link>

                        <Link href="/exogram" className="p-5 rounded-2xl bg-white border border-purple-200 hover:border-purple-400 transition-all group shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                                    <Shield className="w-4 h-4 text-purple-600" />
                                </div>
                                <span className="text-xs font-mono font-bold text-purple-500 uppercase">Infrastructure</span>
                            </div>
                            <h3 className="font-bold text-zinc-900 text-sm group-hover:text-purple-700 transition-colors">Exogram</h3>
                            <p className="text-xs text-zinc-500 mt-1">Deterministic verification for AI</p>
                        </Link>
                    </div>
                </div>

                {/* Common Pain Points — Semantic Rerouting */}
                <div className="mb-12 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
                    <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Looking for something specific?</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                            { q: 'Why does Claude forget instructions?', href: '/compare/why-claude-loses-context' },
                            { q: 'Why does Cursor rewrite files?', href: '/compare/why-cursor-rewrites-files' },
                            { q: 'Why do AI agents burn budget overnight?', href: '/compare/why-retry-loops-happen' },
                            { q: 'Why is MCP dangerous?', href: '/compare/why-mcp-is-dangerous' },
                            { q: 'What is Technical Insolvency?', href: '/glossary/technical-insolvency' },
                            { q: 'What is Hallucination Debt?', href: '/glossary/hallucination-debt' },
                            { q: 'What is the Innovation Tax?', href: '/glossary/innovation-tax' },
                            { q: 'What is Runtime Governance?', href: '/runtime-architecture' },
                        ].map(item => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-2 p-3 rounded-lg hover:bg-white transition-colors text-sm text-zinc-700 hover:text-violet-700 font-medium">
                                <ArrowRight className="w-3 h-3 text-violet-400 flex-shrink-0" />
                                {item.q}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Knowledge Base */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
                    {[
                        { label: 'Glossary', count: '430+ terms', href: '/glossary', icon: BookOpen },
                        { label: 'Blog', count: '130+ posts', href: '/blog', icon: BookOpen },
                        { label: 'Comparisons', count: '25+ pages', href: '/compare', icon: TrendingDown },
                        { label: 'Advisory', count: 'From $450', href: '/advisory', icon: Shield },
                    ].map(item => (
                        <Link key={item.href} href={item.href} className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-violet-300 transition-colors text-center group shadow-sm">
                            <p className="text-sm font-bold text-zinc-900 group-hover:text-violet-700 transition-colors">{item.label}</p>
                            <p className="text-xs text-zinc-600 mt-0.5">{item.count}</p>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/" className="text-sm font-bold text-zinc-500 hover:text-zinc-900 uppercase tracking-widest transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
