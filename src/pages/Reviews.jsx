import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { Star, Quote, MessageCircle } from 'lucide-react';

const reviews = [
  {
    name: "Asif Mehmood",
    company: "Al-Rehman Traders",
    designation: "Owner",
    text: "Hum ne visiting cards banwaye aur bohat achi quality mili. Pehle kisi aur se banwaye the lekin rang ud gaya tha. Yahan se banwaye toh customer bhi impressed ho gaye. Ab sari printing yahan se karwata hoon.",
    rating: 5,
    category: "Stationery",
  },
  {
    name: "Dr. Ayesha Siddiqui",
    company: "City Medical Centre",
    designation: "Chief Operating Officer",
    text: "We needed 2000 patient file folders with our hospital branding done urgently. They finished it in 3 days and the quality was exactly what we wanted. Really professional work — our administration team was very happy.",
    rating: 5,
    category: "Corporate",
  },
  {
    name: "Tariq Jamil",
    company: "Apex Builders",
    designation: "Marketing Manager",
    text: "Banners aur standees banwaye the exhibition ke liye. Print quality bohat sharp thi aur delivery time se pehle ho gayi. Sirf ek chota sa revision chahiya tha aur woh bhi foran kar diya. Good experience.",
    rating: 5,
    category: "Events",
  },
  {
    name: "Rabia Aslam",
    company: "The Cake Corner",
    designation: "Owner",
    text: "Cake boxes aur paper bags ka design aur print dono bohat acha kiya. Customers ab kehte hain packaging dekh ke lagta hai brand hai. Pehle simple brown bags use karti thi ab完全不同 hai feel. Thank you Hafiz Graphics!",
    rating: 5,
    category: "Packaging",
  },
  {
    name: "Faisal Naveed",
    company: "Pak Systems (Pvt) Ltd",
    designation: "Admin & HR Director",
    text: "For the last 18 months, all our office stationery — letterheads, envelopes, pads — has been handled by them. Quality is consistent every single time. Invoices are always on point and they never miss a deadline. Very dependable.",
    rating: 5,
    category: "Corporate",
  },
  {
    name: "Imran Shah",
    company: "Lahore Grammar School",
    designation: "Events Coordinator",
    text: "School annual day ke liye complete branding karwayi — backdrop, stage banners, invitation cards, certificates sab unka kaam tha. Bohat organized tarike se sab handle kiya aur result parents ko bohat pasand aaya.",
    rating: 5,
    category: "Events",
  },
  {
    name: "Hina Bukhari",
    company: "Spice Route Restaurant",
    designation: "Manager",
    text: "Menus aur table tents ka design unhone kiya. Print quality bohat achi hai aur food-safe lamination bhi lagwaya. Even after 6 months daily use, the menus still look fresh. Definitely recommended for restaurants.",
    rating: 5,
    category: "Printing",
  },
  {
    name: "Naeem Akhtar",
    company: "Khadim Hussain & Sons",
    designation: "Procurement Manager",
    text: "We order in bulk every month — boxes, labels, stickers for our textile products. Their pricing is competitive especially at higher quantities. The stickers are waterproof just as they promised. Good value for money.",
    rating: 4,
    category: "Corporate",
  },
  {
    name: "Mariam Zulfiqar",
    company: "Green Leaf Organics",
    designation: "Founder",
    text: "Product labels banwaye the apni organic product line ke liye. Waterproof aur neat finish aya. Bohat logo ne poocha kahan se banwaye. I always recommend Hafiz Graphics to fellow business owners.",
    rating: 5,
    category: "Packaging",
  },
];

function Reviews() {
  const averageRating = 4.9;

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-brand-dark py-16 md:py-24 overflow-hidden">
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
          <h1 className="font-display text-3xl md:text-6xl font-bold text-white mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our clients say about working with Hafiz Graphics
          </p>
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
            href="https://wa.me/923318111539?text=I%20would%20like%20to%20share%20my%20feedback%20about%20Hafiz%20Graphics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Share Feedback
          </a>
        </div>
      </section>
    </main>
  );
}

export default Reviews;