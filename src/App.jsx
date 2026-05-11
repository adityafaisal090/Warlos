import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SmoothScrollProvider } from './app/SmoothScrollProvider.jsx'
import ScrollToTop from './app/ScrollToTop.jsx'
import SiteLoader from './components/SiteLoader.jsx'
import NusantaraPage from './pages/NusantaraPage.jsx'
import ChineseFoodPage from './pages/ChineseFoodPage.jsx'
import HomePage from './pages/HomePage.jsx'
import TimurTengahPage from './pages/TimurTengahPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <ScrollToTop />
        <SiteLoader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nusantara" element={<NusantaraPage />} />
          <Route path="/timur-tengah" element={<TimurTengahPage />} />
          <Route path="/chinese-food" element={<ChineseFoodPage />} />
        </Routes>
      </SmoothScrollProvider>
    </BrowserRouter>
  )
}
