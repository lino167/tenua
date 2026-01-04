import { PRODUCTS_CONTENT, SITE_CONFIG } from '@/data/siteContent'
import productBag from '@/assets/product-bag.jpg'
import productCushion from '@/assets/product-cushion.jpg'
import productRug from '@/assets/product-rug.jpg'
import productGift from '@/assets/product-gift.jpg'

const productImages: Record<string, string> = {
  'bolsa-mediterraneo': productBag,
  'almofada-mandala': productCushion,
  'tapete-sol': productRug,
  'kit-presente': productGift,
}

const Products = () => {
  const getWhatsappUrl = (product: { name: string; description: string }) => {
    const message = `Olá! Vim pelo site.\nItem: "${product.name}" — ${product.description}\nPoderiam me informar detalhes e disponibilidade?`
    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
      message
    )}`
  }
  return (
    <section id="colecoes" className="section">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-micro text-muted-foreground mb-4">
            {PRODUCTS_CONTENT.sectionSubtitle}
          </p>
          <h2 className="heading-section text-foreground mb-6">
            {PRODUCTS_CONTENT.sectionTitle}
          </h2>
          <div className="organic-line mx-auto" />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PRODUCTS_CONTENT.products
            .filter((product) => product.available !== false)
            .map((product) => (
              <div key={product.id} className="group">
                {/* Image (click opens WhatsApp) */}
                <a
                  href={getWhatsappUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar no WhatsApp sobre ${product.name}`}
                  className="relative overflow-hidden mb-6 block cursor-pointer"
                >
                  <img
                    src={productImages[product.id]}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-micro bg-background/90 px-3 py-1.5">
                    {product.category}
                  </span>
                  {product.available && (
                    <span className="absolute top-4 right-4 text-micro bg-background/90 px-3 py-1.5">
                      Disponível
                    </span>
                  )}
                </a>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="heading-card text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Products
