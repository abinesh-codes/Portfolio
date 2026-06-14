# 🌌 Abinesh R — Cyberpunk Vibe Developer Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.0-F024B6?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

A high-fidelity, premium developer portfolio website with a cyber-grid dark theme, vibrant neon green highlights, custom particle-like noise overlay, and modular glassmorphism cards. Designed for a captivating first impression.

[Live Demo](https://vercel.com) • [Report Bug](https://github.com/abinesh-codes/portfolio/issues) • [Request Feature](https://github.com/abinesh-codes/portfolio/issues)

</div>

---

## 🚀 Key Features

*   **🖥️ Terminal-Style Loader:** Custom initialization overlay simulating secure database handshakes, module compilation, and live percentages with a skip override.
*   **✨ Cyber Grid Glow:** Styled matrix-like viewport using radial layout overrides, glowing orbs, and native SVG fractal noise texturing.
*   **📱 Responsive & Fluid Layout:** Built on custom utility tokens wrapped with [Bootstrap 5](https://getbootstrap.com) fluid grid layouts.
*   **⚡ Scroll-Triggered Stagger Animations:** Fluid entrances, floating badges, and smooth-anchoring links driven by `framer-motion` and `react-scroll`.
*   **✉️ Seamless Contact Integration:** Contact form structured for effortless connection with standard mock handlers or EmailJS integrations.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 19 / Vite 6 | Lightning-fast rendering and lightning-speed build system. |
| **Motion** | Framer Motion 12 | Fluid hover springs, floating loops, and viewport staggers. |
| **Styles** | Bootstrap 5 + Vanilla CSS | Clean layout grid framework coupled with variable-driven neon glows. |
| **Typography** | Space Grotesk & Syne | Premium Google Fonts blending engineering structures with clean titles. |
| **Icons** | React Icons (Fi) | Minimalist vector iconography suite. |

---

## 📁 Directory Structure & Clickable Components

Explore the code files directly:

*   📂 `src/`
    *   📄 [App.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/App.jsx) - Main router, terminal loader, and structural page entry wrapper.
    *   📄 [index.css](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/index.css) - Global stylesheets, custom properties system (neon green glows, grid animations, glassmorphic cards).
    *   📄 [index.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/index.jsx) - Project bootstrapping with React StrictMode.
    *   📂 `components/`
        *   📄 [Navbar.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Navbar.jsx) - Floating glass bar navigation.
        *   📄 [Hero.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Hero.jsx) - Typing-effect header with spinning conic border and floating status badges.
        *   📄 [ProfilePhoto.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/ProfilePhoto.jsx) - Component handling avatar/profile image rendering.
        *   📄 [About.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/About.jsx) - Bio card summary with key stats.
        *   📄 [Skills.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Skills.jsx) - Categorized skills lists using glowing pills.
        *   📄 [Projects.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Projects.jsx) - Interactive project cards featuring scaling assets.
        *   📄 [Experience.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Experience.jsx) - Vertical timeline tracking work history.
        *   📄 [Education.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Education.jsx) - Academic milestones list.
        *   📄 [Certifications.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Certifications.jsx) - External credentials and links.
        *   📄 [Contact.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Contact.jsx) - Form with client validation and submission states.
        *   📄 [Footer.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Footer.jsx) - Bottom copyright, status markers, and quick links.
    *   📂 `assets/`
        *   🖼️ [abinesh.png](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/assets/abinesh.png) - Main transparent portfolio picture.
        *   🖼️ [dp.jpg](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/assets/dp.jpg) - Favicon/circular profile icon.
        *   📂 Projects Images: `food-del.png`, `resume-analyzer.png`, `spend-wise.png`, `weather-sphere.png`.

---

## ⚡ Setup & Development

### 1. Prerequisite Installations
Ensure you have Node.js (v18+) and npm installed.

### 2. Clone and Setup Dependencies
```bash
git clone https://github.com/abinesh-codes/portfolio.git
cd portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the console output address).

### 4. Build Production Bundle
To create a optimized production build in the `dist` folder:
```bash
npm run build
```

---

## 🔧 Integrations & Configuration

### 📸 Updating Your Photo
1. Place your target image file (e.g. `Profile.png`) inside `src/assets/`.
2. Ensure the filename matches what is imported in [ProfilePhoto.jsx]

### 📬 Enable Contact Form (EmailJS)
To switch from dummy form simulation to real emails:
1. Sign up at [emailjs.com](https://emailjs.com).
2. Create a service and a template.
3. In [Contact.jsx](file:///d:/FRONTEND%20PROJECTS/Portfolio/src/components/Contact.jsx), replace the submission simulation block with:
```js
import emailjs from '@emailjs/browser';

emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
  .then((result) => {
      console.log('Success:', result.text);
  }, (error) => {
      console.log('Failed:', error.text);
  });
```

### 🌐 Deploying to Vercel
The workspace already contains a `vercel.json` custom rules helper. To deploy:
1. Log into Vercel and import the project repository.
2. The framework preset will auto-detect **Vite**.
3. Press **Deploy**.
