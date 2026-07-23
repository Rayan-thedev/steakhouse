import ScrollReveal from '../components/ScrollReveal.jsx'

const STATS = [
  { value: '45', suffix: ' Days', label: 'Average dry-age on our reserve cuts' },
  { value: '900°', suffix: 'F', label: 'Peak hearth temperature, red oak fire' },
  { value: '10', suffix: ' Yrs', label: 'Serving the same block since 2016' },
  { value: '4.9', suffix: '/5', label: 'Average rating across 2,300+ reviews' },
]

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10 bg-char-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
        {STATS.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
            <p className="font-display text-4xl md:text-5xl text-gold-300">
              {s.value}<span className="text-2xl md:text-3xl text-gold-400/70">{s.suffix}</span>
            </p>
            <p className="mt-3 text-xs md:text-sm text-smoke leading-relaxed max-w-[16ch] mx-auto lg:mx-0">
              {s.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
