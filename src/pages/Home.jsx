import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";
import { stats, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data/siteInfo";
import {
  ArrowRight,
  Star,
  Shield,
  Palette,
  Truck,
  Users,
  Heart,
  Target,
  Eye,
  Megaphone,
  Package,
  Award,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Professional Quality",
    description:
      "High-quality design and printing solutions that represent your brand professionally.",
  },
  {
    icon: Star,
    title: "Competitive Pricing",
    description:
      "Quantity-based pricing designed to provide better value for bulk orders.",
  },
  {
    icon: Palette,
    title: "Complete Branding Solutions",
    description:
      "From designing to printing, get your branding requirements from one place.",
  },
  {
    icon: Truck,
    title: "Reliable Service",
    description:
      "Professional communication, timely delivery and attention to detail.",
  },
  {
    icon: Users,
    title: "Corporate Solutions",
    description:
      "Specialized solutions for companies, schools, universities, restaurants, NGOs and organizations.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description:
      "We focus on building long-term relationships rather than one-time orders.",
  },
];

const testimonials = [
  {
    text: "Hum ne visiting cards banwaye aur bohat achi quality mili. Ab sari printing yahan se karwata hoon. Highly recommended!",
    name: "Asif Mehmood",
    designation: "Owner, Al-Rehman Traders",
  },
  {
    text: "We needed 2000 file folders urgently. They finished in 3 days with excellent quality. Really professional team.",
    name: "Dr. Ayesha Siddiqui",
    designation: "COO, City Medical Centre",
  },
  {
    text: "For 18 months all our office stationery has been handled by them. Consistent quality and never missed a deadline.",
    name: "Faisal Naveed",
    designation: "Director Admin, Pak Systems",
  },
];

const corporateServices = [
  "Monthly printing",
  "Corporate stationery",
  "Marketing material",
  "Packaging",
  "Event branding",
  "Promotional products",
];

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  return (
    <main>
      {/* ========== HERO SECTION ========== */}
      <section
        className="relative min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-darker" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-display leading-tight mb-6">
              Your Brand. Our Creativity.{" "}
              <span className="text-brand-gold">Printed to Perfection.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Hafiz Graphics provides professional graphic designing, printing
              and branding solutions for businesses, organizations, events and
              individuals.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
              >
                View Products
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-brand-dark transition-colors"
              >
                Get a Quote
                <ChevronRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-bold text-brand-gold font-display">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY HAFIZ GRAPHICS ========== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Why Hafiz Graphics"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-brand-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS ========== */}
      <section className="py-20 md:py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Our Products" title="Featured Products" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PRODUCT CATEGORIES ========== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Browse by Category"
            title="Our Product Categories"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              const productCount = products.filter(
                (p) => p.categoryId === category.id
              ).length;
              return (
                <Link
                  key={category.id}
                  to={`/products/${category.slug}`}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-dark to-brand-navy flex flex-col items-center justify-center p-6 text-center hover:from-brand-gold/20 hover:to-brand-gold/10 transition-all duration-300 border border-gray-100 hover:border-brand-gold/30"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-3 group-hover:bg-brand-gold/20 transition-colors">
                    <Package size={28} className="text-brand-gold" />
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    {productCount} Products
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CORPORATE SOLUTIONS CTA ========== */}
      <section className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A843' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
              Looking for a Reliable Printing Partner?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We provide complete corporate printing solutions tailored to your
              business needs. From monthly stationery to event branding, we have
              you covered.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 max-w-xl mx-auto">
              {corporateServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-200 text-sm"
                >
                  <ChevronRight size={16} className="text-brand-gold shrink-0" />
                  {service}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-gold/90 transition-colors"
              >
                Become a Corporate Client
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border-2 border-brand-gold text-brand-gold px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-gold hover:text-brand-dark transition-colors"
              >
                View Products
                <Package size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Customers Say"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100"
              >
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-brand-gold/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  {testimonial.text}
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:underline"
            >
              Read More Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 md:py-28 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-brand-dark/70 text-lg mb-10">
            Get a free quotation today
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-dark/90 transition-colors"
            >
              <MessageCircle size={18} />
              Get a Quote
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-dark hover:text-white transition-colors"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
