'use client';

import { ReactNode } from 'react';

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export function GlowCard({ children, className = '', glowColor = 'cyan' }: GlowCardProps) {
    const colorMap: Record<string, string> = {
        cyan: 'hover:border-cyan-500/50 hover:shadow-cyan-500/20',
        cobalt: 'hover:border-cobalt/50 hover:shadow-cobalt/20',
        gold: 'hover:border-gold/50 hover:shadow-gold/20',
        danger: 'hover:border-danger/50 hover:shadow-danger/20',
        white: 'hover:border-white/50 hover:shadow-white/10',
    };

    return (
        <div
            className={`
        border border-white/10 bg-zinc-900/30 backdrop-blur-sm rounded-2xl
        transition-all duration-500 ease-out
        hover:scale-[1.02] hover:shadow-2xl
        ${colorMap[glowColor] || colorMap.cyan}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
