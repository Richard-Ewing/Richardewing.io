"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignInButton, useUser, useClerk } from '@clerk/nextjs';

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
                    ? 'bg-[var(--bg-primary)]/90 backdrop-blur-lg border-b border-white/10 py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">

                        {/* Logo/Identity */}
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* Using a placeholder avatar if image not available, or the actual image path */}
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--accent-purple)] relative">
                                { }
                                <img src="/assets/headshot.jpg" alt="Richard Ewing" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-semibold text-white group-hover:text-[var(--accent-purple)] transition-colors">Richard Ewing</div>
                                <div className="text-xs text-gray-400">Product Economist</div>
                            </div>
                        </Link>

                        {/* Desktop Nav — Simplified: 3 dropdowns + Start Here */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">

                            {/* Start Here / Member Dashboard — the golden path for visitors */}
                            <Link href={isSignedIn ? "/vault" : "/doctrine"} className="text-emerald-400 hover:text-emerald-300 transition-colors relative group font-semibold">
                                ✦ {isSignedIn ? "Member Dashboard" : "Start Here"}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
                            </Link>
                            <Dropdown label="Library & Docs">
                                <DropdownItem href="/vault/curriculum/tracks" description="400+ modules and playbooks">Complete Curriculum</DropdownItem>
                                <DropdownItem href="/glossary" description="500+ engineering economics terms">Glossary</DropdownItem>
                                <DropdownItem href="/blog" description="105 articles on engineering economics">Blog</DropdownItem>
                                <DropdownItem href="/resources/ai-courses" description="Free AI & engineering courses">AI Courses</DropdownItem>
                            </Dropdown>

                            <Dropdown label="ROI Calculators">
                                <DropdownItem href="/tools/pdi" description="Calculate your Technical Insolvency Date">PDI — Product Debt Index</DropdownItem>
                                <DropdownItem href="/tools/ev-se" description="Model enterprise value per engineer">EV-SE — Valuation Engine</DropdownItem>
                                <DropdownItem href="/tools/aueb" description="Calculate AI unit economics">AUEB — AI Unit Economics</DropdownItem>
                                <DropdownItem href="/tools/aper" description="Measure adjusted productivity ratio">APER — Engineering Ratio</DropdownItem>
                            </Dropdown>
                            
                            <Link href="/tools/audit-interview" className="text-gray-300 hover:text-white transition-colors relative group font-medium">
                                Audit Interview
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-cyan)] transition-all group-hover:w-full" />
                            </Link>

                            <Dropdown label="Advisory">
                                <DropdownItem href="/advisory" description="Enterprise taskforces & forensics">Executive Advisory</DropdownItem>
                                <DropdownItem href="/case-studies" description="Platform telemetry & outcomes">Case Studies</DropdownItem>
                                <DropdownItem href="/principal" description="About Richard Ewing">The Principal</DropdownItem>
                            </Dropdown>

                            <Link href="/exogram" className="text-gray-300 hover:text-white transition-colors relative group">
                                Exogram
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            {/* Primary CTA */}
                            <Link
                                href="/advisory"
                                className="bg-[var(--accent-crimson)] px-5 py-2.5 rounded-lg font-semibold text-white hover:bg-opacity-90 transition-all shadow-[0_0_15px_rgba(255,68,68,0.3)] hover:shadow-[0_0_25px_rgba(255,68,68,0.5)] transform hover:-translate-y-0.5"
                            >
                                Book Audit →
                            </Link>

                            <div className="h-6 w-px bg-white/20 mx-1 flex-shrink-0" />

                            {/* Authentication */}
                            {isLoaded && !isSignedIn && (
                                <SignInButton mode="modal" fallbackRedirectUrl="/vault" signUpFallbackRedirectUrl="/vault">
                                    <button className="text-gray-300 hover:text-white transition-colors text-sm font-semibold whitespace-nowrap">
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
                            className="md:hidden text-white p-2"
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
            <button className="flex items-center gap-1 text-gray-300 hover:text-white py-2 group-hover:text-[var(--accent-cyan)] transition-colors">
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
                        <div className="bg-[var(--bg-secondary)] border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl">
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
            className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-[var(--accent-purple)]"
        >
            <span className="block">{children}</span>
            {description && <span className="block text-[10px] text-zinc-600 mt-0.5">{description}</span>}
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
            className="fixed inset-0 z-[60] bg-[var(--bg-primary)]/95 backdrop-blur-xl"
        >
            <div className="flex flex-col h-full overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="font-semibold text-white">Menu</div>
                    <button onClick={onClose} className="p-2 text-white hover:text-[var(--accent-crimson)]" aria-label="Close menu">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-6 space-y-8 pb-20">

                    {/* Start Here - Hero CTA */}
                    <Link
                        href="/doctrine"
                        onClick={onClose}
                        className="block w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white text-center font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
                    >
                        ✦ START HERE
                    </Link>

                    <div className="w-full h-px bg-white/10" />

                    {/* Learn Section */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest pl-2">Curriculum & Library</h3>
                        <MobileLink href="/vault/curriculum/tracks" onClick={onClose}>Complete Curriculum</MobileLink>
                        <MobileLink href="/glossary" onClick={onClose}>Glossary (420+ Terms)</MobileLink>
                        <MobileLink href="/blog" onClick={onClose}>Blog (105 Articles)</MobileLink>
                        <MobileLink href="/resources/ai-courses" onClick={onClose}>AI Courses (Free)</MobileLink>
                    </div>

                    {/* Tools Section */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-violet-400 uppercase tracking-widest pl-2">ROI Calculators</h3>
                        <MobileLink href="/tools/pdi" onClick={onClose}>PDI — Product Debt Index</MobileLink>
                        <MobileLink href="/tools/ev-se" onClick={onClose}>EV-SE — Valuation Engine</MobileLink>
                        <MobileLink href="/tools/aueb" onClick={onClose}>AUEB — AI Unit Economics</MobileLink>
                        <MobileLink href="/tools/aper" onClick={onClose}>APER — Engineering Ratio</MobileLink>
                        <MobileLink href="/tools/audit-interview" onClick={onClose}>Audit Interview</MobileLink>
                    </div>

                    {/* Advisory Section */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest pl-2">Advisory</h3>
                        <MobileLink href="/advisory" onClick={onClose}>Executive Advisory</MobileLink>
                        <MobileLink href="/case-studies" onClick={onClose}>Case Studies</MobileLink>
                        <MobileLink href="/principal" onClick={onClose}>The Principal</MobileLink>
                    </div>

                    {/* Exogram */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Exogram</h3>
                        <MobileLink href="/exogram" onClick={onClose} className="text-[var(--accent-purple)]">
                            What I&apos;m Building
                        </MobileLink>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    <Link
                        href="/advisory"
                        onClick={onClose}
                        className="block w-full bg-[var(--accent-crimson)] text-white text-center font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity mb-4"
                    >
                        BOOK AN AUDIT
                    </Link>

                    {isLoaded && !isSignedIn && (
                        <SignInButton mode="modal" fallbackRedirectUrl="/vault" signUpFallbackRedirectUrl="/vault">
                            <button onClick={onClose} className="block w-full bg-white/5 border border-white/10 text-white text-center font-bold py-4 rounded-xl text-lg hover:bg-white/10 transition-colors">
                                SIGN IN
                            </button>
                        </SignInButton>
                    )}
                    
                    {isLoaded && isSignedIn && (
                        <Link 
                            href="/vault"
                            onClick={onClose}
                            className="block w-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-center font-bold py-4 rounded-xl text-lg hover:bg-cyan-500/20 transition-colors"
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
            <h2 className="text-2xl font-bold text-white group-hover:text-[var(--accent-cyan)] transition-colors mb-1">{title}</h2>
            {children}
        </Link>
    );
};

const MobileLink = ({ href, children, onClick, className = "" }: { href: string, children: React.ReactNode, onClick: () => void, className?: string }) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block px-4 py-3 rounded-lg bg-[var(--bg-secondary)] text-gray-300 hover:text-white hover:bg-white/10 transition-colors ${className}`}
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
            <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-sm border border-violet-400/50 hover:border-violet-400 transition-colors shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                {initials}
            </div>
        }>
            <div className="px-4 py-3 border-b border-white/10 mb-2">
                <p className="text-sm font-medium text-white">{user.fullName || 'User'}</p>
                <p className="text-xs text-zinc-500 truncate">{user.primaryEmailAddress?.emailAddress}</p>
            </div>
            <DropdownItem href="/vault" description="Your intelligence dashboard">My Vault</DropdownItem>
            <DropdownItem href="/system" description="All enterprise tools">Tools Library</DropdownItem>
            <button 
                onClick={() => signOut()} 
                className="w-full text-left block px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors mt-2 border-t border-white/10"
            >
                Sign Out
            </button>
        </Dropdown>
    );
};

export default Navigation;
