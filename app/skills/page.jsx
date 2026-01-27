"use client";

import { useEffect, useState } from "react";
import FloatingCircles from "../components/FloatingCircles";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind", level: 90 },
      { name: "Java", level: 60 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "English", level: 95 },
      { name: "Filipino", level: 90 },
      { name: "Cebuano", level: 90 },
      { name: "Punjabi", level: 85 },
      { name: "Hindi", level: 80 },
    ],
  },
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const [floatOffsets, setFloatOffsets] = useState(
    skillsData.map(() => Math.random() * 10)
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
          My Skills
        </h1>

        <p
          className={`text-lg text-gray-500 mb-12 font-semibold transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Technologies I use to build clean and functional applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              style={{
                transform: `translateY(${floatOffsets[index]}px)`,
              }}
              className={`backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
                mounted ? "opacity-100" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 italic font-serif drop-shadow-sm">
                {category.title}
              </h2>

              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm text-gray-500 font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: mounted ? `${skill.level}%` : `0%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
