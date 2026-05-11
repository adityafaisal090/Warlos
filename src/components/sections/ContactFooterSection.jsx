import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useSmoothScroll } from '../../app/SmoothScrollProvider.jsx'

export default function ContactFooterSection() {
  const smooth = useSmoothScroll()

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-radial opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-forest-950/75 to-forest-950" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <Reveal>
            <div className="rounded-3xl glass ring-soft p-7 shadow-glass">
              <p className="text-xs tracking-[0.34em] text-cream-200/60">CONTACT</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-cream-100">
                Siap kolaborasi untuk brand kuliner premium
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/70">
                Hubungi kami untuk pemesanan, event, atau kerja sama. Desain tetap clean, tetapi terasa “high-end”.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4 ring-soft">
                  <p className="text-xs tracking-[0.26em] text-cream-200/55">EMAIL</p>
                  <p className="mt-2 text-sm font-medium text-cream-100/85">hello@warlos.id</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 ring-soft">
                  <p className="text-xs tracking-[0.26em] text-cream-200/55">WHATSAPP</p>
                  <p className="mt-2 text-sm font-medium text-cream-100/85">+62 812-0000-0000</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button as="a" href="#" variant="primary">Order / Contact</Button>
                <Button as="a" href="#" variant="ghost">Lihat Lokasi</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl glass ring-soft p-7 shadow-glass">
              <p className="text-xs tracking-[0.34em] text-cream-200/60">FOOTER</p>
              <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
                © {new Date().getFullYear()} WARLOS. Crafted with modern interaction.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-cream-100/75">
                <button
                  className="rounded-xl px-3 py-2 text-left transition hover:bg-white/5"
                  onClick={() => {
                    const el = document.getElementById('hero')
                    if (el) smooth?.scrollTo(el, { offset: -92 })
                  }}
                >
                  Home
                </button>
                <button
                  className="rounded-xl px-3 py-2 text-left transition hover:bg-white/5"
                  onClick={() => {
                    const el = document.getElementById('cuisines')
                    if (el) smooth?.scrollTo(el, { offset: -92 })
                  }}
                >
                  3 Masakan Khas Dunia
                </button>
                <button
                  className="rounded-xl px-3 py-2 text-left transition hover:bg-white/5"
                  onClick={() => {
                    const el = document.getElementById('gallery')
                    if (el) smooth?.scrollTo(el, { offset: -92 })
                  }}
                >
                  Gallery
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
