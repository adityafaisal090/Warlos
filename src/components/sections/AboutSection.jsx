import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-20 md:px-8">
      <Reveal>
        <SectionHeading
          kicker="ABOUT US"
          title="Kuliner yang terasa hangat, elegan, dan dekat dengan alam"
          subtitle="Identitas visual terinspirasi Gunung Arjuna dan suasana pepohonan Indonesia — hijau tua, sage, cream, dan aksen emas hangat."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            t: 'Cinematic Craft',
            d: 'Setiap section punya ritme, transisi halus, dan micro-interaction yang terasa “premium”.',
          },
          {
            t: 'Clean, Tidak Penuh',
            d: 'Spacing modern, hierarchy jelas, dan elemen visual yang immersive tanpa terlihat ramai.',
          },
          {
            t: 'Responsive First',
            d: 'Nyaman di mobile maupun desktop, tetap terasa mewah dan ringan saat dipakai.',
          },
        ].map((c, idx) => (
          <Reveal key={c.t} delay={0.06 * idx}>
            <div className="relative overflow-hidden rounded-2xl p-6 glass ring-soft shadow-glass">
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-mountain-700/22 blur-2xl" />
              <p className="text-sm font-semibold text-cream-100">{c.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/70">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
