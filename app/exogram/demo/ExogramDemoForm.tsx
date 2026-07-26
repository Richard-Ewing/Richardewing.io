'use client';

import React, { useState } from 'react';

export function ExogramDemoForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        cloudProvider: 'AWS VPC',
        monthlyTokenSpend: '$10K - $50K',
        notes: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-cyan-950 text-white border border-cyan-800 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-800 text-cyan-200 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    ✓
                </div>
                <h3 className="text-xl font-grotesk font-bold mb-2">Exogram Demo Request Received</h3>
                <p className="text-sm font-medium text-cyan-200 max-w-md mx-auto mb-6">
                    Our technical architecture team will contact you within 12 hours with sandbox deployment credentials and VPC policy-as-code documentation.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-cyan-500 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-cyan-400 transition-colors"
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
                    <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Work Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium text-sm"
                    />
                </div>

                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Corporate Email *
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="avance@enterprise.com"
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Company Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Vance Technologies"
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium text-sm"
                    />
                </div>

                <div>
                    <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                        Primary Infrastructure
                    </label>
                    <select
                        value={formData.cloudProvider}
                        onChange={(e) => setFormData({ ...formData, cloudProvider: e.target.value })}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium text-sm"
                    >
                        <option value="AWS VPC">AWS Private VPC</option>
                        <option value="GCP Private Cloud">GCP Private Cloud</option>
                        <option value="Azure VNet">Azure VNet</option>
                        <option value="Hybrid / On-Prem">Hybrid / On-Premises</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Estimated Monthly API Token Volume
                </label>
                <select
                    value={formData.monthlyTokenSpend}
                    onChange={(e) => setFormData({ ...formData, monthlyTokenSpend: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium text-sm"
                >
                    <option value="Under $10K/mo">Under $10,000 / month</option>
                    <option value="$10K - $50K">$10,000 - $50,000 / month</option>
                    <option value="$50K - $200K">$50,000 - $200,000 / month</option>
                    <option value="$200K+">$200,000+ / month (Custom Enterprise)</option>
                </select>
            </div>

            <div>
                <label className="block text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Specific Security or Policy Requirements
                </label>
                <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention custom XML boundary enforcement, latency caps, or deployment environment constraints."
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium text-sm"
                />
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-cyan-500 text-zinc-950 font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-400 transition-colors shadow-sm"
            >
                Request Live Exogram Sandbox Demo &rarr;
            </button>
        </form>
    );
}
