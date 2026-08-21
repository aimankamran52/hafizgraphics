import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
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
  Send,
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

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  const location = useLocation();
  const prefillProduct = location.state?.product || "";
  const isCatalogue = location.state?.catalogueRequest;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: prefillProduct,
    quantity: "",
    message: isCatalogue ? "I would like to request a catalogue." : "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* ========== HERO BANNER ========== */}
      <section className="relative bg-brand-dark py-24 md:py-32">
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

      {/* ========== INTRO TEXT ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Contact us for a quotation or to discuss your project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* ========== CONTACT FORM ========== */}
            <div className="lg:col-span-2">
              <div className="bg-brand-light p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 font-display mb-6">
                  Request a Quote
                </h3>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-green-700">
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                          placeholder="Company name (optional)"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                          placeholder="+92 3XX XXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product / Service
                        </label>
                        <input
                          type="text"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                          placeholder="e.g. Business Cards, Brochure"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Required Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                          placeholder="e.g. 500, 1000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message / Requirements
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
                    >
                      Request a Quote
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ========== CONTACT INFO ========== */}
            <div className="lg:col-span-1 space-y-6">
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
                      <p className="text-sm font-semibold text-gray-900">
                        Address
                      </p>
                      <p className="text-sm text-gray-500">{ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Phone
                      </p>
                      <a
                        href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                        className="text-sm text-gray-500 hover:text-brand-gold transition-colors"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-brand-gold transition-colors"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Email
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-sm text-gray-500 hover:text-brand-gold transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Working Hours
                      </p>
                      <p className="text-sm text-gray-500">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-brand-light p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 font-display mb-4">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  {socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-brand-gold transition-colors group"
                    >
                      <InstagramIcon size={20} />
                      <span className="text-sm font-medium">Instagram</span>
                      <ExternalLink
                        size={12}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  )}
                  {socialLinks.facebook && (
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-brand-gold transition-colors group"
                    >
                      <FacebookIcon size={20} />
                      <span className="text-sm font-medium">Facebook</span>
                      <ExternalLink
                        size={12}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 hover:text-brand-gold transition-colors group"
                    >
                      <LinkedinIcon size={20} />
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ExternalLink
                        size={12}
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
