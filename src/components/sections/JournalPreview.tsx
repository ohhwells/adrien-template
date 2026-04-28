import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import type { JournalPreviewContent } from '@/types/content';

export function JournalPreview({
  eyebrow,
  headline,
  headlineItalic,
  description,
  ctaText,
  ctaLink,
  image,
}: JournalPreviewContent) {
  return (
    <section className="journal-preview">
      <Container>
        <div className="journal-preview__grid">
          <div className="journal-preview__image">
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="journal-preview__text">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="journal-preview__headline">
              {headline}
              {headlineItalic && (
                <>
                  {' '}
                  <em>{headlineItalic}</em>
                </>
              )}
            </h2>
            <p className="journal-preview__desc">{description}</p>
            <Link href={ctaLink} className="btn btn--ghost">
              {ctaText}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
