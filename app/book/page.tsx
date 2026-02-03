"use client";

import React from 'react';
// import { NewsletterForm } from '../components/newsletter-form'; // Assuming existing component

export default function BookPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">The Product Economist</h1>
                <p className="text-2xl text-[var(--accent-purple)] mb-8">Coming Soon</p>

                <p className="text-gray-400 mb-12 text-lg">
                    The definitive guide to R&D capital allocation and technical debt valuation.
                    Sign up to be notified when pre-orders open.
                </p>

                {/* Newsletter placeholder - user can replace with actual form component */}
                <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-white/10">
                    <p className="text-sm text-gray-500 mb-4">NOTIFY ME</p>
                    {/* <NewsletterForm /> */}
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-3 rounded bg-[var(--bg-primary)] border border-white/10 text-white"
                        />
                        <button className="px-6 py-3 rounded bg-white text-black font-bold hover:bg-gray-200">
                            Join Waitlist
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
