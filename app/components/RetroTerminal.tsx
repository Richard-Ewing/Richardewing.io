"use client";

import { useState, useEffect, useRef } from 'react';

interface RetroTerminalProps {
    title: string;
    category: string;
    definition: string;
    whyItMatters: string;
}

export default function RetroTerminal({ title, category, definition, whyItMatters }: RetroTerminalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);

    const fullText = `$ man ${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}

${title.toUpperCase()}(7)              Richard Ewing Glossary              ${title.toUpperCase()}(7)

NAME
    ${title} — ${category}

SYNOPSIS
    A comprehensive reference for technology leaders, investors, and operators.

DESCRIPTION
${definition.split('\n\n').map(p => '    ' + p.replace(/\n/g, '\n    ')).join('\n\n')}

WHY IT MATTERS
${whyItMatters.split('\n\n').map(p => '    ' + p.replace(/\n/g, '\n    ')).join('\n\n')}

SEE ALSO
    richardewing.io/glossary, richardewing.io/tools, exogram.ai

AUTHOR
    Richard Ewing — Product Economist & AI Capital Auditor
    https://www.richardewing.io

                        ${new Date().getFullYear()}-03-22                    ${title.toUpperCase()}(7)
`;

    useEffect(() => {
        if (!isOpen) { setDisplayedText(''); return; }
        setIsTyping(true);
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayedText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 2);
        return () => clearInterval(interval);
    }, [isOpen, fullText]);

    useEffect(() => {
        if (isOpen && terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [displayedText, isOpen]);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="group flex items-center gap-3 px-5 py-3 bg-white/60 border border-green-500/30 rounded-lg hover:border-green-500/60 hover:bg-white/80 transition-all font-mono text-sm"
            >
                <span className="text-green-500 opacity-70 group-hover:opacity-100 transition-opacity">&gt;_</span>
                <span className="text-green-400 group-hover:text-green-900 font-extrabold transition-colors">Terminal Mode</span>
                <span className="text-green-500/40 text-xs font-bold ml-2">Click to activate</span>
            </button>
        );
    }

    return (
        <div className="relative rounded-xl overflow-hidden border border-green-500/30 mb-8">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-green-900/20 border-b border-green-500/20">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-green-400/60 text-xs font-bold font-mono">richardewing.io — glossary terminal</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-green-400/60 hover:text-green-400 text-xs font-bold font-mono transition-colors">
                    [× CLOSE]
                </button>
            </div>
            {/* CRT scanline overlay */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,255,0,0.03) 1px, rgba(0,255,0,0.03) 2px)',
                    backgroundSize: '100% 2px',
                }}
            />
            {/* Terminal content */}
            <div
                ref={terminalRef}
                className="bg-white/95 p-6 font-mono text-sm font-semibold text-zinc-900 font-medium leading-relaxed max-h-[500px] overflow-y-auto whitespace-pre-wrap"
                style={{
                    textShadow: '0 0 5px rgba(0,255,0,0.3)',
                }}
            >
                {displayedText}
                {isTyping && <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse" />}
                {!isTyping && displayedText && (
                    <span className="block mt-4 text-green-500/60">
                        $ <span className="animate-pulse">▊</span>
                    </span>
                )}
            </div>
        </div>
    );
}
