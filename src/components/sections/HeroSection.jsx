import { motion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function HeroSection({ onExplore, onAbout }) {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/20 via-forest-950/70 to-forest-950" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 md:px-8">
        <Reveal>
          <p className="text-xs tracking-[0.36em] text-cream-200/60">GUNUNG ARJUNA • NATURAL CULINARY BRAND</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-cream-100 sm:text-5xl md:text-6xl">
            Company Profile Kuliner
            <span className="text-cream-100/70"> bernuansa alam Indonesia</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-cream-100/70 md:text-lg">
            Visual premium modern dengan warna hijau gunung, lighting lembut, dan interaksi cinematic.
            Jelajahi 3 masakan khas dunia yang dibuat memorable.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button onClick={onExplore}>Eksplor Masakan Dunia</Button>
            <Button variant="ghost" onClick={onAbout}>
              Tentang Kami
            </Button>
          </div>
        </Reveal>

        <motion.div
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full glass px-5 py-3 text-xs tracking-[0.28em] text-cream-200/60 ring-soft md:flex"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-warmgold-300/80" />
          SCROLL
        </motion.div>
      </div>
    </section>
  )
}
