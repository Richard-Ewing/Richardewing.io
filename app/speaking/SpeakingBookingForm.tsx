'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function SpeakingBookingForm() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        eventType: 'Keynote Address',
        estimatedDate: '',
        notes: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setErrorMsg('');

        const formattedMessage = [
            `Organization / Event: ${formData.organization}`,
            `Event Format: ${formData.eventType}`,
            `Details & Dates: ${formData.notes || 'None provided'}`,
        ].join('\n');

        try {
            const [captureRes, leadsRes] = await Promise.allSettled([
                fetch('/api/lead-capture', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        company: formData.organization,
                        source: `Speaking & Board Briefing (${formData.eventType})`,
                        message: formattedMessage,
                    }),
                }),
                fetch('/api/leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: formData.email,
                        toolName: `Speaking Inquiry: ${formData.eventType}`,
                        score: 100,
                        answers: formData,
                    }),
                }),
            ]);

            const captureOk = captureRes.status === 'fulfilled' && captureRes.value.ok;
            const leadsOk = leadsRes.status === 'fulfilled' && leadsRes.value.ok;

            if (!captureOk && !leadsOk) {
                throw new Error('Failed to submit speaking inquiry');
            }

            setSubmitted(true);
        } catch (err) {
            console.error('Speaking inquiry error:', err);
            setErrorMsg('Could not submit your inquiry right now. Please try again or book directly on Cal.com.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center text-emerald-950">
                <div className="w-12 h-12 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    ✓
                </div>
                <h3 className="text-xl font-grotesk font-bold mb-2">Speaking Request Received</h3>
                <p className="text-sm font-medium text-emerald-900 max-w-md mx-auto mb-6">
                    Thank you. Your event details have been dispatched to Richard&apos;s advisory desk for review within 24 hours. Need to lock dates immediately? Schedule a 15-minute alignment call below.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/schedule?source=speaking"
                        className="px-6 py-2.5 bg-emerald-900 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-emerald-950 transition-colors"
                    >
                        Schedule Event Alignment Call ↗
                    </Link>
                    <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 bg-white border border-emerald-300 text-emerald-900 font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-emerald-100 transition-colors"
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
                    <label className="block text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Sarah Jenkins"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-sm"
                    />
                </div>

                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider mb-2">
                        Work Email *
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sjenkins@firm.com"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider mb-2">
                        Organization / Conference *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g., CTO Summit 2026 / PE Alliance"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-sm"
                    />
                </div>

                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider mb-2">
                        Event Format
                    </label>
                    <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-sm"
                    >
                        <option value="Keynote Address">Keynote Address ($10K-$25K)</option>
                        <option value="Board Briefing">Board / Executive Briefing ($5K-$10K)</option>
                        <option value="Podcast Guest">Podcast Interview / Media</option>
                        <option value="Executive Workshop">Executive Workshop ($15K)</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs font-mono font-bold text-zinc-900 uppercase tracking-wider mb-2">
                    Estimated Date &amp; Location / Details
                </label>
                <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide event dates, target audience size, venue/virtual details, and core focus area."
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-sm"
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
                className="w-full py-4 bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors shadow-sm disabled:opacity-50"
            >
                {submitting ? 'Submitting Speaking Inquiry...' : 'Submit Speaking Inquiry →'}
            </button>
        </form>
    );
}
