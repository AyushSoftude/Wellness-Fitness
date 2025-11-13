
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechnologyStack from './components/TechnologyStack';

const App: React.FC = () => {
  const aboutRef = React.useRef<HTMLElement>(null);
  const projectsRef = React.useRef<HTMLElement>(null);
  const contactRef = React.useRef<HTMLElement>(null);
  const skillsRef = React.useRef<HTMLElement>(null);
  const techRef = React.useRef<HTMLElement>(null);

  const scrollTo = (section: 'about' | 'projects' | 'contact' | 'skills' | 'tech') => {
    const refs = {
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
      skills: skillsRef,
      tech: techRef,
    };
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 text-slate-700 font-sans">
      <Header onNavigate={scrollTo} />
      <main>
        <Hero onNavigate={() => scrollTo('projects')} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <TechnologyStack ref={techRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;