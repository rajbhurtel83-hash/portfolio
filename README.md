# Raj Bhurtel — Personal Portfolio

A world-class, ultra-premium personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Three.js, and more. Designed for maximum visual impact and production readiness.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-0.170-black?style=flat-square&logo=three.js)

---

## Features

- **3D Interactive Hero** — Three.js animated sphere with floating particles and glow ring
- **Smooth Animations** — Framer Motion scroll reveals, staggered animations, and micro-interactions
- **Glassmorphism Design** — Modern glass cards with backdrop blur and soft borders
- **3D Tilt Project Cards** — Mouse-following perspective transforms on project cards
- **Dark/Light Theme** — System-aware theme toggle with smooth transitions
- **Contact Form** — React Hook Form + Zod validation + EmailJS integration
- **Responsive** — Mobile-first design that looks great on every device
- **Smooth Scrolling** — Lenis smooth scroll integration
- **Scroll Progress** — Animated progress bar at the top of the page
- **Custom Cursor Glow** — Subtle light-following cursor effect (desktop only)
- **Page Loading Animation** — Branded loading screen with animated dots
- **Custom 404 Page** — Styled "not found" page with navigation
- **SEO Optimized** — Full metadata, Open Graph tags, JSON-LD structured data
- **Animated Typing** — Rotating role text in the hero section
- **Animated Counters** — Numbers that count up on scroll into view
- **Timeline Layout** — Alternating timeline for experience section
- **Expandable Project Modals** — Full project details in overlay modals

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Smooth Scroll | Lenis |
| Form Handling | React Hook Form + Zod |
| Email | EmailJS |
| Icons | Lucide React |
| Theme | next-themes |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/rajbhurtel/raj-portfolio.git
cd raj-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |
| `NEXT_PUBLIC_SITE_URL` | Your deployed site URL |

#### Setting up EmailJS

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `from_name`, `from_email`, `subject`, `message`
4. Copy the Service ID, Template ID, and Public Key to `.env.local`

## Project Structure

```
raj-portfolio/
├── public/
│   ├── resume.pdf              # Your resume (replace with actual PDF)
│   └── projects/               # Project screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, metadata, SEO
│   │   ├── page.tsx            # Main page assembling all sections
│   │   ├── globals.css         # Global styles, glass classes, utilities
│   │   ├── not-found.tsx       # Custom 404 page
│   │   └── loading.tsx         # Loading skeleton
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Floating glass nav with active section tracking
│   │   │   ├── Footer.tsx      # Minimal footer with social links
│   │   │   └── ScrollProgress.tsx  # Top progress bar
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero with 3D scene + typing animation
│   │   │   ├── About.tsx       # About with stats + highlight cards
│   │   │   ├── Skills.tsx      # Categorized animated skill bars
│   │   │   ├── Projects.tsx    # 3D tilt cards + expandable modals
│   │   │   ├── Experience.tsx  # Alternating timeline layout
│   │   │   ├── Achievements.tsx # Counters + achievement cards
│   │   │   ├── Vision.tsx      # Parallax quote section
│   │   │   └── Contact.tsx     # Form with validation + EmailJS
│   │   ├── three/
│   │   │   └── HeroScene.tsx   # Three.js 3D sphere + particles
│   │   └── shared/
│   │       ├── CursorGlow.tsx  # Custom cursor light effect
│   │       ├── PageLoader.tsx  # Animated page loading screen
│   │       ├── SectionHeading.tsx  # Reusable section header
│   │       ├── SmoothScroll.tsx    # Lenis wrapper
│   │       └── ThemeProvider.tsx   # next-themes provider
│   ├── data/
│   │   └── content.ts         # All portfolio content (edit this file!)
│   └── lib/
│       └── utils.ts           # cn() utility for class merging
├── tailwind.config.ts          # Custom colors, fonts, animations
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
├── .env.example                # Environment variable template
└── package.json                # Dependencies and scripts
```

## How to Customize

### Content

All portfolio content is centralized in **`src/data/content.ts`**. Edit this single file to update:

- **Site metadata** — name, title, description, social links
- **Navigation links** — add/remove/reorder nav items
- **Hero section** — greeting, name, typing roles, description, CTA labels
- **About section** — paragraphs, stats
- **Skills** — categories, individual skills, proficiency levels
- **Projects** — title, descriptions, tech stack, URLs
- **Experience** — timeline entries with type (education/work/leadership)
- **Achievements** — titles, descriptions, years
- **Vision** — statement and supporting text

### Colors

Edit `tailwind.config.ts` to change the color scheme:
- `primary` — Main brand color (currently royal blue)
- `accent` — Secondary highlight (currently gold)
- `dark` — Dark mode background shades

### Resume

Replace `public/resume.pdf` with your actual resume PDF.

### Project Images

Add project screenshots to `public/projects/` and update the `image` paths in `src/data/content.ts`.

## Deployment on Vercel

### Option 1: One-Click Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repository
4. Add environment variables from `.env.local`
5. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. In your Vercel project dashboard, go to Settings → Domains
2. Add your custom domain (e.g., `rajbhurtel.com`)
3. Update DNS records as instructed by Vercel
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## Performance Optimization Tips

1. **Images**: Use Next.js `<Image>` component for automatic optimization. Convert images to WebP/AVIF format.
2. **Fonts**: Already configured with `next/font` for zero layout shift.
3. **Code Splitting**: Dynamic imports are used for heavy components (Three.js, CursorGlow, PageLoader).
4. **Bundle Size**: Monitor with `npx next build` — check the output table for page sizes.
5. **Lighthouse**: Run Chrome DevTools Lighthouse audit. Target 90+ on all metrics.
6. **Three.js**: The 3D scene uses low particle count and limited geometry detail for smooth performance on mobile.

## Build Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

## 2026 Upgrade Summary

This repository now includes:

- **Expanded professional sections**: Hero, About, Projects, Technical Skills, Leadership, Startups, Achievements, Investing, Community Work, Contact
- **Secure admin dashboard** at `/admin` with authenticated CRUD for:
  - Projects
  - Startups
  - Achievements
  - Profile/content
  - Inquiries
  - AI knowledge base
- **Upload APIs** for project images and resume files (`/api/admin/upload`)
- **AI chatbot architecture rebuild** using RAG + streaming responses
- **Voice assistant flow** in chat (Speech-to-Text + Text-to-Speech)

## AI Chatbot Architecture

`/api/ai/chat` now uses:

1. Query guardrails (portfolio-only scope)
2. Embedding generation
3. Retrieval from `KnowledgeDocument` + `KnowledgeChunk`
4. Context-grounded response generation (no fabricated facts)
5. Streaming response delivery via SSE
6. Conversation persistence in `ChatConversation` and `ChatMessage`

If OpenAI key is unavailable, the system falls back to deterministic local embeddings and safe response behavior.

## Voice Assistant

Voice support is built into the floating AI chat component:

- **Speech-to-Text**: browser `SpeechRecognition`/`webkitSpeechRecognition`
- **Text-to-Speech**: `speechSynthesis`
- **Flow**: user speaks → message transcribed → AI responds (streaming) → response spoken aloud

## Environment Variables (Minimum)

Add these in `.env.local` before full functionality:

```bash
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<db>?schema=public"
JWT_SECRET="a-strong-secret-min-32-characters"
ADMIN_EMAIL="your-admin-email"
ADMIN_PASSWORD="your-admin-password"
OPENAI_API_KEY="sk-..."
OPENAI_MODEL="gpt-4o-mini"
OPENAI_EMBEDDING_MODEL="text-embedding-3-small"
```

## Database Setup

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Easy Content Editing

You can update content in two ways:

1. **Admin-first (recommended)**
   - Login at `/admin/login`
   - Manage content via dashboard pages (projects/startups/achievements/content/knowledge)

2. **Code-first fallback**
   - Edit `src/data/content.ts`
   - This remains the fallback source for public sections and chatbot static knowledge

## Deployment Notes

For production (Vercel or similar):

1. Provision PostgreSQL (Neon/Supabase/Railway/Azure Database for PostgreSQL)
2. Set all required env vars in hosting platform
3. Run Prisma schema sync (`prisma db push` or migrations in CI)
4. Deploy app (`npm run build` passes)
5. Verify `/admin/login` and `/api/ai/chat` with real OpenAI key

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with precision by **Raj Bhurtel** — Computer Engineering Student at Khwopa Engineering College, Bhaktapur, Nepal.
