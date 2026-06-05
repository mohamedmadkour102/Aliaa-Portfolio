import { AnimatePresence, motion } from 'framer-motion'
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
      <AnimatePresence mode="popLayout">
        {artworks.map((artwork, i) => (
          <motion.div
            key={artwork.id}
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
            className={`mb-6 break-inside-avoid lg:mb-8 ${i % 3 === 1 ? 'lg:mt-12' : ''}`}
          >
            <ArtworkCard artwork={artwork} featured />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
