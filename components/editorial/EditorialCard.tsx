import React from 'react';
import Link from 'next/link';

export interface EditorialCardProps {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  meta?: string;
  actionText?: string;
  variant?: 'paper' | 'forest' | 'white' | 'glass';
  badge?: string;
  badgeVariant?: 'gold' | 'forest' | 'rose' | 'muted';
  children?: React.ReactNode;
  className?: string;
}

export function EditorialCard({
  eyebrow,
  title,
  description,
  href,
  meta,
  actionText = 'Read Analysis ↗',
  variant = 'paper',
  badge,
  badgeVariant = 'gold',
  children,
  className = '',
}: EditorialCardProps) {
  const variantStyles = {
    paper: 'bg-[var(--paper2,#ebe7dc)] border-[var(--line,rgba(36,51,43,0.16))] text-[var(--ink,#1e2924)]',
    white: 'bg-white border-[var(--line,rgba(36,51,43,0.16))] text-[var(--ink,#1e2924)] shadow-sm',
    forest: 'bg-[var(--forest2,#162e26)] border-[var(--forest,#29473b)] text-white',
    glass: 'bg-white/70 backdrop-blur-md border-[var(--line,rgba(36,51,43,0.16))] text-[var(--ink,#1e2924)]',
  }[variant];

  const badgeStyles = {
    gold: 'bg-[var(--gold,#b77a35)]/15 text-[var(--gold,#b77a35)] border-[var(--gold,#b77a35)]/30',
    forest: 'bg-[var(--forest,#29473b)]/15 text-[var(--forest,#29473b)] border-[var(--forest,#29473b)]/30',
    rose: 'bg-[var(--rose,#c86d56)]/15 text-[var(--rose,#c86d56)] border-[var(--rose,#c86d56)]/30',
    muted: 'bg-zinc-200 text-zinc-700 border-zinc-300',
  }[badgeVariant];

  const content = (
    <div
      className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${variantStyles} ${
        href ? 'hover:-translate-y-1 hover:shadow-md cursor-pointer group' : ''
      } ${className}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          {eyebrow && (
            <span
              className={`font-mono text-[11px] font-semibold uppercase tracking-widest ${
                variant === 'forest' ? 'text-[#d8c7a8]' : 'text-[var(--gold,#b77a35)]'
              }`}
            >
              {eyebrow}
            </span>
          )}
          {badge && (
            <span
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${badgeStyles}`}
            >
              {badge}
            </span>
          )}
        </div>

        <h3
          className={`font-serif text-2xl font-semibold leading-snug mb-3 ${
            variant === 'forest'
              ? 'text-white group-hover:text-[#d8c7a8]'
              : 'text-[var(--ink,#1e2924)] group-hover:text-[var(--forest,#29473b)]'
          } transition-colors`}
        >
          {title}
        </h3>

        {description && (
          <p
            className={`text-sm leading-relaxed mb-4 ${
              variant === 'forest' ? 'text-zinc-300' : 'text-[var(--muted,#66716a)]'
            }`}
          >
            {description}
          </p>
        )}

        {children}
      </div>

      <div
        className={`flex items-center justify-between pt-4 mt-4 border-t ${
          variant === 'forest' ? 'border-white/10' : 'border-[var(--line,rgba(36,51,43,0.12))]'
        }`}
      >
        {meta ? (
          <span
            className={`text-xs font-mono ${
              variant === 'forest' ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            {meta}
          </span>
        ) : (
          <span />
        )}

        {href && (
          <span
            className={`text-xs font-semibold flex items-center gap-1 transition-transform ${
              variant === 'forest'
                ? 'text-[#d8c7a8] group-hover:translate-x-1'
                : 'text-[var(--forest,#29473b)] group-hover:translate-x-1'
            }`}
          >
            {actionText}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return href.startsWith('http') ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    ) : (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
