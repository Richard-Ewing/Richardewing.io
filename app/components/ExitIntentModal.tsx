'use client';

import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Only run on browser
    if (typeof window === 'undefined') return;

    const hasDismissed = localStorage.getItem('exit_intent_dismissed');
    if (hasDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('exit_intent_dismissed', 'true');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('exit_intent_dismissed', 'true');
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-700 text-white rounded-3xl p-8 shadow-2xl overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full font-mono text-xs uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Free Executive Resource</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-grotesk text-white mb-3 leading-tight">
              Before You Go: Download the Executive AI Cost Control Checklist
            </h3>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
              A 10-point diagnostic checklist used by financial leaders to spot unmonitored AI overspend, rogue software tools, and unbudgeted cloud invoices in 15 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your executive email (e.g. cfo@company.com)"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-xl text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Send Me the Executive Checklist
              </button>
            </form>

            <button
              type="button"
              onClick={handleDismiss}
              className="w-full text-center text-xs text-zinc-500 hover:text-zinc-400 mt-4 transition-colors font-mono"
            >
              No thanks, I will evaluate AI costs on my own &rarr;
            </button>
          </div>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-grotesk">Checklist Sent to Your Inbox</h3>
            <p className="text-sm text-zinc-300 font-medium">
              We&apos;ve dispatched the Executive AI Audit Checklist to <span className="text-cyan-400 font-mono">{email}</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
