import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Users, CalendarDays, Clock } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import Button from '../components/Button.jsx'

const TIMES = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM']

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false)
  const [party, setParty] = useState(2)
  const [time, setTime] = useState('7:00 PM')

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Save your table."
        subtitle="Parties of 8 or more, call us directly at 605-279-2700."
        img="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="max-w-2xl mx-auto px-6 md:px-10 py-24 md:py-32">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 rounded-2xl border border-gold-500/20 bg-char-800/50"
          >
            <div className="mx-auto w-14 h-14 rounded-full bg-gold-400/15 flex items-center justify-center mb-6">
              <Check className="text-gold-400" size={26} />
            </div>
            <h2 className="font-display text-3xl text-cream mb-3">Table held.</h2>
            <p className="text-smoke max-w-sm mx-auto leading-relaxed">
              A confirmation is on its way to your inbox. We'll see you and
              your party of {party} at {time}.
            </p>
          </motion.div>
        ) : (
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="First Name" id="first" required />
                <Field label="Last Name" id="last" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Email" id="email" type="email" required />
                <Field label="Phone" id="phone" type="tel" required />
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <Label icon={CalendarDays}>Date</Label>
                  <input
                    type="date"
                    required
                    className="w-full bg-char-800 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm focus-visible:outline-2 focus-visible:outline-gold-400"
                  />
                </div>
                <div>
                  <Label icon={Clock}>Time</Label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-char-800 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm focus-visible:outline-2 focus-visible:outline-gold-400"
                  >
                    {TIMES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <Label icon={Users}>Party Size</Label>
                  <select
                    value={party}
                    onChange={(e) => setParty(Number(e.target.value))}
                    className="w-full bg-char-800 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm focus-visible:outline-2 focus-visible:outline-gold-400"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <Label>Notes (optional)</Label>
                <textarea
                  rows={3}
                  placeholder="Allergies, celebrations, seating preferences"
                  className="w-full bg-char-800 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-smoke/60 focus-visible:outline-2 focus-visible:outline-gold-400"
                />
              </div>

              <Button as="button" type="submit" className="w-full sm:w-auto justify-center">
                Confirm Reservation
              </Button>
            </form>
          </ScrollReveal>
        )}
      </section>
    </>
  )
}

function Label({ children, icon: Icon }) {
  return (
    <label className="flex items-center gap-1.5 text-xs uppercase tracking-widest2 text-gold-400 mb-2">
      {Icon && <Icon size={13} />}
      {children}
    </label>
  )
}

function Field({ label, id, type = 'text', required }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full bg-char-800 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm placeholder:text-smoke/60 focus-visible:outline-2 focus-visible:outline-gold-400"
      />
    </div>
  )
}
