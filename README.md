# Bashuai Aluminium & Glass Works

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **Precision Architectural Aluminium Fabrication & Frameless Glass Systems**  
> Custom curtain walling, acoustic partitions, sliding & casement doors, structural balustrades, and high-spec glass enclosures.

---

## 🌟 Overview

**Bashuai Aluminium & Glass Works** is a modern, high-performance web platform built for precision architectural fabrication. Designed for architects, commercial contractors, and homeowners, the application features an interactive instant cost estimator, comprehensive engineering specifications, project showcase gallery, and instant WhatsApp inquiry channels.

---

## 🚀 Key Features

- **⚡ Precision Cost Estimator**: Real-time architectural price estimation based on structural profiles, custom height/width dimensions, glass thicknesses (tempered, laminated, double-glazed), finishes, and structural hardware.
- **📱 Direct Multi-Line WhatsApp Integration**: Instant quotation export and direct messaging linked to:
  - **WhatsApp Line 1**: `+254 790 602 155`
  - **WhatsApp Line 2**: `+254 786 862 374`
- **🌐 Connected Social Channels**: Direct integration with the [Official Facebook Page](https://web.facebook.com/profile.php?id=61588404058082).
- **🏛️ Project Gallery & Portfolio**: High-resolution gallery highlighting commercial storefronts, residential curtain walls, skylights, and balustrade installations.
- **🔬 Engineering & Material Specifications**: In-depth breakdown of 6063-T6 architectural aluminium alloys, thermal barrier technology, wind-load compliance, and acoustic STC ratings.
- **📑 Detailed Quotation Generator**: Interactive quotation request modal that generates formatted project specs ready for WhatsApp transmission or PDF generation.
- **📱 100% Responsive & Accessible**: Optimized for mobile, tablet, and ultra-wide displays with fluid typography and smooth micro-interactions.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Fonts**: Plus Jakarta Sans, Outfit, and JetBrains Mono

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI for build & lint validation
├── public/                      # Static assets & icons
├── src/
│   ├── assets/                  # High-resolution architectural images & logos
│   ├── components/
│   │   ├── Calculator.tsx       # Interactive architectural fabrication cost estimator
│   │   ├── ContactSection.tsx   # Direct WhatsApp, phone, email & workshop address
│   │   ├── FaqSection.tsx       # Frequently asked technical & fabrication questions
│   │   ├── Footer.tsx           # Global footer with social links & site navigation
│   │   ├── Hero.tsx             # Hero section with direct line quick-access cards
│   │   ├── Logo.tsx             # Precision SVG brand logo
│   │   ├── MaterialSpecs.tsx    # Alloy grades, glass specs & anodization finishes
│   │   ├── Navbar.tsx           # Sticky responsive navigation with telephone hotline
│   │   ├── PortfolioSection.tsx # Filterable completed architectural projects
│   │   ├── QuoteModal.tsx       # Specification form with WhatsApp direct transfer
│   │   ├── ServicesSection.tsx  # Core services & structural engineering systems
│   │   ├── TestimonialsAndProof.tsx # Client reviews & safety accreditations
│   │   └── WorkshopCraft.tsx    # Workshop tooling, CNC cutting & quality checks
│   ├── data/
│   │   └── fabricationData.ts   # Pricing matrix, project profiles & tech specs
│   ├── App.tsx                  # Primary application layout
│   ├── index.css                # Tailwind CSS v4 directives & custom utilities
│   └── main.tsx                 # Application entry point
├── .env.example                 # Example environment variables
├── .gitignore                   # Standard Git ignore file
├── index.html                   # HTML entry point with OpenGraph & SEO tags
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite bundler configuration
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** (or **Bun 1.0+**) and **npm** installed on your machine.

- Check Node version:
  ```bash
  node -v
  ```
- Check npm version:
  ```bash
  npm -v
  ```

### 1. Clone the Repository

```bash
git clone https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY>.git
cd <YOUR-REPOSITORY>
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using bun:
```bash
bun install
```

### 3. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` (or the port specified in terminal).

### 4. Build for Production

```bash
npm run build
```

This compiles optimized production-ready HTML, CSS, and JavaScript bundles into the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

### 6. Lint & Type Check

```bash
npm run lint
```

---

## 🚀 Publishing to GitHub

If you are initializing this project into a new GitHub repository for the first time:

1. **Create a new repository** on [GitHub](https://github.com/new) (e.g. `bashuai-aluminium-glass`). Leave it empty (without README or .gitignore).
2. **Link and push your local repository**:

```bash
# Initialize git if not already initialized
git init -b main

# Add all files
git add .

# Commit changes
git commit -m "feat: initial commit for Bashuai Aluminium & Glass Works"

# Add your GitHub remote repository (replace with your repository URL)
git remote add origin https://github.com/<YOUR-USERNAME>/bashuai-aluminium-glass.git

# Push to GitHub
git push -u origin main
```

---

## 🌐 Deployment Options

### Deploy on Vercel

The fastest way to deploy this Vite application:
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **New Project**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**.

### Deploy on Netlify

1. Sign in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** > **Import an existing project**.
3. Connect your GitHub repository.
4. Build settings will auto-populate:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Deploy on GitHub Pages

You can deploy directly to GitHub Pages using the included GitHub Actions workflow or the `gh-pages` package:
1. In `vite.config.ts`, set `base: '/<REPO-NAME>/'` if deploying to `https://<USERNAME>.github.io/<REPO-NAME>/`.
2. Push to `main` branch to trigger automated deployment.

---

## 📞 Contact & Inquiries

- **WhatsApp Line 1**: [+254 790 602 155](https://wa.me/254790602155)
- **WhatsApp Line 2**: [+254 786 862 374](https://wa.me/254786862374)
- **Facebook**: [Bashuai Aluminium Official Page](https://web.facebook.com/profile.php?id=61588404058082)
- **Workshop Desk**: `+254 790 602 155` / `+254 786 862 374`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
