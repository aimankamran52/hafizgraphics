import { Link } from "react-router-dom";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGE,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  socialLinks,
} from "../data/siteInfo";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Contact() {
  return (
    <main>
      {/* ========== HERO BANNER ========== */}
      <section className="relative bg-brand-dark py-16 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-3">
            Contact Us
          </h1>
          <p className="text-brand-gold text-lg mb-4">Let's Work Together</p>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-200">Contact</span>
          </nav>
        </div>
      </section>

      {/* ========== CONTACT INFO ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Contact us for a quotation or to discuss your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-light p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 font-display mb-6">
                Get in Touch
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Address</p>
                    <p className="text-sm text-gray-500">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Phone</p>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="text-sm text-gray-500 hover:text-brand-gold transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-brand-gold transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-gray-500 hover:text-brand-gold transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Working Hours</p>
                    <p className="text-sm text-gray-500">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-light p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 font-display mb-6">
                Follow Us
              </h3>
              <div className="space-y-4">
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-brand-gold transition-colors group">
                    <InstagramIcon size={20} />
                    <span className="text-sm font-medium">Instagram</span>
                    <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-brand-gold transition-colors group">
                    <FacebookIcon size={20} />
                    <span className="text-sm font-medium">Facebook</span>
                    <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full justify-center"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
