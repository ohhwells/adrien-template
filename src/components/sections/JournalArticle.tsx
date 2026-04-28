import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import type { JournalEntry } from '@/types/content';

interface JournalArticleProps {
  entry: JournalEntry;
  related?: JournalEntry[];
}

export function JournalArticle({ entry, related = [] }: JournalArticleProps) {
  return (
    <article className="article">
      <Container>
        <Link href="/journal" className="article__back">
          <span aria-hidden="true">&larr;</span>&nbsp;&nbsp;Back to The Journal
        </Link>
        <p className="eyebrow article__meta">
          {entry.category} &nbsp;·&nbsp; {entry.date} &nbsp;·&nbsp; {entry.readTime}
        </p>
        <h1 className="article__title">{entry.title}</h1>
        <p className="article__excerpt">{entry.excerpt}</p>
      </Container>

      <div className="article__hero">
        <Image
          src={entry.image}
          alt=""
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <Container>
        <div className="article__body">
          {entry.body.map((p, i) => (
            <p key={i} className="article__paragraph">
              {p}
            </p>
          ))}
        </div>

        <div className="article__signature">
          <p className="eyebrow">— ADRIEN</p>
        </div>
      </Container>

      {related.length > 0 && (
        <section className="article__related">
          <Container>
            <p className="eyebrow">CONTINUE READING</p>
            <div className="article__related-grid">
              {related.slice(0, 2).map((r) => (
                <Link
                  key={r.slug}
                  href={`/journal/${r.slug}`}
                  className="article__related-card"
                >
                  <div className="article__related-image">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <p className="eyebrow">{r.category}</p>
                  <h3 className="article__related-title">{r.title}</h3>
                  <p className="article__related-excerpt">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
