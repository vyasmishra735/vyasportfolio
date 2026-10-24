import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Code2, Compass, CheckCircle2, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const { about } = personalInfo;

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="01 // BACKGROUND"
          title="A Little About Me"
          highlightWord="About Me"
          subtitle="Combining foundational engineering discipline with artificial intelligence and software design."
        />

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Pull Quote Box */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-xl relative"
              style={{
                backgroundColor: 'rgba(23, 25, 31, 0.6)',
                borderLeft: '3px solid var(--gold-primary)',
                borderTop: '1px solid var(--border-subtle)',
                borderRight: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
              }}
            >
              <p
                className="font-serif italic text-lg sm:text-xl text-[var(--text-warm-white)] leading-snug"
                style={{ fontSize: '1.2rem', color: 'var(--text-warm-white)' }}
              >
                "{about.quote}"
              </p>
            </motion.div>

            {/* Editorial Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-5 text-base sm:text-lg text-[var(--text-silver)] leading-relaxed"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <p>{about.paragraph1}</p>
              <p>{about.paragraph2}</p>
              <p>{about.paragraph3}</p>
            </motion.div>

            {/* Quick Principles / Approach */}
            <div
              className="pt-6 border-t border-[rgba(255,255,255,0.08)] grid grid-cols-1 sm:grid-cols-2 gap-4"
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
              }}
            >
              <div
                className="flex items-start gap-3 p-3.5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]"
                style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderRadius: '8px' }}
              >
                <CheckCircle2 size={18} className="text-[var(--gold-primary)] flex-shrink-0 mt-0.5" style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-warm-white)]">Interdisciplinary</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Electrical systems intuition applied to software logic.</p>
                </div>
              </div>

              <div
                className="flex items-start gap-3 p-3.5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]"
                style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderRadius: '8px' }}
              >
                <CheckCircle2 size={18} className="text-[var(--emerald-mint)] flex-shrink-0 mt-0.5" style={{ color: 'var(--emerald-mint)', flexShrink: 0 }} />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-warm-white)]">Curiosity & Rigor</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Rapid prototyping backed by deep conceptual study.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Information Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              className="card-luxury p-6 flex flex-col gap-6"
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] pb-4" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--gold-primary)]">
                  // Academic & Profile Overview
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)]">GORAKHPUR, IN</span>
              </div>

              {/* Information Cards Stack */}
              <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div
                  className="p-4 rounded-lg bg-[rgba(18,19,24,0.6)] border border-[rgba(255,255,255,0.05)] flex items-start gap-3.5"
                  style={{ display: 'flex', gap: '0.85rem', padding: '1rem', borderRadius: '8px' }}
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center bg-[rgba(213,183,121,0.1)] text-[var(--gold-primary)] flex-shrink-0"
                    style={{ width: '36px', height: '36px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', flexShrink: 0 }}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">
                      Undergraduate Study
                    </span>
                    <h4 className="text-sm font-semibold text-[var(--text-warm-white)] mt-0.5">
                      B.Tech in Computer Science & Engineering
                    </h4>
                    <p className="text-xs text-[var(--text-silver)] mt-1">
                      Maharana Pratap Institute of Technology
                    </p>
                  </div>
                </div>

                <div
                  className="p-4 rounded-lg bg-[rgba(18,19,24,0.6)] border border-[rgba(255,255,255,0.05)] flex items-start gap-3.5"
                  style={{ display: 'flex', gap: '0.85rem', padding: '1rem', borderRadius: '8px' }}
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center bg-[rgba(109,204,174,0.1)] text-[var(--emerald-mint)] flex-shrink-0"
                    style={{ width: '36px', height: '36px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--emerald-mint)', flexShrink: 0 }}
                  >
                    <Cpu size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">
                      Foundational Credential
                    </span>
                    <h4 className="text-sm font-semibold text-[var(--text-warm-white)] mt-0.5">
                      Diploma in Electrical Engineering
                    </h4>
                    <p className="text-xs text-[var(--text-silver)] mt-1">
                      Strong foundation in systems, signals, and hardware
                    </p>
                  </div>
                </div>

                <div
                  className="p-4 rounded-lg bg-[rgba(18,19,24,0.6)] border border-[rgba(255,255,255,0.05)] flex items-start gap-3.5"
                  style={{ display: 'flex', gap: '0.85rem', padding: '1rem', borderRadius: '8px' }}
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center bg-[rgba(213,183,121,0.1)] text-[var(--gold-primary)] flex-shrink-0"
                    style={{ width: '36px', height: '36px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', flexShrink: 0 }}
                  >
                    <Code2 size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">
                      Active Technical Vectors
                    </span>
                    <h4 className="text-sm font-semibold text-[var(--text-warm-white)] mt-0.5">
                      Computer Vision & Software Engineering
                    </h4>
                    <p className="text-xs text-[var(--text-silver)] mt-1">
                      YOLO11, OpenCV, Python, React.js
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div
                className="p-3 rounded-lg border border-[rgba(109,204,174,0.2)] bg-[rgba(109,204,174,0.05)] flex items-center justify-between"
                style={{ padding: '0.75rem 1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                  <span className="font-mono text-xs text-[var(--emerald-mint)]">
                    Actively Seeking Opportunities
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
