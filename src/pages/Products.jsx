import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, products, getProductsByCategory } from '../data/products'
import { Search, X } from 'lucide-react'

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
        p.shortDescription?.toLowerCase().includes(query)
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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white">Products</h1>
          <p className="text-gray-400 text-[15px] mt-2">Browse our complete range of printing and design solutions</p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[60px] lg:top-[68px] z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center gap-4 h-14">

            {/* Category Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide flex-1 min-w-0">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`flex-shrink-0 px-4 py-[7px] rounded-lg text-[13px] font-medium transition-all duration-150 ${
                  activeCategory === 'all'
                    ? 'bg-brand-dark text-white'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`flex-shrink-0 px-4 py-[7px] rounded-lg text-[13px] font-medium transition-all duration-150 whitespace-nowrap ${
                    activeCategory === category.slug
                      ? 'bg-brand-dark text-white'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex-shrink-0 relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-56 pl-9 pr-8 py-[7px] border border-gray-200 rounded-lg text-[13px] focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Search */}
      <div className="md:hidden border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-5 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-[13px] focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">

        {/* Category Overview — only when All + no search */}
        {activeCategory === 'all' && !searchQuery && (
          <div className="pt-8 pb-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {categories.map(category => {
                const count = getProductsByCategory(category.slug).length
                return (
                  <Link
                    key={category.slug}
                    to={`/products/category/${category.slug}`}
                    className="group flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-brand-gold/40 hover:bg-brand-gold/[0.02] transition-all duration-200"
                  >
                    <div className="min-w-0">
                      <h3 className="text-[13px] font-semibold text-gray-900 group-hover:text-brand-gold transition-colors truncate">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-gray-400 mt-0.5">{count} products</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-brand-gold transition-colors flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex items-center justify-between pt-8 pb-5">
          <h2 className="text-lg font-display font-bold text-gray-900">
            {activeCategory === 'all' ? 'All Products' : activeCategoryData?.name || 'Products'}
          </h2>
          <span className="text-[12px] text-gray-400 font-medium bg-gray-50 px-2.5 py-1 rounded-md">{filteredProducts.length} items</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-28">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-gray-300" />
            </div>
            <h3 className="text-[15px] font-semibold text-gray-700 mb-1">No products found</h3>
            <p className="text-[13px] text-gray-400 mb-6">Try a different search or category.</p>
            <button
              onClick={() => { setSearchQuery(''); handleCategoryChange('all') }}
              className="px-6 py-2.5 bg-brand-gold text-white text-[13px] font-semibold rounded-lg hover:bg-brand-gold-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
