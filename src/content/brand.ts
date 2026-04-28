import type { Brand } from '@/types/content';

// Brand tokens — direct mapping from DESIGN.md (Organic Minimalist)
// Forest Green primary, Oatmeal secondary, Crisp White surface
// Sharp 0 corners, Newsreader (serif) + Inter (sans-serif)
export const brand: Brand = {
  colors: {
    primary: '#061b0e',          // Forest Green — primary actions, headlines
    secondary: '#e5e2dc',        // Oatmeal — surface containers, soft sections
    accent: '#1b3022',           // Deeper green — primary-container
    background: '#fbf9f8',       // Surface — page background
    surface: '#ffffff',          // Crisp White — content-heavy areas
    surfaceAlt: '#efeded',       // Surface container — subtle contrast section
    text: '#1b1c1c',             // On-surface — body text, dark headlines
    textMuted: '#5f5e5a',        // Secondary text — muted body
    border: '#c3c8c1',           // Outline-variant — thin separators
    inverse: '#303030',          // Inverse surface — dark callouts
    onInverse: '#f2f0f0',        // Inverse on-surface — text on dark
  },
  fonts: {
    heading: "'Newsreader', 'Cormorant Garamond', Georgia, serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  spacing: {
    section: '120px',            // section-padding — slow, deliberate rhythm
    container: '1280px',         // container-max
    gap: '32px',                 // gutter
    gutter: '32px',
  },
  borderRadius: {
    sm: '0',
    md: '0',
    lg: '0',
    full: '9999px',
  },
};
