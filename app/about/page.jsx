import FloatingCircles from "../components/FloatingCircles";

export default function About() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden min-h-[calc(100vh-80px-100px)]">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center drop-shadow-lg">
          About Me
        </h1>

        <p className="text-lg text-gray-600 text-center mb-12 font-bold">
          A short story about who I am, how I started, and where I am going.
        </p>

        <div className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-8 shadow-md space-y-6">
          <p className="text-gray-700 leading-relaxed">
            My interest in technology started out of pure curiosity. I was
            fascinated by how applications and websites are built, and that
            curiosity pushed me to explore programming on my own. Over time, it
            became more than just interest — it became something I genuinely
            enjoy learning and improving at every day.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Right now, I am focused on growing as a developer, especially in
            modern web technologies like Next.js and Tailwind CSS. I enjoy
            building clean, functional, and creative interfaces while also
            strengthening my foundations in computer science.
          </p>

          <p className="text-gray-700 leading-relaxed">
            What sets me apart is my ability to learn fast and adapt. I have a
            strong sense of creativity and design, and I am comfortable working
            in different roles. Aside from coding, I am also a public speaker, a
            model, and an athlete who plays volleyball, which helps me develop
            confidence, discipline, and teamwork.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Like any student, I face challenges. Mathematics and advanced
            problem-solving can be difficult at times, especially with platforms
            like LeetCode. Instead of avoiding them, I see these as areas I need
            to continuously improve on.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My long-term goal is to secure a high-paying tech role, work
            remotely, and eventually move abroad. More than anything, I value
            growth and change. I don’t want to stay in one place — I want to keep
            learning, evolving, and creating better solutions wherever I go.
          </p>
        </div>
      </div>
    </main>
  );
}
