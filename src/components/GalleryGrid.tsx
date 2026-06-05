import type { Artwork } from '../types'
import { ArtworkCard } from './ArtworkCard'

interface GalleryGridProps {
  artworks: Artwork[]
}

export function GalleryGrid({ artworks }: GalleryGridProps) {
  if (artworks.length === 0) {
    return (
      <p className="py-20 text-center text-muted">
        No artworks in this category yet.
      </p>
    )
  }

  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
      {artworks.map((artwork, i) => (
        <div
          key={artwork.id}
          className={`mb-6 lg:mb-8 ${i % 3 === 1 ? 'lg:mt-12' : ''}`}
        >
          <ArtworkCard artwork={artwork} featured />
        </div>
      ))}
    </div>
  )
}
