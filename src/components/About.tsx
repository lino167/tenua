import { ABOUT_CONTENT } from '@/data/siteContent'
import aboutImage from '@/assets/about-hands.jpg'

const About = () => {
  return (
    <section id="historia" className="section">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-secondary -z-10" />
            <img
              src={aboutImage}
              alt="Mãos criando crochê artesanal"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-micro text-muted-foreground mb-4">
              {ABOUT_CONTENT.sectionSubtitle}
            </p>

            <h2 className="heading-section text-foreground mb-8">
              {ABOUT_CONTENT.sectionTitle}
            </h2>

            <div className="organic-line mb-8" />

            <div className="space-y-6 mb-12">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-body text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="relative pl-8 border-l-2 border-primary/40">
              <p className="text-xl md:text-2xl font-display italic text-foreground">
                "{ABOUT_CONTENT.quote}"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
