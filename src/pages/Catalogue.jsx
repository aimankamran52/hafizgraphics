import SectionTitle from '../components/SectionTitle';
import { categories, products } from '../data/products';
import { Link } from 'react-router-dom';
import {
  Download,
  FileText,
  Eye,
  ChevronRight,
  Printer,
  Palette,
  Package,
  Tag,
  Gift,
  Award,
  Megaphone,
} from 'lucide-react';

const iconMap = {
  'business-stationery': FileText,
  'marketing-promotional': Megaphone,
  'large-format': Eye,
  packaging: Package,
  'labels-stickers': Tag,
  'promotional-items': Gift,
  'event-corporate': Award,
  'graphic-designing': Palette,
};

const Catalogue = () => {
  const getProductCount = (categorySlug) =>
    products.filter((p) => p.category === categorySlug).length;

  return (
    <main>
      {/* HERO BANNER */}
      <section className="relative bg-brand-dark py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-darker" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Catalogue</h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-6">
            Printing, designing, branding and promotional solutions
          </p>
          <nav className="flex items-center text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Catalogue</span>
          </nav>
        </div>
      </section>

      {/* CATALOGUE CATEGORIES */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Browse Our Categories"
            subtitle="Find the perfect printing and design solutions for your needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = iconMap[category.slug] || Printer;
              const count = getProductCount(category.slug);
              return (
                <Link
                  key={category.slug}
                  to={`/products/${category.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-gold hover:shadow-lg transition-all duration-300 block"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-brand-gold transition-colors">{category.name}</h3>
                  <p className="text-gray-500 text-sm mb-1">{count} Products</p>
                  <p className="text-gray-400 text-xs">{category.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CATALOGUE CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <Download className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Download Complete Catalogue</h2>
              <p className="text-gray-300 mb-6">
                Get our complete product catalogue with detailed specifications and pricing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Catalogue
                </a>
                <Link
                  to="/contact"
                  state={{ subject: 'catalogue-request' }}
                  className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Request Printed Catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Catalogue;
