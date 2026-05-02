'use client';

import { ArrowRight, Download, FileText, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface LeadMagnetCTAProps {
    variant?: 'compact' | 'full' | 'hero';
}

export function LeadMagnetCTA({ variant = 'full' }: LeadMagnetCTAProps) {
    const beehiivUrl = 'https://theaieconomist.beehiiv.com/subscribe';

    if (variant === 'compact') {
        return (
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-zinc-50 border border-zinc-200 rounded-xl p-4 shadow-sm">
                <div className="flex-1">
                    <span className="text-zinc-950 font-bold text-sm font-grotesk block">Stop Engineering Capital Bleed</span>
                    <span className="text-zinc-600 text-xs font-medium">Download the Executive Diagnostic Toolkit (3 Frameworks)</span>
                </div>
                <form action={beehiivUrl} method="GET" target="_blank" className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-5 py-2 rounded-lg bg-zinc-950 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors font-grotesk flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                        <Download className="w-4 h-4" /> Download Free
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden rounded-2xl border-2 border-violet-200 bg-white shadow-xl p-8 sm:p-10 my-8">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-50 to-indigo-50/50 -z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-400/10 to-fuchsia-400/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                {/* Left: Copy */}
                <div className="flex-1 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-900 font-mono text-xs font-bold uppercase tracking-widest">
                        <FileText className="w-3.5 h-3.5" /> Free Toolkit
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 leading-tight">
                        The Executive Diagnostic Toolkit
                    </h3>
                    
                    <p className="text-zinc-700 font-medium leading-relaxed text-lg">
                        Stop engineering capital bleed. Download the exact 3-part framework used by Tier-1 product organizations to audit R&D spend and calculate AI unit economics.
                    </p>

                    <ul className="space-y-3 pt-2">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                            <span className="text-zinc-800 font-medium"><strong className="text-zinc-950">The R&D Audit Checklist:</strong> 50 questions to spot engineering waste.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                            <span className="text-zinc-800 font-medium"><strong className="text-zinc-950">AI Unit Economics Matrix:</strong> Predict your API collapse point.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                            <span className="text-zinc-800 font-medium"><strong className="text-zinc-950">M&A Technical Diligence:</strong> 15 deal-killer red flags for CFOs.</span>
                        </li>
                    </ul>
                </div>

                {/* Right: Capture Form */}
                <div className="w-full md:w-96 flex-shrink-0 bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 shadow-sm relative">
                    <div className="text-center mb-6">
                        <div className="text-zinc-950 font-bold text-xl mb-2 font-grotesk">Where should we send it?</div>
                        <p className="text-sm text-zinc-500 font-medium">Join 2,000+ executives getting our monthly economic briefings.</p>
                    </div>

                    <form action={beehiivUrl} method="GET" target="_blank" className="space-y-4">
                        <div>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="name@company.com" 
                                required
                                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all font-medium text-zinc-900 placeholder:text-zinc-400"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full py-3.5 rounded-lg bg-zinc-950 text-white font-bold hover:bg-violet-600 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group font-grotesk text-lg"
                        >
                            <Download className="w-5 h-5" />
                            Download Toolkit
                        </button>
                        <p className="text-center text-xs text-zinc-400 font-medium mt-4">
                            100% free. Unsubscribe anytime.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
