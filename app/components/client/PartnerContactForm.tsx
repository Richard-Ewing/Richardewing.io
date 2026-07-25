'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function PartnerContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [partnershipType, setPartnershipType] = useState('Newsletter Sponsorship');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/lead-capture', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    company,
                    partnershipType,
                    message: `[Partnership Type: ${partnershipType}] ${message}`
                })
            });
            
            if (response.ok) {
                setSubmitted(true);
            } else {
                setSubmitted(true);
            }
        } catch (error) {
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm text-center flex flex-col items-center justify-center min-h-[400px] animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600 animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-2 font-grotesk">Inquiry Received</h3>
                <p className="text-sm text-zinc-600 max-w-xs leading-relaxed font-semibold">
                    Thank you. Richard will review your details and reach out within 24 hours to coordinate.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm space-y-4">
            <div>
                <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-1">Inquire About Partnership</h3>
                <p className="text-xs text-zinc-500 font-semibold mb-6">Fill out this secure form to align on sponsorships, speaking, or advisory.</p>
            </div>
            
            <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-widest mb-1.5 font-mono">Full Name</label>
                <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="Jane Doe"
                />
            </div>
            
            <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-widest mb-1.5 font-mono">Work Email</label>
                <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="jane@company.com"
                />
            </div>
            
            <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-widest mb-1.5 font-mono">Company Name</label>
                <input 
                    type="text" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="Acme Corp"
                />
            </div>

            <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-widest mb-1.5 font-mono">Partnership Type</label>
                <select 
                    value={partnershipType}
                    onChange={(e) => setPartnershipType(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                >
                    <option value="Newsletter Sponsorship">Newsletter Sponsorship</option>
                    <option value="Webinar">Webinar Collaboration</option>
                    <option value="Speaking">Speaking Engagement</option>
                    <option value="Product Review">Product Review</option>
                    <option value="Advisory">Advisory Engagement</option>
                    <option value="Other">Other Collaboration</option>
                </select>
            </div>
            
            <div>
                <label className="block text-xs font-bold text-zinc-800 uppercase tracking-widest mb-1.5 font-mono">Details / Context</label>
                <textarea 
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-xl text-xs font-semibold placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    placeholder="Describe the collaboration timeline, audience size, or specific advisory requirements..."
                />
            </div>
            
            <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-all shadow-md disabled:opacity-50"
            >
                {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
        </form>
    );
}
