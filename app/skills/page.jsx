import FloatingCircles from "../components/FloatingCircles";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 65 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Gitttttttttttt", level: 85 },
      { name: "GitHubbbbbb", level: 85 },
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


export default function skills() {
    return (
    <main className="relative w-full flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden min-h-[calc(100vh-80px-100px)]">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg">
          My Skills
        </h1>

        <p className="text-lg text-gray-500 text-center mb-12 font-bold">
          Technologies I use to build clean and functional
          applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {category.title}
              </h2>

              <ul className="space-y-2">
             {category.skills.map((skill, i) => (
              <div key ={i} className = "space-y-1">
                <div className = "flex justify-between text-sm text-gray-500">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className = "w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                  className = "h-full bg-gray-500 rounded-full transition-all duration-500"
                  style = {{width: `${skill.level}%`}} />
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
