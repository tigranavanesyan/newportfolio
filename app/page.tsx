import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  description:
    'Tigran Avanesyan — fullstack frontend developer. I design and ship web products end to end.',
  openGraph: {
    title: 'Tigran Avanesyan — Fullstack Frontend Developer',
    description:
      'I design and ship web products end to end — frontend craft with enough backend to take a product live.',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tigran Avanesyan',
    jobTitle: 'Fullstack Frontend Developer',
    description:
      'Fullstack frontend developer who designs and ships web products end to end.',
    url: siteUrl,
    sameAs: [
      'https://github.com/tigranavanesyan',
      'https://www.linkedin.com/in/tigran-avanesyan/',
    ],
    email: 'web.tigranavanesyan@gmail.com',
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Frontend Development',
      'Fullstack Development',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
