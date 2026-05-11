import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const MENU = [
  { name: 'Arjuna Forest Bowl', desc: 'Nasi hangat, sayur panggang, sambal hijau lembut.', price: '38K' },
  { name: 'Sate Rempah Signature', desc: 'Aroma smoky, glaze manis-gurih, taburan kacang.', price: '42K' },
  { name: 'Emerald Dates Latte', desc: 'Kopi susu creamy, sentuhan kurma & caramel.', price: '29K' },
  { name: 'Lantern Noodle', desc: 'Mie kenyal, kuah kaldu ringan, chili oil halus.', price: '41K' },
]

export default function BestMenuSection() {
  return (
    <section id="best-menu" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Reveal>
        <SectionHeading
          kicker="BEST MENU"
          title="Pilihan terbaik yang selalu dicari"
          subtitle="Menu yang aman untuk first-time, tapi tetap punya karakter yang kuat dan visual plating premium."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {MENU.map((m, idx) => (
          <Reveal key={m.name} delay={0.06 * idx}>
            <div className="group relative overflow-hidden rounded-2xl p-6 glass ring-soft shadow-glass">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-mountain-700/18 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-base font-semibold text-cream-100">{m.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{m.desc}</p>
                </div>
                <p className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-cream-100/85 ring-soft">
                  {m.price}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
