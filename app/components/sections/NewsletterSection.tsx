"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from '@formspree/react';

const NewsletterSection = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [email, setEmail] = useState('');
    const [validationError, setValidationError] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const [state, handleFormspreeSubmit] = useForm('xzddbpwy');
    const router = useRouter();

    // Redirect to checklist page on successful submission
    useEffect(() => {
        if (state.succeeded) {
            setTimeout(() => {
                router.push('/checklist');
            }, 1500);
        }
    }, [state.succeeded, router]);

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
        formData.append('source', 'Newsletter Section');
        handleFormspreeSubmit(formData);

        try {
            fetch('/api/beehiiv', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'Newsletter Section' }),
            }).catch(() => {});
        } catch {}
    };

    return (
        <section ref={ref} className={`py-24 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto">

                <div className="p-12 rounded-3xl bg-white border border-zinc-400 text-center relative overflow-hidden shadow-lg shrink-0">

                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:20px_20px]" />

                    <div className="relative z-10">
                        <span className="text-[var(--accent-purple)] font-bold tracking-widest text-sm font-semibold uppercase mb-4 block">Executive Briefings</span>

                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">The AI Economist Newsletter</h2>

                        {state.succeeded ? (
                            <div className="py-4">
                                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-emerald-900 font-extrabold" />
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Redirecting to Checklist ✓</h3>
                                <p className="text-zinc-900">Loading your R&D Audit Checklist...</p>
                            </div>
                        ) : (
                            <>
                                <p className="text-zinc-950 mb-8 max-w-xl mx-auto">
                                    Subscribe and get the <strong className="text-zinc-900">R&D Audit Checklist</strong> — The 15 questions I ask in every $7,500 engagement.
                                </p>

                                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); setValidationError(''); }}
                                        placeholder="Enter your email"
                                        className="flex-grow px-6 py-4 rounded-lg bg-zinc-50 border border-zinc-500 text-zinc-900 focus:outline-none focus:border-purple-500 transition-colors"
                                        required
                                        disabled={state.submitting || isValidating}
                                    />
                                    <button
                                        type="submit"
                                        disabled={state.submitting || isValidating}
                                        className="px-8 py-4 rounded-lg bg-purple-700 text-white font-bold hover:bg-purple-600 transition-colors whitespace-nowrap disabled:opacity-70 flex items-center justify-center gap-2"
                                    >
                                        {(state.submitting || isValidating) ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Get Checklist <ArrowRight className="w-3 h-3" /></>}
                                    </button>
                                </form>

                                {validationError && (
                                    <div className="max-w-md mx-auto mt-3 flex items-center gap-2 p-2 bg-red-50 border border-red-200 rounded-lg text-red-900 font-extrabold text-xs">
                                        <AlertCircle className="w-3 h-3" /><span>{validationError}</span>
                                    </div>
                                )}
                            </>
                        )}

                        <p className="mt-8 text-sm font-semibold text-zinc-900 font-medium">
                            Monthly. No fluff. 2,000+ executives read before they decide.
                        </p>

                        <div className="mt-6 border-t border-zinc-400 pt-6">
                            <Link href="/tools" className="text-xs font-bold text-zinc-900 font-bold hover:text-zinc-900 uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group">
                                Or try my free tools
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NewsletterSection;
