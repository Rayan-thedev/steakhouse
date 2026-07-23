import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

export default function StickyReserveButton() {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (pathname === '/reservations') return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            to="/reservations"
            className="flex items-center gap-2 bg-gold-400 text-char-950 pl-5 pr-6 py-4 rounded-full shadow-gold font-medium text-sm hover:bg-gold-300 transition-colors"
          >
            <CalendarDays size={17} />
            Reserve
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
