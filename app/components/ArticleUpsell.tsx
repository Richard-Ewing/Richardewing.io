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

    const displayHeadline = headline || `Not ready for the full curriculum?`;
    const displayDescription = description || `Start with the free Executive Diagnostic Toolkit. Includes the R&D Audit Checklist, AI Unit Economics Matrix, and M&A Technical Diligence Cheatsheet.`;

    const isGuide = productId.includes('guide');
    const label = isGuide ? `Buy Guide — $${product.price / 100}` : `Buy Track — $${product.price / 100}`;
    const icon = isGuide ? 'file' : 'lock';
    const beehiivUrl = 'https://theproducteconomist.beehiiv.com/subscribe';

    return (
        <div className="my-16 relative">
            <div className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-tr from-violet-100 to-indigo-50/50 -z-10" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
                    {/* Left: Free Lead Magnet */}
                    <div className="space-y-5 md:pr-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-900 font-mono text-xs font-bold uppercase tracking-widest">
                            <BookOpen className="w-3.5 h-3.5" /> Free Toolkit
                        </div>
                        <h3 className="text-2xl font-grotesk font-bold text-zinc-950 leading-tight">
                            {displayHeadline}
                        </h3>
                        <p className="text-zinc-700 text-sm font-medium leading-relaxed">
                            {displayDescription}
                        </p>
                        
                        <form action={beehiivUrl} method="GET" target="_blank" className="flex items-center gap-2 mt-4">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="name@company.com" 
                                required
                                className="w-full px-4 py-2 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium text-sm text-zinc-900 placeholder:text-zinc-400"
                            />
                            <button 
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-zinc-950 text-white font-bold hover:bg-violet-600 transition-all text-sm whitespace-nowrap"
                            >
                                Get PDF
                            </button>
                        </form>
                    </div>

                    {/* Right: Paid Curriculum */}
                    <div className="md:pl-8 pt-8 md:pt-0 flex flex-col justify-center space-y-4">
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2 mb-1">
                            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Premium Option
                        </div>
                        <div className="text-zinc-950 font-bold text-xl font-grotesk">
                            {product.name}
                        </div>
                        <p className="text-zinc-600 text-sm font-medium leading-relaxed mb-2">
                            Download the complete {isGuide ? 'guide' : 'track'} with actionable execution models, deployment checklists, and financial breakdown frameworks.
                        </p>
                        
                        <CheckoutButton
                            productId={productId}
                            label={label}
                            icon={icon}
                            variant="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
