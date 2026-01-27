"use client";

import { useEffect, useState } from "react";
import FloatingCircles from "../components/FloatingCircles";

const journey = [
  {
    year: "2019",
    title: "Curiosity Sparked",
    description:
      "I became fascinated by how websites and applications work. This curiosity led me to explore programming on my own.",
  },
  {
    year: "2021",
    title: "First Projects",
    description:
      "Started building small apps and websites, learning HTML, CSS, and JavaScript. Every project boosted my confidence and skills.",
  },
  {
    year: "2023",
    title: "Deep Dive Into Web Development",
    description:
      "Focused on mastering modern web frameworks like React, Next.js, and Tailwind CSS. Started creating clean, functional, and visually appealing interfaces.",
  },
  {
    year: "2025",
    title: "Continuous Growth",
    description:
      "Improving problem-solving, algorithms, and building real-world projects. Embracing challenges like LeetCode to grow as a developer.",
  },
  {
    year: "Future",
    title: "Ambitions & Goals",
    description:
      "Aspire to secure a high-paying tech role, work remotely, and continue learning, evolving, and creating impactful solutions.",
  },
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [floatOffsets, setFloatOffsets] = useState(journey.map(() => Math.random() * 10));

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Floating animation for timeline cards
  useEffect(() => {
    let start = Date.now();
    const animate = () => {
      const t = (Date.now() - start) / 1000;
      setFloatOffsets((prev) => prev.map((offset, i) => Math.sin(t + i) * 8));
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <main className="relative w-full flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden min-h-[calc(100vh-80px-100px)]">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-4xl text-center">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About Me
        </h1>

        <p
          className={`text-lg text-gray-500 mb-12 font-semibold transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My journey as a developer, athlete, and lifelong learner.
        </p>

        {/* Timeline / Journey */}
        <div className="flex flex-col gap-8 relative">
          {journey.map((step, index) => (
            <div
              key={index}
              style={{ transform: `translateY(${floatOffsets[index]}px)` }}
              className={`backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-md transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                mounted ? "opacity-100" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold italic font-serif drop-shadow-sm">
                  {step.title}
                </h2>
                <span className="text-sm px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
                  {step.year}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Hobbies / Fun Facts Section */}
        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 ${
            mounted ? "opacity-100" : "opacity-0 translate-y-8"
          } transition-all duration-1000`}
        >
          {[
            { label: "Gym transformation", emoji: "🏋️" },
            { label: "Modeling", emoji: "📸" },
            { label: "Volleyball", emoji: "🏐" },
            { label: "Learning New Tech", emoji: "💻" },
          ].map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-md bg-white/50 border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500"
            >
              <span className="text-2xl">{item.emoji}</span>
              <p className="mt-2 text-gray-700 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
