"use client"; // <-- MUST be the first line

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

// ---------- HEADER ----------
export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200 bg-white/40 backdrop-blur-md shadow-md transition-all duration-700
      ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Brand Name */}
        <div
          className="
            text-2xl md:text-3xl font-extrabold cursor-default transition-transform duration-300 
            hover:scale-110 hover:drop-shadow-lg text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 italic font-serif
            hover:drop-shadow-[0_0_15px_rgba(128,0,255,0.8)]
          "
        >
          Harsimar Singh Toor
        </div>

        {/* Navigation */}
        {/* Navigation */}
<nav className="flex gap-3 md:gap-4 text-lg">
  {[
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/experiences", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ].map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="
        px-4 py-1 rounded-full transition-all duration-300 
        hover:scale-105 hover:shadow-lg 
        hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        hover:text-white
        italic font-serif
      "
    >
      {link.label}
    </Link>
  ))}
</nav>

      </div>
    </header>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <footer
      className={`border-t border-gray-200 py-8 flex flex-col items-center justify-center
      bg-white/40 backdrop-blur-md shadow-inner transition-all duration-700
      ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div
        className="
          text-lg font-semibold mb-4 text-center text-transparent bg-clip-text
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          italic font-serif
          hover:drop-shadow-[0_0_15px_rgba(128,0,255,0.8)] transition-all duration-300
        "
      >
        Reach out to me via
      </div>

      <div className="flex gap-6">
        {/* Instagram */}
        <a
          href="https://instagram.com/cmrtoor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white"
        >
          <FaInstagram className="text-xl" />
          <span>Instagram</span>
        </a>

        {/* Facebook */}
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
