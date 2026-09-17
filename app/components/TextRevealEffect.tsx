'use client';

import splitStringUsingRegex from '@/lib/splitStringUsingRegex';
import { motion, useReducedMotion } from 'framer-motion';

const HEADING = '🚀 I design and ship web products end to end.';
const TEXT =
  '✨ Frontend craft with enough backend to take a product from interface to deploy.';

const headingChars = splitStringUsingRegex(HEADING);
const textChars = splitStringUsingRegex(TEXT);

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const headingContainer = {
  hidden: {},
  reveal: {
    transition: { staggerChildren: 0.02 },
  },
};

const textContainer = {
  hidden: {},
  reveal: {
    transition: { staggerChildren: 0.015 },
  },
};

export default function TextRevealEffect() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <>
        <p className="mt-6 max-w-4xl text-pretty text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          {HEADING}
        </p>
        <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {TEXT}
        </p>
      </>
    );
  }

  return (
    <>
      <motion.p
        className="mt-6 max-w-4xl text-pretty text-2xl font-medium leading-snug text-foreground sm:text-3xl"
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        variants={headingContainer}
      >
        {headingChars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            transition={{ duration: 0.5 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.p
        className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        variants={textContainer}
      >
        {textChars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            transition={{ duration: 0.35 }}
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>
    </>
  );
}
