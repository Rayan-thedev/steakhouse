import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import Button from '../components/Button.jsx'

export default function ReservationCTA() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000&auto=format&fit=crop"
          alt=""
          role="presentation"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-char-950/85" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-cream mb-6 text-balance">
            Tables are limited. <span className="italic text-gold-300">Fire doesn&rsquo;t wait.</span>
          </h2>
          <p className="text-cream/70 mb-10 max-w-lg mx-auto leading-relaxed">
            Reserve tonight or plan ahead — our dining room seats 64 and books
            out fast on weekends.
          </p>
          <Button as={Link} to="/reservations">Reserve a Table</Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
