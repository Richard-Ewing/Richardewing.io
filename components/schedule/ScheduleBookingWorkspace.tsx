'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, Copy, ExternalLink } from 'lucide-react';
import CalEmbed from '@/app/components/client/CalEmbed';

type BookingModeId = 'paid' | 'open30' | 'intro15';

interface BookingMode {
  id: BookingModeId;
  label: string;
  sublabel: string;
  calLink: string;
  shareUrl: string;
}

const BOOKING_MODES: BookingMode[] = [
  {
    id: 'paid',
    label: 'Paid Advisory ($450 - $2,500)',
    sublabel: '60-Min Audits & Rapid Gut-Check',
    calLink: 'richard-ewing-2cevwb',
    shareUrl: 'https://www.richardewing.io/schedule',
  },
  {
    id: 'open30',
    label: '30-Min Open Call (Free)',
    sublabel: 'Exploratory Consulting & Scoping',
    calLink: 'richard-ewing-2cevwb/30min',
    shareUrl: 'https://www.richardewing.io/schedule?type=30min',
  },
  {
    id: 'intro15',
    label: '15-Min Quick Call (Free)',
    sublabel: 'Partnerships, Sponsors & Quick Intro',
    calLink: 'richard-ewing-2cevwb/secret',
    shareUrl: 'https://www.richardewing.io/schedule?type=15min',
  },
];

function resolveInitialMode(typeParam: string | null, sourceParam: string | null): BookingModeId {
  const normType = (typeParam || '').trim().toLowerCase();
  const normSource = (sourceParam || '').trim().toLowerCase();

  if (
    ['15min', '15', 'intro', 'partner', 'sponsorship'].includes(normType) ||
    normSource === 'sponsorship'
  ) {
    return 'intro15';
  }

  if (
    ['30min', '30', 'open', 'free', 'consulting'].includes(normType) ||
    ['open-call', 'speaking', 'exogram-demo'].includes(normSource)
  ) {
    return 'open30';
  }

  return 'paid';
}

export default function ScheduleBookingWorkspace() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  const sourceParam = searchParams.get('source');

  const [modeId, setModeId] = useState<BookingModeId>(() =>
    resolveInitialMode(typeParam, sourceParam)
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setModeId(resolveInitialMode(typeParam, sourceParam));
  }, [typeParam, sourceParam]);

  const active = BOOKING_MODES.find((m) => m.id === modeId) || BOOKING_MODES[0];

  const handleCopyShareUrl = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(active.shareUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-white border border-[var(--line)] rounded-2xl p-4 sm:p-6 shadow-sm min-h-[720px] flex flex-col relative overflow-hidden">
      <div
        role="tablist"
        aria-label="Booking session types"
        className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4"
      >
        {BOOKING_MODES.map((mode) => {
          const isSelected = mode.id === active.id;
          return (
            <button
              key={mode.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setModeId(mode.id)}
              className={`min-h-[52px] px-3.5 py-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-zinc-950 !text-white border-zinc-950 shadow-xs'
                  : 'bg-[#FAF9F6] hover:bg-zinc-100 text-zinc-900 border-zinc-300'
              }`}
            >
              <div
                className={`font-grotesk text-xs sm:text-sm font-bold leading-snug ${
                  isSelected ? '!text-white' : 'text-zinc-950'
                }`}
              >
                {mode.label}
              </div>
              <div
                className={`font-mono text-[10px] mt-0.5 ${
                  isSelected ? 'text-zinc-300' : 'text-zinc-600'
                }`}
              >
                {mode.sublabel}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mb-4 px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600 shrink-0">
            Active Link:
          </span>
          <span className="font-mono text-xs font-semibold text-zinc-900 truncate">
            {active.shareUrl}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyShareUrl}
            className="inline-flex items-center gap-1.5 min-h-[34px] px-3 py-1 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 font-mono text-[11px] font-bold transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-700" />
                <span>Copy Direct Link</span>
              </>
            )}
          </button>
          <a
            href={`https://cal.com/${active.calLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-[34px] px-3 py-1 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-cyan-900 font-mono text-[11px] font-bold transition-colors"
          >
            <span>Open directly on Cal.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <CalEmbed key={active.calLink} calLink={active.calLink} />
    </div>
  );
}
