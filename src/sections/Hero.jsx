import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import Button from '../components/Button.jsx'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2400&auto=format&fit=crop"
          alt=""
          role="presentation"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char-950 via-char-950/50 to-char-950/70" />
        <div className="absolute inset-0 bg-radial-glow" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xs md:text-sm tracking-widest2 uppercase text-gold-300/90 mb-6"
        >
          A Modern Steakhouse
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.95] text-cream"
        >
          Fire is the
          <br />
          <span className="italic text-gold-300">only</span> ingredient
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-7 max-w-md text-cream/70 text-base md:text-lg leading-relaxed"
        >
          Dry-aged beef, live oak, and a room built for long, unhurried dinners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button as={Link} to="/reservations">Reserve a Table</Button>
          <Button as={Link} to="/menu" variant="outline">View Menu</Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50"
        aria-hidden="true"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  )
}
