import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import Button from "./Button.jsx";

const LINKS = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-char-950/80 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          aria-label="The Salty Steer — home"
        >
          <img
            src="/images/salty-steer-logo.webp"
            alt="The Salty Steer"
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors duration-300 ${
                  isActive ? "text-gold-300" : "text-cream/75 hover:text-cream"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            as={Link}
            to="/reservations"
            variant="outline"
            icon={false}
            className="!py-2.5 !px-6 text-xs"
          >
            Reserve a Table
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-cream p-2 -mr-2"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-char-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-between items-center px-6 py-6">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Flame size={20} className="text-gold-400" />
                <span className="font-display text-xl text-cream">
                  The Salty Steer
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-cream p-2"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-start gap-2 px-6 mt-8">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="w-full"
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-3xl font-display border-b border-white/10 text-cream/90"
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
