"use client";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full z-50 border-t border-gray-200 py-6 flex flex-col items-center justify-center
      bg-white/40 backdrop-blur-md shadow-inner"
    >
      <div
        className="
        text-lg font-bold mb-4 text-center text-transparent bg-clip-text
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        
      "
      >
        Reach out to me via
      </div>

      <div className="flex gap-6">
        <a
          href="https://instagram.com/cmrtoor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white"
        >
          <FaInstagram className="text-xl" />
          <span>Instagram</span>
        </a>

        <a
          href="https://facebook.com/harsimar.singh.395454"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:text-white"
        >
          <FaFacebook className="text-xl" />
          <span>Facebook</span>
        </a>
      </div>
    </footer>
  );
}
