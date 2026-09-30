'use client';

import React from 'react';
import Script from 'next/script';

interface GooglePreferredBadgeProps {
    variant?: 'footer' | 'card' | 'compact';
    className?: string;
}

export function GoogleGIcon({ className = 'w-4 h-4' }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
            <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
        </svg>
    );
}

export function GoogleWordmark({ className = '' }: { className?: string }) {
    return (
        <span className={`font-bold tracking-tight inline-flex items-center ${className}`}>
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
        </span>
    );
}

export function GooglePreferredBadge({ variant = 'compact', className = '' }: GooglePreferredBadgeProps) {
    const preferenceUrl = 'https://www.google.com/preferences/source?q=richardewing.io';

    if (variant === 'footer') {
        return (
            <div className={`mt-3 flex flex-col items-start gap-3 bg-zinc-50 border border-zinc-200 rounded-xl p-4 shadow-sm hover:border-zinc-300 transition-all w-full ${className}`}>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1.5">
                        <GoogleGIcon className="w-4 h-4 shrink-0" />
                        <span className="text-xs font-semibold text-zinc-900 flex items-center gap-1 font-grotesk">
                            <GoogleWordmark />
                            <span className="text-zinc-600 font-medium">Preferred Source</span>
                        </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        AI Search
                    </span>
                </div>

                <div className="space-y-1">
                    <span className="text-zinc-950 font-bold text-sm font-grotesk block leading-snug">
                        Prioritize in Google Search &amp; AI
                    </span>
                    <p className="text-zinc-600 text-xs font-medium leading-relaxed">
                        Add richardewing.io to personal Google Search Preferences so our frameworks and audits surface first.
                    </p>
                </div>

                <a
                    href={preferenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-950 font-semibold text-xs transition-all font-grotesk flex items-center justify-center gap-2 shadow-xs group"
                    title="Add richardewing.io as a Preferred Source in Google Search Preferences"
                >
                    <GoogleGIcon className="w-4 h-4 shrink-0" />
                    <span>Add to Google Preferences</span>
                    <span className="text-zinc-400 group-hover:text-zinc-700 transition-colors text-xs font-mono ml-0.5">↗</span>
                </a>
            </div>
        );
    }

    if (variant === 'card') {
        return (
            <aside
                aria-label="Google Preferred Source"
                className={`my-8 p-6 sm:p-7 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-slate-950 text-white shadow-2xl relative overflow-hidden backdrop-blur-md ${className}`}
            >
                {/* Subtle ambient Google light */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

                {/* Google Publisher SDK */}
                <Script
                    src="https://news.google.com/swg/js/v1/publisher.js"
                    strategy="lazyOnload"
                />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 text-zinc-200 border border-white/15 backdrop-blur-sm">
                            <GoogleGIcon className="w-4 h-4 shrink-0" />
                            <span><GoogleWordmark className="font-semibold" /> Preferred Source</span>
                            <span className="text-zinc-400">&bull;</span>
                            <span className="text-blue-300 font-mono text-[11px]">AI Overviews &amp; Search</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold font-grotesk text-white tracking-tight leading-snug">
                            Prioritize This Research in Google Search &amp; AI Overviews
                        </h3>

                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                            Add <span className="font-semibold text-white">richardewing.io</span> to your personal Google Search Source Preferences. Whenever you search for enterprise AI governance, R&amp;D economics, or agent drift, Google will prioritize our forensic audits, benchmarks, and frameworks in your Top Stories and AI Overviews.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
                        {/* Standard Google SDK button if available */}
                        <div google-add-preferred-source-btn="true" data-theme="dark" className="empty:hidden" />

                        <a
                            href={preferenceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm font-grotesk tracking-wide transition-all shadow-lg shadow-white/10 hover:shadow-white/20 active:scale-[0.99] border border-zinc-200"
                            title="Add richardewing.io to personal Google Preferred Sources"
                        >
                            <GoogleGIcon className="w-4 h-4 shrink-0" />
                            <span>Add to Preferred Sources</span>
                            <span className="text-zinc-500 font-mono text-xs">↗</span>
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
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all text-xs font-semibold shadow-xs group ${className}`}
            title="Add richardewing.io to Google Preferred Sources"
        >
            <GoogleGIcon className="w-3.5 h-3.5 shrink-0" />
            <span><GoogleWordmark /> Preferred Source</span>
            <span className="text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 text-[10px] font-mono">↗</span>
        </a>
    );
}

export default GooglePreferredBadge;
