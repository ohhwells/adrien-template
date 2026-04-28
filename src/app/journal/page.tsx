import { journalContent } from '@/content/journal';
import { PageHero } from '@/components/sections/PageHero';
import { JournalGrid } from '@/components/sections/JournalGrid';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'The Journal',
  description:
    'Quiet rituals and raw ingredients. Weekly insights from Adrien Nutrition on seasonality, provenance, and the ritual of preparation.',
  path: '/journal',
});

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow={journalContent.eyebrow}
        headline={journalContent.headline}
        headlineItalic={journalContent.headlineItalic}
        subheadline={journalContent.subheadline}
      />
      <JournalGrid entries={journalContent.entries} />
    </>
  );
}
