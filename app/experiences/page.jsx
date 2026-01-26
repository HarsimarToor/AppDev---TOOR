import FloatingCircles from "../components/FloatingCircles";

const experienceData = [
  {
    title: "Basic Calculator Program",
    description:
      "A public website that had a calculator that can do addition, subtraction, multiplication, and division" ,
    tech: ["HTML", "Java", "CSS"],
    year: "2024",
  },
  {
    title: "Income Tax Calculator",
    description:
      "Java application that calculates the income tax",
    tech: ["Java", "HTML", "File CSS"],
    year: "2025",
  },
  {
    title: "Conversion Program",
    description:
      "A program that converts height from meters to feet vice versa and a converts temperature from Kelvin to celsius and vice versa ",
    tech: ["Java", "Algorithms", "Loops"],
    year: "2024",
  },
  {
    title: "Leet code problems",
    description:
      "I have solved multiple leet code problems of easy difficulty",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
];

export default function Experience() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden min-h-[calc(100vh-80px-100px)]">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg">
          Experience & Projects
        </h1>

        <p className="text-lg text-gray-500 text-center mb-12 font-bold">
          Projects and work I have done as a Computer Science student.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <span className="text-sm text-gray-400">{item.year}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700"
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
