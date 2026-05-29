# FeedMe Landing Page

A modern, conversion-focused landing page for the FeedMe food delivery app.
Built with **React 18 + Vite**, **Tailwind CSS v3**, and **Framer Motion**.

---

## Quick start

```bash
cd feedme-landing
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview prod build locally
```

---

## Project structure

```
feedme-landing/
├── index.html                    # Vite entry point — GA4 snippet goes here
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Layout wrapper + skip-to-content
    ├── index.css                 # Tailwind layers + global reset
    ├── utils/
    │   └── analytics.js          # trackEvent() + Events catalogue
    └── components/
        ├── Nav.jsx               # Sticky frosted-glass nav + mobile drawer
        ├── Hero.jsx              # Headline, triple CTA, CSS phone mockup
        ├── SocialProof.jsx       # Stats row + partner restaurant logos
        ├── Features.jsx          # 4-card benefit grid
        ├── HowItWorks.jsx        # Dark section, 3-step numbered list
        ├── AppPreview.jsx        # Feature bullets + staggered phone screens
        ├── Testimonials.jsx      # 3 user review cards
        ├── FAQ.jsx               # Animated accordion, 6 questions
        ├── FinalCTA.jsx          # Full-width orange CTA banner
        └── Footer.jsx            # Links, social icons, app badges
```

---

## Design system

| Token            | Value       |
|------------------|-------------|
| Brand orange     | `#FF6B35`   |
| Orange hover     | `#E5521A`   |
| Dark text        | `#1d1d1f`   |
| Light section bg | `#f5f5f7`   |
| Pill button radius | `9999px` (Tailwind `rounded-full`) |

All section headings use `font-extrabold` + tight tracking for energy.
Animations use Framer Motion `useInView` — every section fades up once on scroll.

---

## Analytics setup

All CTA clicks are pre-wired via `trackEvent()` in `src/utils/analytics.js`.

### GA4
1. Uncomment the `<script>` block in `index.html`
2. Replace `G-XXXXXXXXXX` with your Measurement ID

### Mixpanel
```bash
npm install mixpanel-browser
```
In `src/main.jsx`:
```js
import mixpanel from 'mixpanel-browser'
mixpanel.init('YOUR_TOKEN')
```
`trackEvent()` auto-detects `window.mixpanel`.

### PostHog
```bash
npm install posthog-js
```
In `src/main.jsx`:
```js
import posthog from 'posthog-js'
posthog.init('YOUR_KEY', { api_host: 'https://app.posthog.com' })
```
`trackEvent()` auto-detects `window.posthog`.

### Tracked events

| Event name              | Where fired                          |
|-------------------------|--------------------------------------|
| `app_store_click`       | Hero + Final CTA + Nav app badge     |
| `play_store_click`      | Hero + Final CTA                     |
| `signup_click`          | Hero "Get Started Free"              |
| `nav_cta_click`         | Desktop nav + mobile nav CTA         |
| `nav_link_click`        | All nav links                        |
| `hero_cta_click`        | Hero primary button                  |
| `final_cta_click`       | Final CTA "Get Started Free"         |
| `faq_question_opened`   | Each FAQ accordion open              |
| `testimonial_section_viewed` | Testimonials section enters viewport |

---

## Deploying to Vercel

```bash
npm i -g vercel
vercel        # follow prompts, auto-detects Vite
```

Or connect the repo on vercel.com — it builds on every push automatically.

---

## Customisation

### Replace placeholder images
The phone mockup and app screens use CSS gradients with emoji icons.
To swap in real screenshots, replace the gradient `<div>` blocks in
`Hero.jsx → PhoneMockup` and `AppPreview.jsx → SCREENS` with `<img>` tags.

### Change copy
All marketing text is inline in each component file.
For a CMS-driven approach, move string constants into a `content/` folder
(JSON or MDX) and import them — the component structure is already isolated enough.

### App store links
Replace the `href="#"` placeholders on every `AppStoreBadge` / `PlayStoreBadge`
with your real App Store and Google Play URLs.

---

## Accessibility checklist

- [x] Skip-to-content link (keyboard users)
- [x] Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- [x] Heading order: h1 → h2 (no skipped levels)
- [x] All interactive elements have visible focus styles (orange ring)
- [x] `aria-label` on icon-only links and buttons
- [x] `aria-expanded` on accordion and mobile menu toggle
- [x] `aria-hidden="true"` on decorative emoji
- [x] `<dl>` / `<dt>` / `<dd>` for the stats row
- [x] Alt text pattern: `aria-label` on linked images
- [x] Large tap targets (min 44 × 44 px on mobile)
- [ ] Add captions/transcripts if you embed a real product video
- [ ] Run axe DevTools before launch for full audit

## Responsive QA checklist

- [x] Mobile-first layout — single column stacks cleanly at 375 px
- [x] Hero CTA visible above the fold on all phones
- [x] Navigation collapses to hamburger at < md breakpoint
- [x] Feature cards: 1 col mobile → 2 col tablet → 4 col desktop
- [x] "How It Works" steps: 1 col mobile → 3 col desktop
- [x] Phone mockup hidden / shrunk gracefully at narrow widths
- [x] Footer: 2-col grid on mobile → 5-col on desktop
- [ ] Test on real iOS Safari + Android Chrome before launch
