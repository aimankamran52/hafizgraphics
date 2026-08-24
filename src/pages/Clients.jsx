import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import {
  Building2,
  ChevronRight,
  Star,
  ArrowRight,
  Monitor,
  GraduationCap,
  UtensilsCrossed,
  ShoppingBag,
  Shirt,
  Heart,
  Landmark,
  Users,
  Rocket,
} from "lucide-react";

const clients = [
  { name: "TechCorp Solutions", industry: "Technology" },
  { name: "StyleHouse Fashion", industry: "Fashion & Retail" },
  { name: "Global Academy", industry: "Education" },
  { name: "Sweet Treats Bakery", industry: "Food & Beverage" },
  { name: "InnovateTech", industry: "Technology" },
  { name: "Kabab House Restaurant", industry: "Food & Beverage" },
  { name: "Noor Jewellers", industry: "Retail" },
  { name: "Fresh Bites Restaurant", industry: "Food & Beverage" },
  { name: "Punjab Education Board", industry: "Government" },
  { name: "Herbal Care Pakistan", industry: "Health & Beauty" },
  { name: "City Mall Management", industry: "Real Estate" },
  { name: "TechWave Solutions", industry: "Technology" },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "200+", label: "Corporate Clients" },
  { value: "50+", label: "Educational Institutions" },
  { value: "100+", label: "Businesses" },
];

const industries = [
  { icon: Monitor, name: "Technology" },
  { icon: GraduationCap, name: "Education" },
  { icon: UtensilsCrossed, name: "Food & Beverage" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Shirt, name: "Fashion" },
  { icon: Heart, name: "Healthcare" },
  { icon: Building2, name: "Real Estate" },
  { icon: Landmark, name: "Government" },
  { icon: Users, name: "NGOs" },
  { icon: Rocket, name: "Startups" },
];

export default function Clients() {
  return (
    <main>
      {/* ========== HERO BANNER ========== */}
      <section className="relative bg-brand-dark py-16 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-3">
            Our Clients
          </h1>
          <p className="text-brand-gold text-lg mb-4">
            Trusted by businesses, organizations and institutions across Pakistan
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-200">Our Clients</span>
          </nav>
        </div>
      </section>

      {/* ========== INTRO TEXT & STATS ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              We are proud to have worked with a diverse range of clients from
              various industries. Our commitment to quality and professional
              service has earned us the trust of businesses across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-brand-light p-6 rounded-xl text-center"
              >
                <p className="text-3xl font-bold text-brand-gold font-display">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CLIENT LOGOS SECTION ========== */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Portfolio"
            title="Trusted By Leading Organizations"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-light mx-auto mb-4 flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                  <Building2 size={28} className="text-brand-gold" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {client.name}
                </h3>
                <span className="inline-block px-2 py-0.5 bg-brand-light text-gray-500 text-xs rounded-full">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES WE SERVE ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Industries"
            title="Industries We Serve"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-light p-6 rounded-xl text-center hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-gold/20 transition-colors">
                    <Icon size={24} className="text-brand-gold" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {industry.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Want to join our growing list of satisfied clients?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We'd love to work with you. Contact us today and let's create
            something great together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
          >
            Become a Corporate Client
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
