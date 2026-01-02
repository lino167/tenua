import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Essence from "@/components/Essence";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import OrderProcess from "@/components/OrderProcess";
import Testimonials from "@/components/Testimonials";
import Care from "@/components/Care";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/siteContent";
import { useEffect } from "react";

const Index = () => {
  // Update document metadata
  useEffect(() => {
    document.title = `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Essence />
        <Products />
        <Gallery />
        <OrderProcess />
        <Testimonials />
        <Care />
        <FAQ />
        <Contact />
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
