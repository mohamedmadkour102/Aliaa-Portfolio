import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ScrollReveal } from '../components/ScrollReveal'

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
      <ScrollReveal>
        <p className="text-xs tracking-[0.3em] text-accent uppercase">404</p>
        <h1 className="mt-4 font-serif text-5xl tracking-wide text-text md:text-6xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/">Back to Home</Button>
          <Link
            to="/#gallery"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            View Gallery
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
