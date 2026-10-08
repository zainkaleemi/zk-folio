'use client'

import type { KeyboardEvent, ReactNode } from 'react'
import { Expand } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLightbox, type LightboxMedia } from '@/components/ui/lightbox'

export function MediaFrame({
  media,
  className,
  children,
  iconPosition = 'top-right',
  desktopOnly = false,
}: {
  media: LightboxMedia
  className?: string
  children: ReactNode
  iconPosition?: 'top-right' | 'bottom-right'
  /** Disable the expand affordance and click-to-open on small/touch screens
   * where the caption layout leaves no clean spot for it. */
  desktopOnly?: boolean
}) {
  const { open } = useLightbox()

  const isDesktopViewport = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches

  const handleOpen = () => {
    if (desktopOnly && !isDesktopViewport()) return
    open(media)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOpen()
    }
  }

  const description = media.type === 'image' ? media.alt : (media.label ?? 'video demonstration')

  return (
    <div
      className={cn('group relative', desktopOnly ? 'sm:cursor-zoom-in' : 'cursor-zoom-in', className)}
      role="button"
      tabIndex={0}
      data-cursor="hover"
      aria-label={`View full ${media.type}: ${description}`}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute right-3 flex h-8 w-8 items-center justify-center border border-hairline bg-background/70 text-foreground backdrop-blur-sm transition-opacity duration-300',
          iconPosition === 'top-right' ? 'top-3' : 'bottom-3',
          desktopOnly
            ? 'hidden opacity-0 sm:flex sm:group-hover:opacity-100'
            : 'opacity-70 sm:opacity-0 sm:group-hover:opacity-100',
        )}
      >
        <Expand className="h-3.5 w-3.5" />
      </span>
    </div>
  )
}
