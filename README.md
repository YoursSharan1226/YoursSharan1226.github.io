# Sharan Raghavendra — Portfolio

Portfolio site built with **React** and **Vite** (Node.js tooling).

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Assets**  
   Place your images and PDF in `public/assets/`:
   - `profile.jpg` — hero photo
   - `churn.png`, `social-media-convo.jpg`, `predictive-analytics.jpeg`, `Airbnb-Paris-Clustering-KMeans-Final.jpg` — project images
   - `Sharan_Ragothaman_Resume.pdf` — resume download

   If your assets are currently in a root-level `assets/` folder, copy them:
   ```bash
   cp -r assets/* public/assets/
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```
   Open the URL shown in the terminal (e.g. http://localhost:5173).

4. **Build for production**
   ```bash
   npm run build
   ```
   Output is in `dist/`. For GitHub Pages, set the site to serve from the `dist` folder or configure the repo to use the `dist` branch/folder.

## Project structure

- `src/App.jsx` — main app and scroll state for nav
- `src/components/` — Header, Hero, About, Skills, Projects, Experience, Education, Contact, Footer
- `src/App.css` — global styles (ported from original `styles.css`)
- `public/assets/` — static images and resume PDF
- Original static HTML/CSS/JS are in `index-static.html`, `styles.css`, and `script.js` (kept for reference)
