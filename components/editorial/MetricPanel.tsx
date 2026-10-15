import React from 'react';

export interface MetricPanelProps {
  label: string;
  value: string;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  subtext?: string;
  variant?: 'paper' | 'forest' | 'white';
  className?: string;
}

export function MetricPanel({
  label,
  value,
  trend,
  trendDirection = 'neutral',
  subtext,
  variant = 'paper',
  className = '',
}: MetricPanelProps) {
  const variantStyles = {
    paper: 'bg-[var(--paper2,#ebe7dc)] border-[var(--line,rgba(36,51,43,0.16))] text-[var(--ink,#1e2924)]',
    white: 'bg-white border-[var(--line,rgba(36,51,43,0.16))] text-[var(--ink,#1e2924)] shadow-sm',
    forest: 'bg-[var(--forest2,#162e26)] border-[var(--forest,#29473b)] text-white',
  }[variant];

  const trendColor = {
    up: variant === 'forest' ? 'text-emerald-400' : 'text-emerald-700',
    down: variant === 'forest' ? 'text-rose-400' : 'text-rose-700',
    neutral: variant === 'forest' ? 'text-[#d8c7a8]' : 'text-[var(--gold,#b77a35)]',
  }[trendDirection];

  return (
    <div className={`rounded-2xl border p-6 flex flex-col justify-between ${variantStyles} ${className}`}>
      <div>
        <div
          className={`font-mono text-[11px] uppercase tracking-wider mb-2 ${
            variant === 'forest' ? 'text-[#d8c7a8]' : 'text-[var(--muted,#66716a)]'
          }`}
        >
          {label}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            {value}
          </span>
          {trend && (
            <span className={`text-xs font-mono font-semibold ${trendColor}`}>
              {trend}
            </span>
          )}
        </div>
      </div>

      {subtext && (
        <p
          className={`text-xs mt-3 leading-relaxed ${
            variant === 'forest' ? 'text-zinc-300' : 'text-[var(--muted,#66716a)]'
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
