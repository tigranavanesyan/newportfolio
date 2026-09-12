'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-background px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="About"
            title="Who I am"
            subtitle="I combine frontend craft with backend fundamentals and ship the product myself."
          />
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="order-2 space-y-5 md:order-1"
          >
            <p className="max-w-prose text-lg leading-relaxed text-foreground">
              I work across the interface and the system behind it — layout,
              motion, APIs, and deploy — so a product can leave the notebook
              and stay maintainable.
            </p>
            <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
              Recent work includes Lingo Tool, a language-learning platform;
              Linkorium, a bookmarking product; and Cave Lab, a site for an
              educational studio.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="relative order-1 flex justify-center md:order-2 md:justify-end"
          >
            <div className="relative w-full max-w-sm overflow-hidden rounded-sm border border-border bg-card">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/Tigran.png"
                  alt="Tigran Avanesyan, fullstack developer"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
