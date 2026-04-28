import { Container } from '@/components/layout/Container';

interface ValuesGridProps {
  eyebrow?: string;
  headline: string;
  items: { title: string; description: string }[];
}

export function ValuesGrid({ eyebrow, headline, items }: ValuesGridProps) {
  return (
    <section className="values">
      <Container>
        <header className="values__header">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="values__headline">{headline}</h2>
        </header>
        <div className="values__grid">
          {items.map((item, i) => (
            <article key={item.title} className="value-card">
              <p className="value-card__num">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="value-card__title">{item.title}</h3>
              <p className="value-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
