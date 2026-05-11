import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SiteLoader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[100] bg-forest-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute inset-0 bg-hero-radial opacity-70" />
            <div className="absolute inset-0 soft-grid animated-grid opacity-25" />

            <div className="relative flex h-full w-full items-center justify-center">
              <motion.div
                className="relative w-[min(460px,84vw)] rounded-2xl p-7 glass ring-soft shadow-glass"
                initial={{ y: 18, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-[0.28em] text-cream-200/70">WARLOS</p>
                    <p className="mt-2 text-lg font-medium text-cream-100/90">Memuat pengalaman kuliner…</p>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-mountain-700/15 ring-soft" />
                </div>

                <div className="mt-6 h-[10px] w-full overflow-hidden rounded-full bg-white/6 ring-soft">
                  <motion.div
                    className="h-full w-[45%] rounded-full bg-gradient-to-r from-mountain-600/0 via-warmgold-200/70 to-mountain-600/0"
                    initial={{ x: '-35%' }}
                    animate={{ x: '135%' }}
                    transition={{ duration: 1.1, ease: 'easeInOut', repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
