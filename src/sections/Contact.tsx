import { useState } from 'react'
import { contactInfo } from '../data/artworks'
import { Button } from '../components/Button'
import { ScrollReveal } from '../components/ScrollReveal'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined

    try {
      if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formState),
        })

        if (!response.ok) throw new Error('Form submission failed')
      } else {
        const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name}`)
        const body = encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
        )
        window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
      }

      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="rounded-3xl border border-[var(--color-border)] bg-surface p-10 md:p-16 lg:p-20">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="text-xs tracking-[0.3em] text-accent uppercase">Contact</p>
                <h2 className="mt-4 font-serif text-4xl tracking-wide text-text md:text-5xl lg:text-6xl">
                  Let&apos;s Create Something Together
                </h2>
                <p className="mt-6 max-w-md leading-relaxed text-muted">
                  Commissions, collaborations, and inquiries are welcome — in oil on
                  canvas or digital media.
                </p>

                <ul className="mt-12 space-y-6">
                  <li>
                    <span className="text-xs tracking-widest text-muted uppercase">Phone</span>
                    <p className="mt-1 text-text">
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="transition-colors hover:text-accent"
                      >
                        {contactInfo.phone}
                      </a>
                    </p>
                  </li>
                  <li>
                    <span className="text-xs tracking-widest text-muted uppercase">Email</span>
                    <p className="mt-1 text-text">
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="transition-colors hover:text-accent"
                      >
                        {contactInfo.email}
                      </a>
                    </p>
                  </li>
                  <li>
                    <span className="text-xs tracking-widest text-muted uppercase">
                      Instagram
                    </span>
                    <p className="mt-1 text-text">
                      <a
                        href={contactInfo.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {contactInfo.instagram}
                      </a>
                    </p>
                  </li>
                  <li>
                    <span className="text-xs tracking-widest text-muted uppercase">
                      Location
                    </span>
                    <p className="mt-1 text-text">{contactInfo.location}</p>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    disabled={status === 'sending'}
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-bg px-5 py-4 text-text placeholder:text-muted/60 transition-colors duration-300 focus:border-accent/40 focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    disabled={status === 'sending'}
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-bg px-5 py-4 text-text placeholder:text-muted/60 transition-colors duration-300 focus:border-accent/40 focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    disabled={status === 'sending'}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-bg px-5 py-4 text-text placeholder:text-muted/60 transition-colors duration-300 focus:border-accent/40 focus:outline-none disabled:opacity-60"
                  />
                </div>

                {status === 'success' && (
                  <p className="text-sm text-accent">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try email or phone instead.
                  </p>
                )}

                <Button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
