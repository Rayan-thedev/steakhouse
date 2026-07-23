import { motion, AnimatePresence } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-char-950 flex flex-col items-center justify-center gap-5"
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Flame size={34} className="text-gold-400" strokeWidth={1.5} />
          </motion.div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-sm tracking-widest2 uppercase text-cream/70"
            >
              The Salty Steer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
