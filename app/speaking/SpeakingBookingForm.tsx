'use client';

import React, { useState } from 'react';

export function SpeakingBookingForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        eventType: 'Keynote Address',
        estimatedDate: '',
        notes: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center text-emerald-950">
                <div className="w-12 h-12 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    ✓
                </div>
                <h3 className="text-xl font-grotesk font-bold mb-2">Speaking Request Received</h3>
                <p className="text-sm font-medium text-emerald-900 max-w-md mx-auto mb-6">
                    Thank you. We will review your event details, availability, and speaker requirements within 24 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-800 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-emerald-900 transition-colors"
                >
                    Submit Another Request
                </button>
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
                    Estimated Date & Location / Details
                </label>
                <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide event dates, target audience size, venue/virtual details, and core focus area."
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium text-sm"
                />
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-zinc-950 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors shadow-sm"
            >
                Submit Speaking Inquiry &rarr;
            </button>
        </form>
    );
}
