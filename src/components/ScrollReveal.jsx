import { motion } from 'framer-motion'

export default function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  once = true,
  as = 'div',
}) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-12% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}
