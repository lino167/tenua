import { MessageCircle } from "lucide-react";
import { ORDER_CONTENT, SITE_CONFIG } from "@/data/siteContent";

const OrderProcess = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage
  )}`;

  return (
    <section id="encomendar" className="section">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-micro text-muted-foreground mb-4">
            {ORDER_CONTENT.sectionSubtitle}
          </p>
          <h2 className="heading-section text-foreground mb-6">
            {ORDER_CONTENT.sectionTitle}
          </h2>
          <div className="organic-line mx-auto mb-8" />
          <p className="text-lead max-w-2xl mx-auto">
            {ORDER_CONTENT.description}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {ORDER_CONTENT.steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Vertical line */}
              {index < ORDER_CONTENT.steps.length - 1 && (
                <div className="absolute left-6 top-14 w-px h-full bg-border" />
              )}

              {/* Number */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-primary text-primary font-display text-lg">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="heading-card text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-sm italic text-muted-foreground mb-8">
            {ORDER_CONTENT.note}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={18} />
            Iniciar Pedido no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
