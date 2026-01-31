"use client";

import { useEffect, useState } from "react";
import FloatingCircles from "../components/FloatingCircles";

const experienceData = [
  {
    title: "Unit Converter",
    description:
      "A web-based unit conversion tool that converts values such as height and temperature between different measurement systems.",
    year: "2024",
    type: "Academic Project",
    difficulty: "Beginner",
    featured: true,
    link: "https://harsimartoor.github.io/itc-final/conversion/index.html",
    tech: ["HTML", "CSS", "JavaScript"],
    learned: [
      "Learned how basic programming logic works through conditionals and calculations",
      "Improved understanding of how user input is processed and displayed",
      "Strengthened problem-solving and logical thinking skills",
    ],
  },
  {
    title: "Income Tax Calculator",
    description:
      "A Java-based application that calculates income tax based on user-provided income values and predefined tax rules.",
    year: "2025",
    type: "Academic Project",
    difficulty: "Beginner–Intermediate",
    featured: true,
    link: "https://harsimartoor.github.io/itc-final/tax/",
    tech: ["Java", "HTML", "CSS"],
    learned: [
      "Learned how conditional logic is applied in real-world scenarios",
      "Improved understanding of calculations and control flow in Java",
      "Developed confidence in writing structured and readable code",
    ],
  },
  {
    title: "Factorial, Sum & Average Program",
    description:
      "A Java program that calculates the factorial of a number and computes the sum and average of user inputs.",
    year: "2024",
    type: "Practice Project",
    difficulty: "Beginner",
    link: "https://harsimartoor.github.io/itc-final/factorial/index.html",
    tech: ["Java", "Loops", "Algorithms"],
    learned: [
      "Learned how loops work and why they are important in programming",
      "Improved logical thinking when handling repeated calculations",
      "Understood how algorithms solve step-by-step problems",
    ],
  },
  {
    title: "Simple Payroll System",
    description:
      "A basic payroll program that calculates employee salary based on hours worked and pay rate.",
    year: "2024",
    type: "Practice Project",
    difficulty: "Beginner",
    link: "https://harsimartoor.github.io/itc-final/payroll/index.html",
    tech: ["Java", "Conditionals", "Math Logic"],
    learned: [
      "Learned how real-world problems can be translated into code",
      "Improved logical reasoning using conditionals and formulas",
      "Gained confidence in building complete small programs",
    ],
  },
  {
    title: "LeetCode Problem Solving",
    description:
      "Solved multiple beginner-level LeetCode problems focusing on logic building and fundamental programming concepts.",
    year: "2024",
    type: "Algorithm Practice",
    difficulty: "Beginner",
    tech: ["Java", "Logic", "Problem Solving"],
    learned: [
      "Strengthened logical thinking and problem-solving skills",
      "Improved understanding of how code behaves step by step",
      "Developed consistency and patience in solving programming challenges",
    ],
  },
];

export default function Experience() {
  const [mounted, setMounted] = useState(false);
  const [floatOffsets, setFloatOffsets] = useState(
    experienceData.map(() => Math.random() * 10)
  );
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let start = Date.now();
    const animate = () => {
      const t = (Date.now() - start) / 1000;
      setFloatOffsets((prev) =>
        prev.map((_, i) => Math.sin(t + i) * 8)
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <main className="relative w-full flex flex-col items-center px-6 md:px-20 overflow-hidden min-h-[calc(100vh-80px-100px)]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      <div className="z-10 w-full max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Experience & Projects
        </h1>

        <p className="text-lg text-gray-500 mb-12">
          Projects that reflect my learning journey and growth as a Computer Science student.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(item)}
              style={{ transform: `translateY(${floatOffsets[index]}px)` }}
              className={`group relative cursor-pointer backdrop-blur-md bg-white/60 
              border border-gray-200 rounded-2xl p-6 shadow-md 
              transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl 
              hover:border-indigo-400 ${
                item.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* 🔹 NEW: Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-black/40 
              opacity-0 group-hover:opacity-100 transition 
              flex items-center justify-center">
                <span className="text-white font-semibold text-sm tracking-wide">
                  
                </span>
              </div>

              <div className="relative z-10 flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500 text-white">
                  {item.year}
                </span>
              </div>

              <p className="relative z-10 text-gray-600 text-sm mb-4">
                {item.description}
              </p>

              <div className="relative z-10 flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal stays exactly the same */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">
              {activeProject.title}
            </h3>

            <p className="text-gray-600 text-sm mb-3">
              {activeProject.description}
            </p>

            <p className="text-sm text-gray-500 mb-2">
              <strong>Type:</strong> {activeProject.type} ·{" "}
              <strong>Difficulty:</strong> {activeProject.difficulty}
            </p>

            <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
              {activeProject.learned.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>

            {activeProject.link && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mb-3 w-full py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
              >
                View Live Project
              </a>
            )}

            <button
              onClick={() => setActiveProject(null)}
              className="w-full py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
