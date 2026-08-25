import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, products, getProductsByCategory } from '../data/products'
import { Search, ChevronRight, X } from 'lucide-react'

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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark py-8 md:py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
            Our Products
          </h1>
          <p className="text-gray-400 text-sm mb-4">
            Printing, designing, branding and promotional solutions
          </p>
          <nav className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300">Products</span>
            {activeCategoryData && (
              <>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-brand-gold">{activeCategoryData.name}</span>
              </>
            )}
          </nav>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
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
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.slug
                    ? 'bg-brand-dark text-white'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="max-w-sm mb-6 md:mb-8 ml-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all bg-gray-50 focus:bg-white"
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

        {/* Category overview on 'all' */}
        {activeCategory === 'all' && !searchQuery && (
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {categories.map(category => {
                const count = getProductsByCategory(category.slug).length
                return (
                  <Link
                    key={category.slug}
                    to={`/products/category/${category.slug}`}
                    className="group flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-brand-gold/30 transition-colors"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-gold transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">{count} products</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-brand-gold transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Products */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <h2 className="text-lg font-display font-bold text-gray-900">
              {activeCategory === 'all' ? 'All Products' : activeCategoryData?.name || 'Products'}
            </h2>
            <span className="text-xs text-gray-400">{filteredProducts.length} items</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {filteredProducts.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-10 h-10 text-gray-200 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-gray-700 mb-1">No products found</h3>
              <p className="text-sm text-gray-400 mb-5">Try a different search or category.</p>
              <button
                onClick={() => { setSearchQuery(''); handleCategoryChange('all') }}
                className="px-5 py-2 bg-brand-gold text-white text-sm rounded-lg hover:bg-brand-gold-dark transition-colors"
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
