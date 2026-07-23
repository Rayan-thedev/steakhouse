import { Link } from "react-router-dom";
import { Flame, Instagram, Facebook } from "lucide-react";
import SearLine from "./SearLine.jsx";

export default function Footer() {
  return (
    <footer className="relative bg-char-900 border-t border-white/5 pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <Flame size={22} className="text-gold-400" strokeWidth={1.75} />
              <span className="font-display text-2xl text-cream">
                The Salty Steer
              </span>
            </Link>
            <p className="text-smoke max-w-sm leading-relaxed text-sm">
              Dry-aged beef, live fire, and a room built for long dinners. Open
              six nights a week in the heart of the city.
            </p>
            <SearLine className="mt-6" />
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-gold-400 mb-5">
              Visit
            </h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>600 Main Street</li>
              <li>Wall, SD 57790</li>
              <li>Monday - Sunday:
11:00am - 10:00pm</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest2 text-gold-400 mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-cream/70 mb-6">
              <li>605-279-2700</li>
              <li>host@TheSaltySteer.rest</li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/60 hover:text-gold-300 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/60 hover:text-gold-300 transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-smoke">
          <p>
            © {new Date().getFullYear()} The Salty Steer Steakhouse. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
