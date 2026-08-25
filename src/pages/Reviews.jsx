import { Link } from 'react-router-dom';
import { Star, MessageCircle, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Asif Mehmood",
    company: "Al-Rehman Traders",
    text: "Hum ne visiting cards banwaye aur bohat achi quality mili. Pehle kisi aur se banwaye the lekin rang ud gaya tha. Yahan se banwaye toh customer bhi impressed ho gaye.",
    rating: 5,
    category: "Stationery",
  },
  {
    name: "Dr. Ayesha Siddiqui",
    company: "City Medical Centre",
    text: "We needed 2000 patient file folders urgently. They finished in 3 days and the quality was exactly what we wanted. Really professional work.",
    rating: 5,
    category: "Corporate",
  },
  {
    name: "Tariq Jamil",
    company: "Apex Builders",
    text: "Banners aur standees banwaye the exhibition ke liye. Print quality bohat sharp thi aur delivery time se pehle ho gayi. Good experience.",
    rating: 5,
    category: "Events",
  },
  {
    name: "Rabia Aslam",
    company: "The Cake Corner",
    text: "Cake boxes aur paper bags ka design aur print dono bohat acha kiya. Customers ab kehte hain packaging dekh ke lagta hai brand hai.",
    rating: 5,
    category: "Packaging",
  },
  {
    name: "Faisal Naveed",
    company: "Pak Systems (Pvt) Ltd",
    text: "For the last 18 months, all our office stationery has been handled by them. Quality is consistent every single time. Very dependable.",
    rating: 5,
    category: "Corporate",
  },
  {
    name: "Imran Shah",
    company: "Lahore Grammar School",
    text: "School annual day ke liye complete branding karwayi — backdrop, banners, invitations, certificates. Bohat organized tarike se sab handle kiya.",
    rating: 5,
    category: "Events",
  },
  {
    name: "Hina Bukhari",
    company: "Spice Route Restaurant",
    text: "Menus aur table tents ka design unhone kiya. Even after 6 months daily use, the menus still look fresh. Definitely recommended.",
    rating: 5,
    category: "Printing",
  },
  {
    name: "Naeem Akhtar",
    company: "Khadim Hussain & Sons",
    text: "We order in bulk every month. Their pricing is competitive especially at higher quantities. The stickers are waterproof just as they promised.",
    rating: 4,
    category: "Corporate",
  },
  {
    name: "Mariam Zulfiqar",
    company: "Green Leaf Organics",
    text: "Product labels banwaye the apni organic product line ke liye. Waterproof aur neat finish aya. I always recommend Hafiz Graphics.",
    rating: 5,
    category: "Packaging",
  },
];

export default function Reviews() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <nav className="mb-6">
            <ol className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li className="text-gray-300">Reviews</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-white font-display mb-2">Customer Reviews</h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            See what our clients say about working with Hafiz Graphics
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {reviews.map((review, index) => (
              <div key={index} className="bg-brand-light rounded-2xl p-6 border border-gray-100/60 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                <span className="inline-block text-[10px] font-semibold bg-brand-gold/[0.08] text-brand-gold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">
                  {review.category}
                </span>
                <p className="text-gray-600 text-[13px] italic leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <div className="border-t border-gray-200/60 pt-3">
                  <p className="text-[13px] font-semibold text-gray-900">{review.name}</p>
                  <p className="text-[11px] text-gray-400">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 text-center">
          <MessageCircle className="w-8 h-8 text-brand-gold mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-display mb-2">
            Share Your Experience
          </h2>
          <p className="text-gray-500 text-[14px] max-w-md mx-auto mb-6">
            We value your feedback. Help us improve and serve you better.
          </p>
          <a
            href="https://wa.me/923318111539?text=I%20would%20like%20to%20share%20my%20feedback%20about%20Hafiz%20Graphics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-semibold text-[13px] px-6 py-3 rounded-full transition-colors shadow-lg shadow-brand-gold/15"
          >
            <MessageCircle className="w-4 h-4" />
            Share Feedback
          </a>
        </div>
      </section>
    </main>
  );
}
