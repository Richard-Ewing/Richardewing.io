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
    const handleOpenSettings = () => setIsVisible(true);
    window.addEventListener('rw-open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('rw-open-cookie-settings', handleOpenSettings);
  }, []);

  const handleConsent = (mode: 'essential' | 'all') => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie_consent_accepted', 'true');
      localStorage.setItem('cookie_consent_mode', mode);
      window.dispatchEvent(new Event('rw-cookie-consent-change'));
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[90] p-5 bg-zinc-950/95 border border-zinc-800 text-white rounded-2xl shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-200">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
            Privacy &amp; Governance Notice
          </span>
          <span className="text-[10px] font-mono text-zinc-300">EU AI Act &amp; GDPR</span>
        </div>
        <p className="text-xs text-zinc-100 leading-relaxed font-medium">
          We use privacy-safe telemetry (Plausible and PostHog) across the site and optional advertising cookies on selected research directories (/glossary, /blog, and /concepts) only when accepted. Read our{' '}
          <Link href="/legal" prefetch={false} className="text-cyan-400 underline hover:text-cyan-300">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/legal#privacy" prefetch={false} className="text-cyan-400 underline hover:text-cyan-300">
            Ad Cookie Controls
          </Link>.
        </p>
        <div className="flex flex-wrap items-center justify-end gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => handleConsent('essential')}
            className="min-h-[44px] px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-600 text-zinc-100 text-xs font-bold font-mono uppercase tracking-wider rounded-xl transition-colors"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={() => handleConsent('all')}
            className="min-h-[44px] px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xl transition-colors shadow-md"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
