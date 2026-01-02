import { useState } from "react";
import { X } from "lucide-react";
import { GALLERY_CONTENT } from "@/data/siteContent";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import productBag from "@/assets/product-bag.jpg";
import productCushion from "@/assets/product-cushion.jpg";
import productRug from "@/assets/product-rug.jpg";
import productGift from "@/assets/product-gift.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: "Coleção de peças de crochê", category: "Lifestyle" },
  { src: productBag, alt: "Bolsa artesanal", category: "Acessórios" },
  { src: gallery2, alt: "Caminho de mesa em crochê", category: "Decoração" },
  { src: productCushion, alt: "Almofada mandala", category: "Decoração" },
  { src: gallery3, alt: "Detalhe de textura", category: "Lifestyle" },
  { src: productRug, alt: "Tapete decorativo", category: "Decoração" },
  { src: gallery4, alt: "Porta-copos artesanais", category: "Decoração" },
  { src: productGift, alt: "Kit presente", category: "Presentes" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="portfolio" className="section-alt">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-micro text-muted-foreground mb-4">
            {GALLERY_CONTENT.sectionSubtitle}
          </p>
          <h2 className="heading-section text-foreground mb-6">
            {GALLERY_CONTENT.sectionTitle}
          </h2>
          <div className="organic-line mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {GALLERY_CONTENT.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setLightboxImage(image.src)}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-foreground text-sm font-medium tracking-wide uppercase bg-primary/80 px-4 py-2">
                  Ver
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
