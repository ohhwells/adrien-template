import { Container } from '@/components/layout/Container';
import type { PhilosophyQuoteContent } from '@/types/content';

export function PhilosophyQuote({
  eyebrow,
  pretext,
  quote,
  bodyLeft,
  bodyRight,
}: PhilosophyQuoteContent) {
  return (
    <section className="philosophy">
      <Container>
        <div className="philosophy__grid">
          <aside className="philosophy__aside">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {pretext && (
              <p className="philosophy__pretext">
                {pretext.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < pretext.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            )}
          </aside>
          <div className="philosophy__main">
            <h2 className="philosophy__quote">{quote}</h2>
            <div className="philosophy__body">
              <p>{bodyLeft}</p>
              <p>{bodyRight}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
