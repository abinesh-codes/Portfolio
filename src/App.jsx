import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000; // Total loading animation duration (4s)
    const interval = 50; // Update every 50ms
    const totalSteps = duration / interval;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(onComplete, 500); // 500ms delay to let the user see 100% before transition
      } else {
        setProgress(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', inset: 0, background: '#020703',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999,
        backgroundImage: `
          linear-gradient(rgba(0, 255, 102, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 102, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: 'center',
      }}>
      <div style={{
        position: 'absolute', width: '300px', height: '300px',
        background: 'rgba(0, 255, 102, 0.08)', filter: 'blur(80px)',
        borderRadius: '50%', pointerEvents: 'none'
      }} />

      {/* Skip Button */}
      <motion.button
        onClick={onComplete}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 102, 0.15)', borderColor: 'rgba(0, 255, 102, 0.5)', boxShadow: '0 0 10px rgba(0, 255, 102, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'absolute', top: '24px', right: '24px', zIndex: 100,
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 600,
          color: '#00ff66', background: 'rgba(0, 255, 102, 0.05)',
          border: '1px solid rgba(0, 255, 102, 0.2)', borderRadius: '6px',
          padding: '8px 16px', letterSpacing: '1px', textTransform: 'uppercase',
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
          transition: 'border-color 0.2s, background-color 0.2s'
        }}
      >
        Skip <span>&rarr;</span>
      </motion.button>

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Terminal Header */}
        <div style={{
          fontFamily: 'monospace', fontSize: '0.8rem', color: '#00ff66',
          letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem',
          opacity: 0.8
        }}>
          &lt; SYSTEM INITIALIZATION &gt;
        </div>

        {/* Counter Percentage */}
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '6rem',
          fontVariantNumeric: 'tabular-nums',
          color: '#00ff66', textShadow: '0 0 20px rgba(0,255,102,0.5)',
          lineHeight: 1, marginBottom: '1rem',
          display: 'flex', alignItems: 'baseline', justifyContent: 'center'
        }}>
          {progress}<span style={{ fontSize: '2.5rem', marginLeft: '4px', opacity: 0.8, fontFamily: "'Space Grotesk', sans-serif" }}>%</span>
        </div>

        {/* Progress bar container */}
        <div style={{
          width: '240px', height: '6px',
          background: 'rgba(0, 255, 102, 0.08)',
          border: '1px solid rgba(0, 255, 102, 0.2)',
          borderRadius: '10px', overflow: 'hidden', padding: '1px',
          margin: '0 auto 1.5rem'
        }}>
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00ff66, #00ffcc)',
              borderRadius: '10px',
              transition: 'width 0.1s ease-out',
              boxShadow: '0 0 10px rgba(0,255,102,0.8)'
            }}
          />
        </div>

        {/* Terminal Status Logs */}
        <div style={{
          fontFamily: 'monospace', fontSize: '0.75rem', color: '#8da696',
          height: '20px', minWidth: '300px'
        }}>
          {progress < 25 && "Loading modules..."}
          {progress >= 25 && progress < 50 && "Connecting to secure database..."}
          {progress >= 50 && progress < 75 && "Compiling assets & components..."}
          {progress >= 75 && progress < 100 && "Establishing secure handshake..."}
          {progress === 100 && "PORTFOLIO LOADED SUCCESS."}
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="noise-overlay" />
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
