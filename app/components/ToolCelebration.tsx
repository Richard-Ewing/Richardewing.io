'use client';

import { useState, useEffect } from 'react';
import CelebrationOverlay from './CelebrationOverlay';

/**
 * Self-contained celebration trigger. Just render it and pass show=true when results appear.
 * No children needed — it's purely an overlay trigger.
 */
export default function ToolCelebration({ show, toolName }: { show: boolean; toolName: string }) {
    const [celebrate, setCelebrate] = useState(false);
    const [hasCelebrated, setHasCelebrated] = useState(false);

    useEffect(() => {
        if (show && !hasCelebrated) {
            const timer = setTimeout(() => {
                setCelebrate(true);
                setHasCelebrated(true);
                try {
                    const key = `tool_completed_${toolName}`;
                    const count = Number(localStorage.getItem(key) || '0');
                    localStorage.setItem(key, String(count + 1));
                } catch { /* ignore */ }
            }, 600);
            return () => clearTimeout(timer);
        } else if (!show && hasCelebrated) {
            setTimeout(() => setHasCelebrated(false), 0);
        }
    }, [show, hasCelebrated, toolName]);

    if (!celebrate) return null;

    return (
        <CelebrationOverlay
            isActive={celebrate}
            title={`${toolName} Analysis Complete!`}
            subtitle="Great work. Your results are ready below."
            onComplete={() => setCelebrate(false)}
        />
    );
}
