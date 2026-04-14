# Cinematic Birthday Tribute Website

A fully immersive, cinematic, emotionally-driven personal website built as a birthday gift.

This project is designed as a storytelling journey across multiple animated sections, built with modern frontend tooling and smooth motion systems.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion

## Features

- Cinematic storytelling flow across 9 sections
- Scroll-based reveals and staggered animations
- Word-by-word cinematic text reveals
- Parallax depth effects and animated background glows
- Emotionally paced transitions (faster early, slower near finale)
- Optional background music toggle
- Responsive layout for mobile and desktop

## Project Structure

```text
src/
  components/
    HeroSection.jsx
    AgeGapSection.jsx
    ContrastSection.jsx
    RolesSection.jsx
    TimelineSection.jsx
    PersonalitySection.jsx
    MotherSection.jsx
    GratitudeSection.jsx
    FinalSection.jsx
    BackgroundEffects.jsx
    CinematicText.jsx
    MusicToggle.jsx
  hooks/
    useReveal.js
    useParallax.js
  App.jsx
  main.jsx
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Music Setup

The music toggle expects this file:

`public/audio/a-thousand-years-piano.mp3`

Important:

- Ensure you have legal rights/license to use and publish the track.
- `.gitignore` is configured to ignore other audio files, but allow this exact file so it can be deployed on Vercel.

## Deployment (Vercel)

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Vercel will auto-detect Vite settings.
4. Deploy.

If `public/audio/a-thousand-years-piano.mp3` is committed, the music toggle will work in production.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
