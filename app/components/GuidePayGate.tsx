'use client';

import { useState } from 'react';
import { Lock, FileText } from 'lucide-react';
import { useUser, useClerk } from '@clerk/nextjs';
import { PRODUCTS } from '@/lib/products';

interface GuidePayGateProps {
    guideTitle: string;
    productId: string;
    hasAccess?: boolean;
    children: React.ReactNode;
}

export default function GuidePayGate({ guideTitle, productId, hasAccess = false, children }: GuidePayGateProps) {
    const [loading, setLoading] = useState<string | null>(null);
    const { user, isLoaded, isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const handleCheckout = (type: string) => {
        if (!isSignedIn) {
            openSignIn();
            return;
        }
        
        setLoading(type);
        const product = PRODUCTS[type];
        if (product?.paymentLink) {
            const url = new URL(product.paymentLink);
            if (user?.id) url.searchParams.append('client_reference_id', user.id);
            if (user?.primaryEmailAddress?.emailAddress) url.searchParams.append('prefilled_email', user.primaryEmailAddress.emailAddress);
            window.open(url.toString(), '_blank');
        }
        setTimeout(() => setLoading(null), 1000);
    };

    if (hasAccess) {
        return <div className="animate-in fade-in duration-500">{children}</div>;
    }

    const childArray = Array.isArray(children) ? children : [children];
    // First element in the wrapper is usually the "space-y-8 mb-16" sections map
    // We will blur everything in the children wrapper.

    return (
        <div className="relative mt-8">
            <div className="relative overflow-hidden rounded-2xl max-h-[400px]">
                <div className="blur-[6px] opacity-30 pointer-events-none select-none">
                    {children}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/90 to-zinc-950" />
            </div>

            <div className="relative -mt-48 z-10 mx-auto max-w-lg mb-16">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl p-8 shadow-2xl shadow-cyan-500/5 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex flex-col items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-grotesk font-bold text-white mb-2">Premium Guide Protected</h3>
                    <p className="text-zinc-400 text-sm mb-6">
                        Unlock full access to the {guideTitle} playbook, including frameworks, economic models, and due diligence checks.
                    </p>

                    <button
                        onClick={() => handleCheckout(productId)}
                        disabled={!!loading}
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                    >
                        <FileText className="w-4 h-4" />
                        {loading === productId ? 'Redirecting...' : 'Unlock Guide \u2014 $29'}
                    </button>
                    
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <button
                            onClick={() => handleCheckout('full_curriculum')}
                            disabled={!!loading}
                            className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors"
                        >
                            Or get all 10 Guides + 170 Modules for $199/yr
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
