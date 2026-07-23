import PageHero from '../components/PageHero.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { MENU_SECTIONS } from '../data/menu.js'

export default function Menu() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="Everything begins with fire."
        subtitle="Cuts are dry-aged in-house and priced by the day's yield — ask your server about tonight's board."
        img="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32">
        {MENU_SECTIONS.map((section, si) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl text-gold-300 mb-8 pb-4 border-b border-white/10">
                {section.title}
              </h2>
            </ScrollReveal>
            <div className="space-y-7">
              {section.items.map((item, i) => (
                <ScrollReveal key={item.name} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="flex items-baseline gap-4">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-display text-lg md:text-xl text-cream">{item.name}</h3>
                        <span className="flex-1 border-b border-dotted border-white/15 translate-y-[-4px]" aria-hidden="true" />
                        <span className="text-gold-300 font-display text-lg">{item.price}</span>
                      </div>
                      <p className="text-sm text-smoke mt-1">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
