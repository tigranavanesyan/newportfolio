'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/projects';
import { ExternalLink, Github, LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

function ProjectImagePlaceholder({ title }: { title: string }) {
  const initial = title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full min-h-[12rem] w-full flex-col items-center justify-center gap-2 bg-muted">
      <LayoutGrid className="h-10 w-10 text-muted-foreground" aria-hidden />
      <span className="font-heading text-2xl font-bold tracking-tight text-muted-foreground">
        {initial}
      </span>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
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
            eyebrow="Work"
            title="Projects"
            subtitle="A selection of recent builds — from marketing sites to full platforms."
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-wrap gap-2 p-4 transition-transform duration-300 group-hover:translate-y-0">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-md ring-1 ring-border"
                        >
                          <Github size={14} aria-hidden />
                          Code
                        </a>
                      ) : null}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground shadow-md"
                        >
                          <ExternalLink size={14} aria-hidden />
                          Live
                        </a>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <ProjectImagePlaceholder title={project.title} />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                    >
                      <Github size={18} aria-hidden />
                      View code
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                    >
                      <ExternalLink size={18} aria-hidden />
                      Live demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
