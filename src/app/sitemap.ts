import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { consultationsList } from '@/content/consultations';
import { journalEntries } from '@/content/journal';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/consultations`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const consultations = consultationsList
    .filter((c) => c.slug)
    .map((c) => ({
      url: `${SITE_URL}/consultations/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  const journal = journalEntries.map((e) => ({
    url: `${SITE_URL}/journal/${e.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...base, ...consultations, ...journal];
}
