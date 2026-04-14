'use client';

import { useState } from 'react';
import BundlePopup, { PREMIUM_GUIDES } from './BundlePopup';
import { ArrowRight, Lock } from 'lucide-react';

interface PremiumGuideCTAProps {
    guideSlug: string;
    guideName: string;
}

export default function PremiumGuideCTA({ guideSlug, guideName }: PremiumGuideCTAProps) {
    const [showBundle, setShowBundle] = useState(false);
    const guidePrice = PREMIUM_GUIDES.find(g => g.slug === guideSlug)?.price || 29;

    return (
        <>
            <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Lock className="w-5 h-5 text-violet-400" />
                    <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Premium Guide</span>
                </div>
                <h3 className="text-2xl font-grotesk font-bold text-white mb-2">{guideName}</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                    Unlock full access to this guide including frameworks, templates, and actionable worksheets.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={() => setShowBundle(true)}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Unlock for ${guidePrice} <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setShowBundle(true)}
                        className="text-xs text-violet-400 hover:text-zinc-900 transition-colors underline underline-offset-2"
                    >
                        Or bundle & save up to 60%
                    </button>
                </div>

                <div className="flex items-center justify-center gap-6 mt-6 text-[10px] text-zinc-600">
                    <span>✓ Instant access</span>
                    <span>✓ PDF download</span>
                    <span>✓ Future updates</span>
                </div>
            </div>

            <BundlePopup
                isOpen={showBundle}
                onClose={() => setShowBundle(false)}
                currentGuide={guideSlug}
            />
        </>
    );
}
