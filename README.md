# Screen Shiksha Website

A modern, responsive website for Screen Shiksha - an online education institute offering professional courses in UI/UX Design, Web Development, Graphic Design, and Game Development.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Sora & Outfit (Google Fonts)

## Features

- 🎨 Modern, clean design with warm teal and coral color palette
- 📱 Fully responsive across all devices
- ✨ Smooth animations and transitions
- 🔍 SEO optimized
- 🚀 Fast performance with Next.js
- 📧 Contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page
│   ├── page.module.css      # Home page styles
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   └── courses/
│       └── [slug]/          # Dynamic course pages
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Navbar.module.css
│   ├── Footer.tsx           # Footer component
│   ├── Footer.module.css
│   ├── Button.tsx           # Reusable button component
│   └── Button.module.css
```

## Pages

- **Home** (`/`) - Hero section, courses overview, features, methodology
- **About** (`/about`) - Company story, values, timeline, team
- **Contact** (`/contact`) - Contact form, info, FAQ
- **Courses** (`/courses/[slug]`) - Individual course pages
  - `/courses/ui-ux-design`
  - `/courses/web-development`
  - `/courses/graphic-design`
  - `/courses/game-development`

## Design System

### Colors
- Primary: Deep Teal (`#0d4f4f`)
- Accent: Warm Coral (`#ff6b4a`)
- Background: Warm Off-white (`#faf9f7`)

### Typography
- Headings: Sora
- Body: Outfit

## License

© 2024 Screen Shiksha by Multiorigin. All rights reserved.
