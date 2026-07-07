'use client';

import { useState, useEffect } from 'react';

export function useUTMs() {
    const [utms, setUtms] = useState<Record<string, string>>({});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            let utmData: Record<string, string> = {};
            let hasNewUtms = false;
            
            const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
            
            keys.forEach(key => {
                const val = params.get(key);
                if (val) {
                    utmData[key] = val;
                    hasNewUtms = true;
                }
            });
            
            if (hasNewUtms) {
                sessionStorage.setItem('persisted_utms', JSON.stringify(utmData));
            } else {
                const stored = sessionStorage.getItem('persisted_utms');
                if (stored) {
                    try { 
                        utmData = JSON.parse(stored); 
                    } catch(e) {}
                }
            }
            setUtms(utmData);
        }
    }, []);

    return utms;
}
