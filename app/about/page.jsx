// app/about/page.jsx
import FloatingCircles from "../components/FloatingCircles";

export default function About() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden min-h-[calc(100vh-80px-100px)]">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg">
          About me
        </h1>

        <p className="text-lg text-gray-500 text-center mb-12 font-bold">
          This is all you need to know about me!
        </p>
      </div>
    </div>
  );
}
