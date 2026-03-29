import { Lock, BookOpen } from 'lucide-react';
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
}

export default function PayGate({ moduleTitle, moduleId, trackName, totalLessons, previewLessonIndex = 0, hasAccess = false, showPreview = true, children, nextHref, productId = 'single_module', bundleId = 'full_curriculum' }: PayGateProps) {
    if (hasAccess) {
        return <>{children}</>;
    }

    const childArray = Array.isArray(children) ? children : [children];
    // We only expose the specific isolated preview node (the first lesson block) to the client.
    const previewContent = childArray[previewLessonIndex];

    // The other children (lockedContent) are utterly omitted from the RSC server payload output.
    // They literally do not exist on the client side HTML payload. This closes the Inspect Element bug.
    return (
        <div>
            {/* Free Preview: First Lesson (only shown for first module of each track) */}
            {showPreview && (
                <div className="mb-0 relative z-20">
                    <div className="flex items-center gap-2 mb-4 px-4 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 w-fit">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Free Preview — Lesson 1</span>
                    </div>
                    <div className="relative pb-24">
                        {previewContent}
                        {/* CSS Teaser Fade-out over the bottom of the preview content */}
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent z-10 pointer-events-none" />
                    </div>
                </div>
            )}

            {/* Pay Gate Barrier */}
            <div className="relative">
                {showPreview ? (
                    <CurriculumSalesPreview />
                ) : (
                    /* Visual Skeleton Replacement - Zero Data Leakage (Only shown if landing directly on locked module) */
                    <div className="relative overflow-hidden rounded-2xl max-h-[300px]">
                        <div className="space-y-6 opacity-40 p-10 select-none pointer-events-none" aria-hidden="true">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full bg-white/20 border border-white/10" />
                                <div className="h-6 bg-white/20 rounded-md w-1/3"></div>
                            </div>
                            <div className="h-4 bg-white/10 rounded-sm w-full"></div>
                            <div className="h-4 bg-white/10 rounded-sm w-[90%]"></div>
                            <div className="h-4 bg-white/10 rounded-sm w-4/5"></div>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="h-24 bg-white/5 rounded-xl border border-white/10" />
                                <div className="h-24 bg-white/5 rounded-xl border border-white/10" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950" />
                    </div>
                )}

                {/* Unlock CTA */}
                <div className={`relative ${showPreview ? '-mt-32' : '-mt-16'} z-10`}>
                    <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl p-8 shadow-2xl shadow-violet-500/5">
                        <div className="text-center">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-6 h-6 text-violet-400" />
                            </div>
                            <h3 className="text-xl font-grotesk font-bold text-white mb-2">
                                Get Full Module Access
                            </h3>
                            <p className="text-zinc-400 text-sm mb-6">
                                {showPreview ? `${totalLessons - 1} more lessons` : `${totalLessons} lessons`} with hands-on exercises, metric cards, and assessment checklists.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3 text-center">
                                    <div className="text-xl font-bold text-white">400</div>
                                    <div className="text-[10px] text-zinc-500 uppercase">Modules</div>
                                </div>
                                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3 text-center">
                                    <div className="text-xl font-bold text-white">5+</div>
                                    <div className="text-[10px] text-zinc-500 uppercase">Tools</div>
                                </div>
                                <div className="rounded-xl bg-violet-500/10 border border-violet-500/20 p-3 text-center">
                                    <div className="text-xl font-bold text-violet-400">100%</div>
                                    <div className="text-[10px] text-violet-500 uppercase">ROI</div>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <CheckoutButton 
                                    productId="all_access_pass" 
                                    moduleId={moduleId} // Optional tracking
                                    label="Unlock the All-Access Vault Pass — $999/yr" 
                                    icon="lock" 
                                    variant="primary" 
                                />
                                <CheckoutButton 
                                    productId="team_license_pass" 
                                    moduleId={moduleId}
                                    label="B2B Team License (10 Seats) — $4,999/yr" 
                                    icon="key" 
                                    variant="secondary" 
                                />
                                <div className="pt-2 border-t border-white/5">
                                    <CheckoutButton 
                                        productId="single_module" 
                                        moduleId={moduleId}
                                        label="Unlock Single Module Only — $29" 
                                        icon="file" 
                                        variant="outline" 
                                    />
                                </div>
                            </div>
                            
                            <p className="mt-4 text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                                Replaces all $29, $99, and $10k tiers. Secure Stripe Checkout.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
