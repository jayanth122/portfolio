# Personal Portfolio 

A clean, minimal, and professional developer portfolio built with Next.js, Tailwind CSS v4, and Framer Motion.

---

## Preview

![Portfolio Preview](public/preview.png)

---

## Features

- **One config file** — edit `src/config/portfolio.ts` to customize everything
- **4 pages** — Home, About, Projects, Contact
- **Dark mode** — full light/dark toggle with `next-themes`
- **Smooth animations** — Framer Motion fade-in, stagger, and scroll animations
- **Animated tech stack strip** — infinite CSS scroll with hover pause
- **Project filter** — filter projects by category (Web, Mobile, UI, Open Source)
- **Responsive** — mobile-first, works on all screen sizes
- **Sticky navbar** — with mobile hamburger menu
- **Contact form** — with success/loading states (plug in your own backend)
- **TypeScript strict** — fully typed throughout
- **Geist font** — clean, modern Vercel typeface

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org) | Framework (App Router) |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev) | Icons |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark mode |
| [Radix UI](https://radix-ui.com) | Accessible primitives |
| [TypeScript](https://typescriptlang.org) | Type safety |

---

## Folder Structure

```
├── app/
│   ├── page.tsx              ← Home
│   ├── about/page.tsx        ← About
│   ├── projects/page.tsx     ← Projects
│   ├── contact/page.tsx      ← Contact
│   ├── layout.tsx            ← Root layout + ThemeProvider
│   └── globals.css           ← Global styles + CSS variables
├── src/
│   ├── config/
│   │   └── portfolio.ts      ← ✏️ EDIT THIS FILE
│   ├── components/
│   │   ├── layout/           ← Navbar, Footer, ThemeProvider
│   │   ├── home/             ← Hero, TechStack, FeaturedProjects
│   │   ├── about/            ← Bio, Skills, Experience, Education
│   │   ├── projects/         ← ProjectCard, FilterBar, ProjectsClient
│   │   ├── contact/          ← ContactForm
│   │   └── ui/               ← Button, Badge, Card, Input, Textarea, Separator
│   └── lib/
│       └── utils.ts          ← cn() helper
└── public/
    ├── avatar.jpg            ← Your photo (add this)
    └── projects/             ← Project screenshots (add these)
```

---

## Deploy on Vercel

The easiest way to deploy:

1. Push your repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy**

That's it — Vercel will automatically detect Next.js and deploy with optimal settings.

> **Tip:** Remove `unoptimized: true` from `next.config.ts` before deploying to Vercel to enable automatic image optimization.

---

## License

MIT — free to use for personal and commercial projects.
