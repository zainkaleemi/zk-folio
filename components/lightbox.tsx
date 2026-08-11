'use client'

import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

type ImageMedia = { type: 'image'; src: string; alt: string; label?: string }
type VideoMedia = { type: 'video'; src: string; poster?: string; label?: string }
export type LightboxMedia = ImageMedia | VideoMedia

type LightboxContextValue = {
  open: (media: LightboxMedia) => void
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) {
    throw new Error('useLightbox must be used within a LightboxProvider')
  }
  return ctx
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [media, setMedia] = useState<LightboxMedia | null>(null)
  const [visible, setVisible] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = useCallback((next: LightboxMedia) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    previouslyFocused.current = document.activeElement as HTMLElement | null
    setMedia(next)
  }, [])

  const close = useCallback(() => {
    setVisible(false)
    closeTimeout.current = setTimeout(() => setMedia(null), 200)
    previouslyFocused.current?.focus?.()
  }, [])

  useEffect(() => {
    if (!media) return
    const raf = requestAnimationFrame(() => setVisible(true))
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = previousOverflow
    }
  }, [media])

  useEffect(() => {
    if (!media) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [media, close])

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {media && (
        <div
          className={`fixed inset-0 z-[200] flex items-center justify-center bg-background/97 p-4 backdrop-blur-md transition-opacity duration-200 sm:p-10 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={media.label ?? (media.type === 'image' ? media.alt : 'Media preview')}
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="mono-label absolute right-4 top-4 flex items-center gap-2 border border-hairline bg-background/70 px-3 py-2 text-[0.6rem] text-foreground transition-colors hover:border-foreground sm:right-8 sm:top-8"
          >
            <X className="h-3.5 w-3.5" aria-hidden />
            Close
          </button>

          <div
            className={`relative flex max-h-full max-w-full flex-col items-center transition-all duration-300 ${
              visible ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-0'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {media.type === 'image' ? (
              <img
                src={media.src}
                alt={media.alt}
                className="max-h-[78vh] w-auto max-w-full border border-hairline object-contain sm:max-h-[85vh]"
              />
            ) : (
              <video
                src={media.src}
                poster={media.poster}
                controls
                autoPlay
                loop
                muted
                playsInline
                className="max-h-[78vh] w-auto max-w-full border border-hairline object-contain sm:max-h-[85vh]"
              />
            )}
            {media.label && (
              <p className="mono-label mt-4 max-w-[90vw] text-center text-[0.6rem] text-muted-foreground">
                {media.label}
              </p>
            )}
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  )
}
