import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { title: 'HTML5 Application Development', issuer: 'Certiport', color: '#00ff66', icon: '🏆', year: '2024' },
  { title: 'Web Development', issuer: 'IIIT – Kota', color: '#00ffcc', icon: '🌐', year: '2024' },
  { title: 'Android Developer Internship', issuer: 'AICTE', color: '#10b981', icon: '📱', year: '2023' },
  { title: 'Google Cloud Engineering Certificate', issuer: 'GCP (Google)', color: '#00ffcc', icon: '☁️', year: '2024' },
];

const achievements = [
  { title: 'Led TechXplore\'25', desc: 'Organized and managed a national-level project expo at Mailam Engineering College, showcasing student innovations to industry professionals.', icon: '🚀', color: '#00ffcc' },
  { title: 'Full Stack Coding', desc: 'Built and deployed multiple fully featured full-stack applications using React, Node.js, and Python Flask.', icon: '💻', color: '#00ff66' },
  { title: 'Dual Internship Experience', desc: 'Successfully completed two industry internships — Python Development at Kloudping and Frontend Development at Assistlana.', icon: '💼', color: '#10b981' },
];

export default function Certifications() {
  return (
    <>
      <section id="certifications" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: '350px', height: '350px', background: 'rgba(0, 255, 102, 0.03)', top: '10%', right: '5%' }} />
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Credentials</p>
            <h2 className="section-title">Certifications & Achievements</h2>
            <div className="section-divider" />
          </motion.div>

          <div className="row g-4 mb-5">
            {certs.map((cert, i) => (
              <div className="col-md-6 col-lg-3" key={cert.title}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  style={{
                    background: `linear-gradient(135deg, ${cert.color}15, ${cert.color}05)`,
                    border: `1px solid ${cert.color}25`, borderRadius: '16px',
                    padding: '1.8rem 1.5rem', textAlign: 'center', height: '100%',
                    transition: 'all 0.3s ease', cursor: 'default',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = cert.color + '60'; e.currentTarget.style.boxShadow = `0 0 30px ${cert.color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = cert.color + '25'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cert.icon}</div>
                  <h4 style={{ fontFamily: 'Syne', fontSize: '0.95rem', fontWeight: 700, color: '#f0f0ff', marginBottom: '0.5rem', lineHeight: 1.3 }}>{cert.title}</h4>
                  <p style={{ color: cert.color, fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.3rem' }}>{cert.issuer}</p>
                  <p style={{ color: '#55556a', fontSize: '0.75rem' }}>{cert.year}</p>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ fontFamily: 'Syne', fontSize: '1.3rem', fontWeight: 700, color: '#f0f0ff', marginBottom: '1.5rem' }}>Key Achievements</h3>
            <div className="row g-3">
              {achievements.map((ach, i) => (
                <div className="col-md-4" key={ach.title}>
                  <motion.div className="glass-card" style={{ padding: '1.5rem' }}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = ach.color + '55'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{ach.icon}</div>
                    <h4 style={{ fontFamily: 'Syne', fontSize: '1rem', fontWeight: 700, color: ach.color, marginBottom: '0.5rem' }}>{ach.title}</h4>
                    <p style={{ color: '#9191b0', fontSize: '0.83rem', lineHeight: 1.5, margin: 0 }}>{ach.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
