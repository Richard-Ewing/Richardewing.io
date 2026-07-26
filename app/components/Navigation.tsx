"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ExternalLink, ShieldCheck, Award, Zap, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignInButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isSignedIn, isLoaded } = useUser();

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 backdrop-blur-lg border-b border-zinc-400 py-3 shadow-sm'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">

                        {/* Logo/Identity */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--accent-purple)] relative">
                                <Image src="/assets/headshot.jpg" alt="Richard Ewing" width={40} height={40} className="w-full h-full object-cover" priority />
                            </div>
                            <div>
                                <div className="font-semibold text-zinc-900 group-hover:text-[var(--accent-purple)] transition-colors">Richard Ewing</div>
                                <div className="text-xs font-bold text-zinc-900">AI Economist</div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-4">

                            {/* Start Here / Member Dashboard */}
                            <Link href={isSignedIn ? "/vault" : "/start-here"} className="text-emerald-900 font-extrabold hover:text-emerald-500 transition-colors relative group font-semibold">
                                ✦ {isSignedIn ? "Member Dashboard" : "Start Here"}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/assessment" className="text-purple-700 font-bold hover:text-purple-900 transition-colors relative group font-semibold">
                                AI Economics Score
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                            </Link>

                            {/* Platforms & Products Dropdown */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setProductsDropdownOpen(true)}
                                onMouseLeave={() => setProductsDropdownOpen(false)}
                            >
                                <button 
                                    className="text-zinc-900 hover:text-purple-900 transition-colors font-semibold inline-flex items-center gap-1.5 py-1 cursor-pointer"
                                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                                >
                                    <span>Platforms & Products</span>
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-purple-700' : 'text-zinc-500'}`} />
                                </button>

                                <AnimatePresence>
                                    {productsDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 w-80 mt-2 bg-white/95 backdrop-blur-xl border border-zinc-300 rounded-2xl p-3 shadow-2xl z-50 space-y-1"
                                        >
                                            {/* Exogram Product */}
                                            <Link 
                                                href="/exogram" 
                                                onClick={() => setProductsDropdownOpen(false)}
                                                className="block p-3 rounded-xl hover:bg-purple-50/70 border border-transparent hover:border-purple-200 transition-all group"
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <div className="flex items-center gap-2 font-grotesk font-bold text-zinc-950 group-hover:text-purple-900">
                                                        <ShieldCheck className="w-4 h-4 text-purple-600" />
                                                        <span>Exogram</span>
                                                    </div>
                                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-800 border border-purple-200">
                                                        Enterprise B2B
                                                    </span>
                                                </div>
                                                <p className="text-xs text-zinc-600 font-medium leading-normal">
                                                    Deterministic AI governance runtime. Prevents billing shock & shadow AI exfiltration.
                                                </p>
                                            </Link>

                                            {/* CareerWin Product */}
                                            <Link 
                                                href="/careerwin" 
                                                onClick={() => setProductsDropdownOpen(false)}
                                                className="block p-3 rounded-xl hover:bg-indigo-50/70 border border-transparent hover:border-indigo-200 transition-all group"
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <div className="flex items-center gap-2 font-grotesk font-bold text-zinc-950 group-hover:text-indigo-900">
                                                        <Award className="w-4 h-4 text-indigo-600" />
                                                        <span>CareerWin.ai</span>
                                                    </div>
                                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 border border-indigo-200">
                                                        Career Intelligence
                                                    </span>
                                                </div>
                                                <p className="text-xs text-zinc-600 font-medium leading-normal">
                                                    Role benchmarks, leveling intelligence, and compensation strategy for engineers & leaders.
                                                </p>
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="/framework" className="text-zinc-900 hover:text-zinc-900 transition-colors relative group font-medium">
                                Framework
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/tools" className="text-zinc-900 hover:text-zinc-900 transition-colors relative group font-medium">
                                Tools
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/advisory" className="text-zinc-700 hover:text-zinc-900 transition-colors relative group font-medium">
                                Advisory & Services
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/principal" className="text-zinc-700 hover:text-zinc-900 transition-colors relative group font-medium">
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            {/* Primary CTA */}
                            <Link
                                href="/assessment"
                                className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 rounded-lg font-bold text-white hover:opacity-90 transition-all shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 transform hover:-translate-y-0.5 text-xs uppercase tracking-wider"
                            >
                                Take Assessment →
                            </Link>

                            <div className="h-6 w-px bg-zinc-200 mx-1 flex-shrink-0" />

                            {/* Authentication */}
                            {isLoaded && !isSignedIn && (
                                <SignInButton mode="modal" fallbackRedirectUrl="/vault" signUpFallbackRedirectUrl="/vault">
                                    <button className="text-zinc-900 hover:text-zinc-900 transition-colors text-sm font-semibold whitespace-nowrap cursor-pointer">
                                        Sign In
                                    </button>
                                </SignInButton>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-3">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 text-zinc-800 hover:text-zinc-900 focus:outline-none cursor-pointer"
                                aria-label="Toggle Menu"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-16 z-40 bg-white/95 backdrop-blur-xl border-b border-zinc-300 p-6 lg:hidden shadow-xl max-h-[85vh] overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4">
                            <Link href="/start-here" onClick={() => setMobileMenuOpen(false)} className="text-emerald-700 font-bold text-base">
                                ✦ Start Here
                            </Link>
                            <Link href="/assessment" onClick={() => setMobileMenuOpen(false)} className="text-purple-700 font-bold text-base">
                                AI Economics Score (15-Q)
                            </Link>
                            
                            {/* Mobile Platforms & Products Group */}
                            <div className="pt-2 pb-2 border-y border-zinc-200 space-y-3">
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
                                    Platforms & Products
                                </div>
                                <Link href="/exogram" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-purple-900 font-bold text-base">
                                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                                    <span>Exogram (Enterprise B2B)</span>
                                </Link>
                                <Link href="/careerwin" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-indigo-900 font-bold text-base">
                                    <Award className="w-4 h-4 text-indigo-600" />
                                    <span>CareerWin.ai (Career Intelligence)</span>
                                </Link>
                            </div>

                            <Link href="/framework" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-medium text-base">
                                Framework
                            </Link>
                            <Link href="/tools" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-medium text-base">
                                Tools & Benchmarks
                            </Link>
                            <Link href="/advisory" onClick={() => setMobileMenuOpen(false)} className="text-zinc-900 font-medium text-base">
                                Advisory & Services
                            </Link>
                            <Link href="/principal" onClick={() => setMobileMenuOpen(false)} className="text-zinc-700 font-medium text-base">
                                About Richard Ewing
                            </Link>

                            <div className="pt-4 border-t border-zinc-200 flex flex-col gap-3">
                                <Link
                                    href="/assessment"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-center rounded-xl text-xs uppercase tracking-wider shadow-md"
                                >
                                    Take 15-Q Assessment
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
