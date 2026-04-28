'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import type { ContactPageContent } from '@/types/content';

export function ContactForm({
  eyebrow,
  headline,
  subheadline,
  fields,
  submitText,
}: ContactPageContent) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact-form">
      <Container>
        <div className="contact-form__grid">
          <header className="contact-form__header">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="contact-form__headline">{headline}</h2>
            <p className="contact-form__sub">{subheadline}</p>
          </header>

          {submitted ? (
            <div className="contact-form__success" role="status">
              <p className="eyebrow">RECEIVED</p>
              <h3 className="contact-form__success-title">Thank you for writing.</h3>
              <p className="contact-form__success-body">
                Adrien will respond to your inquiry personally within two working days.
              </p>
            </div>
          ) : (
            <form className="contact-form__form" onSubmit={handleSubmit} noValidate>
              {fields.map((f) => (
                <div className="form-field" key={f.name}>
                  <label className="form-field__label" htmlFor={f.name}>
                    {f.label}
                    {f.required && <span aria-hidden="true"> *</span>}
                  </label>
                  {f.type === 'textarea' ? (
                    <textarea
                      id={f.name}
                      name={f.name}
                      placeholder={f.placeholder}
                      required={f.required}
                      rows={5}
                      className="form-field__input form-field__input--textarea"
                    />
                  ) : f.type === 'select' ? (
                    <select
                      id={f.name}
                      name={f.name}
                      required={f.required}
                      defaultValue=""
                      className="form-field__input form-field__input--select"
                    >
                      <option value="" disabled>
                        {f.placeholder}
                      </option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.required}
                      className="form-field__input"
                    />
                  )}
                </div>
              ))}

              <div className="contact-form__actions">
                <Button type="submit">{submitText}</Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
