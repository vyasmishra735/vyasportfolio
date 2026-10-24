import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Interests', href: '#interests' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background blur on scroll
      setIsScrolled(window.scrollY > 40);

      // Scroll spy for active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(11,12,15,0.85)] backdrop-blur-md border-b border-[rgba(255,255,255,0.08)] py-3.5 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo & Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Vyas Mishra Portfolio Home"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
          >
            {/* Geometric Monogram Badge */}
            <div
              className="relative w-10 h-10 rounded-lg flex items-center justify-center font-editorial font-bold text-sm tracking-wider transition-all duration-300"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #17191F 0%, #121318 100%)',
                border: '1px solid rgba(213, 183, 121, 0.4)',
                color: 'var(--gold-primary)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.08em',
              }}
            >
              VM
              {/* Corner emerald pip */}
              <span
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--emerald-mint)',
                  boxShadow: '0 0 6px var(--emerald-mint)',
                }}
              />
            </div>

            <div className="hidden sm:flex flex-col" style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="font-semibold text-sm tracking-wider uppercase text-[var(--text-warm-white)] group-hover:text-[var(--gold-primary)] transition-colors"
                style={{ fontSize: '0.92rem', letterSpacing: '0.06em', color: 'var(--text-warm-white)' }}
              >
                {personalInfo.fullName}
              </span>
              <span
                className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-1.5"
                style={{ fontSize: '0.72rem', letterSpacing: '0.04em', color: 'var(--text-muted)' }}
              >
                <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                AI & Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            aria-label="Main Navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'rgba(23, 25, 31, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              borderRadius: '9999px',
              padding: '0.35rem 0.65rem',
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200"
                  style={{
                    position: 'relative',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.04em',
                    color: isActive ? 'var(--gold-primary)' : 'var(--text-silver)',
                    textDecoration: 'none',
                    borderRadius: '9999px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(213, 183, 121, 0.12)',
                        border: '1px solid rgba(213, 183, 121, 0.35)',
                        borderRadius: '9999px',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-outline-gold hidden lg:inline-flex"
              style={{
                fontSize: '0.82rem',
                padding: '0.55rem 1.15rem',
                borderRadius: '9999px',
                gap: '0.45rem',
              }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[var(--text-warm-white)] hover:text-[var(--gold-primary)] transition-colors"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'rgba(23, 25, 31, 0.8)',
                color: 'var(--text-warm-white)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-24 pb-8 px-6"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              backgroundColor: 'rgba(11, 12, 15, 0.98)',
              backdropFilter: 'blur(20px)',
              paddingTop: '6rem',
              paddingBottom: '2rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div className="flex flex-col gap-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div
                className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2 px-3"
                style={{ fontSize: '0.72rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}
              >
                // Navigation Index
              </div>
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="flex items-center justify-between p-3.5 rounded-lg text-lg font-medium transition-all"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: isActive ? 'var(--gold-primary)' : 'var(--text-warm-white)',
                      backgroundColor: isActive ? 'rgba(213, 183, 121, 0.08)' : 'transparent',
                      border: isActive ? '1px solid rgba(213, 183, 121, 0.25)' : '1px solid transparent',
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      0{idx + 1}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div
              className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-4"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                className="flex items-center gap-2 text-xs font-mono text-[var(--text-silver)]"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem' }}
              >
                <span className="status-dot" />
                <span>{personalInfo.availabilityStatus}</span>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn btn-gold w-full text-center"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
