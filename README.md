# Vyas Mishra - Premium Luxury Developer Portfolio

> **Aspiring Software Engineer | AI/ML Developer | Computer Science Student**  
> *Gorakhpur, Uttar Pradesh, India*

A bespoke, production-grade luxury personal portfolio engineered with **React.js**, **Vite**, **Framer Motion**, **GSAP ScrollTrigger**, and a custom **Obsidian & Champagne Gold** design system.

---

## 💎 Design System & Palette

- **Obsidian Black (`#0B0C0F`):** Main deep background with fine technical coordinate grid and radial atmospheric vignette.
- **Champagne Gold (`#D5B779`):** Restrained luxury highlights, editorial serif typography, fine borders, and primary CTA accents.
- **Emerald Mint (`#6DCCAE`):** High-tech telemetry accents, live status pips, and interactive highlights.
- **Warm White (`#F4F1EA`):** High-contrast, fatigue-free editorial typography.
- **Silver Gray (`#A4A7B0`):** Secondary metadata and descriptive copy.
- **Editorial Typography:** Google Fonts `Cinzel` + `DM Serif Display` for luxury statements, `Plus Jakarta Sans` for clean UI body, and `JetBrains Mono` for technical labels.

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg             # Bespoke gold VM monogram vector favicon
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphic navbar with active scroll-spy & mobile drawer
│   │   ├── Hero.jsx            # Cinematic hero with generative particle canvas & VM identity card
│   │   ├── About.jsx           # Editorial narrative & academic highlight cards
│   │   ├── Skills.jsx          # Filterable technical skill categories (Languages, AI, Tools)
│   │   ├── Projects.jsx        # Editorial project case studies with deep-dive architecture modal
│   │   ├── ProjectVisuals.jsx  # Bespoke SVG technical diagrams & inference telemetry HUDs
│   │   ├── Education.jsx       # Refined timeline connecting line with verified credentials
│   │   ├── Interests.jsx       # "What I Explore" research vectors (AI, Vision, DevOps, etc.)
│   │   ├── Contact.jsx         # Validated contact form, direct email launcher & placeholders
│   │   ├── Footer.jsx          # Minimal luxury footer with dynamic year & back-to-top button
│   │   ├── CustomCursor.jsx    # Smooth trailing gold cursor (desktop-only, touch-disabled)
│   │   ├── SectionHeading.jsx  # Reusable section heading with editorial typography & entrance reveals
│   │   └── SocialIcons.jsx     # Pure SVG GitHub and LinkedIn icon components
│   ├── data/
│   │   └── portfolioData.js    # ⭐️ SINGLE SOURCE OF TRUTH: All personal info, links & projects
│   ├── hooks/
│   │   └── useReducedMotion.js # Accessibility hook respecting user's reduced-motion preference
│   ├── styles/
│   │   ├── variables.css       # Design tokens (colors, fonts, radii, spacing, shadows)
│   │   ├── animations.css      # Keyframes, radar sweep, subtle floating & cursor styles
│   │   └── global.css          # Reset, layout utilities, button models & form styles
│   ├── App.jsx                 # GSAP ScrollTrigger context provider & section layout
│   ├── index.css               # Imports global CSS design system
│   └── main.jsx                # React root mount
├── index.html                  # SEO tags, OpenGraph metadata, and Google Fonts preconnect
├── package.json
└── vite.config.js
```

---

## ⚡ How to Run Locally

### 1. Prerequisites
Ensure **Node.js** (v18 or higher) and **npm** are installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Create Production Build
```bash
npm run build
```
The optimized static build is emitted to the `dist/` directory.

---

## 📝 How to Update Personal Information & Placeholders

All personal information, URLs, and projects are centralized in one single file:  
👉 **`src/data/portfolioData.js`**

### 1. Update LinkedIn URL
Open `src/data/portfolioData.js` and locate:
```javascript
linkedinUrl: "https://linkedin.com/in/YOUR_LINKEDIN_HERE",
```
Replace it with your actual LinkedIn username/profile URL.

### 2. Update Email Address
In `src/data/portfolioData.js`:
```javascript
email: "vyas.mishra.placeholder@example.com",
```
Replace this with your active email address. The contact section will automatically route direct emails to this address.

### 3. Update Diploma Institution Name
In `src/data/portfolioData.js`, locate `educationData`:
```javascript
{
  degree: "Diploma in Electrical Engineering",
  institution: "[Institution Name - Editable Placeholder]",
  ...
}
```
Replace `[Institution Name - Editable Placeholder]` with your college/polytechnic name.

### 4. Update Project Repository & Demo Links
In `src/data/portfolioData.js`, locate `projectsData`:
```javascript
{
  id: "safety-compliance",
  githubUrl: "https://github.com/vyasmishra735/your-repo-name",
  demoUrl: null, // Update when a live deployment is available
}
```

---

## 🚀 How to Deploy Your Portfolio

### Deploy to Vercel (Recommended - Free & Fast)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: luxury developer portfolio"
   git remote add origin https://github.com/vyasmishra735/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with GitHub.
3. Click **Add New Project**, select your `portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live with automatic SSL on your custom domain!

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com).
2. Set Build Command to: `npm run build`
3. Set Publish Directory to: `dist`
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.js`, set `base: '/portfolio/'` (matching your repo name).
3. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 🛡️ Accessibility & Performance Highlights
- Respects `prefers-reduced-motion`: automatically disables GSAP scroll triggers and custom cursor animations for users who prefer reduced motion.
- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Full keyboard navigation with visible gold focus rings and accessible skip-to-content link.
- Fluid responsive typography using `clamp()`.
- Pure vector graphics and CSS hardware-accelerated transforms.
