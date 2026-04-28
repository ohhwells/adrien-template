import { consultationsContent } from '@/content/consultations';
import { PageHero } from '@/components/sections/PageHero';
import { ConsultationsList } from '@/components/sections/ConsultationsList';
import { CallToAction } from '@/components/sections/CallToAction';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Consultations',
  description:
    'Three private engagements — Nutritional Audit, Bespoke Meal Architecture, and Lifestyle Strategy — each shaped to the specifics of your physiology.',
  path: '/consultations',
});

export default function ConsultationsPage() {
  return (
    <>
      <PageHero
        eyebrow={consultationsContent.eyebrow}
        headline={consultationsContent.headline}
        headlineItalic={consultationsContent.headlineItalic}
        subheadline={consultationsContent.subheadline}
        intro={consultationsContent.intro}
      />
      <ConsultationsList items={consultationsContent.items} />
      <CallToAction
        eyebrow="BEGIN"
        headline="A quiet conversation, before anything else."
        subheadline="Every relationship begins with an unhurried call — to ensure the work, and the fit, are right."
        ctaText="Request a Conversation"
        ctaLink="/contact"
        secondaryCtaText="About Adrien"
        secondaryCtaLink="/about"
      />
    </>
  );
}
