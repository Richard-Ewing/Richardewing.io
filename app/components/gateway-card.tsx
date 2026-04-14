
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function GatewayCard({ title, href, color = 'cyan', description = "Launch Tool" }: { title: string, href: string, color?: 'cyan' | 'red' | 'violet', description?: string }) {
    const colors = {
        cyan: 'border-cyan-500/30 bg-cyan-50/20 text-cyan-400 hover:border-cyan-400',
        red: 'border-red-500/30 bg-red-50/20 text-red-400 hover:border-red-400',
        violet: 'border-violet-500/30 bg-violet-950/20 text-violet-400 hover:border-violet-400'
    };

    const activeColor = colors[color] || colors.cyan;

    return (
        <Link href={href} className={`block w-full p-8 rounded-2xl border transition-all duration-300 group ${activeColor}`}>
            <div className="flex items-center justify-between">
                <div>
                    <div className="font-mono text-xs uppercase tracking-widest opacity-70 mb-2">Interactive Engine</div>
                    <h3 className="text-2xl font-bold text-zinc-900">{title}</h3>
                </div>
                <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                    <ArrowRight className="w-6 h-6" />
                </div>
            </div>
            <div className="mt-4 text-sm font-mono opacity-80 flex items-center gap-2">
                {description} <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
        </Link>
    );
}
