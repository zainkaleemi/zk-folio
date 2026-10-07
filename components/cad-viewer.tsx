'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { ModelViewerElement } from '@google/model-viewer'
import { Box, Maximize2, Minimize2, Minus, Pause, Play, Plus, RotateCcw } from 'lucide-react'
import type { CadModel } from '@/lib/content'
import { cn } from '@/lib/utils'

// The viewer library is ~1MB, so it is only fetched once a viewer scrolls
// near the viewport, and only once per page.
let libraryPromise: Promise<unknown> | null = null
function loadModelViewer() {
  if (!libraryPromise) {
    // Serve the Draco decoder ourselves instead of from Google's CDN.
    const w = self as unknown as { ModelViewerElement?: Record<string, unknown> }
    w.ModelViewerElement = { ...(w.ModelViewerElement ?? {}), dracoDecoderLocation: '/draco/' }
    libraryPromise = import('@google/model-viewer')
  }
  return libraryPromise
}

// The viewer frames models by height, so pull the camera back on tall, narrow stages.
const defaultOrbit = (narrow: boolean) => `35deg 72deg ${narrow ? '145%' : '120%'}`

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-background/60 text-foreground/80 backdrop-blur-md transition hover:border-accent hover:text-accent"
    >
      {children}
    </button>
  )
}

export function CadViewer({
  models,
  figure,
  className,
}: {
  models: CadModel[]
  /** Short figure label shown in the corner, e.g. "Fig. 01". */
  figure?: string
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const viewerRef = useRef<ModelViewerElement | null>(null)
  const [active, setActive] = useState(0)
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const [spinning, setSpinning] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [narrow, setNarrow] = useState(false)

  const model = models[active]

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const update = () => setNarrow(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Load the library when the viewer is about to enter the viewport.
  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect()
          loadModelViewer()
            .then(() => setReady(true))
            .catch(() => setFailed(true))
        }
      },
      { rootMargin: '400px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Track loading progress for the active model.
  useEffect(() => {
    const el = viewerRef.current
    if (!ready || !el) return
    setLoaded(false)
    setFailed(false)
    setProgress(0)
    const onProgress = (e: Event) => {
      const p = (e as CustomEvent<{ totalProgress: number }>).detail?.totalProgress ?? 0
      setProgress(p)
    }
    const onLoad = () => setLoaded(true)
    const onError = () => setFailed(true)
    el.addEventListener('progress', onProgress)
    el.addEventListener('load', onLoad)
    el.addEventListener('error', onError)
    return () => {
      el.removeEventListener('progress', onProgress)
      el.removeEventListener('load', onLoad)
      el.removeEventListener('error', onError)
    }
  }, [ready, active])

  // Fullscreen-style expanded mode: lock page scroll, close on Escape.
  useEffect(() => {
    if (!expanded) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [expanded])

  const resetView = useCallback(() => {
    const el = viewerRef.current
    if (!el) return
    el.cameraOrbit = model.orbit ?? defaultOrbit(narrow && !expanded)
    el.cameraTarget = 'auto auto auto'
    el.fieldOfView = 'auto'
    el.resetTurntableRotation?.()
  }, [model, narrow, expanded])

  const zoom = (steps: number) => viewerRef.current?.zoom?.(steps)

  const pct = Math.round(progress * 100)
  const sizing = cn('aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-auto lg:h-[min(70vh,620px)]', className)

  return (
    <div>
      <div
        className={cn(
          expanded &&
            'fixed inset-0 z-[150] flex items-center justify-center bg-background/90 p-3 backdrop-blur-xl sm:p-8',
        )}
        onClick={(e) => {
          if (expanded && e.target === e.currentTarget) setExpanded(false)
        }}
      >
        <div
          ref={containerRef}
          data-cad
          className={cn(
            'cad-stage edge-glow relative overflow-hidden rounded-[1.5rem] border border-hairline',
            expanded ? 'h-full w-full max-w-[1600px]' : sizing,
          )}
        >
          {/* Floor grid */}
          <div aria-hidden className="cad-stage-floor pointer-events-none absolute inset-x-[-30%] bottom-0 h-[55%]" />

          {/* Crop marks */}
          {[
            'left-4 top-4 border-l border-t',
            'right-4 top-4 border-r border-t',
            'bottom-4 left-4 border-b border-l',
            'bottom-4 right-4 border-b border-r',
          ].map((pos) => (
            <span key={pos} aria-hidden className={`pointer-events-none absolute h-4 w-4 border-accent/70 ${pos}`} />
          ))}

          {ready && (
            <model-viewer
              key={model.src}
              ref={viewerRef}
              src={model.src}
              alt={`Interactive 3D CAD model: ${model.label}. ${model.caption}`}
              camera-controls
              auto-rotate={spinning}
              auto-rotate-delay="2500"
              rotation-per-second="16deg"
              interaction-prompt="none"
              disable-zoom={!expanded}
              camera-orbit={model.orbit ?? defaultOrbit(narrow && !expanded)}
              min-camera-orbit="auto auto 5%"
              max-camera-orbit="auto auto 300%"
              shadow-intensity="1.2"
              shadow-softness="0.85"
              exposure="1.05"
              environment-image="neutral"
              touch-action="pan-y"
              className="absolute inset-0 h-full w-full"
              style={
                {
                  background: 'transparent',
                  '--poster-color': 'transparent',
                  '--progress-bar-height': '0px',
                } as React.CSSProperties
              }
            />
          )}

          {/* Loading / error overlay */}
          {(!loaded || failed) && (
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-4 text-center">
                <Box className={cn('h-8 w-8 text-accent', !failed && 'animate-pulse')} strokeWidth={1.25} />
                <span className="mono-label text-[0.62rem] text-muted-foreground">
                  {failed ? '3D preview unavailable' : ready ? `Loading model · ${pct}%` : 'Preparing 3D viewer'}
                </span>
                {!failed && (
                  <span className="h-px w-40 overflow-hidden bg-hairline">
                    <span
                      className="block h-full bg-gradient-to-r from-accent to-[var(--accent-2)] transition-[width] duration-300"
                      style={{ width: `${Math.max(6, pct)}%` }}
                    />
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Top bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
            <div className="pl-3 pt-3">
              <p className="mono-label text-[0.6rem] text-accent">{figure ?? 'Interactive CAD'}</p>
              <p className="mt-1.5 max-w-[16rem] font-display text-base font-medium leading-tight text-foreground sm:text-lg">
                {model.label}
              </p>
            </div>
            <div className="pointer-events-auto flex gap-2 pr-1 pt-1">
              <IconButton label={spinning ? 'Pause rotation' : 'Auto-rotate'} onClick={() => setSpinning((s) => !s)}>
                {spinning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
              </IconButton>
              <IconButton label="Reset view" onClick={resetView}>
                <RotateCcw className="h-3.5 w-3.5" />
              </IconButton>
              <IconButton label={expanded ? 'Exit full view' : 'Full view'} onClick={() => setExpanded((v) => !v)}>
                {expanded ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
              </IconButton>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 sm:p-5">
            <div className="flex items-end justify-between gap-3">
              <div className="pointer-events-auto flex flex-wrap gap-2 pb-1 pl-1">
                {models.length > 1 &&
                  models.map((m, i) => (
                    <button
                      key={m.src}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                      className={cn(
                        'mono-label rounded-full border px-3 py-1.5 text-[0.58rem] backdrop-blur-md transition',
                        i === active
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-hairline bg-background/60 text-muted-foreground hover:text-foreground',
                      )}
                    >
                      {m.label}
                    </button>
                  ))}
              </div>
              <div className="pointer-events-auto flex gap-2 pb-1 pr-1">
                <IconButton label="Zoom in" onClick={() => zoom(2)}>
                  <Plus className="h-3.5 w-3.5" />
                </IconButton>
                <IconButton label="Zoom out" onClick={() => zoom(-2)}>
                  <Minus className="h-3.5 w-3.5" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Keeps the page from jumping while the viewer is lifted into full view */}
      {expanded && <div aria-hidden className={sizing} />}
      {
        <p className="mono-label mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-[0.58rem] text-muted-foreground">
          <span className="normal-case tracking-normal text-[0.78rem] font-sans text-muted-foreground">
            {model.caption}
          </span>
          <span>Drag to orbit · Right-drag to pan · ⤢ for zoom</span>
        </p>
      }
    </div>
  )
}
