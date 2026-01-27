"use client";

import { useEffect, useState } from "react";
import FloatingCircles from "./components/FloatingCircles";
import Image from "next/image";

export default function Home() {
  const [parallax, setParallax] = useState(0);
  const [floatOffset, setFloatOffset] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Parallax scroll
  useEffect(() => {
    const onScroll = () => {
      setParallax(window.scrollY * 0.15);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Floating animation
  useEffect(() => {
    let start = Date.now();

    const animate = () => {
      const t = (Date.now() - start) / 1000;
      setFloatOffset(Math.sin(t) * 12);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Reveal on load
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 overflow-hidden min-h-[calc(100vh-80px-100px)]">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Left side: text */}
      <div
        className={`md:w-1/2 flex flex-col justify-center z-10 text-center md:text-left md:pr-10
        transition-all duration-1000 ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg tracking-tight">
          I am{" "}
          <span
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            font-  tracking-tight"
          >
            Harsimar Singh
          </span>
        </h1>

        <div className="relative z-10 p-4 md:p-6">
  <p className="text-lg md:text-xl text-gray-600 leading-relaxed drop-shadow mb-9 max-w-xl italic font-serif">
    Based in Davao City, I am currently a 2nd-year Computer Science student
    at Ateneo de Davao University, focused on building modern, high-impact
    web experiences.
  </p>
</div>

      </div>

      {/* Right side: image */}
      <div className="md:w-1/2 flex justify-center z-10">
        <div
          style={{
            transform: `translateY(${parallax + floatOffset}px) scale(${
              mounted ? 1 : 0.95
            })`,
            opacity: mounted ? 1 : 0,
          }}
          className="relative flex-none w-[350px] h-[350px] md:w-[500px] md:h-[500px]
          transition-all duration-1000 ease-out hover:scale-[1.03]"
        >
          {/* Glow halo */}
          <div className="absolute inset-0 rounded-full bg-indigo-400/30 blur-3xl scale-110"></div>

          {/* Image frame */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden 
            border border-white/40
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
          >
            <Image
              src="/fff.jpg"
              alt="Harsimar Singh"
              fill
              sizes="(max-width: 768px) 350px, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
