import { Link } from "react-router-dom";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data/siteInfo";
import {
  Building2, FileText, Megaphone, Package, Award, Palette, Star,
  Check, ArrowRight, MessageCircle, ChevronRight,
} from "lucide-react";

const services = [
  { icon: FileText, title: "Monthly Printing", desc: "Stationery, forms, and documents" },
  { icon: Building2, title: "Corporate Stationery", desc: "Cards, letterheads, envelopes, folders" },
  { icon: Megaphone, title: "Marketing Material", desc: "Brochures, flyers, catalogues" },
  { icon: Package, title: "Packaging", desc: "Custom packaging, bags, and boxes" },
  { icon: Award, title: "Event Branding", desc: "Backdrops, banners, standees" },
  { icon: Star, title: "Promotional Items", desc: "Mugs, t-shirts, keychains" },
  { icon: Palette, title: "Social Media Designs", desc: "Post creatives and digital content" },
  { icon: FileText, title: "Company Profiles", desc: "Professional profiles and presentations" },
];

const benefits = [
  "Consistent quality across all orders",
  "Competitive bulk pricing",
  "Dedicated account management",
  "Fast turnaround times",
  "Complete design support",
  "Nationwide delivery",
];

const processSteps = [
  { step: 1, title: "Share Requirements", desc: "Tell us what you need" },
  { step: 2, title: "Get a Quote", desc: "Receive competitive pricing" },
  { step: 3, title: "Approve Design", desc: "Review and approve" },
  { step: 4, title: "Delivery", desc: "Receive on time" },
];

export default function Corporate() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white font-display mb-2">Corporate Solutions</h1>
          <p className="text-gray-400 text-sm mb-5">Your Reliable Printing Partner</p>
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">Corporate</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-display mb-3">
            Reliable printing partner for your company
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed">
            Ongoing printing and designing solutions for businesses with consistent quality.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">What We Offer</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Corporate Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100/60 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/8 flex items-center justify-center mb-3">
                    <Icon size={17} className="text-brand-gold" />
                  </div>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-[12px] leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <p className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">Our Advantage</p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-display mb-6">Why Companies Choose Us</h2>
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/[0.08] flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-brand-gold" />
                    </div>
                    <p className="text-gray-600 text-[13px]">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-dark via-brand-navy to-brand-darker rounded-3xl p-12 flex items-center justify-center min-h-[280px] relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,169,81,0.06) 1px, transparent 0)",
                backgroundSize: "32px 32px"
              }} />
              <div className="relative text-center">
                <Building2 size={36} className="text-brand-gold/40 mx-auto mb-2" />
                <p className="text-white font-display font-bold">Corporate Solutions</p>
                <p className="text-brand-gold text-xs mt-1 tracking-wide">Your Printing Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">Our Process</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">How It Works</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {processSteps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 rounded-full bg-brand-gold text-white flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold font-display">{s.step}</span>
                </div>
                <h3 className="text-[13px] font-bold text-gray-900 mb-0.5">{s.title}</h3>
                <p className="text-gray-400 text-[11px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-3">
            Ready to streamline your printing?
          </h2>
          <p className="text-gray-400 text-[14px] mb-7 max-w-md mx-auto">
            Let us handle all your corporate printing needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-white px-7 py-3 rounded-full font-semibold text-[13px] hover:bg-brand-gold-dark transition-colors shadow-lg shadow-brand-gold/15"
            >
              Become a Client
              <ArrowRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 text-white px-7 py-3 rounded-full font-semibold text-[13px] hover:bg-white/5 hover:border-white/25 transition-all duration-200"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
