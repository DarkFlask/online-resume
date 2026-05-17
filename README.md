# Miguel Rivera — Developer Portfolio & Resume

A modern, responsive single-page portfolio built with **React**, **TypeScript**, **Tailwind CSS**, **Vite**, and **Framer Motion**. Ready to deploy on **Vercel** or **GitHub Pages**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize your content

Edit **`src/data/resume.ts`** to update:

- Contact info, GitHub, LinkedIn
- Projects (add demo/GitHub links in each project's `links` array)
- Experience, skills, certifications

## Add certificate images

1. Save screenshots or exports in `public/certificates/`:
   - `certiport-databases.webp` (or `.png`)
   - `ibm-fundamentals.webp`
2. Update `image` paths in `src/data/resume.ts` (and optional `verifyUrl` for Credly/Certiport links).

Click any certificate on the site to view it full size.

## Add your resume PDF

Place your PDF at:

```
public/resume.pdf
```

The **Download Resume** buttons link to `/resume.pdf`.

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Deploy to Vercel (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Vercel auto-detects Vite. Use:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy. Every push to `main` redeploys automatically.

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## Deploy to GitHub Pages

1. In `vite.config.ts`, set `base` to your repo name if not using a custom domain:

```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Add to `package.json` scripts:

```json
"deploy": "npm run build && npx gh-pages -d dist"
```

3. Install and deploy:

```bash
npm install -D gh-pages
npm run deploy
```

4. In GitHub → **Settings** → **Pages**, set source to `gh-pages` branch.

For a user site (`username.github.io`), use `base: '/'`.

## Project structure

```
src/
  data/resume.ts      # All resume content
  components/         # UI sections
  context/            # Dark/light theme
  App.tsx
```

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React icons
