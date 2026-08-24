import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye, ChevronRight, X } from 'lucide-react';

const filterCategories = ['All', 'Branding', 'Printing', 'Packaging', 'Events', 'Corporate', 'Social Media'];

const portfolioItems = [
  {
    id: 1,
    title: 'Corporate Branding — TechCorp Solutions',
    category: 'Branding',
    description: 'Complete brand identity including logo, visiting cards, letterheads and envelopes',
    tags: ['Logo', 'Stationery'],
  },
  {
    id: 2,
    title: 'Event Backdrops — Global Academy Annual Day',
    category: 'Events',
    description: 'Custom stage backdrop and event branding materials',
    tags: ['Backdrop', 'Stage'],
  },
  {
    id: 3,
    title: 'Product Packaging — Sweet Treats Bakery',
    category: 'Packaging',
    description: 'Custom food packaging including cake boxes and paper bags',
    tags: ['Cake Box', 'Paper Bags'],
  },
  {
    id: 4,
    title: 'Corporate Stationery — StyleHouse Fashion',
    category: 'Branding',
    description: 'Premium visiting cards, letterheads and corporate folders',
    tags: ['Cards', 'Letterhead'],
  },
  {
    id: 5,
    title: 'Large Format Printing — City Mall Exhibition',
    category: 'Printing',
    description: 'Exhibition banners, standees and promotional displays',
    tags: ['Banner', 'Standee'],
  },
  {
    id: 6,
    title: 'Social Media Kit — Fresh Bites Restaurant',
    category: 'Social Media',
    description: 'Complete social media design package for Instagram and Facebook',
    tags: ['Social Media', 'Digital'],
  },
  {
    id: 7,
    title: 'Promotional Products — TechWave Solutions',
    category: 'Corporate',
    description: 'Custom mugs, t-shirts and lanyards for corporate event',
    tags: ['Mugs', 'T-Shirts'],
  },
  {
    id: 8,
    title: 'Menu Design — Kabul House Restaurant',
    category: 'Printing',
    description: 'Premium restaurant menu design and printing',
    tags: ['Menu', 'Design'],
  },
  {
    id: 9,
    title: 'Certificate Design — Punjab Education Board',
    category: 'Events',
    description: 'Custom certificates with foil printing and numbering',
    tags: ['Certificate', 'Foil'],
  },
  {
    id: 10,
    title: 'Retail Packaging — Noor Jewellers',
    category: 'Packaging',
    description: 'Luxury gift boxes and product packaging for jewelry',
    tags: ['Gift Box', 'Premium'],
  },
  {
    id: 11,
    title: 'Stickers & Labels — Herbal Care Pakistan',
    category: 'Branding',
    description: 'Product labels and die-cut stickers for organic products',
    tags: ['Labels', 'Stickers'],
  },
  {
    id: 12,
    title: 'Office Branding — InnovateTech',
    category: 'Corporate',
    description: 'Complete office branding including signs, letterheads and digital presence',
    tags: ['Signage', 'Branding'],
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <main>
      {/* HERO BANNER */}
      <section className="relative bg-brand-dark py-16 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-darker" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-6">
            Showcasing our best printing, branding, and design projects
          </p>
          <nav className="flex items-center text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">Portfolio</span>
          </nav>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-10 bg-white border-b sticky top-16 sm:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-xl overflow-hidden cursor-pointer h-72"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="w-full h-full bg-gradient-to-br from-brand-dark to-brand-navy flex items-center justify-center">
                    <div className="text-center p-4">
                      <Eye className="w-12 h-12 text-brand-gold/40 mx-auto mb-2" />
                      <p className="text-white/60 text-sm">{item.category}</p>
                    </div>
                  </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <Eye className="w-10 h-10 text-primary mx-auto mb-3" />
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-brand-dark to-brand-navy flex items-center justify-center rounded-t-2xl">
              <div className="text-center">
                <Eye className="w-16 h-16 text-brand-gold/40 mx-auto mb-2" />
                <p className="text-white/60">{selectedItem.category}</p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                {selectedItem.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedItem.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Have a project in mind?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Your Project
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
