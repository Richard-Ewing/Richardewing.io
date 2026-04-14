'use client';

import { X, Gift, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';
import { useUser, useClerk } from '@clerk/nextjs';

interface BundlePopupProps {
    isOpen: boolean;
    onClose: () => void;
    currentGuide: string;
}

export const PREMIUM_GUIDES = [
    { id: 'premium_guide_29', name: 'AI Economics Deep Dive', slug: 'ai-economics', price: 29 },
    { id: 'premium_guide_29', name: 'PE Due Diligence', slug: 'pe-due-diligence', price: 29 },
    { id: 'premium_guide_29', name: 'VC Technology Assessment', slug: 'vc-technology-assessment', price: 29 },
    { id: 'premium_guide_29', name: 'SaaS Metrics Masterclass', slug: 'saas-metrics', price: 29 },
    { id: 'premium_guide_29', name: 'Cloud FinOps', slug: 'cloud-finops', price: 29 },
    { id: 'premium_guide_129', name: 'AI Agent Governance & Compliance Framework', slug: 'ai-agent-compliance-framework', price: 129 },
    { id: 'premium_guide_99', name: 'Confidential Computing for Enterprise AI', slug: 'confidential-computing-playbook', price: 99 },
    { id: 'premium_guide_149', name: 'GPU FinOps & AI Supercomputing', slug: 'gpu-finops-supercomputing', price: 149 },
    { id: 'premium_guide_99', name: 'AI Security Posture & Preemptive Defense', slug: 'ai-security-posture-2026', price: 99 },
    { id: 'premium_guide_79', name: 'Spatial Computing Economics', slug: 'spatial-computing-economics', price: 79 },
    { id: 'premium_guide_79', name: 'How To: Deploy Small Language Models', slug: 'how-to-deploy-small-language-models', price: 79 },
    { id: 'premium_guide_99', name: 'How To: Implement DSPM Data Security', slug: 'how-to-implement-dspm-data-security', price: 99 },
    { id: 'premium_guide_149', name: 'The 2026 Executive AI Playbook', slug: 'executive-technology-guide-2026', price: 149 },
];

export default function BundlePopup({ isOpen, onClose, currentGuide }: BundlePopupProps) {
    const { user, isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    if (!isOpen) return null;

    const handleCheckout = (productId: string) => {
        if (!isSignedIn) {
            openSignIn();
            return;
        }

        const product = PRODUCTS[productId];
        if (product?.paymentLink) {
            const url = new URL(product.paymentLink);
            if (user?.id) url.searchParams.append('client_reference_id', user.id);
            if (user?.primaryEmailAddress?.emailAddress) url.searchParams.append('prefilled_email', user.primaryEmailAddress.emailAddress);
            window.open(url.toString(), '_blank');
        }
    };

    const otherGuides = PREMIUM_GUIDES.filter(g => g.slug !== currentGuide);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
            <div
                className="relative w-full max-w-lg rounded-2xl border border-zinc-400 bg-white shadow-2xl shadow-violet-500/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border-b border-zinc-400 p-6">
                    <button onClick={onClose} className="absolute top-4 right-4 text-zinc-800 hover:text-zinc-900 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <Gift className="w-6 h-6 text-violet-400" />
                        <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Bundle & Save</span>
                    </div>
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-900">
                        Get More Guides. <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Pay Less.</span>
                    </h2>
                </div>

                {/* Options */}
                <div className="p-6 space-y-3">
                    {/* Single Guide */}
                    <button
                        onClick={() => handleCheckout(PREMIUM_GUIDES.find(g => g.slug === currentGuide)?.id || 'premium_guide_29')}
                        disabled={false}
                        className="w-full flex items-center justify-between p-4 rounded-xl border border-zinc-400 bg-zinc-50 hover:border-zinc-300 transition-all group text-left"
                    >
                        <div>
                            <div className="text-sm font-bold text-zinc-950 group-hover:text-cyan-300 transition-colors">This Guide Only</div>
                            <div className="text-xs text-zinc-950 mt-0.5">Instant access to this guide</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-zinc-900">${PREMIUM_GUIDES.find(g => g.slug === currentGuide)?.price || 29}</span>
                            <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:text-cyan-400 transition-colors" />
                        </div>
                    </button>

                    {/* All 13 Bundle */}
                    <button
                        onClick={() => handleCheckout('premium_bundle_ultimate')}
                        disabled={false}
                        className="w-full flex items-center justify-between p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50 transition-all group text-left relative"
                    >
                        <div className="absolute -top-2.5 left-4 px-2 py-0.5 rounded-full bg-cyan-500 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Ultimate Value
                        </div>
                        <div>
                            <div className="text-sm font-bold text-zinc-950 group-hover:text-cyan-300 transition-colors">All 13 Premium Guides</div>
                            <div className="text-xs text-zinc-950 mt-0.5">Complete 2026 premium library · Save over $500</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {PREMIUM_GUIDES.slice(0, 5).map(g => (
                                    <span key={g.id} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{g.name}</span>
                                ))}
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-800">+8 more</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl font-bold text-zinc-900">$399</span>
                            <span className="text-[10px] text-zinc-950 line-through">$1,027</span>
                        </div>
                    </button>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                    <p className="text-[10px] text-zinc-800 text-center">
                        Secure checkout powered by Stripe · Instant PDF access after purchase
                    </p>
                </div>
            </div>
        </div>
    );
}
