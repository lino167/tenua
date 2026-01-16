import { createPortal } from "react-dom";
import { X } from "lucide-react";

type Link = { href: string; label: string };

export default function MobileMenuOverlay({
  open,
  links,
  onNavigate,
  onClose,
}: {
  open: boolean;
  links: Link[];
  onNavigate: (href: string) => void;
  onClose: () => void;
}) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <div
      className={`fixed inset-0 z-[1000] transition-all duration-500 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      <button
        className="absolute top-6 right-6 p-2 rounded-full text-foreground"
        aria-label="Fechar menu"
        onClick={onClose}
      >
        <X size={28} />
      </button>
      <div className="flex flex-col items-center justify-center h-full">
        <ul className="flex flex-col items-center gap-8">
          {links.map((link, index) => (
            <li
              key={link.href}
              className={`transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  onNavigate(link.href);
                }}
                className="text-2xl font-display text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
}

