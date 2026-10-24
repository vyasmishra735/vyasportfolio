import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Brain, Terminal, CheckCircle, Sparkles, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    ...skillCategories.map((c) => ({ id: c.id, label: c.name })),
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming-web':
        return <Code2 size={18} className="text-[var(--gold-primary)]" />;
      case 'ai-vision':
        return <Brain size={18} className="text-[var(--emerald-mint)]" />;
      case 'tools-dev':
        return <Terminal size={18} className="text-[var(--gold-primary)]" />;
      default:
        return <Layers size={18} className="text-[var(--text-silver)]" />;
    }
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="02 // EXPERTISE & TOOLING"
          title="Technical Skills"
          highlightWord="Skills"
          subtitle="A catalog of languages, AI vision libraries, and developer tools actively utilized in my projects and ongoing technical exploration."
        />

        {/* Category Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[rgba(255,255,255,0.06)]"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--gold-primary)] text-[#0B0C0F] font-semibold shadow-md'
                    : 'bg-[rgba(255,255,255,0.03)] text-[var(--text-silver)] hover:text-[var(--text-warm-white)] hover:bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)]'
                }`}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  letterSpacing: '0.04em',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Category Blocks */}
        <div className="flex flex-col gap-12" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <AnimatePresence mode="wait">
            {filteredCategories.map((catGroup) => (
              <motion.div
                key={catGroup.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-5"
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                {/* Category Header */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
                >
                  <div className="flex items-center gap-2.5" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]"
                      style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      {getCategoryIcon(catGroup.id)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text-warm-white)]">
                        {catGroup.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        {catGroup.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[var(--text-muted)] self-start sm:self-auto">
                    {catGroup.skills.length} TECHNOLOGIES
                  </span>
                </div>

                {/* Skills Grid */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {catGroup.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="card-luxury p-4 flex flex-col justify-between group"
                      style={{
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '110px',
                      }}
                    >
                      <div className="flex items-start justify-between gap-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                          <h4 className="text-base font-semibold text-[var(--text-warm-white)] group-hover:text-[var(--gold-primary)] transition-colors">
                            {skill.name}
                          </h4>
                          <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block mt-0.5">
                            {skill.category}
                          </span>
                        </div>
                        <span
                          className="w-2 h-2 rounded-full mt-1.5 transition-colors"
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor:
                              catGroup.id === 'ai-vision'
                                ? 'var(--emerald-mint)'
                                : 'var(--gold-primary)',
                            opacity: 0.8,
                          }}
                        />
                      </div>

                      <p
                        className="text-xs text-[var(--text-silver)] mt-3 leading-relaxed"
                        style={{ fontSize: '0.8rem', color: 'var(--text-silver)' }}
                      >
                        {skill.note}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Transparency note */}
        <div
          className="mt-12 p-4 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(18,19,24,0.4)] flex items-center gap-3 text-xs text-[var(--text-muted)] font-mono"
          style={{
            marginTop: '3rem',
            padding: '1rem 1.25rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.78rem',
          }}
        >
          <Sparkles size={16} className="text-[var(--gold-primary)] flex-shrink-0" style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
          <span>
            Technologies listed reflect active study, implementation in academic/personal projects, and continuous hands-on experimentation.
          </span>
        </div>
      </div>
    </section>
  );
}
