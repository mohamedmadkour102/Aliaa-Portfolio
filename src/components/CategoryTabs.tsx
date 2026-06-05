import type { ArtworkCategory } from '../types'

interface CategoryTabsProps {
  categories: ArtworkCategory[]
  active: ArtworkCategory | 'All'
  onChange: (category: ArtworkCategory | 'All') => void
}

export function CategoryTabs({ categories, active, onChange }: CategoryTabsProps) {
  const all: (ArtworkCategory | 'All')[] = ['All', ...categories]

  return (
    <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
      {all.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`rounded-full px-5 py-2.5 text-sm tracking-wide transition-all duration-500 ${
            active === cat
              ? 'bg-accent/15 text-accent border border-accent/30'
              : 'border border-[var(--color-border)] text-muted hover:border-accent/25 hover:text-text'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
