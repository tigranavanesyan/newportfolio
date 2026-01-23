import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Fullstack Frontend Developer - Creating modern, responsive web applications with a focus on user experience and performance.",
  openGraph: {
    title: "Portfolio - Fullstack Frontend Developer",
    description: "Creating modern, responsive web applications with a focus on user experience and performance.",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Portfolio Developer",
    "jobTitle": "Fullstack Frontend Developer",
    "description": "I'm a passionate fullstack frontend developer with expertise in building scalable web applications.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "sameAs": [
      "https://github.com",
      "https://linkedin.com"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "Fullstack Development"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
