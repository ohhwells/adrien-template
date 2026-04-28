import Link from 'next/link';
import { Container } from './Container';
import type { FooterContent, SocialLink, NavItem } from '@/types/content';

interface FooterProps {
  content: FooterContent;
  socials: SocialLink[];
  navItems?: NavItem[];
  logoText?: string;
}

export function Footer({ content, socials, navItems, logoText }: FooterProps) {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <Link href="/" className="footer__logo">
            {logoText || 'ADRIEN'}
          </Link>

          <div className="footer__center">
            {socials && socials.length > 0 && (
              <nav className="footer__socials" aria-label="Footer">
                {socials.map((s) => {
                  const isExternal = s.url.startsWith('http');
                  return isExternal ? (
                    <a
                      key={s.platform}
                      href={s.url}
                      className="footer__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.platform}
                    </a>
                  ) : (
                    <Link key={s.platform} href={s.url} className="footer__link">
                      {s.platform}
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>

          <p className="footer__copyright">{content.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
