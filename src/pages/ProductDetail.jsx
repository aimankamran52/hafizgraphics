import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductBySlug, categories, getProductsByCategory } from '../data/products'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/siteInfo'
import ProductCard from '../components/ProductCard'
import { ArrowLeft, MessageCircle, Phone, Ruler, Layers, Printer, FileText, Package, ChevronRight } from 'lucide-react'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <Package className="w-12 h-12 text-gray-200 mx-auto mb-3" />
          <h1 className="text-xl font-display font-bold text-gray-700 mb-1">Product not found</h1>
          <p className="text-sm text-gray-400 mb-5">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-gold text-white text-sm rounded-lg hover:bg-brand-gold-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const category = categories.find(c => c.id === product.categoryId)
  const relatedProducts = category
    ? getProductsByCategory(category.slug).filter(p => p.slug !== product.slug).slice(0, 4)
    : []

  const whatsappMessage = encodeURIComponent(
    `I am interested in ${product.name}. Please share the quotation.`
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  const specIcons = {
    size: Ruler,
    paper: Layers,
    printing: Printer,
    finish: FileText,
  }

  const specColors = {
    size: 'bg-blue-50 text-blue-600',
    paper: 'bg-emerald-50 text-emerald-600',
    printing: 'bg-orange-50 text-orange-600',
    finish: 'bg-purple-50 text-purple-600',
  }

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-5">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 flex-wrap">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-gray-900 transition-colors">Products</Link>
          {category && (
            <>
              <ChevronRight className="w-3 h-3" />
              <Link to={`/products/category/${category.slug}`} className="hover:text-gray-900 transition-colors">
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-700 font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product info */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
        <div className="max-w-2xl">
          {category && (
            <Link
              to={`/products/category/${category.slug}`}
              className="inline-flex items-center gap-1 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3 hover:underline"
            >
              {category.name}
            </Link>
          )}

          <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">
            {product.name}
          </h1>

          {product.shortDescription && (
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {product.shortDescription}
            </p>
          )}

          <div className="flex flex-wrap gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-gold text-white rounded-full text-sm font-semibold hover:bg-brand-gold-dark transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Get a Quote
            </a>
            <a
              href={`tel:${WHATSAPP_NUMBER.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-gray-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
          <div className="bg-brand-light rounded-xl p-5 md:p-6">
            <h2 className="text-base font-bold text-gray-900 font-display mb-4">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => {
                const Icon = specIcons[key] || FileText
                const colorClass = specColors[key] || 'bg-gray-50 text-gray-600'
                return (
                  <div key={key} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 capitalize">{key}</p>
                      <p className="text-sm font-medium text-gray-900">{value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <h2 className="text-lg font-display font-bold text-gray-900 mb-5">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map(rp => (
              <ProductCard key={rp.slug} product={rp} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
