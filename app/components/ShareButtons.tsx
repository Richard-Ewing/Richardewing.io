'use client';

import { Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
    url: string;
    title: string;
    description?: string;
}

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const fullUrl = `https://www.richardewing.io${url}`;
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(fullUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = fullUrl;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-900 font-bold font-mono uppercase tracking-wider">Share:</span>
            <a
                href={linkedInShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-zinc-400 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group"
                title="Share on LinkedIn"
            >
                <Linkedin className="w-4 h-4 text-zinc-900 group-hover:text-blue-800 font-semibold transition-colors" />
            </a>
            <button
                onClick={handleCopy}
                className="p-2 bg-white/5 border border-zinc-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all group"
                title="Copy link"
            >
                {copied ? (
                    <Check className="w-4 h-4 text-emerald-800 font-semibold" />
                ) : (
                    <LinkIcon className="w-4 h-4 text-zinc-900 group-hover:text-cyan-800 font-semibold transition-colors" />
                )}
            </button>
        </div>
    );
}
