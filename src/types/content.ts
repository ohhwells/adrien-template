// ─── Content Types ─────────────────────────────────────────────────────────
// Every content file imports its shape from here.
// The OhhWells Content API will serve data matching these interfaces.

export interface HeroContent {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export interface ServiceItem {
  num?: string;
  slug?: string;
  title: string;
  description: string;
  icon?: string;
  longDescription?: string[];
  duration?: string;
  format?: string;
  investment?: string;
  inclusions?: string[];
  image?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  initials?: string;
}

export interface CTAContent {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutPreviewContent {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  body: string[];
  stats?: StatItem[];
  image?: string;
}

export interface ServicesPageContent {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  services: ServiceItem[];
}

export interface AboutPageContent {
  eyebrow?: string;
  headline: string;
  body: string[];
  image?: string;
  stats?: StatItem[];
}

export interface ContactPageContent {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  fields: ContactField[];
  submitText: string;
}

export interface ContactField {
  name: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'tel';
  required?: boolean;
  options?: string[];
}

export interface PhilosophyQuoteContent {
  eyebrow?: string;
  pretext?: string;
  quote: string;
  bodyLeft: string;
  bodyRight: string;
}

export interface PullQuoteContent {
  quote: string;
  author: string;
  role: string;
}

export interface JournalEntry {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string[];
}

export interface JournalPreviewContent {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

export interface JournalIndexContent {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  subheadline: string;
  entries: JournalEntry[];
}

export interface ConsultationsIndexContent {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  subheadline: string;
  intro: string;
  items: ServiceItem[];
}

export interface AboutPageFullContent {
  hero: {
    eyebrow?: string;
    headline: string;
    headlineItalic?: string;
    subheadline: string;
    image: string;
  };
  story: {
    headline: string;
    body: string[];
    image: string;
  };
  credentials: {
    eyebrow?: string;
    headline: string;
    items: { label: string; value: string }[];
  };
  values: {
    eyebrow?: string;
    headline: string;
    items: { title: string; description: string }[];
  };
  cta: CTAContent;
}

export interface ContactPageFullContent {
  hero: {
    eyebrow?: string;
    headline: string;
    headlineItalic?: string;
    subheadline: string;
  };
  details: {
    eyebrow: string;
    items: { label: string; value: string; href?: string }[];
  };
  form: ContactPageContent;
}

export interface HomeContent {
  hero: HeroContent;
  philosophy: PhilosophyQuoteContent;
  consultations: {
    eyebrow?: string;
    headline: string;
    items: ServiceItem[];
  };
  testimonial: PullQuoteContent;
  journal: JournalPreviewContent;
}

// ─── Global Types ──────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface LogoConfig {
  text: string;
  image?: string;
}

export interface FooterContent {
  tagline: string;
  copyright: string;
}

export interface GlobalContent {
  siteName: string;
  logo: LogoConfig;
  navItems: NavItem[];
  ctaButton?: { label: string; href: string };
  footer: FooterContent;
  socials: SocialLink[];
}

// ─── Brand Types ───────────────────────────────────────────────────────────

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  textMuted: string;
  border: string;
  inverse: string;
  onInverse: string;
}

export interface BrandFonts {
  heading: string;
  body: string;
}

export interface BrandSpacing {
  section: string;
  container: string;
  gap: string;
  gutter: string;
}

export interface BrandRadius {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface Brand {
  colors: BrandColors;
  fonts: BrandFonts;
  spacing: BrandSpacing;
  borderRadius: BrandRadius;
}
