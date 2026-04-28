import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import type { ServiceItem } from '@/types/content';

interface ConsultationsGridProps {
  eyebrow?: string;
  headline: string;
  items: ServiceItem[];
  variant?: 'home' | 'index';
}

export function ConsultationsGrid({
  eyebrow,
  headline,
  items,
  variant = 'home',
}: ConsultationsGridProps) {
  return (
    <section className={`consultations consultations--${variant}`}>
      <Container>
        <header className="consultations__header">
          <h2 className="consultations__heading">{headline}</h2>
          {eyebrow && <p className="consultations__eyebrow">{eyebrow}</p>}
        </header>

        <div className="consultations__grid">
          {items.map((item) => {
            const href = item.slug ? `/consultations/${item.slug}` : '/consultations';
            return (
              <article key={item.title} className="consult-card">
                {item.num && <p className="consult-card__num">{item.num}</p>}
                <h3 className="consult-card__title">{item.title}</h3>
                <p className="consult-card__desc">{item.description}</p>
                <Link href={href} className="consult-card__cta">
                  Inquire <span aria-hidden="true">&nbsp;&rarr;</span>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
