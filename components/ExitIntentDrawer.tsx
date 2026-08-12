"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, ShieldCheck, Download } from 'lucide-react';

export default function ExitIntentDrawer() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [dismissed, setDismissed] = useState<boolean>(false);

    useEffect(() => {
        // Check local storage to avoid harassing visitors repeatedly
        const hasDismissed = sessionStorage.getItem("exit_drawer_dismissed");
        if (hasDismissed) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !dismissed) {
                setIsVisible(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [dismissed]);

    const handleClose = () => {
        setIsVisible(false);
        setDismissed(true);
        sessionStorage.setItem("exit_drawer_dismissed", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[420px] z-50 animate-in slide-in-from-bottom duration-300">
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl border border-slate-800 relative">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
                    aria-label="Close message"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Before You Go</span>
                </div>

                <h4 className="text-base font-extrabold text-white font-grotesk leading-snug mb-2">
                    Download the 1-Page AI Cost Control Checklist for CFOs
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Learn the 5 critical financial guardrails top private equity operating partners install to prevent AI billing shock and unmonitored engineering waste.
                </p>

                <div className="flex items-center gap-3">
                    <Link
                        href="/checklist"
                        onClick={handleClose}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-xs hover:opacity-90 transition-all uppercase tracking-wider shadow-md"
                    >
                        <Download className="w-3.5 h-3.5" />
                        Download Free Checklist
                    </Link>
                    <button
                        onClick={handleClose}
                        className="text-xs text-slate-400 hover:text-slate-200 font-semibold px-2 py-2"
                    >
                        No thanks
                    </button>
                </div>
            </div>
        </div>
    );
}
