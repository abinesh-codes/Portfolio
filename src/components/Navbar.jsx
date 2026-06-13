import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'education', label: 'Education' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 2rem',
        background: scrolled ? 'rgba(2, 7, 3, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
        height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <Link to="hero" smooth duration={500} style={{ cursor: 'pointer', textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem',
          background: 'var(--gradient-1)', WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          Abi<span style={{ color: 'var(--accent-cyan)', WebkitTextFillColor: 'var(--accent-cyan)' }}>nesh.</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="d-none d-lg-flex" style={{ gap: '0.2rem' }}>
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} smooth duration={600} spy onSetActive={() => setActive(link.to)}
            style={{
              padding: '6px 14px', borderRadius: '8px', cursor: 'pointer',
              fontSize: '0.85rem', fontWeight: 500, transition: 'all 0.2s',
              color: active === link.to ? 'var(--accent-primary)' : '#9191b0',
              background: active === link.to ? 'rgba(0, 255, 102, 0.08)' : 'transparent',
              textDecoration: 'none',
            }}
            activeStyle={{ color: 'var(--accent-primary)', background: 'rgba(0, 255, 102, 0.08)' }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <a href="#contact" className="d-none d-lg-flex btn-primary-custom"
        style={{ padding: '8px 20px', fontSize: '0.82rem' }}
        onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
        Hire Me
      </a>

      {/* Hamburger */}
      <button className="d-lg-none" onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.4rem', cursor: 'pointer' }}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '70px', left: 0, right: 0,
              background: 'rgba(2, 7, 3, 0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}
          >
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} smooth duration={600}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '10px 0',
                  color: active === link.to ? 'var(--accent-primary)' : '#9191b0',
                  fontSize: '0.95rem',
                  fontWeight: 500, cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.05)',
                  textDecoration: 'none', display: 'block',
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
