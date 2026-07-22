# Rohit Ranjan Kumar — Portfolio Website

A high-performance, multi-page personal portfolio built with **Next.js 15**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**. Designed with a dark glassmorphism aesthetic, smooth animations, and a recruiter-first information architecture.

---

## 🌐 Live Pages

| Route | Description |
|-------|-------------|
| `/` | Hero landing page — name, tagline, CTA |
| `/education` | Academic records with CGPA, TGPA per semester, subject marks & official marksheet viewer |
| `/experience` | Work experience timeline |
| `/projects` | Full-screen project showcase with live launch / GitHub repo cards |
| `/certifications` | Certifications, proctored exams, hackathons & soft skill badges |
| `/skills` | Interactive skills HUD with category filters |
| `/contact` | Contact form & social links |

---

## 🛠 Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org/) (App Router, Static Export)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + custom CSS (glassmorphism, glow effects)
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Icons** — [Lucide React](https://lucide.dev/)
- **Images** — Next.js `<Image>` with WebP/AVIF optimization
- **Canvas** — Custom particle animation on hero

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home / Hero
│   ├── education/
│   ├── experience/
│   ├── projects/
│   ├── certifications/
│   ├── skills/
│   └── contact/
├── components/           # Reusable UI components
│   ├── Navbar.tsx
│   ├── HeroScrollCanvas.tsx
│   ├── EducationTimeline.tsx
│   ├── ExperienceSection.tsx
│   ├── ModularProjectGrid.tsx
│   ├── ProjectLiveFrame.tsx
│   ├── CertificationsGrid.tsx
│   ├── SkillsHud.tsx
│   ├── FooterContact.tsx
│   └── SimpleFooter.tsx
├── data/                 # All content data (edit here to update site)
│   ├── personalData.ts
│   ├── educationData.ts
│   ├── experienceData.ts
│   ├── projectsData.ts
│   ├── certificationsData.ts
│   └── skillsData.ts
└── hooks/
    └── useTextMetrics.ts

public/
└── Image/                # Certification images, marksheet JPEGs
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

---

## 📦 Export Scripts

Two PowerShell scripts are included for packaging the project:

### Source Code Export
```powershell
.\export-source.ps1
```
Collects `src/`, `public/`, and all config files → **`Portfolio-Source.zip`**

### Deployment Export
```powershell
.\export-deploy.ps1
```
Same as source export but labeled for deployment → **`Portfolio-Deploy.zip`**

> **Note:** Neither script includes `node_modules/` or `.next/` — deployment platforms (Vercel, Netlify) generate these automatically from source.

---

## ✏️ Updating Content

All site content is in `src/data/`. No JSX edits needed for most updates:

| File | What to edit |
|------|-------------|
| `personalData.ts` | Name, tagline, email, social links |
| `educationData.ts` | Degrees, grades, semester marks, marksheet images |
| `experienceData.ts` | Work experience entries |
| `projectsData.ts` | Projects, GitHub URLs, live URLs, tech stack |
| `certificationsData.ts` | Certifications, images, dates |
| `skillsData.ts` | Skills with proficiency levels |

---

## 🎨 Design System

- **Background** — `#0a0a0a` carbon dark
- **Accent Cyan** — `#00F0FF`
- **Accent Purple** — `#8A2BE2`
- **Fonts** — Orbitron (headings), Rajdhani (body), JetBrains Mono (code)
- **Cards** — Glassmorphism with `backdrop-blur` and `rgba` borders

---

## 👤 Author

**Rohit Ranjan Kumar**
B.Tech CSE (Data Science & Engineering) — Lovely Professional University

- GitHub: [@rohitranjankumar-01](https://github.com/rohitranjankumar-01)
- LinkedIn: [rohit-r-kumar](https://www.linkedin.com/in/rohit-r-kumar)
- Email: rohitkashyap3009@gmail.com
