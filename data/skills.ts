export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'SASS/SCSS', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },

  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'REST API', category: 'backend' },

  { name: 'Git', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Supabase', category: 'tools' },
  { name: 'Stripe', category: 'tools' },
  { name: 'NextAuth', category: 'tools' },
  { name: 'Framer Motion', category: 'tools' },
];
