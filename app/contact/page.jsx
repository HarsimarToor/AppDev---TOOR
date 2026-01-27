"use client";

import { useState, useEffect } from "react";
import FloatingCircles from "../components/FloatingCircles";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [floatOffset, setFloatOffset] = useState(0);

  // Mount animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Floating animation
  useEffect(() => {
    let start = Date.now();
    const animate = () => {
      const t = (Date.now() - start) / 1000;
      setFloatOffset(Math.sin(t) * 8);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    console.log(form); // Replace with EmailJS later
    setSuccess(true);
    setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <main className="relative min-h-[calc(100vh-80px-100px)] flex items-center justify-center px-6 md:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Contact Card */}
      <div
        style={{ transform: `translateY(${floatOffset}px)` }}
        className={`z-10 w-full max-w-4xl backdrop-blur-md bg-white/60 border border-gray-200 rounded-3xl p-8 shadow-xl transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-3 drop-shadow-lg">
          Let’s Work Together
        </h1>

        <p className="text-center text-gray-500 mb-8 font-medium">
          For collaborations, internships, freelance work, and job opportunities.
          Have a project in mind? Reach me out ASAP.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            {["name", "email"].map((field, i) => (
              <input
                key={i}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                value={form[field]}
                onChange={handleChange}
                className="p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {["projectType", "budget"].map((field, i) => (
              <input
                key={i}
                type="text"
                name={field}
                placeholder={
                  field === "projectType"
                    ? "Project Type (Website, App...)"
                    : "Estimated Budget"
                }
                value={form[field]}
                onChange={handleChange}
                className="p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-md"
              />
            ))}
          </div>

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 shadow-sm hover:shadow-md resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
          >
            Contact Me
          </button>

          {success && (
            <p className="text-center text-green-600 font-semibold mt-3 animate-pulse">
              Message sent successfully.
            </p>
          )}
        </form>

        {/* Contact info */}
        <div className="mt-10 text-center space-y-2 text-sm text-gray-600 italic">
          <p>Email: harsimarsinghtoor@gmail.com</p>
          <p>Phone: 09534917987</p>
          <p>Instagram: cmrtoor</p>
          <p>Facebook: Harsimar Singh</p>
        </div>
      </div>
    </main>
  );
}
