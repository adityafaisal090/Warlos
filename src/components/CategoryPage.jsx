import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSmoothScroll } from '../app/SmoothScrollProvider.jsx'
import AmbientBlurs from './AmbientBlurs.jsx'
import Navbar from './Navbar.jsx'
import Button from './ui/Button.jsx'
import Reveal from './ui/Reveal.jsx'

function GalleryTiles({ tint = 'from-mountain-700/20 via-white/5 to-warmgold-400/10' }) {
  const tiles = Array.from({ length: 6 }, (_, i) => i)
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tiles.map((i) => (
        <Reveal key={i} delay={0.03 * i}>
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl glass ring-soft"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${tint}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-warmgold-400/10 blur-3xl" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs tracking-[0.28em] text-cream-200/60">GALLERY {String(i + 1).padStart(2, '0')}</p>
              <p className="mt-2 text-sm font-medium text-cream-100/90">Food Moment</p>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  )
}

export default function CategoryPage({ data }) {
  const smooth = useSmoothScroll()

  const renderMenuEntry = (m, idx) => {
    const type = m?.type ?? 'item'

    if (type === 'section') {
      return (
        <div className="md:col-span-2">
          <div className={`${idx === 0 ? '' : 'mt-6 '}border-b border-white/10 pb-3`}>
            <p className="text-lg font-semibold tracking-tight text-cream-100">{m.title}</p>
          </div>
        </div>
      )
    }

    if (type === 'subsection') {
      return (
        <div className="md:col-span-2">
          <div className="mt-2">
            <p className="text-sm font-semibold tracking-[0.22em] text-cream-200/70">{m.title}</p>
          </div>
        </div>
      )
    }

    if (type === 'note') {
      return (
        <div className="md:col-span-2">
          <p className="mt-1 text-sm italic leading-relaxed text-cream-100/60">{m.text}</p>
        </div>
      )
    }

    return (
      <div className="group relative overflow-hidden rounded-2xl p-6 glass ring-soft shadow-glass">
        <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-mountain-700/14 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-base font-semibold text-cream-100">{m.name}</p>
            {m.desc ? <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{m.desc}</p> : null}
          </div>
          {m.price ? (
            <p className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-cream-100/85 ring-soft">
              {m.price}
            </p>
          ) : null}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="primary" className="px-4 py-2">
            Order
          </Button>
          <Button variant="ghost" className="px-4 py-2">
            Tanya Detail
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative min-h-screen overflow-x-hidden bg-gradient-to-b ${data.theme.bg}`}>
      <div className="relative noise">
        <AmbientBlurs />
        <Navbar />

        <main className="pt-24">
          <section className="relative mx-auto max-w-7xl px-4 py-14 md:px-8">
            <div className="absolute inset-0 -z-10">
              <div className={`absolute left-8 top-6 h-56 w-56 rounded-full ${data.theme.glow} blur-3xl`} />
              <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-mountain-700/16 blur-3xl" />
            </div>

            <Reveal>
              <p className={`text-xs tracking-[0.36em] ${data.theme.accent}/70`}>{data.kicker}</p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-cream-100 sm:text-5xl">
                {data.title}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-cream-100/70">
                {data.description}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    const el = document.getElementById('menu')
                    if (el) smooth?.scrollTo(el, { offset: -92 })
                  }}
                >
                  Lihat Menu
                </Button>
                <Button as={Link} to="/" variant="ghost">
                  Kembali ke Home
                </Button>
              </div>
            </Reveal>
          </section>

          <section id="menu" className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs tracking-[0.34em] text-cream-200/60">MENU</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream-100 sm:text-4xl">
                  Daftar Menu {data.title}
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {data.menu.map((m, idx) => (
                <Reveal key={`${m?.type ?? 'item'}-${m?.title ?? m?.name ?? 'entry'}-${idx}`} delay={0.05 * idx}>
                  {renderMenuEntry(m, idx)}
                </Reveal>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs tracking-[0.34em] text-cream-200/60">GALLERY</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-cream-100 sm:text-4xl">
                  Gallery {data.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cream-100/70">
                  Tempat untuk foto makanan, suasana, dan plating detail.
                </p>
              </div>
            </Reveal>

            <GalleryTiles />
          </section>

          <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-6 md:px-8">
            <Reveal>
              <div className="rounded-3xl glass ring-soft p-8 shadow-glass">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs tracking-[0.34em] text-cream-200/60">CTA</p>
                    <p className="mt-3 text-xl font-semibold tracking-tight text-cream-100">
                      Siap order atau kolaborasi?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
                      Hubungi kami untuk reservasi, event Ramadan/Festival, atau menu custom.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Contact</Button>
                    <Button variant="ghost" as={Link} to="/">Back Home</Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>
      </div>
    </div>
  )
}
