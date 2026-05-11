import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const ITEMS = Array.from({ length: 8 }, (_, i) => i)

export default function GallerySection() {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Reveal>
        <SectionHeading
          kicker="GALLERY"
          title="Cahaya lembut, tekstur natural"
          subtitle="Placeholder gallery — ganti dengan foto makanan & ambience dari folder aset kamu."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((i) => (
          <Reveal key={i} delay={0.03 * i}>
            <motion.div
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass ring-soft"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mountain-700/25 via-white/5 to-warmgold-400/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,239,199,0.22),transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs tracking-[0.28em] text-cream-200/60">SHOT {String(i + 1).padStart(2, '0')}</p>
                <p className="mt-2 text-sm font-medium text-cream-100/90">Ambient Culinary</p>
              </div>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-warmgold-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
