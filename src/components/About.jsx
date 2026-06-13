import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiTarget, FiGlobe } from 'react-icons/fi';

const strengths = [
  { icon: <FiCode />, title: 'Software Development', desc: 'Building robust, scalable applications with clean architecture, design patterns, and efficient backend services.' },
  { icon: <FiGlobe />, title: 'Web Technologies', desc: 'Creating dynamic and responsive frontends using React.js, modern CSS, and RESTful API integrations.' },
  { icon: <FiTarget />, title: 'Problem-Solving', desc: 'Analyzing complex algorithmic challenges to engineer simple, optimized, and performant solutions.' },
  { icon: <FiZap />, title: 'Fast Learner', desc: 'Quickly adapting to new technologies, frameworks, and engineering methodologies.' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '400px', height: '400px', background: 'rgba(0, 255, 102, 0.03)', top: '0', right: '10%' }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h3 style={{ fontFamily: 'Syne', fontSize: '1.6rem', color: '#f0f0ff', marginBottom: '1.2rem' }}>
                Building the web, one component at a time
              </h3>
              <p style={{ color: '#9191b0', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                I'm a Full Stack Developer (Fresher) currently pursuing B.Tech in Information Technology at Mailam Engineering College, Villupuram. I have hands-on experience with the MERN stack and Python Flask, gained through internships and personal projects.
              </p>
              <p style={{ color: '#9191b0', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                During my internship at Kloudping, I built a Smart HR Management Platform using Flask and MongoDB. At Assistlana, I developed responsive UIs with React.js. I enjoy creating seamless digital experiences that balance aesthetics with functionality.
              </p>
              <p style={{ color: '#9191b0', lineHeight: 1.8, marginBottom: '2rem' }}>
                Beyond coding, I led TechXplore'25 — a national-level project expo at my college — which strengthened my leadership and event management skills.
              </p>

              <div className="row g-3" style={{ marginTop: '1rem' }}>
                {[
                  { value: '2+', label: 'Internships' },
                  { value: '4+', label: 'Projects' },
                  { value: '10+', label: 'Technologies' },
                  { value: '4+', label: 'Certifications' },
                ].map(stat => (
                  <div key={stat.label} className="col-6 col-sm-3" style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 700, background: 'var(--gradient-1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div>
                    <div style={{ color: '#9191b0', fontSize: '0.8rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {strengths.map((s, i) => (
                <motion.div key={s.title} className="glass-card" style={{ padding: '1.5rem' }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(0, 255, 102, 0.08)', border: '1px solid rgba(0, 255, 102, 0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '1rem',
                  }}>
                    {s.icon}
                  </div>
                  <h4 style={{ fontFamily: 'Syne', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: '#f0f0ff' }}>{s.title}</h4>
                  <p style={{ color: '#9191b0', fontSize: '0.82rem', lineHeight: 1.5 }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
