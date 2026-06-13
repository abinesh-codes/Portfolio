import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    company: 'Kloudping',
    role: 'Python Developer Intern',
    duration: 'Apr 2025 – May 2025',
    location: 'Tindivanam',
    type: 'Python Development',
    color: '#00ff66',
    description: 'Worked on a Smart HR Management Platform using Flask and MongoDB. Developed the Job Grid Module, implemented CRUD operations, and managed role-based assignments.',
    tech: ['Python', 'Flask', 'MongoDB', 'REST APIs', 'CRUD Operations'],
    achievements: [
      'Developed the Job Grid Module from scratch',
      'Implemented role-based access control (RBAC)',
      'Strengthened backend development & database management skills',
      'Contributed to production-level codebase',
    ],
  },
  {
    company: 'Assistlana',
    role: 'Frontend Developer Intern',
    duration: 'Feb 2025 – Mar 2025',
    location: 'Pondicherry',
    type: 'Frontend Development',
    color: '#00ffcc',
    description: 'Worked as a Frontend Developer intern, building responsive user interfaces using HTML, CSS, JavaScript, and React.js while gaining practical experience on live projects.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Design'],
    achievements: [
      'Built responsive UIs for live client projects',
      'Worked directly with the product team on real deliverables',
      'Improved React.js component architecture skills',
      'Delivered pixel-perfect designs from Figma mockups',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '300px', height: '300px', background: 'rgba(0, 255, 102, 0.03)', top: '10%', left: '2%' }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Where I've worked</p>
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-cyan), transparent)',
            display: 'none',
          }} className="d-md-block" />

          {experiences.map((exp, i) => (
            <motion.div key={exp.company}
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ marginBottom: '2rem', position: 'relative' }}>

              <div className="glass-card" style={{ padding: '2rem', marginLeft: '0' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = exp.color + '55'; e.currentTarget.style.boxShadow = `0 0 30px ${exp.color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>

                <div className="row align-items-start">
                  <div className="col-md-7">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '12px',
                        background: `${exp.color}18`, border: `1px solid ${exp.color}33`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: exp.color, fontSize: '1rem',
                      }}>
                        <FiBriefcase />
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'Syne', fontSize: '1.2rem', fontWeight: 700, color: '#f0f0ff', margin: 0 }}>{exp.role}</h3>
                        <span style={{ color: exp.color, fontWeight: 600, fontSize: '0.95rem' }}>{exp.company}</span>
                      </div>
                      <span style={{
                        background: `${exp.color}15`, border: `1px solid ${exp.color}30`,
                        color: exp.color, padding: '2px 10px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600,
                      }}>{exp.type}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ color: '#9191b0', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FiCalendar size={12} /> {exp.duration}
                      </span>
                      <span style={{ color: '#9191b0', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FiMapPin size={12} /> {exp.location}
                      </span>
                    </div>

                    <p style={{ color: '#9191b0', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>{exp.description}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {exp.tech.map(t => (
                        <span key={t} style={{
                          background: `${exp.color}12`, border: `1px solid ${exp.color}25`,
                          color: exp.color, padding: '3px 10px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 500,
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-5 mt-3 mt-md-0">
                    <p style={{ color: '#55556a', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem', fontWeight: 600 }}>Key Achievements</p>
                    {exp.achievements.map((ach, ai) => (
                      <div key={ai} style={{ display: 'flex', gap: '8px', marginBottom: '0.6rem' }}>
                        <span style={{ color: exp.color, marginTop: '2px', flexShrink: 0 }}>✦</span>
                        <span style={{ color: '#9191b0', fontSize: '0.84rem', lineHeight: 1.4 }}>{ach}</span>
                      </div>
                    ))}
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
