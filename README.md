# LeeFest Legacy Website

A single-page website celebrating LeeFest — a grassroots music festival that ran from 2006-2015.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Deployment

This project is configured for Vercel deployment. Simply connect your repository to Vercel and deploy.

## Assets Needed

The following assets need to be added to the project:

### Images
- `/public/logo.svg` or `/public/logo.png` - LeeFest logo
- `/public/posters/2006.jpg` through `/public/posters/2015.jpg` - Festival posters (portrait orientation)
- `/public/photos/` - 6-10 curated photos
- `/public/press/` - Press outlet logos (The Guardian, BBC Radio 1, NME, Louder Than War)
- `/public/og-image.jpg` - Open Graph image (1200x630px)
- `/public/favicon.ico` - Favicon

### Video
- Update the YouTube/Vimeo embed URL in `components/AndroidCampaign.tsx`

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx
│   ├── Story.tsx
│   ├── Awards.tsx
│   ├── Press.tsx
│   ├── Posters.tsx
│   ├── Artists.tsx
│   ├── PhotoGallery.tsx
│   ├── AndroidCampaign.tsx
│   ├── Legacy.tsx
│   └── Footer.tsx
└── public/             # Static assets
```

## Features

- ✅ Mobile-first responsive design
- ✅ SEO optimized with meta tags and schema.org markup
- ✅ Accessible (WCAG AA compliant)
- ✅ Fast loading with Next.js Image optimization
- ✅ Touch-friendly interactions
- ✅ Smooth scrolling carousels
- ✅ Dark mode support

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (hosting)
