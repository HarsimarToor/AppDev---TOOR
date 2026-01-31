"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

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
        tracking-tight drop-shadow-sm
      "
    >
      Harsimar Singh Toor
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
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
                  hover:scale-105 hover:shadow-md
                  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  hover:text-white font-semibold tracking-wide
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 text-2xl text-gray-700"
            onClick={() => setMobileVisible((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileVisible ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile slide bar */}
        <div
          className={`
            fixed top-[64px] right-0 w-full h-[60px]
            bg-white shadow-lg md:hidden
            flex items-center justify-center gap-3 px-3
            transition-transform duration-300 ease-out
            ${mobileVisible ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                px-4 py-2 rounded-full transition-all duration-300
                hover:scale-105 hover:shadow-md
                hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                hover:text-white font-semibold text-sm
              "
              onClick={() => setMobileVisible(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
