import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative z-10 border-t border-[rgba(255,255,255,0.08)] bg-[#0A0B0E] pt-12 pb-8"
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#0A0B0E',
        paddingTop: '3rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container-custom">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[rgba(255,255,255,0.06)]"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Brand Left */}
          <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-editorial font-bold text-xs"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #17191F 0%, #121318 100%)',
                border: '1px solid rgba(213, 183, 121, 0.4)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              VM
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-[var(--text-warm-white)] tracking-wide">
                {personalInfo.fullName}
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                Gorakhpur, Uttar Pradesh, India
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[var(--text-silver)] hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] transition-all"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-silver)',
              }}
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[var(--text-silver)] hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] transition-all"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-silver)',
              }}
            >
              <LinkedinIcon size={16} />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(213,183,121,0.1)] border border-[rgba(213,183,121,0.3)] text-[var(--gold-primary)] hover:bg-[var(--gold-primary)] hover:text-[#0B0C0F] transition-all cursor-pointer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Micro-copy */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]"
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem',
          }}
        >
          <span>
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </span>
          <span className="flex items-center gap-1.5">
            Designed & built with curiosity • React & Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
