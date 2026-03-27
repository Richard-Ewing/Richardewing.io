'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lock, BookOpen, Sparkles, ChevronDown, Award } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';

import { useUser, useClerk } from '@clerk/nextjs';

interface PayGateProps {
    moduleTitle: string;
    moduleId: string;
    trackName: string;
    totalLessons: number;
    previewLessonIndex?: number;
    hasAccess?: boolean;
    children: React.ReactNode;
}

export default function PayGate({ moduleTitle, moduleId, trackName, totalLessons, previewLessonIndex = 0, hasAccess = false, children }: PayGateProps) {
    const [showPricing, setShowPricing] = useState(false);
    const [loading, setLoading] = useState<string | null>(null);
    const childArray = Array.isArray(children) ? children : [children];
    const previewContent = childArray[previewLessonIndex];
    const lockedContent = childArray.filter((_, i) => i !== previewLessonIndex);

    const { user, isLoaded, isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const handleCheckout = (productId: string) => {
        if (!isSignedIn) {
            openSignIn();
            return;
        }

        setLoading(productId);
        const product = PRODUCTS[productId];
        if (product?.paymentLink) {
            const url = new URL(product.paymentLink);
            if (user?.id) {
                const referenceId = productId === 'single_module' ? `${user.id}::module_${moduleId}` : user.id;
                url.searchParams.append('client_reference_id', referenceId);
            }
            if (user?.primaryEmailAddress?.emailAddress) {
                url.searchParams.append('prefilled_email', user.primaryEmailAddress.emailAddress);
            }
            window.open(url.toString(), '_blank');
        }
        setTimeout(() => setLoading(null), 1000);
    };

    if (hasAccess) {
        return <div className="space-y-12">{children}</div>;
    }

    return (
        <div>
            {/* Free Preview: First Lesson */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 px-4 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 w-fit">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Free Preview</span>
                </div>
                {previewContent}
            </div>

            {/* Pay Gate Barrier */}
            <div className="relative">
                {/* Blurred preview of locked content */}
                <div className="relative overflow-hidden rounded-2xl max-h-[300px]">
                    <div className="blur-[6px] opacity-40 pointer-events-none select-none" aria-hidden="true">
                        {lockedContent[0]}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950" />
                </div>

                {/* Unlock CTA */}
                <div className="relative -mt-32 z-10">
                    <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl p-8 shadow-2xl shadow-violet-500/5">
                        <div className="text-center">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-6 h-6 text-violet-400" />
                            </div>
                            <h3 className="text-xl font-grotesk font-bold text-white mb-2">
                                Unlock Full Module
                            </h3>
                            <p className="text-zinc-400 text-sm mb-6">
                                {totalLessons - 1} more lessons with hands-on exercises, metric cards, and assessment checklists.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3 text-center">
                                    <div className="text-lg font-bold text-white">{totalLessons}</div>
                                    <div className="text-[10px] text-zinc-500 uppercase">Lessons</div>
                                </div>
                                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3 text-center">
                                    <div className="text-lg font-bold text-white">{totalLessons * 3}+</div>
                                    <div className="text-[10px] text-zinc-500 uppercase">Exercises</div>
                                </div>
                                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3 text-center">
                                    <div className="text-lg font-bold text-white">✓</div>
                                    <div className="text-[10px] text-zinc-500 uppercase">Certificate</div>
                                </div>
                            </div>

                            {/* Pricing Toggle */}
                            <button
                                onClick={() => setShowPricing(!showPricing)}
                                className="flex items-center justify-center gap-2 w-full mb-4 text-xs text-zinc-500 hover:text-white transition-colors"
                            >
                                <span>View pricing options</span>
                                <ChevronDown className={`w-3 h-3 transition-transform ${showPricing ? 'rotate-180' : ''}`} />
                            </button>

                            {showPricing && (
                                <div className="space-y-3 mb-6 animate-in slide-in-from-top-2 duration-200">
                                    <button
                                        onClick={() => handleCheckout('single_module')}
                                        disabled={loading === 'single_module'}
                                        className="w-full text-left rounded-xl border border-violet-500/20 bg-violet-500/5 p-4 hover:border-violet-500/40 transition-all disabled:opacity-50"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-sm font-bold text-white">{loading === 'single_module' ? 'Redirecting...' : 'Single Module'}</div>
                                                <div className="text-xs text-zinc-500">Access to {moduleTitle}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-violet-400">$29</div>
                                                <div className="text-[10px] text-zinc-600">lifetime access</div>
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => handleCheckout('full_curriculum')}
                                        disabled={loading === 'full_curriculum'}
                                        className="w-full text-left rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 hover:border-cyan-500/40 transition-all relative overflow-hidden disabled:opacity-50"
                                    >
                                        <div className="absolute top-2 right-2 bg-cyan-500 text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Best Value</div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-sm font-bold text-white">{loading === 'full_curriculum' ? 'Redirecting...' : 'All 60 Modules'}</div>
                                                <div className="text-xs text-zinc-500">Full curriculum + tools</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-cyan-400">$199<span className="text-xs text-zinc-500">/yr</span></div>
                                                <div className="text-[10px] text-zinc-600">~$3/module</div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            )}

                            {/* Primary CTA */}
                            <button
                                onClick={() => handleCheckout('full_curriculum')}
                                disabled={!!loading}
                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                <Sparkles className="w-4 h-4" />
                                {loading ? 'Redirecting to Checkout...' : 'Unlock All Modules — $199/year'}
                            </button>

                            <p className="text-[10px] text-zinc-600 mt-3">
                                Includes all 60 modules • 150+ lessons • 5 tools • Certificate of completion
                            </p>

                            {/* Alternative: Advisory */}
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
                                    <Award className="w-3 h-3" />
                                    <span>Or <Link href="/advisory" className="text-cyan-400 hover:underline">book a live advisory session</Link> and get curriculum access included.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
