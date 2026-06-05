import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const sectionIds = navLinks.map((link) => link.id)

function NavLink({
  href,
  label,
  active,
  onClick,
  className = 'text-sm tracking-wide',
}: {
  href: string
  label: string
  active: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative ${className} transition-colors duration-300 ${
        active ? 'text-accent' : 'text-muted hover:text-accent'
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ease-out ${
          active ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </a>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const activeSection = useScrollSpy(isHome ? sectionIds : [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)

      if (y < 80) {
        setNavVisible(true)
      } else if (y > lastScrollY.current + 8) {
        setNavVisible(false)
      } else if (y < lastScrollY.current - 8) {
        setNavVisible(true)
      }

      lastScrollY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-[var(--color-border)] bg-bg/90 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
      initial={false}
      animate={{ y: navVisible || menuOpen ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4 lg:px-10 lg:py-5">
        <Link
          to="/"
          className="shrink-0 font-serif text-xl tracking-wide text-text transition-all duration-300 hover:text-accent sm:text-2xl lg:hover:tracking-wider"
        >
          Aliaa Ellithey
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex">
          {isHome &&
            navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  active={activeSection === link.id}
                />
              </li>
            ))}
          {isHome && (
            <li>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-accent/30 px-4 py-1.5 text-[11px] leading-none tracking-widest text-accent uppercase transition-all duration-300 hover:border-accent/60 hover:bg-accent/10"
              >
                Commission
              </a>
            </li>
          )}
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

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
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
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && isHome && (
          <motion.div
            className="overflow-hidden border-t border-[var(--color-border)] bg-bg lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                >
                  <NavLink
                    href={link.href}
                    label={link.label}
                    active={activeSection === link.id}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-2xl tracking-wide"
                  />
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.07 }}
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center rounded-full border border-accent/30 px-5 py-2 text-[11px] leading-none tracking-widest text-accent uppercase"
                >
                  Commission
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
