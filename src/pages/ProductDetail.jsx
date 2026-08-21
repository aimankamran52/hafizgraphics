import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductBySlug, categories, getProductsByCategory } from '../data/products'
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/siteInfo'
import ProductCard from '../components/ProductCard'
import {
  ArrowLeft, Phone, MessageCircle,
  Package, Ruler, Layers, Printer, FileText, Star, ChevronRight
} from 'lucide-react'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <h1 className="text-3xl font-display font-bold text-gray-700 mb-2">Product not found</h1>
          <p className="text-gray-500 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const category = categories.find(c => c.slug === product.category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.slug !== product.slug)
    .slice(0, 4)

  const whatsappMessage = encodeURIComponent(
    `I am interested in ${product.name}. Please share the quotation.`
  )
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  const contactState = WHATSAPP_MESSAGE
    ? { product: product.name }
    : { product: product.name }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-brand-gold hover:text-yellow-600 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </button>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link to="/products" className="hover:text-brand-gold transition-colors">Products</Link>
          {category && (
            <>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <Link
                to={`/products/category/${category.slug}`}
                className="hover:text-brand-gold transition-colors"
              >
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span className="text-brand-dark font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brand-dark to-brand-navy shadow-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-display font-bold text-brand-gold/30">{product.name.charAt(0)}</span>
                <p className="text-white/40 mt-2 text-sm">{product.name}</p>
              </div>
            </div>
            {product.featured && (
              <div className="absolute top-4 left-4 bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-4 h-4" />
                Featured
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {category && (
              <Link
                to={`/products/category/${category.slug}`}
                className="inline-flex items-center gap-1 text-brand-gold text-sm font-medium mb-3 hover:underline w-fit"
              >
                {category.icon && <span>{category.icon}</span>}
                {category.name}
              </Link>
            )}

            <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
              {product.name}
            </h1>

            {product.shortDescription && (
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.shortDescription}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Link
                to="/contact"
                state={contactState}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-white rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Get a Quote
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-dark text-brand-dark rounded-lg hover:bg-brand-dark hover:text-white transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {product.specs && Object.keys(product.specs).length > 0 && (
        <section className="container mx-auto px-4 py-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-brand-dark mb-6">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.specs.size && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Ruler className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-medium text-brand-dark">{product.specs.size}</p>
                  </div>
                </div>
              )}
              {product.specs.paper && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Paper / Material</p>
                    <p className="font-medium text-brand-dark">{product.specs.paper}</p>
                  </div>
                </div>
              )}
              {product.specs.printing && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Printer className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Printing</p>
                    <p className="font-medium text-brand-dark">{product.specs.printing}</p>
                  </div>
                </div>
              )}
              {product.specs.finish && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Finish</p>
                    <p className="font-medium text-brand-dark">{product.specs.finish}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-display font-bold text-brand-dark mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.slug} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
