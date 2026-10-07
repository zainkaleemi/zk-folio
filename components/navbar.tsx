'use client'

import { useEffect, useState } from 'react'
import { EMAIL } from '@/lib/links'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'work' },
  { label: 'Projects', id: 'projects' },
  { label: 'Awards', id: 'recognition' },
  { label: 'Contact', id: 'contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently under the middle of the viewport.
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          'mx-auto flex h-14 max-w-[1600px] items-center justify-between rounded-full px-3 transition-all duration-500 sm:px-4',
          scrolled ? 'glass shadow-2xl shadow-black/30' : 'border border-transparent',
        )}
      >
        <a href="#top" className="group flex items-center gap-3" aria-label="Zain Kaleemi, back to top">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background transition-all duration-300 group-hover:rotate-[-8deg] group-hover:bg-accent">
            <span className="font-display text-sm font-bold leading-none tracking-tight">ZK</span>
          </span>
          <span className="hidden font-display text-sm font-medium text-foreground sm:inline">Zain Kaleemi</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-sm transition-colors',
                active === item.id ? 'bg-foreground/10 text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${EMAIL}`}
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:brightness-110 md:inline-flex"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-0.5 w-4 bg-current transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-4 bg-current transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="glass mx-auto mt-2 max-w-[1600px] rounded-3xl p-2 md:hidden" aria-label="Sections">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3.5 font-display text-lg text-foreground hover:bg-foreground/5"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
