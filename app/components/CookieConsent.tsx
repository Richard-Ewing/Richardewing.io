'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const consent = localStorage.getItem('cookie_consent_accepted');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie_consent_accepted', 'true');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[90] p-5 bg-zinc-950/95 border border-zinc-800 text-white rounded-2xl shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-200">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Privacy & Governance Notice
          </span>
          <span className="text-[10px] font-mono text-zinc-500">EU AI Act & GDPR</span>
        </div>
        <p className="text-xs text-zinc-300 leading-relaxed font-medium">
          We use privacy-friendly telemetry (Plausible/PostHog) to measure research engagement and framework utility. No sensitive code data is stored. Read our{' '}
          <Link href="/legal" className="text-cyan-400 underline hover:text-cyan-300">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex items-center justify-end gap-3 pt-1">
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
