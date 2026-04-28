'use client';

import Link from 'next/link';
import type { NavItem } from '@/types/content';

interface MobileMenuProps {
  items: NavItem[];
  ctaButton?: { label: string; href: string };
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ items, ctaButton, open, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`} aria-hidden={!open}>
      <nav className="mobile-menu__nav" aria-label="Mobile">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mobile-menu__link"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
        {ctaButton && (
          <Link
            href={ctaButton.href}
            className="mobile-menu__cta"
            onClick={onClose}
          >
            {ctaButton.label}
          </Link>
        )}
      </nav>
      <p className="mobile-menu__footer">Essentialism in Wellness.</p>
    </div>
  );
}
