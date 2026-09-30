'use client';

import React from 'react';
import Script from 'next/script';

interface GooglePreferredBadgeProps {
    variant?: 'footer' | 'card' | 'compact';
    className?: string;
}

export function GooglePreferredBadge({ variant = 'compact', className = '' }: GooglePreferredBadgeProps) {
    const preferenceUrl = 'https://www.google.com/preferences/source?q=richardewing.io';

    if (variant === 'footer') {
        return (
            <div className={`mt-4 pt-3 border-t border-zinc-200/80 ${className}`}>
                <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-950 flex items-center gap-1.5">
                        <span className="text-amber-500 font-black">★</span>
                        Google Search & AI Overviews
                    </span>
                    <p className="text-xs text-zinc-600 leading-tight">
                        Prioritize Richard Ewing in Google Search, Top Stories, and AI Mode.
                    </p>
                    <a
                        href={preferenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-900 hover:text-cyan-950 hover:underline pt-1 transition-colors"
                        title="Add richardewing.io as a Preferred Source in Google"
                    >
                        <span>Add as Preferred Source</span>
                        <span className="text-zinc-500 text-[10px]">↗</span>
                    </a>
                </div>
            </div>
        );
    }

    if (variant === 'card') {
        return (
            <aside aria-label="Google Preferred Source" className={`my-8 p-6 rounded-2xl border border-cyan-800/30 bg-gradient-to-br from-cyan-950/30 via-slate-900/40 to-slate-950/50 backdrop-blur-sm ${className}`}>
                {/* Asynchronously load Google Publisher SDK */}
                <Script
                    src="https://news.google.com/swg/js/v1/publisher.js"
                    strategy="lazyOnload"
                />
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-xl">
                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                            <span className="text-amber-400">★</span> Google Preferred Source
                        </div>
                        <h4 className="text-base sm:text-lg font-bold font-grotesk text-white">
                            Prioritize This Research in Google AI Overviews
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            Add richardewing.io to your personal Google Source Preferences so Google Search, Top Stories, and AI Overviews surface our forensic R&amp;D audits and economic frameworks first.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                        {/* Container for Google standard button if initialized */}
                        <div google-add-preferred-source-btn="true" data-theme="dark" className="empty:hidden" />
                        
                        <a
                            href={preferenceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold tracking-wide transition-all shadow-md shadow-cyan-500/20 text-center"
                        >
                            <span>Add on Google</span>
                            <span>↗</span>
                        </a>
                    </div>
                </div>
            </aside>
        );
    }

    // Default compact pill
    return (
        <a
            href={preferenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-800/40 bg-cyan-950/20 text-cyan-400 hover:bg-cyan-900/30 hover:border-cyan-600 transition-all text-xs font-mono font-semibold ${className}`}
            title="Add richardewing.io to Google Preferred Sources"
        >
            <span className="text-amber-400">★</span>
            <span>Prefer on Google AI Search</span>
            <span className="text-zinc-500 text-[10px]">↗</span>
        </a>
    );
}

export default GooglePreferredBadge;
