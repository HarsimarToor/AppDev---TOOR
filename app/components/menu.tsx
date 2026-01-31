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
        text-2xl md:text-3xl font-extrabold cursor-default
        transition-transform duration-300 hover:scale-105
        text-transparent bg-clip-text
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
         tracking-tight drop-shadow-md
      "
    >
      Harsimar Singh Toor
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/30 backdrop-blur-md shadow-inner transition-all duration-500">
        <div className="flex justify-between items-center px-6 py-3 font-medium">
          {brand}

          {/* Desktop links */}
          <nav className="hidden md:flex gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  px-5 py-2 rounded-full transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  hover:text-white font-sans font-semibold tracking-wide
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-2xl text-gray-700"
            onClick={() => setMobileVisible(!mobileVisible)}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile menu */}
        {isMobile && mobileVisible && (
          <div className="absolute top-full left-0 w-full bg-white/40 backdrop-blur-md shadow-inner flex flex-col gap-2 px-4 py-3 md:hidden transition-all duration-300 rounded-b-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  px-4 py-2 rounded-lg transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  hover:text-white font-sans font-semibold text-center
                "
                onClick={() => setMobileVisible(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Spacer to prevent overlap on mobile */}
      {isMobile && mobileVisible && <div className="h-[44px] md:hidden" />}
    </>
  );
}
