import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  label,
  title,
  highlightWord = '',
  subtitle,
  align = 'left',
  id,
}) {
  const isCentered = align === 'center';

  return (
    <div
      id={id}
      className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}
    >
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase border border-[rgba(213,183,121,0.25)] bg-[rgba(213,183,121,0.05)] text-[var(--gold-primary)] ${
            isCentered ? 'justify-center' : ''
          }`}
          style={{ letterSpacing: '0.12em' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-primary)]" />
          {label}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-warm-white)]"
        style={{ lineHeight: 1.18 }}
      >
        {highlightWord && title.includes(highlightWord) ? (
          <>
            {title.split(highlightWord)[0]}
            <span className="font-editorial italic font-normal text-gold-gradient">
              {highlightWord}
            </span>
            {title.split(highlightWord)[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-base sm:text-lg text-[var(--text-silver)] leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
