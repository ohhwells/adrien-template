import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import type { JournalEntry } from '@/types/content';

interface JournalGridProps {
  entries: JournalEntry[];
  showLatest?: boolean;
}

export function JournalGrid({ entries, showLatest = true }: JournalGridProps) {
  const [latest, ...rest] = entries;

  return (
    <section className="journal-grid">
      <Container>
        {showLatest && latest && (
          <Link href={`/journal/${latest.slug}`} className="journal-grid__featured">
            <div className="journal-grid__featured-image">
              <Image
                src={latest.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="journal-grid__featured-text">
              <p className="eyebrow">
                {latest.category} &nbsp;·&nbsp; {latest.readTime}
              </p>
              <h2 className="journal-grid__featured-title">{latest.title}</h2>
              <p className="journal-grid__featured-excerpt">{latest.excerpt}</p>
              <p className="journal-grid__date">{latest.date}</p>
              <span className="journal-grid__cta">
                Read essay <span aria-hidden="true">&nbsp;&rarr;</span>
              </span>
            </div>
          </Link>
        )}

        {rest.length > 0 && (
          <div className="journal-grid__divider">
            <p className="eyebrow">PREVIOUS DISPATCHES</p>
          </div>
        )}

        <div className="journal-grid__items">
          {(showLatest ? rest : entries).map((entry) => (
            <Link
              key={entry.slug}
              href={`/journal/${entry.slug}`}
              className="journal-card"
            >
              <div className="journal-card__image">
                <Image
                  src={entry.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="journal-card__meta">
                {entry.category} &nbsp;·&nbsp; {entry.readTime}
              </p>
              <h3 className="journal-card__title">{entry.title}</h3>
              <p className="journal-card__excerpt">{entry.excerpt}</p>
              <p className="journal-card__date">{entry.date}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
