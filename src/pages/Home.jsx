import { Link } from "react-router-dom";
import { stats, PHONE_NUMBER, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, EMAIL, ADDRESS } from "../data/siteInfo";
import { ArrowRight, Shield, Palette, Truck, Users, Star, Quote, Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Professional Quality",
    description: "High-quality design and printing for your brand.",
  },
  {
    icon: Palette,
    title: "Complete Branding",
    description: "From design to print — all branding needs in one place.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Timely delivery and professional communication.",
  },
  {
    icon: Users,
    title: "Corporate Solutions",
    description: "Specialized printing for businesses and organizations.",
  },
];

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
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-gradient-to-br from-brand-dark via-brand-navy to-brand-darker">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,169,81,0.5) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 py-32 md:py-40">
          <div className="max-w-3xl fade-in">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-5">
              Graphic Designing & Printing
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white font-display leading-[1.1] mb-6">
              Your Brand, Our Creativity.
              <span className="block text-brand-gold mt-1">Printed to Perfection.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
              Professional printing and branding solutions for businesses across Pakistan.
            </p>

            <div className="flex flex-wrap gap-3 mb-16">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-gold text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-brand-gold-dark transition-colors"
              >
                View Products
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl md:text-3xl font-bold text-white font-display">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                <Phone size={18} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Call Us</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">{PHONE_NUMBER}</p>
              </div>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                <MessageCircle size={18} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-400">WhatsApp</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">{PHONE_NUMBER}</p>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                <Mail size={18} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">{EMAIL}</p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm font-semibold text-gray-900">{ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Why Hafiz Graphics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Testimonials</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <Quote size={20} className="text-brand-gold/30 mb-3" />
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1.5 text-brand-gold text-sm font-semibold hover:underline"
            >
              Read More Reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
