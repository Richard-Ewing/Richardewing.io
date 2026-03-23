"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/assets/headshot.jpg" alt="Richard Ewing" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="font-semibold text-white group-hover:text-[var(--accent-purple)] transition-colors">Richard Ewing</div>
                                <div className="text-xs text-gray-400">Product Economist</div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-6 lg:gap-8">

                            <Dropdown label="Advisory">
                                <DropdownItem href="/advisory">Advisory Services</DropdownItem>
                                <DropdownItem href="/principal">The Principal</DropdownItem>
                                <DropdownItem href="/workshops">Workshops & Speaking</DropdownItem>
                                <DropdownItem href="/advisory/licensing">White-Label Licensing</DropdownItem>
                                <DropdownItem href="/certification">Certification (CPE)</DropdownItem>
                            </Dropdown>

                            <Dropdown label="Learn">
                                <DropdownItem href="/doctrine">Doctrine (Framework)</DropdownItem>
                                <DropdownItem href="/manifesto">Manifesto (Philosophy)</DropdownItem>
                                <DropdownItem href="/articles">Articles (Publications)</DropdownItem>
                                <DropdownItem href="/glossary">Glossary (310+ Definitions)</DropdownItem>
                                <DropdownItem href="/curriculum">Curriculum (Learning Tracks)</DropdownItem>
                                <DropdownItem href="/benchmark">Benchmark Report (Free)</DropdownItem>
                                <DropdownItem href="/briefings">Briefings (Newsletter)</DropdownItem>
                            </Dropdown>

                            <Dropdown label="Tools">
                                <DropdownItem href="/tools/pdi">PDI — Product Debt Index</DropdownItem>
                                <DropdownItem href="/tools/ev-se">EV-SE — Valuation Engine</DropdownItem>
                                <DropdownItem href="/tools/aueb">AUEB — AI Unit Economics</DropdownItem>
                                <DropdownItem href="/tools/aper">APER — Engineering Ratio</DropdownItem>
                                <DropdownItem href="/tools/audit-interview">Audit Interview</DropdownItem>
                            </Dropdown>

                            <Dropdown label="Engage">
                                <DropdownItem href="/pricing">Advisory Pricing</DropdownItem>
                                <DropdownItem href="/case-studies">Case Studies</DropdownItem>
                                <DropdownItem href="/resources">Resource Hub</DropdownItem>
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
const Dropdown = ({ label, children }: { label: string, children: React.ReactNode }) => {
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

const DropdownItem = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link
            href={href}
            className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-[var(--accent-purple)]"
        >
            {children}
        </Link>
    );
};

// Mobile Menu Component
const MobileMenu = ({ onClose }: { onClose: () => void }) => {
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

                    <MobileSection title="ADVISORY" href="/advisory" onClick={onClose}>
                        <div className="text-gray-400 mb-4">Book an R&D audit</div>
                        <MobileLink href="/principal" onClick={onClose} className="border-l-2 border-[var(--accent-purple)]">
                            The Principal (Bio)
                        </MobileLink>
                        <MobileLink href="/workshops" onClick={onClose}>Workshops & Speaking</MobileLink>
                        <MobileLink href="/advisory/licensing" onClick={onClose}>White-Label Licensing</MobileLink>
                        <MobileLink href="/certification" onClick={onClose}>Certification (CPE)</MobileLink>
                    </MobileSection>

                    <div className="w-full h-px bg-white/10" />

                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Learn</h3>
                        <MobileLink href="/doctrine" onClick={onClose}>Doctrine</MobileLink>
                        <MobileLink href="/manifesto" onClick={onClose}>Manifesto</MobileLink>
                        <MobileLink href="/articles" onClick={onClose}>Articles</MobileLink>
                        <MobileLink href="/glossary" onClick={onClose}>Glossary</MobileLink>
                        <MobileLink href="/curriculum" onClick={onClose}>Curriculum</MobileLink>
                        <MobileLink href="/benchmark" onClick={onClose}>Benchmark Report</MobileLink>
                        <MobileLink href="/briefings" onClick={onClose}>Briefings</MobileLink>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Tools</h3>
                        <MobileLink href="/tools/pdi" onClick={onClose}>Product Debt Index</MobileLink>
                        <MobileLink href="/tools/ev-se" onClick={onClose}>EV-SE Valuation</MobileLink>
                        <MobileLink href="/tools/aueb" onClick={onClose}>AI Unit Economics</MobileLink>
                        <MobileLink href="/tools/aper" onClick={onClose}>APER Ratio</MobileLink>
                        <MobileLink href="/tools/audit-interview" onClick={onClose}>Audit Interview</MobileLink>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Engage</h3>
                        <MobileLink href="/pricing" onClick={onClose}>Advisory Pricing</MobileLink>
                        <MobileLink href="/case-studies" onClick={onClose}>Case Studies</MobileLink>
                        <MobileLink href="/resources" onClick={onClose}>Resource Hub</MobileLink>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Exogram</h3>
                        <MobileLink href="/exogram" onClick={onClose} className="text-[var(--accent-purple)]">
                            What I'm Building
                        </MobileLink>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    <Link
                        href="/advisory"
                        onClick={onClose}
                        className="block w-full bg-[var(--accent-crimson)] text-white text-center font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
                    >
                        BOOK AN AUDIT
                    </Link>

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

export default Navigation;
