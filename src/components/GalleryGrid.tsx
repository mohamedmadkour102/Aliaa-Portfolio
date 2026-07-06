import { AnimatePresence, motion } from 'framer-motion'
import type { Artwork } from '../types'
import { ArtworkCard } from './ArtworkCard'

interface GalleryGridProps {
  artworkGroups: Artwork[][]
}

export function GalleryGrid({ artworkGroups }: GalleryGridProps) {
  if (artworkGroups.length === 0) {
    return (
      <p className="py-20 text-center text-muted">
        No artworks in this category yet.
      </p>
    )
  }

  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
      <AnimatePresence mode="popLayout">
        {artworkGroups.map((group, groupIndex) => (
          <motion.div
            key={group.map((artwork) => artwork.id).join('-')}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.4,
              delay: Math.min(groupIndex * 0.05, 0.3),
            }}
            className={`mb-6 break-inside-avoid lg:mb-8 ${groupIndex % 3 === 1 ? 'lg:mt-12' : ''}`}
          >
            {group.map((artwork, indexInGroup) => (
                <div
                  key={artwork.id}
                  className={indexInGroup > 0 ? 'mt-6 lg:mt-8' : undefined}
                >
                  <ArtworkCard artwork={artwork} featured />
                </div>
              ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
