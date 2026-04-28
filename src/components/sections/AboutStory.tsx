import Image from 'next/image';
import { Container } from '@/components/layout/Container';

interface AboutStoryProps {
  image: string;
  headline: string;
  body: string[];
}

export function AboutStory({ image, headline, body }: AboutStoryProps) {
  return (
    <section className="about-story">
      <Container>
        <div className="about-story__grid">
          <div className="about-story__image">
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="about-story__text">
            <h2 className="about-story__headline">{headline}</h2>
            {body.map((p, i) => (
              <p key={i} className="about-story__paragraph">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
