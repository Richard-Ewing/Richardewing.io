'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, CheckCircle, AlertTriangle, TrendingDown, Flame } from 'lucide-react';

interface ConversionPanelProps {
    toolName: string;
    score?: number;
    scoreType: 'pdi' | 'evse' | 'aueb' | 'aper';
    headline?: string;
    onReset: () => void;
}

// Contextual CTA based on score severity
const getContextualCTA = (scoreType: string, score?: number) => {
    if (!score && score !== 0) {
        return { urgency: 'normal', cta: 'Get Expert Analysis', color: 'cyan' };
    }

    switch (scoreType) {
        case 'pdi':
            if (score < 50) return { urgency: 'critical', cta: '⚠️ Emergency Intervention Required', color: 'red' };
            if (score < 70) return { urgency: 'warning', cta: 'Book Optimization Call', color: 'yellow' };
            return { urgency: 'success', cta: 'Scale With Confidence', color: 'cyan' };

        case 'aper':
            if (score < 200000) return { urgency: 'critical', cta: '🚨 Urgent: Book Turnaround Session', color: 'red' };
            if (score < 400000) return { urgency: 'warning', cta: 'Freeze Hiring & Get Help', color: 'yellow' };
            return { urgency: 'success', cta: 'Accelerate Your Advantage', color: 'cyan' };

        case 'aueb':
            if (score < 30) return { urgency: 'critical', cta: '📉 Fix Your Unit Economics Now', color: 'red' };
            if (score < 50) return { urgency: 'warning', cta: 'Margin Optimization Needed', color: 'yellow' };
            return { urgency: 'success', cta: 'Maximize Your Margins', color: 'cyan' };

        case 'evse':
            if (score < 50) return { urgency: 'critical', cta: '💸 Stop the Wealth Destruction', color: 'red' };
            return { urgency: 'normal', cta: 'Defend Your Valuation', color: 'cyan' };

        default:
            return { urgency: 'normal', cta: 'Get Expert Analysis', color: 'cyan' };
    }
};

const UrgencyIcon = ({ urgency }: { urgency: string }) => {
    switch (urgency) {
        case 'critical':
            return <Flame className="w-5 h-5 text-red-500 animate-pulse" />;
        case 'warning':
            return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
        case 'success':
            return <CheckCircle className="w-5 h-5 text-emerald-500" />;
        default:
            return <TrendingDown className="w-5 h-5 text-cyan-400" />;
    }
};

import { NewsletterForm } from './newsletter-form';

export function ConversionPanel({ toolName, score, scoreType, headline, onReset }: ConversionPanelProps) {
    const contextCTA = getContextualCTA(scoreType, score);

    return (
        <div className="mt-12 border-t border-white/10 pt-12 space-y-8">
            {/* Email Capture Section */}
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/80 to-zinc-900/60 rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <UrgencyIcon urgency={contextCTA.urgency} />
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                        {toolName} Results
                    </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {headline || 'Want a Board-Ready Analysis?'}
                </h3>
                <p className="text-zinc-400 mb-6">
                    Get a personalized deep-dive with actionable recommendations from a Product Economist.
                </p>

                <NewsletterForm buttonText="Get Analysis" />

                <p className="text-xs text-zinc-600 mt-3">
                    No spam. Unsubscribe anytime. Your data is secure.
                </p>
            </div>

            {/* Primary CTA */}
            <div className="text-center space-y-6">
                <div className="inline-flex flex-col items-center">
                    <p className="text-zinc-500 text-sm mb-4">Ready to fix this? Talk to a Product Economist.</p>
                    <Link
                        href="/advisory"
                        className={`group relative inline-flex items-center gap-3 px-10 py-4 font-bold uppercase tracking-widest text-sm rounded-xl transition-all transform hover:scale-105 ${contextCTA.urgency === 'critical'
                            ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]'
                            : contextCTA.urgency === 'warning'
                                ? 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_30px_rgba(234,179,8,0.4)]'
                                : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                            }`}
                    >
                        {contextCTA.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Secondary Actions */}
                <div className="flex items-center justify-center gap-6 text-sm">
                    <button
                        onClick={onReset}
                        className="text-zinc-500 hover:text-white transition-colors underline underline-offset-4"
                    >
                        ← Run New Analysis
                    </button>
                    <span className="text-zinc-700">|</span>
                    <Link
                        href="/system"
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        Explore All Tools →
                    </Link>
                </div>
            </div>

            {/* Social Proof */}
            <div className="text-center pt-8 border-t border-white/5">
                <p className="text-xs text-zinc-600 mb-3">Trusted by product leaders at</p>
                <div className="flex items-center justify-center gap-8 text-zinc-600 font-mono text-xs">
                    <span className="hover:text-zinc-400 transition-colors">Stripe</span>
                    <span className="hover:text-zinc-400 transition-colors">Figma</span>
                    <span className="hover:text-zinc-400 transition-colors">Linear</span>
                    <span className="hover:text-zinc-400 transition-colors">Notion</span>
                    <span className="hover:text-zinc-400 transition-colors">Vercel</span>
                </div>
            </div>
        </div>
    );
}

// SEO Content Section Component
interface SEOContentProps {
    title: string;
    description: string;
    howItWorks: string;
    whyItMatters: string;
    formula?: string;
}

export function SEOContent({ title, description, howItWorks, whyItMatters, formula }: SEOContentProps) {
    return (
        <section className="mt-16 border-t border-white/5 pt-12 text-zinc-500 space-y-8">
            <div>
                <h2 className="text-white font-bold text-2xl mb-4">{title}</h2>
                <p className="leading-relaxed">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3">How It Works</h3>
                    <p className="leading-relaxed">{howItWorks}</p>
                    {formula && (
                        <div className="mt-4 p-4 bg-zinc-900/50 rounded-lg border border-white/5 font-mono text-sm text-cyan-400">
                            {formula}
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="text-white font-semibold text-lg mb-3">Why It Matters</h3>
                    <p className="leading-relaxed">{whyItMatters}</p>
                </div>
            </div>

            <div className="text-xs text-zinc-700 pt-4 border-t border-white/5">
                © 2026 Richard Ewing. Product Economist. All frameworks and methodologies are proprietary.
            </div>
        </section>
    );
}
