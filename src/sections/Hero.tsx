import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../components/Button'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const floatingOrbs = [
  { size: 6, top: '18%', left: '12%', duration: 14, x: [0, 18, -8, 0], y: [0, -22, 12, 0] },
  { size: 4, top: '72%', left: '18%', duration: 11, x: [0, -14, 10, 0], y: [0, 16, -10, 0] },
  { size: 5, top: '24%', left: '82%', duration: 13, x: [0, -20, 8, 0], y: [0, 14, -18, 0] },
  { size: 3, top: '68%', left: '78%', duration: 10, x: [0, 12, -16, 0], y: [0, -12, 8, 0] },
]

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const motionOff = prefersReducedMotion ?? false

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-36 text-center sm:pb-40 lg:px-10">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-3xl"
        aria-hidden
        animate={motionOff ? undefined : { x: ['-4%', '4%', '-4%'], y: ['-2%', '3%', '-2%'], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Rings */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        aria-hidden
        animate={
          motionOff ? undefined : { scale: [1, 1.06, 1], opacity: [0.35, 0.55, 0.35] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-border)]"
        aria-hidden
        animate={motionOff ? undefined : { scale: [1, 1.04, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/5"
        aria-hidden
        animate={motionOff ? undefined : { scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating dots */}
      {!motionOff &&
        floatingOrbs.map((orb, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute rounded-full bg-accent/40"
            style={{ top: orb.top, left: orb.left, width: orb.size, height: orb.size }}
            aria-hidden
            animate={{ x: orb.x, y: orb.y, opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
        <motion.p
          className="mb-6 text-xs tracking-[0.35em] text-accent uppercase"
          {...(motionOff ? {} : fadeUp(0.1))}
        >
          Visual Artist
        </motion.p>

        <motion.h1
          className="font-serif text-5xl leading-tight tracking-wide text-text sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          {...(motionOff ? {} : fadeUp(0.25))}
        >
          <span className="block">Aliaa</span>
          <span className="mt-1 block text-accent/90 sm:mt-2">Ellithey</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-sm tracking-[0.2em] text-muted uppercase sm:text-base"
          {...(motionOff ? {} : fadeUp(0.45))}
        >
          Visual Artist | B.F.A. Painting
        </motion.p>

        <motion.p
          className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          {...(motionOff ? {} : fadeUp(0.6))}
        >
          Painter and digital artist based in Cairo, exploring human emotion and
          connection through oil on canvas and digital media.
        </motion.p>

        <motion.div
          className="mt-14 mb-4 flex flex-col items-center gap-6 sm:mb-0 sm:flex-row sm:gap-8"
          {...(motionOff ? {} : fadeUp(0.75))}
        >
          <Button href="#gallery">Explore Artwork</Button>
          <Button href="#about" variant="text">
            About Me
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        aria-label="Scroll to about section"
        initial={motionOff ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span
          className="block h-10 w-px bg-gradient-to-b from-accent/60 to-transparent"
          aria-hidden
          animate={motionOff ? undefined : { y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>
    </section>
  )
}
