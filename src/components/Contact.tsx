import { MessageCircle, Instagram, Mail } from 'lucide-react'
import { SITE_CONFIG, FOOTER_CONTENT } from '@/data/siteContent'
import tenuaLogo from '@/assets/tenua-logo-principal.png'

const Contact = () => {
  const whatsappUrl = `https://wa.me/${
    SITE_CONFIG.whatsapp
  }?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`
  const instagramUrl = `https://instagram.com/${SITE_CONFIG.instagram}`
  const emailUrl = `mailto:${SITE_CONFIG.email}`

  return (
    <section
      id="contato"
      className="section bg-primary text-primary-foreground md:py-20 lg:py-24"
    >
      <div className="container-narrow mx-auto text-center">
        {/* Logo */}
        <img
          src={tenuaLogo}
          alt="Tenua Ateliê de Crochê"
          className="w-20 md:w-24 lg:w-24 h-auto mx-auto mb-6 brightness-0 invert"
        />

        {/* Quote */}
        <p className="quote text-primary-foreground/90 md:text-2xl lg:text-3xl mb-8">
          "{FOOTER_CONTENT.tagline}"
        </p>

        {/* CTA + Social Links */}
        <div className="mb-12 md:mb-10 md:grid md:grid-cols-2 md:items-center md:gap-8">
          <div className="mb-8 md:mb-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4
                         bg-primary-foreground text-primary
                         text-sm font-medium tracking-wide uppercase
                         transition-all duration-500 ease-out
                         hover:bg-primary-foreground/90 hover:shadow-xl
                         focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-5 text-center">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Instagram size={20} />@{SITE_CONFIG.instagram}
            </a>
            <span className="w-px h-4 bg-primary-foreground/30" />
            <a
              href={emailUrl}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail size={20} />
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-primary-foreground/30 mx-auto mb-6" />

        {/* Footer Info */}
        <div className="space-y-1">
          <p className="text-xs md:text-[13px] text-primary-foreground/70">
            {FOOTER_CONTENT.artisan.role}: {FOOTER_CONTENT.artisan.name} ·{' '}
            {FOOTER_CONTENT.artisan.city} · CEP: {FOOTER_CONTENT.artisan.cep}
          </p>
          <p className="text-xs md:text-[13px] text-primary-foreground/60">
            {FOOTER_CONTENT.copyright}
          </p>
          <p className="text-[11px] md:text-xs text-primary-foreground/40 italic">
            {FOOTER_CONTENT.madeWith}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
