import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'ghost' | 'text'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

const base =
  'inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-500 ease-out'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-bg hover:opacity-90 hover:shadow-[0_8px_32px_rgba(212,180,131,0.2)]',
  ghost:
    'border border-[var(--color-border)] text-text hover:border-accent/40 hover:text-accent',
  text: 'px-0 py-0 text-muted hover:text-accent underline-offset-4 hover:underline',
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href?.startsWith('#')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
