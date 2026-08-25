import { Link } from "react-router-dom";
import { stats, PHONE_NUMBER, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, EMAIL, ADDRESS } from "../data/siteInfo";
import { ArrowRight, Star, Quote, Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const testimonials = [
  {
    text: "Visiting cards banwaye, bohat achi quality mili. Ab sari printing yahan se karwata hoon. Recommended!",
    name: "Asif Mehmood",
    role: "Owner, Al-Rehman Traders",
  },
  {
    text: "Needed 2000 file folders urgently. Finished in 3 days with excellent quality. Professional team.",
    name: "Dr. Ayesha Siddiqui",
    role: "COO, City Medical Centre",
  },
  {
    text: "Office stationery handled for 18 months. Consistent quality, never missed a deadline.",
    name: "Faisal Naveed",
    role: "Director Admin, Pak Systems",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-[92vh] flex items-center bg-brand-dark overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,169,81,0.07) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy/50 to-brand-dark" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 py-28 md:py-36">
          <div className="max-w-3xl fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold text-xs font-semibold tracking-wide">Graphic Designing & Printing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white font-display leading-[1.08] mb-6">
              Your Brand, Our
              <span className="block text-brand-gold mt-1">Creativity.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400/90 leading-relaxed mb-10 max-w-xl">
              Professional printing and branding solutions for businesses across Pakistan. From design to print — everything under one roof.
            </p>

            <div className="flex flex-wrap gap-3 mb-16">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-brand-gold-dark transition-all duration-200 shadow-lg shadow-brand-gold/20"
              >
                View Products
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/5 hover:border-white/25 transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="border-l border-white/10 pl-4 md:pl-5">
                  <p className="text-2xl md:text-3xl font-bold text-white font-display">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="flex items-center gap-3 group py-2">
              <div className="w-9 h-9 rounded-lg bg-brand-gold/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/15 transition-colors">
                <Phone size={16} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Call Us</p>
                <p className="text-[13px] font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">{PHONE_NUMBER}</p>
              </div>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group py-2">
              <div className="w-9 h-9 rounded-lg bg-brand-gold/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/15 transition-colors">
                <MessageCircle size={16} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">WhatsApp</p>
                <p className="text-[13px] font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">{PHONE_NUMBER}</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group py-2">
              <div className="w-9 h-9 rounded-lg bg-brand-gold/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/15 transition-colors">
                <Mail size={16} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Email</p>
                <p className="text-[13px] font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">{EMAIL}</p>
              </div>
            </a>
            <div className="flex items-center gap-3 py-2">
              <div className="w-9 h-9 rounded-lg bg-brand-gold/8 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Location</p>
                <p className="text-[13px] font-semibold text-gray-900">{ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-brand-light p-7 rounded-2xl border border-gray-100/80 hover:shadow-sm transition-shadow duration-200">
                <Quote size={24} className="text-brand-gold/20 mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <div className="border-t border-gray-200/60 pt-4">
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1.5 text-brand-gold text-sm font-semibold hover:gap-2.5 transition-all duration-200"
            >
              Read More Reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
