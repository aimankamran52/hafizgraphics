import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data/siteInfo";

export default function ProductCard({ product }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${WHATSAPP_MESSAGE}\n\nI am interested in: ${product.name}`
  )}`;

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 flex flex-col">
      {product.image && (
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[13px] font-semibold text-gray-900 leading-snug mb-1">
          {product.name}
        </h3>
        {product.shortDescription && (
          <p className="text-[12px] text-gray-400 line-clamp-1 mb-4 flex-1 leading-relaxed">
            {product.shortDescription}
          </p>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-[12px] font-semibold text-brand-gold bg-brand-gold/[0.05] hover:bg-brand-gold hover:text-white transition-all duration-200"
        >
          <MessageCircle size={13} />
          Get Quote
        </a>
      </div>
    </div>
  );
}
