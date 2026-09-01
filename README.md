# Rohit Ranjan Kumar — Portfolio Website

A high-performance, multi-page personal portfolio engineered with **Next.js 15**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**. Designed with the **Nordic Frost Slate** design system, interactive HUD interfaces, and a recruiter-first information architecture.

---

## 🌐 Site Overview & Portals

| Route | Portal | Description |
|---|---|---|
| `/` | **Home / Hero** | Dynamic particle canvas, executive profile tagline, portal quick-nav cards |
| `/education` | **Academics** | Academic timeline (B.Tech, 12th, 10th), CGPA/marks breakdown, and high-res verified marksheet lightbox viewer |
| `/experience` | **Work Experience** | Professional & self-driven roles, leadership achievements, and operational milestones |
| `/internship-training` | **Internship & Training** | Subdivision for industrial internships and university specialized training (AI Engineer Launchpad) with completion proof |
| `/projects` | **Project Matrix** | Domain-categorized projects across Full-Stack, AI/NLP, Data Science, and Systems with live demos & sandbox preview |
| `/certifications` | **Certifications** | Proctored certifications (Oracle OCI, Java, DSA, OOP, DBMS), hackathons, and soft-skill credentials |
| `/skills` | **Skills HUD** | Interactive developer capability terminal with categorized modules |
| `/resume` | **CV / Resume** | Official document status portal with direct inquiry actions |
| `/contact` | **Contact** | Interactive transmission form, quick one-click clipboard copy for email/phone, and social hubs |

---

## 🛠 Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org/) (App Router, Static Generation)
- **Language** — TypeScript (Strict Type Checking)
- **Styling** — Tailwind CSS + Custom CSS Variables
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Icons** — [Lucide React](https://lucide.dev/)
- **Image Optimization** — Next.js `<Image>` with AVIF / WebP pipeline
- **Hosting** — [Vercel](https://vercel.com/) (Global Edge CDN, Automatic CI/CD)

---

## 📁 Project Structure

```
My-Portfolio-Website/
├── public/
│   └── Image/                 # Verified credentials & marksheet images
├── src/
│   ├── app/                   # Next.js App Router routes
│   │   ├── page.tsx           # Home portal
│   │   ├── education/
│   │   ├── experience/
│   │   ├── internship-training/
│   │   ├── projects/
│   │   ├── certifications/
│   │   ├── skills/
│   │   ├── resume/
│   │   ├── contact/
│   │   ├── globals.css        # Theme variables & carbon grid
│   │   └── layout.tsx
│   ├── components/            # Interactive UI components
│   │   ├── Navbar.tsx
│   │   ├── HeroScrollCanvas.tsx
│   │   ├── EducationTimeline.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── InternshipTrainingSection.tsx
│   │   ├── ModularProjectGrid.tsx
│   │   ├── ProjectLiveFrame.tsx
│   │   ├── ProjectSandboxTerminal.tsx
│   │   ├── CertificationsGrid.tsx
│   │   ├── SkillsHud.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── FooterContact.tsx
│   │   └── SimpleFooter.tsx
│   ├── data/                  # Decoupled content data layers
│   │   ├── personalData.ts
│   │   ├── educationData.ts
│   │   ├── experienceData.ts
│   │   ├── internshipTrainingData.ts
│   │   ├── projectsData.ts
│   │   ├── certificationsData.ts
│   │   ├── skillsData.ts
│   │   └── resumeData.ts
│   └── hooks/
│       └── useTextMetrics.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🎨 Design System — Nordic Frost Slate

- **Base Dark (Background)** — `#0B1320`
- **Base Card (Panels)** — `#111D30`
- **Accent Cyan (Primary)** — `#38BDF8`
- **Accent Blue (Secondary)** — `#0284C7`
- **Neutral Border** — `#1C2E4A`
- **Text Main** — `#E2E8F0`
- **Text Muted** — `#7E92AB`

---

## 🚀 Local Development

### 1. Clone the repository
```bash
git clone https://github.com/rohitranjankumar-01/My-Portfolio-Website.git
cd My-Portfolio-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

### 4. Build for production
```bash
npm run build
```

---

## 👤 Author

**Rohit Ranjan Kumar**  
B.Tech Computer Science and Engineering — Lovely Professional University  
Specialization: Data Science, Data Engineering & AI Systems

- **GitHub:** [@rohitranjankumar-01](https://github.com/rohitranjankumar-01)
- **LinkedIn:** [rohit-r-kumar](https://www.linkedin.com/in/rohit-r-kumar)
- **Email:** rohitkashyap3009@gmail.com
