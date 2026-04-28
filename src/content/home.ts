import type { HomeContent } from '@/types/content';

export const homeContent: HomeContent = {
  hero: {
    headline: 'ESSENTIALISM',
    headlineItalic: 'in Wellness',
    subheadline:
      'Stripping away the noise of modern diet culture to reveal the quiet power of ancestral biology and precise clinical nutrition.',
    ctaText: 'Begin Your Audit',
    ctaLink: '/contact',
    secondaryCtaText: 'Read The Philosophy',
    secondaryCtaLink: '/about',
    backgroundImage:
      'https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=1200&h=1400&fit=crop&q=80',
  },
  philosophy: {
    eyebrow: 'THE PHILOSOPHY',
    pretext: 'Nutrition as a\nFine Art.',
    quote:
      'I believe that wellness is not found in the addition of supplements, but in the subtraction of the unnecessary.',
    bodyLeft:
      'In an era of bio-hacking and over-optimization, we have lost the fundamental connection to what our bodies truly require. My approach focuses on metabolic integrity and cellular nourishment through the lens of minimalism.',
    bodyRight:
      'Every ingredient serves a purpose. Every protocol is a response to your unique biological signature. We do not chase trends; we honor the timeless architecture of human health.',
  },
  consultations: {
    eyebrow: 'CONSULTATIONS',
    headline: 'Privé & Bespoke',
    items: [
      {
        num: '01',
        slug: 'nutritional-audit',
        title: 'Nutritional Audit',
        description:
          'A deep-dive analysis of your current state, utilizing advanced biomarkers to identify metabolic inefficiencies.',
      },
      {
        num: '02',
        slug: 'bespoke-meal-architecture',
        title: 'Bespoke Meal Architecture',
        description:
          'Moving beyond "recipes" to create a structural framework for how you nourish your body, designed for your lifestyle.',
      },
      {
        num: '03',
        slug: 'lifestyle-strategy',
        title: 'Lifestyle Strategy',
        description:
          'A comprehensive integration of circadian rhythms, stress modulation, and intentional movement.',
      },
    ],
  },
  testimonial: {
    quote:
      "Adrien's approach is not just nutritional; it is an aesthetic and philosophical realignment with one's own nature.",
    author: 'EVELYNE ROUSSEAU',
    role: "Editor, L'Art de Vivre",
  },
  journal: {
    eyebrow: 'THE JOURNAL',
    headline: 'Quiet Rituals.',
    headlineItalic: 'Raw Ingredients.',
    description:
      'Weekly insights into the essentialist kitchen, focusing on seasonality, provenance, and the ritual of preparation.',
    ctaText: 'Read The Journal',
    ctaLink: '/journal',
    image:
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900&h=900&fit=crop&q=80',
  },
};
