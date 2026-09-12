'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/skills';
import SectionHeader from './SectionHeader';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      name: 'Frontend',
      skills: skills.filter((skill) => skill.category === 'frontend'),
    },
    {
      name: 'Backend',
      skills: skills.filter((skill) => skill.category === 'backend'),
    },
    {
      name: 'Tools',
      skills: skills.filter((skill) => skill.category === 'tools'),
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-muted/50 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            eyebrow="Stack"
            title="How I build"
            subtitle="The tools I actually reach for when shipping a product."
          />
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 12 }}
              transition={{ duration: 0.45, delay: 0.08 + categoryIndex * 0.06 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
