import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import SearLine from '../components/SearLine.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import { SIGNATURE_DISHES } from '../data/menu.js'

export default function SignatureDishes() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 bg-char-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <ScrollReveal>
            <Eyebrow>Signature Dishes</Eyebrow>
            <SearLine className="mt-3 mb-5" />
            <h2 className="font-display text-4xl md:text-6xl text-cream max-w-xl text-balance">
              Four plates worth the drive.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Button as={Link} to="/menu" variant="ghost">Full Menu</Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_DISHES.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 0.08}>
              <div className="group relative rounded-2xl overflow-hidden bg-char-800 border border-white/5 h-full flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-char-950/90 via-char-950/10 to-transparent" />
                  <span className="absolute top-4 right-4 text-gold-300 font-display text-lg">{dish.price}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-cream mb-1.5">{dish.name}</h3>
                  <p className="text-sm text-smoke leading-relaxed">{dish.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
