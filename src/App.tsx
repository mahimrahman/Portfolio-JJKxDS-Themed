import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DevelopmentRecord from './components/records/DevelopmentRecord';
import GraphicDesignRecord from './components/records/GraphicDesignRecord';
import PhotographyRecord from './components/records/PhotographyRecord';
import UIUXRecord from './components/records/UIUXRecord';
import Portfolio from './components/Portfolio';
import Training from './components/Training';

const Placeholder: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-deep-charcoal text-snow-white text-4xl font-bold">
    {title}
  </div>
);

// Generate random particles for the anime energy effect
const particles = Array.from({ length: 18 }).map((_, i) => {
  const colors = [
    'rgba(58,134,255,0.7)', // blue (cursed energy)
    'rgba(255,78,0,0.7)',   // orange (flame)
    'rgba(127,0,255,0.7)',  // purple (domain)
    'rgba(255,208,0,0.7)',  // gold (lightning)
    'rgba(255,0,64,0.7)',   // red (blood)
  ];
  const color = colors[i % colors.length];
  const size = Math.random() * 32 + 24;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const delay = Math.random() * 8;
  return (
    <div
      key={i}
      className="anime-particle"
      style={{
        background: color,
        width: size,
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );
});

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-deep-charcoal">
        <div className="anime-particles">{particles}</div>
        <Navigation />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <section id="home" className="relative">
                  <Hero />
                </section>
                <section id="about" className="relative">
                  <About />
                </section>
                <section id="experience" className="relative">
                  <Experience />
                </section>
                <section id="projects" className="relative">
                  <Projects />
                </section>
                <section id="portfolio" className="relative">
                  <Portfolio />
                </section>
                <section id="training" className="relative">
                  <Training />
                </section>
                <section id="contact" className="relative">
                  <Contact />
                </section>
              </>
            } />
            <Route path="/records/development" element={<DevelopmentRecord />} />
            <Route path="/records/graphic-design" element={<GraphicDesignRecord />} />
            <Route path="/records/photography" element={<PhotographyRecord />} />
            <Route path="/records/uiux" element={<UIUXRecord />} />
            <Route path="/development" element={<Placeholder title="Development: Code Sorcery" />} />
            <Route path="/uiux" element={<Placeholder title="UI/UX: User Alchemy" />} />
            <Route path="/photography" element={<Placeholder title="Photography: Lens Chronicles" />} />
            <Route path="/design" element={<Placeholder title="Graphic Design: Visual Symmetry" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 