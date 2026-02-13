# European Hall of Physics

## Overview

The European Hall of Physics (EHOP) is a digital archive and repository platform dedicated to physics education outside of standard curricula. It showcases academic documents (papers, exercises, books) organized by areas of knowledge (Classical Mechanics, Quantum Mechanics, Thermodynamics, Electromagnetism, Relativity, Optics) and European countries. The application features an interactive Europe map, a searchable/filterable document repository, document detail pages, contact information, and legal terms pages. The visual theme is inspired by the European Union — deep blue backgrounds with gold accents, using Cinzel (display) and Inter (body) fonts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router, not React Router)
- **State Management**: TanStack React Query for server state; local component state via React hooks
- **UI Components**: Shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with CSS custom properties for theming. Dark mode is the default and only mode — the entire UI uses a deep EU-blue background with gold (#FFCC00) accent colors
- **Animations**: Framer Motion for page transitions and element animations
- **Map Visualization**: Custom SVG-based Europe map component (using framer-motion and react-tooltip), with d3-scale available for coloring
- **Build Tool**: Vite with React plugin
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Data Architecture
- **Dual Data Sources**: The app currently has TWO parallel data systems:
  1. **Client-side static data** (`client/src/data/documents.ts`): Hardcoded documents with rich fields (authors array, abstract, keywords, area, pdfUrl, year). The Repository and DocumentDetail pages currently read from this static data.
  2. **Server-side database**: PostgreSQL with Drizzle ORM storing a simpler `documents` table (title, description, type, institution, country, fileUrl). The server seeds sample data on startup if empty.
- **Important**: The client-side hooks (`use-documents.ts`) are wired up to the API but the page components currently import from the static data file. Any future work should reconcile these two systems.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript, executed via tsx
- **API Pattern**: RESTful JSON API under `/api/` prefix
- **API Routes**: Defined in `shared/routes.ts` with Zod validation schemas; implemented in `server/routes.ts`
- **Current Endpoints**:
  - `GET /api/documents` — List all documents
  - `GET /api/documents/:id` — Get single document by ID
  - `POST /api/documents` — Create a new document (validated with Zod)
- **Dev Server**: Vite dev server is integrated as middleware in development; static files served in production from `dist/public`
- **Build Process**: Custom build script (`script/build.ts`) using esbuild for server bundle + Vite for client bundle

### Database
- **Database**: PostgreSQL (required, via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema Location**: `shared/schema.ts`
- **Schema**: Single `documents` table with fields: id (serial PK), title (text), description (text), type (text — 'paper'/'exercise'/'book'), institution (text, nullable), country (text, nullable), fileUrl (text, nullable), createdAt (timestamp)
- **Migrations**: Managed via `drizzle-kit push` (direct push, no migration files needed for dev)
- **Connection**: `pg` Pool in `server/db.ts`

### Shared Code
- The `shared/` directory contains code used by both client and server:
  - `schema.ts` — Drizzle table definitions, Zod insert schemas, TypeScript types
  - `routes.ts` — API route definitions with paths, methods, and Zod response schemas

### Key Design Decisions
1. **Wouter over React Router**: Lightweight client-side routing. Pages use `useLocation` and `Link` from wouter, not react-router-dom. The attached_assets reference files use react-router-dom but the actual app uses wouter.
2. **EU-themed dark design**: The entire app is permanently dark-themed with EU blue (#003399) and gold (#FFCC00) as the core palette. There is no light mode toggle.
3. **Shadcn/ui component library**: Full suite of UI components available in `client/src/components/ui/`. New components can be added via the shadcn CLI.
4. **Static data for browse experience**: The repository browsing currently works off hardcoded data in the client for a rich demo experience with filtering by area, country, year, and search.

## External Dependencies

### Database
- **PostgreSQL**: Required. Connection string provided via `DATABASE_URL` environment variable. Used with `pg` driver and Drizzle ORM.

### Key NPM Packages
- **Server**: express, drizzle-orm, pg, connect-pg-simple, zod, express-session
- **Client**: react, wouter, @tanstack/react-query, framer-motion, react-tooltip, recharts, lucide-react, date-fns
- **UI**: Full shadcn/ui component set (Radix UI primitives, tailwind-merge, class-variance-authority, cmdk, embla-carousel, vaul, input-otp, react-day-picker)
- **Build**: vite, esbuild, tsx, typescript, tailwindcss, postcss, autoprefixer

### Fonts (External CDN)
- Google Fonts: Cinzel (display headings), Inter (body text), DM Sans, Geist Mono, Fira Code, Architects Daughter

### Replit-specific
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay in dev
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)