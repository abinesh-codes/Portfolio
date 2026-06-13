# Abinesh R — Portfolio Website

A premium personal portfolio built with React.js, Framer Motion, and Bootstrap.

## 🚀 Quick Start

```bash
npm install
npm start
```

## 📸 Adding Your Photo

1. Copy your photo (`IMG_20260530_123235.jpg`) into `src/assets/` 
2. The Hero section will automatically display it

## 🌐 Deploy to Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/abinesh-codes/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select the repository → Deploy (no config needed, `vercel.json` handles routing)

## 📬 Enable EmailJS (Contact Form)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create a service & template
3. In `src/components/Contact.jsx`, replace the setTimeout simulation with:
```js
import emailjs from 'emailjs-com';
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID');
```

## 📁 Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Education.jsx
    Certifications.jsx
    Contact.jsx
    Footer.jsx
    ProfilePhoto.jsx
  assets/
    abinesh.jpg  ← Add your photo here
  index.css
  App.js
  index.js
```

## 🎨 Tech Stack
- React.js 18
- Framer Motion (animations)
- Bootstrap 5 (grid/layout)
- React Icons
- React Scroll (smooth navigation)
- Space Grotesk + Syne (Google Fonts)
