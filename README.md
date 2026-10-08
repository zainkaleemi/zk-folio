# zk-folio

Zain Kaleemi's engineering portfolio, built with Next.js 16, Tailwind CSS v4 and
[`<model-viewer>`](https://modelviewer.dev) for the interactive CAD.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
```

## Editing content

All the text, media and CAD lists live in **`lib/content.ts`**. Each experience or
project entry has:

- `cad`: interactive 3D models shown next to the text (several models get tabs)
- `media`: the photo/video gallery under the entry. `span: 'wide' | 'tall' | 'big'`
  controls the tile size

To add photos (for example more SAE BAJA media), put the files in
`public/assets/baja/` and add a line to the `media` array of the `mudbrothers`
entry. Prefer `.webp` or `.jpg` around 1600px wide; phone photos straight off the
camera are 4–8 MB each and slow the page down.

## Adding CAD models (and the 30 MB problem)

SolidWorks `.glb` exports are big (10–15 MB each) because they store raw,
uncompressed geometry. They hit GitHub's 25 MB upload limit quickly and make the page slow.
Don't upload them as they are. Compress them first:

1. Export the assembly from SolidWorks as `.glb`.
2. Put the raw files in `cad-raw/` at the repo root (this folder is git-ignored).
3. Run `pnpm models:optimize`.
4. The compressed versions are written to `public/models/` with the same file name.
   Commit those, then reference them from `lib/content.ts`, for example
   `{ src: '/models/exoskeleton.glb', label: 'Exoskeleton', caption: '…' }`.

This uses Draco compression plus very light mesh simplification. The current
models went from about 50 MB in total to about 3.3 MB, with no visible
difference. The Draco decoder is served from `public/draco/`, so the viewer has no
third-party CDN dependency.

If a single model is still huge after compression (for example a full assembly with
fasteners), suppress hardware and tiny parts in SolidWorks before exporting.

## Résumé PDF

The downloadable résumé (`public/Zain_Kaleemi_Resume.pdf`) is generated from
`scripts/resume/resume.html`, a public-safe copy with no home addresses or phone number.
Edit the HTML, then run:

```bash
npx playwright install chromium   # first time only
pnpm resume:build
```

Keep it in step with `lib/content.ts` so the site and the résumé say the same thing.
