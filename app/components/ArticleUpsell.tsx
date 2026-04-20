import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import CheckoutButton from '@/components/client/CheckoutButton';
import { PRODUCTS } from '@/lib/products';

interface ArticleUpsellProps {
    productId: string;
    headline?: string;
    description?: string;
}

export default function ArticleUpsell({ productId, headline, description }: ArticleUpsellProps) {
    const product = PRODUCTS[productId];
    if (!product) return null;

    const displayHeadline = headline || `Master this architecture.`;
    const displayDescription = description || `Download the complete ${product.name} with actionable execution models, deployment checklists, and financial breakdown frameworks used by tier-1 engineering organizations.`;

    const isGuide = productId.includes('guide');
    const label = isGuide ? `Download Guide — $${product.price / 100}` : `Unlock Track — $${product.price / 100}`;
    const icon = isGuide ? 'file' : 'lock';

    return (
        <div className="my-16 relative">
            {/* Background design */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-100 to-indigo-50 rounded-2xl transform rotate-1 scale-105 -z-10" />
            
            <div className="bg-white border-2 border-violet-200 rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Copy */}
                    <div className="flex-1 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-900 font-mono text-xs font-bold uppercase tracking-widest">
                            <BookOpen className="w-3.5 h-3.5" /> Contextual Playbook
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                            {displayHeadline}
                        </h3>
                        <p className="text-zinc-700 font-medium leading-relaxed">
                            {displayDescription}
                        </p>
                    </div>

                    {/* Right: Checkout */}
                    <div className="w-full md:w-80 flex-shrink-0 bg-zinc-50 border border-zinc-200 rounded-xl p-6 text-center">
                        <div className="text-sm font-bold text-zinc-600 uppercase tracking-widest mb-1">
                            {isGuide ? 'Premium Guide' : 'Curriculum Track'}
                        </div>
                        <div className="text-zinc-950 font-bold text-xl mb-4">
                            {product.name}
                        </div>
                        
                        <CheckoutButton
                            productId={productId}
                            label={label}
                            icon={icon}
                            variant="primary"
                        />
                        
                        <div className="mt-4 flex items-center justify-center gap-1 text-[10px] text-zinc-500 font-mono uppercase tracking-widest font-bold">
                            <ShieldCheck className="w-3 h-3 text-emerald-500" /> Secure Checkout · Instant Delivery
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
