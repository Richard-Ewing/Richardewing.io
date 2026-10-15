import React from 'react';
import Link from 'next/link';

export interface ToolCardProps {
  title: string;
  href: string;
  desc: string;
  tag?: string;
  metricLabel?: string;
  metricValue?: string;
  actionText?: string;
  className?: string;
}

export function ToolCard({
  title,
  href,
  desc,
  tag = 'DIAGNOSTIC',
  metricLabel,
  metricValue,
  actionText = 'Run Diagnostic ↗',
  className = '',
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className={`group rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[var(--forest,#29473b)] ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono mb-3">
          <span className="uppercase tracking-widest text-[var(--gold,#b77a35)] font-semibold">
            {tag}
          </span>
          <span className="px-2 py-0.5 rounded bg-[var(--paper2,#ebe7dc)] text-zinc-700 font-bold border border-[var(--line,rgba(36,51,43,0.1))]">
            Interactive Tool
          </span>
        </div>

        <h3 className="font-serif text-2xl font-semibold leading-snug text-[var(--ink,#1e2924)] group-hover:text-[var(--forest,#29473b)] transition-colors mb-2">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[var(--muted,#66716a)] leading-relaxed mb-4">
          {desc}
        </p>

        {metricValue && (
          <div className="p-3 rounded-xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] mb-4">
            {metricLabel && (
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-600 mb-0.5">
                {metricLabel}
              </div>
            )}
            <div className="font-serif text-lg font-bold text-[var(--forest2,#162e26)]">
              {metricValue}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 mt-2 border-t border-[var(--line,rgba(36,51,43,0.12))] text-xs font-semibold text-[var(--forest,#29473b)]">
        <span className="font-mono text-[11px] text-zinc-500">Free Diagnostic</span>
        <span className="text-[var(--gold,#b77a35)] group-hover:translate-x-1 transition-transform">
          {actionText}
        </span>
      </div>
    </Link>
  );
}
