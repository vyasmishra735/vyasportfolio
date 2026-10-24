import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="04 // ACADEMIC FOUNDATIONS"
          title="Education Timeline"
          highlightWord="Timeline"
          subtitle="Rigorous academic training bridging Computer Science engineering with physical electrical systems intuition."
        />

        {/* Refined Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto" style={{ maxWidth: '52rem', margin: '0 auto', position: 'relative' }}>
          {/* Animated Connecting Timeline Line */}
          <div
            className="absolute left-4 sm:left-8 top-3 bottom-8 w-[2px] pointer-events-none"
            style={{
              position: 'absolute',
              left: '1.75rem',
              top: '1rem',
              bottom: '2rem',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--gold-primary) 0%, rgba(213, 183, 121, 0.2) 60%, transparent 100%)',
            }}
          />

          <div className="flex flex-col gap-12 sm:gap-14" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {educationData.map((item, index) => {
              const isFirst = index === 0;

              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-14 sm:pl-20"
                  style={{ position: 'relative', paddingLeft: '4.5rem' }}
                >
                  {/* Timeline Node Icon Pin */}
                  <div
                    className="absolute left-0 top-1 w-9 h-9 rounded-full flex items-center justify-center card-luxury"
                    style={{
                      position: 'absolute',
                      left: '0.25rem',
                      top: '0.25rem',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#17191F',
                      border: isFirst
                        ? '2px solid var(--gold-primary)'
                        : '2px solid var(--emerald-mint)',
                      boxShadow: isFirst
                        ? '0 0 15px rgba(213, 183, 121, 0.4)'
                        : '0 0 15px rgba(109, 204, 174, 0.3)',
                    }}
                  >
                    <GraduationCap
                      size={18}
                      className={isFirst ? 'text-[var(--gold-primary)]' : 'text-[var(--emerald-mint)]'}
                      style={{ color: isFirst ? 'var(--gold-primary)' : 'var(--emerald-mint)' }}
                    />
                  </div>

                  {/* Education Card */}
                  <div
                    className="card-luxury p-6 sm:p-8"
                    style={{
                      padding: '1.75rem',
                      borderLeft: isFirst ? '3px solid var(--gold-primary)' : '3px solid var(--emerald-mint)',
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-2 mb-2"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}
                    >
                      <span className="font-mono text-xs text-[var(--gold-primary)] uppercase tracking-widest">
                        // 0{index + 1} • {item.status}
                      </span>
                      <span className="font-mono text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-semibold text-[var(--text-warm-white)] tracking-tight"
                      style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginBottom: '0.35rem' }}
                    >
                      {item.degree}
                    </h3>

                    <h4
                      className="text-sm sm:text-base font-medium text-[var(--gold-primary)] mb-4"
                      style={{
                        color: item.isInstitutionPlaceholder ? '#E6CA8D' : 'var(--gold-primary)',
                        marginBottom: '1rem',
                      }}
                    >
                      {item.institution}
                      {item.isInstitutionPlaceholder && (
                        <span className="ml-2 font-mono text-[11px] text-[var(--text-muted)] border border-[rgba(255,255,255,0.1)] px-2 py-0.5 rounded">
                          Editable Placeholder
                        </span>
                      )}
                    </h4>

                    <p className="text-sm sm:text-base text-[var(--text-silver)] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Highlights bullets */}
                    <div
                      className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-col gap-2"
                      style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        paddingTop: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                      }}
                    >
                      {item.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-silver)]"
                          style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}
                        >
                          <CheckCircle2
                            size={14}
                            className="text-[var(--gold-primary)] flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--gold-primary)', flexShrink: 0 }}
                          />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
