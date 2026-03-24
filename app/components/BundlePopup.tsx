'use client';

import { X, Gift, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/products';

interface BundlePopupProps {
    isOpen: boolean;
    onClose: () => void;
    currentGuide: string;
}

const PREMIUM_GUIDES = [
    { id: 'guide_ai_economics', name: 'AI Economics Deep Dive', slug: 'ai-economics' },
    { id: 'guide_pe_due_diligence', name: 'PE Due Diligence', slug: 'pe-due-diligence' },
    { id: 'guide_vc_assessment', name: 'VC Technology Assessment', slug: 'vc-technology-assessment' },
    { id: 'guide_saas_metrics', name: 'SaaS Metrics Masterclass', slug: 'saas-metrics' },
    { id: 'guide_cloud_finops', name: 'Cloud FinOps', slug: 'cloud-finops' },
];

export default function BundlePopup({ isOpen, onClose, currentGuide }: BundlePopupProps) {
    if (!isOpen) return null;

    const handleCheckout = (productId: string) => {
        const product = PRODUCTS[productId];
        if (product?.paymentLink) {
            window.open(product.paymentLink, '_blank');
        }
    };

    const otherGuides = PREMIUM_GUIDES.filter(g => g.slug !== currentGuide);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <div
                className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-violet-500/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="relative bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border-b border-white/10 p-6">
                    <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <Gift className="w-6 h-6 text-violet-400" />
                        <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Bundle & Save</span>
                    </div>
                    <h2 className="text-2xl font-grotesk font-bold text-white">
                        Get More Guides. <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Pay Less.</span>
                    </h2>
                </div>

                {/* Options */}
                <div className="p-6 space-y-3">
                    {/* Single Guide */}
                    <button
                        onClick={() => handleCheckout(PREMIUM_GUIDES.find(g => g.slug === currentGuide)?.id || 'premium_guide')}
                        disabled={false}
                        className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all group text-left"
                    >
                        <div>
                            <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">This Guide Only</div>
                            <div className="text-xs text-zinc-500 mt-0.5">Instant access to this guide</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-white">$29</span>
                            <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                        </div>
                    </button>

                    {/* 3-Guide Bundle — RECOMMENDED */}
                    <button
                        onClick={() => handleCheckout('premium_bundle_3')}
                        disabled={false}
                        className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-violet-500/40 bg-violet-500/5 hover:border-violet-500/60 transition-all group text-left relative"
                    >
                        <div className="absolute -top-2.5 left-4 px-2 py-0.5 rounded-full bg-violet-500 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Best Value
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">Any 3 Guides Bundle</div>
                            <div className="text-xs text-zinc-500 mt-0.5">Pick any 3 of 5 premium guides · Save 21%</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {otherGuides.slice(0, 3).map(g => (
                                    <span key={g.id} className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">{g.name}</span>
                                ))}
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">+more</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl font-bold text-white">$69</span>
                            <span className="text-[10px] text-zinc-500 line-through">$87</span>
                        </div>
                    </button>

                    {/* All 5 Bundle */}
                    <button
                        onClick={() => handleCheckout('premium_bundle')}
                        disabled={false}
                        className="w-full flex items-center justify-between p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50 transition-all group text-left"
                    >
                        <div>
                            <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">All 5 Premium Guides</div>
                            <div className="text-xs text-zinc-500 mt-0.5">Complete premium library · Save 32%</div>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {PREMIUM_GUIDES.map(g => (
                                    <span key={g.id} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{g.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl font-bold text-white">$99</span>
                            <span className="text-[10px] text-zinc-500 line-through">$145</span>
                        </div>
                    </button>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                    <p className="text-[10px] text-zinc-600 text-center">
                        Secure checkout powered by Stripe · Instant PDF access after purchase
                    </p>
                </div>
            </div>
        </div>
    );
}
