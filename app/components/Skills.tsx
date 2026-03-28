'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/skills';
import { getSkillIcon } from '@/lib/skillIcons';
import SectionHeader from './SectionHeader';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const frontendSkills = skills.filter((s) => s.category === 'frontend');
  const backendSkills = skills.filter((s) => s.category === 'backend');
  const toolsSkills = skills.filter((s) => s.category === 'tools');

  const skillCategories = [
    { name: 'Frontend', skills: frontendSkills },
    { name: 'Backend', skills: backendSkills },
    { name: 'Tools', skills: toolsSkills },
  ];

  return (
    <section
      id="skills"
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
            eyebrow="Skills"
            title="Tech stack"
            subtitle="Technologies and tools I use to design, build, and ship software."
          />
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.12 }}
            >
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = getSkillIcon(skill.name);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.94 }
                      }
                      transition={{
                        duration: 0.35,
                        delay: categoryIndex * 0.12 + skillIndex * 0.04,
                      }}
                      whileHover={{ y: -3 }}
                      className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-colors hover:border-accent/40 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 items-center justify-center text-foreground [&>svg]:h-7 [&>svg]:w-7">
                        <Icon aria-hidden />
                      </span>
                      <span className="text-sm font-medium leading-tight text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
