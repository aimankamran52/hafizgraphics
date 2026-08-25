import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data/siteInfo";

export default function ProductCard({ product }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${WHATSAPP_MESSAGE}\n\nI am interested in: ${product.name}`
  )}`;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200/80 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
      {product.image && (
        <div className="relative h-[220px] overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[14px] font-semibold text-gray-900 mb-1 leading-snug">
          {product.name}
        </h3>
        {product.shortDescription && (
          <p className="text-[13px] text-gray-400 mb-5 line-clamp-1 flex-1 leading-relaxed">
            {product.shortDescription}
          </p>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200/80 rounded-xl text-[13px] font-medium text-gray-600 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/[0.02] transition-all duration-200"
        >
          <MessageCircle size={14} />
          Get Quote
        </a>
      </div>
    </div>
  );
}
