import PageHero from '../components/PageHero.jsx'
import MenuSection from '../components/MenuSection.jsx'
import { MENU_SECTIONS } from '../data/menu.js'

// Per-section visible-item limits before "View All" is needed.
// Sections not listed (or set to Infinity) always show every item.
const SECTION_LIMITS = {
  'Starters': 4,
  'Steaks Fresh From The Steer': 5,
  'Steer Favorites': 4,
  'Salty Steer Burgers': 4,
  'SteerWiches': Infinity,
  'Steer Salads': 3,
  'Desserts': 3,
  'Steer Sides & Enhancements': 4,
  'Beverages': Infinity,
}

export default function Menu() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="Everything begins with fire."
        subtitle="Cuts are dry-aged in-house and priced by the day's yield — ask your server about tonight's board."
        img="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32">
        {MENU_SECTIONS.map((section) => (
          <MenuSection
            key={section.title}
            title={section.title}
            items={section.items}
            limit={SECTION_LIMITS[section.title] ?? Infinity}
          />
        ))}
      </section>
    </>
  )
}