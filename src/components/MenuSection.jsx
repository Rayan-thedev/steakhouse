import { useState } from 'react'
import ScrollReveal from './ScrollReveal.jsx'

function MenuItem({ item }) {
  return (
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
  )
}

export default function MenuSection({ title, items, limit = Infinity }) {
  const [open, setOpen] = useState(false)

  const visible = items.slice(0, limit)
  const extra = items.slice(limit)
  const hasMore = extra.length > 0

  return (
    <div className="mb-16 last:mb-0">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl text-gold-300 mb-8 pb-4 border-b border-white/10">
          {title}
        </h2>
      </ScrollReveal>

      <div className="space-y-7">
        {visible.map((item, i) => (
          <ScrollReveal key={item.name} delay={Math.min(i * 0.05, 0.3)}>
            <MenuItem item={item} />
          </ScrollReveal>
        ))}
      </div>

      {hasMore && (
        <>
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden">
              <div
                className={`space-y-7 pt-7 transition-opacity duration-500 ease-in-out ${
                  open ? 'opacity-100 delay-150' : 'opacity-0'
                }`}
              >
                {extra.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-9">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="text-xs md:text-sm tracking-wide text-gold-300 border border-gold-500/40 rounded-full px-6 py-2.5 hover:border-gold-300 hover:text-gold-200 hover:bg-gold-400/5 transition-all duration-300 focus-visible:outline-2"
            >
              {open ? '▲ Show Less' : `▼ View All ${items.length} ${title}`}
            </button>
          </div>
        </>
      )}
    </div>
  )
}