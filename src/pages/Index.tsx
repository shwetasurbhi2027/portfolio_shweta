
import React from 'react';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
