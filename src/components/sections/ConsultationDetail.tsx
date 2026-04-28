import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { ServiceItem } from '@/types/content';

interface ConsultationDetailProps {
  item: ServiceItem;
  next?: { slug?: string; title: string };
  previous?: { slug?: string; title: string };
}

export function ConsultationDetail({ item, next, previous }: ConsultationDetailProps) {
  return (
    <article className="consult-detail">
      {/* Hero */}
      <header className="consult-detail__hero">
        <Container>
          <div className="consult-detail__hero-grid">
            <div className="consult-detail__hero-text">
              <Link href="/consultations" className="consult-detail__back">
                <span aria-hidden="true">&larr;</span>&nbsp;&nbsp;Back to Consultations
              </Link>
              {item.num && <p className="eyebrow">ENGAGEMENT {item.num}</p>}
              <h1 className="consult-detail__title">{item.title}</h1>
              <p className="consult-detail__lede">{item.description}</p>
            </div>
            {item.image && (
              <div className="consult-detail__hero-image">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* Body */}
      <section className="consult-detail__body">
        <Container>
          <div className="consult-detail__body-grid">
            <aside className="consult-detail__meta">
              <p className="eyebrow">DETAILS</p>
              <dl>
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
              <Button href="/contact">Inquire about this engagement</Button>
            </aside>
            <div className="consult-detail__prose">
              <p className="eyebrow">THE WORK</p>
              {item.longDescription?.map((p, i) => (
                <p key={i} className="consult-detail__paragraph">
                  {p}
                </p>
              ))}

              {item.inclusions && item.inclusions.length > 0 && (
                <>
                  <p className="eyebrow consult-detail__inclusions-eyebrow">
                    WHAT IS INCLUDED
                  </p>
                  <ul className="consult-detail__inclusions">
                    {item.inclusions.map((inc, i) => (
                      <li key={i} className="consult-detail__inclusion">
                        <span className="consult-detail__inclusion-num">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Pagination */}
      {(previous || next) && (
        <nav className="consult-detail__pagination" aria-label="More engagements">
          <Container>
            <div className="consult-detail__pagination-grid">
              {previous && previous.slug && (
                <Link
                  href={`/consultations/${previous.slug}`}
                  className="consult-detail__pag consult-detail__pag--prev"
                >
                  <span className="eyebrow">PREVIOUS</span>
                  <span className="consult-detail__pag-title">{previous.title}</span>
                </Link>
              )}
              {next && next.slug && (
                <Link
                  href={`/consultations/${next.slug}`}
                  className="consult-detail__pag consult-detail__pag--next"
                >
                  <span className="eyebrow">NEXT</span>
                  <span className="consult-detail__pag-title">{next.title}</span>
                </Link>
              )}
            </div>
          </Container>
        </nav>
      )}
    </article>
  );
}
