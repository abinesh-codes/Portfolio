import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    icon: <FiCode />, title: 'Frontend', color: '#00ff66',
    skills: [
      { name: 'React.js', level: 88 }, { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5', level: 95 }, { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 88 },
    ],
  },
  {
    icon: <FiServer />, title: 'Backend', color: '#00ffcc',
    skills: [
      { name: 'Node.js', level: 80 }, { name: 'Express.js', level: 78 },
      { name: 'Python Flask', level: 75 }, { name: 'RESTful APIs', level: 85 },
      { name: 'AJAX / JSON', level: 82 },
    ],
  },
  {
    icon: <FiDatabase />, title: 'Database', color: '#10b981',
    skills: [
      { name: 'MongoDB', level: 82 }, { name: 'MySQL', level: 75 },
      { name: 'Studio 3T', level: 70 },
    ],
  },
  {
    icon: <FiTool />, title: 'Tools & Others', color: '#00ffcc',
    skills: [
      { name: 'Git & GitHub', level: 85 }, { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 80 }, { name: 'Problem Solving', level: 88 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay }}
      style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '0.85rem', color: '#d0d0e8', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.75rem', color: color, fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: '5px', background: 'rgba(255,255,255,0.06)', borderRadius: '10px', overflow: 'hidden' }}>
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${level}%` }}
          viewport={{ once: true }} transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
          style={{ height: '100%', borderRadius: '10px', background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '350px', height: '350px', background: 'rgba(0, 255, 102, 0.03)', bottom: '0', left: '5%' }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>What I work with</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="row g-4">
          {skillCategories.map((cat, ci) => (
            <div className="col-lg-6" key={cat.title}>
              <motion.div className="glass-card" style={{ padding: '2rem', height: '100%' }}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: ci * 0.1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.8rem' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    background: `${cat.color}18`, border: `1px solid ${cat.color}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: cat.color, fontSize: '1.1rem',
                  }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontFamily: 'Syne', fontSize: '1.1rem', fontWeight: 700, color: '#f0f0ff', margin: 0 }}>{cat.title}</h3>
                </div>
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} color={cat.color} delay={ci * 0.05 + si * 0.08} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Soft skills tags */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#9191b0', marginBottom: '1rem', fontSize: '0.9rem' }}>Soft Skills</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
            {['Problem-Solving', 'Quick Learner', 'Team Collaboration', 'Adaptability', 'Communication', 'Leadership'].map(s => (
              <span key={s} className="tech-tag" style={{ fontSize: '0.82rem', padding: '6px 16px' }}>{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
