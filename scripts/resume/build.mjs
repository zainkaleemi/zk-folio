// Renders scripts/resume/resume.html to public/Zain_Kaleemi_Resume.pdf with Playwright's Chromium.
// Usage: pnpm resume:build   (needs Playwright installed: npx playwright install chromium)
import { chromium } from 'playwright'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const out = join(here, '..', '..', 'public', 'Zain_Kaleemi_Resume.pdf')

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(pathToFileURL(join(here, 'resume.html')).href)
await page.pdf({ path: out, format: 'A4', preferCSSPageSize: true, printBackground: true })
await browser.close()
console.log(`Wrote ${out}`)
