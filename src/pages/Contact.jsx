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
  ChevronRight,
} from "lucide-react";

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-2">Contact Us</h1>
          <p className="text-gray-400 text-sm mb-4">Let's Work Together</p>
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">Contact</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm leading-relaxed">
              Contact us for a quotation or to discuss your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Contact Info */}
            <div className="bg-brand-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 font-display mb-5">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Address</p>
                    <p className="text-sm text-gray-500">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Phone</p>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="text-sm text-gray-500 hover:text-brand-gold transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">WhatsApp</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-brand-gold transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-gray-500 hover:text-brand-gold transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Working Hours</p>
                    <p className="text-sm text-gray-500">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="bg-brand-light p-6 rounded-xl border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 font-display mb-5">Follow Us</h3>
              <div className="space-y-3 mb-6">
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-brand-gold transition-colors">
                    <InstagramIcon size={18} />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                )}
                {socialLinks.facebook && (
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-brand-gold transition-colors">
                    <FacebookIcon size={18} />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                )}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-gold-dark transition-colors w-full justify-center"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
