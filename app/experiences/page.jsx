"use client";

import { useEffect, useState } from "react";
import FloatingCircles from "../components/FloatingCircles";

const experienceData = [
  {
    title: "Basic Calculator Program",
    description:
      "A public website with a calculator that can do addition, subtraction, multiplication, and division",
    tech: ["HTML", "Java", "CSS"],
    year: "2024",
  },
  {
    title: "Income Tax Calculator",
    description: "Java application that calculates the income tax",
    tech: ["Java", "HTML", "CSS"],
    year: "2025",
  },
  {
    title: "Conversion Program",
    description:
      "Converts height from meters to feet and temperature from Kelvin to Celsius, vice versa",
    tech: ["Java", "Algorithms", "Loops"],
    year: "2024",
  },
  {
    title: "Leet Code Problems",
    description: "Solved multiple LeetCode problems of easy difficulty",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
];

export default function Experience() {
  const [mounted, setMounted] = useState(false);
  const [floatOffsets, setFloatOffsets] = useState(
    experienceData.map(() => Math.random() * 10)
  );

  // Reveal page on mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Floating animation for cards
  useEffect(() => {
    let start = Date.now();

    const animate = () => {
      const t = (Date.now() - start) / 1000;
      setFloatOffsets((prev) =>
        prev.map((offset, i) => Math.sin(t + i) * 8)
      );
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
      <div className="z-10 w-full max-w-6xl text-center">
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Experience & Projects
        </h1>

        <p
          className={`text-lg text-gray-500 mb-12 font-semibold transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Projects and work I have done as a Computer Science student.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              style={{
                transform: `translateY(${floatOffsets[index]}px)`,
              }}
              className={`backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-md transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
                mounted ? "opacity-100" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold italic font-serif drop-shadow-sm">
                  {item.title}
                </h2>
                <span className="text-sm px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
                  {item.year}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-semibold drop-shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
