import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "../data/siteInfo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/about", label: "About" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-[60px] lg:h-[68px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <span className="text-[17px] font-bold gradient-text font-display tracking-[0.04em]">
                HAFIZ GRAPHICS
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[13px] font-medium transition-all duration-200 rounded-lg ${
                      isActive
                        ? "text-brand-gold bg-brand-gold/[0.04]"
                        : "text-gray-500 hover:text-gray-900"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-[12.5px] text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Phone size={12} strokeWidth={2} />
                <span className="font-medium">{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-brand-dark text-white text-[13px] font-semibold rounded-full hover:bg-brand-darker transition-all duration-200"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2 text-gray-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[60] transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Panel */}
      <div
        className={`fixed inset-y-0 left-0 w-[280px] max-w-[82vw] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-5 h-[60px] border-b border-gray-100/80">
            <span className="text-[15px] font-bold gradient-text font-display">
              HAFIZ GRAPHICS
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gray-400 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col py-3 px-3 gap-0 overflow-y-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-[13px] font-medium transition-all duration-200 min-h-[44px] flex items-center ${
                    isActive
                      ? "text-brand-gold bg-brand-gold/[0.04]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="px-5 py-5 border-t border-gray-100/80 space-y-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[13px] text-gray-500 min-h-[44px]"
            >
              <Phone size={13} />
              {PHONE_NUMBER}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 bg-brand-dark text-white font-semibold rounded-full text-[13px] min-h-[44px] flex items-center justify-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
