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
                                <div className="text-xs font-bold text-zinc-900">AI Economist</div>
                            </div>
                        </Link>

                        {/* Desktop Nav — Reorganized for Framework and Research Integration */}
                        <div className="hidden lg:flex items-center gap-4">

                            {/* Start Here / Member Dashboard */}
                            <Link href={isSignedIn ? "/vault" : "/start-here"} className="text-emerald-900 font-extrabold hover:text-emerald-500 transition-colors relative group font-semibold">
                                ✦ {isSignedIn ? "Member Dashboard" : "Start Here"}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/framework" className="text-zinc-900 hover:text-zinc-900 transition-colors relative group font-medium">
                                Framework
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/research" className="text-zinc-900 hover:text-zinc-900 transition-colors relative group font-medium">
                                Research
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/articles" className="text-zinc-900 hover:text-zinc-900 transition-colors relative group font-medium">
                                Articles
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/tools" className="text-zinc-900 hover:text-zinc-900 transition-colors relative group font-medium">
                                Tools
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/curriculum" className="text-zinc-900 hover:text-zinc-900 transition-colors relative group font-medium">
                                Curriculum
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/exogram" className="text-purple-700 font-bold hover:text-purple-500 transition-colors relative group">
                                Exogram
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/about" className="text-zinc-700 hover:text-zinc-900 transition-colors relative group font-medium">
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/services" className="text-zinc-700 hover:text-zinc-900 transition-colors relative group font-medium">
                                Services
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            <Link href="/contact" className="text-zinc-700 hover:text-zinc-900 transition-colors relative group font-medium">
                                Contact
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-purple)] transition-all group-hover:w-full" />
                            </Link>

                            {/* Primary CTA */}
                            <Link
                                href="/services"
                                className="bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 rounded-lg font-bold text-white hover:opacity-90 transition-all shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 transform hover:-translate-y-0.5 text-xs uppercase tracking-wider"
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
                            className="lg:hidden text-zinc-900 p-2"
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
            className="block px-4 py-3 text-sm font-medium text-zinc-900 hover:text-zinc-900 hover:bg-zinc-50 transition-colors border-l-2 border-transparent hover:border-[var(--accent-purple)]"
        >
            <span className="block">{children}</span>
            {description && <span className="block text-xs font-medium text-zinc-600 mt-0.5">{description}</span>}
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
                        href={isSignedIn ? "/vault" : "/start-here"}
                        onClick={onClose}
                        className="block w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold text-center py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
                    >
                        ✦ {isSignedIn ? "ACCESS VAULT" : "START HERE"}
                    </Link>

                    <div className="w-full h-px bg-zinc-200" />

                    <div className="space-y-4">
                        <MobileLink href="/framework" onClick={onClose} className="text-lg font-bold">Framework</MobileLink>
                        <MobileLink href="/research" onClick={onClose} className="text-lg font-bold">Research</MobileLink>
                        <MobileLink href="/articles" onClick={onClose} className="text-lg font-bold">Articles</MobileLink>
                        <MobileLink href="/tools" onClick={onClose} className="text-lg font-bold">Tools</MobileLink>
                        <MobileLink href="/curriculum" onClick={onClose} className="text-lg font-bold">Curriculum</MobileLink>
                        <MobileLink href="/exogram" onClick={onClose} className="text-lg font-bold text-purple-700">Exogram</MobileLink>
                        <MobileLink href="/services" onClick={onClose} className="text-lg font-bold">Services</MobileLink>
                        <MobileLink href="/about" onClick={onClose} className="text-lg font-bold">About</MobileLink>
                        <MobileLink href="/contact" onClick={onClose} className="text-lg font-bold">Contact</MobileLink>
                    </div>

                    <div className="w-full h-px bg-zinc-200 my-4" />

                    <Link
                        href="/services"
                        onClick={onClose}
                        className="block w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-center py-4 rounded-xl text-lg hover:opacity-90 transition-opacity mb-4"
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
            <div className="w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-sm border border-violet-400/50 hover:border-violet-400 transition-colors">
                {initials}
            </div>
        }>
            <div className="px-4 py-3 border-b border-zinc-400 mb-2">
                <p className="text-sm font-semibold text-zinc-900">{user.fullName || 'User'}</p>
                <p className="text-xs text-zinc-600 truncate">{user.primaryEmailAddress?.emailAddress}</p>
            </div>
            <DropdownItem href="/vault" description="Your intelligence dashboard">My Vault</DropdownItem>
            <DropdownItem href="/system" description="All enterprise tools">Tools Library</DropdownItem>
            <button 
                onClick={() => signOut()} 
                className="w-full text-left block px-4 py-3 text-sm font-medium text-zinc-700 hover:text-red-600 hover:bg-zinc-50 transition-colors mt-2 border-t border-zinc-200"
            >
                Sign Out
            </button>
        </Dropdown>
    );
};

export default Navigation;
