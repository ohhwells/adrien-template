'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem, LogoConfig } from '@/types/content';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  items: NavItem[];
  logo: LogoConfig;
  ctaButton?: { label: string; href: string };
}

export function Navbar({ items, logo, ctaButton }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
          {logo.text}
        </Link>

        <nav className="navbar__nav" aria-label="Primary">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`navbar__link${isActive(item.href) ? ' navbar__link--active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          {ctaButton && (
            <Link href={ctaButton.href} className="navbar__cta">
              {ctaButton.label}
            </Link>
          )}
          <button
            className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileMenu
        items={items}
        ctaButton={ctaButton}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
