import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeAbout from './components/About'
import FeatureCards from './components/FeatureCards'
import AboutPage from './Pages/About'
import Connect from './Pages/Connect'
import Event from './Pages/Event'
import Give from './Pages/Give'
import Leadpastor from './components/Leadpastor'
import Footer from './components/Footer'

const PageRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className='page-enter'>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HomeAbout />
              <FeatureCards />
              <Leadpastor />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/events" element={<Event />} />
        <Route path="/give" element={<Give />} />
      </Routes>
    </div>
  )
}

const App = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <PageRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
