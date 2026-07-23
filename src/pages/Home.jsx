import Hero from '../sections/Hero.jsx'
import SignatureDishes from '../sections/SignatureDishes.jsx'
import ChefSpecial from '../sections/ChefSpecial.jsx'
import Story from '../sections/Story.jsx'
import Stats from '../sections/Stats.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import GalleryPreview from '../sections/GalleryPreview.jsx'
import ReservationCTA from '../sections/ReservationCTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <ChefSpecial />
      <Story />
      <Stats />
      <Testimonials />
      <GalleryPreview />
      <ReservationCTA />
    </>
  )
}
