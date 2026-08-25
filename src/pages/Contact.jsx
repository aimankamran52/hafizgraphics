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
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white font-display mb-2">Contact Us</h1>
          <p className="text-gray-400 text-sm mb-5">Let's Work Together</p>
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">Contact</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Contact us for a quotation or to discuss your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Contact Info */}
            <div className="bg-brand-light p-7 rounded-2xl border border-gray-100/60">
              <h3 className="text-[15px] font-bold text-gray-900 font-display mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/8 flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900 tracking-wide">Address</p>
                    <p className="text-[13px] text-gray-500 mt-0.5">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/8 flex items-center justify-center flex-shrink-0">
                    <Phone size={15} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900 tracking-wide">Phone</p>
                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="text-[13px] text-gray-500 hover:text-brand-gold transition-colors mt-0.5 inline-block">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/8 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={15} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900 tracking-wide">WhatsApp</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="text-[13px] text-gray-500 hover:text-brand-gold transition-colors mt-0.5 inline-block">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/8 flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900 tracking-wide">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-[13px] text-gray-500 hover:text-brand-gold transition-colors mt-0.5 inline-block">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/8 flex items-center justify-center flex-shrink-0">
                    <Clock size={15} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900 tracking-wide">Working Hours</p>
                    <p className="text-[13px] text-gray-500 mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="bg-brand-light p-7 rounded-2xl border border-gray-100/60">
              <h3 className="text-[15px] font-bold text-gray-900 font-display mb-6">Follow Us</h3>
              <div className="space-y-3 mb-7">
                {socialLinks.instagram && (
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-brand-gold transition-colors">
                    <InstagramIcon size={18} />
                    <span className="text-[13px] font-medium">Instagram</span>
                  </a>
                )}
                {socialLinks.facebook && (
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-brand-gold transition-colors">
                    <FacebookIcon size={18} />
                    <span className="text-[13px] font-medium">Facebook</span>
                  </a>
                )}
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3 rounded-full font-semibold text-[13px] hover:bg-brand-gold-dark transition-colors w-full justify-center shadow-lg shadow-brand-gold/15"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
