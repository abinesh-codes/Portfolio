import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending (integrate EmailJS here)
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contacts = [
    { icon: <FiMail />, label: 'Email', value: 'abinesh1471@gmail.com', href: 'mailto:abinesh1471@gmail.com', color: '#00ff66' },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/abineshr25', href: 'https://linkedin.com/in/abineshr25', color: '#00ffcc' },
    { icon: <FiGithub />, label: 'GitHub', value: 'github.com/abinesh-codes', href: 'https://github.com/abinesh-codes', color: '#00ff66' },
    { icon: <FiMapPin />, label: 'Location', value: 'Tindivanam, Tamil Nadu, India', href: null, color: '#10b981' },
  ];

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px', padding: '12px 16px', color: '#f0f0ff', fontSize: '0.9rem',
    fontFamily: 'Space Grotesk, sans-serif', outline: 'none', transition: 'all 0.2s',
    marginBottom: '1rem',
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: '400px', height: '400px', background: 'rgba(0, 255, 102, 0.04)', top: '0', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Let's connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" style={{ margin: '1rem auto 1rem' }} />
          <p style={{ color: '#9191b0', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem' }}>
            I'm currently open to new opportunities. Whether you have a project, a question, or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {contacts.map((c, i) => (
                <motion.div key={c.label}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card" style={{ padding: '1.2rem 1.5rem', marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + '55'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '12px', flexShrink: 0,
                    background: `${c.color}18`, border: `1px solid ${c.color}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.color, fontSize: '1rem',
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ color: '#55556a', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, margin: 0 }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer"
                        style={{ color: '#d0d0e8', fontSize: '0.88rem', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = c.color}
                        onMouseLeave={e => e.currentTarget.style.color = '#d0d0e8'}>
                        {c.value}
                      </a>
                    ) : (
                      <p style={{ color: '#d0d0e8', fontSize: '0.88rem', margin: 0 }}>{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="col-lg-7">
            <motion.div className="glass-card" style={{ padding: '2rem' }}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 style={{ fontFamily: 'Syne', fontSize: '1.2rem', fontWeight: 700, color: '#f0f0ff', marginBottom: '1.5rem' }}>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                  </div>
                  <div className="col-sm-6">
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                  </div>
                </div>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} required
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'} />
                <button type="submit" className="btn-primary-custom" style={{ width: '100%', justifyContent: 'center' }} disabled={sending || sent}>
                  {sent ? <><FiCheck /> Message Sent!</> : sending ? 'Sending...' : <><FiSend /> Send Message</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
