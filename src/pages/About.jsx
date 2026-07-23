import PageHero from '../components/PageHero.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import SearLine from '../components/SearLine.jsx'
import { Flame, Award, Users } from 'lucide-react'

const VALUES = [
  { icon: Flame, title: 'Live Fire, Always', desc: 'Every cut meets red oak flame — no gas, no shortcuts, no exceptions.' },
  { icon: Award, title: 'Aged In-House', desc: 'Our on-site dry-age room holds beef for 30 to 60 days before it sees the fire.' },
  { icon: Users, title: 'A Room for Guests', desc: 'Sixty-four seats, no rush — the kitchen paces itself to the table, not the clock.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About The Salty Steer"
        title="Ten years, one fire."
        subtitle="A steakhouse built around a single hearth and the belief that beef needs very little help."
        img="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <ScrollReveal>
          <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed text-balance">
            The Salty Steer opened in 2016 in a converted ironworks, chosen for one
            reason: the ceiling was tall enough for a proper hearth. A decade
            later, the same red oak fire still anchors the kitchen, tended
            nightly by a brigade that argues, seriously, about the correct
            internal temperature for rest.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-8 text-cream/60 leading-relaxed max-w-2xl">
            We dry-age every primal on-site, source from three ranches we've
            worked with since year one, and finish nothing under a broiler.
            If it didn't touch the fire, it doesn't leave the kitchen.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-char-900 py-24 md:py-32 px-6 md:px-10 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <Eyebrow align="center">What We Hold To</Eyebrow>
            <SearLine width="w-24" className="mx-auto mt-3 mb-16" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl border border-white/5 bg-char-800/50 h-full">
                  <v.icon className="mx-auto text-gold-400 mb-5" size={28} strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-cream mb-3">{v.title}</h3>
                  <p className="text-sm text-smoke leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
