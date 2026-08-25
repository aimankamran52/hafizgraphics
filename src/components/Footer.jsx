import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
  EMAIL,
  ADDRESS,
  socialLinks,
} from "../data/siteInfo";

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-lg font-bold gradient-text font-display">
                HAFIZ GRAPHICS
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
              Professional graphic designing, printing and branding solutions across Pakistan.
            </p>
            <div className="flex gap-2 mt-5">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              )}
              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Phone size={14} className="text-gray-500" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <MessageCircle size={14} className="text-gray-500" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={14} className="text-gray-500" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin size={14} className="text-gray-500 shrink-0" />
                {ADDRESS}
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Business Hours</h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400">Mon - Sat</li>
              <li className="text-sm text-white font-medium">9:00 AM - 7:00 PM</li>
              <li className="text-sm text-gray-400 pt-2">Sunday</li>
              <li className="text-sm text-white font-medium">Closed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hafiz Graphics. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Graphic Designing, Printing & Branding
          </p>
        </div>
      </div>
    </footer>
  );
}
