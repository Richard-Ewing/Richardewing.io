'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function ExogramDemoForm() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        cloudProvider: 'AWS VPC',
        monthlyTokenSpend: '$10K - $50K',
        notes: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setErrorMsg('');

        const formattedMessage = [
            `Primary Infrastructure: ${formData.cloudProvider}`,
            `Estimated Monthly Token Volume: ${formData.monthlyTokenSpend}`,
            `Security / Policy Requirements: ${formData.notes || 'None specified'}`,
        ].join('\n');

        try {
            const [captureRes, leadsRes] = await Promise.allSettled([
                fetch('/api/lead-capture', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        company: formData.company,
                        source: 'Exogram Live Sandbox Demo',
                        message: formattedMessage,
                    }),
                }),
                fetch('/api/leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: formData.email,
                        toolName: 'Exogram Live Sandbox Demo',
                        score: 100,
                        answers: formData,
                    }),
                }),
            ]);

            const captureOk = captureRes.status === 'fulfilled' && captureRes.value.ok;
            const leadsOk = leadsRes.status === 'fulfilled' && leadsRes.value.ok;

            if (!captureOk && !leadsOk) {
                throw new Error('Failed to submit demo request');
            }

            setSubmitted(true);
        } catch (err) {
            console.error('Exogram demo submission error:', err);
            setErrorMsg('Unable to submit your request right now. Please try again or schedule directly on Cal.com.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-cyan-50 text-cyan-950 border border-cyan-300 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-700 text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    ✓
                </div>
                <h3 className="text-xl font-grotesk font-bold mb-2 text-cyan-950">Exogram Demo Request Received</h3>
                <p className="text-sm font-medium text-cyan-800 max-w-md mx-auto mb-6">
                    Our technical architecture team has logged your VPC parameters and will contact you within 12 hours with sandbox deployment credentials. Want to skip the queue? Book your live architectural briefing directly below.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/schedule?source=exogram-demo"
                        className="px-6 py-2.5 bg-cyan-900 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-cyan-950 transition-colors shadow-sm"
                    >
                        Fast-Track: Book Live Briefing on Cal.com ↗
                    </Link>
                    <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 bg-white border border-cyan-300 text-cyan-900 font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-cyan-100 transition-colors"
                    >
                        Submit Another Request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider mb-2">
                        Work Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 font-medium text-sm shadow-sm"
                    />
                </div>

                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider mb-2">
                        Corporate Email *
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="avance@enterprise.com"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 font-medium text-sm shadow-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider mb-2">
                        Company Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Vance Technologies"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 font-medium text-sm shadow-sm"
                    />
                </div>

                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider mb-2">
                        Primary Infrastructure
                    </label>
                    <select
                        value={formData.cloudProvider}
                        onChange={(e) => setFormData({ ...formData, cloudProvider: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-cyan-600 font-medium text-sm shadow-sm"
                    >
                        <option value="AWS VPC">AWS Private VPC</option>
                        <option value="GCP Private Cloud">GCP Private Cloud</option>
                        <option value="Azure VNet">Azure VNet</option>
                        <option value="Hybrid / On-Prem">Hybrid / On-Premises</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Estimated Monthly API Token Volume
                </label>
                <select
                    value={formData.monthlyTokenSpend}
                    onChange={(e) => setFormData({ ...formData, monthlyTokenSpend: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-cyan-600 font-medium text-sm shadow-sm"
                >
                    <option value="Under $10K/mo">Under $10,000 / month</option>
                    <option value="$10K - $50K">$10,000 - $50,000 / month</option>
                    <option value="$50K - $200K">$50,000 - $200,000 / month</option>
                    <option value="$200K+">$200,000+ / month (Custom Enterprise)</option>
                </select>
            </div>

            <div>
                <label className="block text-xs font-mono font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Specific Security or Policy Requirements
                </label>
                <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention custom XML boundary enforcement, latency caps, or deployment environment constraints."
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 font-medium text-sm shadow-sm"
                />
            </div>

            {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 font-medium">
                    {errorMsg}
                </div>
            )}

            <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-cyan-700 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-800 transition-colors shadow-sm disabled:opacity-50"
            >
                {submitting ? 'Submitting Demo Request...' : 'Request Live Exogram Sandbox Demo →'}
            </button>
        </form>
    );
}
