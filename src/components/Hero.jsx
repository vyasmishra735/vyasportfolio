import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef(null);

  // Generative subtle particle constellation & geometric neural web
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Points setup
    const points = [];
    const count = Math.min(Math.floor(width / 32), 38);

    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        isGold: Math.random() > 0.65,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby points
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];

        // Move points
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.isGold ? 'rgba(213, 183, 121, 0.6)' : 'rgba(109, 204, 174, 0.45)';
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 130) * 0.16;
            ctx.strokeStyle = p1.isGold
              ? `rgba(213, 183, 121, ${alpha})`
              : `rgba(255, 255, 255, ${alpha * 0.7})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Interactive Ambient Canvas */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-70"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      >
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>

      {/* Decorative Gold Radial Light Cone */}
      <div
        className="absolute top-1/4 right-5 w-96 h-96 rounded-full pointer-events-none"
        style={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(213, 183, 121, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container-custom relative z-10 w-full" style={{ width: '100%' }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Main Hero Editorial Column */}
          <div className="lg:col-span-8 flex flex-col" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Category / Sub-eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-6"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}
            >
              <div
                className="px-3 py-1 rounded-full font-mono text-xs tracking-widest uppercase flex items-center gap-2"
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(213, 183, 121, 0.08)',
                  border: '1px solid rgba(213, 183, 121, 0.3)',
                  color: 'var(--gold-primary)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.12em',
                }}
              >
                <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                {personalInfo.hero.tagline}
              </div>

              <div
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-[var(--text-silver)]"
                style={{ fontSize: '0.76rem', color: 'var(--text-silver)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <MapPin size={13} className="text-[var(--gold-primary)]" style={{ color: 'var(--gold-primary)' }} />
                <span>{personalInfo.locationShort}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-bold tracking-tight text-[var(--text-warm-white)]"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
                lineHeight: 1.08,
                marginBottom: '1.75rem',
              }}
            >
              Engineering{' '}
              <span className="font-editorial italic font-normal text-gold-gradient">
                Ideas.
              </span>
              <br />
              Crafting{' '}
              <span className="font-editorial italic font-normal text-gold-gradient">
                Digital Experiences.
              </span>
            </motion.h1>

            {/* Supporting Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[var(--text-silver)] max-w-2xl leading-relaxed mb-8"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
                maxWidth: '680px',
                color: 'var(--text-silver)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
              }}
            >
              {personalInfo.hero.supportingText}
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-10"
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn btn-gold"
                style={{ padding: '0.85rem 1.85rem', fontSize: '0.94rem' }}
              >
                <span>{personalInfo.hero.ctaPrimary}</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn btn-outline-gold"
                style={{ padding: '0.85rem 1.85rem', fontSize: '0.94rem' }}
              >
                <span>{personalInfo.hero.ctaSecondary}</span>
                <ArrowUpRight size={16} />
              </a>

              {/* Social Link Badges */}
              <div
                className="flex items-center gap-2 pl-2"
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginLeft: '0.5rem' }}
              >
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (vyasmishra735)"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-silver)] hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] transition-all"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-silver)',
                  }}
                  title="View GitHub (vyasmishra735)"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (Editable Placeholder)"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-silver)] hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] transition-all relative group"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-silver)',
                  }}
                  title="LinkedIn (Placeholder - Click to inspect or update)"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Abstract Visual: Luxury Architectural Monogram & Technical Identity */}
          <div
            className="lg:col-span-4 flex justify-center lg:justify-end"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
              style={{
                width: '320px',
                height: '320px',
                position: 'relative',
              }}
            >
              {/* Outer Geometric Ring */}
              <div
                className="absolute inset-0 rounded-full animate-radar"
                style={{
                  border: '1px dashed rgba(213, 183, 121, 0.25)',
                  borderRadius: '50%',
                }}
              />

              {/* Inner Rotating Ring */}
              <div
                className="absolute inset-4 rounded-full"
                style={{
                  border: '1px solid rgba(109, 204, 174, 0.2)',
                  borderRadius: '50%',
                  transform: 'rotate(45deg)',
                }}
              />

              {/* Core Luxury Card */}
              <div
                className="absolute inset-8 rounded-2xl flex flex-col justify-between p-6 card-luxury"
                style={{
                  position: 'absolute',
                  inset: '2rem',
                  borderRadius: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.5rem',
                  background: 'linear-gradient(145deg, #1A1D24 0%, #121318 100%)',
                  border: '1px solid rgba(213, 183, 121, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
                }}
              >
                {/* Card Header */}
                <div
                  className="flex items-center justify-between text-xs font-mono"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span className="text-[var(--gold-primary)] font-semibold tracking-wider">
                    // IDENTITY
                  </span>
                  <div className="flex items-center gap-1.5" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                    <span className="text-[var(--emerald-mint)] text-[10px]">ACTIVE</span>
                  </div>
                </div>

                {/* Center Monogram */}
                <div className="text-center my-auto" style={{ textAlign: 'center', margin: 'auto 0' }}>
                  <div
                    className="font-editorial text-5xl font-bold tracking-widest text-gold-gradient"
                    style={{ fontSize: '3.5rem', letterSpacing: '0.12em', lineHeight: 1 }}
                  >
                    VM
                  </div>
                  <div
                    className="font-mono text-xs text-[var(--text-silver)] uppercase tracking-widest mt-2"
                    style={{ letterSpacing: '0.15em', fontSize: '0.72rem', color: 'var(--text-silver)' }}
                  >
                    Vyas Mishra
                  </div>
                </div>

                {/* Card Footer Telemetry */}
                <div
                  className="pt-3 border-t border-[rgba(255,255,255,0.06)] font-mono text-[11px] text-[var(--text-muted)] flex justify-between items-center"
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '0.65rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.72rem',
                  }}
                >
                  <span>B.Tech CSE</span>
                  <span className="text-[var(--gold-primary)]">AI • Vision</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 lg:mt-20 flex justify-between items-center pt-8 border-t border-[rgba(255,255,255,0.06)]"
          style={{
            marginTop: '3.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            className="flex items-center gap-3 font-mono text-xs text-[var(--text-muted)] tracking-wider"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.75rem' }}
          >
            <span className="w-8 h-[1px] bg-[rgba(213,183,121,0.4)]" style={{ display: 'inline-block', width: '2rem', height: '1px', backgroundColor: 'rgba(213, 183, 121, 0.5)' }} />
            <span>PORTFOLIO // 2026</span>
          </div>

          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="flex items-center gap-2 font-mono text-xs text-[var(--text-silver)] hover:text-[var(--gold-primary)] transition-colors group"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', textDecoration: 'none' }}
          >
            <span>SCROLL TO DISCOVER</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} className="text-[var(--gold-primary)]" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
