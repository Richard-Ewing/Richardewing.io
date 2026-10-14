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

  // Close menus on route change
  useEffect(() => {
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
        <Link className="wordmark" href="/">
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
          >
            Home
          </Link>

          {nav.map((item) => (
            <div
              className="nav-group"
              key={item.label}
              onMouseEnter={() => setOpenGroup(item.label)}
              onMouseLeave={() => setOpenGroup(null)}
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

              {openGroup === item.label && (
                <div className="dropdown" role="menu">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      className={pathname === child.href ? "active" : ""}
                    >
                      <span>{child.label}</span>
                      <span className="arrow">↗</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link className="button button-dark header-cta" href="/reality-check">
          Run the Reality Check ↗
        </Link>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="wordmark" href="/">
              Richard Ewing<span>.</span>
            </Link>
            <p>Product & AI economics for measurable outcomes.</p>
          </div>

          <div className="footer-links">
            {nav.map((group) => (
              <div key={group.label}>
                <strong>{group.label}</strong>
                {group.children.slice(0, 5).map((child) => (
                  <Link key={child.href} href={child.href}>
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
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/disclaimers">Disclaimers</Link>
            <Link href="/site-map">Site map</Link>
          </div>
        </div>
      </footer>
    </MotionProvider>
  );
}
