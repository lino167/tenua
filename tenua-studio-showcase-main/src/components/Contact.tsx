import React from 'react'
import { Instagram, Mail } from 'lucide-react'
import { SITE_CONFIG, FOOTER_CONTENT } from '@/data/siteContent'
import tenuaLogo from '@/assets/tenua-logo-principal.png'

const Contact = React.forwardRef<HTMLElement>((props, ref) => {
  const whatsappUrl = `https://wa.me/${
    SITE_CONFIG.whatsapp
  }?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`
  const instagramUrl = `https://instagram.com/${SITE_CONFIG.instagram}`
  const emailUrl = `mailto:${SITE_CONFIG.email}`

  return (
    <section
      id="contato"
      ref={ref}
      className="section bg-primary text-primary-foreground md:py-20 lg:py-24 pb-28 md:pb-24"
      {...props}
    >
      <div className="container-narrow mx-auto text-center">
        {/* Logo */}
        <img
          src={tenuaLogo}
          alt="Tenua Ateliê de Crochê"
          className="w-20 md:w-24 lg:w-24 h-auto mx-auto mb-6 brightness-0 invert"
        />

        {/* Quote */}
        <p className="quote text-primary-foreground md:text-2xl lg:text-3xl mb-8">
          "{FOOTER_CONTENT.tagline}"
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 mb-12 md:mb-10">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary-foreground/90 hover:text-primary-foreground transition-colors break-words focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-full"
          >
            <Instagram size={20} aria-hidden="true" />
            <span>@{SITE_CONFIG.instagram}</span>
          </a>
          <span className="w-px h-4 bg-primary-foreground/40" aria-hidden="true" />
          <a
            href={emailUrl}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary-foreground/90 hover:text-primary-foreground transition-colors break-words focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-full"
          >
            <Mail size={20} aria-hidden="true" />
            <span>{SITE_CONFIG.email}</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-primary-foreground/30 mx-auto mb-6" />

        {/* Footer Info - WCAG AAA contrast: min 4.5:1 */}
        <div className="space-y-1">
          <p className="text-xs md:text-[13px] text-primary-foreground/90">
            {FOOTER_CONTENT.artisan.role}: {FOOTER_CONTENT.artisan.name} ·{' '}
            {FOOTER_CONTENT.artisan.city} · CEP: {FOOTER_CONTENT.artisan.cep}
          </p>
          <p className="text-xs md:text-[13px] text-primary-foreground/80">
            {FOOTER_CONTENT.copyright}
          </p>
          <p className="text-[11px] md:text-xs text-primary-foreground/70 italic">
            {FOOTER_CONTENT.madeWith}
          </p>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'

export default Contact
