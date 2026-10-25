# Jairam Hegde — Portfolio

My personal portfolio, built with **React** and **Vite** and hosted on **GitHub Pages**.

Live: https://jairamhegde.github.io/resume/

## Design
A minimal hero with the name centred over a quiet, drifting network animation; project cards
with a brief, tech stack and GitHub link; and a grouped tech-stack grid. Set in *Montserrat*
(light and regular weights, spaced capitals for labels), with warm paper tones, one
signal-orange accent, and light/dark themes.

## Editing content
All content lives in one file: **`portfolio/src/data/portfolio.js`**.
Change the objects and arrays there (profile, contact, projects, skills, education, …) and the
components render the new data. No component changes needed.

## Project structure
```
portfolio/
  src/
    data/portfolio.js   ← all content
    components/         Hero, Topbar, About, Projects, Stack, Education, Contact
    hooks/              scroll reveal, active section, count-up, typewriter
    styles.css          all styling (colour tokens at the top)
  vite.config.js        `base: "/resume/"` for GitHub Pages
.github/workflows/deploy.yml   builds and deploys on push to main
```

## Run locally
```powershell
cd portfolio
npm install
npm run dev
```
Open the URL Vite prints (http://localhost:5173/resume/).

## Deploy
1. On GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
2. Push to `main`. The workflow builds `portfolio/` and publishes it.

If the repository is renamed, update `base` in `portfolio/vite.config.js` to match.

## Contact
Email: jairamhegde002@gmail.com · GitHub: https://github.com/Jairamhegde
