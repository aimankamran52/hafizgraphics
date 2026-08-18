import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "../data/siteInfo";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.054 31.2l6.032-1.968A15.912 15.912 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.316 22.602c-.39 1.1-1.932 2.014-3.17 2.27-.844.176-1.946.314-5.654-1.214-4.746-1.956-7.796-6.764-8.032-7.076-.23-.312-1.882-2.504-1.882-4.776 0-2.27 1.19-3.386 1.612-3.844.39-.426.944-.556 1.256-.556.312 0 .624.002.894.016.29.014.68-.11 1.064.81.39.95 1.334 3.246 1.45 3.484.116.238.2.514.04.826-.16.312-.24.506-.478.78-.238.274-.502.612-.716.82-.238.238-.484.494-.206.922.278.428 1.236 2.04 2.652 3.304 1.822 1.628 3.36 2.134 3.834 2.37.474.236.75.198 1.028-.12.278-.314 1.182-1.376 1.496-1.854.314-.478.628-.398 1.064-.238.436.158 2.776 1.308 3.25 1.548.474.24.79.36.908.556.118.196.118 1.136-.272 2.236Z" />
      </svg>
    </a>
  );
}
