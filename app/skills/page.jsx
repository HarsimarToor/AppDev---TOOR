"use client";

import { useEffect, useState } from "react";
import FloatingCircles from "../components/FloatingCircles";

const skillsData = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      {
        name: "HTML",
        level: 50,
        icon: "🌐",
        caption: "Used to structure all my web projects.",
      },
      {
        name: "CSS",
        level: 75,
        icon: "🎨",
        caption: "Comfortable with layouts, animations, and responsiveness.",
        primary: true,
      },
      {
        name: "JavaScript",
        level: 30,
        icon: "⚡",
        caption: "Used for DOM manipulation and basic application logic.",
        primary: true,
      },
      {
        name: "React",
        level: 30,
        icon: "⚛️",
        caption: "Building component-based UIs and managing state.",
      },
      {
        name: "Next.js",
        level: 20,
        icon: "➡️",
        caption: "Learning routing, layouts, and server-side rendering.",
      },
      {
        name: "Tailwind",
        level: 30,
        icon: "💨",
        caption: "Utility-first CSS for rapid and consistent UI development.",
      },
    ],
  },
  {
    title: "Backend",
    description: "Handling data, servers, and application logic.",
    skills: [
      {
        name: "Node.js",
        level: 40,
        icon: "🟢",
        caption: "Basic backend logic and API handling.",
      },
      {
        name: "Express",
        level: 10,
        icon: "🚀",
        caption: "Learning to structure backend routes and middleware.",
      },
      {
        name: "MongoDB",
        level: 10,
        icon: "🍃",
        caption: "Basic document-based data storage concepts.",
      },
      {
        name: "MySQL",
        level: 50,
        icon: "🗄️",
        caption: "Relational database queries and schema design.",
        primary: true,
      },
    ],
  },
  {
    title: "Tools",
    description: "Development tools and workflows I use daily.",
    skills: [
      {
        name: "Git",
        level: 30,
        icon: "🔧",
        caption: "Version control for managing code changes.",
      },
      {
        name: "GitHub",
        level: 85,
        icon: "🐙",
        caption: "Hosting repositories and collaborating on projects.",
        primary: true,
      },
      {
        name: "Figma",
        level: 20,
        icon: "🎯",
        caption: "Basic UI wireframing and design reference.",
      },
      {
        name: "VS Code",
        level: 90,
        icon: "🧠",
        caption: "Primary code editor with extensions and shortcuts.",
        primary: true,
      },
    ],
  },
  {
    title: "Spoken Languages",
    description: "Languages I can communicate in.",
    skills: [
      { name: "English", level: 99, icon: "🇬🇧", caption: "Fluent" },
      { name: "Filipino", level: 80, icon: "🇵🇭", caption: "Conversational" },
      { name: "Cebuano", level: 70, icon: "🗣️", caption: "Conversational" },
      { name: "Punjabi", level: 99, icon: "🇮🇳", caption: "Native" },
      { name: "Hindi", level: 90, icon: "🇮🇳", caption: "Fluent" },
    ],
  },
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);
  const [floatOffsets, setFloatOffsets] = useState(
    skillsData.map(() => Math.random() * 10)
  );
  const [activeSkill, setActiveSkill] = useState(null);

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
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My Skills
        </h1>

        <p
          className={`text-lg text-gray-500 mb-12 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Technologies and tools I use to build clean, functional applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              style={{ transform: `translateY(${floatOffsets[index]}px)` }}
              className={`backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-700 ${
                mounted ? "opacity-100" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">
                {category.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {category.description}
              </p>

              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSkill(skill)}
                    className="w-full text-left space-y-1 transition-transform duration-300 hover:scale-[1.03]"
                  >
                    <div className="flex justify-between text-sm text-gray-600 font-medium">
                      <span className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}
                        {skill.primary && (
                          <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">
                            Primary
                          </span>
                        )}
                      </span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          skill.primary
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                            : "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                        }`}
                        style={{
                          width: mounted ? `${skill.level}%` : "0%",
                          transitionDelay: `${i * 120}ms`,
                        }}
                      />
                    </div>
                  </button>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-2">Currently Learning</h2>
          <p className="text-gray-500">
            React.js · Next.js · Tailwind CSS
          </p>
        </div>
      </div>

      {activeSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              {activeSkill.icon} {activeSkill.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {activeSkill.caption}
            </p>
            <button
              onClick={() => setActiveSkill(null)}
              className="w-full py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
