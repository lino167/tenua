import { Quote } from "lucide-react";
import { TESTIMONIALS_CONTENT } from "@/data/siteContent";

const Testimonials = () => {
  return (
    <section className="section-alt">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-micro text-muted-foreground mb-4">
            {TESTIMONIALS_CONTENT.sectionSubtitle}
          </p>
          <h2 className="heading-section text-foreground mb-6">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <div className="organic-line mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_CONTENT.testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className="card-minimal relative"
            >
              {/* Quote Icon */}
              <Quote
                size={32}
                className="text-secondary mb-4"
              />

              {/* Text */}
              <p className="text-body text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
