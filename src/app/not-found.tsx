import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="system-page">
      <div className="system-page__inner">
        <p className="system-page__code">404</p>
        <h1 className="system-page__title">This page is not in the practice.</h1>
        <p className="system-page__body">
          The page you are looking for has been moved, retired, or did not exist.
          Begin again from the philosophy.
        </p>
        <Button href="/">Return to Philosophy</Button>
      </div>
    </section>
  );
}
