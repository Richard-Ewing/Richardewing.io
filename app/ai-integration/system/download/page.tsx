import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, CheckCircle, Lock, ArrowRight, Package } from 'lucide-react';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Download AI Integration System Assets',
    description: 'Download complete deployment manifests, policy schemas, and implementation guides for enterprise AI integration.',
    robots: { index: false, follow: false },
};

export default async function DownloadPage() {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in?redirect_url=/ai-integration/system/download');
    }

    const unlockedItems = (user.publicMetadata?.unlocked_items as string[]) || [];
    const unlockedAssets = (user.publicMetadata?.unlocked_assets as string[]) || [];

    const hasStarter = unlockedItems.includes('ai_integration_starter') || unlockedItems.includes('ai_integration_complete') || unlockedAssets.includes('ai_integration_starter') || unlockedAssets.includes('ai_integration_complete');
    const hasComplete = unlockedItems.includes('ai_integration_complete') || unlockedAssets.includes('ai_integration_complete');
    const hasPurchase = hasStarter || hasComplete;

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Package size={14} /> Your Purchase
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        {hasPurchase ? 'Download Your System' : 'AI Integration System'}
                    </h1>
                    <p className="text-[#4A4A4A]">
                        {hasPurchase
                            ? 'Your files are ready. Download and start implementing immediately.'
                            : 'Purchase the system to access your downloads.'}
                    </p>
                </div>

                {hasPurchase ? (
                    <>
                        {/* Download Card */}
                        <div className="bg-white rounded-2xl border-2 border-emerald-400 p-8 shadow-lg mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A]">
                                        {hasComplete ? 'Complete System' : 'Starter System'}
                                    </h2>
                                    <p className="text-sm text-emerald-600 font-bold">Purchase verified ✓</p>
                                </div>
                            </div>

                            {/* Starter Download */}
                            <div className="mb-6">
                                <a
                                    href="/downloads/ai-integration-starter.zip"
                                    download
                                    className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200 hover:bg-emerald-100 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <Download className="w-5 h-5 text-emerald-600" />
                                        <div>
                                            <div className="font-bold text-[#1A1A1A]">
                                                {hasComplete ? 'Starter Modules (1-6)' : 'AI Integration System - Starter'}
                                            </div>
                                            <div className="text-xs text-[#6A6A6A]">7 files • Audit, Process Map, Scoring Matrix, 55 Prompts, Roadmap Generator, 30-Day Plan</div>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            {/* Complete Download */}
                            {hasComplete ? (
                                <div className="mb-6">
                                    <a
                                        href="/downloads/ai-integration-complete.zip"
                                        download
                                        className="flex items-center justify-between p-4 bg-violet-50 rounded-xl border border-violet-200 hover:bg-violet-100 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Download className="w-5 h-5 text-violet-600" />
                                            <div>
                                                <div className="font-bold text-[#1A1A1A]">AI Integration System - Complete (All 10 Modules)</div>
                                                <div className="text-xs text-[#6A6A6A]">11 files • All Starter modules + ROI Calculator, Tool Guide, Quarterly Review, 100-Point Checklist</div>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-violet-600 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            ) : (
                                <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 mb-6">
                                    <div className="flex items-center gap-3">
                                        <Lock className="w-5 h-5 text-zinc-600" />
                                        <div>
                                            <div className="font-bold text-[#1A1A1A]">Complete System (Modules 7-10)</div>
                                            <div className="text-xs text-[#6A6A6A]">ROI Calculator, AI Tool Selection Guide, Quarterly Review Framework, 100-Point Checklist</div>
                                        </div>
                                    </div>
                                    <a href="/api/buy/ai_integration_complete" className="mt-3 inline-block text-sm font-bold text-violet-600 hover:text-violet-800">
                                        Upgrade to Complete ($1,997) →
                                    </a>
                                </div>
                            )}

                            {/* What's Inside */}
                            <div className="border-t border-zinc-200 pt-6">
                                <h3 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">What&apos;s in your download</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {[
                                        { num: '01', title: 'AI Readiness Audit', included: true },
                                        { num: '02', title: 'Business Process Map', included: true },
                                        { num: '03', title: 'Opportunity Scoring Matrix', included: true },
                                        { num: '04', title: 'Prompt Library (55 Prompts)', included: true },
                                        { num: '05', title: 'Strategic Roadmap Generator', included: true },
                                        { num: '06', title: '30-Day Kickstart Plan', included: true },
                                        { num: '07', title: 'ROI Calculator', included: hasComplete },
                                        { num: '08', title: 'AI Tool Selection Guide', included: hasComplete },
                                        { num: '09', title: 'Quarterly Review Framework', included: hasComplete },
                                        { num: '10', title: 'Implementation Checklist', included: hasComplete },
                                    ].map((m) => (
                                        <div key={m.num} className={`flex items-center gap-2 text-sm ${m.included ? 'text-[#1A1A1A]' : 'text-zinc-600'}`}>
                                            {m.included ? (
                                                <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                                            ) : (
                                                <Lock size={14} className="text-zinc-700 flex-shrink-0" />
                                            )}
                                            <span className="font-mono text-xs text-zinc-600 mr-1">{m.num}</span>
                                            {m.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Support & Next Steps */}
                        <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm mb-8">
                            <h3 className="font-grotesk font-bold text-[#1A1A1A] mb-3">Getting Started</h3>
                            <ol className="space-y-2 text-sm text-[#4A4A4A] list-decimal list-inside">
                                <li>Download and unzip your files</li>
                                <li>Start with <strong>MODULE-01-AI-Readiness-Audit.md</strong> - complete the full assessment</li>
                                <li>Work through modules in order (01 → 06)</li>
                                <li>Use the prompts in Module 04 throughout the process</li>
                                <li>Begin your 30-Day Kickstart (Module 06) once your roadmap is ready</li>
                            </ol>
                        </div>

                        {/* Upgrade Path */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-8">
                            <h3 className="font-grotesk font-bold text-[#1A1A1A] mb-2">Want Expert Help?</h3>
                            <p className="text-sm text-[#4A4A4A] mb-3">If you&apos;d rather have someone run the process for you, the Quarterly AI Audit ($5,000) delivers a complete roadmap in 48 hours.</p>
                            <Link href="/ai-integration" className="text-sm font-bold text-emerald-700 hover:text-emerald-900">View Advisory Options →</Link>
                        </div>
                    </>
                ) : (
                    /* Not Purchased State */
                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 shadow-sm text-center">
                        <Lock className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                        <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-2">No Purchase Found</h2>
                        <p className="text-sm text-[#4A4A4A] mb-6 max-w-md mx-auto">
                            It looks like you haven&apos;t purchased the AI Integration System yet. If you recently purchased, it may take a moment to process.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/ai-integration/system" className="px-6 py-3 bg-violet-600 text-white font-bold rounded-lg text-sm hover:bg-violet-500 transition-colors">
                                View System Details →
                            </Link>
                            <button
                                onClick={undefined}
                                className="px-6 py-3 text-zinc-600 font-bold rounded-lg text-sm border border-zinc-200 hover:bg-zinc-50 transition-colors"
                            >
                                Refresh Page
                            </button>
                        </div>
                        <p className="text-xs text-zinc-600 mt-6">
                            Already purchased? Try refreshing or contact richardewing@exogram.ai for support.
                        </p>
                    </div>
                )}

                <div className="text-center mt-8">
                    <Link href="/ai-integration/system" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Back to System Overview</Link>
                </div>
            </div>
        </main>
    );
}
