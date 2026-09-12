'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
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
            eyebrow="Work"
            title="Selected products"
            subtitle="Shipped work first. Smaller experiments sit below."
          />
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 }}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
              className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border bg-muted lg:col-span-7">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col lg:col-span-5 lg:pt-2">
                {project.role ? (
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                    {project.role}
                  </p>
                ) : null}
                <h3 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-5">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      <ExternalLink size={16} aria-hidden />
                      Live
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                    >
                      <Github size={16} aria-hidden />
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {more.length > 0 ? (
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 border-t border-border pt-12"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              More
            </h3>
            <ul className="mt-6 divide-y divide-border">
              {more.map((project) => (
                <li
                  key={project.id}
                  className="flex flex-col gap-3 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div className="min-w-0">
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {project.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-4 text-sm">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground transition-colors hover:text-accent"
                      >
                        Live
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-accent"
                      >
                        Code
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
