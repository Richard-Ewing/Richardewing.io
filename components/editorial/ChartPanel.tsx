import React from 'react';

export interface ChartLegendItem {
  label: string;
  color: string;
}

export interface ChartPanelProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  legend?: ChartLegendItem[];
  sourceNote?: string;
  variant?: 'paper' | 'forest' | 'white';
  className?: string;
}

export function ChartPanel({
  title,
  subtitle,
  children,
  legend,
  sourceNote,
  variant = 'paper',
  className = '',
}: ChartPanelProps) {
  const variantStyles = {
    paper: 'bg-[var(--paper2,#ebe7dc)] border-[var(--line,rgba(36,51,43,0.16))] text-[var(--ink,#1e2924)]',
    white: 'bg-white border-[var(--line,rgba(36,51,43,0.16))] text-[var(--ink,#1e2924)] shadow-sm',
    forest: 'bg-[var(--forest2,#162e26)] border-[var(--forest,#29473b)] text-white',
  }[variant];

  return (
    <div className={`rounded-2xl border p-6 sm:p-8 ${variantStyles} ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--line,rgba(36,51,43,0.12))]">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-snug">
            {title}
          </h3>
          {subtitle && (
            <p
              className={`text-xs sm:text-sm mt-1 ${
                variant === 'forest' ? 'text-zinc-300' : 'text-[var(--muted,#66716a)]'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Legend */}
        {legend && legend.length > 0 && (
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            {legend.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className={variant === 'forest' ? 'text-zinc-300' : 'text-zinc-700'}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chart Canvas / SVG Container */}
      <div className="py-6">{children}</div>

      {/* Source Note Footer */}
      {sourceNote && (
        <div className="pt-4 border-t border-[var(--line,rgba(36,51,43,0.12))] text-[11px] font-mono text-zinc-500 flex items-center justify-between">
          <span>{sourceNote}</span>
          <span className="uppercase tracking-wider text-[10px] text-[var(--gold,#b77a35)]">
            Verified Invariant
          </span>
        </div>
      )}
    </div>
  );
}
