import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const TESTI = [
  {
    name: 'Nadia — Surabaya',
    text: 'Vibenya elegan tapi tetap hangat. Scroll-nya halus dan tiap detailnya terasa “agency-level”.',
  },
  {
    name: 'Raka — Malang',
    text: 'Section masakan dunia memorable banget. Hover-nya cinematic dan bikin pengen klik detailnya.',
  },
  {
    name: 'Intan — Jakarta',
    text: 'Clean, premium, dan responsif. Warna hijau gunung + aksen emasnya cocok untuk brand kuliner.',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Reveal>
        <SectionHeading
          kicker="TESTIMONI"
          title="Kesan yang terasa mewah"
          subtitle="Beberapa contoh testimoni (placeholder) yang bisa kamu ganti dengan review asli."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTI.map((t, idx) => (
          <Reveal key={t.name} delay={0.06 * idx}>
            <div className="relative overflow-hidden rounded-2xl p-6 glass ring-soft shadow-glass">
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-mountain-700/18 blur-3xl" />
              <p className="text-sm leading-relaxed text-cream-100/80">“{t.text}”</p>
              <p className="mt-4 text-xs tracking-[0.24em] text-cream-200/60">{t.name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
