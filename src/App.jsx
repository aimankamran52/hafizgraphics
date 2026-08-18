import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Catalogue from './pages/Catalogue'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
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
          <Route path="products/:categorySlug" element={<Products />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
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
        <h1 className="text-6xl font-bold text-brand-gold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page Not Found</p>
        <a href="/" className="bg-brand-gold text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-brand-gold-dark transition-colors">
          Go Home
        </a>
      </div>
    </div>
  )
}

export default App
