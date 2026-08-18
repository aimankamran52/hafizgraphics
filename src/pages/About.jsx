import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import {
  Target,
  Eye,
  Users,
  Award,
  Heart,
  ArrowRight,
  Quote,
  Star,
  Palette,
} from "lucide-react";

const clientTypes = [
  "Businesses",
  "Corporate organizations",
  "Educational institutions",
  "Restaurants",
  "Retail brands",
  "Event organizers",
  "NGOs",
  "Startups",
  "Individuals",
];

const values = [
  {
    icon: Award,
    title: "Quality",
    description:
      "We are committed to delivering the highest quality in every project, from design to final print.",
  },
  {
    icon: Palette,
    title: "Creativity",
    description:
      "We bring fresh and innovative design ideas that help your brand stand out from the competition.",
  },
  {
    icon: Heart,
    title: "Reliability",
    description:
      "Consistent communication, on-time delivery and dependable service you can count on.",
  },
  {
    icon: Star,
    title: "Affordability",
    description:
      "Premium quality printing solutions at competitive prices that suit your budget.",
  },
];

export default function About() {
  return (
    <main>
      {/* ========== HERO BANNER ========== */}
      <section className="relative bg-brand-dark py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-3">
            About Hafiz Graphics
          </h1>
          <p className="text-brand-gold text-lg mb-4">
            Creative Design & Printing Company
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-200">About Us</span>
          </nav>
        </div>
      </section>

      {/* ========== ABOUT INTRO ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Who We Are"
                title="About Hafiz Graphics"
                centered={false}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                Hafiz Graphics is a creative design and printing company
                committed to helping businesses present themselves professionally
                through high-quality design, printing and branding solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We work with a diverse range of clients across Pakistan,
                providing them with end-to-end solutions from graphic design to
                final print production and delivery.
              </p>

              <div className="flex flex-wrap gap-2">
                {clientTypes.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1.5 bg-brand-light text-brand-dark text-sm font-medium rounded-full border border-brand-gold/20"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://picsum.photos/seed/about-hafiz/600/500"
                alt="About Hafiz Graphics"
                className="rounded-xl shadow-lg w-full object-cover aspect-[6/5]"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-xl -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-dark/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Purpose"
            title="Mission & Vision"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-gold">
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5">
                <Target size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality, creative and reliable graphic
                designing, printing and branding solutions that help businesses
                communicate their identity professionally and effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-gold">
              <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5">
                <Eye size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted printing and creative partner for businesses
                across Pakistan by combining quality, creativity, affordability
                and long-term customer relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOUNDER & CEO ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Leadership"
            title="Founder & CEO"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img
                src="https://picsum.photos/seed/founder-hafiz/400/500"
                alt="Hafiz Mobeen Ahmed"
                className="rounded-xl shadow-lg w-full max-w-sm object-cover aspect-[4/5] border-4 border-brand-gold/30"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-display mb-1">
                Hafiz Mobeen Ahmed
              </h3>
              <p className="text-brand-gold font-semibold mb-1">
                Founder & CEO — Hafiz Graphics
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Founder | Creative Entrepreneur | Graphic & Printing Solutions
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Hafiz Mobeen Ahmed is the Founder and CEO of Hafiz Graphics,
                with a vision to build a professional creative and printing
                company focused on quality, customer satisfaction and long-term
                business relationships. His approach is centered around
                understanding the client's requirements, delivering quality work
                and creating solutions that help businesses strengthen their
                professional image.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-gold font-display">
                    5+
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-gold font-display">
                    500+
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Projects Completed
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-brand-gold font-display">
                    100%
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="What Drives Us" title="Our Values" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={26} className="text-brand-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
