export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 pt-24 pb-20 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,var(--accent-muted),transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Tigran Avanesyan
        </p>

        <h1 className="font-heading mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          I design and ship web products end to end.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Frontend craft with enough backend to take a product from interface
          to deploy.
        </p>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
