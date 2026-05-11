import { motion } from 'framer-motion'

export default function AmbientBlurs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-[-140px] h-[420px] w-[420px] rounded-full bg-mountain-700/30 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-140px] top-[140px] h-[520px] w-[520px] rounded-full bg-warmgold-400/10 blur-3xl"
        animate={{ y: [0, -22, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[35%] top-[55%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-forest-600/18 blur-3xl"
        animate={{ y: [0, 26, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
