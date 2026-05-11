import { createContext, useContext, useEffect, useMemo, useRef } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext(null)

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
    })

    lenisRef.current = lenis

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const api = useMemo(
    () => ({
      get lenis() {
        return lenisRef.current
      },
      scrollTo(target, options) {
        const lenis = lenisRef.current
        if (!lenis) return
        lenis.scrollTo(target, { duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 3), ...options })
      },
    }),
    [],
  )

  return <LenisContext.Provider value={api}>{children}</LenisContext.Provider>
}

export function useSmoothScroll() {
  return useContext(LenisContext)
}
