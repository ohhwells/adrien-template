import { Container } from '@/components/layout/Container';

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  subheadline?: string;
  intro?: string;
}

export function PageHero({ eyebrow, headline, headlineItalic, subheadline, intro }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Container>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__headline">
          {headline}
          {headlineItalic && (
            <>
              {' '}
              <em>{headlineItalic}</em>
            </>
          )}
        </h1>
        {subheadline && <p className="page-hero__sub">{subheadline}</p>}
        {intro && <p className="page-hero__intro">{intro}</p>}
      </Container>
    </section>
  );
}
