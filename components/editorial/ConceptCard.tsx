import React from 'react';
import Link from 'next/link';

export interface ConceptCardProps {
  slug: string;
  title: string;
  definition: string;
  domain?: string;
  expertiseLevel?: string;
  canonicalQuote?: string;
  evidenceCount?: number;
  className?: string;
}

export function ConceptCard({
  slug,
  title,
  definition,
  domain,
  expertiseLevel = 'Executive',
  canonicalQuote,
  evidenceCount,
  className = '',
}: ConceptCardProps) {
  return (
    <Link
      href={`/concepts/${slug}`}
      className={`group rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[var(--forest,#29473b)] ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono mb-3">
          <span className="uppercase tracking-widest text-[var(--gold,#b77a35)] font-semibold">
            {domain || 'Canonical Specification'}
          </span>
          <span className="px-2 py-0.5 rounded bg-[var(--paper2,#ebe7dc)] text-zinc-700 font-bold border border-[var(--line,rgba(36,51,43,0.1))]">
            Level: {expertiseLevel}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-semibold leading-snug text-[var(--ink,#1e2924)] group-hover:text-[var(--forest,#29473b)] transition-colors mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[var(--muted,#66716a)] leading-relaxed line-clamp-3 mb-4">
          {definition}
        </p>

        {canonicalQuote && (
          <p className="text-xs font-serif italic text-zinc-700 border-l-2 border-[var(--gold,#b77a35)] pl-2.5 py-0.5 mb-4">
            &ldquo;{canonicalQuote}&rdquo;
          </p>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 mt-2 border-t border-[var(--line,rgba(36,51,43,0.12))] text-xs font-semibold text-[var(--forest,#29473b)]">
        <span className="font-mono text-[11px] text-zinc-500">
          {evidenceCount !== undefined ? `${evidenceCount} Evidence Points` : 'Full Research Spec'}
        </span>
        <span className="text-[var(--gold,#b77a35)] group-hover:translate-x-1 transition-transform">
          Inspect Spec ↗
        </span>
      </div>
    </Link>
  );
}
