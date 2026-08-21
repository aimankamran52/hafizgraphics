import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data/siteInfo";

export default function ProductCard({ product }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${WHATSAPP_MESSAGE}\n\nI am interested in: ${product.name}`
  )}`;

  return (
    <div className="product-card-hover bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h3>

        {product.shortDescription && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-1">
            {product.shortDescription}
          </p>
        )}

        {/* Actions */}
        <div className="mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-brand-gold text-brand-dark rounded-lg hover:bg-brand-gold/90 transition-colors text-sm font-medium"
          >
            <MessageCircle size={16} />
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
}
