<<<<<<< HEAD
# Embers — Modern Steakhouse

Dark-luxury restaurant site built with React 18, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Structure

```
src/
  components/   Reusable UI atoms (Button, Navbar, Footer, SearLine, ScrollReveal, ...)
  sections/     Homepage sections (Hero, SignatureDishes, ChefSpecial, Story, Stats, ...)
  pages/        Routed pages (Home, Menu, About, Gallery, Reservations, Contact)
  data/         Content: menu.js, testimonials.js, gallery.js — edit these to change copy
```

## Design system

- **Palette**: near-black char (#0A0908 → #332B21), brass gold (#C6A15B / #E4C078), muted ember red, cream text.
- **Type**: Playfair Display (display/headings) + Inter (body/UI).
- **Signature element — "The Sear Mark"**: a thin gold line (`SearLine.jsx`) that draws itself
  across on scroll, like a branding iron touching down, used under eyebrows and key headings only.
- Respects `prefers-reduced-motion`, visible keyboard focus rings throughout, mobile-first breakpoints.

## Notes

- Photography is pulled from Unsplash via hotlinked URLs — swap the `src` values in
  `src/data/*.js` and section files for your own licensed photography before shipping.
- Reservation and contact forms are UI-complete but not wired to a backend — hook up
  your API/email service of choice in `Reservations.jsx` / `Contact.jsx`.
=======
# steakhouse-
>>>>>>> 6158818e4347050564439939f0b0844b132e1929
