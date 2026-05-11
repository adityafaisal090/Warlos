import { motion } from 'framer-motion'

export default function Button({
  as: As = 'button',
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition will-change-transform focus:outline-none'

  const variants = {
    primary:
      'bg-mountain-700 text-cream-100 shadow-glow hover:shadow-glowWarm ring-soft hover:-translate-y-[1px] active:translate-y-0',
    ghost:
      'glass text-cream-100/90 hover:text-cream-100 ring-soft hover:-translate-y-[1px] active:translate-y-0',
    warm:
      'bg-warmgold-400/15 text-cream-100 ring-soft hover:bg-warmgold-400/22 hover:-translate-y-[1px] active:translate-y-0',
  }

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden rounded-full"
      >
        <span className="absolute -left-1/3 top-[-80%] h-[240%] w-1/3 rotate-12 bg-white/10 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-white/16 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
    </>
  )

  if (As === 'a') {
    return (
      <motion.a
        href={href}
        className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {content}
    </motion.button>
  )
}
