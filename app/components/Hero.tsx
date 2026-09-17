'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import TextRevealEffect from './TextRevealEffect';

const TYPE_SEQUENCE = [
  'Tigran',
  1000,
  'Web Developer',
  1000,
  'React Developer',
  1000,
  'Next.js Developer',
  1000,
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center px-4 pt-24 pb-20 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,var(--accent-muted),transparent_60%)]"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Tigran Avanesyan
        </p>

        <h1 className="font-heading mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-tight">
          <span className="text-accent">Hello, I&apos;m </span>
          <br />
          <span className="sr-only">Tigran, a web developer.</span>
          <span
            aria-hidden="true"
            className="block min-h-[1.2em] text-foreground"
          >
            {reduceMotion ? (
              'Tigran'
            ) : (
              <TypeAnimation
                sequence={TYPE_SEQUENCE}
                wrapper="span"
                speed={20}
                repeat={Infinity}
                preRenderFirstString
              />
            )}
          </span>
        </h1>

        <TextRevealEffect />

        <div className="mt-12 flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-7 py-3 text-sm font-medium text-accent-foreground"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
          <a
            href="/CV.pdf"
            download="Tigran-Avanesyan-CV.pdf"
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
            <span className="sr-only"> (PDF)</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
