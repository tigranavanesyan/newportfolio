export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Landing Page',
    description: 'React Landing Page using React, Tailwind CSS, and Framer Motion',
    image: '/demo1.png',
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/tigranavanesyan/demo1',
    liveUrl: 'https://demo1-sandy-nine.vercel.app/'
  },
  {
    id: '2',
    title: 'Blog Platform',
    description: 'A content management system for blogging with markdown support and SEO optimization.',
    image: '/demo2.png',
    technologies: ['React', 'JavaScript', 'CSS Modules'],
    githubUrl: 'https://github.com/tigranavanesyan/test',
    liveUrl: 'https://test-five-beta-25.vercel.app/'
  },
  {
    id: '3',
    title: 'Portfolio Website (This one)',
    description: 'A modern, responsive portfolio website with animations and dark mode support.',
    image: '/demo3.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/tigranavanesyan/newportfolio',
    liveUrl: 'https://tigranavanesyan.vercel.app/'
  },
  {
    id: '4',
    title: 'Lingo Tool',
    description: 'Language learning platform for learning languages with AI-powered translations and voice recognition.',
    image: '/demo4.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'next-intl'],
    githubUrl: '',
    liveUrl: 'https://lingo-tool.com'
  },
  {
    id: '5',
    title: 'Bookmarking Tool',
    description: 'A bookmarking tool for saving and organizing your favorite links.',
    image: '/demo5.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'next-auth'],
    githubUrl: '',
    liveUrl: 'https://www.linkorium.com'
  },
  {
    id: '6',
    title: 'Cave Lab',
    description: 'A website for an educational institution',
    image: '/demo6.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '',
    liveUrl: 'https://cavelab.am/'
  }
];
