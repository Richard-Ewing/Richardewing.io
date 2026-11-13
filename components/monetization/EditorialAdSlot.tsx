'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  type AdPillar,
  PILLAR_TELEMETRY,
  getActiveDirectSponsor,
  getAdSenseSlotId,
  isAdAllowedPathname,
  normalizePublisherId,
} from '@/lib/monetization/sponsorship-config';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export interface EditorialAdSlotProps {
  pillar: AdPillar;
  slotId?: string;
  contextLabel?: string;
  className?: string;
}

type ConsentMode = 'all' | 'essential' | null;

export default function EditorialAdSlot({
  pillar,
  slotId,
  contextLabel,
  className = '',
}: EditorialAdSlotProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const insRef = useRef<HTMLModElement | null>(null);

  const [consentMode, setConsentMode] = useState<ConsentMode>(null);
  const [isInViewportRange, setIsInViewportRange] = useState(false);
  const [adPushed, setAdPushed] = useState(false);
  const [adFallbackActive, setAdFallbackActive] = useState(false);

  // Reset per-route ad slot lifecycle across sibling client-side Link navigations
  useEffect(() => {
    setIsInViewportRange(false);
    setAdPushed(false);
    setAdFallbackActive(false);
  }, [pathname, pillar]);

  const allowed = isAdAllowedPathname(pathname);
  const directSponsor = getActiveDirectSponsor(pillar);
  const clientId = normalizePublisherId(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID);
  const resolvedSlotId = getAdSenseSlotId(pillar, slotId);

  const shouldUseAdSense = Boolean(
    allowed && !directSponsor && clientId && resolvedSlotId && consentMode === 'all' && !adFallbackActive
  );

  // Sync consent preference safely on the client
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const syncConsent = () => {
      const stored = window.localStorage.getItem('cookie_consent_mode');
      if (stored === 'all' || stored === 'essential') {
        setConsentMode(stored);
      } else {
        setConsentMode(null);
      }
    };
    syncConsent();
    window.addEventListener('rw-cookie-consent-change', syncConsent);
    window.addEventListener('storage', syncConsent);
    return () => {
      window.removeEventListener('rw-cookie-consent-change', syncConsent);
      window.removeEventListener('storage', syncConsent);
    };
  }, []);

  // Lazy-activate AdSense only when the slot nears the viewport
  useEffect(() => {
    if (!shouldUseAdSense || isInViewportRange) return;
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInViewportRange(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInViewportRange(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldUseAdSense, isInViewportRange]);

  // Inject AdSense SDK once and push manual slot with unfilled/adblock fallback
  useEffect(() => {
    if (!shouldUseAdSense || !isInViewportRange || adPushed || !clientId) return;
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const existingScript = document.getElementById('rw-adsense-sdk');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'rw-adsense-sdk';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(clientId)}`;
      script.onerror = () => setAdFallbackActive(true);
      document.head.appendChild(script);
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      setAdPushed(true);
    } catch {
      setAdFallbackActive(true);
      return;
    }

    const insEl = insRef.current;
    let observer: MutationObserver | null = null;
    if (insEl && typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver(() => {
        if (insEl.getAttribute('data-ad-status') === 'unfilled') {
          setAdFallbackActive(true);
        }
      });
      observer.observe(insEl, { attributes: true, attributeFilter: ['data-ad-status'] });
    }

    const timer = window.setTimeout(() => {
      const target = insRef.current;
      if (!target) return;
      const status = target.getAttribute('data-ad-status');
      const hasRenderedFrame = Boolean(target.querySelector('iframe'));
      if (status === 'unfilled' || (!hasRenderedFrame && status !== 'filled')) {
        setAdFallbackActive(true);
      }
    }, 2500);

    return () => {
      if (observer) observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [shouldUseAdSense, isInViewportRange, adPushed, clientId]);

  if (!allowed) {
    return null;
  }

  const telemetry = PILLAR_TELEMETRY[pillar];

  // Tier 1: Direct Paid B2B Sponsor Card
  if (directSponsor) {
    return (
      <aside
        aria-label="Sponsored partner placement"
        className={`w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs ${className}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-800">
            {directSponsor.badgeText || 'SPONSORED PARTNER'}
          </span>
          <Link
            href={`/partnerships?pillar=${pillar}#sponsor`}
            className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-700 hover:text-zinc-950 underline underline-offset-4 transition-colors"
          >
            Sponsor this page -&gt;
          </Link>
        </div>
        <h3 className="font-grotesk text-lg sm:text-xl font-bold text-zinc-950 mb-2 leading-snug">
          {directSponsor.headline}
        </h3>
        <p className="text-sm text-zinc-700 font-medium leading-relaxed mb-4">
          {directSponsor.body}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href={directSponsor.destinationUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-grotesk font-bold text-xs uppercase tracking-wider transition-colors"
          >
            {directSponsor.ctaLabel} -&gt;
          </a>
          <span className="font-mono text-[11px] font-bold text-zinc-600">
            Partner: {directSponsor.sponsorName}
          </span>
        </div>
      </aside>
    );
  }

  // Tier 2: Manual Google AdSense Slot (Strict Route & Consent Gated)
  if (shouldUseAdSense && clientId && resolvedSlotId) {
    return (
      <aside
        ref={containerRef}
        aria-label="Advertisement"
        className={`w-full rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 shadow-xs ${className}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-zinc-100">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            Advertisement
          </span>
          <Link
            href={`/partnerships?pillar=${pillar}#sponsor`}
            className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-800 hover:text-cyan-950 underline underline-offset-4 transition-colors"
          >
            Sponsor this page -&gt;
          </Link>
        </div>
        <div className="min-h-[120px] w-full flex items-center justify-center overflow-hidden">
          <ins
            ref={insRef}
            className="adsbygoogle block w-full"
            style={{ display: 'block', minHeight: '120px' }}
            data-ad-client={clientId}
            data-ad-slot={resolvedSlotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </aside>
    );
  }

  // Tier 3: House Direct Sponsorship Acquisition Card (Default before AdSense activation & fallback)
  return (
    <aside
      ref={containerRef}
      aria-label="Direct sponsorship placement"
      className={`w-full rounded-2xl border border-zinc-300 bg-white p-6 sm:p-7 shadow-xs ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-800">
          SPONSOR THIS RESEARCH DIRECTORY
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 font-mono text-[10px] font-bold text-zinc-700">
          Verified Cloudflare Telemetry: 13,690+ Monthly Readers
        </span>
      </div>

      <h3 className="font-grotesk text-lg sm:text-xl font-bold text-zinc-950 mb-2 leading-snug">
        {telemetry.houseHeadline}
      </h3>
      <p className="text-sm text-zinc-700 font-medium leading-relaxed mb-5">
        {telemetry.houseBody}
        {contextLabel ? ` Context: ${contextLabel}.` : ''}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/partnerships?pillar=${pillar}#sponsor`}
          className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-grotesk font-bold text-xs uppercase tracking-wider transition-colors"
        >
          Reserve a Sponsor Slot -&gt;
        </Link>
        <span className="inline-flex items-center min-h-[44px] px-3.5 py-2 rounded-xl bg-[#FAF9F6] border border-zinc-200 font-mono text-[11px] font-bold text-zinc-700">
          375 Technical Pages · Zero Popups
        </span>
      </div>
    </aside>
  );
}
