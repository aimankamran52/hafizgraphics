import { Link } from "react-router-dom";
import { Target, Eye, Award, Palette, Heart, Star, ChevronRight } from "lucide-react";

const values = [
  { icon: Award, title: "Quality", desc: "Highest quality in every project we deliver." },
  { icon: Palette, title: "Creativity", desc: "Fresh designs that make your brand stand out." },
  { icon: Heart, title: "Reliability", desc: "On-time delivery you can always count on." },
  { icon: Star, title: "Affordability", desc: "Premium quality at competitive prices." },
];

const clientTypes = [
  "Businesses", "Corporate", "Education", "Restaurants",
  "Retail", "Events", "NGOs", "Startups", "Individuals",
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white font-display mb-2">About Us</h1>
          <p className="text-gray-400 text-sm mb-5">Creative Design & Printing Company</p>
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">About</span>
          </nav>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">Who We Are</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display mb-5">
                About Hafiz Graphics
              </h2>
              <p className="text-gray-500 leading-[1.7] text-[14px] mb-8">
                Hafiz Graphics is a creative design and printing company providing high-quality design, printing and branding solutions across Pakistan.
              </p>
              <div className="flex flex-wrap gap-2">
                {clientTypes.map((type) => (
                  <span key={type} className="px-3.5 py-1.5 bg-brand-light text-gray-600 text-[12px] font-medium rounded-full border border-gray-100/60">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-dark via-brand-navy to-brand-darker rounded-3xl p-12 flex items-center justify-center min-h-[320px] relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,169,81,0.06) 1px, transparent 0)",
                backgroundSize: "32px 32px"
              }} />
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Award size={28} className="text-brand-gold" />
                </div>
                <p className="text-white font-display font-bold text-lg">Hafiz Graphics</p>
                <p className="text-brand-gold text-xs mt-1.5 tracking-wide">Since 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">Our Purpose</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="bg-white p-7 rounded-2xl border border-gray-100/60">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/8 flex items-center justify-center mb-4">
                <Target size={18} className="text-brand-gold" />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                To provide high-quality, creative and reliable graphic designing, printing and branding solutions.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-gray-100/60">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/8 flex items-center justify-center mb-4">
                <Eye size={18} className="text-brand-gold" />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                To become a trusted printing and creative partner for businesses across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-brand-dark via-brand-navy to-brand-darker rounded-3xl p-10 flex items-center justify-center min-h-[280px] relative overflow-hidden">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,169,81,0.06) 1px, transparent 0)",
                backgroundSize: "32px 32px"
              }} />
              <div className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-display font-bold text-brand-gold">HM</span>
                </div>
                <p className="text-white font-display font-bold">Hafiz Mobeen Ahmed</p>
                <p className="text-brand-gold text-xs mt-1">Founder & CEO</p>
              </div>
            </div>

            <div>
              <p className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">Leadership</p>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-display mb-1">Hafiz Mobeen Ahmed</h2>
              <p className="text-gray-400 text-[13px] mb-5">Founder & CEO — Hafiz Graphics</p>
              <p className="text-gray-500 text-[14px] leading-[1.7] mb-6">
                Focused on quality, customer satisfaction and building long-term relationships.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-xl font-bold text-gray-900 font-display">5+</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Years Exp.</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900 font-display">500+</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Projects</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900 font-display">100%</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-14">
            <p className="text-brand-gold text-[11px] font-semibold uppercase tracking-[0.2em] mb-3">What Drives Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Our Values</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100/60 text-center hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/8 flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <h3 className="text-[13px] font-bold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-gray-400 text-[12px] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
