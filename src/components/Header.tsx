import { useState, useEffect } from 'react'
import tenuaSymbol from '@/assets/tenua-simbolo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (_href: string) => {}

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-wide mx-auto px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="relative z-50"
          >
            <img
              src={tenuaSymbol}
              alt="Tenua símbolo"
              className="h-14 md:h-16 w-auto transition-opacity duration-300 hover:opacity-80"
            />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
