'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function StickyBottomCTA() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const pathname = usePathname();

    // Don't show on advisory page (it IS the conversion page)
    const isConversionPage = pathname?.includes('/advisory');

    useEffect(() => {
        if (isConversionPage || dismissed) return;
        const alreadyDismissed = sessionStorage.getItem('sticky-cta-dismissed');
        if (alreadyDismissed) { setDismissed(true); return; }

        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            setVisible(scrollPercent > 35);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isConversionPage, dismissed]);

    if (!visible || dismissed || isConversionPage) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
            <div className="bg-zinc-900/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_30px_rgba(0,0,0,0.5)]">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <span className="hidden sm:inline text-2xl">📊</span>
                        <div className="min-w-0">
                            <p className="text-white text-sm font-bold truncate">
                                Is your R&D budget building assets — or just servicing liabilities?
                            </p>
                            <p className="text-zinc-500 text-xs hidden sm:block">30-min diagnostic call with a Product Economist. $450.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Link
                            href="/advisory"
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1 whitespace-nowrap"
                        >
                            Book Call <ArrowRight className="w-3 h-3" />
                        </Link>
                        <button
                            onClick={() => { setDismissed(true); sessionStorage.setItem('sticky-cta-dismissed', 'true'); }}
                            className="p-1 text-zinc-500 hover:text-white transition-colors"
                            aria-label="Dismiss"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
