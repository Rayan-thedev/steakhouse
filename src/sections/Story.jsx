import ScrollReveal from '../components/ScrollReveal.jsx'
import SearLine from '../components/SearLine.jsx'
import Eyebrow from '../components/Eyebrow.jsx'

export default function Story() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 bg-char-950">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <Eyebrow align="center">Our Story</Eyebrow>
          <SearLine width="w-24" className="mx-auto mt-3 mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.2] text-cream text-balance">
            Since opening our doors in{' '}
            <span className="italic text-gold-300">Wall, South Dakota</span> in
            2023, The Salty Steer has been dedicated to serving exceptional food,
            warm hospitality, and an atmosphere that brings people together.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-cream/60 max-w-xl mx-auto leading-relaxed">
            From premium steaks and handcrafted burgers to fresh seafood, house-made
            pasta, local craft beer, and unforgettable desserts, every dish is
            carefully selected and prepared with quality in mind. Whether you're a
            local regular or just passing through the Black Hills, we're here to
            make every visit one worth remembering.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}