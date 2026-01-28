"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [mobileVisible, setMobileVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/experiences", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const brand = (
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
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/40 backdrop-blur-md shadow-inner transition-all duration-500">
        <div className="flex justify-between items-center px-4 py-2 font-bold">
          {brand}

          {/* Desktop links */}
          <nav className="hidden md:flex gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  px-4 py-1 rounded-full transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  hover:text-white italic font-serif
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-xl"
            onClick={() => setMobileVisible(!mobileVisible)}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile horizontal menu */}
        {isMobile && mobileVisible && (
          <div className="absolute top-full left-0 w-full bg-white/40 backdrop-blur-md shadow-inner flex justify-center gap-2 px-2 py-1 md:hidden transition-all duration-300">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  px-3 py-1 rounded-full transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  hover:text-white italic font-serif
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Add minimal spacer to prevent overlapping page content */}
      {isMobile && mobileVisible && <div className="h-[32px] md:hidden" />}
    </>
  );
}
