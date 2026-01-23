export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'SASS/SCSS', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'REST API', category: 'backend' },
  
  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Cursor', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Framer Motion', category: 'tools' },
];
