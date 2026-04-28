import { notFound } from 'next/navigation';
import { journalEntries } from '@/content/journal';
import { JournalArticle } from '@/components/sections/JournalArticle';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return journalEntries.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = journalEntries.find((e) => e.slug === params.slug);
  if (!entry) return {};
  return buildMetadata({
    title: entry.title,
    description: entry.excerpt,
    path: `/journal/${entry.slug}`,
    image: entry.image,
  });
}

export default function JournalEntryPage({ params }: { params: { slug: string } }) {
  const entry = journalEntries.find((e) => e.slug === params.slug);
  if (!entry) notFound();

  const related = journalEntries
    .filter((e) => e.slug !== params.slug)
    .slice(0, 2);

  return <JournalArticle entry={entry} related={related} />;
}
