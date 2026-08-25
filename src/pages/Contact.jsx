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

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const contactCards = [
  {
    icon: MapPin,
    label: "Address",
    value: ADDRESS,
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: PHONE_NUMBER,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

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
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-14">
            <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto">
              Contact us for a quotation or to discuss your project requirements. We're available through any of the channels below.
            </p>
          </div>

          {/* Contact Cards — 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const Wrapper = card.href ? "a" : "div";
              const wrapperProps = card.href
                ? { href: card.href, target: card.external ? "_blank" : undefined, rel: card.external ? "noopener noreferrer" : undefined }
                : {};

              const content = (
                <div className="bg-brand-light p-8 rounded-2xl border border-gray-100/60 text-center hover:border-brand-gold/30 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] transition-all duration-300 min-h-[180px] flex flex-col items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                    <Icon size={22} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">{card.label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{card.value}</p>
                  </div>
                </div>
              );

              return card.href ? (
                <a key={card.label} {...wrapperProps} className="block group">
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </div>

          {/* Working Hours */}
          <div className="bg-brand-light p-8 rounded-2xl border border-gray-100/60 text-center mb-10">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
              <Clock size={22} className="text-brand-gold" />
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-2">Working Hours</p>
            <p className="text-gray-500 text-sm">Monday — Saturday: 9:00 AM — 7:00 PM</p>
            <p className="text-gray-400 text-sm mt-1">Sunday: Closed</p>
          </div>

          {/* Social + WhatsApp CTA row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Social Links */}
            <div className="bg-brand-light p-8 rounded-2xl border border-gray-100/60 flex flex-col items-center justify-center text-center">
              <p className="text-sm font-semibold text-gray-900 mb-5">Follow Us</p>
              <div className="flex items-center gap-4">
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={20} />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <FacebookIcon size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-brand-dark p-8 rounded-2xl flex flex-col items-center justify-center text-center">
              <MessageCircle size={28} className="text-brand-gold mb-3" />
              <p className="text-white text-base font-semibold mb-1">Chat on WhatsApp</p>
              <p className="text-gray-400 text-sm mb-5">Quick response, instant quotations</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-dark transition-colors shadow-lg shadow-brand-gold/20"
              >
                <MessageCircle size={16} />
                Start Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
