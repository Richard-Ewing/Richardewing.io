import Link from 'next/link';
import { ArrowRight, ShieldCheck, Calculator } from 'lucide-react';
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

    const displayHeadline = headline || `Run the numbers on your own P&L before your next board meeting.`;
    const displayDescription = description || `Most teams discover their AI margin leak or maintenance drag 6 months too late. Get the 5 Excel/CSV financial models and the 12-slide CFO & Board Defense Deck in the $29 Operating Kit, or book a 60-minute 1-on-1 P&L Teardown ($450).`;

    const isGuide = productId.includes('guide');
    const label = isGuide ? `Buy Guide - $${product.price / 100}` : `Buy Track - $${product.price / 100}`;
    const icon = isGuide ? 'file' : 'lock';
    const beehiivUrl = 'https://theaieconomist.beehiiv.com/subscribe';

    return (
        <div className="my-16 relative">
            <div className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-tr from-amber-50 to-emerald-50/40 -z-10" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
                    {/* Left: Commercial Operating Kit & Diagnostic Bridge */}
                    <div className="space-y-4 md:pr-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 font-mono text-xs font-bold uppercase tracking-widest">
                            <Calculator className="w-3.5 h-3.5" /> Executive Action Path
                        </div>
                        <h3 className="text-2xl font-grotesk font-bold text-zinc-950 leading-tight">
                            {displayHeadline}
                        </h3>
                        <p className="text-zinc-700 text-sm font-medium leading-relaxed">
                            {displayDescription}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Link
                                href="/toolkit"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-950 text-white font-bold hover:bg-zinc-800 transition-all text-xs uppercase tracking-wider shadow-sm"
                            >
                                Get $29 Operating Kit <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                                href="/services#gut_check"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-zinc-300 text-zinc-950 font-bold hover:border-zinc-950 transition-all text-xs uppercase tracking-wider shadow-xs"
                            >
                                1-on-1 P&amp;L Teardown ($450)
                            </Link>
                        </div>

                        <form action={beehiivUrl} method="GET" target="_blank" className="flex flex-col sm:flex-row items-center gap-2 pt-3 border-t border-zinc-200/80">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Join 1,366+ executives on The AI Economist..." 
                                required
                                className="w-full px-3.5 py-2 bg-white border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium text-xs text-zinc-900 placeholder:text-zinc-500"
                            />
                            <button 
                                type="submit"
                                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-zinc-100 border border-zinc-300 text-zinc-900 font-bold hover:bg-zinc-200 transition-all text-xs whitespace-nowrap cursor-pointer"
                            >
                                Free Briefings
                            </button>
                        </form>
                    </div>

                    {/* Right: Paid Curriculum / Advisory */}
                    <div className="md:pl-8 pt-8 md:pt-0 flex flex-col justify-center space-y-4">
                        <div className="text-xs font-bold text-zinc-800 uppercase tracking-widest flex items-center gap-2 mb-1">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Deep Implementation
                        </div>
                        <div className="text-zinc-950 font-bold text-xl font-grotesk">
                            {product.name}
                        </div>
                        <p className="text-zinc-600 text-sm font-medium leading-relaxed mb-2">
                            Download the complete {isGuide ? 'guide' : 'track'} with working financial spreadsheets, governance checklists, and board defense templates, or retain a 2-week Turnaround Sprint ($2,500).
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <CheckoutButton
                                productId={productId}
                                label={label}
                                icon={icon}
                                variant="primary"
                            />
                            <Link
                                href="/reality-check"
                                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 font-mono text-xs font-bold transition-all"
                            >
                                Run Reality Check ↗
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
