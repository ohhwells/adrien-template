import { Container } from '@/components/layout/Container';
import type { PullQuoteContent } from '@/types/content';

export function PullQuote({ quote, author, role }: PullQuoteContent) {
  return (
    <section className="pullquote">
      <Container>
        <div className="pullquote__inner">
          <span className="pullquote__mark pullquote__mark--open" aria-hidden="true">&ldquo;</span>
          <blockquote className="pullquote__body">
            <p>{quote}</p>
            <footer className="pullquote__attr">
              <p className="pullquote__author">{author}</p>
              <p className="pullquote__role">{role}</p>
            </footer>
          </blockquote>
          <span className="pullquote__mark pullquote__mark--close" aria-hidden="true">&rdquo;</span>
        </div>
      </Container>
    </section>
  );
}
