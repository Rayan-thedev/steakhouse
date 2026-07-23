import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import SearLine from '../components/SearLine.jsx'
import Button from '../components/Button.jsx'
import { GALLERY_IMAGES } from '../data/gallery.js'

export default function GalleryPreview() {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-10 bg-char-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <ScrollReveal>
            <Eyebrow>Inside The Salty Steer</Eyebrow>
            <SearLine className="mt-3 mb-5" />
            <h2 className="font-display text-4xl md:text-6xl text-cream max-w-xl text-balance">
              A room built for the long dinner.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Button as={Link} to="/gallery" variant="ghost">View Gallery</Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-5">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={i * 0.06}
              className={`${img.tall ? 'row-span-2' : ''} md:col-span-2 overflow-hidden rounded-xl group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full h-full object-cover ${img.tall ? 'aspect-[3/4.2]' : 'aspect-[3/2]'} transition-transform duration-700 group-hover:scale-110`}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
