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
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    image: '/project-1.jpg',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: '/project-2.jpg',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts and interactive maps.',
    image: '/project-3.jpg',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'OpenWeather API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with data visualization and reporting.',
    image: '/project-4.jpg',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with animations and dark mode support.',
    image: '/project-5.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'A content management system for blogging with markdown support and SEO optimization.',
    image: '/project-6.jpg',
    technologies: ['Next.js', 'TypeScript', 'MDX', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];
