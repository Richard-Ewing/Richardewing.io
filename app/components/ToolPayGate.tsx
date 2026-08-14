import { Lock, FileBarChart, Zap, ShieldCheck } from 'lucide-react';
import CheckoutButton from '@/components/client/CheckoutButton';

interface ToolPayGateProps {
    toolName: string;
    hasAccess?: boolean;
    children: React.ReactNode;
}

export default function ToolPayGate({ toolName, hasAccess = false, children }: ToolPayGateProps) {
    if (hasAccess) {
        return <>{children}</>;
    }

    return (
        <div className="relative mt-8">
            {/* The Blurred Content */}
            <div className="relative pb-48 overflow-hidden pointer-events-none select-none">
                <div className="opacity-40 blur-sm pointer-events-none transition-all duration-1000">
                    {children}
                </div>
                {/* Gradient Fade to force the visual block */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-transparent z-10" />
            </div>

            {/* The Paywall Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-30 transform -translate-y-12">
                <div className="mx-auto max-w-2xl rounded-2xl border-2 border-cyan-400/50 bg-white shadow-[0_0_50px_rgba(34,211,238,0.15)] p-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                            <Lock className="w-4 h-4" /> Premium Analytics Locked
                        </div>
                        <h3 className="text-2xl font-grotesk font-bold text-zinc-900 mb-3">
                            Access the Full {toolName} Report
                        </h3>
                        <p className="text-zinc-600 text-sm font-medium mb-8">
                            Your top-line score is calculating. To view your complete mathematical breakdown, peer benchmark percentiles, and generate board-ready PDF exports, access the Diagnostic Library.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left">
                            {/* Diagnostic Tools Access */}
                            <div className="border-2 border-cyan-500 bg-cyan-50 rounded-xl p-5 relative transition-transform hover:-translate-y-1">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-cyan-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-full whitespace-nowrap">
                                    Instant Access
                                </div>
                                <div className="text-3xl font-bold text-zinc-900 mb-1">$199</div>
                                <div className="text-xs font-semibold text-zinc-600 mb-4 h-8">All Diagnostics · Lifetime Exports</div>
                                <CheckoutButton 
                                    productId="tools_library_unlock" 
                                    label="Get Tools" 
                                    icon="file" 
                                    variant="primary" 
                                />
                            </div>

                            {/* All-Access Pass */}
                            <div className="border border-zinc-300 bg-zinc-50 rounded-xl p-5 transition-transform hover:-translate-y-1">
                                <div className="text-3xl font-bold text-zinc-900 mb-1">$999</div>
                                <div className="text-xs font-semibold text-zinc-600 mb-4 h-8">All 23 Tracks · All Tools · Lifetime</div>
                                <CheckoutButton 
                                    productId="full_curriculum" 
                                    label="All-Access Pass" 
                                    icon="key" 
                                    variant="outline" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs font-mono font-medium text-zinc-800 uppercase tracking-widest">
                            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Secure Checkout</span>
                            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Instant PDF Generation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
