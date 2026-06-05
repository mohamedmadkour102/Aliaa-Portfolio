import { Button } from '../components/Button'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center lg:px-10">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border)]"
        aria-hidden
      />

      <p className="fade-in mb-6 text-xs tracking-[0.35em] text-accent uppercase">
        Visual Artist
      </p>

      <h1 className="fade-in-delay font-serif text-5xl leading-[1.05] tracking-wide text-text sm:text-6xl md:text-7xl lg:text-[5.5rem]">
        Aliaa Ellithey
      </h1>

      <p className="fade-in-delay-2 mt-6 text-sm tracking-[0.2em] text-muted uppercase sm:text-base">
        Visual Artist | B.F.A. Painting
      </p>

      <p className="fade-in-delay-2 mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg">
        Painter and digital artist based in Cairo, exploring human emotion and
        connection through oil on canvas and digital media.
      </p>

      <div className="fade-in-delay-2 mt-14 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
        <Button href="#gallery">Explore Artwork</Button>
        <Button href="#about" variant="text">
          About Me
        </Button>
      </div>

      <div
        className="pointer-events-none absolute bottom-12 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-accent/40 to-transparent"
        aria-hidden
      />
    </section>
  )
}
