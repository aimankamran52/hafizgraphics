import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "../data/siteInfo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col min-w-0">
              <span className="text-xl sm:text-2xl font-bold gradient-text font-display tracking-wide">
                HAFIZ GRAPHICS
              </span>
              <span className="text-[9px] sm:text-xs text-gray-500 tracking-widest uppercase hidden sm:block">
                Graphic Designing | Printing | Branding
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-brand-gold bg-brand-gold/10"
                        : "text-gray-700 hover:text-brand-gold"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-brand-gold transition-colors"
              >
                <Phone size={16} />
                <span>{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-brand-gold/90 transition-colors text-sm"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-3 -mr-2 text-gray-700 hover:text-brand-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-72 max-w-[85vw] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-bold gradient-text font-display">
              HAFIZ GRAPHICS
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gray-700 hover:text-brand-gold min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col p-4 gap-1 overflow-y-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3.5 rounded-lg text-base font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? "text-brand-gold bg-brand-gold/10"
                      : "text-gray-700 hover:text-brand-gold hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t space-y-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-gray-600 min-h-[44px]"
            >
              <Phone size={16} />
              {PHONE_NUMBER}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-brand-gold/90 transition-colors min-h-[44px] flex items-center justify-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
