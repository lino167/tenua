import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { lazy, Suspense, useEffect } from 'react'
import LazySection from '@/components/LazySection'
const About = lazy(() => import('@/components/About'))
const Essence = lazy(() => import('@/components/Essence'))
const Products = lazy(() => import('@/components/Products'))
const Gallery = lazy(() => import('@/components/Gallery'))
const OrderProcess = lazy(() => import('@/components/OrderProcess'))
const Care = lazy(() => import('@/components/Care'))
const FAQ = lazy(() => import('@/components/FAQ'))
const Contact = lazy(() => import('@/components/Contact'))
import WhatsAppButton from '@/components/WhatsAppButton'
import { SITE_CONFIG } from '@/data/siteContent'

const Index = () => {
  // Update document metadata
  useEffect(() => {
    document.title = `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="conteudo-principal" className="pt-24 md:pt-28">
        <Hero />
        <Suspense fallback={null}>
          <LazySection>
            <About />
          </LazySection>
        </Suspense>
        <Suspense fallback={null}>
          <LazySection>
            <Essence />
          </LazySection>
        </Suspense>
        <Suspense fallback={null}>
          <LazySection>
            <Products />
          </LazySection>
        </Suspense>
        <Suspense fallback={null}>
          <LazySection>
            <Gallery />
          </LazySection>
        </Suspense>
        <Suspense fallback={null}>
          <LazySection>
            <OrderProcess />
          </LazySection>
        </Suspense>
        <Suspense fallback={null}>
          <LazySection>
            <Care />
          </LazySection>
        </Suspense>
        <Suspense fallback={null}>
          <LazySection>
            <FAQ />
          </LazySection>
        </Suspense>
        <Suspense fallback={null}>
          <LazySection>
            <Contact />
          </LazySection>
        </Suspense>
      </main>

      <WhatsAppButton />
    </div>
  )
}

export default Index
