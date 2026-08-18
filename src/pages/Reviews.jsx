import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { Star, Quote, MessageCircle } from 'lucide-react';

const reviews = [
  {
    name: "Ahmed Khan",
    company: "TechCorp Solutions",
    designation: "Marketing Director",
    text: "Excellent quality and professional service. Hafiz Graphics delivered exactly what we needed for our corporate event. The standees and banners were top-notch.",
    rating: 5,
    category: "Corporate",
  },
  {
    name: "Fatima Ali",
    company: "StyleHouse Fashion",
    designation: "Brand Manager",
    text: "We've been working with Hafiz Graphics for over 2 years. Their consistency and quality is unmatched in the market. Highly recommended for all printing needs.",
    rating: 5,
    category: "Branding",
  },
  {
    name: "Muhammad Hassan",
    company: "Global Academy",
    designation: "Operations Head",
    text: "From business cards to event backdrops, they handle everything professionally. Their attention to detail is impressive.",
    rating: 5,
    category: "Events",
  },
  {
    name: "Sara Malik",
    company: "Sweet Treats Bakery",
    designation: "Owner",
    text: "The packaging they designed for our bakery products was stunning. Our customers love the new look. Thank you, Hafiz Graphics!",
    rating: 5,
    category: "Packaging",
  },
  {
    name: "Ali Raza",
    company: "InnovateTech",
    designation: "Admin Manager",
    text: "Fast turnaround time and excellent print quality. They understand corporate requirements perfectly. A reliable partner for businesses.",
    rating: 5,
    category: "Corporate",
  },
  {
    name: "Dr. Nasir Mehmood",
    company: "Punjab Education Board",
    designation: "Director",
    text: "Hafiz Graphics helped us with complete event branding. The stage backdrop and banners were perfect for our annual ceremony.",
    rating: 5,
    category: "Events",
  },
  {
    name: "Omar Farooq",
    company: "Kabab House Restaurant",
    designation: "Chef & Owner",
    text: "Professional team with great attention to detail. Our menu design exceeded expectations. The quality of print is outstanding.",
    rating: 5,
    category: "Printing",
  },
  {
    name: "Zainab Noor",
    company: "Noor Jewellers",
    designation: "Procurement Head",
    text: "They handle all our monthly printing requirements. Reliable and affordable partner for businesses. Their corporate stationery is premium quality.",
    rating: 5,
    category: "Corporate",
  },
  {
    name: "Bilal Ahmed",
    company: "Fresh Bites Restaurant",
    designation: "CEO",
    text: "The social media designs they created really boosted our online presence. Creative team with timely delivery. Will continue working with them.",
    rating: 4,
    category: "Social Media",
  },
];

const ratingBreakdown = [
  { stars: 5, percentage: 85 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 0 },
  { stars: 1, percentage: 0 },
];

function Reviews() {
  const averageRating = 4.9;

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-brand-dark py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(200,169,81,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-8">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-brand-gold">Reviews</li>
            </ol>
          </nav>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our clients say about working with Hafiz Graphics
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Overall Rating" subtitle="What our clients think about us" />
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="text-6xl font-bold text-brand-gold mb-2">{averageRating}</div>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <p className="text-gray-500 mb-8">Based on 50+ Reviews</p>

            <div className="space-y-3">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600 w-12 text-right">{item.stars} Star</span>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-gold rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-10">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Client Testimonials" subtitle="Real feedback from our valued clients" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-gold/20" />
                <span className="inline-block text-xs font-semibold bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full mb-4">
                  {review.category}
                </span>
                <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.designation} at {review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-12 h-12 text-brand-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Share Your Experience
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            We value your feedback. Help us improve and serve you better.
          </p>
          <a
            href="https://wa.me/923001234567?text=I%20would%20like%20to%20share%20my%20feedback%20about%20Hafiz%20Graphics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Share Feedback
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Ready to Experience Our Service?
          </h2>
          <p className="text-brand-dark/80 mb-8">Join hundreds of satisfied clients</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-dark hover:bg-brand-dark/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              to="/portfolio"
              className="bg-white hover:bg-gray-100 text-brand-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Reviews;