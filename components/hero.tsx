'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { EXTERNAL_LINK_PROPS, LINKEDIN_URL } from '@/lib/links'

const CALLOUTS = [
  { k: 'CSWP', v: 'Certified SolidWorks Professional', pos: 'left-[3%] top-[76%]', depth: '-14px', delay: '0.9s' },
  { k: 'AIR 10', v: 'IKR Go-Kart · Team Asphalt', pos: '-right-[10%] top-[24%]', depth: '-20px', delay: '1.05s' },
  { k: '1st', v: 'AgriTech · MAKEFORHYDERABAD', pos: '-right-[6%] top-[60%]', depth: '-10px', delay: '1.2s' },
]

/** Concentric drafting rings that sit behind the portrait. */
function DraftingRings() {
  const ticks = Array.from({ length: 72 }, (_, i) => i)
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--ice)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <g className="origin-center animate-spin-slow" style={{ transformBox: 'fill-box' }}>
        <circle cx="300" cy="300" r="290" fill="none" stroke="url(#ring-grad)" strokeOpacity="0.35" />
        {ticks.map((i) => (
          <line
            key={i}
            x1="300"
            y1={i % 6 === 0 ? 10 : 18}
            x2="300"
            y2="26"
            stroke="var(--foreground)"
            strokeOpacity={i % 6 === 0 ? 0.45 : 0.18}
            transform={`rotate(${i * 5} 300 300)`}
          />
        ))}
        <text
          x="300"
          y="52"
          textAnchor="middle"
          className="fill-current font-mono text-[11px] tracking-[0.3em] text-accent"
        >
          Ø 580
        </text>
      </g>
      <g className="origin-center animate-spin-slower" style={{ transformBox: 'fill-box' }}>
        <circle
          cx="300"
          cy="300"
          r="225"
          fill="none"
          stroke="var(--foreground)"
          strokeOpacity="0.14"
          strokeDasharray="2 7"
        />
        <circle
          cx="300"
          cy="300"
          r="170"
          fill="none"
          stroke="var(--ice)"
          strokeOpacity="0.22"
          strokeDasharray="60 14 6 14"
        />
        <circle cx="300" cy="75" r="4" fill="var(--accent)" />
      </g>
      <line x1="300" y1="0" x2="300" y2="600" stroke="var(--foreground)" strokeOpacity="0.06" />
      <line x1="0" y1="300" x2="600" y2="300" stroke="var(--foreground)" strokeOpacity="0.06" />
    </svg>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement | null>(null)

  // Mouse parallax: publish a normalised pointer offset as CSS variables.
  useEffect(() => {
    const node = ref.current
    if (!node || !window.matchMedia('(pointer: fine)').matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = node.getBoundingClientRect()
        node.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
        node.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
      })
    }
    node.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      node.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-24 lg:min-h-[max(100svh,760px)]"
    >
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blueprint fade-mask-radial absolute inset-0 opacity-70" />
        <div className="animate-aurora absolute left-1/2 top-[30%] h-[70vmax] w-[70vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent)_30%,transparent),transparent_60%)] blur-2xl" />
        <div className="absolute -left-[20%] -top-[30%] h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--ice)_14%,transparent),transparent_60%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Giant name, behind the portrait */}
      <div
        aria-hidden
        className="parallax pointer-events-none absolute inset-x-0 top-[13%] -z-10 select-none text-center lg:top-[16%]"
        style={{ '--depth': '-12px' } as React.CSSProperties}
      >
        <p className="display animate-rise text-[24vw] font-bold uppercase leading-[0.8] tracking-[-0.06em] text-foreground/[0.07] lg:text-[17.5vw]">
          Zain
        </p>
        <p
          className="display animate-rise text-outline text-[24vw] font-bold uppercase leading-[0.8] tracking-[-0.06em] lg:text-[17.5vw]"
          style={{ animationDelay: '0.12s' }}
        >
          Kaleemi
        </p>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 grid-rows-[auto_1fr] px-5 sm:px-8 lg:grid-cols-[1fr_minmax(0,620px)_1fr] lg:grid-rows-1 lg:px-12">
        {/* Left column: intro */}
        <div className="z-10 order-2 flex flex-col justify-end pb-10 lg:order-1 lg:pb-24">
          <div className="animate-rise flex items-center gap-3" style={{ animationDelay: '0.3s' }}>
            <span className="animate-pulse-ring h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span className="mono-label text-muted-foreground">Hyderabad · Mechanical Engineering</span>
          </div>
          <h1
            className="display animate-rise mt-5 text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.95]"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="sr-only">Zain Kaleemi — </span>
            Designing machines
            <br />
            that <span className="serif-accent text-gradient pr-1 text-[1.12em]">move.</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: '0.5s' }}
          >
            Mechanical Head at Team Robocon MJCET, vehicle designer for SAE BAJA, and researcher building field robots,
            from CAD and FEA to the competition floor.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.6s' }}>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:bg-accent hover:text-accent-foreground"
            >
              Explore the work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href={LINKEDIN_URL}
              {...EXTERNAL_LINK_PROPS}
              className="glass inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-accent"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Centre: portrait */}
        <div className="relative order-1 mx-auto flex h-[min(62svh,520px)] w-full max-w-[520px] items-end justify-center lg:order-2 lg:h-auto lg:max-w-none">
          <div
            className="parallax absolute left-1/2 top-[46%] aspect-square w-[118%] -translate-x-1/2 -translate-y-1/2 opacity-80 lg:top-[44%] lg:w-[125%]"
            style={{ '--depth': '18px' } as React.CSSProperties}
            aria-hidden
          >
            <DraftingRings />
          </div>
          <div
            className="parallax hero-glow relative z-10 flex h-full items-end justify-center"
            style={{ '--depth': '8px' } as React.CSSProperties}
          >
            <img
              src="/assets/hero/zain-cutout.webp"
              alt="Portrait of Zain Kaleemi in a black suit and tie"
              width={1254}
              height={1254}
              fetchPriority="high"
              className="hero-portrait animate-rise h-full w-auto max-w-none object-contain object-bottom lg:h-[min(84svh,820px)]"
              style={{ animationDelay: '0.15s' }}
            />
          </div>

          {/* Drawing-style callouts */}
          {CALLOUTS.map((c) => (
            <div
              key={c.k}
              className={`parallax absolute z-20 hidden xl:block ${c.pos}`}
              style={{ '--depth': c.depth } as React.CSSProperties}
            >
              <div className="animate-rise" style={{ animationDelay: c.delay }}>
                <div className="glass animate-float rounded-2xl px-4 py-3 shadow-2xl shadow-black/40">
                  <p className="display text-2xl text-foreground">{c.k}</p>
                  <p className="mono-label mt-1 text-[0.56rem] text-muted-foreground">{c.v}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right column: quick facts */}
        <div className="z-10 order-3 hidden flex-col items-end justify-end pb-24 text-right lg:flex">
          <dl className="animate-rise space-y-6" style={{ animationDelay: '0.7s' }}>
            {[
              ['Currently', 'Mechanical Head · Robocon'],
              ['Studying', 'B.E. Mechanical · MJCET ’28'],
              ['Toolkit', 'SolidWorks · FEA · Prototyping'],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="mono-label text-[0.6rem] text-accent">{k}</dt>
                <dd className="mt-1.5 font-display text-lg text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <a
            href="#about"
            className="mono-label group mt-12 flex items-center gap-3 text-[0.6rem] text-muted-foreground hover:text-foreground"
          >
            Scroll
            <span className="relative h-10 w-px overflow-hidden bg-hairline">
              <span className="absolute inset-x-0 top-0 h-1/2 animate-[float-y_1.8s_ease-in-out_infinite] bg-accent" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
