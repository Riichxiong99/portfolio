function Nav() {
  const scrollToTop = (e) => {
    e.preventDefault()
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    document.body.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav>
      <a href="#" onClick={scrollToTop}>R.X.</a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#work">Tech Stack</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav