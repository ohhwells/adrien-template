import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import type { ServiceItem } from '@/types/content';

interface ConsultationsListProps {
  items: ServiceItem[];
}

export function ConsultationsList({ items }: ConsultationsListProps) {
  return (
    <section className="consultations-list">
      <Container>
        {items.map((item, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={item.title}
              className={`consult-row${reverse ? ' consult-row--reverse' : ''}`}
            >
              {item.image && (
                <div className="consult-row__image">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className="consult-row__text">
                {item.num && <p className="eyebrow">ENGAGEMENT {item.num}</p>}
                <h2 className="consult-row__title">{item.title}</h2>
                <p className="consult-row__lede">{item.description}</p>
                <dl className="consult-row__meta">
                  {item.duration && (
                    <>
                      <dt>Duration</dt>
                      <dd>{item.duration}</dd>
                    </>
                  )}
                  {item.format && (
                    <>
                      <dt>Format</dt>
                      <dd>{item.format}</dd>
                    </>
                  )}
                  {item.investment && (
                    <>
                      <dt>Investment</dt>
                      <dd>{item.investment}</dd>
                    </>
                  )}
                </dl>
                {item.slug && (
                  <Link
                    href={`/consultations/${item.slug}`}
                    className="btn btn--ghost"
                  >
                    Read full engagement
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </Container>
    </section>
  );
}
