import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY_CONTENT } from '@/data/siteContent'
import gallery1 from '@/assets/gallery-1.png'
import gallery3 from '@/assets/gallery-3.jpg'
import gallery4 from '@/assets/gallery-4.jpg'
import gallery9 from '@/assets/gallery-9.png'
import productBag from '@/assets/product-bag.jpg'
import productCushion from '@/assets/product-cushion.jpg'
import productRug from '@/assets/product-rug.jpg'
import productGift from '@/assets/product-gift.jpg'

interface GalleryImage {
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: 'Tapete decorativo de crochê', category: 'Decoração' },
  { src: productBag, alt: 'Bolsa artesanal', category: 'Acessórios' },
  { src: productCushion, alt: 'Almofada mandala', category: 'Decoração' },
  { src: gallery3, alt: 'Detalhe de textura', category: 'Lifestyle' },
  { src: productRug, alt: 'Tapete decorativo', category: 'Decoração' },
  { src: gallery4, alt: 'Porta-copos artesanais', category: 'Decoração' },
  { src: productGift, alt: 'Kit presente', category: 'Presentes' },
  { src: gallery9, alt: 'Caminho de mesa', category: 'Decoração' },
]

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [transitionDir, setTransitionDir] = useState<'next' | 'prev' | null>(
    null
  )
  const touchStartX = useRef<number | null>(null)

  const filteredImages =
    selectedCategory === 'Todas'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight')
        setLightboxIndex((idx) =>
          idx === null ? 0 : (idx + 1) % filteredImages.length
        )
      if (e.key === 'ArrowLeft')
        setLightboxIndex((idx) =>
          idx === null
            ? 0
            : (idx - 1 + filteredImages.length) % filteredImages.length
        )
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, filteredImages.length])

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
        <nav
          aria-label="Filtrar galeria por categoria"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {GALLERY_CONTENT.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-transparent text-foreground/70 hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
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
        {lightboxIndex !== null && filteredImages[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxIndex(null)}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              const startX = touchStartX.current
              const endX = e.changedTouches[0].clientX
              touchStartX.current = null
              if (startX === null) return
              const dx = endX - startX
              if (Math.abs(dx) > 50) {
                if (dx < 0) {
                  setTransitionDir('next')
                  setLightboxIndex((idx) =>
                    idx === null ? 0 : (idx + 1) % filteredImages.length
                  )
                } else {
                  setTransitionDir('prev')
                  setLightboxIndex((idx) =>
                    idx === null
                      ? 0
                      : (idx - 1 + filteredImages.length) %
                        filteredImages.length
                  )
                }
              }
            }}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors"
              onClick={() => setLightboxIndex(null)}
              aria-label="Fechar"
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 md:left-8 p-2 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setTransitionDir('prev')
                setLightboxIndex((idx) =>
                  idx === null
                    ? 0
                    : (idx - 1 + filteredImages.length) % filteredImages.length
                )
              }}
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <div
              className="max-w-full max-h-[90vh] animate-fade-in"
              onClick={(e) => e.stopPropagation()}
              key={filteredImages[lightboxIndex].src}
            >
              <div
                className={
                  transitionDir === 'next'
                    ? 'animate-slide-in-right'
                    : transitionDir === 'prev'
                    ? 'animate-slide-in-left'
                    : ''
                }
              >
                <img
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  decoding="async"
                  className="max-w-full max-h-[90vh] object-contain animate-kenburns"
                />
              </div>
            </div>
            <button
              className="absolute right-4 md:right-8 p-2 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setTransitionDir('next')
                setLightboxIndex((idx) =>
                  idx === null ? 0 : (idx + 1) % filteredImages.length
                )
              }}
              aria-label="Próxima"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
