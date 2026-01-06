import { MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { HERO_CONTENT, SITE_CONFIG } from '@/data/siteContent'
import heroImage from '@/assets/hero-lifestyle.jpg'

const Hero = () => {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const whatsappUrl = `https://wa.me/${
    SITE_CONFIG.whatsapp
  }?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`
  const instagramUrl = `https://instagram.com/${SITE_CONFIG.instagram}`

  useEffect(() => {
    imgRef.current?.setAttribute('fetchpriority', 'high')
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden">
      {/* Imagem de fundo fullscreen */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Manta de crochê artesanal em poltrona"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover will-change-transform animate-kenburns"
          ref={imgRef}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/97 to-background/40 md:from-background md:via-background/94 md:to-background/25 backdrop-blur-[3px]" />
      </div>

      {/* Conteúdo centralizado à esquerda */}
      <div className="relative z-10 w-full">
        <div className="container-wide mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <p
              className="text-small text-foreground/80 tracking-widest mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '100ms' }}
            >
              {HERO_CONTENT.subtitle}
            </p>

            <h1
              className="heading-hero lg:text-8xl xl:text-9xl text-foreground mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: '200ms' }}
            >
              {HERO_CONTENT.title}
            </h1>

            <p
              className="text-2xl md:text-3xl font-display italic text-foreground md:text-primary mb-8 animate-fade-in-up opacity-0"
              style={{ animationDelay: '300ms' }}
            >
              {HERO_CONTENT.tagline}
            </p>

            <div
              className="organic-line mb-8 animate-fade-in opacity-0"
              style={{ animationDelay: '400ms' }}
            />

            <p
              className="text-lead text-foreground/90 max-w-xl mb-10 animate-fade-in-up opacity-0"
              style={{ animationDelay: '500ms' }}
            >
              {HERO_CONTENT.description}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: '600ms' }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover:scale-[1.03]"
              >
                <MessageCircle size={18} />
                {HERO_CONTENT.ctaPrimary}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover:scale-[1.03]"
              >
                {HERO_CONTENT.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>
    </section>
  )
}

export default Hero
