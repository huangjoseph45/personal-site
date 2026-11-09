# Joseph Huang — Personal Site

Personal portfolio site for Joseph Huang, a computer engineering student at
Georgia Tech (B.S., May 2027). It introduces him, links his social profiles,
shows a resume section, and lists his projects with expandable write-ups.

Live at <https://josephbhuang.vercel.app/>.

## What is on the site

- **Home (`/`)** — animated intro (name, school, focus on React, Node.js, and
  Go), a resume teaser section, and project cards. Each card shows a title,
  date, tags, and blurb, and expands to the full write-up. Project content is
  Markdown in `public/content/project-N/content.md`, served through the
  `api/getMarkdown` serverless function; an optional video or image
  (`content.mp4`, `content-vert.mp4`, `content.png`, …) plays beside the card.
- **Resume (`/resume`)** — a print-optimized one-page resume rendered in HTML
  (no LaTeX), with a print/download path via `react-to-print`.
- **Contact modal** — a contact form sent with EmailJS, plus social links
  (LinkedIn, GitHub, Instagram, Devpost) and a light/dark theme toggle.

### Projects featured

| Project | When | What it is |
| --- | --- | --- |
| Imagine Collective | Jan–Apr 2025 | Custom e-commerce storefront built for a friend's clothing brand (live at imagine-collective.tech) |
| Code for the Community (MECA For Peace app) | May–Aug 2025 | React Native shop, donation, and notification features for the Middle East Children's Alliance, plus a Python/GitHub Actions blog-to-notification pipeline |
| News Cap Fact Checker | Oct 2025 | AI-native video fact checker that verifies claims in YouTube videos (Devpost) |
| Eye-Tracking Productivity Monitor | 2026 | Real-time Python/OpenCV/MediaPipe app that detects when you look away from the screen and plays an alert |

## Stack

React 19 + TypeScript, Vite 6, Tailwind CSS 4, React Router 7, Motion
animations, `react-markdown`. Deployed on Vercel (`vercel.json` builds with
`vite build` and rewrites all routes to `/` for the SPA).

## Run it locally

```bash
npm install
npm run dev      # Vite dev server, http://localhost:5173
```

Other scripts: `npm run build` (`tsc -b && vite build`), `npm run preview`,
`npm run lint`.

### Environment variables

Copy these into a local `.env` (never commit it) — the contact form and
social links read them at build time:

| Variable | Used for |
| --- | --- |
| `VITE_API_URL` | Base URL of the `api/getMarkdown` endpoint |
| `VITE_LINKEDIN`, `VITE_GITHUB`, `VITE_INSTA`, `VITE_DEVPOST` | Social profile links |
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Contact form via EmailJS |

Without them the site still builds and renders; the contact form and social
links just have nowhere to send to.
