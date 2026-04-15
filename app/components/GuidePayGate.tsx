import { Lock } from 'lucide-react';
import CheckoutButton from './client/CheckoutButton';
import { PRODUCTS } from '@/lib/products';

interface GuidePayGateProps {
    guideTitle: string;
    productId: string;
    hasAccess?: boolean;
    children: React.ReactNode;
}

export default function GuidePayGate({ guideTitle, productId, hasAccess = false, children }: GuidePayGateProps) {
    if (hasAccess) {
        return <div className="animate-in fade-in duration-500">{children}</div>;
    }

    // SERVER-SIDE GATING:
    // If hasAccess is false, we literally do NOT render `children` at all.
    // The underlying confidential RSC markup is thereby completely severed and stripped from the Client HTML payload.
    // Inspect Element / Network inspection will only see this skeleton, solving the client-blur vulnerability!
    
    return (
        <div className="relative mt-8">
            <div className="relative overflow-hidden rounded-2xl max-h-[400px]">
                
                {/* Visual Skeleton Replacement - Zero Data Leakage */}
                <div className="space-y-6 opacity-40 p-10 select-none pointer-events-none" aria-hidden="true">
                    <div className="h-8 bg-white/20 rounded-md w-1/3 mb-6"></div>
                    <div className="h-4 bg-white/10 rounded-sm w-full"></div>
                    <div className="h-4 bg-white/10 rounded-sm w-[90%]"></div>
                    <div className="h-4 bg-white/10 rounded-sm w-4/5"></div>
                    <div className="h-6 bg-white/20 rounded-md w-1/2 mt-12 mb-4"></div>
                    <div className="h-4 bg-white/10 rounded-sm w-full"></div>
                    <div className="h-4 bg-white/10 rounded-sm w-[85%]"></div>
                    <div className="h-32 bg-emerald-500/10 border border-emerald-500/20 rounded-xl w-full mt-8"></div>
                    <div className="h-4 bg-white/10 rounded-sm w-full mt-8"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/90 to-zinc-50" />
            </div>

            <div className="relative -mt-48 z-10 mx-auto max-w-lg mb-16">
                <div className="rounded-2xl border border-zinc-400 bg-white/95 backdrop-blur-xl p-8 shadow-2xl shadow-cyan-500/5 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex flex-col items-center justify-center mx-auto mb-4">
                        <Lock className="w-6 h-6 text-cyan-900 font-extrabold font-semibold" />
                    </div>
                    <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mb-2">Premium Guide Protected</h3>
                    <p className="text-zinc-900 text-sm font-semibold mb-6">
                        Unlock full access to the {guideTitle} playbook, including frameworks, economic models, and due diligence checks.
                    </p>

                    <CheckoutButton productId={productId} label={`Unlock Guide — $${PRODUCTS[productId]?.price ? PRODUCTS[productId].price / 100 : 29}`} icon="file" variant="primary" />
                    
                    <div className="mt-4 pt-4 border-t border-zinc-400">
                        <CheckoutButton productId="full_curriculum" label="Or get all 10 Guides + 60 Modules for $199/yr" variant="outline" />
                    </div>
                </div>
            </div>
        </div>
    );
}
