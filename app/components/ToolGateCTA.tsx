'use client';

import { FileDown, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

interface ToolGateCTAProps {
    toolName: string;
}

export function ToolGateCTA({ toolName }: ToolGateCTAProps) {
    const beehiivUrl = 'https://theaieconomist.beehiiv.com/subscribe';

    return (
        <div className="relative mt-20 mb-10 overflow-hidden rounded-2xl border-2 border-emerald-200 bg-white shadow-xl p-8 sm:p-10">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-teal-50/50 -z-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                {/* Left: Copy */}
                <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-mono text-xs font-bold uppercase tracking-widest">
                        <FileDown className="w-3.5 h-3.5" /> Presentation Ready
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950 leading-tight">
                        Presenting this to the board?
                    </h3>
                    
                    <p className="text-zinc-700 font-medium leading-relaxed">
                        Don't just take screenshots. Download the official <strong>{toolName} Executive Report Template</strong> (PDF), complete with calculation methodologies and board-ready talking points.
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-zinc-500 uppercase tracking-widest pt-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> Includes the master Diagnostic Toolkit
                    </div>
                </div>

                {/* Right: Capture Form */}
                <div className="w-full md:w-80 flex-shrink-0 bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
                    <form action={beehiivUrl} method="GET" target="_blank" className="space-y-4">
                        <div>
                            <label className="sr-only">Email address</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="name@company.com" 
                                required
                                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium text-zinc-900 placeholder:text-zinc-400"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full py-3 rounded-lg bg-zinc-950 text-white font-bold hover:bg-emerald-600 hover:shadow-lg transition-all flex items-center justify-center gap-2 font-grotesk text-sm"
                        >
                            <FileDown className="w-4 h-4" />
                            Download PDF Report
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
