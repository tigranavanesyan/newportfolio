'use client';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
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
    <footer className="border-t border-border bg-muted/40">
      <div className="container mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-base font-semibold text-foreground">
              Tigran Avanesyan
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Fullstack frontend developer · © {year}
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

          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a
              href="mailto:web.tigranavanesyan@gmail.com"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              Email
            </a>
            <a
              href="https://github.com/tigranavanesyan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tigran-avanesyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
