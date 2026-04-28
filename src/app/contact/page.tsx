import { contactContent } from '@/content/contact';
import { PageHero } from '@/components/sections/PageHero';
import { ContactDetails } from '@/components/sections/ContactDetails';
import { ContactForm } from '@/components/sections/ContactForm';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Book a Consultation',
  description:
    'Begin a conversation with Adrien Nutrition. A short note is enough — Adrien reads each inquiry personally and responds within two working days.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactContent.hero.eyebrow}
        headline={contactContent.hero.headline}
        headlineItalic={contactContent.hero.headlineItalic}
        subheadline={contactContent.hero.subheadline}
      />
      <ContactDetails
        eyebrow={contactContent.details.eyebrow}
        items={contactContent.details.items}
      />
      <ContactForm
        eyebrow={contactContent.form.eyebrow}
        headline={contactContent.form.headline}
        subheadline={contactContent.form.subheadline}
        fields={contactContent.form.fields}
        submitText={contactContent.form.submitText}
      />
    </>
  );
}
