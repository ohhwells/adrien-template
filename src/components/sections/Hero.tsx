import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { HeroContent } from '@/types/content';

export function Hero({
  eyebrow,
  headline,
  headlineItalic,
  subheadline,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}: HeroContent) {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__text">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="hero__headline">
              <span className="hero__headline-main">{headline}</span>
              {headlineItalic && (
                <span className="hero__headline-italic">{headlineItalic}</span>
              )}
            </h1>
            <p className="hero__sub">{subheadline}</p>
            <div className="hero__actions">
              <Button href={ctaLink}>{ctaText}</Button>
              {secondaryCtaText && secondaryCtaLink && (
                <Button href={secondaryCtaLink} variant="ghost">
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
          {backgroundImage && (
            <div className="hero__image">
              <Image
                src={backgroundImage}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
