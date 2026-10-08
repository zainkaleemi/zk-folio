# zk-folio

Engineering portfolio of **Zain Kaleemi**: ABU Robocon, SAE BAJA and R&D work, with interactive 3D CAD
models. Live at [zk-folio-ac.vercel.app](https://zk-folio-ac.vercel.app).

Built with Next.js 16, React 19, Tailwind CSS v4 and [`<model-viewer>`](https://modelviewer.dev).

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm typecheck
pnpm format       # Prettier
```

## Structure

```
app/                    layout, page, global styles, favicon
components/
  layout/               navbar, custom cursor, scroll progress
  sections/             one file per page section, in page order
  ui/                   shared pieces: CAD viewer, galleries, lightbox, reveal
lib/
  content.ts            all text, media and CAD lists (edit this)
  links.ts              email, LinkedIn, résumé
public/
  assets/<subject>/     photos and video, one folder per team or project
  models/               compressed .glb CAD models
  draco/                self-hosted Draco decoder for the models
  Zain_Kaleemi_Resume.pdf
scripts/
  optimize-models.mjs   compresses SolidWorks .glb exports
  resume/               source and build script for the résumé PDF
types/                  JSX types for <model-viewer>
```

## Editing content

Everything shown on the page lives in **`lib/content.ts`**, in priority order: the two teams, R&D, the
internship, then awards and leadership. Each entry can have:

- `cad`: interactive 3D models next to the text (several models get tabs)
- `media`: the photo/video gallery under the entry; `span: 'wide' | 'tall' | 'big'` sets the tile size
- `feature`: one portrait video or photo beside the text

To add photos, put them in `public/assets/<subject>/` and add a line to that entry's `media`. Prefer
`.webp` around 1600px wide; photos straight off a phone are 4–8 MB each and slow the page down.

## Adding CAD models

SolidWorks `.glb` exports are large (10–45 MB) because the geometry is uncompressed. Compress them first:

1. Export from SolidWorks as `.glb` and put the files in `cad-raw/` (git-ignored).
2. Run `pnpm models:optimize`. Compressed copies are written to `public/models/` with the same name.
3. Reference them from `lib/content.ts`, e.g. `{ src: '/models/part.glb', label: '…', caption: '…' }`.
   If a model appears lying down, add `orientation: '0deg -90deg 0deg'`.

This uses Draco compression with very light simplification. The current models went from about 96 MB to
about 3.9 MB with no visible difference.

Files too big to upload elsewhere can be attached to a GitHub Release on this repo (up to 2 GB each).

## Résumé PDF

`public/Zain_Kaleemi_Resume.pdf` is generated from `scripts/resume/resume.html`, a public copy with no
home addresses or phone number. Edit the HTML, then:

```bash
npx playwright install chromium   # first time only
pnpm resume:build
```

Keep it in step with `lib/content.ts` so the site and the résumé say the same thing.
