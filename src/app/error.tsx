'use client';

import { Button } from '@/components/ui/Button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="system-page">
      <div className="system-page__inner">
        <p className="eyebrow">A QUIET INTERRUPTION</p>
        <h1 className="system-page__title">An unexpected pause.</h1>
        <p className="system-page__body">
          Something behind the scenes did not respond as it should. Please try again.
        </p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </section>
  );
}
