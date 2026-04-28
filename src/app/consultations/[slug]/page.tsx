import { notFound } from 'next/navigation';
import { consultationsList } from '@/content/consultations';
import { ConsultationDetail } from '@/components/sections/ConsultationDetail';
import { CallToAction } from '@/components/sections/CallToAction';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return consultationsList
    .filter((c) => c.slug)
    .map((c) => ({ slug: c.slug as string }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = consultationsList.find((c) => c.slug === params.slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.description,
    path: `/consultations/${item.slug}`,
  });
}

export default function ConsultationDetailPage({ params }: { params: { slug: string } }) {
  const index = consultationsList.findIndex((c) => c.slug === params.slug);
  if (index === -1) notFound();
  const item = consultationsList[index];
  const previous = consultationsList[index - 1];
  const next = consultationsList[index + 1];

  return (
    <>
      <ConsultationDetail
        item={item}
        previous={previous ? { slug: previous.slug, title: previous.title } : undefined}
        next={next ? { slug: next.slug, title: next.title } : undefined}
      />
      <CallToAction
        eyebrow="BEGIN"
        headline={`Inquire about the ${item.title}.`}
        subheadline="Every engagement begins with an unhurried conversation. Submit a short note and Adrien will respond personally within two working days."
        ctaText="Submit an Inquiry"
        ctaLink="/contact"
        secondaryCtaText="View All Consultations"
        secondaryCtaLink="/consultations"
      />
    </>
  );
}
