"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site-data";
import { MotionProvider } from "@/components/motion-provider";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenGroup(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setOpenGroup(null);
    }, 180);
  };

  // Close menus on route change
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenGroup(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <MotionProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" ref={navRef}>
        <Link className="wordmark" href="/" prefetch={false}>
          Richard Ewing<span>.</span>
        </Link>

        <button
          className="mobile-toggle"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={mobileMenuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <Link
            className={pathname === "/" ? "nav-link active" : "nav-link"}
            href="/"
            prefetch={false}
          >
            Home
          </Link>

          {nav.map((item) => (
            <div
              className="nav-group"
              key={item.label}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="nav-trigger"
                aria-expanded={openGroup === item.label}
                aria-haspopup="true"
                onClick={() =>
                  setOpenGroup(openGroup === item.label ? null : item.label)
                }
              >
                {item.label}
                <span className="chevron">⌄</span>
              </button>

              <div
                className={openGroup === item.label ? "dropdown" : "dropdown hidden"}
                role="menu"
                hidden={openGroup !== item.label}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    prefetch={false}
                    role="menuitem"
                    className={pathname === child.href ? "active" : ""}
                  >
                    <span>{child.label}</span>
                    <span className="arrow">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <Link className="button button-dark header-cta" href="/reality-check" prefetch={false}>
          Run the Reality Check ↗
        </Link>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        {/* Flagship Frameworks & Executive Diagnostics Feeder Section */}
        <div className="mb-10 pb-8 border-b border-[var(--line,rgba(36,51,43,0.14))]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--gold,#b77a35)] block mb-1">
                Tier-1 Click-Depth Feeder · Authority Architecture
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-[var(--ink,#1e2924)]">
                Flagship Frameworks &amp; Executive Diagnostics
              </h4>
            </div>
            <p className="text-xs text-[var(--muted,#66716a)] max-w-md">
              Direct bridges to core economic doctrine, empirical calculators, and executive governance briefings.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
            <div className="flex flex-col gap-1.5">
              <strong className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--forest,#29473b)]">Flagship Doctrine</strong>
              <Link href="/articles/frameworks/technical-insolvency-date" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">Technical Insolvency Date</Link>
              <Link href="/articles/frameworks/vibe-coding-debt" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">Vibe Coding Debt</Link>
              <Link href="/articles/frameworks/shadow-agents" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">Shadow Agents</Link>
            </div>
            <div className="flex flex-col gap-1.5">
              <strong className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--forest,#29473b)]">Primary Diagnostics</strong>
              <Link href="/tools/pdi" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">Product Debt Index (PDI)</Link>
              <Link href="/reality-check" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">AI Reality Check</Link>
              <Link href="/tools/aueb" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">AI Unit Economics (AUEB)</Link>
            </div>
            <div className="flex flex-col gap-1.5">
              <strong className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--forest,#29473b)]">Financial Audits</strong>
              <Link href="/roi-calculator" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">Executive ROI Calculator</Link>
              <Link href="/pricing-sprints" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">Fixed-Scope Sprints</Link>
              <Link href="/advisory" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">Executive Advisory</Link>
            </div>
            <div className="flex flex-col gap-1.5">
              <strong className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--forest,#29473b)]">Executive Briefings</strong>
              <Link href="/for-cfos" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">CFO Governance Briefing</Link>
              <Link href="/for-ctos" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">CTO Governance Briefing</Link>
            </div>
            <div className="flex flex-col gap-1.5">
              <strong className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--forest,#29473b)]">Platform Intelligence</strong>
              <Link href="/compare/ai-guardrails-platforms" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">AI Guardrails Comparison</Link>
              <Link href="/doctrine" prefetch={false} className="hover:text-[var(--forest,#29473b)] transition-colors">Architectural Doctrine</Link>
              <a href="https://careerwin.ai" target="_blank" rel="noopener" className="hover:text-[var(--forest,#29473b)] transition-colors">CareerWin.ai Platform ↗</a>
              <a href="https://exogram.ai" target="_blank" rel="noopener" className="hover:text-[var(--forest,#29473b)] transition-colors">Exogram.ai Platform ↗</a>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Link className="wordmark" href="/" prefetch={false}>
              Richard Ewing<span>.</span>
            </Link>
            <p>Product & AI economics for measurable outcomes.</p>
          </div>

          <div className="footer-links">
            {nav.map((group) => (
              <div key={group.label}>
                <strong>{group.label}</strong>
                {group.children.map((child) => (
                  <Link key={child.href} href={child.href} prefetch={false}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Richard Ewing. All rights reserved.</span>
          <div>
            <Link href="/legal#privacy" prefetch={false}>Privacy</Link>
            <Link href="/legal#terms" prefetch={false}>Terms</Link>
            <Link href="/legal#disclaimers" prefetch={false}>Disclaimers</Link>
            <Link href="/site-map" prefetch={false}>Site map</Link>
          </div>
        </div>
      </footer>
    </MotionProvider>
  );
}
