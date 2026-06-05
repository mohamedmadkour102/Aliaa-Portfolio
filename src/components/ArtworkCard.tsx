import { Link } from 'react-router-dom'
import type { Artwork } from '../types'

interface ArtworkCardProps {
  artwork: Artwork
  featured?: boolean
}

export function ArtworkCard({ artwork, featured = false }: ArtworkCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-surface shadow-[0_4px_40px_rgba(0,0,0,0.35)] ${
        featured ? 'break-inside-avoid' : ''
      }`}
    >
      <Link to={`/artwork/${artwork.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {artwork.sold && (
            <span className="absolute top-4 right-4 rounded-full border border-accent/50 bg-bg/80 px-3 py-1 text-[10px] tracking-widest text-accent uppercase backdrop-blur-sm">
              Sold
            </span>
          )}
          <div className="absolute inset-0 bg-bg/0 transition-colors duration-500 group-hover:bg-bg/55" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="rounded-full border border-accent/50 px-6 py-2.5 text-sm tracking-widest text-accent uppercase">
              View Artwork
            </span>
          </div>
        </div>
        <div className="space-y-2 p-6 lg:p-8">
          <h3 className="font-serif text-xl tracking-wide text-text lg:text-2xl">
            {artwork.title}
          </h3>
          <p className="text-sm text-muted">{artwork.medium}</p>
          <p className="text-xs tracking-widest text-accent/80 uppercase">{artwork.year}</p>
        </div>
      </Link>
    </article>
  )
}
