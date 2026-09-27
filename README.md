# Nithyasree K — Data Analyst Portfolio

A premium, dependency-free portfolio site built to present **Nithyasree K as a Data Analyst**.
Plain HTML, CSS and vanilla JavaScript — no build step, no npm install, deploys straight to
GitHub Pages.

---

## 1. Project structure

```
portfolio-N/
├─ index.html                  # page shell, hero copy, contact form, modal
├─ assets/
│  ├─ css/styles.css           # design tokens, components, motion, responsive
│  ├─ js/data.js               # ← ALL CONTENT LIVES HERE
│  ├─ js/main.js               # rendering + interactions
│  └─ img/
│     ├─ profile-440.jpg/.webp # hero portrait (responsive)
│     ├─ profile-880.jpg/.webp
│     ├─ og-image.jpg          # social share image (1200×630)
│     ├─ apple-touch-icon.png
│     └─ favicon.svg
├─ robots.txt
├─ sitemap.xml
└─ .nojekyll                   # stops GitHub Pages running Jekyll
```

## 2. Preview locally

Any static server works — the site only needs HTTP (no build step):

```bash
cd portfolio-N
python3 -m http.server 5500
# open http://localhost:5500
```

or `npx serve .` if you prefer Node.

## 3. Editing content

Everything you will normally want to change is in **`assets/js/data.js`**:

| Key | What it controls |
| --- | --- |
| `profile` | Name, headline, rotating hero roles, tagline, location, email, social + resume links, form endpoint |
| `stats` | The four animated counters under the hero |
| `marquee` | The scrolling tool strip |
| `highlights` | The four "what I bring" cards in About |
| `experience` / `internships` | Timeline entries, bullet points, tech tags, links |
| `coreSkills` | Skill names, proficiency `level` (0–100) and the note under each bar |
| `skillGroups` | The six skill categories and their chip lists |
| `projectFilters` / `projects` | Project cards, categories, tags, detail text, external links |
| `achievementFilters` / `achievements` | The 23 certifications and their certificate links |
| `education` | Degrees, institutions, results and the meter percentage |
| `languages` / `interests` | The Personal section |

Notes:

- **`profile.email` is empty on purpose.** The previous site never published an email address, so
  nothing was invented here. Set it (for example `"email": "you@example.com"`) and the email chips in
  the hero and contact panel appear automatically; leave it empty and they stay hidden.
- **`profile.formEndpoint`** is the FormSubmit endpoint already used by the old site
  (`https://formsubmit.co/88f0f00c7dd71e567851c088eb6c0b4f`). Replace the hash to point the contact
  form at a different inbox. FormSubmit sends a one-time confirmation email the first time you use a
  new address.
- **Skill levels** (`level: 92` etc.) are honest self-assessments — adjust them to match how you would
  describe yourself in an interview.
- **Project/experience bullet points** were written from the original portfolio's descriptions and
  framed for analytics. Read them once and reword anything that does not match what you actually did.

## 4. Swapping the photo

Replace both `profile-440.*` and `profile-880.*` with the same file names (square crop works best —
the hero renders it in a 1:1 frame). Keep the WebP *and* JPEG versions so every browser gets a good
option.

To regenerate from a new source image with Python + Pillow:

```python
from PIL import Image
im = Image.open("new-photo.jpg").convert("RGB")
w, h = im.size; s = min(w, h)
im = im.crop(((w - s) // 2, int((h - s) * 0.28), (w - s) // 2 + s, int((h - s) * 0.28) + s))
for size, q in ((880, 84), (440, 82)):
    r = im.resize((size, size), Image.LANCZOS)
    r.save(f"assets/img/profile-{size}.jpg", "JPEG", quality=q, optimize=True, progressive=True)
    r.save(f"assets/img/profile-{size}.webp", "WEBP", quality=q, method=6)
```

## 5. Deploying to GitHub Pages

```bash
cd portfolio-N
git init
git add .
git commit -m "Premium data-analyst portfolio"
git branch -M main
git remote add origin git@github.com:Nithy1308/Portfolio.git
git push -u origin main --force   # only if you intend to replace the existing site
```

Then in the repository: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
The site is live at `https://nithy1308.github.io/Portfolio/`.

Nothing needs compiling, so the branch itself is the deployable artefact.

## 6. What is built in

- **Design system** in CSS custom properties with a dark (default) and light theme, toggle persisted
  in `localStorage` and applied before first paint (no flash).
- **Motion**: scroll-reveal via `IntersectionObserver`, animated counters, animated skill meters and
  language rings, typewriter hero, aurora background, cursor spotlight, card tilt, tool marquee,
  scroll progress bar and scroll-spy navigation.
- **Filterable** project and achievement grids with an accessible modal (Esc to close, focus returned
  to the trigger).
- **Contact form** posts in the background with `fetch` and falls back to a normal form post.
- **Performance**: no frameworks, inline SVG icons, WebP + JPEG with `srcset`, an inlined low-quality
  image placeholder behind the portrait, `defer`-red scripts.
- **Accessibility**: semantic landmarks, skip link, visible focus rings, `aria` labels on all icon
  buttons, keyboard-operable cards and dialogs, and full `prefers-reduced-motion` support.
- **SEO**: descriptive title/description, Open Graph + Twitter cards, `Person` JSON-LD, canonical URL,
  robots and sitemap.

## 7. Updating with a custom domain or a different repo path

If the site will live at a different URL, update these three places:

1. `index.html` → `<link rel="canonical">`, `og:url`
2. `index.html` → the `Person` JSON-LD if you add a profile URL
3. `sitemap.xml` → `<loc>` values
