interface SectionMarkerProps {
  index: string
  label: string
  className?: string
}

export function SectionMarker({ index, label, className = '' }: SectionMarkerProps) {
  return (
    <div className={`flex min-w-0 items-center gap-3 sm:gap-4 ${className}`}>
      <span className="mono-label shrink-0 text-steel">{index}</span>
      <span className="mono-label min-w-0 text-accent">{label}</span>
      <span aria-hidden className="h-px min-w-4 flex-1 bg-hairline sm:max-w-28" />
    </div>
  )
}
