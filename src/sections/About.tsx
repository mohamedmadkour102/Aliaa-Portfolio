import { artistStatement, education } from '../data/artworks'
import { ScrollReveal } from '../components/ScrollReveal'

export function About() {
  return (
    <section id="about" className="section-padding border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <ScrollReveal direction="left" className="lg:col-span-5 lg:pt-8">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface shadow-[0_8px_48px_rgba(0,0,0,0.4)]">
              <img
                src="/artworks/2.jpeg"
                alt="Aliaa Ellithey — Unspoken Reach"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1} className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs tracking-[0.3em] text-accent uppercase">About</p>
            <h2 className="mt-4 font-serif text-4xl tracking-wide text-text md:text-5xl lg:text-6xl">
              Aliaa Ellithey
            </h2>
            <p className="mt-3 text-sm tracking-[0.15em] text-muted uppercase">
              Visual Artist | B.F.A. Painting
            </p>

            <div className="mt-10 text-base leading-relaxed text-muted md:text-lg">
              <p>{artistStatement}</p>
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-surface/50 p-8 lg:p-10">
              <h3 className="font-serif text-2xl text-text">Education</h3>
              <p className="mt-4 font-medium text-text">{education.degree}</p>
              <p className="mt-2 leading-relaxed text-muted">{education.department}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
