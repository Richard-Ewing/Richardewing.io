'use client';

import React, { useState } from 'react';

interface PlainEnglishTooltipProps {
  term: string;
  customDefinition?: string;
  children?: React.ReactNode;
}

const DICTIONARY: Record<string, string> = {
  'R&D Capital Audit': 'A forensic review of where your engineering budget actually goes - measured in dollars, not story points.',
  'Technical Insolvency Date': 'The exact date your tech debt maintenance costs outpace your new feature development budget.',
  'Product Debt Index': 'A financial scorecard quantifying interest paid on past architectural decisions.',
  'Product Debt Index (PDI)': 'A financial scorecard quantifying interest paid on past architectural decisions.',
  'Vibe Coding Debt': 'Unverified AI-generated code rushed to production without architectural verification.',
  'Shadow AI Liability': 'Unapproved employee AI tools leaking proprietary data and ballooning API costs.',
  'Deterministic Admissibility': 'An instant security gatekeeper blocking dangerous AI actions before execution.',
  'Narrative Base': 'A verified portfolio of real engineering impact used for executive negotiation.',
  'AI Unit Economics': 'The actual revenue generated minus the API/compute cost for every single AI feature interaction.',
  'Innovation Tax': 'The hidden engineering labor spent rebuilding custom internal tools instead of shipping customer features.',
};

export default function PlainEnglishTooltip({ term, customDefinition, children }: PlainEnglishTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const definition = customDefinition || DICTIONARY[term] || 'A technical concept measured in explicit financial metrics.';

  return (
    <span className="relative inline-block group">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="cursor-help underline decoration-cyan-500/60 decoration-dotted decoration-2 underline-offset-4 hover:decoration-cyan-600 hover:text-cyan-950 transition-all font-inherit text-left"
        aria-label={`Plain English definition for ${term}`}
      >
        {children || term}
      </button>

      {isOpen && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-zinc-950 text-white text-xs rounded-xl shadow-2xl z-50 pointer-events-none block border border-zinc-800 animate-in fade-in zoom-in-95 duration-150">
          <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider block mb-1">
            Plain English (CFO Translation)
          </span>
          <span className="font-sans text-zinc-200 leading-snug block">
            {definition}
          </span>
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-950" />
        </span>
      )}
    </span>
  );
}
