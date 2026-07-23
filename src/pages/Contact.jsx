import PageHero from '../components/PageHero.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const DETAILS = [
  { icon: MapPin, label: 'Address', value: '600 Main Street ,Wall, SD 57790' },
  { icon: Phone, label: 'Phone', value: '605-279-2700' },
  { icon: Mail, label: 'Email', value: 'host@The Salty Steer.rest' },
  { icon: Clock, label: 'Hours', value: 'Tue–Sun, 5:00 PM – 12:00 AM' },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come find the fire."
        img="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 grid lg:grid-cols-2 gap-16">
        <ScrollReveal>
          <div className="space-y-8">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
                  <d.icon size={18} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-gold-400 mb-1">{d.label}</p>
                  <p className="text-cream/80">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest2 text-gold-400 mb-2">Name</label>
              <input className="w-full bg-char-800 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm focus-visible:outline-2 focus-visible:outline-gold-400" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest2 text-gold-400 mb-2">Email</label>
              <input type="email" className="w-full bg-char-800 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm focus-visible:outline-2 focus-visible:outline-gold-400" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest2 text-gold-400 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-char-800 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm focus-visible:outline-2 focus-visible:outline-gold-400" />
            </div>
            <button
              type="submit"
              className="bg-gold-400 text-char-950 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gold-300 transition-colors focus-visible:outline-2"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </section>
    </>
  )
}
