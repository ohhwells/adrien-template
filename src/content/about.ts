import type { AboutPageFullContent } from '@/types/content';

export const aboutContent: AboutPageFullContent = {
  hero: {
    eyebrow: 'ABOUT',
    headline: 'A clinician of',
    headlineItalic: 'considered restraint.',
    subheadline:
      'Adrien Beaumont is a clinical nutritionist working with a small private practice in Paris and Geneva. The work is unhurried, evidence-led, and shaped to the texture of each client\'s life.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&h=1300&fit=crop&q=80',
  },
  story: {
    headline:
      'I came to nutrition through a long, quiet apprenticeship — first to my grandmother\'s kitchen, then to clinical training, and finally to the patients who taught me what the textbooks could not.',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000&h=1300&fit=crop&q=80',
    body: [
      'My early years were spent in the Dordogne, where the rhythm of the household followed the rhythm of the garden. We did not call it "wellness." We simply ate what was in season, slept when the light failed, and walked between the fig trees in the late afternoon.',
      'Clinical training in Geneva taught me the biochemistry. A decade of practice taught me, slowly, that the science was only ever half of the answer. The other half was attention — to a person\'s history, their obligations, their inheritances, and the small daily textures that resist generalization.',
      'My practice today is the synthesis. I bring the rigor of the laboratory and the patience of the kitchen to a small number of clients each year. We work slowly. We measure carefully. We do not chase trends. We honor the timeless architecture of human health.',
    ],
  },
  credentials: {
    eyebrow: 'TRAINING & PRACTICE',
    headline: 'Credentials',
    items: [
      { label: 'M.Sc. Clinical Nutrition', value: 'Université de Genève, 2014' },
      { label: 'Functional Medicine Certified', value: 'IFM, 2017' },
      { label: 'Continuing Practice', value: 'Paris · Geneva · Remote' },
      { label: 'Languages', value: 'Français · English · Italiano' },
      { label: 'Affiliations', value: 'Société Suisse de Nutrition · IFM' },
      { label: 'Years in Practice', value: 'Over twelve' },
    ],
  },
  values: {
    eyebrow: 'PRINCIPLES',
    headline: 'How I work',
    items: [
      {
        title: 'Subtraction before addition',
        description:
          'We begin by removing the unnecessary — the supplements, the protocols, the foods that are doing quiet harm — before adding anything new. Most clients need less, not more.',
      },
      {
        title: 'Data in service of attention',
        description:
          'Biomarkers and continuous monitoring are powerful instruments. We use them to ask better questions, never as identity, never as performance. The body is more than its data.',
      },
      {
        title: 'A small number of clients',
        description:
          'I work with twenty to twenty-five private clients each year. The cap is deliberate — it allows the depth and unhurried attention that distinguishes serious clinical work from advisory.',
      },
      {
        title: 'Quiet, written, considered',
        description:
          'Every engagement is documented. Every recommendation is written. Nothing is improvised in the room and forgotten by the week\'s end. The work of nutrition deserves a record.',
      },
    ],
  },
  cta: {
    eyebrow: 'BEGIN',
    headline: 'A quiet conversation, before anything else.',
    subheadline:
      'Every relationship begins with an unhurried call — to ensure the work, and the fit, are right. There is no obligation, and no charge, for that first conversation.',
    ctaText: 'Request a Conversation',
    ctaLink: '/contact',
    secondaryCtaText: 'View Consultations',
    secondaryCtaLink: '/consultations',
  },
};
