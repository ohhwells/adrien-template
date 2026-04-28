import type { ConsultationsIndexContent, ServiceItem } from '@/types/content';

export const consultationsList: ServiceItem[] = [
  {
    num: '01',
    slug: 'nutritional-audit',
    title: 'Nutritional Audit',
    description:
      'A deep-dive analysis of your current state, utilizing advanced biomarkers to identify metabolic inefficiencies.',
    duration: '6 weeks · Three private sessions',
    format: 'In-person (Paris) or remote video consultation',
    investment: 'From €2,400',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&h=900&fit=crop&q=80',
    longDescription: [
      'The Audit is the foundation of every relationship. Before we propose a single change, we listen — to your history, your habits, your physiology, and the data your body is already offering.',
      'Using a curated panel of advanced biomarkers — fasting insulin, hs-CRP, ferritin, comprehensive metabolic, micronutrient assays, and continuous glucose monitoring — we map the invisible architecture of your current state.',
      'You leave with a written diagnostic document: a clear, written narrative of where your biology is, what it is asking for, and the priorities for the months ahead.',
    ],
    inclusions: [
      'Pre-session intake and lifestyle questionnaire',
      'Comprehensive biomarker panel (lab fees included)',
      'Two-week continuous glucose monitoring period',
      'Three 90-minute private sessions',
      'Bound diagnostic document with priorities and protocol',
      '30 days of asynchronous follow-up',
    ],
  },
  {
    num: '02',
    slug: 'bespoke-meal-architecture',
    title: 'Bespoke Meal Architecture',
    description:
      'Moving beyond "recipes" to create a structural framework for how you nourish your body, designed for your lifestyle.',
    duration: '12 weeks · Bi-weekly sessions',
    format: 'Hybrid — kitchen visit, market walk, video calls',
    investment: 'From €4,800',
    image:
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1400&h=900&fit=crop&q=80',
    longDescription: [
      'Most clients have read every cookbook. They know what is healthy. What is missing is the architecture — the daily structure that makes nourishment effortless within the texture of a real life.',
      'We begin in your kitchen. We walk a market together. We rebuild the rhythm of your week from the ground up — provisioning, preparation rituals, plate composition, and the small disciplines that compound into vitality.',
      'The deliverable is not a meal plan. It is a personal operating system for how you eat, season by season.',
    ],
    inclusions: [
      'On-site kitchen audit and pantry curation',
      'Two guided market walks with seasonal sourcing',
      'Six bi-weekly 60-minute private sessions',
      'Personal seasonal eating framework (printed)',
      'Curated supplier and provisioner directory',
      'Quarterly seasonal recalibration call (year one)',
    ],
  },
  {
    num: '03',
    slug: 'lifestyle-strategy',
    title: 'Lifestyle Strategy',
    description:
      'A comprehensive integration of circadian rhythms, stress modulation, and intentional movement.',
    duration: '6 months · Monthly sessions',
    format: 'Concierge — in-person and remote',
    investment: 'From €9,200',
    image:
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1400&h=900&fit=crop&q=80',
    longDescription: [
      'Nutrition is one input. The strategy engagement integrates the others — light, sleep, movement, breath, stress — into a coherent way of living.',
      'This is the most comprehensive offering: a six-month concierge relationship with on-call access, monthly recalibration, and a deeply considered protocol that evolves with your seasons of work and travel.',
      'It is reserved for clients who are ready to align every domain of their life with their biology, and who want a single trusted advisor accompanying that work.',
    ],
    inclusions: [
      'Everything in the Audit and Meal Architecture',
      'Six monthly private strategy sessions',
      'Circadian, sleep, and movement protocol design',
      'Travel-day and high-performance day protocols',
      'On-call access for time-sensitive decisions',
      'Annual review with year-two roadmap',
    ],
  },
];

export const consultationsContent: ConsultationsIndexContent = {
  eyebrow: 'PRIVÉ & BESPOKE',
  headline: 'Three pathways into a',
  headlineItalic: 'considered practice.',
  subheadline:
    'Each engagement is private, structured, and shaped to the specifics of your physiology, your obligations, and your seasons.',
  intro:
    'I work with a small number of clients each year. The pathways below describe the most common shapes those relationships take. Every engagement begins with a quiet conversation — to ensure the work, and the fit, are right.',
  items: consultationsList,
};
