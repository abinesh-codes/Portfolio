import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

import spendWiseImg from '../assets/spend-wise.png';
import foodDelImg from '../assets/food-del.png';
import weatherSphereImg from '../assets/weather-sphere.png';
import resumeAnalyzerImg from '../assets/resume-analyzer.png';

const projects = [
  {
    title: 'SpendWise',
    emoji: '💰',
    image: spendWiseImg,
    description: 'A full-stack expense management application with secure authentication, expense tracking, transaction management, budget monitoring, and interactive financial dashboards.',
    longDesc: 'Built with the MERN stack, SpendWise empowers users to take control of their personal finances. Features include JWT authentication, real-time budget alerts, exportable reports, and a beautiful dashboard with Chart.js visualizations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Chart.js'],
    features: ['Secure Authentication', 'Expense Tracking', 'Budget Monitoring', 'Financial Dashboards', 'Transaction History'],
    live: 'https://expense-tracker-frontend-xi-lyart.vercel.app/',
    github: 'https://github.com/abinesh-codes/Expense-Tracker.git',
    color: '#00ff66',
    gradient: 'linear-gradient(135deg, rgba(0,255,102,0.12), rgba(0,204,82,0.06))',
  },
  {
    title: 'Tomato – Food Delivery App',
    emoji: '🍕',
    image: foodDelImg,
    description: 'A full-stack food delivery application using the MERN stack with user authentication, restaurant & menu browsing, cart management, and seamless order placement.',
    longDesc: 'Tomato delivers a complete food ordering experience — from browsing restaurants and menus to placing orders. Features a responsive UI, real-time cart updates, and smooth user authentication flow.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Bootstrap'],
    features: ['User Authentication', 'Menu Browsing', 'Cart Management', 'Order Placement', 'Responsive UI'],
    live: 'https://food-del-frontend-sx19.onrender.com',
    github: 'https://github.com/abinesh-codes/FOOD-DEL.git',
    color: '#00ffcc',
    gradient: 'linear-gradient(135deg, rgba(0,255,204,0.12), rgba(0,255,102,0.06))',
  },
  {
    title: 'WeatherSphere',
    emoji: '🌤️',
    image: weatherSphereImg,
    description: 'A responsive weather forecasting application with real-time conditions, temperature, humidity, wind speed, UV index, air quality, and location-based forecasts.',
    longDesc: 'WeatherSphere integrates with a live weather API to give users comprehensive meteorological data. Features include city search, saved locations, moon phase tracking, radar view, and real-time weather alerts.',
    tech: ['React.js', 'Weather API', 'CSS3', 'JavaScript', 'REST APIs'],
    features: ['Real-time Weather', 'Location Search', 'AQI & UV Index', 'Saved Cities', 'Moon Phase Tracker'],
    live: 'https://weather-app-delta-ebon-38.vercel.app/',
    github: 'https://github.com/abinesh-codes/Weather-App.git',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(0,255,102,0.06))',
  },
  {
    title: 'Resume Analyzer',
    emoji: '📄',
    image: resumeAnalyzerImg,
    description: 'An AI-powered resume analysis tool that matches your resume against job descriptions, provides skill gap analysis, and gives actionable improvement suggestions.',
    longDesc: 'Built with Python and Streamlit, this AI tool reads PDF/DOCX resumes, parses job descriptions, and delivers a detailed compatibility score along with personalized recommendations for improvement.',
    tech: ['Python', 'Streamlit', 'NLP', 'PyPDF2', 'AI/ML'],
    features: ['PDF/DOCX Upload', 'JD Matching', 'Skill Gap Analysis', 'Compatibility Score', 'AI Suggestions'],
    live: 'https://skillmatchs.streamlit.app/',
    github: 'https://github.com/abinesh-codes/ResumeAnalyzer.git',
    color: '#00ff66',
    gradient: 'linear-gradient(135deg, rgba(0,255,102,0.12), rgba(0,204,82,0.06))',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '400px', height: '400px', background: 'rgba(0,255,102,0.04)', top: '20%', right: '-5%' }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>What I've built</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="row g-4">
          {projects.map((proj, i) => (
            <div className="col-md-6" key={proj.title}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="project-card"
                style={{
                  background: proj.gradient, backdropFilter: 'blur(20px)',
                  border: `1px solid ${proj.color}22`, borderRadius: '20px',
                  padding: '2rem', height: '100%', cursor: 'pointer',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${proj.color}55`; e.currentTarget.style.boxShadow = `0 0 40px ${proj.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${proj.color}22`; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Project Image Container */}
                <div style={{
                  width: '100%',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  border: `1px solid ${proj.color}33`,
                  background: 'rgba(0,0,0,0.2)'
                }}>
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'contain',
                    }}
                    className="project-image"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(2, 7, 3, 0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 12px',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: `1px solid ${proj.color}44`
                  }}>
                    <span style={{ fontSize: '1rem' }}>{proj.emoji}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: proj.color, letterSpacing: '1px' }}>PROJECT</span>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Syne', fontSize: '1.3rem', fontWeight: 700, color: '#f0f0ff', marginBottom: '0.8rem' }}>{proj.title}</h3>
                <p style={{ color: '#9191b0', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>{proj.description}</p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {proj.tech.map(t => (
                    <span key={t} style={{
                      background: `${proj.color}15`, border: `1px solid ${proj.color}30`,
                      color: proj.color, padding: '3px 10px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 500,
                    }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a href={proj.live} target="_blank" rel="noreferrer"
                    className="btn-primary-custom"
                    style={{ padding: '8px 16px', fontSize: '0.8rem', background: `linear-gradient(135deg, ${proj.color}, ${proj.color}cc)` }}
                    onClick={e => e.stopPropagation()}>
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={proj.github} target="_blank" rel="noreferrer"
                    className="btn-outline-custom"
                    style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                    onClick={e => e.stopPropagation()}>
                    <FiGithub /> Code
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://github.com/abinesh-codes" target="_blank" rel="noreferrer" className="btn-outline-custom">
            View All Projects on GitHub <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
