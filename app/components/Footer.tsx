'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              Tigran Avanesyan
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Fullstack developer · © {year}
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="mailto:web.tigranavanesyan@gmail.com"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/tigranavanesyan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tigran-avanesyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
