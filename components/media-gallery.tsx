import { Play } from 'lucide-react'
import type { MediaItem } from '@/lib/content'
import { LazyVideo } from '@/components/lazy-video'
import { MediaFrame } from '@/components/media-frame'
import { cn } from '@/lib/utils'

const CELLS = { wide: 2, tall: 2, big: 4 } as const

const SPAN: Record<NonNullable<MediaItem['span']>, string> = {
  wide: 'sm:col-span-2',
  tall: 'row-span-2',
  big: 'sm:col-span-2 row-span-2',
}

function Tile({ item, className }: { item: MediaItem; className?: string }) {
  return (
    <figure
      className={cn(
        'edge-glow media-zoom group relative overflow-hidden rounded-[1.25rem] border border-hairline bg-surface',
        className,
      )}
    >
      <MediaFrame
        className="h-full w-full"
        media={
          item.type === 'image'
            ? { type: 'image', src: item.src, alt: item.alt, label: item.caption }
            : { type: 'video', src: item.src, poster: item.poster, label: item.caption }
        }
      >
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover"
            style={item.position ? { objectPosition: item.position } : undefined}
          />
        ) : item.autoplay === false ? (
          <>
            <img src={item.poster} alt="" loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_0_50px_-5px_var(--accent)] transition-transform group-hover:scale-110">
                <Play className="ml-1 h-6 w-6 fill-current" />
              </span>
            </span>
          </>
        ) : (
          <LazyVideo src={item.src} poster={item.poster} className="h-full w-full object-cover" />
        )}
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
          <span className="mono-label flex items-center gap-2 text-[0.58rem] text-foreground/90">
            {item.type === 'video' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}
            {item.caption}
          </span>
        </figcaption>
      </MediaFrame>
    </figure>
  )
}

export function MediaGallery({
  items,
  compact = false,
  portrait = false,
}: {
  items: MediaItem[]
  compact?: boolean
  /** Single 9:16 item, e.g. a phone-shot video. */
  portrait?: boolean
}) {
  if (portrait) {
    return (
      <div className="grid">
        <Tile item={items[0]} className="aspect-[9/16]" />
      </div>
    )
  }

  // Pick 3 or 4 desktop columns so the bento grid packs without holes.
  const cells = items.reduce((n, item) => n + (item.span ? CELLS[item.span] : 1), 0)
  const columns = compact ? 'lg:grid-cols-3' : cells % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <div
      className={cn(
        'grid grid-flow-row-dense gap-3 lg:gap-4',
        compact
          ? 'auto-rows-[110px] grid-cols-3 sm:auto-rows-[150px]'
          : 'auto-rows-[200px] grid-cols-1 min-[480px]:grid-cols-2 sm:auto-rows-[220px]',
        columns,
      )}
    >
      {items.map((item) => (
        <Tile key={item.src} item={item} className={item.span && SPAN[item.span]} />
      ))}
    </div>
  )
}
