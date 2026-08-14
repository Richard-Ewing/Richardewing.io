import { Lock, BookOpen, Zap, ShieldCheck } from 'lucide-react';
import CheckoutButton from './client/CheckoutButton';
import { PRODUCTS } from '@/lib/products';
import CurriculumSalesPreview from './CurriculumSalesPreview';

interface PayGateProps {
    moduleTitle: string;
    moduleId: string;
    trackName: string;
    totalLessons: number;
    previewLessonIndex?: number;
    hasAccess?: boolean;
    showPreview?: boolean;
    children: React.ReactNode;
    nextHref?: string;
    productId?: string;
    bundleId?: string;
    lessons?: any[];
    status?: 'live' | 'waitlist';
}

export default function PayGate({ moduleTitle, moduleId, trackName, totalLessons, previewLessonIndex = 0, hasAccess = false, showPreview = true, children, nextHref, productId = 'single_track', bundleId = 'full_curriculum', lessons = [], status = 'live' }: PayGateProps) {
    if (hasAccess) {
        return <>{children}</>;
    }

    const childArray = Array.isArray(children) ? children : [children];
    const previewContent = childArray[previewLessonIndex];

    return (
        <div>
            {/* Free Preview: First Lesson */}
            {showPreview && (
                <div className="mb-0 relative z-20">
                    <div className="flex items-center gap-2 mb-4 px-4 py-2 rounded-lg bg-emerald-50 border border-emerald-200 w-fit">
                        <BookOpen className="w-4 h-4 text-emerald-900 font-extrabold" />
                        <span className="text-xs font-bold font-mono text-emerald-900 font-extrabold uppercase tracking-widest">Free Preview - Lesson 1</span>
                    </div>
                    <div className="relative pb-24">
                        {previewContent}
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent z-10 pointer-events-none" />
                    </div>
                </div>
            )}

            {/* ═══════════════════════════════════════════════════ */}
            {/* PRIMARY BUY CTA - ABOVE THE FOLD FOR CONVERSION    */}
            {/* ═══════════════════════════════════════════════════ */}
            <div className={`relative ${showPreview ? '-mt-16' : 'mt-4'} z-30 mb-8`}>
                <div className="mx-auto max-w-2xl rounded-2xl border-2 border-violet-300 bg-white p-8 shadow-2xl">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 text-violet-900 font-extrabold font-mono text-xs font-bold uppercase tracking-widest mb-4">
                            <ShieldCheck className="w-4 h-4" /> Get Full Access
                        </div>
                        <h3 className="text-2xl font-grotesk font-bold text-zinc-900 mb-2">
                            Continue Learning: {trackName}
                        </h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-6">
                            {showPreview ? `${totalLessons - 1} more lesson${totalLessons - 1 === 1 ? '' : 's'}` : `${totalLessons} lesson${totalLessons === 1 ? '' : 's'}`} with actionable playbooks, executive dashboards, and engineering architecture.
                        </p>

                        {/* Two-column pricing */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {/* Per-Track */}
                            <div className="border-2 border-violet-400 bg-violet-50 rounded-xl p-5 relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-violet-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">Most Popular</div>
                                <div className="text-3xl font-bold text-zinc-900 mb-1">$149</div>
                                <div className="text-xs font-bold text-zinc-950 mb-4">This Track · Lifetime</div>
                                <CheckoutButton 
                                    productId={productId || 'single_track'} 
                                    moduleId={moduleId}
                                    label="Buy This Track" 
                                    icon="lock" 
                                    variant="primary" 
                                />
                            </div>
                            {/* All Access */}
                            <div className="border border-zinc-400 bg-zinc-50 rounded-xl p-5">
                                <div className="text-3xl font-bold text-zinc-900 mb-1">$999</div>
                                <div className="text-xs font-bold text-zinc-950 mb-4">All 23 Tracks · Lifetime</div>
                                <CheckoutButton 
                                    productId="full_curriculum" 
                                    moduleId={moduleId}
                                    label="Get Everything" 
                                    icon="key" 
                                    variant="secondary" 
                                />
                            </div>
                        </div>

                        {/* Team tier */}
                        {status === 'waitlist' ? (
                            <button disabled className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-400 bg-zinc-50 text-zinc-900 cursor-not-allowed transition-colors font-medium text-sm">
                                <Lock className="w-4 h-4" />
                                <span>Join Waitlist - In Active Development</span>
                            </button>
                        ) : (
                            <CheckoutButton 
                                productId="team_license_pass" 
                                moduleId={moduleId}
                                label="B2B Team License (10 Seats) - $4,999" 
                                icon="file" 
                                variant="outline" 
                            />
                        )}
                        
                        <div className="flex items-center justify-center gap-4 mt-4 text-xs font-bold font-medium text-zinc-900 uppercase tracking-widest font-mono">
                            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure Stripe Checkout</span>
                            <span>·</span>
                            <span>Lifetime Access</span>
                            <span>·</span>
                            <span>Instant Delivery</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sales Preview (below the buy CTA) */}
            <div className="relative">
                <CurriculumSalesPreview lessons={lessons} />
            </div>
        </div>
    );
}
