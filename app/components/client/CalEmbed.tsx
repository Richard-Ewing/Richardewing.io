'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CalEmbedProps {
  calLink?: string;
  className?: string;
}

export default function CalEmbed({
  calLink = 'richard-ewing-2cevwb',
  className = ''
}: CalEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    if (typeof window === 'undefined') return;

    const initCal = () => {
      const Cal = (window as any).Cal;
      if (Cal) {
        Cal('init', { origin: 'https://app.cal.com' });
        Cal('inline', {
          elementOrSelector: '#cal-booking-embed',
          calLink: calLink,
          layout: 'month_view'
        });
        Cal('ui', {
          styles: { branding: { brandColor: '#4f46e5' } },
          hideEventTypeDetails: false,
          layout: 'month_view'
        });
        if (isMounted) {
          setIsLoaded(true);
        }
      }
    };

    if ((window as any).Cal) {
      initCal();
    } else {
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://app.cal.com/embed/embed.js';
        script.async = true;
        script.onload = () => {
          initCal();
        };
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener('load', initCal);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [calLink]);

  return (
    <div className={`w-full min-h-[640px] flex flex-col relative ${className}`} ref={containerRef}>
      <div
        id="cal-booking-embed"
        className="w-full min-h-[640px] flex-1 rounded-2xl overflow-hidden"
      >
        {/* Interactive iframe fallback */}
        <iframe
          src={`https://cal.com/${calLink}?embed=true`}
          width="100%"
          height="100%"
          frameBorder="0"
          className="min-h-[640px] w-full border-0 rounded-2xl"
          title="Schedule an Executive Advisory Session with Richard Ewing"
        />
      </div>
    </div>
  );
}
