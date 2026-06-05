import { Link, useParams, Navigate } from 'react-router-dom'
import { artworks } from '../data/artworks'
import { ArtworkCard } from '../components/ArtworkCard'
import { Button } from '../components/Button'

export function ArtworkDetail() {
  const { id } = useParams<{ id: string }>()
  const artwork = artworks.find((a) => a.id === id)

  if (!artwork) {
    return <Navigate to="/" replace />
  }

  const index = artworks.findIndex((a) => a.id === id)
  const prev = artworks[index - 1]
  const next = artworks[index + 1]
  const related = artworks.filter((a) => a.id !== id && a.category === artwork.category).slice(0, 3)

  return (
    <article className="pb-24 pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Link
          to="/#gallery"
          className="inline-flex text-sm text-muted transition-colors duration-300 hover:text-accent"
        >
          ← Back to Gallery
        </Link>

        <div className="relative mt-10 overflow-hidden rounded-2xl bg-surface shadow-[0_12px_64px_rgba(0,0,0,0.45)]">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="max-h-[75vh] w-full object-contain"
          />
          {artwork.sold && (
            <span className="absolute top-6 right-6 rounded-full border border-accent/50 bg-bg/80 px-5 py-2 text-xs tracking-widest text-accent uppercase backdrop-blur-sm">
              Sold
            </span>
          )}
        </div>

        <header className="mt-16 max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-accent uppercase">{artwork.category}</p>
          <h1 className="mt-4 font-serif text-5xl tracking-wide text-text md:text-6xl lg:text-7xl">
            {artwork.title}
          </h1>
          <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">Medium</dt>
              <dd className="mt-1 text-text">{artwork.medium}</dd>
            </div>
            {artwork.dimensions && (
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Dimensions</dt>
                <dd className="mt-1 text-text">{artwork.dimensions}</dd>
              </div>
            )}
            <div>
              <dt className="text-xs tracking-widest text-muted uppercase">Year</dt>
              <dd className="mt-1 text-text">{artwork.year}</dd>
            </div>
            {artwork.sold && (
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Status</dt>
                <dd className="mt-1 text-accent">Sold</dd>
              </div>
            )}
            {artwork.exhibitedAt && (
              <div>
                <dt className="text-xs tracking-widest text-muted uppercase">Exhibited</dt>
                <dd className="mt-1 text-text">{artwork.exhibitedAt}</dd>
              </div>
            )}
          </dl>
        </header>

        <nav className="mt-20 flex flex-col gap-6 border-t border-[var(--color-border)] pt-12 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              to={`/artwork/${prev.id}`}
              className="group text-muted transition-colors hover:text-accent"
            >
              <span className="text-xs tracking-widest uppercase">Previous</span>
              <p className="mt-2 font-serif text-xl text-text transition-colors group-hover:text-accent">
                {prev.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/artwork/${next.id}`}
              className="group text-right text-muted transition-colors hover:text-accent sm:ml-auto"
            >
              <span className="text-xs tracking-widest uppercase">Next</span>
              <p className="mt-2 font-serif text-xl text-text transition-colors group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-3xl text-text">Related Artwork</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArtworkCard key={item.id} artwork={item} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 text-center">
          <Button href="/#contact">Commission a Piece</Button>
        </div>
      </div>
    </article>
  )
}
