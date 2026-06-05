const steps = [
  {
    title: 'Observation',
    description:
      'Every piece begins with watching — figures, hands, landscapes — not as subjects to copy, but as emotional territory to understand.',
  },
  {
    title: 'Layering Emotion',
    description:
      'Through color, brushwork, and concept, I build layers that hold tension, vulnerability, longing, and quiet strength.',
  },
  {
    title: 'Making the Unspoken Visible',
    description:
      'The finished work invites the viewer into the moments between people and within a single person — internal states made visible.',
  },
]

export function Process() {
  return (
    <section id="process" className="section-padding border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.3em] text-accent uppercase">Approach</p>
          <h2 className="mt-4 font-serif text-4xl tracking-wide text-text md:text-5xl">
            How I Work
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            A practice rooted in human connection — whether in oil on canvas or digital media.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-[var(--color-border)] bg-surface/40 p-8 lg:p-10"
            >
              <span className="font-serif text-5xl text-accent/30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-text md:text-3xl">{step.title}</h3>
              <p className="mt-6 leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
