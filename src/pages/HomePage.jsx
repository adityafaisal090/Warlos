import AmbientBlurs from '../components/AmbientBlurs.jsx'
import Navbar from '../components/Navbar.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import BestMenuSection from '../components/sections/BestMenuSection.jsx'
import ContactFooterSection from '../components/sections/ContactFooterSection.jsx'
import FAQSection from '../components/sections/FAQSection.jsx'
import GallerySection from '../components/sections/GallerySection.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx'
import WorldCuisinesSection from '../components/sections/WorldCuisinesSection.jsx'
import { useSmoothScroll } from '../app/SmoothScrollProvider.jsx'

export default function HomePage() {
  const smooth = useSmoothScroll()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-forest-950">
      <div className="relative noise">
        <AmbientBlurs />
        <Navbar />

        <main>
          <HeroSection
            onExplore={() => {
              const el = document.getElementById('cuisines')
              if (el) smooth?.scrollTo(el, { offset: -92 })
            }}
            onAbout={() => {
              const el = document.getElementById('about')
              if (el) smooth?.scrollTo(el, { offset: -92 })
            }}
          />
          <AboutSection />
          <WorldCuisinesSection />
          <BestMenuSection />
          <GallerySection />
          <TestimonialsSection />
          <FAQSection />
          <ContactFooterSection />
        </main>
      </div>
    </div>
  )
}
