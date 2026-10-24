import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useReducedMotion } from './hooks/useReducedMotion';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // If reduced motion is requested, avoid GSAP scroll triggers
    if (prefersReduced) return;

    // Use GSAP context for safe React mounting and clean unmounting
    const ctx = gsap.context(() => {
      // Subtle section divider expansion animation
      gsap.utils.toArray('.section-divider').forEach((divider) => {
        gsap.from(divider, {
          scaleX: 0,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: divider,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, mainRef);

    return () => ctx.revert(); // Clean up on unmount
  }, [prefersReduced]);

  return (
    <div ref={mainRef} className="site-wrapper">
      {/* Accessible skip link for keyboard navigation */}
      <a href="#hero" className="skip-link">
        Skip to main content
      </a>

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Luxury Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content">
        <Hero />
        <hr className="section-divider" />
        
        <About />
        <hr className="section-divider" />

        <Skills />
        <hr className="section-divider" />

        <Projects />
        <hr className="section-divider" />

        <Education />
        <hr className="section-divider" />

        <Interests />
        <hr className="section-divider" />

        <Contact />
      </main>

      {/* Luxury Minimalist Footer */}
      <Footer />
    </div>
  );
}
