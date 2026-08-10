'use client'

import { useEffect, useState } from 'react'
import { EXTERNAL_LINK_PROPS, LINKEDIN_URL } from '@/lib/links'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Robotics', href: '#robotics' },
  { label: 'Team', href: '#team' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-sm font-bold tracking-tight"
        >
          <span className="inline-block h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
          <span>
            ZAIN KALEEMI<span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINKEDIN_URL}
            {...EXTERNAL_LINK_PROPS}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-foreground transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-5 bg-foreground transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LINKEDIN_URL}
              {...EXTERNAL_LINK_PROPS}
              onClick={() => setOpen(false)}
              className="mt-4 rounded-md border border-accent px-4 py-2.5 text-center text-sm font-medium text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
