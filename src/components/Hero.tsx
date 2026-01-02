import { MessageCircle } from "lucide-react";
import { HERO_CONTENT, SITE_CONFIG } from "@/data/siteContent";
import tenuaSimbolo from "@/assets/tenua-simbolo.png";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Hero = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage
  )}`;
  const instagramUrl = `https://instagram.com/${SITE_CONFIG.instagram}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      {/* Decorative symbol */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none hidden lg:block">
        <img
          src={tenuaSimbolo}
          alt=""
          className="w-[600px] h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="container-wide mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-micro text-muted-foreground mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "100ms" }}>
                {HERO_CONTENT.subtitle}
              </p>

              <h1 className="heading-hero text-foreground mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "200ms" }}>
                {HERO_CONTENT.title}
              </h1>

              <p className="text-xl md:text-2xl font-display italic text-primary mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "300ms" }}>
                {HERO_CONTENT.tagline}
              </p>

              <div className="organic-line mx-auto lg:mx-0 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "400ms" }} />

              <p className="text-lead max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "500ms" }}>
                {HERO_CONTENT.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0" style={{ animationDelay: "600ms" }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={18} />
                  {HERO_CONTENT.ctaPrimary}
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {HERO_CONTENT.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 animate-fade-in opacity-0" style={{ animationDelay: "400ms" }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/30 -z-10" />
                <img
                  src={heroImage}
                  alt="Manta de crochê artesanal em poltrona"
                  className="w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>
    </section>
  );
};

export default Hero;
