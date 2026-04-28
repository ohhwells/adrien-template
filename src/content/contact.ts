import type { ContactPageFullContent } from '@/types/content';

export const contactContent: ContactPageFullContent = {
  hero: {
    eyebrow: 'BOOK CONSULTATION',
    headline: 'A quiet introduction,',
    headlineItalic: 'before we begin.',
    subheadline:
      'Every engagement opens with an unhurried conversation — a chance to ensure that the work, and the fit, are right for you.',
  },
  details: {
    eyebrow: 'DIRECT CONTACT',
    items: [
      { label: 'Studio Paris', value: '4 Rue de Verneuil, 75007 Paris' },
      { label: 'Studio Geneva', value: 'Quai du Mont-Blanc 17, 1201 Genève' },
      { label: 'Email', value: 'practice@adriennutrition.com', href: 'mailto:practice@adriennutrition.com' },
      { label: 'Telephone', value: '+33 1 42 60 12 00', href: 'tel:+33142601200' },
      { label: 'Hours', value: 'By appointment, Tuesday – Friday' },
      { label: 'Languages', value: 'Français · English · Italiano' },
    ],
  },
  form: {
    eyebrow: 'WRITE TO ADRIEN',
    headline: 'Begin a conversation.',
    subheadline:
      'A short note is enough. Adrien reads each inquiry personally and responds within two working days.',
    fields: [
      {
        name: 'name',
        label: 'Full Name',
        placeholder: 'Your name',
        type: 'text',
        required: true,
      },
      {
        name: 'email',
        label: 'Email Address',
        placeholder: 'name@example.com',
        type: 'email',
        required: true,
      },
      {
        name: 'phone',
        label: 'Telephone',
        placeholder: '+33 ...',
        type: 'tel',
        required: false,
      },
      {
        name: 'consultation',
        label: 'Engagement of Interest',
        placeholder: 'Select an engagement',
        type: 'select',
        required: true,
        options: [
          'Nutritional Audit',
          'Bespoke Meal Architecture',
          'Lifestyle Strategy',
          'A general conversation',
        ],
      },
      {
        name: 'message',
        label: 'A Few Words',
        placeholder: 'Tell me about what is bringing you to this work, and what you are hoping to address.',
        type: 'textarea',
        required: true,
      },
    ],
    submitText: 'Submit Inquiry',
  },
};
