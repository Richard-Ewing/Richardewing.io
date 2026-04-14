'use client';

import { useState, useEffect } from 'react';
import { X, TrendingUp } from 'lucide-react';

const proofMessages = [
    { text: 'A VP of Engineering just ran a PDI diagnostic', time: '2 min ago', emoji: '📊' },
    { text: 'A CTO downloaded the R&D Audit Checklist', time: '5 min ago', emoji: '📋' },
    { text: 'A CFO booked a 30-min Diagnostic Call', time: '8 min ago', emoji: '📞' },
    { text: 'An Engineering Director used the AI Cost Calculator', time: '12 min ago', emoji: '🤖' },
    { text: 'A Product VP ran the Audit Interview tool', time: '15 min ago', emoji: '🎯' },
    { text: 'A Series C startup booked an R&D Capital Audit', time: '20 min ago', emoji: '🔍' },
    { text: 'A Board Member read the Technical Insolvency Date framework', time: '25 min ago', emoji: '📖' },
    { text: 'An Engineering Manager used the APER diagnostic', time: '30 min ago', emoji: '👥' },
];

export default function SocialProofTicker() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (dismissed) return;
        const wasDismissed = sessionStorage.getItem('social-proof-dismissed');
        if (wasDismissed) { 
            setTimeout(() => setDismissed(true), 0); 
            return; 
        }

        // Show after 8 seconds
        const initialTimer = setTimeout(() => setShow(true), 8000);

        // Cycle through messages
        const cycleInterval = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % proofMessages.length);
                setAnimating(false);
            }, 300);
        }, 7000);

        // Auto-hide after 45 seconds total
        const hideTimer = setTimeout(() => setShow(false), 45000);

        return () => { clearTimeout(initialTimer); clearInterval(cycleInterval); clearTimeout(hideTimer); };
    }, [dismissed]);

    if (!show || dismissed) return null;

    const msg = proofMessages[currentIndex];

    return (
        <div className={`fixed bottom-20 left-4 z-40 max-w-sm transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="bg-white/95 backdrop-blur-md border border-zinc-200 rounded-xl p-4 shadow-2xl">
                <button
                    onClick={() => { setDismissed(true); setShow(false); sessionStorage.setItem('social-proof-dismissed', 'true'); }}
                    className="absolute top-2 right-2 text-zinc-600 hover:text-zinc-900 transition-colors"
                    aria-label="Dismiss"
                >
                    <X className="w-3 h-3" />
                </button>
                <div className="flex items-start gap-3">
                    <div className="text-lg flex-shrink-0">{msg.emoji}</div>
                    <div>
                        <p className="text-zinc-900 text-sm font-medium leading-tight">{msg.text}</p>
                        <p className="text-zinc-700 text-xs mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {msg.time}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
