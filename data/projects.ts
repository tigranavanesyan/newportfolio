export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  role?: string;
}

export const projects: Project[] = [
  {
    id: '4',
    title: 'Lingo Tool',
    description:
      'Language-learning platform with AI-assisted translations and voice recognition, built for a multilingual product from the start.',
    image: '/demo4.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'next-intl'],
    liveUrl: 'https://lingo-tool.com',
    featured: true,
    role: 'Design & development',
  },
  {
    id: '5',
    title: 'Linkorium',
    description:
      'A bookmarking product for saving and organizing links — signed-in library, not a throwaway list.',
    image: '/demo5.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'next-auth'],
    liveUrl: 'https://www.linkorium.com',
    featured: true,
    role: 'Fullstack',
  },
  {
    id: '6',
    title: 'Cave Lab',
    description:
      'Website for an educational studio: clear structure, readable pages, no extra chrome.',
    image: '/demo6.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://cavelab.am/',
    featured: true,
    role: 'Web development',
  },
  {
    id: '1',
    title: 'Marketing landing',
    description: 'Campaign landing built in React with motion and a tight visual system.',
    image: '/demo1.png',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/tigranavanesyan/demo1',
    liveUrl: 'https://demo1-sandy-nine.vercel.app/',
  },
  {
    id: '2',
    title: 'Editorial blog',
    description: 'Content site experiment with structured pages and SEO-minded markup.',
    image: '/demo2.png',
    technologies: ['React', 'JavaScript', 'CSS Modules'],
    githubUrl: 'https://github.com/tigranavanesyan/test',
    liveUrl: 'https://test-five-beta-25.vercel.app/',
  },
  {
    id: '3',
    title: 'Personal site',
    description: 'This portfolio — a quiet place to present shipped work.',
    image: '/demo3.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/tigranavanesyan/newportfolio',
    liveUrl: 'https://tigranavanesyan.vercel.app/',
  },
];
