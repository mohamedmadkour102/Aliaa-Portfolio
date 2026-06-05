import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-sm border-b border-[var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link
          to="/"
          className="font-serif text-2xl tracking-wide text-text transition-colors duration-300 hover:text-accent"
        >
          Aliaa Ellithey
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {isHome &&
            navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-wide text-muted transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          {!isHome && (
            <li>
              <Link
                to="/#gallery"
                className="text-sm tracking-wide text-muted transition-colors duration-300 hover:text-accent"
              >
                Gallery
              </Link>
            </li>
          )}
        </ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-px w-6 bg-text transition-transform duration-300 ${menuOpen ? 'translate-y-[5px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-text transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-text transition-transform duration-300 ${menuOpen ? '-translate-y-[5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {menuOpen && isHome && (
        <div className="border-t border-[var(--color-border)] bg-bg px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-serif text-2xl text-text transition-colors hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
