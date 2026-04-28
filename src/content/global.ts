import type { GlobalContent } from '@/types/content';

export const globalContent: GlobalContent = {
  siteName: 'Adrien Nutrition',
  logo: {
    text: 'ADRIEN',
  },
  navItems: [
    { label: 'Philosophy', href: '/' },
    { label: 'Consultations', href: '/consultations' },
    { label: 'Journal', href: '/journal' },
    { label: 'About', href: '/about' },
  ],
  ctaButton: {
    label: 'Book Consultation',
    href: '/contact',
  },
  footer: {
    tagline: 'Essentialism in Wellness.',
    copyright: '© 2026 Adrien Nutrition. Essentialism in Wellness.',
  },
  socials: [
    { platform: 'Instagram', url: 'https://instagram.com/adriennutrition' },
    { platform: 'Contact', url: '/contact' },
    { platform: 'Privacy', url: '/privacy' },
    { platform: 'Terms', url: '/terms' },
  ],
};
