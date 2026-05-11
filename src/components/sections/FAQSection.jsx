import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const FAQ = [
  {
    q: 'Apakah bisa ganti foto makanan sendiri?',
    a: 'Bisa. Struktur sudah siap — cukup taruh gambar di folder public dan ganti src di komponen terkait.',
  },
  {
    q: 'Apakah animasi berat di mobile?',
    a: 'Animasi dibuat halus dan dipilih yang aman untuk mobile. Hover detail hanya aktif di device yang punya pointer.',
  },
  {
    q: 'Bagaimana menambah menu baru di halaman detail?',
    a: 'Data menu ada di file data (array) — tinggal tambah item dan UI otomatis ter-update.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative mx-auto max-w-5xl px-4 py-24 md:px-8">
      <Reveal>
        <SectionHeading
          kicker="FAQ"
          title="Pertanyaan yang sering muncul"
          subtitle="Jawaban ringkas supaya user nyaman dan cepat paham."
        />
      </Reveal>

      <div className="mt-12 grid gap-3">
        {FAQ.map((f, idx) => {
          const active = open === idx
          return (
            <Reveal key={f.q} delay={0.05 * idx}>
              <button
                className="w-full rounded-2xl glass ring-soft p-5 text-left shadow-glass"
                onClick={() => setOpen((v) => (v === idx ? -1 : idx))}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-cream-100">{f.q}</p>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-soft text-cream-100/70">
                    {active ? '–' : '+'}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.div
                      key="a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm leading-relaxed text-cream-100/70">{f.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </button>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
