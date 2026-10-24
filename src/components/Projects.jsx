import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Info, CheckCircle, X, ChevronRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import SectionHeading from './SectionHeading';
import { projectsData } from '../data/portfolioData';
import {
  SafetyComplianceVisual,
  LaneViolationVisual,
  TumourDelineationVisual,
} from './ProjectVisuals';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getVisualComponent = (id) => {
    switch (id) {
      case 'safety-compliance':
        return <SafetyComplianceVisual />;
      case 'lane-violation':
        return <LaneViolationVisual />;
      case 'tumour-delineation':
        return <TumourDelineationVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="03 // CASE STUDIES & EXPLORATIONS"
          title="Featured Projects"
          highlightWord="Projects"
          subtitle="Selected systems and vision pipelines exploring deep learning, edge intelligence, and computer vision architectures."
        />

        {/* Editorial Project Showcase (Alternating Layout) */}
        <div className="flex flex-col gap-16 md:gap-24" style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="card-luxury p-6 sm:p-8 md:p-10 relative overflow-hidden"
                style={{
                  padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                }}
              >
                {/* Background Large Number Watermark */}
                <span
                  className="font-editorial font-bold text-7xl sm:text-8xl md:text-9xl pointer-events-none select-none absolute top-4 right-6 opacity-5 text-[var(--gold-primary)]"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1.5rem',
                    fontSize: 'clamp(4rem, 10vw, 8rem)',
                    opacity: 0.06,
                    color: 'var(--gold-primary)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                  }}
                >
                  {project.number}
                </span>

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem',
                    alignItems: 'center',
                  }}
                >
                  {/* Visual Preview Area */}
                  <div
                    className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    style={{ order: isEven ? 2 : 1 }}
                  >
                    <div className="relative group rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                      {getVisualComponent(project.id)}

                      {/* Overlay CTA to inspect details */}
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md font-mono text-xs flex items-center gap-1.5 bg-[rgba(11,12,15,0.85)] text-[var(--gold-primary)] border border-[rgba(213,183,121,0.3)] hover:bg-[var(--gold-primary)] hover:text-[#0B0C0F] transition-all cursor-pointer backdrop-blur-md"
                        style={{
                          position: 'absolute',
                          bottom: '0.75rem',
                          right: '0.75rem',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                        }}
                      >
                        <Info size={14} />
                        <span>Architecture Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Editorial Text Area */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                    style={{ order: isEven ? 1 : 2, display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Header tags */}
                    <div
                      className="flex flex-wrap items-center gap-3 mb-3"
                      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}
                    >
                      <span className="font-mono text-xs text-[var(--gold-primary)] tracking-widest uppercase">
                        // {project.category}
                      </span>
                      <span
                        className="badge-tech badge-emerald"
                        style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}
                      >
                        {project.statusBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl sm:text-3xl font-semibold text-[var(--text-warm-white)] tracking-tight mb-2"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', lineHeight: 1.25, marginBottom: '0.5rem' }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="font-mono text-xs text-[var(--gold-primary)] mb-4"
                      style={{ fontSize: '0.82rem', marginBottom: '1rem' }}
                    >
                      {project.subtitle}
                    </p>

                    {/* Summary Description */}
                    <p
                      className="text-sm sm:text-base text-[var(--text-silver)] leading-relaxed mb-6"
                      style={{ color: 'var(--text-silver)', lineHeight: 1.65, marginBottom: '1.5rem' }}
                    >
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div
                      className="flex flex-wrap gap-2 mb-8"
                      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}
                    >
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge-tech">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div
                      className="flex flex-wrap items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.06)]"
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="btn btn-gold text-xs"
                        style={{ padding: '0.65rem 1.25rem', fontSize: '0.82rem' }}
                      >
                        <span>Deep Dive Architecture</span>
                        <ChevronRight size={14} />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary text-xs"
                        title="GitHub Repository (Editable placeholder)"
                        style={{ padding: '0.65rem 1.25rem', fontSize: '0.82rem' }}
                      >
                        <GithubIcon size={15} />
                        <span>Repository (Placeholder)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Modal for Deep Technical Architecture Details */}
        <AnimatePresence>
          {activeModalProject && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9990,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
              }}
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="absolute inset-0 bg-[rgba(11,12,15,0.85)] backdrop-blur-md"
                style={{ position: 'absolute', inset: 0 }}
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="card-luxury relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '42rem',
                  maxHeight: '88vh',
                  overflowY: 'auto',
                  padding: '2rem',
                  background: '#15171D',
                  border: '1px solid rgba(213, 183, 121, 0.4)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
                }}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 text-[var(--text-silver)] hover:text-[var(--gold-primary)] transition-colors p-1"
                  aria-label="Close Architecture Modal"
                  style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[var(--gold-primary)]">
                  <span>PROJECT // {activeModalProject.number}</span>
                  <span>•</span>
                  <span>{activeModalProject.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-warm-white)] mb-1">
                  {activeModalProject.title}
                </h3>
                <p className="font-mono text-xs text-[var(--text-muted)] mb-4">
                  Status: {activeModalProject.statusBadge}
                </p>

                <div className="my-4 p-4 rounded-lg bg-[rgba(18,19,24,0.6)] border border-[rgba(255,255,255,0.06)]">
                  <h4 className="text-xs font-mono uppercase text-[var(--gold-primary)] mb-2">
                    // Conceptual Foundation & Context
                  </h4>
                  <p className="text-sm text-[var(--text-silver)] leading-relaxed">
                    {activeModalProject.longDescription}
                  </p>
                </div>

                <div className="my-4">
                  <h4 className="text-xs font-mono uppercase text-[var(--gold-primary)] mb-3">
                    // Key Algorithmic Objectives
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeModalProject.keyHighlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-silver)]"
                      >
                        <CheckCircle size={15} className="text-[var(--gold-primary)] flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-4">
                  <h4 className="text-xs font-mono uppercase text-[var(--emerald-mint)] mb-3">
                    // Pipeline Architecture
                  </h4>
                  <div className="flex flex-col gap-2">
                    {activeModalProject.technicalArchitecture.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2.5 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] font-mono text-xs text-[var(--text-silver)]"
                      >
                        <span className="text-[var(--gold-primary)] font-bold">0{idx + 1}</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer notes */}
                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] flex justify-between items-center text-xs font-mono text-[var(--text-muted)]">
                  <span>Vyas Mishra Portfolio</span>
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--gold-primary)] hover:underline flex items-center gap-1"
                  >
                    <span>View Repository Placeholder</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
