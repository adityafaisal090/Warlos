import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSmoothScroll } from '../app/SmoothScrollProvider.jsx'
import Button from './ui/Button.jsx'

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'cuisines', label: 'Masakan Dunia' },
  { id: 'best-menu', label: 'Best Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Testimoni' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const smooth = useSmoothScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  const items = useMemo(() => {
    if (isHome) return NAV_ITEMS
    return [{ id: 'top', label: 'Kembali', to: '/' }]
  }, [isHome])

  const scrollToId = (id) => {
    if (id === 'top') {
      smooth?.scrollTo(0)
      return
    }

    const el = document.getElementById(id)
    if (isHome && el) {
      smooth?.scrollTo(el, { offset: -92 })
      return
    }

    navigate(`/#${id}`)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition md:px-8 ${
          scrolled ? 'glass-strong shadow-glass' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-mountain-700/18 ring-soft">
            <span className="h-2.5 w-2.5 rounded-full bg-warmgold-300" />
          </span>
          <div className="text-left">
            <p className="text-xs tracking-[0.32em] text-cream-200/60">COMPANY</p>
            <p className="-mt-0.5 text-sm font-semibold tracking-tight text-cream-100">WARLOS</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => (it.to ? navigate(it.to) : scrollToId(it.id))}
              className="text-sm text-cream-100/70 transition hover:text-cream-100"
            >
              {it.label}
            </button>
          ))}
          <Button
            variant="ghost"
            className="px-4 py-2"
            onClick={() => (isHome ? scrollToId('contact') : navigate('/#contact'))}
          >
            Konsultasi
          </Button>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl glass ring-soft md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          <span className="relative block h-[2px] w-5 bg-cream-100/80">
            <span className="absolute -top-2 left-0 h-[2px] w-5 bg-cream-100/80" />
            <span className="absolute top-2 left-0 h-[2px] w-5 bg-cream-100/80" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-4 mt-2 rounded-2xl glass-strong p-3 ring-soft"
              initial={{ y: -10, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-1">
                {NAV_ITEMS.map((it) => (
                  <button
                    key={it.id}
                    onClick={() => scrollToId(it.id)}
                    className="rounded-xl px-3 py-3 text-left text-sm text-cream-100/80 transition hover:bg-white/5 hover:text-cream-100"
                  >
                    {it.label}
                  </button>
                ))}
                <div className="pt-1">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => scrollToId('contact')}
                  >
                    Konsultasi
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
