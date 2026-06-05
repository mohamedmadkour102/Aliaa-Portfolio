import { contactInfo } from '../data/artworks'

interface ShareButtonsProps {
  title: string
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const text = `${title} — Aliaa Ellithey`

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      alert('Link copied to clipboard.')
    } catch {
      alert('Could not copy link.')
    }
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <span className="text-xs tracking-widest text-muted uppercase">Share</span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent/30 hover:text-accent"
      >
        WhatsApp
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent/30 hover:text-accent"
      >
        Facebook
      </a>
      <a
        href={contactInfo.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent/30 hover:text-accent"
      >
        Instagram
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent/30 hover:text-accent"
      >
        Copy link
      </button>
    </div>
  )
}
