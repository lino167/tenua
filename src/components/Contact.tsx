import { MessageCircle, Instagram, Mail } from "lucide-react";
import { SITE_CONFIG, FOOTER_CONTENT } from "@/data/siteContent";
import tenuaSimbolo from "@/assets/tenua-simbolo.png";

const Contact = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage
  )}`;
  const instagramUrl = `https://instagram.com/${SITE_CONFIG.instagram}`;
  const emailUrl = `mailto:${SITE_CONFIG.email}`;

  return (
    <section id="contato" className="section bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto text-center">
        {/* Symbol */}
        <img
          src={tenuaSimbolo}
          alt="Tenua"
          className="w-20 h-auto mx-auto mb-8 opacity-50 invert"
        />

        {/* Quote */}
        <p className="quote text-primary-foreground/90 mb-12">
          "{FOOTER_CONTENT.tagline}"
        </p>

        {/* CTA */}
        <div className="mb-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 
                       bg-primary-foreground text-primary
                       text-sm font-medium tracking-wide uppercase
                       transition-all duration-500 ease-out
                       hover:bg-primary-foreground/90 hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <Instagram size={20} />
            @{SITE_CONFIG.instagram}
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

        {/* Divider */}
        <div className="w-24 h-px bg-primary-foreground/30 mx-auto mb-8" />

        {/* Footer Info */}
        <div className="space-y-2">
          <p className="text-sm text-primary-foreground/60">
            {FOOTER_CONTENT.copyright}
          </p>
          <p className="text-xs text-primary-foreground/40 italic">
            {FOOTER_CONTENT.madeWith}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
