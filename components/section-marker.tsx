interface SectionMarkerProps {
  index: string
  label: string
  className?: string
}

export function SectionMarker({ index, label, className = '' }: SectionMarkerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="mono-label text-steel">{index}</span>
      <span className="mono-label text-accent">{label}</span>
      <span aria-hidden className="h-px w-16 bg-hairline sm:w-28" />
    </div>
  )
}
