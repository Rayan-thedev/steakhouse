import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * The Sear Mark — this site's signature element.
 * A thin gold line that draws itself across on scroll-into-view,
 * like a branding iron touching down, with a brief ember flicker at rest.
 * Used sparingly: under eyebrows and key headings only.
 */
export default function SearLine({ width = 'w-16', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <div ref={ref} className={`relative h-[2px] ${width} ${className}`}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0.3 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
        className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 animate-flicker"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 1, 0] } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -inset-y-1 right-0 w-3 rounded-full bg-gold-300 blur-[6px]"
      />
    </div>
  )
}
