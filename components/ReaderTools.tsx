'use client';

import React, { useState, useEffect } from 'react';
import { Bookmark, Share2, Check, ArrowUp, Type, Sparkles } from 'lucide-react';

interface ReaderToolsProps {
  takeaway?: string;
}

export default function ReaderTools({
  takeaway = "Deterministic verification gates and branch worktree isolation prevent context rot in autonomous agent systems."
}: ReaderToolsProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setShowBackToTop(currentScroll > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyTakeaway = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(takeaway);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2">
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-300 hover:text-zinc-100 hover:border-zinc-500 shadow-xl backdrop-blur-md transition-all active:scale-95"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          type="button"
          onClick={copyTakeaway}
          className="px-3 py-2 rounded-xl bg-zinc-900/90 border border-zinc-700 hover:border-emerald-500/60 text-zinc-200 text-xs font-mono shadow-xl backdrop-blur-md flex items-center gap-2 transition-all active:scale-95"
          title="Copy Key Takeaway"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Takeaway</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
