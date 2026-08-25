import { categories, products } from '../data/products';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Megaphone, Eye, Package, Tag, Gift, Award, Palette, Printer } from 'lucide-react';

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

export default function Catalogue() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-2">Product Catalogue</h1>
          <p className="text-gray-400 text-sm mb-5">Browse our complete range of printing and design solutions</p>
          <nav className="flex items-center gap-1.5 text-xs text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">Catalogue</span>
          </nav>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Browse Categories</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">Our Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = iconMap[category.slug] || Printer;
              const count = products.filter(p => p.categoryId === category.id).length;
              return (
                <Link
                  key={category.slug}
                  to={`/products/category/${category.slug}`}
                  className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-brand-gold/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-3 group-hover:bg-brand-gold/15 transition-colors">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-brand-gold transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-400">{count} products</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
