import { EXTERNAL_LINK_PROPS, LINKEDIN_URL, PROJECT_URL } from '@/lib/links'

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-2.5 font-display text-sm font-bold tracking-tight">
          <span className="inline-block h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
          ZAIN KALEEMI<span className="text-accent">.</span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={PROJECT_URL}
            {...EXTERNAL_LINK_PROPS}
            className="text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Astro SAFL Project
          </a>
          <a
            href={LINKEDIN_URL}
            {...EXTERNAL_LINK_PROPS}
            className="text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </nav>

        <p className="text-xs text-muted-foreground">
          Engineering portfolio · Built for the machines.
        </p>
      </div>
    </footer>
  )
}
