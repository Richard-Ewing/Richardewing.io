'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, Gift, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation';

export default function ExitIntentPopup() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [email, setEmail] = useState('');
    const [validationError, setValidationError] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const [state, handleFormspreeSubmit] = useForm('xzddbpwy');
    const router = useRouter();

    // Redirect to checklist page on successful submission
    useEffect(() => {
        if (state.succeeded) {
            setTimeout(() => {
                setShow(false);
                router.push('/checklist');
            }, 1000);
        }
    }, [state.succeeded, router]);

    const triggerPopup = useCallback(() => {
        if (dismissed) return;
        const seen = sessionStorage.getItem('exit-intent-shown');
        if (seen) return;
        if (window.location.pathname.includes('/advisory')) return;
        sessionStorage.setItem('exit-intent-shown', 'true');
        setShow(true);
    }, [dismissed]);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) triggerPopup();
        };
        document.addEventListener('mouseleave', handleMouseLeave);
        const timer = setTimeout(() => {
            document.addEventListener('mouseleave', handleMouseLeave);
        }, 5000);
        return () => { clearTimeout(timer); document.removeEventListener('mouseleave', handleMouseLeave); };
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
            <div className="absolute inset-0 bg-zinc-100 backdrop-blur-sm" />
            <div className="relative w-full max-w-lg bg-zinc-50 border border-zinc-400 rounded-2xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
                <button onClick={handleDismiss} className="absolute top-4 right-4 text-zinc-800 hover:text-zinc-900 transition-colors" aria-label="Close popup">
                    <X className="w-5 h-5" />
                </button>

                {state.succeeded ? (
                    <div className="text-center py-4">
                        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Gift className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-950 mb-2">Redirecting to Checklist ✓</h3>
                        <p className="text-zinc-800">Loading your R&D Audit Checklist...</p>
                    </div>
                ) : (
                    <>
                        <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <Gift className="w-7 h-7 text-purple-400" />
                        </div>

                        <h3 className="text-2xl font-bold text-zinc-950 text-center mb-2">Wait — Free R&D Audit Checklist</h3>
                        <p className="text-zinc-900 text-center text-sm mb-4">
                            The same <span className="text-zinc-950 font-semibold">39 questions across 6 domains</span> used in every <span className="text-zinc-950 font-semibold">$7,500 engagement</span>.
                        </p>

                        {/* What You Get */}
                        <div className="bg-white/[0.03] border border-zinc-400 rounded-xl p-4 mb-5 space-y-2">
                            <div className="flex items-start gap-2 text-xs text-zinc-900 font-bold">
                                <span className="text-emerald-400 mt-0.5">✓</span> Traffic-light scoring rubrics for every question
                            </div>
                            <div className="flex items-start gap-2 text-xs text-zinc-900 font-bold">
                                <span className="text-emerald-400 mt-0.5">✓</span> Actionable remediation steps — not just diagnosis
                            </div>
                            <div className="flex items-start gap-2 text-xs text-zinc-900 font-bold">
                                <span className="text-emerald-400 mt-0.5">✓</span> Benchmark thresholds so you know where you stand
                            </div>
                        </div>

                        {/* Domain Preview */}
                        <div className="flex flex-wrap gap-1.5 mb-5 justify-center">
                            {['⚡ Velocity', '🏗️ Tech Debt', '🤖 AI Economics', '💰 Revenue', '👥 People', '📊 Strategic'].map((d, i) => (
                                <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 border border-zinc-400 text-zinc-900 font-mono">{d}</span>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="email" value={email} onChange={(e) => { setEmail(e.target.value); setValidationError(''); }}
                                placeholder="name@company.com" required disabled={state.submitting || isValidating}
                                className="w-full px-4 py-3 bg-white/50 border border-zinc-400 rounded-xl text-zinc-950 placeholder:text-zinc-900 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all font-mono text-sm"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-zinc-900 font-bold" />

                            {validationError && (
                                <div className="flex items-center gap-2 p-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs">
                                    <AlertCircle className="w-3 h-3" /><span>{validationError}</span>
                                </div>
                            )}

                            <button
                                type="submit" disabled={state.submitting || isValidating}
                                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-zinc-950 font-semibold font-bold uppercase tracking-widest text-xs rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {(state.submitting || isValidating) ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Get Free Checklist <ArrowRight className="w-3 h-3" /></>}
                            </button>
                        </form>

                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-400">
                            <p className="text-xs font-medium text-zinc-950">Zero spam · Used by 2,000+ executives</p>
                            <a href="/tools" className="text-xs font-medium text-zinc-800 hover:text-cyan-400 transition-colors">
                                Or try free tools →
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
