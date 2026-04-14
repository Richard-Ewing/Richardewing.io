'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { ArrowRight, User, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const paths = [
    {
        id: 'founder',
        icon: User,
        label: 'Founder / CEO',
        description: 'Stop the cash bleed. Fix the product.',
        href: '/advisory',
        color: 'text-crimson',
        border: 'group-hover:border-crimson',
        bg: 'group-hover:bg-crimson/5'
    },
    {
        id: 'investor',
        icon: TrendingUp,
        label: 'VC / PE',
        description: 'Audit your portfolio. Protect capital.',
        href: '/advisory', // Could go to a specific section
        color: 'text-gold',
        border: 'group-hover:border-gold',
        bg: 'group-hover:bg-gold/5'
    },
    {
        id: 'product',
        icon: Briefcase,
        label: 'Product Leader',
        description: 'Build authority. Master economics.',
        href: '/manifesto',
        color: 'text-cyan',
        border: 'group-hover:border-cyan',
        bg: 'group-hover:bg-cyan/5'
    }
];

export function PathSelector() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {paths.map((path) => (
                <Link
                    key={path.id}
                    href={path.href}
                    className={cn(
                        "group relative p-6 rounded-xl border border-zinc-200 bg-white/5 transition-all duration-300 backdrop-blur-sm overflow-hidden",
                        path.border,
                        { 'scale-[1.02] bg-white/[0.07]': hovered === path.id }
                    )}
                    onMouseEnter={() => setHovered(path.id)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <div className={cn(
                        "absolute inset-0 opacity-0 transition-opacity duration-500",
                        path.bg,
                        { 'opacity-100': hovered === path.id }
                    )} />

                    <div className="relative z-10 flex flex-col h-full min-h-[140px] justify-between">
                        <div className="flex items-start justify-between">
                            <path.icon className={cn("w-6 h-6 mb-4", path.color)} />
                            <ArrowRight className={cn(
                                "w-4 h-4 text-zinc-500 transition-transform duration-300",
                                { '-rotate-45 text-white': hovered === path.id }
                            )} />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-white font-grotesk mb-1">{path.label}</h3>
                            <p className="text-xs text-zinc-400 font-mono leading-relaxed">{path.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
