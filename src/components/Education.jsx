import React from 'react';
import { motion } from 'framer-motion';

const educations = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Mailam Engineering College',
    location: 'Villupuram, Tamil Nadu',
    year: '2022 – 2026',
    score: '8.53 CGPA',
    scoreLabel: 'CGPA',
    color: '#00ff66',
    current: true,
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary Education (HSC)',
    institution: 'St. Joseph of Cluny Matric Hr. Sec. School',
    location: 'Tindivanam',
    year: '2021 – 2022',
    score: '74.3%',
    scoreLabel: 'Percentage',
    color: '#00ffcc',
    current: false,
    icon: '📚',
  },
  {
    degree: 'Secondary Education (SSLC)',
    institution: 'St. Joseph of Cluny Matric Hr. Sec. School',
    location: 'Tindivanam',
    year: '2019 – 2020',
    score: '77.8%',
    scoreLabel: 'Percentage',
    color: '#00ff66',
    current: false,
    icon: '🏫',
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '350px', height: '350px', background: 'rgba(0, 255, 102, 0.03)', bottom: '5%', right: '5%' }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Academic background</p>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ maxWidth: '800px' }}>
          {educations.map((edu, i) => (
            <motion.div key={edu.degree}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', position: 'relative' }}>

              {/* Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: `${edu.color}18`, border: `2px solid ${edu.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', position: 'relative', zIndex: 1,
                }}>
                  {edu.icon}
                </div>
                {i < educations.length - 1 && (
                  <div style={{ width: '2px', flex: 1, background: `linear-gradient(to bottom, ${edu.color}44, transparent)`, marginTop: '8px' }} />
                )}
              </div>

              <div className="glass-card" style={{ padding: '1.5rem', flex: 1, marginBottom: 0 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = edu.color + '55'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.3rem' }}>
                      <h3 style={{ fontFamily: 'Syne', fontSize: '1.05rem', fontWeight: 700, color: '#f0f0ff', margin: 0 }}>{edu.degree}</h3>
                      {edu.current && (
                        <span style={{
                          background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)',
                          color: '#10b981', padding: '1px 8px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 600,
                        }}>Current</span>
                      )}
                    </div>
                    <p style={{ color: edu.color, fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>{edu.institution}</p>
                    <p style={{ color: '#55556a', fontSize: '0.8rem', margin: '2px 0 0' }}>{edu.location}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 700,
                      background: `linear-gradient(135deg, ${edu.color}, ${edu.color}aa)`,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    }}>{edu.score}</div>
                    <div style={{ color: '#55556a', fontSize: '0.72rem', fontWeight: 600 }}>{edu.year}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
