# Portfolio (Vite + React + Tailwind)

This scaffold provides a modern, maintainable portfolio structure.

Quick start (Windows PowerShell):

```powershell
cd d:/portfolio
npm install
npm run dev
```

**Project structure**
- `src/components/` — reusable UI components (Button, Card, Navbar, Footer, etc.)
- `src/pages/` — page-level compositions (Home, About, ProjectsPage)
- `src/hooks/` — custom hooks (e.g. `useTheme`)
- `src/utils/` — static data like `projects.json`
- `src/assets/` — images, CV, etc.

**Palette suggestion**
- Primary: `#14b8a6` (teal-500)
- Accent / Cyan: `#06b6d4`
- Dark background: `#0b1220`
- Card background: `#071026`
- Muted text: `#94a3b8`

**Next improvements (advanced plan)**
1. SEO: add meta tags, server-side rendering (Vite SSR) or prerender, sitemap.xml, OpenGraph images.
2. Performance: enable image optimization (responsive srcset), use CDN for assets, code-splitting and route-based chunking, Lighthouse audits.
3. Accessibility: run axe audits, ensure keyboard navigation, ARIA attributes where needed.
4. Animations: refine with Framer Motion variants, staggered lists, motion-safe preferences.
5. Hosting: deploy to Vercel / Netlify for easy CI + previews; configure caching and headers.
6. Analytics: privacy-first analytics e.g., Plausible or self-hosted solution.

If you want, I can now:
- Run `npm install` in your environment and start the dev server, or
- Customize styles, add real images/CV, or
- Implement form backend (Netlify Functions / serverless / email API).

Form submission (Formspree)
- Create a Formspree endpoint: https://formspree.io/
- Add `.env` at project root with:

```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
```

- Restart dev server after adding `.env`.

Deploy to Vercel
- Connect repository to Vercel and set `Build Command` to `npm run build` and `Output Directory` to `dist`.
- Add `VITE_FORMSPREE_ENDPOINT` environment variable in Vercel dashboard if used.

