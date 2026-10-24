import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Scan, ShieldAlert, Layout, Cpu, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { explorationAreas } from '../data/portfolioData';

export default function Interests() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={22} className="text-[var(--gold-primary)]" />;
      case 'Scan':
        return <Scan size={22} className="text-[var(--emerald-mint)]" />;
      case 'ShieldAlert':
        return <ShieldAlert size={22} className="text-[var(--gold-primary)]" />;
      case 'Layout':
        return <Layout size={22} className="text-[var(--emerald-mint)]" />;
      case 'Cpu':
        return <Cpu size={22} className="text-[var(--gold-primary)]" />;
      default:
        return <Brain size={22} className="text-[var(--gold-primary)]" />;
    }
  };

  return (
    <section id="interests" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="05 // ACTIVE INQUIRY"
          title="What I Explore"
          highlightWord="Explore"
          subtitle="Core domains of technical curiosity where I dedicate time to research papers, prototype architectures, and write code."
        />

        {/* Exploration Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {explorationAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="card-luxury p-6 sm:p-7 flex flex-col justify-between group"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header with Number and Icon */}
                <div
                  className="flex items-center justify-between mb-5"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] group-hover:border-[var(--gold-border)] transition-colors"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(area.icon)}
                  </div>
                  <span className="font-editorial text-xl font-bold text-[var(--gold-primary)] opacity-70">
                    {area.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg sm:text-xl font-semibold text-[var(--text-warm-white)] group-hover:text-[var(--gold-primary)] transition-colors mb-3"
                  style={{ marginBottom: '0.75rem' }}
                >
                  {area.title}
                </h3>

                {/* Summary */}
                <p
                  className="text-sm text-[var(--text-silver)] leading-relaxed mb-6"
                  style={{ color: 'var(--text-silver)', lineHeight: 1.65, marginBottom: '1.5rem' }}
                >
                  {area.summary}
                </p>
              </div>

              {/* Topics / Focus Tags */}
              <div
                className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap gap-1.5"
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '1rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                }}
              >
                {area.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[rgba(255,255,255,0.03)] text-[var(--text-muted)] border border-[rgba(255,255,255,0.04)]"
                    style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', borderRadius: '4px' }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
