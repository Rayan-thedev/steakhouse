import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import SearLine from '../components/SearLine.jsx'
import { TESTIMONIALS } from '../data/testimonials.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length)
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const t = TESTIMONIALS[i]

  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 bg-char-950">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <Eyebrow align="center">What Guests Say</Eyebrow>
          <SearLine width="w-24" className="mx-auto mt-3 mb-10" />
        </ScrollReveal>

        <Quote className="mx-auto text-gold-500/40 mb-6" size={36} aria-hidden="true" />

        <div className="min-h-[180px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl md:text-3xl text-cream leading-snug text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm text-gold-300">{t.name}</p>
              <p className="text-xs text-smoke">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2.5 rounded-full border border-white/10 text-cream/70 hover:text-gold-300 hover:border-gold-400/50 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonial selector">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                role="tab"
                aria-selected={idx === i}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === i ? 'w-6 bg-gold-400' : 'w-1.5 bg-white/15'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2.5 rounded-full border border-white/10 text-cream/70 hover:text-gold-300 hover:border-gold-400/50 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
