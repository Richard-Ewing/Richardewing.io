import React from 'react';

export interface QuoteBlockProps {
  quote: string;
  attribution?: string;
  source?: string;
  variant?: 'paper' | 'forest' | 'white';
  className?: string;
}

export function QuoteBlock({
  quote,
  attribution = 'Richard Ewing',
  source = 'AI Economist & Enterprise R&D Auditor',
  variant = 'paper',
  className = '',
}: QuoteBlockProps) {
  const variantStyles = {
    paper: 'bg-[var(--paper2,#ebe7dc)] border-l-4 border-l-[var(--gold,#b77a35)] text-[var(--ink,#1e2924)]',
    white: 'bg-white border-l-4 border-l-[var(--forest,#29473b)] text-[var(--ink,#1e2924)] shadow-sm',
    forest: 'bg-[var(--forest2,#162e26)] border-l-4 border-l-[#d8c7a8] text-white',
  }[variant];

  return (
    <figure className={`p-6 sm:p-8 rounded-r-2xl border-y border-r border-[var(--line,rgba(36,51,43,0.12))] ${variantStyles} ${className}`}>
      <blockquote className="font-serif text-lg sm:text-xl italic leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-2 text-xs font-mono">
        <strong className={variant === 'forest' ? 'text-white' : 'text-[var(--forest2,#162e26)]'}>
          {attribution}
        </strong>
        {source && (
          <>
            <span className={variant === 'forest' ? 'text-zinc-500' : 'text-zinc-400'}>/</span>
            <span className={variant === 'forest' ? 'text-zinc-400' : 'text-[var(--muted,#66716a)]'}>
              {source}
            </span>
          </>
        )}
      </figcaption>
    </figure>
  );
}
