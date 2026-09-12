'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);
  const invalid = status === 'error';

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      statusRef.current?.focus();
    }
  }, [status]);

  return (
    <section id="contact" className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Contact"
              title="Tell me about a project"
              subtitle="I usually reply within a day."
            />
            <a
              href="mailto:web.tigranavanesyan@gmail.com"
              className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              web.tigranavanesyan@gmail.com
            </a>
          </div>

          <form
            className="border border-border bg-card p-6 sm:p-8 lg:col-span-7"
            aria-busy={status === 'sending'}
            aria-describedby="form-status"
            onSubmit={async (e) => {
              e.preventDefault();
              setErrorMessage('');
              setStatus('sending');
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = formData.get('name') as string;
              const email = formData.get('email') as string;
              const message = formData.get('message') as string;
              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name, email, message }),
                });
                const data = await res.json().catch(() => ({}));
                if (!res.ok) {
                  setStatus('error');
                  setErrorMessage(data.error ?? 'Something went wrong');
                  return;
                }
                setStatus('success');
                form.reset();
              } catch {
                setStatus('error');
                setErrorMessage('Failed to send message');
              }
            }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  aria-invalid={invalid || undefined}
                  aria-describedby={invalid ? 'form-status' : undefined}
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  aria-invalid={invalid || undefined}
                  aria-describedby={invalid ? 'form-status' : undefined}
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                aria-invalid={invalid || undefined}
                aria-describedby={invalid ? 'form-status' : undefined}
                className="w-full resize-y rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
                placeholder="What are you building?"
                required
              />
            </div>

            <div
              id="form-status"
              ref={statusRef}
              tabIndex={-1}
              className="mt-4 min-h-6 outline-none"
              role="status"
              aria-live="polite"
            >
              {status === 'success' ? (
                <p className="text-sm font-medium text-green-700 dark:text-green-400">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="text-sm font-medium text-red-700 dark:text-red-400">
                  {errorMessage}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              aria-busy={status === 'sending'}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-7 py-3 text-sm font-medium text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
