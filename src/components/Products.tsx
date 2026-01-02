import { MessageCircle } from "lucide-react";
import { PRODUCTS_CONTENT, SITE_CONFIG } from "@/data/siteContent";
import productBag from "@/assets/product-bag.jpg";
import productCushion from "@/assets/product-cushion.jpg";
import productRug from "@/assets/product-rug.jpg";
import productGift from "@/assets/product-gift.jpg";

const productImages: Record<string, string> = {
  "bolsa-mediterraneo": productBag,
  "almofada-mandala": productCushion,
  "tapete-sol": productRug,
  "kit-presente": productGift,
};

const Products = () => {
  const getWhatsappUrl = (productName: string) => {
    const message = `Olá! Vi o produto "${productName}" no site e gostaria de saber mais informações.`;
    return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
  };

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
          {PRODUCTS_CONTENT.products.map((product) => (
            <div key={product.id} className="group">
              {/* Image */}
              <div className="relative overflow-hidden mb-6">
                <img
                  src={productImages[product.id]}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-micro bg-background/90 px-3 py-1.5">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="heading-card text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-body text-muted-foreground">
                  {product.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {product.price}
                </p>
                <a
                  href={getWhatsappUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-foreground hover:text-primary transition-colors mt-4"
                >
                  <MessageCircle size={16} />
                  {PRODUCTS_CONTENT.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
