import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'demo-note'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject';
    if (!formData.message.trim()) newErrors.message = 'Please include a message';
    else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate verification delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('ready');
    }, 700);
  };

  const handleDirectEmail = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          label="06 // GET IN TOUCH"
          title="Have an Idea? Let's Build Something Meaningful."
          highlightWord="Meaningful."
          subtitle="Whether you're exploring a project collaboration, discussing AI research, or considering junior software engineering roles—my inbox is open."
        />

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 flex flex-col justify-between" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                className="card-luxury p-6 flex flex-col gap-5"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div
                  className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-3"
                  style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.75rem' }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--gold-primary)]">
                    // Communication Channels
                  </span>
                  <div className="flex items-center gap-1.5" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span className="status-dot" style={{ width: '6px', height: '6px' }} />
                    <span className="text-[11px] font-mono text-[var(--emerald-mint)]">Active</span>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    Email Address (Placeholder)
                  </span>
                  <div
                    className="flex items-center justify-between gap-2 p-3 rounded-lg bg-[rgba(18,19,24,0.6)] border border-[rgba(255,255,255,0.06)]"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', borderRadius: '8px' }}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <Mail size={16} className="text-[var(--gold-primary)] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-mono text-[var(--text-warm-white)] truncate">
                        {personalInfo.email}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded hover:bg-[rgba(255,255,255,0.08)] text-[var(--text-silver)] hover:text-[var(--gold-primary)] transition-colors"
                      title="Copy email to clipboard"
                      style={{ cursor: 'pointer', background: 'none', border: 'none' }}
                    >
                      <Copy size={15} />
                    </button>
                  </div>
                  {copiedEmail && (
                    <span className="text-xs font-mono text-[var(--emerald-mint)]">
                      ✓ Copied placeholder to clipboard
                    </span>
                  )}
                </div>

                {/* Location Item */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    Current Location
                  </span>
                  <div
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[rgba(18,19,24,0.6)] border border-[rgba(255,255,255,0.06)] text-xs sm:text-sm font-mono text-[var(--text-silver)]"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.75rem 1rem', borderRadius: '8px' }}
                  >
                    <MapPin size={16} className="text-[var(--gold-primary)] flex-shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                  <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    External Profiles
                  </span>
                  <div className="flex flex-col gap-2">
                    <a
                      href={personalInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[var(--gold-border)] hover:bg-[rgba(213,183,121,0.04)] transition-all group"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none' }}
                    >
                      <div className="flex items-center gap-2.5" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <GithubIcon size={17} className="text-[var(--gold-primary)]" />
                        <span className="text-xs sm:text-sm text-[var(--text-warm-white)] font-mono">
                          github.com/vyasmishra735
                        </span>
                      </div>
                      <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--gold-primary)]" />
                    </a>

                    <a
                      href={personalInfo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[var(--gold-border)] hover:bg-[rgba(213,183,121,0.04)] transition-all group"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', borderRadius: '8px', textDecoration: 'none' }}
                    >
                      <div className="flex items-center gap-2.5" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <LinkedinIcon size={17} className="text-[var(--gold-primary)]" />
                        <span className="text-xs sm:text-sm text-[var(--text-warm-white)] font-mono">
                          LinkedIn (Placeholder Link)
                        </span>
                      </div>
                      <ArrowUpRight size={14} className="text-[var(--text-muted)] group-hover:text-[var(--gold-primary)]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on configuration */}
            <div
              className="p-4 rounded-xl border border-[rgba(213,183,121,0.2)] bg-[rgba(213,183,121,0.04)] text-xs text-[var(--text-silver)] leading-relaxed"
              style={{ padding: '1rem 1.25rem', borderRadius: '10px' }}
            >
              <div className="flex items-center gap-2 text-[var(--gold-primary)] font-mono font-semibold mb-1">
                <Sparkles size={14} />
                <span>Configuring Your Real Links</span>
              </div>
              <p>
                To replace the email and LinkedIn placeholders with your real URLs, simply open{' '}
                <code className="text-[var(--gold-light)] bg-[rgba(0,0,0,0.4)] px-1.5 py-0.5 rounded font-mono">
                  src/data/portfolioData.js
                </code>{' '}
                and update the fields anytime.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form with Honest Feedback */}
          <div className="lg:col-span-7">
            <div
              className="card-luxury p-6 sm:p-8 relative"
              style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              <div className="mb-6 pb-4 border-b border-[rgba(255,255,255,0.06)]">
                <h3 className="text-xl font-semibold text-[var(--text-warm-white)]">
                  Send a Message
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                  // Validated Client Form with Prefilled Direct Email Option
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}
                >
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && (
                      <span className="text-xs text-[#E26D5C] font-mono mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      placeholder="elena@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && (
                      <span className="text-xs text-[#E26D5C] font-mono mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="form-input"
                    placeholder="Software Engineering Collaboration / Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  {errors.subject && (
                    <span className="text-xs text-[#E26D5C] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Hello Vyas, I saw your work on Computer Vision and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && (
                    <span className="text-xs text-[#E26D5C] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-gold cursor-pointer"
                    style={{ minWidth: '180px' }}
                  >
                    {isSubmitting ? (
                      <span>Verifying...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    * Required fields
                  </span>
                </div>
              </form>

              {/* Honest Feedback Banner upon Submission */}
              <AnimatePresence>
                {submissionStatus === 'ready' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 rounded-xl border border-[rgba(109,204,174,0.3)] bg-[rgba(109,204,174,0.06)]"
                    style={{ marginTop: '1.5rem', padding: '1.25rem', borderRadius: '10px' }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[var(--emerald-mint)] flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-semibold text-[var(--text-warm-white)]">
                          Form Validated & Ready
                        </h4>
                        <p className="text-xs text-[var(--text-silver)] leading-relaxed">
                          Your message has been formatted. As this portfolio runs statically without a server backend, you can launch your default email client with your message prefilled, or integrate an email provider like EmailJS.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <button
                            type="button"
                            onClick={handleDirectEmail}
                            className="btn btn-gold text-xs"
                            style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }}
                          >
                            <span>Open in Mail Client</span>
                            <ArrowUpRight size={13} />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                `Subject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`
                              );
                              alert('Message text copied to clipboard!');
                            }}
                            className="btn btn-secondary text-xs"
                            style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }}
                          >
                            <span>Copy Message Text</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
