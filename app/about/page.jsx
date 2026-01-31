"use client";

import { useEffect, useState } from "react";
import FloatingCircles from "../components/FloatingCircles";

// Timeline journey with storytelling text
const journey = [
  {
    year: "2019",
    title: "Foundations & Curiosity",
    description:
      "It all started with curiosity. I wanted to understand how websites and apps worked, spending hours experimenting and building tiny projects that sparked my passion for coding.",
  },
  {
    year: "2021",
    title: "Applied Learning Through Projects",
    description:
      "By building my first apps and websites using HTML, CSS, and JavaScript, I transformed curiosity into hands-on experience. Every project, no matter how small, strengthened my skills and confidence.",
  },
  {
    year: "2023",
    title: "Modern Frontend Specialization",
    description:
      "I dove deep into modern web frameworks like React, Next.js, and Tailwind CSS, crafting interfaces that are both functional and visually appealing. This phase shaped me into a developer who values clean and user-friendly design.",
  },
  {
    year: "2025",
    title: "Technical Depth & Problem Solving",
    description:
      "I focused on problem-solving, algorithms, and building real-world applications. Tackling challenges like LeetCode sharpened my logic and resilience, preparing me for professional projects.",
  },
  {
    year: "Future",
    title: "Ambitions & Goals",
    description:
      "I aspire to secure a high-impact tech role, work remotely, and continue evolving. My goal is to create solutions that leave a meaningful impact while constantly learning and growing.",
  },
];

// Highlights section
const highlights = [
  {
    label: "Modeling Portfolio - Click me",
    emoji: "📸",
    type: "image",
    src: "/ttt.jpg",
    description: "Selected shoots, brand work, and portfolio pieces.",
  },
  {
    label: "Gym Transformation - Click me",
    emoji: "🏋️",
    type: "video",
    src: "/rrr.mp4",
    description: "Physical transformation showing discipline and consistency.",
  },
];

// Tech Stack
const techStack = ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"];

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [floatOffsets, setFloatOffsets] = useState(journey.map(() => Math.random() * 2));
  const [modal, setModal] = useState({ open: false, content: null, type: null });

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Floating animation
  useEffect(() => {
    let start = Date.now();
    const animate = () => {
      const t = (Date.now() - start) / 1000;
      setFloatOffsets((prev) => prev.map(() => Math.sin(t) * 50));
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

      <div className="z-10 w-full max-w-5xl text-center">
        {/* Title */}
        <h1
          className={`text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About Me
        </h1>

        {/* Who I Am paragraph */}
        <p
          className={`max-w-3xl mx-auto text-gray-600 leading-relaxed mb-14 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I’m a student passionate about coding, fitness, modeling, reading books, and trading. I enjoy
          building web experiences, pushing myself physically, and constantly learning new skills
          that help me grow as a professional and as a person.
        </p>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {journey.map((step, index) => {
            // 5th card full-width
            const isLast = index === journey.length - 1;
            return (
              <div
                key={index}
                style={{ transform: `translateY(${floatOffsets[index]}px)` }}
                className={`backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-md transform transition-all duration-500 hover:scale-125 hover:-translate-y-3 hover:shadow-2xl ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${isLast ? "md:col-span-2" : ""}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold italic font-serif drop-shadow-sm">{step.title}</h2>
                  <span className="text-sm px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
                    {step.year}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group backdrop-blur-md bg-white/50 border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-2xl hover:scale-150 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              onClick={() => setModal({ open: true, content: item.src, type: item.type })}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-gray-800 font-semibold group-hover:text-indigo-600 transition">
                  {item.label}
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-md mb-16">
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 text-sm justify-center">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <p className="italic text-gray-500 mb-16">“Consistency beats motivation.”</p>
      </div>

      {/* Modal for Video/Image */}
      {modal.open && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setModal({ open: false, content: null, type: null })}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-lg w-full max-h-[90vh] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {modal.type === "image" ? (
              <img src={modal.content} alt="highlight" className="w-full h-auto object-cover" />
            ) : (
              <video controls autoPlay className="w-full h-auto max-h-[90vh]">
                <source src={modal.content} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
