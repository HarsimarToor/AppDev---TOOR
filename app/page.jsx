import FloatingCircles from "./components/FloatingCircles";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 overflow-hidden min-h-[calc(100vh-80px-100px)]">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Left side: text */}
      <div className="md:w-1/2 flex flex-col justify-center z-10 text-center md:text-left md:pr-10
      ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          I am Harsimar Singh
        </h1>
        <p className="text-lg md:text-xl text-gray-700 drop-shadow mb-9">
          Based in Davao City, I am currently a 2nd-year Computer Science student at Ateneo de Davao University.
        </p>
      </div>

    
      {/* Right side: image */}
      <div className="md:w-1/2 flex justify-center z-10">
        <div className="flex-none w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-gray-300">
          <Image
            src="/fff.jpg"
            alt="Harsimar Singh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}

{
  /*
FONT WEIGHT OPTIONS  
font-thin

font-extralight

font-light

font-normal

font-medium

font-semibold

font-bold

font-extrabold

font-black */
}

{
  /* font size scale
        text-xs

text-sm

text-base

text-lg

text-xl

text-2xl

text-3xl

text-4xl

up to text-9xl */
}
