import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import { categories, products, getProductsByCategory } from '../data/products'
import { Search, Grid, List, ChevronRight, Filter, X } from 'lucide-react'

export default function Products() {
  const { categorySlug } = useParams()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (categorySlug) {
      setActiveCategory(categorySlug)
    } else {
      setActiveCategory('all')
    }
  }, [categorySlug])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      navigate('/products')
    } else {
      navigate(`/products/category/${slug}`)
    }
    setSearchQuery('')
  }

  const getFilteredProducts = () => {
    let filtered = activeCategory === 'all'
      ? products
      : getProductsByCategory(activeCategory)

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription?.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      )
    }

    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
  }

  const filteredProducts = getFilteredProducts()
  const activeCategoryData = categories.find(c => c.slug === activeCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-brand-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Explore our complete range of printing, designing, branding and promotional solutions
            </p>
            <nav className="flex items-center gap-2 text-sm text-gray-300">
              <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-gold">Products</span>
              {activeCategoryData && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-brand-gold">{activeCategoryData.name}</span>
                </>
              )}
            </nav>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-brand-gold text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.slug}
                onClick={() => handleCategoryChange(category.slug)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.slug
                    ? 'bg-brand-gold text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon && <span className="text-base">{category.icon}</span>}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* All Categories Overview */}
        {activeCategory === 'all' && !searchQuery && (
          <div className="mb-12">
            <SectionTitle
              title="Browse by Category"
              subtitle="Find exactly what you need"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {categories.map(category => {
                const categoryProducts = getProductsByCategory(category.slug)
                return (
                  <Link
                    key={category.slug}
                    to={`/products/category/${category.slug}`}
                    className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:border-brand-gold hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        {category.icon && (
                          <span className="text-3xl mb-3 block">{category.icon}</span>
                        )}
                        <h3 className="text-lg font-display font-bold text-brand-dark group-hover:text-brand-gold transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {category.description}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0 ml-4">
                        <span className="text-2xl font-bold text-brand-gold">
                          {categoryProducts.length}
                        </span>
                        <p className="text-xs text-gray-500">products</p>
                      </div>
                    </div>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <SectionTitle
              title={
                activeCategory === 'all'
                  ? 'All Products'
                  : activeCategoryData?.name || 'Products'
              }
              subtitle={`Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  handleCategoryChange('all')
                }}
                className="px-6 py-2 bg-brand-gold text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
