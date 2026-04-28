import { Container } from '@/components/layout/Container';

interface ContactDetailsProps {
  eyebrow: string;
  items: { label: string; value: string; href?: string }[];
}

export function ContactDetails({ eyebrow, items }: ContactDetailsProps) {
  return (
    <section className="contact-details">
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <ul className="contact-details__list">
          {items.map((item) => (
            <li key={item.label} className="contact-details__item">
              <p className="contact-details__label">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="contact-details__value contact-details__value--link">
                  {item.value}
                </a>
              ) : (
                <p className="contact-details__value">{item.value}</p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
