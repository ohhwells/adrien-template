import { homeContent } from '@/content/home';
import { Hero } from '@/components/sections/Hero';
import { PhilosophyQuote } from '@/components/sections/PhilosophyQuote';
import { ConsultationsGrid } from '@/components/sections/ConsultationsGrid';
import { PullQuote } from '@/components/sections/PullQuote';
import { JournalPreview } from '@/components/sections/JournalPreview';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Philosophy',
  description:
    'Essentialism in Wellness — a clinical nutrition practice rooted in ancestral biology and the quiet power of subtraction.',
});

export default function HomePage() {
  return (
    <>
      <Hero {...homeContent.hero} />
      <PhilosophyQuote {...homeContent.philosophy} />
      <ConsultationsGrid
        eyebrow={homeContent.consultations.eyebrow}
        headline={homeContent.consultations.headline}
        items={homeContent.consultations.items}
        variant="home"
      />
      <PullQuote {...homeContent.testimonial} />
      <JournalPreview {...homeContent.journal} />
    </>
  );
}
