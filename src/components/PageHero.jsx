import ScrollReveal from './ScrollReveal.jsx'
import SearLine from './SearLine.jsx'
import Eyebrow from './Eyebrow.jsx'

export default function PageHero({ eyebrow, title, subtitle, img }) {
  return (
    <section className="relative h-[62svh] min-h-[420px] flex items-end overflow-hidden">
      <img src={img} alt="" role="presentation" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/60 to-char-950/30" />
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 pb-16">
        <ScrollReveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SearLine className="mt-3 mb-5" />
          <h1 className="font-display text-5xl md:text-7xl text-cream text-balance max-w-2xl">{title}</h1>
          {subtitle && <p className="mt-5 text-cream/70 max-w-lg leading-relaxed">{subtitle}</p>}
        </ScrollReveal>
      </div>
    </section>
  )
}
