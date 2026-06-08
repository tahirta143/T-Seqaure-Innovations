"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923254828492?text=Hi%2C%20I%20am%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project%3F"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] group"
    >
      {/* Ping ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.5)] group-hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)] group-hover:scale-110 transition-all duration-300">
        <FaWhatsapp size={28} className="text-white" />
      </span>

      {/* Tooltip label */}
      <span className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
