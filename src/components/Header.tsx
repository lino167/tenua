import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import tenuaSymbol from '@/assets/tenua-simbolo.png'
import MobileMenuOverlay from '@/components/MobileMenuOverlay'

const navLinks = [
  { href: '#historia', label: 'História' },
  { href: '#colecoes', label: 'Coleções' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#encomendar', label: 'Encomendar' },
  { href: '#contato', label: 'Contato' },
]
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm py-3 md:py-4 border-b border-border/50'
            : 'bg-transparent py-4 md:py-6'
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
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="nav-link px-3 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-primary/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 md:hidden p-2 text-foreground"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>
      <MobileMenuOverlay
        open={isMobileMenuOpen}
        links={navLinks}
        onNavigate={handleNavClick}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default Header
