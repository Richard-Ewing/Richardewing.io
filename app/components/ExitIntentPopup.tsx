'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Gift, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function ExitIntentPopup() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [email, setEmail] = useState('');
    const [validationError, setValidationError] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const [state, handleFormspreeSubmit] = useForm('xzddbpwy');

    const triggerPopup = useCallback(() => {
        if (dismissed) return;
        const seen = sessionStorage.getItem('exit-intent-shown');
        if (seen) return;
        // Don't show on advisory page (that's the conversion page)
        if (window.location.pathname.includes('/advisory')) return;
        sessionStorage.setItem('exit-intent-shown', 'true');
        setShow(true);
    }, [dismissed]);

    useEffect(() => {
        // Desktop: mouse leaves viewport
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) triggerPopup();
        };
        document.addEventListener('mouseleave', handleMouseLeave);

        // Delay before enabling (don't trigger on immediate bounces)
        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
        }, 5000);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [triggerPopup]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setValidationError('');
        if (!email) { setValidationError('Please enter your email.'); return; }

        setIsValidating(true);
        try {
            const res = await fetch('/api/validate-email', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (!data.valid) { setValidationError(data.reason || 'Please enter a valid email.'); setIsValidating(false); return; }
        } catch { /* allow if API fails */ }
        setIsValidating(false);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('source', 'Exit Intent Popup');
        handleFormspreeSubmit(formData);

        try {
            fetch('/api/beehiiv', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'Exit Intent Popup' }),
            }).catch(() => {});
        } catch {}
    };

    const handleDismiss = () => { setShow(false); setDismissed(true); };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={handleDismiss}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={handleDismiss} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors" aria-label="Close popup">
                    <X className="w-5 h-5" />
                </button>

                {state.succeeded ? (
                    <div className="text-center py-4">
                        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Gift className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Check Your Inbox ✓</h3>
                        <p className="text-zinc-400">Your R&D Audit Checklist is on the way.</p>
                    </div>
                ) : (
                    <>
                        <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Gift className="w-7 h-7 text-purple-400" />
                        </div>

                        <h3 className="text-2xl font-bold text-white text-center mb-2">Wait — Free R&D Audit Checklist</h3>
                        <p className="text-zinc-400 text-center text-sm mb-6">
                            The 15 questions I ask in every <span className="text-white font-semibold">$7,500 engagement</span>. Yours free.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="email" value={email} onChange={(e) => { setEmail(e.target.value); setValidationError(''); }}
                                placeholder="name@company.com" required disabled={state.submitting || isValidating}
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500" />

                            {validationError && (
                                <div className="flex items-center gap-2 p-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs">
                                    <AlertCircle className="w-3 h-3" /><span>{validationError}</span>
                                </div>
                            )}

                            <button
                                type="submit" disabled={state.submitting || isValidating}
                                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {(state.submitting || isValidating) ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Get Checklist <ArrowRight className="w-3 h-3" /></>}
                            </button>
                        </form>

                        <p className="text-[10px] text-zinc-600 text-center mt-4">Zero spam. Used by 2,000+ executives.</p>
                    </>
                )}
            </div>
        </div>
    );
}
