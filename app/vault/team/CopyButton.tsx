'use client';

import { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';

export function CopyButton({ textToCopy }: { textToCopy: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <button 
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-4 rounded-xl border transition-all shrink-0 ${
                copied 
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-400' 
                : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500'
            }`}
        >
            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            <span className="text-sm font-bold uppercase tracking-widest hidden sm:inline">
                {copied ? 'Copied' : 'Copy'}
            </span>
        </button>
    );
}
