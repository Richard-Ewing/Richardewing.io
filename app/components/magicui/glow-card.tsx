'use client';

import { ReactNode, HTMLAttributes } from 'react';

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    glowColor?: string;
}

export function GlowCard({ children, className = '', glowColor = 'cyan', ...props }: GlowCardProps) {
    const colorMap: Record<string, string> = {
        cyan: 'hover:border-cyan-500/50 hover:shadow-cyan-500/20',
        cobalt: 'hover:border-cobalt/50 hover:shadow-cobalt/20',
        gold: 'hover:border-gold/50 hover:shadow-gold/20',
        danger: 'hover:border-danger/50 hover:shadow-danger/20',
        emerald: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
        white: 'hover:border-zinc-4000 hover:shadow-white/10',
    };

    return (
        <div
            className={`
        border border-zinc-400 bg-white/40 backdrop-blur-sm rounded-2xl
        transition-all duration-500 ease-out
        hover:scale-[1.01] hover:shadow-lg
        ${colorMap[glowColor] || colorMap.cyan}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
}
