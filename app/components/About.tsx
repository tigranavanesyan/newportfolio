'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Code2, Users, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

function useCountUp(
  end: number,
  enabled: boolean,
  durationMs: number,
  startDelayMs: number
) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Reset before replay when deps change (e.g. strict mode remount)
    queueMicrotask(() => setCount(0));
    let startTime: number | null = null;

    const run = () => {
      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.floor(eased * end));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      rafRef.current = requestAnimationFrame(animate);
    };

    const delayTimeout = setTimeout(run, startDelayMs);

    return () => {
      clearTimeout(delayTimeout);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [end, enabled, durationMs, startDelayMs]);

  return count;
}

type StatItem = {
  icon: LucideIcon;
  end: number;
  label: string;
};

function StatCard({
  stat,
  isInView,
  index,
}: {
  stat: StatItem;
  isInView: boolean;
  index: number;
}) {
  const count = useCountUp(stat.end, isInView, 1800, index * 120);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
      className="group rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md"
    >
      <div className="mb-4 inline-flex rounded-xl bg-accent p-3 text-accent-foreground transition-transform duration-300 group-hover:scale-105">
        <stat.icon className="h-8 w-8" aria-hidden />
      </div>
      <div className="mb-2 text-5xl font-bold tabular-nums text-foreground">
        {count}+
      </div>
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Briefcase, end: 4, label: 'Years of experience' },
    { icon: Code2, end: 50, label: 'Projects completed' },
    { icon: Users, end: 30, label: 'Happy clients' },
  ] as const;

  return (
    <section
      id="about"
      ref={ref}
      className="bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.55 }}
        >
          <SectionHeader
            eyebrow="About"
            title="Who I am"
            subtitle="I combine frontend craft with solid backend fundamentals to ship products end to end."
          />
        </motion.div>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -36 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="order-2 space-y-6 md:order-1"
          >
            <div className="max-w-prose space-y-5">
              <p className="text-lg font-light leading-relaxed text-foreground md:text-xl">
                I&apos;m a passionate{' '}
                <span className="font-semibold">fullstack frontend developer</span>{' '}
                with experience building scalable web applications.
              </p>
              <p className="text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
                I focus on{' '}
                <span className="font-medium text-foreground">
                  intuitive interfaces
                </span>{' '}
                and{' '}
                <span className="font-medium text-foreground">
                  reliable systems
                </span>{' '}
                — from design polish to API design and deployment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative order-1 flex justify-center md:order-2 md:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 blur-2xl dark:from-accent/10 dark:to-transparent"
                aria-hidden
              />

              <div className="relative rounded-2xl border border-border bg-card p-3 shadow-lg">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/Tigran.png"
                    alt="Tigran Avanesyan, fullstack developer"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="mb-8 text-center text-sm text-muted-foreground">
          Figures are approximate and reflect career highlights to date.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} isInView={isInView} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
