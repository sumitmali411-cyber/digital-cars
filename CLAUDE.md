# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build
npm run lint       # TypeScript type checking (tsc --noEmit)
npm run clean      # Remove dist/
```

No test framework is configured. Lint is TypeScript-only; there is no ESLint.

## Environment

Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY`. The app reads it via `vite.config.ts` which exposes it as `process.env.GEMINI_API_KEY`.

## Architecture

**AutoVault** is a single-page digital car museum built with React 19 + TypeScript + Vite.

### Navigation model

`App.tsx` manages a simple state machine with `ViewState = 'hero' | 'countries' | 'country-detail' | 'car-detail'`. There is no router — view transitions are driven by `useState` + `AnimatePresence` from `motion/react`. Scroll-to-top fires on every view change.

### Data layer

All museum content is static TypeScript data in `src/data/museumData.ts`, exporting three arrays:
- `countries` — 25+ country records with automotive heritage text
- `manufacturers` — linked to countries via `countryId`
- `cars` — linked to both via `countryId` and `manufacturerId`, with specs and a `modelUrl` pointing to a GLB file

The data types are defined in `src/types.ts` (`Car`, `Manufacturer`, `Country`).

### 3D rendering

`ThreeScene.tsx` wraps `@react-three/fiber` Canvas + `@react-three/drei` helpers. It loads GLB models via `useGLTF`, adds a floating animation via `useFrame`, supports wireframe toggle, and has an `ErrorBoundary` fallback for failed model loads. Local GLB assets live in `src/assets/` (ferrari.glb, bmw.glb, etc.). Currently all cars in `museumData.ts` point to the same remote Three.js example GLB — local assets are available but not yet wired up.

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config.js` needed). Design uses a dark monochrome palette with `emerald-500` as the accent color. Utility composition uses `clsx` + `tailwind-merge`.

### Key component relationships

```
App (state machine)
├── Hero            — landing, "Enter Archive" CTA
├── CountryCard     — grid card for each country
├── CountryDetail   — lists cars for a selected country
│   └── CarCard     — thumbnail card per car
└── CarDetail       — full detail view
    └── ThreeScene  — interactive 3D model viewer
```

`ErrorBoundary.tsx` is a class component used inside `ThreeScene` to catch Three.js render errors without crashing the page.
