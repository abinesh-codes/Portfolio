import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';
import ProfilePhoto from './ProfilePhoto';
import resumePdf from '../assets/resume.pdf';

const roles = ['Full Stack Developer', 'React.js Developer', 'MERN Stack Developer', 'Python Flask Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let i = typing ? 0 : role.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i > role.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1800); }
      } else {
        setDisplayed(role.slice(0, i - 1));
        i--;
        if (i < 0) { clearInterval(interval); setRoleIndex(r => (r + 1) % roles.length); setTyping(true); }
      }
    }, typing ? 70 : 40);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '70px' }}>
      {/* Background orbs */}
      <div className="orb" style={{ width: '600px', height: '600px', background: 'rgba(0, 255, 102, 0.06)', top: '-150px', right: '-150px' }} />
      <div className="orb" style={{ width: '400px', height: '400px', background: 'rgba(0, 255, 204, 0.04)', bottom: '0', left: '-100px' }} />
      <div className="orb" style={{ width: '300px', height: '300px', background: 'rgba(0, 255, 102, 0.03)', top: '40%', left: '35%' }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div className="row align-items-center" style={{ minHeight: 'calc(100vh - 70px)' }}>
          {/* Left Content */}
          <div className="col-lg-7 py-5">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={item}>
                <span style={{
                  background: 'rgba(0, 255, 102, 0.08)', border: '1px solid rgba(0, 255, 102, 0.25)',
                  color: 'var(--accent-primary)', padding: '6px 18px', borderRadius: '20px',
                  fontSize: '0.78rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
                  display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '1.5rem',
                }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00ff66', display: 'inline-block', boxShadow: '0 0 8px #00ff66' }} />
                  Available for Opportunities
                </span>
              </motion.div>

              <motion.h1 variants={item} style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', lineHeight: 1.08,
                marginBottom: '0.5rem', color: '#f0f0ff',
              }}>
                Hi, I'm<br />
                <span style={{
                  background: 'var(--gradient-2)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Abinesh R
                </span>
              </motion.h1>

              <motion.div variants={item} style={{ marginBottom: '1.5rem', minHeight: '2.5rem' }}>
                <span style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', color: '#8da696', fontWeight: 400 }}>
                  {displayed}
                  <span style={{ color: 'var(--accent-primary)', animation: 'blink 1s step-end infinite' }}>|</span>
                </span>
              </motion.div>

              <motion.p variants={item} style={{ color: '#8da696', fontSize: '1rem', lineHeight: 1.75, maxWidth: '520px', marginBottom: '2rem' }}>
                A passionate Full Stack Developer building responsive, user-first web applications using the MERN stack and Python Flask. I turn complex problems into clean, performant digital experiences — from idea to deployment.
              </motion.p>

              <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href="https://linkedin.com/in/abineshr25" target="_blank" rel="noreferrer" className="btn-primary-custom">
                  <FiLinkedin /> Get In Touch <FiArrowRight size={14} />
                </a>
                <a href={resumePdf} download="Abinesh_CV.pdf" className="btn-outline-custom">
                  <FiDownload /> Download CV
                </a>
              </motion.div>

              <motion.div variants={item} style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Find me on</span>
                {[
                  { icon: <FiGithub size={16} />, href: 'https://github.com/abinesh-codes', label: 'GitHub' },
                  { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com/in/abineshr25', label: 'LinkedIn' },
                  { icon: <FiMail size={16} />, href: 'mailto:abinesh1471@gmail.com', label: 'Email' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    style={{
                      width: '42px', height: '42px', borderRadius: '12px',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#8da696', transition: 'all 0.2s', textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--accent-primary)'; e.currentTarget.style.background = 'rgba(0, 255, 102, 0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#8da696'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center py-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative' }}
            >
              {/* Spinning gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: '-18px', borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, var(--accent-primary) 0%, var(--accent-cyan) 50%, var(--accent-primary) 100%)',
                  padding: '3px', zIndex: 0,
                }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg-primary)' }} />
              </motion.div>

              {/* Photo circle */}
              <div style={{
                width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden',
                position: 'relative', zIndex: 1, border: '3px solid rgba(0, 255, 102, 0.25)',
              }}>
                <ProfilePhoto />
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', top: '-5px', right: '-25px', zIndex: 2,
                  background: 'rgba(2, 7, 3, 0.9)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0, 255, 102, 0.35)', borderRadius: '12px',
                  padding: '8px 14px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-primary)',
                  whiteSpace: 'nowrap',
                }}>
                ⚡ React.js
              </motion.div>
              <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{
                  position: 'absolute', bottom: '30px', left: '-35px', zIndex: 2,
                  background: 'rgba(2, 7, 3, 0.9)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0, 255, 204, 0.35)', borderRadius: '12px',
                  padding: '8px 14px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-cyan)',
                  whiteSpace: 'nowrap',
                }}>
                🚀 MERN Stack
              </motion.div>
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{
                  position: 'absolute', bottom: '-10px', right: '5px', zIndex: 2,
                  background: 'rgba(2, 7, 3, 0.9)', backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0, 255, 102, 0.35)', borderRadius: '12px',
                  padding: '8px 14px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-primary)',
                  whiteSpace: 'nowrap',
                }}>
                ✦ Python / Flask
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '1px', textTransform: 'uppercase',
        }}
      >
        <span>scroll</span>
        <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }} />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
