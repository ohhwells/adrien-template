import { Container } from '@/components/layout/Container';

interface CredentialsProps {
  eyebrow?: string;
  headline: string;
  items: { label: string; value: string }[];
}

export function Credentials({ eyebrow, headline, items }: CredentialsProps) {
  return (
    <section className="credentials">
      <Container>
        <div className="credentials__grid">
          <header className="credentials__header">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="credentials__headline">{headline}</h2>
          </header>
          <ul className="credentials__list">
            {items.map((item) => (
              <li key={item.label} className="credentials__item">
                <p className="credentials__label">{item.label}</p>
                <p className="credentials__value">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
