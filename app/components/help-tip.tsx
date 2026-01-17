'use client';

import { useState, ReactNode } from 'react';
import { HelpCircle } from 'lucide-react';

interface HelpTipProps {
    children: ReactNode;
    tip: string;
}

export function HelpTip({ children, tip }: HelpTipProps) {
    const [show, setShow] = useState(false);

    return (
        <span className="relative inline-flex items-center gap-1">
            {children}
            <button
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                onClick={() => setShow(!show)}
                className="text-zinc-500 hover:text-cyan-400 transition-colors cursor-help"
                aria-label="More info"
            >
                <HelpCircle size={12} />
            </button>
            {show && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-zinc-900 border border-white/10 rounded-lg text-xs text-zinc-300 max-w-[200px] text-center whitespace-normal shadow-xl z-50">
                    {tip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-900" />
                </div>
            )}
        </span>
    );
}

// Simple definition component for inline help
interface DefinitionProps {
    term: string;
    definition: string;
    children?: ReactNode;
}

export function Definition({ term, definition, children }: DefinitionProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <span className="relative group">
            <button
                onClick={() => setExpanded(!expanded)}
                className="border-b border-dashed border-zinc-600 hover:border-cyan-400 cursor-help"
            >
                {term}
            </button>
            {expanded && (
                <div className="absolute left-0 top-full mt-1 p-3 bg-zinc-900 border border-white/10 rounded-lg text-xs text-zinc-300 max-w-[250px] shadow-xl z-50">
                    <div className="font-semibold text-white mb-1">{term}</div>
                    <div>{definition}</div>
                    {children}
                </div>
            )}
        </span>
    );
}
