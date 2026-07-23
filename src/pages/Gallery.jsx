import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { GALLERY_IMAGES } from '../data/gallery.js'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The room, the fire, the plate."
        img="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="columns-2 md:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
          {[ ...GALLERY_IMAGES].map((img, i) => (
            <ScrollReveal key={i} delay={(i % 6) * 0.06} className="mb-4 md:mb-5 break-inside-avoid">
              <button
                onClick={() => setActive(img)}
                className="block w-full rounded-xl overflow-hidden group focus-visible:outline-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] bg-char-950/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close image"
              className="absolute top-6 right-6 text-cream/70 hover:text-gold-300 p-2"
            >
              <X size={26} />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={active.src}
              alt={active.alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
