import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSmoothScroll } from './SmoothScrollProvider.jsx'

export default function ScrollToTop() {
  const location = useLocation()
  const smooth = useSmoothScroll()

  useEffect(() => {
    const { pathname, hash } = location

    if (hash && pathname === '/') {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) smooth?.scrollTo(element, { offset: -92 })
      return
    }

    smooth?.scrollTo(0, { immediate: true })
  }, [location, smooth])

  return null
}
