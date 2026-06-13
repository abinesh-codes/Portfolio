import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-primary)', borderTop: '1px solid var(--border)',
      padding: '3rem 2rem', textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link to="hero" smooth duration={500} style={{ cursor: 'pointer', display: 'inline-block', marginBottom: '1.5rem' }}>
          <span style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem',
            background: 'var(--gradient-1)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Abi<span style={{ color: 'var(--accent-cyan)', WebkitTextFillColor: 'var(--accent-cyan)' }}>nesh.</span>
          </span>
        </Link>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(link => (
            <Link key={link} to={link.toLowerCase()} smooth duration={500}
              style={{ color: '#8da696', fontSize: '0.85rem', cursor: 'pointer', transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = '#8da696'}>
              {link}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { icon: <FiGithub />, href: 'https://github.com/abinesh-codes' },
            { icon: <FiLinkedin />, href: 'https://linkedin.com/in/abineshr25' },
            { icon: <FiMail />, href: 'mailto:abinesh1471@gmail.com' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer"
              style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#8da696', fontSize: '1rem', transition: 'all 0.2s', textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'var(--accent-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#8da696'; }}>
              {s.icon}
            </a>
          ))}
        </div>

        <p style={{ color: '#496352', fontSize: '0.82rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
          Designed & Built with <FiHeart style={{ color: 'var(--accent-primary)' }} /> by <strong style={{ color: '#8da696' }}>Abinesh R</strong> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
