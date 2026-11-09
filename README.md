# Angel Stoynov — Portfolio

Personal portfolio site for a backend/security engineer, built as a dependency-free static site (HTML/CSS/JS) and deployed on GitHub Pages. There is no framework, no build step, and no package manager involved — the files you see are the files that are served.

## Stack

- **Vanilla HTML5** — semantic markup, no templating.
- **CSS3** — custom properties (CSS variables) and CSS grid for layout.
- **Vanilla JavaScript** — no framework, no build step.
- **Fonts** — loaded via Google Fonts: Space Grotesk, Inter, and JetBrains Mono.

## Run locally

Serve the directory over a local HTTP server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser. Opening `index.html` directly from the filesystem also works for a quick look, but a local server more closely matches how the site is served in production.

## Deploy to GitHub Pages

There are two realistic ways to host this on GitHub Pages. Pick one.

### Option A — Project repo (`StoynovAngel/portfolio`)

Served at **https://stoynovangel.github.io/portfolio/**.

1. Create a repository named `portfolio` on GitHub.
2. Initialize and make the first commit (use the Angel Stoynov / StoynovAngel identity):

   ```bash
   git init
   git add -A
   git commit -m "Initial portfolio"
   ```

3. Set the branch, add the remote, and push:

   ```bash
   git branch -M main
   git remote add origin https://github.com/StoynovAngel/portfolio.git
   git push -u origin main
   ```

4. In the repository: **Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → `/(root)` → Save**.
5. Wait about a minute; the site goes live at **https://stoynovangel.github.io/portfolio/**.

### Option B — User site (`StoynovAngel/StoynovAngel.github.io`)

Served at the root domain **https://stoynovangel.github.io/**.

Follow the same steps as Option A, but the repository must be named exactly `StoynovAngel.github.io`. A user site is served at the root domain rather than under a project path.

### Custom domain (CNAME)

If you want a custom domain, add a file named `CNAME` containing just the domain (for example `www.angelstoynov.dev`) and configure your DNS to point at GitHub Pages. Otherwise, ignore this — the default `github.io` URL needs no `CNAME` file. A `CNAME.example` template is included; rename it to `CNAME` and edit the domain.

## Editing content

- **Projects and skills** live in `script.js` as data `const`s near the top of the file.
- **Work history, education, and certificates** live directly in `index.html`.
- **LinkedIn URL** is the `LINKEDIN_URL` const in `script.js`.
