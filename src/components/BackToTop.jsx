import { useEffect, useState } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const about = document.getElementById('about')
      if (!about) return
      const pastHero = about.getBoundingClientRect().top <= 48
      const footer = document.querySelector('footer')
      const footerInView =
        footer && footer.getBoundingClientRect().top < window.innerHeight
      setVisible(pastHero && !footerInView)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.body.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.body.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#"
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={scrollToTop}
    >
      Back to top
    </a>
  )
}

export default BackToTop
