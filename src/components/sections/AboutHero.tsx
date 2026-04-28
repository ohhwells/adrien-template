import Image from 'next/image';
import { Container } from '@/components/layout/Container';

interface AboutHeroProps {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  subheadline: string;
  image: string;
}

export function AboutHero({ eyebrow, headline, headlineItalic, subheadline, image }: AboutHeroProps) {
  return (
    <section className="about-hero">
      <Container>
        <div className="about-hero__grid">
          <div className="about-hero__text">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="about-hero__headline">
              {headline}
              {headlineItalic && (
                <>
                  {' '}
                  <em>{headlineItalic}</em>
                </>
              )}
            </h1>
            <p className="about-hero__sub">{subheadline}</p>
          </div>
          <div className="about-hero__image">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
