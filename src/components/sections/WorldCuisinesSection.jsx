import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import chineseImg from '../../assets/food/chinese.svg'
import nusantaraImg from '../../assets/food/nusantara.svg'
import middleEastImg from '../../assets/food/timur-tengah.svg'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

function WaveDivider({ className = '' }) {
  return (
    <div className={`relative hidden w-[72px] md:block ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 72 720"
        className="absolute inset-0 h-full w-full opacity-50"
      >
        <defs>
          <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0)" />
            <stop offset="0.12" stopColor="rgba(255,239,199,0.36)" />
            <stop offset="0.55" stopColor="rgba(58,95,67,0.55)" />
            <stop offset="0.88" stopColor="rgba(255,201,106,0.30)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M36 0C22 54 50 96 36 150C22 204 50 246 36 300C22 354 50 396 36 450C22 504 50 546 36 600C22 654 50 696 36 720"
          fill="none"
          stroke="url(#wg)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="12 14"
          initial={{ strokeDashoffset: 0 }}
          whileInView={{ strokeDashoffset: 52 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}

function useCardParallax() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10])
  const glowX = useTransform(mx, [-0.5, 0.5], ['20%', '80%'])
  const glowY = useTransform(my, [-0.5, 0.5], ['20%', '80%'])

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px - 0.5)
    my.set(py - 0.5)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return { ref, rotateX, rotateY, glowX, glowY, onMove, onLeave }
}

function Particles({ count = 16, tint = 'bg-warmgold-200/35' }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const t = (i * 73) % 100
        const l = (i * 41) % 100
        const s = 6 + ((i * 7) % 10)
        const d = 0.25 + ((i % 7) * 0.08)
        return { id: i, top: `${t}%`, left: `${l}%`, size: s, delay: d }
      }),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute rounded-full blur-[1px] ${tint}`}
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          initial={{ opacity: 0, y: 8 }}
          variants={{
            rest: { opacity: 0, y: 8 },
            hover: {
              opacity: 1,
              y: -10,
              transition: { duration: 1.1, delay: p.delay, ease: 'easeOut' },
            },
          }}
        />
      ))}
    </div>
  )
}

function NusantaraOrnaments() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute left-6 top-6 h-16 w-16 rounded-2xl bg-[#5c1d24]/30 ring-soft"
        variants={{ rest: { opacity: 0.85 }, hover: { opacity: 1 } }}
      />
      <motion.div
        className="pointer-events-none absolute right-6 bottom-7 h-20 w-20 rounded-full bg-warmgold-400/10 blur-2xl"
        variants={{ rest: { opacity: 0.35 }, hover: { opacity: 0.8 } }}
      />
      <motion.svg
        className="pointer-events-none absolute -right-3 top-14 h-24 w-24 opacity-40"
        viewBox="0 0 120 120"
        variants={{ rest: { opacity: 0.16, y: 0 }, hover: { opacity: 0.45, y: -4 } }}
      >
        <path
          d="M60 6c14 18 20 28 20 40 0 12-6 22-20 34-14-12-20-22-20-34 0-12 6-22 20-40z"
          fill="rgba(255,224,154,0.45)"
        />
        <path
          d="M20 92c14-14 26-20 40-20s26 6 40 20c-14 14-26 20-40 20s-26-6-40-20z"
          fill="rgba(244,155,26,0.22)"
        />
      </motion.svg>

      <motion.svg
        className="pointer-events-none absolute left-7 bottom-10 h-28 w-28 opacity-0"
        viewBox="0 0 160 160"
        variants={{ rest: { opacity: 0, x: -6 }, hover: { opacity: 0.38, x: 0 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <path
          d="M108 24c-16 10-22 20-22 32 0 10 4 18 14 28-12 6-20 14-20 26 0 16 12 28 30 28 18 0 32-14 32-34 0-34-20-62-34-80z"
          fill="rgba(255,255,255,0.16)"
        />
        <path
          d="M56 46c-12 12-18 22-18 34 0 12 6 22 20 34-16 8-24 18-24 30 0 18 14 30 34 30"
          stroke="rgba(255,239,199,0.34)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </motion.svg>
    </>
  )
}

function MiddleEastOrnaments() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute left-6 top-6 h-14 w-14 rounded-2xl bg-mountain-700/18 ring-soft"
        variants={{ rest: { opacity: 0.75 }, hover: { opacity: 1 } }}
      />

      <motion.svg
        className="pointer-events-none absolute right-6 top-7 h-24 w-24"
        viewBox="0 0 120 120"
        variants={{ rest: { opacity: 0.12 }, hover: { opacity: 0.36 } }}
      >
        <path
          d="M60 16l16 12 20 0-12 16 8 20-20-8-20 8 8-20-12-16 20 0 12-12z"
          fill="rgba(255,224,154,0.65)"
        />
      </motion.svg>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-10 h-24 w-20 -translate-x-1/2 rounded-2xl bg-warmgold-200/10 ring-soft"
        variants={{ rest: { opacity: 0, y: -14 }, hover: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="mx-auto mt-4 h-10 w-10 rounded-full bg-warmgold-300/20"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.svg
        className="pointer-events-none absolute left-10 bottom-10 h-20 w-20"
        viewBox="0 0 120 120"
        variants={{ rest: { opacity: 0.0, y: 8 }, hover: { opacity: 0.3, y: 0 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <path
          d="M80 22c-22 4-36 22-36 42 0 20 14 38 36 42-10-12-16-26-16-42 0-16 6-30 16-42z"
          fill="rgba(255,239,199,0.5)"
        />
      </motion.svg>
    </>
  )
}

function ChineseOrnaments() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute left-6 top-6 h-14 w-14 rounded-2xl bg-[#7a1119]/22 ring-soft"
        variants={{ rest: { opacity: 0.75 }, hover: { opacity: 1 } }}
      />

      <motion.div
        className="pointer-events-none absolute right-6 top-8 h-28 w-24 rounded-2xl bg-[#ff3b3b]/10 ring-soft"
        variants={{ rest: { opacity: 0, y: -10 }, hover: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto mt-3 h-7 w-7 rounded-full bg-warmgold-300/25" />
        <div className="mx-auto mt-2 h-7 w-7 rounded-full bg-warmgold-300/18" />
      </motion.div>

      <motion.svg
        className="pointer-events-none absolute left-10 bottom-10 h-24 w-24"
        viewBox="0 0 120 120"
        variants={{ rest: { opacity: 0.15 }, hover: { opacity: 0.4 } }}
      >
        <path
          d="M60 12c16 18 22 30 22 42 0 14-10 26-22 36-12-10-22-22-22-36 0-12 6-24 22-42z"
          fill="rgba(255,201,106,0.35)"
        />
        <path
          d="M42 92h36c0 10-8 18-18 18s-18-8-18-18z"
          fill="rgba(255,239,199,0.22)"
        />
      </motion.svg>
    </>
  )
}

function CuisineCard({
  title,
  subtitle,
  route,
  image,
  theme,
  renderOrnaments,
  renderHoverLayer,
  particleTint,
}) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const { ref, rotateX, rotateY, glowX, glowY, onMove, onLeave } = useCardParallax()

  return (
    <motion.div
      ref={ref}
      className={`relative flex-1 overflow-hidden rounded-[28px] p-6 shadow-glass ring-soft ${theme}`}
      style={{ perspective: '1200px' }}
      initial="rest"
      animate={hovered ? 'hover' : 'rest'}
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        onLeave()
        setHovered(false)
      }}
      onMouseEnter={() => setHovered(true)}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(420px 320px at var(--gx) var(--gy), rgba(255,255,255,0.18), rgba(0,0,0,0) 70%)',
          '--gx': glowX,
          '--gy': glowY,
        }}
        variants={{ rest: { opacity: 0.2 }, hover: { opacity: 0.55 } }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-soft-grid bg-[length:52px_52px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/40" />
      </div>

      {renderHoverLayer ? renderHoverLayer() : null}
      {renderOrnaments ? renderOrnaments() : null}

      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
      >
        <Particles count={18} tint={particleTint} />
      </motion.div>

      <motion.div
        className="relative flex h-full flex-col justify-between"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      >
        <div>
          <p className="text-xs tracking-[0.34em] text-cream-200/60">KATEGORI</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-cream-100">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
            {subtitle}
          </p>
        </div>

        <div className="mt-6 rounded-2xl glass ring-soft p-4 shadow-glass">
          <div className="overflow-hidden rounded-xl ring-soft">
            <motion.img
              src={image}
              alt={title}
              className="h-[180px] w-full object-cover"
              variants={{ rest: { filter: 'brightness(0.95) contrast(1)' }, hover: { filter: 'brightness(1.08) contrast(1.05)' } }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-cream-100/90">{title}</p>
            <Button
              variant="ghost"
              className="px-4 py-2"
              onClick={() => navigate(route)}
            >
              Eksplorasi
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NusantaraHoverLayer() {
  const curtain =
    "absolute top-0 h-full w-1/2 bg-gradient-to-b from-[#5c1d24]/70 via-[#2a1613]/70 to-black/65"

  const batikSvg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M60 8c14 0 26 12 26 26s-12 26-26 26-26-12-26-26S46 8 60 8Zm0 52c14 0 26 12 26 26s-12 26-26 26-26-12-26-26 12-26 26-26Z' fill='rgba(255,239,199,0.14)'/%3E%3C/svg%3E"

  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={{ rest: { opacity: 0.9 }, hover: { opacity: 1 } }}
      >
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `url(${batikSvg})`,
            backgroundSize: '120px 120px',
          }}
        />
      </motion.div>

      <motion.div
        className={`${curtain} left-0`}
        variants={{ rest: { x: 0 }, hover: { x: '-105%' } }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={`${curtain} right-0`}
        variants={{ rest: { x: 0 }, hover: { x: '105%' } }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={{ rest: { opacity: 0.0 }, hover: { opacity: 1 } }}
      >
        <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-warmgold-400/10 blur-3xl" />
      </motion.div>
    </>
  )
}

function MiddleEastHoverLayer() {
  const islamicPattern =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cpath d='M80 14l26 18 32 0-18 26 12 32-32-12-32 12 12-32-18-26 32 0 26-18Z' fill='rgba(255,224,154,0.13)'/%3E%3C/svg%3E"

  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={{ rest: { opacity: 0.4 }, hover: { opacity: 0.85 } }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${islamicPattern})`,
            backgroundSize: '160px 160px',
            backgroundPosition: '0 0',
          }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ['0px 0px', '160px 160px'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `url(${islamicPattern})`,
            backgroundSize: '160px 160px',
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={{ rest: { opacity: 0.0 }, hover: { opacity: 1 } }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-warmgold-400/10 via-transparent to-black/30" />
      </motion.div>
    </>
  )
}

function ChineseHoverLayer() {
  const orientalPattern =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cpath d='M70 18c14 18 20 30 20 42 0 14-10 26-20 36-10-10-20-22-20-36 0-12 6-24 20-42Z' fill='rgba(255,201,106,0.12)'/%3E%3C/svg%3E"

  return (
    <>
      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={{ rest: { opacity: 0.26 }, hover: { opacity: 0.6 } }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${orientalPattern})`,
            backgroundSize: '140px 140px',
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0"
        variants={{ rest: { opacity: 0.0 }, hover: { opacity: 1 } }}
      >
        <div className="absolute left-1/2 top-12 h-48 w-48 -translate-x-1/2 rounded-full bg-[#ff3b3b]/10 blur-3xl" />
      </motion.div>
    </>
  )
}

export default function WorldCuisinesSection() {
  return (
    <section id="cuisines" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8">
      <Reveal>
        <SectionHeading
          kicker="HIGHLIGHT UTAMA"
          title="3 Masakan Khas Dunia"
          subtitle="Tiga pengalaman budaya dalam satu scroll — tiap kartu hidup dengan tirai, ornamen, cahaya, dan partikel yang terasa cinematic."
        />
      </Reveal>

      <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-0">
        <Reveal className="md:flex-1" delay={0.02}>
          <CuisineCard
            title="Nusantara"
            subtitle="Wayang, tirai pembuka, batik halus — maroon, emas hangat, dan kayu Jawa."
            route="/nusantara"
            image={nusantaraImg}
            theme="bg-gradient-to-b from-[#2a1613]/85 via-[#101a13]/70 to-[#101a13]/85"
            renderOrnaments={() => <NusantaraOrnaments />}
            renderHoverLayer={() => <NusantaraHoverLayer />}
            particleTint="bg-warmgold-200/35"
          />
        </Reveal>

        <WaveDivider />

        <Reveal className="md:flex-1" delay={0.06}>
          <CuisineCard
            title="Timur Tengah"
            subtitle="Ornamen islami, lentera Ramadan, cahaya emas lembut — emerald & gold."
            route="/timur-tengah"
            image={middleEastImg}
            theme="bg-gradient-to-b from-forest-800/75 via-forest-950/70 to-forest-950"
            renderOrnaments={() => <MiddleEastOrnaments />}
            renderHoverLayer={() => <MiddleEastHoverLayer />}
            particleTint="bg-cream-200/35"
          />
        </Reveal>

        <WaveDivider />

        <Reveal className="md:flex-1" delay={0.1}>
          <CuisineCard
            title="Chinese Food"
            subtitle="Festival lampion, street food malam hari — merah oriental & glow hangat."
            route="/chinese-food"
            image={chineseImg}
            theme="bg-gradient-to-b from-[#2a0e12]/85 via-[#101a13]/65 to-forest-950"
            renderOrnaments={() => <ChineseOrnaments />}
            renderHoverLayer={() => <ChineseHoverLayer />}
            particleTint="bg-warmgold-200/30"
          />
        </Reveal>
      </div>

      <p className="mt-10 text-center text-sm text-cream-100/60">
        Tip: arahkan kursor untuk parallax ringan — hover untuk interaksi budaya.
      </p>
    </section>
  )
}
