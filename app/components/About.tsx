import Image from 'next/image';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="Who I am"
          subtitle="I combine frontend craft with backend fundamentals and ship the product myself."
        />

        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div className="order-2 space-y-5 md:order-1">
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
          </div>

          <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-sm border border-border bg-card">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/Tigran.png"
                  alt="Tigran Avanesyan, fullstack developer"
                  fill
                  quality={80}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
