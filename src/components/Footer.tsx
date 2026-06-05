import { useLocation, useNavigate } from 'react-router-dom'
import { contactInfo } from '../data/artworks'

const footerNav = [
  { label: 'About', href: '/#about' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleBackToTop = () => {
    if (location.pathname !== '/') {
      navigate('/')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[var(--color-border)] bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-serif text-3xl tracking-wide text-text">Aliaa Ellithey</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Visual artist — oil on canvas and digital media. Cairo, Egypt.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-8">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-6">
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              Instagram
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              Email
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-sm text-muted transition-colors duration-300 hover:text-accent"
            >
              Phone
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Aliaa Ellithey. All rights reserved.
          </p>
          <button
            type="button"
            onClick={handleBackToTop}
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
