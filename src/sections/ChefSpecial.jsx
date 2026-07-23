import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import SearLine from '../components/SearLine.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button from '../components/Button.jsx'
import { Clock } from 'lucide-react'

export default function ChefSpecial() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 bg-char-900 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-gold-500/10 blur-[120px]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative">
        <ScrollReveal className="relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1200&auto=format&fit=crop"
              alt="Chef's special: charred bone marrow with smoked butter"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="hidden md:flex absolute -bottom-8 -right-6 lg:right-auto lg:-left-6 bg-char-800/90 backdrop-blur-md border border-white/10 rounded-xl px-6 py-5 items-center gap-4 animate-floaty"
            aria-hidden="true"
          >
            <Clock size={20} className="text-gold-400" />
            <div>
              <p className="text-xs text-smoke">Aged for</p>
              <p className="font-display text-xl text-cream">45 Days</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="order-1 lg:order-2">
          <Eyebrow>Chef&rsquo;s Special — This Week</Eyebrow>
          <SearLine className="mt-3 mb-5" />
          <h2 className="font-display text-4xl md:text-6xl text-cream mb-6 text-balance">
            Smoked Bone Marrow, <span className="italic text-gold-300">Chef Idris&rsquo;</span> way
          </h2>
          <p className="text-cream/70 leading-relaxed mb-8 max-w-lg">
            Split marrow bones, roasted slow over The Salty Steer, finished tableside with brown butter
            and a shaving of aged parmesan. Available Tuesday through Sunday, while the fire lasts.
          </p>
          <Button as={Link} to="/menu">See This Week&rsquo;s Menu</Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
