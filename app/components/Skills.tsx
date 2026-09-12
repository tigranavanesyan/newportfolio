import { skills } from '@/data/skills';
import SectionHeader from './SectionHeader';

export default function Skills() {
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
    <section id="skills" className="bg-muted/50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Stack"
          title="How I build"
          subtitle="The tools I actually reach for when shipping a product."
        />

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {skillCategories.map((category) => (
            <div key={category.name}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
