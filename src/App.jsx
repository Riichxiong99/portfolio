import { useEffect } from 'react'

import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Work from './sections/Work'

import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Nav from './components/Nav'


function App() {

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      const fadeZone = vh * 0.6
      document.querySelectorAll('.fade-section').forEach((el) => {
        if (!el.firstElementChild || !el.lastElementChild) return
        const contentTop = el.firstElementChild.getBoundingClientRect().top
        const contentBottom = el.lastElementChild.getBoundingClientRect().bottom
        const contentHeight = contentBottom - contentTop
        let opacity = 1
        if (contentTop > vh - fadeZone) {
          opacity = (vh - contentTop) / fadeZone
        } else if (contentTop < 0) {
          const fadeOutDist = Math.min(contentHeight, fadeZone)
          opacity = contentBottom / fadeOutDist
        }
        const t = Math.max(0, Math.min(1, opacity))
        el.style.opacity = t
        el.style.transform = `translateY(${(1 - t) * 40}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.body.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.body.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Work />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  )

}

export default App
