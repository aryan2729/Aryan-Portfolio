# Aryan – Portfolio

Modern, animated developer portfolio built with Next.js, Framer Motion, and a shared UI package, organized in a Turborepo monorepo.

## Live Site

> Replace the URL below with your deployed portfolio link.

- **Live Portfolio**: [https://aryancode27.vercel.app](https://aryancode27.vercel.app)

## Tech Stack

- **Framework**: Next.js (App Router)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS, custom CSS (`globals.css`)  
- **Animations**: Framer Motion, scroll-based reveals, hover interactions  
- **Monorepo tooling**: Turborepo, PNPM workspaces  
- **Shared UI**: `@repo/ui` package for buttons, cards, and code components  
- **Linting & Types**: ESLint (`@repo/eslint-config`), TypeScript configs from `@repo/typescript-config`

## Monorepo Structure

- `apps/web`: Main portfolio application (the site you see in the browser)
- `packages/ui`: Shared UI components used by `web`
- `packages/eslint-config`: Centralized ESLint configuration
- `packages/typescript-config`: Shared `tsconfig` bases for apps/packages

The root `package.json`, `turbo.json`, and `pnpm-workspace.yaml` wire everything together as a single monorepo.

### Repository File Structure (Overview)

High-level layout of the repository:

```bash
PortfolioProject/
├─ apps/
│  └─ web/
│     ├─ app/
│     │  ├─ layout.tsx          # Root layout (imports globals.css)
│     │  ├─ page.tsx            # Main portfolio page (all sections)
│     │  ├─ globals.css         # Tailwind + global styles + theme tokens
│     │  └─ page.module.css     # Base layout utilities & responsive helpers
│     ├─ components/
│     │  ├─ Navbar.tsx          # Top navigation bar with animated links
│     │  ├─ Hero.tsx            # Wraps BackgroundPaths hero
│     │  ├─ Projects.tsx        # Project data + Timeline usage
│     │  ├─ Skills.tsx          # Scrolling skills text using ScrollVelocity
│     │  ├─ Experience.tsx      # Bold experience headline section
│     │  ├─ Contact.tsx         # Contact CTA, socials, resume link
│     │  ├─ IntroLoader.tsx     # Intro loading animation
│     │  ├─ ExpandableVideo.tsx # Video preview for project demos
│     │  ├─ BlurText.tsx        # Text blur/animation utility
│     │  ├─ ShinyText.tsx       # Shimmer effect for text (used in socials)
│     │  ├─ ScrollVelocity.tsx  # Continuous scrolling text component
│     │  └─ kokonutui/
│     │     └─ DynamicText.tsx  # Additional animated text utility
│     ├─ components/ui/
│     │  ├─ background-paths.tsx # Animated SVG hero background + CTA
│     │  ├─ button.tsx           # Shared button component
│     │  └─ timeline.tsx         # Vertical projects timeline
│     ├─ lib/
│     │  └─ utils.ts             # Small shared utilities
│     ├─ public/
│     │  ├─ Aryan_Resume.pdf     # Resume file
│     │  ├─ videos/
│     │  │  ├─ Ayutra.mp4
│     │  │  ├─ NimbusKeyboard.mp4
│     │  │  └─ SecondBrain.mp4
│     │  └─ *.svg                # Icons and logos
│     ├─ next.config.js
│     ├─ tsconfig.json
│     └─ package.json
├─ packages/
│  ├─ ui/                        # Shared UI library (buttons, cards, code)
│  │  ├─ src/
│  │  │  ├─ button.tsx
│  │  │  ├─ card.tsx
│  │  │  └─ code.tsx
│  │  ├─ eslint.config.mjs
│  │  └─ tsconfig.json
│  ├─ eslint-config/             # Central ESLint configs
│  │  ├─ base.js
│  │  ├─ next.js
│  │  └─ react-internal.js
│  └─ typescript-config/         # Shared TS config presets
│     ├─ base.json
│     ├─ nextjs.json
│     └─ react-library.json
├─ node_modules/
├─ package.json                   # Root scripts & workspace config
├─ pnpm-workspace.yaml            # PNPM workspace definition
├─ turbo.json                     # Turborepo pipeline configuration
└─ README.md
```

## Portfolio App (`apps/web`)

The `web` app is a single-page portfolio with smooth-scrolling sections, built with the Next.js **App Router** (`app/` directory).

### High‑Level Page Flow

The main entry point is `apps/web/app/page.tsx`:

- Renders the following sections in order inside `<main>`:
  - `Navbar` (only after the intro loader finishes)
  - `Hero` (`#home`)
  - `Projects` (`#projects`)
  - `Skills` (`#skills`)
  - `Experience` (`#experience`)
  - `Contact` (`#contact`)
- Uses React state to show an `IntroLoader` first, then reveals the rest of the page.

Section anchors (`id="home"`, `id="projects"`, etc.) are used by the navbar for smooth scrolling.

- **Navbar**  
  - Fixed at the top with blurred background and animated brackets around each nav item.  
  - Links: `Home`, `Projects`, `Skills`, `Experience`, `Contact`.  
  - Fully responsive: stacks vertically and centers links on small devices (e.g. iPhone XR).

- **Hero**  
  - Uses `BackgroundPaths` (`components/ui/background-paths.tsx`) to render animated SVG paths behind the main heading.  
  - Large cinematic heading and a primary CTA button that smoothly scrolls to the Projects section.

- **Projects**  
  - Timeline-based layout using `Timeline` from `components/ui/timeline.tsx`.  
  - Each project (`Ayutra`, `Nimbus Keyboard`, `Second Brain`) has:
    - A detailed description and bullet points.
    - An `ExpandableVideo` preview pulled from `public/videos/*.mp4`.  
  - Designed to read like case studies rather than just cards.

- **Skills**  
  - Uses `ScrollVelocity` to create horizontally scrolling, looping text of tech keywords.  
  - Emphasizes core stack: TypeScript, React/Next.js, Node.js, databases, and tooling.

- **Experience**  
  - Bold, headline-driven section (e.g. “36 HOURS / NATIONAL JURY / NO MENTORS / SHIPPED ANYWAY”).  
  - Animated with Framer Motion (staggered, easing) and responsive font sizes.

- **Contact**  
  - Strong contact headline: “Let’s build something people actually use.”  
  - Now animated with `motion.h2` (fades in and moves up on scroll).  
  - Secondary CTA row + email + social links (`LinkedIn`, `Instagram`, `Twitter`, `GitHub`) with `ShinyText` effect.  
  - Resume link served from `public/Aryan_Resume.pdf`.

### Detailed Directory Structure (`apps/web`)

Key files and folders that make up the site:

- `app/`
  - `layout.tsx` – Root layout that imports `globals.css` and wraps all pages.  
  - `page.tsx` – Main portfolio page; stitches together `Navbar`, `Hero`, `Projects`, `Skills`, `Experience`, `Contact`, and `IntroLoader`.  
  - `globals.css` – Global Tailwind/CSS configuration, theme tokens, and custom animations.  
  - `page.module.css` – Base layout utility styles (grid, CTAs, footer, responsive tweaks).
- `components/`
  - `Navbar.tsx` – Fixed top navigation with animated bracket links and responsive flex layout.  
  - `Hero.tsx` – Thin wrapper that renders `BackgroundPaths` with the main heading.  
  - `Projects.tsx` – Defines project data and passes it to the `Timeline` UI component.  
  - `Skills.tsx` – Uses `ScrollVelocity` to render continuously scrolling skill texts.  
  - `Experience.tsx` – Framer Motion–driven, headline-style experience section.  
  - `Contact.tsx` – Contact CTA, social links, animated heading, and resume link.  
  - `IntroLoader.tsx` – Intro animation shown before revealing the main content (imported in `page.tsx`).  
  - `ExpandableVideo.tsx` – Reusable video preview component for project demos.  
  - `BlurText.tsx`, `ShinyText.tsx`, `ScrollVelocity.tsx`, `kokonutui/DynamicText.tsx` – Smaller visual/animation utilities used across sections.
- `components/ui/`
  - `background-paths.tsx` – Animated SVG path background and Hero layout.  
  - `button.tsx` – Reusable button component, tied into the shared UI design language.  
  - `timeline.tsx` – Vertical timeline component that lays out the projects.  
  - `background-paths.tsx` is heavily responsible for the “cinematic” hero look.
- `public/`
  - `videos/Ayutra.mp4`, `videos/NimbusKeyboard.mp4`, `videos/SecondBrain.mp4` – Project demo videos.  
  - `Aryan_Resume.pdf` – Resume file linked from the Contact section.  
  - Various `.svg` icons for potential use in UI.

### Component Interaction & Data Flow

- `page.tsx`
  - Imports and composes top-level sections: `Navbar`, `Hero`, `Projects`, `Skills`, `Experience`, `Contact`.  
  - Manages simple boolean state (`ready`, `introDone`) to show an intro loader first, then the main content.
- `Navbar.tsx`
  - Holds a small `navItems` array of `{ name, href }`.  
  - Renders items with hover animations using Tailwind transitions and CSS transforms.  
  - Uses responsive classes (`flex-col md:flex-row`, `text-xs sm:text-sm md:text-lg`) to adapt layout from mobile to desktop.
- `Projects.tsx`
  - Defines a `data` array of project entries where each `content` is a JSX block.  
  - Passes this array to `Timeline`, which is responsible for layout and scrolling behavior.  
  - Uses `ExpandableVideo` to keep video previews compact while still interactive.
- `Experience.tsx`
  - Defines motion `Variants` for container and items (stagger, ease-out).  
  - Uses `whileInView` and `viewport` options so animations trigger as you scroll.  
  - Scales typography with responsive text sizes.
- `Contact.tsx`
  - Uses `motion.h2` for the main heading animation (fade + slide up).  
  - Renders an animated secondary CTA row with a Framer Motion hover shift.  
  - Displays email and social links with `ShinyText` and exposes a direct resume link.

### Responsiveness & Breakpoints

- Layout responsiveness is primarily handled via Tailwind responsive prefixes:
  - `sm:` – small screens  
  - `md:` – tablets / mid-size  
  - `lg:` and above – desktop
- **Navbar**
  - On mobile (e.g. iPhone XR) the nav uses `flex-col` and `h-auto` so the logo and links stack cleanly.  
  - Links center on small screens and move to the right on larger screens.
- **Typography**
  - Many headings use `clamp()` or `sm:`, `md:` text classes to avoid overflow.  
  - Experience headlines and Contact headline shrink slightly on small screens to remain readable.
- **Spacing**
  - Sections use responsive paddings (e.g. `px-4 sm:px-6`, `py-16 sm:py-24`) to prevent content from feeling cramped on mobile.

## Getting Started (Local Development)

Clone the repository and install dependencies with PNPM:

```sh
git clone <your-repo-url>.git
cd PortfolioProject

pnpm install
```

Run the development server for all apps (most importantly `web`):

```sh
pnpm dev
```

Or run only the portfolio app:

```sh
cd apps/web
pnpm dev
```

Open the app in your browser (by default): `http://localhost:3000`.

## Building for Production

From the monorepo root:

```sh
pnpm build
```

This runs the Turborepo build pipeline and builds all apps and packages, including `apps/web`.

To build just the portfolio:

```sh
pnpm turbo build --filter=web
```

## Deployment

The portfolio is designed to be deployed easily on platforms like Vercel:

1. Push the repo to GitHub/GitLab/Bitbucket.  
2. Create a new project on your hosting provider and point it at this repo.  
3. Set the root directory (if required) to `apps/web` for the Next.js app.  
4. Ensure the **build command** and **output directory** match your provider’s Next.js defaults.

Once deployed, update the **Live Site** link at the top of this README with your actual URL.

## Styling & Theming

- Global Tailwind setup is in `apps/web/app/globals.css`.  
- A custom theme is defined using `@theme inline` and CSS variables (`--background`, `--foreground`, etc.).  
- Extra custom classes include:
  - `glow-border`: gradient border with animated glow.
  - Background path animations via `@keyframes glowMove` and `shine`.

Responsive behavior is achieved using Tailwind’s responsive utilities (`sm:`, `md:`, etc.) rather than separate CSS files.

## Animations

- **Framer Motion** is used for:
  - Hero heading letter-by-letter entrance.
  - Experience section staggered lines.
  - Contact heading and content reveal.
  - Micro-interactions (hover shift on CTAs, etc.).
- Motion configuration (e.g. `easeOutExpo`, staggered variants) lives close to the components to keep behavior self-contained.

## Assets

- `public/videos/*.mp4`: Demo videos for each major project.  
- `public/Aryan_Resume.pdf`: Resume served directly via the Contact section.  
- Additional SVG icons (e.g. `globe.svg`, `window.svg`) for potential UI enhancements.

## Scripts (root `package.json`)

Typical scripts you’ll find/use from the monorepo root:

- `pnpm dev` – Run development mode for all apps.  
- `pnpm build` – Build all apps and packages.  
- `pnpm lint` – Run ESLint across the monorepo (if configured).  

Refer to the actual `package.json` for the exact script names used in this repo.

## Thank You

Thank you for taking the time to explore this portfolio and its codebase.  
If you have any feedback, collaboration ideas, or opportunities, feel free to reach out via the **Contact** section on the site or the email/social links provided there.
