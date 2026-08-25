import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';

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
  {
    name: "Ahmed Raza",
    company: "Raza & Associates",
    text: "Letterheads aur envelopes ka design aur print bohat clean aya. Client meetings mein professionally impact parta hai. Thank you Hafiz Graphics.",
    rating: 5,
    category: "Stationery",
  },
  {
    name: "Fatima Noor",
    company: "Bloom Academy",
    text: "Annual function ke liye invitations aur certificates sab ek saath banwaye. Ek hi jagah se sab mil gaya, time bacha aur quality bhi zabardast thi.",
    rating: 5,
    category: "Events",
  },
  {
    name: "Bilal Ahmed",
    company: "Tech Hub Store",
    text: "Product stickers aur packaging labels order kiye the. Finish bohat professional tha aur waterproof bhi hai. Monthly orders ab in se hi hotay hain.",
    rating: 5,
    category: "Labels",
  },
  {
    name: "Sana Malik",
    company: "Sana's Boutique",
    text: "Shopping bags banwaye the boutique ke liye. Logo aur colors exactly waise aaye jaise design mein tha. Customers bhi pasand karte hain.",
    rating: 5,
    category: "Packaging",
  },
  {
    name: "Usman Ghani",
    company: "Ghani Traders",
    text: "Pens, mugs aur t-shirts sab custom banwaye the company ke liye. Bulk mein bhi quality maintain thi. Bohat satisfied hoon.",
    rating: 5,
    category: "Promotional",
  },
  {
    name: "Zainab Iqbal",
    company: "The Food Factory",
    text: "Menu cards aur takeaway packaging dono in se banwayi. Design modern aur clean tha. Ab regularly kaam karwate hain.",
    rating: 5,
    category: "Printing",
  },
  {
    name: "Kamran Ali",
    company: "Pak Vision Electronics",
    text: "Retail shop ke liye standees aur price tags banwaye. Display kaafi attractive ho gaya. Sales mein bhi farq aya.",
    rating: 4,
    category: "Large Format",
  },
  {
    name: "Nadia Parveen",
    company: "Green Valley School",
    text: "School ke liye ID cards, report cards aur banners sab ek saath banwaye. Quality consistent thi aur delivery time bhi par tha.",
    rating: 5,
    category: "Corporate",
  },
  {
    name: "Hassan Javed",
    company: "Elite Events Co.",
    text: "Wedding cards aur event stationery banwayi thi. Design aur print dono top class thay. Family members ne bhi bohat tareef ki.",
    rating: 5,
    category: "Events",
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
    </main>
  );
}
