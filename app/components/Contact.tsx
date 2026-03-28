'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import SectionHeader from './SectionHeader';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:web.tigranavanesyan@gmail.com',
      text: 'web.tigranavanesyan@gmail.com',
      external: false,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/tigranavanesyan',
      text: 'github.com/tigranavanesyan',
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tigran-avanesyan/',
      text: 'linkedin.com/in/tigran-avanesyan/',
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch"
            subtitle="Have a project in mind or want to collaborate? Send a message — I usually reply within a day."
          />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {contactLinks.map((link, index) => {
              const sharedClass =
                'flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md';
              const inner = (
                <>
                  <link.icon
                    className="mb-4 h-8 w-8 text-accent"
                    aria-hidden
                  />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="mt-1 break-all text-sm font-semibold text-foreground">
                    {link.text}
                  </span>
                </>
              );
              return link.external ? (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                  whileHover={{ y: -2 }}
                  className={sharedClass}
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                  whileHover={{ y: -2 }}
                  className={sharedClass}
                >
                  {inner}
                </motion.a>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3"
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
            aria-describedby="form-status"
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
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
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
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
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
                className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
                placeholder="Tell me about your project…"
                required
              />
            </div>

            <div
              id="form-status"
              className="mt-4 min-h-6"
              role="status"
              aria-live="polite"
            >
              {status === 'success' ? (
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  {errorMessage}
                </p>
              ) : null}
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={status !== 'sending' ? { scale: 1.02 } : undefined}
              whileTap={status !== 'sending' ? { scale: 0.98 } : undefined}
              className="mt-2 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3 font-semibold text-accent-foreground shadow-md transition-shadow hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <Send size={20} aria-hidden />
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
