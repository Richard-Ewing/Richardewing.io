'use client';

import React, { useState } from 'react';

export interface AccordionItemProps {
  question: string;
  answer?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  tag?: string;
  className?: string;
}

export function AccordionItem({
  question,
  answer,
  children,
  defaultOpen = false,
  tag,
  className = '',
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-white transition-all overflow-hidden ${
        isOpen ? 'shadow-sm' : ''
      } ${className}`}
    >
      <button
        type="button"
        className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left transition-colors hover:bg-[var(--paper2,#ebe7dc)]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold,#b77a35)]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {tag && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--gold,#b77a35)] bg-[var(--gold,#b77a35)]/10 px-2 py-0.5 rounded border border-[var(--gold,#b77a35)]/20">
              {tag}
            </span>
          )}
          <span className="font-serif text-lg sm:text-xl font-medium text-[var(--ink,#1e2924)]">
            {question}
          </span>
        </div>
        <span
          className={`font-mono text-base text-[var(--gold,#b77a35)] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {isOpen && (
        <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-[var(--line,rgba(36,51,43,0.08))] text-sm sm:text-base text-[var(--muted,#66716a)] leading-relaxed font-sans">
          {answer && <p className="m-0">{answer}</p>}
          {children}
        </div>
      )}
    </div>
  );
}
