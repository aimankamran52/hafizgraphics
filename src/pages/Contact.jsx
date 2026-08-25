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
  ArrowRight,
  ExternalLink,
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">Get in Touch</p>
              <h1 className="text-3xl md:text-[2.5rem] font-bold text-white font-display mb-4 leading-tight">Let's Create Something Great Together</h1>
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                Ready to start your next project? Reach out to us for a free quotation or to discuss your requirements.
              </p>
            </div>
            <div className="hidden lg:flex justify-end">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-brand-gold-dark transition-all duration-200 shadow-lg shadow-brand-gold/20 group"
              >
                <MessageCircle size={18} />
                Get a Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left — Contact Details (larger column) */}
            <div className="lg:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold mb-3">Contact Information</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display mb-3">Reach Us Directly</h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
                We respond to every inquiry. Choose the method that works best for you.
              </p>

              <div className="space-y-0 divide-y divide-gray-100">
                {/* Address */}
                <div className="flex items-start gap-5 py-6">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/[0.06] flex items-center justify-center flex-shrink-0">
                    <MapPin size={19} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900 mb-1">Office Address</p>
                    <p className="text-gray-500 text-[15px]">{ADDRESS}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 py-6">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/[0.06] flex items-center justify-center flex-shrink-0">
                    <Phone size={19} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900 mb-1">Phone</p>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                      className="text-gray-500 text-[15px] hover:text-brand-gold transition-colors"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-5 py-6">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/[0.06] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={19} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900 mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-[15px] hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                    >
                      {PHONE_NUMBER}
                      <ExternalLink size={12} className="text-gray-300" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5 py-6">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/[0.06] flex items-center justify-center flex-shrink-0">
                    <Mail size={19} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-gray-500 text-[15px] hover:text-brand-gold transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-5 py-6">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/[0.06] flex items-center justify-center flex-shrink-0">
                    <Clock size={19} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-900 mb-1">Business Hours</p>
                    <p className="text-gray-500 text-[15px]">Mon — Sat: 9:00 AM — 7:00 PM</p>
                    <p className="text-gray-400 text-[13px] mt-0.5">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — WhatsApp CTA + Social */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-5">
                {/* WhatsApp CTA Card */}
                <div className="bg-brand-dark rounded-3xl p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,169,81,0.07) 1px, transparent 0)",
                    backgroundSize: "24px 24px"
                  }} />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.06] flex items-center justify-center mb-6">
                      <MessageCircle size={26} className="text-brand-gold" />
                    </div>
                    <h3 className="text-white text-xl font-bold font-display mb-2">Chat on WhatsApp</h3>
                    <p className="text-gray-400 text-[14px] leading-relaxed mb-8">
                      Fastest way to get a quotation. Send us your requirements and get a response within minutes.
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-gold text-white px-7 py-3.5 rounded-full font-semibold text-[14px] hover:bg-brand-gold-dark transition-colors shadow-lg shadow-brand-gold/20 w-full justify-center"
                    >
                      <MessageCircle size={16} />
                      Start Conversation
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-brand-light rounded-3xl p-8 border border-gray-100/60">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-4">Follow Our Work</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed mb-5">
                    See our latest projects and designs on social media.
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.instagram && (
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-gray-600 hover:border-brand-gold/30 hover:text-brand-gold transition-all text-[13px] font-medium"
                      >
                        <InstagramIcon size={16} />
                        Instagram
                      </a>
                    )}
                    {socialLinks.facebook && (
                      <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-gray-600 hover:border-brand-gold/30 hover:text-brand-gold transition-all text-[13px] font-medium"
                      >
                        <FacebookIcon size={16} />
                        Facebook
                      </a>
                    )}
                  </div>
                </div>

                {/* Mobile CTA — visible only on small screens */}
                <div className="lg:hidden">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-brand-gold text-white px-7 py-4 rounded-full font-semibold text-[14px] hover:bg-brand-gold-dark transition-colors shadow-lg shadow-brand-gold/20"
                  >
                    <MessageCircle size={16} />
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
