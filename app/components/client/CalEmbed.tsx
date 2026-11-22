'use client';

import React, { useEffect, useRef } from 'react';

interface CalEmbedProps {
  calLink?: string;
  className?: string;
}

type CalNamespaceFn = {
  (...args: unknown[]): void;
  q?: unknown[];
};

type CalGlobalFn = {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns?: Record<string, CalNamespaceFn>;
  q?: unknown[];
};

function ensureCalBootstrap(): CalGlobalFn {
  const win = window as unknown as { Cal?: CalGlobalFn };
  if (win.Cal) return win.Cal;

  const pushArg = (target: { q?: unknown[] }, ar: IArguments | unknown[]) => {
    target.q = target.q || [];
    target.q.push(ar);
  };

  const cal: CalGlobalFn = function (...args: unknown[]) {
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      const existing = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (!existing) {
        const script = document.createElement('script');
        script.src = 'https://app.cal.com/embed/embed.js';
        script.async = true;
        document.head.appendChild(script);
      }
      cal.loaded = true;
    }
    if (args[0] === 'init') {
      const api: CalNamespaceFn = function (...nsArgs: unknown[]) {
        pushArg(api, nsArgs);
      };
      const namespace = args[1];
      api.q = [];
      if (typeof namespace === 'string') {
        cal.ns = cal.ns || {};
        cal.ns[namespace] = cal.ns[namespace] || api;
        pushArg(cal.ns[namespace], args);
        pushArg(cal, ['initNamespace', namespace]);
      } else {
        pushArg(cal, args);
      }
      return;
    }
    pushArg(cal, args);
  };

  win.Cal = cal;
  return cal;
}

export default function CalEmbed({
  calLink = 'richard-ewing-2cevwb',
  className = '',
}: CalEmbedProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const safeKey = calLink.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const embedId = `cal-booking-embed-${safeKey}`;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const targetEl = mountRef.current;
    if (!targetEl) return;

    targetEl.innerHTML = '';

    const Cal = ensureCalBootstrap();
    const ns = `rw_${safeKey}`;

    Cal('init', ns, { origin: 'https://cal.com' });
    const nsApi = Cal.ns?.[ns] || Cal;

    nsApi('inline', {
      elementOrSelector: targetEl,
      calLink,
      layout: 'month_view',
      config: {
        layout: 'month_view',
        theme: 'light',
      },
    });

    nsApi('ui', {
      theme: 'light',
      cssVarsPerTheme: {
        light: { 'cal-brand': '#1f3b2c' },
      },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });

    return () => {
      if (targetEl) {
        targetEl.innerHTML = '';
      }
    };
  }, [calLink, safeKey]);

  return (
    <div className={`w-full min-h-[640px] flex flex-col relative ${className}`}>
      <div
        id={embedId}
        ref={mountRef}
        className="w-full min-h-[640px] flex-1 rounded-2xl overflow-auto bg-white"
        aria-label={`Schedule a Session with Richard Ewing (${calLink})`}
      />
    </div>
  );
}
