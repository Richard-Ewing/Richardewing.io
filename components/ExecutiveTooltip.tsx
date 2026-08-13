'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TermData {
  cfoMetric: string;
  definition: string;
}

const DEFAULT_DICTIONARY: Record<string, TermData> = {
  'R&D Capital Audit': {
    cfoMetric: 'CapEx ROI & Payroll Efficiency',
    definition: 'A forensic financial audit of engineering payroll to separate value-creating R&D assets from hidden maintenance drain.'
  },
  'Technical Insolvency Date': {
    cfoMetric: 'Runway & Debt Threshold',
    definition: 'The projected calendar date when technical maintenance costs equal 100% of your software R&D velocity budget.'
  },
  'Product Debt Index (PDI)': {
    cfoMetric: 'Monthly Debt Interest Rate',
    definition: 'A financial ratio measuring monthly engineering dollars spent fixing legacy design flaws versus building new revenue features.'
  },
  'Product Debt Index': {
    cfoMetric: 'Monthly Debt Interest Rate',
    definition: 'A financial ratio measuring monthly engineering dollars spent fixing legacy design flaws versus building new revenue features.'
  },
  'Vibe Coding Debt': {
    cfoMetric: 'Unverified Code Liability',
    definition: 'Cumulative financial exposure from unreviewed AI-generated code that introduces security defects and refactoring costs.'
  },
  'Deterministic controls': {
    cfoMetric: 'Hard Expenditure Caps',
    definition: 'Automated policy boundaries that physically block non-compliant API calls and budget overruns before spend occurs.'
  },
  'Deterministic Controls': {
    cfoMetric: 'Hard Expenditure Caps',
    definition: 'Automated policy boundaries that physically block non-compliant API calls and budget overruns before spend occurs.'
  },
  'Shadow AI Liability': {
    cfoMetric: 'Unapproved API Cost Exposure',
    definition: 'Unsanctioned employee AI tool subscriptions and unmonitored API calls exposing proprietary data to third parties.'
  },
  'AI Unit Economics': {
    cfoMetric: 'Gross Margin Per Inference',
    definition: 'Net profit per transaction after subtracting direct AI compute, token, and database hosting costs from revenue.'
  }
};

export interface ExecutiveTooltipProps {
  term: string;
  definition?: string;
  cfoMetric?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ExecutiveTooltip({
  term,
  definition: customDefinition,
  cfoMetric: customCfoMetric,
  children,
  className = ''
}: ExecutiveTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const matched = DEFAULT_DICTIONARY[term];
  const metric = customCfoMetric || matched?.cfoMetric || 'CFO Financial Metric';
  const text = customDefinition || matched?.definition || 'A quantifiable technology asset metric linked directly to financial earnings.';

  // Handle click outside to close on touch devices
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onKeyDown={handleKeyDown}
        className="cursor-help inline-flex items-center text-left font-inherit text-zinc-950 font-bold decoration-indigo-500/80 decoration-dotted underline decoration-2 underline-offset-4 hover:decoration-indigo-700 hover:text-indigo-900 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 rounded-sm"
        aria-expanded={isOpen}
        aria-label={`CFO translation for ${term}`}
      >
        {children || term}
      </button>

      {isOpen && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80 p-3.5 bg-zinc-950 text-white text-xs rounded-xl shadow-2xl z-50 pointer-events-none block border border-zinc-800 animate-in fade-in zoom-in-95 duration-150"
        >
          <span className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-zinc-800">
            <span className="font-mono text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
              CFO Translation
            </span>
            <span className="font-mono text-[9px] bg-indigo-950/80 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-800/50 font-semibold">
              {metric}
            </span>
          </span>
          <span className="font-sans text-zinc-200 text-xs leading-relaxed block font-medium">
            {text}
          </span>
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-950" />
        </span>
      )}
    </span>
  );
}
