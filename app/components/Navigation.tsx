"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignInButton, useUser, useClerk } from '@clerk/nextjs';
import Image from 'next/image';

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                            {/* Using a placeholder avatar if image not available, or the actual image path */}
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--accent-purple)] relative">
                                <Image src="/assets/headshot.jpg" alt="Richard Ewing" width={40} height={40} className="w-full h-full object-cover" priority />
                            </div>
                            <div>
                                <div className="font-semibold text-zinc-900 group-hover:text-[var(--accent-purple)] transition-colors">Richard Ewing</div>
                                <div className="text-xs font-bold text-zinc-900 font-bold">Product Economist</div>
                            </div>
                        </Link>

                        {/* Desktop Nav — Simplified: 3 dropdowns + Start Here */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">

                            {/* Start Here / Member Dashboard — the golden path for visitors */}
                            <Link href={isSignedIn ? "/vault" : "/doctrine"} className="text-emerald-900 font-extrabold hover:text-emerald-500 transition-colors relative group font-semibold">
                                ✦ {isSignedIn ? "Member Dashboard" : "Start Here"}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
                            </Link>
                            <Dropdown label="Library & Docs">
                                <DropdownItem href="/articles" description="Syndicated work in CIO, Built In, etc">Published Articles</DropdownItem>
                                <DropdownItem href="/vault/curriculum/tracks" description="400+ modules and playbooks">Complete Curriculum</DropdownItem>
                                <DropdownItem href="/glossary" description="500+ engineering economics terms">Glossary</DropdownItem>
                                <DropdownItem href="/answers" description="Persona-specific knowledge matrix">Answers Hub</DropdownItem>
                                <DropdownItem href="/blog" description="105 articles on engineering economics">Blog</DropdownItem>
                                <DropdownItem href="/resources/ai-courses" description="Free AI & engineering courses">AI Courses</DropdownItem>
                            </Dropdown>

                            <Dropdown label="Careers & Transitions">
                                <DropdownItem href="/careers" description="The Career Pathfinder Hub">Career Compass</DropdownItem>
                                <DropdownItem href="/careers/vp-engineering-economics" description="The Metric Fiduciary">VP of Engineering Economics</DropdownItem>
                                <DropdownItem href="/careers/ai-product-economist" description="The Value Extractor">AI Product Economist</DropdownItem>
                                <DropdownItem href="/careers/platform-edge-engineer" description="The Scaler">Platform Engineer</DropdownItem>
                            </Dropdown>

                            <Dropdown label="Enterprise Diagnostics">
                                <Link
                                    href="/tools/board-room"
                                    className="block p-5 bg-gradient-to-br from-indigo-50 to-white border-b border-indigo-100 hover:from-indigo-100 transition-all font-semibold"
                                >
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]" />
                                        <span className="text-zinc-900 text-base">Executive Board Room</span>
                                    </div>
                                    <p className="text-[10.5px] text-indigo-900 font-bold font-mono tracking-widest uppercase">Board-Level Telemetry Hub</p>
                                </Link>
                                
                                <div className="px-5 py-2 text-xs font-bold font-medium font-bold tracking-widest text-[var(--accent-purple)] uppercase mt-2">Flagship Engines</div>
                                <DropdownItem href="/benchmark/ai-capital-2026" description="FTE & CapEx/OpEx Threshold Data">2026 AI Capital Benchmark</DropdownItem>
                                <DropdownItem href="/tools/copilot-roi" description="Calculate Net Revenue Retention">Copilot ROI Forecaster</DropdownItem>
                                <DropdownItem href="/tools/pdi" description="Calculate your Technical Insolvency Date">Tech Debt Forecaster (PDI)</DropdownItem>
                                <DropdownItem href="/tools/aueb" description="Model AI unit margin collapse">AI Margin Calculator (AUEB)</DropdownItem>
                                <DropdownItem href="/compare" description="LLM capability & cost matrix">Model Comparison Matrix</DropdownItem>
                                <DropdownItem href="/tools/ai-roi-timeline" description="Hardware vs API investment horizons">AI CapEx Break-Even</DropdownItem>
                                
                                <div className="mt-2 p-2 relative z-10 w-full bg-zinc-50 pb-3">
                                    <Link href="/tools" className="block text-center flex items-center justify-center gap-2 border border-zinc-400 hover:border-zinc-500 bg-white hover:bg-zinc-50 rounded-lg py-2.5 mx-3 transition-colors">
                                        <span className="text-xs font-bold text-zinc-950">Explore All Diagnostics</span>
                                        <span className="text-xs font-bold text-zinc-900 font-bold">→</span>
                                    </Link>
                                </div>
                            </Dropdown>
                            
                            <Link href="/tools/audit-interview" className="text-zinc-900 hover:text-zinc-900 transition-colors relative group font-medium">
                                Audit Interview
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-cyan)] transition-all group-hover:w-full" />
                            </Link>

                            <Dropdown label="Advisory">
                                <DropdownItem href="/advisory" description="Enterprise taskforces & forensics">Executive Advisory</DropdownItem>
                                <DropdownItem href="/case-studies" description="Platform telemetry & outcomes">Case Studies</DropdownItem>
                                <DropdownItem href="/principal" description="About Richard Ewing">The Principal</DropdownItem>
                            </Dropdown>

                            {/* Primary CTA */}
                            <Link
                                href="/advisory"
                                className="bg-[var(--accent-crimson)] px-5 py-2.5 rounded-lg font-semibold text-zinc-950 font-semibold hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(255,68,68,0.3)] hover:shadow-[0_0_25px_rgba(255,68,68,0.5)] transform hover:-translate-y-0.5"
                            >
                                Book Audit →
                            </Link>

                            <div className="h-6 w-px bg-zinc-200 mx-1 flex-shrink-0" />

                            {/* Authentication */}
                            {isLoaded && !isSignedIn && (
                                <SignInButton mode="modal" fallbackRedirectUrl="/vault" signUpFallbackRedirectUrl="/vault">
                                    <button className="text-zinc-900 hover:text-zinc-900 transition-colors text-sm font-semibold whitespace-nowrap">
                                        Sign In
                                    </button>
                                </SignInButton>
                            )}
                            {isLoaded && isSignedIn && (
                                <div className="flex items-center justify-center -ml-2">
                                    <UserDropdown />
                                </div>
                            )}

                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden text-zinc-900 p-2"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu onClose={() => setMobileMenuOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
};

// Dropdown Component
const Dropdown = ({ label, children }: { label: React.ReactNode, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-1 text-zinc-900 hover:text-zinc-900 py-2 group-hover:text-[var(--accent-purple)] transition-colors">
                {label}
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-64 pt-2"
                    >
                        <div className="bg-white border border-zinc-400 rounded-xl overflow-hidden shadow-xl shrink-0">
                            <div className="py-2">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const DropdownItem = ({ href, children, description }: { href: string, children: React.ReactNode, description?: string }) => {
    return (
        <Link
            href={href}
            className="block px-4 py-3 text-sm font-semibold text-zinc-900 font-medium hover:text-zinc-900 hover:bg-zinc-50 transition-colors border-l-2 border-transparent hover:border-[var(--accent-purple)]"
        >
            <span className="block">{children}</span>
            {description && <span className="block text-xs font-bold font-medium text-zinc-900 mt-0.5">{description}</span>}
        </Link>
    );
};

// Mobile Menu Component
const MobileMenu = ({ onClose }: { onClose: () => void }) => {
    const { isSignedIn, isLoaded } = useUser();
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[var(--bg-primary)]/98 backdrop-blur-xl"
        >
            <div className="flex flex-col h-full overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-zinc-400">
                    <div className="font-semibold text-zinc-900">Menu</div>
                    <button onClick={onClose} className="p-2 text-zinc-900 hover:text-[var(--accent-crimson)]" aria-label="Close menu">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 space-y-8 pb-20">

                    {/* Start Here - Hero CTA */}
                    <Link
                        href="/doctrine"
                        onClick={onClose}
                        className="block w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-zinc-950 font-semibold text-center font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
                    >
                        ✦ START HERE
                    </Link>

                    <div className="w-full h-px bg-zinc-200" />

                    {/* Learn Section */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-cyan-900 font-extrabold uppercase tracking-widest pl-2">Curriculum & Library</h3>
                        <MobileLink href="/articles" onClick={onClose}>Published Articles</MobileLink>
                        <MobileLink href="/vault/curriculum/tracks" onClick={onClose}>Complete Curriculum</MobileLink>
                        <MobileLink href="/glossary" onClick={onClose}>Glossary (420+ Terms)</MobileLink>
                        <MobileLink href="/answers" onClick={onClose}>Answer Hub (Matrix)</MobileLink>
                        <MobileLink href="/blog" onClick={onClose}>Blog (105 Articles)</MobileLink>
                        <MobileLink href="/resources/ai-courses" onClick={onClose}>AI Courses (Free)</MobileLink>
                    </div>

                    {/* Careers Section */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-emerald-900 font-extrabold uppercase tracking-widest pl-2 mt-4 mb-2">Careers & Transitions</h3>
                        <MobileLink href="/careers" onClick={onClose}>Career Pathfinder Hub</MobileLink>
                    </div>

                    {/* Tools Section */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-violet-900 font-extrabold uppercase tracking-widest pl-2 mb-4">Enterprise Diagnostics</h3>
                        
                        <Link
                            href="/tools/board-room"
                            onClick={onClose}
                            className={`block px-5 py-4 rounded-xl bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 text-zinc-900 hover:from-indigo-100 transition-colors font-semibold shadow-sm mb-6`}
                        >
                            <div className="flex items-center gap-3 mb-1">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]" />
                                <span>Executive Board Room</span>
                            </div>
                            <span className="text-xs font-bold font-medium text-indigo-900 font-bold font-mono tracking-widest uppercase block mt-1">Board-Level Telemetry Hub</span>
                        </Link>

                        <MobileLink href="/benchmark/ai-capital-2026" onClick={onClose} className="font-bold text-cyan-900 font-extrabold">2026 AI Capital Benchmark</MobileLink>
                        <MobileLink href="/tools/copilot-roi" onClick={onClose}>Copilot ROI Forecaster</MobileLink>
                        <MobileLink href="/tools/pdi" onClick={onClose}>Tech Debt Forecaster (PDI)</MobileLink>
                        <MobileLink href="/tools/aueb" onClick={onClose}>AI Margin Calculator (AUEB)</MobileLink>
                        <MobileLink href="/compare" onClick={onClose}>Model Comparison Matrix</MobileLink>
                        <MobileLink href="/tools/ai-roi-timeline" onClick={onClose}>AI CapEx Break-Even</MobileLink>
                        
                        <Link href="/tools" onClick={onClose} className="block mt-4 text-center border border-zinc-400 bg-white rounded-lg py-3 hover:bg-zinc-50 transition-colors">
                            <span className="text-sm font-semibold text-zinc-900">Explore All 12+ Diagnostics →</span>
                        </Link>
                    </div>

                    {/* Advisory Section */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-amber-600 uppercase tracking-widest pl-2">Advisory</h3>
                        <MobileLink href="/advisory" onClick={onClose}>Executive Advisory</MobileLink>
                        <MobileLink href="/case-studies" onClick={onClose}>Case Studies</MobileLink>
                        <MobileLink href="/principal" onClick={onClose}>The Principal</MobileLink>
                    </div>

                    <div className="w-full h-px bg-zinc-200" />

                    <Link
                        href="/advisory"
                        onClick={onClose}
                        className="block w-full bg-[var(--accent-crimson)] text-zinc-950 font-semibold text-center font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity mb-4"
                    >
                        BOOK AN AUDIT
                    </Link>

                    {isLoaded && !isSignedIn && (
                        <SignInButton mode="modal" fallbackRedirectUrl="/vault" signUpFallbackRedirectUrl="/vault">
                            <button onClick={onClose} className="block w-full bg-zinc-100 border border-zinc-400 text-zinc-900 text-center font-bold py-4 rounded-xl text-lg hover:bg-zinc-200 transition-colors">
                                SIGN IN
                            </button>
                        </SignInButton>
                    )}
                    
                    {isLoaded && isSignedIn && (
                        <Link 
                            href="/vault"
                            onClick={onClose}
                            className="block w-full bg-cyan-50 border border-cyan-200 text-cyan-900 font-extrabold text-center font-bold py-4 rounded-xl text-lg hover:bg-cyan-100 transition-colors"
                        >
                            ACCESS VAULT
                        </Link>
                    )}

                </div>
            </div>
        </motion.div>
    );
};

const MobileSection = ({ title, href, children, onClick }: { title: string, href: string, children: React.ReactNode, onClick: () => void }) => {
    return (
        <Link href={href} onClick={onClick} className="block group">
            <h2 className="text-2xl font-bold text-zinc-900 group-hover:text-[var(--accent-purple)] transition-colors mb-1">{title}</h2>
            {children}
        </Link>
    );
};

const MobileLink = ({ href, children, onClick, className = "" }: { href: string, children: React.ReactNode, onClick: () => void, className?: string }) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block px-4 py-3 rounded-lg bg-white text-zinc-900 hover:text-zinc-900 hover:bg-zinc-50 transition-colors ${className}`}
        >
            {children}
        </Link>
    );
};

const UserDropdown = () => {
    const { user } = useUser();
    const { signOut } = useClerk();
    
    if (!user) return null;

    const initials = user.firstName && user.lastName 
        ? `${user.firstName[0]}${user.lastName[0]}` 
        : user.primaryEmailAddress?.emailAddress?.substring(0, 1).toUpperCase() || 'U';

    return (
        <Dropdown label={
            <div className="w-8 h-8 rounded-full bg-violet-600 text-zinc-950 font-semibold flex items-center justify-center font-bold text-sm font-semibold border border-violet-400/50 hover:border-violet-400 transition-colors shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                {initials}
            </div>
        }>
            <div className="px-4 py-3 border-b border-zinc-400 mb-2">
                <p className="text-sm font-semibold font-medium text-zinc-900">{user.fullName || 'User'}</p>
                <p className="text-xs font-bold text-zinc-950 truncate">{user.primaryEmailAddress?.emailAddress}</p>
            </div>
            <DropdownItem href="/vault" description="Your intelligence dashboard">My Vault</DropdownItem>
            <DropdownItem href="/system" description="All enterprise tools">Tools Library</DropdownItem>
            <button 
                onClick={() => signOut()} 
                className="w-full text-left block px-4 py-3 text-sm font-semibold text-zinc-900 font-medium hover:text-red-900 font-extrabold hover:bg-zinc-50 transition-colors mt-2 border-t border-zinc-400"
            >
                Sign Out
            </button>
        </Dropdown>
    );
};

export default Navigation;
