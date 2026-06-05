import { useState, useMemo } from 'react'
import { artworks, categories } from '../data/artworks'
import type { ArtworkCategory } from '../types'
import { CategoryTabs } from '../components/CategoryTabs'
import { GalleryGrid } from '../components/GalleryGrid'
import { ScrollReveal } from '../components/ScrollReveal'

export function FeaturedGallery() {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory | 'All'>('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return artworks
    return artworks.filter((a) => a.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="gallery" className="section-padding bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.3em] text-accent uppercase">Collection</p>
          <h2 className="mt-4 font-serif text-4xl tracking-wide text-text md:text-5xl lg:text-6xl">
            Selected Works
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            A curated selection of paintings and digital works — exploring emotion,
            connection, and the spaces between.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-14">
          <CategoryTabs
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </ScrollReveal>

        <div className="mt-16 lg:mt-20">
          <GalleryGrid artworks={filtered} />
        </div>
      </div>
    </section>
  )
}
