'use client';

import { useState } from 'react';
import Link from 'next/link';

const PHONE = '5879914620';
const PHONE_DISPLAY = '(587) 991-4620';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-accent text-white text-center py-2 px-4">
        <a
          href={`tel:${PHONE}`}
          className="font-bold text-sm md:text-base hover:underline"
        >
          Call or Text Now: {PHONE_DISPLAY}
        </a>
        <span className="hidden md:inline text-sm ml-4 font-normal text-white/80">
          — Same-Day Service Available
        </span>
      </div>

      {/* Main nav */}
      <nav className="bg-navy/95 backdrop-blur-md border-b border-white/5">
        <div className="container-narrow mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Jeff's Junk Removal"
              className="h-20 md:h-24 w-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/free-quote/" className="ml-3 bg-accent hover:bg-accent-dark text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 text-sm shadow-lg shadow-accent/25 hover:shadow-accent/40">
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-dark/95 backdrop-blur-md border-b border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-6 py-3.5 text-gray-200 hover:text-accent hover:bg-white/5 transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/free-quote/"
              className="btn-primary w-full text-center block"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
