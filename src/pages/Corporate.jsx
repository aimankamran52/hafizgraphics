import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data/siteInfo";
import {
  Building2,
  FileText,
  Megaphone,
  Package,
  Award,
  Palette,
  Star,
  Check,
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronRight,
  Shield,
  Truck,
  Clock,
  Users,
} from "lucide-react";

const corporateServices = [
  {
    icon: FileText,
    title: "Monthly Printing",
    description:
      "Regular printing needs including stationery, forms, and documents",
  },
  {
    icon: Building2,
    title: "Corporate Stationery",
    description:
      "Visiting cards, letterheads, envelopes, and folders",
  },
  {
    icon: Megaphone,
    title: "Marketing Material",
    description:
      "Brochures, flyers, catalogues, and promotional print",
  },
  {
    icon: Package,
    title: "Packaging Solutions",
    description:
      "Custom product packaging, bags, and boxes",
  },
  {
    icon: Award,
    title: "Event Branding",
    description:
      "Backdrops, banners, standees, and event materials",
  },
  {
    icon: Star,
    title: "Promotional Products",
    description:
      "Mugs, t-shirts, caps, keychains, and branded items",
  },
  {
    icon: Palette,
    title: "Social Media Designs",
    description:
      "Post creatives, stories, and digital content",
  },
  {
    icon: FileText,
    title: "Company Profiles",
    description:
      "Professional company profiles and presentations",
  },
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
  {
    icon: MessageCircle,
    step: 1,
    title: "Share Your Requirements",
    description: "Tell us what you need",
  },
  {
    icon: FileText,
    step: 2,
    title: "Get a Quote",
    description: "Receive competitive pricing",
  },
  {
    icon: Check,
    step: 3,
    title: "Approve Design",
    description: "Review and approve the design",
  },
  {
    icon: Truck,
    step: 4,
    title: "Delivery",
    description: "Receive your order on time",
  },
];

export default function Corporate() {
  return (
    <main>
      {/* ========== HERO BANNER ========== */}
      <section className="relative bg-brand-dark py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-3">
            Corporate Solutions
          </h1>
          <p className="text-brand-gold text-lg mb-4">
            Your Reliable Printing Partner for Business
          </p>
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-200">Corporate Solutions</span>
          </nav>
        </div>
      </section>

      {/* ========== INTRO ========== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display mb-4">
              Looking for a reliable printing partner for your company?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ongoing printing and designing solutions for businesses with consistent quality.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CORPORATE SERVICES ========== */}
      <section className="py-20 md:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Corporate Services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {corporateServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                    <Icon size={26} className="text-brand-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Advantage"
            title="Why Companies Choose Us"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-brand-gold" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-brand-dark to-brand-navy rounded-xl p-12 flex items-center justify-center w-full max-w-md aspect-square">
                <div className="text-center">
                  <Building2 size={48} className="text-brand-gold/40 mx-auto mb-3" />
                  <p className="text-white text-lg font-display font-bold">Corporate Solutions</p>
                  <p className="text-brand-gold text-sm mt-1">Your Printing Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 md:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Our Process" title="How It Works" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold font-display">
                      {step.step}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-brand-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 md:py-32 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Ready to streamline your printing needs?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let Hafiz Graphics handle all your corporate printing requirements
            with quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
            >
              Become a Corporate Client
              <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
