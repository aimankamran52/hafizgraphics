import { Link } from "react-router-dom";
import {
  Building2,
  Monitor,
  GraduationCap,
  UtensilsCrossed,
  ShoppingBag,
  Heart,
  Landmark,
  Users,
  Rocket,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const clients = [
  { name: "TechCorp Solutions", industry: "Technology" },
  { name: "StyleHouse Fashion", industry: "Fashion" },
  { name: "Global Academy", industry: "Education" },
  { name: "Sweet Treats Bakery", industry: "Food & Beverage" },
  { name: "Kabab House Restaurant", industry: "Food & Beverage" },
  { name: "Noor Jewellers", industry: "Retail" },
  { name: "Punjab Education Board", industry: "Government" },
  { name: "Herbal Care Pakistan", industry: "Health" },
  { name: "City Mall Management", industry: "Real Estate" },
];

const industries = [
  { icon: Monitor, name: "Technology" },
  { icon: GraduationCap, name: "Education" },
  { icon: UtensilsCrossed, name: "Food & Beverage" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Heart, name: "Healthcare" },
  { icon: Building2, name: "Real Estate" },
  { icon: Landmark, name: "Government" },
  { icon: Users, name: "NGOs" },
  { icon: Rocket, name: "Startups" },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "200+", label: "Corporate Clients" },
  { value: "50+", label: "Institutions" },
  { value: "100+", label: "Businesses" },
];

export default function Clients() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-2">Our Clients</h1>
          <p className="text-gray-400 text-sm mb-4">
            Trusted by businesses and organizations across Pakistan
          </p>
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">Clients</span>
          </nav>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-brand-light p-5 rounded-xl text-center border border-gray-100">
                <p className="text-2xl font-bold text-gray-900 font-display">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Portfolio</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Trusted By Leading Organizations</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {clients.map((client, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-light mx-auto mb-3 flex items-center justify-center">
                  <Building2 size={20} className="text-brand-gold" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-0.5">{client.name}</h3>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">{client.industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Industries</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Industries We Serve</h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <div key={i} className="bg-brand-light p-4 rounded-xl text-center border border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center mx-auto mb-2">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <p className="text-xs font-medium text-gray-900">{industry.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-3">
            Want to join our clients?
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            We'd love to work with you. Contact us today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-gold-dark transition-colors"
          >
            Become a Client
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
