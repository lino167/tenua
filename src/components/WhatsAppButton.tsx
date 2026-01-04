import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteContent";

const WhatsAppButton = React.forwardRef<HTMLAnchorElement>((props, ref) => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    SITE_CONFIG.whatsappMessage
  )}`;

  return (
    <a
      ref={ref}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 
                 bg-primary text-primary-foreground rounded-full shadow-lg
                 transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Falar no WhatsApp"
      {...props}
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
});

WhatsAppButton.displayName = 'WhatsAppButton';

export default WhatsAppButton;
