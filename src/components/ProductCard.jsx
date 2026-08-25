import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data/siteInfo";

export default function ProductCard({ product }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${WHATSAPP_MESSAGE}\n\nI am interested in: ${product.name}`
  )}`;

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all duration-200 flex flex-col">
      {product.image && (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
          {product.name}
        </h3>

        {product.shortDescription && (
          <p className="text-sm text-gray-400 mb-4 line-clamp-1 flex-1 leading-relaxed">
            {product.shortDescription}
          </p>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-brand-gold hover:text-brand-gold transition-colors"
        >
          <MessageCircle size={15} />
          Get Quote
        </a>
      </div>
    </div>
  );
}
