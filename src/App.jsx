import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Catalogue from './pages/Catalogue'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Corporate from './pages/Corporate'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/category/:categorySlug" element={<Products />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-5xl font-bold text-brand-gold mb-3 font-display">404</p>
        <p className="text-gray-500 text-sm mb-5">Page not found</p>
        <a href="/" className="inline-flex items-center px-6 py-2.5 bg-brand-gold text-white text-sm font-semibold rounded-full hover:bg-brand-gold-dark transition-colors">
          Go Home
        </a>
      </div>
    </div>
  )
}

export default App
