"use client";

import { useState } from "react";
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    console.log(form); // later goes to EmailJS

    setSuccess(true);
    setForm({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <main className="relative min-h-[calc(100vh-80px-100px)] flex items-center justify-center px-6 md:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-4xl backdrop-blur-md bg-white/60 border border-gray-200 rounded-3xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-3">
          Let’s Work Together
        </h1>

        <p className="text-center text-gray-500 mb-8 font-medium">
          For collaborations, internships, freelance work, and job opportunities.
          Have a project in mind? Reach me out ASAP.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded-xl border outline-none focus:ring-2 focus:ring-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-xl border outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="projectType"
              placeholder="Project Type (Website, App, Design...)"
              value={form.projectType}
              onChange={handleChange}
              className="p-3 rounded-xl border outline-none focus:ring-2 focus:ring-gray-400"
            />

            <input
              type="text"
              name="budget"
              placeholder="Estimated Budget"
              value={form.budget}
              onChange={handleChange}
              className="p-3 rounded-xl border outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-gray-400 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Contact Me
          </button>

          {success && (
            <p className="text-center text-green-600 font-semibold mt-3">
              Message sent successfully.
            </p>
          )}
        </form>

        <div className="mt-10 text-center space-y-2 text-sm text-gray-600">
          <p>Email: harsimarsinghtoor@gmail.com</p>
          <p>Phone: 09534917987</p>
          <p>Instagram: cmrtoor</p>
          <p>Facebook: Harsimar Singh</p>
        </div>
      </div>
    </main>
  );
}
